import Maps_Template from './Maps_Template';
import Maps_Data from './Maps_Data';

export default function Main() {
  const cardElements = Maps_Data.map((card) => {
    return <Maps_Template {...card} />;
  });

  return <div className="main">{cardElements}</div>;
}
