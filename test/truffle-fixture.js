const { toBN } = require("../utils/DaoFactory.js");

// Test Util Contracts
const OLToken = artifacts.require("OLToken");
const TestToken1 = artifacts.require("TestToken1");
const TestToken2 = artifacts.require("TestToken2");
const TestFairShareCalc = artifacts.require("TestFairShareCalc");
const PixelNFT = artifacts.require("PixelNFT");

// DAO Contracts
const DaoFactory = artifacts.require("DaoFactory");
const DaoRegistry = artifacts.require("DaoRegistry");
const NFTCollectionFactory = artifacts.require("NFTCollectionFactory");
const BankFactory = artifacts.require("BankFactory");
const Multicall = artifacts.require("Multicall");

// Extensions
const NFTExtension = artifacts.require("NFTExtension");
const BankExtension = artifacts.require("BankExtension");

// Config Adapters
const BankAdapterContract = artifacts.require("BankAdapterContract");
const NFTAdapterContract = artifacts.require("NFTAdapterContract");
const ConfigurationContract = artifacts.require("ConfigurationContract");
const ManagingContract = artifacts.require("ManagingContract");
const DaoRegistryAdapterContract = artifacts.require(
  "DaoRegistryAdapterContract"
);

// Voting Adapters
const VotingContract = artifacts.require("VotingContract");
const OffchainVotingContract = artifacts.require("OffchainVotingContract");
const KickBadReporterAdapter = artifacts.require("KickBadReporterAdapter");
const BatchVotingContract = artifacts.require("BatchVotingContract");
const SnapshotProposalContract = artifacts.require("SnapshotProposalContract");

// Withdraw Adapters
const RagequitContract = artifacts.require("RagequitContract");
const GuildKickContract = artifacts.require("GuildKickContract");
const DistributeContract = artifacts.require("DistributeContract");

// Funding/Onboarding Adapters
const FinancingContract = artifacts.require("FinancingContract");
const OnboardingContract = artifacts.require("OnboardingContract");
const TributeContract = artifacts.require("TributeContract");
const TributeNFTContract = artifacts.require("TributeNFTContract");
const CouponOnboardingContract = artifacts.require("CouponOnboardingContract");

module.exports = async () => {
  const daoRegistry = await DaoRegistry.new();
  DaoRegistry.setAsDeployed(daoRegistry);
  const daoFactory = await DaoFactory.new(daoRegistry.address);
  DaoFactory.setAsDeployed(daoFactory);
  const identityBank = await BankExtension.new();
  BankExtension.setAsDeployed(identityBank);
  const bankFactory = await BankFactory.new(identityBank.address);
  BankFactory.setAsDeployed(bankFactory);
  const nftExt = await NFTExtension.new();
  NFTExtension.setAsDeployed();
  const nftFactory = await NFTCollectionFactory.new(nftExt.address);
  NFTCollectionFactory.setAsDeployed(nftFactory);
  const voting = await VotingContract.new();
  VotingContract.setAsDeployed(voting);
  const configuration = await ConfigurationContract.new();
  ConfigurationContract.setAsDeployed(configuration);
  const ragequit = await RagequitContract.new();
  RagequitContract.setAsDeployed(ragequit);
  const managing = await ManagingContract.new();
  ManagingContract.setAsDeployed(managing);
  const financing = await FinancingContract.new();
  FinancingContract.setAsDeployed(financing);
  const onboarding = await OnboardingContract.new();
  OnboardingContract.setAsDeployed(onboarding);
  const guildkick = await GuildKickContract.new();
  GuildKickContract.setAsDeployed(guildkick);
  const daoRegistryAdapter = await DaoRegistryAdapterContract.new();
  DaoRegistryAdapterContract.setAsDeployed(daoRegistryAdapter);
  const bankAdapter = await BankAdapterContract.new();
  BankAdapterContract.setAsDeployed(bankAdapter);
  const nftAdapter = await NFTAdapterContract.new();
  NFTAdapterContract.setAsDeployed(nftAdapter);
  const couponOnboarding = await CouponOnboardingContract.new(1);
  CouponOnboardingContract.setAsDeployed(couponOnboarding);
  const tribute = await TributeContract.new();
  TributeContract.setAsDeployed(tribute);
  const distribute = await DistributeContract.new();
  DistributeContract.setAsDeployed(distribute);
  const tributeNFT = await TributeNFTContract.new();
  TributeNFTContract.setAsDeployed(tributeNFT);

  const oltToken = await OLToken.new(toBN("1000000000000000000000000"));
  OLToken.setAsDeployed(oltToken);
  const testToken1 = await TestToken1.new(1000000);
  TestToken1.setAsDeployed(testToken1);
  const testToken2 = await TestToken2.new(1000000);
  TestToken2.setAsDeployed(testToken2);
  const multicall = await Multicall.new();
  Multicall.setAsDeployed(multicall);
  const pixelNFT = await PixelNFT.new(100);
  PixelNFT.setAsDeployed(pixelNFT);

  const snapshotProposalContract = await SnapshotProposalContract.new(1);
  SnapshotProposalContract.setAsDeployed(snapshotProposalContract);
  const handleBadReporterAdapter = await KickBadReporterAdapter.new();
  KickBadReporterAdapter.setAsDeployed(handleBadReporterAdapter);
};
