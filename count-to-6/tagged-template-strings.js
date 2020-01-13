console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(t_str, ...args){
    var str = t_str[0];
    for (var i = 0; i < args.length; i++){
        str = str + modify(args[i]) + t_str[i+1];
    }
    return str;
}

function modify(value){
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
}
