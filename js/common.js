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


//제이쿼리 달력 
//현재 한페이지에 달력이 여러개 돌아가서 반복문 걸어둠 개발하면서 한페이지씩 떨어질 경우 수정요망
$( function() {
  $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
  $('.datepicker').each(function(i) { 
    i++;
    var dateFormat = "mm/dd/yy",
    from = $( "#from"+i)
    .datepicker({
      defaultDate: "+1w",
      changeMonth: false,
      numberOfMonths: 1
    })
    .on( "change", function() {
      to.datepicker( "option", "minDate", getDate( this ) );
    }),
    to = $( "#to"+i ).datepicker({
      defaultDate: "+1w",
      changeMonth: false,
      numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }

  }); 
} );










