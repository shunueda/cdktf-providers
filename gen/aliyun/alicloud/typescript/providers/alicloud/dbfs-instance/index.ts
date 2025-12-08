// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbfsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#advanced_features DbfsInstance#advanced_features}
  */
  readonly advancedFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#category DbfsInstance#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#delete_snapshot DbfsInstance#delete_snapshot}
  */
  readonly deleteSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#enable_raid DbfsInstance#enable_raid}
  */
  readonly enableRaid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#encryption DbfsInstance#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#fs_name DbfsInstance#fs_name}
  */
  readonly fsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#id DbfsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#instance_name DbfsInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#instance_type DbfsInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#kms_key_id DbfsInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#performance_level DbfsInstance#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#raid_stripe_unit_number DbfsInstance#raid_stripe_unit_number}
  */
  readonly raidStripeUnitNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#size DbfsInstance#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#snapshot_id DbfsInstance#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#tags DbfsInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#used_scene DbfsInstance#used_scene}
  */
  readonly usedScene?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#zone_id DbfsInstance#zone_id}
  */
  readonly zoneId: string;
  /**
  * ecs_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#ecs_list DbfsInstance#ecs_list}
  */
  readonly ecsList?: DbfsInstanceEcsListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#timeouts DbfsInstance#timeouts}
  */
  readonly timeouts?: DbfsInstanceTimeouts;
}
export interface DbfsInstanceEcsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#ecs_id DbfsInstance#ecs_id}
  */
  readonly ecsId?: string;
}

export function dbfsInstanceEcsListStructToTerraform(struct?: DbfsInstanceEcsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ecs_id: cdktf.stringToTerraform(struct!.ecsId),
  }
}


export function dbfsInstanceEcsListStructToHclTerraform(struct?: DbfsInstanceEcsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ecs_id: {
      value: cdktf.stringToHclTerraform(struct!.ecsId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbfsInstanceEcsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbfsInstanceEcsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ecsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsId = this._ecsId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbfsInstanceEcsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ecsId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ecsId = value.ecsId;
    }
  }

  // ecs_id - computed: false, optional: true, required: false
  private _ecsId?: string; 
  public get ecsId() {
    return this.getStringAttribute('ecs_id');
  }
  public set ecsId(value: string) {
    this._ecsId = value;
  }
  public resetEcsId() {
    this._ecsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsIdInput() {
    return this._ecsId;
  }
}

export class DbfsInstanceEcsListStructList extends cdktf.ComplexList {
  public internalValue? : DbfsInstanceEcsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DbfsInstanceEcsListStructOutputReference {
    return new DbfsInstanceEcsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbfsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#create DbfsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#delete DbfsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#update DbfsInstance#update}
  */
  readonly update?: string;
}

export function dbfsInstanceTimeoutsToTerraform(struct?: DbfsInstanceTimeouts | cdktf.IResolvable): any {
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


export function dbfsInstanceTimeoutsToHclTerraform(struct?: DbfsInstanceTimeouts | cdktf.IResolvable): any {
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

export class DbfsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbfsInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbfsInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance alicloud_dbfs_instance}
*/
export class DbfsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dbfs_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbfsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbfsInstance to import
  * @param importFromId The id of the existing DbfsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbfsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dbfs_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dbfs_instance alicloud_dbfs_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbfsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DbfsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dbfs_instance',
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
    this._advancedFeatures = config.advancedFeatures;
    this._category = config.category;
    this._deleteSnapshot = config.deleteSnapshot;
    this._enableRaid = config.enableRaid;
    this._encryption = config.encryption;
    this._fsName = config.fsName;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._kmsKeyId = config.kmsKeyId;
    this._performanceLevel = config.performanceLevel;
    this._raidStripeUnitNumber = config.raidStripeUnitNumber;
    this._size = config.size;
    this._snapshotId = config.snapshotId;
    this._tags = config.tags;
    this._usedScene = config.usedScene;
    this._zoneId = config.zoneId;
    this._ecsList.internalValue = config.ecsList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_features - computed: true, optional: true, required: false
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

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_snapshot - computed: false, optional: true, required: false
  private _deleteSnapshot?: boolean | cdktf.IResolvable; 
  public get deleteSnapshot() {
    return this.getBooleanAttribute('delete_snapshot');
  }
  public set deleteSnapshot(value: boolean | cdktf.IResolvable) {
    this._deleteSnapshot = value;
  }
  public resetDeleteSnapshot() {
    this._deleteSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSnapshotInput() {
    return this._deleteSnapshot;
  }

  // enable_raid - computed: false, optional: true, required: false
  private _enableRaid?: boolean | cdktf.IResolvable; 
  public get enableRaid() {
    return this.getBooleanAttribute('enable_raid');
  }
  public set enableRaid(value: boolean | cdktf.IResolvable) {
    this._enableRaid = value;
  }
  public resetEnableRaid() {
    this._enableRaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRaidInput() {
    return this._enableRaid;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // fs_name - computed: true, optional: true, required: false
  private _fsName?: string; 
  public get fsName() {
    return this.getStringAttribute('fs_name');
  }
  public set fsName(value: string) {
    this._fsName = value;
  }
  public resetFsName() {
    this._fsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsNameInput() {
    return this._fsName;
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

  // instance_name - computed: true, optional: true, required: false
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

  // raid_stripe_unit_number - computed: false, optional: true, required: false
  private _raidStripeUnitNumber?: number; 
  public get raidStripeUnitNumber() {
    return this.getNumberAttribute('raid_stripe_unit_number');
  }
  public set raidStripeUnitNumber(value: number) {
    this._raidStripeUnitNumber = value;
  }
  public resetRaidStripeUnitNumber() {
    this._raidStripeUnitNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidStripeUnitNumberInput() {
    return this._raidStripeUnitNumber;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
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

  // used_scene - computed: false, optional: true, required: false
  private _usedScene?: string; 
  public get usedScene() {
    return this.getStringAttribute('used_scene');
  }
  public set usedScene(value: string) {
    this._usedScene = value;
  }
  public resetUsedScene() {
    this._usedScene = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedSceneInput() {
    return this._usedScene;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // ecs_list - computed: false, optional: true, required: false
  private _ecsList = new DbfsInstanceEcsListStructList(this, "ecs_list", true);
  public get ecsList() {
    return this._ecsList;
  }
  public putEcsList(value: DbfsInstanceEcsListStruct[] | cdktf.IResolvable) {
    this._ecsList.internalValue = value;
  }
  public resetEcsList() {
    this._ecsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsListInput() {
    return this._ecsList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbfsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbfsInstanceTimeouts) {
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
      category: cdktf.stringToTerraform(this._category),
      delete_snapshot: cdktf.booleanToTerraform(this._deleteSnapshot),
      enable_raid: cdktf.booleanToTerraform(this._enableRaid),
      encryption: cdktf.booleanToTerraform(this._encryption),
      fs_name: cdktf.stringToTerraform(this._fsName),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      performance_level: cdktf.stringToTerraform(this._performanceLevel),
      raid_stripe_unit_number: cdktf.numberToTerraform(this._raidStripeUnitNumber),
      size: cdktf.numberToTerraform(this._size),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      used_scene: cdktf.stringToTerraform(this._usedScene),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ecs_list: cdktf.listMapper(dbfsInstanceEcsListStructToTerraform, true)(this._ecsList.internalValue),
      timeouts: dbfsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_snapshot: {
        value: cdktf.booleanToHclTerraform(this._deleteSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_raid: {
        value: cdktf.booleanToHclTerraform(this._enableRaid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fs_name: {
        value: cdktf.stringToHclTerraform(this._fsName),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
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
      raid_stripe_unit_number: {
        value: cdktf.numberToHclTerraform(this._raidStripeUnitNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      used_scene: {
        value: cdktf.stringToHclTerraform(this._usedScene),
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
      ecs_list: {
        value: cdktf.listMapperHcl(dbfsInstanceEcsListStructToHclTerraform, true)(this._ecsList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbfsInstanceEcsListStructList",
      },
      timeouts: {
        value: dbfsInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbfsInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
