// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureVaultBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#id AzureVaultBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the infrastructure.  Infrastructure names are globally unique and less than 13 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#infra_name AzureVaultBackupPolicy#infra_name}
  */
  readonly infraName: string;
  /**
  * Specifies the instant restore retention range in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#instant_restore_retention_days AzureVaultBackupPolicy#instant_restore_retention_days}
  */
  readonly instantRestoreRetentionDays?: number;
  /**
  * Specifies the name of the vault backup policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#name AzureVaultBackupPolicy#name}
  */
  readonly name: string;
  /**
  * Type of the Backup Policy. Defaults to `V1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#policy_type AzureVaultBackupPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Specifies the timezone. Defaults to `UTC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#timezone AzureVaultBackupPolicy#timezone}
  */
  readonly timezone?: string;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#backup AzureVaultBackupPolicy#backup}
  */
  readonly backup: AzureVaultBackupPolicyBackup;
  /**
  * retention_daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#retention_daily AzureVaultBackupPolicy#retention_daily}
  */
  readonly retentionDaily?: AzureVaultBackupPolicyRetentionDaily;
  /**
  * retention_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#retention_monthly AzureVaultBackupPolicy#retention_monthly}
  */
  readonly retentionMonthly?: AzureVaultBackupPolicyRetentionMonthly;
  /**
  * retention_weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#retention_weekly AzureVaultBackupPolicy#retention_weekly}
  */
  readonly retentionWeekly?: AzureVaultBackupPolicyRetentionWeekly;
  /**
  * retention_yearly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#retention_yearly AzureVaultBackupPolicy#retention_yearly}
  */
  readonly retentionYearly?: AzureVaultBackupPolicyRetentionYearly;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#timeouts AzureVaultBackupPolicy#timeouts}
  */
  readonly timeouts?: AzureVaultBackupPolicyTimeouts;
}
export interface AzureVaultBackupPolicyBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#frequency AzureVaultBackupPolicy#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#hour_duration AzureVaultBackupPolicy#hour_duration}
  */
  readonly hourDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#hour_interval AzureVaultBackupPolicy#hour_interval}
  */
  readonly hourInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#time AzureVaultBackupPolicy#time}
  */
  readonly time: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#weekdays AzureVaultBackupPolicy#weekdays}
  */
  readonly weekdays?: string[];
}

export function azureVaultBackupPolicyBackupToTerraform(struct?: AzureVaultBackupPolicyBackupOutputReference | AzureVaultBackupPolicyBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_duration: cdktf.numberToTerraform(struct!.hourDuration),
    hour_interval: cdktf.numberToTerraform(struct!.hourInterval),
    time: cdktf.stringToTerraform(struct!.time),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function azureVaultBackupPolicyBackupToHclTerraform(struct?: AzureVaultBackupPolicyBackupOutputReference | AzureVaultBackupPolicyBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_duration: {
      value: cdktf.numberToHclTerraform(struct!.hourDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hour_interval: {
      value: cdktf.numberToHclTerraform(struct!.hourInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVaultBackupPolicyBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVaultBackupPolicyBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourDuration = this._hourDuration;
    }
    if (this._hourInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourInterval = this._hourInterval;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVaultBackupPolicyBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._hourDuration = undefined;
      this._hourInterval = undefined;
      this._time = undefined;
      this._weekdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._hourDuration = value.hourDuration;
      this._hourInterval = value.hourInterval;
      this._time = value.time;
      this._weekdays = value.weekdays;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_duration - computed: false, optional: true, required: false
  private _hourDuration?: number; 
  public get hourDuration() {
    return this.getNumberAttribute('hour_duration');
  }
  public set hourDuration(value: number) {
    this._hourDuration = value;
  }
  public resetHourDuration() {
    this._hourDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourDurationInput() {
    return this._hourDuration;
  }

  // hour_interval - computed: false, optional: true, required: false
  private _hourInterval?: number; 
  public get hourInterval() {
    return this.getNumberAttribute('hour_interval');
  }
  public set hourInterval(value: number) {
    this._hourInterval = value;
  }
  public resetHourInterval() {
    this._hourInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourIntervalInput() {
    return this._hourInterval;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
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
export interface AzureVaultBackupPolicyRetentionDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#count AzureVaultBackupPolicy#count}
  */
  readonly count: number;
}

export function azureVaultBackupPolicyRetentionDailyToTerraform(struct?: AzureVaultBackupPolicyRetentionDailyOutputReference | AzureVaultBackupPolicyRetentionDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function azureVaultBackupPolicyRetentionDailyToHclTerraform(struct?: AzureVaultBackupPolicyRetentionDailyOutputReference | AzureVaultBackupPolicyRetentionDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVaultBackupPolicyRetentionDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVaultBackupPolicyRetentionDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVaultBackupPolicyRetentionDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface AzureVaultBackupPolicyRetentionMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#count AzureVaultBackupPolicy#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#weekdays AzureVaultBackupPolicy#weekdays}
  */
  readonly weekdays: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#weeks AzureVaultBackupPolicy#weeks}
  */
  readonly weeks: string[];
}

export function azureVaultBackupPolicyRetentionMonthlyToTerraform(struct?: AzureVaultBackupPolicyRetentionMonthlyOutputReference | AzureVaultBackupPolicyRetentionMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeks),
  }
}


export function azureVaultBackupPolicyRetentionMonthlyToHclTerraform(struct?: AzureVaultBackupPolicyRetentionMonthlyOutputReference | AzureVaultBackupPolicyRetentionMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weeks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weeks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVaultBackupPolicyRetentionMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVaultBackupPolicyRetentionMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVaultBackupPolicyRetentionMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._weekdays = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._weekdays = value.weekdays;
      this._weeks = value.weeks;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // weeks - computed: false, optional: false, required: true
  private _weeks?: string[]; 
  public get weeks() {
    return cdktf.Fn.tolist(this.getListAttribute('weeks'));
  }
  public set weeks(value: string[]) {
    this._weeks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface AzureVaultBackupPolicyRetentionWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#count AzureVaultBackupPolicy#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#weekdays AzureVaultBackupPolicy#weekdays}
  */
  readonly weekdays: string[];
}

export function azureVaultBackupPolicyRetentionWeeklyToTerraform(struct?: AzureVaultBackupPolicyRetentionWeeklyOutputReference | AzureVaultBackupPolicyRetentionWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function azureVaultBackupPolicyRetentionWeeklyToHclTerraform(struct?: AzureVaultBackupPolicyRetentionWeeklyOutputReference | AzureVaultBackupPolicyRetentionWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVaultBackupPolicyRetentionWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVaultBackupPolicyRetentionWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVaultBackupPolicyRetentionWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._weekdays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._weekdays = value.weekdays;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}
export interface AzureVaultBackupPolicyRetentionYearly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#count AzureVaultBackupPolicy#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#months AzureVaultBackupPolicy#months}
  */
  readonly months: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#weekdays AzureVaultBackupPolicy#weekdays}
  */
  readonly weekdays: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#weeks AzureVaultBackupPolicy#weeks}
  */
  readonly weeks: string[];
}

export function azureVaultBackupPolicyRetentionYearlyToTerraform(struct?: AzureVaultBackupPolicyRetentionYearlyOutputReference | AzureVaultBackupPolicyRetentionYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    weeks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeks),
  }
}


export function azureVaultBackupPolicyRetentionYearlyToHclTerraform(struct?: AzureVaultBackupPolicyRetentionYearlyOutputReference | AzureVaultBackupPolicyRetentionYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weeks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weeks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVaultBackupPolicyRetentionYearlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVaultBackupPolicyRetentionYearly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._weeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeks = this._weeks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVaultBackupPolicyRetentionYearly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._months = undefined;
      this._weekdays = undefined;
      this._weeks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._months = value.months;
      this._weekdays = value.weekdays;
      this._weeks = value.weeks;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // months - computed: false, optional: false, required: true
  private _months?: string[]; 
  public get months() {
    return cdktf.Fn.tolist(this.getListAttribute('months'));
  }
  public set months(value: string[]) {
    this._months = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // weeks - computed: false, optional: false, required: true
  private _weeks?: string[]; 
  public get weeks() {
    return cdktf.Fn.tolist(this.getListAttribute('weeks'));
  }
  public set weeks(value: string[]) {
    this._weeks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksInput() {
    return this._weeks;
  }
}
export interface AzureVaultBackupPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#create AzureVaultBackupPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#delete AzureVaultBackupPolicy#delete}
  */
  readonly delete?: string;
}

export function azureVaultBackupPolicyTimeoutsToTerraform(struct?: AzureVaultBackupPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function azureVaultBackupPolicyTimeoutsToHclTerraform(struct?: AzureVaultBackupPolicyTimeouts | cdktf.IResolvable): any {
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

export class AzureVaultBackupPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureVaultBackupPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVaultBackupPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy duplocloud_azure_vault_backup_policy}
*/
export class AzureVaultBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_vault_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureVaultBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureVaultBackupPolicy to import
  * @param importFromId The id of the existing AzureVaultBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureVaultBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_vault_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_vault_backup_policy duplocloud_azure_vault_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureVaultBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AzureVaultBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_vault_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._infraName = config.infraName;
    this._instantRestoreRetentionDays = config.instantRestoreRetentionDays;
    this._name = config.name;
    this._policyType = config.policyType;
    this._timezone = config.timezone;
    this._backup.internalValue = config.backup;
    this._retentionDaily.internalValue = config.retentionDaily;
    this._retentionMonthly.internalValue = config.retentionMonthly;
    this._retentionWeekly.internalValue = config.retentionWeekly;
    this._retentionYearly.internalValue = config.retentionYearly;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_id - computed: true, optional: false, required: false
  public get azureId() {
    return this.getStringAttribute('azure_id');
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

  // infra_name - computed: false, optional: false, required: true
  private _infraName?: string; 
  public get infraName() {
    return this.getStringAttribute('infra_name');
  }
  public set infraName(value: string) {
    this._infraName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraNameInput() {
    return this._infraName;
  }

  // instant_restore_retention_days - computed: true, optional: true, required: false
  private _instantRestoreRetentionDays?: number; 
  public get instantRestoreRetentionDays() {
    return this.getNumberAttribute('instant_restore_retention_days');
  }
  public set instantRestoreRetentionDays(value: number) {
    this._instantRestoreRetentionDays = value;
  }
  public resetInstantRestoreRetentionDays() {
    this._instantRestoreRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantRestoreRetentionDaysInput() {
    return this._instantRestoreRetentionDays;
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

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // backup - computed: false, optional: false, required: true
  private _backup = new AzureVaultBackupPolicyBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: AzureVaultBackupPolicyBackup) {
    this._backup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // retention_daily - computed: false, optional: true, required: false
  private _retentionDaily = new AzureVaultBackupPolicyRetentionDailyOutputReference(this, "retention_daily");
  public get retentionDaily() {
    return this._retentionDaily;
  }
  public putRetentionDaily(value: AzureVaultBackupPolicyRetentionDaily) {
    this._retentionDaily.internalValue = value;
  }
  public resetRetentionDaily() {
    this._retentionDaily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDailyInput() {
    return this._retentionDaily.internalValue;
  }

  // retention_monthly - computed: false, optional: true, required: false
  private _retentionMonthly = new AzureVaultBackupPolicyRetentionMonthlyOutputReference(this, "retention_monthly");
  public get retentionMonthly() {
    return this._retentionMonthly;
  }
  public putRetentionMonthly(value: AzureVaultBackupPolicyRetentionMonthly) {
    this._retentionMonthly.internalValue = value;
  }
  public resetRetentionMonthly() {
    this._retentionMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMonthlyInput() {
    return this._retentionMonthly.internalValue;
  }

  // retention_weekly - computed: false, optional: true, required: false
  private _retentionWeekly = new AzureVaultBackupPolicyRetentionWeeklyOutputReference(this, "retention_weekly");
  public get retentionWeekly() {
    return this._retentionWeekly;
  }
  public putRetentionWeekly(value: AzureVaultBackupPolicyRetentionWeekly) {
    this._retentionWeekly.internalValue = value;
  }
  public resetRetentionWeekly() {
    this._retentionWeekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionWeeklyInput() {
    return this._retentionWeekly.internalValue;
  }

  // retention_yearly - computed: false, optional: true, required: false
  private _retentionYearly = new AzureVaultBackupPolicyRetentionYearlyOutputReference(this, "retention_yearly");
  public get retentionYearly() {
    return this._retentionYearly;
  }
  public putRetentionYearly(value: AzureVaultBackupPolicyRetentionYearly) {
    this._retentionYearly.internalValue = value;
  }
  public resetRetentionYearly() {
    this._retentionYearly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionYearlyInput() {
    return this._retentionYearly.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureVaultBackupPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureVaultBackupPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      infra_name: cdktf.stringToTerraform(this._infraName),
      instant_restore_retention_days: cdktf.numberToTerraform(this._instantRestoreRetentionDays),
      name: cdktf.stringToTerraform(this._name),
      policy_type: cdktf.stringToTerraform(this._policyType),
      timezone: cdktf.stringToTerraform(this._timezone),
      backup: azureVaultBackupPolicyBackupToTerraform(this._backup.internalValue),
      retention_daily: azureVaultBackupPolicyRetentionDailyToTerraform(this._retentionDaily.internalValue),
      retention_monthly: azureVaultBackupPolicyRetentionMonthlyToTerraform(this._retentionMonthly.internalValue),
      retention_weekly: azureVaultBackupPolicyRetentionWeeklyToTerraform(this._retentionWeekly.internalValue),
      retention_yearly: azureVaultBackupPolicyRetentionYearlyToTerraform(this._retentionYearly.internalValue),
      timeouts: azureVaultBackupPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infra_name: {
        value: cdktf.stringToHclTerraform(this._infraName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instant_restore_retention_days: {
        value: cdktf.numberToHclTerraform(this._instantRestoreRetentionDays),
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
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup: {
        value: azureVaultBackupPolicyBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVaultBackupPolicyBackupList",
      },
      retention_daily: {
        value: azureVaultBackupPolicyRetentionDailyToHclTerraform(this._retentionDaily.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVaultBackupPolicyRetentionDailyList",
      },
      retention_monthly: {
        value: azureVaultBackupPolicyRetentionMonthlyToHclTerraform(this._retentionMonthly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVaultBackupPolicyRetentionMonthlyList",
      },
      retention_weekly: {
        value: azureVaultBackupPolicyRetentionWeeklyToHclTerraform(this._retentionWeekly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVaultBackupPolicyRetentionWeeklyList",
      },
      retention_yearly: {
        value: azureVaultBackupPolicyRetentionYearlyToHclTerraform(this._retentionYearly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVaultBackupPolicyRetentionYearlyList",
      },
      timeouts: {
        value: azureVaultBackupPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureVaultBackupPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
