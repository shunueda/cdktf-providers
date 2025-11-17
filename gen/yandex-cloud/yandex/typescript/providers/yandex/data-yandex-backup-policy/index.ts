// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/backup_policy#id DataYandexBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/backup_policy#name DataYandexBackupPolicy#name}
  */
  readonly name?: string;
  /**
  * ID of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/backup_policy#policy_id DataYandexBackupPolicy#policy_id}
  */
  readonly policyId?: string;
}
export interface DataYandexBackupPolicyFileFilters {
}

export function dataYandexBackupPolicyFileFiltersToTerraform(struct?: DataYandexBackupPolicyFileFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexBackupPolicyFileFiltersToHclTerraform(struct?: DataYandexBackupPolicyFileFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexBackupPolicyFileFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexBackupPolicyFileFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexBackupPolicyFileFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclusion_masks - computed: true, optional: false, required: false
  public get exclusionMasks() {
    return this.getListAttribute('exclusion_masks');
  }

  // inclusion_masks - computed: true, optional: false, required: false
  public get inclusionMasks() {
    return this.getListAttribute('inclusion_masks');
  }
}

export class DataYandexBackupPolicyFileFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexBackupPolicyFileFiltersOutputReference {
    return new DataYandexBackupPolicyFileFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexBackupPolicyReattempts {
}

export function dataYandexBackupPolicyReattemptsToTerraform(struct?: DataYandexBackupPolicyReattempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexBackupPolicyReattemptsToHclTerraform(struct?: DataYandexBackupPolicyReattempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexBackupPolicyReattemptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexBackupPolicyReattempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexBackupPolicyReattempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // max_attempts - computed: true, optional: false, required: false
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
}

export class DataYandexBackupPolicyReattemptsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexBackupPolicyReattemptsOutputReference {
    return new DataYandexBackupPolicyReattemptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexBackupPolicyRetentionRules {
}

export function dataYandexBackupPolicyRetentionRulesToTerraform(struct?: DataYandexBackupPolicyRetentionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexBackupPolicyRetentionRulesToHclTerraform(struct?: DataYandexBackupPolicyRetentionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexBackupPolicyRetentionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexBackupPolicyRetentionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexBackupPolicyRetentionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // repeat_period - computed: true, optional: false, required: false
  public get repeatPeriod() {
    return this.getListAttribute('repeat_period');
  }
}

export class DataYandexBackupPolicyRetentionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexBackupPolicyRetentionRulesOutputReference {
    return new DataYandexBackupPolicyRetentionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexBackupPolicyRetention {
}

export function dataYandexBackupPolicyRetentionToTerraform(struct?: DataYandexBackupPolicyRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexBackupPolicyRetentionToHclTerraform(struct?: DataYandexBackupPolicyRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexBackupPolicyRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexBackupPolicyRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexBackupPolicyRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_backup - computed: true, optional: false, required: false
  public get afterBackup() {
    return this.getBooleanAttribute('after_backup');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataYandexBackupPolicyRetentionRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}

export class DataYandexBackupPolicyRetentionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexBackupPolicyRetentionOutputReference {
    return new DataYandexBackupPolicyRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexBackupPolicySchedulingBackupSetsExecuteByTime {
}

export function dataYandexBackupPolicySchedulingBackupSetsExecuteByTimeToTerraform(struct?: DataYandexBackupPolicySchedulingBackupSetsExecuteByTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexBackupPolicySchedulingBackupSetsExecuteByTimeToHclTerraform(struct?: DataYandexBackupPolicySchedulingBackupSetsExecuteByTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexBackupPolicySchedulingBackupSetsExecuteByTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexBackupPolicySchedulingBackupSetsExecuteByTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexBackupPolicySchedulingBackupSetsExecuteByTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_last_day_of_month - computed: true, optional: false, required: false
  public get includeLastDayOfMonth() {
    return this.getBooleanAttribute('include_last_day_of_month');
  }

  // monthdays - computed: true, optional: false, required: false
  public get monthdays() {
    return this.getNumberListAttribute('monthdays');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getNumberListAttribute('months');
  }

  // repeat_at - computed: true, optional: false, required: false
  public get repeatAt() {
    return this.getListAttribute('repeat_at');
  }

  // repeat_every - computed: true, optional: false, required: false
  public get repeatEvery() {
    return this.getStringAttribute('repeat_every');
  }

  // run_later - computed: true, optional: false, required: false
  public get runLater() {
    return this.getBooleanAttribute('run_later');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // weekdays - computed: true, optional: false, required: false
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
}

export class DataYandexBackupPolicySchedulingBackupSetsExecuteByTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexBackupPolicySchedulingBackupSetsExecuteByTimeOutputReference {
    return new DataYandexBackupPolicySchedulingBackupSetsExecuteByTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexBackupPolicySchedulingBackupSets {
}

export function dataYandexBackupPolicySchedulingBackupSetsToTerraform(struct?: DataYandexBackupPolicySchedulingBackupSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexBackupPolicySchedulingBackupSetsToHclTerraform(struct?: DataYandexBackupPolicySchedulingBackupSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexBackupPolicySchedulingBackupSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexBackupPolicySchedulingBackupSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexBackupPolicySchedulingBackupSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execute_by_interval - computed: true, optional: false, required: false
  public get executeByInterval() {
    return this.getNumberAttribute('execute_by_interval');
  }

  // execute_by_time - computed: true, optional: false, required: false
  private _executeByTime = new DataYandexBackupPolicySchedulingBackupSetsExecuteByTimeList(this, "execute_by_time", true);
  public get executeByTime() {
    return this._executeByTime;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexBackupPolicySchedulingBackupSetsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexBackupPolicySchedulingBackupSetsOutputReference {
    return new DataYandexBackupPolicySchedulingBackupSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexBackupPolicyScheduling {
}

export function dataYandexBackupPolicySchedulingToTerraform(struct?: DataYandexBackupPolicyScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexBackupPolicySchedulingToHclTerraform(struct?: DataYandexBackupPolicyScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexBackupPolicySchedulingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexBackupPolicyScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexBackupPolicyScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_sets - computed: true, optional: false, required: false
  private _backupSets = new DataYandexBackupPolicySchedulingBackupSetsList(this, "backup_sets", true);
  public get backupSets() {
    return this._backupSets;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_parallel_backups - computed: true, optional: false, required: false
  public get maxParallelBackups() {
    return this.getNumberAttribute('max_parallel_backups');
  }

  // random_max_delay - computed: true, optional: false, required: false
  public get randomMaxDelay() {
    return this.getStringAttribute('random_max_delay');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // weekly_backup_day - computed: true, optional: false, required: false
  public get weeklyBackupDay() {
    return this.getStringAttribute('weekly_backup_day');
  }
}

export class DataYandexBackupPolicySchedulingList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexBackupPolicySchedulingOutputReference {
    return new DataYandexBackupPolicySchedulingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexBackupPolicyVmSnapshotReattempts {
}

export function dataYandexBackupPolicyVmSnapshotReattemptsToTerraform(struct?: DataYandexBackupPolicyVmSnapshotReattempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexBackupPolicyVmSnapshotReattemptsToHclTerraform(struct?: DataYandexBackupPolicyVmSnapshotReattempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexBackupPolicyVmSnapshotReattemptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexBackupPolicyVmSnapshotReattempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexBackupPolicyVmSnapshotReattempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // max_attempts - computed: true, optional: false, required: false
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
}

export class DataYandexBackupPolicyVmSnapshotReattemptsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexBackupPolicyVmSnapshotReattemptsOutputReference {
    return new DataYandexBackupPolicyVmSnapshotReattemptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/backup_policy yandex_backup_policy}
*/
export class DataYandexBackupPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexBackupPolicy to import
  * @param importFromId The id of the existing DataYandexBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/backup_policy yandex_backup_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexBackupPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexBackupPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
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
    this._name = config.name;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_name - computed: true, optional: false, required: false
  public get archiveName() {
    return this.getStringAttribute('archive_name');
  }

  // cbt - computed: true, optional: false, required: false
  public get cbt() {
    return this.getStringAttribute('cbt');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fast_backup_enabled - computed: true, optional: false, required: false
  public get fastBackupEnabled() {
    return this.getBooleanAttribute('fast_backup_enabled');
  }

  // file_filters - computed: true, optional: false, required: false
  private _fileFilters = new DataYandexBackupPolicyFileFiltersList(this, "file_filters", false);
  public get fileFilters() {
    return this._fileFilters;
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
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

  // lvm_snapshotting_enabled - computed: true, optional: false, required: false
  public get lvmSnapshottingEnabled() {
    return this.getBooleanAttribute('lvm_snapshotting_enabled');
  }

  // multi_volume_snapshotting_enabled - computed: true, optional: false, required: false
  public get multiVolumeSnapshottingEnabled() {
    return this.getBooleanAttribute('multi_volume_snapshotting_enabled');
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

  // performance_window_enabled - computed: true, optional: false, required: false
  public get performanceWindowEnabled() {
    return this.getBooleanAttribute('performance_window_enabled');
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // reattempts - computed: true, optional: false, required: false
  private _reattempts = new DataYandexBackupPolicyReattemptsList(this, "reattempts", true);
  public get reattempts() {
    return this._reattempts;
  }

  // retention - computed: true, optional: false, required: false
  private _retention = new DataYandexBackupPolicyRetentionList(this, "retention", true);
  public get retention() {
    return this._retention;
  }

  // scheduling - computed: true, optional: false, required: false
  private _scheduling = new DataYandexBackupPolicySchedulingList(this, "scheduling", true);
  public get scheduling() {
    return this._scheduling;
  }

  // sector_by_sector - computed: true, optional: false, required: false
  public get sectorBySector() {
    return this.getBooleanAttribute('sector_by_sector');
  }

  // silent_mode_enabled - computed: true, optional: false, required: false
  public get silentModeEnabled() {
    return this.getBooleanAttribute('silent_mode_enabled');
  }

  // splitting_bytes - computed: true, optional: false, required: false
  public get splittingBytes() {
    return this.getStringAttribute('splitting_bytes');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // validation_enabled - computed: true, optional: false, required: false
  public get validationEnabled() {
    return this.getBooleanAttribute('validation_enabled');
  }

  // vm_snapshot_reattempts - computed: true, optional: false, required: false
  private _vmSnapshotReattempts = new DataYandexBackupPolicyVmSnapshotReattemptsList(this, "vm_snapshot_reattempts", true);
  public get vmSnapshotReattempts() {
    return this._vmSnapshotReattempts;
  }

  // vss_provider - computed: true, optional: false, required: false
  public get vssProvider() {
    return this.getStringAttribute('vss_provider');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.stringToTerraform(this._policyId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
