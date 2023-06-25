function getCookieByKey(key){
    let cookie = document.cookie;
    let list = cookie.split(';');
    for(let i = 0;i<list.length;i++){
        let c = list[i].trim();
        let index = c.indexOf(key);
        if(index==0){
            let v = c.substring(key.length+1,c.length);
            return v;
        }
    }
    return null;
}