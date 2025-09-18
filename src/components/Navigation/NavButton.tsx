import TextItem from "../elements/TextItem";

const NavButton = ({ label }: { label: string }) => {
  return (
    <button className="nav-btn">
      <TextItem fontSize={13} fontWeight={500} letterSpacing={1}>
        {label}
      </TextItem>
    </button>
  );
};

export default NavButton;
