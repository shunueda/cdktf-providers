// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#advanced_features Disk#advanced_features}
  */
  readonly advancedFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#availability_zone Disk#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#bursting_enabled Disk#bursting_enabled}
  */
  readonly burstingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#category Disk#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#dedicated_block_storage_cluster_id Disk#dedicated_block_storage_cluster_id}
  */
  readonly dedicatedBlockStorageClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#delete_auto_snapshot Disk#delete_auto_snapshot}
  */
  readonly deleteAutoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#delete_with_instance Disk#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#description Disk#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#disk_name Disk#disk_name}
  */
  readonly diskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#dry_run Disk#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#enable_auto_snapshot Disk#enable_auto_snapshot}
  */
  readonly enableAutoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#encrypt_algorithm Disk#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#encrypted Disk#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#id Disk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#instance_id Disk#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#kms_key_id Disk#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#multi_attach Disk#multi_attach}
  */
  readonly multiAttach?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#name Disk#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#payment_type Disk#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#performance_level Disk#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#provisioned_iops Disk#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#resource_group_id Disk#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#size Disk#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#snapshot_id Disk#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#storage_set_id Disk#storage_set_id}
  */
  readonly storageSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#storage_set_partition_number Disk#storage_set_partition_number}
  */
  readonly storageSetPartitionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#tags Disk#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#type Disk#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#zone_id Disk#zone_id}
  */
  readonly zoneId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#timeouts Disk#timeouts}
  */
  readonly timeouts?: DiskTimeouts;
}
export interface DiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#create Disk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#delete Disk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#update Disk#update}
  */
  readonly update?: string;
}

export function diskTimeoutsToTerraform(struct?: DiskTimeouts | cdktf.IResolvable): any {
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


export function diskTimeoutsToHclTerraform(struct?: DiskTimeouts | cdktf.IResolvable): any {
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

export class DiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiskTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk alicloud_disk}
*/
export class Disk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Disk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Disk to import
  * @param importFromId The id of the existing Disk that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Disk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/disk alicloud_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DiskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_disk',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedFeatures = config.advancedFeatures;
    this._availabilityZone = config.availabilityZone;
    this._burstingEnabled = config.burstingEnabled;
    this._category = config.category;
    this._dedicatedBlockStorageClusterId = config.dedicatedBlockStorageClusterId;
    this._deleteAutoSnapshot = config.deleteAutoSnapshot;
    this._deleteWithInstance = config.deleteWithInstance;
    this._description = config.description;
    this._diskName = config.diskName;
    this._dryRun = config.dryRun;
    this._enableAutoSnapshot = config.enableAutoSnapshot;
    this._encryptAlgorithm = config.encryptAlgorithm;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._kmsKeyId = config.kmsKeyId;
    this._multiAttach = config.multiAttach;
    this._name = config.name;
    this._paymentType = config.paymentType;
    this._performanceLevel = config.performanceLevel;
    this._provisionedIops = config.provisionedIops;
    this._resourceGroupId = config.resourceGroupId;
    this._size = config.size;
    this._snapshotId = config.snapshotId;
    this._storageSetId = config.storageSetId;
    this._storageSetPartitionNumber = config.storageSetPartitionNumber;
    this._tags = config.tags;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_features - computed: false, optional: true, required: false
  private _advancedFeatures?: string; 
  public get advancedFeatures() {
    return this.getStringAttribute('advanced_features');
  }
  public set advancedFeatures(value: string) {
    this._advancedFeatures = value;
  }
  public resetAdvancedFeatures() {
    this._advancedFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFeaturesInput() {
    return this._advancedFeatures;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // bursting_enabled - computed: false, optional: true, required: false
  private _burstingEnabled?: boolean | cdktf.IResolvable; 
  public get burstingEnabled() {
    return this.getBooleanAttribute('bursting_enabled');
  }
  public set burstingEnabled(value: boolean | cdktf.IResolvable) {
    this._burstingEnabled = value;
  }
  public resetBurstingEnabled() {
    this._burstingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstingEnabledInput() {
    return this._burstingEnabled;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_block_storage_cluster_id - computed: false, optional: true, required: false
  private _dedicatedBlockStorageClusterId?: string; 
  public get dedicatedBlockStorageClusterId() {
    return this.getStringAttribute('dedicated_block_storage_cluster_id');
  }
  public set dedicatedBlockStorageClusterId(value: string) {
    this._dedicatedBlockStorageClusterId = value;
  }
  public resetDedicatedBlockStorageClusterId() {
    this._dedicatedBlockStorageClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedBlockStorageClusterIdInput() {
    return this._dedicatedBlockStorageClusterId;
  }

  // delete_auto_snapshot - computed: false, optional: true, required: false
  private _deleteAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get deleteAutoSnapshot() {
    return this.getBooleanAttribute('delete_auto_snapshot');
  }
  public set deleteAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._deleteAutoSnapshot = value;
  }
  public resetDeleteAutoSnapshot() {
    this._deleteAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAutoSnapshotInput() {
    return this._deleteAutoSnapshot;
  }

  // delete_with_instance - computed: true, optional: true, required: false
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

  // disk_name - computed: true, optional: true, required: false
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

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // enable_auto_snapshot - computed: true, optional: true, required: false
  private _enableAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get enableAutoSnapshot() {
    return this.getBooleanAttribute('enable_auto_snapshot');
  }
  public set enableAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._enableAutoSnapshot = value;
  }
  public resetEnableAutoSnapshot() {
    this._enableAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoSnapshotInput() {
    return this._enableAutoSnapshot;
  }

  // encrypt_algorithm - computed: false, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
  }

  // encrypted - computed: true, optional: true, required: false
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // kms_key_id - computed: true, optional: true, required: false
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

  // multi_attach - computed: true, optional: true, required: false
  private _multiAttach?: string; 
  public get multiAttach() {
    return this.getStringAttribute('multi_attach');
  }
  public set multiAttach(value: string) {
    this._multiAttach = value;
  }
  public resetMultiAttach() {
    this._multiAttach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAttachInput() {
    return this._multiAttach;
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

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
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

  // size - computed: true, optional: true, required: false
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

  // snapshot_id - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_set_id - computed: false, optional: true, required: false
  private _storageSetId?: string; 
  public get storageSetId() {
    return this.getStringAttribute('storage_set_id');
  }
  public set storageSetId(value: string) {
    this._storageSetId = value;
  }
  public resetStorageSetId() {
    this._storageSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSetIdInput() {
    return this._storageSetId;
  }

  // storage_set_partition_number - computed: false, optional: true, required: false
  private _storageSetPartitionNumber?: number; 
  public get storageSetPartitionNumber() {
    return this.getNumberAttribute('storage_set_partition_number');
  }
  public set storageSetPartitionNumber(value: number) {
    this._storageSetPartitionNumber = value;
  }
  public resetStorageSetPartitionNumber() {
    this._storageSetPartitionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSetPartitionNumberInput() {
    return this._storageSetPartitionNumber;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiskTimeouts) {
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
      advanced_features: cdktf.stringToTerraform(this._advancedFeatures),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      bursting_enabled: cdktf.booleanToTerraform(this._burstingEnabled),
      category: cdktf.stringToTerraform(this._category),
      dedicated_block_storage_cluster_id: cdktf.stringToTerraform(this._dedicatedBlockStorageClusterId),
      delete_auto_snapshot: cdktf.booleanToTerraform(this._deleteAutoSnapshot),
      delete_with_instance: cdktf.booleanToTerraform(this._deleteWithInstance),
      description: cdktf.stringToTerraform(this._description),
      disk_name: cdktf.stringToTerraform(this._diskName),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      enable_auto_snapshot: cdktf.booleanToTerraform(this._enableAutoSnapshot),
      encrypt_algorithm: cdktf.stringToTerraform(this._encryptAlgorithm),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      multi_attach: cdktf.stringToTerraform(this._multiAttach),
      name: cdktf.stringToTerraform(this._name),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      performance_level: cdktf.stringToTerraform(this._performanceLevel),
      provisioned_iops: cdktf.numberToTerraform(this._provisionedIops),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      size: cdktf.numberToTerraform(this._size),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      storage_set_id: cdktf.stringToTerraform(this._storageSetId),
      storage_set_partition_number: cdktf.numberToTerraform(this._storageSetPartitionNumber),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: diskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_features: {
        value: cdktf.stringToHclTerraform(this._advancedFeatures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bursting_enabled: {
        value: cdktf.booleanToHclTerraform(this._burstingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_block_storage_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedBlockStorageClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_auto_snapshot: {
        value: cdktf.booleanToHclTerraform(this._deleteAutoSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_with_instance: {
        value: cdktf.booleanToHclTerraform(this._deleteWithInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_name: {
        value: cdktf.stringToHclTerraform(this._diskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_auto_snapshot: {
        value: cdktf.booleanToHclTerraform(this._enableAutoSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_attach: {
        value: cdktf.stringToHclTerraform(this._multiAttach),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_level: {
        value: cdktf.stringToHclTerraform(this._performanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_iops: {
        value: cdktf.numberToHclTerraform(this._provisionedIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_set_id: {
        value: cdktf.stringToHclTerraform(this._storageSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_set_partition_number: {
        value: cdktf.numberToHclTerraform(this._storageSetPartitionNumber),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      timeouts: {
        value: diskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
