import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext, AuthProvider } from '@/contexts/auth'
import { Login } from '@/pages/Login'
import { NotFound } from '@/pages/NotFound'
import { DragonList } from '@/pages/Dragon/DragonList'
import { DragonDetail } from '@/pages/Dragon/DragonDetail'
import { DragonEdit } from '@/pages/Dragon/DragonEdit'
import { DragonNew } from '@/pages/Dragon/DragonNew'
import { Header } from '@/components/Header'

export default function MainRoutes() {
  const Private = ({ children }: any) => {
    const { isAuthenticated } = useContext(AuthContext)
    return isAuthenticated ? (
      <>
        <Header />
        {children}
      </>
    ) : (
      <Navigate to='/login' />
    )
  }

  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/'
          element={
            <Private>
              <DragonList />
            </Private>
          }
        />
        <Route path='login' element={<Login />} />
        <Route
          path='dragon'
          element={
            <Private>
              <DragonList />
            </Private>
          }
        />
        <Route
          path='dragon/:dragonId'
          element={
            <Private>
              <DragonDetail />
            </Private>
          }
        />
        <Route
          path='dragon/new'
          element={
            <Private>
              <DragonNew />
            </Private>
          }
        />
        <Route
          path='dragon/:dragonId/edit'
          element={
            <Private>
              <DragonEdit />
            </Private>
          }
        />

        <Route
          path='*'
          element={
            <>
              <NotFound />
            </>
          }
        />
      </Routes>
    </AuthProvider>
  )
}
