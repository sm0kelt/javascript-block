calculateHash()
    return SHA256(this.previousHash+ this.timestamp + JSON.stringify(this.data)).toString();

class Block {
    constructor(timestamp, data, previousHash = '') {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        // The calculation of the hash must be at the end so to ensure that all data is assigned correctly before calculation
        this.hash = this.calculateHash(); }

calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}
class BlockChain {
    constructor() {
        this.chain = [];
    }
}
createGenesisBlock() 
    return new Block("2018-11-11 00:00:00", "Genesis block of simple chain", "");

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
}

class BlockChain {
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    
    addBlock(newBlock) {
        // The previous hash value of the new block is the hash value of the last block of the existing blockchain；
        newBlock.previousHash = this.getLatestBlock().hash;
        // Recalculate the hash value of the new block (because the previousHash is specified)；
        newBlock.hash = newBlock.calculateHash(); 
        //Add new blocks to the chain；
        this.chain.push(newBlock); 
    }
    ...
}
isChainValid() {
    //Traverse all the blocks
    for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
        //Recalculate the has value of the current block. If the hash value is not matched, it indicates that data of the block was changed without permission, and therefore the has value is not recalculated.
        if (currentBlock.hash !== currentBlock.calculateHash()) {
            console.error("hash not equal: " + JSON.stringify(currentBlock));
            return false;
        }
        // Determine whether the previousHash of the current block is equal to the hash of the previous block. If they are not equal to each other, this means that the previous block was changed without permission. Although the hash value is recalculated correctly, the hash value of the subsequent block is not recalculated, resulting the the whole chain breaking.
        if (currentBlock.previousHash !== previousBlock.calculateHash) {
            console.error("previous hash not right: " + JSON.stringify(currentBlock));
            return false;
        }
    }
    return true;
}
let simpleChain = new BlockChain();
simpleChain.addBlock(new Block("2018-11-11 00:00:01", {amount: 10}));
simpleChain.addBlock(new Block("2018-11-11 00:00:02", {amount: 20}));


console.log(JSON.stringify(simpleChain, null, 4));

console.log("is the chain valid? " + simpleChain.isChainValid());