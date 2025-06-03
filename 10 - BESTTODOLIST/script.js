function opendate(){
    const popup = document.querySelector('.calendar-open')
    popup.classList.toggle('show');

    if (popup.classList.contains('show')){
        document.querySelector('.calendardate').focus();
    }
}

