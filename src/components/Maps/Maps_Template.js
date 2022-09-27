import '../../styles/Maps.sass';

export default function Cards(props) {
  return (
    <div className="Body">
      <div className="card-section">
        <div className="card-content">
          <img
            class="card-image"
            src={props.imageUrl}
            alt={props.title}
          />
          <div className="card-info">
            <h2 className="card-title">
              <div className="card-continent">{props.continent}</div>
              {props.title}
            </h2>
            <h2 className="card-title"></h2>
            <p class="card-level">{props.level}</p>
            <p class="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
