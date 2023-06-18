function largestRectangleArea(heights: number[]): number {
  let res = 0
  let stack: number[][] = []
  const lw: number[] = Array(heights.length).fill(0)
  const rw: number[] = Array(heights.length).fill(0)

  for (let i = 0; i < heights.length; i++) {
    while (heights[i] <= stack[stack.length - 1]?.[0]) {
      const cost = stack.pop()?.[1] as number
      lw[i] += cost + 1
    }
    stack.push([heights[i], lw[i]])
  }

  stack = []
  for (let i = heights.length - 1; i >= 0; i--) {
    while (heights[i] <= stack[stack.length - 1]?.[0]) {
      const cost = stack.pop()?.[1] as number
      rw[i] += cost + 1
    }
    stack.push([heights[i], rw[i]])

    const square = (lw[i] + rw[i] + 1) * heights[i]
    res = Math.max(res, square)
  }

  return res
}


export {}
