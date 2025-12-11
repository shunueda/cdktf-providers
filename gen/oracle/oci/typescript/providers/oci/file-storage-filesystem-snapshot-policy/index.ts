// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileStorageFilesystemSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}
  */
  readonly policyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}
  */
  readonly state?: string;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#locks FileStorageFilesystemSnapshotPolicy#locks}
  */
  readonly locks?: FileStorageFilesystemSnapshotPolicyLocks[] | cdktf.IResolvable;
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#schedules FileStorageFilesystemSnapshotPolicy#schedules}
  */
  readonly schedules?: FileStorageFilesystemSnapshotPolicySchedules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#timeouts FileStorageFilesystemSnapshotPolicy#timeouts}
  */
  readonly timeouts?: FileStorageFilesystemSnapshotPolicyTimeouts;
}
export interface FileStorageFilesystemSnapshotPolicyLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}
  */
  readonly relatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}
  */
  readonly type: string;
}

export function fileStorageFilesystemSnapshotPolicyLocksToTerraform(struct?: FileStorageFilesystemSnapshotPolicyLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    related_resource_id: cdktf.stringToTerraform(struct!.relatedResourceId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fileStorageFilesystemSnapshotPolicyLocksToHclTerraform(struct?: FileStorageFilesystemSnapshotPolicyLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.relatedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageFilesystemSnapshotPolicyLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileStorageFilesystemSnapshotPolicyLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._relatedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedResourceId = this._relatedResourceId;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageFilesystemSnapshotPolicyLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._relatedResourceId = undefined;
      this._timeCreated = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._relatedResourceId = value.relatedResourceId;
      this._timeCreated = value.timeCreated;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: true, required: false
  private _relatedResourceId?: string; 
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }
  public set relatedResourceId(value: string) {
    this._relatedResourceId = value;
  }
  public resetRelatedResourceId() {
    this._relatedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceIdInput() {
    return this._relatedResourceId;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
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
}

export class FileStorageFilesystemSnapshotPolicyLocksList extends cdktf.ComplexList {
  public internalValue? : FileStorageFilesystemSnapshotPolicyLocks[] | cdktf.IResolvable

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
  public get(index: number): FileStorageFilesystemSnapshotPolicyLocksOutputReference {
    return new FileStorageFilesystemSnapshotPolicyLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileStorageFilesystemSnapshotPolicySchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}
  */
  readonly month?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}
  */
  readonly period: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}
  */
  readonly retentionDurationInSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}
  */
  readonly schedulePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}
  */
  readonly timeScheduleStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}
  */
  readonly timeZone: string;
}

export function fileStorageFilesystemSnapshotPolicySchedulesToTerraform(struct?: FileStorageFilesystemSnapshotPolicySchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    month: cdktf.stringToTerraform(struct!.month),
    period: cdktf.stringToTerraform(struct!.period),
    retention_duration_in_seconds: cdktf.stringToTerraform(struct!.retentionDurationInSeconds),
    schedule_prefix: cdktf.stringToTerraform(struct!.schedulePrefix),
    time_schedule_start: cdktf.stringToTerraform(struct!.timeScheduleStart),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function fileStorageFilesystemSnapshotPolicySchedulesToHclTerraform(struct?: FileStorageFilesystemSnapshotPolicySchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_duration_in_seconds: {
      value: cdktf.stringToHclTerraform(struct!.retentionDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_prefix: {
      value: cdktf.stringToHclTerraform(struct!.schedulePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_schedule_start: {
      value: cdktf.stringToHclTerraform(struct!.timeScheduleStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageFilesystemSnapshotPolicySchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileStorageFilesystemSnapshotPolicySchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._retentionDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDurationInSeconds = this._retentionDurationInSeconds;
    }
    if (this._schedulePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulePrefix = this._schedulePrefix;
    }
    if (this._timeScheduleStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeScheduleStart = this._timeScheduleStart;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageFilesystemSnapshotPolicySchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._hourOfDay = undefined;
      this._month = undefined;
      this._period = undefined;
      this._retentionDurationInSeconds = undefined;
      this._schedulePrefix = undefined;
      this._timeScheduleStart = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._hourOfDay = value.hourOfDay;
      this._month = value.month;
      this._period = value.period;
      this._retentionDurationInSeconds = value.retentionDurationInSeconds;
      this._schedulePrefix = value.schedulePrefix;
      this._timeScheduleStart = value.timeScheduleStart;
      this._timeZone = value.timeZone;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // month - computed: false, optional: true, required: false
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // retention_duration_in_seconds - computed: true, optional: true, required: false
  private _retentionDurationInSeconds?: string; 
  public get retentionDurationInSeconds() {
    return this.getStringAttribute('retention_duration_in_seconds');
  }
  public set retentionDurationInSeconds(value: string) {
    this._retentionDurationInSeconds = value;
  }
  public resetRetentionDurationInSeconds() {
    this._retentionDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInSecondsInput() {
    return this._retentionDurationInSeconds;
  }

  // schedule_prefix - computed: true, optional: true, required: false
  private _schedulePrefix?: string; 
  public get schedulePrefix() {
    return this.getStringAttribute('schedule_prefix');
  }
  public set schedulePrefix(value: string) {
    this._schedulePrefix = value;
  }
  public resetSchedulePrefix() {
    this._schedulePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulePrefixInput() {
    return this._schedulePrefix;
  }

  // time_schedule_start - computed: true, optional: true, required: false
  private _timeScheduleStart?: string; 
  public get timeScheduleStart() {
    return this.getStringAttribute('time_schedule_start');
  }
  public set timeScheduleStart(value: string) {
    this._timeScheduleStart = value;
  }
  public resetTimeScheduleStart() {
    this._timeScheduleStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScheduleStartInput() {
    return this._timeScheduleStart;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class FileStorageFilesystemSnapshotPolicySchedulesList extends cdktf.ComplexList {
  public internalValue? : FileStorageFilesystemSnapshotPolicySchedules[] | cdktf.IResolvable

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
  public get(index: number): FileStorageFilesystemSnapshotPolicySchedulesOutputReference {
    return new FileStorageFilesystemSnapshotPolicySchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileStorageFilesystemSnapshotPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}
  */
  readonly update?: string;
}

export function fileStorageFilesystemSnapshotPolicyTimeoutsToTerraform(struct?: FileStorageFilesystemSnapshotPolicyTimeouts | cdktf.IResolvable): any {
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


export function fileStorageFilesystemSnapshotPolicyTimeoutsToHclTerraform(struct?: FileStorageFilesystemSnapshotPolicyTimeouts | cdktf.IResolvable): any {
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

export class FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FileStorageFilesystemSnapshotPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FileStorageFilesystemSnapshotPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}
*/
export class FileStorageFilesystemSnapshotPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_file_storage_filesystem_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileStorageFilesystemSnapshotPolicy to import
  * @param importFromId The id of the existing FileStorageFilesystemSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileStorageFilesystemSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_file_storage_filesystem_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileStorageFilesystemSnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FileStorageFilesystemSnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_filesystem_snapshot_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isLockOverride = config.isLockOverride;
    this._policyPrefix = config.policyPrefix;
    this._state = config.state;
    this._locks.internalValue = config.locks;
    this._schedules.internalValue = config.schedules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // policy_prefix - computed: true, optional: true, required: false
  private _policyPrefix?: string; 
  public get policyPrefix() {
    return this.getStringAttribute('policy_prefix');
  }
  public set policyPrefix(value: string) {
    this._policyPrefix = value;
  }
  public resetPolicyPrefix() {
    this._policyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPrefixInput() {
    return this._policyPrefix;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new FileStorageFilesystemSnapshotPolicyLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: FileStorageFilesystemSnapshotPolicyLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new FileStorageFilesystemSnapshotPolicySchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: FileStorageFilesystemSnapshotPolicySchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FileStorageFilesystemSnapshotPolicyTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      policy_prefix: cdktf.stringToTerraform(this._policyPrefix),
      state: cdktf.stringToTerraform(this._state),
      locks: cdktf.listMapper(fileStorageFilesystemSnapshotPolicyLocksToTerraform, true)(this._locks.internalValue),
      schedules: cdktf.listMapper(fileStorageFilesystemSnapshotPolicySchedulesToTerraform, true)(this._schedules.internalValue),
      timeouts: fileStorageFilesystemSnapshotPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_prefix: {
        value: cdktf.stringToHclTerraform(this._policyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locks: {
        value: cdktf.listMapperHcl(fileStorageFilesystemSnapshotPolicyLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageFilesystemSnapshotPolicyLocksList",
      },
      schedules: {
        value: cdktf.listMapperHcl(fileStorageFilesystemSnapshotPolicySchedulesToHclTerraform, true)(this._schedules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageFilesystemSnapshotPolicySchedulesList",
      },
      timeouts: {
        value: fileStorageFilesystemSnapshotPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FileStorageFilesystemSnapshotPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
