// https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerBackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup schedule details for the backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#backup_properties ServerBackupSchedule#backup_properties}
  */
  readonly backupProperties: ServerBackupScheduleBackupProperties;
  /**
  * Is the backup schedule enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#enabled ServerBackupSchedule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The schedule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#name ServerBackupSchedule#name}
  */
  readonly name: string;
  /**
  * STACKIT Project ID to which the server is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#project_id ServerBackupSchedule#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#region ServerBackupSchedule#region}
  */
  readonly region?: string;
  /**
  * Backup schedule described in `rrule` (recurrence rule) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#rrule ServerBackupSchedule#rrule}
  */
  readonly rrule: string;
  /**
  * Server ID for the backup schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#server_id ServerBackupSchedule#server_id}
  */
  readonly serverId: string;
}
export interface ServerBackupScheduleBackupProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#name ServerBackupSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#retention_period ServerBackupSchedule#retention_period}
  */
  readonly retentionPeriod: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#volume_ids ServerBackupSchedule#volume_ids}
  */
  readonly volumeIds?: string[];
}

export function serverBackupScheduleBackupPropertiesToTerraform(struct?: ServerBackupScheduleBackupProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    retention_period: cdktf.numberToTerraform(struct!.retentionPeriod),
    volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeIds),
  }
}


export function serverBackupScheduleBackupPropertiesToHclTerraform(struct?: ServerBackupScheduleBackupProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerBackupScheduleBackupPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerBackupScheduleBackupProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    if (this._volumeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeIds = this._volumeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerBackupScheduleBackupProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._retentionPeriod = undefined;
      this._volumeIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._retentionPeriod = value.retentionPeriod;
      this._volumeIds = value.volumeIds;
    }
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

  // retention_period - computed: false, optional: false, required: true
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // volume_ids - computed: false, optional: true, required: false
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return this.getListAttribute('volume_ids');
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  public resetVolumeIds() {
    this._volumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule stackit_server_backup_schedule}
*/
export class ServerBackupSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_server_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerBackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerBackupSchedule to import
  * @param importFromId The id of the existing ServerBackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerBackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_server_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/resources/server_backup_schedule stackit_server_backup_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerBackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ServerBackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_server_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupProperties.internalValue = config.backupProperties;
    this._enabled = config.enabled;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._rrule = config.rrule;
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_properties - computed: false, optional: false, required: true
  private _backupProperties = new ServerBackupScheduleBackupPropertiesOutputReference(this, "backup_properties");
  public get backupProperties() {
    return this._backupProperties;
  }
  public putBackupProperties(value: ServerBackupScheduleBackupProperties) {
    this._backupProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPropertiesInput() {
    return this._backupProperties.internalValue;
  }

  // backup_schedule_id - computed: true, optional: false, required: false
  public get backupScheduleId() {
    return this.getNumberAttribute('backup_schedule_id');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rrule - computed: false, optional: false, required: true
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_properties: serverBackupScheduleBackupPropertiesToTerraform(this._backupProperties.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      rrule: cdktf.stringToTerraform(this._rrule),
      server_id: cdktf.stringToTerraform(this._serverId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_properties: {
        value: serverBackupScheduleBackupPropertiesToHclTerraform(this._backupProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerBackupScheduleBackupProperties",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rrule: {
        value: cdktf.stringToHclTerraform(this._rrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
