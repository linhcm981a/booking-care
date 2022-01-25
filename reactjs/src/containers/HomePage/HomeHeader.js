import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
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
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">Nền tảng y học</div>
            <div className="title2">Chăm sóc sức khoẻ toàn diện </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="tim theo chuyen khoa" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="options-child">
                <div className="icon-child">
                  <i class="fas fa-hospital-alt"></i>
                </div>
                <div className="text-child">Khám chuyên khoa</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fas fa-phone-square"></i>
                </div>
                <div className="text-child">Khám từ xa</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fas fa-procedures"></i>
                </div>
                <div className="text-child">Khám tổng quát</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fas fa-microscope"></i>
                </div>
                <div className="text-child">xét nghiệm y học </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fas fa-user-md"></i>
                </div>
                <div className="text-child">Sức khoẻ tinh thần</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fas fa-tooth"></i>
                </div>
                <div className="text-child">Khám nha khoa</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
