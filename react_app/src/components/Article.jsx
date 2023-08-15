function Article(props) {
  return (
    <div>
      <div>
        <h5>
          { props.title }
        </h5>
      </div>
      <div>
        <img src={props.image_url} />
      </div>
    </div>
  )
}

export default Article;