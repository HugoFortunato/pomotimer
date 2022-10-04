import { trData } from './content'
import { HistoryContainer, HistoryList, Status , StatusTd} from './styles'

export function History() {
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
            {trData.map((item, index) => (
            <tr>
              <td> {item.task} </td>
              <td> {item.duration} </td>
              <td> {item.start} </td>
              <StatusTd statusColor={item.color}>
                <Status statusBackground={item.color}> {item.status} </Status>
              </StatusTd>
            </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}