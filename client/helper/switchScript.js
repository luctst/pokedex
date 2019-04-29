const switchScript = folderName => {
        const oldScript = document.querySelector("script");
        const newScript = document.createElement("script");

        newScript.setAttribute("src", `projects/${folderName}/bundle.js`);
        document.querySelector("body").replaceChild(newScript, oldScript);
}

export default switchScript;