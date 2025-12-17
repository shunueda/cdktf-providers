// https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbflexInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Access Control List (ACL) for the MongoDB Flex instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#acl MongodbflexInstance#acl}
  */
  readonly acl: string[];
  /**
  * The backup schedule. Should follow the cron scheduling system format (e.g. "0 0 * * *").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#backup_schedule MongodbflexInstance#backup_schedule}
  */
  readonly backupSchedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#flavor MongodbflexInstance#flavor}
  */
  readonly flavor: MongodbflexInstanceFlavor;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#name MongodbflexInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#options MongodbflexInstance#options}
  */
  readonly options: MongodbflexInstanceOptions;
  /**
  * STACKIT project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#project_id MongodbflexInstance#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#region MongodbflexInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#replicas MongodbflexInstance#replicas}
  */
  readonly replicas: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#storage MongodbflexInstance#storage}
  */
  readonly storage: MongodbflexInstanceStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#version MongodbflexInstance#version}
  */
  readonly version: string;
}
export interface MongodbflexInstanceFlavor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#cpu MongodbflexInstance#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#ram MongodbflexInstance#ram}
  */
  readonly ram: number;
}

export function mongodbflexInstanceFlavorToTerraform(struct?: MongodbflexInstanceFlavor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    ram: cdktf.numberToTerraform(struct!.ram),
  }
}


export function mongodbflexInstanceFlavorToHclTerraform(struct?: MongodbflexInstanceFlavor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram: {
      value: cdktf.numberToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbflexInstanceFlavorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MongodbflexInstanceFlavor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbflexInstanceFlavor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._ram = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._ram = value.ram;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }
}
export interface MongodbflexInstanceOptions {
  /**
  * The number of days that daily backups will be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#daily_snapshot_retention_days MongodbflexInstance#daily_snapshot_retention_days}
  */
  readonly dailySnapshotRetentionDays?: number;
  /**
  * The number of months that monthly backups will be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#monthly_snapshot_retention_months MongodbflexInstance#monthly_snapshot_retention_months}
  */
  readonly monthlySnapshotRetentionMonths?: number;
  /**
  * The number of hours back in time the point-in-time recovery feature will be able to recover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#point_in_time_window_hours MongodbflexInstance#point_in_time_window_hours}
  */
  readonly pointInTimeWindowHours: number;
  /**
  * The number of days that continuous backups (controlled via the `backup_schedule`) will be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#snapshot_retention_days MongodbflexInstance#snapshot_retention_days}
  */
  readonly snapshotRetentionDays?: number;
  /**
  * Type of the MongoDB Flex instance. Possible values are: `Replica`, `Sharded`, `Single`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#type MongodbflexInstance#type}
  */
  readonly type: string;
  /**
  * The number of weeks that weekly backups will be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#weekly_snapshot_retention_weeks MongodbflexInstance#weekly_snapshot_retention_weeks}
  */
  readonly weeklySnapshotRetentionWeeks?: number;
}

export function mongodbflexInstanceOptionsToTerraform(struct?: MongodbflexInstanceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_snapshot_retention_days: cdktf.numberToTerraform(struct!.dailySnapshotRetentionDays),
    monthly_snapshot_retention_months: cdktf.numberToTerraform(struct!.monthlySnapshotRetentionMonths),
    point_in_time_window_hours: cdktf.numberToTerraform(struct!.pointInTimeWindowHours),
    snapshot_retention_days: cdktf.numberToTerraform(struct!.snapshotRetentionDays),
    type: cdktf.stringToTerraform(struct!.type),
    weekly_snapshot_retention_weeks: cdktf.numberToTerraform(struct!.weeklySnapshotRetentionWeeks),
  }
}


export function mongodbflexInstanceOptionsToHclTerraform(struct?: MongodbflexInstanceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily_snapshot_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.dailySnapshotRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthly_snapshot_retention_months: {
      value: cdktf.numberToHclTerraform(struct!.monthlySnapshotRetentionMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_in_time_window_hours: {
      value: cdktf.numberToHclTerraform(struct!.pointInTimeWindowHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.snapshotRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly_snapshot_retention_weeks: {
      value: cdktf.numberToHclTerraform(struct!.weeklySnapshotRetentionWeeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbflexInstanceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MongodbflexInstanceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailySnapshotRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySnapshotRetentionDays = this._dailySnapshotRetentionDays;
    }
    if (this._monthlySnapshotRetentionMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySnapshotRetentionMonths = this._monthlySnapshotRetentionMonths;
    }
    if (this._pointInTimeWindowHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeWindowHours = this._pointInTimeWindowHours;
    }
    if (this._snapshotRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetentionDays = this._snapshotRetentionDays;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weeklySnapshotRetentionWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySnapshotRetentionWeeks = this._weeklySnapshotRetentionWeeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbflexInstanceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dailySnapshotRetentionDays = undefined;
      this._monthlySnapshotRetentionMonths = undefined;
      this._pointInTimeWindowHours = undefined;
      this._snapshotRetentionDays = undefined;
      this._type = undefined;
      this._weeklySnapshotRetentionWeeks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dailySnapshotRetentionDays = value.dailySnapshotRetentionDays;
      this._monthlySnapshotRetentionMonths = value.monthlySnapshotRetentionMonths;
      this._pointInTimeWindowHours = value.pointInTimeWindowHours;
      this._snapshotRetentionDays = value.snapshotRetentionDays;
      this._type = value.type;
      this._weeklySnapshotRetentionWeeks = value.weeklySnapshotRetentionWeeks;
    }
  }

  // daily_snapshot_retention_days - computed: true, optional: true, required: false
  private _dailySnapshotRetentionDays?: number; 
  public get dailySnapshotRetentionDays() {
    return this.getNumberAttribute('daily_snapshot_retention_days');
  }
  public set dailySnapshotRetentionDays(value: number) {
    this._dailySnapshotRetentionDays = value;
  }
  public resetDailySnapshotRetentionDays() {
    this._dailySnapshotRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailySnapshotRetentionDaysInput() {
    return this._dailySnapshotRetentionDays;
  }

  // monthly_snapshot_retention_months - computed: true, optional: true, required: false
  private _monthlySnapshotRetentionMonths?: number; 
  public get monthlySnapshotRetentionMonths() {
    return this.getNumberAttribute('monthly_snapshot_retention_months');
  }
  public set monthlySnapshotRetentionMonths(value: number) {
    this._monthlySnapshotRetentionMonths = value;
  }
  public resetMonthlySnapshotRetentionMonths() {
    this._monthlySnapshotRetentionMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlySnapshotRetentionMonthsInput() {
    return this._monthlySnapshotRetentionMonths;
  }

  // point_in_time_window_hours - computed: false, optional: false, required: true
  private _pointInTimeWindowHours?: number; 
  public get pointInTimeWindowHours() {
    return this.getNumberAttribute('point_in_time_window_hours');
  }
  public set pointInTimeWindowHours(value: number) {
    this._pointInTimeWindowHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeWindowHoursInput() {
    return this._pointInTimeWindowHours;
  }

  // snapshot_retention_days - computed: true, optional: true, required: false
  private _snapshotRetentionDays?: number; 
  public get snapshotRetentionDays() {
    return this.getNumberAttribute('snapshot_retention_days');
  }
  public set snapshotRetentionDays(value: number) {
    this._snapshotRetentionDays = value;
  }
  public resetSnapshotRetentionDays() {
    this._snapshotRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionDaysInput() {
    return this._snapshotRetentionDays;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weekly_snapshot_retention_weeks - computed: true, optional: true, required: false
  private _weeklySnapshotRetentionWeeks?: number; 
  public get weeklySnapshotRetentionWeeks() {
    return this.getNumberAttribute('weekly_snapshot_retention_weeks');
  }
  public set weeklySnapshotRetentionWeeks(value: number) {
    this._weeklySnapshotRetentionWeeks = value;
  }
  public resetWeeklySnapshotRetentionWeeks() {
    this._weeklySnapshotRetentionWeeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklySnapshotRetentionWeeksInput() {
    return this._weeklySnapshotRetentionWeeks;
  }
}
export interface MongodbflexInstanceStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#class MongodbflexInstance#class}
  */
  readonly class: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#size MongodbflexInstance#size}
  */
  readonly size: number;
}

export function mongodbflexInstanceStorageToTerraform(struct?: MongodbflexInstanceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function mongodbflexInstanceStorageToHclTerraform(struct?: MongodbflexInstanceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbflexInstanceStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MongodbflexInstanceStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbflexInstanceStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._size = value.size;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance stackit_mongodbflex_instance}
*/
export class MongodbflexInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_mongodbflex_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbflexInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbflexInstance to import
  * @param importFromId The id of the existing MongodbflexInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbflexInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_mongodbflex_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/mongodbflex_instance stackit_mongodbflex_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbflexInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbflexInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_mongodbflex_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.74.0',
        providerVersionConstraint: '0.74.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._backupSchedule = config.backupSchedule;
    this._flavor.internalValue = config.flavor;
    this._name = config.name;
    this._options.internalValue = config.options;
    this._projectId = config.projectId;
    this._region = config.region;
    this._replicas = config.replicas;
    this._storage.internalValue = config.storage;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: false, required: true
  private _acl?: string[]; 
  public get acl() {
    return this.getListAttribute('acl');
  }
  public set acl(value: string[]) {
    this._acl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // backup_schedule - computed: false, optional: false, required: true
  private _backupSchedule?: string; 
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }
  public set backupSchedule(value: string) {
    this._backupSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor = new MongodbflexInstanceFlavorOutputReference(this, "flavor");
  public get flavor() {
    return this._flavor;
  }
  public putFlavor(value: MongodbflexInstanceFlavor) {
    this._flavor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
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

  // options - computed: false, optional: false, required: true
  private _options = new MongodbflexInstanceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: MongodbflexInstanceOptions) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
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

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new MongodbflexInstanceStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: MongodbflexInstanceStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acl),
      backup_schedule: cdktf.stringToTerraform(this._backupSchedule),
      flavor: mongodbflexInstanceFlavorToTerraform(this._flavor.internalValue),
      name: cdktf.stringToTerraform(this._name),
      options: mongodbflexInstanceOptionsToTerraform(this._options.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      replicas: cdktf.numberToTerraform(this._replicas),
      storage: mongodbflexInstanceStorageToTerraform(this._storage.internalValue),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backup_schedule: {
        value: cdktf.stringToHclTerraform(this._backupSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: mongodbflexInstanceFlavorToHclTerraform(this._flavor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MongodbflexInstanceFlavor",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: mongodbflexInstanceOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MongodbflexInstanceOptions",
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
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage: {
        value: mongodbflexInstanceStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MongodbflexInstanceStorage",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
