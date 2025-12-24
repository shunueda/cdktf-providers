// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertsSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID for the default alert urgency assigned to this alert source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#alert_urgency_id AlertsSource#alert_urgency_id}
  */
  readonly alertUrgencyId?: string;
  /**
  * Toggle alert deduplication using deduplication key. If enabled, deduplication_key_kind and deduplication_key_path are required.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#deduplicate_alerts_by_key AlertsSource#deduplicate_alerts_by_key}
  */
  readonly deduplicateAlertsByKey?: boolean | cdktf.IResolvable;
  /**
  * Kind of deduplication key.. Value must be one of `payload`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#deduplication_key_kind AlertsSource#deduplication_key_kind}
  */
  readonly deduplicationKeyKind?: string;
  /**
  * Path to deduplication key. This is a JSON Path to extract the deduplication key from the request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#deduplication_key_path AlertsSource#deduplication_key_path}
  */
  readonly deduplicationKeyPath?: string;
  /**
  * Regular expression to extract key from value found at key path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#deduplication_key_regexp AlertsSource#deduplication_key_regexp}
  */
  readonly deduplicationKeyRegexp?: string;
  /**
  * The email generated for email alert sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#email AlertsSource#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#id AlertsSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alert source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#name AlertsSource#name}
  */
  readonly name: string;
  /**
  * List of team IDs that will own the alert source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#owner_group_ids AlertsSource#owner_group_ids}
  */
  readonly ownerGroupIds?: string[];
  /**
  * The secret used to authenticate non-email alert sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#secret AlertsSource#secret}
  */
  readonly secret?: string;
  /**
  * The alert source type. Value must be one of `email`, `app_dynamics`, `catchpoint`, `datadog`, `alertmanager`, `google_cloud`, `grafana`, `sentry`, `generic_webhook`, `cloud_watch`, `checkly`, `azure`, `new_relic`, `splunk`, `chronosphere`, `app_optics`, `bug_snag`, `honeycomb`, `monte_carlo`, `nagios`, `prtg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#source_type AlertsSource#source_type}
  */
  readonly sourceType?: string;
  /**
  * The status of the alert source. Value must be one of `connected`, `setup_complete`, `setup_incomplete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#status AlertsSource#status}
  */
  readonly status?: string;
  /**
  * The webhook URL generated for non-email alert sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#webhook_endpoint AlertsSource#webhook_endpoint}
  */
  readonly webhookEndpoint?: string;
  /**
  * alert_source_fields_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#alert_source_fields_attributes AlertsSource#alert_source_fields_attributes}
  */
  readonly alertSourceFieldsAttributes?: AlertsSourceAlertSourceFieldsAttributes[] | cdktf.IResolvable;
  /**
  * alert_source_urgency_rules_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#alert_source_urgency_rules_attributes AlertsSource#alert_source_urgency_rules_attributes}
  */
  readonly alertSourceUrgencyRulesAttributes?: AlertsSourceAlertSourceUrgencyRulesAttributes[] | cdktf.IResolvable;
  /**
  * alert_template_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#alert_template_attributes AlertsSource#alert_template_attributes}
  */
  readonly alertTemplateAttributes?: AlertsSourceAlertTemplateAttributes;
  /**
  * resolution_rule_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#resolution_rule_attributes AlertsSource#resolution_rule_attributes}
  */
  readonly resolutionRuleAttributes?: AlertsSourceResolutionRuleAttributes;
  /**
  * sourceable_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#sourceable_attributes AlertsSource#sourceable_attributes}
  */
  readonly sourceableAttributes?: AlertsSourceSourceableAttributes;
}
export interface AlertsSourceAlertSourceFieldsAttributes {
  /**
  * The ID of the alert field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#alert_field_id AlertsSource#alert_field_id}
  */
  readonly alertFieldId?: string;
  /**
  * Liquid expression to extract a specific value from the alert's payload for evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#template_body AlertsSource#template_body}
  */
  readonly templateBody?: string;
}

export function alertsSourceAlertSourceFieldsAttributesToTerraform(struct?: AlertsSourceAlertSourceFieldsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_field_id: cdktf.stringToTerraform(struct!.alertFieldId),
    template_body: cdktf.stringToTerraform(struct!.templateBody),
  }
}


export function alertsSourceAlertSourceFieldsAttributesToHclTerraform(struct?: AlertsSourceAlertSourceFieldsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_field_id: {
      value: cdktf.stringToHclTerraform(struct!.alertFieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_body: {
      value: cdktf.stringToHclTerraform(struct!.templateBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSourceAlertSourceFieldsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertsSourceAlertSourceFieldsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertFieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertFieldId = this._alertFieldId;
    }
    if (this._templateBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateBody = this._templateBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSourceAlertSourceFieldsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertFieldId = undefined;
      this._templateBody = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertFieldId = value.alertFieldId;
      this._templateBody = value.templateBody;
    }
  }

  // alert_field_id - computed: true, optional: true, required: false
  private _alertFieldId?: string; 
  public get alertFieldId() {
    return this.getStringAttribute('alert_field_id');
  }
  public set alertFieldId(value: string) {
    this._alertFieldId = value;
  }
  public resetAlertFieldId() {
    this._alertFieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertFieldIdInput() {
    return this._alertFieldId;
  }

  // template_body - computed: true, optional: true, required: false
  private _templateBody?: string; 
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody;
  }
}

export class AlertsSourceAlertSourceFieldsAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertsSourceAlertSourceFieldsAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlertsSourceAlertSourceFieldsAttributesOutputReference {
    return new AlertsSourceAlertSourceFieldsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertsSourceAlertSourceUrgencyRulesAttributes {
  /**
  * The ID of the alert urgency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#alert_urgency_id AlertsSource#alert_urgency_id}
  */
  readonly alertUrgencyId?: string;
  /**
  * The ID of the conditionable. If conditionable_type is AlertField, this is the ID of the alert field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#conditionable_id AlertsSource#conditionable_id}
  */
  readonly conditionableId?: string;
  /**
  * The type of the conditionable. Value must be one of `AlertField`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#conditionable_type AlertsSource#conditionable_type}
  */
  readonly conditionableType?: string;
  /**
  * JSON path expression to extract a specific value from the alert's payload for evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#json_path AlertsSource#json_path}
  */
  readonly jsonPath?: string;
  /**
  * The kind of the conditionable. Value must be one of `payload`, `alert_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#kind AlertsSource#kind}
  */
  readonly kind?: string;
  /**
  * Comparison operator used to evaluate the extracted value against the specified condition. Value must be one of `is`, `is_not`, `contains`, `does_not_contain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#operator AlertsSource#operator}
  */
  readonly operator?: string;
  /**
  * Value that the extracted payload data is compared to using the specified operator to determine a match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#value AlertsSource#value}
  */
  readonly value?: string;
}

export function alertsSourceAlertSourceUrgencyRulesAttributesToTerraform(struct?: AlertsSourceAlertSourceUrgencyRulesAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_urgency_id: cdktf.stringToTerraform(struct!.alertUrgencyId),
    conditionable_id: cdktf.stringToTerraform(struct!.conditionableId),
    conditionable_type: cdktf.stringToTerraform(struct!.conditionableType),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertsSourceAlertSourceUrgencyRulesAttributesToHclTerraform(struct?: AlertsSourceAlertSourceUrgencyRulesAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_urgency_id: {
      value: cdktf.stringToHclTerraform(struct!.alertUrgencyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditionable_id: {
      value: cdktf.stringToHclTerraform(struct!.conditionableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditionable_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class AlertsSourceAlertSourceUrgencyRulesAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertsSourceAlertSourceUrgencyRulesAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertUrgencyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertUrgencyId = this._alertUrgencyId;
    }
    if (this._conditionableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionableId = this._conditionableId;
    }
    if (this._conditionableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionableType = this._conditionableType;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSourceAlertSourceUrgencyRulesAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertUrgencyId = undefined;
      this._conditionableId = undefined;
      this._conditionableType = undefined;
      this._jsonPath = undefined;
      this._kind = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertUrgencyId = value.alertUrgencyId;
      this._conditionableId = value.conditionableId;
      this._conditionableType = value.conditionableType;
      this._jsonPath = value.jsonPath;
      this._kind = value.kind;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // alert_urgency_id - computed: true, optional: true, required: false
  private _alertUrgencyId?: string; 
  public get alertUrgencyId() {
    return this.getStringAttribute('alert_urgency_id');
  }
  public set alertUrgencyId(value: string) {
    this._alertUrgencyId = value;
  }
  public resetAlertUrgencyId() {
    this._alertUrgencyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyIdInput() {
    return this._alertUrgencyId;
  }

  // conditionable_id - computed: true, optional: true, required: false
  private _conditionableId?: string; 
  public get conditionableId() {
    return this.getStringAttribute('conditionable_id');
  }
  public set conditionableId(value: string) {
    this._conditionableId = value;
  }
  public resetConditionableId() {
    this._conditionableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionableIdInput() {
    return this._conditionableId;
  }

  // conditionable_type - computed: false, optional: true, required: false
  private _conditionableType?: string; 
  public get conditionableType() {
    return this.getStringAttribute('conditionable_type');
  }
  public set conditionableType(value: string) {
    this._conditionableType = value;
  }
  public resetConditionableType() {
    this._conditionableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionableTypeInput() {
    return this._conditionableType;
  }

  // json_path - computed: true, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
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

export class AlertsSourceAlertSourceUrgencyRulesAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertsSourceAlertSourceUrgencyRulesAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlertsSourceAlertSourceUrgencyRulesAttributesOutputReference {
    return new AlertsSourceAlertSourceUrgencyRulesAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertsSourceAlertTemplateAttributes {
  /**
  * The alert description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#description AlertsSource#description}
  */
  readonly description?: string;
  /**
  * The alert URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#external_url AlertsSource#external_url}
  */
  readonly externalUrl?: string;
  /**
  * The alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#title AlertsSource#title}
  */
  readonly title?: string;
}

export function alertsSourceAlertTemplateAttributesToTerraform(struct?: AlertsSourceAlertTemplateAttributesOutputReference | AlertsSourceAlertTemplateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_url: cdktf.stringToTerraform(struct!.externalUrl),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function alertsSourceAlertTemplateAttributesToHclTerraform(struct?: AlertsSourceAlertTemplateAttributesOutputReference | AlertsSourceAlertTemplateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_url: {
      value: cdktf.stringToHclTerraform(struct!.externalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSourceAlertTemplateAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertsSourceAlertTemplateAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSourceAlertTemplateAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._externalUrl = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._externalUrl = value.externalUrl;
      this._title = value.title;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_url - computed: true, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface AlertsSourceResolutionRuleAttributesConditionsAttributes {
  /**
  * The ID of the conditionable. If conditionable_type is AlertField, this is the ID of the alert field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#conditionable_id AlertsSource#conditionable_id}
  */
  readonly conditionableId?: string;
  /**
  * The type of the conditionable. Value must be one of `AlertField`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#conditionable_type AlertsSource#conditionable_type}
  */
  readonly conditionableType?: string;
  /**
  * JSON path expression to extract a specific value from the alert's payload for evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#field AlertsSource#field}
  */
  readonly field?: string;
  /**
  * The kind of the conditionable. Value must be one of `payload`, `alert_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#kind AlertsSource#kind}
  */
  readonly kind?: string;
  /**
  * Comparison operator used to evaluate the extracted value against the specified condition. Value must be one of `is`, `is_not`, `contains`, `does_not_contain`, `starts_with`, `ends_with`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#operator AlertsSource#operator}
  */
  readonly operator?: string;
  /**
  * Value that the extracted payload data is compared to using the specified operator to determine a match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#value AlertsSource#value}
  */
  readonly value?: string;
}

export function alertsSourceResolutionRuleAttributesConditionsAttributesToTerraform(struct?: AlertsSourceResolutionRuleAttributesConditionsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditionable_id: cdktf.stringToTerraform(struct!.conditionableId),
    conditionable_type: cdktf.stringToTerraform(struct!.conditionableType),
    field: cdktf.stringToTerraform(struct!.field),
    kind: cdktf.stringToTerraform(struct!.kind),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertsSourceResolutionRuleAttributesConditionsAttributesToHclTerraform(struct?: AlertsSourceResolutionRuleAttributesConditionsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditionable_id: {
      value: cdktf.stringToHclTerraform(struct!.conditionableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditionable_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionableType),
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class AlertsSourceResolutionRuleAttributesConditionsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertsSourceResolutionRuleAttributesConditionsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionableId = this._conditionableId;
    }
    if (this._conditionableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionableType = this._conditionableType;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSourceResolutionRuleAttributesConditionsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionableId = undefined;
      this._conditionableType = undefined;
      this._field = undefined;
      this._kind = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionableId = value.conditionableId;
      this._conditionableType = value.conditionableType;
      this._field = value.field;
      this._kind = value.kind;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // conditionable_id - computed: true, optional: true, required: false
  private _conditionableId?: string; 
  public get conditionableId() {
    return this.getStringAttribute('conditionable_id');
  }
  public set conditionableId(value: string) {
    this._conditionableId = value;
  }
  public resetConditionableId() {
    this._conditionableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionableIdInput() {
    return this._conditionableId;
  }

  // conditionable_type - computed: false, optional: true, required: false
  private _conditionableType?: string; 
  public get conditionableType() {
    return this.getStringAttribute('conditionable_type');
  }
  public set conditionableType(value: string) {
    this._conditionableType = value;
  }
  public resetConditionableType() {
    this._conditionableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionableTypeInput() {
    return this._conditionableType;
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
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

export class AlertsSourceResolutionRuleAttributesConditionsAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertsSourceResolutionRuleAttributesConditionsAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlertsSourceResolutionRuleAttributesConditionsAttributesOutputReference {
    return new AlertsSourceResolutionRuleAttributesConditionsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertsSourceResolutionRuleAttributes {
  /**
  * The type of condition to evaluate to apply auto resolution rule. Value must be one of `all`, `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#condition_type AlertsSource#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#enabled AlertsSource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * JSON path expression to extract unique alert identifier used to match triggered alerts with resolving alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#identifier_json_path AlertsSource#identifier_json_path}
  */
  readonly identifierJsonPath?: string;
  /**
  * The ID of the identifier matchable. If identifier_matchable_type is AlertField, this is the ID of the alert field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#identifier_matchable_id AlertsSource#identifier_matchable_id}
  */
  readonly identifierMatchableId?: string;
  /**
  * The type of the identifier matchable. Value must be one of `AlertField`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#identifier_matchable_type AlertsSource#identifier_matchable_type}
  */
  readonly identifierMatchableType?: string;
  /**
  * The kind of the identifier reference. Value must be one of `payload`, `alert_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#identifier_reference_kind AlertsSource#identifier_reference_kind}
  */
  readonly identifierReferenceKind?: string;
  /**
  * Regex group to further specify the part of the string used as a unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#identifier_value_regex AlertsSource#identifier_value_regex}
  */
  readonly identifierValueRegex?: string;
  /**
  * conditions_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#conditions_attributes AlertsSource#conditions_attributes}
  */
  readonly conditionsAttributes?: AlertsSourceResolutionRuleAttributesConditionsAttributes[] | cdktf.IResolvable;
}

export function alertsSourceResolutionRuleAttributesToTerraform(struct?: AlertsSourceResolutionRuleAttributesOutputReference | AlertsSourceResolutionRuleAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    identifier_json_path: cdktf.stringToTerraform(struct!.identifierJsonPath),
    identifier_matchable_id: cdktf.stringToTerraform(struct!.identifierMatchableId),
    identifier_matchable_type: cdktf.stringToTerraform(struct!.identifierMatchableType),
    identifier_reference_kind: cdktf.stringToTerraform(struct!.identifierReferenceKind),
    identifier_value_regex: cdktf.stringToTerraform(struct!.identifierValueRegex),
    conditions_attributes: cdktf.listMapper(alertsSourceResolutionRuleAttributesConditionsAttributesToTerraform, true)(struct!.conditionsAttributes),
  }
}


export function alertsSourceResolutionRuleAttributesToHclTerraform(struct?: AlertsSourceResolutionRuleAttributesOutputReference | AlertsSourceResolutionRuleAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identifier_json_path: {
      value: cdktf.stringToHclTerraform(struct!.identifierJsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier_matchable_id: {
      value: cdktf.stringToHclTerraform(struct!.identifierMatchableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier_matchable_type: {
      value: cdktf.stringToHclTerraform(struct!.identifierMatchableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier_reference_kind: {
      value: cdktf.stringToHclTerraform(struct!.identifierReferenceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier_value_regex: {
      value: cdktf.stringToHclTerraform(struct!.identifierValueRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions_attributes: {
      value: cdktf.listMapperHcl(alertsSourceResolutionRuleAttributesConditionsAttributesToHclTerraform, true)(struct!.conditionsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "AlertsSourceResolutionRuleAttributesConditionsAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSourceResolutionRuleAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertsSourceResolutionRuleAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identifierJsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierJsonPath = this._identifierJsonPath;
    }
    if (this._identifierMatchableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierMatchableId = this._identifierMatchableId;
    }
    if (this._identifierMatchableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierMatchableType = this._identifierMatchableType;
    }
    if (this._identifierReferenceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierReferenceKind = this._identifierReferenceKind;
    }
    if (this._identifierValueRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierValueRegex = this._identifierValueRegex;
    }
    if (this._conditionsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionsAttributes = this._conditionsAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSourceResolutionRuleAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionType = undefined;
      this._enabled = undefined;
      this._identifierJsonPath = undefined;
      this._identifierMatchableId = undefined;
      this._identifierMatchableType = undefined;
      this._identifierReferenceKind = undefined;
      this._identifierValueRegex = undefined;
      this._conditionsAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionType = value.conditionType;
      this._enabled = value.enabled;
      this._identifierJsonPath = value.identifierJsonPath;
      this._identifierMatchableId = value.identifierMatchableId;
      this._identifierMatchableType = value.identifierMatchableType;
      this._identifierReferenceKind = value.identifierReferenceKind;
      this._identifierValueRegex = value.identifierValueRegex;
      this._conditionsAttributes.internalValue = value.conditionsAttributes;
    }
  }

  // condition_type - computed: false, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
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

  // identifier_json_path - computed: true, optional: true, required: false
  private _identifierJsonPath?: string; 
  public get identifierJsonPath() {
    return this.getStringAttribute('identifier_json_path');
  }
  public set identifierJsonPath(value: string) {
    this._identifierJsonPath = value;
  }
  public resetIdentifierJsonPath() {
    this._identifierJsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierJsonPathInput() {
    return this._identifierJsonPath;
  }

  // identifier_matchable_id - computed: true, optional: true, required: false
  private _identifierMatchableId?: string; 
  public get identifierMatchableId() {
    return this.getStringAttribute('identifier_matchable_id');
  }
  public set identifierMatchableId(value: string) {
    this._identifierMatchableId = value;
  }
  public resetIdentifierMatchableId() {
    this._identifierMatchableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierMatchableIdInput() {
    return this._identifierMatchableId;
  }

  // identifier_matchable_type - computed: false, optional: true, required: false
  private _identifierMatchableType?: string; 
  public get identifierMatchableType() {
    return this.getStringAttribute('identifier_matchable_type');
  }
  public set identifierMatchableType(value: string) {
    this._identifierMatchableType = value;
  }
  public resetIdentifierMatchableType() {
    this._identifierMatchableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierMatchableTypeInput() {
    return this._identifierMatchableType;
  }

  // identifier_reference_kind - computed: false, optional: true, required: false
  private _identifierReferenceKind?: string; 
  public get identifierReferenceKind() {
    return this.getStringAttribute('identifier_reference_kind');
  }
  public set identifierReferenceKind(value: string) {
    this._identifierReferenceKind = value;
  }
  public resetIdentifierReferenceKind() {
    this._identifierReferenceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierReferenceKindInput() {
    return this._identifierReferenceKind;
  }

  // identifier_value_regex - computed: true, optional: true, required: false
  private _identifierValueRegex?: string; 
  public get identifierValueRegex() {
    return this.getStringAttribute('identifier_value_regex');
  }
  public set identifierValueRegex(value: string) {
    this._identifierValueRegex = value;
  }
  public resetIdentifierValueRegex() {
    this._identifierValueRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierValueRegexInput() {
    return this._identifierValueRegex;
  }

  // conditions_attributes - computed: false, optional: true, required: false
  private _conditionsAttributes = new AlertsSourceResolutionRuleAttributesConditionsAttributesList(this, "conditions_attributes", false);
  public get conditionsAttributes() {
    return this._conditionsAttributes;
  }
  public putConditionsAttributes(value: AlertsSourceResolutionRuleAttributesConditionsAttributes[] | cdktf.IResolvable) {
    this._conditionsAttributes.internalValue = value;
  }
  public resetConditionsAttributes() {
    this._conditionsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsAttributesInput() {
    return this._conditionsAttributes.internalValue;
  }
}
export interface AlertsSourceSourceableAttributesFieldMappingsAttributes {
  /**
  * Select the field on which the condition to be evaluated. Value must be one of `external_id`, `state`, `alert_title`, `alert_external_url`, `notification_target_type`, `notification_target_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#field AlertsSource#field}
  */
  readonly field?: string;
  /**
  * JSON path expression to extract a specific value from the alert's payload for evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#json_path AlertsSource#json_path}
  */
  readonly jsonPath?: string;
}

export function alertsSourceSourceableAttributesFieldMappingsAttributesToTerraform(struct?: AlertsSourceSourceableAttributesFieldMappingsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}


export function alertsSourceSourceableAttributesFieldMappingsAttributesToHclTerraform(struct?: AlertsSourceSourceableAttributesFieldMappingsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSourceSourceableAttributesFieldMappingsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertsSourceSourceableAttributesFieldMappingsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSourceSourceableAttributesFieldMappingsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._jsonPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._jsonPath = value.jsonPath;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // json_path - computed: true, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }
}

export class AlertsSourceSourceableAttributesFieldMappingsAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertsSourceSourceableAttributesFieldMappingsAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlertsSourceSourceableAttributesFieldMappingsAttributesOutputReference {
    return new AlertsSourceSourceableAttributesFieldMappingsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertsSourceSourceableAttributes {
  /**
  * Set this to false to reject threaded emails. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#accept_threaded_emails AlertsSource#accept_threaded_emails}
  */
  readonly acceptThreadedEmails?: boolean | cdktf.IResolvable;
  /**
  * Set this to true to auto-resolve alerts based on field_mappings_attributes conditions. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#auto_resolve AlertsSource#auto_resolve}
  */
  readonly autoResolve?: boolean | cdktf.IResolvable;
  /**
  * This value is matched with the value extracted from alerts payload using JSON path in field_mappings_attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#resolve_state AlertsSource#resolve_state}
  */
  readonly resolveState?: string;
  /**
  * field_mappings_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#field_mappings_attributes AlertsSource#field_mappings_attributes}
  */
  readonly fieldMappingsAttributes?: AlertsSourceSourceableAttributesFieldMappingsAttributes[] | cdktf.IResolvable;
}

export function alertsSourceSourceableAttributesToTerraform(struct?: AlertsSourceSourceableAttributesOutputReference | AlertsSourceSourceableAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_threaded_emails: cdktf.booleanToTerraform(struct!.acceptThreadedEmails),
    auto_resolve: cdktf.booleanToTerraform(struct!.autoResolve),
    resolve_state: cdktf.stringToTerraform(struct!.resolveState),
    field_mappings_attributes: cdktf.listMapper(alertsSourceSourceableAttributesFieldMappingsAttributesToTerraform, true)(struct!.fieldMappingsAttributes),
  }
}


export function alertsSourceSourceableAttributesToHclTerraform(struct?: AlertsSourceSourceableAttributesOutputReference | AlertsSourceSourceableAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_threaded_emails: {
      value: cdktf.booleanToHclTerraform(struct!.acceptThreadedEmails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_resolve: {
      value: cdktf.booleanToHclTerraform(struct!.autoResolve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resolve_state: {
      value: cdktf.stringToHclTerraform(struct!.resolveState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mappings_attributes: {
      value: cdktf.listMapperHcl(alertsSourceSourceableAttributesFieldMappingsAttributesToHclTerraform, true)(struct!.fieldMappingsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "AlertsSourceSourceableAttributesFieldMappingsAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsSourceSourceableAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertsSourceSourceableAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptThreadedEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptThreadedEmails = this._acceptThreadedEmails;
    }
    if (this._autoResolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoResolve = this._autoResolve;
    }
    if (this._resolveState !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveState = this._resolveState;
    }
    if (this._fieldMappingsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappingsAttributes = this._fieldMappingsAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsSourceSourceableAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptThreadedEmails = undefined;
      this._autoResolve = undefined;
      this._resolveState = undefined;
      this._fieldMappingsAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptThreadedEmails = value.acceptThreadedEmails;
      this._autoResolve = value.autoResolve;
      this._resolveState = value.resolveState;
      this._fieldMappingsAttributes.internalValue = value.fieldMappingsAttributes;
    }
  }

  // accept_threaded_emails - computed: true, optional: true, required: false
  private _acceptThreadedEmails?: boolean | cdktf.IResolvable; 
  public get acceptThreadedEmails() {
    return this.getBooleanAttribute('accept_threaded_emails');
  }
  public set acceptThreadedEmails(value: boolean | cdktf.IResolvable) {
    this._acceptThreadedEmails = value;
  }
  public resetAcceptThreadedEmails() {
    this._acceptThreadedEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptThreadedEmailsInput() {
    return this._acceptThreadedEmails;
  }

  // auto_resolve - computed: true, optional: true, required: false
  private _autoResolve?: boolean | cdktf.IResolvable; 
  public get autoResolve() {
    return this.getBooleanAttribute('auto_resolve');
  }
  public set autoResolve(value: boolean | cdktf.IResolvable) {
    this._autoResolve = value;
  }
  public resetAutoResolve() {
    this._autoResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolveInput() {
    return this._autoResolve;
  }

  // resolve_state - computed: true, optional: true, required: false
  private _resolveState?: string; 
  public get resolveState() {
    return this.getStringAttribute('resolve_state');
  }
  public set resolveState(value: string) {
    this._resolveState = value;
  }
  public resetResolveState() {
    this._resolveState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveStateInput() {
    return this._resolveState;
  }

  // field_mappings_attributes - computed: false, optional: true, required: false
  private _fieldMappingsAttributes = new AlertsSourceSourceableAttributesFieldMappingsAttributesList(this, "field_mappings_attributes", false);
  public get fieldMappingsAttributes() {
    return this._fieldMappingsAttributes;
  }
  public putFieldMappingsAttributes(value: AlertsSourceSourceableAttributesFieldMappingsAttributes[] | cdktf.IResolvable) {
    this._fieldMappingsAttributes.internalValue = value;
  }
  public resetFieldMappingsAttributes() {
    this._fieldMappingsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsAttributesInput() {
    return this._fieldMappingsAttributes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source rootly_alerts_source}
*/
export class AlertsSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_alerts_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertsSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertsSource to import
  * @param importFromId The id of the existing AlertsSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertsSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_alerts_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/alerts_source rootly_alerts_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertsSourceConfig
  */
  public constructor(scope: Construct, id: string, config: AlertsSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_alerts_source',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertUrgencyId = config.alertUrgencyId;
    this._deduplicateAlertsByKey = config.deduplicateAlertsByKey;
    this._deduplicationKeyKind = config.deduplicationKeyKind;
    this._deduplicationKeyPath = config.deduplicationKeyPath;
    this._deduplicationKeyRegexp = config.deduplicationKeyRegexp;
    this._email = config.email;
    this._id = config.id;
    this._name = config.name;
    this._ownerGroupIds = config.ownerGroupIds;
    this._secret = config.secret;
    this._sourceType = config.sourceType;
    this._status = config.status;
    this._webhookEndpoint = config.webhookEndpoint;
    this._alertSourceFieldsAttributes.internalValue = config.alertSourceFieldsAttributes;
    this._alertSourceUrgencyRulesAttributes.internalValue = config.alertSourceUrgencyRulesAttributes;
    this._alertTemplateAttributes.internalValue = config.alertTemplateAttributes;
    this._resolutionRuleAttributes.internalValue = config.resolutionRuleAttributes;
    this._sourceableAttributes.internalValue = config.sourceableAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_urgency_id - computed: true, optional: true, required: false
  private _alertUrgencyId?: string; 
  public get alertUrgencyId() {
    return this.getStringAttribute('alert_urgency_id');
  }
  public set alertUrgencyId(value: string) {
    this._alertUrgencyId = value;
  }
  public resetAlertUrgencyId() {
    this._alertUrgencyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyIdInput() {
    return this._alertUrgencyId;
  }

  // deduplicate_alerts_by_key - computed: true, optional: true, required: false
  private _deduplicateAlertsByKey?: boolean | cdktf.IResolvable; 
  public get deduplicateAlertsByKey() {
    return this.getBooleanAttribute('deduplicate_alerts_by_key');
  }
  public set deduplicateAlertsByKey(value: boolean | cdktf.IResolvable) {
    this._deduplicateAlertsByKey = value;
  }
  public resetDeduplicateAlertsByKey() {
    this._deduplicateAlertsByKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicateAlertsByKeyInput() {
    return this._deduplicateAlertsByKey;
  }

  // deduplication_key_kind - computed: false, optional: true, required: false
  private _deduplicationKeyKind?: string; 
  public get deduplicationKeyKind() {
    return this.getStringAttribute('deduplication_key_kind');
  }
  public set deduplicationKeyKind(value: string) {
    this._deduplicationKeyKind = value;
  }
  public resetDeduplicationKeyKind() {
    this._deduplicationKeyKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationKeyKindInput() {
    return this._deduplicationKeyKind;
  }

  // deduplication_key_path - computed: true, optional: true, required: false
  private _deduplicationKeyPath?: string; 
  public get deduplicationKeyPath() {
    return this.getStringAttribute('deduplication_key_path');
  }
  public set deduplicationKeyPath(value: string) {
    this._deduplicationKeyPath = value;
  }
  public resetDeduplicationKeyPath() {
    this._deduplicationKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationKeyPathInput() {
    return this._deduplicationKeyPath;
  }

  // deduplication_key_regexp - computed: true, optional: true, required: false
  private _deduplicationKeyRegexp?: string; 
  public get deduplicationKeyRegexp() {
    return this.getStringAttribute('deduplication_key_regexp');
  }
  public set deduplicationKeyRegexp(value: string) {
    this._deduplicationKeyRegexp = value;
  }
  public resetDeduplicationKeyRegexp() {
    this._deduplicationKeyRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationKeyRegexpInput() {
    return this._deduplicationKeyRegexp;
  }

  // email - computed: true, optional: true, required: false
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

  // owner_group_ids - computed: false, optional: true, required: false
  private _ownerGroupIds?: string[]; 
  public get ownerGroupIds() {
    return this.getListAttribute('owner_group_ids');
  }
  public set ownerGroupIds(value: string[]) {
    this._ownerGroupIds = value;
  }
  public resetOwnerGroupIds() {
    this._ownerGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGroupIdsInput() {
    return this._ownerGroupIds;
  }

  // secret - computed: true, optional: true, required: false
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

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // status - computed: true, optional: true, required: false
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

  // webhook_endpoint - computed: true, optional: true, required: false
  private _webhookEndpoint?: string; 
  public get webhookEndpoint() {
    return this.getStringAttribute('webhook_endpoint');
  }
  public set webhookEndpoint(value: string) {
    this._webhookEndpoint = value;
  }
  public resetWebhookEndpoint() {
    this._webhookEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookEndpointInput() {
    return this._webhookEndpoint;
  }

  // alert_source_fields_attributes - computed: false, optional: true, required: false
  private _alertSourceFieldsAttributes = new AlertsSourceAlertSourceFieldsAttributesList(this, "alert_source_fields_attributes", false);
  public get alertSourceFieldsAttributes() {
    return this._alertSourceFieldsAttributes;
  }
  public putAlertSourceFieldsAttributes(value: AlertsSourceAlertSourceFieldsAttributes[] | cdktf.IResolvable) {
    this._alertSourceFieldsAttributes.internalValue = value;
  }
  public resetAlertSourceFieldsAttributes() {
    this._alertSourceFieldsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourceFieldsAttributesInput() {
    return this._alertSourceFieldsAttributes.internalValue;
  }

  // alert_source_urgency_rules_attributes - computed: false, optional: true, required: false
  private _alertSourceUrgencyRulesAttributes = new AlertsSourceAlertSourceUrgencyRulesAttributesList(this, "alert_source_urgency_rules_attributes", false);
  public get alertSourceUrgencyRulesAttributes() {
    return this._alertSourceUrgencyRulesAttributes;
  }
  public putAlertSourceUrgencyRulesAttributes(value: AlertsSourceAlertSourceUrgencyRulesAttributes[] | cdktf.IResolvable) {
    this._alertSourceUrgencyRulesAttributes.internalValue = value;
  }
  public resetAlertSourceUrgencyRulesAttributes() {
    this._alertSourceUrgencyRulesAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourceUrgencyRulesAttributesInput() {
    return this._alertSourceUrgencyRulesAttributes.internalValue;
  }

  // alert_template_attributes - computed: false, optional: true, required: false
  private _alertTemplateAttributes = new AlertsSourceAlertTemplateAttributesOutputReference(this, "alert_template_attributes");
  public get alertTemplateAttributes() {
    return this._alertTemplateAttributes;
  }
  public putAlertTemplateAttributes(value: AlertsSourceAlertTemplateAttributes) {
    this._alertTemplateAttributes.internalValue = value;
  }
  public resetAlertTemplateAttributes() {
    this._alertTemplateAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTemplateAttributesInput() {
    return this._alertTemplateAttributes.internalValue;
  }

  // resolution_rule_attributes - computed: false, optional: true, required: false
  private _resolutionRuleAttributes = new AlertsSourceResolutionRuleAttributesOutputReference(this, "resolution_rule_attributes");
  public get resolutionRuleAttributes() {
    return this._resolutionRuleAttributes;
  }
  public putResolutionRuleAttributes(value: AlertsSourceResolutionRuleAttributes) {
    this._resolutionRuleAttributes.internalValue = value;
  }
  public resetResolutionRuleAttributes() {
    this._resolutionRuleAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionRuleAttributesInput() {
    return this._resolutionRuleAttributes.internalValue;
  }

  // sourceable_attributes - computed: false, optional: true, required: false
  private _sourceableAttributes = new AlertsSourceSourceableAttributesOutputReference(this, "sourceable_attributes");
  public get sourceableAttributes() {
    return this._sourceableAttributes;
  }
  public putSourceableAttributes(value: AlertsSourceSourceableAttributes) {
    this._sourceableAttributes.internalValue = value;
  }
  public resetSourceableAttributes() {
    this._sourceableAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceableAttributesInput() {
    return this._sourceableAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_urgency_id: cdktf.stringToTerraform(this._alertUrgencyId),
      deduplicate_alerts_by_key: cdktf.booleanToTerraform(this._deduplicateAlertsByKey),
      deduplication_key_kind: cdktf.stringToTerraform(this._deduplicationKeyKind),
      deduplication_key_path: cdktf.stringToTerraform(this._deduplicationKeyPath),
      deduplication_key_regexp: cdktf.stringToTerraform(this._deduplicationKeyRegexp),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ownerGroupIds),
      secret: cdktf.stringToTerraform(this._secret),
      source_type: cdktf.stringToTerraform(this._sourceType),
      status: cdktf.stringToTerraform(this._status),
      webhook_endpoint: cdktf.stringToTerraform(this._webhookEndpoint),
      alert_source_fields_attributes: cdktf.listMapper(alertsSourceAlertSourceFieldsAttributesToTerraform, true)(this._alertSourceFieldsAttributes.internalValue),
      alert_source_urgency_rules_attributes: cdktf.listMapper(alertsSourceAlertSourceUrgencyRulesAttributesToTerraform, true)(this._alertSourceUrgencyRulesAttributes.internalValue),
      alert_template_attributes: alertsSourceAlertTemplateAttributesToTerraform(this._alertTemplateAttributes.internalValue),
      resolution_rule_attributes: alertsSourceResolutionRuleAttributesToTerraform(this._resolutionRuleAttributes.internalValue),
      sourceable_attributes: alertsSourceSourceableAttributesToTerraform(this._sourceableAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_urgency_id: {
        value: cdktf.stringToHclTerraform(this._alertUrgencyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deduplicate_alerts_by_key: {
        value: cdktf.booleanToHclTerraform(this._deduplicateAlertsByKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deduplication_key_kind: {
        value: cdktf.stringToHclTerraform(this._deduplicationKeyKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deduplication_key_path: {
        value: cdktf.stringToHclTerraform(this._deduplicationKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deduplication_key_regexp: {
        value: cdktf.stringToHclTerraform(this._deduplicationKeyRegexp),
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
      owner_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ownerGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_endpoint: {
        value: cdktf.stringToHclTerraform(this._webhookEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_source_fields_attributes: {
        value: cdktf.listMapperHcl(alertsSourceAlertSourceFieldsAttributesToHclTerraform, true)(this._alertSourceFieldsAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertsSourceAlertSourceFieldsAttributesList",
      },
      alert_source_urgency_rules_attributes: {
        value: cdktf.listMapperHcl(alertsSourceAlertSourceUrgencyRulesAttributesToHclTerraform, true)(this._alertSourceUrgencyRulesAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertsSourceAlertSourceUrgencyRulesAttributesList",
      },
      alert_template_attributes: {
        value: alertsSourceAlertTemplateAttributesToHclTerraform(this._alertTemplateAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertsSourceAlertTemplateAttributesList",
      },
      resolution_rule_attributes: {
        value: alertsSourceResolutionRuleAttributesToHclTerraform(this._resolutionRuleAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertsSourceResolutionRuleAttributesList",
      },
      sourceable_attributes: {
        value: alertsSourceSourceableAttributesToHclTerraform(this._sourceableAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertsSourceSourceableAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
