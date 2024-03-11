interface Circle {
  readonly centerX: number;
  readonly centerY: number;
  readonly radius: number;
}

const moveCircle = (): void => {
  const c: Circle = { centerX: 4, centerY: 3, radius: 10 };
  //c.centerX=20 => Cannot assign to 'centerX' because it is a read-only property.ts(2540)
};
