const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const optionsList = document.querySelectorAll(".option");
selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    searchBox.value = "";
    filterList("");
    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});
optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
searchBox.addEventListener("keyup", function(e) {
    filterList(e.target.value);
});
const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};
$("document").ready(function (){
    const cardNameInput = document.getElementById('cardName');
    const cardNameDiv = document.getElementById('cardNameText');
    const cardNumberInput = document.getElementById("cardNumber");
    const cardNumberDiv = document.getElementById("cardNumberText");

    const cardNameChange = function(e) {
        cardNameDiv.innerHTML = e.target.value;
    }
    cardNameInput.addEventListener('input', cardNameChange);

    const cardNumberChange = function(e) {
        cardNumberDiv.innerHTML = e.target.value;
    }
    cardNumberInput.addEventListener('input', cardNumberChange);

    $("#cardMoon").change(function (){
        var cardMoonSelect = $("#cardMoon").val();
        $("#cardMoonText").html(cardMoonSelect);
    });

    $("#cardYear").change(function (){
        var cardYearSelect = $("#cardYear").val();
        $("#cardYearText").html(cardYearSelect);
    });

    $("#nextStepBtn").click(function (){
        var dateOfEntry = $("#GirisTarihi").val();
        var exitDate = $("#CikisTarihi").val();
        var childNumber = $("#CocukSayisi").val();
        var adultNumber = $("#YetiskinSayisi").val();
        var otel = $(".selected").html();
        var otelCheck = $(".selected span").html();

        if(dateOfEntry == "" || exitDate == "" || childNumber == "" || adultNumber == "" || otelCheck == 'Rezervasyon yapmak istediğiniz oteli seçiniz.'){
            Swal.fire({
                title: 'Eksik Bilgi!',
                text: 'Lütfen Tüm Alanları Eksiksiz Doldurunuz.',
                icon: 'error',
                confirmButtonText: 'Tamam'
            });
        }else {
            $("#wizard-1").addClass("d-none");
            $(".step-box:first-child").removeClass("active");
            $(".step-box:nth-child(2)").addClass("active");
            $("#wizard-2").removeClass("d-none");
            window.scrollTo(0, 0);
        }
        $("p#hotelName").html(otel);
        $("span#girTah").html(dateOfEntry);
        $("span#cikTah").html(exitDate);
        $("span#cocuk").html(childNumber);
        $("span#yetiskin").html(adultNumber);

    });
    $("#nextStepBtn2").click(function (){
        var roomTypeCheck = $('input[name="roomType"]:checked').val();
        var viewTypeCheck = $('input[name="viewType"]:checked').val();
        if(typeof(roomTypeCheck) == "undefined" || typeof(viewTypeCheck) == "undefined" ){
            Swal.fire({
                title: 'Eksik Bilgi!',
                text: 'Lütfen Oda Tipi Seçimi Yapınız.',
                icon: 'error',
                confirmButtonText: 'Tamam'
            });
        }else {
            $("#wizard-2").addClass("d-none");
            $(".step-box:nth-child(2)").removeClass("active");
            $(".step-box:last-child").addClass("active");
            $("#wizard-3").removeClass("d-none");
            window.scrollTo(0, 0);
        }
        $("span#room").html(roomTypeCheck);
        $("span#view").html(viewTypeCheck);

    });
    $("#backPage").click(function (){
        $("#wizard-2").addClass("d-none");
        $(".step-box:first-child").addClass("active");
        $(".step-box:nth-child(2)").removeClass("active");
        $("#wizard-1").removeClass("d-none");
    });
    $("#backPage2").click(function (){
        $("#wizard-2").removeClass("d-none");
        $(".step-box:last-child").removeClass("active");
        $(".step-box:nth-child(2)").addClass("active");
        $("#wizard-3").addClass("d-none");
    });
    $("#nextStepBtn3").click(function (){
        var cardName = $("#cardName").val();
        var cardNumber = $("#cardNumber").val();
        var cardMoon = $("#cardMoon").val();
        var cardYear = $("#cardYear").val();
        var cvv = $("#cvv").val();
        if(cardName == "" || cardNumber == "" || cardMoon == "" || cardYear == "" || cvv == ""){
            Swal.fire({
                title: 'Eksik Bilgi!',
                text: 'Lütfen Kart Bilgilerini Eksisksiz Doldurunuz.',
                icon: 'error',
                confirmButtonText: 'Tamam'
            });
        }else{
            $(".step-area").addClass("d-none");
            $("#wizard-3").addClass("d-none");
            $("#wizard-4").removeClass("d-none");
            window.scrollTo(0, 0);
        }

    });
    $("#reservationBtn, #newReservastion").click(function (){
        location.reload();
    });
    $("#changeReservation").click(function (){
        $("#wizard-4").addClass("d-none");
        $(".step-area").removeClass("d-none");
        $("#wizard-1").removeClass("d-none");
        $(".step-box:first-child").addClass("active");
        $(".step-box:nth-child(2)").removeClass("active");
        $(".step-box:last-child").removeClass("active");
    });
    $("#cancelReservation").click(function (){
        $("#myModal").addClass("d-block")
    });
    $(".close").click(function (){
        $("#myModal").removeClass("d-block")
    });
    $("#reservationCancelSuccess").click(function (){
        Swal.fire({
            title: 'İptal',
            text: 'Rezervasyonunuz başarılı bir şekilde iptal edilmiştir.',
            icon: 'success',
            confirmButtonText: 'Tamam'
        });
        setTimeout(function() {
            location.reload();
        }, 3000);
    });
});