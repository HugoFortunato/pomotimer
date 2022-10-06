import { trData } from './content'
import { HistoryContainer, HistoryList, Status} from './styles'

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
              <td>
                <Status statusColor={item.color as any}> {item.status} </Status>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}