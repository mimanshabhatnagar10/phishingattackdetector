function checkURL() {
    const url = document.getElementById("urlInput").value;
    let resultDiv = document.getElementById("result");

    if (!url) {
        resultDiv.innerHTML = "⚠️ Please enter a URL.";
        return;
    }

    // Basic phishing detection logic
    let suspicious = false;

    if (url.includes("@") || url.includes("//") && url.indexOf("//") !== url.lastIndexOf("//")) {
        suspicious = true;
    }
    if (url.length > 75) {
        suspicious = true;
    }
    if (url.includes("-") && url.split(".").length > 3) {
        suspicious = true;
    }

    if (suspicious) {
        resultDiv.innerHTML = "🚨 This URL looks *suspicious*!";
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = "✅ This URL looks safe.";
        resultDiv.style.color = "green";
    }
}
