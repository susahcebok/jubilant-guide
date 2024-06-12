var loadFile = function(event) {
var reader = new FileReader();
reader.onload = function() {
createOverlay(reader.result);
};
reader.readAsDataURL(event.target.files[0]);
};

var createOverlay = function(uploadImage) {
var baseImg = uploadImage;
Caman("#cvs", function () {
this.brightness(5).render();
this.newLayer(function() {
this.setBlendingMode("normal");
this.opacity(100);
this.overlayImage(baseImg);
});

this.newLayer(function() {
this.setBlendingMode("normal");
this.opacity(90);
this.overlayImage('picture.png');
});

$('#cvs').removeAttr('style');
});

$('#cvs').removeAttr('style');
};

function canvasToPng() {	
document.getElementById("share").innerHTML =
'<button onclick="del()">Hapus</button> <button onclick="shareCanvas()">Share</button>';

if ( document.getElementById("file").files.length == 0 ){
 //   alert("no files selected");
    output.innerHTML = "Tidak ada file yang dipilih!";
}
const canvas = document.getElementById('cvs');
canvas.toBlob((blob) => {
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "avatar.png";
link.click();
})
};

// function clearCanvas() {
// const  canvas = document.getElementById ("cvs");
// var context = canvas.getContext("2d");
// context.clearRect(0,0,canvas.width,canvas.height);
// image = null;
// canvas = null;
// imgFile = null;
// }

function del() {
var Reset = document.getElementById(“cvs”);
Reset.removeChild(Reset.childNodes[0]);
alert("Image deleted");
}
