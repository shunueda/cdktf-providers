// https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of resources allowed to access the database. Accepted values include `any`, `IPv4 address`, `server identifier`, `server group identifier`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#allow_access DatabaseServer#allow_access}
  */
  readonly allowAccess: string[];
  /**
  * The DBMS engine of the Database Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#database_engine DatabaseServer#database_engine}
  */
  readonly databaseEngine?: string;
  /**
  * ID of the database type to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#database_type DatabaseServer#database_type}
  */
  readonly databaseType?: string;
  /**
  * The version of the given engine in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#database_version DatabaseServer#database_version}
  */
  readonly databaseVersion?: string;
  /**
  * Editable user label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#description DatabaseServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#id DatabaseServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial password required to login, only available at creation or following a password reset request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#locked DatabaseServer#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Number representing 24hr time start of maintenance window hour for x:00-x:59 (0-23)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#maintenance_hour DatabaseServer#maintenance_hour}
  */
  readonly maintenanceHour?: number;
  /**
  * Numerical index of weekday (0 is Sunday, 1 is Monday...) to set when automatic updates may be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#maintenance_weekday DatabaseServer#maintenance_weekday}
  */
  readonly maintenanceWeekday?: number;
  /**
  * Editable user label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#name DatabaseServer#name}
  */
  readonly name?: string;
  /**
  * Identifier for an SQL snapshot to use as the basis of the new instance. Creates and restores the database from the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#snapshot DatabaseServer#snapshot}
  */
  readonly snapshot?: string;
  /**
  * Keep this number of scheduled snapshots. Keep all if unset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#snapshots_retention DatabaseServer#snapshots_retention}
  */
  readonly snapshotsRetention?: string;
  /**
  * Crontab pattern for scheduled snapshots. Must be at least hourly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#snapshots_schedule DatabaseServer#snapshots_schedule}
  */
  readonly snapshotsSchedule?: string;
  /**
  * ID of the zone the database server is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#zone DatabaseServer#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#timeouts DatabaseServer#timeouts}
  */
  readonly timeouts?: DatabaseServerTimeouts;
}
export interface DatabaseServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#create DatabaseServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#delete DatabaseServer#delete}
  */
  readonly delete?: string;
}

export function databaseServerTimeoutsToTerraform(struct?: DatabaseServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function databaseServerTimeoutsToHclTerraform(struct?: DatabaseServerTimeouts | cdktf.IResolvable): any {
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

export class DatabaseServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseServerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server brightbox_database_server}
*/
export class DatabaseServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "brightbox_database_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseServer to import
  * @param importFromId The id of the existing DatabaseServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "brightbox_database_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/database_server brightbox_database_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseServerConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseServerConfig) {
    super(scope, id, {
      terraformResourceType: 'brightbox_database_server',
      terraformGeneratorMetadata: {
        providerName: 'brightbox',
        providerVersion: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAccess = config.allowAccess;
    this._databaseEngine = config.databaseEngine;
    this._databaseType = config.databaseType;
    this._databaseVersion = config.databaseVersion;
    this._description = config.description;
    this._id = config.id;
    this._locked = config.locked;
    this._maintenanceHour = config.maintenanceHour;
    this._maintenanceWeekday = config.maintenanceWeekday;
    this._name = config.name;
    this._snapshot = config.snapshot;
    this._snapshotsRetention = config.snapshotsRetention;
    this._snapshotsSchedule = config.snapshotsSchedule;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // allow_access - computed: false, optional: false, required: true
  private _allowAccess?: string[]; 
  public get allowAccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_access'));
  }
  public set allowAccess(value: string[]) {
    this._allowAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessInput() {
    return this._allowAccess;
  }

  // database_engine - computed: true, optional: true, required: false
  private _databaseEngine?: string; 
  public get databaseEngine() {
    return this.getStringAttribute('database_engine');
  }
  public set databaseEngine(value: string) {
    this._databaseEngine = value;
  }
  public resetDatabaseEngine() {
    this._databaseEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEngineInput() {
    return this._databaseEngine;
  }

  // database_type - computed: true, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // database_version - computed: true, optional: true, required: false
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  public resetDatabaseVersion() {
    this._databaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
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

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // maintenance_hour - computed: true, optional: true, required: false
  private _maintenanceHour?: number; 
  public get maintenanceHour() {
    return this.getNumberAttribute('maintenance_hour');
  }
  public set maintenanceHour(value: number) {
    this._maintenanceHour = value;
  }
  public resetMaintenanceHour() {
    this._maintenanceHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceHourInput() {
    return this._maintenanceHour;
  }

  // maintenance_weekday - computed: true, optional: true, required: false
  private _maintenanceWeekday?: number; 
  public get maintenanceWeekday() {
    return this.getNumberAttribute('maintenance_weekday');
  }
  public set maintenanceWeekday(value: number) {
    this._maintenanceWeekday = value;
  }
  public resetMaintenanceWeekday() {
    this._maintenanceWeekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWeekdayInput() {
    return this._maintenanceWeekday;
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

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // snapshots_retention - computed: false, optional: true, required: false
  private _snapshotsRetention?: string; 
  public get snapshotsRetention() {
    return this.getStringAttribute('snapshots_retention');
  }
  public set snapshotsRetention(value: string) {
    this._snapshotsRetention = value;
  }
  public resetSnapshotsRetention() {
    this._snapshotsRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsRetentionInput() {
    return this._snapshotsRetention;
  }

  // snapshots_schedule - computed: false, optional: true, required: false
  private _snapshotsSchedule?: string; 
  public get snapshotsSchedule() {
    return this.getStringAttribute('snapshots_schedule');
  }
  public set snapshotsSchedule(value: string) {
    this._snapshotsSchedule = value;
  }
  public resetSnapshotsSchedule() {
    this._snapshotsSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsScheduleInput() {
    return this._snapshotsSchedule;
  }

  // snapshots_schedule_next_at - computed: true, optional: false, required: false
  public get snapshotsScheduleNextAt() {
    return this.getStringAttribute('snapshots_schedule_next_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseServerTimeouts) {
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
      allow_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowAccess),
      database_engine: cdktf.stringToTerraform(this._databaseEngine),
      database_type: cdktf.stringToTerraform(this._databaseType),
      database_version: cdktf.stringToTerraform(this._databaseVersion),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      locked: cdktf.booleanToTerraform(this._locked),
      maintenance_hour: cdktf.numberToTerraform(this._maintenanceHour),
      maintenance_weekday: cdktf.numberToTerraform(this._maintenanceWeekday),
      name: cdktf.stringToTerraform(this._name),
      snapshot: cdktf.stringToTerraform(this._snapshot),
      snapshots_retention: cdktf.stringToTerraform(this._snapshotsRetention),
      snapshots_schedule: cdktf.stringToTerraform(this._snapshotsSchedule),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: databaseServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowAccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      database_engine: {
        value: cdktf.stringToHclTerraform(this._databaseEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_version: {
        value: cdktf.stringToHclTerraform(this._databaseVersion),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintenance_hour: {
        value: cdktf.numberToHclTerraform(this._maintenanceHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintenance_weekday: {
        value: cdktf.numberToHclTerraform(this._maintenanceWeekday),
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
      snapshot: {
        value: cdktf.stringToHclTerraform(this._snapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshots_retention: {
        value: cdktf.stringToHclTerraform(this._snapshotsRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshots_schedule: {
        value: cdktf.stringToHclTerraform(this._snapshotsSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
