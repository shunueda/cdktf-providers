// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmUpdateScheduleListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#device DataScmUpdateScheduleList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#folder DataScmUpdateScheduleList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#limit DataScmUpdateScheduleList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#name DataScmUpdateScheduleList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#offset DataScmUpdateScheduleList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#snippet DataScmUpdateScheduleList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDaily {
}

export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDailyToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDailyToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourly {
}

export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourlyToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourlyToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getNumberAttribute('at');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNone {
}

export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNoneToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNoneToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeekly {
}

export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeeklyToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeeklyToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurring {
}

export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // sync_to_peer - computed: true, optional: false, required: false
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // weekly - computed: true, optional: false, required: false
  private _weekly = new DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleAntiVirus {
}

export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleAntiVirusToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleAntiVirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleAntiVirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleAntiVirus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleAntiVirus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmUpdateScheduleListDataUpdateScheduleAntiVirusRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDaily {
}

export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDailyToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDailyToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // disable_new_content - computed: true, optional: false, required: false
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30Mins {
}

export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30MinsToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30MinsToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30Mins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30Mins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getNumberAttribute('at');
  }

  // disable_new_content - computed: true, optional: false, required: false
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourly {
}

export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourlyToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourlyToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getNumberAttribute('at');
  }

  // disable_new_content - computed: true, optional: false, required: false
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNone {
}

export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNoneToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNoneToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeekly {
}

export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeeklyToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeeklyToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // disable_new_content - computed: true, optional: false, required: false
  public get disableNewContent() {
    return this.getBooleanAttribute('disable_new_content');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurring {
}

export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // every_30_mins - computed: true, optional: false, required: false
  private _every30Mins = new DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // new_app_threshold - computed: true, optional: false, required: false
  public get newAppThreshold() {
    return this.getNumberAttribute('new_app_threshold');
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // sync_to_peer - computed: true, optional: false, required: false
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // weekly - computed: true, optional: false, required: false
  private _weekly = new DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleThreats {
}

export function dataScmUpdateScheduleListDataUpdateScheduleThreatsToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleThreatsToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleThreats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleThreatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleThreats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleThreats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmUpdateScheduleListDataUpdateScheduleThreatsRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15Mins {
}

export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15MinsToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15MinsToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15Mins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15Mins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getNumberAttribute('at');
  }

  // sync_to_peer - computed: true, optional: false, required: false
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30Mins {
}

export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30MinsToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30MinsToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30Mins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30Mins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getNumberAttribute('at');
  }

  // sync_to_peer - computed: true, optional: false, required: false
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHour {
}

export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHourToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHour): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHourToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHour): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHour | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHour | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getNumberAttribute('at');
  }

  // sync_to_peer - computed: true, optional: false, required: false
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMin {
}

export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMinToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMinToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // sync_to_peer - computed: true, optional: false, required: false
  public get syncToPeer() {
    return this.getBooleanAttribute('sync_to_peer');
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNone {
}

export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNoneToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNoneToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTime {
}

export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTimeToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTimeToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurring {
}

export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // every_15_mins - computed: true, optional: false, required: false
  private _every15Mins = new DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery15MinsOutputReference(this, "every_15_mins");
  public get every15Mins() {
    return this._every15Mins;
  }

  // every_30_mins - computed: true, optional: false, required: false
  private _every30Mins = new DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }

  // every_hour - computed: true, optional: false, required: false
  private _everyHour = new DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryHourOutputReference(this, "every_hour");
  public get everyHour() {
    return this._everyHour;
  }

  // every_min - computed: true, optional: false, required: false
  private _everyMin = new DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringEveryMinOutputReference(this, "every_min");
  public get everyMin() {
    return this._everyMin;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // real_time - computed: true, optional: false, required: false
  private _realTime = new DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringRealTimeOutputReference(this, "real_time");
  public get realTime() {
    return this._realTime;
  }
}
export interface DataScmUpdateScheduleListDataUpdateScheduleWildfire {
}

export function dataScmUpdateScheduleListDataUpdateScheduleWildfireToTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleWildfireToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateScheduleWildfire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleWildfireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateScheduleWildfire | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateScheduleWildfire | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmUpdateScheduleListDataUpdateScheduleWildfireRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
}
export interface DataScmUpdateScheduleListDataUpdateSchedule {
}

export function dataScmUpdateScheduleListDataUpdateScheduleToTerraform(struct?: DataScmUpdateScheduleListDataUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleListDataUpdateScheduleToHclTerraform(struct?: DataScmUpdateScheduleListDataUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleListDataUpdateScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleListDataUpdateSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListDataUpdateSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_virus - computed: true, optional: false, required: false
  private _antiVirus = new DataScmUpdateScheduleListDataUpdateScheduleAntiVirusOutputReference(this, "anti_virus");
  public get antiVirus() {
    return this._antiVirus;
  }

  // threats - computed: true, optional: false, required: false
  private _threats = new DataScmUpdateScheduleListDataUpdateScheduleThreatsOutputReference(this, "threats");
  public get threats() {
    return this._threats;
  }

  // wildfire - computed: true, optional: false, required: false
  private _wildfire = new DataScmUpdateScheduleListDataUpdateScheduleWildfireOutputReference(this, "wildfire");
  public get wildfire() {
    return this._wildfire;
  }
}
export interface DataScmUpdateScheduleListData {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#device DataScmUpdateScheduleList#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#folder DataScmUpdateScheduleList#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#id DataScmUpdateScheduleList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#snippet DataScmUpdateScheduleList#snippet}
  */
  readonly snippet?: string;
}

export function dataScmUpdateScheduleListDataToTerraform(struct?: DataScmUpdateScheduleListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    folder: cdktf.stringToTerraform(struct!.folder),
    id: cdktf.stringToTerraform(struct!.id),
    snippet: cdktf.stringToTerraform(struct!.snippet),
  }
}


export function dataScmUpdateScheduleListDataToHclTerraform(struct?: DataScmUpdateScheduleListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snippet: {
      value: cdktf.stringToHclTerraform(struct!.snippet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmUpdateScheduleListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmUpdateScheduleListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._snippet !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippet = this._snippet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._folder = undefined;
      this._id = undefined;
      this._snippet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._folder = value.folder;
      this._id = value.id;
      this._snippet = value.snippet;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // snippet - computed: true, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // update_schedule - computed: true, optional: false, required: false
  private _updateSchedule = new DataScmUpdateScheduleListDataUpdateScheduleOutputReference(this, "update_schedule");
  public get updateSchedule() {
    return this._updateSchedule;
  }
}

export class DataScmUpdateScheduleListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmUpdateScheduleListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmUpdateScheduleListDataOutputReference {
    return new DataScmUpdateScheduleListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list scm_update_schedule_list}
*/
export class DataScmUpdateScheduleList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_update_schedule_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmUpdateScheduleList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmUpdateScheduleList to import
  * @param importFromId The id of the existing DataScmUpdateScheduleList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmUpdateScheduleList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_update_schedule_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule_list scm_update_schedule_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmUpdateScheduleListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmUpdateScheduleListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_update_schedule_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmUpdateScheduleListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
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
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
