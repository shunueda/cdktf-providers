// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmUpdateScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule#device DataScmUpdateSchedule#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule#folder DataScmUpdateSchedule#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule#id DataScmUpdateSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule#snippet DataScmUpdateSchedule#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDaily {
}

export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDailyToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDailyToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDaily | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourly {
}

export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourlyToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourlyToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourly | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNone {
}

export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNoneToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNoneToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeekly {
}

export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeeklyToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeeklyToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeekly | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleAntiVirusRecurring {
}

export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleAntiVirusRecurringToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleAntiVirusRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleAntiVirusRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringNoneOutputReference(this, "none");
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
  private _weekly = new DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmUpdateScheduleUpdateScheduleAntiVirus {
}

export function dataScmUpdateScheduleUpdateScheduleAntiVirusToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleAntiVirusToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleAntiVirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleAntiVirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleAntiVirus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleAntiVirus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmUpdateScheduleUpdateScheduleAntiVirusRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
}
export interface DataScmUpdateScheduleUpdateScheduleThreatsRecurringDaily {
}

export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringDailyToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringDailyToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleThreatsRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleThreatsRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleThreatsRecurringDaily | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins {
}

export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30MinsToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30MinsToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30Mins | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleThreatsRecurringHourly {
}

export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringHourlyToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringHourlyToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleThreatsRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleThreatsRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleThreatsRecurringHourly | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleThreatsRecurringNone {
}

export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringNoneToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringNoneToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleThreatsRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleThreatsRecurringNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleThreatsRecurringNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUpdateScheduleUpdateScheduleThreatsRecurringWeekly {
}

export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringWeeklyToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringWeeklyToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleThreatsRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleThreatsRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleThreatsRecurringWeekly | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleThreatsRecurring {
}

export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleThreatsRecurringToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreatsRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleThreatsRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleThreatsRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleThreatsRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmUpdateScheduleUpdateScheduleThreatsRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // every_30_mins - computed: true, optional: false, required: false
  private _every30Mins = new DataScmUpdateScheduleUpdateScheduleThreatsRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmUpdateScheduleUpdateScheduleThreatsRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // new_app_threshold - computed: true, optional: false, required: false
  public get newAppThreshold() {
    return this.getNumberAttribute('new_app_threshold');
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmUpdateScheduleUpdateScheduleThreatsRecurringNoneOutputReference(this, "none");
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
  private _weekly = new DataScmUpdateScheduleUpdateScheduleThreatsRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmUpdateScheduleUpdateScheduleThreats {
}

export function dataScmUpdateScheduleUpdateScheduleThreatsToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleThreatsToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleThreats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleThreatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleThreats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleThreats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmUpdateScheduleUpdateScheduleThreatsRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
}
export interface DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins {
}

export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15MinsToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15MinsToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15Mins | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins {
}

export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30MinsToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30MinsToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30MinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30Mins | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHour {
}

export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHourToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHour): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHourToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHour): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHour | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHour | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMin {
}

export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMinToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMinToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMin | undefined) {
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
export interface DataScmUpdateScheduleUpdateScheduleWildfireRecurringNone {
}

export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringNoneToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringNoneToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleWildfireRecurringNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleWildfireRecurringNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleWildfireRecurringNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTime {
}

export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTimeToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTimeToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmUpdateScheduleUpdateScheduleWildfireRecurring {
}

export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleWildfireRecurringToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfireRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleWildfireRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleWildfireRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleWildfireRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // every_15_mins - computed: true, optional: false, required: false
  private _every15Mins = new DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery15MinsOutputReference(this, "every_15_mins");
  public get every15Mins() {
    return this._every15Mins;
  }

  // every_30_mins - computed: true, optional: false, required: false
  private _every30Mins = new DataScmUpdateScheduleUpdateScheduleWildfireRecurringEvery30MinsOutputReference(this, "every_30_mins");
  public get every30Mins() {
    return this._every30Mins;
  }

  // every_hour - computed: true, optional: false, required: false
  private _everyHour = new DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryHourOutputReference(this, "every_hour");
  public get everyHour() {
    return this._everyHour;
  }

  // every_min - computed: true, optional: false, required: false
  private _everyMin = new DataScmUpdateScheduleUpdateScheduleWildfireRecurringEveryMinOutputReference(this, "every_min");
  public get everyMin() {
    return this._everyMin;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmUpdateScheduleUpdateScheduleWildfireRecurringNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // real_time - computed: true, optional: false, required: false
  private _realTime = new DataScmUpdateScheduleUpdateScheduleWildfireRecurringRealTimeOutputReference(this, "real_time");
  public get realTime() {
    return this._realTime;
  }
}
export interface DataScmUpdateScheduleUpdateScheduleWildfire {
}

export function dataScmUpdateScheduleUpdateScheduleWildfireToTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleWildfireToHclTerraform(struct?: DataScmUpdateScheduleUpdateScheduleWildfire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleWildfireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateScheduleWildfire | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateScheduleWildfire | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmUpdateScheduleUpdateScheduleWildfireRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
}
export interface DataScmUpdateScheduleUpdateSchedule {
}

export function dataScmUpdateScheduleUpdateScheduleToTerraform(struct?: DataScmUpdateScheduleUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmUpdateScheduleUpdateScheduleToHclTerraform(struct?: DataScmUpdateScheduleUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmUpdateScheduleUpdateScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmUpdateScheduleUpdateSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmUpdateScheduleUpdateSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_virus - computed: true, optional: false, required: false
  private _antiVirus = new DataScmUpdateScheduleUpdateScheduleAntiVirusOutputReference(this, "anti_virus");
  public get antiVirus() {
    return this._antiVirus;
  }

  // threats - computed: true, optional: false, required: false
  private _threats = new DataScmUpdateScheduleUpdateScheduleThreatsOutputReference(this, "threats");
  public get threats() {
    return this._threats;
  }

  // wildfire - computed: true, optional: false, required: false
  private _wildfire = new DataScmUpdateScheduleUpdateScheduleWildfireOutputReference(this, "wildfire");
  public get wildfire() {
    return this._wildfire;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule scm_update_schedule}
*/
export class DataScmUpdateSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_update_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmUpdateSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmUpdateSchedule to import
  * @param importFromId The id of the existing DataScmUpdateSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmUpdateSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_update_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/update_schedule scm_update_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmUpdateScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmUpdateScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_update_schedule',
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
    this._id = config.id;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
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
  private _updateSchedule = new DataScmUpdateScheduleUpdateScheduleOutputReference(this, "update_schedule");
  public get updateSchedule() {
    return this._updateSchedule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
