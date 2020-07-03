$(document).ready(
    function() {
    
    // $.datepicker.regional['ru'] = {
    //     closeText: 'Закрыть',
    //     prevText: 'Предыдущий',
    //     nextText: 'Следующий',
    //     currentText: 'Сегодня',
    //     monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    //     monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    //     dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    //     dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    //     dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    //     weekHeader: 'Не',
    //     dateFormat: 'dd.mm.yy',
    //     firstDay: 1,
    //     isRTL: false,
    //     showMonthAfterYear: false,
    //     yearSuffix: ''
    // };
    // $.datepicker.setDefaults($.datepicker.regional['ru']);
   
    // $(".datepicker--nav-title").text(function delComma() {
    // if $(".datepicker--nav-title").contains
    // });
    //     console.log( delComma())
    $('.datepicker-here').datepicker({
    navTitles: {
        days: "MM <i>yyyy</i>",
        months: "yyyy",
        years: "yyyy1 - yyyy2"
        }
    });
   
});