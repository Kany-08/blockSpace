import NftInstall from '../../components/NftInstall';
import NftHome from '../../components/NftHome';

export default function NftApp() {

  if (window.ethereum) {
    return <NftHome />;
  } else {
    return <NftInstall />
  }
}