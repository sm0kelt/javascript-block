const SHA256 = require('crypto-js/SHA256');

class Block{
    constructor(index, timestamp, data, previousHash='') {
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash;
    }
    calculateHash() {
        return SHA256(this.index + this.timestamp +this.previousHash + JSON.stringify(this.data).toString);

    }
}
class Blockchain{
    constructor (){
        this.chain=[this.createGenesisBlock()];
    }
    createGenesisBlock(){
        return new Block (0, "01/01/2020","genesis block","0")
    }
    getLatestBlock(){
        return this.chain[this.chain.length -1]
    }
    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash;
        newBlock.hash=newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}
let savjeecoin= new Blockchain();
savjeecoin.addBlock(new Block(1,"10/10/2020",{amount: 4}))
savjeecoin.addBlock(new Block(1,"20/10/2020",{amount: 5}))
console.log(JSON.stringify(savjeecoin,null,4));