// https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#additional_security_groups InstanceGroup#additional_security_groups}
  */
  readonly additionalSecurityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#annotations InstanceGroup#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#associate_public_ip InstanceGroup#associate_public_ip}
  */
  readonly associatePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#autoscale InstanceGroup#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cloud_labels InstanceGroup#cloud_labels}
  */
  readonly cloudLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cluster_name InstanceGroup#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#compress_user_data InstanceGroup#compress_user_data}
  */
  readonly compressUserData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cpu_credits InstanceGroup#cpu_credits}
  */
  readonly cpuCredits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#detailed_instance_monitoring InstanceGroup#detailed_instance_monitoring}
  */
  readonly detailedInstanceMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#gcp_provisioning_model InstanceGroup#gcp_provisioning_model}
  */
  readonly gcpProvisioningModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#id InstanceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#image InstanceGroup#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#instance_interruption_behavior InstanceGroup#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#instance_protection InstanceGroup#instance_protection}
  */
  readonly instanceProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#labels InstanceGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#machine_type InstanceGroup#machine_type}
  */
  readonly machineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#manager InstanceGroup#manager}
  */
  readonly manager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max_instance_lifetime InstanceGroup#max_instance_lifetime}
  */
  readonly maxInstanceLifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max_price InstanceGroup#max_price}
  */
  readonly maxPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max_size InstanceGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#min_size InstanceGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#name InstanceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#node_labels InstanceGroup#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#packages InstanceGroup#packages}
  */
  readonly packages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#role InstanceGroup#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root_volume_encryption InstanceGroup#root_volume_encryption}
  */
  readonly rootVolumeEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root_volume_encryption_key InstanceGroup#root_volume_encryption_key}
  */
  readonly rootVolumeEncryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root_volume_iops InstanceGroup#root_volume_iops}
  */
  readonly rootVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root_volume_optimization InstanceGroup#root_volume_optimization}
  */
  readonly rootVolumeOptimization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root_volume_size InstanceGroup#root_volume_size}
  */
  readonly rootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root_volume_throughput InstanceGroup#root_volume_throughput}
  */
  readonly rootVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root_volume_type InstanceGroup#root_volume_type}
  */
  readonly rootVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#security_group_override InstanceGroup#security_group_override}
  */
  readonly securityGroupOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#spot_duration_in_minutes InstanceGroup#spot_duration_in_minutes}
  */
  readonly spotDurationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#subnets InstanceGroup#subnets}
  */
  readonly subnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#suspend_processes InstanceGroup#suspend_processes}
  */
  readonly suspendProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#sysctl_parameters InstanceGroup#sysctl_parameters}
  */
  readonly sysctlParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#taints InstanceGroup#taints}
  */
  readonly taints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#tenancy InstanceGroup#tenancy}
  */
  readonly tenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#update_policy InstanceGroup#update_policy}
  */
  readonly updatePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#zones InstanceGroup#zones}
  */
  readonly zones?: string[];
  /**
  * additional_user_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#additional_user_data InstanceGroup#additional_user_data}
  */
  readonly additionalUserData?: InstanceGroupAdditionalUserData[] | cdktf.IResolvable;
  /**
  * containerd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#containerd InstanceGroup#containerd}
  */
  readonly containerd?: InstanceGroupContainerd;
  /**
  * external_load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#external_load_balancers InstanceGroup#external_load_balancers}
  */
  readonly externalLoadBalancers?: InstanceGroupExternalLoadBalancers[] | cdktf.IResolvable;
  /**
  * file_assets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#file_assets InstanceGroup#file_assets}
  */
  readonly fileAssets?: InstanceGroupFileAssets[] | cdktf.IResolvable;
  /**
  * guest_accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#guest_accelerators InstanceGroup#guest_accelerators}
  */
  readonly guestAccelerators?: InstanceGroupGuestAccelerators[] | cdktf.IResolvable;
  /**
  * hooks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#hooks InstanceGroup#hooks}
  */
  readonly hooks?: InstanceGroupHooks[] | cdktf.IResolvable;
  /**
  * iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#iam InstanceGroup#iam}
  */
  readonly iam?: InstanceGroupIam;
  /**
  * instance_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#instance_metadata InstanceGroup#instance_metadata}
  */
  readonly instanceMetadata?: InstanceGroupInstanceMetadata;
  /**
  * kubelet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#kubelet InstanceGroup#kubelet}
  */
  readonly kubelet?: InstanceGroupKubelet;
  /**
  * mixed_instances_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#mixed_instances_policy InstanceGroup#mixed_instances_policy}
  */
  readonly mixedInstancesPolicy?: InstanceGroupMixedInstancesPolicy;
  /**
  * rolling_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#rolling_update InstanceGroup#rolling_update}
  */
  readonly rollingUpdate?: InstanceGroupRollingUpdate;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#volume_mounts InstanceGroup#volume_mounts}
  */
  readonly volumeMounts?: InstanceGroupVolumeMounts[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#volumes InstanceGroup#volumes}
  */
  readonly volumes?: InstanceGroupVolumes[] | cdktf.IResolvable;
  /**
  * warm_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#warm_pool InstanceGroup#warm_pool}
  */
  readonly warmPool?: InstanceGroupWarmPool;
}
export interface InstanceGroupAdditionalUserData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#content InstanceGroup#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#name InstanceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#type InstanceGroup#type}
  */
  readonly type: string;
}

export function instanceGroupAdditionalUserDataToTerraform(struct?: InstanceGroupAdditionalUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function instanceGroupAdditionalUserDataToHclTerraform(struct?: InstanceGroupAdditionalUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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

export class InstanceGroupAdditionalUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceGroupAdditionalUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupAdditionalUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class InstanceGroupAdditionalUserDataList extends cdktf.ComplexList {
  public internalValue? : InstanceGroupAdditionalUserData[] | cdktf.IResolvable

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
  public get(index: number): InstanceGroupAdditionalUserDataOutputReference {
    return new InstanceGroupAdditionalUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupContainerdNvidiaGpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#driver_package InstanceGroup#driver_package}
  */
  readonly driverPackage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#enabled InstanceGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function instanceGroupContainerdNvidiaGpuToTerraform(struct?: InstanceGroupContainerdNvidiaGpuOutputReference | InstanceGroupContainerdNvidiaGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_package: cdktf.stringToTerraform(struct!.driverPackage),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function instanceGroupContainerdNvidiaGpuToHclTerraform(struct?: InstanceGroupContainerdNvidiaGpuOutputReference | InstanceGroupContainerdNvidiaGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver_package: {
      value: cdktf.stringToHclTerraform(struct!.driverPackage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupContainerdNvidiaGpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupContainerdNvidiaGpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverPackage !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverPackage = this._driverPackage;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupContainerdNvidiaGpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverPackage = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverPackage = value.driverPackage;
      this._enabled = value.enabled;
    }
  }

  // driver_package - computed: false, optional: true, required: false
  private _driverPackage?: string; 
  public get driverPackage() {
    return this.getStringAttribute('driver_package');
  }
  public set driverPackage(value: string) {
    this._driverPackage = value;
  }
  public resetDriverPackage() {
    this._driverPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverPackageInput() {
    return this._driverPackage;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface InstanceGroupContainerdPackages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#hash_amd64 InstanceGroup#hash_amd64}
  */
  readonly hashAmd64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#hash_arm64 InstanceGroup#hash_arm64}
  */
  readonly hashArm64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#url_amd64 InstanceGroup#url_amd64}
  */
  readonly urlAmd64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#url_arm64 InstanceGroup#url_arm64}
  */
  readonly urlArm64?: string;
}

export function instanceGroupContainerdPackagesToTerraform(struct?: InstanceGroupContainerdPackagesOutputReference | InstanceGroupContainerdPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_amd64: cdktf.stringToTerraform(struct!.hashAmd64),
    hash_arm64: cdktf.stringToTerraform(struct!.hashArm64),
    url_amd64: cdktf.stringToTerraform(struct!.urlAmd64),
    url_arm64: cdktf.stringToTerraform(struct!.urlArm64),
  }
}


export function instanceGroupContainerdPackagesToHclTerraform(struct?: InstanceGroupContainerdPackagesOutputReference | InstanceGroupContainerdPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_amd64: {
      value: cdktf.stringToHclTerraform(struct!.hashAmd64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_arm64: {
      value: cdktf.stringToHclTerraform(struct!.hashArm64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_amd64: {
      value: cdktf.stringToHclTerraform(struct!.urlAmd64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_arm64: {
      value: cdktf.stringToHclTerraform(struct!.urlArm64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupContainerdPackagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupContainerdPackages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAmd64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAmd64 = this._hashAmd64;
    }
    if (this._hashArm64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashArm64 = this._hashArm64;
    }
    if (this._urlAmd64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlAmd64 = this._urlAmd64;
    }
    if (this._urlArm64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlArm64 = this._urlArm64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupContainerdPackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAmd64 = undefined;
      this._hashArm64 = undefined;
      this._urlAmd64 = undefined;
      this._urlArm64 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAmd64 = value.hashAmd64;
      this._hashArm64 = value.hashArm64;
      this._urlAmd64 = value.urlAmd64;
      this._urlArm64 = value.urlArm64;
    }
  }

  // hash_amd64 - computed: false, optional: true, required: false
  private _hashAmd64?: string; 
  public get hashAmd64() {
    return this.getStringAttribute('hash_amd64');
  }
  public set hashAmd64(value: string) {
    this._hashAmd64 = value;
  }
  public resetHashAmd64() {
    this._hashAmd64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAmd64Input() {
    return this._hashAmd64;
  }

  // hash_arm64 - computed: false, optional: true, required: false
  private _hashArm64?: string; 
  public get hashArm64() {
    return this.getStringAttribute('hash_arm64');
  }
  public set hashArm64(value: string) {
    this._hashArm64 = value;
  }
  public resetHashArm64() {
    this._hashArm64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashArm64Input() {
    return this._hashArm64;
  }

  // url_amd64 - computed: false, optional: true, required: false
  private _urlAmd64?: string; 
  public get urlAmd64() {
    return this.getStringAttribute('url_amd64');
  }
  public set urlAmd64(value: string) {
    this._urlAmd64 = value;
  }
  public resetUrlAmd64() {
    this._urlAmd64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAmd64Input() {
    return this._urlAmd64;
  }

  // url_arm64 - computed: false, optional: true, required: false
  private _urlArm64?: string; 
  public get urlArm64() {
    return this.getStringAttribute('url_arm64');
  }
  public set urlArm64(value: string) {
    this._urlArm64 = value;
  }
  public resetUrlArm64() {
    this._urlArm64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlArm64Input() {
    return this._urlArm64;
  }
}
export interface InstanceGroupContainerdRegistryMirrors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#key InstanceGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#value InstanceGroup#value}
  */
  readonly value: string[];
}

export function instanceGroupContainerdRegistryMirrorsToTerraform(struct?: InstanceGroupContainerdRegistryMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function instanceGroupContainerdRegistryMirrorsToHclTerraform(struct?: InstanceGroupContainerdRegistryMirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupContainerdRegistryMirrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceGroupContainerdRegistryMirrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupContainerdRegistryMirrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class InstanceGroupContainerdRegistryMirrorsList extends cdktf.ComplexList {
  public internalValue? : InstanceGroupContainerdRegistryMirrors[] | cdktf.IResolvable

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
  public get(index: number): InstanceGroupContainerdRegistryMirrorsOutputReference {
    return new InstanceGroupContainerdRegistryMirrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupContainerdRuncPackages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#hash_amd64 InstanceGroup#hash_amd64}
  */
  readonly hashAmd64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#hash_arm64 InstanceGroup#hash_arm64}
  */
  readonly hashArm64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#url_amd64 InstanceGroup#url_amd64}
  */
  readonly urlAmd64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#url_arm64 InstanceGroup#url_arm64}
  */
  readonly urlArm64?: string;
}

export function instanceGroupContainerdRuncPackagesToTerraform(struct?: InstanceGroupContainerdRuncPackagesOutputReference | InstanceGroupContainerdRuncPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_amd64: cdktf.stringToTerraform(struct!.hashAmd64),
    hash_arm64: cdktf.stringToTerraform(struct!.hashArm64),
    url_amd64: cdktf.stringToTerraform(struct!.urlAmd64),
    url_arm64: cdktf.stringToTerraform(struct!.urlArm64),
  }
}


export function instanceGroupContainerdRuncPackagesToHclTerraform(struct?: InstanceGroupContainerdRuncPackagesOutputReference | InstanceGroupContainerdRuncPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_amd64: {
      value: cdktf.stringToHclTerraform(struct!.hashAmd64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_arm64: {
      value: cdktf.stringToHclTerraform(struct!.hashArm64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_amd64: {
      value: cdktf.stringToHclTerraform(struct!.urlAmd64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_arm64: {
      value: cdktf.stringToHclTerraform(struct!.urlArm64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupContainerdRuncPackagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupContainerdRuncPackages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAmd64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAmd64 = this._hashAmd64;
    }
    if (this._hashArm64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashArm64 = this._hashArm64;
    }
    if (this._urlAmd64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlAmd64 = this._urlAmd64;
    }
    if (this._urlArm64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlArm64 = this._urlArm64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupContainerdRuncPackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAmd64 = undefined;
      this._hashArm64 = undefined;
      this._urlAmd64 = undefined;
      this._urlArm64 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAmd64 = value.hashAmd64;
      this._hashArm64 = value.hashArm64;
      this._urlAmd64 = value.urlAmd64;
      this._urlArm64 = value.urlArm64;
    }
  }

  // hash_amd64 - computed: false, optional: true, required: false
  private _hashAmd64?: string; 
  public get hashAmd64() {
    return this.getStringAttribute('hash_amd64');
  }
  public set hashAmd64(value: string) {
    this._hashAmd64 = value;
  }
  public resetHashAmd64() {
    this._hashAmd64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAmd64Input() {
    return this._hashAmd64;
  }

  // hash_arm64 - computed: false, optional: true, required: false
  private _hashArm64?: string; 
  public get hashArm64() {
    return this.getStringAttribute('hash_arm64');
  }
  public set hashArm64(value: string) {
    this._hashArm64 = value;
  }
  public resetHashArm64() {
    this._hashArm64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashArm64Input() {
    return this._hashArm64;
  }

  // url_amd64 - computed: false, optional: true, required: false
  private _urlAmd64?: string; 
  public get urlAmd64() {
    return this.getStringAttribute('url_amd64');
  }
  public set urlAmd64(value: string) {
    this._urlAmd64 = value;
  }
  public resetUrlAmd64() {
    this._urlAmd64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAmd64Input() {
    return this._urlAmd64;
  }

  // url_arm64 - computed: false, optional: true, required: false
  private _urlArm64?: string; 
  public get urlArm64() {
    return this.getStringAttribute('url_arm64');
  }
  public set urlArm64(value: string) {
    this._urlArm64 = value;
  }
  public resetUrlArm64() {
    this._urlArm64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlArm64Input() {
    return this._urlArm64;
  }
}
export interface InstanceGroupContainerdRunc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#version InstanceGroup#version}
  */
  readonly version?: string;
  /**
  * packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#packages InstanceGroup#packages}
  */
  readonly packages?: InstanceGroupContainerdRuncPackages;
}

export function instanceGroupContainerdRuncToTerraform(struct?: InstanceGroupContainerdRuncOutputReference | InstanceGroupContainerdRunc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    packages: instanceGroupContainerdRuncPackagesToTerraform(struct!.packages),
  }
}


export function instanceGroupContainerdRuncToHclTerraform(struct?: InstanceGroupContainerdRuncOutputReference | InstanceGroupContainerdRunc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packages: {
      value: instanceGroupContainerdRuncPackagesToHclTerraform(struct!.packages),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupContainerdRuncPackagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupContainerdRuncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupContainerdRunc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._packages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupContainerdRunc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
      this._packages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
      this._packages.internalValue = value.packages;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // packages - computed: false, optional: true, required: false
  private _packages = new InstanceGroupContainerdRuncPackagesOutputReference(this, "packages");
  public get packages() {
    return this._packages;
  }
  public putPackages(value: InstanceGroupContainerdRuncPackages) {
    this._packages.internalValue = value;
  }
  public resetPackages() {
    this._packages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
  }
}
export interface InstanceGroupContainerd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#address InstanceGroup#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#config_override InstanceGroup#config_override}
  */
  readonly configOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#log_level InstanceGroup#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root InstanceGroup#root}
  */
  readonly root?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#skip_install InstanceGroup#skip_install}
  */
  readonly skipInstall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#state InstanceGroup#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#version InstanceGroup#version}
  */
  readonly version?: string;
  /**
  * nvidia_gpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#nvidia_gpu InstanceGroup#nvidia_gpu}
  */
  readonly nvidiaGpu?: InstanceGroupContainerdNvidiaGpu;
  /**
  * packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#packages InstanceGroup#packages}
  */
  readonly packages?: InstanceGroupContainerdPackages;
  /**
  * registry_mirrors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#registry_mirrors InstanceGroup#registry_mirrors}
  */
  readonly registryMirrors?: InstanceGroupContainerdRegistryMirrors[] | cdktf.IResolvable;
  /**
  * runc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#runc InstanceGroup#runc}
  */
  readonly runc?: InstanceGroupContainerdRunc;
}

export function instanceGroupContainerdToTerraform(struct?: InstanceGroupContainerdOutputReference | InstanceGroupContainerd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    config_override: cdktf.stringToTerraform(struct!.configOverride),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    root: cdktf.stringToTerraform(struct!.root),
    skip_install: cdktf.booleanToTerraform(struct!.skipInstall),
    state: cdktf.stringToTerraform(struct!.state),
    version: cdktf.stringToTerraform(struct!.version),
    nvidia_gpu: instanceGroupContainerdNvidiaGpuToTerraform(struct!.nvidiaGpu),
    packages: instanceGroupContainerdPackagesToTerraform(struct!.packages),
    registry_mirrors: cdktf.listMapper(instanceGroupContainerdRegistryMirrorsToTerraform, true)(struct!.registryMirrors),
    runc: instanceGroupContainerdRuncToTerraform(struct!.runc),
  }
}


export function instanceGroupContainerdToHclTerraform(struct?: InstanceGroupContainerdOutputReference | InstanceGroupContainerd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_override: {
      value: cdktf.stringToHclTerraform(struct!.configOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root: {
      value: cdktf.stringToHclTerraform(struct!.root),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_install: {
      value: cdktf.booleanToHclTerraform(struct!.skipInstall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
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
    nvidia_gpu: {
      value: instanceGroupContainerdNvidiaGpuToHclTerraform(struct!.nvidiaGpu),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupContainerdNvidiaGpuList",
    },
    packages: {
      value: instanceGroupContainerdPackagesToHclTerraform(struct!.packages),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupContainerdPackagesList",
    },
    registry_mirrors: {
      value: cdktf.listMapperHcl(instanceGroupContainerdRegistryMirrorsToHclTerraform, true)(struct!.registryMirrors),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupContainerdRegistryMirrorsList",
    },
    runc: {
      value: instanceGroupContainerdRuncToHclTerraform(struct!.runc),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupContainerdRuncList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupContainerdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupContainerd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._configOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverride = this._configOverride;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._root !== undefined) {
      hasAnyValues = true;
      internalValueResult.root = this._root;
    }
    if (this._skipInstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipInstall = this._skipInstall;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._nvidiaGpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvidiaGpu = this._nvidiaGpu?.internalValue;
    }
    if (this._packages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages?.internalValue;
    }
    if (this._registryMirrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryMirrors = this._registryMirrors?.internalValue;
    }
    if (this._runc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runc = this._runc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupContainerd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._configOverride = undefined;
      this._logLevel = undefined;
      this._root = undefined;
      this._skipInstall = undefined;
      this._state = undefined;
      this._version = undefined;
      this._nvidiaGpu.internalValue = undefined;
      this._packages.internalValue = undefined;
      this._registryMirrors.internalValue = undefined;
      this._runc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._configOverride = value.configOverride;
      this._logLevel = value.logLevel;
      this._root = value.root;
      this._skipInstall = value.skipInstall;
      this._state = value.state;
      this._version = value.version;
      this._nvidiaGpu.internalValue = value.nvidiaGpu;
      this._packages.internalValue = value.packages;
      this._registryMirrors.internalValue = value.registryMirrors;
      this._runc.internalValue = value.runc;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // config_override - computed: false, optional: true, required: false
  private _configOverride?: string; 
  public get configOverride() {
    return this.getStringAttribute('config_override');
  }
  public set configOverride(value: string) {
    this._configOverride = value;
  }
  public resetConfigOverride() {
    this._configOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverrideInput() {
    return this._configOverride;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // root - computed: false, optional: true, required: false
  private _root?: string; 
  public get root() {
    return this.getStringAttribute('root');
  }
  public set root(value: string) {
    this._root = value;
  }
  public resetRoot() {
    this._root = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootInput() {
    return this._root;
  }

  // skip_install - computed: false, optional: true, required: false
  private _skipInstall?: boolean | cdktf.IResolvable; 
  public get skipInstall() {
    return this.getBooleanAttribute('skip_install');
  }
  public set skipInstall(value: boolean | cdktf.IResolvable) {
    this._skipInstall = value;
  }
  public resetSkipInstall() {
    this._skipInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInstallInput() {
    return this._skipInstall;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // nvidia_gpu - computed: false, optional: true, required: false
  private _nvidiaGpu = new InstanceGroupContainerdNvidiaGpuOutputReference(this, "nvidia_gpu");
  public get nvidiaGpu() {
    return this._nvidiaGpu;
  }
  public putNvidiaGpu(value: InstanceGroupContainerdNvidiaGpu) {
    this._nvidiaGpu.internalValue = value;
  }
  public resetNvidiaGpu() {
    this._nvidiaGpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvidiaGpuInput() {
    return this._nvidiaGpu.internalValue;
  }

  // packages - computed: false, optional: true, required: false
  private _packages = new InstanceGroupContainerdPackagesOutputReference(this, "packages");
  public get packages() {
    return this._packages;
  }
  public putPackages(value: InstanceGroupContainerdPackages) {
    this._packages.internalValue = value;
  }
  public resetPackages() {
    this._packages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
  }

  // registry_mirrors - computed: false, optional: true, required: false
  private _registryMirrors = new InstanceGroupContainerdRegistryMirrorsList(this, "registry_mirrors", false);
  public get registryMirrors() {
    return this._registryMirrors;
  }
  public putRegistryMirrors(value: InstanceGroupContainerdRegistryMirrors[] | cdktf.IResolvable) {
    this._registryMirrors.internalValue = value;
  }
  public resetRegistryMirrors() {
    this._registryMirrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryMirrorsInput() {
    return this._registryMirrors.internalValue;
  }

  // runc - computed: false, optional: true, required: false
  private _runc = new InstanceGroupContainerdRuncOutputReference(this, "runc");
  public get runc() {
    return this._runc;
  }
  public putRunc(value: InstanceGroupContainerdRunc) {
    this._runc.internalValue = value;
  }
  public resetRunc() {
    this._runc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runcInput() {
    return this._runc.internalValue;
  }
}
export interface InstanceGroupExternalLoadBalancers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#load_balancer_name InstanceGroup#load_balancer_name}
  */
  readonly loadBalancerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#target_group_arn InstanceGroup#target_group_arn}
  */
  readonly targetGroupArn?: string;
}

export function instanceGroupExternalLoadBalancersToTerraform(struct?: InstanceGroupExternalLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer_name: cdktf.stringToTerraform(struct!.loadBalancerName),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}


export function instanceGroupExternalLoadBalancersToHclTerraform(struct?: InstanceGroupExternalLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer_name: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupExternalLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceGroupExternalLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerName = this._loadBalancerName;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupExternalLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancerName = undefined;
      this._targetGroupArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancerName = value.loadBalancerName;
      this._targetGroupArn = value.targetGroupArn;
    }
  }

  // load_balancer_name - computed: false, optional: true, required: false
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  public resetLoadBalancerName() {
    this._loadBalancerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // target_group_arn - computed: false, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }
}

export class InstanceGroupExternalLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : InstanceGroupExternalLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): InstanceGroupExternalLoadBalancersOutputReference {
    return new InstanceGroupExternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupFileAssets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#content InstanceGroup#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#is_base64 InstanceGroup#is_base64}
  */
  readonly isBase64?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#mode InstanceGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#name InstanceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#path InstanceGroup#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#roles InstanceGroup#roles}
  */
  readonly roles?: string[];
}

export function instanceGroupFileAssetsToTerraform(struct?: InstanceGroupFileAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    is_base64: cdktf.booleanToTerraform(struct!.isBase64),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function instanceGroupFileAssetsToHclTerraform(struct?: InstanceGroupFileAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_base64: {
      value: cdktf.booleanToHclTerraform(struct!.isBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupFileAssetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceGroupFileAssets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._isBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBase64 = this._isBase64;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupFileAssets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._isBase64 = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._path = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._isBase64 = value.isBase64;
      this._mode = value.mode;
      this._name = value.name;
      this._path = value.path;
      this._roles = value.roles;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // is_base64 - computed: false, optional: true, required: false
  private _isBase64?: boolean | cdktf.IResolvable; 
  public get isBase64() {
    return this.getBooleanAttribute('is_base64');
  }
  public set isBase64(value: boolean | cdktf.IResolvable) {
    this._isBase64 = value;
  }
  public resetIsBase64() {
    this._isBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBase64Input() {
    return this._isBase64;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class InstanceGroupFileAssetsList extends cdktf.ComplexList {
  public internalValue? : InstanceGroupFileAssets[] | cdktf.IResolvable

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
  public get(index: number): InstanceGroupFileAssetsOutputReference {
    return new InstanceGroupFileAssetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupGuestAccelerators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#accelerator_count InstanceGroup#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#accelerator_type InstanceGroup#accelerator_type}
  */
  readonly acceleratorType?: string;
}

export function instanceGroupGuestAcceleratorsToTerraform(struct?: InstanceGroupGuestAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}


export function instanceGroupGuestAcceleratorsToHclTerraform(struct?: InstanceGroupGuestAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_count: {
      value: cdktf.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupGuestAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceGroupGuestAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupGuestAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
    }
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class InstanceGroupGuestAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : InstanceGroupGuestAccelerators[] | cdktf.IResolvable

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
  public get(index: number): InstanceGroupGuestAcceleratorsOutputReference {
    return new InstanceGroupGuestAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupHooksExecContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#command InstanceGroup#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#environment InstanceGroup#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#image InstanceGroup#image}
  */
  readonly image: string;
}

export function instanceGroupHooksExecContainerToTerraform(struct?: InstanceGroupHooksExecContainerOutputReference | InstanceGroupHooksExecContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function instanceGroupHooksExecContainerToHclTerraform(struct?: InstanceGroupHooksExecContainerOutputReference | InstanceGroupHooksExecContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupHooksExecContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupHooksExecContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupHooksExecContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._environment = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._environment = value.environment;
      this._image = value.image;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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
}
export interface InstanceGroupHooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#before InstanceGroup#before}
  */
  readonly before?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#enabled InstanceGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#manifest InstanceGroup#manifest}
  */
  readonly manifest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#name InstanceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#requires InstanceGroup#requires}
  */
  readonly requires?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#roles InstanceGroup#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#use_raw_manifest InstanceGroup#use_raw_manifest}
  */
  readonly useRawManifest?: boolean | cdktf.IResolvable;
  /**
  * exec_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#exec_container InstanceGroup#exec_container}
  */
  readonly execContainer?: InstanceGroupHooksExecContainer;
}

export function instanceGroupHooksToTerraform(struct?: InstanceGroupHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    before: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.before),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    manifest: cdktf.stringToTerraform(struct!.manifest),
    name: cdktf.stringToTerraform(struct!.name),
    requires: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requires),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    use_raw_manifest: cdktf.booleanToTerraform(struct!.useRawManifest),
    exec_container: instanceGroupHooksExecContainerToTerraform(struct!.execContainer),
  }
}


export function instanceGroupHooksToHclTerraform(struct?: InstanceGroupHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    before: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.before),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manifest: {
      value: cdktf.stringToHclTerraform(struct!.manifest),
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
    requires: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requires),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_raw_manifest: {
      value: cdktf.booleanToHclTerraform(struct!.useRawManifest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exec_container: {
      value: instanceGroupHooksExecContainerToHclTerraform(struct!.execContainer),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupHooksExecContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceGroupHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._before !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._manifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifest = this._manifest;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requires !== undefined) {
      hasAnyValues = true;
      internalValueResult.requires = this._requires;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._useRawManifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRawManifest = this._useRawManifest;
    }
    if (this._execContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execContainer = this._execContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._before = undefined;
      this._enabled = undefined;
      this._manifest = undefined;
      this._name = undefined;
      this._requires = undefined;
      this._roles = undefined;
      this._useRawManifest = undefined;
      this._execContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._before = value.before;
      this._enabled = value.enabled;
      this._manifest = value.manifest;
      this._name = value.name;
      this._requires = value.requires;
      this._roles = value.roles;
      this._useRawManifest = value.useRawManifest;
      this._execContainer.internalValue = value.execContainer;
    }
  }

  // before - computed: false, optional: true, required: false
  private _before?: string[]; 
  public get before() {
    return this.getListAttribute('before');
  }
  public set before(value: string[]) {
    this._before = value;
  }
  public resetBefore() {
    this._before = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // manifest - computed: false, optional: true, required: false
  private _manifest?: string; 
  public get manifest() {
    return this.getStringAttribute('manifest');
  }
  public set manifest(value: string) {
    this._manifest = value;
  }
  public resetManifest() {
    this._manifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
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

  // requires - computed: false, optional: true, required: false
  private _requires?: string[]; 
  public get requires() {
    return this.getListAttribute('requires');
  }
  public set requires(value: string[]) {
    this._requires = value;
  }
  public resetRequires() {
    this._requires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresInput() {
    return this._requires;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // use_raw_manifest - computed: false, optional: true, required: false
  private _useRawManifest?: boolean | cdktf.IResolvable; 
  public get useRawManifest() {
    return this.getBooleanAttribute('use_raw_manifest');
  }
  public set useRawManifest(value: boolean | cdktf.IResolvable) {
    this._useRawManifest = value;
  }
  public resetUseRawManifest() {
    this._useRawManifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRawManifestInput() {
    return this._useRawManifest;
  }

  // exec_container - computed: false, optional: true, required: false
  private _execContainer = new InstanceGroupHooksExecContainerOutputReference(this, "exec_container");
  public get execContainer() {
    return this._execContainer;
  }
  public putExecContainer(value: InstanceGroupHooksExecContainer) {
    this._execContainer.internalValue = value;
  }
  public resetExecContainer() {
    this._execContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execContainerInput() {
    return this._execContainer.internalValue;
  }
}

export class InstanceGroupHooksList extends cdktf.ComplexList {
  public internalValue? : InstanceGroupHooks[] | cdktf.IResolvable

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
  public get(index: number): InstanceGroupHooksOutputReference {
    return new InstanceGroupHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupIam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#profile InstanceGroup#profile}
  */
  readonly profile: string;
}

export function instanceGroupIamToTerraform(struct?: InstanceGroupIamOutputReference | InstanceGroupIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function instanceGroupIamToHclTerraform(struct?: InstanceGroupIamOutputReference | InstanceGroupIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._profile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._profile = value.profile;
    }
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface InstanceGroupInstanceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#http_put_response_hop_limit InstanceGroup#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#http_tokens InstanceGroup#http_tokens}
  */
  readonly httpTokens?: string;
}

export function instanceGroupInstanceMetadataToTerraform(struct?: InstanceGroupInstanceMetadataOutputReference | InstanceGroupInstanceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}


export function instanceGroupInstanceMetadataToHclTerraform(struct?: InstanceGroupInstanceMetadataOutputReference | InstanceGroupInstanceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_put_response_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.httpPutResponseHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_tokens: {
      value: cdktf.stringToHclTerraform(struct!.httpTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupInstanceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupInstanceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPutResponseHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupInstanceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
      this._httpTokens = value.httpTokens;
    }
  }

  // http_put_response_hop_limit - computed: false, optional: true, required: false
  private _httpPutResponseHopLimit?: number; 
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit;
  }

  // http_tokens - computed: false, optional: true, required: false
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  public resetHttpTokens() {
    this._httpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }
}
export interface InstanceGroupKubeletAnonymousAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#value InstanceGroup#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function instanceGroupKubeletAnonymousAuthToTerraform(struct?: InstanceGroupKubeletAnonymousAuthOutputReference | InstanceGroupKubeletAnonymousAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function instanceGroupKubeletAnonymousAuthToHclTerraform(struct?: InstanceGroupKubeletAnonymousAuthOutputReference | InstanceGroupKubeletAnonymousAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupKubeletAnonymousAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupKubeletAnonymousAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupKubeletAnonymousAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InstanceGroupKubeletCpuCfsQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#value InstanceGroup#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function instanceGroupKubeletCpuCfsQuotaToTerraform(struct?: InstanceGroupKubeletCpuCfsQuotaOutputReference | InstanceGroupKubeletCpuCfsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function instanceGroupKubeletCpuCfsQuotaToHclTerraform(struct?: InstanceGroupKubeletCpuCfsQuotaOutputReference | InstanceGroupKubeletCpuCfsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupKubeletCpuCfsQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupKubeletCpuCfsQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupKubeletCpuCfsQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InstanceGroupKubelet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#allow_privileged InstanceGroup#allow_privileged}
  */
  readonly allowPrivileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#allowed_unsafe_sysctls InstanceGroup#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#api_servers InstanceGroup#api_servers}
  */
  readonly apiServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#authentication_token_webhook InstanceGroup#authentication_token_webhook}
  */
  readonly authenticationTokenWebhook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#authentication_token_webhook_cache_ttl InstanceGroup#authentication_token_webhook_cache_ttl}
  */
  readonly authenticationTokenWebhookCacheTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#authorization_mode InstanceGroup#authorization_mode}
  */
  readonly authorizationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#babysit_daemons InstanceGroup#babysit_daemons}
  */
  readonly babysitDaemons?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#bootstrap_kubeconfig InstanceGroup#bootstrap_kubeconfig}
  */
  readonly bootstrapKubeconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cgroup_driver InstanceGroup#cgroup_driver}
  */
  readonly cgroupDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cgroup_root InstanceGroup#cgroup_root}
  */
  readonly cgroupRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#client_ca_file InstanceGroup#client_ca_file}
  */
  readonly clientCaFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cloud_provider InstanceGroup#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cluster_dns InstanceGroup#cluster_dns}
  */
  readonly clusterDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cluster_domain InstanceGroup#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#configure_cbr0 InstanceGroup#configure_cbr0}
  */
  readonly configureCbr0?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#container_log_max_files InstanceGroup#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#container_log_max_size InstanceGroup#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cpu_cfs_quota_period InstanceGroup#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cpu_manager_policy InstanceGroup#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#docker_disable_shared_pid InstanceGroup#docker_disable_shared_pid}
  */
  readonly dockerDisableSharedPid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#enable_cadvisor_json_endpoints InstanceGroup#enable_cadvisor_json_endpoints}
  */
  readonly enableCadvisorJsonEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#enable_custom_metrics InstanceGroup#enable_custom_metrics}
  */
  readonly enableCustomMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#enable_debugging_handlers InstanceGroup#enable_debugging_handlers}
  */
  readonly enableDebuggingHandlers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#enforce_node_allocatable InstanceGroup#enforce_node_allocatable}
  */
  readonly enforceNodeAllocatable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#event_burst InstanceGroup#event_burst}
  */
  readonly eventBurst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#event_qps InstanceGroup#event_qps}
  */
  readonly eventQps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#eviction_hard InstanceGroup#eviction_hard}
  */
  readonly evictionHard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#eviction_max_pod_grace_period InstanceGroup#eviction_max_pod_grace_period}
  */
  readonly evictionMaxPodGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#eviction_minimum_reclaim InstanceGroup#eviction_minimum_reclaim}
  */
  readonly evictionMinimumReclaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#eviction_pressure_transition_period InstanceGroup#eviction_pressure_transition_period}
  */
  readonly evictionPressureTransitionPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#eviction_soft InstanceGroup#eviction_soft}
  */
  readonly evictionSoft?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#eviction_soft_grace_period InstanceGroup#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#experimental_allowed_unsafe_sysctls InstanceGroup#experimental_allowed_unsafe_sysctls}
  */
  readonly experimentalAllowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#fail_swap_on InstanceGroup#fail_swap_on}
  */
  readonly failSwapOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#feature_gates InstanceGroup#feature_gates}
  */
  readonly featureGates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#hairpin_mode InstanceGroup#hairpin_mode}
  */
  readonly hairpinMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#hostname_override InstanceGroup#hostname_override}
  */
  readonly hostnameOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#housekeeping_interval InstanceGroup#housekeeping_interval}
  */
  readonly housekeepingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#image_gc_high_threshold_percent InstanceGroup#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#image_gc_low_threshold_percent InstanceGroup#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#image_pull_progress_deadline InstanceGroup#image_pull_progress_deadline}
  */
  readonly imagePullProgressDeadline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#kernel_memcg_notification InstanceGroup#kernel_memcg_notification}
  */
  readonly kernelMemcgNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#kube_reserved InstanceGroup#kube_reserved}
  */
  readonly kubeReserved?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#kube_reserved_cgroup InstanceGroup#kube_reserved_cgroup}
  */
  readonly kubeReservedCgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#kubeconfig_path InstanceGroup#kubeconfig_path}
  */
  readonly kubeconfigPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#kubelet_cgroups InstanceGroup#kubelet_cgroups}
  */
  readonly kubeletCgroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#log_format InstanceGroup#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#log_level InstanceGroup#log_level}
  */
  readonly logLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max_pods InstanceGroup#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#network_plugin_mtu InstanceGroup#network_plugin_mtu}
  */
  readonly networkPluginMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#network_plugin_name InstanceGroup#network_plugin_name}
  */
  readonly networkPluginName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#node_labels InstanceGroup#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#node_status_update_frequency InstanceGroup#node_status_update_frequency}
  */
  readonly nodeStatusUpdateFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#non_masquerade_cidr InstanceGroup#non_masquerade_cidr}
  */
  readonly nonMasqueradeCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#nvidia_gp_us InstanceGroup#nvidia_gp_us}
  */
  readonly nvidiaGpUs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#pod_cidr InstanceGroup#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#pod_infra_container_image InstanceGroup#pod_infra_container_image}
  */
  readonly podInfraContainerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#pod_manifest_path InstanceGroup#pod_manifest_path}
  */
  readonly podManifestPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#pod_pids_limit InstanceGroup#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#protect_kernel_defaults InstanceGroup#protect_kernel_defaults}
  */
  readonly protectKernelDefaults?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#read_only_port InstanceGroup#read_only_port}
  */
  readonly readOnlyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#reconcile_cidr InstanceGroup#reconcile_cidr}
  */
  readonly reconcileCidr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#register_node InstanceGroup#register_node}
  */
  readonly registerNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#register_schedulable InstanceGroup#register_schedulable}
  */
  readonly registerSchedulable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#registry_burst InstanceGroup#registry_burst}
  */
  readonly registryBurst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#registry_pull_qps InstanceGroup#registry_pull_qps}
  */
  readonly registryPullQps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#require_kubeconfig InstanceGroup#require_kubeconfig}
  */
  readonly requireKubeconfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#resolver_config InstanceGroup#resolver_config}
  */
  readonly resolverConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#root_dir InstanceGroup#root_dir}
  */
  readonly rootDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#rotate_certificates InstanceGroup#rotate_certificates}
  */
  readonly rotateCertificates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#runtime_cgroups InstanceGroup#runtime_cgroups}
  */
  readonly runtimeCgroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#runtime_request_timeout InstanceGroup#runtime_request_timeout}
  */
  readonly runtimeRequestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#seccomp_profile_root InstanceGroup#seccomp_profile_root}
  */
  readonly seccompProfileRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#serialize_image_pulls InstanceGroup#serialize_image_pulls}
  */
  readonly serializeImagePulls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#shutdown_grace_period InstanceGroup#shutdown_grace_period}
  */
  readonly shutdownGracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#shutdown_grace_period_critical_pods InstanceGroup#shutdown_grace_period_critical_pods}
  */
  readonly shutdownGracePeriodCriticalPods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#streaming_connection_idle_timeout InstanceGroup#streaming_connection_idle_timeout}
  */
  readonly streamingConnectionIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#system_cgroups InstanceGroup#system_cgroups}
  */
  readonly systemCgroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#system_reserved InstanceGroup#system_reserved}
  */
  readonly systemReserved?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#system_reserved_cgroup InstanceGroup#system_reserved_cgroup}
  */
  readonly systemReservedCgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#taints InstanceGroup#taints}
  */
  readonly taints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#tls_cert_file InstanceGroup#tls_cert_file}
  */
  readonly tlsCertFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#tls_cipher_suites InstanceGroup#tls_cipher_suites}
  */
  readonly tlsCipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#tls_min_version InstanceGroup#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#tls_private_key_file InstanceGroup#tls_private_key_file}
  */
  readonly tlsPrivateKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#topology_manager_policy InstanceGroup#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#volume_plugin_directory InstanceGroup#volume_plugin_directory}
  */
  readonly volumePluginDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#volume_stats_agg_period InstanceGroup#volume_stats_agg_period}
  */
  readonly volumeStatsAggPeriod?: string;
  /**
  * anonymous_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#anonymous_auth InstanceGroup#anonymous_auth}
  */
  readonly anonymousAuth?: InstanceGroupKubeletAnonymousAuth;
  /**
  * cpu_cfs_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cpu_cfs_quota InstanceGroup#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: InstanceGroupKubeletCpuCfsQuota;
}

export function instanceGroupKubeletToTerraform(struct?: InstanceGroupKubeletOutputReference | InstanceGroupKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privileged: cdktf.booleanToTerraform(struct!.allowPrivileged),
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    api_servers: cdktf.stringToTerraform(struct!.apiServers),
    authentication_token_webhook: cdktf.booleanToTerraform(struct!.authenticationTokenWebhook),
    authentication_token_webhook_cache_ttl: cdktf.stringToTerraform(struct!.authenticationTokenWebhookCacheTtl),
    authorization_mode: cdktf.stringToTerraform(struct!.authorizationMode),
    babysit_daemons: cdktf.booleanToTerraform(struct!.babysitDaemons),
    bootstrap_kubeconfig: cdktf.stringToTerraform(struct!.bootstrapKubeconfig),
    cgroup_driver: cdktf.stringToTerraform(struct!.cgroupDriver),
    cgroup_root: cdktf.stringToTerraform(struct!.cgroupRoot),
    client_ca_file: cdktf.stringToTerraform(struct!.clientCaFile),
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    cluster_dns: cdktf.stringToTerraform(struct!.clusterDns),
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    configure_cbr0: cdktf.booleanToTerraform(struct!.configureCbr0),
    container_log_max_files: cdktf.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktf.stringToTerraform(struct!.containerLogMaxSize),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    docker_disable_shared_pid: cdktf.booleanToTerraform(struct!.dockerDisableSharedPid),
    enable_cadvisor_json_endpoints: cdktf.booleanToTerraform(struct!.enableCadvisorJsonEndpoints),
    enable_custom_metrics: cdktf.booleanToTerraform(struct!.enableCustomMetrics),
    enable_debugging_handlers: cdktf.booleanToTerraform(struct!.enableDebuggingHandlers),
    enforce_node_allocatable: cdktf.stringToTerraform(struct!.enforceNodeAllocatable),
    event_burst: cdktf.numberToTerraform(struct!.eventBurst),
    event_qps: cdktf.numberToTerraform(struct!.eventQps),
    eviction_hard: cdktf.stringToTerraform(struct!.evictionHard),
    eviction_max_pod_grace_period: cdktf.numberToTerraform(struct!.evictionMaxPodGracePeriod),
    eviction_minimum_reclaim: cdktf.stringToTerraform(struct!.evictionMinimumReclaim),
    eviction_pressure_transition_period: cdktf.stringToTerraform(struct!.evictionPressureTransitionPeriod),
    eviction_soft: cdktf.stringToTerraform(struct!.evictionSoft),
    eviction_soft_grace_period: cdktf.stringToTerraform(struct!.evictionSoftGracePeriod),
    experimental_allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.experimentalAllowedUnsafeSysctls),
    fail_swap_on: cdktf.booleanToTerraform(struct!.failSwapOn),
    feature_gates: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.featureGates),
    hairpin_mode: cdktf.stringToTerraform(struct!.hairpinMode),
    hostname_override: cdktf.stringToTerraform(struct!.hostnameOverride),
    housekeeping_interval: cdktf.stringToTerraform(struct!.housekeepingInterval),
    image_gc_high_threshold_percent: cdktf.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktf.numberToTerraform(struct!.imageGcLowThresholdPercent),
    image_pull_progress_deadline: cdktf.stringToTerraform(struct!.imagePullProgressDeadline),
    kernel_memcg_notification: cdktf.booleanToTerraform(struct!.kernelMemcgNotification),
    kube_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeReserved),
    kube_reserved_cgroup: cdktf.stringToTerraform(struct!.kubeReservedCgroup),
    kubeconfig_path: cdktf.stringToTerraform(struct!.kubeconfigPath),
    kubelet_cgroups: cdktf.stringToTerraform(struct!.kubeletCgroups),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.numberToTerraform(struct!.logLevel),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    network_plugin_mtu: cdktf.numberToTerraform(struct!.networkPluginMtu),
    network_plugin_name: cdktf.stringToTerraform(struct!.networkPluginName),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    node_status_update_frequency: cdktf.stringToTerraform(struct!.nodeStatusUpdateFrequency),
    non_masquerade_cidr: cdktf.stringToTerraform(struct!.nonMasqueradeCidr),
    nvidia_gp_us: cdktf.numberToTerraform(struct!.nvidiaGpUs),
    pod_cidr: cdktf.stringToTerraform(struct!.podCidr),
    pod_infra_container_image: cdktf.stringToTerraform(struct!.podInfraContainerImage),
    pod_manifest_path: cdktf.stringToTerraform(struct!.podManifestPath),
    pod_pids_limit: cdktf.numberToTerraform(struct!.podPidsLimit),
    protect_kernel_defaults: cdktf.booleanToTerraform(struct!.protectKernelDefaults),
    read_only_port: cdktf.numberToTerraform(struct!.readOnlyPort),
    reconcile_cidr: cdktf.booleanToTerraform(struct!.reconcileCidr),
    register_node: cdktf.booleanToTerraform(struct!.registerNode),
    register_schedulable: cdktf.booleanToTerraform(struct!.registerSchedulable),
    registry_burst: cdktf.numberToTerraform(struct!.registryBurst),
    registry_pull_qps: cdktf.numberToTerraform(struct!.registryPullQps),
    require_kubeconfig: cdktf.booleanToTerraform(struct!.requireKubeconfig),
    resolver_config: cdktf.stringToTerraform(struct!.resolverConfig),
    root_dir: cdktf.stringToTerraform(struct!.rootDir),
    rotate_certificates: cdktf.booleanToTerraform(struct!.rotateCertificates),
    runtime_cgroups: cdktf.stringToTerraform(struct!.runtimeCgroups),
    runtime_request_timeout: cdktf.stringToTerraform(struct!.runtimeRequestTimeout),
    seccomp_profile_root: cdktf.stringToTerraform(struct!.seccompProfileRoot),
    serialize_image_pulls: cdktf.booleanToTerraform(struct!.serializeImagePulls),
    shutdown_grace_period: cdktf.stringToTerraform(struct!.shutdownGracePeriod),
    shutdown_grace_period_critical_pods: cdktf.stringToTerraform(struct!.shutdownGracePeriodCriticalPods),
    streaming_connection_idle_timeout: cdktf.stringToTerraform(struct!.streamingConnectionIdleTimeout),
    system_cgroups: cdktf.stringToTerraform(struct!.systemCgroups),
    system_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemReserved),
    system_reserved_cgroup: cdktf.stringToTerraform(struct!.systemReservedCgroup),
    taints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taints),
    tls_cert_file: cdktf.stringToTerraform(struct!.tlsCertFile),
    tls_cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsCipherSuites),
    tls_min_version: cdktf.stringToTerraform(struct!.tlsMinVersion),
    tls_private_key_file: cdktf.stringToTerraform(struct!.tlsPrivateKeyFile),
    topology_manager_policy: cdktf.stringToTerraform(struct!.topologyManagerPolicy),
    volume_plugin_directory: cdktf.stringToTerraform(struct!.volumePluginDirectory),
    volume_stats_agg_period: cdktf.stringToTerraform(struct!.volumeStatsAggPeriod),
    anonymous_auth: instanceGroupKubeletAnonymousAuthToTerraform(struct!.anonymousAuth),
    cpu_cfs_quota: instanceGroupKubeletCpuCfsQuotaToTerraform(struct!.cpuCfsQuota),
  }
}


export function instanceGroupKubeletToHclTerraform(struct?: InstanceGroupKubeletOutputReference | InstanceGroupKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privileged: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_servers: {
      value: cdktf.stringToHclTerraform(struct!.apiServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_token_webhook: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationTokenWebhook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication_token_webhook_cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.authenticationTokenWebhookCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_mode: {
      value: cdktf.stringToHclTerraform(struct!.authorizationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    babysit_daemons: {
      value: cdktf.booleanToHclTerraform(struct!.babysitDaemons),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bootstrap_kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapKubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cgroup_driver: {
      value: cdktf.stringToHclTerraform(struct!.cgroupDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cgroup_root: {
      value: cdktf.stringToHclTerraform(struct!.cgroupRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ca_file: {
      value: cdktf.stringToHclTerraform(struct!.clientCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns: {
      value: cdktf.stringToHclTerraform(struct!.clusterDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_cbr0: {
      value: cdktf.booleanToHclTerraform(struct!.configureCbr0),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_log_max_files: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_disable_shared_pid: {
      value: cdktf.booleanToHclTerraform(struct!.dockerDisableSharedPid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cadvisor_json_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.enableCadvisorJsonEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_custom_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableCustomMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_debugging_handlers: {
      value: cdktf.booleanToHclTerraform(struct!.enableDebuggingHandlers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_node_allocatable: {
      value: cdktf.stringToHclTerraform(struct!.enforceNodeAllocatable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_burst: {
      value: cdktf.numberToHclTerraform(struct!.eventBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_qps: {
      value: cdktf.numberToHclTerraform(struct!.eventQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eviction_hard: {
      value: cdktf.stringToHclTerraform(struct!.evictionHard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_max_pod_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.evictionMaxPodGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eviction_minimum_reclaim: {
      value: cdktf.stringToHclTerraform(struct!.evictionMinimumReclaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_pressure_transition_period: {
      value: cdktf.stringToHclTerraform(struct!.evictionPressureTransitionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_soft: {
      value: cdktf.stringToHclTerraform(struct!.evictionSoft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_soft_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.evictionSoftGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    experimental_allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.experimentalAllowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fail_swap_on: {
      value: cdktf.booleanToHclTerraform(struct!.failSwapOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_gates: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.featureGates),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hairpin_mode: {
      value: cdktf.stringToHclTerraform(struct!.hairpinMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_override: {
      value: cdktf.stringToHclTerraform(struct!.hostnameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    housekeeping_interval: {
      value: cdktf.stringToHclTerraform(struct!.housekeepingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_gc_high_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_pull_progress_deadline: {
      value: cdktf.stringToHclTerraform(struct!.imagePullProgressDeadline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel_memcg_notification: {
      value: cdktf.booleanToHclTerraform(struct!.kernelMemcgNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kube_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kube_reserved_cgroup: {
      value: cdktf.stringToHclTerraform(struct!.kubeReservedCgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig_path: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfigPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_cgroups: {
      value: cdktf.stringToHclTerraform(struct!.kubeletCgroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.numberToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_plugin_mtu: {
      value: cdktf.numberToHclTerraform(struct!.networkPluginMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_plugin_name: {
      value: cdktf.stringToHclTerraform(struct!.networkPluginName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_status_update_frequency: {
      value: cdktf.stringToHclTerraform(struct!.nodeStatusUpdateFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_masquerade_cidr: {
      value: cdktf.stringToHclTerraform(struct!.nonMasqueradeCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nvidia_gp_us: {
      value: cdktf.numberToHclTerraform(struct!.nvidiaGpUs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_cidr: {
      value: cdktf.stringToHclTerraform(struct!.podCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_infra_container_image: {
      value: cdktf.stringToHclTerraform(struct!.podInfraContainerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_manifest_path: {
      value: cdktf.stringToHclTerraform(struct!.podManifestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_pids_limit: {
      value: cdktf.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protect_kernel_defaults: {
      value: cdktf.booleanToHclTerraform(struct!.protectKernelDefaults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_port: {
      value: cdktf.numberToHclTerraform(struct!.readOnlyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reconcile_cidr: {
      value: cdktf.booleanToHclTerraform(struct!.reconcileCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    register_node: {
      value: cdktf.booleanToHclTerraform(struct!.registerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    register_schedulable: {
      value: cdktf.booleanToHclTerraform(struct!.registerSchedulable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry_burst: {
      value: cdktf.numberToHclTerraform(struct!.registryBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registry_pull_qps: {
      value: cdktf.numberToHclTerraform(struct!.registryPullQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_kubeconfig: {
      value: cdktf.booleanToHclTerraform(struct!.requireKubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resolver_config: {
      value: cdktf.stringToHclTerraform(struct!.resolverConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_dir: {
      value: cdktf.stringToHclTerraform(struct!.rootDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotate_certificates: {
      value: cdktf.booleanToHclTerraform(struct!.rotateCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    runtime_cgroups: {
      value: cdktf.stringToHclTerraform(struct!.runtimeCgroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.runtimeRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seccomp_profile_root: {
      value: cdktf.stringToHclTerraform(struct!.seccompProfileRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialize_image_pulls: {
      value: cdktf.booleanToHclTerraform(struct!.serializeImagePulls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.shutdownGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown_grace_period_critical_pods: {
      value: cdktf.stringToHclTerraform(struct!.shutdownGracePeriodCriticalPods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streaming_connection_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.streamingConnectionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_cgroups: {
      value: cdktf.stringToHclTerraform(struct!.systemCgroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    system_reserved_cgroup: {
      value: cdktf.stringToHclTerraform(struct!.systemReservedCgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.taints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_cert_file: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsCipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_min_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsMinVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_private_key_file: {
      value: cdktf.stringToHclTerraform(struct!.tlsPrivateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.topologyManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_plugin_directory: {
      value: cdktf.stringToHclTerraform(struct!.volumePluginDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_stats_agg_period: {
      value: cdktf.stringToHclTerraform(struct!.volumeStatsAggPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anonymous_auth: {
      value: instanceGroupKubeletAnonymousAuthToHclTerraform(struct!.anonymousAuth),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupKubeletAnonymousAuthList",
    },
    cpu_cfs_quota: {
      value: instanceGroupKubeletCpuCfsQuotaToHclTerraform(struct!.cpuCfsQuota),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupKubeletCpuCfsQuotaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupKubeletOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupKubelet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivileged = this._allowPrivileged;
    }
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._apiServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServers = this._apiServers;
    }
    if (this._authenticationTokenWebhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTokenWebhook = this._authenticationTokenWebhook;
    }
    if (this._authenticationTokenWebhookCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTokenWebhookCacheTtl = this._authenticationTokenWebhookCacheTtl;
    }
    if (this._authorizationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationMode = this._authorizationMode;
    }
    if (this._babysitDaemons !== undefined) {
      hasAnyValues = true;
      internalValueResult.babysitDaemons = this._babysitDaemons;
    }
    if (this._bootstrapKubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapKubeconfig = this._bootstrapKubeconfig;
    }
    if (this._cgroupDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupDriver = this._cgroupDriver;
    }
    if (this._cgroupRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupRoot = this._cgroupRoot;
    }
    if (this._clientCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCaFile = this._clientCaFile;
    }
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._configureCbr0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureCbr0 = this._configureCbr0;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._dockerDisableSharedPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerDisableSharedPid = this._dockerDisableSharedPid;
    }
    if (this._enableCadvisorJsonEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCadvisorJsonEndpoints = this._enableCadvisorJsonEndpoints;
    }
    if (this._enableCustomMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCustomMetrics = this._enableCustomMetrics;
    }
    if (this._enableDebuggingHandlers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDebuggingHandlers = this._enableDebuggingHandlers;
    }
    if (this._enforceNodeAllocatable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceNodeAllocatable = this._enforceNodeAllocatable;
    }
    if (this._eventBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBurst = this._eventBurst;
    }
    if (this._eventQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQps = this._eventQps;
    }
    if (this._evictionHard !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionHard = this._evictionHard;
    }
    if (this._evictionMaxPodGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMaxPodGracePeriod = this._evictionMaxPodGracePeriod;
    }
    if (this._evictionMinimumReclaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMinimumReclaim = this._evictionMinimumReclaim;
    }
    if (this._evictionPressureTransitionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionPressureTransitionPeriod = this._evictionPressureTransitionPeriod;
    }
    if (this._evictionSoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoft = this._evictionSoft;
    }
    if (this._evictionSoftGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoftGracePeriod = this._evictionSoftGracePeriod;
    }
    if (this._experimentalAllowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalAllowedUnsafeSysctls = this._experimentalAllowedUnsafeSysctls;
    }
    if (this._failSwapOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSwapOn = this._failSwapOn;
    }
    if (this._featureGates !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates;
    }
    if (this._hairpinMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hairpinMode = this._hairpinMode;
    }
    if (this._hostnameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameOverride = this._hostnameOverride;
    }
    if (this._housekeepingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.housekeepingInterval = this._housekeepingInterval;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._imagePullProgressDeadline !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullProgressDeadline = this._imagePullProgressDeadline;
    }
    if (this._kernelMemcgNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelMemcgNotification = this._kernelMemcgNotification;
    }
    if (this._kubeReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeReserved = this._kubeReserved;
    }
    if (this._kubeReservedCgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeReservedCgroup = this._kubeReservedCgroup;
    }
    if (this._kubeconfigPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfigPath = this._kubeconfigPath;
    }
    if (this._kubeletCgroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletCgroups = this._kubeletCgroups;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._networkPluginMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPluginMtu = this._networkPluginMtu;
    }
    if (this._networkPluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPluginName = this._networkPluginName;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._nodeStatusUpdateFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStatusUpdateFrequency = this._nodeStatusUpdateFrequency;
    }
    if (this._nonMasqueradeCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonMasqueradeCidr = this._nonMasqueradeCidr;
    }
    if (this._nvidiaGpUs !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvidiaGpUs = this._nvidiaGpUs;
    }
    if (this._podCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidr = this._podCidr;
    }
    if (this._podInfraContainerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.podInfraContainerImage = this._podInfraContainerImage;
    }
    if (this._podManifestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.podManifestPath = this._podManifestPath;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    if (this._protectKernelDefaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectKernelDefaults = this._protectKernelDefaults;
    }
    if (this._readOnlyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyPort = this._readOnlyPort;
    }
    if (this._reconcileCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconcileCidr = this._reconcileCidr;
    }
    if (this._registerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerNode = this._registerNode;
    }
    if (this._registerSchedulable !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerSchedulable = this._registerSchedulable;
    }
    if (this._registryBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryBurst = this._registryBurst;
    }
    if (this._registryPullQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryPullQps = this._registryPullQps;
    }
    if (this._requireKubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireKubeconfig = this._requireKubeconfig;
    }
    if (this._resolverConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverConfig = this._resolverConfig;
    }
    if (this._rootDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDir = this._rootDir;
    }
    if (this._rotateCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateCertificates = this._rotateCertificates;
    }
    if (this._runtimeCgroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeCgroups = this._runtimeCgroups;
    }
    if (this._runtimeRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeRequestTimeout = this._runtimeRequestTimeout;
    }
    if (this._seccompProfileRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfileRoot = this._seccompProfileRoot;
    }
    if (this._serializeImagePulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializeImagePulls = this._serializeImagePulls;
    }
    if (this._shutdownGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownGracePeriod = this._shutdownGracePeriod;
    }
    if (this._shutdownGracePeriodCriticalPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownGracePeriodCriticalPods = this._shutdownGracePeriodCriticalPods;
    }
    if (this._streamingConnectionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingConnectionIdleTimeout = this._streamingConnectionIdleTimeout;
    }
    if (this._systemCgroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCgroups = this._systemCgroups;
    }
    if (this._systemReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReserved = this._systemReserved;
    }
    if (this._systemReservedCgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReservedCgroup = this._systemReservedCgroup;
    }
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    if (this._tlsCertFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertFile = this._tlsCertFile;
    }
    if (this._tlsCipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCipherSuites = this._tlsCipherSuites;
    }
    if (this._tlsMinVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMinVersion = this._tlsMinVersion;
    }
    if (this._tlsPrivateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPrivateKeyFile = this._tlsPrivateKeyFile;
    }
    if (this._topologyManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManagerPolicy = this._topologyManagerPolicy;
    }
    if (this._volumePluginDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePluginDirectory = this._volumePluginDirectory;
    }
    if (this._volumeStatsAggPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeStatsAggPeriod = this._volumeStatsAggPeriod;
    }
    if (this._anonymousAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousAuth = this._anonymousAuth?.internalValue;
    }
    if (this._cpuCfsQuota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupKubelet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrivileged = undefined;
      this._allowedUnsafeSysctls = undefined;
      this._apiServers = undefined;
      this._authenticationTokenWebhook = undefined;
      this._authenticationTokenWebhookCacheTtl = undefined;
      this._authorizationMode = undefined;
      this._babysitDaemons = undefined;
      this._bootstrapKubeconfig = undefined;
      this._cgroupDriver = undefined;
      this._cgroupRoot = undefined;
      this._clientCaFile = undefined;
      this._cloudProvider = undefined;
      this._clusterDns = undefined;
      this._clusterDomain = undefined;
      this._configureCbr0 = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._dockerDisableSharedPid = undefined;
      this._enableCadvisorJsonEndpoints = undefined;
      this._enableCustomMetrics = undefined;
      this._enableDebuggingHandlers = undefined;
      this._enforceNodeAllocatable = undefined;
      this._eventBurst = undefined;
      this._eventQps = undefined;
      this._evictionHard = undefined;
      this._evictionMaxPodGracePeriod = undefined;
      this._evictionMinimumReclaim = undefined;
      this._evictionPressureTransitionPeriod = undefined;
      this._evictionSoft = undefined;
      this._evictionSoftGracePeriod = undefined;
      this._experimentalAllowedUnsafeSysctls = undefined;
      this._failSwapOn = undefined;
      this._featureGates = undefined;
      this._hairpinMode = undefined;
      this._hostnameOverride = undefined;
      this._housekeepingInterval = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._imagePullProgressDeadline = undefined;
      this._kernelMemcgNotification = undefined;
      this._kubeReserved = undefined;
      this._kubeReservedCgroup = undefined;
      this._kubeconfigPath = undefined;
      this._kubeletCgroups = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._maxPods = undefined;
      this._networkPluginMtu = undefined;
      this._networkPluginName = undefined;
      this._nodeLabels = undefined;
      this._nodeStatusUpdateFrequency = undefined;
      this._nonMasqueradeCidr = undefined;
      this._nvidiaGpUs = undefined;
      this._podCidr = undefined;
      this._podInfraContainerImage = undefined;
      this._podManifestPath = undefined;
      this._podPidsLimit = undefined;
      this._protectKernelDefaults = undefined;
      this._readOnlyPort = undefined;
      this._reconcileCidr = undefined;
      this._registerNode = undefined;
      this._registerSchedulable = undefined;
      this._registryBurst = undefined;
      this._registryPullQps = undefined;
      this._requireKubeconfig = undefined;
      this._resolverConfig = undefined;
      this._rootDir = undefined;
      this._rotateCertificates = undefined;
      this._runtimeCgroups = undefined;
      this._runtimeRequestTimeout = undefined;
      this._seccompProfileRoot = undefined;
      this._serializeImagePulls = undefined;
      this._shutdownGracePeriod = undefined;
      this._shutdownGracePeriodCriticalPods = undefined;
      this._streamingConnectionIdleTimeout = undefined;
      this._systemCgroups = undefined;
      this._systemReserved = undefined;
      this._systemReservedCgroup = undefined;
      this._taints = undefined;
      this._tlsCertFile = undefined;
      this._tlsCipherSuites = undefined;
      this._tlsMinVersion = undefined;
      this._tlsPrivateKeyFile = undefined;
      this._topologyManagerPolicy = undefined;
      this._volumePluginDirectory = undefined;
      this._volumeStatsAggPeriod = undefined;
      this._anonymousAuth.internalValue = undefined;
      this._cpuCfsQuota.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrivileged = value.allowPrivileged;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._apiServers = value.apiServers;
      this._authenticationTokenWebhook = value.authenticationTokenWebhook;
      this._authenticationTokenWebhookCacheTtl = value.authenticationTokenWebhookCacheTtl;
      this._authorizationMode = value.authorizationMode;
      this._babysitDaemons = value.babysitDaemons;
      this._bootstrapKubeconfig = value.bootstrapKubeconfig;
      this._cgroupDriver = value.cgroupDriver;
      this._cgroupRoot = value.cgroupRoot;
      this._clientCaFile = value.clientCaFile;
      this._cloudProvider = value.cloudProvider;
      this._clusterDns = value.clusterDns;
      this._clusterDomain = value.clusterDomain;
      this._configureCbr0 = value.configureCbr0;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._dockerDisableSharedPid = value.dockerDisableSharedPid;
      this._enableCadvisorJsonEndpoints = value.enableCadvisorJsonEndpoints;
      this._enableCustomMetrics = value.enableCustomMetrics;
      this._enableDebuggingHandlers = value.enableDebuggingHandlers;
      this._enforceNodeAllocatable = value.enforceNodeAllocatable;
      this._eventBurst = value.eventBurst;
      this._eventQps = value.eventQps;
      this._evictionHard = value.evictionHard;
      this._evictionMaxPodGracePeriod = value.evictionMaxPodGracePeriod;
      this._evictionMinimumReclaim = value.evictionMinimumReclaim;
      this._evictionPressureTransitionPeriod = value.evictionPressureTransitionPeriod;
      this._evictionSoft = value.evictionSoft;
      this._evictionSoftGracePeriod = value.evictionSoftGracePeriod;
      this._experimentalAllowedUnsafeSysctls = value.experimentalAllowedUnsafeSysctls;
      this._failSwapOn = value.failSwapOn;
      this._featureGates = value.featureGates;
      this._hairpinMode = value.hairpinMode;
      this._hostnameOverride = value.hostnameOverride;
      this._housekeepingInterval = value.housekeepingInterval;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._imagePullProgressDeadline = value.imagePullProgressDeadline;
      this._kernelMemcgNotification = value.kernelMemcgNotification;
      this._kubeReserved = value.kubeReserved;
      this._kubeReservedCgroup = value.kubeReservedCgroup;
      this._kubeconfigPath = value.kubeconfigPath;
      this._kubeletCgroups = value.kubeletCgroups;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._maxPods = value.maxPods;
      this._networkPluginMtu = value.networkPluginMtu;
      this._networkPluginName = value.networkPluginName;
      this._nodeLabels = value.nodeLabels;
      this._nodeStatusUpdateFrequency = value.nodeStatusUpdateFrequency;
      this._nonMasqueradeCidr = value.nonMasqueradeCidr;
      this._nvidiaGpUs = value.nvidiaGpUs;
      this._podCidr = value.podCidr;
      this._podInfraContainerImage = value.podInfraContainerImage;
      this._podManifestPath = value.podManifestPath;
      this._podPidsLimit = value.podPidsLimit;
      this._protectKernelDefaults = value.protectKernelDefaults;
      this._readOnlyPort = value.readOnlyPort;
      this._reconcileCidr = value.reconcileCidr;
      this._registerNode = value.registerNode;
      this._registerSchedulable = value.registerSchedulable;
      this._registryBurst = value.registryBurst;
      this._registryPullQps = value.registryPullQps;
      this._requireKubeconfig = value.requireKubeconfig;
      this._resolverConfig = value.resolverConfig;
      this._rootDir = value.rootDir;
      this._rotateCertificates = value.rotateCertificates;
      this._runtimeCgroups = value.runtimeCgroups;
      this._runtimeRequestTimeout = value.runtimeRequestTimeout;
      this._seccompProfileRoot = value.seccompProfileRoot;
      this._serializeImagePulls = value.serializeImagePulls;
      this._shutdownGracePeriod = value.shutdownGracePeriod;
      this._shutdownGracePeriodCriticalPods = value.shutdownGracePeriodCriticalPods;
      this._streamingConnectionIdleTimeout = value.streamingConnectionIdleTimeout;
      this._systemCgroups = value.systemCgroups;
      this._systemReserved = value.systemReserved;
      this._systemReservedCgroup = value.systemReservedCgroup;
      this._taints = value.taints;
      this._tlsCertFile = value.tlsCertFile;
      this._tlsCipherSuites = value.tlsCipherSuites;
      this._tlsMinVersion = value.tlsMinVersion;
      this._tlsPrivateKeyFile = value.tlsPrivateKeyFile;
      this._topologyManagerPolicy = value.topologyManagerPolicy;
      this._volumePluginDirectory = value.volumePluginDirectory;
      this._volumeStatsAggPeriod = value.volumeStatsAggPeriod;
      this._anonymousAuth.internalValue = value.anonymousAuth;
      this._cpuCfsQuota.internalValue = value.cpuCfsQuota;
    }
  }

  // allow_privileged - computed: false, optional: true, required: false
  private _allowPrivileged?: boolean | cdktf.IResolvable; 
  public get allowPrivileged() {
    return this.getBooleanAttribute('allow_privileged');
  }
  public set allowPrivileged(value: boolean | cdktf.IResolvable) {
    this._allowPrivileged = value;
  }
  public resetAllowPrivileged() {
    this._allowPrivileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegedInput() {
    return this._allowPrivileged;
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // api_servers - computed: false, optional: true, required: false
  private _apiServers?: string; 
  public get apiServers() {
    return this.getStringAttribute('api_servers');
  }
  public set apiServers(value: string) {
    this._apiServers = value;
  }
  public resetApiServers() {
    this._apiServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServersInput() {
    return this._apiServers;
  }

  // authentication_token_webhook - computed: false, optional: true, required: false
  private _authenticationTokenWebhook?: boolean | cdktf.IResolvable; 
  public get authenticationTokenWebhook() {
    return this.getBooleanAttribute('authentication_token_webhook');
  }
  public set authenticationTokenWebhook(value: boolean | cdktf.IResolvable) {
    this._authenticationTokenWebhook = value;
  }
  public resetAuthenticationTokenWebhook() {
    this._authenticationTokenWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenWebhookInput() {
    return this._authenticationTokenWebhook;
  }

  // authentication_token_webhook_cache_ttl - computed: false, optional: true, required: false
  private _authenticationTokenWebhookCacheTtl?: string; 
  public get authenticationTokenWebhookCacheTtl() {
    return this.getStringAttribute('authentication_token_webhook_cache_ttl');
  }
  public set authenticationTokenWebhookCacheTtl(value: string) {
    this._authenticationTokenWebhookCacheTtl = value;
  }
  public resetAuthenticationTokenWebhookCacheTtl() {
    this._authenticationTokenWebhookCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenWebhookCacheTtlInput() {
    return this._authenticationTokenWebhookCacheTtl;
  }

  // authorization_mode - computed: false, optional: true, required: false
  private _authorizationMode?: string; 
  public get authorizationMode() {
    return this.getStringAttribute('authorization_mode');
  }
  public set authorizationMode(value: string) {
    this._authorizationMode = value;
  }
  public resetAuthorizationMode() {
    this._authorizationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationModeInput() {
    return this._authorizationMode;
  }

  // babysit_daemons - computed: false, optional: true, required: false
  private _babysitDaemons?: boolean | cdktf.IResolvable; 
  public get babysitDaemons() {
    return this.getBooleanAttribute('babysit_daemons');
  }
  public set babysitDaemons(value: boolean | cdktf.IResolvable) {
    this._babysitDaemons = value;
  }
  public resetBabysitDaemons() {
    this._babysitDaemons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get babysitDaemonsInput() {
    return this._babysitDaemons;
  }

  // bootstrap_kubeconfig - computed: false, optional: true, required: false
  private _bootstrapKubeconfig?: string; 
  public get bootstrapKubeconfig() {
    return this.getStringAttribute('bootstrap_kubeconfig');
  }
  public set bootstrapKubeconfig(value: string) {
    this._bootstrapKubeconfig = value;
  }
  public resetBootstrapKubeconfig() {
    this._bootstrapKubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapKubeconfigInput() {
    return this._bootstrapKubeconfig;
  }

  // cgroup_driver - computed: false, optional: true, required: false
  private _cgroupDriver?: string; 
  public get cgroupDriver() {
    return this.getStringAttribute('cgroup_driver');
  }
  public set cgroupDriver(value: string) {
    this._cgroupDriver = value;
  }
  public resetCgroupDriver() {
    this._cgroupDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupDriverInput() {
    return this._cgroupDriver;
  }

  // cgroup_root - computed: false, optional: true, required: false
  private _cgroupRoot?: string; 
  public get cgroupRoot() {
    return this.getStringAttribute('cgroup_root');
  }
  public set cgroupRoot(value: string) {
    this._cgroupRoot = value;
  }
  public resetCgroupRoot() {
    this._cgroupRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupRootInput() {
    return this._cgroupRoot;
  }

  // client_ca_file - computed: false, optional: true, required: false
  private _clientCaFile?: string; 
  public get clientCaFile() {
    return this.getStringAttribute('client_ca_file');
  }
  public set clientCaFile(value: string) {
    this._clientCaFile = value;
  }
  public resetClientCaFile() {
    this._clientCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaFileInput() {
    return this._clientCaFile;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string; 
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }
  public set clusterDns(value: string) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cluster_domain - computed: false, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // configure_cbr0 - computed: false, optional: true, required: false
  private _configureCbr0?: boolean | cdktf.IResolvable; 
  public get configureCbr0() {
    return this.getBooleanAttribute('configure_cbr0');
  }
  public set configureCbr0(value: boolean | cdktf.IResolvable) {
    this._configureCbr0 = value;
  }
  public resetConfigureCbr0() {
    this._configureCbr0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureCbr0Input() {
    return this._configureCbr0;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: string; 
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: string) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // docker_disable_shared_pid - computed: false, optional: true, required: false
  private _dockerDisableSharedPid?: boolean | cdktf.IResolvable; 
  public get dockerDisableSharedPid() {
    return this.getBooleanAttribute('docker_disable_shared_pid');
  }
  public set dockerDisableSharedPid(value: boolean | cdktf.IResolvable) {
    this._dockerDisableSharedPid = value;
  }
  public resetDockerDisableSharedPid() {
    this._dockerDisableSharedPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerDisableSharedPidInput() {
    return this._dockerDisableSharedPid;
  }

  // enable_cadvisor_json_endpoints - computed: false, optional: true, required: false
  private _enableCadvisorJsonEndpoints?: boolean | cdktf.IResolvable; 
  public get enableCadvisorJsonEndpoints() {
    return this.getBooleanAttribute('enable_cadvisor_json_endpoints');
  }
  public set enableCadvisorJsonEndpoints(value: boolean | cdktf.IResolvable) {
    this._enableCadvisorJsonEndpoints = value;
  }
  public resetEnableCadvisorJsonEndpoints() {
    this._enableCadvisorJsonEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCadvisorJsonEndpointsInput() {
    return this._enableCadvisorJsonEndpoints;
  }

  // enable_custom_metrics - computed: false, optional: true, required: false
  private _enableCustomMetrics?: boolean | cdktf.IResolvable; 
  public get enableCustomMetrics() {
    return this.getBooleanAttribute('enable_custom_metrics');
  }
  public set enableCustomMetrics(value: boolean | cdktf.IResolvable) {
    this._enableCustomMetrics = value;
  }
  public resetEnableCustomMetrics() {
    this._enableCustomMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomMetricsInput() {
    return this._enableCustomMetrics;
  }

  // enable_debugging_handlers - computed: false, optional: true, required: false
  private _enableDebuggingHandlers?: boolean | cdktf.IResolvable; 
  public get enableDebuggingHandlers() {
    return this.getBooleanAttribute('enable_debugging_handlers');
  }
  public set enableDebuggingHandlers(value: boolean | cdktf.IResolvable) {
    this._enableDebuggingHandlers = value;
  }
  public resetEnableDebuggingHandlers() {
    this._enableDebuggingHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDebuggingHandlersInput() {
    return this._enableDebuggingHandlers;
  }

  // enforce_node_allocatable - computed: false, optional: true, required: false
  private _enforceNodeAllocatable?: string; 
  public get enforceNodeAllocatable() {
    return this.getStringAttribute('enforce_node_allocatable');
  }
  public set enforceNodeAllocatable(value: string) {
    this._enforceNodeAllocatable = value;
  }
  public resetEnforceNodeAllocatable() {
    this._enforceNodeAllocatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceNodeAllocatableInput() {
    return this._enforceNodeAllocatable;
  }

  // event_burst - computed: false, optional: true, required: false
  private _eventBurst?: number; 
  public get eventBurst() {
    return this.getNumberAttribute('event_burst');
  }
  public set eventBurst(value: number) {
    this._eventBurst = value;
  }
  public resetEventBurst() {
    this._eventBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBurstInput() {
    return this._eventBurst;
  }

  // event_qps - computed: false, optional: true, required: false
  private _eventQps?: number; 
  public get eventQps() {
    return this.getNumberAttribute('event_qps');
  }
  public set eventQps(value: number) {
    this._eventQps = value;
  }
  public resetEventQps() {
    this._eventQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQpsInput() {
    return this._eventQps;
  }

  // eviction_hard - computed: false, optional: true, required: false
  private _evictionHard?: string; 
  public get evictionHard() {
    return this.getStringAttribute('eviction_hard');
  }
  public set evictionHard(value: string) {
    this._evictionHard = value;
  }
  public resetEvictionHard() {
    this._evictionHard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionHardInput() {
    return this._evictionHard;
  }

  // eviction_max_pod_grace_period - computed: false, optional: true, required: false
  private _evictionMaxPodGracePeriod?: number; 
  public get evictionMaxPodGracePeriod() {
    return this.getNumberAttribute('eviction_max_pod_grace_period');
  }
  public set evictionMaxPodGracePeriod(value: number) {
    this._evictionMaxPodGracePeriod = value;
  }
  public resetEvictionMaxPodGracePeriod() {
    this._evictionMaxPodGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMaxPodGracePeriodInput() {
    return this._evictionMaxPodGracePeriod;
  }

  // eviction_minimum_reclaim - computed: false, optional: true, required: false
  private _evictionMinimumReclaim?: string; 
  public get evictionMinimumReclaim() {
    return this.getStringAttribute('eviction_minimum_reclaim');
  }
  public set evictionMinimumReclaim(value: string) {
    this._evictionMinimumReclaim = value;
  }
  public resetEvictionMinimumReclaim() {
    this._evictionMinimumReclaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMinimumReclaimInput() {
    return this._evictionMinimumReclaim;
  }

  // eviction_pressure_transition_period - computed: false, optional: true, required: false
  private _evictionPressureTransitionPeriod?: string; 
  public get evictionPressureTransitionPeriod() {
    return this.getStringAttribute('eviction_pressure_transition_period');
  }
  public set evictionPressureTransitionPeriod(value: string) {
    this._evictionPressureTransitionPeriod = value;
  }
  public resetEvictionPressureTransitionPeriod() {
    this._evictionPressureTransitionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPressureTransitionPeriodInput() {
    return this._evictionPressureTransitionPeriod;
  }

  // eviction_soft - computed: false, optional: true, required: false
  private _evictionSoft?: string; 
  public get evictionSoft() {
    return this.getStringAttribute('eviction_soft');
  }
  public set evictionSoft(value: string) {
    this._evictionSoft = value;
  }
  public resetEvictionSoft() {
    this._evictionSoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftInput() {
    return this._evictionSoft;
  }

  // eviction_soft_grace_period - computed: false, optional: true, required: false
  private _evictionSoftGracePeriod?: string; 
  public get evictionSoftGracePeriod() {
    return this.getStringAttribute('eviction_soft_grace_period');
  }
  public set evictionSoftGracePeriod(value: string) {
    this._evictionSoftGracePeriod = value;
  }
  public resetEvictionSoftGracePeriod() {
    this._evictionSoftGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftGracePeriodInput() {
    return this._evictionSoftGracePeriod;
  }

  // experimental_allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _experimentalAllowedUnsafeSysctls?: string[]; 
  public get experimentalAllowedUnsafeSysctls() {
    return this.getListAttribute('experimental_allowed_unsafe_sysctls');
  }
  public set experimentalAllowedUnsafeSysctls(value: string[]) {
    this._experimentalAllowedUnsafeSysctls = value;
  }
  public resetExperimentalAllowedUnsafeSysctls() {
    this._experimentalAllowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalAllowedUnsafeSysctlsInput() {
    return this._experimentalAllowedUnsafeSysctls;
  }

  // fail_swap_on - computed: false, optional: true, required: false
  private _failSwapOn?: boolean | cdktf.IResolvable; 
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }
  public set failSwapOn(value: boolean | cdktf.IResolvable) {
    this._failSwapOn = value;
  }
  public resetFailSwapOn() {
    this._failSwapOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSwapOnInput() {
    return this._failSwapOn;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: { [key: string]: string }; 
  public get featureGates() {
    return this.getStringMapAttribute('feature_gates');
  }
  public set featureGates(value: { [key: string]: string }) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
  }

  // hairpin_mode - computed: false, optional: true, required: false
  private _hairpinMode?: string; 
  public get hairpinMode() {
    return this.getStringAttribute('hairpin_mode');
  }
  public set hairpinMode(value: string) {
    this._hairpinMode = value;
  }
  public resetHairpinMode() {
    this._hairpinMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hairpinModeInput() {
    return this._hairpinMode;
  }

  // hostname_override - computed: false, optional: true, required: false
  private _hostnameOverride?: string; 
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }
  public set hostnameOverride(value: string) {
    this._hostnameOverride = value;
  }
  public resetHostnameOverride() {
    this._hostnameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameOverrideInput() {
    return this._hostnameOverride;
  }

  // housekeeping_interval - computed: false, optional: true, required: false
  private _housekeepingInterval?: string; 
  public get housekeepingInterval() {
    return this.getStringAttribute('housekeeping_interval');
  }
  public set housekeepingInterval(value: string) {
    this._housekeepingInterval = value;
  }
  public resetHousekeepingInterval() {
    this._housekeepingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get housekeepingIntervalInput() {
    return this._housekeepingInterval;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // image_pull_progress_deadline - computed: false, optional: true, required: false
  private _imagePullProgressDeadline?: string; 
  public get imagePullProgressDeadline() {
    return this.getStringAttribute('image_pull_progress_deadline');
  }
  public set imagePullProgressDeadline(value: string) {
    this._imagePullProgressDeadline = value;
  }
  public resetImagePullProgressDeadline() {
    this._imagePullProgressDeadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullProgressDeadlineInput() {
    return this._imagePullProgressDeadline;
  }

  // kernel_memcg_notification - computed: false, optional: true, required: false
  private _kernelMemcgNotification?: boolean | cdktf.IResolvable; 
  public get kernelMemcgNotification() {
    return this.getBooleanAttribute('kernel_memcg_notification');
  }
  public set kernelMemcgNotification(value: boolean | cdktf.IResolvable) {
    this._kernelMemcgNotification = value;
  }
  public resetKernelMemcgNotification() {
    this._kernelMemcgNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelMemcgNotificationInput() {
    return this._kernelMemcgNotification;
  }

  // kube_reserved - computed: false, optional: true, required: false
  private _kubeReserved?: { [key: string]: string }; 
  public get kubeReserved() {
    return this.getStringMapAttribute('kube_reserved');
  }
  public set kubeReserved(value: { [key: string]: string }) {
    this._kubeReserved = value;
  }
  public resetKubeReserved() {
    this._kubeReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeReservedInput() {
    return this._kubeReserved;
  }

  // kube_reserved_cgroup - computed: false, optional: true, required: false
  private _kubeReservedCgroup?: string; 
  public get kubeReservedCgroup() {
    return this.getStringAttribute('kube_reserved_cgroup');
  }
  public set kubeReservedCgroup(value: string) {
    this._kubeReservedCgroup = value;
  }
  public resetKubeReservedCgroup() {
    this._kubeReservedCgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeReservedCgroupInput() {
    return this._kubeReservedCgroup;
  }

  // kubeconfig_path - computed: false, optional: true, required: false
  private _kubeconfigPath?: string; 
  public get kubeconfigPath() {
    return this.getStringAttribute('kubeconfig_path');
  }
  public set kubeconfigPath(value: string) {
    this._kubeconfigPath = value;
  }
  public resetKubeconfigPath() {
    this._kubeconfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigPathInput() {
    return this._kubeconfigPath;
  }

  // kubelet_cgroups - computed: false, optional: true, required: false
  private _kubeletCgroups?: string; 
  public get kubeletCgroups() {
    return this.getStringAttribute('kubelet_cgroups');
  }
  public set kubeletCgroups(value: string) {
    this._kubeletCgroups = value;
  }
  public resetKubeletCgroups() {
    this._kubeletCgroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletCgroupsInput() {
    return this._kubeletCgroups;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: number; 
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }
  public set logLevel(value: number) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // network_plugin_mtu - computed: false, optional: true, required: false
  private _networkPluginMtu?: number; 
  public get networkPluginMtu() {
    return this.getNumberAttribute('network_plugin_mtu');
  }
  public set networkPluginMtu(value: number) {
    this._networkPluginMtu = value;
  }
  public resetNetworkPluginMtu() {
    this._networkPluginMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginMtuInput() {
    return this._networkPluginMtu;
  }

  // network_plugin_name - computed: false, optional: true, required: false
  private _networkPluginName?: string; 
  public get networkPluginName() {
    return this.getStringAttribute('network_plugin_name');
  }
  public set networkPluginName(value: string) {
    this._networkPluginName = value;
  }
  public resetNetworkPluginName() {
    this._networkPluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginNameInput() {
    return this._networkPluginName;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_status_update_frequency - computed: false, optional: true, required: false
  private _nodeStatusUpdateFrequency?: string; 
  public get nodeStatusUpdateFrequency() {
    return this.getStringAttribute('node_status_update_frequency');
  }
  public set nodeStatusUpdateFrequency(value: string) {
    this._nodeStatusUpdateFrequency = value;
  }
  public resetNodeStatusUpdateFrequency() {
    this._nodeStatusUpdateFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStatusUpdateFrequencyInput() {
    return this._nodeStatusUpdateFrequency;
  }

  // non_masquerade_cidr - computed: false, optional: true, required: false
  private _nonMasqueradeCidr?: string; 
  public get nonMasqueradeCidr() {
    return this.getStringAttribute('non_masquerade_cidr');
  }
  public set nonMasqueradeCidr(value: string) {
    this._nonMasqueradeCidr = value;
  }
  public resetNonMasqueradeCidr() {
    this._nonMasqueradeCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonMasqueradeCidrInput() {
    return this._nonMasqueradeCidr;
  }

  // nvidia_gp_us - computed: false, optional: true, required: false
  private _nvidiaGpUs?: number; 
  public get nvidiaGpUs() {
    return this.getNumberAttribute('nvidia_gp_us');
  }
  public set nvidiaGpUs(value: number) {
    this._nvidiaGpUs = value;
  }
  public resetNvidiaGpUs() {
    this._nvidiaGpUs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvidiaGpUsInput() {
    return this._nvidiaGpUs;
  }

  // pod_cidr - computed: false, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // pod_infra_container_image - computed: false, optional: true, required: false
  private _podInfraContainerImage?: string; 
  public get podInfraContainerImage() {
    return this.getStringAttribute('pod_infra_container_image');
  }
  public set podInfraContainerImage(value: string) {
    this._podInfraContainerImage = value;
  }
  public resetPodInfraContainerImage() {
    this._podInfraContainerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInfraContainerImageInput() {
    return this._podInfraContainerImage;
  }

  // pod_manifest_path - computed: false, optional: true, required: false
  private _podManifestPath?: string; 
  public get podManifestPath() {
    return this.getStringAttribute('pod_manifest_path');
  }
  public set podManifestPath(value: string) {
    this._podManifestPath = value;
  }
  public resetPodManifestPath() {
    this._podManifestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podManifestPathInput() {
    return this._podManifestPath;
  }

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }

  // protect_kernel_defaults - computed: false, optional: true, required: false
  private _protectKernelDefaults?: boolean | cdktf.IResolvable; 
  public get protectKernelDefaults() {
    return this.getBooleanAttribute('protect_kernel_defaults');
  }
  public set protectKernelDefaults(value: boolean | cdktf.IResolvable) {
    this._protectKernelDefaults = value;
  }
  public resetProtectKernelDefaults() {
    this._protectKernelDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectKernelDefaultsInput() {
    return this._protectKernelDefaults;
  }

  // read_only_port - computed: false, optional: true, required: false
  private _readOnlyPort?: number; 
  public get readOnlyPort() {
    return this.getNumberAttribute('read_only_port');
  }
  public set readOnlyPort(value: number) {
    this._readOnlyPort = value;
  }
  public resetReadOnlyPort() {
    this._readOnlyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyPortInput() {
    return this._readOnlyPort;
  }

  // reconcile_cidr - computed: false, optional: true, required: false
  private _reconcileCidr?: boolean | cdktf.IResolvable; 
  public get reconcileCidr() {
    return this.getBooleanAttribute('reconcile_cidr');
  }
  public set reconcileCidr(value: boolean | cdktf.IResolvable) {
    this._reconcileCidr = value;
  }
  public resetReconcileCidr() {
    this._reconcileCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcileCidrInput() {
    return this._reconcileCidr;
  }

  // register_node - computed: false, optional: true, required: false
  private _registerNode?: boolean | cdktf.IResolvable; 
  public get registerNode() {
    return this.getBooleanAttribute('register_node');
  }
  public set registerNode(value: boolean | cdktf.IResolvable) {
    this._registerNode = value;
  }
  public resetRegisterNode() {
    this._registerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerNodeInput() {
    return this._registerNode;
  }

  // register_schedulable - computed: false, optional: true, required: false
  private _registerSchedulable?: boolean | cdktf.IResolvable; 
  public get registerSchedulable() {
    return this.getBooleanAttribute('register_schedulable');
  }
  public set registerSchedulable(value: boolean | cdktf.IResolvable) {
    this._registerSchedulable = value;
  }
  public resetRegisterSchedulable() {
    this._registerSchedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSchedulableInput() {
    return this._registerSchedulable;
  }

  // registry_burst - computed: false, optional: true, required: false
  private _registryBurst?: number; 
  public get registryBurst() {
    return this.getNumberAttribute('registry_burst');
  }
  public set registryBurst(value: number) {
    this._registryBurst = value;
  }
  public resetRegistryBurst() {
    this._registryBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryBurstInput() {
    return this._registryBurst;
  }

  // registry_pull_qps - computed: false, optional: true, required: false
  private _registryPullQps?: number; 
  public get registryPullQps() {
    return this.getNumberAttribute('registry_pull_qps');
  }
  public set registryPullQps(value: number) {
    this._registryPullQps = value;
  }
  public resetRegistryPullQps() {
    this._registryPullQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryPullQpsInput() {
    return this._registryPullQps;
  }

  // require_kubeconfig - computed: false, optional: true, required: false
  private _requireKubeconfig?: boolean | cdktf.IResolvable; 
  public get requireKubeconfig() {
    return this.getBooleanAttribute('require_kubeconfig');
  }
  public set requireKubeconfig(value: boolean | cdktf.IResolvable) {
    this._requireKubeconfig = value;
  }
  public resetRequireKubeconfig() {
    this._requireKubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireKubeconfigInput() {
    return this._requireKubeconfig;
  }

  // resolver_config - computed: false, optional: true, required: false
  private _resolverConfig?: string; 
  public get resolverConfig() {
    return this.getStringAttribute('resolver_config');
  }
  public set resolverConfig(value: string) {
    this._resolverConfig = value;
  }
  public resetResolverConfig() {
    this._resolverConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverConfigInput() {
    return this._resolverConfig;
  }

  // root_dir - computed: false, optional: true, required: false
  private _rootDir?: string; 
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }
  public set rootDir(value: string) {
    this._rootDir = value;
  }
  public resetRootDir() {
    this._rootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirInput() {
    return this._rootDir;
  }

  // rotate_certificates - computed: false, optional: true, required: false
  private _rotateCertificates?: boolean | cdktf.IResolvable; 
  public get rotateCertificates() {
    return this.getBooleanAttribute('rotate_certificates');
  }
  public set rotateCertificates(value: boolean | cdktf.IResolvable) {
    this._rotateCertificates = value;
  }
  public resetRotateCertificates() {
    this._rotateCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateCertificatesInput() {
    return this._rotateCertificates;
  }

  // runtime_cgroups - computed: false, optional: true, required: false
  private _runtimeCgroups?: string; 
  public get runtimeCgroups() {
    return this.getStringAttribute('runtime_cgroups');
  }
  public set runtimeCgroups(value: string) {
    this._runtimeCgroups = value;
  }
  public resetRuntimeCgroups() {
    this._runtimeCgroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeCgroupsInput() {
    return this._runtimeCgroups;
  }

  // runtime_request_timeout - computed: false, optional: true, required: false
  private _runtimeRequestTimeout?: string; 
  public get runtimeRequestTimeout() {
    return this.getStringAttribute('runtime_request_timeout');
  }
  public set runtimeRequestTimeout(value: string) {
    this._runtimeRequestTimeout = value;
  }
  public resetRuntimeRequestTimeout() {
    this._runtimeRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeRequestTimeoutInput() {
    return this._runtimeRequestTimeout;
  }

  // seccomp_profile_root - computed: false, optional: true, required: false
  private _seccompProfileRoot?: string; 
  public get seccompProfileRoot() {
    return this.getStringAttribute('seccomp_profile_root');
  }
  public set seccompProfileRoot(value: string) {
    this._seccompProfileRoot = value;
  }
  public resetSeccompProfileRoot() {
    this._seccompProfileRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileRootInput() {
    return this._seccompProfileRoot;
  }

  // serialize_image_pulls - computed: false, optional: true, required: false
  private _serializeImagePulls?: boolean | cdktf.IResolvable; 
  public get serializeImagePulls() {
    return this.getBooleanAttribute('serialize_image_pulls');
  }
  public set serializeImagePulls(value: boolean | cdktf.IResolvable) {
    this._serializeImagePulls = value;
  }
  public resetSerializeImagePulls() {
    this._serializeImagePulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializeImagePullsInput() {
    return this._serializeImagePulls;
  }

  // shutdown_grace_period - computed: false, optional: true, required: false
  private _shutdownGracePeriod?: string; 
  public get shutdownGracePeriod() {
    return this.getStringAttribute('shutdown_grace_period');
  }
  public set shutdownGracePeriod(value: string) {
    this._shutdownGracePeriod = value;
  }
  public resetShutdownGracePeriod() {
    this._shutdownGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownGracePeriodInput() {
    return this._shutdownGracePeriod;
  }

  // shutdown_grace_period_critical_pods - computed: false, optional: true, required: false
  private _shutdownGracePeriodCriticalPods?: string; 
  public get shutdownGracePeriodCriticalPods() {
    return this.getStringAttribute('shutdown_grace_period_critical_pods');
  }
  public set shutdownGracePeriodCriticalPods(value: string) {
    this._shutdownGracePeriodCriticalPods = value;
  }
  public resetShutdownGracePeriodCriticalPods() {
    this._shutdownGracePeriodCriticalPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownGracePeriodCriticalPodsInput() {
    return this._shutdownGracePeriodCriticalPods;
  }

  // streaming_connection_idle_timeout - computed: false, optional: true, required: false
  private _streamingConnectionIdleTimeout?: string; 
  public get streamingConnectionIdleTimeout() {
    return this.getStringAttribute('streaming_connection_idle_timeout');
  }
  public set streamingConnectionIdleTimeout(value: string) {
    this._streamingConnectionIdleTimeout = value;
  }
  public resetStreamingConnectionIdleTimeout() {
    this._streamingConnectionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingConnectionIdleTimeoutInput() {
    return this._streamingConnectionIdleTimeout;
  }

  // system_cgroups - computed: false, optional: true, required: false
  private _systemCgroups?: string; 
  public get systemCgroups() {
    return this.getStringAttribute('system_cgroups');
  }
  public set systemCgroups(value: string) {
    this._systemCgroups = value;
  }
  public resetSystemCgroups() {
    this._systemCgroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCgroupsInput() {
    return this._systemCgroups;
  }

  // system_reserved - computed: false, optional: true, required: false
  private _systemReserved?: { [key: string]: string }; 
  public get systemReserved() {
    return this.getStringMapAttribute('system_reserved');
  }
  public set systemReserved(value: { [key: string]: string }) {
    this._systemReserved = value;
  }
  public resetSystemReserved() {
    this._systemReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReservedInput() {
    return this._systemReserved;
  }

  // system_reserved_cgroup - computed: false, optional: true, required: false
  private _systemReservedCgroup?: string; 
  public get systemReservedCgroup() {
    return this.getStringAttribute('system_reserved_cgroup');
  }
  public set systemReservedCgroup(value: string) {
    this._systemReservedCgroup = value;
  }
  public resetSystemReservedCgroup() {
    this._systemReservedCgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReservedCgroupInput() {
    return this._systemReservedCgroup;
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: string[]; 
  public get taints() {
    return this.getListAttribute('taints');
  }
  public set taints(value: string[]) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // tls_cert_file - computed: false, optional: true, required: false
  private _tlsCertFile?: string; 
  public get tlsCertFile() {
    return this.getStringAttribute('tls_cert_file');
  }
  public set tlsCertFile(value: string) {
    this._tlsCertFile = value;
  }
  public resetTlsCertFile() {
    this._tlsCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertFileInput() {
    return this._tlsCertFile;
  }

  // tls_cipher_suites - computed: false, optional: true, required: false
  private _tlsCipherSuites?: string[]; 
  public get tlsCipherSuites() {
    return this.getListAttribute('tls_cipher_suites');
  }
  public set tlsCipherSuites(value: string[]) {
    this._tlsCipherSuites = value;
  }
  public resetTlsCipherSuites() {
    this._tlsCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherSuitesInput() {
    return this._tlsCipherSuites;
  }

  // tls_min_version - computed: false, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // tls_private_key_file - computed: false, optional: true, required: false
  private _tlsPrivateKeyFile?: string; 
  public get tlsPrivateKeyFile() {
    return this.getStringAttribute('tls_private_key_file');
  }
  public set tlsPrivateKeyFile(value: string) {
    this._tlsPrivateKeyFile = value;
  }
  public resetTlsPrivateKeyFile() {
    this._tlsPrivateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPrivateKeyFileInput() {
    return this._tlsPrivateKeyFile;
  }

  // topology_manager_policy - computed: false, optional: true, required: false
  private _topologyManagerPolicy?: string; 
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }
  public set topologyManagerPolicy(value: string) {
    this._topologyManagerPolicy = value;
  }
  public resetTopologyManagerPolicy() {
    this._topologyManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerPolicyInput() {
    return this._topologyManagerPolicy;
  }

  // volume_plugin_directory - computed: false, optional: true, required: false
  private _volumePluginDirectory?: string; 
  public get volumePluginDirectory() {
    return this.getStringAttribute('volume_plugin_directory');
  }
  public set volumePluginDirectory(value: string) {
    this._volumePluginDirectory = value;
  }
  public resetVolumePluginDirectory() {
    this._volumePluginDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePluginDirectoryInput() {
    return this._volumePluginDirectory;
  }

  // volume_stats_agg_period - computed: false, optional: true, required: false
  private _volumeStatsAggPeriod?: string; 
  public get volumeStatsAggPeriod() {
    return this.getStringAttribute('volume_stats_agg_period');
  }
  public set volumeStatsAggPeriod(value: string) {
    this._volumeStatsAggPeriod = value;
  }
  public resetVolumeStatsAggPeriod() {
    this._volumeStatsAggPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeStatsAggPeriodInput() {
    return this._volumeStatsAggPeriod;
  }

  // anonymous_auth - computed: false, optional: true, required: false
  private _anonymousAuth = new InstanceGroupKubeletAnonymousAuthOutputReference(this, "anonymous_auth");
  public get anonymousAuth() {
    return this._anonymousAuth;
  }
  public putAnonymousAuth(value: InstanceGroupKubeletAnonymousAuth) {
    this._anonymousAuth.internalValue = value;
  }
  public resetAnonymousAuth() {
    this._anonymousAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousAuthInput() {
    return this._anonymousAuth.internalValue;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota = new InstanceGroupKubeletCpuCfsQuotaOutputReference(this, "cpu_cfs_quota");
  public get cpuCfsQuota() {
    return this._cpuCfsQuota;
  }
  public putCpuCfsQuota(value: InstanceGroupKubeletCpuCfsQuota) {
    this._cpuCfsQuota.internalValue = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota.internalValue;
  }
}
export interface InstanceGroupMixedInstancesPolicyInstanceRequirementsCpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max InstanceGroup#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#min InstanceGroup#min}
  */
  readonly min?: string;
}

export function instanceGroupMixedInstancesPolicyInstanceRequirementsCpuToTerraform(struct?: InstanceGroupMixedInstancesPolicyInstanceRequirementsCpuOutputReference | InstanceGroupMixedInstancesPolicyInstanceRequirementsCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function instanceGroupMixedInstancesPolicyInstanceRequirementsCpuToHclTerraform(struct?: InstanceGroupMixedInstancesPolicyInstanceRequirementsCpuOutputReference | InstanceGroupMixedInstancesPolicyInstanceRequirementsCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupMixedInstancesPolicyInstanceRequirementsCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupMixedInstancesPolicyInstanceRequirementsCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupMixedInstancesPolicyInstanceRequirementsCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface InstanceGroupMixedInstancesPolicyInstanceRequirementsMemory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max InstanceGroup#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#min InstanceGroup#min}
  */
  readonly min?: string;
}

export function instanceGroupMixedInstancesPolicyInstanceRequirementsMemoryToTerraform(struct?: InstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryOutputReference | InstanceGroupMixedInstancesPolicyInstanceRequirementsMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function instanceGroupMixedInstancesPolicyInstanceRequirementsMemoryToHclTerraform(struct?: InstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryOutputReference | InstanceGroupMixedInstancesPolicyInstanceRequirementsMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupMixedInstancesPolicyInstanceRequirementsMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupMixedInstancesPolicyInstanceRequirementsMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface InstanceGroupMixedInstancesPolicyInstanceRequirements {
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#cpu InstanceGroup#cpu}
  */
  readonly cpu?: InstanceGroupMixedInstancesPolicyInstanceRequirementsCpu;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#memory InstanceGroup#memory}
  */
  readonly memory?: InstanceGroupMixedInstancesPolicyInstanceRequirementsMemory;
}

export function instanceGroupMixedInstancesPolicyInstanceRequirementsToTerraform(struct?: InstanceGroupMixedInstancesPolicyInstanceRequirementsOutputReference | InstanceGroupMixedInstancesPolicyInstanceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: instanceGroupMixedInstancesPolicyInstanceRequirementsCpuToTerraform(struct!.cpu),
    memory: instanceGroupMixedInstancesPolicyInstanceRequirementsMemoryToTerraform(struct!.memory),
  }
}


export function instanceGroupMixedInstancesPolicyInstanceRequirementsToHclTerraform(struct?: InstanceGroupMixedInstancesPolicyInstanceRequirementsOutputReference | InstanceGroupMixedInstancesPolicyInstanceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: instanceGroupMixedInstancesPolicyInstanceRequirementsCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupMixedInstancesPolicyInstanceRequirementsCpuList",
    },
    memory: {
      value: instanceGroupMixedInstancesPolicyInstanceRequirementsMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupMixedInstancesPolicyInstanceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupMixedInstancesPolicyInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupMixedInstancesPolicyInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new InstanceGroupMixedInstancesPolicyInstanceRequirementsCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: InstanceGroupMixedInstancesPolicyInstanceRequirementsCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new InstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: InstanceGroupMixedInstancesPolicyInstanceRequirementsMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}
export interface InstanceGroupMixedInstancesPolicyOnDemandAboveBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#value InstanceGroup#value}
  */
  readonly value?: number;
}

export function instanceGroupMixedInstancesPolicyOnDemandAboveBaseToTerraform(struct?: InstanceGroupMixedInstancesPolicyOnDemandAboveBaseOutputReference | InstanceGroupMixedInstancesPolicyOnDemandAboveBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function instanceGroupMixedInstancesPolicyOnDemandAboveBaseToHclTerraform(struct?: InstanceGroupMixedInstancesPolicyOnDemandAboveBaseOutputReference | InstanceGroupMixedInstancesPolicyOnDemandAboveBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupMixedInstancesPolicyOnDemandAboveBaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupMixedInstancesPolicyOnDemandAboveBase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupMixedInstancesPolicyOnDemandAboveBase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InstanceGroupMixedInstancesPolicyOnDemandBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#value InstanceGroup#value}
  */
  readonly value?: number;
}

export function instanceGroupMixedInstancesPolicyOnDemandBaseToTerraform(struct?: InstanceGroupMixedInstancesPolicyOnDemandBaseOutputReference | InstanceGroupMixedInstancesPolicyOnDemandBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function instanceGroupMixedInstancesPolicyOnDemandBaseToHclTerraform(struct?: InstanceGroupMixedInstancesPolicyOnDemandBaseOutputReference | InstanceGroupMixedInstancesPolicyOnDemandBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupMixedInstancesPolicyOnDemandBaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupMixedInstancesPolicyOnDemandBase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupMixedInstancesPolicyOnDemandBase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InstanceGroupMixedInstancesPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#instances InstanceGroup#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#on_demand_allocation_strategy InstanceGroup#on_demand_allocation_strategy}
  */
  readonly onDemandAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#spot_allocation_strategy InstanceGroup#spot_allocation_strategy}
  */
  readonly spotAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#spot_instance_pools InstanceGroup#spot_instance_pools}
  */
  readonly spotInstancePools?: number;
  /**
  * instance_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#instance_requirements InstanceGroup#instance_requirements}
  */
  readonly instanceRequirements?: InstanceGroupMixedInstancesPolicyInstanceRequirements;
  /**
  * on_demand_above_base block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#on_demand_above_base InstanceGroup#on_demand_above_base}
  */
  readonly onDemandAboveBase?: InstanceGroupMixedInstancesPolicyOnDemandAboveBase;
  /**
  * on_demand_base block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#on_demand_base InstanceGroup#on_demand_base}
  */
  readonly onDemandBase?: InstanceGroupMixedInstancesPolicyOnDemandBase;
}

export function instanceGroupMixedInstancesPolicyToTerraform(struct?: InstanceGroupMixedInstancesPolicyOutputReference | InstanceGroupMixedInstancesPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    on_demand_allocation_strategy: cdktf.stringToTerraform(struct!.onDemandAllocationStrategy),
    spot_allocation_strategy: cdktf.stringToTerraform(struct!.spotAllocationStrategy),
    spot_instance_pools: cdktf.numberToTerraform(struct!.spotInstancePools),
    instance_requirements: instanceGroupMixedInstancesPolicyInstanceRequirementsToTerraform(struct!.instanceRequirements),
    on_demand_above_base: instanceGroupMixedInstancesPolicyOnDemandAboveBaseToTerraform(struct!.onDemandAboveBase),
    on_demand_base: instanceGroupMixedInstancesPolicyOnDemandBaseToTerraform(struct!.onDemandBase),
  }
}


export function instanceGroupMixedInstancesPolicyToHclTerraform(struct?: InstanceGroupMixedInstancesPolicyOutputReference | InstanceGroupMixedInstancesPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_demand_allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.onDemandAllocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.spotAllocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_instance_pools: {
      value: cdktf.numberToHclTerraform(struct!.spotInstancePools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_requirements: {
      value: instanceGroupMixedInstancesPolicyInstanceRequirementsToHclTerraform(struct!.instanceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupMixedInstancesPolicyInstanceRequirementsList",
    },
    on_demand_above_base: {
      value: instanceGroupMixedInstancesPolicyOnDemandAboveBaseToHclTerraform(struct!.onDemandAboveBase),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupMixedInstancesPolicyOnDemandAboveBaseList",
    },
    on_demand_base: {
      value: instanceGroupMixedInstancesPolicyOnDemandBaseToHclTerraform(struct!.onDemandBase),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupMixedInstancesPolicyOnDemandBaseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupMixedInstancesPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupMixedInstancesPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._onDemandAllocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandAllocationStrategy = this._onDemandAllocationStrategy;
    }
    if (this._spotAllocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotAllocationStrategy = this._spotAllocationStrategy;
    }
    if (this._spotInstancePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstancePools = this._spotInstancePools;
    }
    if (this._instanceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
    }
    if (this._onDemandAboveBase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandAboveBase = this._onDemandAboveBase?.internalValue;
    }
    if (this._onDemandBase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandBase = this._onDemandBase?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupMixedInstancesPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instances = undefined;
      this._onDemandAllocationStrategy = undefined;
      this._spotAllocationStrategy = undefined;
      this._spotInstancePools = undefined;
      this._instanceRequirements.internalValue = undefined;
      this._onDemandAboveBase.internalValue = undefined;
      this._onDemandBase.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instances = value.instances;
      this._onDemandAllocationStrategy = value.onDemandAllocationStrategy;
      this._spotAllocationStrategy = value.spotAllocationStrategy;
      this._spotInstancePools = value.spotInstancePools;
      this._instanceRequirements.internalValue = value.instanceRequirements;
      this._onDemandAboveBase.internalValue = value.onDemandAboveBase;
      this._onDemandBase.internalValue = value.onDemandBase;
    }
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // on_demand_allocation_strategy - computed: false, optional: true, required: false
  private _onDemandAllocationStrategy?: string; 
  public get onDemandAllocationStrategy() {
    return this.getStringAttribute('on_demand_allocation_strategy');
  }
  public set onDemandAllocationStrategy(value: string) {
    this._onDemandAllocationStrategy = value;
  }
  public resetOnDemandAllocationStrategy() {
    this._onDemandAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandAllocationStrategyInput() {
    return this._onDemandAllocationStrategy;
  }

  // spot_allocation_strategy - computed: false, optional: true, required: false
  private _spotAllocationStrategy?: string; 
  public get spotAllocationStrategy() {
    return this.getStringAttribute('spot_allocation_strategy');
  }
  public set spotAllocationStrategy(value: string) {
    this._spotAllocationStrategy = value;
  }
  public resetSpotAllocationStrategy() {
    this._spotAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAllocationStrategyInput() {
    return this._spotAllocationStrategy;
  }

  // spot_instance_pools - computed: false, optional: true, required: false
  private _spotInstancePools?: number; 
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }
  public set spotInstancePools(value: number) {
    this._spotInstancePools = value;
  }
  public resetSpotInstancePools() {
    this._spotInstancePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePoolsInput() {
    return this._spotInstancePools;
  }

  // instance_requirements - computed: false, optional: true, required: false
  private _instanceRequirements = new InstanceGroupMixedInstancesPolicyInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }
  public putInstanceRequirements(value: InstanceGroupMixedInstancesPolicyInstanceRequirements) {
    this._instanceRequirements.internalValue = value;
  }
  public resetInstanceRequirements() {
    this._instanceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRequirementsInput() {
    return this._instanceRequirements.internalValue;
  }

  // on_demand_above_base - computed: false, optional: true, required: false
  private _onDemandAboveBase = new InstanceGroupMixedInstancesPolicyOnDemandAboveBaseOutputReference(this, "on_demand_above_base");
  public get onDemandAboveBase() {
    return this._onDemandAboveBase;
  }
  public putOnDemandAboveBase(value: InstanceGroupMixedInstancesPolicyOnDemandAboveBase) {
    this._onDemandAboveBase.internalValue = value;
  }
  public resetOnDemandAboveBase() {
    this._onDemandAboveBase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandAboveBaseInput() {
    return this._onDemandAboveBase.internalValue;
  }

  // on_demand_base - computed: false, optional: true, required: false
  private _onDemandBase = new InstanceGroupMixedInstancesPolicyOnDemandBaseOutputReference(this, "on_demand_base");
  public get onDemandBase() {
    return this._onDemandBase;
  }
  public putOnDemandBase(value: InstanceGroupMixedInstancesPolicyOnDemandBase) {
    this._onDemandBase.internalValue = value;
  }
  public resetOnDemandBase() {
    this._onDemandBase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBaseInput() {
    return this._onDemandBase.internalValue;
  }
}
export interface InstanceGroupRollingUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#drain_and_terminate InstanceGroup#drain_and_terminate}
  */
  readonly drainAndTerminate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max_surge InstanceGroup#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max_unavailable InstanceGroup#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function instanceGroupRollingUpdateToTerraform(struct?: InstanceGroupRollingUpdateOutputReference | InstanceGroupRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_and_terminate: cdktf.booleanToTerraform(struct!.drainAndTerminate),
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function instanceGroupRollingUpdateToHclTerraform(struct?: InstanceGroupRollingUpdateOutputReference | InstanceGroupRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_and_terminate: {
      value: cdktf.booleanToHclTerraform(struct!.drainAndTerminate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainAndTerminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainAndTerminate = this._drainAndTerminate;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainAndTerminate = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainAndTerminate = value.drainAndTerminate;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // drain_and_terminate - computed: false, optional: true, required: false
  private _drainAndTerminate?: boolean | cdktf.IResolvable; 
  public get drainAndTerminate() {
    return this.getBooleanAttribute('drain_and_terminate');
  }
  public set drainAndTerminate(value: boolean | cdktf.IResolvable) {
    this._drainAndTerminate = value;
  }
  public resetDrainAndTerminate() {
    this._drainAndTerminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainAndTerminateInput() {
    return this._drainAndTerminate;
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface InstanceGroupVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#device InstanceGroup#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#filesystem InstanceGroup#filesystem}
  */
  readonly filesystem: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#format_options InstanceGroup#format_options}
  */
  readonly formatOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#mount_options InstanceGroup#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#path InstanceGroup#path}
  */
  readonly path: string;
}

export function instanceGroupVolumeMountsToTerraform(struct?: InstanceGroupVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    filesystem: cdktf.stringToTerraform(struct!.filesystem),
    format_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.formatOptions),
    mount_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mountOptions),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function instanceGroupVolumeMountsToHclTerraform(struct?: InstanceGroupVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesystem: {
      value: cdktf.stringToHclTerraform(struct!.filesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.formatOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mount_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mountOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceGroupVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._filesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem;
    }
    if (this._formatOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatOptions = this._formatOptions;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._filesystem = undefined;
      this._formatOptions = undefined;
      this._mountOptions = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._filesystem = value.filesystem;
      this._formatOptions = value.formatOptions;
      this._mountOptions = value.mountOptions;
      this._path = value.path;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // filesystem - computed: false, optional: false, required: true
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // format_options - computed: false, optional: true, required: false
  private _formatOptions?: string[]; 
  public get formatOptions() {
    return this.getListAttribute('format_options');
  }
  public set formatOptions(value: string[]) {
    this._formatOptions = value;
  }
  public resetFormatOptions() {
    this._formatOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatOptionsInput() {
    return this._formatOptions;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class InstanceGroupVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : InstanceGroupVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): InstanceGroupVolumeMountsOutputReference {
    return new InstanceGroupVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#delete_on_termination InstanceGroup#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#device InstanceGroup#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#encrypted InstanceGroup#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#iops InstanceGroup#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#key InstanceGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#size InstanceGroup#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#throughput InstanceGroup#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#type InstanceGroup#type}
  */
  readonly type?: string;
}

export function instanceGroupVolumesToTerraform(struct?: InstanceGroupVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device: cdktf.stringToTerraform(struct!.device),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    key: cdktf.stringToTerraform(struct!.key),
    size: cdktf.numberToTerraform(struct!.size),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function instanceGroupVolumesToHclTerraform(struct?: InstanceGroupVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class InstanceGroupVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceGroupVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOnTermination = undefined;
      this._device = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._key = undefined;
      this._size = undefined;
      this._throughput = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteOnTermination = value.deleteOnTermination;
      this._device = value.device;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._key = value.key;
      this._size = value.size;
      this._throughput = value.throughput;
      this._type = value.type;
    }
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
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

export class InstanceGroupVolumesList extends cdktf.ComplexList {
  public internalValue? : InstanceGroupVolumes[] | cdktf.IResolvable

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
  public get(index: number): InstanceGroupVolumesOutputReference {
    return new InstanceGroupVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupWarmPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#enable_lifecycle_hook InstanceGroup#enable_lifecycle_hook}
  */
  readonly enableLifecycleHook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#max_size InstanceGroup#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#min_size InstanceGroup#min_size}
  */
  readonly minSize?: number;
}

export function instanceGroupWarmPoolToTerraform(struct?: InstanceGroupWarmPoolOutputReference | InstanceGroupWarmPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_lifecycle_hook: cdktf.booleanToTerraform(struct!.enableLifecycleHook),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}


export function instanceGroupWarmPoolToHclTerraform(struct?: InstanceGroupWarmPoolOutputReference | InstanceGroupWarmPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_lifecycle_hook: {
      value: cdktf.booleanToHclTerraform(struct!.enableLifecycleHook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceGroupWarmPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceGroupWarmPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLifecycleHook !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLifecycleHook = this._enableLifecycleHook;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupWarmPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableLifecycleHook = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableLifecycleHook = value.enableLifecycleHook;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
    }
  }

  // enable_lifecycle_hook - computed: false, optional: true, required: false
  private _enableLifecycleHook?: boolean | cdktf.IResolvable; 
  public get enableLifecycleHook() {
    return this.getBooleanAttribute('enable_lifecycle_hook');
  }
  public set enableLifecycleHook(value: boolean | cdktf.IResolvable) {
    this._enableLifecycleHook = value;
  }
  public resetEnableLifecycleHook() {
    this._enableLifecycleHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLifecycleHookInput() {
    return this._enableLifecycleHook;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group kops_instance_group}
*/
export class InstanceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kops_instance_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceGroup to import
  * @param importFromId The id of the existing InstanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kops_instance_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/instance_group kops_instance_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'kops_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'kops',
        providerVersion: '1.25.4',
        providerVersionConstraint: '1.25.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalSecurityGroups = config.additionalSecurityGroups;
    this._annotations = config.annotations;
    this._associatePublicIp = config.associatePublicIp;
    this._autoscale = config.autoscale;
    this._cloudLabels = config.cloudLabels;
    this._clusterName = config.clusterName;
    this._compressUserData = config.compressUserData;
    this._cpuCredits = config.cpuCredits;
    this._detailedInstanceMonitoring = config.detailedInstanceMonitoring;
    this._gcpProvisioningModel = config.gcpProvisioningModel;
    this._id = config.id;
    this._image = config.image;
    this._instanceInterruptionBehavior = config.instanceInterruptionBehavior;
    this._instanceProtection = config.instanceProtection;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._manager = config.manager;
    this._maxInstanceLifetime = config.maxInstanceLifetime;
    this._maxPrice = config.maxPrice;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._nodeLabels = config.nodeLabels;
    this._packages = config.packages;
    this._role = config.role;
    this._rootVolumeEncryption = config.rootVolumeEncryption;
    this._rootVolumeEncryptionKey = config.rootVolumeEncryptionKey;
    this._rootVolumeIops = config.rootVolumeIops;
    this._rootVolumeOptimization = config.rootVolumeOptimization;
    this._rootVolumeSize = config.rootVolumeSize;
    this._rootVolumeThroughput = config.rootVolumeThroughput;
    this._rootVolumeType = config.rootVolumeType;
    this._securityGroupOverride = config.securityGroupOverride;
    this._spotDurationInMinutes = config.spotDurationInMinutes;
    this._subnets = config.subnets;
    this._suspendProcesses = config.suspendProcesses;
    this._sysctlParameters = config.sysctlParameters;
    this._taints = config.taints;
    this._tenancy = config.tenancy;
    this._updatePolicy = config.updatePolicy;
    this._zones = config.zones;
    this._additionalUserData.internalValue = config.additionalUserData;
    this._containerd.internalValue = config.containerd;
    this._externalLoadBalancers.internalValue = config.externalLoadBalancers;
    this._fileAssets.internalValue = config.fileAssets;
    this._guestAccelerators.internalValue = config.guestAccelerators;
    this._hooks.internalValue = config.hooks;
    this._iam.internalValue = config.iam;
    this._instanceMetadata.internalValue = config.instanceMetadata;
    this._kubelet.internalValue = config.kubelet;
    this._mixedInstancesPolicy.internalValue = config.mixedInstancesPolicy;
    this._rollingUpdate.internalValue = config.rollingUpdate;
    this._volumeMounts.internalValue = config.volumeMounts;
    this._volumes.internalValue = config.volumes;
    this._warmPool.internalValue = config.warmPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_security_groups - computed: false, optional: true, required: false
  private _additionalSecurityGroups?: string[]; 
  public get additionalSecurityGroups() {
    return this.getListAttribute('additional_security_groups');
  }
  public set additionalSecurityGroups(value: string[]) {
    this._additionalSecurityGroups = value;
  }
  public resetAdditionalSecurityGroups() {
    this._additionalSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSecurityGroupsInput() {
    return this._additionalSecurityGroups;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // associate_public_ip - computed: false, optional: true, required: false
  private _associatePublicIp?: boolean | cdktf.IResolvable; 
  public get associatePublicIp() {
    return this.getBooleanAttribute('associate_public_ip');
  }
  public set associatePublicIp(value: boolean | cdktf.IResolvable) {
    this._associatePublicIp = value;
  }
  public resetAssociatePublicIp() {
    this._associatePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpInput() {
    return this._associatePublicIp;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // cloud_labels - computed: false, optional: true, required: false
  private _cloudLabels?: { [key: string]: string }; 
  public get cloudLabels() {
    return this.getStringMapAttribute('cloud_labels');
  }
  public set cloudLabels(value: { [key: string]: string }) {
    this._cloudLabels = value;
  }
  public resetCloudLabels() {
    this._cloudLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLabelsInput() {
    return this._cloudLabels;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // compress_user_data - computed: false, optional: true, required: false
  private _compressUserData?: boolean | cdktf.IResolvable; 
  public get compressUserData() {
    return this.getBooleanAttribute('compress_user_data');
  }
  public set compressUserData(value: boolean | cdktf.IResolvable) {
    this._compressUserData = value;
  }
  public resetCompressUserData() {
    this._compressUserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressUserDataInput() {
    return this._compressUserData;
  }

  // cpu_credits - computed: false, optional: true, required: false
  private _cpuCredits?: string; 
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
  public set cpuCredits(value: string) {
    this._cpuCredits = value;
  }
  public resetCpuCredits() {
    this._cpuCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCreditsInput() {
    return this._cpuCredits;
  }

  // detailed_instance_monitoring - computed: false, optional: true, required: false
  private _detailedInstanceMonitoring?: boolean | cdktf.IResolvable; 
  public get detailedInstanceMonitoring() {
    return this.getBooleanAttribute('detailed_instance_monitoring');
  }
  public set detailedInstanceMonitoring(value: boolean | cdktf.IResolvable) {
    this._detailedInstanceMonitoring = value;
  }
  public resetDetailedInstanceMonitoring() {
    this._detailedInstanceMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedInstanceMonitoringInput() {
    return this._detailedInstanceMonitoring;
  }

  // gcp_provisioning_model - computed: false, optional: true, required: false
  private _gcpProvisioningModel?: string; 
  public get gcpProvisioningModel() {
    return this.getStringAttribute('gcp_provisioning_model');
  }
  public set gcpProvisioningModel(value: string) {
    this._gcpProvisioningModel = value;
  }
  public resetGcpProvisioningModel() {
    this._gcpProvisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProvisioningModelInput() {
    return this._gcpProvisioningModel;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image - computed: true, optional: true, required: false
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

  // instance_interruption_behavior - computed: false, optional: true, required: false
  private _instanceInterruptionBehavior?: string; 
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }
  public set instanceInterruptionBehavior(value: string) {
    this._instanceInterruptionBehavior = value;
  }
  public resetInstanceInterruptionBehavior() {
    this._instanceInterruptionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviorInput() {
    return this._instanceInterruptionBehavior;
  }

  // instance_protection - computed: false, optional: true, required: false
  private _instanceProtection?: boolean | cdktf.IResolvable; 
  public get instanceProtection() {
    return this.getBooleanAttribute('instance_protection');
  }
  public set instanceProtection(value: boolean | cdktf.IResolvable) {
    this._instanceProtection = value;
  }
  public resetInstanceProtection() {
    this._instanceProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProtectionInput() {
    return this._instanceProtection;
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // manager - computed: true, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
  }

  // max_instance_lifetime - computed: false, optional: true, required: false
  private _maxInstanceLifetime?: string; 
  public get maxInstanceLifetime() {
    return this.getStringAttribute('max_instance_lifetime');
  }
  public set maxInstanceLifetime(value: string) {
    this._maxInstanceLifetime = value;
  }
  public resetMaxInstanceLifetime() {
    this._maxInstanceLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceLifetimeInput() {
    return this._maxInstanceLifetime;
  }

  // max_price - computed: false, optional: true, required: false
  private _maxPrice?: string; 
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }
  public set maxPrice(value: string) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // root_volume_encryption - computed: false, optional: true, required: false
  private _rootVolumeEncryption?: boolean | cdktf.IResolvable; 
  public get rootVolumeEncryption() {
    return this.getBooleanAttribute('root_volume_encryption');
  }
  public set rootVolumeEncryption(value: boolean | cdktf.IResolvable) {
    this._rootVolumeEncryption = value;
  }
  public resetRootVolumeEncryption() {
    this._rootVolumeEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeEncryptionInput() {
    return this._rootVolumeEncryption;
  }

  // root_volume_encryption_key - computed: false, optional: true, required: false
  private _rootVolumeEncryptionKey?: string; 
  public get rootVolumeEncryptionKey() {
    return this.getStringAttribute('root_volume_encryption_key');
  }
  public set rootVolumeEncryptionKey(value: string) {
    this._rootVolumeEncryptionKey = value;
  }
  public resetRootVolumeEncryptionKey() {
    this._rootVolumeEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeEncryptionKeyInput() {
    return this._rootVolumeEncryptionKey;
  }

  // root_volume_iops - computed: false, optional: true, required: false
  private _rootVolumeIops?: number; 
  public get rootVolumeIops() {
    return this.getNumberAttribute('root_volume_iops');
  }
  public set rootVolumeIops(value: number) {
    this._rootVolumeIops = value;
  }
  public resetRootVolumeIops() {
    this._rootVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeIopsInput() {
    return this._rootVolumeIops;
  }

  // root_volume_optimization - computed: false, optional: true, required: false
  private _rootVolumeOptimization?: boolean | cdktf.IResolvable; 
  public get rootVolumeOptimization() {
    return this.getBooleanAttribute('root_volume_optimization');
  }
  public set rootVolumeOptimization(value: boolean | cdktf.IResolvable) {
    this._rootVolumeOptimization = value;
  }
  public resetRootVolumeOptimization() {
    this._rootVolumeOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeOptimizationInput() {
    return this._rootVolumeOptimization;
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

  // root_volume_throughput - computed: false, optional: true, required: false
  private _rootVolumeThroughput?: number; 
  public get rootVolumeThroughput() {
    return this.getNumberAttribute('root_volume_throughput');
  }
  public set rootVolumeThroughput(value: number) {
    this._rootVolumeThroughput = value;
  }
  public resetRootVolumeThroughput() {
    this._rootVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeThroughputInput() {
    return this._rootVolumeThroughput;
  }

  // root_volume_type - computed: false, optional: true, required: false
  private _rootVolumeType?: string; 
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
  public set rootVolumeType(value: string) {
    this._rootVolumeType = value;
  }
  public resetRootVolumeType() {
    this._rootVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeTypeInput() {
    return this._rootVolumeType;
  }

  // security_group_override - computed: false, optional: true, required: false
  private _securityGroupOverride?: string; 
  public get securityGroupOverride() {
    return this.getStringAttribute('security_group_override');
  }
  public set securityGroupOverride(value: string) {
    this._securityGroupOverride = value;
  }
  public resetSecurityGroupOverride() {
    this._securityGroupOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupOverrideInput() {
    return this._securityGroupOverride;
  }

  // spot_duration_in_minutes - computed: false, optional: true, required: false
  private _spotDurationInMinutes?: number; 
  public get spotDurationInMinutes() {
    return this.getNumberAttribute('spot_duration_in_minutes');
  }
  public set spotDurationInMinutes(value: number) {
    this._spotDurationInMinutes = value;
  }
  public resetSpotDurationInMinutes() {
    this._spotDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDurationInMinutesInput() {
    return this._spotDurationInMinutes;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // suspend_processes - computed: false, optional: true, required: false
  private _suspendProcesses?: string[]; 
  public get suspendProcesses() {
    return this.getListAttribute('suspend_processes');
  }
  public set suspendProcesses(value: string[]) {
    this._suspendProcesses = value;
  }
  public resetSuspendProcesses() {
    this._suspendProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendProcessesInput() {
    return this._suspendProcesses;
  }

  // sysctl_parameters - computed: false, optional: true, required: false
  private _sysctlParameters?: string[]; 
  public get sysctlParameters() {
    return this.getListAttribute('sysctl_parameters');
  }
  public set sysctlParameters(value: string[]) {
    this._sysctlParameters = value;
  }
  public resetSysctlParameters() {
    this._sysctlParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlParametersInput() {
    return this._sysctlParameters;
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: string[]; 
  public get taints() {
    return this.getListAttribute('taints');
  }
  public set taints(value: string[]) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // tenancy - computed: false, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy?: string; 
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }
  public set updatePolicy(value: string) {
    this._updatePolicy = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // additional_user_data - computed: false, optional: true, required: false
  private _additionalUserData = new InstanceGroupAdditionalUserDataList(this, "additional_user_data", false);
  public get additionalUserData() {
    return this._additionalUserData;
  }
  public putAdditionalUserData(value: InstanceGroupAdditionalUserData[] | cdktf.IResolvable) {
    this._additionalUserData.internalValue = value;
  }
  public resetAdditionalUserData() {
    this._additionalUserData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUserDataInput() {
    return this._additionalUserData.internalValue;
  }

  // containerd - computed: false, optional: true, required: false
  private _containerd = new InstanceGroupContainerdOutputReference(this, "containerd");
  public get containerd() {
    return this._containerd;
  }
  public putContainerd(value: InstanceGroupContainerd) {
    this._containerd.internalValue = value;
  }
  public resetContainerd() {
    this._containerd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdInput() {
    return this._containerd.internalValue;
  }

  // external_load_balancers - computed: false, optional: true, required: false
  private _externalLoadBalancers = new InstanceGroupExternalLoadBalancersList(this, "external_load_balancers", false);
  public get externalLoadBalancers() {
    return this._externalLoadBalancers;
  }
  public putExternalLoadBalancers(value: InstanceGroupExternalLoadBalancers[] | cdktf.IResolvable) {
    this._externalLoadBalancers.internalValue = value;
  }
  public resetExternalLoadBalancers() {
    this._externalLoadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLoadBalancersInput() {
    return this._externalLoadBalancers.internalValue;
  }

  // file_assets - computed: false, optional: true, required: false
  private _fileAssets = new InstanceGroupFileAssetsList(this, "file_assets", false);
  public get fileAssets() {
    return this._fileAssets;
  }
  public putFileAssets(value: InstanceGroupFileAssets[] | cdktf.IResolvable) {
    this._fileAssets.internalValue = value;
  }
  public resetFileAssets() {
    this._fileAssets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileAssetsInput() {
    return this._fileAssets.internalValue;
  }

  // guest_accelerators - computed: false, optional: true, required: false
  private _guestAccelerators = new InstanceGroupGuestAcceleratorsList(this, "guest_accelerators", false);
  public get guestAccelerators() {
    return this._guestAccelerators;
  }
  public putGuestAccelerators(value: InstanceGroupGuestAccelerators[] | cdktf.IResolvable) {
    this._guestAccelerators.internalValue = value;
  }
  public resetGuestAccelerators() {
    this._guestAccelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorsInput() {
    return this._guestAccelerators.internalValue;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new InstanceGroupHooksList(this, "hooks", false);
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: InstanceGroupHooks[] | cdktf.IResolvable) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // iam - computed: false, optional: true, required: false
  private _iam = new InstanceGroupIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }
  public putIam(value: InstanceGroupIam) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // instance_metadata - computed: false, optional: true, required: false
  private _instanceMetadata = new InstanceGroupInstanceMetadataOutputReference(this, "instance_metadata");
  public get instanceMetadata() {
    return this._instanceMetadata;
  }
  public putInstanceMetadata(value: InstanceGroupInstanceMetadata) {
    this._instanceMetadata.internalValue = value;
  }
  public resetInstanceMetadata() {
    this._instanceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMetadataInput() {
    return this._instanceMetadata.internalValue;
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet = new InstanceGroupKubeletOutputReference(this, "kubelet");
  public get kubelet() {
    return this._kubelet;
  }
  public putKubelet(value: InstanceGroupKubelet) {
    this._kubelet.internalValue = value;
  }
  public resetKubelet() {
    this._kubelet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet.internalValue;
  }

  // mixed_instances_policy - computed: false, optional: true, required: false
  private _mixedInstancesPolicy = new InstanceGroupMixedInstancesPolicyOutputReference(this, "mixed_instances_policy");
  public get mixedInstancesPolicy() {
    return this._mixedInstancesPolicy;
  }
  public putMixedInstancesPolicy(value: InstanceGroupMixedInstancesPolicy) {
    this._mixedInstancesPolicy.internalValue = value;
  }
  public resetMixedInstancesPolicy() {
    this._mixedInstancesPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedInstancesPolicyInput() {
    return this._mixedInstancesPolicy.internalValue;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new InstanceGroupRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: InstanceGroupRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new InstanceGroupVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: InstanceGroupVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new InstanceGroupVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: InstanceGroupVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // warm_pool - computed: false, optional: true, required: false
  private _warmPool = new InstanceGroupWarmPoolOutputReference(this, "warm_pool");
  public get warmPool() {
    return this._warmPool;
  }
  public putWarmPool(value: InstanceGroupWarmPool) {
    this._warmPool.internalValue = value;
  }
  public resetWarmPool() {
    this._warmPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmPoolInput() {
    return this._warmPool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalSecurityGroups),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      associate_public_ip: cdktf.booleanToTerraform(this._associatePublicIp),
      autoscale: cdktf.booleanToTerraform(this._autoscale),
      cloud_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._cloudLabels),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      compress_user_data: cdktf.booleanToTerraform(this._compressUserData),
      cpu_credits: cdktf.stringToTerraform(this._cpuCredits),
      detailed_instance_monitoring: cdktf.booleanToTerraform(this._detailedInstanceMonitoring),
      gcp_provisioning_model: cdktf.stringToTerraform(this._gcpProvisioningModel),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      instance_interruption_behavior: cdktf.stringToTerraform(this._instanceInterruptionBehavior),
      instance_protection: cdktf.booleanToTerraform(this._instanceProtection),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      manager: cdktf.stringToTerraform(this._manager),
      max_instance_lifetime: cdktf.stringToTerraform(this._maxInstanceLifetime),
      max_price: cdktf.stringToTerraform(this._maxPrice),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeLabels),
      packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packages),
      role: cdktf.stringToTerraform(this._role),
      root_volume_encryption: cdktf.booleanToTerraform(this._rootVolumeEncryption),
      root_volume_encryption_key: cdktf.stringToTerraform(this._rootVolumeEncryptionKey),
      root_volume_iops: cdktf.numberToTerraform(this._rootVolumeIops),
      root_volume_optimization: cdktf.booleanToTerraform(this._rootVolumeOptimization),
      root_volume_size: cdktf.numberToTerraform(this._rootVolumeSize),
      root_volume_throughput: cdktf.numberToTerraform(this._rootVolumeThroughput),
      root_volume_type: cdktf.stringToTerraform(this._rootVolumeType),
      security_group_override: cdktf.stringToTerraform(this._securityGroupOverride),
      spot_duration_in_minutes: cdktf.numberToTerraform(this._spotDurationInMinutes),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      suspend_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suspendProcesses),
      sysctl_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sysctlParameters),
      taints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taints),
      tenancy: cdktf.stringToTerraform(this._tenancy),
      update_policy: cdktf.stringToTerraform(this._updatePolicy),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      additional_user_data: cdktf.listMapper(instanceGroupAdditionalUserDataToTerraform, true)(this._additionalUserData.internalValue),
      containerd: instanceGroupContainerdToTerraform(this._containerd.internalValue),
      external_load_balancers: cdktf.listMapper(instanceGroupExternalLoadBalancersToTerraform, true)(this._externalLoadBalancers.internalValue),
      file_assets: cdktf.listMapper(instanceGroupFileAssetsToTerraform, true)(this._fileAssets.internalValue),
      guest_accelerators: cdktf.listMapper(instanceGroupGuestAcceleratorsToTerraform, true)(this._guestAccelerators.internalValue),
      hooks: cdktf.listMapper(instanceGroupHooksToTerraform, true)(this._hooks.internalValue),
      iam: instanceGroupIamToTerraform(this._iam.internalValue),
      instance_metadata: instanceGroupInstanceMetadataToTerraform(this._instanceMetadata.internalValue),
      kubelet: instanceGroupKubeletToTerraform(this._kubelet.internalValue),
      mixed_instances_policy: instanceGroupMixedInstancesPolicyToTerraform(this._mixedInstancesPolicy.internalValue),
      rolling_update: instanceGroupRollingUpdateToTerraform(this._rollingUpdate.internalValue),
      volume_mounts: cdktf.listMapper(instanceGroupVolumeMountsToTerraform, true)(this._volumeMounts.internalValue),
      volumes: cdktf.listMapper(instanceGroupVolumesToTerraform, true)(this._volumes.internalValue),
      warm_pool: instanceGroupWarmPoolToTerraform(this._warmPool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalSecurityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      associate_public_ip: {
        value: cdktf.booleanToHclTerraform(this._associatePublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autoscale: {
        value: cdktf.booleanToHclTerraform(this._autoscale),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._cloudLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress_user_data: {
        value: cdktf.booleanToHclTerraform(this._compressUserData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_credits: {
        value: cdktf.stringToHclTerraform(this._cpuCredits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detailed_instance_monitoring: {
        value: cdktf.booleanToHclTerraform(this._detailedInstanceMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gcp_provisioning_model: {
        value: cdktf.stringToHclTerraform(this._gcpProvisioningModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_interruption_behavior: {
        value: cdktf.stringToHclTerraform(this._instanceInterruptionBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_protection: {
        value: cdktf.booleanToHclTerraform(this._instanceProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager: {
        value: cdktf.stringToHclTerraform(this._manager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instance_lifetime: {
        value: cdktf.stringToHclTerraform(this._maxInstanceLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_price: {
        value: cdktf.stringToHclTerraform(this._maxPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodeLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_volume_encryption: {
        value: cdktf.booleanToHclTerraform(this._rootVolumeEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_volume_encryption_key: {
        value: cdktf.stringToHclTerraform(this._rootVolumeEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_volume_iops: {
        value: cdktf.numberToHclTerraform(this._rootVolumeIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_volume_optimization: {
        value: cdktf.booleanToHclTerraform(this._rootVolumeOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_volume_size: {
        value: cdktf.numberToHclTerraform(this._rootVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_volume_throughput: {
        value: cdktf.numberToHclTerraform(this._rootVolumeThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_volume_type: {
        value: cdktf.stringToHclTerraform(this._rootVolumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_override: {
        value: cdktf.stringToHclTerraform(this._securityGroupOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_duration_in_minutes: {
        value: cdktf.numberToHclTerraform(this._spotDurationInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      suspend_processes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._suspendProcesses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sysctl_parameters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sysctlParameters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      taints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenancy: {
        value: cdktf.stringToHclTerraform(this._tenancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_policy: {
        value: cdktf.stringToHclTerraform(this._updatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      additional_user_data: {
        value: cdktf.listMapperHcl(instanceGroupAdditionalUserDataToHclTerraform, true)(this._additionalUserData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupAdditionalUserDataList",
      },
      containerd: {
        value: instanceGroupContainerdToHclTerraform(this._containerd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupContainerdList",
      },
      external_load_balancers: {
        value: cdktf.listMapperHcl(instanceGroupExternalLoadBalancersToHclTerraform, true)(this._externalLoadBalancers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupExternalLoadBalancersList",
      },
      file_assets: {
        value: cdktf.listMapperHcl(instanceGroupFileAssetsToHclTerraform, true)(this._fileAssets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupFileAssetsList",
      },
      guest_accelerators: {
        value: cdktf.listMapperHcl(instanceGroupGuestAcceleratorsToHclTerraform, true)(this._guestAccelerators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupGuestAcceleratorsList",
      },
      hooks: {
        value: cdktf.listMapperHcl(instanceGroupHooksToHclTerraform, true)(this._hooks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupHooksList",
      },
      iam: {
        value: instanceGroupIamToHclTerraform(this._iam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupIamList",
      },
      instance_metadata: {
        value: instanceGroupInstanceMetadataToHclTerraform(this._instanceMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupInstanceMetadataList",
      },
      kubelet: {
        value: instanceGroupKubeletToHclTerraform(this._kubelet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupKubeletList",
      },
      mixed_instances_policy: {
        value: instanceGroupMixedInstancesPolicyToHclTerraform(this._mixedInstancesPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupMixedInstancesPolicyList",
      },
      rolling_update: {
        value: instanceGroupRollingUpdateToHclTerraform(this._rollingUpdate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupRollingUpdateList",
      },
      volume_mounts: {
        value: cdktf.listMapperHcl(instanceGroupVolumeMountsToHclTerraform, true)(this._volumeMounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupVolumeMountsList",
      },
      volumes: {
        value: cdktf.listMapperHcl(instanceGroupVolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupVolumesList",
      },
      warm_pool: {
        value: instanceGroupWarmPoolToHclTerraform(this._warmPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceGroupWarmPoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
