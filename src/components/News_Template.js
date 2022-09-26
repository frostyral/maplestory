import '../styles/News.sass';

export default function Cards(props) {
  return (
    <div className="section-news">
      <div className="box-update-news">
        <div class="card">
          <img
            class="card-image"
            src={props.imageUrl}
            alt="news_default"
          />
          <div class="card-textbox">
            <a class="card-title" href={props.linkreference}>
              {props.title}
            </a>
            <p>
              {props.description}
              <p class="timestamp">{props.timestamp}</p>
              <a
                class="card-button"
                href="https://maplestory.nexon.net/news/76652/content-closure-notice"
              >
                READ MORE
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
