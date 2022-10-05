import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom/client';

import '@public/master.css';
import { App } from '@src/App';
import useCommittedList from '@src/hooks/use-committed-list.hooks';



const RootConfiguration: React.FC<PropsWithChildren> = ({ children }) => {
  const { Provider: CommittedListProvider, ...state } = useCommittedList();

  return (
    <CommittedListProvider value={state}>
      { children }
    </CommittedListProvider>
  );
};


ReactDOM.createRoot(document.getElementById('root') as Element)
  .render(
    <React.StrictMode>
      <RootConfiguration>
        <App />
      </RootConfiguration>
    </React.StrictMode>
  );
