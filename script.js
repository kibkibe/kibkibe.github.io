const menuMap = [
	{
		name: "as_autofiller",
		is_utility: false,
		desc:"채팅에 명령어와 함께 NPC의 이름 일부를 기재하면 자동완성처럼 해당 NPC의 As로 채팅이 표시되도록 도와주는 스크립트입니다."
	},
	{
		name: "as_switcher",
		is_utility: false,
		desc:"캐릭터와 연결된 토큰을 이용해서 채팅의 As를 손쉽게 임시로 오갈 수 있도록 도와주는 스크립트입니다."
	},
	{
		name: "attribute_tracker",
		is_utility: false,
		desc:"캐릭터가 시트상에서 스테이터스를 변경하면 해당 내역을 채팅로그에 표시해주는 스크립트입니다."
	},
	{
		name: "avatar_setter",
		is_utility: false,
		desc:"플레이어가 새 세션방에 캐릭터를 등록할 때 아바타 이미지를 매번 새로 업로드하는 대신, 라이브러리에 올라가 있는 기존 이미지를 바로 적용시켜주는 스크립트입니다."
	},
	{
		name: "choice",
		is_utility: true,
		desc:"여러가지 선택지를 한번에 입력하면 랜덤하게 하나를 골라주는 명령어입니다."
	},
	{
		name: "flip_card",
		is_utility: true,
		desc:"우클릭으로 카드를 뒤집기 어려운 상황일 경우 명령어를 입력해서 대신 뒤집을 수 있도록 지원합니다."
	},
	{
		name: "hide_handouts",
		is_utility: true,
		desc:"등록된 핸드아웃을 일괄적으로 숨김처리 하는 스크립트입니다."
	},
	{
		name: "token_utility",
		is_utility: true,
		desc:"선택한 토큰의 이미지 주소를 확인 혹은 변경하거나 토큰의 상세정보를 열람하는 등 여러 기능들이 탑재되어 있습니다."
	},
	{
		name: "jukebox_amplifier",
		is_utility: true,
		desc:"캠페인 안의 jukebox 오디오들의 볼륨을 일괄적으로 최대치로 올리고 반복재생 옵션도 활성화 시켜주는 스크립트입니다."
	},
	{
		name: "narrator",
		is_utility: false,
		desc:"긴 나레이션을 특정 형식에 맞춰 한꺼번에 입력하면 시간차를 두고 한줄씩 출력되도록 도와주는 스크립트입니다."
	},
	{
		name: "ruby_character",
		is_utility: false,
		desc:"Roll20에서 루비 문자 입력을 구현해주는 스크립트입니다."
	},
	{
		name: "smallchat",
		is_utility: false,
		desc:"채팅창에 게임 진행내용보다 상대적으로 덜 눈에 띄는 서식으로 잡담을 표시 해주는 기능입니다."
	},
	{
		name: "smallchat_split",
		is_utility: false,
		desc:"화면내의 특정 영역이나 별도의 핸드아웃에 잡담채팅을 표시해주는 기능입니다."
	},
	{
		name: "temporary_chat",
		is_utility: true,
		desc:"게임 내 채팅화면에는 보이지만 채팅로그에는 남지 않게 메시지를 보낼 수 있도록 도와주는 스크립트입니다."
	},
	{
		name: "token_scripter",
		is_utility: false,
		desc:"토큰을 특정한 위치에 이동시키면 지정된 메시지를 표시해주는 스크립트입니다."
	},
	{
		name: "visual_dialogue",
		is_utility: false,
		desc:"비주얼노벨 스타일의 채팅 화면을 구현해주는 스크립트입니다."
	},
	{
		name: "magicalogia_install_magic",
		is_utility: false,
		desc:"채팅창을 통해 마기카로기아 캐릭터 시트의 장서목록을 한번에 입력할 수 있는 기능입니다."
	},
	{
		name: "magicalogia_mana_token",
		is_utility: false,
		desc:"저널에서 캐릭터의 장서 설정을 읽어와 자동으로 마소차지용 토큰을 생성해주는 스크립트입니다."
	},
	{
		name: "magicalogia_match_dice",
		is_utility: false,
		desc:"스펠바운드에 플롯된 다이스를 집계한 뒤 공방판정 후 남은 다이스를 채팅창에 표시하는 기능입니다."
	},
	{
		name: "magicalogia_summon",
		is_utility: false,
		desc:"채팅창에 명령어를 입력하는 방식으로 원형 토큰을 손쉽게 생성할 수 있도록 도와주는 스크립트입니다."
	}];
	
const areaList = {
	option: {
		comment: "define: option",
		start_code: "// option",
		end_code: ""
	},
	global_constant:{
		comment: "define: global constant",
		start_code: "// global constant",
		end_code: ""
	},
	ready:{
		comment: "on.ready",
		start_code: "//on ready \non('ready', function() {",
		end_code: "});"
	},
	chat_message:{
		comment: "on.chat:message",
		start_code: "//on chat \non(\"chat:message\", function(msg) {",
		end_code: "});"
	},
	chat_message_api:{
		comment: "on.chat:message:api",
		start_code: "if (msg.type == \"api\"){",
		end_code: "}",
		parents: "chat_message"
	},
	chat_message_general:{
		comment: "on.chat:message:general",
		start_code: "if (msg.type == \"general\"){",
		end_code: "}",
		parents: "chat_message"
	},
	change_attribute:{
		comment: "on.change:attribute",
		start_code: "//on change attribute\non(\"change:attribute\", function(obj, prev) {",
		end_code: "});"
	},
	change_graphic:{
		comment: "on.change:graphic",
		start_code: "//on change graphic\non(\"change:graphic\", function(obj, prev) {",
		end_code: "});"
	},
	destroy_graphic:{
		comment: "on.destroy:graphic",
		start_code: "//on destroy graphic\non(\"destroy:graphic\", function(obj) {",
		end_code: "});"
	},
	global_function:{
		comment: "define: global function",
		start_code: "",
		end_code: ""
	}
};

let finalCodeWithoutOptions = "";
let options = {};
let checkedScripts = "";

function escapeQuot(str) {
	return str.replace(/"/g,"&quot;");
}
function unescapeQuot(str) {
	return str.replace(/\&quot\k/g,"\"");
}

function check(label) {
	options[label.getAttribute("for")] = !$("#"+label.getAttribute("for")).prop("checked")? "true": "false";
	applyOptions();
}

function setOption(input) {
	options[input.getAttribute("id")] = input.value;
	applyOptions();
}

function applyOptions() {
	let finalCode = finalCodeWithoutOptions + "";
	const keys = Object.keys(options);
	for (let j = 0; j < keys.length; j++) {
		const key = keys[j];
		finalCode = finalCode.replace("{"+key+"}",options[key]);
	}
	setCookie();
	$('#result').html(finalCode);
}

function setCookie() {
	if (Object.keys(options).length > 0) {
		document.cookie = "options=" + encodeURIComponent(JSON.stringify(options));
	}
	if (checkedScripts.length > 0) {
		document.cookie = "scripts=" + encodeURIComponent(checkedScripts);
	} else {
		document.cookie = "scripts=expire;max-age=-1";
	}
}

function selectedScript(checkbox) {
	let checked = $(".scriptList").filter(":checked");
	if ($(checkbox).prop("checked") && checkedScripts.indexOf(checkbox.id) == -1) {
		checkedScripts += "//" + checkbox.id;
	} else if (!$(checkbox).prop("checked")  && checkedScripts.indexOf(checkbox.id) > -1) {
		checkedScripts = checkedScripts.replace("//"+checkbox.id,"");
	}
	let boxes = $(".scriptList").not(":checked");
	for (let index = 0; index < boxes.length; index++) {
		const element = boxes[index];
		$(element).siblings("div").css("display","none")
	}
	let string = "";
	const marker = "//codemarker::**::";
	if (checked.length == 0) {
		$('#result').html(string);
	} else {
		let loadedCount = 0;
		let contentList = {};
		for (let index = 0; index < checked.length; index++) {
			const element = checked[index];
			if (!element.getAttribute("refurl")) {
				console.log('일시적인 오류가 발생했습니다.');
				return;
			}
			jQuery.ajax({ 
				url: element.getAttribute("refurl"), dataType: "text" 
			}).done(function( responseTxt ) {
				let script_info = responseTxt.match(/\(\w+\.js\) \d{6}/);
				let script_name = "";
				if (script_info) {
					string += "// " + script_info[0] + "\n";
					script_name = script_info[0].replace(/.js\) \d{6}/,"").replace("(","");
				}

				const keys = Object.keys(areaList);
				for (let index = 0; index < keys.length; index++) {
					let key = keys[index];
					let area = areaList[key];
					if (responseTxt.indexOf(area.comment+"\n")>-1) {
						let code = responseTxt.substring(
							responseTxt.indexOf("// "+area.comment+"\n") + ("// "+area.comment+"\n").length,
							responseTxt.indexOf("// /"+area.comment+"\n"));
						let is_initial = false;
						if (!contentList[key]) {
							is_initial = true;
							contentList[key] = "\n\n"+area.start_code
							+ "\n"+marker.replace("**",area.comment)
							+ "\n"+area.end_code;
							if (area.parents) {
								if (contentList[area.parents]) {
									contentList[area.parents] = contentList[area.parents].replace(marker.replace("**",areaList[area.parents].comment),
									marker.replace("**",areaList[area.parents].comment)+ "\n"+marker.replace("**",area.comment));
								} else {
									contentList[area.parents] = "\n\n"+areaList[area.parents].start_code
									+ "\n"+marker.replace("**",areaList[area.parents].comment)
									+ "\n"+marker.replace("**",area.comment)
									+ "\n\n"+areaList[area.parents].end_code;
								}
							}
						} else if (key == 'global_constant') {
							const match = code.match(/const .*=.*;/g);
							if (match) {
								for (let j = 0; j < match.length; j++) {
									let itm = match[j];
									itm = itm.substring(0,itm.indexOf("="));
									if (contentList[key].indexOf(itm) > -1) {
										code = code.replace(match[j],'');
									}
								}
							}
						}
						if (key == "option") {
							const part = code.split("// option: ");
							let opt_html = "";
							code = part[0].replace("\t","");

							for (let j = 1; j < part.length; j++) {
								let opt = "// " + part[j].replace(/\t/g,"");
								let opt_value = opt.replace(/\/\/ .*/g,"").replace(/\n\n/g,"")
								let opt_desc = opt.replace(opt_value,"").replace(/\/\/ /g,"");
								let opt_name = opt_value.substring(0,opt_value.indexOf(":")).replace(/\s/g,"");
								opt_value = opt_value.substring(opt_value.indexOf(':')+2,opt_value.length);
								while (opt_value[opt_value.length-1] == "\t" || opt_value[opt_value.length-1] == ";" || opt_value[opt_value.length-1] == "}" ||
								opt_value[opt_value.length-1] == "," || opt_value[opt_value.length-1] == "\n" || opt_value[opt_value.length-1] == " ") {
									opt_value = opt_value.substring(0,opt_value.length-1);
								}
								const opt_id = script_name + "_" + opt_name;
								if (options[opt_id]) {
									opt_value = options[opt_id];
								} else {
									options[opt_id] = opt_value;
								}
								let html_desc = opt_desc;
								const desc_match = html_desc.match(/https*:\/\/[^\s]+/);
								if (desc_match) {
									for (let k = 0; k < desc_match.length; k++) {
										const mtch = desc_match[k];
										html_desc = html_desc.replace(mtch,"<a href=\""+mtch+"\" target=_blank>[LINK]</a>");
									}
								}
								opt_html += "<strong><span class=\"tree\">ㄴ</span> " + opt_name + "</strong><div class=\"opt-item\">"+ html_desc + "<br>";
								if (opt_value == "true" || opt_value == "false") {
									opt_html += "<input id=\"" + opt_id + "\" type=\"checkbox\" class=\"optionCheck\""
									+ "><label for=\"" + opt_id + "\" onClick=\"javascript:check(this)\"></label>";
								} else if (opt_value[0] == "[" || opt_value[1] == "{") {
									opt_html += "<textarea onInput=\"javascript:setOption(this)\" id=\"" + opt_id + "\" class=\"input-text\">" + opt_value + "</textarea>";
								} else {
									opt_html += "<input onInput=\"javascript:setOption(this)\" id=\""+ opt_id + "\" class=\"input-text\""
									+ (opt_value[0] == "\"" && opt_value[opt_value.length-1] == "\"" ? " hasQuot":"") + "\" type=\"text\" value=\""
									+ escapeQuot(opt_value) + "\">";
								}
								opt_html += "</div>";
								code += "// " + opt_desc.replace("\n","\n// ") + "\n" + opt_name + ": {" + opt_id + "}" + (j < part.length -1 ? ",\n":"};");

							}
							let opt_div = $("#"+script_name).siblings("div");
							opt_div.css("display","block");
							opt_div.html(opt_html);
						}
						contentList[key] = contentList[key].replace(marker.replace("**",area.comment),
							((area.parents && !is_initial) ? "else " : "") + code
							+((area.parents && !is_initial) ? "" : "\n")+marker.replace("**",area.comment)+"\n");
					}
				}
				loadedCount++;
				if (loadedCount == checked.length) {
					for (let index = 0; index < keys.length; index++) {
						let str = contentList[keys[index]];
						if (str) {
							const area = areaList[keys[index]];
							if (area.parents) {
								string = string.replace(marker.replace("**",area.comment),str);
							} else {
								string += str.replace(marker.replace("**",area.comment)+"\n","").replace(/\n+\t*\n+/g,"\n") + "\n\n";
							}
						}
					}
					string = string.replace(/\/\/codemarker::.*::/g,'');
					finalCodeWithoutOptions = string;
					applyOptions();
					let optionBoxes = $("input[class=optionCheck]");
					for (let j = 0; j < optionBoxes.length; j++) {
						const box = optionBoxes[j];
						$(box).prop("checked", options[box.getAttribute("id")] == "true");
					}
				}
			});
		}
	}
}

$(function() {
	console.log("ver.26");

	let listString = "";
	for (let i = 0; i < menuMap.length; i++) {
		const item = menuMap[i];
		listString += "<li><input id=\"" + item.name + "\" refurl=\"https://raw.githubusercontent.com/kibkibe/roll20-api-scripts/master/"
		+ (item.is_utility?"utilities":item.name) + "/" + item.name + ".js\" type=\"checkbox\" class=\"scriptList\"><label for=\""
		+ item.name + "\"></label><label for=\"" + item.name + "\">" + "<span>"
		+ item.name + ".js</span><br>" + item.desc + "</label><div class=\"opt\" style=\"display:none\"></div><p></p></li>";
	}
	$("#scriptList").html(listString);

	try {
		const temp = document.cookie;
		if (temp && temp.length > 0) {
			let str = temp.split(/\s*;\s*/);
			for (let index = 0; index < str.length; index++) {
				const item = decodeURIComponent(str[index]);
				if (item.indexOf("options=") == 0) {
					options = JSON.parse(item.replace('options=',""));
				} else if (item.indexOf("scripts=") == 0) {
					checkedScripts = item.replace('scripts=',"");
					const split = checkedScripts.split("//");
					for (let index = 1; index < split.length; index++) {
						$("#"+split[index]).prop("checked",true);
						if (index == split.length -1) {
							selectedScript($("#"+split[index]));
						}
					}
				}
			}
		}
	} catch (err) {
		console.log(err);
		document.cookie = "scripts=expire;max-age=-1";
		document.cookie = "options=expire;max-age=-1";
	}

	$(".scriptList").on("click",function(event){
		selectedScript(event.currentTarget);
	});
	$(":button").on("click",function(){
		const result = document.getElementById("result");
		result.select();
		result.setSelectionRange(0, result.value.length);
		document.execCommand("copy");
	})
});
