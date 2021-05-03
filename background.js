//コンテクストメニュー　右クリック時に出る表示のやつ
chrome.contextMenus.create({
    "title" : "DeepL Input Text Formatter",
    "type"  : "normal",
    "contexts" : ["selection"],
    "onclick" : formatText()
});

//選択中の文字列を取得してカンマで区切って改行する
function formatText(info, tab){
    return function(info, tab){
        const selection_text = info.selectionText;
        var text_array = selection_text.split('.');
        let formatted_text = "";
        for (let i = 0; i < text_array.length; i++) {
            let sub_text;
            if(i !== 0) {
                sub_text = text_array[i].slice(1);
                console.log(sub_text);
            } else {
                sub_text = text_array[i];
            }
            sub_text += ".";
            sub_text += "\n";
            formatted_text += sub_text;
        }
        alert(formatted_text);
    }
}