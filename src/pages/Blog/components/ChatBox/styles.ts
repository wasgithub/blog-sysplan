import styled from "styled-components";

export const Container = styled.div`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #abd9e9;
    font-family: Arial;
  }

  .mutual-connection {
    margin-left: 6px;
    color: #fff;
    font-size: 14px;
    transform: scale(0.8);
    .mutual-connection__image {
      width: 36px;
      height: 36px;
    }
  }

  width: 100%;
  height: 70vh;
  background: #eff3f7;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 0;
  border-radius: 6px;
  overflow-x: hidden;

  aside {
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    background-color: #3b3e49;
    display: inline-block;
    font-size: 15px;
    vertical-align: top;
    overflow-x: ;
    padding: 0;

    input {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      font-size: 14px;
    }
  }

  aside header {
    background-color: #fff0;
  }
  aside input {
    width: 100%;
    height: 40px;
    line-height: 50px;
    padding-left: 16px;
    background-color: #5e616a;
    border: none;
    color: #fff;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_search.png);
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: 40px;

    &:focus {
      outline: none;
    }
  }

  aside input::placeholder {
    color: #fff;
  }
  aside ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    height: 100%;
  }
  aside li {
    padding: 10px 0;
    background-color: #fff;
    h2 {
      color: #000 !important;
    }
  }

  aside li:hover {
    background-color: #5e616a;
    h2 {
      color: #fff !important;
    }
    transition: 0.3s;
    transform: scale(1.1);
  }
  h2,
  h3 {
    margin: 0;
  }
  aside li img {
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 8px;
  }
  aside li div {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
  }
  aside li h2 {
    font-size: 14px;
    color: #fff;
    font-weight: normal;
    margin-bottom: 5px;
  }
  aside li h3 {
    font-size: 12px;
    color: #7e818a;
    font-weight: normal;
  }

  .status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 7px;
  }
  .green {
    background-color: #58b666;
  }
  .orange {
    background-color: #ff725d;
  }
  .blue {
    background-color: #6fbced;
    margin-right: 0;
    margin-left: 7px;
  }

  aside li:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;
