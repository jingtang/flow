// Interface data format used to return a unified format

export function resultSuccess<T = Recordable>(data: T, { msg = 'ok' } = {}) {
  return {
    code: '100',
    data,
    msg,
    type: 'success',
  };
}

export function resultPageSuccess<T = any>(
  pageNum: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {}
) {
  const pageData = pagination(pageNum, pageSize, list);

  return {
    ...resultSuccess({
      rows: pageData,
      // items: pageData,
      total: list.length,
    }),
    message,
  };
}

export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}

export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize));
  return ret;
}
