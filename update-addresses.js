const { exec } = require("child_process");

var UniswapV2Factory_Address = '0x4c2A480d740153d4aBF9E47e2D06dee12cB7f8a1';
var INIT_CODE_PAIR_HASH = '0xbc5ed8570fac7e260b7cd93b8126f3025abf7bc6862554d9c61de8a2a259f042';
var UniswapV2Router01_Address = '0x8Ba42C5ae6091b540B0827ed4aC10B273D10FD8a';
var UniswapV2Router02_Address = '0x7816f76FADb4D4eF385F31fE7e4e20422e204121';

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
//UniswapV2Router01
const router1_cmd = "sed -ri -e \"s/0xf164fC0Ec4E93095b804a4795bBe1e041497b92a/"+UniswapV2Router01_Address+"/g\" $(grep -Elr --binary-files=without-match \"0xf164fC0Ec4E93095b804a4795bBe1e041497b92a\" --exclude=update-addresses.js)";
exec(router1_cmd, (error, stdout, stderr) => {
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
//UniswapV2Router02
const router2_cmd = "sed -ri -e \"s/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D/"+UniswapV2Router02_Address+"/g\" $(grep -Elr --binary-files=without-match \"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D\" --exclude=update-addresses.js)";
exec(router2_cmd, (error, stdout, stderr) => {
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
