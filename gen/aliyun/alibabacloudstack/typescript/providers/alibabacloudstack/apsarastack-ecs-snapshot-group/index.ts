// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEcsSnapshotGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#create_time ApsarastackEcsSnapshotGroup#create_time}
  */
  readonly createTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#description ApsarastackEcsSnapshotGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#disk_ids ApsarastackEcsSnapshotGroup#disk_ids}
  */
  readonly diskIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#exclude_disk_ids ApsarastackEcsSnapshotGroup#exclude_disk_ids}
  */
  readonly excludeDiskIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#id ApsarastackEcsSnapshotGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#instance_id ApsarastackEcsSnapshotGroup#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#instant_access ApsarastackEcsSnapshotGroup#instant_access}
  */
  readonly instantAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#instant_access_retention_days ApsarastackEcsSnapshotGroup#instant_access_retention_days}
  */
  readonly instantAccessRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#snapshot_group_name ApsarastackEcsSnapshotGroup#snapshot_group_name}
  */
  readonly snapshotGroupName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#timeouts ApsarastackEcsSnapshotGroup#timeouts}
  */
  readonly timeouts?: ApsarastackEcsSnapshotGroupTimeouts;
}
export interface ApsarastackEcsSnapshotGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#create ApsarastackEcsSnapshotGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#delete ApsarastackEcsSnapshotGroup#delete}
  */
  readonly delete?: string;
}

export function apsarastackEcsSnapshotGroupTimeoutsToTerraform(struct?: ApsarastackEcsSnapshotGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apsarastackEcsSnapshotGroupTimeoutsToHclTerraform(struct?: ApsarastackEcsSnapshotGroupTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEcsSnapshotGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackEcsSnapshotGroupTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEcsSnapshotGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group apsarastack_ecs_snapshot_group}
*/
export class ApsarastackEcsSnapshotGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ecs_snapshot_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEcsSnapshotGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEcsSnapshotGroup to import
  * @param importFromId The id of the existing ApsarastackEcsSnapshotGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEcsSnapshotGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ecs_snapshot_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ecs_snapshot_group apsarastack_ecs_snapshot_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEcsSnapshotGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEcsSnapshotGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ecs_snapshot_group',
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
    this._createTime = config.createTime;
    this._description = config.description;
    this._diskIds = config.diskIds;
    this._excludeDiskIds = config.excludeDiskIds;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instantAccess = config.instantAccess;
    this._instantAccessRetentionDays = config.instantAccessRetentionDays;
    this._snapshotGroupName = config.snapshotGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // disk_ids - computed: true, optional: true, required: false
  private _diskIds?: string[]; 
  public get diskIds() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_ids'));
  }
  public set diskIds(value: string[]) {
    this._diskIds = value;
  }
  public resetDiskIds() {
    this._diskIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdsInput() {
    return this._diskIds;
  }

  // exclude_disk_ids - computed: false, optional: true, required: false
  private _excludeDiskIds?: string[]; 
  public get excludeDiskIds() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_disk_ids'));
  }
  public set excludeDiskIds(value: string[]) {
    this._excludeDiskIds = value;
  }
  public resetExcludeDiskIds() {
    this._excludeDiskIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDiskIdsInput() {
    return this._excludeDiskIds;
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

  // instance_id - computed: false, optional: true, required: false
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

  // instant_access - computed: false, optional: true, required: false
  private _instantAccess?: boolean | cdktf.IResolvable; 
  public get instantAccess() {
    return this.getBooleanAttribute('instant_access');
  }
  public set instantAccess(value: boolean | cdktf.IResolvable) {
    this._instantAccess = value;
  }
  public resetInstantAccess() {
    this._instantAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantAccessInput() {
    return this._instantAccess;
  }

  // instant_access_retention_days - computed: false, optional: true, required: false
  private _instantAccessRetentionDays?: number; 
  public get instantAccessRetentionDays() {
    return this.getNumberAttribute('instant_access_retention_days');
  }
  public set instantAccessRetentionDays(value: number) {
    this._instantAccessRetentionDays = value;
  }
  public resetInstantAccessRetentionDays() {
    this._instantAccessRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantAccessRetentionDaysInput() {
    return this._instantAccessRetentionDays;
  }

  // snapshot_group_id - computed: true, optional: false, required: false
  public get snapshotGroupId() {
    return this.getStringAttribute('snapshot_group_id');
  }

  // snapshot_group_name - computed: false, optional: true, required: false
  private _snapshotGroupName?: string; 
  public get snapshotGroupName() {
    return this.getStringAttribute('snapshot_group_name');
  }
  public set snapshotGroupName(value: string) {
    this._snapshotGroupName = value;
  }
  public resetSnapshotGroupName() {
    this._snapshotGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotGroupNameInput() {
    return this._snapshotGroupName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackEcsSnapshotGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackEcsSnapshotGroupTimeouts) {
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
      create_time: cdktf.stringToTerraform(this._createTime),
      description: cdktf.stringToTerraform(this._description),
      disk_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._diskIds),
      exclude_disk_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeDiskIds),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instant_access: cdktf.booleanToTerraform(this._instantAccess),
      instant_access_retention_days: cdktf.numberToTerraform(this._instantAccessRetentionDays),
      snapshot_group_name: cdktf.stringToTerraform(this._snapshotGroupName),
      timeouts: apsarastackEcsSnapshotGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
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
      disk_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._diskIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_disk_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeDiskIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      instant_access: {
        value: cdktf.booleanToHclTerraform(this._instantAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instant_access_retention_days: {
        value: cdktf.numberToHclTerraform(this._instantAccessRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_group_name: {
        value: cdktf.stringToHclTerraform(this._snapshotGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apsarastackEcsSnapshotGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackEcsSnapshotGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
