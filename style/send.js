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
function sendInput(){
    let input = document.getElementById('userInput').value
    if (sendtype()== "text"){
        return `text=${input}`
    }else{
        return `downloadUrl=${input}&previewUrl=${input}`
    }

}
