// attribute_tracker.js

// option
const at_setting = {
	// 변경을 감지할 속성을 목록 형태로 지정합니다.
	// 다른 룰의 샘플리스트: https://github.com/kibkibe/roll20-api-scripts/tree/master/attribute_tracker/check_list_sample
	check_list: [
	{attr: "Magic_*id*_Charge", name: "Magic_*id*_Name", is_static_name: false, is_static_attr: false},
	{attr: "repeating_acitems_-*id*_Magic_Charge", name: "repeating_acitems_-*id*_Magic_Name", is_static_name: false, is_static_attr: false},
	{attr: "Magic_*id*_Cost", name: "Magic_*id*_Name", is_static_name: false, is_static_attr: false},
	{attr: "repeating_acitems_-*id*_Magic_Cost", name: "repeating_acitems_-*id*_Magic_Name", is_static_name: false, is_static_attr: false},
	{attr: "relation_fate_*id*", name: "relation_name_*id*", is_static_name: false, is_static_attr: false},
	{attr: "atk", name: "공격력", is_static_name: true, is_static_attr: true},
	{attr: "def", name: "방어력", is_static_name: true, is_static_attr: true},
	{attr: "bas", name: "근원력", is_static_name: true, is_static_attr: true},
	{attr: "mp", name: "마력", is_static_name: true, is_static_attr: true},
	{attr: "temp_mp", name: "일시적 마력", is_static_name: true, is_static_attr: true},
	{attr: "mp_max", name: "최대마력", is_static_name: true, is_static_attr: true}],
	// 필수적으로 변화를 체크할 캐릭터의 이름을 기입합니다.
	// 이 값은 ignore_list보다 우선됩니다. (복수입력시 콤마(,)로 구분)
	prior_list: "",
	// 로그 표시에서 제외할 캐릭터의 이름을 기입합니다. (복수입력시 콤마(,)로 구분)
	// "GM"을 넣으면 GM에게만 조작권한이 있는 모든 캐릭터를 일괄적으로 제외합니다.
	ignore_list: "GM"};
	
	
	
	//on ready 
	on('ready', function() {
		if (!state.show_tracking) {
			state.show_tracking = true;
		}
		state.new_character = [];
		on("add:character",function(obj) {
			state.new_character.push({id:obj._id, time: Date.now()});
		});
		on("add:attribute", function(obj) {
			const now = Date.now();
			const interval = 3000;
			let check = true;
			for (let index = 0; index < state.new_character.length; index++) {
				const element = state.new_character[index];
				if (obj._id == element.id) {
					if (now - element.time > interval) {
						state.new_character.splice(index,1);
					} else {
						check = false;
					}
					break;
				}
			}
			if (check) {
				check_attribute(obj, null);
			}
		});
	});
	
	
	//on chat 
	on("chat:message", function(msg) {
	
	
	if (msg.type == "api"){
		if (msg.content.indexOf("!at ") === 0 && (msg.playerid == 'API' || playerIsGM(msg.playerid))) {
			if (msg.content.toLowerCase().includes('hide')) {
				state.show_tracking = false;
			} else if (msg.content.toLowerCase().includes('show')) {
				state.show_tracking = true;
			}
		}
		
	
	
	
	}
	});
	
	
	//on change attribute
	on("change:attribute", function(obj, prev) {
		check_attribute(obj, prev);
	});
	
	