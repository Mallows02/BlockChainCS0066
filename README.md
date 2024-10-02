# CREATE A TOKEN

This Solidity program is a basic token contract that demonstrates the functionality of minting and burning tokens. The purpose of this program is to introduce key Solidity concepts while showing how tokens can be created and destroyed, all while managing a total supply and user balances. This is a great starting point for understanding smart contract development in Ethereum.

## Description

This contract is written in Solidity and represents a simple token system for a token called FEUTECH, abbreviated as FIT. It features two key functions:

- Minting tokens, which increases the total supply and the balance of a specified address.
- Burning tokens, which reduces the total supply and the balance of a specified address, ensuring that the address has enough tokens to burn.
This contract showcases basic operations for token management and can be extended for more complex use cases.
## Getting Started

### Executing program

1. To run this program, you can use Remix, an online IDE for Solidity. You can access it by going to the Remix website at https://remix.ethereum.org/.

2. Once on the Remix IDE, follow these steps to run the code:

3. Create a new file by clicking the "+" icon in the left sidebar. Name it MyToken.sol.

4. Copy and paste the following code into the file:
```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract MyToken {

    // Public variables
    string public tokenName = "FEUTECH";
    string public tokenAbbrv = "FIT";
    uint public totalSupply = 0;

    // Mapping of addresses to their balances
    mapping (address => uint) public balances;

    // Mint function: Increases the total supply and balance of the _to address
    function mint(address _to, uint _value) public {
        totalSupply += _value;
        balances[_to] += _value;
    }

    // Burn function: Decreases the total supply and balance of the _to address
    function burn(address _to, uint _value) public {
        require(balances[_to] >= _value, "Insufficient balance to burn");
        balances[_to] -= _value;
        totalSupply -= _value;
    }
}


```
5. Next, go to the "Solidity Compiler" tab in the sidebar. Ensure that the compiler version is set to 0.8.26, which matches the version specified in the code. Then click "Compile MyToken.sol."

6. Once the contract is compiled, navigate to the "Deploy & Run Transactions" tab. From the contract dropdown menu, select MyToken and click the "Deploy" button.

7. After deploying, you can interact with the contract by minting and burning tokens:
   - To mint tokens, click the mint function, provide an address and token amount, then click "transact."
   - To burn tokens, use the burn function with the address and token amount, ensuring the address has enough balance to burn.


## Author

John Mherwin Flores Mariñas

 Bachelor of Science in Computer Science with Specialization in Software Engineering
202110657@fit.edu.ph


## License

This project is licensed under the John Mherwin Flores Mariñas - see the LICENSE.md file for details
