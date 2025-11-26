// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmExternalDynamicListListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#device DataScmExternalDynamicListList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#folder DataScmExternalDynamicListList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#limit DataScmExternalDynamicListList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#name DataScmExternalDynamicListList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#offset DataScmExternalDynamicListList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#snippet DataScmExternalDynamicListList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmExternalDynamicListListDataTypeDomainAuth {
}

export function dataScmExternalDynamicListListDataTypeDomainAuthToTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeDomainAuthToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeDomainAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeDomainAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeDomainAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataScmExternalDynamicListListDataTypeDomainRecurringDaily {
}

export function dataScmExternalDynamicListListDataTypeDomainRecurringDailyToTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeDomainRecurringDailyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeDomainRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeDomainRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeDomainRecurringDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}
export interface DataScmExternalDynamicListListDataTypeDomainRecurringFiveMinute {
}

export function dataScmExternalDynamicListListDataTypeDomainRecurringFiveMinuteToTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeDomainRecurringFiveMinuteToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeDomainRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeDomainRecurringFiveMinute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeDomainRecurringFiveMinute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeDomainRecurringHourly {
}

export function dataScmExternalDynamicListListDataTypeDomainRecurringHourlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeDomainRecurringHourlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeDomainRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeDomainRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeDomainRecurringHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeDomainRecurringMonthly {
}

export function dataScmExternalDynamicListListDataTypeDomainRecurringMonthlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeDomainRecurringMonthlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeDomainRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeDomainRecurringMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeDomainRecurringMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
}
export interface DataScmExternalDynamicListListDataTypeDomainRecurringWeekly {
}

export function dataScmExternalDynamicListListDataTypeDomainRecurringWeeklyToTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeDomainRecurringWeeklyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeDomainRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeDomainRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeDomainRecurringWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataScmExternalDynamicListListDataTypeDomainRecurring {
}

export function dataScmExternalDynamicListListDataTypeDomainRecurringToTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeDomainRecurringToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeDomainRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeDomainRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeDomainRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeDomainRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmExternalDynamicListListDataTypeDomainRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // five_minute - computed: true, optional: false, required: false
  private _fiveMinute = new DataScmExternalDynamicListListDataTypeDomainRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmExternalDynamicListListDataTypeDomainRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // monthly - computed: true, optional: false, required: false
  private _monthly = new DataScmExternalDynamicListListDataTypeDomainRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }

  // weekly - computed: true, optional: false, required: false
  private _weekly = new DataScmExternalDynamicListListDataTypeDomainRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmExternalDynamicListListDataTypeDomain {
}

export function dataScmExternalDynamicListListDataTypeDomainToTerraform(struct?: DataScmExternalDynamicListListDataTypeDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeDomainToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataScmExternalDynamicListListDataTypeDomainAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // certificate_profile - computed: true, optional: false, required: false
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exception_list - computed: true, optional: false, required: false
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }

  // expand_domain - computed: true, optional: false, required: false
  public get expandDomain() {
    return this.getBooleanAttribute('expand_domain');
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmExternalDynamicListListDataTypeDomainRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataScmExternalDynamicListListDataTypeImeiAuth {
}

export function dataScmExternalDynamicListListDataTypeImeiAuthToTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImeiAuthToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImeiAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImeiAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImeiAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataScmExternalDynamicListListDataTypeImeiRecurringDaily {
}

export function dataScmExternalDynamicListListDataTypeImeiRecurringDailyToTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImeiRecurringDailyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImeiRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImeiRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImeiRecurringDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}
export interface DataScmExternalDynamicListListDataTypeImeiRecurringFiveMinute {
}

export function dataScmExternalDynamicListListDataTypeImeiRecurringFiveMinuteToTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImeiRecurringFiveMinuteToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImeiRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImeiRecurringFiveMinute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImeiRecurringFiveMinute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeImeiRecurringHourly {
}

export function dataScmExternalDynamicListListDataTypeImeiRecurringHourlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImeiRecurringHourlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImeiRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImeiRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImeiRecurringHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeImeiRecurringMonthly {
}

export function dataScmExternalDynamicListListDataTypeImeiRecurringMonthlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImeiRecurringMonthlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImeiRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImeiRecurringMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImeiRecurringMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
}
export interface DataScmExternalDynamicListListDataTypeImeiRecurringWeekly {
}

export function dataScmExternalDynamicListListDataTypeImeiRecurringWeeklyToTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImeiRecurringWeeklyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImeiRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImeiRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImeiRecurringWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataScmExternalDynamicListListDataTypeImeiRecurring {
}

export function dataScmExternalDynamicListListDataTypeImeiRecurringToTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImeiRecurringToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImeiRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImeiRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImeiRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImeiRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmExternalDynamicListListDataTypeImeiRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // five_minute - computed: true, optional: false, required: false
  private _fiveMinute = new DataScmExternalDynamicListListDataTypeImeiRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmExternalDynamicListListDataTypeImeiRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // monthly - computed: true, optional: false, required: false
  private _monthly = new DataScmExternalDynamicListListDataTypeImeiRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }

  // weekly - computed: true, optional: false, required: false
  private _weekly = new DataScmExternalDynamicListListDataTypeImeiRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmExternalDynamicListListDataTypeImei {
}

export function dataScmExternalDynamicListListDataTypeImeiToTerraform(struct?: DataScmExternalDynamicListListDataTypeImei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImeiToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImeiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImei | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImei | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataScmExternalDynamicListListDataTypeImeiAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // certificate_profile - computed: true, optional: false, required: false
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exception_list - computed: true, optional: false, required: false
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmExternalDynamicListListDataTypeImeiRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataScmExternalDynamicListListDataTypeImsiAuth {
}

export function dataScmExternalDynamicListListDataTypeImsiAuthToTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImsiAuthToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImsiAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImsiAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImsiAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataScmExternalDynamicListListDataTypeImsiRecurringDaily {
}

export function dataScmExternalDynamicListListDataTypeImsiRecurringDailyToTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImsiRecurringDailyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImsiRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImsiRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImsiRecurringDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}
export interface DataScmExternalDynamicListListDataTypeImsiRecurringFiveMinute {
}

export function dataScmExternalDynamicListListDataTypeImsiRecurringFiveMinuteToTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImsiRecurringFiveMinuteToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImsiRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImsiRecurringFiveMinute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImsiRecurringFiveMinute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeImsiRecurringHourly {
}

export function dataScmExternalDynamicListListDataTypeImsiRecurringHourlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImsiRecurringHourlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImsiRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImsiRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImsiRecurringHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeImsiRecurringMonthly {
}

export function dataScmExternalDynamicListListDataTypeImsiRecurringMonthlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImsiRecurringMonthlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImsiRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImsiRecurringMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImsiRecurringMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
}
export interface DataScmExternalDynamicListListDataTypeImsiRecurringWeekly {
}

export function dataScmExternalDynamicListListDataTypeImsiRecurringWeeklyToTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImsiRecurringWeeklyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImsiRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImsiRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImsiRecurringWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataScmExternalDynamicListListDataTypeImsiRecurring {
}

export function dataScmExternalDynamicListListDataTypeImsiRecurringToTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImsiRecurringToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImsiRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImsiRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImsiRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImsiRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmExternalDynamicListListDataTypeImsiRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // five_minute - computed: true, optional: false, required: false
  private _fiveMinute = new DataScmExternalDynamicListListDataTypeImsiRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmExternalDynamicListListDataTypeImsiRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // monthly - computed: true, optional: false, required: false
  private _monthly = new DataScmExternalDynamicListListDataTypeImsiRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }

  // weekly - computed: true, optional: false, required: false
  private _weekly = new DataScmExternalDynamicListListDataTypeImsiRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmExternalDynamicListListDataTypeImsi {
}

export function dataScmExternalDynamicListListDataTypeImsiToTerraform(struct?: DataScmExternalDynamicListListDataTypeImsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeImsiToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeImsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeImsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeImsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeImsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataScmExternalDynamicListListDataTypeImsiAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // certificate_profile - computed: true, optional: false, required: false
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exception_list - computed: true, optional: false, required: false
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmExternalDynamicListListDataTypeImsiRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataScmExternalDynamicListListDataTypeIpAuth {
}

export function dataScmExternalDynamicListListDataTypeIpAuthToTerraform(struct?: DataScmExternalDynamicListListDataTypeIpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeIpAuthToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeIpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeIpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeIpAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeIpAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataScmExternalDynamicListListDataTypeIpRecurringDaily {
}

export function dataScmExternalDynamicListListDataTypeIpRecurringDailyToTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeIpRecurringDailyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeIpRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeIpRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeIpRecurringDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}
export interface DataScmExternalDynamicListListDataTypeIpRecurringFiveMinute {
}

export function dataScmExternalDynamicListListDataTypeIpRecurringFiveMinuteToTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeIpRecurringFiveMinuteToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeIpRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeIpRecurringFiveMinute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeIpRecurringFiveMinute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeIpRecurringHourly {
}

export function dataScmExternalDynamicListListDataTypeIpRecurringHourlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeIpRecurringHourlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeIpRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeIpRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeIpRecurringHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeIpRecurringMonthly {
}

export function dataScmExternalDynamicListListDataTypeIpRecurringMonthlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeIpRecurringMonthlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeIpRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeIpRecurringMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeIpRecurringMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
}
export interface DataScmExternalDynamicListListDataTypeIpRecurringWeekly {
}

export function dataScmExternalDynamicListListDataTypeIpRecurringWeeklyToTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeIpRecurringWeeklyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeIpRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeIpRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeIpRecurringWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataScmExternalDynamicListListDataTypeIpRecurring {
}

export function dataScmExternalDynamicListListDataTypeIpRecurringToTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeIpRecurringToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeIpRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeIpRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeIpRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeIpRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmExternalDynamicListListDataTypeIpRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // five_minute - computed: true, optional: false, required: false
  private _fiveMinute = new DataScmExternalDynamicListListDataTypeIpRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmExternalDynamicListListDataTypeIpRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // monthly - computed: true, optional: false, required: false
  private _monthly = new DataScmExternalDynamicListListDataTypeIpRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }

  // weekly - computed: true, optional: false, required: false
  private _weekly = new DataScmExternalDynamicListListDataTypeIpRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmExternalDynamicListListDataTypeIp {
}

export function dataScmExternalDynamicListListDataTypeIpToTerraform(struct?: DataScmExternalDynamicListListDataTypeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeIpToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataScmExternalDynamicListListDataTypeIpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // certificate_profile - computed: true, optional: false, required: false
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exception_list - computed: true, optional: false, required: false
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmExternalDynamicListListDataTypeIpRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataScmExternalDynamicListListDataTypePredefinedIp {
}

export function dataScmExternalDynamicListListDataTypePredefinedIpToTerraform(struct?: DataScmExternalDynamicListListDataTypePredefinedIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypePredefinedIpToHclTerraform(struct?: DataScmExternalDynamicListListDataTypePredefinedIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypePredefinedIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypePredefinedIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypePredefinedIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exception_list - computed: true, optional: false, required: false
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataScmExternalDynamicListListDataTypePredefinedUrl {
}

export function dataScmExternalDynamicListListDataTypePredefinedUrlToTerraform(struct?: DataScmExternalDynamicListListDataTypePredefinedUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypePredefinedUrlToHclTerraform(struct?: DataScmExternalDynamicListListDataTypePredefinedUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypePredefinedUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypePredefinedUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypePredefinedUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exception_list - computed: true, optional: false, required: false
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataScmExternalDynamicListListDataTypeUrlAuth {
}

export function dataScmExternalDynamicListListDataTypeUrlAuthToTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeUrlAuthToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeUrlAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeUrlAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeUrlAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataScmExternalDynamicListListDataTypeUrlRecurringDaily {
}

export function dataScmExternalDynamicListListDataTypeUrlRecurringDailyToTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeUrlRecurringDailyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeUrlRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeUrlRecurringDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeUrlRecurringDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}
export interface DataScmExternalDynamicListListDataTypeUrlRecurringFiveMinute {
}

export function dataScmExternalDynamicListListDataTypeUrlRecurringFiveMinuteToTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeUrlRecurringFiveMinuteToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringFiveMinute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeUrlRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeUrlRecurringFiveMinute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeUrlRecurringFiveMinute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeUrlRecurringHourly {
}

export function dataScmExternalDynamicListListDataTypeUrlRecurringHourlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeUrlRecurringHourlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeUrlRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeUrlRecurringHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeUrlRecurringHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmExternalDynamicListListDataTypeUrlRecurringMonthly {
}

export function dataScmExternalDynamicListListDataTypeUrlRecurringMonthlyToTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeUrlRecurringMonthlyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeUrlRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeUrlRecurringMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeUrlRecurringMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
}
export interface DataScmExternalDynamicListListDataTypeUrlRecurringWeekly {
}

export function dataScmExternalDynamicListListDataTypeUrlRecurringWeeklyToTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeUrlRecurringWeeklyToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurringWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeUrlRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeUrlRecurringWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeUrlRecurringWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataScmExternalDynamicListListDataTypeUrlRecurring {
}

export function dataScmExternalDynamicListListDataTypeUrlRecurringToTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeUrlRecurringToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeUrlRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeUrlRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeUrlRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeUrlRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataScmExternalDynamicListListDataTypeUrlRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }

  // five_minute - computed: true, optional: false, required: false
  private _fiveMinute = new DataScmExternalDynamicListListDataTypeUrlRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }

  // hourly - computed: true, optional: false, required: false
  private _hourly = new DataScmExternalDynamicListListDataTypeUrlRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }

  // monthly - computed: true, optional: false, required: false
  private _monthly = new DataScmExternalDynamicListListDataTypeUrlRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }

  // weekly - computed: true, optional: false, required: false
  private _weekly = new DataScmExternalDynamicListListDataTypeUrlRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
}
export interface DataScmExternalDynamicListListDataTypeUrl {
}

export function dataScmExternalDynamicListListDataTypeUrlToTerraform(struct?: DataScmExternalDynamicListListDataTypeUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeUrlToHclTerraform(struct?: DataScmExternalDynamicListListDataTypeUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataTypeUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataTypeUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataScmExternalDynamicListListDataTypeUrlAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // certificate_profile - computed: true, optional: false, required: false
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exception_list - computed: true, optional: false, required: false
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataScmExternalDynamicListListDataTypeUrlRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataScmExternalDynamicListListDataType {
}

export function dataScmExternalDynamicListListDataTypeToTerraform(struct?: DataScmExternalDynamicListListDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmExternalDynamicListListDataTypeToHclTerraform(struct?: DataScmExternalDynamicListListDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmExternalDynamicListListDataTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmExternalDynamicListListDataType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListDataType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  private _domain = new DataScmExternalDynamicListListDataTypeDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }

  // imei - computed: true, optional: false, required: false
  private _imei = new DataScmExternalDynamicListListDataTypeImeiOutputReference(this, "imei");
  public get imei() {
    return this._imei;
  }

  // imsi - computed: true, optional: false, required: false
  private _imsi = new DataScmExternalDynamicListListDataTypeImsiOutputReference(this, "imsi");
  public get imsi() {
    return this._imsi;
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataScmExternalDynamicListListDataTypeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // predefined_ip - computed: true, optional: false, required: false
  private _predefinedIp = new DataScmExternalDynamicListListDataTypePredefinedIpOutputReference(this, "predefined_ip");
  public get predefinedIp() {
    return this._predefinedIp;
  }

  // predefined_url - computed: true, optional: false, required: false
  private _predefinedUrl = new DataScmExternalDynamicListListDataTypePredefinedUrlOutputReference(this, "predefined_url");
  public get predefinedUrl() {
    return this._predefinedUrl;
  }

  // url - computed: true, optional: false, required: false
  private _url = new DataScmExternalDynamicListListDataTypeUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
}
export interface DataScmExternalDynamicListListData {
  /**
  * The UUID of the external dynamic list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#id DataScmExternalDynamicListList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the external dynamic list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#name DataScmExternalDynamicListList#name}
  */
  readonly name?: string;
}

export function dataScmExternalDynamicListListDataToTerraform(struct?: DataScmExternalDynamicListListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmExternalDynamicListListDataToHclTerraform(struct?: DataScmExternalDynamicListListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmExternalDynamicListListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmExternalDynamicListListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmExternalDynamicListListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
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

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataScmExternalDynamicListListDataTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
}

export class DataScmExternalDynamicListListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmExternalDynamicListListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmExternalDynamicListListDataOutputReference {
    return new DataScmExternalDynamicListListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list scm_external_dynamic_list_list}
*/
export class DataScmExternalDynamicListList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_external_dynamic_list_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmExternalDynamicListList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmExternalDynamicListList to import
  * @param importFromId The id of the existing DataScmExternalDynamicListList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmExternalDynamicListList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_external_dynamic_list_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/external_dynamic_list_list scm_external_dynamic_list_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmExternalDynamicListListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmExternalDynamicListListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_external_dynamic_list_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
  private _data = new DataScmExternalDynamicListListDataList(this, "data", false);
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
