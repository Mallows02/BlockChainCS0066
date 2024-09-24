/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _studentNum, _program, _campus) {

    const NFT = {
        "name": _name,
        "studentNum": _studentNum,
        "program": _program,
        "campus": _campus
    }
    NFTs.push(NFT);
    console.log();
    console.log("***********************")
    console.log("Minted: " + _name)
    console.log("***********************")
    console.log();
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("Name: \t\t\t\t",NFTs[i].name);
        console.log("Student#:  \t ",NFTs[i].studentNum);
        console.log("Program: \t\t\t",NFTs[i].program);
        console.log("Campus: \t\t\t",NFTs[i].campus);
        console.log();
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Total NFTs Created: ",NFTs.length);
}

// call your functions below this line
mintNFT("John Mherwin", 202110657 , "COMPUTER SCIENCE", "FEUTECH");
mintNFT("Mallows ", 202210655 , "INFORMATION TECHNOLOGY", "FEUA");
mintNFT("Calix", 202311135 , "MEDTECH", "FEU MANILA");
mintNFT("Wexford ", 202010454 , "ACCOUNTANCY", "FEU DILIMAN");
mintNFT("Komsay", 202410237 , "COMPUTER SCIENCE", "FEUTECH");
mintNFT("Marsh ", 201910255 , "NURSING", "FEU NRMH");
listNFTs();
getTotalSupply();
