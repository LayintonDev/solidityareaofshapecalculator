import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const AreaCalculatorModule = buildModule("AreaCalculatorModule", (m) => {
 

  const lock = m.contract("AreaOfShapeCalculator");

  return { lock };
});

export default AreaCalculatorModule;
