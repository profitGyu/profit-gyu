import { useModalStore } from '@store/modalStore';
import MessageModal from '../MessageModal';

const GlobalModal = () => {
  const { isOpen, modalType, modalProps, closeModal } = useModalStore();

  if (!isOpen || !modalType || (modalType === 'MESSAGE' && !modalProps.message)) return null;

  return <MessageModal isOpen={isOpen} {...modalProps} onClose={closeModal} />;
};

export default GlobalModal;