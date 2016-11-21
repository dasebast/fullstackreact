const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState (props) {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm: searchTerm })
  },
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
        <div className='shows'>
          {this.props.route.shows
            .filter((showProp) => `${showProp.title} ${showProp.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((showProp) => (
              <ShowCard {...showProp} key={showProp.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
