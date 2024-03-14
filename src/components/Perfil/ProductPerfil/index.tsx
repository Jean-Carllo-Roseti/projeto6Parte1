import { useState } from 'react'

import { DescriptionPerfil } from '../CardPerfil/styles'
import { CardProduct, Modal, ButtonModal, ImageX, ImgPrato } from './styles'
import Aside from '../AsideList'

type Props = {
  image: string
  title: string
  description: string
  onFechar: () => void
}

const ProductPerfil = ({ onFechar, title, image, description }: Props) => {
  const [isCardProductVisible, setIsCardProductVisible] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(true)
  const [sideON, setSideOn] = useState(false)

  const handleModalClick = (event: React.MouseEvent) => {
    //quando ocorrer o click no overlay a o mesmo some
    if (event.target === event.currentTarget) {
      setIsModalVisible(false)
    }
  }

  return isModalVisible ? (
    <>
      <Modal onClick={handleModalClick}>
        {isCardProductVisible && (
          <CardProduct>
            <ImageX
              src={image}
              alt="image de X "
              onClick={(event) => {
                event.stopPropagation()
                setIsModalVisible(false)
                onFechar()
              }}
            />
            <ImgPrato src={image} alt="imagem do prato." />
            <DescriptionPerfil>
              <h2>{title}</h2>
              <p>{description}</p>
              <ButtonModal
                onClick={() => {
                  setIsCardProductVisible(false)
                  setSideOn(true)
                }}
              >
                Acidionar ao carrinho-R$ 69,90
              </ButtonModal>
            </DescriptionPerfil>
          </CardProduct>
        )}
        <div
          className="overlay"
          onClick={() => {
            setIsModalVisible(false)
            onFechar()
          }}
        ></div>
      </Modal>
      {sideON && <Aside />}
    </>
  ) : null
}
export default ProductPerfil
