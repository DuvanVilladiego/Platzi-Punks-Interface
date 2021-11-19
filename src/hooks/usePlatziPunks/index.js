import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import PlatziPunksArtifact from "../../config/web3/artifacts/PlatziPunks";

const { address, abi } = PlatziPunksArtifact;

const usePlatziPunks = () => {
  const { active, library, chainId } = useWeb3React();

  const PlatziPunks = useMemo(() => {
    if(active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return PlatziPunks;
};

export default usePlatziPunks;
