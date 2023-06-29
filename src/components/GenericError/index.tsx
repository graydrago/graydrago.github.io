import { MainBlock } from '../MainBlock';

export function GenericError() {
  return (
    <MainBlock state="error">
      <h1>Error</h1>
      <p>Something went wrong...</p>
    </MainBlock>
  );
}
