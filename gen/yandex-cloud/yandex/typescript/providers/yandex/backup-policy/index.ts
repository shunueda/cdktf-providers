// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of generated archives. Default `[Machine Name]-[Plan ID]-[Unique ID]a`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#archive_name BackupPolicy#archive_name}
  */
  readonly archiveName?: string;
  /**
  * Configuration of Changed Block Tracking. Available values are: `USE_IF_ENABLED`, `ENABLED_AND_USE`, `DO_NOT_USE`. Default `DO_NOT_USE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#cbt BackupPolicy#cbt}
  */
  readonly cbt?: string;
  /**
  * Archive compression level. Affects CPU. Available values: `NORMAL`, `HIGH`, `MAX`, `OFF`. Default: `NORMAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#compression BackupPolicy#compression}
  */
  readonly compression?: string;
  /**
  * If true, determines whether a file has changed by the file size and timestamp. Otherwise, the entire file contents are compared to those stored in the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#fast_backup_enabled BackupPolicy#fast_backup_enabled}
  */
  readonly fastBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#folder_id BackupPolicy#folder_id}
  */
  readonly folderId?: string;
  /**
  * Format of the backup. It's strongly recommend to leave this option empty or `AUTO`. Available values: `AUTO`, `VERSION_11`, `VERSION_12`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#format BackupPolicy#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#id BackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LVM will be used to create the volume snapshot. If LVM fails to create a snapshot (for example, because there is not enough free space), the software will create the snapshot itself. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#lvm_snapshotting_enabled BackupPolicy#lvm_snapshotting_enabled}
  */
  readonly lvmSnapshottingEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, snapshots of multiple volumes will be taken simultaneously. Default `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#multi_volume_snapshotting_enabled BackupPolicy#multi_volume_snapshotting_enabled}
  */
  readonly multiVolumeSnapshottingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#name BackupPolicy#name}
  */
  readonly name: string;
  /**
  * Time windows for performance limitations of backup. Default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#performance_window_enabled BackupPolicy#performance_window_enabled}
  */
  readonly performanceWindowEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, a quiesced snapshot of the virtual machine will be taken. Default `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#preserve_file_security_settings BackupPolicy#preserve_file_security_settings}
  */
  readonly preserveFileSecuritySettings?: boolean | cdktf.IResolvable;
  /**
  * If true, a quiesced snapshot of the virtual machine will be taken. Default `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#quiesce_snapshotting_enabled BackupPolicy#quiesce_snapshotting_enabled}
  */
  readonly quiesceSnapshottingEnabled?: boolean | cdktf.IResolvable;
  /**
  * A sector-by-sector backup of a disk or volume creates a backup copy of all sectors of the disk or volume, including those that do not contain data. Therefore, the size of such a backup copy will be equal to the size of the original disk or volume. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#sector_by_sector BackupPolicy#sector_by_sector}
  */
  readonly sectorBySector?: boolean | cdktf.IResolvable;
  /**
  * If true, a user interaction will be avoided when possible. Default `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#silent_mode_enabled BackupPolicy#silent_mode_enabled}
  */
  readonly silentModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines the size to split backups. It's better to leave this option unchanged. Default `9223372036854775807`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#splitting_bytes BackupPolicy#splitting_bytes}
  */
  readonly splittingBytes?: string;
  /**
  * Validation is a time-consuming process, even with incremental or differential backups of small amounts of data. This is because not only the data physically contained in the backup copy is verified, but all data restored when it is selected. This option requires access to previously created backup copies. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#validation_enabled BackupPolicy#validation_enabled}
  */
  readonly validationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Settings for the volume shadow copy service. Available values are: `NATIVE`, `TARGET_SYSTEM_DEFINED`. Default `NATIVE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#vss_provider BackupPolicy#vss_provider}
  */
  readonly vssProvider?: string;
  /**
  * file_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#file_filters BackupPolicy#file_filters}
  */
  readonly fileFilters?: BackupPolicyFileFilters;
  /**
  * reattempts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#reattempts BackupPolicy#reattempts}
  */
  readonly reattempts: BackupPolicyReattempts;
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#retention BackupPolicy#retention}
  */
  readonly retention: BackupPolicyRetention;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#scheduling BackupPolicy#scheduling}
  */
  readonly scheduling: BackupPolicyScheduling;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#timeouts BackupPolicy#timeouts}
  */
  readonly timeouts?: BackupPolicyTimeouts;
  /**
  * vm_snapshot_reattempts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#vm_snapshot_reattempts BackupPolicy#vm_snapshot_reattempts}
  */
  readonly vmSnapshotReattempts: BackupPolicyVmSnapshotReattempts;
}
export interface BackupPolicyFileFilters {
  /**
  * Do not backup files that match the following criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#exclusion_masks BackupPolicy#exclusion_masks}
  */
  readonly exclusionMasks?: string[];
  /**
  * Backup only files that match the following criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#inclusion_masks BackupPolicy#inclusion_masks}
  */
  readonly inclusionMasks?: string[];
}

export function backupPolicyFileFiltersToTerraform(struct?: BackupPolicyFileFiltersOutputReference | BackupPolicyFileFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_masks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionMasks),
    inclusion_masks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionMasks),
  }
}


export function backupPolicyFileFiltersToHclTerraform(struct?: BackupPolicyFileFiltersOutputReference | BackupPolicyFileFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_masks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusionMasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_masks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionMasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyFileFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyFileFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionMasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionMasks = this._exclusionMasks;
    }
    if (this._inclusionMasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionMasks = this._inclusionMasks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyFileFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusionMasks = undefined;
      this._inclusionMasks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusionMasks = value.exclusionMasks;
      this._inclusionMasks = value.inclusionMasks;
    }
  }

  // exclusion_masks - computed: false, optional: true, required: false
  private _exclusionMasks?: string[]; 
  public get exclusionMasks() {
    return this.getListAttribute('exclusion_masks');
  }
  public set exclusionMasks(value: string[]) {
    this._exclusionMasks = value;
  }
  public resetExclusionMasks() {
    this._exclusionMasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionMasksInput() {
    return this._exclusionMasks;
  }

  // inclusion_masks - computed: false, optional: true, required: false
  private _inclusionMasks?: string[]; 
  public get inclusionMasks() {
    return this.getListAttribute('inclusion_masks');
  }
  public set inclusionMasks(value: string[]) {
    this._inclusionMasks = value;
  }
  public resetInclusionMasks() {
    this._inclusionMasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionMasksInput() {
    return this._inclusionMasks;
  }
}
export interface BackupPolicyReattempts {
  /**
  * Enable flag. Default `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#enabled BackupPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Retry interval. See `interval_type` for available values. Default: `5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#interval BackupPolicy#interval}
  */
  readonly interval?: string;
  /**
  * Maximum number of attempts before throwing an error. Default `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#max_attempts BackupPolicy#max_attempts}
  */
  readonly maxAttempts?: number;
}

export function backupPolicyReattemptsToTerraform(struct?: BackupPolicyReattemptsOutputReference | BackupPolicyReattempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
  }
}


export function backupPolicyReattemptsToHclTerraform(struct?: BackupPolicyReattemptsOutputReference | BackupPolicyReattempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyReattemptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyReattempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyReattempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._interval = undefined;
      this._maxAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._interval = value.interval;
      this._maxAttempts = value.maxAttempts;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }
}
export interface BackupPolicyRetentionRules {
  /**
  * Deletes backups that older than `max_age`. Exactly one of `max_count` or `max_age` should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#max_age BackupPolicy#max_age}
  */
  readonly maxAge?: string;
  /**
  * Deletes backups if it's count exceeds `max_count`. Exactly one of `max_count` or `max_age` should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#max_count BackupPolicy#max_count}
  */
  readonly maxCount?: number;
  /**
  * Possible types: `REPEATE_PERIOD_UNSPECIFIED`, `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`. Specifies repeat period of the backupset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#repeat_period BackupPolicy#repeat_period}
  */
  readonly repeatPeriod?: string[];
}

export function backupPolicyRetentionRulesToTerraform(struct?: BackupPolicyRetentionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    repeat_period: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repeatPeriod),
  }
}


export function backupPolicyRetentionRulesToHclTerraform(struct?: BackupPolicyRetentionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat_period: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repeatPeriod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyRetentionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupPolicyRetentionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._repeatPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatPeriod = this._repeatPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyRetentionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxAge = undefined;
      this._maxCount = undefined;
      this._repeatPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxAge = value.maxAge;
      this._maxCount = value.maxCount;
      this._repeatPeriod = value.repeatPeriod;
    }
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // repeat_period - computed: false, optional: true, required: false
  private _repeatPeriod?: string[]; 
  public get repeatPeriod() {
    return this.getListAttribute('repeat_period');
  }
  public set repeatPeriod(value: string[]) {
    this._repeatPeriod = value;
  }
  public resetRepeatPeriod() {
    this._repeatPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatPeriodInput() {
    return this._repeatPeriod;
  }
}

export class BackupPolicyRetentionRulesList extends cdktf.ComplexList {
  public internalValue? : BackupPolicyRetentionRules[] | cdktf.IResolvable

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
  public get(index: number): BackupPolicyRetentionRulesOutputReference {
    return new BackupPolicyRetentionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupPolicyRetention {
  /**
  * Defines whether retention rule applies after creating backup or before.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#after_backup BackupPolicy#after_backup}
  */
  readonly afterBackup?: boolean | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#rules BackupPolicy#rules}
  */
  readonly rules?: BackupPolicyRetentionRules[] | cdktf.IResolvable;
}

export function backupPolicyRetentionToTerraform(struct?: BackupPolicyRetentionOutputReference | BackupPolicyRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_backup: cdktf.booleanToTerraform(struct!.afterBackup),
    rules: cdktf.listMapper(backupPolicyRetentionRulesToTerraform, true)(struct!.rules),
  }
}


export function backupPolicyRetentionToHclTerraform(struct?: BackupPolicyRetentionOutputReference | BackupPolicyRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_backup: {
      value: cdktf.booleanToHclTerraform(struct!.afterBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(backupPolicyRetentionRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "BackupPolicyRetentionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterBackup = this._afterBackup;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterBackup = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterBackup = value.afterBackup;
      this._rules.internalValue = value.rules;
    }
  }

  // after_backup - computed: false, optional: true, required: false
  private _afterBackup?: boolean | cdktf.IResolvable; 
  public get afterBackup() {
    return this.getBooleanAttribute('after_backup');
  }
  public set afterBackup(value: boolean | cdktf.IResolvable) {
    this._afterBackup = value;
  }
  public resetAfterBackup() {
    this._afterBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterBackupInput() {
    return this._afterBackup;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new BackupPolicyRetentionRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: BackupPolicyRetentionRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface BackupPolicySchedulingBackupSetsExecuteByTime {
  /**
  * If true, schedule will be applied on the last day of month. See `day_type` for available values. Default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#include_last_day_of_month BackupPolicy#include_last_day_of_month}
  */
  readonly includeLastDayOfMonth?: boolean | cdktf.IResolvable;
  /**
  * List of days when schedule applies. Used in `MONTHLY` type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#monthdays BackupPolicy#monthdays}
  */
  readonly monthdays?: number[];
  /**
  * Set of values. Allowed values form 1 to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#months BackupPolicy#months}
  */
  readonly months?: number[];
  /**
  * List of time in format `HH:MM` (24-hours format), when the schedule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#repeat_at BackupPolicy#repeat_at}
  */
  readonly repeatAt?: string[];
  /**
  * Frequency of backup repetition. See `interval_type` for available values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#repeat_every BackupPolicy#repeat_every}
  */
  readonly repeatEvery?: string;
  /**
  * If true and if the machine is off, launch missed tasks on boot up. Default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#run_later BackupPolicy#run_later}
  */
  readonly runLater?: boolean | cdktf.IResolvable;
  /**
  * Type of the scheduling. Available values are: `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#type BackupPolicy#type}
  */
  readonly type: string;
  /**
  * List of weekdays when the backup will be applied. Used in `WEEKLY` type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#weekdays BackupPolicy#weekdays}
  */
  readonly weekdays?: string[];
}

export function backupPolicySchedulingBackupSetsExecuteByTimeToTerraform(struct?: BackupPolicySchedulingBackupSetsExecuteByTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_last_day_of_month: cdktf.booleanToTerraform(struct!.includeLastDayOfMonth),
    monthdays: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.monthdays),
    months: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.months),
    repeat_at: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repeatAt),
    repeat_every: cdktf.stringToTerraform(struct!.repeatEvery),
    run_later: cdktf.booleanToTerraform(struct!.runLater),
    type: cdktf.stringToTerraform(struct!.type),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function backupPolicySchedulingBackupSetsExecuteByTimeToHclTerraform(struct?: BackupPolicySchedulingBackupSetsExecuteByTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.includeLastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monthdays: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.monthdays),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    repeat_at: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repeatAt),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repeat_every: {
      value: cdktf.stringToHclTerraform(struct!.repeatEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_later: {
      value: cdktf.booleanToHclTerraform(struct!.runLater),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicySchedulingBackupSetsExecuteByTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupPolicySchedulingBackupSetsExecuteByTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeLastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLastDayOfMonth = this._includeLastDayOfMonth;
    }
    if (this._monthdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthdays = this._monthdays;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._repeatAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatAt = this._repeatAt;
    }
    if (this._repeatEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatEvery = this._repeatEvery;
    }
    if (this._runLater !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLater = this._runLater;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicySchedulingBackupSetsExecuteByTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeLastDayOfMonth = undefined;
      this._monthdays = undefined;
      this._months = undefined;
      this._repeatAt = undefined;
      this._repeatEvery = undefined;
      this._runLater = undefined;
      this._type = undefined;
      this._weekdays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeLastDayOfMonth = value.includeLastDayOfMonth;
      this._monthdays = value.monthdays;
      this._months = value.months;
      this._repeatAt = value.repeatAt;
      this._repeatEvery = value.repeatEvery;
      this._runLater = value.runLater;
      this._type = value.type;
      this._weekdays = value.weekdays;
    }
  }

  // include_last_day_of_month - computed: false, optional: true, required: false
  private _includeLastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get includeLastDayOfMonth() {
    return this.getBooleanAttribute('include_last_day_of_month');
  }
  public set includeLastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._includeLastDayOfMonth = value;
  }
  public resetIncludeLastDayOfMonth() {
    this._includeLastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLastDayOfMonthInput() {
    return this._includeLastDayOfMonth;
  }

  // monthdays - computed: false, optional: true, required: false
  private _monthdays?: number[]; 
  public get monthdays() {
    return this.getNumberListAttribute('monthdays');
  }
  public set monthdays(value: number[]) {
    this._monthdays = value;
  }
  public resetMonthdays() {
    this._monthdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthdaysInput() {
    return this._monthdays;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number[]; 
  public get months() {
    return this.getNumberListAttribute('months');
  }
  public set months(value: number[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // repeat_at - computed: false, optional: true, required: false
  private _repeatAt?: string[]; 
  public get repeatAt() {
    return this.getListAttribute('repeat_at');
  }
  public set repeatAt(value: string[]) {
    this._repeatAt = value;
  }
  public resetRepeatAt() {
    this._repeatAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatAtInput() {
    return this._repeatAt;
  }

  // repeat_every - computed: false, optional: true, required: false
  private _repeatEvery?: string; 
  public get repeatEvery() {
    return this.getStringAttribute('repeat_every');
  }
  public set repeatEvery(value: string) {
    this._repeatEvery = value;
  }
  public resetRepeatEvery() {
    this._repeatEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatEveryInput() {
    return this._repeatEvery;
  }

  // run_later - computed: false, optional: true, required: false
  private _runLater?: boolean | cdktf.IResolvable; 
  public get runLater() {
    return this.getBooleanAttribute('run_later');
  }
  public set runLater(value: boolean | cdktf.IResolvable) {
    this._runLater = value;
  }
  public resetRunLater() {
    this._runLater = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLaterInput() {
    return this._runLater;
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

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}

export class BackupPolicySchedulingBackupSetsExecuteByTimeList extends cdktf.ComplexList {
  public internalValue? : BackupPolicySchedulingBackupSetsExecuteByTime[] | cdktf.IResolvable

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
  public get(index: number): BackupPolicySchedulingBackupSetsExecuteByTimeOutputReference {
    return new BackupPolicySchedulingBackupSetsExecuteByTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupPolicySchedulingBackupSets {
  /**
  * Perform backup by interval, since last backup of the host. Maximum value is: 9999 days. See `interval_type` for available values. Exactly on of options should be set: `execute_by_interval` or `execute_by_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#execute_by_interval BackupPolicy#execute_by_interval}
  */
  readonly executeByInterval?: number;
  /**
  * BackupSet type. See `backup_set_type` for available values. Default `TYPE_AUTO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#type BackupPolicy#type}
  */
  readonly type?: string;
  /**
  * execute_by_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#execute_by_time BackupPolicy#execute_by_time}
  */
  readonly executeByTime?: BackupPolicySchedulingBackupSetsExecuteByTime[] | cdktf.IResolvable;
}

export function backupPolicySchedulingBackupSetsToTerraform(struct?: BackupPolicySchedulingBackupSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_by_interval: cdktf.numberToTerraform(struct!.executeByInterval),
    type: cdktf.stringToTerraform(struct!.type),
    execute_by_time: cdktf.listMapper(backupPolicySchedulingBackupSetsExecuteByTimeToTerraform, true)(struct!.executeByTime),
  }
}


export function backupPolicySchedulingBackupSetsToHclTerraform(struct?: BackupPolicySchedulingBackupSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_by_interval: {
      value: cdktf.numberToHclTerraform(struct!.executeByInterval),
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
    execute_by_time: {
      value: cdktf.listMapperHcl(backupPolicySchedulingBackupSetsExecuteByTimeToHclTerraform, true)(struct!.executeByTime),
      isBlock: true,
      type: "set",
      storageClassType: "BackupPolicySchedulingBackupSetsExecuteByTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicySchedulingBackupSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupPolicySchedulingBackupSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeByInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeByInterval = this._executeByInterval;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._executeByTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeByTime = this._executeByTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicySchedulingBackupSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executeByInterval = undefined;
      this._type = undefined;
      this._executeByTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executeByInterval = value.executeByInterval;
      this._type = value.type;
      this._executeByTime.internalValue = value.executeByTime;
    }
  }

  // execute_by_interval - computed: false, optional: true, required: false
  private _executeByInterval?: number; 
  public get executeByInterval() {
    return this.getNumberAttribute('execute_by_interval');
  }
  public set executeByInterval(value: number) {
    this._executeByInterval = value;
  }
  public resetExecuteByInterval() {
    this._executeByInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeByIntervalInput() {
    return this._executeByInterval;
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

  // execute_by_time - computed: false, optional: true, required: false
  private _executeByTime = new BackupPolicySchedulingBackupSetsExecuteByTimeList(this, "execute_by_time", true);
  public get executeByTime() {
    return this._executeByTime;
  }
  public putExecuteByTime(value: BackupPolicySchedulingBackupSetsExecuteByTime[] | cdktf.IResolvable) {
    this._executeByTime.internalValue = value;
  }
  public resetExecuteByTime() {
    this._executeByTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeByTimeInput() {
    return this._executeByTime.internalValue;
  }
}

export class BackupPolicySchedulingBackupSetsList extends cdktf.ComplexList {
  public internalValue? : BackupPolicySchedulingBackupSets[] | cdktf.IResolvable

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
  public get(index: number): BackupPolicySchedulingBackupSetsOutputReference {
    return new BackupPolicySchedulingBackupSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupPolicySchedulingExecuteByTime {
  /**
  * If true, schedule will be applied on the last day of month. See `day_type` for available values. Default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#include_last_day_of_month BackupPolicy#include_last_day_of_month}
  */
  readonly includeLastDayOfMonth?: boolean | cdktf.IResolvable;
  /**
  * List of days when schedule applies. Used in `MONTHLY` type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#monthdays BackupPolicy#monthdays}
  */
  readonly monthdays?: number[];
  /**
  * Set of values. Allowed values form 1 to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#months BackupPolicy#months}
  */
  readonly months?: number[];
  /**
  * List of time in format `HH:MM` (24-hours format), when the schedule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#repeat_at BackupPolicy#repeat_at}
  */
  readonly repeatAt?: string[];
  /**
  * Frequency of backup repetition. See `interval_type` for available values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#repeat_every BackupPolicy#repeat_every}
  */
  readonly repeatEvery?: string;
  /**
  * If true and if the machine is off, launch missed tasks on boot up. Default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#run_later BackupPolicy#run_later}
  */
  readonly runLater?: boolean | cdktf.IResolvable;
  /**
  * Type of the scheduling. Available values are: `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#type BackupPolicy#type}
  */
  readonly type: string;
  /**
  * List of weekdays when the backup will be applied. Used in `WEEKLY` type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#weekdays BackupPolicy#weekdays}
  */
  readonly weekdays?: string[];
}

export function backupPolicySchedulingExecuteByTimeToTerraform(struct?: BackupPolicySchedulingExecuteByTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_last_day_of_month: cdktf.booleanToTerraform(struct!.includeLastDayOfMonth),
    monthdays: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.monthdays),
    months: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.months),
    repeat_at: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repeatAt),
    repeat_every: cdktf.stringToTerraform(struct!.repeatEvery),
    run_later: cdktf.booleanToTerraform(struct!.runLater),
    type: cdktf.stringToTerraform(struct!.type),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function backupPolicySchedulingExecuteByTimeToHclTerraform(struct?: BackupPolicySchedulingExecuteByTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.includeLastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monthdays: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.monthdays),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    repeat_at: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repeatAt),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repeat_every: {
      value: cdktf.stringToHclTerraform(struct!.repeatEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_later: {
      value: cdktf.booleanToHclTerraform(struct!.runLater),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicySchedulingExecuteByTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupPolicySchedulingExecuteByTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeLastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLastDayOfMonth = this._includeLastDayOfMonth;
    }
    if (this._monthdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthdays = this._monthdays;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._repeatAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatAt = this._repeatAt;
    }
    if (this._repeatEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatEvery = this._repeatEvery;
    }
    if (this._runLater !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLater = this._runLater;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicySchedulingExecuteByTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeLastDayOfMonth = undefined;
      this._monthdays = undefined;
      this._months = undefined;
      this._repeatAt = undefined;
      this._repeatEvery = undefined;
      this._runLater = undefined;
      this._type = undefined;
      this._weekdays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeLastDayOfMonth = value.includeLastDayOfMonth;
      this._monthdays = value.monthdays;
      this._months = value.months;
      this._repeatAt = value.repeatAt;
      this._repeatEvery = value.repeatEvery;
      this._runLater = value.runLater;
      this._type = value.type;
      this._weekdays = value.weekdays;
    }
  }

  // include_last_day_of_month - computed: false, optional: true, required: false
  private _includeLastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get includeLastDayOfMonth() {
    return this.getBooleanAttribute('include_last_day_of_month');
  }
  public set includeLastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._includeLastDayOfMonth = value;
  }
  public resetIncludeLastDayOfMonth() {
    this._includeLastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLastDayOfMonthInput() {
    return this._includeLastDayOfMonth;
  }

  // monthdays - computed: false, optional: true, required: false
  private _monthdays?: number[]; 
  public get monthdays() {
    return this.getNumberListAttribute('monthdays');
  }
  public set monthdays(value: number[]) {
    this._monthdays = value;
  }
  public resetMonthdays() {
    this._monthdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthdaysInput() {
    return this._monthdays;
  }

  // months - computed: false, optional: true, required: false
  private _months?: number[]; 
  public get months() {
    return this.getNumberListAttribute('months');
  }
  public set months(value: number[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // repeat_at - computed: false, optional: true, required: false
  private _repeatAt?: string[]; 
  public get repeatAt() {
    return this.getListAttribute('repeat_at');
  }
  public set repeatAt(value: string[]) {
    this._repeatAt = value;
  }
  public resetRepeatAt() {
    this._repeatAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatAtInput() {
    return this._repeatAt;
  }

  // repeat_every - computed: false, optional: true, required: false
  private _repeatEvery?: string; 
  public get repeatEvery() {
    return this.getStringAttribute('repeat_every');
  }
  public set repeatEvery(value: string) {
    this._repeatEvery = value;
  }
  public resetRepeatEvery() {
    this._repeatEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatEveryInput() {
    return this._repeatEvery;
  }

  // run_later - computed: false, optional: true, required: false
  private _runLater?: boolean | cdktf.IResolvable; 
  public get runLater() {
    return this.getBooleanAttribute('run_later');
  }
  public set runLater(value: boolean | cdktf.IResolvable) {
    this._runLater = value;
  }
  public resetRunLater() {
    this._runLater = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLaterInput() {
    return this._runLater;
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

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}

export class BackupPolicySchedulingExecuteByTimeList extends cdktf.ComplexList {
  public internalValue? : BackupPolicySchedulingExecuteByTime[] | cdktf.IResolvable

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
  public get(index: number): BackupPolicySchedulingExecuteByTimeOutputReference {
    return new BackupPolicySchedulingExecuteByTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupPolicyScheduling {
  /**
  * Enables or disables scheduling. Default `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#enabled BackupPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  *  Perform backup by interval, since last backup of the host. Maximum value is: 9999 days. See `interval_type` for available values. Exactly on of options should be set: `execute_by_interval` or `execute_by_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#execute_by_interval BackupPolicy#execute_by_interval}
  */
  readonly executeByInterval?: number;
  /**
  * Maximum number of backup processes allowed to run in parallel. 0 for unlimited. Default `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#max_parallel_backups BackupPolicy#max_parallel_backups}
  */
  readonly maxParallelBackups?: number;
  /**
  * Configuration of the random delay between the execution of parallel tasks. See `interval_type` for available values. Default `30m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#random_max_delay BackupPolicy#random_max_delay}
  */
  readonly randomMaxDelay?: string;
  /**
  * Scheme of the backups. Available values are: `ALWAYS_INCREMENTAL`, `ALWAYS_FULL`, `WEEKLY_FULL_DAILY_INCREMENTAL`, `WEEKLY_INCREMENTAL`. Default `ALWAYS_INCREMENTAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#scheme BackupPolicy#scheme}
  */
  readonly scheme?: string;
  /**
  * A day of week to start weekly backups. See `day_type` for available values. Default `MONDAY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#weekly_backup_day BackupPolicy#weekly_backup_day}
  */
  readonly weeklyBackupDay?: string;
  /**
  * backup_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#backup_sets BackupPolicy#backup_sets}
  */
  readonly backupSets?: BackupPolicySchedulingBackupSets[] | cdktf.IResolvable;
  /**
  * execute_by_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#execute_by_time BackupPolicy#execute_by_time}
  */
  readonly executeByTime?: BackupPolicySchedulingExecuteByTime[] | cdktf.IResolvable;
}

export function backupPolicySchedulingToTerraform(struct?: BackupPolicySchedulingOutputReference | BackupPolicyScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    execute_by_interval: cdktf.numberToTerraform(struct!.executeByInterval),
    max_parallel_backups: cdktf.numberToTerraform(struct!.maxParallelBackups),
    random_max_delay: cdktf.stringToTerraform(struct!.randomMaxDelay),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    weekly_backup_day: cdktf.stringToTerraform(struct!.weeklyBackupDay),
    backup_sets: cdktf.listMapper(backupPolicySchedulingBackupSetsToTerraform, true)(struct!.backupSets),
    execute_by_time: cdktf.listMapper(backupPolicySchedulingExecuteByTimeToTerraform, true)(struct!.executeByTime),
  }
}


export function backupPolicySchedulingToHclTerraform(struct?: BackupPolicySchedulingOutputReference | BackupPolicyScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute_by_interval: {
      value: cdktf.numberToHclTerraform(struct!.executeByInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parallel_backups: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelBackups),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    random_max_delay: {
      value: cdktf.stringToHclTerraform(struct!.randomMaxDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly_backup_day: {
      value: cdktf.stringToHclTerraform(struct!.weeklyBackupDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_sets: {
      value: cdktf.listMapperHcl(backupPolicySchedulingBackupSetsToHclTerraform, true)(struct!.backupSets),
      isBlock: true,
      type: "set",
      storageClassType: "BackupPolicySchedulingBackupSetsList",
    },
    execute_by_time: {
      value: cdktf.listMapperHcl(backupPolicySchedulingExecuteByTimeToHclTerraform, true)(struct!.executeByTime),
      isBlock: true,
      type: "set",
      storageClassType: "BackupPolicySchedulingExecuteByTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicySchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._executeByInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeByInterval = this._executeByInterval;
    }
    if (this._maxParallelBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelBackups = this._maxParallelBackups;
    }
    if (this._randomMaxDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomMaxDelay = this._randomMaxDelay;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._weeklyBackupDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyBackupDay = this._weeklyBackupDay;
    }
    if (this._backupSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSets = this._backupSets?.internalValue;
    }
    if (this._executeByTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeByTime = this._executeByTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._executeByInterval = undefined;
      this._maxParallelBackups = undefined;
      this._randomMaxDelay = undefined;
      this._scheme = undefined;
      this._weeklyBackupDay = undefined;
      this._backupSets.internalValue = undefined;
      this._executeByTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._executeByInterval = value.executeByInterval;
      this._maxParallelBackups = value.maxParallelBackups;
      this._randomMaxDelay = value.randomMaxDelay;
      this._scheme = value.scheme;
      this._weeklyBackupDay = value.weeklyBackupDay;
      this._backupSets.internalValue = value.backupSets;
      this._executeByTime.internalValue = value.executeByTime;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // execute_by_interval - computed: false, optional: true, required: false
  private _executeByInterval?: number; 
  public get executeByInterval() {
    return this.getNumberAttribute('execute_by_interval');
  }
  public set executeByInterval(value: number) {
    this._executeByInterval = value;
  }
  public resetExecuteByInterval() {
    this._executeByInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeByIntervalInput() {
    return this._executeByInterval;
  }

  // max_parallel_backups - computed: false, optional: true, required: false
  private _maxParallelBackups?: number; 
  public get maxParallelBackups() {
    return this.getNumberAttribute('max_parallel_backups');
  }
  public set maxParallelBackups(value: number) {
    this._maxParallelBackups = value;
  }
  public resetMaxParallelBackups() {
    this._maxParallelBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelBackupsInput() {
    return this._maxParallelBackups;
  }

  // random_max_delay - computed: false, optional: true, required: false
  private _randomMaxDelay?: string; 
  public get randomMaxDelay() {
    return this.getStringAttribute('random_max_delay');
  }
  public set randomMaxDelay(value: string) {
    this._randomMaxDelay = value;
  }
  public resetRandomMaxDelay() {
    this._randomMaxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomMaxDelayInput() {
    return this._randomMaxDelay;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // weekly_backup_day - computed: false, optional: true, required: false
  private _weeklyBackupDay?: string; 
  public get weeklyBackupDay() {
    return this.getStringAttribute('weekly_backup_day');
  }
  public set weeklyBackupDay(value: string) {
    this._weeklyBackupDay = value;
  }
  public resetWeeklyBackupDay() {
    this._weeklyBackupDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyBackupDayInput() {
    return this._weeklyBackupDay;
  }

  // backup_sets - computed: false, optional: true, required: false
  private _backupSets = new BackupPolicySchedulingBackupSetsList(this, "backup_sets", true);
  public get backupSets() {
    return this._backupSets;
  }
  public putBackupSets(value: BackupPolicySchedulingBackupSets[] | cdktf.IResolvable) {
    this._backupSets.internalValue = value;
  }
  public resetBackupSets() {
    this._backupSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSetsInput() {
    return this._backupSets.internalValue;
  }

  // execute_by_time - computed: false, optional: true, required: false
  private _executeByTime = new BackupPolicySchedulingExecuteByTimeList(this, "execute_by_time", true);
  public get executeByTime() {
    return this._executeByTime;
  }
  public putExecuteByTime(value: BackupPolicySchedulingExecuteByTime[] | cdktf.IResolvable) {
    this._executeByTime.internalValue = value;
  }
  public resetExecuteByTime() {
    this._executeByTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeByTimeInput() {
    return this._executeByTime.internalValue;
  }
}
export interface BackupPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#create BackupPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#delete BackupPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#read BackupPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#update BackupPolicy#update}
  */
  readonly update?: string;
}

export function backupPolicyTimeoutsToTerraform(struct?: BackupPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function backupPolicyTimeoutsToHclTerraform(struct?: BackupPolicyTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class BackupPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupPolicyTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface BackupPolicyVmSnapshotReattempts {
  /**
  * Enable flag. Default `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#enabled BackupPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Retry interval. See `interval_type` for available values. Default: `5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#interval BackupPolicy#interval}
  */
  readonly interval?: string;
  /**
  * Maximum number of attempts before throwing an error. Default `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#max_attempts BackupPolicy#max_attempts}
  */
  readonly maxAttempts?: number;
}

export function backupPolicyVmSnapshotReattemptsToTerraform(struct?: BackupPolicyVmSnapshotReattemptsOutputReference | BackupPolicyVmSnapshotReattempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
  }
}


export function backupPolicyVmSnapshotReattemptsToHclTerraform(struct?: BackupPolicyVmSnapshotReattemptsOutputReference | BackupPolicyVmSnapshotReattempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyVmSnapshotReattemptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyVmSnapshotReattempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyVmSnapshotReattempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._interval = undefined;
      this._maxAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._interval = value.interval;
      this._maxAttempts = value.maxAttempts;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy yandex_backup_policy}
*/
export class BackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupPolicy to import
  * @param importFromId The id of the existing BackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/backup_policy yandex_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveName = config.archiveName;
    this._cbt = config.cbt;
    this._compression = config.compression;
    this._fastBackupEnabled = config.fastBackupEnabled;
    this._folderId = config.folderId;
    this._format = config.format;
    this._id = config.id;
    this._lvmSnapshottingEnabled = config.lvmSnapshottingEnabled;
    this._multiVolumeSnapshottingEnabled = config.multiVolumeSnapshottingEnabled;
    this._name = config.name;
    this._performanceWindowEnabled = config.performanceWindowEnabled;
    this._preserveFileSecuritySettings = config.preserveFileSecuritySettings;
    this._quiesceSnapshottingEnabled = config.quiesceSnapshottingEnabled;
    this._sectorBySector = config.sectorBySector;
    this._silentModeEnabled = config.silentModeEnabled;
    this._splittingBytes = config.splittingBytes;
    this._validationEnabled = config.validationEnabled;
    this._vssProvider = config.vssProvider;
    this._fileFilters.internalValue = config.fileFilters;
    this._reattempts.internalValue = config.reattempts;
    this._retention.internalValue = config.retention;
    this._scheduling.internalValue = config.scheduling;
    this._timeouts.internalValue = config.timeouts;
    this._vmSnapshotReattempts.internalValue = config.vmSnapshotReattempts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_name - computed: false, optional: true, required: false
  private _archiveName?: string; 
  public get archiveName() {
    return this.getStringAttribute('archive_name');
  }
  public set archiveName(value: string) {
    this._archiveName = value;
  }
  public resetArchiveName() {
    this._archiveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveNameInput() {
    return this._archiveName;
  }

  // cbt - computed: false, optional: true, required: false
  private _cbt?: string; 
  public get cbt() {
    return this.getStringAttribute('cbt');
  }
  public set cbt(value: string) {
    this._cbt = value;
  }
  public resetCbt() {
    this._cbt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbtInput() {
    return this._cbt;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fast_backup_enabled - computed: false, optional: true, required: false
  private _fastBackupEnabled?: boolean | cdktf.IResolvable; 
  public get fastBackupEnabled() {
    return this.getBooleanAttribute('fast_backup_enabled');
  }
  public set fastBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._fastBackupEnabled = value;
  }
  public resetFastBackupEnabled() {
    this._fastBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastBackupEnabledInput() {
    return this._fastBackupEnabled;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // lvm_snapshotting_enabled - computed: false, optional: true, required: false
  private _lvmSnapshottingEnabled?: boolean | cdktf.IResolvable; 
  public get lvmSnapshottingEnabled() {
    return this.getBooleanAttribute('lvm_snapshotting_enabled');
  }
  public set lvmSnapshottingEnabled(value: boolean | cdktf.IResolvable) {
    this._lvmSnapshottingEnabled = value;
  }
  public resetLvmSnapshottingEnabled() {
    this._lvmSnapshottingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvmSnapshottingEnabledInput() {
    return this._lvmSnapshottingEnabled;
  }

  // multi_volume_snapshotting_enabled - computed: false, optional: true, required: false
  private _multiVolumeSnapshottingEnabled?: boolean | cdktf.IResolvable; 
  public get multiVolumeSnapshottingEnabled() {
    return this.getBooleanAttribute('multi_volume_snapshotting_enabled');
  }
  public set multiVolumeSnapshottingEnabled(value: boolean | cdktf.IResolvable) {
    this._multiVolumeSnapshottingEnabled = value;
  }
  public resetMultiVolumeSnapshottingEnabled() {
    this._multiVolumeSnapshottingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiVolumeSnapshottingEnabledInput() {
    return this._multiVolumeSnapshottingEnabled;
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

  // performance_window_enabled - computed: false, optional: true, required: false
  private _performanceWindowEnabled?: boolean | cdktf.IResolvable; 
  public get performanceWindowEnabled() {
    return this.getBooleanAttribute('performance_window_enabled');
  }
  public set performanceWindowEnabled(value: boolean | cdktf.IResolvable) {
    this._performanceWindowEnabled = value;
  }
  public resetPerformanceWindowEnabled() {
    this._performanceWindowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceWindowEnabledInput() {
    return this._performanceWindowEnabled;
  }

  // preserve_file_security_settings - computed: false, optional: true, required: false
  private _preserveFileSecuritySettings?: boolean | cdktf.IResolvable; 
  public get preserveFileSecuritySettings() {
    return this.getBooleanAttribute('preserve_file_security_settings');
  }
  public set preserveFileSecuritySettings(value: boolean | cdktf.IResolvable) {
    this._preserveFileSecuritySettings = value;
  }
  public resetPreserveFileSecuritySettings() {
    this._preserveFileSecuritySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveFileSecuritySettingsInput() {
    return this._preserveFileSecuritySettings;
  }

  // quiesce_snapshotting_enabled - computed: false, optional: true, required: false
  private _quiesceSnapshottingEnabled?: boolean | cdktf.IResolvable; 
  public get quiesceSnapshottingEnabled() {
    return this.getBooleanAttribute('quiesce_snapshotting_enabled');
  }
  public set quiesceSnapshottingEnabled(value: boolean | cdktf.IResolvable) {
    this._quiesceSnapshottingEnabled = value;
  }
  public resetQuiesceSnapshottingEnabled() {
    this._quiesceSnapshottingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quiesceSnapshottingEnabledInput() {
    return this._quiesceSnapshottingEnabled;
  }

  // sector_by_sector - computed: false, optional: true, required: false
  private _sectorBySector?: boolean | cdktf.IResolvable; 
  public get sectorBySector() {
    return this.getBooleanAttribute('sector_by_sector');
  }
  public set sectorBySector(value: boolean | cdktf.IResolvable) {
    this._sectorBySector = value;
  }
  public resetSectorBySector() {
    this._sectorBySector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectorBySectorInput() {
    return this._sectorBySector;
  }

  // silent_mode_enabled - computed: false, optional: true, required: false
  private _silentModeEnabled?: boolean | cdktf.IResolvable; 
  public get silentModeEnabled() {
    return this.getBooleanAttribute('silent_mode_enabled');
  }
  public set silentModeEnabled(value: boolean | cdktf.IResolvable) {
    this._silentModeEnabled = value;
  }
  public resetSilentModeEnabled() {
    this._silentModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentModeEnabledInput() {
    return this._silentModeEnabled;
  }

  // splitting_bytes - computed: false, optional: true, required: false
  private _splittingBytes?: string; 
  public get splittingBytes() {
    return this.getStringAttribute('splitting_bytes');
  }
  public set splittingBytes(value: string) {
    this._splittingBytes = value;
  }
  public resetSplittingBytes() {
    this._splittingBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splittingBytesInput() {
    return this._splittingBytes;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // validation_enabled - computed: false, optional: true, required: false
  private _validationEnabled?: boolean | cdktf.IResolvable; 
  public get validationEnabled() {
    return this.getBooleanAttribute('validation_enabled');
  }
  public set validationEnabled(value: boolean | cdktf.IResolvable) {
    this._validationEnabled = value;
  }
  public resetValidationEnabled() {
    this._validationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationEnabledInput() {
    return this._validationEnabled;
  }

  // vss_provider - computed: false, optional: true, required: false
  private _vssProvider?: string; 
  public get vssProvider() {
    return this.getStringAttribute('vss_provider');
  }
  public set vssProvider(value: string) {
    this._vssProvider = value;
  }
  public resetVssProvider() {
    this._vssProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vssProviderInput() {
    return this._vssProvider;
  }

  // file_filters - computed: false, optional: true, required: false
  private _fileFilters = new BackupPolicyFileFiltersOutputReference(this, "file_filters");
  public get fileFilters() {
    return this._fileFilters;
  }
  public putFileFilters(value: BackupPolicyFileFilters) {
    this._fileFilters.internalValue = value;
  }
  public resetFileFilters() {
    this._fileFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFiltersInput() {
    return this._fileFilters.internalValue;
  }

  // reattempts - computed: false, optional: false, required: true
  private _reattempts = new BackupPolicyReattemptsOutputReference(this, "reattempts");
  public get reattempts() {
    return this._reattempts;
  }
  public putReattempts(value: BackupPolicyReattempts) {
    this._reattempts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reattemptsInput() {
    return this._reattempts.internalValue;
  }

  // retention - computed: false, optional: false, required: true
  private _retention = new BackupPolicyRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: BackupPolicyRetention) {
    this._retention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // scheduling - computed: false, optional: false, required: true
  private _scheduling = new BackupPolicySchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: BackupPolicyScheduling) {
    this._scheduling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vm_snapshot_reattempts - computed: false, optional: false, required: true
  private _vmSnapshotReattempts = new BackupPolicyVmSnapshotReattemptsOutputReference(this, "vm_snapshot_reattempts");
  public get vmSnapshotReattempts() {
    return this._vmSnapshotReattempts;
  }
  public putVmSnapshotReattempts(value: BackupPolicyVmSnapshotReattempts) {
    this._vmSnapshotReattempts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSnapshotReattemptsInput() {
    return this._vmSnapshotReattempts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_name: cdktf.stringToTerraform(this._archiveName),
      cbt: cdktf.stringToTerraform(this._cbt),
      compression: cdktf.stringToTerraform(this._compression),
      fast_backup_enabled: cdktf.booleanToTerraform(this._fastBackupEnabled),
      folder_id: cdktf.stringToTerraform(this._folderId),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      lvm_snapshotting_enabled: cdktf.booleanToTerraform(this._lvmSnapshottingEnabled),
      multi_volume_snapshotting_enabled: cdktf.booleanToTerraform(this._multiVolumeSnapshottingEnabled),
      name: cdktf.stringToTerraform(this._name),
      performance_window_enabled: cdktf.booleanToTerraform(this._performanceWindowEnabled),
      preserve_file_security_settings: cdktf.booleanToTerraform(this._preserveFileSecuritySettings),
      quiesce_snapshotting_enabled: cdktf.booleanToTerraform(this._quiesceSnapshottingEnabled),
      sector_by_sector: cdktf.booleanToTerraform(this._sectorBySector),
      silent_mode_enabled: cdktf.booleanToTerraform(this._silentModeEnabled),
      splitting_bytes: cdktf.stringToTerraform(this._splittingBytes),
      validation_enabled: cdktf.booleanToTerraform(this._validationEnabled),
      vss_provider: cdktf.stringToTerraform(this._vssProvider),
      file_filters: backupPolicyFileFiltersToTerraform(this._fileFilters.internalValue),
      reattempts: backupPolicyReattemptsToTerraform(this._reattempts.internalValue),
      retention: backupPolicyRetentionToTerraform(this._retention.internalValue),
      scheduling: backupPolicySchedulingToTerraform(this._scheduling.internalValue),
      timeouts: backupPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      vm_snapshot_reattempts: backupPolicyVmSnapshotReattemptsToTerraform(this._vmSnapshotReattempts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_name: {
        value: cdktf.stringToHclTerraform(this._archiveName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbt: {
        value: cdktf.stringToHclTerraform(this._cbt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression: {
        value: cdktf.stringToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._fastBackupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      lvm_snapshotting_enabled: {
        value: cdktf.booleanToHclTerraform(this._lvmSnapshottingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_volume_snapshotting_enabled: {
        value: cdktf.booleanToHclTerraform(this._multiVolumeSnapshottingEnabled),
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
      performance_window_enabled: {
        value: cdktf.booleanToHclTerraform(this._performanceWindowEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preserve_file_security_settings: {
        value: cdktf.booleanToHclTerraform(this._preserveFileSecuritySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quiesce_snapshotting_enabled: {
        value: cdktf.booleanToHclTerraform(this._quiesceSnapshottingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sector_by_sector: {
        value: cdktf.booleanToHclTerraform(this._sectorBySector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      silent_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._silentModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      splitting_bytes: {
        value: cdktf.stringToHclTerraform(this._splittingBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_enabled: {
        value: cdktf.booleanToHclTerraform(this._validationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vss_provider: {
        value: cdktf.stringToHclTerraform(this._vssProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_filters: {
        value: backupPolicyFileFiltersToHclTerraform(this._fileFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupPolicyFileFiltersList",
      },
      reattempts: {
        value: backupPolicyReattemptsToHclTerraform(this._reattempts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackupPolicyReattemptsList",
      },
      retention: {
        value: backupPolicyRetentionToHclTerraform(this._retention.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackupPolicyRetentionList",
      },
      scheduling: {
        value: backupPolicySchedulingToHclTerraform(this._scheduling.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackupPolicySchedulingList",
      },
      timeouts: {
        value: backupPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupPolicyTimeouts",
      },
      vm_snapshot_reattempts: {
        value: backupPolicyVmSnapshotReattemptsToHclTerraform(this._vmSnapshotReattempts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackupPolicyVmSnapshotReattemptsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
