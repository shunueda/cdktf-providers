// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEssScalingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#active ApsarastackEssScalingConfiguration#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#deployment_set_id ApsarastackEssScalingConfiguration#deployment_set_id}
  */
  readonly deploymentSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#enable ApsarastackEssScalingConfiguration#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#force_delete ApsarastackEssScalingConfiguration#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#host_name ApsarastackEssScalingConfiguration#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#id ApsarastackEssScalingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#image_id ApsarastackEssScalingConfiguration#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#instance_name ApsarastackEssScalingConfiguration#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#instance_type ApsarastackEssScalingConfiguration#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#instance_types ApsarastackEssScalingConfiguration#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#internet_max_bandwidth_in ApsarastackEssScalingConfiguration#internet_max_bandwidth_in}
  */
  readonly internetMaxBandwidthIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#is_outdated ApsarastackEssScalingConfiguration#is_outdated}
  */
  readonly isOutdated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#key_name ApsarastackEssScalingConfiguration#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#key_pair_name ApsarastackEssScalingConfiguration#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#override ApsarastackEssScalingConfiguration#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#ram_role_name ApsarastackEssScalingConfiguration#ram_role_name}
  */
  readonly ramRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#role_name ApsarastackEssScalingConfiguration#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#scaling_configuration_name ApsarastackEssScalingConfiguration#scaling_configuration_name}
  */
  readonly scalingConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#scaling_group_id ApsarastackEssScalingConfiguration#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#security_group_ids ApsarastackEssScalingConfiguration#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#status ApsarastackEssScalingConfiguration#status}
  */
  readonly status?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#substitute ApsarastackEssScalingConfiguration#substitute}
  */
  readonly substitute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#system_disk_auto_snapshot_policy_id ApsarastackEssScalingConfiguration#system_disk_auto_snapshot_policy_id}
  */
  readonly systemDiskAutoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#system_disk_category ApsarastackEssScalingConfiguration#system_disk_category}
  */
  readonly systemDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#system_disk_size ApsarastackEssScalingConfiguration#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#tags ApsarastackEssScalingConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#user_data ApsarastackEssScalingConfiguration#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#zone_id ApsarastackEssScalingConfiguration#zone_id}
  */
  readonly zoneId?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#data_disk ApsarastackEssScalingConfiguration#data_disk}
  */
  readonly dataDisk?: ApsarastackEssScalingConfigurationDataDisk[] | cdktf.IResolvable;
}
export interface ApsarastackEssScalingConfigurationDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#auto_snapshot_policy_id ApsarastackEssScalingConfiguration#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#category ApsarastackEssScalingConfiguration#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#delete_with_instance ApsarastackEssScalingConfiguration#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#description ApsarastackEssScalingConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#device ApsarastackEssScalingConfiguration#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#encrypted ApsarastackEssScalingConfiguration#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#kms_key_id ApsarastackEssScalingConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#name ApsarastackEssScalingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#size ApsarastackEssScalingConfiguration#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#snapshot_id ApsarastackEssScalingConfiguration#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function apsarastackEssScalingConfigurationDataDiskToTerraform(struct?: ApsarastackEssScalingConfigurationDataDisk | cdktf.IResolvable): any {
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
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function apsarastackEssScalingConfigurationDataDiskToHclTerraform(struct?: ApsarastackEssScalingConfigurationDataDisk | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ApsarastackEssScalingConfigurationDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEssScalingConfigurationDataDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackEssScalingConfigurationDataDisk | cdktf.IResolvable | undefined) {
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
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
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

export class ApsarastackEssScalingConfigurationDataDiskList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEssScalingConfigurationDataDisk[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEssScalingConfigurationDataDiskOutputReference {
    return new ApsarastackEssScalingConfigurationDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration apsarastack_ess_scaling_configuration}
*/
export class ApsarastackEssScalingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ess_scaling_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEssScalingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEssScalingConfiguration to import
  * @param importFromId The id of the existing ApsarastackEssScalingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEssScalingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ess_scaling_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ess_scaling_configuration apsarastack_ess_scaling_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEssScalingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEssScalingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ess_scaling_configuration',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._deploymentSetId = config.deploymentSetId;
    this._enable = config.enable;
    this._forceDelete = config.forceDelete;
    this._hostName = config.hostName;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._instanceTypes = config.instanceTypes;
    this._internetMaxBandwidthIn = config.internetMaxBandwidthIn;
    this._isOutdated = config.isOutdated;
    this._keyName = config.keyName;
    this._keyPairName = config.keyPairName;
    this._override = config.override;
    this._ramRoleName = config.ramRoleName;
    this._roleName = config.roleName;
    this._scalingConfigurationName = config.scalingConfigurationName;
    this._scalingGroupId = config.scalingGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._status = config.status;
    this._substitute = config.substitute;
    this._systemDiskAutoSnapshotPolicyId = config.systemDiskAutoSnapshotPolicyId;
    this._systemDiskCategory = config.systemDiskCategory;
    this._systemDiskSize = config.systemDiskSize;
    this._tags = config.tags;
    this._userData = config.userData;
    this._zoneId = config.zoneId;
    this._dataDisk.internalValue = config.dataDisk;
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

  // deployment_set_id - computed: false, optional: false, required: true
  private _deploymentSetId?: string; 
  public get deploymentSetId() {
    return this.getStringAttribute('deployment_set_id');
  }
  public set deploymentSetId(value: string) {
    this._deploymentSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSetIdInput() {
    return this._deploymentSetId;
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

  // instance_types - computed: true, optional: true, required: false
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

  // internet_max_bandwidth_in - computed: true, optional: true, required: false
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

  // key_name - computed: true, optional: true, required: false
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

  // key_pair_name - computed: true, optional: true, required: false
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

  // ram_role_name - computed: true, optional: true, required: false
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

  // role_name - computed: true, optional: true, required: false
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

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // status - computed: true, optional: true, required: false
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new ApsarastackEssScalingConfigurationDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: ApsarastackEssScalingConfigurationDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      deployment_set_id: cdktf.stringToTerraform(this._deploymentSetId),
      enable: cdktf.booleanToTerraform(this._enable),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      internet_max_bandwidth_in: cdktf.numberToTerraform(this._internetMaxBandwidthIn),
      is_outdated: cdktf.booleanToTerraform(this._isOutdated),
      key_name: cdktf.stringToTerraform(this._keyName),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      override: cdktf.booleanToTerraform(this._override),
      ram_role_name: cdktf.stringToTerraform(this._ramRoleName),
      role_name: cdktf.stringToTerraform(this._roleName),
      scaling_configuration_name: cdktf.stringToTerraform(this._scalingConfigurationName),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      status: cdktf.booleanToTerraform(this._status),
      substitute: cdktf.stringToTerraform(this._substitute),
      system_disk_auto_snapshot_policy_id: cdktf.stringToTerraform(this._systemDiskAutoSnapshotPolicyId),
      system_disk_category: cdktf.stringToTerraform(this._systemDiskCategory),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      data_disk: cdktf.listMapper(apsarastackEssScalingConfigurationDataDiskToTerraform, true)(this._dataDisk.internalValue),
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
      deployment_set_id: {
        value: cdktf.stringToHclTerraform(this._deploymentSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      internet_max_bandwidth_in: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.booleanToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ram_role_name: {
        value: cdktf.stringToHclTerraform(this._ramRoleName),
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.booleanToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disk: {
        value: cdktf.listMapperHcl(apsarastackEssScalingConfigurationDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEssScalingConfigurationDataDiskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
