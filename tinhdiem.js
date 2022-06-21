const check = () => {
    let math = +document.getElementById("math").value;
    let literature = +document.getElementById("literature").value;
    let english = +document.getElementById("english").value;
    let kv = document.getElementById("kv").value;

    switch(kv){
         case "KV1":
            let result = parseFloat(math) + parseFloat(literature) + parseFloat(english) + 0.75;
            alert("Điểm thi khối D của bạn là: " + result);
            break;
        case "KV2":
            let result1 = parseFloat(math) + parseFloat(literature) + parseFloat(english) + 0.5;
            alert("Điểm thi khối D của bạn là: " + result1);
            break;
        case "KV2-NT":
            let result2 = parseFloat(math) + parseFloat(literature) + parseFloat(english) + 0.25;
            alert("Điểm thi khối D của bạn là: " + result2);
            break;
        case "KV3":
            let result3 = parseFloat(math) + parseFloat(literature) + parseFloat(english);
            alert("Điểm thi khối D của bạn là: " + result3);
            break;
}
}