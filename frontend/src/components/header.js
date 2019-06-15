import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { search } from "../actions/itemAction";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: "",
      user_id: "",
      query: ""
    };
    this.onChanges = this.onChanges.bind(this);
  }

  componentWillMount() {
    this.setState({
      category_id: this.props.category_id,
      user_id: this.props.user_id
    });
  }

  onChanges(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  search(e) {
    e.preventDefault();
    console.log(this.state.query);

    console.log(e.target.name);
    if ([1, 2, 3, 4, 5, 6, 7].includes(e.target.name)) {
      this.props.search("category=" + e.target.name);
    } else {
      this.props.search("name=" + this.state.query);
    }
    this.setState({ query: "" });
    // return <Redirect to="/itemsList" />;
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          {/* <div className="popup_wrapper hidden-sm hidden-xs">
            <div className="test">
              <span className="popup_off">Close</span>
              <div className="subscribe_area text-center">
                <h2>Newsletter</h2>
                <p>
                  Subscribe to the Neha mailing list to receive updates on new
                  arrivals, special offers and other discount information.
                </p>
                <div id="mc_embed_signup" className="subscribe-bottom">
                  <form
                    action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    novalidate
                  >
                    <div id="mc_embed_signup_scroll" className="mc-form">
                      <input
                        type="email"
                        value=""
                        name="EMAIL"
                        className="email"
                        placeholder="Enter your email address"
                        required
                      />
                      <div className="mc-news" aria-hidden="true">
                        <input
                          type="text"
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                          tabindex="-1"
                          value=""
                        />
                      </div>
                      <div className="clear-2">
                        <input
                          type="submit"
                          value="subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="subscribe-bottom mt-15">
                  <input type="checkbox" id="newsletter-permission" />
                  <label for="newsletter-permission">
                    Don't show this popup again
                  </label>
                </div>
              </div>
            </div>
          </div> */}

          <header className="pl-155 pr-155 intelligent-header">
            <div className="header-area header-area-2">
              <div className="container-fluid p-0">
                <div className="row no-gutters">
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="logo">
                      <Link to="/">
                        <h1>
                          <b>AJIRNI. </b>
                        </h1>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 menu-none-block menu-center">
                    <div className="main-menu">
                      <nav>
                        <ul>
                          <li>
                            <Link to="/">home</Link>
                          </li>
                          <li>
                            <Link to="/about">about us</Link>
                          </li>
                          <li>
                            Category
                            <ul className="dropdown">
                              <li name="1" onClick={this.search.bind(this)}>
                                <Link to="/itemsList">Sport</Link>
                              </li>
                              <li>
                                <Link to="/itemsList">Cars</Link>
                              </li>

                              <li>
                                <Link to="/itemsList">Real Estate</Link>
                              </li>
                              <li>
                                <Link to="/itemsList">Home Tools</Link>
                              </li>
                              <li>
                                <Link to="/itemsList">Industrial Tools</Link>
                              </li>
                              <li>
                                <Link to="/itemsList">Event Tools</Link>
                              </li>
                              <li>
                                <Link to="/itemsList">Others</Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/contact">contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="header-search-cart">
                      <div className="header-sidebar common-style">
                        <input
                          className="header-navbar-active"
                          name="query"
                          type="text"
                          value={this.state.query}
                          onChange={this.onChanges}
                        />
                      </div>
                      <div className="header-search common-style">
                        {" "}
                        <button
                          className="sidebar-trigger-search"
                          onClick={this.search.bind(this)}
                        >
                          <Link to="/itemsList">
                            <span className="ion-ios-search-strong" />
                          </Link>
                        </button>
                      </div>

                      <div className="header-sidebar common-style">
                        <button className="header-navbar-active">
                          <span className="ion-navicon" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mobile-menu-area d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                    <div className="mobile-menu">
                      <nav id="mobile-menu-active">
                        <ul className="menu-overflow">
                          <li>
                            <a href="#">HOME</a>
                            <ul>
                              <li>
                                <a href="index-toys.html">Tools</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Category</a>
                            <ul>
                              <li>
                                <a href="login.html">login</a>
                              </li>
                              <li>
                                <a href="register.html">register</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">shop</a>
                            <ul>
                              <li>
                                <a href="shop-grid-view-5-col.html">
                                  grid 5 column
                                </a>
                              </li>

                              <li>
                                <a href="shop-list-view-2-col.html">
                                  list 2 column
                                </a>
                              </li>

                              <li>
                                <a href="shop-list-view-1-col-container.html">
                                  list 1 column box
                                </a>
                              </li>
                              <li>
                                <a href="product-details.html">tab style 1</a>
                              </li>
                              <li>
                                <a href="product-details-2.html">tab style 2</a>
                              </li>
                              <li>
                                <a href="product-details-3.html">tab style 3</a>
                              </li>
                              <li>
                                <a href="product-details-6.html">
                                  sticky style
                                </a>
                              </li>
                              <li>
                                <a href="product-details-7.html">
                                  sticky style 2
                                </a>
                              </li>
                              <li>
                                <a href="product-details-8.html">
                                  gallery style
                                </a>
                              </li>
                              <li>
                                <a href="product-details-9.html">
                                  gallery style 2
                                </a>
                              </li>
                              <li>
                                <a href="product-details-4.html">
                                  fixed image style
                                </a>
                              </li>
                              <li>
                                <a href="product-details-5.html">
                                  fixed image style 2
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">BLOG</a>
                            <ul>
                              <li>
                                <a href="blog.html">blog </a>
                              </li>
                              <li>
                                <a href="blog-2-col.html">blog 2 column</a>
                              </li>
                              <li>
                                <a href="blog-left-sidebar.html">
                                  blog left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-details.html">blog details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html"> Contact </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="header-space" />
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  search: PropTypes.func.isRequired
};
////// should changed to category_id from other component
////// should changed to user_id from login component
const mapStateToProps = state => ({
  category_id: state.item.category_id,
  user_id: state.item.user_id
});

export default connect(
  mapStateToProps,
  { search }
)(Header);
