import FloatingButton from "@shared/components/floating-button.component";
import Header from "@shared/components/header/header.component";

const ProtectedTest = () => {
  return (
    <>
      <Header />
      <div className="flex gap-4">
        <FloatingButton variant="solid" />
        <FloatingButton variant="outline" />
        <FloatingButton variant="ghost" />
      </div>
    </>
  );
};

export default ProtectedTest;
