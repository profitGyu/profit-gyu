export type AsyncAction = () => Promise<void> | void;

export const executeActionsSequentially = (
  actions: AsyncAction[],
): Promise<void> => {
  return actions
    .reduce(
      (promise, action) => promise.then(() => action()),
      Promise.resolve(),
    )
    .catch((error) => {
      console.error(` 작업 중 오류가 발생했습니다:`, error);
      throw error; // 에러를 다시 throw하여 호출자가 처리할 수 있게 함
    });
};