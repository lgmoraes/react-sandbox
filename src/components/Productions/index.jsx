import styled from 'styled-components'
import data from '../../utils/portfolio.json'
import * as c from '../../utils/constantes'

const List = styled.div`
  width: 100%;
  padding: 2em;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3em;
`

const Production = styled.a`
  flex-shrink: 0;

  &:hover div {
    transform: scale(1.1);
  }
  &:hover p {
    transform: translateY(30%);
  }
`

const Image = styled.div`
  width: ${c.PRODUCTION_WIDTH};
  height: ${c.PRODUCTION_HEIGHT};

  background: rgba(0, 0, 0, 0.5) center url(${(props) => props.image});
  background-size: cover;
  border-radius: 0.2em;
  overflow: hidden;
  transition: transform ${c.TRANSITION_SPEED};

  flex-shrink: 0;
`

const Title = styled.p`
  height: 2em;
  margin: 0;

  color: #ececec;
  text-shadow: 0 0 4px black;
  font-family: Rubik;
  transition: transform ${c.TRANSITION_SPEED};

  display: flex;
  justify-content: center;
  align-items: flex-end;
`

function Productions() {
  return (
    <List>
      {data.productions.map((p) => (
        <Production key={p.id} href={p.link}>
          <Image image={`./covers/${p.id}.jpg`} />
          <Title>{p.name}</Title>
        </Production>
      ))}
    </List>
  )
}

export default Productions
