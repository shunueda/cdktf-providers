// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of alert group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#alert_group_type AlertRule#alert_group_type}
  */
  readonly alertGroupType?: string;
  /**
  * The type of alert rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#alert_type AlertRule#alert_type}
  */
  readonly alertType: string;
  /**
  * [to-target, from-target, bidirectional] The direction of the test (affects how results are shown).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#direction AlertRule#direction}
  */
  readonly direction?: string;
  /**
  * An array of endpoint agent IDs associated with the rule (get `id` from `/endpoint/agents` API). This is applicable when `alertGroupType` is `browser-session`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#endpoint_agent_ids AlertRule#endpoint_agent_ids}
  */
  readonly endpointAgentIds?: string[];
  /**
  * An array of label IDs used to assign specific Endpoint Agents to the test (get `id` from `/endpoint/labels`). This is applicable when `alertGroupType` is `browser-session`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#endpoint_label_ids AlertRule#endpoint_label_ids}
  */
  readonly endpointLabelIds?: string[];
  /**
  * The alert rule evaluation expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#expression AlertRule#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#id AlertRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include queries for subprefixes detected under this prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#include_covered_prefixes AlertRule#include_covered_prefixes}
  */
  readonly includeCoveredPrefixes?: boolean | cdktf.IResolvable;
  /**
  * If set to `true`, this alert rule becomes the default for its test type and is automatically applied to newly created tests with relevant metrics. Only one default alert rule is allowed per test type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#is_default AlertRule#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The minimum number of agents or monitors that must meet the specified criteria in order to trigger an alert. This option is mutually exclusive with 'minimum_sources_pct'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#minimum_sources AlertRule#minimum_sources}
  */
  readonly minimumSources?: number;
  /**
  * The minimum percentage of agents or monitors that must meet the specified criteria in order to trigger an alert. This option is mutually exclusive with 'minimum_sources'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#minimum_sources_pct AlertRule#minimum_sources_pct}
  */
  readonly minimumSourcesPct?: number;
  /**
  * Set to 'true' to trigger the notification when the alert clears.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#notify_on_clear AlertRule#notify_on_clear}
  */
  readonly notifyOnClear?: boolean | cdktf.IResolvable;
  /**
  * [any, auto or exact] Defines whether the same agent(s) must meet the 'exact' same threshold in consecutive rounds or not. The default value is 'any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#rounds_violating_mode AlertRule#rounds_violating_mode}
  */
  readonly roundsViolatingMode?: string;
  /**
  * Specifies the divisor (Y value) of the “X of Y times” condition in an alert rule.  Minimum value is 1, maximum value is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#rounds_violating_out_of AlertRule#rounds_violating_out_of}
  */
  readonly roundsViolatingOutOf: number;
  /**
  * Specifies the numerator (X value) of the “X of Y times” condition in an alert rule.  Minimum value is 1, maximum value is 10. Must be less than or equal to 'roundsViolatingOutOf'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#rounds_violating_required AlertRule#rounds_violating_required}
  */
  readonly roundsViolatingRequired: number;
  /**
  * The name of the alert rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#rule_name AlertRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * [high, medium or low] Defines sensitivity level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#sensitivity_level AlertRule#sensitivity_level}
  */
  readonly sensitivityLevel?: string;
  /**
  * [info, minor, major, critical or unknown] The severity level of the alert rule. The default value is 'info'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#severity AlertRule#severity}
  */
  readonly severity?: string;
  /**
  * A list of website domains visited during the session. This is applicable when `alertGroupType` is `browser-session`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#visited_sites_filter AlertRule#visited_sites_filter}
  */
  readonly visitedSitesFilter?: string[];
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#notifications AlertRule#notifications}
  */
  readonly notifications?: AlertRuleNotifications[] | cdktf.IResolvable;
}
export interface AlertRuleNotificationsCustomWebhook {
  /**
  * The integration ID, as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#integration_id AlertRule#integration_id}
  */
  readonly integrationId: string;
  /**
  * The integration type, as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#integration_type AlertRule#integration_type}
  */
  readonly integrationType: string;
}

export function alertRuleNotificationsCustomWebhookToTerraform(struct?: AlertRuleNotificationsCustomWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
  }
}


export function alertRuleNotificationsCustomWebhookToHclTerraform(struct?: AlertRuleNotificationsCustomWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleNotificationsCustomWebhookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleNotificationsCustomWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleNotificationsCustomWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationId = undefined;
      this._integrationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationId = value.integrationId;
      this._integrationType = value.integrationType;
    }
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }
}

export class AlertRuleNotificationsCustomWebhookList extends cdktf.ComplexList {
  public internalValue? : AlertRuleNotificationsCustomWebhook[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleNotificationsCustomWebhookOutputReference {
    return new AlertRuleNotificationsCustomWebhookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleNotificationsEmail {
  /**
  * The contents of the email, as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#message AlertRule#message}
  */
  readonly message?: string;
  /**
  * The email addresses to send the notification to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#recipients AlertRule#recipients}
  */
  readonly recipients?: string[];
}

export function alertRuleNotificationsEmailToTerraform(struct?: AlertRuleNotificationsEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
  }
}


export function alertRuleNotificationsEmailToHclTerraform(struct?: AlertRuleNotificationsEmail | cdktf.IResolvable): any {
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
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleNotificationsEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleNotificationsEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleNotificationsEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._recipients = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._recipients = value.recipients;
    }
  }

  // message - computed: false, optional: true, required: false
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

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }
}

export class AlertRuleNotificationsEmailList extends cdktf.ComplexList {
  public internalValue? : AlertRuleNotificationsEmail[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleNotificationsEmailOutputReference {
    return new AlertRuleNotificationsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleNotificationsThirdParty {
  /**
  * The integration ID, as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#integration_id AlertRule#integration_id}
  */
  readonly integrationId: string;
  /**
  * The integration type, as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#integration_type AlertRule#integration_type}
  */
  readonly integrationType: string;
}

export function alertRuleNotificationsThirdPartyToTerraform(struct?: AlertRuleNotificationsThirdParty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
  }
}


export function alertRuleNotificationsThirdPartyToHclTerraform(struct?: AlertRuleNotificationsThirdParty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleNotificationsThirdPartyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleNotificationsThirdParty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleNotificationsThirdParty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationId = undefined;
      this._integrationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationId = value.integrationId;
      this._integrationType = value.integrationType;
    }
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }
}

export class AlertRuleNotificationsThirdPartyList extends cdktf.ComplexList {
  public internalValue? : AlertRuleNotificationsThirdParty[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleNotificationsThirdPartyOutputReference {
    return new AlertRuleNotificationsThirdPartyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleNotificationsWebhook {
  /**
  * The integration ID, as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#integration_id AlertRule#integration_id}
  */
  readonly integrationId: string;
  /**
  * The integration type, as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#integration_type AlertRule#integration_type}
  */
  readonly integrationType: string;
}

export function alertRuleNotificationsWebhookToTerraform(struct?: AlertRuleNotificationsWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
  }
}


export function alertRuleNotificationsWebhookToHclTerraform(struct?: AlertRuleNotificationsWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleNotificationsWebhookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleNotificationsWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleNotificationsWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationId = undefined;
      this._integrationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationId = value.integrationId;
      this._integrationType = value.integrationType;
    }
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }
}

export class AlertRuleNotificationsWebhookList extends cdktf.ComplexList {
  public internalValue? : AlertRuleNotificationsWebhook[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleNotificationsWebhookOutputReference {
    return new AlertRuleNotificationsWebhookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleNotifications {
  /**
  * custom_webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#custom_webhook AlertRule#custom_webhook}
  */
  readonly customWebhook?: AlertRuleNotificationsCustomWebhook[] | cdktf.IResolvable;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#email AlertRule#email}
  */
  readonly email?: AlertRuleNotificationsEmail[] | cdktf.IResolvable;
  /**
  * third_party block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#third_party AlertRule#third_party}
  */
  readonly thirdParty?: AlertRuleNotificationsThirdParty[] | cdktf.IResolvable;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#webhook AlertRule#webhook}
  */
  readonly webhook?: AlertRuleNotificationsWebhook[] | cdktf.IResolvable;
}

export function alertRuleNotificationsToTerraform(struct?: AlertRuleNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_webhook: cdktf.listMapper(alertRuleNotificationsCustomWebhookToTerraform, true)(struct!.customWebhook),
    email: cdktf.listMapper(alertRuleNotificationsEmailToTerraform, true)(struct!.email),
    third_party: cdktf.listMapper(alertRuleNotificationsThirdPartyToTerraform, true)(struct!.thirdParty),
    webhook: cdktf.listMapper(alertRuleNotificationsWebhookToTerraform, true)(struct!.webhook),
  }
}


export function alertRuleNotificationsToHclTerraform(struct?: AlertRuleNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_webhook: {
      value: cdktf.listMapperHcl(alertRuleNotificationsCustomWebhookToHclTerraform, true)(struct!.customWebhook),
      isBlock: true,
      type: "set",
      storageClassType: "AlertRuleNotificationsCustomWebhookList",
    },
    email: {
      value: cdktf.listMapperHcl(alertRuleNotificationsEmailToHclTerraform, true)(struct!.email),
      isBlock: true,
      type: "set",
      storageClassType: "AlertRuleNotificationsEmailList",
    },
    third_party: {
      value: cdktf.listMapperHcl(alertRuleNotificationsThirdPartyToHclTerraform, true)(struct!.thirdParty),
      isBlock: true,
      type: "set",
      storageClassType: "AlertRuleNotificationsThirdPartyList",
    },
    webhook: {
      value: cdktf.listMapperHcl(alertRuleNotificationsWebhookToHclTerraform, true)(struct!.webhook),
      isBlock: true,
      type: "set",
      storageClassType: "AlertRuleNotificationsWebhookList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customWebhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customWebhook = this._customWebhook?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._thirdParty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdParty = this._thirdParty?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customWebhook.internalValue = undefined;
      this._email.internalValue = undefined;
      this._thirdParty.internalValue = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customWebhook.internalValue = value.customWebhook;
      this._email.internalValue = value.email;
      this._thirdParty.internalValue = value.thirdParty;
      this._webhook.internalValue = value.webhook;
    }
  }

  // custom_webhook - computed: false, optional: true, required: false
  private _customWebhook = new AlertRuleNotificationsCustomWebhookList(this, "custom_webhook", true);
  public get customWebhook() {
    return this._customWebhook;
  }
  public putCustomWebhook(value: AlertRuleNotificationsCustomWebhook[] | cdktf.IResolvable) {
    this._customWebhook.internalValue = value;
  }
  public resetCustomWebhook() {
    this._customWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customWebhookInput() {
    return this._customWebhook.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new AlertRuleNotificationsEmailList(this, "email", true);
  public get email() {
    return this._email;
  }
  public putEmail(value: AlertRuleNotificationsEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // third_party - computed: false, optional: true, required: false
  private _thirdParty = new AlertRuleNotificationsThirdPartyList(this, "third_party", true);
  public get thirdParty() {
    return this._thirdParty;
  }
  public putThirdParty(value: AlertRuleNotificationsThirdParty[] | cdktf.IResolvable) {
    this._thirdParty.internalValue = value;
  }
  public resetThirdParty() {
    this._thirdParty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyInput() {
    return this._thirdParty.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new AlertRuleNotificationsWebhookList(this, "webhook", true);
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: AlertRuleNotificationsWebhook[] | cdktf.IResolvable) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}

export class AlertRuleNotificationsList extends cdktf.ComplexList {
  public internalValue? : AlertRuleNotifications[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleNotificationsOutputReference {
    return new AlertRuleNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule thousandeyes_alert_rule}
*/
export class AlertRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_alert_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertRule to import
  * @param importFromId The id of the existing AlertRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_alert_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/alert_rule thousandeyes_alert_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.3',
        providerVersionConstraint: '3.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertGroupType = config.alertGroupType;
    this._alertType = config.alertType;
    this._direction = config.direction;
    this._endpointAgentIds = config.endpointAgentIds;
    this._endpointLabelIds = config.endpointLabelIds;
    this._expression = config.expression;
    this._id = config.id;
    this._includeCoveredPrefixes = config.includeCoveredPrefixes;
    this._isDefault = config.isDefault;
    this._minimumSources = config.minimumSources;
    this._minimumSourcesPct = config.minimumSourcesPct;
    this._notifyOnClear = config.notifyOnClear;
    this._roundsViolatingMode = config.roundsViolatingMode;
    this._roundsViolatingOutOf = config.roundsViolatingOutOf;
    this._roundsViolatingRequired = config.roundsViolatingRequired;
    this._ruleName = config.ruleName;
    this._sensitivityLevel = config.sensitivityLevel;
    this._severity = config.severity;
    this._visitedSitesFilter = config.visitedSitesFilter;
    this._notifications.internalValue = config.notifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_group_type - computed: true, optional: true, required: false
  private _alertGroupType?: string; 
  public get alertGroupType() {
    return this.getStringAttribute('alert_group_type');
  }
  public set alertGroupType(value: string) {
    this._alertGroupType = value;
  }
  public resetAlertGroupType() {
    this._alertGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupTypeInput() {
    return this._alertGroupType;
  }

  // alert_type - computed: false, optional: false, required: true
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // endpoint_agent_ids - computed: false, optional: true, required: false
  private _endpointAgentIds?: string[]; 
  public get endpointAgentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('endpoint_agent_ids'));
  }
  public set endpointAgentIds(value: string[]) {
    this._endpointAgentIds = value;
  }
  public resetEndpointAgentIds() {
    this._endpointAgentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAgentIdsInput() {
    return this._endpointAgentIds;
  }

  // endpoint_label_ids - computed: false, optional: true, required: false
  private _endpointLabelIds?: string[]; 
  public get endpointLabelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('endpoint_label_ids'));
  }
  public set endpointLabelIds(value: string[]) {
    this._endpointLabelIds = value;
  }
  public resetEndpointLabelIds() {
    this._endpointLabelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointLabelIdsInput() {
    return this._endpointLabelIds;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // include_covered_prefixes - computed: false, optional: true, required: false
  private _includeCoveredPrefixes?: boolean | cdktf.IResolvable; 
  public get includeCoveredPrefixes() {
    return this.getBooleanAttribute('include_covered_prefixes');
  }
  public set includeCoveredPrefixes(value: boolean | cdktf.IResolvable) {
    this._includeCoveredPrefixes = value;
  }
  public resetIncludeCoveredPrefixes() {
    this._includeCoveredPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCoveredPrefixesInput() {
    return this._includeCoveredPrefixes;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // minimum_sources - computed: false, optional: true, required: false
  private _minimumSources?: number; 
  public get minimumSources() {
    return this.getNumberAttribute('minimum_sources');
  }
  public set minimumSources(value: number) {
    this._minimumSources = value;
  }
  public resetMinimumSources() {
    this._minimumSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSourcesInput() {
    return this._minimumSources;
  }

  // minimum_sources_pct - computed: false, optional: true, required: false
  private _minimumSourcesPct?: number; 
  public get minimumSourcesPct() {
    return this.getNumberAttribute('minimum_sources_pct');
  }
  public set minimumSourcesPct(value: number) {
    this._minimumSourcesPct = value;
  }
  public resetMinimumSourcesPct() {
    this._minimumSourcesPct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSourcesPctInput() {
    return this._minimumSourcesPct;
  }

  // notify_on_clear - computed: false, optional: true, required: false
  private _notifyOnClear?: boolean | cdktf.IResolvable; 
  public get notifyOnClear() {
    return this.getBooleanAttribute('notify_on_clear');
  }
  public set notifyOnClear(value: boolean | cdktf.IResolvable) {
    this._notifyOnClear = value;
  }
  public resetNotifyOnClear() {
    this._notifyOnClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnClearInput() {
    return this._notifyOnClear;
  }

  // rounds_violating_mode - computed: false, optional: true, required: false
  private _roundsViolatingMode?: string; 
  public get roundsViolatingMode() {
    return this.getStringAttribute('rounds_violating_mode');
  }
  public set roundsViolatingMode(value: string) {
    this._roundsViolatingMode = value;
  }
  public resetRoundsViolatingMode() {
    this._roundsViolatingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundsViolatingModeInput() {
    return this._roundsViolatingMode;
  }

  // rounds_violating_out_of - computed: false, optional: false, required: true
  private _roundsViolatingOutOf?: number; 
  public get roundsViolatingOutOf() {
    return this.getNumberAttribute('rounds_violating_out_of');
  }
  public set roundsViolatingOutOf(value: number) {
    this._roundsViolatingOutOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roundsViolatingOutOfInput() {
    return this._roundsViolatingOutOf;
  }

  // rounds_violating_required - computed: false, optional: false, required: true
  private _roundsViolatingRequired?: number; 
  public get roundsViolatingRequired() {
    return this.getNumberAttribute('rounds_violating_required');
  }
  public set roundsViolatingRequired(value: number) {
    this._roundsViolatingRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roundsViolatingRequiredInput() {
    return this._roundsViolatingRequired;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // sensitivity_level - computed: false, optional: true, required: false
  private _sensitivityLevel?: string; 
  public get sensitivityLevel() {
    return this.getStringAttribute('sensitivity_level');
  }
  public set sensitivityLevel(value: string) {
    this._sensitivityLevel = value;
  }
  public resetSensitivityLevel() {
    this._sensitivityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityLevelInput() {
    return this._sensitivityLevel;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // test_ids - computed: true, optional: false, required: false
  public get testIds() {
    return cdktf.Fn.tolist(this.getListAttribute('test_ids'));
  }

  // visited_sites_filter - computed: false, optional: true, required: false
  private _visitedSitesFilter?: string[]; 
  public get visitedSitesFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('visited_sites_filter'));
  }
  public set visitedSitesFilter(value: string[]) {
    this._visitedSitesFilter = value;
  }
  public resetVisitedSitesFilter() {
    this._visitedSitesFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visitedSitesFilterInput() {
    return this._visitedSitesFilter;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new AlertRuleNotificationsList(this, "notifications", true);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: AlertRuleNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_group_type: cdktf.stringToTerraform(this._alertGroupType),
      alert_type: cdktf.stringToTerraform(this._alertType),
      direction: cdktf.stringToTerraform(this._direction),
      endpoint_agent_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpointAgentIds),
      endpoint_label_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpointLabelIds),
      expression: cdktf.stringToTerraform(this._expression),
      id: cdktf.stringToTerraform(this._id),
      include_covered_prefixes: cdktf.booleanToTerraform(this._includeCoveredPrefixes),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      minimum_sources: cdktf.numberToTerraform(this._minimumSources),
      minimum_sources_pct: cdktf.numberToTerraform(this._minimumSourcesPct),
      notify_on_clear: cdktf.booleanToTerraform(this._notifyOnClear),
      rounds_violating_mode: cdktf.stringToTerraform(this._roundsViolatingMode),
      rounds_violating_out_of: cdktf.numberToTerraform(this._roundsViolatingOutOf),
      rounds_violating_required: cdktf.numberToTerraform(this._roundsViolatingRequired),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sensitivity_level: cdktf.stringToTerraform(this._sensitivityLevel),
      severity: cdktf.stringToTerraform(this._severity),
      visited_sites_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._visitedSitesFilter),
      notifications: cdktf.listMapper(alertRuleNotificationsToTerraform, true)(this._notifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_group_type: {
        value: cdktf.stringToHclTerraform(this._alertGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_agent_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpointAgentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      endpoint_label_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpointLabelIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
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
      include_covered_prefixes: {
        value: cdktf.booleanToHclTerraform(this._includeCoveredPrefixes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minimum_sources: {
        value: cdktf.numberToHclTerraform(this._minimumSources),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_sources_pct: {
        value: cdktf.numberToHclTerraform(this._minimumSourcesPct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify_on_clear: {
        value: cdktf.booleanToHclTerraform(this._notifyOnClear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rounds_violating_mode: {
        value: cdktf.stringToHclTerraform(this._roundsViolatingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rounds_violating_out_of: {
        value: cdktf.numberToHclTerraform(this._roundsViolatingOutOf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rounds_violating_required: {
        value: cdktf.numberToHclTerraform(this._roundsViolatingRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity_level: {
        value: cdktf.stringToHclTerraform(this._sensitivityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visited_sites_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._visitedSitesFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      notifications: {
        value: cdktf.listMapperHcl(alertRuleNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertRuleNotificationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
