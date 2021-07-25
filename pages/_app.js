import  '../src/home/style/index.module.css';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

store.subscribe(() => {});

export default MyApp;
