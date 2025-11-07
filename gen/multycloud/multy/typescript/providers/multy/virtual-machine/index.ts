// https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability zone where this machine should be placed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#availability_zone VirtualMachine#availability_zone}
  */
  readonly availabilityZone?: number;
  /**
  * AWS-specific attributes that will be set if this resource is deployed in AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#aws_overrides VirtualMachine#aws_overrides}
  */
  readonly awsOverrides?: VirtualMachineAwsOverrides;
  /**
  * Azure-specific attributes that will be set if this resource is deployed in Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#azure_overrides VirtualMachine#azure_overrides}
  */
  readonly azureOverrides?: VirtualMachineAzureOverrides;
  /**
  * Cloud provider to deploy resource into. Accepted values are `aws`, `azure` or `gcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#cloud VirtualMachine#cloud}
  */
  readonly cloud: string;
  /**
  * GCP-specific attributes that will be set if this resource is deployed in GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#gcp_overrides VirtualMachine#gcp_overrides}
  */
  readonly gcpOverrides?: VirtualMachineGcpOverrides;
  /**
  * If true, a public IP will be automatically generated. Cannot be used with `public_ip_id`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#generate_public_ip VirtualMachine#generate_public_ip}
  */
  readonly generatePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Virtual Machine image definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#image_reference VirtualMachine#image_reference}
  */
  readonly imageReference: VirtualMachineImageReference;
  /**
  * Location to deploy resource into. Read more about regions in [documentation](https://docs.multy.dev/regions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#location VirtualMachine#location}
  */
  readonly location: string;
  /**
  * Name of Virtual Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * IDs of `network_interface` resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}
  */
  readonly networkInterfaceIds?: string[];
  /**
  * IDs of `network_security_group` resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#network_security_group_ids VirtualMachine#network_security_group_ids}
  */
  readonly networkSecurityGroupIds?: string[];
  /**
  * ID of `public_ip` resource. Cannot be used with `generate_public_ip`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#public_ip_id VirtualMachine#public_ip_id}
  */
  readonly publicIpId?: string;
  /**
  * Public SSH Key of Virtual Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#public_ssh_key VirtualMachine#public_ssh_key}
  */
  readonly publicSshKey?: string;
  /**
  * Size of Virtual Machine. Accepted values are `general_micro`, `general_medium`, `general_large`, `general_nano`, `general_small`, `general_xlarge`, `general_2xlarge`, `compute_large`, `compute_xlarge`, `compute_2xlarge`, `compute_4xlarge`, `compute_8xlarge`, `memory_large`, `memory_xlarge`, `memory_2xlarge`, `memory_4xlarge`, `memory_8xlarge`, `memory_12xlarge` or `memory_16xlarge`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#size VirtualMachine#size}
  */
  readonly size: string;
  /**
  * ID of `subnet` resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#subnet_id VirtualMachine#subnet_id}
  */
  readonly subnetId: string;
  /**
  * User Data script of Virtual Machine that will run on instance launch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#user_data_base64 VirtualMachine#user_data_base64}
  */
  readonly userDataBase64?: string;
}
export interface VirtualMachineAwsOverrides {
  /**
  * The instance type to use for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#instance_type VirtualMachine#instance_type}
  */
  readonly instanceType?: string;
}

export function virtualMachineAwsOverridesToTerraform(struct?: VirtualMachineAwsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
  }
}


export function virtualMachineAwsOverridesToHclTerraform(struct?: VirtualMachineAwsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineAwsOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineAwsOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineAwsOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
    }
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
}
export interface VirtualMachineAzureOverrides {
  /**
  * The size to use for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#size VirtualMachine#size}
  */
  readonly size?: string;
}

export function virtualMachineAzureOverridesToTerraform(struct?: VirtualMachineAzureOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function virtualMachineAzureOverridesToHclTerraform(struct?: VirtualMachineAzureOverrides | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineAzureOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineAzureOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineAzureOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
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
}
export interface VirtualMachineGcpOverrides {
  /**
  * The project to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#project VirtualMachine#project}
  */
  readonly project?: string;
}

export function virtualMachineGcpOverridesToTerraform(struct?: VirtualMachineGcpOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function virtualMachineGcpOverridesToHclTerraform(struct?: VirtualMachineGcpOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineGcpOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineGcpOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineGcpOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._project = value.project;
    }
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface VirtualMachineImageReference {
  /**
  * Operating System of Virtual Machine. Accepted values are `ubuntu`, `debian` or `cent_os`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#os VirtualMachine#os}
  */
  readonly os: string;
  /**
  * OS Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#version VirtualMachine#version}
  */
  readonly version: string;
}

export function virtualMachineImageReferenceToTerraform(struct?: VirtualMachineImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os: cdktf.stringToTerraform(struct!.os),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function virtualMachineImageReferenceToHclTerraform(struct?: VirtualMachineImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineImageReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._os = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._os = value.os;
      this._version = value.version;
    }
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine multy_virtual_machine}
*/
export class VirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "multy_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachine to import
  * @param importFromId The id of the existing VirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "multy_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/virtual_machine multy_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'multy_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'multy',
        providerVersion: '0.0.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._awsOverrides.internalValue = config.awsOverrides;
    this._azureOverrides.internalValue = config.azureOverrides;
    this._cloud = config.cloud;
    this._gcpOverrides.internalValue = config.gcpOverrides;
    this._generatePublicIp = config.generatePublicIp;
    this._imageReference.internalValue = config.imageReference;
    this._location = config.location;
    this._name = config.name;
    this._networkInterfaceIds = config.networkInterfaceIds;
    this._networkSecurityGroupIds = config.networkSecurityGroupIds;
    this._publicIpId = config.publicIpId;
    this._publicSshKey = config.publicSshKey;
    this._size = config.size;
    this._subnetId = config.subnetId;
    this._userDataBase64 = config.userDataBase64;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: number; 
  public get availabilityZone() {
    return this.getNumberAttribute('availability_zone');
  }
  public set availabilityZone(value: number) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // aws_overrides - computed: false, optional: true, required: false
  private _awsOverrides = new VirtualMachineAwsOverridesOutputReference(this, "aws_overrides");
  public get awsOverrides() {
    return this._awsOverrides;
  }
  public putAwsOverrides(value: VirtualMachineAwsOverrides) {
    this._awsOverrides.internalValue = value;
  }
  public resetAwsOverrides() {
    this._awsOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOverridesInput() {
    return this._awsOverrides.internalValue;
  }

  // azure_overrides - computed: false, optional: true, required: false
  private _azureOverrides = new VirtualMachineAzureOverridesOutputReference(this, "azure_overrides");
  public get azureOverrides() {
    return this._azureOverrides;
  }
  public putAzureOverrides(value: VirtualMachineAzureOverrides) {
    this._azureOverrides.internalValue = value;
  }
  public resetAzureOverrides() {
    this._azureOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOverridesInput() {
    return this._azureOverrides.internalValue;
  }

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // gcp_overrides - computed: true, optional: true, required: false
  private _gcpOverrides = new VirtualMachineGcpOverridesOutputReference(this, "gcp_overrides");
  public get gcpOverrides() {
    return this._gcpOverrides;
  }
  public putGcpOverrides(value: VirtualMachineGcpOverrides) {
    this._gcpOverrides.internalValue = value;
  }
  public resetGcpOverrides() {
    this._gcpOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOverridesInput() {
    return this._gcpOverrides.internalValue;
  }

  // generate_public_ip - computed: true, optional: true, required: false
  private _generatePublicIp?: boolean | cdktf.IResolvable; 
  public get generatePublicIp() {
    return this.getBooleanAttribute('generate_public_ip');
  }
  public set generatePublicIp(value: boolean | cdktf.IResolvable) {
    this._generatePublicIp = value;
  }
  public resetGeneratePublicIp() {
    this._generatePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePublicIpInput() {
    return this._generatePublicIp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // image_reference - computed: false, optional: false, required: true
  private _imageReference = new VirtualMachineImageReferenceOutputReference(this, "image_reference");
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: VirtualMachineImageReference) {
    this._imageReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceInput() {
    return this._imageReference.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // network_interface_ids - computed: false, optional: true, required: false
  private _networkInterfaceIds?: string[]; 
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }
  public set networkInterfaceIds(value: string[]) {
    this._networkInterfaceIds = value;
  }
  public resetNetworkInterfaceIds() {
    this._networkInterfaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdsInput() {
    return this._networkInterfaceIds;
  }

  // network_security_group_ids - computed: false, optional: true, required: false
  private _networkSecurityGroupIds?: string[]; 
  public get networkSecurityGroupIds() {
    return this.getListAttribute('network_security_group_ids');
  }
  public set networkSecurityGroupIds(value: string[]) {
    this._networkSecurityGroupIds = value;
  }
  public resetNetworkSecurityGroupIds() {
    this._networkSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdsInput() {
    return this._networkSecurityGroupIds;
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_ip_id - computed: false, optional: true, required: false
  private _publicIpId?: string; 
  public get publicIpId() {
    return this.getStringAttribute('public_ip_id');
  }
  public set publicIpId(value: string) {
    this._publicIpId = value;
  }
  public resetPublicIpId() {
    this._publicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpIdInput() {
    return this._publicIpId;
  }

  // public_ssh_key - computed: false, optional: true, required: false
  private _publicSshKey?: string; 
  public get publicSshKey() {
    return this.getStringAttribute('public_ssh_key');
  }
  public set publicSshKey(value: string) {
    this._publicSshKey = value;
  }
  public resetPublicSshKey() {
    this._publicSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSshKeyInput() {
    return this._publicSshKey;
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new cdktf.StringMap(this, "resource_status");
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // user_data_base64 - computed: false, optional: true, required: false
  private _userDataBase64?: string; 
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.numberToTerraform(this._availabilityZone),
      aws_overrides: virtualMachineAwsOverridesToTerraform(this._awsOverrides.internalValue),
      azure_overrides: virtualMachineAzureOverridesToTerraform(this._azureOverrides.internalValue),
      cloud: cdktf.stringToTerraform(this._cloud),
      gcp_overrides: virtualMachineGcpOverridesToTerraform(this._gcpOverrides.internalValue),
      generate_public_ip: cdktf.booleanToTerraform(this._generatePublicIp),
      image_reference: virtualMachineImageReferenceToTerraform(this._imageReference.internalValue),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_interface_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkInterfaceIds),
      network_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkSecurityGroupIds),
      public_ip_id: cdktf.stringToTerraform(this._publicIpId),
      public_ssh_key: cdktf.stringToTerraform(this._publicSshKey),
      size: cdktf.stringToTerraform(this._size),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.numberToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aws_overrides: {
        value: virtualMachineAwsOverridesToHclTerraform(this._awsOverrides.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachineAwsOverrides",
      },
      azure_overrides: {
        value: virtualMachineAzureOverridesToHclTerraform(this._azureOverrides.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachineAzureOverrides",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_overrides: {
        value: virtualMachineGcpOverridesToHclTerraform(this._gcpOverrides.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachineGcpOverrides",
      },
      generate_public_ip: {
        value: cdktf.booleanToHclTerraform(this._generatePublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_reference: {
        value: virtualMachineImageReferenceToHclTerraform(this._imageReference.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachineImageReference",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkInterfaceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      network_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      public_ip_id: {
        value: cdktf.stringToHclTerraform(this._publicIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ssh_key: {
        value: cdktf.stringToHclTerraform(this._publicSshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data_base64: {
        value: cdktf.stringToHclTerraform(this._userDataBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
