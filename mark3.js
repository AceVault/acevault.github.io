document.toggle=function(a){const b=document.getElementById(a);b.checked?chrome.management.setEnabled(a,!0):chrome.management.setEnabled(a,!1)},"chrome.google.com"===location.hostname&&location.pathname.startsWith("/webstore")?chrome.management.getAll(a=>{function b(a){chrome.webstorePrivate.getExtensionStatus(a.id,b=>{if("force_installed"===b){var c=""===a.homepageUrl?`<b><p title="${a.description}">${a.name}</p></b>`:`<b><a href="${a.homepageUrl}" title="${a.description}">${a.name}</a></b>`;document.body.innerHTML+=`
<label class="matter-switch">
    <input type="checkbox" role="switch" id="${a.id}" ${a.enabled?"checked":""} onclick="toggle('${a.id}')">
    <span>${c}</span>
</label>
<br>
`}})}document.head.innerHTML=`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">



<style>
      body {
          font-family: 'Roboto', sans-serif;
      }
      a {
          text-decoration: none;
         color: blue
      }
      p {
          margin: 0px
      }
</style>
`,document.body.innerHTML=`
<h1 style="text-align: center">acevault's extension pooper</h1>
`,0===a.length?document.body.innerHTML+=`<p style="color: red">There are no school installed extensions</p>`:a.forEach(a=>b(a))}):(location.href="https://chrome.google.com/webstoreTROLLEDLMAOAOOAOAOAO");
