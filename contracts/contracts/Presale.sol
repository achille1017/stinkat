pragma solidity ^0.8.0;

abstract contract ISTINKAT {
    function transfer(
        address recipient,
        uint256 amount
    ) external virtual returns (bool);
}

contract Presale {
    address payable public owner;
    uint256 public presalePrice;
    uint256 public totalPresaleTokensRemaining;
    uint256 public maxTokenPerUser;
    ISTINKAT public token;
    mapping(address => uint256) public balances;

    constructor(
        address _tokenAddress
    ) {
        owner = payable(msg.sender);
        token = ISTINKAT(_tokenAddress);
        presalePrice = 2200000;
        totalPresaleTokensRemaining = 4400000000000000000000000;
        maxTokenPerUser = 198000000000000000000000;
    }

    function buyTokens(uint256 _amount) public payable {
        require(
            msg.value == _amount * presalePrice,
            "Amount must be equal to the product of the amount of tokens and the presale price"
        );
        require(
            balances[msg.sender] + _amount <= maxTokenPerUser,
            "Exceeded the total amount of tokens for sale"
        );
        require(
            totalPresaleTokensRemaining - _amount > 0,
            "Not enough tokens remaining"
        );
        totalPresaleTokensRemaining -= _amount;
        balances[msg.sender] += _amount;
        token.transfer(msg.sender, _amount);
    }

    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        owner.transfer(address(this).balance);
    }
    function getTotalPresaleTokensRemaining() public view returns (uint256){
        return totalPresaleTokensRemaining;
    }
    function getBalance(address _address) public view returns (uint256){
        return balances[_address];
    }
}
