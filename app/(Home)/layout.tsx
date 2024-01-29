import NavPrimary from "./_components/NavPrimary";
import NavBar from "./_components/navbar";

const AppLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[45px] bg-purple ">
        <NavPrimary />
      </div>
      <div className="h-[50px] w-full pt-2 ">
        <NavBar />
      </div>
    </div>
  );
};

export default AppLayout;
