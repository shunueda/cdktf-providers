// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsInstanceSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#amount EcsInstanceSet#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#auto_release_time EcsInstanceSet#auto_release_time}
  */
  readonly autoReleaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#auto_renew EcsInstanceSet#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#auto_renew_period EcsInstanceSet#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#boot_check_os_with_assistant EcsInstanceSet#boot_check_os_with_assistant}
  */
  readonly bootCheckOsWithAssistant?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#dedicated_host_id EcsInstanceSet#dedicated_host_id}
  */
  readonly dedicatedHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#deletion_protection EcsInstanceSet#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#deployment_set_id EcsInstanceSet#deployment_set_id}
  */
  readonly deploymentSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#description EcsInstanceSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#host_name EcsInstanceSet#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#hpc_cluster_id EcsInstanceSet#hpc_cluster_id}
  */
  readonly hpcClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#id EcsInstanceSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#image_id EcsInstanceSet#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#instance_charge_type EcsInstanceSet#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#instance_name EcsInstanceSet#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#instance_type EcsInstanceSet#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#internet_charge_type EcsInstanceSet#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#internet_max_bandwidth_out EcsInstanceSet#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#key_pair_name EcsInstanceSet#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#launch_template_id EcsInstanceSet#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#launch_template_name EcsInstanceSet#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#launch_template_version EcsInstanceSet#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#password EcsInstanceSet#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#password_inherit EcsInstanceSet#password_inherit}
  */
  readonly passwordInherit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#period EcsInstanceSet#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#period_unit EcsInstanceSet#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#ram_role_name EcsInstanceSet#ram_role_name}
  */
  readonly ramRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#resource_group_id EcsInstanceSet#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#security_enhancement_strategy EcsInstanceSet#security_enhancement_strategy}
  */
  readonly securityEnhancementStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#security_group_ids EcsInstanceSet#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#spot_price_limit EcsInstanceSet#spot_price_limit}
  */
  readonly spotPriceLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#spot_strategy EcsInstanceSet#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#system_disk_auto_snapshot_policy_id EcsInstanceSet#system_disk_auto_snapshot_policy_id}
  */
  readonly systemDiskAutoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#system_disk_category EcsInstanceSet#system_disk_category}
  */
  readonly systemDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#system_disk_description EcsInstanceSet#system_disk_description}
  */
  readonly systemDiskDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#system_disk_name EcsInstanceSet#system_disk_name}
  */
  readonly systemDiskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#system_disk_performance_level EcsInstanceSet#system_disk_performance_level}
  */
  readonly systemDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#system_disk_size EcsInstanceSet#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#tags EcsInstanceSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#unique_suffix EcsInstanceSet#unique_suffix}
  */
  readonly uniqueSuffix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#vswitch_id EcsInstanceSet#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#zone_id EcsInstanceSet#zone_id}
  */
  readonly zoneId?: string;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#data_disks EcsInstanceSet#data_disks}
  */
  readonly dataDisks?: EcsInstanceSetDataDisks[] | cdktf.IResolvable;
  /**
  * exclude_instance_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#exclude_instance_filter EcsInstanceSet#exclude_instance_filter}
  */
  readonly excludeInstanceFilter?: EcsInstanceSetExcludeInstanceFilter;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#network_interfaces EcsInstanceSet#network_interfaces}
  */
  readonly networkInterfaces?: EcsInstanceSetNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#timeouts EcsInstanceSet#timeouts}
  */
  readonly timeouts?: EcsInstanceSetTimeouts;
}
export interface EcsInstanceSetDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#auto_snapshot_policy_id EcsInstanceSet#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#disk_category EcsInstanceSet#disk_category}
  */
  readonly diskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#disk_description EcsInstanceSet#disk_description}
  */
  readonly diskDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#disk_name EcsInstanceSet#disk_name}
  */
  readonly diskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#disk_size EcsInstanceSet#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#encrypted EcsInstanceSet#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#kms_key_id EcsInstanceSet#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#performance_level EcsInstanceSet#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#snapshot_id EcsInstanceSet#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function ecsInstanceSetDataDisksToTerraform(struct?: EcsInstanceSetDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_snapshot_policy_id: cdktf.stringToTerraform(struct!.autoSnapshotPolicyId),
    disk_category: cdktf.stringToTerraform(struct!.diskCategory),
    disk_description: cdktf.stringToTerraform(struct!.diskDescription),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function ecsInstanceSetDataDisksToHclTerraform(struct?: EcsInstanceSetDataDisks | cdktf.IResolvable): any {
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
    disk_category: {
      value: cdktf.stringToHclTerraform(struct!.diskCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_description: {
      value: cdktf.stringToHclTerraform(struct!.diskDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class EcsInstanceSetDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsInstanceSetDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSnapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSnapshotPolicyId = this._autoSnapshotPolicyId;
    }
    if (this._diskCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCategory = this._diskCategory;
    }
    if (this._diskDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskDescription = this._diskDescription;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsInstanceSetDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = undefined;
      this._diskCategory = undefined;
      this._diskDescription = undefined;
      this._diskName = undefined;
      this._diskSize = undefined;
      this._encrypted = undefined;
      this._kmsKeyId = undefined;
      this._performanceLevel = undefined;
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
      this._diskCategory = value.diskCategory;
      this._diskDescription = value.diskDescription;
      this._diskName = value.diskName;
      this._diskSize = value.diskSize;
      this._encrypted = value.encrypted;
      this._kmsKeyId = value.kmsKeyId;
      this._performanceLevel = value.performanceLevel;
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

  // disk_category - computed: true, optional: true, required: false
  private _diskCategory?: string; 
  public get diskCategory() {
    return this.getStringAttribute('disk_category');
  }
  public set diskCategory(value: string) {
    this._diskCategory = value;
  }
  public resetDiskCategory() {
    this._diskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCategoryInput() {
    return this._diskCategory;
  }

  // disk_description - computed: false, optional: true, required: false
  private _diskDescription?: string; 
  public get diskDescription() {
    return this.getStringAttribute('disk_description');
  }
  public set diskDescription(value: string) {
    this._diskDescription = value;
  }
  public resetDiskDescription() {
    this._diskDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskDescriptionInput() {
    return this._diskDescription;
  }

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
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

  // performance_level - computed: true, optional: true, required: false
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

export class EcsInstanceSetDataDisksList extends cdktf.ComplexList {
  public internalValue? : EcsInstanceSetDataDisks[] | cdktf.IResolvable

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
  public get(index: number): EcsInstanceSetDataDisksOutputReference {
    return new EcsInstanceSetDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsInstanceSetExcludeInstanceFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#key EcsInstanceSet#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#value EcsInstanceSet#value}
  */
  readonly value: string[];
}

export function ecsInstanceSetExcludeInstanceFilterToTerraform(struct?: EcsInstanceSetExcludeInstanceFilterOutputReference | EcsInstanceSetExcludeInstanceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function ecsInstanceSetExcludeInstanceFilterToHclTerraform(struct?: EcsInstanceSetExcludeInstanceFilterOutputReference | EcsInstanceSetExcludeInstanceFilter): any {
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

export class EcsInstanceSetExcludeInstanceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsInstanceSetExcludeInstanceFilter | undefined {
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

  public set internalValue(value: EcsInstanceSetExcludeInstanceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface EcsInstanceSetNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#description EcsInstanceSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#network_interface_name EcsInstanceSet#network_interface_name}
  */
  readonly networkInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#primary_ip_address EcsInstanceSet#primary_ip_address}
  */
  readonly primaryIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#security_group_id EcsInstanceSet#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#vswitch_id EcsInstanceSet#vswitch_id}
  */
  readonly vswitchId?: string;
}

export function ecsInstanceSetNetworkInterfacesToTerraform(struct?: EcsInstanceSetNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network_interface_name: cdktf.stringToTerraform(struct!.networkInterfaceName),
    primary_ip_address: cdktf.stringToTerraform(struct!.primaryIpAddress),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
  }
}


export function ecsInstanceSetNetworkInterfacesToHclTerraform(struct?: EcsInstanceSetNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.primaryIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
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

export class EcsInstanceSetNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsInstanceSetNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._networkInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceName = this._networkInterfaceName;
    }
    if (this._primaryIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIpAddress = this._primaryIpAddress;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsInstanceSetNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._networkInterfaceName = undefined;
      this._primaryIpAddress = undefined;
      this._securityGroupId = undefined;
      this._vswitchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._networkInterfaceName = value.networkInterfaceName;
      this._primaryIpAddress = value.primaryIpAddress;
      this._securityGroupId = value.securityGroupId;
      this._vswitchId = value.vswitchId;
    }
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

  // network_interface_name - computed: false, optional: true, required: false
  private _networkInterfaceName?: string; 
  public get networkInterfaceName() {
    return this.getStringAttribute('network_interface_name');
  }
  public set networkInterfaceName(value: string) {
    this._networkInterfaceName = value;
  }
  public resetNetworkInterfaceName() {
    this._networkInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceNameInput() {
    return this._networkInterfaceName;
  }

  // primary_ip_address - computed: false, optional: true, required: false
  private _primaryIpAddress?: string; 
  public get primaryIpAddress() {
    return this.getStringAttribute('primary_ip_address');
  }
  public set primaryIpAddress(value: string) {
    this._primaryIpAddress = value;
  }
  public resetPrimaryIpAddress() {
    this._primaryIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpAddressInput() {
    return this._primaryIpAddress;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
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

export class EcsInstanceSetNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : EcsInstanceSetNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EcsInstanceSetNetworkInterfacesOutputReference {
    return new EcsInstanceSetNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsInstanceSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#create EcsInstanceSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#delete EcsInstanceSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#update EcsInstanceSet#update}
  */
  readonly update?: string;
}

export function ecsInstanceSetTimeoutsToTerraform(struct?: EcsInstanceSetTimeouts | cdktf.IResolvable): any {
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


export function ecsInstanceSetTimeoutsToHclTerraform(struct?: EcsInstanceSetTimeouts | cdktf.IResolvable): any {
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

export class EcsInstanceSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsInstanceSetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcsInstanceSetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set alicloud_ecs_instance_set}
*/
export class EcsInstanceSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_instance_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsInstanceSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsInstanceSet to import
  * @param importFromId The id of the existing EcsInstanceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsInstanceSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_instance_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecs_instance_set alicloud_ecs_instance_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsInstanceSetConfig
  */
  public constructor(scope: Construct, id: string, config: EcsInstanceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_instance_set',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amount = config.amount;
    this._autoReleaseTime = config.autoReleaseTime;
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._bootCheckOsWithAssistant = config.bootCheckOsWithAssistant;
    this._dedicatedHostId = config.dedicatedHostId;
    this._deletionProtection = config.deletionProtection;
    this._deploymentSetId = config.deploymentSetId;
    this._description = config.description;
    this._hostName = config.hostName;
    this._hpcClusterId = config.hpcClusterId;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._keyPairName = config.keyPairName;
    this._launchTemplateId = config.launchTemplateId;
    this._launchTemplateName = config.launchTemplateName;
    this._launchTemplateVersion = config.launchTemplateVersion;
    this._password = config.password;
    this._passwordInherit = config.passwordInherit;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._ramRoleName = config.ramRoleName;
    this._resourceGroupId = config.resourceGroupId;
    this._securityEnhancementStrategy = config.securityEnhancementStrategy;
    this._securityGroupIds = config.securityGroupIds;
    this._spotPriceLimit = config.spotPriceLimit;
    this._spotStrategy = config.spotStrategy;
    this._systemDiskAutoSnapshotPolicyId = config.systemDiskAutoSnapshotPolicyId;
    this._systemDiskCategory = config.systemDiskCategory;
    this._systemDiskDescription = config.systemDiskDescription;
    this._systemDiskName = config.systemDiskName;
    this._systemDiskPerformanceLevel = config.systemDiskPerformanceLevel;
    this._systemDiskSize = config.systemDiskSize;
    this._tags = config.tags;
    this._uniqueSuffix = config.uniqueSuffix;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._dataDisks.internalValue = config.dataDisks;
    this._excludeInstanceFilter.internalValue = config.excludeInstanceFilter;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // auto_release_time - computed: false, optional: true, required: false
  private _autoReleaseTime?: string; 
  public get autoReleaseTime() {
    return this.getStringAttribute('auto_release_time');
  }
  public set autoReleaseTime(value: string) {
    this._autoReleaseTime = value;
  }
  public resetAutoReleaseTime() {
    this._autoReleaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReleaseTimeInput() {
    return this._autoReleaseTime;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // boot_check_os_with_assistant - computed: false, optional: true, required: false
  private _bootCheckOsWithAssistant?: boolean | cdktf.IResolvable; 
  public get bootCheckOsWithAssistant() {
    return this.getBooleanAttribute('boot_check_os_with_assistant');
  }
  public set bootCheckOsWithAssistant(value: boolean | cdktf.IResolvable) {
    this._bootCheckOsWithAssistant = value;
  }
  public resetBootCheckOsWithAssistant() {
    this._bootCheckOsWithAssistant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootCheckOsWithAssistantInput() {
    return this._bootCheckOsWithAssistant;
  }

  // dedicated_host_id - computed: false, optional: true, required: false
  private _dedicatedHostId?: string; 
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }
  public set dedicatedHostId(value: string) {
    this._dedicatedHostId = value;
  }
  public resetDedicatedHostId() {
    this._dedicatedHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostIdInput() {
    return this._dedicatedHostId;
  }

  // deletion_protection - computed: true, optional: true, required: false
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

  // deployment_set_id - computed: false, optional: true, required: false
  private _deploymentSetId?: string; 
  public get deploymentSetId() {
    return this.getStringAttribute('deployment_set_id');
  }
  public set deploymentSetId(value: string) {
    this._deploymentSetId = value;
  }
  public resetDeploymentSetId() {
    this._deploymentSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSetIdInput() {
    return this._deploymentSetId;
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

  // host_name - computed: true, optional: true, required: false
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

  // hpc_cluster_id - computed: false, optional: true, required: false
  private _hpcClusterId?: string; 
  public get hpcClusterId() {
    return this.getStringAttribute('hpc_cluster_id');
  }
  public set hpcClusterId(value: string) {
    this._hpcClusterId = value;
  }
  public resetHpcClusterId() {
    this._hpcClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcClusterIdInput() {
    return this._hpcClusterId;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_charge_type - computed: true, optional: true, required: false
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

  // internet_max_bandwidth_out - computed: true, optional: true, required: false
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

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // ram_role_name - computed: false, optional: true, required: false
  private _ramRoleName?: string; 
  public get ramRoleName() {
    return this.getStringAttribute('ram_role_name');
  }
  public set ramRoleName(value: string) {
    this._ramRoleName = value;
  }
  public resetRamRoleName() {
    this._ramRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramRoleNameInput() {
    return this._ramRoleName;
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

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // spot_price_limit - computed: true, optional: true, required: false
  private _spotPriceLimit?: number; 
  public get spotPriceLimit() {
    return this.getNumberAttribute('spot_price_limit');
  }
  public set spotPriceLimit(value: number) {
    this._spotPriceLimit = value;
  }
  public resetSpotPriceLimit() {
    this._spotPriceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceLimitInput() {
    return this._spotPriceLimit;
  }

  // spot_strategy - computed: true, optional: true, required: false
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

  // system_disk_category - computed: true, optional: true, required: false
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

  // system_disk_performance_level - computed: true, optional: true, required: false
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

  // system_disk_size - computed: true, optional: true, required: false
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

  // unique_suffix - computed: false, optional: true, required: false
  private _uniqueSuffix?: boolean | cdktf.IResolvable; 
  public get uniqueSuffix() {
    return this.getBooleanAttribute('unique_suffix');
  }
  public set uniqueSuffix(value: boolean | cdktf.IResolvable) {
    this._uniqueSuffix = value;
  }
  public resetUniqueSuffix() {
    this._uniqueSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueSuffixInput() {
    return this._uniqueSuffix;
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

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new EcsInstanceSetDataDisksList(this, "data_disks", true);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: EcsInstanceSetDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // exclude_instance_filter - computed: false, optional: true, required: false
  private _excludeInstanceFilter = new EcsInstanceSetExcludeInstanceFilterOutputReference(this, "exclude_instance_filter");
  public get excludeInstanceFilter() {
    return this._excludeInstanceFilter;
  }
  public putExcludeInstanceFilter(value: EcsInstanceSetExcludeInstanceFilter) {
    this._excludeInstanceFilter.internalValue = value;
  }
  public resetExcludeInstanceFilter() {
    this._excludeInstanceFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInstanceFilterInput() {
    return this._excludeInstanceFilter.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new EcsInstanceSetNetworkInterfacesList(this, "network_interfaces", true);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: EcsInstanceSetNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsInstanceSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsInstanceSetTimeouts) {
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
      amount: cdktf.numberToTerraform(this._amount),
      auto_release_time: cdktf.stringToTerraform(this._autoReleaseTime),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      boot_check_os_with_assistant: cdktf.booleanToTerraform(this._bootCheckOsWithAssistant),
      dedicated_host_id: cdktf.stringToTerraform(this._dedicatedHostId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      deployment_set_id: cdktf.stringToTerraform(this._deploymentSetId),
      description: cdktf.stringToTerraform(this._description),
      host_name: cdktf.stringToTerraform(this._hostName),
      hpc_cluster_id: cdktf.stringToTerraform(this._hpcClusterId),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      launch_template_id: cdktf.stringToTerraform(this._launchTemplateId),
      launch_template_name: cdktf.stringToTerraform(this._launchTemplateName),
      launch_template_version: cdktf.stringToTerraform(this._launchTemplateVersion),
      password: cdktf.stringToTerraform(this._password),
      password_inherit: cdktf.booleanToTerraform(this._passwordInherit),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      ram_role_name: cdktf.stringToTerraform(this._ramRoleName),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_enhancement_strategy: cdktf.stringToTerraform(this._securityEnhancementStrategy),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      spot_price_limit: cdktf.numberToTerraform(this._spotPriceLimit),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      system_disk_auto_snapshot_policy_id: cdktf.stringToTerraform(this._systemDiskAutoSnapshotPolicyId),
      system_disk_category: cdktf.stringToTerraform(this._systemDiskCategory),
      system_disk_description: cdktf.stringToTerraform(this._systemDiskDescription),
      system_disk_name: cdktf.stringToTerraform(this._systemDiskName),
      system_disk_performance_level: cdktf.stringToTerraform(this._systemDiskPerformanceLevel),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      unique_suffix: cdktf.booleanToTerraform(this._uniqueSuffix),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      data_disks: cdktf.listMapper(ecsInstanceSetDataDisksToTerraform, true)(this._dataDisks.internalValue),
      exclude_instance_filter: ecsInstanceSetExcludeInstanceFilterToTerraform(this._excludeInstanceFilter.internalValue),
      network_interfaces: cdktf.listMapper(ecsInstanceSetNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
      timeouts: ecsInstanceSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_release_time: {
        value: cdktf.stringToHclTerraform(this._autoReleaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_check_os_with_assistant: {
        value: cdktf.booleanToHclTerraform(this._bootCheckOsWithAssistant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dedicated_host_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostId),
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
      deployment_set_id: {
        value: cdktf.stringToHclTerraform(this._deploymentSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hpc_cluster_id: {
        value: cdktf.stringToHclTerraform(this._hpcClusterId),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_id: {
        value: cdktf.stringToHclTerraform(this._launchTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_name: {
        value: cdktf.stringToHclTerraform(this._launchTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_version: {
        value: cdktf.stringToHclTerraform(this._launchTemplateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_role_name: {
        value: cdktf.stringToHclTerraform(this._ramRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spot_price_limit: {
        value: cdktf.numberToHclTerraform(this._spotPriceLimit),
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
      unique_suffix: {
        value: cdktf.booleanToHclTerraform(this._uniqueSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disks: {
        value: cdktf.listMapperHcl(ecsInstanceSetDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsInstanceSetDataDisksList",
      },
      exclude_instance_filter: {
        value: ecsInstanceSetExcludeInstanceFilterToHclTerraform(this._excludeInstanceFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsInstanceSetExcludeInstanceFilterList",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(ecsInstanceSetNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsInstanceSetNetworkInterfacesList",
      },
      timeouts: {
        value: ecsInstanceSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsInstanceSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
