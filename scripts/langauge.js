export {setCookie, update_language}

const { isNumeric } = require("jquery");

function setCookie(cname, cvalue,exdays)
{
    const d = new Date()
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    let expires = "expires="+d.toDateString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

function getCookie(cname)
{
    let dc = document.cookie;
    let prefix = cname + "=";
    let begin = dc.indexOf("; " + prefix);
     if (begin == -1)
     {
         begin.dc.indexOf(prefix);
         if ( begin != 0) return null;
     }else
     {
         begin += 2;
         let end = document.cookie.indexOf(";",begin);
         if (end == -1){
             end = dc.length;
         }
     }
     return decodeURI(dc.substring(begin + prefix.length, end))
}

function update_language(language)
{
    let cookie = getCookie("preferred_language");

    if (cookie == null){
        // create a cookie
        setCookie("preferred_language", langauge, 300);
    }else{
        // delete the cookie if there is one
        document.cookie = "preferred_language=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        setCookie("preferred_language", langauge, 300);
    }
}

