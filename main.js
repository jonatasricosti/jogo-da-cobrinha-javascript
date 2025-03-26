const canvas = document.getElementById("janela");
const ctx = canvas.getContext('2d');

// objetos pra carregar arquivos
const tutorialImage = new Image();

// use essa função pra carregar arquivos
// nota: essa função só deve ser chamada no começo do programa
function LoadFiles()
{
    tutorialImage.src = "gfx/tutorial.bmp";
}


LoadFiles();

tutorialImage.onload = function()
{
	ctx.drawImage(tutorialImage, 0, 0); // desenha a imagem na posição 0,0
};