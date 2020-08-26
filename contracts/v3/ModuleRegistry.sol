pragma solidity ^0.7.0;

import '../Ownable.sol';

// SPDX-License-Identifier: MIT

contract ModuleRegistry is Ownable {
    mapping(bytes32 => address) registry;
    mapping(address => bytes32) inverseRegistry;

    constructor() {
        bytes32 ownerId = keccak256("owner");
        registry[ownerId] = msg.sender;
        inverseRegistry[msg.sender] = ownerId;
    }

    modifier onlyWhitelist {
        require(inverseRegistry[msg.sender] != bytes32(0), "this function can only be called by a whitelisted module");
        _;
    }

    function updateRegistry(bytes32 moduleId, address moduleAddress) onlyWhitelist external {
        require(moduleId != bytes32(0), "moduleId must not be empty");
        require(moduleAddress != address(0x0), "moduleAddress must not be empty");
        registry[moduleId] = moduleAddress;
        inverseRegistry[moduleAddress] = moduleId;
    }

    function removeRegistry(bytes32 moduleId) onlyWhitelist external {
        require(moduleId != bytes32(0), "moduleId must not be empty");
        require(registry[moduleId] != address(0x0), "moduleId not registered");
        delete inverseRegistry[registry[moduleId]];
        delete registry[moduleId];
    }

    function getAddress(bytes32 moduleId) view external returns(address) {
        return registry[moduleId];
    }
}