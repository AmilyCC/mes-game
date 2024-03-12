let nowType = function sendType(){
    let type = document.getElementById('type').value
    return type 
}

function changeType() {
    initContent(nowType);
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
    let input = document.getElementById('userInput').value
    if((sendType() == 'choose') && input == ''){
        alert('選擇傳送訊息類型');
        return false;
    }else if((sendType() == 'text') && input == ''){
        alert('請輸入文字訊息')
        return false;
    }else if(sendType() == 'image'){
        const images = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];
        const lowerIuput = input.toLowerCase();
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

function sendInput(){
    let input = document.getElementById('userInput').value
    if (sendType() == 'text'){
        return `text=${input}`
    }else{
        return `downloadUrl=${input}&previewUrl=${input}`
    }
}
