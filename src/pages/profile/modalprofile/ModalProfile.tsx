import Popup from 'reactjs-popup';
import './ModalProfile.css';
import 'reactjs-popup/dist/index.css';

import UpdateProfile from '../updateprofile/UpdateProfile';

function ModalProfile() {
  return (
    <Popup
      trigger={
        <button className="py-2 px-4 rounded-lg bg-secondary-purpleLight text-white hover:text-primary-orangeDark hover:bg-secondary-purple">
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
