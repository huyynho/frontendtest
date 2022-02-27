function openTab(evt, yard) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(yard).style.display = "block";
    evt.currentTarget.className += " active";
  }

    const modal = document.querySelector(".modal");
    const openModalBtn = document.querySelector(".open-modal-btn");
    const iconCloseModal = document.querySelector(".modal__header i");
    const buttonCloseModal = document.querySelector(".modal__footer .btn-close");

    function toggleModal() {
    modal.classList.toggle("hide");
    }

    openModalBtn.addEventListener("click", toggleModal);
    iconCloseModal.addEventListener("click", toggleModal);
    buttonCloseModal.addEventListener("click", toggleModal);

    modal.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
    });

    var yardApi = 'https://6217240a71e7672e53749911.mockapi.io/api/v1/yards'

    fetch(yardApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(yards) {
            var htmls = yards.map(function(yard){
                return `
                <tr>
                    <td><input type="checkbox" id="myCheck" onclick="myFunction()"></td>
                    <td>${yard.id}</td>
                    <td>${yard.yardCode}</td>
                    <td>${yard.yardType}</td>
                    <td>${yard.locationX}</td>
                    <td>${yard.locationY}</td>
                    <td>${yard.lenghth}</td>
                    <td>${yard.width}</td>
                    <td>${yard.decription}</td>
                    <td>${yard.yardColor}</td>
                    <td>${yard.yardGroup}</td>
                </tr>`;
            });

            var html = htmls.join('');
            document.getElementById('list-yard').innerHTML = html;
            console.log(htmls.join(''));
    })