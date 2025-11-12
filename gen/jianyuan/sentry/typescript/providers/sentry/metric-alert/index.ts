// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The aggregation criteria to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#aggregate MetricAlert#aggregate}
  */
  readonly aggregate: string;
  /**
  * An optional int representing the time delta to use as the comparison period, in minutes. Required when using a percentage change threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#comparison_delta MetricAlert#comparison_delta}
  */
  readonly comparisonDelta?: number;
  /**
  * The Sentry Alert category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#dataset MetricAlert#dataset}
  */
  readonly dataset?: string;
  /**
  * Perform Alert rule in a specific environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#environment MetricAlert#environment}
  */
  readonly environment?: string;
  /**
  * The events type of dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#event_types MetricAlert#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * The metric alert name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#name MetricAlert#name}
  */
  readonly name: string;
  /**
  * The slug of the organization the metric alert belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#organization MetricAlert#organization}
  */
  readonly organization: string;
  /**
  * Specifies the owner id of this Alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#owner MetricAlert#owner}
  */
  readonly owner?: string;
  /**
  * The slug of the project to create the metric alert for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#project MetricAlert#project}
  */
  readonly project: string;
  /**
  * The query filter to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#query MetricAlert#query}
  */
  readonly query: string;
  /**
  * The value at which the Alert rule resolves
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#resolve_threshold MetricAlert#resolve_threshold}
  */
  readonly resolveThreshold?: number;
  /**
  * The type of threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#threshold_type MetricAlert#threshold_type}
  */
  readonly thresholdType: number;
  /**
  * The period to evaluate the Alert rule in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#time_window MetricAlert#time_window}
  */
  readonly timeWindow: number;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#trigger MetricAlert#trigger}
  */
  readonly trigger: MetricAlertTrigger[] | cdktf.IResolvable;
}
export interface MetricAlertTriggerAction {
  /**
  * Slack channel ID to avoid rate-limiting, see [here](https://docs.sentry.io/product/integrations/notification-incidents/slack/#rate-limiting-error)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#input_channel_id MetricAlert#input_channel_id}
  */
  readonly inputChannelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#integration_id MetricAlert#integration_id}
  */
  readonly integrationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#target_identifier MetricAlert#target_identifier}
  */
  readonly targetIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#target_type MetricAlert#target_type}
  */
  readonly targetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#type MetricAlert#type}
  */
  readonly type: string;
}

export function metricAlertTriggerActionToTerraform(struct?: MetricAlertTriggerAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_channel_id: cdktf.stringToTerraform(struct!.inputChannelId),
    integration_id: cdktf.numberToTerraform(struct!.integrationId),
    target_identifier: cdktf.stringToTerraform(struct!.targetIdentifier),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function metricAlertTriggerActionToHclTerraform(struct?: MetricAlertTriggerAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_channel_id: {
      value: cdktf.stringToHclTerraform(struct!.inputChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktf.numberToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_identifier: {
      value: cdktf.stringToHclTerraform(struct!.targetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
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

export class MetricAlertTriggerActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricAlertTriggerAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputChannelId = this._inputChannelId;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._targetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIdentifier = this._targetIdentifier;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricAlertTriggerAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputChannelId = undefined;
      this._integrationId = undefined;
      this._targetIdentifier = undefined;
      this._targetType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputChannelId = value.inputChannelId;
      this._integrationId = value.integrationId;
      this._targetIdentifier = value.targetIdentifier;
      this._targetType = value.targetType;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_channel_id - computed: false, optional: true, required: false
  private _inputChannelId?: string; 
  public get inputChannelId() {
    return this.getStringAttribute('input_channel_id');
  }
  public set inputChannelId(value: string) {
    this._inputChannelId = value;
  }
  public resetInputChannelId() {
    this._inputChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputChannelIdInput() {
    return this._inputChannelId;
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: number; 
  public get integrationId() {
    return this.getNumberAttribute('integration_id');
  }
  public set integrationId(value: number) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // target_identifier - computed: false, optional: true, required: false
  private _targetIdentifier?: string; 
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }
  public set targetIdentifier(value: string) {
    this._targetIdentifier = value;
  }
  public resetTargetIdentifier() {
    this._targetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdentifierInput() {
    return this._targetIdentifier;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
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

export class MetricAlertTriggerActionList extends cdktf.ComplexList {
  public internalValue? : MetricAlertTriggerAction[] | cdktf.IResolvable

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
  public get(index: number): MetricAlertTriggerActionOutputReference {
    return new MetricAlertTriggerActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricAlertTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#alert_threshold MetricAlert#alert_threshold}
  */
  readonly alertThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#label MetricAlert#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#resolve_threshold MetricAlert#resolve_threshold}
  */
  readonly resolveThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#threshold_type MetricAlert#threshold_type}
  */
  readonly thresholdType: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#action MetricAlert#action}
  */
  readonly action: MetricAlertTriggerAction[] | cdktf.IResolvable;
}

export function metricAlertTriggerToTerraform(struct?: MetricAlertTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_threshold: cdktf.numberToTerraform(struct!.alertThreshold),
    label: cdktf.stringToTerraform(struct!.label),
    resolve_threshold: cdktf.numberToTerraform(struct!.resolveThreshold),
    threshold_type: cdktf.numberToTerraform(struct!.thresholdType),
    action: cdktf.listMapper(metricAlertTriggerActionToTerraform, true)(struct!.action),
  }
}


export function metricAlertTriggerToHclTerraform(struct?: MetricAlertTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_threshold: {
      value: cdktf.numberToHclTerraform(struct!.alertThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_threshold: {
      value: cdktf.numberToHclTerraform(struct!.resolveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_type: {
      value: cdktf.numberToHclTerraform(struct!.thresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: cdktf.listMapperHcl(metricAlertTriggerActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "MetricAlertTriggerActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricAlertTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricAlertTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertThreshold = this._alertThreshold;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._resolveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveThreshold = this._resolveThreshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricAlertTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertThreshold = undefined;
      this._label = undefined;
      this._resolveThreshold = undefined;
      this._thresholdType = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertThreshold = value.alertThreshold;
      this._label = value.label;
      this._resolveThreshold = value.resolveThreshold;
      this._thresholdType = value.thresholdType;
      this._action.internalValue = value.action;
    }
  }

  // alert_threshold - computed: false, optional: false, required: true
  private _alertThreshold?: number; 
  public get alertThreshold() {
    return this.getNumberAttribute('alert_threshold');
  }
  public set alertThreshold(value: number) {
    this._alertThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertThresholdInput() {
    return this._alertThreshold;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // resolve_threshold - computed: true, optional: true, required: false
  private _resolveThreshold?: number; 
  public get resolveThreshold() {
    return this.getNumberAttribute('resolve_threshold');
  }
  public set resolveThreshold(value: number) {
    this._resolveThreshold = value;
  }
  public resetResolveThreshold() {
    this._resolveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveThresholdInput() {
    return this._resolveThreshold;
  }

  // threshold_type - computed: false, optional: false, required: true
  private _thresholdType?: number; 
  public get thresholdType() {
    return this.getNumberAttribute('threshold_type');
  }
  public set thresholdType(value: number) {
    this._thresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }

  // action - computed: false, optional: false, required: true
  private _action = new MetricAlertTriggerActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: MetricAlertTriggerAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class MetricAlertTriggerList extends cdktf.ComplexList {
  public internalValue? : MetricAlertTrigger[] | cdktf.IResolvable

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
  public get(index: number): MetricAlertTriggerOutputReference {
    return new MetricAlertTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert sentry_metric_alert}
*/
export class MetricAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_metric_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricAlert to import
  * @param importFromId The id of the existing MetricAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_metric_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/metric_alert sentry_metric_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricAlertConfig
  */
  public constructor(scope: Construct, id: string, config: MetricAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_metric_alert',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregate = config.aggregate;
    this._comparisonDelta = config.comparisonDelta;
    this._dataset = config.dataset;
    this._environment = config.environment;
    this._eventTypes = config.eventTypes;
    this._name = config.name;
    this._organization = config.organization;
    this._owner = config.owner;
    this._project = config.project;
    this._query = config.query;
    this._resolveThreshold = config.resolveThreshold;
    this._thresholdType = config.thresholdType;
    this._timeWindow = config.timeWindow;
    this._trigger.internalValue = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate - computed: false, optional: false, required: true
  private _aggregate?: string; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string) {
    this._aggregate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
  }

  // comparison_delta - computed: false, optional: true, required: false
  private _comparisonDelta?: number; 
  public get comparisonDelta() {
    return this.getNumberAttribute('comparison_delta');
  }
  public set comparisonDelta(value: number) {
    this._comparisonDelta = value;
  }
  public resetComparisonDelta() {
    this._comparisonDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonDeltaInput() {
    return this._comparisonDelta;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // resolve_threshold - computed: false, optional: true, required: false
  private _resolveThreshold?: number; 
  public get resolveThreshold() {
    return this.getNumberAttribute('resolve_threshold');
  }
  public set resolveThreshold(value: number) {
    this._resolveThreshold = value;
  }
  public resetResolveThreshold() {
    this._resolveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveThresholdInput() {
    return this._resolveThreshold;
  }

  // threshold_type - computed: false, optional: false, required: true
  private _thresholdType?: number; 
  public get thresholdType() {
    return this.getNumberAttribute('threshold_type');
  }
  public set thresholdType(value: number) {
    this._thresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new MetricAlertTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: MetricAlertTrigger[] | cdktf.IResolvable) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate: cdktf.stringToTerraform(this._aggregate),
      comparison_delta: cdktf.numberToTerraform(this._comparisonDelta),
      dataset: cdktf.stringToTerraform(this._dataset),
      environment: cdktf.stringToTerraform(this._environment),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      owner: cdktf.stringToTerraform(this._owner),
      project: cdktf.stringToTerraform(this._project),
      query: cdktf.stringToTerraform(this._query),
      resolve_threshold: cdktf.numberToTerraform(this._resolveThreshold),
      threshold_type: cdktf.numberToTerraform(this._thresholdType),
      time_window: cdktf.numberToTerraform(this._timeWindow),
      trigger: cdktf.listMapper(metricAlertTriggerToTerraform, true)(this._trigger.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate: {
        value: cdktf.stringToHclTerraform(this._aggregate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comparison_delta: {
        value: cdktf.numberToHclTerraform(this._comparisonDelta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_threshold: {
        value: cdktf.numberToHclTerraform(this._resolveThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_type: {
        value: cdktf.numberToHclTerraform(this._thresholdType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_window: {
        value: cdktf.numberToHclTerraform(this._timeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger: {
        value: cdktf.listMapperHcl(metricAlertTriggerToHclTerraform, true)(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricAlertTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
