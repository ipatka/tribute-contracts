pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

import "../core/DaoConstants.sol";
import "../core/DaoRegistry.sol";
import "../extensions/token/erc20/UnitToken.sol";
import "../guards/MemberGuard.sol";
import "../guards/AdapterGuard.sol";
import "./interfaces/IConfiguration.sol";
import "../adapters/interfaces/IVoting.sol";

/**
MIT License

Copyright (c) 2020 Openlaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

contract UnitTokenAdapterContract is DaoConstants, MemberGuard, AdapterGuard {
    /**
     * @notice default fallback function to prevent from sending ether to the contract.
     */
    receive() external payable {
        revert("fallback revert");
    }

    function approve(
        DaoRegistry dao,
        address recipient,
        uint256 amount
    ) external reentrancyGuard(dao) {
        UnitTokenExtension unitTokenExt =
            UnitTokenExtension(dao.getExtensionAddress(UNIT_TOKEN));
        unitTokenExt.approve(recipient, amount);
    }

    function transfer(
        DaoRegistry dao,
        address recipient,
        uint256 amount
    ) external reentrancyGuard(dao) {
        UnitTokenExtension unitTokenExt =
            UnitTokenExtension(dao.getExtensionAddress(UNIT_TOKEN));
        unitTokenExt.transfer(recipient, amount);
    }

    function transferFrom(
        DaoRegistry dao,
        address spender,
        address recipient,
        uint256 amount
    ) external reentrancyGuard(dao) {
        UnitTokenExtension unitTokenExt =
            UnitTokenExtension(dao.getExtensionAddress(UNIT_TOKEN));
        unitTokenExt.transferFrom(spender, recipient, amount);
    }
}
