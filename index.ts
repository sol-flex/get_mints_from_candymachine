import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import bs58 from "bs58";


const connection = new Connection(clusterApiUrl("mainnet-beta"));
const candyMachineId = new PublicKey("DE8Md86L3wwxQtBSKtCP5SURyjnsncy1tPrE4W278d9J");
const CANDY_MACHINE_V2_PROGRAM = new PublicKey(
  "cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"
);


const getCandyMachineCreator = async (
  candyMachine: PublicKey
): Promise<[PublicKey, number]> =>
  PublicKey.findProgramAddress(
    [Buffer.from("candy_machine"), candyMachine.toBuffer()],
    CANDY_MACHINE_V2_PROGRAM
  );

(async () => {
  const candyMachineCreator = await getCandyMachineCreator(candyMachineId);
  console.log(candyMachineCreator[0].toString());
  // getMintAddresses(candyMachineCreator[0]);
})();