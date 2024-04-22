export function toObject<T>(data: T): { [key: string]: T } | boolean {
  if (!data) {
    return false;
  }

  if (data instanceof FormData) {
    let object: { [key: string]: T } = {};

    data.forEach((value, key) => {
        object[key] = value as T;
    });
    return object;
  }

  return false;
}

