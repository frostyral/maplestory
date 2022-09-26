import News_Template from './News_Template';
import News_Data from './News_Data';
import Body from './Body';

export default function News() {
  const cardElements = News_Data.map((card) => {
    return <News_Template {...card} />;
  });

  return <div className="main">{cardElements}</div>;
}
