function myLog(str){
    var logPanel = document.querySelector('#ericLog');
    if(!logPanel){
        logPanel = document.createElement('ul');
        logPanel.id = 'ericLog';
        document.body.appendChild(logPanel);
        logPanel.style.position = "fixed";
        logPanel.style.right = '0';
        logPanel.style.bottom = '0';
        logPanel.style.zIndex = '9999';
        logPanel.style.color = 'red';
        logPanel.style.fontSize = '20px';
    }
        var oLi = document.createElement('li');
        oLi.innerHTML = str;
        // console.log
        logPanel.insertBefore(oLi,(logPanel.children.length>0 && logPanel.children[0]) || null);
}