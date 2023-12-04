import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient} >
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
    </QueryClientProvider>
);