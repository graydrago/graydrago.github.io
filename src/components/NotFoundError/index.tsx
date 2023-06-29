import { MainBlock } from '../MainBlock';

export function NotFoundError() {
  return (
    <MainBlock state="error">
      <h1>Not Found</h1>
      <p>(￢_￢;)</p>
    </MainBlock>
  )
}
