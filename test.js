// (as_autofiller.js) 210306
// (as_switcher.js) 210306
// (attribute_tracker.js) 210306
// (choice.js) 210306
// (flip_card.js) 210306
// (token_utility.js) 210306
// (jukebox_amplifier.js) 210128
// (narrator.js) 210306
// (ruby_character.js) 210306
// (smallchat.js) 210306
// (smallchat_split.js) 210306
// (temporary_chat.js) 210306
// (token_scripter.js) 210306
// (visual_dialogue.js) 210306
// (magicalogia_install_magic.js) 210306
// (magicalogia_mana_token.js) 210306
// (magicalogia_match_dice.js) 210306
// (magicalogia_summon.js) 210306
// (avatar_setter.js) 210310

// option
const aa_setting = {
	// 토큰을 선택하지 않고 명령어를 사용했을 때 기본적으로 표시될 캐릭터의 이름을 설정합니다.
	master_name: "GM",
	// 플레이어에게 권한이 있는 캐릭터도 자동선택의 대상에 포함할지(true) 제외할지(false) 설정합니다.
	use_to_playable_character: false};
	const as_setting = {
	// 토큰을 선택하지 않고 명령어를 사용했을 때 기본적으로 표시될 캐릭터의 이름을 기입해주세요.
	master_name: "GM"};
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
	const gi_setting = {
	// 강조표시에 사용할 색상을 설정합니다.
	aura_color: "#FFFF99"};
	const nt_setting = {
	// 대화를 표시하는 시간 간격을 조절합니다. 밀리초 단위로서 1000 = 1초입니다.
	interval: 3000};
	const sc_setting = {
	// show_player_name을 true로 설정하시면 플레이어 As로, false로 설정하시면 선택되어 있는 As를 유지한 채 잡담을 합니다.
	show_player_name: true};
	let ss_setting = {
	// 채팅창의 글씨크기를 지정합니다.
	font_size: 14,
	// 채팅창의 글씨색을 지정합니다.
	color: "rgb(255, 255, 255)",
	// 채팅창의 상하좌우 여백을 설정합니다.
	margin: 5,
	// 채팅로그에 플레이어/PC 중 어느쪽 이름을 표시할지 지정합니다. (true:플레이어/false:PC)
	show_player_name: false,
	// 잡담 내역을 저장할 핸드아웃의 이름을 지정합니다.
	logname: "(잡담로그)",
	// 세션화면 안에 채팅창을 만들지 않고자 할 경우 실시간 채팅을 표시할 별도의 핸드아웃의 이름을 지정합니다.
	onair_name: "(실시간 잡담채팅)",
	// 실시간 채팅용 핸드아웃에서 최신순으로 몇개까지 채팅을 표시할지를 지정합니다.
	onair_lines: 15,
	// 핸드아웃에 저장되는 채팅로그에 플레이어의 고유색상을 적용할지의 여부를 설정합니다
	// 0: 사용안함 / 1: 이름만 컬러 / 2: 채팅까지 컬러
	use_personal_color: 1,
	// 핸드아웃에 표시하는 채팅시각의 표준시간대를 지정합니다. 기본값은 KST(UTC+9)입니다.
	timezone: 9,
	// (고급설정) 각 열이 간격이 font_size 대비 얼마만큼의 픽셀을 차지하는지의 비율을 지정합니다.
	lineheight: 1.7,
	// (고급설정) 각 글자가 font_size 대비 얼마만큼의 픽셀을 차지하는지의 비율을 지정합니다.
	letterspacing: 0.95};
	const tc_setting = {
	// true로 설정하시면 플레이어 As로, false로 설정하시면 선택되어 있는 As를 유지한 채 임시채팅을 합니다.
	show_player_name: true};
	const ts_setting = {
	// 마커토큰이 영역토큰과 약간 어긋나도 인식되도록 오차범위(픽셀단위)를 설정합니다. 숫자가 작을수록 정확하고 엄격하게 판정합니다.
	margin: 10,
	// 메시지를 표시할 때 사용할 기본 캐릭터를 설정합니다. 공백으로 설정시 채팅에 이름을 표시하지 않습니다.
	default_character: "GM"};
	const vd_setting = {
	// 한 화면에 표시할 수 있는 스탠딩 이미지의 최대 개수를 설정합니다.
	// 이 숫자를 넘어가면 엑스트라, 혹은 채팅기록이 가장 오래된 캐릭터의 스탠딩이 삭제되고 그 위치에 새 스탠딩이 추가됩니다.
	max_number: 5,
	// 표시할 스탠딩 이미지들의 가로 사이즈입니다.
	width: 420,
	// 표시할 스탠딩 이미지들의 세로 사이즈입니다.
	height: 420,
	// 스탠딩 이미지의 가로 너비 중 화면 밖으로 빠져나가지 않도록 보장할 가로 사이즈입니다.
	fit_width: 200,
	// 캐릭터들이 여러 감정표현을 사용할지(true) 대표 스탠딩 하나만 사용할지(false) 설정합니다.
	// false일 경우 deck_name에 설정한 카드 덱에서 모든 캐릭터의 스탠딩 이미지를 가져옵니다.
	use_emotion: true,
	// /as를 이용해 저널에 없는 캐릭터로 채팅할 경우 엑스트라 전용 스탠딩을 표시할지 (true) 스탠딩을 생략할지(false) 설정합니다.
	// true일 경우 extra_name에 설정한 이름에 따라 엑스트라용 스탠딩을 가져옵니다.
	show_extra_standing: true,
	// use_emotion가 false일 경우에 캐릭터의 스탠딩 이미지를 가져올 카드덱의 이름을 설정합니다.
	deck_name: "standings",
	// use_emotion이 true일 경우에 엑스트라용 스탠딩 이미지를 가져올 카드덱의 이름을 설정합니다.
	extra_name: "extra",
	// show_extra_standing 옵션과 별개로 스탠딩을 표시하지 않을 캐릭터의 이름을 기입합니다. 여러개일 경우 콤마(,)로 구분합니다.
	ignore_list: "GM",
	// 스크립트를 사용할 페이지의 이름을 지정합니다. 여러개일 경우 콤마(,)로 구분합니다.
	// 페이지가 여럿일 경우 Player 북마크가 설정된 페이지에 우선적으로 대사가 표시됩니다.
	page_list: "conversation,intro",
	// 캐릭터의 이름이 표시되는 텍스트 박스의 폰트 사이즈를 설정합니다.
	name_font_size: 18,
	// 캐릭터 이름의 글씨색을 설정합니다.
	name_font_color: "rgb(255, 255, 255)",
	// 대사 내용이 표시되는 텍스트 박스의 폰트 사이즈를 설정합니다.
	dialogue_font_size: 16,
	// 대사 내용의 글씨색을 설정합니다.
	dialogue_font_color: "rgb(255, 255, 255)",
	// /desc나 /em으로 표시되는 강조된 텍스트 박스의 폰트 사이즈를 설정합니다.
	desc_font_size: 20,
	// /desc, /em의 글씨색을 설정합니다.
	desc_font_color: "rgb(255, 255, 255)",
	// 한번에 여러 채팅이 몰려서 순차적으로 표시해야 할 경우 채팅당 최소 노출시간을 설정합니다. (1000=1초)
	min_showtime: 1000,
	// 채팅 1글자당 표시 시간. 숫자가 커질수록 글자수 대비 대사의 표시시간이 길어집니다.
	showtime_ratio: 20,
	// (고급설정) 각 열이 간격이 font_size 대비 얼마만큼의 픽셀을 차지하는지의 비율을 지정합니다.
	line_height: 1.7,
	// (고급설정) 각 글자가 font_size 대비 얼마만큼의 픽셀을 차지하는지의 비율을 지정합니다.
	letter_spacing: 0.85};
	const mt_setting = {
	// 사용할 마소 속성 리스트를 지정합니다.
	area_list: ['별','짐승','힘','노래','꿈','어둠','전체'],
	// 토큰을 생성할 페이지의 이름을 지정합니다. 여러곳에서 사용할 경우 콤마(,)로 구분해서 입력합니다.
	// 페이지가 여럿일 경우 Player 북마크가 설정된 페이지에 우선적으로 생성됩니다.
	page_list: "spellbound",
	// 영역별로 속성을 나타내는 아이콘 하나만 사용하는지(true) 마소 개수에 따라 여러개 사용하는지(false)를 지정합니다.
	use_single_icon: false,
	// 장서의 아이콘이 한 아이콘으로 고정되는지(true) 마소 충전 상태에 따라 바뀌는지 (false)를 지정합니다.
	// (이 값은 use_single_icon이 false일 때만 유효합니다.)
	use_static_icon: false,
	// 마소 아이콘을 속성당 하나만 사용할 경우, 모든 속성의 아이콘을 모아놓은 Rollable table의 이름을 지정합니다.
	// (이 값은 user_single_icon이 true일 때만 유효합니다.)
	collection_name: '마소',
	// 생성된 장서 토큰에 이름을 표시할지를 지정합니다. (true:표시/false:숨김)
	show_name: true,
	// 생성된 장서 토큰에 충전상태를 나타내는 Bar를 표시할지를 지정합니다. (true:표시/false:숨김)
	show_bar: false,
	// 기본 아이콘으로 사용할 롤러블 테이블 이름을 지정합니다. (코스트가 없는 경우 등)
	default_area: '전체',
	// 페이지 격자의 가로/세로 크기입니다.
	size: 70};
	let md_setting = {
	// 다이스를 플롯 시에 자동배치 기능을 사용할지(true) 사용하지 않을지(false)의 여부를 설정합니다.
	use_snap_dice: true,
	// 대표 주사위의 표시 스타일(CSS)을 설정합니다.
	style_delegate: "width:40px;height:40px;",
	// 입회인 주사위의 표시 스타일(CSS)을 설정합니다.
	style_observer: "width:30px;height:30px;",
	// 대표/입회인 주사위 중 상쇄되어 파괴된 주사위의 표시 스타일(CSS)을 설정합니다.
	style_broken: "opacity:0.3;",
	// 매칭을 GM만 실행할 수 있게 할지 (true) 플레이어도 할 수 있게 할지 (false) 설정합니다.
	is_gm_only: true};
	const ms_setting = {
	// TATECK님의 커스텀 시트를 사용하는지(true) 공개버전 시트를 사용하는지(false) 설정합니다.
	use_custom_sheet: false,
	// 원형을 소환할 페이지의 이름을 기입해주세요. 여러곳에서 사용할 경우 콤마(,)로 구분해서 입력합니다.
	// 페이지가 여럿일 경우 Player 북마크가 설정된 페이지에 우선적으로 소환됩니다.
	page_list: "spellbound",
	// 원형의 타입명을 표시할지 (true) 생략할지 (false) 설정합니다.
	display_type: true,
	// 원형의 특기를 표시할지 (true) 생략할지 (false) 설정합니다.
	display_skill: true,
	// 원형의 이펙트를 토큰 마커로 표시할지 (true) 표시하지 않을지 (false) 설정합니다.
	use_effect_marker: true,
	// ms_setting.use_effect_marker가 true일 때: 이펙트의 숫자를 마커 위에 텍스트로 표시할지(true) 숫자가 포함된 이미지를 불러올지(false) 설정합니다.
	// ms_setting.use_effect_marker가 false일 때: 원형토큰의 이름에 이펙트를 기재할지(true) 생략할지(false) 설정합니다.
	use_text: false,
	// 원형토큰의 이름에 이펙트를 기재하는 옵션일 경우, 이펙트 사이를 분리할 문자열을 설정합니다.
	div_text: ",",
	// 사용할 이펙트 목록을 설정합니다.
	effect_list: [ 
	{marker:'block',display_name:'블',keyword:'block,bl,블록,블',use_bar:true},
	{marker:'damage',display_name:'추댐',keyword:'damage,da,추가대미지,대미지,추가데미지,데미지,추댐,추뎀,추'},
	{marker:'boost',display_name:'부',keyword:'boost,bo,부스트,부슽,부'},
	{marker:'cast',display_name:'캐',keyword:'cast,ca,캐스트,캐슽,캐',non_numbering:true},
	{marker:'mana',display_name:'마',keyword:'mana,ma,마나,마'},
	{marker:'word',display_name:'워',keyword:'word,wo,워드,워'},
	{marker:'minus',display_name:'-',keyword:'minus,mi,마이너스,-'},
	{marker:'plus',display_name:'+',keyword:'plus,pl,플러스,플,+'},
	{marker:'spellguard',display_name:'가',keyword:'spellguard,sp,스펠가드,가,가드,스'}],
	// 원형의 기본 습득 이펙트를 입력합니다. 룰북 내의 데이터이기 때문에 무료 배포하는 코드에 포함할 수 없으므로 해당 내용은 수기입해주시기 바랍니다.
	archetype_list: [
	{name:'정령', effect:''},
	{name:'마검', effect:''},
	{name:'악몽', effect:''},
	{name:'기사', effect:''},
	{name:'처녀', effect:''},
	{name:'전차', effect:''},
	{name:'마왕', effect:''},
	{name:'군단', effect:''},
	{name:'왕국', effect:''},
	{name:'마신', effect:''},
	{name:'나락문', effect:''}
	],
	// 원형이 소환되면 기본적으로 배치될 가로 위치
	opt_left: 1000,
	// 원형이 소환되면 기본적으로 배치될 세로 위치
	opt_top: 200,
	// 소환할 원형 토큰의 가로크기
	opt_width: 90,
	// 소환할 원형 토큰의 세로크기
	opt_height: 90,
	// 이름표 사용 여부 (true/false)
	opt_showname: true};
	
	
	
	// global constant
	const api_tag = '<a href="#vd-permitted-api-chat"></a>';
	const nt_linebreaker = 'Uk3jmApq-*QzfkMA';
	const vd_divider = "ℍ";
	const charge_check = [
		{attr: "Magic_*id*_Charge", is_static_attr: false},
		{attr: "repeating_acitems_-*id*_Magic_Charge", is_static_attr: false}];
	
	
	
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
		if (!state.narration) {
			state.narration = [];
		}
		if (!state.is_narrating) {
			state.is_narrating = 1; //0: 초기화 이전 1: 정지상태 2: 낭독중 3: 일시정지
		}
		if (!state.smallchatlog) state.smallchatlog = [];
		if (!state.smallchatonair) state.smallchatonair = [];
		state.vd_stock = [];
		on("add:attribute", function(obj) {
			check_charge(obj, null);
		});
		on("change:graphic:currentSide", function(obj,prev) {
			try {
				randomDice(obj);
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}            
		});
		on("add:graphic", function(obj) {
			try {
				if (md_setting.use_snap_dice && obj.get('subtype') == 'card') {
					let deck = findObjs({ _type: 'deck', name: 'Dice'})[0];
					let model = findObjs({ _type: "card", _deckid: deck.get('_id'), _id:obj.get('_cardid')})[0];
					if (model) {
						state.current_plot_page = obj.get('_pageid');
						let areas = getPlotAreas();
						if (!areas) {
							return;
						}
						let obj_coord = {
							left:obj.get('left')-(obj.get('width')/2),
							top:obj.get('top')-(obj.get('height')/2),
							width: obj.get('width'),
							height: obj.get('height')};
						let i=0, j=0;
						let stacked_dice = 0;
						let shorttest_dis = {x_dis:99999,y_dis:99999};
						let dice = findObjs({ _type: 'graphic', _subtype: 'card', gmnotes: 'Dice', _pageid: obj.get('_pageid')});
						const margin = 10;
						for (var z=0;z<areas.length;z++) {
							for(var x=0;x<areas[z].length;x++) {
								let spot = areas[z][x];
								let spot_coord = {
									left:spot.get('left')-(spot.get('width')/2),
									top:spot.get('top')-(spot.get('height')/2),
									width: spot.get('width'),
									height: spot.get('height')};
								let current_dis = {x_dis:0, y_dis:0};
								if (spot_coord.left < obj_coord.left && spot_coord.left+spot_coord.width > obj_coord.left) {
									current_dis.x_dis = 0;
								} else {
									current_dis.x_dis = Math.min(Math.abs(spot_coord.left - obj_coord.left),
									Math.abs(spot_coord.left+spot_coord.width-obj_coord.left-obj_coord.width));
								}
								if (spot_coord.top < obj.top && spot_coord.top+spot_coord.height > obj.top) {
									current_dis.y_dis = 0;
								} else {
									current_dis.y_dis = Math.min(Math.abs(spot_coord.top - obj_coord.top),
									Math.abs(spot_coord.top+spot_coord.height-obj_coord.top-obj_coord.height));
								}
								if (current_dis.x_dis + current_dis.y_dis < shorttest_dis.x_dis + shorttest_dis.y_dis) {
									shorttest_dis = current_dis;
									i=z;
									j=x;
									stacked_dice = 0;
									dice.forEach(die => {
										if (spot_coord.left-margin<=die.get('left')-die.get('width')/2 &&
											spot_coord.top-margin<=die.get('top')-die.get('height')/2 &&
											spot_coord.left+spot_coord.width+margin>=die.get('left')+die.get('width')/2 &&
											spot_coord.top+spot_coord.height+margin>=die.get('top')+die.get('height')/2) {
											stacked_dice++;
										}
									});
								}
							}
						}
						let nearest_area = areas[i][j];
						let is_area_landscape = nearest_area.get('width') > nearest_area.get('height');
						obj.set({
							gmnotes:'Dice',
							left:Math.floor(nearest_area.get('left')-(nearest_area.get('width')/2)+(obj.get('width')/2))+(is_area_landscape?stacked_dice*obj.get('width'):0),
							top:Math.floor(nearest_area.get('top')-(nearest_area.get('height')/2)+(obj.get('height')/2))+(!is_area_landscape?stacked_dice*obj.get('height'):0)});
					}
				}
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}
		});
	});
	
	
	//on chat 
	on("chat:message", function(msg) {
		if ((msg.type == "general" || msg.type == "desc" || msg.type == "emote")
			&& (msg.playerid != 'API' || msg.content.includes(api_tag))
			&& !msg.rolltemplate){
			if (findCharacterWithName(msg.who) || findObjs({_type:'player',_displayname:msg.who.replace(' (GM)','')}).length == 0) {
				if (msg.content.length > 0) {
					msg.content = msg.content.replace(api_tag,'').replace(/<br>/g,vd_divider);
					msg.time = new Date().getTime();
					state.vd_stock.push(msg);
					if (state.vd_stock.length == 1) {
						setTimeout(showDialogue, 100);
					}
				} 
			}
		}
	
	
	if (msg.type == "general"){
		if (msg.content.substring(0,7).toLowerCase() == "choice[") {
			try {
				var split = msg.content.substring(7,msg.content.length).replace(']','').split(',');
				var rand = split[Math.floor(Math.random() * split.length)];
				if (rand.substring(0) == ' ') { rand=rand.substring(1,rand.length);}
				if (rand.substring(rand.length-1,rand.length) == ' ') { rand=rand.substring(0,rand.length-1); }
				sendChat("CHOICE","-> "+rand);
			} catch(err){
				sendChat("error","/w gm "+err,null,{noarchive:true});
			}
		}
		
	
	
	}
	
	
	if (msg.type == "api"){
		if (msg.content.indexOf("!!") === 0 && (msg.playerid == 'API' || playerIsGM(msg.playerid))) {
			try {
				let aa_command = "!!";
				let false_value = 9999;
				let keyword = msg.content.split(' ')[0];
				if (keyword) {
					if (keyword.length > aa_command.length) {
						keyword = keyword.replace("!!","");
						let characters = findObjs({type:'character'});
						let nearest_item = {idx:false_value,match_idx:false_value};
						for (let i=0;i<characters.length;i++) {
							let cha = characters[i];
							let controller = cha.get('controlledby').split(",");
							let is_npc = true;
							for (let j=0;j<controller.length;j++) {
								if (controller[j] == "all" || (controller[j].length > 0 && !playerIsGM(controller[j]))) {
									is_npc = false;
									break;
								}
							}
							if (is_npc || aa_setting.use_to_playable_character) {
								let match_idx = cha.get('name').indexOf(keyword);
								if (match_idx > -1 && match_idx < nearest_item.match_idx) {
									nearest_item = {idx:i,match_idx:match_idx};
								}
							}
						}
						if (nearest_item.idx != false_value) {
							sendChat("character|"+characters[nearest_item.idx].get('id'),
							msg.content.substring(aa_command.length+ keyword.length+1, msg.content.length)+(api_tag&&!msg.content.includes(api_tag)?api_tag:""));
						} else {
							sendChat("as_autofiller.js", "/w gm **" + keyword + "**가 이름에 포함된 NPC가 없습니다.",null,{noarchive:true});
						}
					} else {
						let chat_id = "";
						if (aa_setting.master_name.length == 0) {
							sendChat("system","/w gm 이름의 길이가 0글자인 캐릭터를 통해 API로 채팅할 경우 이름이 올바르게 출력되지 않아 익명의 공백이름으로 표시되었습니다. \
							아바타를 사용하면서 캐릭터의 이름을 보이지 않기를 원하실 경우 이름을 공백으로 두는 대신 **공백문자**(스페이스바 등)를 1글자 넣어주세요.",null,{noarchive:true});
						} else {
							const gm = findObjs({ name: aa_setting.master_name, type: 'character'})[0];
							if (gm) {
								chat_id = "character|"+gm.get("_id");
							} else {
								sendChat("system","/w gm **!!** 뒤에 입력한 키워드가 없고 이름이 '" + aa_setting.master_name + "'인 캐릭터가 저널에 없습니다.",null,{noarchive:true});
								return;
							}
						}
						sendChat(chat_id,msg.content.substring(3) +(!msg.content.includes(api_tag)?api_tag:""));
					}
				}
			} catch (err) {
				sendChat("error","/w gm " + err,null,{noarchive:true});
			}
		}
		
	else     if (msg.content.indexOf("!! ") === 0 && (msg.playerid == 'API' || playerIsGM(msg.playerid))) {
			try {
				const api_tag = '<a href="#vd-permitted-api-chat"></a>';
				let target_cha = null;
				if (msg.selected && msg.selected.length > 0) {
					var tok = getObj("graphic", msg.selected[0]._id);
					if (tok.get('represents') && tok.get('represents').length > 1) {
						target_cha = getObj('character',tok.get('represents'));
						cha_id = "character|"+tok.get('represents');
					}
				} else {
					let gm = findObjs({ name: as_setting.master_name, type: 'character'});
					if (gm.length > 0) {
						target_cha = gm[0];
					} else {
						sendChat("system","/w gm 선택된 토큰이 없고 이름이 '" + as_setting.master_name + "'인 캐릭터가 저널에 없습니다.",null,{noarchive:true});
					}
				}
				if (target_cha) {
					if (target_cha.get('name').length == 0) {
						sendChat('',msg.content.replace('!! ','')+api_tag);
						sendChat("system","/w gm 이름의 길이가 0글자인 캐릭터를 통해 API로 채팅할 경우 이름이 올바르게 출력되지 않아 익명의 공백이름으로 표시되었습니다. \
						아바타를 사용하면서 캐릭터의 이름을 보이지 않기를 원하실 경우 이름을 공백으로 두는 대신 **공백문자**(스페이스바 등)를 1글자 넣어주세요.",null,{noarchive:true});
					} else {
						sendChat("character|"+target_cha.get('_id'),msg.content.replace('!! ','')+api_tag);
					}
				} else {
					sendChat("system","/w gm 선택된 토큰이 없거나 이 토큰과 연결된 캐릭터가 없습니다.",null,{noarchive:true});
				}
			} catch (err) {
				sendChat("error","/w gm " + err,null,{noarchive:true});
			}
		}
		else     if (msg.content.indexOf("!at ") === 0 && (msg.playerid == 'API' || playerIsGM(msg.playerid))) {
			if (msg.content.toLowerCase().includes('hide')) {
				state.show_tracking = false;
			} else if (msg.content.toLowerCase().includes('show')) {
				state.show_tracking = true;
			}
		}
		else     if (msg.content.indexOf("!flip") === 0 && msg.selected) {
			try {
				for (var i=0;i<msg.selected.length;i++) {
					var obj = getObj("graphic", msg.selected[i]._id);
					var side = obj.get('currentSide')===0?1:0;
					var img = obj.get('sides').split('|')[side].replace('%3A',':').replace('%3F','?').replace('max','thumb').replace('med','thumb');
					obj.set({currentSide:side,imgsrc:img});
				}
			} catch(err){
				sendchat("error","/w gm "+err,null,{noarchive:true});
			}
		}
		else 	if (msg.content.indexOf("!add") === 0) {
			let tok = getObj("graphic", msg.selected[0]._id);
			sendChat(msg.who,"/w gm "+tok.get('imgsrc'));
		} else if (msg.content.indexOf("!replace ") === 0) {
			let tok = getObj("graphic", msg.selected[0]._id);
			tok.set('imgsrc',msg.content.substring(9).replace("max","thumb").replace("med","thumb"));
		} else if (msg.content.indexOf("!log") === 0) {
			for (let i=0;i<msg.selected.length;i++) {
				let tok = getObj("graphic", msg.selected[i]._id);
				log(tok);
			}
		} else if (msg.content.indexOf("!batch") === 0 && msg.selected.length > 0) {
			let highest = getObj("graphic", msg.selected[0]._id);
			for (let i=0;i<msg.selected.length;i++) {
				let tok = getObj("graphic", msg.selected[i]._id);
				if (highest.get('top') > tok.get('top')) {
					highest = tok;
				}
			}
			for (let i=0;i<msg.selected.length;i++) {
				let tok = getObj("graphic", msg.selected[i]._id);
				tok.set("imgsrc", highest.get('imgsrc').replace("max","thumb").replace("med","thumb"));
			}
		} else if (msg.content.indexOf("!highlight ") == 0) {
			let tokens = findObjs({type:"graphic", name:msg.content.replace('!highlight ','')});
			tokens.forEach(token => {
				if (isNaN(parseInt(token.get('aura1_radius')))) {
					token.set({aura1_radius:"1",aura1_color:gi_setting.aura_color,aura1_square:true});
				} else {
					token.set({aura1_radius:"",aura1_color:"",aura1_square:false});
				}
			});
		}
		else 	if (msg.content.indexOf("!amplify") === 0 && playerIsGM(msg.playerid)) { //명령어를 변경하실 수 있습니다.
			try {
				var jukebox = findObjs({_type: "jukeboxtrack"});
				for (var i=0;i<jukebox.length;i++) {
					var obj = jukebox[i];
					if(msg.content.includes("loop")){
						obj.set({volume: 100, loop:true});
					} else {
						obj.set({volume: 100});
					}
				}
			} catch(err){
				sendChat("error","/w gm "+err,null,{noarchive:true});
			}
		}
		else 	if ((msg.content == "!," || msg.content == "!/" || msg.content.indexOf("!... ") == 0 || msg.content.indexOf("!,,, ") == 0 ||
		msg.content.indexOf("!. ") == 0) && (msg.playerid == 'API' || playerIsGM(msg.playerid))) {
			try {
				if (msg.content == "!,") { //일시정지/재시작
					if (state.is_narrating == 2) {
						state.is_narrating = 1;
					} else {
						state.is_narrating = 2;
						narrate();
					}
				} else if (msg.content == "!/") { //취소
				
						state.narration = [];
						state.is_narrating = 1;
					
				} else if (msg.content.indexOf("!... ") == 0) { //명령어를 변경하실 수 있습니다.
					var str = msg.content.replace("!... ","");
					var as_who;
	
					if (str.indexOf("/desc") == 0) {
						as_who = '';
					} else if (str.indexOf("/as") == 0 || str.indexOf("/emas") == 0) {
						var arr = str.split('"');
						var cha = findObjs({_type: "character", name: arr[1]})[0];
						if (cha) {
							as_who = "character|" + cha.get('_id');
						} else {
							as_who = arr[1];
						}
						if (str.indexOf("/emas") === 0) {
							str = "/em " + str.substring('/emas '.length + arr[1].length + 3);
						} else {
							str = str.substring('/as '.length + arr[1].length + 3);
						}
					} else {
						as_who = findObjs({_type: "character", name: msg.who.replace(' (GM)','')});
						if (as_who.length > 0) {
							as_who = "character|" + as_who[0].get('_id');
						} else {
							as_who = findObjs({_type: "player", _displayname: msg.who.replace(' (GM)','')});
							if (as_who.length > 0) {
								as_who = "player|" + as_who[0].get('_id');
							} else {
								as_who = msg.who;
							}
						}
					}
	
					state.narration.push({as: as_who, msg: str});
					
					if (state.is_narrating == 1) {
						state.is_narrating = 2;
						setTimeout(narrate, 500);
					}
				} else if (msg.content.indexOf("!,,, ") == 0) {
	
					var str = msg.content.replace("!,,, ","");
					if (state.narration.length > 0) {
						state.narration[state.narration.length-1].msg += "<br>" + str;
					} else {
						sendChat('error','/w GM !,,, 명령어로 줄바꿈을 시도했으나 이전 줄이 없습니다. !...로 첫줄을 먼저 쓰세요.',null,{noarchive:true});
					}
				} else if (msg.content.indexOf("!. ") == 0) {
					var str = msg.content.replace("!. ","");
					if (state.narration.length > 0) {
						state.narration[state.narration.length-1].msg += nt_linebreaker + str;
					} else {
						sendChat('error','/w GM !. 명령어로 줄바꿈을 시도했으나 이전 줄이 없습니다. !...로 첫줄을 먼저 쓰세요.',null,{noarchive:true});
					}
				}
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}
		}
		else 	if (msg.content.indexOf("!루 ") == 0 || msg.content.indexOf("!r ") == 0) {
			try {
				
				let str = msg.content.replace("!루 ",'').replace("!r ",'');
				const ruby_array = str.match(/\[[^\(\)\[\]]*\]\([^\(\)\[\]]+\)/g);
				if (ruby_array) {
					ruby_array.forEach(element => {
						const split = element.split('](');
						const rb = split[0].replace('[','');
						const rt = split[1].replace(')','');
						str = str.replace(element, '<div style="display:inline-block;vertical-align:bottom;">'
						+ '<div style="display:table"><div style="display:table-row;text-align:center;font-size:7pt;font-weight:bold;"><span style="display:none">(</span>'
						+ rt + '<span style="display:none">)</span></div><div style="display:table-row;text-align:center;"><span style="display:none">[</span>' + rb + '<span style="display:none">]</span></div></div></div>');
					});
				} else {
					sendChat('error','/w "' + (msg.who==''?'GM':msg.who) + '" 루비 형식이 올바르지 않습니다.<br>``[아래에 표시될 문장]````(위에 표시될 문장)``의 형식으로 입력해주세요.',null,{noarchive:true});
					return;
				}
	
				const findCharacterWithName = function(who) {
					if (who == "") {
						sendChat("system","/w gm 이름의 길이가 0글자인 캐릭터를 통해 API로 채팅할 경우 이름이 올바르게 출력되지 않아 익명의 공백이름으로 표시되었습니다. \
						아바타를 사용하면서 캐릭터의 이름을 보이지 않기를 원하실 경우 이름을 공백으로 두는 대신 **공백문자**(스페이스바 등)를 1글자 넣어주세요.",null,{noarchive:true});
						return '';
					}
					let chat_cha = findObjs({ _type: 'character', name: who});
					if (chat_cha.length > 0) {
						return "character|" + chat_cha[0].get('_id');
					} else {
						let chat_pl = findObjs({ _type: 'player', name: who});
						if (chat_pl.length > 0) {
							return "player|" + chat_pl[0].get('_id');
						} else {
							return who;
						}
					}
				}
				sendChat(str.includes('/desc')?'':findCharacterWithName(msg.who),str + api_tag);
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}
		}
		else     if (msg.content.indexOf("! ") === 0) {
			const style = "color:#aaaaaa";
			try {
				let chat_id = "";
				if (!sc_setting.show_player_name) {
					let character = findObjs({type:'character',name:msg.who});
					if (character.length > 0) {
						chat_id = "character|" + character[0].get('_id');
					}
				}
				chat_id = chat_id ? chat_id : "player|"+msg.playerid;
				sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(2, msg.content.length)+"</span>",null,{noarchive:false});
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}
		}
		else     if (msg.content.indexOf("! ") === 0) {
			try {
				let box = findObjs({ _type: 'text', layer:'map'});
				let bg = findObjs({ _type: 'graphic', name:'chat_bg', layer:'map'});
				let ho = findObjs({ _type: 'handout', name:ss_setting.logname});
				let player = getObj('player',msg.playerid);
				
				let split;
				if (bg.length > 0) {
					bg = bg[0];
				} else {
					bg = null;
				}
				if (ho.length > 0) {
					ho = ho[0];
				} else {
					ho = createObj('handout', {
						notes: ' ',
						inplayerjournals: 'all',
						name: ss_setting.logname
					});
				}
				if (bg) {
					let width = bg.get('width') - ss_setting.margin * 2;
					if (box.length > 0) {
						box = box[0];
						split = box.get('text').split('\n');
					} else {
						split = [''];
						while (bg.get('width')>split[0].length*ss_setting.font_size) { split[0] += "ㅤ"; }
						while (split.length * ss_setting.font_size * ss_setting.lineheight < bg.get('height') + ss_setting.margin*2) {
							split.push(' ');
						}
						box = createObj('text', {
							_pageid: bg.get('_pageid'),
							left: bg.get('left'),
							top: bg.get('top'),
							width: width,
							height: bg.get('height'),
							layer: 'map',
							font_family: 'Arial',
							text: '',
							font_size: ss_setting.font_size,
							color: ss_setting.color
						});
					}
					let str = player.get('_displayname') + ": " + msg.content.substring(2);
					let amount = Math.ceil(width/ss_setting.font_size/ss_setting.letterspacing*2);
					let idx = 0;
					let length = 0;
					let halfchar = [' ',',','.','\'','"','[',']','(',')','*','^','!','-','~',':',';','<','>','+','l','i','1'];
					for (let i=0;i<str.length;i++){
						let c = str[i];
						for (let j=0;j<halfchar.length;j++) {
							if (c==halfchar[j]) {
								length -= 1;
								break;
							}
						}
						length += 2;
						if (length > amount) {
							split.push(str.substring(idx,i));
							idx = i;
							length = 0;
						}
					}
					if (idx < str.length) {
						split.push(str.substring(idx,str.length));
					}
					while ((split.length -1) * ss_setting.font_size * ss_setting.lineheight > bg.get('height') + ss_setting.margin*2) {
						split.splice(1,1);
					}
					box.set({text:split.join('\n'),left:bg.get('left'),top:bg.get('top')-ss_setting.font_size});
					toFront(box);
				}
				let d = new Date();
				let tz = d.getTime() + (d.getTimezoneOffset() * 60000) + (ss_setting.timezone * 3600000);
				d.setTime(tz);
				let final_str = "<span style='color:#aaaaaa;font-size:7pt;'>"
						+ d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
						+ "</span>" + "<br>"
						+ (ss_setting.use_personal_color!=0?("<span style='color:"+player.get('color')+";'>"):"") + "<b>"
						+ (ss_setting.show_player_name ? player.get('_displayname') : msg.who) + "</b>" + (ss_setting.use_personal_color===1?"</span>":"") + ": "
						+ msg.content.substring(2) + (ss_setting.use_personal_color===2?"</span>":"");
				if (!bg) {
					let oa = findObjs({ _type: 'handout', name:ss_setting.onair_name});
					if (oa.length > 0) {
						oa = oa[0];
					} else {
						oa = createObj('handout', {
							notes: ' ',
							inplayerjournals: 'all',
							name: ss_setting.onair_name
						});
					}
					oa.get('notes',function(text) {
						let final_split = (text.length > 0 && text != 'null' ? text.split("<br><i></i>") : []);
						final_split.push(final_str);
						if (final_split.length > ss_setting.onair_lines) {
							final_split.splice(0,1);
						}
						state.smallchatonair.push(final_split.join("<br><i></i>"));
						if (state.smallchatonair.length > 0) {
							oa.set({notes: state.smallchatonair[0]});
							state.smallchatonair.splice(0,1);
						}
					});
				}
				ho.get('notes',function(text) {
					state.smallchatlog.push((text.length > 0 && text != 'null' ? text : "") + "<br><i></i>" + final_str);
					if (state.smallchatlog.length > 0) {
						ho.set({notes: state.smallchatlog[0]});
						state.smallchatlog.splice(0,1);
					}
				});
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}
		}
		else         if (msg.content.indexOf("!? ") === 0) {
				const style = "font-size:0.9em;";
				try {
					let chat_id = "";
					if (!tc_setting.show_player_name) {
						let character = findObjs({type:'character',name:msg.who});
						if (character.length > 0) {
							character = character[0];
							if (character.get('name').length == 0) {
								chat_id = '';
								sendChat("system","/w gm 이름의 길이가 0글자인 캐릭터를 통해 API로 채팅할 경우 이름이 올바르게 출력되지 않아 익명의 공백이름으로 표시되었습니다. \
								아바타를 사용하면서 캐릭터의 이름을 보이지 않기를 원하실 경우 이름을 공백으로 두는 대신 **공백문자**(스페이스바 등)를 1글자 넣어주세요.",null,{noarchive:true});
							} else {
								chat_id = "character|" + character.get('_id');
							}
						} else {
							chat_id = msg.who;
						}
					}
					chat_id = chat_id ? chat_id : "player|"+msg.playerid;
					sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:true});
				} catch (err) {
					sendChat('error','/w GM '+err,null,{noarchive:true});
				}
			}
			else 	if (msg.type == "api" && msg.content.indexOf("!@") === 0) {
	
			const current_page_id = vdGetCurrentPage();
			if (!current_page_id) {
				return;
			}
	
			if (msg.content == '!@숨김' || msg.content == '!@hide') {
	
				showHideDecorations('vd_deco',false);
				showHideDecorations('vd_panel',false);
				let bg_name = findObjs({ _type: 'graphic', name:'vd_name', _pageid:current_page_id});
				let bg_dialogue = findObjs({ _type: 'graphic', name:'vd_dialogue', _pageid:current_page_id});
				if (bg_name.length > 0) {
					bg_name = bg_name[0];
				} else {
					sendChat("error","/w gm **" + getObj('page',current_page_id).get('name') + "** 페이지에 vd_name 토큰이 없습니다.",null,{noarchive:true});
					return;
				}
				if (bg_dialogue.length > 0) {
					bg_dialogue = bg_dialogue[0];
				} else {
					sendChat("error","/w gm **" + getObj('page',current_page_id).get('name') + "** 페이지에 vd_dialogue 토큰이 없습니다.",null,{noarchive:true});
					return;
				}
				let text_name = getObj('text', bg_name.get('gmnotes'));
				let text_dialogue = getObj('text', bg_dialogue.get('gmnotes'));
				text_name.remove();
				text_dialogue.remove();
				sendChat('vd-api-wildcard','!@퇴장:전원');
	
			} else if (msg.content.indexOf("!@퇴장") == 0 || msg.content.indexOf("!@exit") == 0) {
	
				const keyword = msg.content.replace("!@퇴장","").replace("!@exit","").replace(api_tag,'');
	
				if (keyword.length == 0) {
					removeStanding(msg);
				} else if (playerIsGM(msg.playerid) || msg.playerid == 'API' || msg.who == 'vd-api-wildcard') {
					if (keyword == ":전원" || keyword == ":전체" || keyword == ":all") {
						let tokens = findObjs({ _type: 'graphic', name: 'vd_standing', _pageid: current_page_id});
						tokens.forEach(token => {
							token.remove();
						});
					} else if (keyword == ":엑스트라" || keyword == ":extra") {
						let tokens = findObjs({ _type: 'graphic', name: 'vd_standing', represents: '', _pageid: current_page_id});
						tokens.forEach(token => {
							token.remove();
						});
					} else {
						msg.who = keyword.replace(":","");
						removeStanding(msg);
					}
				}
	
			} else if (vd_setting.use_emotion) {
	
				let cha_name = msg.who;
				let content_str = msg.content.replace(api_tag,'').replace('!@','');
				let emot = content_str;
				if (content_str.lastIndexOf(':') > -1 && (playerIsGM(msg.playerid) || msg.playerid == 'API')) {
					cha_name = content_str.substring(0,content_str.lastIndexOf(':'));
					emot = content_str.substring(content_str.lastIndexOf(':')+1,content_str.length);
				}
				let chat_cha = findCharacterWithName(cha_name);
				let current_token = null;
				if (chat_cha || vd_setting.show_extra_standing) {
					current_token = findTokenWithCharacter(chat_cha?chat_cha.get('_id'):'', cha_name);
				}
				if (current_token) {
					let nm = chat_cha?cha_name:vd_setting.extra_name;
					let rt = findObjs({ _type: 'deck', name: !vd_setting.use_emotion?vd_setting.deck_name:nm});
					if (rt.length == 0) {
						if (!vd_setting.use_emotion) {
							sendChat("error","/w gm 이름이 **" + vd_setting.deck_name +"**인 카드 덱이 없습니다.",null,{noarchive:true});
						} else {
							sendChat("error","/w gm 이름이 **" + nm + "**인 카드 덱이 없습니다.",null,{noarchive:true});
						}
						return;
					} else {
	
						let opt = {
							name: 'vd_standing',
							_subtype: 'card',
							_pageid: current_token.get('_pageid'),
							width: vd_setting.width,
							height: vd_setting.height,
							bar1_value: cha_name,
							left:current_token.get('left'),
							top:current_token.get('top'),
							layer: 'map',
							represents: chat_cha? chat_cha.get('_id'): '',
							tint_color: current_token.get('tint_color')
						};
						if (emot.length == 0) {
							opt.imgsrc = rt[0].get('avatar').replace('med','thumb').replace('max','thumb');
						} else {
							let search_opt = { _type: 'card', _deckid: rt[0].get('_id')};
							if (!vd_setting.use_emotion) {
								search_opt.name = chat_cha ? cha_name : vd_setting.extra_name;
							} else if (emot.length > 0) {
								search_opt.name = emot;
							}
							let rt_items = findObjs(search_opt);
							if (rt_items.length > 0) {
								opt.imgsrc = rt_items[0].get('avatar').replace('med','thumb').replace('max','thumb');
							} else {
								if (!vd_setting.use_emotion) {
									sendChat("error","/w gm **"+ vd_setting.deck_name + "** 카드 덱에 이름이 **" + opt.name + "**인 카드가 없습니다.",null,{noarchive:true});
								} else {
									sendChat("error","/w gm **" + rt[0].get('name') + "** 카드 덱에 이름이 **" + emot + "**인 카드가 없습니다.",null,{noarchive:true});
								}
								return;
							}
						}
						current_token.set(opt);
					}
				} else {
					sendChat("error","/w \"" + msg.who + "\" 이름이 **" + cha_name +"**인 캐릭터가 없습니다.",null,{noarchive:true});
				}
			}    
		}
		else if (msg.content.indexOf("!장서 ") === 0) {
		try {
			if (msg.selected) {
				var tok = getObj("graphic", msg.selected[0]._id);
				if (tok && tok.get('represents')) {
					try {
					var proc_msg = msg.content.replace("!장서 ","").replace("{{","").replace("}}","");
					var cha_id = getObj("character", tok.get('represents')).get('_id');
					var list = proc_msg.split("<br/>\n");
					var attr_list = [
						"Magic_*num*_Name",
						"Magic_*num*_Types",
						"Magic_*num*_Assigned_Skill",
						"Magic_*num*_Cost",
						"Magic_*num*_Effect",
						"Magic_*num*_Recite",
						"ima_show_cust_*num*"];
					var idx = 1;
					
					var repeat_id_list = [];
					var attrs = findObjs({_type: "attribute", _characterid: cha_id});
					for (var i=0;i<attrs.length;i++) {
						var item = attrs[i].get('name');
						if (item.includes('repeating_') && item.includes('_Magic_Name')) {
							repeat_id_list.push(item.replace('_Magic_Name',''));
						}
					}
					
					var find_key = function(str){
						var attr_from_value = findObjs({_type: "attribute", _characterid: cha_id, current: str});
						for (var i=0;i<attr_from_value.length;i++) {
							var attr = attr_from_value[i].get('name');
							if (!attr.includes('Magic')) {
								return attr;
							}
						}
					}
					
					for (var i=0;i<list.length;i++) {
						var items = list[i].split(" --");
						if (items.length > 1) {
							idx++;
							for (var j=0;j<items.length;j++) {
								var name, attr, item;
								if (idx < 11) {
									name = attr_list[j].replace("_*num*", "_"+ ("0"+idx).slice(-2));
									attr = findObjs({_type: "attribute", _characterid: cha_id, name:name})[0];
								} else {
									name = repeat_id_list[idx-11] + "_" + attr_list[j].replace("_*num*", "");
									attr = findObjs({_type: "attribute", _characterid: cha_id, name:name})[0];
					
								}
								item = items[j];
								if (j==1||j==2) {
									var attr_key = find_key(item);
									if (attr_key) {
										item = "@{" + attr_key + "}";
									}
								}
								
								if (!attr && repeat_id_list.length > idx - 11) {
									attr = createObj('attribute', {
									characterid: cha_id,
									name: name,
									current: item});
								} else if (attr) {
									attr.set({current:item});
								}
							}
						}
					}
					}  catch(err) {
						sendChat("error", "/w gm "+err,null,{noarchive:true});
					}
				} else {
						sendChat("error", "/w gm 캐릭터 토큰이 선택되지 않았습니다.",null,{noarchive:true});
				}
			} else {
				sendChat("error", "/w gm 토큰이 선택되지 않았습니다.",null,{noarchive:true});
			}
		} catch(err){
			sendChat("error","/w gm "+err,null,{noarchive:true});
		}
		}
		else     if (msg.content.indexOf("!장서토큰") === 0) {
			try {
				var split = msg.content.split(' --');
				if (split.length < 2) {
					sendChat('ERROR','/w GM magicalogia_token_generator.js / 장서토큰을 생성할 캐릭터 이름이 지정되지 않았습니다.',null,{noarchive:true});
					return;
				}
				var cha = findObjs({name:split[1], type:'character'});
				if (cha.length < 1) {
					sendChat('ERROR','/w GM 이름이 ' + split[1] + '인 캐릭터가 저널에 없습니다.',null,{noarchive:true});
					return;
				} else {
					cha = cha[0];
				}
	
				let page;
	
				const page_list = mt_setting.page_list.replace(/, /g,',').replace(/ ,/g,',').split(',');
				const playerpage = getObj('page',Campaign().get("playerpageid"));
				if (page_list.indexOf(playerpage.get('name')) > -1) {
					page = playerpage;
				} else {
					page = findObjs({type:'page',name:page_list[0]});
					if (page.length > 0) {
						page = page[0];
					} else {
						sendChat("error","/w gm 이름이 **" + page[0] + "**인 페이지가 없습니다.",null,{noarchive:true});
						return;
					}
				}
					
				var id_list = {};
				var attrs = findObjs({_type: "attribute", _characterid: cha.id});
				
				for (var i=0;i<attrs.length;i++) {
					var item = attrs[i].get('name');
					var id;
					
					if (item.indexOf('Magic_') === 0) {
						id = item.split('_')[1];
					} else if (item.includes('repeating_') && item.includes('_Magic')) {
						id = item.split('_')[2];
					}
					if (id) {
						if (!id_list[id]) {
							id_list[id] = {};
						}
						if (item.includes('_Name')) {
							id_list[id].name = attrs[i].get('current');
							id_list[id].orig_name = item;
						} else if (item.includes('_Cost')) {
							for (var j=0;j<mt_setting.area_list.length;j++) {
								var cost_value = attrs[i].get('current');
								if (cost_value.includes(mt_setting.area_list[j])) {
									id_list[id].cost = mt_setting.area_list[j];
									id_list[id].orig_cost = cost_value;
								}
							}
							if (!id_list[id].cost) {
								id_list[id].cost = mt_setting.default_area;
							}
						} else if (item.includes('_Charge')) {
							id_list[id].charge_id = attrs[i].id;
						}
					}
				}
				
				var keys = Object.keys(id_list);
				split.splice(0,2);
				
				for (var i=0;i<keys.length;i++) {
					
					var obj = id_list[keys[i]];
					var init_idx = -1;
					
					if (obj.name) {
					
						if (!obj.charge_id) {
							var charge_attr = createObj('attribute', {name:obj.orig_name.replace('_Name','_Charge'),current:0, characterid: cha.id});
							obj.charge_id = charge_attr.id;
						}
	
						let current_charge = getObj('attribute',obj.charge_id);
	
						var rt_item = null;
						var sides = "";
	
						if (mt_setting.use_single_icon) {
							init_idx = 0;
							var rt = findObjs({name:mt_setting.collection_name, type:'rollabletable'});
							if (rt.length < 1) {
								sendChat('ERROR','/w GM magicalogia_token_generator.js / 이름이 \'' + mt_setting.collection_name + '\' 인 Rollable Table이 없습니다.',null,{noarchive:true});
								return;
							}
							rt_item = findObjs({type:'tableitem', _rollabletableid: rt[0].id, name: obj.cost});
							if (rt_item.length < 1) {
								rt_item = findObjs({type:'tableitem', _rollabletableid: rt[0].id, name: mt_setting.default_area});
								if (rt_item.length < 1) {
									if (obj.cost) {
										sendChat('ERROR','/w GM magicalogia_token_generator.js / 이름이 \'' + obj.cost + '\'이거나 \'' + mt_setting.default_area + '\' 인 item이 '+ mt_setting.collection_name +' Rollable table 안에 없습니다.',null,{noarchive:true});
									} else {
										sendChat('ERROR','/w GM magicalogia_token_generator.js / 기본으로 사용할 \'' + mt_setting.default_area + '\' 속성의 item이 \''+ mt_setting.collection_name +'\' Rollable table 안에 없습니다.',null,{noarchive:true});
									}
									return;
								}
							}
	
						} else {
						
							var rt = findObjs({name:obj.cost, type:'rollabletable'});
							if (rt.length < 1) {
								rt = findObjs({name:mt_setting.default_area, type:'rollabletable'});
								if (rt.length < 1) {
									if (obj.cost) {
										sendChat('ERROR','/w GM magicalogia_token_generator.js / 이름이 \'' + obj.cost + '\'이거나 \'' + mt_setting.default_area + '\'인 Rollable table이 없습니다.',null,{noarchive:true});
									} else {
										sendChat('ERROR','/w GM magicalogia_token_generator.js / 기본으로 사용할 \'' + mt_setting.default_area + '\' 속성의 Rollable table이 없습니다.',null,{noarchive:true});
									}
									return;
								}
							}
							rt_item = findObjs({type:'tableitem', _rollabletableid: rt[0].id});
							if (rt_item.length == 0) {
								sendChat('ERROR','/w GM magicalogia_token_generator.js / \'' + rt[0].get('name') + '\' 영역에 사용할 수 있는 아이콘이 없습니다.',null,{noarchive:true});
								return;
							}
							for (var j=0;j<rt_item.length;j++) {
								sides += escape(rt_item[j].get('avatar'));
								if (j<rt_item.length-1) {
									sides += "|";
								}
								if (mt_setting.use_static_icon && init_idx == -1 && obj.orig_cost && obj.orig_cost.toLowerCase().includes(rt_item[j].get('name').toLowerCase())) {
									init_idx = j;
								} else if (!mt_setting.use_static_icon && init_idx == -1 && (current_charge.get('current') + "") == rt_item[j].get('name')) {
									init_idx = j;
								}
							}
	
							if (init_idx == -1) {
								sendChat('ERROR','/w GM magicalogia_token_generator.js / \'' + rt[0].get('name') + '\' 영역 중 ' + current_charge.get('current') + '에 대응되는 아이콘이 없습니다. 0번째 아이콘으로 대체합니다.',null,{noarchive:true});
								init_idx = 0;
							}
						}
						
						var setting = {
							_pageid: page.id,
							left: Math.floor(page.get('width')/2)*mt_setting.size,
							top: Math.floor(page.get('height')/2)*mt_setting.size,
							represents: cha.id,
							width: mt_setting.size,
							height: mt_setting.size,
							imgsrc: rt_item[init_idx].get('avatar').replace('max','thumb').replace('med','thumb'),
							layer: 'objects',
							sides:sides,
							currentSide:0,
							name: obj.name,
							bar1_link: obj.charge_id,
							playersedit_name: false,
							showname: false,
							bar1_value: current_charge.get('current'),
							showplayers_name: false,
							showplayers_bar2: false,
							showplayers_bar3: false,
							playersedit_bar1: false,
							playersedit_bar2: false,
							playersedit_bar3: false,
							playersedit_aura1: false,
							playersedit_aura2: false,
							gmnotes: mt_setting.use_static_icon ? "static" : ""
						};
						if (mt_setting.show_name) {
							Object.assign(setting, {showname: true, showplayers_name: true});
						}
						
						var token = createObj('graphic', setting);
						
						if (mt_setting.show_bar) {
							current_charge.set('max',getAttrByName(cha.id, "bas"));
							token.set({bar1_max:getAttrByName(cha.id, "bas"), showplayers_bar1: true});
						} else {
							setTimeout(function(){
								current_charge.set('max',"");
								token.set({bar1_max:"", showplayers_bar1: false});
							},100);
						}
					}
				}
				
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}
		}
		else     if (msg.content.indexOf("!match_dice") === 0 && (!md_setting.is_gm_only || (msg.playerid == 'API' || playerIsGM(msg.playerid)))) {
			try {
				let deck = findObjs({ _type: 'deck', name: 'Dice'})[0];
				if (!deck) {
					sendChat("matchDice", "/w gm Dice 덱이 Card에 없습니다.",null,{noarchive:true});
					return false;
				}
				let objects = findObjs({ _type: 'graphic', _subtype: 'card', layer: 'objects', _pageid: state.current_plot_page});
				let areas = getPlotAreas();
				let concentrateIdx = -1;
				let dice = [[],[],[],[]];
				let flip = msg.content.includes('flip');
	
				for (var i=0;i<objects.length;i++) {
					let obj = objects[i];
					let model = findObjs({ _type: "card", _deckid: deck.get('_id'), _id:obj.get('_cardid')})[0];
					
					if (model) {
						var dname = model.get('name');
						if (flip && obj.get('currentSide')===1) {
							let img = obj.get('sides').split('|')[0].replace('%3A',':').replace('%3F','?').replace('max','thumb').replace('med','thumb');
							if (dname == "?") {
								randomDice(obj);
							} else {
								obj.set({currentSide:0,imgsrc:img});
							}
						}
						if (obj.get('currentSide')===0) {
							if (dname != "?") {
								obj.set('name', dname);
							}
							let left = parseInt(obj.get('left'));
							let top = parseInt(obj.get('top'));
							let width = parseInt(obj.get('width'));
							let height = parseInt(obj.get('height'));
							const margin = 10;
							let stop = false;
							for (var z=0;z<areas.length;z++) {
								for(var x=0;x<areas[z].length;x++) {
									let area = areas[z][x];
									if (area.get('left')-area.get('width')/2-margin<=left-width/2 &&
									area.get('top')-area.get('height')/2-margin<=top-height/2 &&
									area.get('top')+area.get('height')/2+margin>= top+height/2 &&
									area.get('left')+area.get('width')/2+margin>= left+width/2) {
										if (obj.get('name') === '0') {
											concentrateIdx = z;
										}
										dice[z].push(obj);
										stop = true;
										break;
									}
								}
								if (stop) {
									break;
								}
							}
						}
					}
			}
	
			if (dice[0].length < 1 && dice[2].length < 1) {
				sendChat('error','/w GM 대표 플롯 영역 내에 공개된 다이스가 없습니다.',null,{noarchive:true});
				return;
			}
				
			for (var s=0;s<dice.length;s++) {
				
				dice[s].sort(function (a, b) { 
					return a.get('name') < b.get('name') ? -1 : a.get('name') > b.get('name') ? 1 : 0;
				});
			}
			
			var match_dice = function(dice1,dice2,concentrateIdx) {
				
				for (var i=0;i<dice1.length;i++) {
					for (var j=0;j<dice2.length;j++) {
						if (dice1[i].get('name') === '0') {
							dice1[i].set('name',dice1[i].get('name')+'!');
							break;
						} else if (dice2[j].get('name') === '0') {
							dice2[j].set('name',dice2[j].get('name')+'!');
						} else if (dice1[i].get('name')===dice2[j].get('name') && !dice1[i].get('name').includes('!') && !dice2[j].get('name').includes('!')) {
							if (concentrateIdx != 0) {
							dice1[i].set('name',dice1[i].get('name')+'!');
							}
							if (concentrateIdx != 2) {
							dice2[j].set('name',dice2[j].get('name')+'!');
							}
						}
					}
				}
			}
				
			match_dice(dice[0],dice[2],concentrateIdx); //d1 vs d2
			match_dice(dice[0],dice[3],concentrateIdx!=0?-1:0) //d1 vs o2
			match_dice(dice[2],dice[1],concentrateIdx!=2?-1:0) //d2 vs o1
			match_dice(dice[1],dice[3],-1) //o1 vs o2
			
			let result = "";
			
			for (var i=0;i<4;i++) {
				if (dice[i].length > 0) {
					result += "<div>";
					result += (i%2==0 ? "" : "+");
					dice[i].forEach(die => {
						result += "<img src='" + die.get('imgsrc') + "' style='";
						result += (i%2==0 ? md_setting.style_delegate :  md_setting.style_observer);
						result += (die.get('name').includes('!') ? md_setting.style_broken : "") +"'>";
					});
					result += "</div>";
				}
				result += (i==1? "<div style='margin:10px 0px 10px 0px;'>vs</div>":"");
			}
			
			sendChat("",result);
	
		} catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
		}
	}
		else 	if (msg.content.indexOf("!소환") == 0) { 
			try {
				let current_page;
				const page_list = ms_setting.page_list.replace(/, /g,',').replace(/ ,/g,',').split(',');
				if (page_list.indexOf(getObj('page',Campaign().get("playerpageid")).get('name')) > -1) {
					current_page = Campaign().get("playerpageid");
				} else {
					const page = findObjs({type:'page',name:page_list[0]});
					if (page.length > 0) {
						current_page = page[0].get('_id');
					} else {
						sendChat("error","/w gm 이름이 **" + page[0] + "**인 페이지가 없습니다.",null,{noarchive:true});
						return;
					}
				}
	
				let opt = {
					left: ms_setting.opt_left+Math.random()*70,
					top: ms_setting.opt_top+Math.random()*70,
					width: ms_setting.opt_width,
					height: ms_setting.opt_height,
					showname: ms_setting.opt_showname,
					showplayers_name: true,
					bar1_value: 0,
					controlledby:"all",
					pageid: current_page,
					statusmarkers: "",
					layer: "objects"
				};
				const default_tokens = ["red", "blue", "green", "brown", "purple", "pink", "yellow"];
	
				let section = msg.content.split(/\s*--/g);
				let skill, type;
				let split = "";
				let effects = [];
				if (section.length < 3) {
					type = section[1];
				} else {
					skill = section[1];
					type = section[2];				
					const archetype = ms_setting.archetype_list.find(archetype => archetype.name == type);
					if (!archetype) {
						return;
					} else {
						split += archetype.effect;
					}
					if (section.length > 3) {
						split += "," + section[3]
					}
				}
					
				opt.name = (skill && ms_setting.display_skill ? skill+ (type && ms_setting.display_type ? "의 ":"") : "") + (type && ms_setting.display_type ? type:'');
				const token_markers = JSON.parse(Campaign().get("token_markers"));
				
				if (ms_setting.use_effect_marker || ms_setting.use_text) {
					split = split.split(/\s*,\s*/g);
					for (let index = 0; index < split.length; index++) {
						const element = split[index];
						const effect = element.replace(/\d/g,'');
						let number = element.replace(effect,'');
						for (let i = 0; i < ms_setting.effect_list.length; i++) {
							const fx = ms_setting.effect_list[i];
							if (effect == fx.marker || fx.keyword.split(",").indexOf(effect) > -1) {
								number = fx.non_numbering ? '' : number;
								let fx_obj = {display_name:fx.display_name,number:number};
								let duplicated_index = -1;
								for (let j = 0; j < effects.length; j++) {
									if (fx.display_name == effects[j].display_name) {
										duplicated_index = j;
										if (!fx.non_numbering) {
											number = (parseInt(effects[j].number) + parseInt(number.length>0?number:'0')) + "";
										}
										break;
									}
								}
								if (fx.use_bar && (number && number.length > 0)) {
									opt.bar1_value += parseInt(number);
									opt.bar1_max = opt.bar1_value;
									opt.showplayers_bar1 = true;
								} else if (fx.non_numbering || (number && number.length > 0)) {
									if (ms_setting.use_effect_marker) {
										let marker = token_markers.find(mark => mark.name == fx.marker+(ms_setting.use_text?'':number));
										if (!marker) {
											if (default_tokens.indexOf(fx.marker) > -1) {
												marker = {tag:fx.marker};
											} else {
												sendChat('error',"/w GM 사용할 수 있는 마커 중 이름이 **"+fx.marker+(ms_setting.use_text?'':number)+"**인 항목이 없습니다.",null,{noarchive:true});
												return;
											}
										}
										fx_obj.value = (ms_setting.use_text ?
											(marker.tag + (number.length>0?"@":'') + number) :
											marker.tag);
									} else if (ms_setting.use_text) {
										fx_obj.value = fx.display_name+number;
									}
									if (duplicated_index > -1) {
										effects.splice(duplicated_index,1,fx_obj);
									} else {
										effects.push(fx_obj);
									}
								}
							}
						}
					}
					if (ms_setting.use_effect_marker) {
						effects.forEach(element => {
							opt.statusmarkers += "," + element.value;
						});
						opt.statusmarkers = opt.statusmarkers.length > 0 ? opt.statusmarkers.substring(1) : '';
					} else if (ms_setting.use_text) {
						let str = "";
						for (let j = 0; j < effects.length; j++) {
							str += ms_setting.div_text + effects[j].value;
						}
						str = str.substring(1);
						log(str);
						opt.name = opt.name + (opt.name.length > 0 ? "/" : "") + str;
					}				
				}
				var archetype_deck = findObjs({ _type: 'deck', name: 'archetype'})[0];
				var archetype = findObjs({ _type: "card", _deckid: archetype_deck.get('_id'), name:type});
				if (archetype.length > 0) {
					opt.imgsrc = archetype[0].get('avatar').replace("med","thumb").replace("max","thumb");
					opt.gmnotes = (skill ? skill : '') + "," + type;
					createObj("graphic", opt);
				} else {
					sendChat('error',"/w GM 원형 타입 <"+type+">가 존재하지 않습니다.",null,{noarchive:true});
				}  
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}
		} else if (msg.content.indexOf("!저항 ") == 0 || msg.content.indexOf("!저항목표 ") == 0) {
			try {
				const table = [
					['황금','대지','숲','길','바다','정적','비','폭풍','태양','천공','이계'],
					['살','벌레','꽃','피','비늘','혼돈','이빨','외침','분노','날개','에로스'],
					['중력','바람','흐름','물','파문','자유','충격','우레','불','빛','원환'],
					['이야기','선율','눈물','이별','미소','마음','승리','사랑','정열','치유','시간'],
					['추억','수수께끼','거짓','불안','잠','우연','환각','광기','기도','희망','미래'],
					['심연','부패','배신','방황','나태','왜곡','불행','바보','악의','절망','죽음']
				];
				if (msg.selected.length > 0) {
					for (let i = 0; i < msg.selected.length; i++) {
						const tok = getObj("graphic", msg.selected[i]._id);
						const gmnotes = unescape(tok.get('gmnotes')).replace(/(<([^>]+)>)/gi, "");
						if (!gmnotes || gmnotes.length==0 || gmnotes.indexOf(',') < 0) {
							sendChat('error','/w GM **' + tok.get('name')  + '**은 원형토큰이 아니거나 GM 노트에서 원형의 특기와 타입을 가져올 수 없습니다.',null,{noarchive:true});
							return;
						}
						const split = gmnotes.split(',');
						const name = split[0];
						const type = split[1];
						const target = msg.content.replace("!저항목표 ",'').replace("!저항 ",'');
						if (!name || !target || name.length == 0 || target.length == 0) {
							sendChat('error','/w GM 원형의 특기를 가져올 수 없습니다.',null,{noarchive:true});
							return;
						}
						let target_x=-1;
						let target_y=-1;
						let arche_x=-1;
						let arche_y=-1;
						for (let i=0;i<table.length;i++) {
							for (let j=0;j<table[i].length;j++) {
								if (table[i][j] === target) {
									target_x = i;
									target_y = j;
								}
								if (table[i][j] === name) {
									arche_x = i;
									arche_y = j;
								}
							}
						}
						if (target_x == -1 || target_y == -1 || arche_x == -1 || arche_y == -1) { sendChat('error','/w GM 원형 혹은 판정할 특기의 이름이 잘못되었습니다.',null,{noarchive:true}); return;}
						let res_target = 5 + Math.abs(target_x-arche_x)*2 + Math.abs(target_y-arche_y);
						if (target_x != arche_x) { res_target -= 1; }
						if (res_target > 12) { res_target = 12; }
						if (msg.content.indexOf("!저항목표 ") > -1) {
							sendChat(name + "의 " + type, "**<" +target + ">**의 목표치: **" + res_target + "**");
						} else {
							if (ms_setting.use_custom_sheet) {
								sendChat(name + "의 " + type, "&{template:MagiDice} {{name=" + name + "의 " + type + "}} {{spec=" + target + "}}{{target=[[" + res_target + "]]}}{{roll1=[[1d6]]}}{{roll2=[[1d6]]}}");
							} else {
								sendChat(name + "의 " + type, "&{template:Magic} {{name=" + name + "의 " + type + "}} {{skillname=" + target + "}}{{target=[[" + res_target + "]]}}{{roll=[[1d6]],[[1d6]]}}");
							}
						}
					}
				} else {
					sendChat('error','/w GM 선택된 원형 토큰이 없습니다.',null,{noarchive:true});
				}
				
			} catch (err) {
				sendChat('error','/w GM '+err,null,{noarchive:true});
			}
		}
		else 	if (msg.content.indexOf("!avatar ") == 0) {
			try {
				let split = msg.content.split(/\s*--\s*/);
				if (split.length != 3) {
					sendChat("error", "/w \"" + msg.who + "\" 형식이 올바르지 않습니다. 아래의 형식으로 입력해주세요.<br>**!avatar --캐릭터이름 --주소**<br>*(이 안내메시지는 로그에 저장되지 않습니다.)*",null,{noarchive:true});
					return;
				}
				let chat_cha = findObjs({ _type: 'character', name: split[1]});
				if (chat_cha.length == 0) {
					sendChat("error", "/w \"" + msg.who + "\" 이름이 **" + split[1] + "**인 캐릭터가 저널에 없습니다. *(이 안내메시지는 로그에 저장되지 않습니다.)*",null,{noarchive:true});
				} else if (chat_cha[0].get('controlledby') == "all" || chat_cha[0].get('controlledby').indexOf(msg.playerid) > -1 || playerIsGM(msg.playerid)) {
					chat_cha = chat_cha[0];
					const current_avatar = chat_cha.get('avatar');
					if (msg.content.indexOf('https://') > -1) {
						chat_cha.set('avatar', split[2]);
						if (current_avatar == chat_cha.get('avatar')) {
							sendChat("error", "/w \"" + msg.who + "\" **" + split[1] + "**의 아바타 이미지가 변경되지 않았습니다. 외부 링크를 사용했거나 올바르지 않은 주소인지 확인해주세요. *(이 안내메시지는 로그에 저장되지 않습니다.)*",null,{noarchive:true});
						}
					} else {
						sendChat("error", "/w \"" + msg.who + "\" 주소형식이 올바르지 않습니다. *(이 안내메시지는 로그에 저장되지 않습니다.)*",null,{noarchive:true});
					}
				} else {
					sendChat("error", "/w \"" + msg.who + "\" **" + split[1] + "** 캐릭터에 권한이 없습니다. *(이 안내메시지는 로그에 저장되지 않습니다.)*",null,{noarchive:true});
				}
			} catch (err) {
				sendChat("error","/w gm " + err,null,{noarchive:true});
			}
		}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
	});
	
	
	//on change attribute
	on("change:attribute", function(obj, prev) {
		check_attribute(obj, prev);
		check_charge(obj, prev);
	});
	
	
	//on change graphic
	on("change:graphic", function(obj, prev) {
		try {
			if (obj.get('top') === prev.top && obj.get('left') === prev.left) return;
			if (obj.get('name') == 'ts_marker') {  
				const left = obj.get('left');
				const top = obj.get('top');
				const width = obj.get('width');
				const height = obj.get('height');
				const results = filterObjs(function(area) {    
					if (area.get('_type') == 'graphic' && area.get('_pageid') == obj.get('_pageid') && area.get('bar3_value') =='ts_trigger' &&
					area.get('left')-area.get('width')/2 -margin <=left-width/2 &&
					area.get('top')-area.get('height')/2 -margin<=top-height/2 &&
					area.get('top')+area.get('height')/2 +margin>= top+height/2 &&
					area.get('left')+area.get('width')/2 +margin>= left+width/2) {
						return true;
					} else return false;
				});
				const getDefaultName = function() {
					if (default_character == '') {
						return '';
					}
					let as_who = findObjs({_type: "character", name: default_character});
					if (as_who.length > 0) {
						as_who = "character|" + as_who[0].get('_id');
					} else {
						as_who = findObjs({_type: "player", _displayname: default_character});
						if (as_who.length > 0) {
							as_who = "player|" + as_who[0].get('_id');
						} else {
							as_who = default_character;
						}
					}
					return as_who;
				}
				if (results && results.length > 0) {
					var area = results[0];
					let attr = {};
					if (obj.get('gmnotes').length > 0) {
						try {
							attr = JSON.parse(unescape(obj.get('gmnotes')).replace(/(<([^>]+)>)/gi, ""));
						} catch (err) {
							sendChat("error","/w gm GM 노트에 기입된 텍스트의 형식이 맞지 않아 값을 초기화합니다. 기존에 입력된 값은 아래와 같습니다.<br>**" + unescape(obj.get('gmnotes')) +"**",null,{noarchive:true});
							obj.set('gmnotes','');
						}
					}
					let str = unescape(area.get('gmnotes'));
					str = str.replace(/<\/p>/g,'<br>');
					let split = str.split('<br>');
					for (var i=0;i<split.length;i++) {
						let final_str = split[i];
						const attr_match = final_str.match(/\{\{[^\}]+\}\}/g,'');
						if (attr_match) {
							attr_match.forEach(item => {
								if (item.includes(":")) {
									const attr_split = item.split(":");
									let add_value = parseInt(attr_split[1].replace(/[{}]/g,''));
									add_value = isNaN(add_value) ? 0 : add_value;
									let current_value = parseInt(attr[attr_split[0].replace(/[{}]/g,'')]);
									current_value = isNaN(current_value)  ? 0:current_value;
									attr[attr_split[0].replace(/[{}]/g,'')] = current_value + add_value;
									final_str = final_str.replace(item,'');
								} else {
									let current_value = parseInt(attr[item.replace(/[{}]/g,'')]);
									current_value = isNaN(current_value)  ? 0:current_value;
									final_str = final_str.replace(item,current_value);
								}
							});
						}
						const tag_match = final_str.match(/(<([^>]+)>)/gi);
						let is_rich_text = false;
						if (tag_match) {
							tag_match.forEach(item => {
								if (item.search(/<\/*[pbi]>/gi) < 0) {
									is_rich_text = true;
								}
							});
						}
						if (is_rich_text) {
							if (final_str.indexOf('!...') > -1) {
								final_str = final_str.replace(/\!\.\.\.\s*/g,"");
								final_str = "!..." + final_str;
							}
							sendChat(getDefaultName(), final_str);
						} else {
							let as_who;
							final_str = final_str.replace(/(<([^>]+)>)/gi, "");
							if (final_str.indexOf("/desc") == 0) {
								as_who = '';
							} else if (final_str.indexOf("/as") == 0 || final_str.indexOf("/emas") == 0) {
								const arr = final_str.split('"');
								let cha = findObjs({_type: "character", name: arr[1]})[0];
								if (cha) {
									as_who = "character|" + cha.get('_id');
								} else {
									as_who = arr[1];
								}
								if (final_str.indexOf("/emas") == 0) {
									final_str = "/em " + final_str.substring('/emas '.length + arr[1].length + 3);
								} else {
									final_str = final_str.substring('/as '.length + arr[1].length + 3);
								}
							} else {
								as_who = getDefaultName();
							}
							sendChat(as_who, final_str);
						}
						obj.set('gmnotes',JSON.stringify(attr));
					}
				}
			}
		} catch(err){
			sendChat("error","/w gm "+err,null,{noarchive:true});
		}
	});
	
	
	//on destroy graphic
	on("destroy:graphic", function(obj) {
		if (obj.get('name') == "vd_standing") {
			arrangeStandings(false);
		}
	});
	
	
	/* https://github.com/kibkibe
	/* https://github.com/kibkibe
	/* https://github.com/kibkibe
	/* https://github.com/kibkibe
	/* https://github.com/kibkibe
	
	
	