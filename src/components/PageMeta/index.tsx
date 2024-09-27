import { FC, useEffect, useState } from 'react'
import { Head } from 'vite-react-ssg'
import { IPageMetaProps } from './props'
import { appConfig } from '@/config'

export const PageMeta: FC<IPageMetaProps> = ({ title, description, image = '/android-chrome-512x512.png' }) => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href.split('?')[0])
  }, [])

  const imageSrc = `${appConfig.urlPrefix}${image}`

  return (
    <Head>
      {/* description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      {/* title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {/* image */}
      <meta name="og:image" content={imageSrc} />
      <meta name="twitter:image" content={imageSrc} />

      {/* url */}
      {url && (
        <>
          <meta property="og:url" content={url} />
          <link rel="canonical" href={url} />
        </>
      )}

      {/* other */}
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
    </Head>
  )
}
