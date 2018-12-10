$(document).ready(function() {
	var 
	$tablist1=$(".tablist-type1"),
	$tablist2=$(".tablist-type2");


	// 탭 갯수가 6개 이하일때 넓이 조절 이하일때 조절바 노출
	var tapN = $tablist1.find('a').length;
	if (tapN < 6) {
		var tapW = 1180/tapN;
		$tablist1.find('a').css( 'width', tapW+'px' );
	}else if(tapN > 6){
		$(".scroll-btn").addClass('active')
	}


	//탭 클릭 이벤트 
	$tablist1.find('a').on('click',function(e) {
		e.preventDefault();		
		$tablist1.find('a').removeClass('active');
		$(this).addClass('active');
		$(".tabpanel").removeClass('active');
		var panel = $(this).attr('href');
		//alert(panel.length);
		$(panel).addClass('active');
	});


	
	//select IE9 수정
	if ($("select").length){ 		
		$('select').each(function(i, e){
			var sele = $(this).prop('disabled');		
			if (sele==true) {		 			
				$(this).parent('label').addClass('disabled');
			}
		});
	}

	//위로가기 버튼 이벤트
	$('.top-btn').on('click', function(event) {		
		 $('html, body').animate({scrollTop : 0}, 400);
	});



});







