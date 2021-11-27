import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    *{margin:0;padding:0;box-sizing:border-box;}
    a{text-decoration:none;color:inherit;}
    input,button{font:inherit;color:inherit;border:none;background:#fff;border-radius:5px;padding:14px 10px;font-size:1em;width:100%}
    body{background:#f0f0f5;font-family:Arial, Helvetica, sans-serif;font-size: 14px;color: #333;}
    .btn{cursor:pointer;border: none;padding: 10px 20px;border-radius: 5px;display: inline-block;font-size: 1em;width:auto}
    .btn-primary{color: #fff;background: #244CCC;}
    .btn-success{color: #fff;background: #38CC83;}
    .btn-dark{color: #fff;background: #333;}
    .btn-lg{font-size: 1.2em;padding: 15px 30px;}
    .page-title{margin: 20px 0 20px 0;font-size: 30px;font-weight: bold;}
`;

export const Container = styled.div`
  max-width: 1200px;
  min-height: 80vh;
  margin: 0 auto;
  position: relative;
`;
