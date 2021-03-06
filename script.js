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
		name: "get_set_img_url",
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

$(function() {
	const loader = $("#loader");
	let listString = "";
	for (let i = 0; i < menuMap.length; i++) {
		const item = menuMap[i];
		listString += "<li><input id=\"" + item.name + "\" refurl=\"https://raw.githubusercontent.com/kibkibe/roll20-api-scripts/master/"
		+ (item.is_utility?"utilities":item.name) + "/" + item.name + ".js\" type=\"checkbox\"><label for=\""
		+ item.name + "\"></label><label for=\"" + item.name + "\">" + "<span>"
		+ item.name + ".js</span><br>" + item.desc + "</label><div class=\"opt\" style=\"display:none\">설정가능한 옵션이 표시될 예정입니다.</div><p></p></li>";
	}
	$("#scriptList").html(listString);

	$(":checkbox").on("click",function(){
		let checked = $(":checked");
		let unchecked = $(":checkbox").not(":checked");
		let string = "";
		if (checked.length == 0) {
			$('#result').html(string);
		} else {
			let loadedCount = 0;
			for (let index = 0; index < checked.length; index++) {
				const element = checked[index];
				$(element).siblings("div").css("display","block")
				loader.load(element.getAttribute("refurl"),
				function(responseTxt){
					string += responseTxt;
					loadedCount++;
					if (loadedCount == checked.length) {
						$('#result').html(string);
						loader.html("");
					}
				});
			}
		}
		for (let index = 0; index < unchecked.length; index++) {
			const element = unchecked[index];
			$(element).siblings("div").css("display","none")
		}
	});
	$(":button").on("click",function(){
		console.log('click');
		const result = document.getElementById("result");
		result.select();
		result.setSelectionRange(0, 999999);
		document.execCommand("copy");
	})
});
