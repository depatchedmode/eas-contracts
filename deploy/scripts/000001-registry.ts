import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { deploy, InstanceName, setDeploymentMetadata } from '../../utils/Deploy';

const func: DeployFunction = async ({ getNamedAccounts }: HardhatRuntimeEnvironment) => {
  const { deployer } = await getNamedAccounts();

  await deploy({
    name: InstanceName.SchemaRegistry,
    // from: deployer,
    from: process.env.DEPLOYER
  });

  return true;
};

export default setDeploymentMetadata(__filename, func);
