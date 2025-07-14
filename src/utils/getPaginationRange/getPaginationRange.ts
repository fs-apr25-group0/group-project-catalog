export function getPaginationRange(
  currentPage: number,
  totalPages: number,
): (number | 'dots')[] {
  const delta = 1;
  const range: (number | 'dots')[] = [];

  const left = Math.max(4, currentPage - delta);
  const right = Math.min(totalPages - 3, currentPage + delta);

  range.push(1, 2, 3);

  if (left > 4) {
    range.push('dots');
  }

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < totalPages - 3) {
    range.push('dots');
  }

  range.push(totalPages - 2, totalPages - 1, totalPages);

  return Array.from(
    new Set(
      range.filter((n) => typeof n === 'string' || (n >= 1 && n <= totalPages)),
    ),
  );
}
