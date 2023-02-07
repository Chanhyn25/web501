function loadScript(src, callback) {
    const script = document.createElement("script"); // <script>
    script.src = src; // <script src="https://javascript.info/callbacks"></script
    script.onload = () => callback(script);
    script.onerror = () => callback(new Error("Load script failed"));
    document.head.append(script); // <head><script src="https://javascript.info/callbacks"></script</head>
}

loadScript("https://dasdasdasd.info/callbacks", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        // thanh cong
        console.log(data);
    }
});
