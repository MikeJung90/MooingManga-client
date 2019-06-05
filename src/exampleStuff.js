export default class ExampleStuff extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let favorites = [];
    if (this.props.favorites) {
      this.props.favorites.map(favorite => favorite = [...favorites, favorite._id])
    }

    let mangas = this.props.mangas.filter(manga => manga.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

    mangas = mangas.map(manga => {
      let imageArt;
      let releaseDate = new Date(manga.first_release_date);

      if (releaseDate.getTime() === 1546214400000) {
        releaseDate = 2018;
      } else if (releaseDate.getTime() === 1577750400000) {
        releaseDate = 2019;
      } else {
        releaseDate = releaseDate.toDateString().replace(/^\S+\s/,'');
      }
      return (
        <div className='manga-card' key={manga.id}>
          <Link to={"/" + manga.id}>
            <div className="card-image-container">
              <img className="card-image" src={imageArt} alt={`box art for ${manga.name}`} />
            </div>
          </Link>

          <div className='card-content'>
            <Link to={'/' + manga.id}>
              <div className='manga-name'>
                {manga.name}
              </div>
              <time className='manga-release-date'>
                {releaseDate}
              </time>
            </Link>
          </div>
        </div>
      )
      return()
    })
  }
}
