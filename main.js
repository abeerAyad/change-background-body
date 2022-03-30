document.querySelector('button').addEventListener('click',changeColor)
function changeColor () {
    let numberHexCode=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let numberHexCode2=['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9'];
    let hexCode = "";
    let hexColor="";
    for (let i=0; i < 6 ; i++) {
        let randomNumber=Math.floor(Math.random()*numberHexCode.length);
        hexCode+=numberHexCode[randomNumber]
        hexColor+=numberHexCode2[randomNumber]
    }
    document.querySelector('span').innerHTML=`#${hexCode} , #${hexColor}`;
    document.querySelector('body').style.backgroundImage=`linear-gradient(to right,#${hexCode},#${hexColor})`;
}
