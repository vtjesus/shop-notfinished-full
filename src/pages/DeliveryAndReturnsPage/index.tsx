import { FC } from 'react'
import { Article } from '@/components/Article'
import './index.scss'
import { PageMeta } from '@/components/PageMeta'
import { appConfig } from '@/config'

export const DeliveryAndReturnsPage: FC = () => {
  return (
    <>
      <PageMeta title="Delivery and Returns • DOGS_CORP" description="Create your style with DOGS clothes" />

      <main className="delivery-and-returns-page">
        <Article>
          <h1>Delivery and Returns</h1>
          <p>The goods purchased in the {appConfig.storeName} store are shipped within 14 business days from the date of successful payment.</p>
          <p>
            Delivery of goods purchased in the {appConfig.storeName} store is possible throughout Ukraine (except for the temporarily occupied territories),
            Europe and the United Kingdom.
          </p>
          <p>There is no delivery to the so-called “russia” and “belarus” and will never be.</p>
          <h2>Ukraine</h2>
          <p>
            Delivery of goods on the territory of Ukraine is carried out by Nova Poshta LLC to the post office (to send to a post office or order courier
            delivery, please specify the necessary data in the comment section of your order). Delivery time is 1-3 business days. For more information on
            shipping, please visit the carrier’s website: tariffs and conditions.
          </p>
          <p>
            After the order is successfully sent, you will receive an SMS message with the express waybill number and arrival information. You can track your
            shipment on the tracking page.
          </p>
          <h2>Abroad</h2>
          <p>
            UkrPoshta delivers goods to Europe and the United Kingdom to the address specified in the order. After crossing the border of Ukraine, customs
            control and the national post office of the country of destination are responsible for delivery. Additional information about shipping can be found
            on the carrier’s website: tariffs and conditions.
          </p>
          <p>
            After the order is successfully sent, you will receive an email with the express waybill number to the email address you provided during the order.
            You can track your shipment on the tracking page.
          </p>
          <p>
            Please note that each country has its own import rules and customs tariffs. If your shipment exceeds the free import limit, customs may require
            additional payment of customs duties. Please check the tariffs and limits in advance with the customs representatives of the country to which you
            plan to place your order.
          </p>
          <p>
            Important: after the shipment arrives at the destination country, you need to fill out a customs declaration according to your order. You will be
            notified by the national post office of the country of destination of the need to fill out the customs declaration by the phone number and e-mail
            specified during the order.
          </p>
          <p>
            Please check your phone number and e-mail carefully before paying for your order. After successful payment of the order, you will receive an
            electronic receipt and a letter with all the order and delivery details to the specified e-mail. If you see an error, please contact us at{' '}
            <a href={`mailto:${appConfig.contactEmail}`}>{appConfig.contactEmail}</a>.
          </p>
          <h2>Returns</h2>
          <p>
            The goods may be returned within fourteen days after receipt, provided they are in good condition. Return shipping is paid by the buyer. If you
            would like to return the goods, please write to us at <a href={`mailto:${appConfig.contactEmail}`}>{appConfig.contactEmail}</a> to clarify the
            details and issue a refund.
          </p>
          <p>Please note that refunds are issued only after the store receives the goods.</p>
        </Article>
      </main>
    </>
  )
}
