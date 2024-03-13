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
        imageLink.style.display = "none"
        userInput.placeholder = '輸入欲傳送文字'
        userInput.type = 'text'
    } else{
        imageLink.style.display = "block"
        userInput.placeholder = '輸入欲傳送圖片網址'
        userInput.type = 'url'
    } 
}


function InputExist(){    
    if((sendType() == 'choose') && nowInput() == ''){
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
function sendAction(){
    if (sendType() == 'text'){
        return `message`
    }else{
        return `uri`
    }
}
function sendUri(){
    if (sendType() == 'text'){
        return false
    }else{
        return `${domain}${LIFF_ID_V2}?auto=yes&type=${sendType()}&downloadUrl=${utf8Convert()}&previewUrl=${utf8Convert()}`
    }
}
function sendMessage(){
    if (sendType() == 'text'){
        return `${nowInput()}`
    }else{
        return false
    }
}
