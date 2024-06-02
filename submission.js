// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
//  NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT(name, artist, description, date) {
    const nft = {
        name: name,
        artist: artist,
        description: description,
        dateCreated: date
    };
    nftCollection.push(nft);
    console.log("New NFT \"" + nft.name + "\" minted.");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("\nName: " + nftCollection[i].name);
        console.log("Artist: " + nftCollection[i].artist);
        console.log("Description: " + nftCollection[i].description);
        console.log("Date Created: " + nftCollection[i].dateCreated);
        console.log("-----------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line

mintNFT("Cool Avtar", "Karan Singh", "A cool nft.", "30-09-2023");
mintNFT("Rare Fr", "Karan Singh", "A rare nft.", "06-01-2024");
mintNFT("Crypto Verse", "Samay Raina", "Another cool nft.", "03-04-2024");

listNFTs();
console.log("\nTotal Supply: " + getTotalSupply());
