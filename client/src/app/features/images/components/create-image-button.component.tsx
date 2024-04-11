import { useNavigate } from "react-router-dom";

import FloatingButton from "@shared/components/floating-button.component";

const CreateImageButton = () => {
  const navigate = useNavigate();



  return (
    <div className="fixed right-5 bottom-5">
      <FloatingButton variant="solid" onClick={() => navigate('/create-image')} />
    </div>
  );
};

export default CreateImageButton;
