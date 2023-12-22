import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRouter from './Router/MainRouter.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <HelmetProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <RouterProvider router={MainRouter} />
          </QueryClientProvider>
        </AuthProvider>
      </HelmetProvider>
    </DndProvider>
  </React.StrictMode>,
)