// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssScalingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#active EssScalingConfiguration#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#credit_specification EssScalingConfiguration#credit_specification}
  */
  readonly creditSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#dedicated_host_cluster_id EssScalingConfiguration#dedicated_host_cluster_id}
  */
  readonly dedicatedHostClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#deletion_protection EssScalingConfiguration#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#enable EssScalingConfiguration#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#force_delete EssScalingConfiguration#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#host_name EssScalingConfiguration#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#http_endpoint EssScalingConfiguration#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#id EssScalingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#image_id EssScalingConfiguration#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#image_name EssScalingConfiguration#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#image_options_login_as_non_root EssScalingConfiguration#image_options_login_as_non_root}
  */
  readonly imageOptionsLoginAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_description EssScalingConfiguration#instance_description}
  */
  readonly instanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_ids EssScalingConfiguration#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_name EssScalingConfiguration#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_type EssScalingConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_types EssScalingConfiguration#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#internet_charge_type EssScalingConfiguration#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#internet_max_bandwidth_in EssScalingConfiguration#internet_max_bandwidth_in}
  */
  readonly internetMaxBandwidthIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#internet_max_bandwidth_out EssScalingConfiguration#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#io_optimized EssScalingConfiguration#io_optimized}
  */
  readonly ioOptimized?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#is_outdated EssScalingConfiguration#is_outdated}
  */
  readonly isOutdated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#key_name EssScalingConfiguration#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#kms_encrypted_password EssScalingConfiguration#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#kms_encryption_context EssScalingConfiguration#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#override EssScalingConfiguration#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#password EssScalingConfiguration#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#password_inherit EssScalingConfiguration#password_inherit}
  */
  readonly passwordInherit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#resource_group_id EssScalingConfiguration#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#role_name EssScalingConfiguration#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#scaling_configuration_name EssScalingConfiguration#scaling_configuration_name}
  */
  readonly scalingConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#scaling_group_id EssScalingConfiguration#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#security_enhancement_strategy EssScalingConfiguration#security_enhancement_strategy}
  */
  readonly securityEnhancementStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#security_group_id EssScalingConfiguration#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#security_group_ids EssScalingConfiguration#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#spot_duration EssScalingConfiguration#spot_duration}
  */
  readonly spotDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#spot_strategy EssScalingConfiguration#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#substitute EssScalingConfiguration#substitute}
  */
  readonly substitute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_auto_snapshot_policy_id EssScalingConfiguration#system_disk_auto_snapshot_policy_id}
  */
  readonly systemDiskAutoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_category EssScalingConfiguration#system_disk_category}
  */
  readonly systemDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_description EssScalingConfiguration#system_disk_description}
  */
  readonly systemDiskDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_encrypt_algorithm EssScalingConfiguration#system_disk_encrypt_algorithm}
  */
  readonly systemDiskEncryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_encrypted EssScalingConfiguration#system_disk_encrypted}
  */
  readonly systemDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_kms_key_id EssScalingConfiguration#system_disk_kms_key_id}
  */
  readonly systemDiskKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_name EssScalingConfiguration#system_disk_name}
  */
  readonly systemDiskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_performance_level EssScalingConfiguration#system_disk_performance_level}
  */
  readonly systemDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_provisioned_iops EssScalingConfiguration#system_disk_provisioned_iops}
  */
  readonly systemDiskProvisionedIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#system_disk_size EssScalingConfiguration#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#tags EssScalingConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#user_data EssScalingConfiguration#user_data}
  */
  readonly userData?: string;
  /**
  * custom_priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#custom_priorities EssScalingConfiguration#custom_priorities}
  */
  readonly customPriorities?: EssScalingConfigurationCustomPriorities[] | cdktf.IResolvable;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#data_disk EssScalingConfiguration#data_disk}
  */
  readonly dataDisk?: EssScalingConfigurationDataDisk[] | cdktf.IResolvable;
  /**
  * instance_pattern_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_pattern_info EssScalingConfiguration#instance_pattern_info}
  */
  readonly instancePatternInfo?: EssScalingConfigurationInstancePatternInfo[] | cdktf.IResolvable;
  /**
  * instance_type_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_type_override EssScalingConfiguration#instance_type_override}
  */
  readonly instanceTypeOverride?: EssScalingConfigurationInstanceTypeOverride[] | cdktf.IResolvable;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#network_interfaces EssScalingConfiguration#network_interfaces}
  */
  readonly networkInterfaces?: EssScalingConfigurationNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * spot_price_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#spot_price_limit EssScalingConfiguration#spot_price_limit}
  */
  readonly spotPriceLimit?: EssScalingConfigurationSpotPriceLimit[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#timeouts EssScalingConfiguration#timeouts}
  */
  readonly timeouts?: EssScalingConfigurationTimeouts;
}
export interface EssScalingConfigurationCustomPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_type EssScalingConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#vswitch_id EssScalingConfiguration#vswitch_id}
  */
  readonly vswitchId?: string;
}

export function essScalingConfigurationCustomPrioritiesToTerraform(struct?: EssScalingConfigurationCustomPriorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
  }
}


export function essScalingConfigurationCustomPrioritiesToHclTerraform(struct?: EssScalingConfigurationCustomPriorities | cdktf.IResolvable): any {
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
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingConfigurationCustomPrioritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingConfigurationCustomPriorities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingConfigurationCustomPriorities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._vswitchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._vswitchId = value.vswitchId;
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

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }
}

export class EssScalingConfigurationCustomPrioritiesList extends cdktf.ComplexList {
  public internalValue? : EssScalingConfigurationCustomPriorities[] | cdktf.IResolvable

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
  public get(index: number): EssScalingConfigurationCustomPrioritiesOutputReference {
    return new EssScalingConfigurationCustomPrioritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingConfigurationDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#auto_snapshot_policy_id EssScalingConfiguration#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#category EssScalingConfiguration#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#delete_with_instance EssScalingConfiguration#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#description EssScalingConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#device EssScalingConfiguration#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#encrypted EssScalingConfiguration#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#kms_key_id EssScalingConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#name EssScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#performance_level EssScalingConfiguration#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#provisioned_iops EssScalingConfiguration#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#size EssScalingConfiguration#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#snapshot_id EssScalingConfiguration#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function essScalingConfigurationDataDiskToTerraform(struct?: EssScalingConfigurationDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_snapshot_policy_id: cdktf.stringToTerraform(struct!.autoSnapshotPolicyId),
    category: cdktf.stringToTerraform(struct!.category),
    delete_with_instance: cdktf.booleanToTerraform(struct!.deleteWithInstance),
    description: cdktf.stringToTerraform(struct!.description),
    device: cdktf.stringToTerraform(struct!.device),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    provisioned_iops: cdktf.numberToTerraform(struct!.provisionedIops),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function essScalingConfigurationDataDiskToHclTerraform(struct?: EssScalingConfigurationDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_snapshot_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.autoSnapshotPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_with_instance: {
      value: cdktf.booleanToHclTerraform(struct!.deleteWithInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
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
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_iops: {
      value: cdktf.numberToHclTerraform(struct!.provisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingConfigurationDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingConfigurationDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSnapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSnapshotPolicyId = this._autoSnapshotPolicyId;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._deleteWithInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWithInstance = this._deleteWithInstance;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._provisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedIops = this._provisionedIops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingConfigurationDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = undefined;
      this._category = undefined;
      this._deleteWithInstance = undefined;
      this._description = undefined;
      this._device = undefined;
      this._encrypted = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._performanceLevel = undefined;
      this._provisionedIops = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = value.autoSnapshotPolicyId;
      this._category = value.category;
      this._deleteWithInstance = value.deleteWithInstance;
      this._description = value.description;
      this._device = value.device;
      this._encrypted = value.encrypted;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._performanceLevel = value.performanceLevel;
      this._provisionedIops = value.provisionedIops;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
    }
  }

  // auto_snapshot_policy_id - computed: false, optional: true, required: false
  private _autoSnapshotPolicyId?: string; 
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }
  public set autoSnapshotPolicyId(value: string) {
    this._autoSnapshotPolicyId = value;
  }
  public resetAutoSnapshotPolicyId() {
    this._autoSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotPolicyIdInput() {
    return this._autoSnapshotPolicyId;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // delete_with_instance - computed: false, optional: true, required: false
  private _deleteWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }
  public set deleteWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteWithInstance = value;
  }
  public resetDeleteWithInstance() {
    this._deleteWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWithInstanceInput() {
    return this._deleteWithInstance;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // name - computed: false, optional: true, required: false
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

  // performance_level - computed: false, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // provisioned_iops - computed: false, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
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

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class EssScalingConfigurationDataDiskList extends cdktf.ComplexList {
  public internalValue? : EssScalingConfigurationDataDisk[] | cdktf.IResolvable

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
  public get(index: number): EssScalingConfigurationDataDiskOutputReference {
    return new EssScalingConfigurationDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingConfigurationInstancePatternInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#architectures EssScalingConfiguration#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#burstable_performance EssScalingConfiguration#burstable_performance}
  */
  readonly burstablePerformance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#cores EssScalingConfiguration#cores}
  */
  readonly cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#cpu_architectures EssScalingConfiguration#cpu_architectures}
  */
  readonly cpuArchitectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#excluded_instance_types EssScalingConfiguration#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#gpu_specs EssScalingConfiguration#gpu_specs}
  */
  readonly gpuSpecs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_categories EssScalingConfiguration#instance_categories}
  */
  readonly instanceCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_family_level EssScalingConfiguration#instance_family_level}
  */
  readonly instanceFamilyLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_type_families EssScalingConfiguration#instance_type_families}
  */
  readonly instanceTypeFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#max_price EssScalingConfiguration#max_price}
  */
  readonly maxPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#maximum_cpu_core_count EssScalingConfiguration#maximum_cpu_core_count}
  */
  readonly maximumCpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#maximum_gpu_amount EssScalingConfiguration#maximum_gpu_amount}
  */
  readonly maximumGpuAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#maximum_memory_size EssScalingConfiguration#maximum_memory_size}
  */
  readonly maximumMemorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#memory EssScalingConfiguration#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#minimum_baseline_credit EssScalingConfiguration#minimum_baseline_credit}
  */
  readonly minimumBaselineCredit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#minimum_cpu_core_count EssScalingConfiguration#minimum_cpu_core_count}
  */
  readonly minimumCpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#minimum_eni_ipv6_address_quantity EssScalingConfiguration#minimum_eni_ipv6_address_quantity}
  */
  readonly minimumEniIpv6AddressQuantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#minimum_eni_private_ip_address_quantity EssScalingConfiguration#minimum_eni_private_ip_address_quantity}
  */
  readonly minimumEniPrivateIpAddressQuantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#minimum_eni_quantity EssScalingConfiguration#minimum_eni_quantity}
  */
  readonly minimumEniQuantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#minimum_gpu_amount EssScalingConfiguration#minimum_gpu_amount}
  */
  readonly minimumGpuAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#minimum_initial_credit EssScalingConfiguration#minimum_initial_credit}
  */
  readonly minimumInitialCredit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#minimum_memory_size EssScalingConfiguration#minimum_memory_size}
  */
  readonly minimumMemorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#physical_processor_models EssScalingConfiguration#physical_processor_models}
  */
  readonly physicalProcessorModels?: string[];
}

export function essScalingConfigurationInstancePatternInfoToTerraform(struct?: EssScalingConfigurationInstancePatternInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
    burstable_performance: cdktf.stringToTerraform(struct!.burstablePerformance),
    cores: cdktf.numberToTerraform(struct!.cores),
    cpu_architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cpuArchitectures),
    excluded_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedInstanceTypes),
    gpu_specs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gpuSpecs),
    instance_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceCategories),
    instance_family_level: cdktf.stringToTerraform(struct!.instanceFamilyLevel),
    instance_type_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypeFamilies),
    max_price: cdktf.numberToTerraform(struct!.maxPrice),
    maximum_cpu_core_count: cdktf.numberToTerraform(struct!.maximumCpuCoreCount),
    maximum_gpu_amount: cdktf.numberToTerraform(struct!.maximumGpuAmount),
    maximum_memory_size: cdktf.numberToTerraform(struct!.maximumMemorySize),
    memory: cdktf.numberToTerraform(struct!.memory),
    minimum_baseline_credit: cdktf.numberToTerraform(struct!.minimumBaselineCredit),
    minimum_cpu_core_count: cdktf.numberToTerraform(struct!.minimumCpuCoreCount),
    minimum_eni_ipv6_address_quantity: cdktf.numberToTerraform(struct!.minimumEniIpv6AddressQuantity),
    minimum_eni_private_ip_address_quantity: cdktf.numberToTerraform(struct!.minimumEniPrivateIpAddressQuantity),
    minimum_eni_quantity: cdktf.numberToTerraform(struct!.minimumEniQuantity),
    minimum_gpu_amount: cdktf.numberToTerraform(struct!.minimumGpuAmount),
    minimum_initial_credit: cdktf.numberToTerraform(struct!.minimumInitialCredit),
    minimum_memory_size: cdktf.numberToTerraform(struct!.minimumMemorySize),
    physical_processor_models: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.physicalProcessorModels),
  }
}


export function essScalingConfigurationInstancePatternInfoToHclTerraform(struct?: EssScalingConfigurationInstancePatternInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architectures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    burstable_performance: {
      value: cdktf.stringToHclTerraform(struct!.burstablePerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_architectures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cpuArchitectures),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gpu_specs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gpuSpecs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceCategories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_family_level: {
      value: cdktf.stringToHclTerraform(struct!.instanceFamilyLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypeFamilies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_price: {
      value: cdktf.numberToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_cpu_core_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumCpuCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_gpu_amount: {
      value: cdktf.numberToHclTerraform(struct!.maximumGpuAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_memory_size: {
      value: cdktf.numberToHclTerraform(struct!.maximumMemorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_baseline_credit: {
      value: cdktf.numberToHclTerraform(struct!.minimumBaselineCredit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_cpu_core_count: {
      value: cdktf.numberToHclTerraform(struct!.minimumCpuCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_eni_ipv6_address_quantity: {
      value: cdktf.numberToHclTerraform(struct!.minimumEniIpv6AddressQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_eni_private_ip_address_quantity: {
      value: cdktf.numberToHclTerraform(struct!.minimumEniPrivateIpAddressQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_eni_quantity: {
      value: cdktf.numberToHclTerraform(struct!.minimumEniQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_gpu_amount: {
      value: cdktf.numberToHclTerraform(struct!.minimumGpuAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_initial_credit: {
      value: cdktf.numberToHclTerraform(struct!.minimumInitialCredit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_memory_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumMemorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    physical_processor_models: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.physicalProcessorModels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingConfigurationInstancePatternInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingConfigurationInstancePatternInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._burstablePerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstablePerformance = this._burstablePerformance;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._cpuArchitectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuArchitectures = this._cpuArchitectures;
    }
    if (this._excludedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
    }
    if (this._gpuSpecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSpecs = this._gpuSpecs;
    }
    if (this._instanceCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCategories = this._instanceCategories;
    }
    if (this._instanceFamilyLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceFamilyLevel = this._instanceFamilyLevel;
    }
    if (this._instanceTypeFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypeFamilies = this._instanceTypeFamilies;
    }
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    if (this._maximumCpuCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCpuCoreCount = this._maximumCpuCoreCount;
    }
    if (this._maximumGpuAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumGpuAmount = this._maximumGpuAmount;
    }
    if (this._maximumMemorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumMemorySize = this._maximumMemorySize;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._minimumBaselineCredit !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBaselineCredit = this._minimumBaselineCredit;
    }
    if (this._minimumCpuCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCpuCoreCount = this._minimumCpuCoreCount;
    }
    if (this._minimumEniIpv6AddressQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumEniIpv6AddressQuantity = this._minimumEniIpv6AddressQuantity;
    }
    if (this._minimumEniPrivateIpAddressQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumEniPrivateIpAddressQuantity = this._minimumEniPrivateIpAddressQuantity;
    }
    if (this._minimumEniQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumEniQuantity = this._minimumEniQuantity;
    }
    if (this._minimumGpuAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumGpuAmount = this._minimumGpuAmount;
    }
    if (this._minimumInitialCredit !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInitialCredit = this._minimumInitialCredit;
    }
    if (this._minimumMemorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumMemorySize = this._minimumMemorySize;
    }
    if (this._physicalProcessorModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalProcessorModels = this._physicalProcessorModels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingConfigurationInstancePatternInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architectures = undefined;
      this._burstablePerformance = undefined;
      this._cores = undefined;
      this._cpuArchitectures = undefined;
      this._excludedInstanceTypes = undefined;
      this._gpuSpecs = undefined;
      this._instanceCategories = undefined;
      this._instanceFamilyLevel = undefined;
      this._instanceTypeFamilies = undefined;
      this._maxPrice = undefined;
      this._maximumCpuCoreCount = undefined;
      this._maximumGpuAmount = undefined;
      this._maximumMemorySize = undefined;
      this._memory = undefined;
      this._minimumBaselineCredit = undefined;
      this._minimumCpuCoreCount = undefined;
      this._minimumEniIpv6AddressQuantity = undefined;
      this._minimumEniPrivateIpAddressQuantity = undefined;
      this._minimumEniQuantity = undefined;
      this._minimumGpuAmount = undefined;
      this._minimumInitialCredit = undefined;
      this._minimumMemorySize = undefined;
      this._physicalProcessorModels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architectures = value.architectures;
      this._burstablePerformance = value.burstablePerformance;
      this._cores = value.cores;
      this._cpuArchitectures = value.cpuArchitectures;
      this._excludedInstanceTypes = value.excludedInstanceTypes;
      this._gpuSpecs = value.gpuSpecs;
      this._instanceCategories = value.instanceCategories;
      this._instanceFamilyLevel = value.instanceFamilyLevel;
      this._instanceTypeFamilies = value.instanceTypeFamilies;
      this._maxPrice = value.maxPrice;
      this._maximumCpuCoreCount = value.maximumCpuCoreCount;
      this._maximumGpuAmount = value.maximumGpuAmount;
      this._maximumMemorySize = value.maximumMemorySize;
      this._memory = value.memory;
      this._minimumBaselineCredit = value.minimumBaselineCredit;
      this._minimumCpuCoreCount = value.minimumCpuCoreCount;
      this._minimumEniIpv6AddressQuantity = value.minimumEniIpv6AddressQuantity;
      this._minimumEniPrivateIpAddressQuantity = value.minimumEniPrivateIpAddressQuantity;
      this._minimumEniQuantity = value.minimumEniQuantity;
      this._minimumGpuAmount = value.minimumGpuAmount;
      this._minimumInitialCredit = value.minimumInitialCredit;
      this._minimumMemorySize = value.minimumMemorySize;
      this._physicalProcessorModels = value.physicalProcessorModels;
    }
  }

  // architectures - computed: false, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return this.getListAttribute('architectures');
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // burstable_performance - computed: true, optional: true, required: false
  private _burstablePerformance?: string; 
  public get burstablePerformance() {
    return this.getStringAttribute('burstable_performance');
  }
  public set burstablePerformance(value: string) {
    this._burstablePerformance = value;
  }
  public resetBurstablePerformance() {
    this._burstablePerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstablePerformanceInput() {
    return this._burstablePerformance;
  }

  // cores - computed: false, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // cpu_architectures - computed: false, optional: true, required: false
  private _cpuArchitectures?: string[]; 
  public get cpuArchitectures() {
    return cdktf.Fn.tolist(this.getListAttribute('cpu_architectures'));
  }
  public set cpuArchitectures(value: string[]) {
    this._cpuArchitectures = value;
  }
  public resetCpuArchitectures() {
    this._cpuArchitectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuArchitecturesInput() {
    return this._cpuArchitectures;
  }

  // excluded_instance_types - computed: false, optional: true, required: false
  private _excludedInstanceTypes?: string[]; 
  public get excludedInstanceTypes() {
    return this.getListAttribute('excluded_instance_types');
  }
  public set excludedInstanceTypes(value: string[]) {
    this._excludedInstanceTypes = value;
  }
  public resetExcludedInstanceTypes() {
    this._excludedInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInstanceTypesInput() {
    return this._excludedInstanceTypes;
  }

  // gpu_specs - computed: false, optional: true, required: false
  private _gpuSpecs?: string[]; 
  public get gpuSpecs() {
    return cdktf.Fn.tolist(this.getListAttribute('gpu_specs'));
  }
  public set gpuSpecs(value: string[]) {
    this._gpuSpecs = value;
  }
  public resetGpuSpecs() {
    this._gpuSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSpecsInput() {
    return this._gpuSpecs;
  }

  // instance_categories - computed: false, optional: true, required: false
  private _instanceCategories?: string[]; 
  public get instanceCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_categories'));
  }
  public set instanceCategories(value: string[]) {
    this._instanceCategories = value;
  }
  public resetInstanceCategories() {
    this._instanceCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCategoriesInput() {
    return this._instanceCategories;
  }

  // instance_family_level - computed: false, optional: true, required: false
  private _instanceFamilyLevel?: string; 
  public get instanceFamilyLevel() {
    return this.getStringAttribute('instance_family_level');
  }
  public set instanceFamilyLevel(value: string) {
    this._instanceFamilyLevel = value;
  }
  public resetInstanceFamilyLevel() {
    this._instanceFamilyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFamilyLevelInput() {
    return this._instanceFamilyLevel;
  }

  // instance_type_families - computed: false, optional: true, required: false
  private _instanceTypeFamilies?: string[]; 
  public get instanceTypeFamilies() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_type_families'));
  }
  public set instanceTypeFamilies(value: string[]) {
    this._instanceTypeFamilies = value;
  }
  public resetInstanceTypeFamilies() {
    this._instanceTypeFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeFamiliesInput() {
    return this._instanceTypeFamilies;
  }

  // max_price - computed: false, optional: true, required: false
  private _maxPrice?: number; 
  public get maxPrice() {
    return this.getNumberAttribute('max_price');
  }
  public set maxPrice(value: number) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // maximum_cpu_core_count - computed: false, optional: true, required: false
  private _maximumCpuCoreCount?: number; 
  public get maximumCpuCoreCount() {
    return this.getNumberAttribute('maximum_cpu_core_count');
  }
  public set maximumCpuCoreCount(value: number) {
    this._maximumCpuCoreCount = value;
  }
  public resetMaximumCpuCoreCount() {
    this._maximumCpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCpuCoreCountInput() {
    return this._maximumCpuCoreCount;
  }

  // maximum_gpu_amount - computed: false, optional: true, required: false
  private _maximumGpuAmount?: number; 
  public get maximumGpuAmount() {
    return this.getNumberAttribute('maximum_gpu_amount');
  }
  public set maximumGpuAmount(value: number) {
    this._maximumGpuAmount = value;
  }
  public resetMaximumGpuAmount() {
    this._maximumGpuAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumGpuAmountInput() {
    return this._maximumGpuAmount;
  }

  // maximum_memory_size - computed: false, optional: true, required: false
  private _maximumMemorySize?: number; 
  public get maximumMemorySize() {
    return this.getNumberAttribute('maximum_memory_size');
  }
  public set maximumMemorySize(value: number) {
    this._maximumMemorySize = value;
  }
  public resetMaximumMemorySize() {
    this._maximumMemorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMemorySizeInput() {
    return this._maximumMemorySize;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // minimum_baseline_credit - computed: false, optional: true, required: false
  private _minimumBaselineCredit?: number; 
  public get minimumBaselineCredit() {
    return this.getNumberAttribute('minimum_baseline_credit');
  }
  public set minimumBaselineCredit(value: number) {
    this._minimumBaselineCredit = value;
  }
  public resetMinimumBaselineCredit() {
    this._minimumBaselineCredit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBaselineCreditInput() {
    return this._minimumBaselineCredit;
  }

  // minimum_cpu_core_count - computed: false, optional: true, required: false
  private _minimumCpuCoreCount?: number; 
  public get minimumCpuCoreCount() {
    return this.getNumberAttribute('minimum_cpu_core_count');
  }
  public set minimumCpuCoreCount(value: number) {
    this._minimumCpuCoreCount = value;
  }
  public resetMinimumCpuCoreCount() {
    this._minimumCpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCpuCoreCountInput() {
    return this._minimumCpuCoreCount;
  }

  // minimum_eni_ipv6_address_quantity - computed: false, optional: true, required: false
  private _minimumEniIpv6AddressQuantity?: number; 
  public get minimumEniIpv6AddressQuantity() {
    return this.getNumberAttribute('minimum_eni_ipv6_address_quantity');
  }
  public set minimumEniIpv6AddressQuantity(value: number) {
    this._minimumEniIpv6AddressQuantity = value;
  }
  public resetMinimumEniIpv6AddressQuantity() {
    this._minimumEniIpv6AddressQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEniIpv6AddressQuantityInput() {
    return this._minimumEniIpv6AddressQuantity;
  }

  // minimum_eni_private_ip_address_quantity - computed: false, optional: true, required: false
  private _minimumEniPrivateIpAddressQuantity?: number; 
  public get minimumEniPrivateIpAddressQuantity() {
    return this.getNumberAttribute('minimum_eni_private_ip_address_quantity');
  }
  public set minimumEniPrivateIpAddressQuantity(value: number) {
    this._minimumEniPrivateIpAddressQuantity = value;
  }
  public resetMinimumEniPrivateIpAddressQuantity() {
    this._minimumEniPrivateIpAddressQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEniPrivateIpAddressQuantityInput() {
    return this._minimumEniPrivateIpAddressQuantity;
  }

  // minimum_eni_quantity - computed: false, optional: true, required: false
  private _minimumEniQuantity?: number; 
  public get minimumEniQuantity() {
    return this.getNumberAttribute('minimum_eni_quantity');
  }
  public set minimumEniQuantity(value: number) {
    this._minimumEniQuantity = value;
  }
  public resetMinimumEniQuantity() {
    this._minimumEniQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEniQuantityInput() {
    return this._minimumEniQuantity;
  }

  // minimum_gpu_amount - computed: false, optional: true, required: false
  private _minimumGpuAmount?: number; 
  public get minimumGpuAmount() {
    return this.getNumberAttribute('minimum_gpu_amount');
  }
  public set minimumGpuAmount(value: number) {
    this._minimumGpuAmount = value;
  }
  public resetMinimumGpuAmount() {
    this._minimumGpuAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumGpuAmountInput() {
    return this._minimumGpuAmount;
  }

  // minimum_initial_credit - computed: false, optional: true, required: false
  private _minimumInitialCredit?: number; 
  public get minimumInitialCredit() {
    return this.getNumberAttribute('minimum_initial_credit');
  }
  public set minimumInitialCredit(value: number) {
    this._minimumInitialCredit = value;
  }
  public resetMinimumInitialCredit() {
    this._minimumInitialCredit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInitialCreditInput() {
    return this._minimumInitialCredit;
  }

  // minimum_memory_size - computed: false, optional: true, required: false
  private _minimumMemorySize?: number; 
  public get minimumMemorySize() {
    return this.getNumberAttribute('minimum_memory_size');
  }
  public set minimumMemorySize(value: number) {
    this._minimumMemorySize = value;
  }
  public resetMinimumMemorySize() {
    this._minimumMemorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumMemorySizeInput() {
    return this._minimumMemorySize;
  }

  // physical_processor_models - computed: false, optional: true, required: false
  private _physicalProcessorModels?: string[]; 
  public get physicalProcessorModels() {
    return cdktf.Fn.tolist(this.getListAttribute('physical_processor_models'));
  }
  public set physicalProcessorModels(value: string[]) {
    this._physicalProcessorModels = value;
  }
  public resetPhysicalProcessorModels() {
    this._physicalProcessorModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalProcessorModelsInput() {
    return this._physicalProcessorModels;
  }
}

export class EssScalingConfigurationInstancePatternInfoList extends cdktf.ComplexList {
  public internalValue? : EssScalingConfigurationInstancePatternInfo[] | cdktf.IResolvable

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
  public get(index: number): EssScalingConfigurationInstancePatternInfoOutputReference {
    return new EssScalingConfigurationInstancePatternInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingConfigurationInstanceTypeOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_type EssScalingConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#weighted_capacity EssScalingConfiguration#weighted_capacity}
  */
  readonly weightedCapacity?: number;
}

export function essScalingConfigurationInstanceTypeOverrideToTerraform(struct?: EssScalingConfigurationInstanceTypeOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}


export function essScalingConfigurationInstanceTypeOverrideToHclTerraform(struct?: EssScalingConfigurationInstanceTypeOverride | cdktf.IResolvable): any {
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
    weighted_capacity: {
      value: cdktf.numberToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingConfigurationInstanceTypeOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingConfigurationInstanceTypeOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingConfigurationInstanceTypeOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._weightedCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._weightedCapacity = value.weightedCapacity;
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

  // weighted_capacity - computed: false, optional: true, required: false
  private _weightedCapacity?: number; 
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: number) {
    this._weightedCapacity = value;
  }
  public resetWeightedCapacity() {
    this._weightedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }
}

export class EssScalingConfigurationInstanceTypeOverrideList extends cdktf.ComplexList {
  public internalValue? : EssScalingConfigurationInstanceTypeOverride[] | cdktf.IResolvable

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
  public get(index: number): EssScalingConfigurationInstanceTypeOverrideOutputReference {
    return new EssScalingConfigurationInstanceTypeOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingConfigurationNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_type EssScalingConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#ipv6_address_count EssScalingConfiguration#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#network_interface_traffic_mode EssScalingConfiguration#network_interface_traffic_mode}
  */
  readonly networkInterfaceTrafficMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#security_group_ids EssScalingConfiguration#security_group_ids}
  */
  readonly securityGroupIds?: string[];
}

export function essScalingConfigurationNetworkInterfacesToTerraform(struct?: EssScalingConfigurationNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    network_interface_traffic_mode: cdktf.stringToTerraform(struct!.networkInterfaceTrafficMode),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function essScalingConfigurationNetworkInterfacesToHclTerraform(struct?: EssScalingConfigurationNetworkInterfaces | cdktf.IResolvable): any {
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
    ipv6_address_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_interface_traffic_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceTrafficMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingConfigurationNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingConfigurationNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._ipv6AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
    }
    if (this._networkInterfaceTrafficMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceTrafficMode = this._networkInterfaceTrafficMode;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingConfigurationNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._ipv6AddressCount = undefined;
      this._networkInterfaceTrafficMode = undefined;
      this._securityGroupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._ipv6AddressCount = value.ipv6AddressCount;
      this._networkInterfaceTrafficMode = value.networkInterfaceTrafficMode;
      this._securityGroupIds = value.securityGroupIds;
    }
  }

  // instance_type - computed: true, optional: true, required: false
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

  // ipv6_address_count - computed: false, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // network_interface_traffic_mode - computed: true, optional: true, required: false
  private _networkInterfaceTrafficMode?: string; 
  public get networkInterfaceTrafficMode() {
    return this.getStringAttribute('network_interface_traffic_mode');
  }
  public set networkInterfaceTrafficMode(value: string) {
    this._networkInterfaceTrafficMode = value;
  }
  public resetNetworkInterfaceTrafficMode() {
    this._networkInterfaceTrafficMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceTrafficModeInput() {
    return this._networkInterfaceTrafficMode;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }
}

export class EssScalingConfigurationNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : EssScalingConfigurationNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EssScalingConfigurationNetworkInterfacesOutputReference {
    return new EssScalingConfigurationNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingConfigurationSpotPriceLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#instance_type EssScalingConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#price_limit EssScalingConfiguration#price_limit}
  */
  readonly priceLimit?: number;
}

export function essScalingConfigurationSpotPriceLimitToTerraform(struct?: EssScalingConfigurationSpotPriceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    price_limit: cdktf.numberToTerraform(struct!.priceLimit),
  }
}


export function essScalingConfigurationSpotPriceLimitToHclTerraform(struct?: EssScalingConfigurationSpotPriceLimit | cdktf.IResolvable): any {
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
    price_limit: {
      value: cdktf.numberToHclTerraform(struct!.priceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingConfigurationSpotPriceLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingConfigurationSpotPriceLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._priceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.priceLimit = this._priceLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingConfigurationSpotPriceLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._priceLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._priceLimit = value.priceLimit;
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

  // price_limit - computed: false, optional: true, required: false
  private _priceLimit?: number; 
  public get priceLimit() {
    return this.getNumberAttribute('price_limit');
  }
  public set priceLimit(value: number) {
    this._priceLimit = value;
  }
  public resetPriceLimit() {
    this._priceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceLimitInput() {
    return this._priceLimit;
  }
}

export class EssScalingConfigurationSpotPriceLimitList extends cdktf.ComplexList {
  public internalValue? : EssScalingConfigurationSpotPriceLimit[] | cdktf.IResolvable

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
  public get(index: number): EssScalingConfigurationSpotPriceLimitOutputReference {
    return new EssScalingConfigurationSpotPriceLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#create EssScalingConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#delete EssScalingConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#update EssScalingConfiguration#update}
  */
  readonly update?: string;
}

export function essScalingConfigurationTimeoutsToTerraform(struct?: EssScalingConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function essScalingConfigurationTimeoutsToHclTerraform(struct?: EssScalingConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EssScalingConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration alicloud_ess_scaling_configuration}
*/
export class EssScalingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_scaling_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssScalingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssScalingConfiguration to import
  * @param importFromId The id of the existing EssScalingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssScalingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_scaling_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ess_scaling_configuration alicloud_ess_scaling_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssScalingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EssScalingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_scaling_configuration',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._creditSpecification = config.creditSpecification;
    this._dedicatedHostClusterId = config.dedicatedHostClusterId;
    this._deletionProtection = config.deletionProtection;
    this._enable = config.enable;
    this._forceDelete = config.forceDelete;
    this._hostName = config.hostName;
    this._httpEndpoint = config.httpEndpoint;
    this._id = config.id;
    this._imageId = config.imageId;
    this._imageName = config.imageName;
    this._imageOptionsLoginAsNonRoot = config.imageOptionsLoginAsNonRoot;
    this._instanceDescription = config.instanceDescription;
    this._instanceIds = config.instanceIds;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._instanceTypes = config.instanceTypes;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthIn = config.internetMaxBandwidthIn;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._ioOptimized = config.ioOptimized;
    this._isOutdated = config.isOutdated;
    this._keyName = config.keyName;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._override = config.override;
    this._password = config.password;
    this._passwordInherit = config.passwordInherit;
    this._resourceGroupId = config.resourceGroupId;
    this._roleName = config.roleName;
    this._scalingConfigurationName = config.scalingConfigurationName;
    this._scalingGroupId = config.scalingGroupId;
    this._securityEnhancementStrategy = config.securityEnhancementStrategy;
    this._securityGroupId = config.securityGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._spotDuration = config.spotDuration;
    this._spotStrategy = config.spotStrategy;
    this._substitute = config.substitute;
    this._systemDiskAutoSnapshotPolicyId = config.systemDiskAutoSnapshotPolicyId;
    this._systemDiskCategory = config.systemDiskCategory;
    this._systemDiskDescription = config.systemDiskDescription;
    this._systemDiskEncryptAlgorithm = config.systemDiskEncryptAlgorithm;
    this._systemDiskEncrypted = config.systemDiskEncrypted;
    this._systemDiskKmsKeyId = config.systemDiskKmsKeyId;
    this._systemDiskName = config.systemDiskName;
    this._systemDiskPerformanceLevel = config.systemDiskPerformanceLevel;
    this._systemDiskProvisionedIops = config.systemDiskProvisionedIops;
    this._systemDiskSize = config.systemDiskSize;
    this._tags = config.tags;
    this._userData = config.userData;
    this._customPriorities.internalValue = config.customPriorities;
    this._dataDisk.internalValue = config.dataDisk;
    this._instancePatternInfo.internalValue = config.instancePatternInfo;
    this._instanceTypeOverride.internalValue = config.instanceTypeOverride;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._spotPriceLimit.internalValue = config.spotPriceLimit;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification?: string; 
  public get creditSpecification() {
    return this.getStringAttribute('credit_specification');
  }
  public set creditSpecification(value: string) {
    this._creditSpecification = value;
  }
  public resetCreditSpecification() {
    this._creditSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditSpecificationInput() {
    return this._creditSpecification;
  }

  // dedicated_host_cluster_id - computed: false, optional: true, required: false
  private _dedicatedHostClusterId?: string; 
  public get dedicatedHostClusterId() {
    return this.getStringAttribute('dedicated_host_cluster_id');
  }
  public set dedicatedHostClusterId(value: string) {
    this._dedicatedHostClusterId = value;
  }
  public resetDedicatedHostClusterId() {
    this._dedicatedHostClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostClusterIdInput() {
    return this._dedicatedHostClusterId;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http_endpoint - computed: false, optional: true, required: false
  private _httpEndpoint?: string; 
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_options_login_as_non_root - computed: false, optional: true, required: false
  private _imageOptionsLoginAsNonRoot?: boolean | cdktf.IResolvable; 
  public get imageOptionsLoginAsNonRoot() {
    return this.getBooleanAttribute('image_options_login_as_non_root');
  }
  public set imageOptionsLoginAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._imageOptionsLoginAsNonRoot = value;
  }
  public resetImageOptionsLoginAsNonRoot() {
    this._imageOptionsLoginAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptionsLoginAsNonRootInput() {
    return this._imageOptionsLoginAsNonRoot;
  }

  // instance_description - computed: false, optional: true, required: false
  private _instanceDescription?: string; 
  public get instanceDescription() {
    return this.getStringAttribute('instance_description');
  }
  public set instanceDescription(value: string) {
    this._instanceDescription = value;
  }
  public resetInstanceDescription() {
    this._instanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDescriptionInput() {
    return this._instanceDescription;
  }

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_in - computed: false, optional: true, required: false
  private _internetMaxBandwidthIn?: number; 
  public get internetMaxBandwidthIn() {
    return this.getNumberAttribute('internet_max_bandwidth_in');
  }
  public set internetMaxBandwidthIn(value: number) {
    this._internetMaxBandwidthIn = value;
  }
  public resetInternetMaxBandwidthIn() {
    this._internetMaxBandwidthIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthInInput() {
    return this._internetMaxBandwidthIn;
  }

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // io_optimized - computed: false, optional: true, required: false
  private _ioOptimized?: string; 
  public get ioOptimized() {
    return this.getStringAttribute('io_optimized');
  }
  public set ioOptimized(value: string) {
    this._ioOptimized = value;
  }
  public resetIoOptimized() {
    this._ioOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioOptimizedInput() {
    return this._ioOptimized;
  }

  // is_outdated - computed: false, optional: true, required: false
  private _isOutdated?: boolean | cdktf.IResolvable; 
  public get isOutdated() {
    return this.getBooleanAttribute('is_outdated');
  }
  public set isOutdated(value: boolean | cdktf.IResolvable) {
    this._isOutdated = value;
  }
  public resetIsOutdated() {
    this._isOutdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOutdatedInput() {
    return this._isOutdated;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // kms_encrypted_password - computed: false, optional: true, required: false
  private _kmsEncryptedPassword?: string; 
  public get kmsEncryptedPassword() {
    return this.getStringAttribute('kms_encrypted_password');
  }
  public set kmsEncryptedPassword(value: string) {
    this._kmsEncryptedPassword = value;
  }
  public resetKmsEncryptedPassword() {
    this._kmsEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedPasswordInput() {
    return this._kmsEncryptedPassword;
  }

  // kms_encryption_context - computed: false, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string }; 
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_inherit - computed: false, optional: true, required: false
  private _passwordInherit?: boolean | cdktf.IResolvable; 
  public get passwordInherit() {
    return this.getBooleanAttribute('password_inherit');
  }
  public set passwordInherit(value: boolean | cdktf.IResolvable) {
    this._passwordInherit = value;
  }
  public resetPasswordInherit() {
    this._passwordInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInheritInput() {
    return this._passwordInherit;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // scaling_configuration_name - computed: true, optional: true, required: false
  private _scalingConfigurationName?: string; 
  public get scalingConfigurationName() {
    return this.getStringAttribute('scaling_configuration_name');
  }
  public set scalingConfigurationName(value: string) {
    this._scalingConfigurationName = value;
  }
  public resetScalingConfigurationName() {
    this._scalingConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationNameInput() {
    return this._scalingConfigurationName;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // security_enhancement_strategy - computed: false, optional: true, required: false
  private _securityEnhancementStrategy?: string; 
  public get securityEnhancementStrategy() {
    return this.getStringAttribute('security_enhancement_strategy');
  }
  public set securityEnhancementStrategy(value: string) {
    this._securityEnhancementStrategy = value;
  }
  public resetSecurityEnhancementStrategy() {
    this._securityEnhancementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEnhancementStrategyInput() {
    return this._securityEnhancementStrategy;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // spot_duration - computed: false, optional: true, required: false
  private _spotDuration?: number; 
  public get spotDuration() {
    return this.getNumberAttribute('spot_duration');
  }
  public set spotDuration(value: number) {
    this._spotDuration = value;
  }
  public resetSpotDuration() {
    this._spotDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDurationInput() {
    return this._spotDuration;
  }

  // spot_strategy - computed: false, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // substitute - computed: true, optional: true, required: false
  private _substitute?: string; 
  public get substitute() {
    return this.getStringAttribute('substitute');
  }
  public set substitute(value: string) {
    this._substitute = value;
  }
  public resetSubstitute() {
    this._substitute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteInput() {
    return this._substitute;
  }

  // system_disk_auto_snapshot_policy_id - computed: false, optional: true, required: false
  private _systemDiskAutoSnapshotPolicyId?: string; 
  public get systemDiskAutoSnapshotPolicyId() {
    return this.getStringAttribute('system_disk_auto_snapshot_policy_id');
  }
  public set systemDiskAutoSnapshotPolicyId(value: string) {
    this._systemDiskAutoSnapshotPolicyId = value;
  }
  public resetSystemDiskAutoSnapshotPolicyId() {
    this._systemDiskAutoSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskAutoSnapshotPolicyIdInput() {
    return this._systemDiskAutoSnapshotPolicyId;
  }

  // system_disk_category - computed: false, optional: true, required: false
  private _systemDiskCategory?: string; 
  public get systemDiskCategory() {
    return this.getStringAttribute('system_disk_category');
  }
  public set systemDiskCategory(value: string) {
    this._systemDiskCategory = value;
  }
  public resetSystemDiskCategory() {
    this._systemDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskCategoryInput() {
    return this._systemDiskCategory;
  }

  // system_disk_description - computed: false, optional: true, required: false
  private _systemDiskDescription?: string; 
  public get systemDiskDescription() {
    return this.getStringAttribute('system_disk_description');
  }
  public set systemDiskDescription(value: string) {
    this._systemDiskDescription = value;
  }
  public resetSystemDiskDescription() {
    this._systemDiskDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskDescriptionInput() {
    return this._systemDiskDescription;
  }

  // system_disk_encrypt_algorithm - computed: false, optional: true, required: false
  private _systemDiskEncryptAlgorithm?: string; 
  public get systemDiskEncryptAlgorithm() {
    return this.getStringAttribute('system_disk_encrypt_algorithm');
  }
  public set systemDiskEncryptAlgorithm(value: string) {
    this._systemDiskEncryptAlgorithm = value;
  }
  public resetSystemDiskEncryptAlgorithm() {
    this._systemDiskEncryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskEncryptAlgorithmInput() {
    return this._systemDiskEncryptAlgorithm;
  }

  // system_disk_encrypted - computed: false, optional: true, required: false
  private _systemDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get systemDiskEncrypted() {
    return this.getBooleanAttribute('system_disk_encrypted');
  }
  public set systemDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._systemDiskEncrypted = value;
  }
  public resetSystemDiskEncrypted() {
    this._systemDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskEncryptedInput() {
    return this._systemDiskEncrypted;
  }

  // system_disk_kms_key_id - computed: false, optional: true, required: false
  private _systemDiskKmsKeyId?: string; 
  public get systemDiskKmsKeyId() {
    return this.getStringAttribute('system_disk_kms_key_id');
  }
  public set systemDiskKmsKeyId(value: string) {
    this._systemDiskKmsKeyId = value;
  }
  public resetSystemDiskKmsKeyId() {
    this._systemDiskKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskKmsKeyIdInput() {
    return this._systemDiskKmsKeyId;
  }

  // system_disk_name - computed: false, optional: true, required: false
  private _systemDiskName?: string; 
  public get systemDiskName() {
    return this.getStringAttribute('system_disk_name');
  }
  public set systemDiskName(value: string) {
    this._systemDiskName = value;
  }
  public resetSystemDiskName() {
    this._systemDiskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskNameInput() {
    return this._systemDiskName;
  }

  // system_disk_performance_level - computed: false, optional: true, required: false
  private _systemDiskPerformanceLevel?: string; 
  public get systemDiskPerformanceLevel() {
    return this.getStringAttribute('system_disk_performance_level');
  }
  public set systemDiskPerformanceLevel(value: string) {
    this._systemDiskPerformanceLevel = value;
  }
  public resetSystemDiskPerformanceLevel() {
    this._systemDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskPerformanceLevelInput() {
    return this._systemDiskPerformanceLevel;
  }

  // system_disk_provisioned_iops - computed: false, optional: true, required: false
  private _systemDiskProvisionedIops?: number; 
  public get systemDiskProvisionedIops() {
    return this.getNumberAttribute('system_disk_provisioned_iops');
  }
  public set systemDiskProvisionedIops(value: number) {
    this._systemDiskProvisionedIops = value;
  }
  public resetSystemDiskProvisionedIops() {
    this._systemDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskProvisionedIopsInput() {
    return this._systemDiskProvisionedIops;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
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

  // custom_priorities - computed: false, optional: true, required: false
  private _customPriorities = new EssScalingConfigurationCustomPrioritiesList(this, "custom_priorities", true);
  public get customPriorities() {
    return this._customPriorities;
  }
  public putCustomPriorities(value: EssScalingConfigurationCustomPriorities[] | cdktf.IResolvable) {
    this._customPriorities.internalValue = value;
  }
  public resetCustomPriorities() {
    this._customPriorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPrioritiesInput() {
    return this._customPriorities.internalValue;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new EssScalingConfigurationDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: EssScalingConfigurationDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // instance_pattern_info - computed: false, optional: true, required: false
  private _instancePatternInfo = new EssScalingConfigurationInstancePatternInfoList(this, "instance_pattern_info", true);
  public get instancePatternInfo() {
    return this._instancePatternInfo;
  }
  public putInstancePatternInfo(value: EssScalingConfigurationInstancePatternInfo[] | cdktf.IResolvable) {
    this._instancePatternInfo.internalValue = value;
  }
  public resetInstancePatternInfo() {
    this._instancePatternInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePatternInfoInput() {
    return this._instancePatternInfo.internalValue;
  }

  // instance_type_override - computed: false, optional: true, required: false
  private _instanceTypeOverride = new EssScalingConfigurationInstanceTypeOverrideList(this, "instance_type_override", true);
  public get instanceTypeOverride() {
    return this._instanceTypeOverride;
  }
  public putInstanceTypeOverride(value: EssScalingConfigurationInstanceTypeOverride[] | cdktf.IResolvable) {
    this._instanceTypeOverride.internalValue = value;
  }
  public resetInstanceTypeOverride() {
    this._instanceTypeOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeOverrideInput() {
    return this._instanceTypeOverride.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new EssScalingConfigurationNetworkInterfacesList(this, "network_interfaces", true);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: EssScalingConfigurationNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // spot_price_limit - computed: false, optional: true, required: false
  private _spotPriceLimit = new EssScalingConfigurationSpotPriceLimitList(this, "spot_price_limit", true);
  public get spotPriceLimit() {
    return this._spotPriceLimit;
  }
  public putSpotPriceLimit(value: EssScalingConfigurationSpotPriceLimit[] | cdktf.IResolvable) {
    this._spotPriceLimit.internalValue = value;
  }
  public resetSpotPriceLimit() {
    this._spotPriceLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceLimitInput() {
    return this._spotPriceLimit.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EssScalingConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EssScalingConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      credit_specification: cdktf.stringToTerraform(this._creditSpecification),
      dedicated_host_cluster_id: cdktf.stringToTerraform(this._dedicatedHostClusterId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enable: cdktf.booleanToTerraform(this._enable),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      host_name: cdktf.stringToTerraform(this._hostName),
      http_endpoint: cdktf.stringToTerraform(this._httpEndpoint),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_name: cdktf.stringToTerraform(this._imageName),
      image_options_login_as_non_root: cdktf.booleanToTerraform(this._imageOptionsLoginAsNonRoot),
      instance_description: cdktf.stringToTerraform(this._instanceDescription),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_in: cdktf.numberToTerraform(this._internetMaxBandwidthIn),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      io_optimized: cdktf.stringToTerraform(this._ioOptimized),
      is_outdated: cdktf.booleanToTerraform(this._isOutdated),
      key_name: cdktf.stringToTerraform(this._keyName),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      override: cdktf.booleanToTerraform(this._override),
      password: cdktf.stringToTerraform(this._password),
      password_inherit: cdktf.booleanToTerraform(this._passwordInherit),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      role_name: cdktf.stringToTerraform(this._roleName),
      scaling_configuration_name: cdktf.stringToTerraform(this._scalingConfigurationName),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      security_enhancement_strategy: cdktf.stringToTerraform(this._securityEnhancementStrategy),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      spot_duration: cdktf.numberToTerraform(this._spotDuration),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      substitute: cdktf.stringToTerraform(this._substitute),
      system_disk_auto_snapshot_policy_id: cdktf.stringToTerraform(this._systemDiskAutoSnapshotPolicyId),
      system_disk_category: cdktf.stringToTerraform(this._systemDiskCategory),
      system_disk_description: cdktf.stringToTerraform(this._systemDiskDescription),
      system_disk_encrypt_algorithm: cdktf.stringToTerraform(this._systemDiskEncryptAlgorithm),
      system_disk_encrypted: cdktf.booleanToTerraform(this._systemDiskEncrypted),
      system_disk_kms_key_id: cdktf.stringToTerraform(this._systemDiskKmsKeyId),
      system_disk_name: cdktf.stringToTerraform(this._systemDiskName),
      system_disk_performance_level: cdktf.stringToTerraform(this._systemDiskPerformanceLevel),
      system_disk_provisioned_iops: cdktf.numberToTerraform(this._systemDiskProvisionedIops),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      custom_priorities: cdktf.listMapper(essScalingConfigurationCustomPrioritiesToTerraform, true)(this._customPriorities.internalValue),
      data_disk: cdktf.listMapper(essScalingConfigurationDataDiskToTerraform, true)(this._dataDisk.internalValue),
      instance_pattern_info: cdktf.listMapper(essScalingConfigurationInstancePatternInfoToTerraform, true)(this._instancePatternInfo.internalValue),
      instance_type_override: cdktf.listMapper(essScalingConfigurationInstanceTypeOverrideToTerraform, true)(this._instanceTypeOverride.internalValue),
      network_interfaces: cdktf.listMapper(essScalingConfigurationNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
      spot_price_limit: cdktf.listMapper(essScalingConfigurationSpotPriceLimitToTerraform, true)(this._spotPriceLimit.internalValue),
      timeouts: essScalingConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credit_specification: {
        value: cdktf.stringToHclTerraform(this._creditSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_endpoint: {
        value: cdktf.stringToHclTerraform(this._httpEndpoint),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_options_login_as_non_root: {
        value: cdktf.booleanToHclTerraform(this._imageOptionsLoginAsNonRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_description: {
        value: cdktf.stringToHclTerraform(this._instanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_in: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      io_optimized: {
        value: cdktf.stringToHclTerraform(this._ioOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_outdated: {
        value: cdktf.booleanToHclTerraform(this._isOutdated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      override: {
        value: cdktf.booleanToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_inherit: {
        value: cdktf.booleanToHclTerraform(this._passwordInherit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_configuration_name: {
        value: cdktf.stringToHclTerraform(this._scalingConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_enhancement_strategy: {
        value: cdktf.stringToHclTerraform(this._securityEnhancementStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      spot_duration: {
        value: cdktf.numberToHclTerraform(this._spotDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spot_strategy: {
        value: cdktf.stringToHclTerraform(this._spotStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      substitute: {
        value: cdktf.stringToHclTerraform(this._substitute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_auto_snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._systemDiskAutoSnapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_category: {
        value: cdktf.stringToHclTerraform(this._systemDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_description: {
        value: cdktf.stringToHclTerraform(this._systemDiskDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._systemDiskEncryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_encrypted: {
        value: cdktf.booleanToHclTerraform(this._systemDiskEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_disk_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._systemDiskKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_name: {
        value: cdktf.stringToHclTerraform(this._systemDiskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._systemDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_provisioned_iops: {
        value: cdktf.numberToHclTerraform(this._systemDiskProvisionedIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_disk_size: {
        value: cdktf.numberToHclTerraform(this._systemDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_priorities: {
        value: cdktf.listMapperHcl(essScalingConfigurationCustomPrioritiesToHclTerraform, true)(this._customPriorities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssScalingConfigurationCustomPrioritiesList",
      },
      data_disk: {
        value: cdktf.listMapperHcl(essScalingConfigurationDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssScalingConfigurationDataDiskList",
      },
      instance_pattern_info: {
        value: cdktf.listMapperHcl(essScalingConfigurationInstancePatternInfoToHclTerraform, true)(this._instancePatternInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssScalingConfigurationInstancePatternInfoList",
      },
      instance_type_override: {
        value: cdktf.listMapperHcl(essScalingConfigurationInstanceTypeOverrideToHclTerraform, true)(this._instanceTypeOverride.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssScalingConfigurationInstanceTypeOverrideList",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(essScalingConfigurationNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssScalingConfigurationNetworkInterfacesList",
      },
      spot_price_limit: {
        value: cdktf.listMapperHcl(essScalingConfigurationSpotPriceLimitToHclTerraform, true)(this._spotPriceLimit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssScalingConfigurationSpotPriceLimitList",
      },
      timeouts: {
        value: essScalingConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EssScalingConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
