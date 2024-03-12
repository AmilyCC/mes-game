function changeType() {
    let type = document.getElementById('type').value
    initContent(type);
}

function initContent(type) {
    let userInput = document.getElementById('userInput')
    userInput.value = ''
    if (type == "text") {
        userInput.placeholder = '輸入欲傳送文字'
        userInput.type = 'text'
    } else{
        userInput.placeholder = '輸入圖片網址'
        userInput.type = 'url'
    } 
}

function sendtype(){
    let type = document.getElementById('type').value
    return type 
}
function InputExist(){
    const images = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];
    let input = document.getElementById('userInput').value
    const lowerCaseUrl = input.toLowerCase();
    if(input == ''){
        alert('請輸入文字')
    }else if(sendtype() == "image"){
        for (let image of images) {
            if (lowerCaseUrl.endsWith(image)) {
                return ;
            }else{
                alert('請輸入正確的圖片網址')
            }
        }
    }else{
        return
    }
}

function sendInput(){
    InputExist()
    if (sendtype() == "text"){
        return `text=${input}`
    }else{
        return `downloadUrl=${input}&previewUrl=${input}`
    }
}
