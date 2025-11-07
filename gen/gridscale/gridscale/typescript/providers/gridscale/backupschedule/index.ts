// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupscheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The status of the schedule active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#active Backupschedule#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * UUID of the location where your backup is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#backup_location_uuid Backupschedule#backup_location_uuid}
  */
  readonly backupLocationUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#id Backupschedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The amount of storage backups to keep before overwriting the last created backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#keep_backups Backupschedule#keep_backups}
  */
  readonly keepBackups: number;
  /**
  * The human-readable name of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#name Backupschedule#name}
  */
  readonly name: string;
  /**
  * The date and time that the storage backup schedule will be run. Format: "2006-01-02 15:04:05"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#next_runtime Backupschedule#next_runtime}
  */
  readonly nextRuntime: string;
  /**
  * The interval at which the schedule will run (in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#run_interval Backupschedule#run_interval}
  */
  readonly runInterval: number;
  /**
  * UUID of the storage used to create storage backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#storage_uuid Backupschedule#storage_uuid}
  */
  readonly storageUuid: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#timeouts Backupschedule#timeouts}
  */
  readonly timeouts?: BackupscheduleTimeouts;
}
export interface BackupscheduleStorageBackups {
}

export function backupscheduleStorageBackupsToTerraform(struct?: BackupscheduleStorageBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function backupscheduleStorageBackupsToHclTerraform(struct?: BackupscheduleStorageBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BackupscheduleStorageBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BackupscheduleStorageBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupscheduleStorageBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_uuid - computed: true, optional: false, required: false
  public get objectUuid() {
    return this.getStringAttribute('object_uuid');
  }
}

export class BackupscheduleStorageBackupsList extends cdktf.ComplexList {

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
  public get(index: number): BackupscheduleStorageBackupsOutputReference {
    return new BackupscheduleStorageBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupscheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#create Backupschedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#delete Backupschedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#update Backupschedule#update}
  */
  readonly update?: string;
}

export function backupscheduleTimeoutsToTerraform(struct?: BackupscheduleTimeouts | cdktf.IResolvable): any {
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


export function backupscheduleTimeoutsToHclTerraform(struct?: BackupscheduleTimeouts | cdktf.IResolvable): any {
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

export class BackupscheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupscheduleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackupscheduleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule gridscale_backupschedule}
*/
export class Backupschedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_backupschedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Backupschedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Backupschedule to import
  * @param importFromId The id of the existing Backupschedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Backupschedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_backupschedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/backupschedule gridscale_backupschedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupscheduleConfig
  */
  public constructor(scope: Construct, id: string, config: BackupscheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_backupschedule',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3'
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
    this._backupLocationUuid = config.backupLocationUuid;
    this._id = config.id;
    this._keepBackups = config.keepBackups;
    this._name = config.name;
    this._nextRuntime = config.nextRuntime;
    this._runInterval = config.runInterval;
    this._storageUuid = config.storageUuid;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // backup_location_name - computed: true, optional: false, required: false
  public get backupLocationName() {
    return this.getStringAttribute('backup_location_name');
  }

  // backup_location_uuid - computed: true, optional: true, required: false
  private _backupLocationUuid?: string; 
  public get backupLocationUuid() {
    return this.getStringAttribute('backup_location_uuid');
  }
  public set backupLocationUuid(value: string) {
    this._backupLocationUuid = value;
  }
  public resetBackupLocationUuid() {
    this._backupLocationUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocationUuidInput() {
    return this._backupLocationUuid;
  }

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // keep_backups - computed: false, optional: false, required: true
  private _keepBackups?: number; 
  public get keepBackups() {
    return this.getNumberAttribute('keep_backups');
  }
  public set keepBackups(value: number) {
    this._keepBackups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepBackupsInput() {
    return this._keepBackups;
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

  // next_runtime - computed: false, optional: false, required: true
  private _nextRuntime?: string; 
  public get nextRuntime() {
    return this.getStringAttribute('next_runtime');
  }
  public set nextRuntime(value: string) {
    this._nextRuntime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRuntimeInput() {
    return this._nextRuntime;
  }

  // next_runtime_computed - computed: true, optional: false, required: false
  public get nextRuntimeComputed() {
    return this.getStringAttribute('next_runtime_computed');
  }

  // run_interval - computed: false, optional: false, required: true
  private _runInterval?: number; 
  public get runInterval() {
    return this.getNumberAttribute('run_interval');
  }
  public set runInterval(value: number) {
    this._runInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runIntervalInput() {
    return this._runInterval;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_backups - computed: true, optional: false, required: false
  private _storageBackups = new BackupscheduleStorageBackupsList(this, "storage_backups", true);
  public get storageBackups() {
    return this._storageBackups;
  }

  // storage_uuid - computed: false, optional: false, required: true
  private _storageUuid?: string; 
  public get storageUuid() {
    return this.getStringAttribute('storage_uuid');
  }
  public set storageUuid(value: string) {
    this._storageUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUuidInput() {
    return this._storageUuid;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupscheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupscheduleTimeouts) {
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
      backup_location_uuid: cdktf.stringToTerraform(this._backupLocationUuid),
      id: cdktf.stringToTerraform(this._id),
      keep_backups: cdktf.numberToTerraform(this._keepBackups),
      name: cdktf.stringToTerraform(this._name),
      next_runtime: cdktf.stringToTerraform(this._nextRuntime),
      run_interval: cdktf.numberToTerraform(this._runInterval),
      storage_uuid: cdktf.stringToTerraform(this._storageUuid),
      timeouts: backupscheduleTimeoutsToTerraform(this._timeouts.internalValue),
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
      backup_location_uuid: {
        value: cdktf.stringToHclTerraform(this._backupLocationUuid),
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
      keep_backups: {
        value: cdktf.numberToHclTerraform(this._keepBackups),
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
      next_runtime: {
        value: cdktf.stringToHclTerraform(this._nextRuntime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_interval: {
        value: cdktf.numberToHclTerraform(this._runInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_uuid: {
        value: cdktf.stringToHclTerraform(this._storageUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: backupscheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupscheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
