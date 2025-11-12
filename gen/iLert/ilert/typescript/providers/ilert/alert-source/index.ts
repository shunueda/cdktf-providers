// https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#active AlertSource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#alert_creation AlertSource#alert_creation}
  */
  readonly alertCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#alert_grouping_window AlertSource#alert_grouping_window}
  */
  readonly alertGroupingWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#alert_priority_rule AlertSource#alert_priority_rule}
  */
  readonly alertPriorityRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#auto_resolution_timeout AlertSource#auto_resolution_timeout}
  */
  readonly autoResolutionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#email AlertSource#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#email_filtered AlertSource#email_filtered}
  */
  readonly emailFiltered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#email_resolve_filtered AlertSource#email_resolve_filtered}
  */
  readonly emailResolveFiltered?: boolean | cdktf.IResolvable;
  /**
  * The escalation policy specifies who will be notified when an alert is created by this alert source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#escalation_policy AlertSource#escalation_policy}
  */
  readonly escalationPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#event_filter AlertSource#event_filter}
  */
  readonly eventFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#event_type_filter_accept AlertSource#event_type_filter_accept}
  */
  readonly eventTypeFilterAccept?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#event_type_filter_create AlertSource#event_type_filter_create}
  */
  readonly eventTypeFilterCreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#event_type_filter_resolve AlertSource#event_type_filter_resolve}
  */
  readonly eventTypeFilterResolve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#filter_operator AlertSource#filter_operator}
  */
  readonly filterOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#id AlertSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#incident_creation AlertSource#incident_creation}
  */
  readonly incidentCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#incident_priority_rule AlertSource#incident_priority_rule}
  */
  readonly incidentPriorityRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#integration_type AlertSource#integration_type}
  */
  readonly integrationType: string;
  /**
  * The name of the resource, also acts as it's unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#name AlertSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#resolve_filter_operator AlertSource#resolve_filter_operator}
  */
  readonly resolveFilterOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#score_threshold AlertSource#score_threshold}
  */
  readonly scoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#teams AlertSource#teams}
  */
  readonly teams?: number[];
  /**
  * alert_key_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#alert_key_template AlertSource#alert_key_template}
  */
  readonly alertKeyTemplate?: AlertSourceAlertKeyTemplate;
  /**
  * autotask_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#autotask_metadata AlertSource#autotask_metadata}
  */
  readonly autotaskMetadata?: AlertSourceAutotaskMetadata;
  /**
  * details_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#details_template AlertSource#details_template}
  */
  readonly detailsTemplate?: AlertSourceDetailsTemplate;
  /**
  * email_predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#email_predicate AlertSource#email_predicate}
  */
  readonly emailPredicate?: AlertSourceEmailPredicate[] | cdktf.IResolvable;
  /**
  * email_resolve_predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#email_resolve_predicate AlertSource#email_resolve_predicate}
  */
  readonly emailResolvePredicate?: AlertSourceEmailResolvePredicate[] | cdktf.IResolvable;
  /**
  * heartbeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#heartbeat AlertSource#heartbeat}
  */
  readonly heartbeat?: AlertSourceHeartbeat;
  /**
  * link_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#link_template AlertSource#link_template}
  */
  readonly linkTemplate?: AlertSourceLinkTemplate[] | cdktf.IResolvable;
  /**
  * priority_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#priority_template AlertSource#priority_template}
  */
  readonly priorityTemplate?: AlertSourcePriorityTemplate;
  /**
  * resolve_key_extractor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#resolve_key_extractor AlertSource#resolve_key_extractor}
  */
  readonly resolveKeyExtractor?: AlertSourceResolveKeyExtractor;
  /**
  * routing_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#routing_template AlertSource#routing_template}
  */
  readonly routingTemplate?: AlertSourceRoutingTemplate;
  /**
  * summary_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#summary_template AlertSource#summary_template}
  */
  readonly summaryTemplate?: AlertSourceSummaryTemplate;
  /**
  * support_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#support_hours AlertSource#support_hours}
  */
  readonly supportHours?: AlertSourceSupportHours;
  /**
  * team block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#team AlertSource#team}
  */
  readonly team?: AlertSourceTeam[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#timeouts AlertSource#timeouts}
  */
  readonly timeouts?: AlertSourceTimeouts;
}
export interface AlertSourceAlertKeyTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#text_template AlertSource#text_template}
  */
  readonly textTemplate: string;
}

export function alertSourceAlertKeyTemplateToTerraform(struct?: AlertSourceAlertKeyTemplateOutputReference | AlertSourceAlertKeyTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_template: cdktf.stringToTerraform(struct!.textTemplate),
  }
}


export function alertSourceAlertKeyTemplateToHclTerraform(struct?: AlertSourceAlertKeyTemplateOutputReference | AlertSourceAlertKeyTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_template: {
      value: cdktf.stringToHclTerraform(struct!.textTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceAlertKeyTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceAlertKeyTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTemplate = this._textTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceAlertKeyTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textTemplate = value.textTemplate;
    }
  }

  // text_template - computed: false, optional: false, required: true
  private _textTemplate?: string; 
  public get textTemplate() {
    return this.getStringAttribute('text_template');
  }
  public set textTemplate(value: string) {
    this._textTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTemplateInput() {
    return this._textTemplate;
  }
}
export interface AlertSourceAutotaskMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#secret AlertSource#secret}
  */
  readonly secret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#username AlertSource#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#web_server AlertSource#web_server}
  */
  readonly webServer?: string;
}

export function alertSourceAutotaskMetadataToTerraform(struct?: AlertSourceAutotaskMetadataOutputReference | AlertSourceAutotaskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    username: cdktf.stringToTerraform(struct!.username),
    web_server: cdktf.stringToTerraform(struct!.webServer),
  }
}


export function alertSourceAutotaskMetadataToHclTerraform(struct?: AlertSourceAutotaskMetadataOutputReference | AlertSourceAutotaskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
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
    web_server: {
      value: cdktf.stringToHclTerraform(struct!.webServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceAutotaskMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceAutotaskMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._webServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServer = this._webServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceAutotaskMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._username = undefined;
      this._webServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._username = value.username;
      this._webServer = value.webServer;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // web_server - computed: false, optional: true, required: false
  private _webServer?: string; 
  public get webServer() {
    return this.getStringAttribute('web_server');
  }
  public set webServer(value: string) {
    this._webServer = value;
  }
  public resetWebServer() {
    this._webServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerInput() {
    return this._webServer;
  }
}
export interface AlertSourceDetailsTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#text_template AlertSource#text_template}
  */
  readonly textTemplate: string;
}

export function alertSourceDetailsTemplateToTerraform(struct?: AlertSourceDetailsTemplateOutputReference | AlertSourceDetailsTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_template: cdktf.stringToTerraform(struct!.textTemplate),
  }
}


export function alertSourceDetailsTemplateToHclTerraform(struct?: AlertSourceDetailsTemplateOutputReference | AlertSourceDetailsTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_template: {
      value: cdktf.stringToHclTerraform(struct!.textTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceDetailsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceDetailsTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTemplate = this._textTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceDetailsTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textTemplate = value.textTemplate;
    }
  }

  // text_template - computed: false, optional: false, required: true
  private _textTemplate?: string; 
  public get textTemplate() {
    return this.getStringAttribute('text_template');
  }
  public set textTemplate(value: string) {
    this._textTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTemplateInput() {
    return this._textTemplate;
  }
}
export interface AlertSourceEmailPredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#criteria AlertSource#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#field AlertSource#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value?: string;
}

export function alertSourceEmailPredicateToTerraform(struct?: AlertSourceEmailPredicate | cdktf.IResolvable): any {
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


export function alertSourceEmailPredicateToHclTerraform(struct?: AlertSourceEmailPredicate | cdktf.IResolvable): any {
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

export class AlertSourceEmailPredicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceEmailPredicate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertSourceEmailPredicate | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AlertSourceEmailPredicateList extends cdktf.ComplexList {
  public internalValue? : AlertSourceEmailPredicate[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceEmailPredicateOutputReference {
    return new AlertSourceEmailPredicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceEmailResolvePredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#criteria AlertSource#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#field AlertSource#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value?: string;
}

export function alertSourceEmailResolvePredicateToTerraform(struct?: AlertSourceEmailResolvePredicate | cdktf.IResolvable): any {
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


export function alertSourceEmailResolvePredicateToHclTerraform(struct?: AlertSourceEmailResolvePredicate | cdktf.IResolvable): any {
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

export class AlertSourceEmailResolvePredicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceEmailResolvePredicate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertSourceEmailResolvePredicate | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AlertSourceEmailResolvePredicateList extends cdktf.ComplexList {
  public internalValue? : AlertSourceEmailResolvePredicate[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceEmailResolvePredicateOutputReference {
    return new AlertSourceEmailResolvePredicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceHeartbeat {
  /**
  * The interval after which the heartbeat alert source will create an alert if it does not receive a ping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#interval_sec AlertSource#interval_sec}
  */
  readonly intervalSec?: number;
  /**
  * This text will be used as the alert summary, when alerts are created by this alert source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#summary AlertSource#summary}
  */
  readonly summary?: string;
}

export function alertSourceHeartbeatToTerraform(struct?: AlertSourceHeartbeatOutputReference | AlertSourceHeartbeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
    summary: cdktf.stringToTerraform(struct!.summary),
  }
}


export function alertSourceHeartbeatToHclTerraform(struct?: AlertSourceHeartbeatOutputReference | AlertSourceHeartbeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.intervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceHeartbeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceHeartbeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSec = this._intervalSec;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceHeartbeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalSec = undefined;
      this._summary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalSec = value.intervalSec;
      this._summary = value.summary;
    }
  }

  // interval_sec - computed: false, optional: true, required: false
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  public resetIntervalSec() {
    this._intervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }
}
export interface AlertSourceLinkTemplateHrefTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#text_template AlertSource#text_template}
  */
  readonly textTemplate: string;
}

export function alertSourceLinkTemplateHrefTemplateToTerraform(struct?: AlertSourceLinkTemplateHrefTemplateOutputReference | AlertSourceLinkTemplateHrefTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_template: cdktf.stringToTerraform(struct!.textTemplate),
  }
}


export function alertSourceLinkTemplateHrefTemplateToHclTerraform(struct?: AlertSourceLinkTemplateHrefTemplateOutputReference | AlertSourceLinkTemplateHrefTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_template: {
      value: cdktf.stringToHclTerraform(struct!.textTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceLinkTemplateHrefTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceLinkTemplateHrefTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTemplate = this._textTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceLinkTemplateHrefTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textTemplate = value.textTemplate;
    }
  }

  // text_template - computed: false, optional: false, required: true
  private _textTemplate?: string; 
  public get textTemplate() {
    return this.getStringAttribute('text_template');
  }
  public set textTemplate(value: string) {
    this._textTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTemplateInput() {
    return this._textTemplate;
  }
}
export interface AlertSourceLinkTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#text AlertSource#text}
  */
  readonly text: string;
  /**
  * href_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#href_template AlertSource#href_template}
  */
  readonly hrefTemplate: AlertSourceLinkTemplateHrefTemplate;
}

export function alertSourceLinkTemplateToTerraform(struct?: AlertSourceLinkTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    href_template: alertSourceLinkTemplateHrefTemplateToTerraform(struct!.hrefTemplate),
  }
}


export function alertSourceLinkTemplateToHclTerraform(struct?: AlertSourceLinkTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    href_template: {
      value: alertSourceLinkTemplateHrefTemplateToHclTerraform(struct!.hrefTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceLinkTemplateHrefTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceLinkTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceLinkTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._hrefTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hrefTemplate = this._hrefTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceLinkTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._hrefTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._hrefTemplate.internalValue = value.hrefTemplate;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // href_template - computed: false, optional: false, required: true
  private _hrefTemplate = new AlertSourceLinkTemplateHrefTemplateOutputReference(this, "href_template");
  public get hrefTemplate() {
    return this._hrefTemplate;
  }
  public putHrefTemplate(value: AlertSourceLinkTemplateHrefTemplate) {
    this._hrefTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefTemplateInput() {
    return this._hrefTemplate.internalValue;
  }
}

export class AlertSourceLinkTemplateList extends cdktf.ComplexList {
  public internalValue? : AlertSourceLinkTemplate[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceLinkTemplateOutputReference {
    return new AlertSourceLinkTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourcePriorityTemplateMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#priority AlertSource#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value: string;
}

export function alertSourcePriorityTemplateMappingToTerraform(struct?: AlertSourcePriorityTemplateMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertSourcePriorityTemplateMappingToHclTerraform(struct?: AlertSourcePriorityTemplateMapping | cdktf.IResolvable): any {
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

export class AlertSourcePriorityTemplateMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourcePriorityTemplateMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourcePriorityTemplateMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._value = value.value;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

export class AlertSourcePriorityTemplateMappingList extends cdktf.ComplexList {
  public internalValue? : AlertSourcePriorityTemplateMapping[] | cdktf.IResolvable

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
  public get(index: number): AlertSourcePriorityTemplateMappingOutputReference {
    return new AlertSourcePriorityTemplateMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourcePriorityTemplateValueTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#text_template AlertSource#text_template}
  */
  readonly textTemplate: string;
}

export function alertSourcePriorityTemplateValueTemplateToTerraform(struct?: AlertSourcePriorityTemplateValueTemplateOutputReference | AlertSourcePriorityTemplateValueTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_template: cdktf.stringToTerraform(struct!.textTemplate),
  }
}


export function alertSourcePriorityTemplateValueTemplateToHclTerraform(struct?: AlertSourcePriorityTemplateValueTemplateOutputReference | AlertSourcePriorityTemplateValueTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_template: {
      value: cdktf.stringToHclTerraform(struct!.textTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourcePriorityTemplateValueTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourcePriorityTemplateValueTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTemplate = this._textTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourcePriorityTemplateValueTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textTemplate = value.textTemplate;
    }
  }

  // text_template - computed: false, optional: false, required: true
  private _textTemplate?: string; 
  public get textTemplate() {
    return this.getStringAttribute('text_template');
  }
  public set textTemplate(value: string) {
    this._textTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTemplateInput() {
    return this._textTemplate;
  }
}
export interface AlertSourcePriorityTemplate {
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#mapping AlertSource#mapping}
  */
  readonly mapping: AlertSourcePriorityTemplateMapping[] | cdktf.IResolvable;
  /**
  * value_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#value_template AlertSource#value_template}
  */
  readonly valueTemplate: AlertSourcePriorityTemplateValueTemplate;
}

export function alertSourcePriorityTemplateToTerraform(struct?: AlertSourcePriorityTemplateOutputReference | AlertSourcePriorityTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping: cdktf.listMapper(alertSourcePriorityTemplateMappingToTerraform, true)(struct!.mapping),
    value_template: alertSourcePriorityTemplateValueTemplateToTerraform(struct!.valueTemplate),
  }
}


export function alertSourcePriorityTemplateToHclTerraform(struct?: AlertSourcePriorityTemplateOutputReference | AlertSourcePriorityTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping: {
      value: cdktf.listMapperHcl(alertSourcePriorityTemplateMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourcePriorityTemplateMappingList",
    },
    value_template: {
      value: alertSourcePriorityTemplateValueTemplateToHclTerraform(struct!.valueTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourcePriorityTemplateValueTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourcePriorityTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourcePriorityTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    if (this._valueTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueTemplate = this._valueTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourcePriorityTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapping.internalValue = undefined;
      this._valueTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapping.internalValue = value.mapping;
      this._valueTemplate.internalValue = value.valueTemplate;
    }
  }

  // mapping - computed: false, optional: false, required: true
  private _mapping = new AlertSourcePriorityTemplateMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: AlertSourcePriorityTemplateMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // value_template - computed: false, optional: false, required: true
  private _valueTemplate = new AlertSourcePriorityTemplateValueTemplateOutputReference(this, "value_template");
  public get valueTemplate() {
    return this._valueTemplate;
  }
  public putValueTemplate(value: AlertSourcePriorityTemplateValueTemplate) {
    this._valueTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTemplateInput() {
    return this._valueTemplate.internalValue;
  }
}
export interface AlertSourceResolveKeyExtractor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#criteria AlertSource#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#field AlertSource#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value?: string;
}

export function alertSourceResolveKeyExtractorToTerraform(struct?: AlertSourceResolveKeyExtractorOutputReference | AlertSourceResolveKeyExtractor): any {
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


export function alertSourceResolveKeyExtractorToHclTerraform(struct?: AlertSourceResolveKeyExtractorOutputReference | AlertSourceResolveKeyExtractor): any {
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

export class AlertSourceResolveKeyExtractorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceResolveKeyExtractor | undefined {
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

  public set internalValue(value: AlertSourceResolveKeyExtractor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AlertSourceRoutingTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#text_template AlertSource#text_template}
  */
  readonly textTemplate: string;
}

export function alertSourceRoutingTemplateToTerraform(struct?: AlertSourceRoutingTemplateOutputReference | AlertSourceRoutingTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_template: cdktf.stringToTerraform(struct!.textTemplate),
  }
}


export function alertSourceRoutingTemplateToHclTerraform(struct?: AlertSourceRoutingTemplateOutputReference | AlertSourceRoutingTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_template: {
      value: cdktf.stringToHclTerraform(struct!.textTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceRoutingTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceRoutingTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTemplate = this._textTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceRoutingTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textTemplate = value.textTemplate;
    }
  }

  // text_template - computed: false, optional: false, required: true
  private _textTemplate?: string; 
  public get textTemplate() {
    return this.getStringAttribute('text_template');
  }
  public set textTemplate(value: string) {
    this._textTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTemplateInput() {
    return this._textTemplate;
  }
}
export interface AlertSourceSummaryTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#text_template AlertSource#text_template}
  */
  readonly textTemplate: string;
}

export function alertSourceSummaryTemplateToTerraform(struct?: AlertSourceSummaryTemplateOutputReference | AlertSourceSummaryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_template: cdktf.stringToTerraform(struct!.textTemplate),
  }
}


export function alertSourceSummaryTemplateToHclTerraform(struct?: AlertSourceSummaryTemplateOutputReference | AlertSourceSummaryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_template: {
      value: cdktf.stringToHclTerraform(struct!.textTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSummaryTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSummaryTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTemplate = this._textTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSummaryTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textTemplate = value.textTemplate;
    }
  }

  // text_template - computed: false, optional: false, required: true
  private _textTemplate?: string; 
  public get textTemplate() {
    return this.getStringAttribute('text_template');
  }
  public set textTemplate(value: string) {
    this._textTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTemplateInput() {
    return this._textTemplate;
  }
}
export interface AlertSourceSupportHoursSupportDaysFriday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#end AlertSource#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#start AlertSource#start}
  */
  readonly start?: string;
}

export function alertSourceSupportHoursSupportDaysFridayToTerraform(struct?: AlertSourceSupportHoursSupportDaysFridayOutputReference | AlertSourceSupportHoursSupportDaysFriday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function alertSourceSupportHoursSupportDaysFridayToHclTerraform(struct?: AlertSourceSupportHoursSupportDaysFridayOutputReference | AlertSourceSupportHoursSupportDaysFriday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursSupportDaysFridayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHoursSupportDaysFriday | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHoursSupportDaysFriday | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AlertSourceSupportHoursSupportDaysMonday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#end AlertSource#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#start AlertSource#start}
  */
  readonly start?: string;
}

export function alertSourceSupportHoursSupportDaysMondayToTerraform(struct?: AlertSourceSupportHoursSupportDaysMondayOutputReference | AlertSourceSupportHoursSupportDaysMonday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function alertSourceSupportHoursSupportDaysMondayToHclTerraform(struct?: AlertSourceSupportHoursSupportDaysMondayOutputReference | AlertSourceSupportHoursSupportDaysMonday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursSupportDaysMondayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHoursSupportDaysMonday | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHoursSupportDaysMonday | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AlertSourceSupportHoursSupportDaysSaturday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#end AlertSource#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#start AlertSource#start}
  */
  readonly start?: string;
}

export function alertSourceSupportHoursSupportDaysSaturdayToTerraform(struct?: AlertSourceSupportHoursSupportDaysSaturdayOutputReference | AlertSourceSupportHoursSupportDaysSaturday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function alertSourceSupportHoursSupportDaysSaturdayToHclTerraform(struct?: AlertSourceSupportHoursSupportDaysSaturdayOutputReference | AlertSourceSupportHoursSupportDaysSaturday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursSupportDaysSaturdayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHoursSupportDaysSaturday | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHoursSupportDaysSaturday | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AlertSourceSupportHoursSupportDaysSunday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#end AlertSource#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#start AlertSource#start}
  */
  readonly start?: string;
}

export function alertSourceSupportHoursSupportDaysSundayToTerraform(struct?: AlertSourceSupportHoursSupportDaysSundayOutputReference | AlertSourceSupportHoursSupportDaysSunday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function alertSourceSupportHoursSupportDaysSundayToHclTerraform(struct?: AlertSourceSupportHoursSupportDaysSundayOutputReference | AlertSourceSupportHoursSupportDaysSunday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursSupportDaysSundayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHoursSupportDaysSunday | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHoursSupportDaysSunday | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AlertSourceSupportHoursSupportDaysThursday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#end AlertSource#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#start AlertSource#start}
  */
  readonly start?: string;
}

export function alertSourceSupportHoursSupportDaysThursdayToTerraform(struct?: AlertSourceSupportHoursSupportDaysThursdayOutputReference | AlertSourceSupportHoursSupportDaysThursday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function alertSourceSupportHoursSupportDaysThursdayToHclTerraform(struct?: AlertSourceSupportHoursSupportDaysThursdayOutputReference | AlertSourceSupportHoursSupportDaysThursday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursSupportDaysThursdayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHoursSupportDaysThursday | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHoursSupportDaysThursday | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AlertSourceSupportHoursSupportDaysTuesday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#end AlertSource#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#start AlertSource#start}
  */
  readonly start?: string;
}

export function alertSourceSupportHoursSupportDaysTuesdayToTerraform(struct?: AlertSourceSupportHoursSupportDaysTuesdayOutputReference | AlertSourceSupportHoursSupportDaysTuesday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function alertSourceSupportHoursSupportDaysTuesdayToHclTerraform(struct?: AlertSourceSupportHoursSupportDaysTuesdayOutputReference | AlertSourceSupportHoursSupportDaysTuesday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursSupportDaysTuesdayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHoursSupportDaysTuesday | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHoursSupportDaysTuesday | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AlertSourceSupportHoursSupportDaysWednesday {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#end AlertSource#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#start AlertSource#start}
  */
  readonly start?: string;
}

export function alertSourceSupportHoursSupportDaysWednesdayToTerraform(struct?: AlertSourceSupportHoursSupportDaysWednesdayOutputReference | AlertSourceSupportHoursSupportDaysWednesday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function alertSourceSupportHoursSupportDaysWednesdayToHclTerraform(struct?: AlertSourceSupportHoursSupportDaysWednesdayOutputReference | AlertSourceSupportHoursSupportDaysWednesday): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursSupportDaysWednesdayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHoursSupportDaysWednesday | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHoursSupportDaysWednesday | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AlertSourceSupportHoursSupportDays {
  /**
  * friday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#friday AlertSource#friday}
  */
  readonly friday?: AlertSourceSupportHoursSupportDaysFriday;
  /**
  * monday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#monday AlertSource#monday}
  */
  readonly monday?: AlertSourceSupportHoursSupportDaysMonday;
  /**
  * saturday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#saturday AlertSource#saturday}
  */
  readonly saturday?: AlertSourceSupportHoursSupportDaysSaturday;
  /**
  * sunday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#sunday AlertSource#sunday}
  */
  readonly sunday?: AlertSourceSupportHoursSupportDaysSunday;
  /**
  * thursday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#thursday AlertSource#thursday}
  */
  readonly thursday?: AlertSourceSupportHoursSupportDaysThursday;
  /**
  * tuesday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#tuesday AlertSource#tuesday}
  */
  readonly tuesday?: AlertSourceSupportHoursSupportDaysTuesday;
  /**
  * wednesday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#wednesday AlertSource#wednesday}
  */
  readonly wednesday?: AlertSourceSupportHoursSupportDaysWednesday;
}

export function alertSourceSupportHoursSupportDaysToTerraform(struct?: AlertSourceSupportHoursSupportDaysOutputReference | AlertSourceSupportHoursSupportDays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    friday: alertSourceSupportHoursSupportDaysFridayToTerraform(struct!.friday),
    monday: alertSourceSupportHoursSupportDaysMondayToTerraform(struct!.monday),
    saturday: alertSourceSupportHoursSupportDaysSaturdayToTerraform(struct!.saturday),
    sunday: alertSourceSupportHoursSupportDaysSundayToTerraform(struct!.sunday),
    thursday: alertSourceSupportHoursSupportDaysThursdayToTerraform(struct!.thursday),
    tuesday: alertSourceSupportHoursSupportDaysTuesdayToTerraform(struct!.tuesday),
    wednesday: alertSourceSupportHoursSupportDaysWednesdayToTerraform(struct!.wednesday),
  }
}


export function alertSourceSupportHoursSupportDaysToHclTerraform(struct?: AlertSourceSupportHoursSupportDaysOutputReference | AlertSourceSupportHoursSupportDays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    friday: {
      value: alertSourceSupportHoursSupportDaysFridayToHclTerraform(struct!.friday),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceSupportHoursSupportDaysFridayList",
    },
    monday: {
      value: alertSourceSupportHoursSupportDaysMondayToHclTerraform(struct!.monday),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceSupportHoursSupportDaysMondayList",
    },
    saturday: {
      value: alertSourceSupportHoursSupportDaysSaturdayToHclTerraform(struct!.saturday),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceSupportHoursSupportDaysSaturdayList",
    },
    sunday: {
      value: alertSourceSupportHoursSupportDaysSundayToHclTerraform(struct!.sunday),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceSupportHoursSupportDaysSundayList",
    },
    thursday: {
      value: alertSourceSupportHoursSupportDaysThursdayToHclTerraform(struct!.thursday),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceSupportHoursSupportDaysThursdayList",
    },
    tuesday: {
      value: alertSourceSupportHoursSupportDaysTuesdayToHclTerraform(struct!.tuesday),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceSupportHoursSupportDaysTuesdayList",
    },
    wednesday: {
      value: alertSourceSupportHoursSupportDaysWednesdayToHclTerraform(struct!.wednesday),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceSupportHoursSupportDaysWednesdayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursSupportDaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHoursSupportDays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._friday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.friday = this._friday?.internalValue;
    }
    if (this._monday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monday = this._monday?.internalValue;
    }
    if (this._saturday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saturday = this._saturday?.internalValue;
    }
    if (this._sunday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sunday = this._sunday?.internalValue;
    }
    if (this._thursday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thursday = this._thursday?.internalValue;
    }
    if (this._tuesday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuesday = this._tuesday?.internalValue;
    }
    if (this._wednesday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wednesday = this._wednesday?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHoursSupportDays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._friday.internalValue = undefined;
      this._monday.internalValue = undefined;
      this._saturday.internalValue = undefined;
      this._sunday.internalValue = undefined;
      this._thursday.internalValue = undefined;
      this._tuesday.internalValue = undefined;
      this._wednesday.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._friday.internalValue = value.friday;
      this._monday.internalValue = value.monday;
      this._saturday.internalValue = value.saturday;
      this._sunday.internalValue = value.sunday;
      this._thursday.internalValue = value.thursday;
      this._tuesday.internalValue = value.tuesday;
      this._wednesday.internalValue = value.wednesday;
    }
  }

  // friday - computed: false, optional: true, required: false
  private _friday = new AlertSourceSupportHoursSupportDaysFridayOutputReference(this, "friday");
  public get friday() {
    return this._friday;
  }
  public putFriday(value: AlertSourceSupportHoursSupportDaysFriday) {
    this._friday.internalValue = value;
  }
  public resetFriday() {
    this._friday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fridayInput() {
    return this._friday.internalValue;
  }

  // monday - computed: false, optional: true, required: false
  private _monday = new AlertSourceSupportHoursSupportDaysMondayOutputReference(this, "monday");
  public get monday() {
    return this._monday;
  }
  public putMonday(value: AlertSourceSupportHoursSupportDaysMonday) {
    this._monday.internalValue = value;
  }
  public resetMonday() {
    this._monday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mondayInput() {
    return this._monday.internalValue;
  }

  // saturday - computed: false, optional: true, required: false
  private _saturday = new AlertSourceSupportHoursSupportDaysSaturdayOutputReference(this, "saturday");
  public get saturday() {
    return this._saturday;
  }
  public putSaturday(value: AlertSourceSupportHoursSupportDaysSaturday) {
    this._saturday.internalValue = value;
  }
  public resetSaturday() {
    this._saturday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saturdayInput() {
    return this._saturday.internalValue;
  }

  // sunday - computed: false, optional: true, required: false
  private _sunday = new AlertSourceSupportHoursSupportDaysSundayOutputReference(this, "sunday");
  public get sunday() {
    return this._sunday;
  }
  public putSunday(value: AlertSourceSupportHoursSupportDaysSunday) {
    this._sunday.internalValue = value;
  }
  public resetSunday() {
    this._sunday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sundayInput() {
    return this._sunday.internalValue;
  }

  // thursday - computed: false, optional: true, required: false
  private _thursday = new AlertSourceSupportHoursSupportDaysThursdayOutputReference(this, "thursday");
  public get thursday() {
    return this._thursday;
  }
  public putThursday(value: AlertSourceSupportHoursSupportDaysThursday) {
    this._thursday.internalValue = value;
  }
  public resetThursday() {
    this._thursday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thursdayInput() {
    return this._thursday.internalValue;
  }

  // tuesday - computed: false, optional: true, required: false
  private _tuesday = new AlertSourceSupportHoursSupportDaysTuesdayOutputReference(this, "tuesday");
  public get tuesday() {
    return this._tuesday;
  }
  public putTuesday(value: AlertSourceSupportHoursSupportDaysTuesday) {
    this._tuesday.internalValue = value;
  }
  public resetTuesday() {
    this._tuesday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuesdayInput() {
    return this._tuesday.internalValue;
  }

  // wednesday - computed: false, optional: true, required: false
  private _wednesday = new AlertSourceSupportHoursSupportDaysWednesdayOutputReference(this, "wednesday");
  public get wednesday() {
    return this._wednesday;
  }
  public putWednesday(value: AlertSourceSupportHoursSupportDaysWednesday) {
    this._wednesday.internalValue = value;
  }
  public resetWednesday() {
    this._wednesday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wednesdayInput() {
    return this._wednesday.internalValue;
  }
}
export interface AlertSourceSupportHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#auto_raise_alerts AlertSource#auto_raise_alerts}
  */
  readonly autoRaiseAlerts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#auto_raise_incidents AlertSource#auto_raise_incidents}
  */
  readonly autoRaiseIncidents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#id AlertSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#timezone AlertSource#timezone}
  */
  readonly timezone?: string;
  /**
  * support_days block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#support_days AlertSource#support_days}
  */
  readonly supportDays?: AlertSourceSupportHoursSupportDays;
}

export function alertSourceSupportHoursToTerraform(struct?: AlertSourceSupportHoursOutputReference | AlertSourceSupportHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_raise_alerts: cdktf.booleanToTerraform(struct!.autoRaiseAlerts),
    auto_raise_incidents: cdktf.booleanToTerraform(struct!.autoRaiseIncidents),
    id: cdktf.numberToTerraform(struct!.id),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    support_days: alertSourceSupportHoursSupportDaysToTerraform(struct!.supportDays),
  }
}


export function alertSourceSupportHoursToHclTerraform(struct?: AlertSourceSupportHoursOutputReference | AlertSourceSupportHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_raise_alerts: {
      value: cdktf.booleanToHclTerraform(struct!.autoRaiseAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_raise_incidents: {
      value: cdktf.booleanToHclTerraform(struct!.autoRaiseIncidents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_days: {
      value: alertSourceSupportHoursSupportDaysToHclTerraform(struct!.supportDays),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceSupportHoursSupportDaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceSupportHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertSourceSupportHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRaiseAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRaiseAlerts = this._autoRaiseAlerts;
    }
    if (this._autoRaiseIncidents !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRaiseIncidents = this._autoRaiseIncidents;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._supportDays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportDays = this._supportDays?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceSupportHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRaiseAlerts = undefined;
      this._autoRaiseIncidents = undefined;
      this._id = undefined;
      this._timezone = undefined;
      this._supportDays.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRaiseAlerts = value.autoRaiseAlerts;
      this._autoRaiseIncidents = value.autoRaiseIncidents;
      this._id = value.id;
      this._timezone = value.timezone;
      this._supportDays.internalValue = value.supportDays;
    }
  }

  // auto_raise_alerts - computed: false, optional: true, required: false
  private _autoRaiseAlerts?: boolean | cdktf.IResolvable; 
  public get autoRaiseAlerts() {
    return this.getBooleanAttribute('auto_raise_alerts');
  }
  public set autoRaiseAlerts(value: boolean | cdktf.IResolvable) {
    this._autoRaiseAlerts = value;
  }
  public resetAutoRaiseAlerts() {
    this._autoRaiseAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRaiseAlertsInput() {
    return this._autoRaiseAlerts;
  }

  // auto_raise_incidents - computed: false, optional: true, required: false
  private _autoRaiseIncidents?: boolean | cdktf.IResolvable; 
  public get autoRaiseIncidents() {
    return this.getBooleanAttribute('auto_raise_incidents');
  }
  public set autoRaiseIncidents(value: boolean | cdktf.IResolvable) {
    this._autoRaiseIncidents = value;
  }
  public resetAutoRaiseIncidents() {
    this._autoRaiseIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRaiseIncidentsInput() {
    return this._autoRaiseIncidents;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // support_days - computed: false, optional: true, required: false
  private _supportDays = new AlertSourceSupportHoursSupportDaysOutputReference(this, "support_days");
  public get supportDays() {
    return this._supportDays;
  }
  public putSupportDays(value: AlertSourceSupportHoursSupportDays) {
    this._supportDays.internalValue = value;
  }
  public resetSupportDays() {
    this._supportDays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportDaysInput() {
    return this._supportDays.internalValue;
  }
}
export interface AlertSourceTeam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#id AlertSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#name AlertSource#name}
  */
  readonly name?: string;
}

export function alertSourceTeamToTerraform(struct?: AlertSourceTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function alertSourceTeamToHclTerraform(struct?: AlertSourceTeam | cdktf.IResolvable): any {
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

export class AlertSourceTeamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTeam | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertSourceTeam | cdktf.IResolvable | undefined) {
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

export class AlertSourceTeamList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTeam[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTeamOutputReference {
    return new AlertSourceTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#create AlertSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#delete AlertSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#read AlertSource#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#update AlertSource#update}
  */
  readonly update?: string;
}

export function alertSourceTimeoutsToTerraform(struct?: AlertSourceTimeouts | cdktf.IResolvable): any {
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


export function alertSourceTimeoutsToHclTerraform(struct?: AlertSourceTimeouts | cdktf.IResolvable): any {
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

export class AlertSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertSourceTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source ilert_alert_source}
*/
export class AlertSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ilert_alert_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertSource to import
  * @param importFromId The id of the existing AlertSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ilert_alert_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/alert_source ilert_alert_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertSourceConfig
  */
  public constructor(scope: Construct, id: string, config: AlertSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'ilert_alert_source',
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
    this._active = config.active;
    this._alertCreation = config.alertCreation;
    this._alertGroupingWindow = config.alertGroupingWindow;
    this._alertPriorityRule = config.alertPriorityRule;
    this._autoResolutionTimeout = config.autoResolutionTimeout;
    this._email = config.email;
    this._emailFiltered = config.emailFiltered;
    this._emailResolveFiltered = config.emailResolveFiltered;
    this._escalationPolicy = config.escalationPolicy;
    this._eventFilter = config.eventFilter;
    this._eventTypeFilterAccept = config.eventTypeFilterAccept;
    this._eventTypeFilterCreate = config.eventTypeFilterCreate;
    this._eventTypeFilterResolve = config.eventTypeFilterResolve;
    this._filterOperator = config.filterOperator;
    this._id = config.id;
    this._incidentCreation = config.incidentCreation;
    this._incidentPriorityRule = config.incidentPriorityRule;
    this._integrationType = config.integrationType;
    this._name = config.name;
    this._resolveFilterOperator = config.resolveFilterOperator;
    this._scoreThreshold = config.scoreThreshold;
    this._teams = config.teams;
    this._alertKeyTemplate.internalValue = config.alertKeyTemplate;
    this._autotaskMetadata.internalValue = config.autotaskMetadata;
    this._detailsTemplate.internalValue = config.detailsTemplate;
    this._emailPredicate.internalValue = config.emailPredicate;
    this._emailResolvePredicate.internalValue = config.emailResolvePredicate;
    this._heartbeat.internalValue = config.heartbeat;
    this._linkTemplate.internalValue = config.linkTemplate;
    this._priorityTemplate.internalValue = config.priorityTemplate;
    this._resolveKeyExtractor.internalValue = config.resolveKeyExtractor;
    this._routingTemplate.internalValue = config.routingTemplate;
    this._summaryTemplate.internalValue = config.summaryTemplate;
    this._supportHours.internalValue = config.supportHours;
    this._team.internalValue = config.team;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alert_creation - computed: false, optional: true, required: false
  private _alertCreation?: string; 
  public get alertCreation() {
    return this.getStringAttribute('alert_creation');
  }
  public set alertCreation(value: string) {
    this._alertCreation = value;
  }
  public resetAlertCreation() {
    this._alertCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertCreationInput() {
    return this._alertCreation;
  }

  // alert_grouping_window - computed: false, optional: true, required: false
  private _alertGroupingWindow?: string; 
  public get alertGroupingWindow() {
    return this.getStringAttribute('alert_grouping_window');
  }
  public set alertGroupingWindow(value: string) {
    this._alertGroupingWindow = value;
  }
  public resetAlertGroupingWindow() {
    this._alertGroupingWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupingWindowInput() {
    return this._alertGroupingWindow;
  }

  // alert_priority_rule - computed: false, optional: true, required: false
  private _alertPriorityRule?: string; 
  public get alertPriorityRule() {
    return this.getStringAttribute('alert_priority_rule');
  }
  public set alertPriorityRule(value: string) {
    this._alertPriorityRule = value;
  }
  public resetAlertPriorityRule() {
    this._alertPriorityRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPriorityRuleInput() {
    return this._alertPriorityRule;
  }

  // auto_resolution_timeout - computed: false, optional: true, required: false
  private _autoResolutionTimeout?: string; 
  public get autoResolutionTimeout() {
    return this.getStringAttribute('auto_resolution_timeout');
  }
  public set autoResolutionTimeout(value: string) {
    this._autoResolutionTimeout = value;
  }
  public resetAutoResolutionTimeout() {
    this._autoResolutionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolutionTimeoutInput() {
    return this._autoResolutionTimeout;
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

  // email_filtered - computed: false, optional: true, required: false
  private _emailFiltered?: boolean | cdktf.IResolvable; 
  public get emailFiltered() {
    return this.getBooleanAttribute('email_filtered');
  }
  public set emailFiltered(value: boolean | cdktf.IResolvable) {
    this._emailFiltered = value;
  }
  public resetEmailFiltered() {
    this._emailFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFilteredInput() {
    return this._emailFiltered;
  }

  // email_resolve_filtered - computed: false, optional: true, required: false
  private _emailResolveFiltered?: boolean | cdktf.IResolvable; 
  public get emailResolveFiltered() {
    return this.getBooleanAttribute('email_resolve_filtered');
  }
  public set emailResolveFiltered(value: boolean | cdktf.IResolvable) {
    this._emailResolveFiltered = value;
  }
  public resetEmailResolveFiltered() {
    this._emailResolveFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailResolveFilteredInput() {
    return this._emailResolveFiltered;
  }

  // escalation_policy - computed: false, optional: false, required: true
  private _escalationPolicy?: string; 
  public get escalationPolicy() {
    return this.getStringAttribute('escalation_policy');
  }
  public set escalationPolicy(value: string) {
    this._escalationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyInput() {
    return this._escalationPolicy;
  }

  // event_filter - computed: false, optional: true, required: false
  private _eventFilter?: string; 
  public get eventFilter() {
    return this.getStringAttribute('event_filter');
  }
  public set eventFilter(value: string) {
    this._eventFilter = value;
  }
  public resetEventFilter() {
    this._eventFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterInput() {
    return this._eventFilter;
  }

  // event_type_filter_accept - computed: false, optional: true, required: false
  private _eventTypeFilterAccept?: string; 
  public get eventTypeFilterAccept() {
    return this.getStringAttribute('event_type_filter_accept');
  }
  public set eventTypeFilterAccept(value: string) {
    this._eventTypeFilterAccept = value;
  }
  public resetEventTypeFilterAccept() {
    this._eventTypeFilterAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeFilterAcceptInput() {
    return this._eventTypeFilterAccept;
  }

  // event_type_filter_create - computed: false, optional: true, required: false
  private _eventTypeFilterCreate?: string; 
  public get eventTypeFilterCreate() {
    return this.getStringAttribute('event_type_filter_create');
  }
  public set eventTypeFilterCreate(value: string) {
    this._eventTypeFilterCreate = value;
  }
  public resetEventTypeFilterCreate() {
    this._eventTypeFilterCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeFilterCreateInput() {
    return this._eventTypeFilterCreate;
  }

  // event_type_filter_resolve - computed: false, optional: true, required: false
  private _eventTypeFilterResolve?: string; 
  public get eventTypeFilterResolve() {
    return this.getStringAttribute('event_type_filter_resolve');
  }
  public set eventTypeFilterResolve(value: string) {
    this._eventTypeFilterResolve = value;
  }
  public resetEventTypeFilterResolve() {
    this._eventTypeFilterResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeFilterResolveInput() {
    return this._eventTypeFilterResolve;
  }

  // filter_operator - computed: false, optional: true, required: false
  private _filterOperator?: string; 
  public get filterOperator() {
    return this.getStringAttribute('filter_operator');
  }
  public set filterOperator(value: string) {
    this._filterOperator = value;
  }
  public resetFilterOperator() {
    this._filterOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorInput() {
    return this._filterOperator;
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

  // incident_creation - computed: false, optional: true, required: false
  private _incidentCreation?: string; 
  public get incidentCreation() {
    return this.getStringAttribute('incident_creation');
  }
  public set incidentCreation(value: string) {
    this._incidentCreation = value;
  }
  public resetIncidentCreation() {
    this._incidentCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentCreationInput() {
    return this._incidentCreation;
  }

  // incident_priority_rule - computed: false, optional: true, required: false
  private _incidentPriorityRule?: string; 
  public get incidentPriorityRule() {
    return this.getStringAttribute('incident_priority_rule');
  }
  public set incidentPriorityRule(value: string) {
    this._incidentPriorityRule = value;
  }
  public resetIncidentPriorityRule() {
    this._incidentPriorityRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPriorityRuleInput() {
    return this._incidentPriorityRule;
  }

  // integration_key - computed: true, optional: false, required: false
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
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

  // integration_url - computed: true, optional: false, required: false
  public get integrationUrl() {
    return this.getStringAttribute('integration_url');
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

  // resolve_filter_operator - computed: false, optional: true, required: false
  private _resolveFilterOperator?: string; 
  public get resolveFilterOperator() {
    return this.getStringAttribute('resolve_filter_operator');
  }
  public set resolveFilterOperator(value: string) {
    this._resolveFilterOperator = value;
  }
  public resetResolveFilterOperator() {
    this._resolveFilterOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveFilterOperatorInput() {
    return this._resolveFilterOperator;
  }

  // score_threshold - computed: false, optional: true, required: false
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  public resetScoreThreshold() {
    this._scoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: number[]; 
  public get teams() {
    return this.getNumberListAttribute('teams');
  }
  public set teams(value: number[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // alert_key_template - computed: false, optional: true, required: false
  private _alertKeyTemplate = new AlertSourceAlertKeyTemplateOutputReference(this, "alert_key_template");
  public get alertKeyTemplate() {
    return this._alertKeyTemplate;
  }
  public putAlertKeyTemplate(value: AlertSourceAlertKeyTemplate) {
    this._alertKeyTemplate.internalValue = value;
  }
  public resetAlertKeyTemplate() {
    this._alertKeyTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertKeyTemplateInput() {
    return this._alertKeyTemplate.internalValue;
  }

  // autotask_metadata - computed: false, optional: true, required: false
  private _autotaskMetadata = new AlertSourceAutotaskMetadataOutputReference(this, "autotask_metadata");
  public get autotaskMetadata() {
    return this._autotaskMetadata;
  }
  public putAutotaskMetadata(value: AlertSourceAutotaskMetadata) {
    this._autotaskMetadata.internalValue = value;
  }
  public resetAutotaskMetadata() {
    this._autotaskMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotaskMetadataInput() {
    return this._autotaskMetadata.internalValue;
  }

  // details_template - computed: false, optional: true, required: false
  private _detailsTemplate = new AlertSourceDetailsTemplateOutputReference(this, "details_template");
  public get detailsTemplate() {
    return this._detailsTemplate;
  }
  public putDetailsTemplate(value: AlertSourceDetailsTemplate) {
    this._detailsTemplate.internalValue = value;
  }
  public resetDetailsTemplate() {
    this._detailsTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsTemplateInput() {
    return this._detailsTemplate.internalValue;
  }

  // email_predicate - computed: false, optional: true, required: false
  private _emailPredicate = new AlertSourceEmailPredicateList(this, "email_predicate", false);
  public get emailPredicate() {
    return this._emailPredicate;
  }
  public putEmailPredicate(value: AlertSourceEmailPredicate[] | cdktf.IResolvable) {
    this._emailPredicate.internalValue = value;
  }
  public resetEmailPredicate() {
    this._emailPredicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPredicateInput() {
    return this._emailPredicate.internalValue;
  }

  // email_resolve_predicate - computed: false, optional: true, required: false
  private _emailResolvePredicate = new AlertSourceEmailResolvePredicateList(this, "email_resolve_predicate", false);
  public get emailResolvePredicate() {
    return this._emailResolvePredicate;
  }
  public putEmailResolvePredicate(value: AlertSourceEmailResolvePredicate[] | cdktf.IResolvable) {
    this._emailResolvePredicate.internalValue = value;
  }
  public resetEmailResolvePredicate() {
    this._emailResolvePredicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailResolvePredicateInput() {
    return this._emailResolvePredicate.internalValue;
  }

  // heartbeat - computed: false, optional: true, required: false
  private _heartbeat = new AlertSourceHeartbeatOutputReference(this, "heartbeat");
  public get heartbeat() {
    return this._heartbeat;
  }
  public putHeartbeat(value: AlertSourceHeartbeat) {
    this._heartbeat.internalValue = value;
  }
  public resetHeartbeat() {
    this._heartbeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatInput() {
    return this._heartbeat.internalValue;
  }

  // link_template - computed: false, optional: true, required: false
  private _linkTemplate = new AlertSourceLinkTemplateList(this, "link_template", false);
  public get linkTemplate() {
    return this._linkTemplate;
  }
  public putLinkTemplate(value: AlertSourceLinkTemplate[] | cdktf.IResolvable) {
    this._linkTemplate.internalValue = value;
  }
  public resetLinkTemplate() {
    this._linkTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTemplateInput() {
    return this._linkTemplate.internalValue;
  }

  // priority_template - computed: false, optional: true, required: false
  private _priorityTemplate = new AlertSourcePriorityTemplateOutputReference(this, "priority_template");
  public get priorityTemplate() {
    return this._priorityTemplate;
  }
  public putPriorityTemplate(value: AlertSourcePriorityTemplate) {
    this._priorityTemplate.internalValue = value;
  }
  public resetPriorityTemplate() {
    this._priorityTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityTemplateInput() {
    return this._priorityTemplate.internalValue;
  }

  // resolve_key_extractor - computed: false, optional: true, required: false
  private _resolveKeyExtractor = new AlertSourceResolveKeyExtractorOutputReference(this, "resolve_key_extractor");
  public get resolveKeyExtractor() {
    return this._resolveKeyExtractor;
  }
  public putResolveKeyExtractor(value: AlertSourceResolveKeyExtractor) {
    this._resolveKeyExtractor.internalValue = value;
  }
  public resetResolveKeyExtractor() {
    this._resolveKeyExtractor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveKeyExtractorInput() {
    return this._resolveKeyExtractor.internalValue;
  }

  // routing_template - computed: false, optional: true, required: false
  private _routingTemplate = new AlertSourceRoutingTemplateOutputReference(this, "routing_template");
  public get routingTemplate() {
    return this._routingTemplate;
  }
  public putRoutingTemplate(value: AlertSourceRoutingTemplate) {
    this._routingTemplate.internalValue = value;
  }
  public resetRoutingTemplate() {
    this._routingTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTemplateInput() {
    return this._routingTemplate.internalValue;
  }

  // summary_template - computed: false, optional: true, required: false
  private _summaryTemplate = new AlertSourceSummaryTemplateOutputReference(this, "summary_template");
  public get summaryTemplate() {
    return this._summaryTemplate;
  }
  public putSummaryTemplate(value: AlertSourceSummaryTemplate) {
    this._summaryTemplate.internalValue = value;
  }
  public resetSummaryTemplate() {
    this._summaryTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryTemplateInput() {
    return this._summaryTemplate.internalValue;
  }

  // support_hours - computed: false, optional: true, required: false
  private _supportHours = new AlertSourceSupportHoursOutputReference(this, "support_hours");
  public get supportHours() {
    return this._supportHours;
  }
  public putSupportHours(value: AlertSourceSupportHours) {
    this._supportHours.internalValue = value;
  }
  public resetSupportHours() {
    this._supportHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHoursInput() {
    return this._supportHours.internalValue;
  }

  // team - computed: false, optional: true, required: false
  private _team = new AlertSourceTeamList(this, "team", false);
  public get team() {
    return this._team;
  }
  public putTeam(value: AlertSourceTeam[] | cdktf.IResolvable) {
    this._team.internalValue = value;
  }
  public resetTeam() {
    this._team.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlertSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlertSourceTimeouts) {
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
      active: cdktf.booleanToTerraform(this._active),
      alert_creation: cdktf.stringToTerraform(this._alertCreation),
      alert_grouping_window: cdktf.stringToTerraform(this._alertGroupingWindow),
      alert_priority_rule: cdktf.stringToTerraform(this._alertPriorityRule),
      auto_resolution_timeout: cdktf.stringToTerraform(this._autoResolutionTimeout),
      email: cdktf.stringToTerraform(this._email),
      email_filtered: cdktf.booleanToTerraform(this._emailFiltered),
      email_resolve_filtered: cdktf.booleanToTerraform(this._emailResolveFiltered),
      escalation_policy: cdktf.stringToTerraform(this._escalationPolicy),
      event_filter: cdktf.stringToTerraform(this._eventFilter),
      event_type_filter_accept: cdktf.stringToTerraform(this._eventTypeFilterAccept),
      event_type_filter_create: cdktf.stringToTerraform(this._eventTypeFilterCreate),
      event_type_filter_resolve: cdktf.stringToTerraform(this._eventTypeFilterResolve),
      filter_operator: cdktf.stringToTerraform(this._filterOperator),
      id: cdktf.stringToTerraform(this._id),
      incident_creation: cdktf.stringToTerraform(this._incidentCreation),
      incident_priority_rule: cdktf.stringToTerraform(this._incidentPriorityRule),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      name: cdktf.stringToTerraform(this._name),
      resolve_filter_operator: cdktf.stringToTerraform(this._resolveFilterOperator),
      score_threshold: cdktf.numberToTerraform(this._scoreThreshold),
      teams: cdktf.listMapper(cdktf.numberToTerraform, false)(this._teams),
      alert_key_template: alertSourceAlertKeyTemplateToTerraform(this._alertKeyTemplate.internalValue),
      autotask_metadata: alertSourceAutotaskMetadataToTerraform(this._autotaskMetadata.internalValue),
      details_template: alertSourceDetailsTemplateToTerraform(this._detailsTemplate.internalValue),
      email_predicate: cdktf.listMapper(alertSourceEmailPredicateToTerraform, true)(this._emailPredicate.internalValue),
      email_resolve_predicate: cdktf.listMapper(alertSourceEmailResolvePredicateToTerraform, true)(this._emailResolvePredicate.internalValue),
      heartbeat: alertSourceHeartbeatToTerraform(this._heartbeat.internalValue),
      link_template: cdktf.listMapper(alertSourceLinkTemplateToTerraform, true)(this._linkTemplate.internalValue),
      priority_template: alertSourcePriorityTemplateToTerraform(this._priorityTemplate.internalValue),
      resolve_key_extractor: alertSourceResolveKeyExtractorToTerraform(this._resolveKeyExtractor.internalValue),
      routing_template: alertSourceRoutingTemplateToTerraform(this._routingTemplate.internalValue),
      summary_template: alertSourceSummaryTemplateToTerraform(this._summaryTemplate.internalValue),
      support_hours: alertSourceSupportHoursToTerraform(this._supportHours.internalValue),
      team: cdktf.listMapper(alertSourceTeamToTerraform, true)(this._team.internalValue),
      timeouts: alertSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_creation: {
        value: cdktf.stringToHclTerraform(this._alertCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_grouping_window: {
        value: cdktf.stringToHclTerraform(this._alertGroupingWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_priority_rule: {
        value: cdktf.stringToHclTerraform(this._alertPriorityRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_resolution_timeout: {
        value: cdktf.stringToHclTerraform(this._autoResolutionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_filtered: {
        value: cdktf.booleanToHclTerraform(this._emailFiltered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_resolve_filtered: {
        value: cdktf.booleanToHclTerraform(this._emailResolveFiltered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      escalation_policy: {
        value: cdktf.stringToHclTerraform(this._escalationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_filter: {
        value: cdktf.stringToHclTerraform(this._eventFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type_filter_accept: {
        value: cdktf.stringToHclTerraform(this._eventTypeFilterAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type_filter_create: {
        value: cdktf.stringToHclTerraform(this._eventTypeFilterCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type_filter_resolve: {
        value: cdktf.stringToHclTerraform(this._eventTypeFilterResolve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_operator: {
        value: cdktf.stringToHclTerraform(this._filterOperator),
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
      incident_creation: {
        value: cdktf.stringToHclTerraform(this._incidentCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_priority_rule: {
        value: cdktf.stringToHclTerraform(this._incidentPriorityRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
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
      resolve_filter_operator: {
        value: cdktf.stringToHclTerraform(this._resolveFilterOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      score_threshold: {
        value: cdktf.numberToHclTerraform(this._scoreThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      alert_key_template: {
        value: alertSourceAlertKeyTemplateToHclTerraform(this._alertKeyTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceAlertKeyTemplateList",
      },
      autotask_metadata: {
        value: alertSourceAutotaskMetadataToHclTerraform(this._autotaskMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceAutotaskMetadataList",
      },
      details_template: {
        value: alertSourceDetailsTemplateToHclTerraform(this._detailsTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceDetailsTemplateList",
      },
      email_predicate: {
        value: cdktf.listMapperHcl(alertSourceEmailPredicateToHclTerraform, true)(this._emailPredicate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceEmailPredicateList",
      },
      email_resolve_predicate: {
        value: cdktf.listMapperHcl(alertSourceEmailResolvePredicateToHclTerraform, true)(this._emailResolvePredicate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceEmailResolvePredicateList",
      },
      heartbeat: {
        value: alertSourceHeartbeatToHclTerraform(this._heartbeat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceHeartbeatList",
      },
      link_template: {
        value: cdktf.listMapperHcl(alertSourceLinkTemplateToHclTerraform, true)(this._linkTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceLinkTemplateList",
      },
      priority_template: {
        value: alertSourcePriorityTemplateToHclTerraform(this._priorityTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourcePriorityTemplateList",
      },
      resolve_key_extractor: {
        value: alertSourceResolveKeyExtractorToHclTerraform(this._resolveKeyExtractor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceResolveKeyExtractorList",
      },
      routing_template: {
        value: alertSourceRoutingTemplateToHclTerraform(this._routingTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceRoutingTemplateList",
      },
      summary_template: {
        value: alertSourceSummaryTemplateToHclTerraform(this._summaryTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceSummaryTemplateList",
      },
      support_hours: {
        value: alertSourceSupportHoursToHclTerraform(this._supportHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceSupportHoursList",
      },
      team: {
        value: cdktf.listMapperHcl(alertSourceTeamToHclTerraform, true)(this._team.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertSourceTeamList",
      },
      timeouts: {
        value: alertSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
