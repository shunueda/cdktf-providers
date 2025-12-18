// https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The driver to use for the test suite. Only one driver can be used at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#driver Tests#driver}
  */
  readonly driver: string;
  /**
  * The resource specific driver configuration. This is merged with the provider scoped drivers configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#drivers Tests#drivers}
  */
  readonly drivers?: TestsDrivers;
  /**
  * Images to use for the test suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#images Tests#images}
  */
  readonly images: { [key: string]: string };
  /**
  * Metadata to attach to the tests resource. Used for filtering and grouping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#labels Tests#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the test. If one is not provided, a random name will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#name Tests#name}
  */
  readonly name?: string;
  /**
  * The target repository the provider will use for pushing/pulling dynamically built images, overriding provider config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#repo Tests#repo}
  */
  readonly repo?: string;
  /**
  * Whether or not the tests were skipped. This is set to true if the tests were skipped, and false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#skipped Tests#skipped}
  */
  readonly skipped?: boolean | cdktf.IResolvable;
  /**
  * An ordered list of test suites to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#tests Tests#tests}
  */
  readonly tests?: TestsTests[] | cdktf.IResolvable;
  /**
  * The maximum amount of time to wait for all tests to complete. This includes the time it takes to start and destroy the driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#timeout Tests#timeout}
  */
  readonly timeout?: string;
}
export interface TestsDriversDockerInDocker {
  /**
  * The image reference to use for the docker-in-docker driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#image Tests#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#mirrors Tests#mirrors}
  */
  readonly mirrors?: string[];
}

export function testsDriversDockerInDockerToTerraform(struct?: TestsDriversDockerInDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    mirrors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mirrors),
  }
}


export function testsDriversDockerInDockerToHclTerraform(struct?: TestsDriversDockerInDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirrors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mirrors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversDockerInDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDriversDockerInDocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._mirrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrors = this._mirrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversDockerInDocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._mirrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._mirrors = value.mirrors;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // mirrors - computed: false, optional: true, required: false
  private _mirrors?: string[]; 
  public get mirrors() {
    return this.getListAttribute('mirrors');
  }
  public set mirrors(value: string[]) {
    this._mirrors = value;
  }
  public resetMirrors() {
    this._mirrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorsInput() {
    return this._mirrors;
  }
}
export interface TestsDriversEc2ExistingInstance {
  /**
  * IP address of the existing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#ip Tests#ip}
  */
  readonly ip: string;
  /**
  * Path to the SSH private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#ssh_key Tests#ssh_key}
  */
  readonly sshKey: string;
}

export function testsDriversEc2ExistingInstanceToTerraform(struct?: TestsDriversEc2ExistingInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
  }
}


export function testsDriversEc2ExistingInstanceToHclTerraform(struct?: TestsDriversEc2ExistingInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversEc2ExistingInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDriversEc2ExistingInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversEc2ExistingInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._sshKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._sshKey = value.sshKey;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }
}
export interface TestsDriversEc2 {
  /**
  * The AMI ID to launch. Required unless using existing_instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#ami Tests#ami}
  */
  readonly ami?: string;
  /**
  * Device mounts for the test container (format: src:dst).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#device_mounts Tests#device_mounts}
  */
  readonly deviceMounts?: string[];
  /**
  * Environment variables for setup commands and container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#env Tests#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Use an existing instance instead of creating new resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#existing_instance Tests#existing_instance}
  */
  readonly existingInstance?: TestsDriversEc2ExistingInstance;
  /**
  * GPUs to mount in the test container. Use 'all' for all GPUs, or a number like '1' or '2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#gpus Tests#gpus}
  */
  readonly gpus?: string;
  /**
  * IAM instance profile name. If not specified, one is created with ECR read-only permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#instance_profile_name Tests#instance_profile_name}
  */
  readonly instanceProfileName?: string;
  /**
  * The EC2 instance type (default: t3.medium).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#instance_type Tests#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Deprecated: use gpus = 'all' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#mount_all_gpus Tests#mount_all_gpus}
  */
  readonly mountAllGpus?: boolean | cdktf.IResolvable;
  /**
  * The AWS region (default: us-west-2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#region Tests#region}
  */
  readonly region?: string;
  /**
  * Root volume size in GB (default: 50).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#root_volume_size Tests#root_volume_size}
  */
  readonly rootVolumeSize?: number;
  /**
  * Commands to run on the instance before tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#setup_commands Tests#setup_commands}
  */
  readonly setupCommands?: string[];
  /**
  * Shell to use for commands (default: bash).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#shell Tests#shell}
  */
  readonly shell?: string;
  /**
  * SSH port for connecting to the instance (default: 22).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#ssh_port Tests#ssh_port}
  */
  readonly sshPort?: number;
  /**
  * SSH user for connecting to the instance (default: ubuntu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#ssh_user Tests#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * The CIDR block for the subnet. If not specified, an available /24 is auto-detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#subnet_cidr Tests#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Cloud-init user data (will be base64 encoded).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#user_data Tests#user_data}
  */
  readonly userData?: string;
  /**
  * Volume mounts for the test container (format: src:dst).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#volume_mounts Tests#volume_mounts}
  */
  readonly volumeMounts?: string[];
  /**
  * The VPC ID to create resources in. Required unless using existing_instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#vpc_id Tests#vpc_id}
  */
  readonly vpcId?: string;
}

export function testsDriversEc2ToTerraform(struct?: TestsDriversEc2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami: cdktf.stringToTerraform(struct!.ami),
    device_mounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceMounts),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    existing_instance: testsDriversEc2ExistingInstanceToTerraform(struct!.existingInstance),
    gpus: cdktf.stringToTerraform(struct!.gpus),
    instance_profile_name: cdktf.stringToTerraform(struct!.instanceProfileName),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    mount_all_gpus: cdktf.booleanToTerraform(struct!.mountAllGpus),
    region: cdktf.stringToTerraform(struct!.region),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    setup_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setupCommands),
    shell: cdktf.stringToTerraform(struct!.shell),
    ssh_port: cdktf.numberToTerraform(struct!.sshPort),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    user_data: cdktf.stringToTerraform(struct!.userData),
    volume_mounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeMounts),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function testsDriversEc2ToHclTerraform(struct?: TestsDriversEc2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami: {
      value: cdktf.stringToHclTerraform(struct!.ami),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_mounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceMounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    existing_instance: {
      value: testsDriversEc2ExistingInstanceToHclTerraform(struct!.existingInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsDriversEc2ExistingInstance",
    },
    gpus: {
      value: cdktf.stringToHclTerraform(struct!.gpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_all_gpus: {
      value: cdktf.booleanToHclTerraform(struct!.mountAllGpus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    setup_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setupCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.numberToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeMounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversEc2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDriversEc2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ami !== undefined) {
      hasAnyValues = true;
      internalValueResult.ami = this._ami;
    }
    if (this._deviceMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceMounts = this._deviceMounts;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._existingInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingInstance = this._existingInstance?.internalValue;
    }
    if (this._gpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus;
    }
    if (this._instanceProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileName = this._instanceProfileName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._mountAllGpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountAllGpus = this._mountAllGpus;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._setupCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.setupCommands = this._setupCommands;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._volumeMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversEc2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ami = undefined;
      this._deviceMounts = undefined;
      this._env = undefined;
      this._existingInstance.internalValue = undefined;
      this._gpus = undefined;
      this._instanceProfileName = undefined;
      this._instanceType = undefined;
      this._mountAllGpus = undefined;
      this._region = undefined;
      this._rootVolumeSize = undefined;
      this._setupCommands = undefined;
      this._shell = undefined;
      this._sshPort = undefined;
      this._sshUser = undefined;
      this._subnetCidr = undefined;
      this._userData = undefined;
      this._volumeMounts = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ami = value.ami;
      this._deviceMounts = value.deviceMounts;
      this._env = value.env;
      this._existingInstance.internalValue = value.existingInstance;
      this._gpus = value.gpus;
      this._instanceProfileName = value.instanceProfileName;
      this._instanceType = value.instanceType;
      this._mountAllGpus = value.mountAllGpus;
      this._region = value.region;
      this._rootVolumeSize = value.rootVolumeSize;
      this._setupCommands = value.setupCommands;
      this._shell = value.shell;
      this._sshPort = value.sshPort;
      this._sshUser = value.sshUser;
      this._subnetCidr = value.subnetCidr;
      this._userData = value.userData;
      this._volumeMounts = value.volumeMounts;
      this._vpcId = value.vpcId;
    }
  }

  // ami - computed: false, optional: true, required: false
  private _ami?: string; 
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  public resetAmi() {
    this._ami = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInput() {
    return this._ami;
  }

  // device_mounts - computed: false, optional: true, required: false
  private _deviceMounts?: string[]; 
  public get deviceMounts() {
    return this.getListAttribute('device_mounts');
  }
  public set deviceMounts(value: string[]) {
    this._deviceMounts = value;
  }
  public resetDeviceMounts() {
    this._deviceMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceMountsInput() {
    return this._deviceMounts;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // existing_instance - computed: false, optional: true, required: false
  private _existingInstance = new TestsDriversEc2ExistingInstanceOutputReference(this, "existing_instance");
  public get existingInstance() {
    return this._existingInstance;
  }
  public putExistingInstance(value: TestsDriversEc2ExistingInstance) {
    this._existingInstance.internalValue = value;
  }
  public resetExistingInstance() {
    this._existingInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingInstanceInput() {
    return this._existingInstance.internalValue;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: string; 
  public get gpus() {
    return this.getStringAttribute('gpus');
  }
  public set gpus(value: string) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // instance_profile_name - computed: false, optional: true, required: false
  private _instanceProfileName?: string; 
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }
  public set instanceProfileName(value: string) {
    this._instanceProfileName = value;
  }
  public resetInstanceProfileName() {
    this._instanceProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileNameInput() {
    return this._instanceProfileName;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // mount_all_gpus - computed: false, optional: true, required: false
  private _mountAllGpus?: boolean | cdktf.IResolvable; 
  public get mountAllGpus() {
    return this.getBooleanAttribute('mount_all_gpus');
  }
  public set mountAllGpus(value: boolean | cdktf.IResolvable) {
    this._mountAllGpus = value;
  }
  public resetMountAllGpus() {
    this._mountAllGpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountAllGpusInput() {
    return this._mountAllGpus;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // root_volume_size - computed: false, optional: true, required: false
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  public resetRootVolumeSize() {
    this._rootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // setup_commands - computed: false, optional: true, required: false
  private _setupCommands?: string[]; 
  public get setupCommands() {
    return this.getListAttribute('setup_commands');
  }
  public set setupCommands(value: string[]) {
    this._setupCommands = value;
  }
  public resetSetupCommands() {
    this._setupCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupCommandsInput() {
    return this._setupCommands;
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // ssh_port - computed: false, optional: true, required: false
  private _sshPort?: number; 
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }
  public set sshPort(value: number) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // ssh_user - computed: false, optional: true, required: false
  private _sshUser?: string; 
  public get sshUser() {
    return this.getStringAttribute('ssh_user');
  }
  public set sshUser(value: string) {
    this._sshUser = value;
  }
  public resetSshUser() {
    this._sshUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserInput() {
    return this._sshUser;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts?: string[]; 
  public get volumeMounts() {
    return this.getListAttribute('volume_mounts');
  }
  public set volumeMounts(value: string[]) {
    this._volumeMounts = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface TestsDriversEksWithEksctlPodIdentityAssociations {
  /**
  * Kubernetes namespace of the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#namespace Tests#namespace}
  */
  readonly namespace?: string;
  /**
  * ARN of the permission policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#permission_policy_arn Tests#permission_policy_arn}
  */
  readonly permissionPolicyArn?: string;
  /**
  * Name of the Kubernetes service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#service_account_name Tests#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function testsDriversEksWithEksctlPodIdentityAssociationsToTerraform(struct?: TestsDriversEksWithEksctlPodIdentityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    permission_policy_arn: cdktf.stringToTerraform(struct!.permissionPolicyArn),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function testsDriversEksWithEksctlPodIdentityAssociationsToHclTerraform(struct?: TestsDriversEksWithEksctlPodIdentityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_policy_arn: {
      value: cdktf.stringToHclTerraform(struct!.permissionPolicyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversEksWithEksctlPodIdentityAssociationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TestsDriversEksWithEksctlPodIdentityAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._permissionPolicyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicyArn = this._permissionPolicyArn;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversEksWithEksctlPodIdentityAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._permissionPolicyArn = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._permissionPolicyArn = value.permissionPolicyArn;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // permission_policy_arn - computed: false, optional: true, required: false
  private _permissionPolicyArn?: string; 
  public get permissionPolicyArn() {
    return this.getStringAttribute('permission_policy_arn');
  }
  public set permissionPolicyArn(value: string) {
    this._permissionPolicyArn = value;
  }
  public resetPermissionPolicyArn() {
    this._permissionPolicyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyArnInput() {
    return this._permissionPolicyArn;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}

export class TestsDriversEksWithEksctlPodIdentityAssociationsList extends cdktf.ComplexList {
  public internalValue? : TestsDriversEksWithEksctlPodIdentityAssociations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TestsDriversEksWithEksctlPodIdentityAssociationsOutputReference {
    return new TestsDriversEksWithEksctlPodIdentityAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestsDriversEksWithEksctlStorage {
  /**
  * The size of the storage volume (e.g., '20Gi')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#size Tests#size}
  */
  readonly size?: string;
  /**
  * The type of storage to use (e.g., 'gp2', 'gp3')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#type Tests#type}
  */
  readonly type?: string;
}

export function testsDriversEksWithEksctlStorageToTerraform(struct?: TestsDriversEksWithEksctlStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function testsDriversEksWithEksctlStorageToHclTerraform(struct?: TestsDriversEksWithEksctlStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversEksWithEksctlStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDriversEksWithEksctlStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversEksWithEksctlStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TestsDriversEksWithEksctl {
  /**
  * The AWS CLI profile to use for eksctl and AWS CLI commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#aws_profile Tests#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * The AMI to use for the eks_with_eksctl driver (default is the latest EKS optimized AMI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#node_ami Tests#node_ami}
  */
  readonly nodeAmi?: string;
  /**
  * The number of nodes to use for the eks_with_eksctl driver (default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#node_count Tests#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The instance type to use for the eks_with_eksctl driver (default is m5.large)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#node_type Tests#node_type}
  */
  readonly nodeType?: string;
  /**
  * Pod Identity Associations for the EKS driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#pod_identity_associations Tests#pod_identity_associations}
  */
  readonly podIdentityAssociations?: TestsDriversEksWithEksctlPodIdentityAssociations[] | cdktf.IResolvable;
  /**
  * The AWS region to use for the eks_with_eksctl driver (default is us-west-2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#region Tests#region}
  */
  readonly region?: string;
  /**
  * Storage configuration for the eks_with_eksctl driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#storage Tests#storage}
  */
  readonly storage?: TestsDriversEksWithEksctlStorage;
  /**
  * Additional tags to apply to all AWS resources created by the driver. Auto-generated tags (imagetest, imagetest:test-name, imagetest:cluster-name) are always included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#tags Tests#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function testsDriversEksWithEksctlToTerraform(struct?: TestsDriversEksWithEksctl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_profile: cdktf.stringToTerraform(struct!.awsProfile),
    node_ami: cdktf.stringToTerraform(struct!.nodeAmi),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    pod_identity_associations: cdktf.listMapper(testsDriversEksWithEksctlPodIdentityAssociationsToTerraform, false)(struct!.podIdentityAssociations),
    region: cdktf.stringToTerraform(struct!.region),
    storage: testsDriversEksWithEksctlStorageToTerraform(struct!.storage),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function testsDriversEksWithEksctlToHclTerraform(struct?: TestsDriversEksWithEksctl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_profile: {
      value: cdktf.stringToHclTerraform(struct!.awsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_ami: {
      value: cdktf.stringToHclTerraform(struct!.nodeAmi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_identity_associations: {
      value: cdktf.listMapperHcl(testsDriversEksWithEksctlPodIdentityAssociationsToHclTerraform, false)(struct!.podIdentityAssociations),
      isBlock: true,
      type: "list",
      storageClassType: "TestsDriversEksWithEksctlPodIdentityAssociationsList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: testsDriversEksWithEksctlStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsDriversEksWithEksctlStorage",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversEksWithEksctlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDriversEksWithEksctl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsProfile = this._awsProfile;
    }
    if (this._nodeAmi !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAmi = this._nodeAmi;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._podIdentityAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentityAssociations = this._podIdentityAssociations?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversEksWithEksctl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsProfile = undefined;
      this._nodeAmi = undefined;
      this._nodeCount = undefined;
      this._nodeType = undefined;
      this._podIdentityAssociations.internalValue = undefined;
      this._region = undefined;
      this._storage.internalValue = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsProfile = value.awsProfile;
      this._nodeAmi = value.nodeAmi;
      this._nodeCount = value.nodeCount;
      this._nodeType = value.nodeType;
      this._podIdentityAssociations.internalValue = value.podIdentityAssociations;
      this._region = value.region;
      this._storage.internalValue = value.storage;
      this._tags = value.tags;
    }
  }

  // aws_profile - computed: false, optional: true, required: false
  private _awsProfile?: string; 
  public get awsProfile() {
    return this.getStringAttribute('aws_profile');
  }
  public set awsProfile(value: string) {
    this._awsProfile = value;
  }
  public resetAwsProfile() {
    this._awsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileInput() {
    return this._awsProfile;
  }

  // node_ami - computed: false, optional: true, required: false
  private _nodeAmi?: string; 
  public get nodeAmi() {
    return this.getStringAttribute('node_ami');
  }
  public set nodeAmi(value: string) {
    this._nodeAmi = value;
  }
  public resetNodeAmi() {
    this._nodeAmi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAmiInput() {
    return this._nodeAmi;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // pod_identity_associations - computed: false, optional: true, required: false
  private _podIdentityAssociations = new TestsDriversEksWithEksctlPodIdentityAssociationsList(this, "pod_identity_associations", false);
  public get podIdentityAssociations() {
    return this._podIdentityAssociations;
  }
  public putPodIdentityAssociations(value: TestsDriversEksWithEksctlPodIdentityAssociations[] | cdktf.IResolvable) {
    this._podIdentityAssociations.internalValue = value;
  }
  public resetPodIdentityAssociations() {
    this._podIdentityAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityAssociationsInput() {
    return this._podIdentityAssociations.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new TestsDriversEksWithEksctlStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: TestsDriversEksWithEksctlStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface TestsDriversK3SInDockerHooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#post_start Tests#post_start}
  */
  readonly postStart?: string[];
}

export function testsDriversK3SInDockerHooksToTerraform(struct?: TestsDriversK3SInDockerHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postStart),
  }
}


export function testsDriversK3SInDockerHooksToHclTerraform(struct?: TestsDriversK3SInDockerHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversK3SInDockerHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDriversK3SInDockerHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStart = this._postStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversK3SInDockerHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postStart = value.postStart;
    }
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: string[]; 
  public get postStart() {
    return this.getListAttribute('post_start');
  }
  public set postStart(value: string[]) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart;
  }
}
export interface TestsDriversK3SInDockerRegistriesMirrors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#endpoints Tests#endpoints}
  */
  readonly endpoints?: string[];
}

export function testsDriversK3SInDockerRegistriesMirrorsToTerraform(struct?: TestsDriversK3SInDockerRegistriesMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
  }
}


export function testsDriversK3SInDockerRegistriesMirrorsToHclTerraform(struct?: TestsDriversK3SInDockerRegistriesMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversK3SInDockerRegistriesMirrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDriversK3SInDockerRegistriesMirrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversK3SInDockerRegistriesMirrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
    }
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }
}
export interface TestsDriversK3SInDockerRegistries {
  /**
  * A map of registries containing configuration for optional auth, tls, and mirror configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#mirrors Tests#mirrors}
  */
  readonly mirrors?: TestsDriversK3SInDockerRegistriesMirrors;
}

export function testsDriversK3SInDockerRegistriesToTerraform(struct?: TestsDriversK3SInDockerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirrors: testsDriversK3SInDockerRegistriesMirrorsToTerraform(struct!.mirrors),
  }
}


export function testsDriversK3SInDockerRegistriesToHclTerraform(struct?: TestsDriversK3SInDockerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirrors: {
      value: testsDriversK3SInDockerRegistriesMirrorsToHclTerraform(struct!.mirrors),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsDriversK3SInDockerRegistriesMirrors",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversK3SInDockerRegistriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TestsDriversK3SInDockerRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrors = this._mirrors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversK3SInDockerRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirrors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirrors.internalValue = value.mirrors;
    }
  }

  // mirrors - computed: false, optional: true, required: false
  private _mirrors = new TestsDriversK3SInDockerRegistriesMirrorsOutputReference(this, "mirrors");
  public get mirrors() {
    return this._mirrors;
  }
  public putMirrors(value: TestsDriversK3SInDockerRegistriesMirrors) {
    this._mirrors.internalValue = value;
  }
  public resetMirrors() {
    this._mirrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorsInput() {
    return this._mirrors.internalValue;
  }
}

export class TestsDriversK3SInDockerRegistriesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: TestsDriversK3SInDockerRegistries } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): TestsDriversK3SInDockerRegistriesOutputReference {
    return new TestsDriversK3SInDockerRegistriesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TestsDriversK3SInDocker {
  /**
  * Enable the CNI plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#cni Tests#cni}
  */
  readonly cni?: boolean | cdktf.IResolvable;
  /**
  * Run commands at various lifecycle events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#hooks Tests#hooks}
  */
  readonly hooks?: TestsDriversK3SInDockerHooks;
  /**
  * The image reference to use for the k3s_in_docker driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#image Tests#image}
  */
  readonly image?: string;
  /**
  * Enable the metrics server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#metrics_server Tests#metrics_server}
  */
  readonly metricsServer?: boolean | cdktf.IResolvable;
  /**
  * Enable the network policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#network_policy Tests#network_policy}
  */
  readonly networkPolicy?: boolean | cdktf.IResolvable;
  /**
  * A map of registries containing configuration for optional auth, tls, and mirror configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#registries Tests#registries}
  */
  readonly registries?: { [key: string]: TestsDriversK3SInDockerRegistries } | cdktf.IResolvable;
  /**
  * The snapshotter to use for the k3s_in_docker driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#snapshotter Tests#snapshotter}
  */
  readonly snapshotter?: string;
  /**
  * Enable the traefik ingress controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#traefik Tests#traefik}
  */
  readonly traefik?: boolean | cdktf.IResolvable;
}

export function testsDriversK3SInDockerToTerraform(struct?: TestsDriversK3SInDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cni: cdktf.booleanToTerraform(struct!.cni),
    hooks: testsDriversK3SInDockerHooksToTerraform(struct!.hooks),
    image: cdktf.stringToTerraform(struct!.image),
    metrics_server: cdktf.booleanToTerraform(struct!.metricsServer),
    network_policy: cdktf.booleanToTerraform(struct!.networkPolicy),
    registries: cdktf.hashMapper(testsDriversK3SInDockerRegistriesToTerraform)(struct!.registries),
    snapshotter: cdktf.stringToTerraform(struct!.snapshotter),
    traefik: cdktf.booleanToTerraform(struct!.traefik),
  }
}


export function testsDriversK3SInDockerToHclTerraform(struct?: TestsDriversK3SInDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cni: {
      value: cdktf.booleanToHclTerraform(struct!.cni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hooks: {
      value: testsDriversK3SInDockerHooksToHclTerraform(struct!.hooks),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsDriversK3SInDockerHooks",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_server: {
      value: cdktf.booleanToHclTerraform(struct!.metricsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.networkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registries: {
      value: cdktf.hashMapperHcl(testsDriversK3SInDockerRegistriesToHclTerraform)(struct!.registries),
      isBlock: true,
      type: "map",
      storageClassType: "TestsDriversK3SInDockerRegistriesMap",
    },
    snapshotter: {
      value: cdktf.stringToHclTerraform(struct!.snapshotter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traefik: {
      value: cdktf.booleanToHclTerraform(struct!.traefik),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversK3SInDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDriversK3SInDocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cni !== undefined) {
      hasAnyValues = true;
      internalValueResult.cni = this._cni;
    }
    if (this._hooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hooks = this._hooks?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._metricsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsServer = this._metricsServer;
    }
    if (this._networkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy;
    }
    if (this._registries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registries = this._registries?.internalValue;
    }
    if (this._snapshotter !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotter = this._snapshotter;
    }
    if (this._traefik !== undefined) {
      hasAnyValues = true;
      internalValueResult.traefik = this._traefik;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDriversK3SInDocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cni = undefined;
      this._hooks.internalValue = undefined;
      this._image = undefined;
      this._metricsServer = undefined;
      this._networkPolicy = undefined;
      this._registries.internalValue = undefined;
      this._snapshotter = undefined;
      this._traefik = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cni = value.cni;
      this._hooks.internalValue = value.hooks;
      this._image = value.image;
      this._metricsServer = value.metricsServer;
      this._networkPolicy = value.networkPolicy;
      this._registries.internalValue = value.registries;
      this._snapshotter = value.snapshotter;
      this._traefik = value.traefik;
    }
  }

  // cni - computed: false, optional: true, required: false
  private _cni?: boolean | cdktf.IResolvable; 
  public get cni() {
    return this.getBooleanAttribute('cni');
  }
  public set cni(value: boolean | cdktf.IResolvable) {
    this._cni = value;
  }
  public resetCni() {
    this._cni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new TestsDriversK3SInDockerHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: TestsDriversK3SInDockerHooks) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // metrics_server - computed: false, optional: true, required: false
  private _metricsServer?: boolean | cdktf.IResolvable; 
  public get metricsServer() {
    return this.getBooleanAttribute('metrics_server');
  }
  public set metricsServer(value: boolean | cdktf.IResolvable) {
    this._metricsServer = value;
  }
  public resetMetricsServer() {
    this._metricsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsServerInput() {
    return this._metricsServer;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: boolean | cdktf.IResolvable; 
  public get networkPolicy() {
    return this.getBooleanAttribute('network_policy');
  }
  public set networkPolicy(value: boolean | cdktf.IResolvable) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // registries - computed: false, optional: true, required: false
  private _registries = new TestsDriversK3SInDockerRegistriesMap(this, "registries");
  public get registries() {
    return this._registries;
  }
  public putRegistries(value: { [key: string]: TestsDriversK3SInDockerRegistries } | cdktf.IResolvable) {
    this._registries.internalValue = value;
  }
  public resetRegistries() {
    this._registries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries.internalValue;
  }

  // snapshotter - computed: false, optional: true, required: false
  private _snapshotter?: string; 
  public get snapshotter() {
    return this.getStringAttribute('snapshotter');
  }
  public set snapshotter(value: string) {
    this._snapshotter = value;
  }
  public resetSnapshotter() {
    this._snapshotter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotterInput() {
    return this._snapshotter;
  }

  // traefik - computed: false, optional: true, required: false
  private _traefik?: boolean | cdktf.IResolvable; 
  public get traefik() {
    return this.getBooleanAttribute('traefik');
  }
  public set traefik(value: boolean | cdktf.IResolvable) {
    this._traefik = value;
  }
  public resetTraefik() {
    this._traefik = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traefikInput() {
    return this._traefik;
  }
}
export interface TestsDrivers {
  /**
  * The docker_in_docker driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#docker_in_docker Tests#docker_in_docker}
  */
  readonly dockerInDocker?: TestsDriversDockerInDocker;
  /**
  * The AWS EC2 driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#ec2 Tests#ec2}
  */
  readonly ec2?: TestsDriversEc2;
  /**
  * The eks_with_eksctl driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#eks_with_eksctl Tests#eks_with_eksctl}
  */
  readonly eksWithEksctl?: TestsDriversEksWithEksctl;
  /**
  * The k3s_in_docker driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#k3s_in_docker Tests#k3s_in_docker}
  */
  readonly k3SInDocker?: TestsDriversK3SInDocker;
}

export function testsDriversToTerraform(struct?: TestsDrivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_in_docker: testsDriversDockerInDockerToTerraform(struct!.dockerInDocker),
    ec2: testsDriversEc2ToTerraform(struct!.ec2),
    eks_with_eksctl: testsDriversEksWithEksctlToTerraform(struct!.eksWithEksctl),
    k3s_in_docker: testsDriversK3SInDockerToTerraform(struct!.k3SInDocker),
  }
}


export function testsDriversToHclTerraform(struct?: TestsDrivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_in_docker: {
      value: testsDriversDockerInDockerToHclTerraform(struct!.dockerInDocker),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsDriversDockerInDocker",
    },
    ec2: {
      value: testsDriversEc2ToHclTerraform(struct!.ec2),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsDriversEc2",
    },
    eks_with_eksctl: {
      value: testsDriversEksWithEksctlToHclTerraform(struct!.eksWithEksctl),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsDriversEksWithEksctl",
    },
    k3s_in_docker: {
      value: testsDriversK3SInDockerToHclTerraform(struct!.k3SInDocker),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsDriversK3SInDocker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsDriversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsDrivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerInDocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerInDocker = this._dockerInDocker?.internalValue;
    }
    if (this._ec2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2 = this._ec2?.internalValue;
    }
    if (this._eksWithEksctl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksWithEksctl = this._eksWithEksctl?.internalValue;
    }
    if (this._k3SInDocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k3SInDocker = this._k3SInDocker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsDrivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerInDocker.internalValue = undefined;
      this._ec2.internalValue = undefined;
      this._eksWithEksctl.internalValue = undefined;
      this._k3SInDocker.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerInDocker.internalValue = value.dockerInDocker;
      this._ec2.internalValue = value.ec2;
      this._eksWithEksctl.internalValue = value.eksWithEksctl;
      this._k3SInDocker.internalValue = value.k3SInDocker;
    }
  }

  // docker_in_docker - computed: false, optional: true, required: false
  private _dockerInDocker = new TestsDriversDockerInDockerOutputReference(this, "docker_in_docker");
  public get dockerInDocker() {
    return this._dockerInDocker;
  }
  public putDockerInDocker(value: TestsDriversDockerInDocker) {
    this._dockerInDocker.internalValue = value;
  }
  public resetDockerInDocker() {
    this._dockerInDocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInDockerInput() {
    return this._dockerInDocker.internalValue;
  }

  // ec2 - computed: false, optional: true, required: false
  private _ec2 = new TestsDriversEc2OutputReference(this, "ec2");
  public get ec2() {
    return this._ec2;
  }
  public putEc2(value: TestsDriversEc2) {
    this._ec2.internalValue = value;
  }
  public resetEc2() {
    this._ec2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2Input() {
    return this._ec2.internalValue;
  }

  // eks_with_eksctl - computed: false, optional: true, required: false
  private _eksWithEksctl = new TestsDriversEksWithEksctlOutputReference(this, "eks_with_eksctl");
  public get eksWithEksctl() {
    return this._eksWithEksctl;
  }
  public putEksWithEksctl(value: TestsDriversEksWithEksctl) {
    this._eksWithEksctl.internalValue = value;
  }
  public resetEksWithEksctl() {
    this._eksWithEksctl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksWithEksctlInput() {
    return this._eksWithEksctl.internalValue;
  }

  // k3s_in_docker - computed: false, optional: true, required: false
  private _k3SInDocker = new TestsDriversK3SInDockerOutputReference(this, "k3s_in_docker");
  public get k3SInDocker() {
    return this._k3SInDocker;
  }
  public putK3SInDocker(value: TestsDriversK3SInDocker) {
    this._k3SInDocker.internalValue = value;
  }
  public resetK3SInDocker() {
    this._k3SInDocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k3SInDockerInput() {
    return this._k3SInDocker.internalValue;
  }
}
export interface TestsTestsArtifact {
}

export function testsTestsArtifactToTerraform(struct?: TestsTestsArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function testsTestsArtifactToHclTerraform(struct?: TestsTestsArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TestsTestsArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TestsTestsArtifact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsTestsArtifact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface TestsTestsContent {
  /**
  * The source path to use for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#source Tests#source}
  */
  readonly source: string;
  /**
  * The target path to use for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#target Tests#target}
  */
  readonly target?: string;
}

export function testsTestsContentToTerraform(struct?: TestsTestsContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function testsTestsContentToHclTerraform(struct?: TestsTestsContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsTestsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TestsTestsContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsTestsContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TestsTestsContentList extends cdktf.ComplexList {
  public internalValue? : TestsTestsContent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TestsTestsContentOutputReference {
    return new TestsTestsContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestsTests {
  /**
  * The bundled artifact generated by the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#artifact Tests#artifact}
  */
  readonly artifact?: TestsTestsArtifact;
  /**
  * When specified, will override the sandbox image's CMD (oci config).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#cmd Tests#cmd}
  */
  readonly cmd?: string;
  /**
  * The content to use for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#content Tests#content}
  */
  readonly content?: TestsTestsContent[] | cdktf.IResolvable;
  /**
  * Environment variables to set on the test container. These will overwrite the environment variables set in the image's config on conflicts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#envs Tests#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * The image reference to use as the base image for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#image Tests#image}
  */
  readonly image: string;
  /**
  * The name of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#name Tests#name}
  */
  readonly name: string;
  /**
  * The maximum amount of time to wait for the individual test to complete. This is encompassed by the overall timeout of the parent tests resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#timeout Tests#timeout}
  */
  readonly timeout?: string;
}

export function testsTestsToTerraform(struct?: TestsTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact: testsTestsArtifactToTerraform(struct!.artifact),
    cmd: cdktf.stringToTerraform(struct!.cmd),
    content: cdktf.listMapper(testsTestsContentToTerraform, false)(struct!.content),
    envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envs),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function testsTestsToHclTerraform(struct?: TestsTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact: {
      value: testsTestsArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "struct",
      storageClassType: "TestsTestsArtifact",
    },
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.listMapperHcl(testsTestsContentToHclTerraform, false)(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "TestsTestsContentList",
    },
    envs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestsTestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TestsTests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._envs !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestsTests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifact.internalValue = undefined;
      this._cmd = undefined;
      this._content.internalValue = undefined;
      this._envs = undefined;
      this._image = undefined;
      this._name = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifact.internalValue = value.artifact;
      this._cmd = value.cmd;
      this._content.internalValue = value.content;
      this._envs = value.envs;
      this._image = value.image;
      this._name = value.name;
      this._timeout = value.timeout;
    }
  }

  // artifact - computed: true, optional: true, required: false
  private _artifact = new TestsTestsArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: TestsTestsArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // cmd - computed: false, optional: true, required: false
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // content - computed: false, optional: true, required: false
  private _content = new TestsTestsContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: TestsTestsContent[] | cdktf.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: { [key: string]: string }; 
  public get envs() {
    return this.getStringMapAttribute('envs');
  }
  public set envs(value: { [key: string]: string }) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class TestsTestsList extends cdktf.ComplexList {
  public internalValue? : TestsTests[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TestsTestsOutputReference {
    return new TestsTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests imagetest_tests}
*/
export class Tests extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "imagetest_tests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tests to import
  * @param importFromId The id of the existing Tests that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "imagetest_tests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/tests imagetest_tests} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TestsConfig
  */
  public constructor(scope: Construct, id: string, config: TestsConfig) {
    super(scope, id, {
      terraformResourceType: 'imagetest_tests',
      terraformGeneratorMetadata: {
        providerName: 'imagetest',
        providerVersion: '0.0.109',
        providerVersionConstraint: '0.0.109'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._driver = config.driver;
    this._drivers.internalValue = config.drivers;
    this._images = config.images;
    this._labels = config.labels;
    this._name = config.name;
    this._repo = config.repo;
    this._skipped = config.skipped;
    this._tests.internalValue = config.tests;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // drivers - computed: false, optional: true, required: false
  private _drivers = new TestsDriversOutputReference(this, "drivers");
  public get drivers() {
    return this._drivers;
  }
  public putDrivers(value: TestsDrivers) {
    this._drivers.internalValue = value;
  }
  public resetDrivers() {
    this._drivers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driversInput() {
    return this._drivers.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // images - computed: false, optional: false, required: true
  private _images?: { [key: string]: string }; 
  public get images() {
    return this.getStringMapAttribute('images');
  }
  public set images(value: { [key: string]: string }) {
    this._images = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // skipped - computed: true, optional: true, required: false
  private _skipped?: boolean | cdktf.IResolvable; 
  public get skipped() {
    return this.getBooleanAttribute('skipped');
  }
  public set skipped(value: boolean | cdktf.IResolvable) {
    this._skipped = value;
  }
  public resetSkipped() {
    this._skipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedInput() {
    return this._skipped;
  }

  // tests - computed: false, optional: true, required: false
  private _tests = new TestsTestsList(this, "tests", false);
  public get tests() {
    return this._tests;
  }
  public putTests(value: TestsTests[] | cdktf.IResolvable) {
    this._tests.internalValue = value;
  }
  public resetTests() {
    this._tests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testsInput() {
    return this._tests.internalValue;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      driver: cdktf.stringToTerraform(this._driver),
      drivers: testsDriversToTerraform(this._drivers.internalValue),
      images: cdktf.hashMapper(cdktf.stringToTerraform)(this._images),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      repo: cdktf.stringToTerraform(this._repo),
      skipped: cdktf.booleanToTerraform(this._skipped),
      tests: cdktf.listMapper(testsTestsToTerraform, false)(this._tests.internalValue),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      driver: {
        value: cdktf.stringToHclTerraform(this._driver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drivers: {
        value: testsDriversToHclTerraform(this._drivers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TestsDrivers",
      },
      images: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._images),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skipped: {
        value: cdktf.booleanToHclTerraform(this._skipped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tests: {
        value: cdktf.listMapperHcl(testsTestsToHclTerraform, false)(this._tests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TestsTestsList",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
