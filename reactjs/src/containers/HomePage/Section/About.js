import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">truyen thonmg</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/8btEt3zBPj8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Với đánh giá đây là đợt không khí lạnh mạnh nhất từ đầu mùa, Trung
              tâm Dự báo khí tượng thủy văn quốc gia nhận định từ hôm nay đến
              ngày 22-2, ở Bắc Bộ và Bắc Trung Bộ trời rét đậm, rét hại. Riêng
              từ ngày 20 đến 22-2, ở Bắc Bộ và Thanh Hóa trời rét hại với nền
              nhiệt độ thấp nhất phổ biến 8-11 độ C, vùng núi 3-6 độ C, vùng núi
              cao có nơi xấp xỉ 0 độ C và khả năng cao xảy ra băng giá, mưa
              tuyết.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
