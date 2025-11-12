// https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#conditions AlertAction#conditions}
  */
  readonly conditions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#delay_sec AlertAction#delay_sec}
  */
  readonly delaySec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#escalation_ended_delay_sec AlertAction#escalation_ended_delay_sec}
  */
  readonly escalationEndedDelaySec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#id AlertAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#name AlertAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#not_resolved_delay_sec AlertAction#not_resolved_delay_sec}
  */
  readonly notResolvedDelaySec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#trigger_mode AlertAction#trigger_mode}
  */
  readonly triggerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#trigger_types AlertAction#trigger_types}
  */
  readonly triggerTypes?: string[];
  /**
  * alert_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#alert_filter AlertAction#alert_filter}
  */
  readonly alertFilter?: AlertActionAlertFilter;
  /**
  * alert_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#alert_source AlertAction#alert_source}
  */
  readonly alertSource: AlertActionAlertSource[] | cdktf.IResolvable;
  /**
  * automation_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#automation_rule AlertAction#automation_rule}
  */
  readonly automationRule?: AlertActionAutomationRule;
  /**
  * autotask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#autotask AlertAction#autotask}
  */
  readonly autotask?: AlertActionAutotask;
  /**
  * connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#connector AlertAction#connector}
  */
  readonly connector: AlertActionConnector;
  /**
  * dingtalk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#dingtalk AlertAction#dingtalk}
  */
  readonly dingtalk?: AlertActionDingtalk;
  /**
  * dingtalk_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#dingtalk_action AlertAction#dingtalk_action}
  */
  readonly dingtalkAction?: AlertActionDingtalkAction;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#email AlertAction#email}
  */
  readonly email?: AlertActionEmail;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#github AlertAction#github}
  */
  readonly github?: AlertActionGithub;
  /**
  * jira block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#jira AlertAction#jira}
  */
  readonly jira?: AlertActionJira;
  /**
  * microsoft_teams_bot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#microsoft_teams_bot AlertAction#microsoft_teams_bot}
  */
  readonly microsoftTeamsBot?: AlertActionMicrosoftTeamsBot;
  /**
  * microsoft_teams_webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#microsoft_teams_webhook AlertAction#microsoft_teams_webhook}
  */
  readonly microsoftTeamsWebhook?: AlertActionMicrosoftTeamsWebhook;
  /**
  * servicenow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#servicenow AlertAction#servicenow}
  */
  readonly servicenow?: AlertActionServicenow;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#slack AlertAction#slack}
  */
  readonly slack?: AlertActionSlack;
  /**
  * slack_webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#slack_webhook AlertAction#slack_webhook}
  */
  readonly slackWebhook?: AlertActionSlackWebhook;
  /**
  * team block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#team AlertAction#team}
  */
  readonly team?: AlertActionTeam[] | cdktf.IResolvable;
  /**
  * telegram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#telegram AlertAction#telegram}
  */
  readonly telegram?: AlertActionTelegram;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#timeouts AlertAction#timeouts}
  */
  readonly timeouts?: AlertActionTimeouts;
  /**
  * topdesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#topdesk AlertAction#topdesk}
  */
  readonly topdesk?: AlertActionTopdesk;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#webhook AlertAction#webhook}
  */
  readonly webhook?: AlertActionWebhook;
  /**
  * zammad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#zammad AlertAction#zammad}
  */
  readonly zammad?: AlertActionZammad;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#zendesk AlertAction#zendesk}
  */
  readonly zendesk?: AlertActionZendesk;
}
export interface AlertActionAlertFilterPredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#criteria AlertAction#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#field AlertAction#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#value AlertAction#value}
  */
  readonly value: string;
}

export function alertActionAlertFilterPredicateToTerraform(struct?: AlertActionAlertFilterPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    field: cdktf.stringToTerraform(struct!.field),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertActionAlertFilterPredicateToHclTerraform(struct?: AlertActionAlertFilterPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionAlertFilterPredicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertActionAlertFilterPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionAlertFilterPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._field = value.field;
      this._value = value.value;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AlertActionAlertFilterPredicateList extends cdktf.ComplexList {
  public internalValue? : AlertActionAlertFilterPredicate[] | cdktf.IResolvable

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
  public get(index: number): AlertActionAlertFilterPredicateOutputReference {
    return new AlertActionAlertFilterPredicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertActionAlertFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#operator AlertAction#operator}
  */
  readonly operator: string;
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#predicate AlertAction#predicate}
  */
  readonly predicate: AlertActionAlertFilterPredicate[] | cdktf.IResolvable;
}

export function alertActionAlertFilterToTerraform(struct?: AlertActionAlertFilterOutputReference | AlertActionAlertFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    predicate: cdktf.listMapper(alertActionAlertFilterPredicateToTerraform, true)(struct!.predicate),
  }
}


export function alertActionAlertFilterToHclTerraform(struct?: AlertActionAlertFilterOutputReference | AlertActionAlertFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate: {
      value: cdktf.listMapperHcl(alertActionAlertFilterPredicateToHclTerraform, true)(struct!.predicate),
      isBlock: true,
      type: "list",
      storageClassType: "AlertActionAlertFilterPredicateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionAlertFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionAlertFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionAlertFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._predicate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._predicate.internalValue = value.predicate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // predicate - computed: false, optional: false, required: true
  private _predicate = new AlertActionAlertFilterPredicateList(this, "predicate", false);
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: AlertActionAlertFilterPredicate[] | cdktf.IResolvable) {
    this._predicate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }
}
export interface AlertActionAlertSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#id AlertAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function alertActionAlertSourceToTerraform(struct?: AlertActionAlertSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function alertActionAlertSourceToHclTerraform(struct?: AlertActionAlertSource | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionAlertSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertActionAlertSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionAlertSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class AlertActionAlertSourceList extends cdktf.ComplexList {
  public internalValue? : AlertActionAlertSource[] | cdktf.IResolvable

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
  public get(index: number): AlertActionAlertSourceOutputReference {
    return new AlertActionAlertSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertActionAutomationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#alert_type AlertAction#alert_type}
  */
  readonly alertType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#resolve_incident AlertAction#resolve_incident}
  */
  readonly resolveIncident?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#send_notification AlertAction#send_notification}
  */
  readonly sendNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#service_ids AlertAction#service_ids}
  */
  readonly serviceIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#service_status AlertAction#service_status}
  */
  readonly serviceStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#template_id AlertAction#template_id}
  */
  readonly templateId?: number;
}

export function alertActionAutomationRuleToTerraform(struct?: AlertActionAutomationRuleOutputReference | AlertActionAutomationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_type: cdktf.stringToTerraform(struct!.alertType),
    resolve_incident: cdktf.booleanToTerraform(struct!.resolveIncident),
    send_notification: cdktf.booleanToTerraform(struct!.sendNotification),
    service_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.serviceIds),
    service_status: cdktf.stringToTerraform(struct!.serviceStatus),
    template_id: cdktf.numberToTerraform(struct!.templateId),
  }
}


export function alertActionAutomationRuleToHclTerraform(struct?: AlertActionAutomationRuleOutputReference | AlertActionAutomationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_type: {
      value: cdktf.stringToHclTerraform(struct!.alertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_incident: {
      value: cdktf.booleanToHclTerraform(struct!.resolveIncident),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_notification: {
      value: cdktf.booleanToHclTerraform(struct!.sendNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.serviceIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    service_status: {
      value: cdktf.stringToHclTerraform(struct!.serviceStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.numberToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionAutomationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionAutomationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertType = this._alertType;
    }
    if (this._resolveIncident !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveIncident = this._resolveIncident;
    }
    if (this._sendNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendNotification = this._sendNotification;
    }
    if (this._serviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIds = this._serviceIds;
    }
    if (this._serviceStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceStatus = this._serviceStatus;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionAutomationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertType = undefined;
      this._resolveIncident = undefined;
      this._sendNotification = undefined;
      this._serviceIds = undefined;
      this._serviceStatus = undefined;
      this._templateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertType = value.alertType;
      this._resolveIncident = value.resolveIncident;
      this._sendNotification = value.sendNotification;
      this._serviceIds = value.serviceIds;
      this._serviceStatus = value.serviceStatus;
      this._templateId = value.templateId;
    }
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

  // resolve_incident - computed: false, optional: true, required: false
  private _resolveIncident?: boolean | cdktf.IResolvable; 
  public get resolveIncident() {
    return this.getBooleanAttribute('resolve_incident');
  }
  public set resolveIncident(value: boolean | cdktf.IResolvable) {
    this._resolveIncident = value;
  }
  public resetResolveIncident() {
    this._resolveIncident = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveIncidentInput() {
    return this._resolveIncident;
  }

  // send_notification - computed: false, optional: true, required: false
  private _sendNotification?: boolean | cdktf.IResolvable; 
  public get sendNotification() {
    return this.getBooleanAttribute('send_notification');
  }
  public set sendNotification(value: boolean | cdktf.IResolvable) {
    this._sendNotification = value;
  }
  public resetSendNotification() {
    this._sendNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendNotificationInput() {
    return this._sendNotification;
  }

  // service_ids - computed: false, optional: false, required: true
  private _serviceIds?: number[]; 
  public get serviceIds() {
    return this.getNumberListAttribute('service_ids');
  }
  public set serviceIds(value: number[]) {
    this._serviceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // service_status - computed: false, optional: false, required: true
  private _serviceStatus?: string; 
  public get serviceStatus() {
    return this.getStringAttribute('service_status');
  }
  public set serviceStatus(value: string) {
    this._serviceStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceStatusInput() {
    return this._serviceStatus;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}
export interface AlertActionAutotask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#company_id AlertAction#company_id}
  */
  readonly companyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#issue_type AlertAction#issue_type}
  */
  readonly issueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#queue_id AlertAction#queue_id}
  */
  readonly queueId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#ticket_category AlertAction#ticket_category}
  */
  readonly ticketCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#ticket_type AlertAction#ticket_type}
  */
  readonly ticketType?: string;
}

export function alertActionAutotaskToTerraform(struct?: AlertActionAutotaskOutputReference | AlertActionAutotask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company_id: cdktf.stringToTerraform(struct!.companyId),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    queue_id: cdktf.numberToTerraform(struct!.queueId),
    ticket_category: cdktf.stringToTerraform(struct!.ticketCategory),
    ticket_type: cdktf.stringToTerraform(struct!.ticketType),
  }
}


export function alertActionAutotaskToHclTerraform(struct?: AlertActionAutotaskOutputReference | AlertActionAutotask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company_id: {
      value: cdktf.stringToHclTerraform(struct!.companyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_id: {
      value: cdktf.numberToHclTerraform(struct!.queueId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ticket_category: {
      value: cdktf.stringToHclTerraform(struct!.ticketCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_type: {
      value: cdktf.stringToHclTerraform(struct!.ticketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionAutotaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionAutotask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._companyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyId = this._companyId;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    if (this._ticketCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketCategory = this._ticketCategory;
    }
    if (this._ticketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketType = this._ticketType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionAutotask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._companyId = undefined;
      this._issueType = undefined;
      this._queueId = undefined;
      this._ticketCategory = undefined;
      this._ticketType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._companyId = value.companyId;
      this._issueType = value.issueType;
      this._queueId = value.queueId;
      this._ticketCategory = value.ticketCategory;
      this._ticketType = value.ticketType;
    }
  }

  // company_id - computed: false, optional: true, required: false
  private _companyId?: string; 
  public get companyId() {
    return this.getStringAttribute('company_id');
  }
  public set companyId(value: string) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
  }

  // issue_type - computed: false, optional: true, required: false
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  public resetIssueType() {
    this._issueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: number; 
  public get queueId() {
    return this.getNumberAttribute('queue_id');
  }
  public set queueId(value: number) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // ticket_category - computed: false, optional: true, required: false
  private _ticketCategory?: string; 
  public get ticketCategory() {
    return this.getStringAttribute('ticket_category');
  }
  public set ticketCategory(value: string) {
    this._ticketCategory = value;
  }
  public resetTicketCategory() {
    this._ticketCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketCategoryInput() {
    return this._ticketCategory;
  }

  // ticket_type - computed: false, optional: true, required: false
  private _ticketType?: string; 
  public get ticketType() {
    return this.getStringAttribute('ticket_type');
  }
  public set ticketType(value: string) {
    this._ticketType = value;
  }
  public resetTicketType() {
    this._ticketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketTypeInput() {
    return this._ticketType;
  }
}
export interface AlertActionConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#id AlertAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#type AlertAction#type}
  */
  readonly type: string;
}

export function alertActionConnectorToTerraform(struct?: AlertActionConnectorOutputReference | AlertActionConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function alertActionConnectorToHclTerraform(struct?: AlertActionConnectorOutputReference | AlertActionConnector): any {
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

export class AlertActionConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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
export interface AlertActionDingtalk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#at_mobiles AlertAction#at_mobiles}
  */
  readonly atMobiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#is_at_all AlertAction#is_at_all}
  */
  readonly isAtAll?: boolean | cdktf.IResolvable;
}

export function alertActionDingtalkToTerraform(struct?: AlertActionDingtalkOutputReference | AlertActionDingtalk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at_mobiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.atMobiles),
    is_at_all: cdktf.booleanToTerraform(struct!.isAtAll),
  }
}


export function alertActionDingtalkToHclTerraform(struct?: AlertActionDingtalkOutputReference | AlertActionDingtalk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at_mobiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.atMobiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_at_all: {
      value: cdktf.booleanToHclTerraform(struct!.isAtAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionDingtalkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionDingtalk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atMobiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.atMobiles = this._atMobiles;
    }
    if (this._isAtAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAtAll = this._isAtAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionDingtalk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atMobiles = undefined;
      this._isAtAll = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atMobiles = value.atMobiles;
      this._isAtAll = value.isAtAll;
    }
  }

  // at_mobiles - computed: false, optional: true, required: false
  private _atMobiles?: string[]; 
  public get atMobiles() {
    return this.getListAttribute('at_mobiles');
  }
  public set atMobiles(value: string[]) {
    this._atMobiles = value;
  }
  public resetAtMobiles() {
    this._atMobiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atMobilesInput() {
    return this._atMobiles;
  }

  // is_at_all - computed: false, optional: true, required: false
  private _isAtAll?: boolean | cdktf.IResolvable; 
  public get isAtAll() {
    return this.getBooleanAttribute('is_at_all');
  }
  public set isAtAll(value: boolean | cdktf.IResolvable) {
    this._isAtAll = value;
  }
  public resetIsAtAll() {
    this._isAtAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAtAllInput() {
    return this._isAtAll;
  }
}
export interface AlertActionDingtalkAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#at_mobiles AlertAction#at_mobiles}
  */
  readonly atMobiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#is_at_all AlertAction#is_at_all}
  */
  readonly isAtAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#secret AlertAction#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#url AlertAction#url}
  */
  readonly url: string;
}

export function alertActionDingtalkActionToTerraform(struct?: AlertActionDingtalkActionOutputReference | AlertActionDingtalkAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at_mobiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.atMobiles),
    is_at_all: cdktf.booleanToTerraform(struct!.isAtAll),
    secret: cdktf.stringToTerraform(struct!.secret),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertActionDingtalkActionToHclTerraform(struct?: AlertActionDingtalkActionOutputReference | AlertActionDingtalkAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at_mobiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.atMobiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_at_all: {
      value: cdktf.booleanToHclTerraform(struct!.isAtAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
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

export class AlertActionDingtalkActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionDingtalkAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atMobiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.atMobiles = this._atMobiles;
    }
    if (this._isAtAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAtAll = this._isAtAll;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionDingtalkAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atMobiles = undefined;
      this._isAtAll = undefined;
      this._secret = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atMobiles = value.atMobiles;
      this._isAtAll = value.isAtAll;
      this._secret = value.secret;
      this._url = value.url;
    }
  }

  // at_mobiles - computed: false, optional: true, required: false
  private _atMobiles?: string[]; 
  public get atMobiles() {
    return this.getListAttribute('at_mobiles');
  }
  public set atMobiles(value: string[]) {
    this._atMobiles = value;
  }
  public resetAtMobiles() {
    this._atMobiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atMobilesInput() {
    return this._atMobiles;
  }

  // is_at_all - computed: false, optional: true, required: false
  private _isAtAll?: boolean | cdktf.IResolvable; 
  public get isAtAll() {
    return this.getBooleanAttribute('is_at_all');
  }
  public set isAtAll(value: boolean | cdktf.IResolvable) {
    this._isAtAll = value;
  }
  public resetIsAtAll() {
    this._isAtAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAtAllInput() {
    return this._isAtAll;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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
export interface AlertActionEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#body_template AlertAction#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#recipients AlertAction#recipients}
  */
  readonly recipients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#subject AlertAction#subject}
  */
  readonly subject: string;
}

export function alertActionEmailToTerraform(struct?: AlertActionEmailOutputReference | AlertActionEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertActionEmailToHclTerraform(struct?: AlertActionEmailOutputReference | AlertActionEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_template: {
      value: cdktf.stringToHclTerraform(struct!.bodyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._recipients = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._recipients = value.recipients;
      this._subject = value.subject;
    }
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface AlertActionGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#labels AlertAction#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#owner AlertAction#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#repository AlertAction#repository}
  */
  readonly repository: string;
}

export function alertActionGithubToTerraform(struct?: AlertActionGithubOutputReference | AlertActionGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    owner: cdktf.stringToTerraform(struct!.owner),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function alertActionGithubToHclTerraform(struct?: AlertActionGithubOutputReference | AlertActionGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._owner = undefined;
      this._repository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._owner = value.owner;
      this._repository = value.repository;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface AlertActionJira {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#body_template AlertAction#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#issue_type AlertAction#issue_type}
  */
  readonly issueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#project AlertAction#project}
  */
  readonly project: string;
}

export function alertActionJiraToTerraform(struct?: AlertActionJiraOutputReference | AlertActionJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function alertActionJiraToHclTerraform(struct?: AlertActionJiraOutputReference | AlertActionJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_template: {
      value: cdktf.stringToHclTerraform(struct!.bodyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionJiraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionJira | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionJira | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._issueType = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._issueType = value.issueType;
      this._project = value.project;
    }
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
  }

  // issue_type - computed: false, optional: true, required: false
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  public resetIssueType() {
    this._issueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface AlertActionMicrosoftTeamsBot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#channel_id AlertAction#channel_id}
  */
  readonly channelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#channel_name AlertAction#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#team_id AlertAction#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#team_name AlertAction#team_name}
  */
  readonly teamName?: string;
  /**
  * chat | meeting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#type AlertAction#type}
  */
  readonly type: string;
}

export function alertActionMicrosoftTeamsBotToTerraform(struct?: AlertActionMicrosoftTeamsBotOutputReference | AlertActionMicrosoftTeamsBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    team_name: cdktf.stringToTerraform(struct!.teamName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function alertActionMicrosoftTeamsBotToHclTerraform(struct?: AlertActionMicrosoftTeamsBotOutputReference | AlertActionMicrosoftTeamsBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_name: {
      value: cdktf.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_name: {
      value: cdktf.stringToHclTerraform(struct!.teamName),
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

export class AlertActionMicrosoftTeamsBotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionMicrosoftTeamsBot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._teamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamName = this._teamName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionMicrosoftTeamsBot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelId = undefined;
      this._channelName = undefined;
      this._teamId = undefined;
      this._teamName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelId = value.channelId;
      this._channelName = value.channelName;
      this._teamId = value.teamId;
      this._teamName = value.teamName;
      this._type = value.type;
    }
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
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
export interface AlertActionMicrosoftTeamsWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#body_template AlertAction#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#url AlertAction#url}
  */
  readonly url: string;
}

export function alertActionMicrosoftTeamsWebhookToTerraform(struct?: AlertActionMicrosoftTeamsWebhookOutputReference | AlertActionMicrosoftTeamsWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertActionMicrosoftTeamsWebhookToHclTerraform(struct?: AlertActionMicrosoftTeamsWebhookOutputReference | AlertActionMicrosoftTeamsWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_template: {
      value: cdktf.stringToHclTerraform(struct!.bodyTemplate),
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

export class AlertActionMicrosoftTeamsWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionMicrosoftTeamsWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionMicrosoftTeamsWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._url = value.url;
    }
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
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
export interface AlertActionServicenow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#body_template AlertAction#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#caller_id AlertAction#caller_id}
  */
  readonly callerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#impact AlertAction#impact}
  */
  readonly impact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#urgency AlertAction#urgency}
  */
  readonly urgency?: string;
}

export function alertActionServicenowToTerraform(struct?: AlertActionServicenowOutputReference | AlertActionServicenow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    caller_id: cdktf.stringToTerraform(struct!.callerId),
    impact: cdktf.stringToTerraform(struct!.impact),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function alertActionServicenowToHclTerraform(struct?: AlertActionServicenowOutputReference | AlertActionServicenow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_template: {
      value: cdktf.stringToHclTerraform(struct!.bodyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caller_id: {
      value: cdktf.stringToHclTerraform(struct!.callerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    impact: {
      value: cdktf.stringToHclTerraform(struct!.impact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionServicenowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionServicenow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._callerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.callerId = this._callerId;
    }
    if (this._impact !== undefined) {
      hasAnyValues = true;
      internalValueResult.impact = this._impact;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionServicenow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._callerId = undefined;
      this._impact = undefined;
      this._urgency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._callerId = value.callerId;
      this._impact = value.impact;
      this._urgency = value.urgency;
    }
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
  }

  // caller_id - computed: false, optional: true, required: false
  private _callerId?: string; 
  public get callerId() {
    return this.getStringAttribute('caller_id');
  }
  public set callerId(value: string) {
    this._callerId = value;
  }
  public resetCallerId() {
    this._callerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerIdInput() {
    return this._callerId;
  }

  // impact - computed: false, optional: true, required: false
  private _impact?: string; 
  public get impact() {
    return this.getStringAttribute('impact');
  }
  public set impact(value: string) {
    this._impact = value;
  }
  public resetImpact() {
    this._impact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactInput() {
    return this._impact;
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}
export interface AlertActionSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#channel_id AlertAction#channel_id}
  */
  readonly channelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#channel_name AlertAction#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#team_domain AlertAction#team_domain}
  */
  readonly teamDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#team_id AlertAction#team_id}
  */
  readonly teamId: string;
}

export function alertActionSlackToTerraform(struct?: AlertActionSlackOutputReference | AlertActionSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    team_domain: cdktf.stringToTerraform(struct!.teamDomain),
    team_id: cdktf.stringToTerraform(struct!.teamId),
  }
}


export function alertActionSlackToHclTerraform(struct?: AlertActionSlackOutputReference | AlertActionSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_name: {
      value: cdktf.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_domain: {
      value: cdktf.stringToHclTerraform(struct!.teamDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._teamDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamDomain = this._teamDomain;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelId = undefined;
      this._channelName = undefined;
      this._teamDomain = undefined;
      this._teamId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelId = value.channelId;
      this._channelName = value.channelName;
      this._teamDomain = value.teamDomain;
      this._teamId = value.teamId;
    }
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // team_domain - computed: false, optional: true, required: false
  private _teamDomain?: string; 
  public get teamDomain() {
    return this.getStringAttribute('team_domain');
  }
  public set teamDomain(value: string) {
    this._teamDomain = value;
  }
  public resetTeamDomain() {
    this._teamDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamDomainInput() {
    return this._teamDomain;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }
}
export interface AlertActionSlackWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#url AlertAction#url}
  */
  readonly url: string;
}

export function alertActionSlackWebhookToTerraform(struct?: AlertActionSlackWebhookOutputReference | AlertActionSlackWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertActionSlackWebhookToHclTerraform(struct?: AlertActionSlackWebhookOutputReference | AlertActionSlackWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlertActionSlackWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionSlackWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionSlackWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AlertActionTeam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#id AlertAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#name AlertAction#name}
  */
  readonly name?: string;
}

export function alertActionTeamToTerraform(struct?: AlertActionTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function alertActionTeamToHclTerraform(struct?: AlertActionTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class AlertActionTeamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertActionTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AlertActionTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class AlertActionTeamList extends cdktf.ComplexList {
  public internalValue? : AlertActionTeam[] | cdktf.IResolvable

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
  public get(index: number): AlertActionTeamOutputReference {
    return new AlertActionTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertActionTelegram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#channel_id AlertAction#channel_id}
  */
  readonly channelId: string;
}

export function alertActionTelegramToTerraform(struct?: AlertActionTelegramOutputReference | AlertActionTelegram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
  }
}


export function alertActionTelegramToHclTerraform(struct?: AlertActionTelegramOutputReference | AlertActionTelegram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionTelegramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionTelegram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionTelegram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelId = value.channelId;
    }
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }
}
export interface AlertActionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#create AlertAction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#delete AlertAction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#read AlertAction#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#update AlertAction#update}
  */
  readonly update?: string;
}

export function alertActionTimeoutsToTerraform(struct?: AlertActionTimeouts | cdktf.IResolvable): any {
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


export function alertActionTimeoutsToHclTerraform(struct?: AlertActionTimeouts | cdktf.IResolvable): any {
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

export class AlertActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertActionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertActionTimeouts | cdktf.IResolvable | undefined) {
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
export interface AlertActionTopdesk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#status AlertAction#status}
  */
  readonly status?: string;
}

export function alertActionTopdeskToTerraform(struct?: AlertActionTopdeskOutputReference | AlertActionTopdesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function alertActionTopdeskToHclTerraform(struct?: AlertActionTopdeskOutputReference | AlertActionTopdesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionTopdeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionTopdesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionTopdesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface AlertActionWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#body_template AlertAction#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#url AlertAction#url}
  */
  readonly url: string;
}

export function alertActionWebhookToTerraform(struct?: AlertActionWebhookOutputReference | AlertActionWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertActionWebhookToHclTerraform(struct?: AlertActionWebhookOutputReference | AlertActionWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_template: {
      value: cdktf.stringToHclTerraform(struct!.bodyTemplate),
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

export class AlertActionWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._url = value.url;
    }
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
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
export interface AlertActionZammad {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#email AlertAction#email}
  */
  readonly email?: string;
}

export function alertActionZammadToTerraform(struct?: AlertActionZammadOutputReference | AlertActionZammad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function alertActionZammadToHclTerraform(struct?: AlertActionZammadOutputReference | AlertActionZammad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionZammadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionZammad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionZammad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface AlertActionZendesk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#priority AlertAction#priority}
  */
  readonly priority?: string;
}

export function alertActionZendeskToTerraform(struct?: AlertActionZendeskOutputReference | AlertActionZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function alertActionZendeskToHclTerraform(struct?: AlertActionZendeskOutputReference | AlertActionZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertActionZendeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertActionZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertActionZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action ilert_alert_action}
*/
export class AlertAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ilert_alert_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertAction to import
  * @param importFromId The id of the existing AlertAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ilert_alert_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_action ilert_alert_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertActionConfig
  */
  public constructor(scope: Construct, id: string, config: AlertActionConfig) {
    super(scope, id, {
      terraformResourceType: 'ilert_alert_action',
      terraformGeneratorMetadata: {
        providerName: 'ilert',
        providerVersion: '2.14.3',
        providerVersionConstraint: '2.14.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditions = config.conditions;
    this._delaySec = config.delaySec;
    this._escalationEndedDelaySec = config.escalationEndedDelaySec;
    this._id = config.id;
    this._name = config.name;
    this._notResolvedDelaySec = config.notResolvedDelaySec;
    this._triggerMode = config.triggerMode;
    this._triggerTypes = config.triggerTypes;
    this._alertFilter.internalValue = config.alertFilter;
    this._alertSource.internalValue = config.alertSource;
    this._automationRule.internalValue = config.automationRule;
    this._autotask.internalValue = config.autotask;
    this._connector.internalValue = config.connector;
    this._dingtalk.internalValue = config.dingtalk;
    this._dingtalkAction.internalValue = config.dingtalkAction;
    this._email.internalValue = config.email;
    this._github.internalValue = config.github;
    this._jira.internalValue = config.jira;
    this._microsoftTeamsBot.internalValue = config.microsoftTeamsBot;
    this._microsoftTeamsWebhook.internalValue = config.microsoftTeamsWebhook;
    this._servicenow.internalValue = config.servicenow;
    this._slack.internalValue = config.slack;
    this._slackWebhook.internalValue = config.slackWebhook;
    this._team.internalValue = config.team;
    this._telegram.internalValue = config.telegram;
    this._timeouts.internalValue = config.timeouts;
    this._topdesk.internalValue = config.topdesk;
    this._webhook.internalValue = config.webhook;
    this._zammad.internalValue = config.zammad;
    this._zendesk.internalValue = config.zendesk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conditions - computed: false, optional: true, required: false
  private _conditions?: string; 
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
  public set conditions(value: string) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delay_sec - computed: false, optional: true, required: false
  private _delaySec?: number; 
  public get delaySec() {
    return this.getNumberAttribute('delay_sec');
  }
  public set delaySec(value: number) {
    this._delaySec = value;
  }
  public resetDelaySec() {
    this._delaySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecInput() {
    return this._delaySec;
  }

  // escalation_ended_delay_sec - computed: false, optional: true, required: false
  private _escalationEndedDelaySec?: number; 
  public get escalationEndedDelaySec() {
    return this.getNumberAttribute('escalation_ended_delay_sec');
  }
  public set escalationEndedDelaySec(value: number) {
    this._escalationEndedDelaySec = value;
  }
  public resetEscalationEndedDelaySec() {
    this._escalationEndedDelaySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationEndedDelaySecInput() {
    return this._escalationEndedDelaySec;
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

  // not_resolved_delay_sec - computed: false, optional: true, required: false
  private _notResolvedDelaySec?: number; 
  public get notResolvedDelaySec() {
    return this.getNumberAttribute('not_resolved_delay_sec');
  }
  public set notResolvedDelaySec(value: number) {
    this._notResolvedDelaySec = value;
  }
  public resetNotResolvedDelaySec() {
    this._notResolvedDelaySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notResolvedDelaySecInput() {
    return this._notResolvedDelaySec;
  }

  // trigger_mode - computed: false, optional: true, required: false
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  public resetTriggerMode() {
    this._triggerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }

  // trigger_types - computed: false, optional: true, required: false
  private _triggerTypes?: string[]; 
  public get triggerTypes() {
    return this.getListAttribute('trigger_types');
  }
  public set triggerTypes(value: string[]) {
    this._triggerTypes = value;
  }
  public resetTriggerTypes() {
    this._triggerTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypesInput() {
    return this._triggerTypes;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // alert_filter - computed: false, optional: true, required: false
  private _alertFilter = new AlertActionAlertFilterOutputReference(this, "alert_filter");
  public get alertFilter() {
    return this._alertFilter;
  }
  public putAlertFilter(value: AlertActionAlertFilter) {
    this._alertFilter.internalValue = value;
  }
  public resetAlertFilter() {
    this._alertFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertFilterInput() {
    return this._alertFilter.internalValue;
  }

  // alert_source - computed: false, optional: false, required: true
  private _alertSource = new AlertActionAlertSourceList(this, "alert_source", false);
  public get alertSource() {
    return this._alertSource;
  }
  public putAlertSource(value: AlertActionAlertSource[] | cdktf.IResolvable) {
    this._alertSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourceInput() {
    return this._alertSource.internalValue;
  }

  // automation_rule - computed: false, optional: true, required: false
  private _automationRule = new AlertActionAutomationRuleOutputReference(this, "automation_rule");
  public get automationRule() {
    return this._automationRule;
  }
  public putAutomationRule(value: AlertActionAutomationRule) {
    this._automationRule.internalValue = value;
  }
  public resetAutomationRule() {
    this._automationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationRuleInput() {
    return this._automationRule.internalValue;
  }

  // autotask - computed: false, optional: true, required: false
  private _autotask = new AlertActionAutotaskOutputReference(this, "autotask");
  public get autotask() {
    return this._autotask;
  }
  public putAutotask(value: AlertActionAutotask) {
    this._autotask.internalValue = value;
  }
  public resetAutotask() {
    this._autotask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotaskInput() {
    return this._autotask.internalValue;
  }

  // connector - computed: false, optional: false, required: true
  private _connector = new AlertActionConnectorOutputReference(this, "connector");
  public get connector() {
    return this._connector;
  }
  public putConnector(value: AlertActionConnector) {
    this._connector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector.internalValue;
  }

  // dingtalk - computed: false, optional: true, required: false
  private _dingtalk = new AlertActionDingtalkOutputReference(this, "dingtalk");
  public get dingtalk() {
    return this._dingtalk;
  }
  public putDingtalk(value: AlertActionDingtalk) {
    this._dingtalk.internalValue = value;
  }
  public resetDingtalk() {
    this._dingtalk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dingtalkInput() {
    return this._dingtalk.internalValue;
  }

  // dingtalk_action - computed: false, optional: true, required: false
  private _dingtalkAction = new AlertActionDingtalkActionOutputReference(this, "dingtalk_action");
  public get dingtalkAction() {
    return this._dingtalkAction;
  }
  public putDingtalkAction(value: AlertActionDingtalkAction) {
    this._dingtalkAction.internalValue = value;
  }
  public resetDingtalkAction() {
    this._dingtalkAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dingtalkActionInput() {
    return this._dingtalkAction.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new AlertActionEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: AlertActionEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new AlertActionGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: AlertActionGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new AlertActionJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: AlertActionJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // microsoft_teams_bot - computed: false, optional: true, required: false
  private _microsoftTeamsBot = new AlertActionMicrosoftTeamsBotOutputReference(this, "microsoft_teams_bot");
  public get microsoftTeamsBot() {
    return this._microsoftTeamsBot;
  }
  public putMicrosoftTeamsBot(value: AlertActionMicrosoftTeamsBot) {
    this._microsoftTeamsBot.internalValue = value;
  }
  public resetMicrosoftTeamsBot() {
    this._microsoftTeamsBot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftTeamsBotInput() {
    return this._microsoftTeamsBot.internalValue;
  }

  // microsoft_teams_webhook - computed: false, optional: true, required: false
  private _microsoftTeamsWebhook = new AlertActionMicrosoftTeamsWebhookOutputReference(this, "microsoft_teams_webhook");
  public get microsoftTeamsWebhook() {
    return this._microsoftTeamsWebhook;
  }
  public putMicrosoftTeamsWebhook(value: AlertActionMicrosoftTeamsWebhook) {
    this._microsoftTeamsWebhook.internalValue = value;
  }
  public resetMicrosoftTeamsWebhook() {
    this._microsoftTeamsWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftTeamsWebhookInput() {
    return this._microsoftTeamsWebhook.internalValue;
  }

  // servicenow - computed: false, optional: true, required: false
  private _servicenow = new AlertActionServicenowOutputReference(this, "servicenow");
  public get servicenow() {
    return this._servicenow;
  }
  public putServicenow(value: AlertActionServicenow) {
    this._servicenow.internalValue = value;
  }
  public resetServicenow() {
    this._servicenow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowInput() {
    return this._servicenow.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new AlertActionSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AlertActionSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // slack_webhook - computed: false, optional: true, required: false
  private _slackWebhook = new AlertActionSlackWebhookOutputReference(this, "slack_webhook");
  public get slackWebhook() {
    return this._slackWebhook;
  }
  public putSlackWebhook(value: AlertActionSlackWebhook) {
    this._slackWebhook.internalValue = value;
  }
  public resetSlackWebhook() {
    this._slackWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackWebhookInput() {
    return this._slackWebhook.internalValue;
  }

  // team - computed: false, optional: true, required: false
  private _team = new AlertActionTeamList(this, "team", false);
  public get team() {
    return this._team;
  }
  public putTeam(value: AlertActionTeam[] | cdktf.IResolvable) {
    this._team.internalValue = value;
  }
  public resetTeam() {
    this._team.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team.internalValue;
  }

  // telegram - computed: false, optional: true, required: false
  private _telegram = new AlertActionTelegramOutputReference(this, "telegram");
  public get telegram() {
    return this._telegram;
  }
  public putTelegram(value: AlertActionTelegram) {
    this._telegram.internalValue = value;
  }
  public resetTelegram() {
    this._telegram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegramInput() {
    return this._telegram.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlertActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlertActionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topdesk - computed: false, optional: true, required: false
  private _topdesk = new AlertActionTopdeskOutputReference(this, "topdesk");
  public get topdesk() {
    return this._topdesk;
  }
  public putTopdesk(value: AlertActionTopdesk) {
    this._topdesk.internalValue = value;
  }
  public resetTopdesk() {
    this._topdesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topdeskInput() {
    return this._topdesk.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new AlertActionWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: AlertActionWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // zammad - computed: false, optional: true, required: false
  private _zammad = new AlertActionZammadOutputReference(this, "zammad");
  public get zammad() {
    return this._zammad;
  }
  public putZammad(value: AlertActionZammad) {
    this._zammad.internalValue = value;
  }
  public resetZammad() {
    this._zammad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zammadInput() {
    return this._zammad.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new AlertActionZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: AlertActionZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conditions: cdktf.stringToTerraform(this._conditions),
      delay_sec: cdktf.numberToTerraform(this._delaySec),
      escalation_ended_delay_sec: cdktf.numberToTerraform(this._escalationEndedDelaySec),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      not_resolved_delay_sec: cdktf.numberToTerraform(this._notResolvedDelaySec),
      trigger_mode: cdktf.stringToTerraform(this._triggerMode),
      trigger_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerTypes),
      alert_filter: alertActionAlertFilterToTerraform(this._alertFilter.internalValue),
      alert_source: cdktf.listMapper(alertActionAlertSourceToTerraform, true)(this._alertSource.internalValue),
      automation_rule: alertActionAutomationRuleToTerraform(this._automationRule.internalValue),
      autotask: alertActionAutotaskToTerraform(this._autotask.internalValue),
      connector: alertActionConnectorToTerraform(this._connector.internalValue),
      dingtalk: alertActionDingtalkToTerraform(this._dingtalk.internalValue),
      dingtalk_action: alertActionDingtalkActionToTerraform(this._dingtalkAction.internalValue),
      email: alertActionEmailToTerraform(this._email.internalValue),
      github: alertActionGithubToTerraform(this._github.internalValue),
      jira: alertActionJiraToTerraform(this._jira.internalValue),
      microsoft_teams_bot: alertActionMicrosoftTeamsBotToTerraform(this._microsoftTeamsBot.internalValue),
      microsoft_teams_webhook: alertActionMicrosoftTeamsWebhookToTerraform(this._microsoftTeamsWebhook.internalValue),
      servicenow: alertActionServicenowToTerraform(this._servicenow.internalValue),
      slack: alertActionSlackToTerraform(this._slack.internalValue),
      slack_webhook: alertActionSlackWebhookToTerraform(this._slackWebhook.internalValue),
      team: cdktf.listMapper(alertActionTeamToTerraform, true)(this._team.internalValue),
      telegram: alertActionTelegramToTerraform(this._telegram.internalValue),
      timeouts: alertActionTimeoutsToTerraform(this._timeouts.internalValue),
      topdesk: alertActionTopdeskToTerraform(this._topdesk.internalValue),
      webhook: alertActionWebhookToTerraform(this._webhook.internalValue),
      zammad: alertActionZammadToTerraform(this._zammad.internalValue),
      zendesk: alertActionZendeskToTerraform(this._zendesk.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conditions: {
        value: cdktf.stringToHclTerraform(this._conditions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_sec: {
        value: cdktf.numberToHclTerraform(this._delaySec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      escalation_ended_delay_sec: {
        value: cdktf.numberToHclTerraform(this._escalationEndedDelaySec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      not_resolved_delay_sec: {
        value: cdktf.numberToHclTerraform(this._notResolvedDelaySec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_mode: {
        value: cdktf.stringToHclTerraform(this._triggerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alert_filter: {
        value: alertActionAlertFilterToHclTerraform(this._alertFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionAlertFilterList",
      },
      alert_source: {
        value: cdktf.listMapperHcl(alertActionAlertSourceToHclTerraform, true)(this._alertSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionAlertSourceList",
      },
      automation_rule: {
        value: alertActionAutomationRuleToHclTerraform(this._automationRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionAutomationRuleList",
      },
      autotask: {
        value: alertActionAutotaskToHclTerraform(this._autotask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionAutotaskList",
      },
      connector: {
        value: alertActionConnectorToHclTerraform(this._connector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionConnectorList",
      },
      dingtalk: {
        value: alertActionDingtalkToHclTerraform(this._dingtalk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionDingtalkList",
      },
      dingtalk_action: {
        value: alertActionDingtalkActionToHclTerraform(this._dingtalkAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionDingtalkActionList",
      },
      email: {
        value: alertActionEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionEmailList",
      },
      github: {
        value: alertActionGithubToHclTerraform(this._github.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionGithubList",
      },
      jira: {
        value: alertActionJiraToHclTerraform(this._jira.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionJiraList",
      },
      microsoft_teams_bot: {
        value: alertActionMicrosoftTeamsBotToHclTerraform(this._microsoftTeamsBot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionMicrosoftTeamsBotList",
      },
      microsoft_teams_webhook: {
        value: alertActionMicrosoftTeamsWebhookToHclTerraform(this._microsoftTeamsWebhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionMicrosoftTeamsWebhookList",
      },
      servicenow: {
        value: alertActionServicenowToHclTerraform(this._servicenow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionServicenowList",
      },
      slack: {
        value: alertActionSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionSlackList",
      },
      slack_webhook: {
        value: alertActionSlackWebhookToHclTerraform(this._slackWebhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionSlackWebhookList",
      },
      team: {
        value: cdktf.listMapperHcl(alertActionTeamToHclTerraform, true)(this._team.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionTeamList",
      },
      telegram: {
        value: alertActionTelegramToHclTerraform(this._telegram.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionTelegramList",
      },
      timeouts: {
        value: alertActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertActionTimeouts",
      },
      topdesk: {
        value: alertActionTopdeskToHclTerraform(this._topdesk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionTopdeskList",
      },
      webhook: {
        value: alertActionWebhookToHclTerraform(this._webhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionWebhookList",
      },
      zammad: {
        value: alertActionZammadToHclTerraform(this._zammad.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionZammadList",
      },
      zendesk: {
        value: alertActionZendeskToHclTerraform(this._zendesk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertActionZendeskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
