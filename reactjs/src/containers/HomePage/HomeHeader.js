import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <i className="fas fa-bars"></i>
            <div className="header-logo"></div>
          </div>
          <div className="center-content">
            <div className="child-content">
              <div>
                <b>chuyen khoa</b>
              </div>
              <div className="subs-title">tim bac si theo chuyen khoa</div>
            </div>
            <div className="child-content">
              <div>
                <b>co so y te</b>
              </div>
              <div lassName="subs-title">chon benh vien phong kham</div>
            </div>
            <div className="child-content">
              <div>
                <b>bac si</b>
              </div>
              <div lassName="subs-title">chon bac si gioi </div>
            </div>
            <div className="child-content">
              <div>
                <b>goi kham</b>
              </div>
              <div lassName="subs-title">kham suc khoe tong quat</div>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <i className="fas fa-question-circle"></i>support
            </div>
            <div className="flag">VN</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
