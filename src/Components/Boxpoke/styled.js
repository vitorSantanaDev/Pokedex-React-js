import styled from 'styled-components'

export const Boxdiv = styled.div `
  width: 300px;
  height: 400px;
  padding: 16px;
  border-radius: 4px;
  background: #07101a;
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  margin-left: 0.75em;
  margin-top: 0.75em;
  transition: ease-in-out .5s;

  &:hover {
    z-index: 2;
    background-size: 100%;

    transition-delay: .5s;
    animation: animate1 2s steps(100) infinite;

    color: aliceblue;

  }

`



export const Imagepoke = styled.div `
    width: 190px;
  height: 190px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #4a20b7;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: 0.5s ease-in-out;

  img {
    width: 100%;
    max-width: 140px;
    position: relative;
  }

 &:hover {
    background-color: #4a20b7;
    box-shadow: 0 0 5px #4a20b7, 0 0 10px #5f2be4, 0 0 20px #6c3ee0;
    transform: scale(1.1);
    transition-delay: 1s;
 }



  &::before {
    content: '';
    width: calc(100% + 2px);
    height: calc(100% - 12px);

    position: absolute;
    top: 6px;
    left: -1px;

    background-color:  #5F2BE4;
    transition: .5s ease-in-out;
    transform: scaleY(0);
    z-index: -1;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  &::after {
    content: '';
    width: calc(100% - 12px);
    height: calc(100% + 4px);

    position: absolute;
    top: -2px;
    left: 6px;

    background-color:  #5F2BE4;

    transition: .5s ease-in-out;
    transform: scaleX(0);
    z-index: -1;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

export const Datapoke = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;

  .id-poke {
    color: aliceblue;
    font-size: 1.5em;
    font-weight: 500;
    margin-right: 0.5em;
  }

  .name-poke {
    color: aliceblue;
    font-size: 1.5em;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .type-poke {
      color: aliceblue;
      padding: 8px;
      font-size: 1.2em;
      text-align: center;
      margin-top: 0.75em;
   }

` 