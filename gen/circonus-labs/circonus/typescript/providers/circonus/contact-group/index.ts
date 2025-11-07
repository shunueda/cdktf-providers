// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContactGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#aggregation_window ContactGroup#aggregation_window}
  */
  readonly aggregationWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#always_send_clear ContactGroup#always_send_clear}
  */
  readonly alwaysSendClear?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#group_type ContactGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#id ContactGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#long_message ContactGroup#long_message}
  */
  readonly longMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#long_subject ContactGroup#long_subject}
  */
  readonly longSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#long_summary ContactGroup#long_summary}
  */
  readonly longSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#name ContactGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#short_message ContactGroup#short_message}
  */
  readonly shortMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#short_summary ContactGroup#short_summary}
  */
  readonly shortSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#tags ContactGroup#tags}
  */
  readonly tags?: string[];
  /**
  * alert_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#alert_option ContactGroup#alert_option}
  */
  readonly alertOption?: ContactGroupAlertOption[] | cdktf.IResolvable;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#email ContactGroup#email}
  */
  readonly email?: ContactGroupEmail;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#http ContactGroup#http}
  */
  readonly http?: ContactGroupHttp[] | cdktf.IResolvable;
  /**
  * pager_duty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#pager_duty ContactGroup#pager_duty}
  */
  readonly pagerDuty?: ContactGroupPagerDuty[] | cdktf.IResolvable;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#slack ContactGroup#slack}
  */
  readonly slack?: ContactGroupSlack[] | cdktf.IResolvable;
  /**
  * sms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#sms ContactGroup#sms}
  */
  readonly sms?: ContactGroupSms;
  /**
  * victorops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#victorops ContactGroup#victorops}
  */
  readonly victorops?: ContactGroupVictorops[] | cdktf.IResolvable;
}
export interface ContactGroupAlertOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#escalate_after ContactGroup#escalate_after}
  */
  readonly escalateAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#escalate_to ContactGroup#escalate_to}
  */
  readonly escalateTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#reminder ContactGroup#reminder}
  */
  readonly reminder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#severity ContactGroup#severity}
  */
  readonly severity: number;
}

export function contactGroupAlertOptionToTerraform(struct?: ContactGroupAlertOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalate_after: cdktf.stringToTerraform(struct!.escalateAfter),
    escalate_to: cdktf.stringToTerraform(struct!.escalateTo),
    reminder: cdktf.stringToTerraform(struct!.reminder),
    severity: cdktf.numberToTerraform(struct!.severity),
  }
}


export function contactGroupAlertOptionToHclTerraform(struct?: ContactGroupAlertOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalate_after: {
      value: cdktf.stringToHclTerraform(struct!.escalateAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalate_to: {
      value: cdktf.stringToHclTerraform(struct!.escalateTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reminder: {
      value: cdktf.stringToHclTerraform(struct!.reminder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactGroupAlertOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactGroupAlertOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalateAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalateAfter = this._escalateAfter;
    }
    if (this._escalateTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalateTo = this._escalateTo;
    }
    if (this._reminder !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminder = this._reminder;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactGroupAlertOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escalateAfter = undefined;
      this._escalateTo = undefined;
      this._reminder = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escalateAfter = value.escalateAfter;
      this._escalateTo = value.escalateTo;
      this._reminder = value.reminder;
      this._severity = value.severity;
    }
  }

  // escalate_after - computed: false, optional: true, required: false
  private _escalateAfter?: string; 
  public get escalateAfter() {
    return this.getStringAttribute('escalate_after');
  }
  public set escalateAfter(value: string) {
    this._escalateAfter = value;
  }
  public resetEscalateAfter() {
    this._escalateAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalateAfterInput() {
    return this._escalateAfter;
  }

  // escalate_to - computed: false, optional: true, required: false
  private _escalateTo?: string; 
  public get escalateTo() {
    return this.getStringAttribute('escalate_to');
  }
  public set escalateTo(value: string) {
    this._escalateTo = value;
  }
  public resetEscalateTo() {
    this._escalateTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalateToInput() {
    return this._escalateTo;
  }

  // reminder - computed: false, optional: true, required: false
  private _reminder?: string; 
  public get reminder() {
    return this.getStringAttribute('reminder');
  }
  public set reminder(value: string) {
    this._reminder = value;
  }
  public resetReminder() {
    this._reminder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderInput() {
    return this._reminder;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class ContactGroupAlertOptionList extends cdktf.ComplexList {
  public internalValue? : ContactGroupAlertOption[] | cdktf.IResolvable

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
  public get(index: number): ContactGroupAlertOptionOutputReference {
    return new ContactGroupAlertOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactGroupEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#address ContactGroup#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#user ContactGroup#user}
  */
  readonly user?: string;
}

export function contactGroupEmailToTerraform(struct?: ContactGroupEmailOutputReference | ContactGroupEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function contactGroupEmailToHclTerraform(struct?: ContactGroupEmailOutputReference | ContactGroupEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactGroupEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactGroupEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactGroupEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._user = value.user;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ContactGroupHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#format ContactGroup#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#method ContactGroup#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#url ContactGroup#url}
  */
  readonly url: string;
}

export function contactGroupHttpToTerraform(struct?: ContactGroupHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    method: cdktf.stringToTerraform(struct!.method),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function contactGroupHttpToHclTerraform(struct?: ContactGroupHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactGroupHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactGroupHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactGroupHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._method = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._method = value.method;
      this._url = value.url;
    }
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContactGroupHttpList extends cdktf.ComplexList {
  public internalValue? : ContactGroupHttp[] | cdktf.IResolvable

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
  public get(index: number): ContactGroupHttpOutputReference {
    return new ContactGroupHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactGroupPagerDuty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#account ContactGroup#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#contact_group_fallback ContactGroup#contact_group_fallback}
  */
  readonly contactGroupFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#service_key ContactGroup#service_key}
  */
  readonly serviceKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#webhook_url ContactGroup#webhook_url}
  */
  readonly webhookUrl: string;
}

export function contactGroupPagerDutyToTerraform(struct?: ContactGroupPagerDuty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    contact_group_fallback: cdktf.stringToTerraform(struct!.contactGroupFallback),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}


export function contactGroupPagerDutyToHclTerraform(struct?: ContactGroupPagerDuty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_group_fallback: {
      value: cdktf.stringToHclTerraform(struct!.contactGroupFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.webhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactGroupPagerDutyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactGroupPagerDuty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._contactGroupFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroupFallback = this._contactGroupFallback;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    if (this._webhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrl = this._webhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactGroupPagerDuty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._contactGroupFallback = undefined;
      this._serviceKey = undefined;
      this._webhookUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._contactGroupFallback = value.contactGroupFallback;
      this._serviceKey = value.serviceKey;
      this._webhookUrl = value.webhookUrl;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // contact_group_fallback - computed: false, optional: true, required: false
  private _contactGroupFallback?: string; 
  public get contactGroupFallback() {
    return this.getStringAttribute('contact_group_fallback');
  }
  public set contactGroupFallback(value: string) {
    this._contactGroupFallback = value;
  }
  public resetContactGroupFallback() {
    this._contactGroupFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupFallbackInput() {
    return this._contactGroupFallback;
  }

  // service_key - computed: false, optional: false, required: true
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }

  // webhook_url - computed: false, optional: false, required: true
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }
}

export class ContactGroupPagerDutyList extends cdktf.ComplexList {
  public internalValue? : ContactGroupPagerDuty[] | cdktf.IResolvable

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
  public get(index: number): ContactGroupPagerDutyOutputReference {
    return new ContactGroupPagerDutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactGroupSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#buttons ContactGroup#buttons}
  */
  readonly buttons?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#channel ContactGroup#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#contact_group_fallback ContactGroup#contact_group_fallback}
  */
  readonly contactGroupFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#team ContactGroup#team}
  */
  readonly team: string;
  /**
  * Username Slackbot uses in Slack to deliver a notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#username ContactGroup#username}
  */
  readonly username?: string;
}

export function contactGroupSlackToTerraform(struct?: ContactGroupSlack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buttons: cdktf.booleanToTerraform(struct!.buttons),
    channel: cdktf.stringToTerraform(struct!.channel),
    contact_group_fallback: cdktf.stringToTerraform(struct!.contactGroupFallback),
    team: cdktf.stringToTerraform(struct!.team),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function contactGroupSlackToHclTerraform(struct?: ContactGroupSlack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buttons: {
      value: cdktf.booleanToHclTerraform(struct!.buttons),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_group_fallback: {
      value: cdktf.stringToHclTerraform(struct!.contactGroupFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactGroupSlackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactGroupSlack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttons !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttons = this._buttons;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._contactGroupFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroupFallback = this._contactGroupFallback;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactGroupSlack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttons = undefined;
      this._channel = undefined;
      this._contactGroupFallback = undefined;
      this._team = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttons = value.buttons;
      this._channel = value.channel;
      this._contactGroupFallback = value.contactGroupFallback;
      this._team = value.team;
      this._username = value.username;
    }
  }

  // buttons - computed: false, optional: true, required: false
  private _buttons?: boolean | cdktf.IResolvable; 
  public get buttons() {
    return this.getBooleanAttribute('buttons');
  }
  public set buttons(value: boolean | cdktf.IResolvable) {
    this._buttons = value;
  }
  public resetButtons() {
    this._buttons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsInput() {
    return this._buttons;
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // contact_group_fallback - computed: false, optional: true, required: false
  private _contactGroupFallback?: string; 
  public get contactGroupFallback() {
    return this.getStringAttribute('contact_group_fallback');
  }
  public set contactGroupFallback(value: string) {
    this._contactGroupFallback = value;
  }
  public resetContactGroupFallback() {
    this._contactGroupFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupFallbackInput() {
    return this._contactGroupFallback;
  }

  // team - computed: false, optional: false, required: true
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ContactGroupSlackList extends cdktf.ComplexList {
  public internalValue? : ContactGroupSlack[] | cdktf.IResolvable

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
  public get(index: number): ContactGroupSlackOutputReference {
    return new ContactGroupSlackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactGroupSms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#address ContactGroup#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#user ContactGroup#user}
  */
  readonly user?: string;
}

export function contactGroupSmsToTerraform(struct?: ContactGroupSmsOutputReference | ContactGroupSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function contactGroupSmsToHclTerraform(struct?: ContactGroupSmsOutputReference | ContactGroupSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactGroupSmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactGroupSms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactGroupSms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._user = value.user;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ContactGroupVictorops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#api_key ContactGroup#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#contact_group_fallback ContactGroup#contact_group_fallback}
  */
  readonly contactGroupFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#critical ContactGroup#critical}
  */
  readonly critical: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#info ContactGroup#info}
  */
  readonly info: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#team ContactGroup#team}
  */
  readonly team: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#warning ContactGroup#warning}
  */
  readonly warning: number;
}

export function contactGroupVictoropsToTerraform(struct?: ContactGroupVictorops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    contact_group_fallback: cdktf.stringToTerraform(struct!.contactGroupFallback),
    critical: cdktf.numberToTerraform(struct!.critical),
    info: cdktf.numberToTerraform(struct!.info),
    team: cdktf.stringToTerraform(struct!.team),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function contactGroupVictoropsToHclTerraform(struct?: ContactGroupVictorops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_group_fallback: {
      value: cdktf.stringToHclTerraform(struct!.contactGroupFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical: {
      value: cdktf.numberToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    info: {
      value: cdktf.numberToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactGroupVictoropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContactGroupVictorops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._contactGroupFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroupFallback = this._contactGroupFallback;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactGroupVictorops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._contactGroupFallback = undefined;
      this._critical = undefined;
      this._info = undefined;
      this._team = undefined;
      this._warning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._contactGroupFallback = value.contactGroupFallback;
      this._critical = value.critical;
      this._info = value.info;
      this._team = value.team;
      this._warning = value.warning;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // contact_group_fallback - computed: false, optional: true, required: false
  private _contactGroupFallback?: string; 
  public get contactGroupFallback() {
    return this.getStringAttribute('contact_group_fallback');
  }
  public set contactGroupFallback(value: string) {
    this._contactGroupFallback = value;
  }
  public resetContactGroupFallback() {
    this._contactGroupFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupFallbackInput() {
    return this._contactGroupFallback;
  }

  // critical - computed: false, optional: false, required: true
  private _critical?: number; 
  public get critical() {
    return this.getNumberAttribute('critical');
  }
  public set critical(value: number) {
    this._critical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // info - computed: false, optional: false, required: true
  private _info?: number; 
  public get info() {
    return this.getNumberAttribute('info');
  }
  public set info(value: number) {
    this._info = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // team - computed: false, optional: false, required: true
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // warning - computed: false, optional: false, required: true
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}

export class ContactGroupVictoropsList extends cdktf.ComplexList {
  public internalValue? : ContactGroupVictorops[] | cdktf.IResolvable

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
  public get(index: number): ContactGroupVictoropsOutputReference {
    return new ContactGroupVictoropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group circonus_contact_group}
*/
export class ContactGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus_contact_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContactGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContactGroup to import
  * @param importFromId The id of the existing ContactGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContactGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus_contact_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/contact_group circonus_contact_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ContactGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'circonus_contact_group',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregationWindow = config.aggregationWindow;
    this._alwaysSendClear = config.alwaysSendClear;
    this._groupType = config.groupType;
    this._id = config.id;
    this._longMessage = config.longMessage;
    this._longSubject = config.longSubject;
    this._longSummary = config.longSummary;
    this._name = config.name;
    this._shortMessage = config.shortMessage;
    this._shortSummary = config.shortSummary;
    this._tags = config.tags;
    this._alertOption.internalValue = config.alertOption;
    this._email.internalValue = config.email;
    this._http.internalValue = config.http;
    this._pagerDuty.internalValue = config.pagerDuty;
    this._slack.internalValue = config.slack;
    this._sms.internalValue = config.sms;
    this._victorops.internalValue = config.victorops;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_window - computed: false, optional: true, required: false
  private _aggregationWindow?: string; 
  public get aggregationWindow() {
    return this.getStringAttribute('aggregation_window');
  }
  public set aggregationWindow(value: string) {
    this._aggregationWindow = value;
  }
  public resetAggregationWindow() {
    this._aggregationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationWindowInput() {
    return this._aggregationWindow;
  }

  // always_send_clear - computed: false, optional: true, required: false
  private _alwaysSendClear?: boolean | cdktf.IResolvable; 
  public get alwaysSendClear() {
    return this.getBooleanAttribute('always_send_clear');
  }
  public set alwaysSendClear(value: boolean | cdktf.IResolvable) {
    this._alwaysSendClear = value;
  }
  public resetAlwaysSendClear() {
    this._alwaysSendClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSendClearInput() {
    return this._alwaysSendClear;
  }

  // group_type - computed: false, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // long_message - computed: false, optional: true, required: false
  private _longMessage?: string; 
  public get longMessage() {
    return this.getStringAttribute('long_message');
  }
  public set longMessage(value: string) {
    this._longMessage = value;
  }
  public resetLongMessage() {
    this._longMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longMessageInput() {
    return this._longMessage;
  }

  // long_subject - computed: false, optional: true, required: false
  private _longSubject?: string; 
  public get longSubject() {
    return this.getStringAttribute('long_subject');
  }
  public set longSubject(value: string) {
    this._longSubject = value;
  }
  public resetLongSubject() {
    this._longSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longSubjectInput() {
    return this._longSubject;
  }

  // long_summary - computed: false, optional: true, required: false
  private _longSummary?: string; 
  public get longSummary() {
    return this.getStringAttribute('long_summary');
  }
  public set longSummary(value: string) {
    this._longSummary = value;
  }
  public resetLongSummary() {
    this._longSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longSummaryInput() {
    return this._longSummary;
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

  // short_message - computed: false, optional: true, required: false
  private _shortMessage?: string; 
  public get shortMessage() {
    return this.getStringAttribute('short_message');
  }
  public set shortMessage(value: string) {
    this._shortMessage = value;
  }
  public resetShortMessage() {
    this._shortMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortMessageInput() {
    return this._shortMessage;
  }

  // short_summary - computed: false, optional: true, required: false
  private _shortSummary?: string; 
  public get shortSummary() {
    return this.getStringAttribute('short_summary');
  }
  public set shortSummary(value: string) {
    this._shortSummary = value;
  }
  public resetShortSummary() {
    this._shortSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortSummaryInput() {
    return this._shortSummary;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // alert_option - computed: false, optional: true, required: false
  private _alertOption = new ContactGroupAlertOptionList(this, "alert_option", true);
  public get alertOption() {
    return this._alertOption;
  }
  public putAlertOption(value: ContactGroupAlertOption[] | cdktf.IResolvable) {
    this._alertOption.internalValue = value;
  }
  public resetAlertOption() {
    this._alertOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOptionInput() {
    return this._alertOption.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ContactGroupEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ContactGroupEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ContactGroupHttpList(this, "http", true);
  public get http() {
    return this._http;
  }
  public putHttp(value: ContactGroupHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // pager_duty - computed: false, optional: true, required: false
  private _pagerDuty = new ContactGroupPagerDutyList(this, "pager_duty", true);
  public get pagerDuty() {
    return this._pagerDuty;
  }
  public putPagerDuty(value: ContactGroupPagerDuty[] | cdktf.IResolvable) {
    this._pagerDuty.internalValue = value;
  }
  public resetPagerDuty() {
    this._pagerDuty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyInput() {
    return this._pagerDuty.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new ContactGroupSlackList(this, "slack", true);
  public get slack() {
    return this._slack;
  }
  public putSlack(value: ContactGroupSlack[] | cdktf.IResolvable) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // sms - computed: false, optional: true, required: false
  private _sms = new ContactGroupSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: ContactGroupSms) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // victorops - computed: false, optional: true, required: false
  private _victorops = new ContactGroupVictoropsList(this, "victorops", true);
  public get victorops() {
    return this._victorops;
  }
  public putVictorops(value: ContactGroupVictorops[] | cdktf.IResolvable) {
    this._victorops.internalValue = value;
  }
  public resetVictorops() {
    this._victorops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victoropsInput() {
    return this._victorops.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_window: cdktf.stringToTerraform(this._aggregationWindow),
      always_send_clear: cdktf.booleanToTerraform(this._alwaysSendClear),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      long_message: cdktf.stringToTerraform(this._longMessage),
      long_subject: cdktf.stringToTerraform(this._longSubject),
      long_summary: cdktf.stringToTerraform(this._longSummary),
      name: cdktf.stringToTerraform(this._name),
      short_message: cdktf.stringToTerraform(this._shortMessage),
      short_summary: cdktf.stringToTerraform(this._shortSummary),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      alert_option: cdktf.listMapper(contactGroupAlertOptionToTerraform, true)(this._alertOption.internalValue),
      email: contactGroupEmailToTerraform(this._email.internalValue),
      http: cdktf.listMapper(contactGroupHttpToTerraform, true)(this._http.internalValue),
      pager_duty: cdktf.listMapper(contactGroupPagerDutyToTerraform, true)(this._pagerDuty.internalValue),
      slack: cdktf.listMapper(contactGroupSlackToTerraform, true)(this._slack.internalValue),
      sms: contactGroupSmsToTerraform(this._sms.internalValue),
      victorops: cdktf.listMapper(contactGroupVictoropsToTerraform, true)(this._victorops.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_window: {
        value: cdktf.stringToHclTerraform(this._aggregationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      always_send_clear: {
        value: cdktf.booleanToHclTerraform(this._alwaysSendClear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      long_message: {
        value: cdktf.stringToHclTerraform(this._longMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_subject: {
        value: cdktf.stringToHclTerraform(this._longSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_summary: {
        value: cdktf.stringToHclTerraform(this._longSummary),
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
      short_message: {
        value: cdktf.stringToHclTerraform(this._shortMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_summary: {
        value: cdktf.stringToHclTerraform(this._shortSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_option: {
        value: cdktf.listMapperHcl(contactGroupAlertOptionToHclTerraform, true)(this._alertOption.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactGroupAlertOptionList",
      },
      email: {
        value: contactGroupEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactGroupEmailList",
      },
      http: {
        value: cdktf.listMapperHcl(contactGroupHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactGroupHttpList",
      },
      pager_duty: {
        value: cdktf.listMapperHcl(contactGroupPagerDutyToHclTerraform, true)(this._pagerDuty.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactGroupPagerDutyList",
      },
      slack: {
        value: cdktf.listMapperHcl(contactGroupSlackToHclTerraform, true)(this._slack.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactGroupSlackList",
      },
      sms: {
        value: contactGroupSmsToHclTerraform(this._sms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactGroupSmsList",
      },
      victorops: {
        value: cdktf.listMapperHcl(contactGroupVictoropsToHclTerraform, true)(this._victorops.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContactGroupVictoropsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
