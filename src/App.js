import logo from './logo.svg';
import './App.css';
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";


function App() {

  const connect = async () => {
    // wallet connector provider
    const walletConnector = new WalletConnectConnector({
        rpc: {
          97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        },
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
        pollingInterval: 15000
    });
    await walletConnector.activate();
  }

  return (
    <div className="App">
        <button onClick={connect}>Connect</button>
    </div>
  );
}

export default App;
