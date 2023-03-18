import '@/styles/globals.css';
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { 
  WagmiConfig,
  createClient,
  configureChains   
} from "wagmi";
import { 
  gnosis,
  gnosisChiado,
  localhost
} from "wagmi/chains";
import {
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";

const { provider, chains } = configureChains(
  [gnosisChiado, gnosis, localhost],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "GNUpool",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
