import type { PathLike } from 'node:fs'
import {
  type CompilerOptions,
  createProgram,
  type EmitResult
} from 'typescript'
import { chunks } from '../helpers/iterator.ts'

/**
 * Compiles TypeScript files via TypeScript compiler API.
 *
 * @remarks
 * Files are processed in chunks to prevent OOM in limited CI environments.
 * esbuild and swc were tested and work fine, but this intentionally stays
 * with vanilla TypeScript to maintain compatibility and stability. It's slow,
 * but TS7 (tsgo) should make this much better in the future.
 */
export async function tsc(
  files: AsyncIterable<PathLike>,
  compilerOptions: CompilerOptions,
  chunkSize = 100 // based on trial-and-error
): Promise<EmitResult> {
  const emitResults: EmitResult[] = []
  for await (const chunk of chunks(files, chunkSize)) {
    const files = chunk.map(it => it.toString())
    const emitResult = createProgram(files, compilerOptions).emit()
    emitResults.push(emitResult)
  }
  return reduceEmitResults(emitResults)
}

/**
 * Merges multiple `EmitResult` objects into a single aggregated result.
 *
 * @remarks
 * Combines diagnostics and emitted files. The `emitSkipped` flag is set
 * if it was true in any of the input results.
 */
function reduceEmitResults(results: readonly EmitResult[]): EmitResult {
  return {
    emitSkipped: results.some(it => it.emitSkipped),
    emittedFiles: results.flatMap(it => it.emittedFiles ?? []),
    diagnostics: results.flatMap(it => it.diagnostics)
  }
}
