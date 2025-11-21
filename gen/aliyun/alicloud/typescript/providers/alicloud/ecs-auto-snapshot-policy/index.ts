// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsAutoSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#auto_snapshot_policy_name EcsAutoSnapshotPolicy#auto_snapshot_policy_name}
  */
  readonly autoSnapshotPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#copied_snapshots_retention_days EcsAutoSnapshotPolicy#copied_snapshots_retention_days}
  */
  readonly copiedSnapshotsRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#enable_cross_region_copy EcsAutoSnapshotPolicy#enable_cross_region_copy}
  */
  readonly enableCrossRegionCopy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#id EcsAutoSnapshotPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#name EcsAutoSnapshotPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#repeat_weekdays EcsAutoSnapshotPolicy#repeat_weekdays}
  */
  readonly repeatWeekdays: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#resource_group_id EcsAutoSnapshotPolicy#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#retention_days EcsAutoSnapshotPolicy#retention_days}
  */
  readonly retentionDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#tags EcsAutoSnapshotPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#target_copy_regions EcsAutoSnapshotPolicy#target_copy_regions}
  */
  readonly targetCopyRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#time_points EcsAutoSnapshotPolicy#time_points}
  */
  readonly timePoints: string[];
  /**
  * copy_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#copy_encryption_configuration EcsAutoSnapshotPolicy#copy_encryption_configuration}
  */
  readonly copyEncryptionConfiguration?: EcsAutoSnapshotPolicyCopyEncryptionConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#timeouts EcsAutoSnapshotPolicy#timeouts}
  */
  readonly timeouts?: EcsAutoSnapshotPolicyTimeouts;
}
export interface EcsAutoSnapshotPolicyCopyEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#encrypted EcsAutoSnapshotPolicy#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#kms_key_id EcsAutoSnapshotPolicy#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function ecsAutoSnapshotPolicyCopyEncryptionConfigurationToTerraform(struct?: EcsAutoSnapshotPolicyCopyEncryptionConfigurationOutputReference | EcsAutoSnapshotPolicyCopyEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function ecsAutoSnapshotPolicyCopyEncryptionConfigurationToHclTerraform(struct?: EcsAutoSnapshotPolicyCopyEncryptionConfigurationOutputReference | EcsAutoSnapshotPolicyCopyEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsAutoSnapshotPolicyCopyEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsAutoSnapshotPolicyCopyEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsAutoSnapshotPolicyCopyEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encrypted = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encrypted = value.encrypted;
      this._kmsKeyId = value.kmsKeyId;
    }
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
}
export interface EcsAutoSnapshotPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#create EcsAutoSnapshotPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#delete EcsAutoSnapshotPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#update EcsAutoSnapshotPolicy#update}
  */
  readonly update?: string;
}

export function ecsAutoSnapshotPolicyTimeoutsToTerraform(struct?: EcsAutoSnapshotPolicyTimeouts | cdktf.IResolvable): any {
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


export function ecsAutoSnapshotPolicyTimeoutsToHclTerraform(struct?: EcsAutoSnapshotPolicyTimeouts | cdktf.IResolvable): any {
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

export class EcsAutoSnapshotPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsAutoSnapshotPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcsAutoSnapshotPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy alicloud_ecs_auto_snapshot_policy}
*/
export class EcsAutoSnapshotPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_auto_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsAutoSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsAutoSnapshotPolicy to import
  * @param importFromId The id of the existing EcsAutoSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsAutoSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_auto_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ecs_auto_snapshot_policy alicloud_ecs_auto_snapshot_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsAutoSnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EcsAutoSnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_auto_snapshot_policy',
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
    this._autoSnapshotPolicyName = config.autoSnapshotPolicyName;
    this._copiedSnapshotsRetentionDays = config.copiedSnapshotsRetentionDays;
    this._enableCrossRegionCopy = config.enableCrossRegionCopy;
    this._id = config.id;
    this._name = config.name;
    this._repeatWeekdays = config.repeatWeekdays;
    this._resourceGroupId = config.resourceGroupId;
    this._retentionDays = config.retentionDays;
    this._tags = config.tags;
    this._targetCopyRegions = config.targetCopyRegions;
    this._timePoints = config.timePoints;
    this._copyEncryptionConfiguration.internalValue = config.copyEncryptionConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_snapshot_policy_name - computed: true, optional: true, required: false
  private _autoSnapshotPolicyName?: string; 
  public get autoSnapshotPolicyName() {
    return this.getStringAttribute('auto_snapshot_policy_name');
  }
  public set autoSnapshotPolicyName(value: string) {
    this._autoSnapshotPolicyName = value;
  }
  public resetAutoSnapshotPolicyName() {
    this._autoSnapshotPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotPolicyNameInput() {
    return this._autoSnapshotPolicyName;
  }

  // copied_snapshots_retention_days - computed: true, optional: true, required: false
  private _copiedSnapshotsRetentionDays?: number; 
  public get copiedSnapshotsRetentionDays() {
    return this.getNumberAttribute('copied_snapshots_retention_days');
  }
  public set copiedSnapshotsRetentionDays(value: number) {
    this._copiedSnapshotsRetentionDays = value;
  }
  public resetCopiedSnapshotsRetentionDays() {
    this._copiedSnapshotsRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copiedSnapshotsRetentionDaysInput() {
    return this._copiedSnapshotsRetentionDays;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable_cross_region_copy - computed: false, optional: true, required: false
  private _enableCrossRegionCopy?: boolean | cdktf.IResolvable; 
  public get enableCrossRegionCopy() {
    return this.getBooleanAttribute('enable_cross_region_copy');
  }
  public set enableCrossRegionCopy(value: boolean | cdktf.IResolvable) {
    this._enableCrossRegionCopy = value;
  }
  public resetEnableCrossRegionCopy() {
    this._enableCrossRegionCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrossRegionCopyInput() {
    return this._enableCrossRegionCopy;
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // repeat_weekdays - computed: false, optional: false, required: true
  private _repeatWeekdays?: string[]; 
  public get repeatWeekdays() {
    return this.getListAttribute('repeat_weekdays');
  }
  public set repeatWeekdays(value: string[]) {
    this._repeatWeekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatWeekdaysInput() {
    return this._repeatWeekdays;
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

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
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

  // target_copy_regions - computed: false, optional: true, required: false
  private _targetCopyRegions?: string[]; 
  public get targetCopyRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('target_copy_regions'));
  }
  public set targetCopyRegions(value: string[]) {
    this._targetCopyRegions = value;
  }
  public resetTargetCopyRegions() {
    this._targetCopyRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCopyRegionsInput() {
    return this._targetCopyRegions;
  }

  // time_points - computed: false, optional: false, required: true
  private _timePoints?: string[]; 
  public get timePoints() {
    return this.getListAttribute('time_points');
  }
  public set timePoints(value: string[]) {
    this._timePoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePointsInput() {
    return this._timePoints;
  }

  // copy_encryption_configuration - computed: false, optional: true, required: false
  private _copyEncryptionConfiguration = new EcsAutoSnapshotPolicyCopyEncryptionConfigurationOutputReference(this, "copy_encryption_configuration");
  public get copyEncryptionConfiguration() {
    return this._copyEncryptionConfiguration;
  }
  public putCopyEncryptionConfiguration(value: EcsAutoSnapshotPolicyCopyEncryptionConfiguration) {
    this._copyEncryptionConfiguration.internalValue = value;
  }
  public resetCopyEncryptionConfiguration() {
    this._copyEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyEncryptionConfigurationInput() {
    return this._copyEncryptionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsAutoSnapshotPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsAutoSnapshotPolicyTimeouts) {
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
      auto_snapshot_policy_name: cdktf.stringToTerraform(this._autoSnapshotPolicyName),
      copied_snapshots_retention_days: cdktf.numberToTerraform(this._copiedSnapshotsRetentionDays),
      enable_cross_region_copy: cdktf.booleanToTerraform(this._enableCrossRegionCopy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repeat_weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repeatWeekdays),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_copy_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetCopyRegions),
      time_points: cdktf.listMapper(cdktf.stringToTerraform, false)(this._timePoints),
      copy_encryption_configuration: ecsAutoSnapshotPolicyCopyEncryptionConfigurationToTerraform(this._copyEncryptionConfiguration.internalValue),
      timeouts: ecsAutoSnapshotPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_snapshot_policy_name: {
        value: cdktf.stringToHclTerraform(this._autoSnapshotPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copied_snapshots_retention_days: {
        value: cdktf.numberToHclTerraform(this._copiedSnapshotsRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_cross_region_copy: {
        value: cdktf.booleanToHclTerraform(this._enableCrossRegionCopy),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_weekdays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repeatWeekdays),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
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
      target_copy_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetCopyRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_points: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._timePoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      copy_encryption_configuration: {
        value: ecsAutoSnapshotPolicyCopyEncryptionConfigurationToHclTerraform(this._copyEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsAutoSnapshotPolicyCopyEncryptionConfigurationList",
      },
      timeouts: {
        value: ecsAutoSnapshotPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsAutoSnapshotPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
