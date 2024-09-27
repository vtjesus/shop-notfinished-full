import { FC, useState } from 'react'
import './index.scss'
import { WidthLimiter } from '@/components/WidthLimiter'
import { WobblyLink } from '@/components/WobblyLink'
import { HelpModal } from '@/components/HelpModal'

export const Footer: FC = () => {
  const [isHelpOpened, setHelpOpened] = useState(false)

  return (
    <>
      <footer className="footer">
        <WidthLimiter>
          <div className="footer__inner">
            <div>
              DOGS <span className="family-alt">© 2024</span>
            </div>
            <WobblyLink text="Help" onClick={() => setHelpOpened(true)} />
          </div>
        </WidthLimiter>
      </footer>
      <HelpModal isOpen={isHelpOpened} onClose={() => setHelpOpened(false)} />
    </>
  )
}
