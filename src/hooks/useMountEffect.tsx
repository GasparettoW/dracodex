import { useEffect, useRef } from 'react'

const useMountEffect = (callback: Function) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (!didMount.current) {
      callback()
      didMount.current = true
    }
  }, [])
}

export default useMountEffect
