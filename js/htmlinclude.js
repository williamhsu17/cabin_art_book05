// document.addEventListener("DOMContentLoaded",function(){
//     let e=document.getElementsByTagName("include");
//     for(var t=0;t<e.length;t++){
//         let a=e[t];
//         n(
//             e[t].attributes.src.value, 
//             function(e){
//                 a.insertAdjacentHTML("afterend",e),
//                 console.log(e),
//                 executeScripts(e),
//                 a.remove()}
//         )
//     }
        
//     function n(e,t){
//         fetch(e).then(e=>e.text()).then(e=>t(e))
//     }
// });
document.addEventListener('DOMContentLoaded', async () => {
    const includes = Array.from(document.getElementsByTagName('include'));

    for (let includeTag of includes) {
        const src = includeTag.getAttribute('src');

        if (src) {
            const content = await fetchHTML(src);
            // includeTag.replaceWith(...content.body.childNodes);
            includeTag.insertAdjacentHTML("afterend", content);
            includeTag.remove();
            script_content = new DOMParser().parseFromString(content, 'text/html')
            executeScripts(script_content);
        }
    }
});

async function fetchHTML(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data
    // return new DOMParser().parseFromString(data, 'text/html');
}
function executeScripts(contentDocument) {
    console.log(contentDocument)
    const scripts = contentDocument.querySelectorAll("script");
    
    for(let script of scripts) {
        const newScript = document.createElement("script");
        if (script.src) {
            newScript.src = script.src;
        } else {
            newScript.textContent = script.textContent;
        }
        
        document.body.appendChild(newScript);
    }
}
