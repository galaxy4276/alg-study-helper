import React from 'react';
import ReactDOM from 'react-dom/client';

import '@public/master.css';
import { App } from '@src/App';
import useCommittedList from '@src/hooks/use-committed-list.hooks';


const { Provider: CommittedListProvider, ...state } = useCommittedList();

ReactDOM.createRoot(document.getElementById('root') as Element)
  .render(
    <React.StrictMode>
      <CommittedListProvider value={state}>
        <App />
      </CommittedListProvider>
    </React.StrictMode>
  );
