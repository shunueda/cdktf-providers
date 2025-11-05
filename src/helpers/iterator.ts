/**
 * Small helper to split an Iterable / AsyncIterable into chunks of a given size.
 */
export async function* chunks<T>(
  source: Iterable<T> | AsyncIterable<T>,
  size: number
): AsyncGenerator<readonly T[]> {
  let buffer: readonly T[] = []
  for await (const item of source) {
    buffer = [...buffer, item]
    if (buffer.length >= size) {
      yield buffer
      buffer = []
    }
  }
  if (buffer.length) {
    yield buffer
  }
}
