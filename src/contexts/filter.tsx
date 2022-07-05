import { createContext, useState } from 'react'

export const FilterContext = createContext({
  activeFilter: '',
  order: '',
  filteredItems: [],
  setFilterTo: (filter: string) => {},
  setOrderTo: (order: string) => {},
  setFilteredItemsTo: (filteredItems: any) => {},
})

export const FilterProvider = ({ children }: any) => {
  const [activeFilter, setActiveFilter] = useState('')
  const [order, setOrder] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

  const setFilterTo = (filter: string) => {
    setActiveFilter(filter)
  }
  const setOrderTo = (order: string) => {
    setOrder(order)
  }
  const setFilteredItemsTo = (filteredItems: any) => {
    setFilteredItems(filteredItems)
  }

  return (
    <FilterContext.Provider
      value={{
        activeFilter,
        order,
        setFilterTo,
        setOrderTo,
        filteredItems,
        setFilteredItemsTo,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
