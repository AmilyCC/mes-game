function sendType(){
    let type = document.getElementById('type').value
    return type 
}
function nowInput(){
    let input = document.getElementById('userInput').value
    return input
}

function changeType() {
    initContent(sendType());
}

function initContent(type) {
    let userInput = document.getElementById('userInput')
    let imageLink = document.getElementById('imageLink')
    userInput.value = ''
    if (type == "text") {
        userInput.style.display = "block";
        imageLink.style.display = "none";
        userInput.placeholder = '輸入欲傳送文字';
        userInput.type = 'text';
    } else{
        userInput.style.display = "block";
        imageLink.style.display = "block";
        userInput.placeholder = '輸入欲傳送圖片網址';
        userInput.type = 'url';
    } 
}


function InputExist(){    
    if((sendType() == 'choose')){
        alert('選擇傳送訊息類型');
        return false;
    }else if((sendType() == 'text') && nowInput() == ''){
        alert('請輸入文字訊息')
        return false;
    }else if(sendType() == 'image'){
        const images = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];
        const lowerIuput = nowInput().toLowerCase();
        for (let image of images) {
            if (lowerIuput.endsWith(image)) {
                return true;
            }
        }
        alert('請輸入正確的圖片網址(.jpg/.png/.gif 等圖檔結尾)')
        return false;
    }else{
        return true;
    }
}
function utf8Convert(){
    let utf8EncodedText = encodeURIComponent(nowInput());
    return utf8EncodedText
}
function sendInput(){
    if (sendType() == 'text'){
        return `text=${utf8Convert()}`
    }else{
        return `downloadUrl=${utf8Convert()}&previewUrl=${utf8Convert()}`
    }
}
