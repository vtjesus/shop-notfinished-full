import { FC, useContext } from 'react'
import { ProductGrid } from '@/components/ProductGrid'
import { WidthLimiter } from '@/components/WidthLimiter'
import './index.scss'
import { ProductContext } from '@/context/ProductContext'
import { PageMeta } from '@/components/PageMeta'
import { appConfig } from '@/config'

export const HomePage: FC = () => {
  const productContext = useContext(ProductContext)

  return (
    <>
      <PageMeta title={`${appConfig.storeName} • Join the Gang`} description="Create your style with DOGS clothes" />

      <main className="home-page">
        <WidthLimiter>
          <ProductGrid products={productContext.products} fullHeight={true} />
        </WidthLimiter>
      </main>
    </>
  )
}
