import { useEffect, useRef, createRef, useState } from 'react'
import { useActions } from './hooks/useAction'
import { useTypedSelector } from './hooks/useTypedSelector'

function App() {
  const { fetchBrandsAC, toggleIsOpenAC, sortByAzOrZaAC } = useActions()
  const { brands, isLoading, error, sort } = useTypedSelector((state) => state.brand)

  useEffect(() => {
    fetchBrandsAC()
  }, [])

  if (isLoading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <button onClick={sortByAzOrZaAC}>{sort ? 'Z-A' : 'A-Z'}</button>
      {brands.map((el: any[]) => (
        <div key={el[0].group}>
          <div>
            <button onClick={() => toggleIsOpenAC(el[0].group)}>
              <h3>
                {el[0].group} ({el[1].length})
              </h3>
              <span>{el[0].isOpen ? '<<' : '>>'}</span>
            </button>
            <div>
              {el[0].isOpen
                ? el[1].map((brand: any) => (
                    <div key={brand._id}>{brand.title + ' ' + `(main: ${brand.main})`}</div>
                  ))
                : el[1].some((brand: any) => brand.main === true)
                ? el[1]
                    .filter((item: any) => item.main === true)
                    .slice(0, 5)
                    .map((brand: any) => (
                      <div key={brand._id}>{brand.title + ' ' + `(main: ${brand.main})`}</div>
                    ))
                : el[1]
                    .filter((item: any) => item.main === false)
                    .slice(0, 5)
                    .map((brand: any) => (
                      <div key={brand._id}>{brand.title + ' ' + `(main: ${brand.main})`}</div>
                    ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
