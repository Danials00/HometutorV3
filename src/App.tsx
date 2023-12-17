import { memo} from 'react';
import './App.scss';
import MainWrapper from './CONTAINERS/main-wrapper';
//import Offline from './offline';
import './i18n'
import MainRouter from './ROUTERS/index';
//import { askForPermissionToReceiveNotifications } from './push-notification';

function App() {
  return (
    // <Offline>
    <MainWrapper>
      <MainRouter />
    </MainWrapper>
    // </Offline>
  );
}

export default memo(App);


