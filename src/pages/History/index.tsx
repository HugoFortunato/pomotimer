import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { trData } from './content'
import { HistoryContainer, HistoryList, Status} from './styles'
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer'

const Row = ({ index, style }: any) => (
  <div style={style}>
    {trData.map((item, index) => (
      <tr>
        <td> {item.task} </td>
        <td> {item.duration} </td>
        <td> {item.start} </td>
        <td>
          <Status statusColor={item.color as any}> {item.status} </Status>
        </td>
      </tr>
      ))} 
  </div>
);

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Duração</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <div style={{display: "flex", flexGrow: 1, height: "100vh", width: "600px"}}>
            <AutoSizer>
              {({ height, width }: any) => (
            <List
              height={height}
              width={width}
              itemSize={80}
              itemCount={trData.length}
            >
              {Row}
            </List>
              )}
            </AutoSizer>
            </div>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}