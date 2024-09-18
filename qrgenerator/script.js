let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrimg");
let qrText = document.getElementById("qrText");
let printQr = document.querySelector(".printQr");

function generateQR(){

  if(qrText.value.length > 0){

    
  qrImg.src = ` https://barcode.orcascan.com/?type=code128&data=${qrText.value}`;

  imgBox.classList.add('show-img');
  printQr.innerHTML = ` ${qrText.value}`
    
  }else{
    
    setTimeout(() => {
      qrText.classList.add('error');
      
    }, 1000);
    
  }
}