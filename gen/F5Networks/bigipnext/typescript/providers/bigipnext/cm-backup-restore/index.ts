// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmBackupRestoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether backup (if True) or restore (if false) is to be done on CM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#backup CmBackupRestore#backup}
  */
  readonly backup: boolean | cdktf.IResolvable;
  /**
  * Specifies From which Day of the month backup should start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#day_of_the_month_to_run CmBackupRestore#day_of_the_month_to_run}
  */
  readonly dayOfTheMonthToRun?: number;
  /**
  * Specifies Day of the week on backup has been scheduled. 0-Sunday, 1-Monday and so on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#days_of_the_week_to_run CmBackupRestore#days_of_the_week_to_run}
  */
  readonly daysOfTheWeekToRun?: number[];
  /**
  * Encryption password for the backup to be created. Password should be minimum of 8 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#encryption_password CmBackupRestore#encryption_password}
  */
  readonly encryptionPassword: string;
  /**
  * Specifies what is the frequency. Example : Daily, Monthly, Weekly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#frequency CmBackupRestore#frequency}
  */
  readonly frequency?: string;
  /**
  * The unique name of the backup file. Actual File Name is auto-generated in the case of Instant Backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#name CmBackupRestore#name}
  */
  readonly name: string;
  /**
  * Specifies whether backup is to be scheduled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#schedule CmBackupRestore#schedule}
  */
  readonly schedule?: CmBackupRestoreSchedule;
}
export interface CmBackupRestoreSchedule {
  /**
  * Specifies End time of the backup. Example: 2019-08-24T14:15:22Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#end_at CmBackupRestore#end_at}
  */
  readonly endAt?: string;
  /**
  * Specifies Start time of the backup. Example: 2019-08-24T14:15:22Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#start_at CmBackupRestore#start_at}
  */
  readonly startAt: string;
}

export function cmBackupRestoreScheduleToTerraform(struct?: CmBackupRestoreSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_at: cdktf.stringToTerraform(struct!.endAt),
    start_at: cdktf.stringToTerraform(struct!.startAt),
  }
}


export function cmBackupRestoreScheduleToHclTerraform(struct?: CmBackupRestoreSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_at: {
      value: cdktf.stringToHclTerraform(struct!.endAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_at: {
      value: cdktf.stringToHclTerraform(struct!.startAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmBackupRestoreScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmBackupRestoreSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAt = this._endAt;
    }
    if (this._startAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAt = this._startAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmBackupRestoreSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAt = undefined;
      this._startAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAt = value.endAt;
      this._startAt = value.startAt;
    }
  }

  // end_at - computed: false, optional: true, required: false
  private _endAt?: string; 
  public get endAt() {
    return this.getStringAttribute('end_at');
  }
  public set endAt(value: string) {
    this._endAt = value;
  }
  public resetEndAt() {
    this._endAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAtInput() {
    return this._endAt;
  }

  // start_at - computed: false, optional: false, required: true
  private _startAt?: string; 
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
  public set startAt(value: string) {
    this._startAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore bigipnext_cm_backup_restore}
*/
export class CmBackupRestore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_backup_restore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmBackupRestore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmBackupRestore to import
  * @param importFromId The id of the existing CmBackupRestore that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmBackupRestore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_backup_restore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_backup_restore bigipnext_cm_backup_restore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmBackupRestoreConfig
  */
  public constructor(scope: Construct, id: string, config: CmBackupRestoreConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_backup_restore',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backup = config.backup;
    this._dayOfTheMonthToRun = config.dayOfTheMonthToRun;
    this._daysOfTheWeekToRun = config.daysOfTheWeekToRun;
    this._encryptionPassword = config.encryptionPassword;
    this._frequency = config.frequency;
    this._name = config.name;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup - computed: false, optional: false, required: true
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // day_of_the_month_to_run - computed: false, optional: true, required: false
  private _dayOfTheMonthToRun?: number; 
  public get dayOfTheMonthToRun() {
    return this.getNumberAttribute('day_of_the_month_to_run');
  }
  public set dayOfTheMonthToRun(value: number) {
    this._dayOfTheMonthToRun = value;
  }
  public resetDayOfTheMonthToRun() {
    this._dayOfTheMonthToRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfTheMonthToRunInput() {
    return this._dayOfTheMonthToRun;
  }

  // days_of_the_week_to_run - computed: false, optional: true, required: false
  private _daysOfTheWeekToRun?: number[]; 
  public get daysOfTheWeekToRun() {
    return this.getNumberListAttribute('days_of_the_week_to_run');
  }
  public set daysOfTheWeekToRun(value: number[]) {
    this._daysOfTheWeekToRun = value;
  }
  public resetDaysOfTheWeekToRun() {
    this._daysOfTheWeekToRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfTheWeekToRunInput() {
    return this._daysOfTheWeekToRun;
  }

  // encryption_password - computed: false, optional: false, required: true
  private _encryptionPassword?: string; 
  public get encryptionPassword() {
    return this.getStringAttribute('encryption_password');
  }
  public set encryptionPassword(value: string) {
    this._encryptionPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPasswordInput() {
    return this._encryptionPassword;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CmBackupRestoreScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CmBackupRestoreSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // scheduled - computed: true, optional: false, required: false
  public get scheduled() {
    return this.getBooleanAttribute('scheduled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup: cdktf.booleanToTerraform(this._backup),
      day_of_the_month_to_run: cdktf.numberToTerraform(this._dayOfTheMonthToRun),
      days_of_the_week_to_run: cdktf.listMapper(cdktf.numberToTerraform, false)(this._daysOfTheWeekToRun),
      encryption_password: cdktf.stringToTerraform(this._encryptionPassword),
      frequency: cdktf.stringToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      schedule: cmBackupRestoreScheduleToTerraform(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup: {
        value: cdktf.booleanToHclTerraform(this._backup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      day_of_the_month_to_run: {
        value: cdktf.numberToHclTerraform(this._dayOfTheMonthToRun),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      days_of_the_week_to_run: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._daysOfTheWeekToRun),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      encryption_password: {
        value: cdktf.stringToHclTerraform(this._encryptionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      schedule: {
        value: cmBackupRestoreScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmBackupRestoreSchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
