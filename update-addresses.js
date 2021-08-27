const { exec } = require("child_process");

var UniswapV2Factory_Address = '0x34DF7e74aC1693950c721a33d65705C63d69BC17';
var INIT_CODE_PAIR_HASH = '0xacc5cac6a81f463df7bf86511df475c855e730fbdb90c4b0e073a5ce5d3f2300';
var UniswapV2Router_Address = '0x97E54F302490cadd87Afc44ed575Eccc96E7A99c';

//UniswapV2Factory
const factory_cmd = "sed -ri -e \"s/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f/"+UniswapV2Factory_Address+"/g\" $(grep -Elr --binary-files=without-match \"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f\" --exclude=update-addresses.js)";
exec(factory_cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
//INIT_CODE_PAIR_HASH
const hash_cmd = "sed -ri -e \"s/0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f/"+INIT_CODE_PAIR_HASH+"/g\" $(grep -Elr --binary-files=without-match \"0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f\" --exclude=update-addresses.js)";
exec(hash_cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
//UniswapV2Router
const router_cmd = "sed -ri -e \"s/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D/"+UniswapV2Router_Address+"/g\" $(grep -Elr --binary-files=without-match \"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D\" --exclude=update-addresses.js)";
exec(router_cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
