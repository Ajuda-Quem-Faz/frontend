import Popup from 'reactjs-popup';
import '../../../index.css';
import UpdateProfile from '../updateprofile/UpdateProfile';

function ModalProfile() {
  return (
    <Popup
      trigger={
        <button className="py-2 px-4 rounded-lg bg-secondary-purpleLight text-white hover:text-primary-orangeDark hover:bg-secondary-purple shadow-lg">
          Atualizar Usuario
        </button>
      }
      modal
    >
      <div>
        <UpdateProfile />
      </div>
    </Popup>
  );
}

export default ModalProfile;
