# ДЗ 2 Асинхронность

## Вариант 10

Реализовать операцию filter для асинхронного массива.

```ts
function filter(
  array: AsyncArray,
  fn: (cur: any, idx: Number, src: AsyncArray) => Boolean,
  cb: (result: AsyncArray) => void
) {}
```

### Добавил немного рандома, чтобы тестить было приятней :)
