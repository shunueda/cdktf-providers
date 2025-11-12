// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the alert type that you want to call when the alert is scheduled to run, defaults to `.index-threshold`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#alert_type_id KibanaAlert#alert_type_id}
  */
  readonly alertTypeId?: string;
  /**
  * The name of the application that owns the alert. This name has to match the Kibana Feature name, as that dictates the required RBAC privileges. Defaults to `alerts`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#consumer KibanaAlert#consumer}
  */
  readonly consumer?: string;
  /**
  * Whether the alert is scheduled for evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#enabled KibanaAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#id KibanaAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alert, does not have to be unique, used to identify and find an alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#name KibanaAlert#name}
  */
  readonly name: string;
  /**
  * The condition for throttling the notification: `onActionGroupChange`, `onActiveAlert`, or `onThrottleInterval`. Only available in Kibana >= 7.11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#notify_when KibanaAlert#notify_when}
  */
  readonly notifyWhen?: string;
  /**
  * JSON body of alert `params`. Either `params_json` or `conditions` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#params_json KibanaAlert#params_json}
  */
  readonly paramsJson?: string;
  /**
  * A list of tag names, they appear in the alert listing in the UI which is searchable by tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#tags KibanaAlert#tags}
  */
  readonly tags?: string[];
  /**
  * How often this alert should fire the same action, this reduces repeated notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#throttle KibanaAlert#throttle}
  */
  readonly throttle?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#actions KibanaAlert#actions}
  */
  readonly actions?: KibanaAlertActions[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#conditions KibanaAlert#conditions}
  */
  readonly conditions?: KibanaAlertConditions;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#schedule KibanaAlert#schedule}
  */
  readonly schedule?: KibanaAlertSchedule;
}
export interface KibanaAlertActions {
  /**
  * The type of the action, e.g. `.index`, `.webhook`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#action_type_id KibanaAlert#action_type_id}
  */
  readonly actionTypeId: string;
  /**
  * When to execute the action, e.g. `threshold met` or `recovered`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#group KibanaAlert#group}
  */
  readonly group?: string;
  /**
  * The identifier of the saved action object, a UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#id KibanaAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Key value pairs passed to the action executor, e.g. a Mustache formatted `message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#params KibanaAlert#params}
  */
  readonly params?: { [key: string]: string };
}

export function kibanaAlertActionsToTerraform(struct?: KibanaAlertActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type_id: cdktf.stringToTerraform(struct!.actionTypeId),
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.stringToTerraform(struct!.id),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
  }
}


export function kibanaAlertActionsToHclTerraform(struct?: KibanaAlertActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type_id: {
      value: cdktf.stringToHclTerraform(struct!.actionTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaAlertActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaAlertActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTypeId = this._actionTypeId;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaAlertActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionTypeId = undefined;
      this._group = undefined;
      this._id = undefined;
      this._params = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionTypeId = value.actionTypeId;
      this._group = value.group;
      this._id = value.id;
      this._params = value.params;
    }
  }

  // action_type_id - computed: false, optional: false, required: true
  private _actionTypeId?: string; 
  public get actionTypeId() {
    return this.getStringAttribute('action_type_id');
  }
  public set actionTypeId(value: string) {
    this._actionTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeIdInput() {
    return this._actionTypeId;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }
}

export class KibanaAlertActionsList extends cdktf.ComplexList {
  public internalValue? : KibanaAlertActions[] | cdktf.IResolvable

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
  public get(index: number): KibanaAlertActionsOutputReference {
    return new KibanaAlertActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaAlertConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#aggregation_field KibanaAlert#aggregation_field}
  */
  readonly aggregationField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#aggregation_type KibanaAlert#aggregation_type}
  */
  readonly aggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#group_by KibanaAlert#group_by}
  */
  readonly groupBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#index KibanaAlert#index}
  */
  readonly index: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#term_field KibanaAlert#term_field}
  */
  readonly termField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#term_size KibanaAlert#term_size}
  */
  readonly termSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#threshold KibanaAlert#threshold}
  */
  readonly threshold: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#threshold_comparator KibanaAlert#threshold_comparator}
  */
  readonly thresholdComparator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#time_field KibanaAlert#time_field}
  */
  readonly timeField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#time_window_size KibanaAlert#time_window_size}
  */
  readonly timeWindowSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#time_window_unit KibanaAlert#time_window_unit}
  */
  readonly timeWindowUnit: string;
}

export function kibanaAlertConditionsToTerraform(struct?: KibanaAlertConditionsOutputReference | KibanaAlertConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_field: cdktf.stringToTerraform(struct!.aggregationField),
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
    group_by: cdktf.stringToTerraform(struct!.groupBy),
    index: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.index),
    term_field: cdktf.stringToTerraform(struct!.termField),
    term_size: cdktf.numberToTerraform(struct!.termSize),
    threshold: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.threshold),
    threshold_comparator: cdktf.stringToTerraform(struct!.thresholdComparator),
    time_field: cdktf.stringToTerraform(struct!.timeField),
    time_window_size: cdktf.numberToTerraform(struct!.timeWindowSize),
    time_window_unit: cdktf.stringToTerraform(struct!.timeWindowUnit),
  }
}


export function kibanaAlertConditionsToHclTerraform(struct?: KibanaAlertConditionsOutputReference | KibanaAlertConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_field: {
      value: cdktf.stringToHclTerraform(struct!.aggregationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.stringToHclTerraform(struct!.groupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.index),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    term_field: {
      value: cdktf.stringToHclTerraform(struct!.termField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    term_size: {
      value: cdktf.numberToHclTerraform(struct!.termSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.threshold),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    threshold_comparator: {
      value: cdktf.stringToHclTerraform(struct!.thresholdComparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_field: {
      value: cdktf.stringToHclTerraform(struct!.timeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_window_size: {
      value: cdktf.numberToHclTerraform(struct!.timeWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeWindowUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaAlertConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaAlertConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationField = this._aggregationField;
    }
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._termField !== undefined) {
      hasAnyValues = true;
      internalValueResult.termField = this._termField;
    }
    if (this._termSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.termSize = this._termSize;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdComparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdComparator = this._thresholdComparator;
    }
    if (this._timeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeField = this._timeField;
    }
    if (this._timeWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowSize = this._timeWindowSize;
    }
    if (this._timeWindowUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowUnit = this._timeWindowUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaAlertConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationField = undefined;
      this._aggregationType = undefined;
      this._groupBy = undefined;
      this._index = undefined;
      this._termField = undefined;
      this._termSize = undefined;
      this._threshold = undefined;
      this._thresholdComparator = undefined;
      this._timeField = undefined;
      this._timeWindowSize = undefined;
      this._timeWindowUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationField = value.aggregationField;
      this._aggregationType = value.aggregationType;
      this._groupBy = value.groupBy;
      this._index = value.index;
      this._termField = value.termField;
      this._termSize = value.termSize;
      this._threshold = value.threshold;
      this._thresholdComparator = value.thresholdComparator;
      this._timeField = value.timeField;
      this._timeWindowSize = value.timeWindowSize;
      this._timeWindowUnit = value.timeWindowUnit;
    }
  }

  // aggregation_field - computed: false, optional: true, required: false
  private _aggregationField?: string; 
  public get aggregationField() {
    return this.getStringAttribute('aggregation_field');
  }
  public set aggregationField(value: string) {
    this._aggregationField = value;
  }
  public resetAggregationField() {
    this._aggregationField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFieldInput() {
    return this._aggregationField;
  }

  // aggregation_type - computed: false, optional: true, required: false
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string[]; 
  public get index() {
    return cdktf.Fn.tolist(this.getListAttribute('index'));
  }
  public set index(value: string[]) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // term_field - computed: false, optional: true, required: false
  private _termField?: string; 
  public get termField() {
    return this.getStringAttribute('term_field');
  }
  public set termField(value: string) {
    this._termField = value;
  }
  public resetTermField() {
    this._termField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termFieldInput() {
    return this._termField;
  }

  // term_size - computed: false, optional: true, required: false
  private _termSize?: number; 
  public get termSize() {
    return this.getNumberAttribute('term_size');
  }
  public set termSize(value: number) {
    this._termSize = value;
  }
  public resetTermSize() {
    this._termSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termSizeInput() {
    return this._termSize;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number[]; 
  public get threshold() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('threshold')));
  }
  public set threshold(value: number[]) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_comparator - computed: false, optional: false, required: true
  private _thresholdComparator?: string; 
  public get thresholdComparator() {
    return this.getStringAttribute('threshold_comparator');
  }
  public set thresholdComparator(value: string) {
    this._thresholdComparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdComparatorInput() {
    return this._thresholdComparator;
  }

  // time_field - computed: false, optional: false, required: true
  private _timeField?: string; 
  public get timeField() {
    return this.getStringAttribute('time_field');
  }
  public set timeField(value: string) {
    this._timeField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFieldInput() {
    return this._timeField;
  }

  // time_window_size - computed: false, optional: false, required: true
  private _timeWindowSize?: number; 
  public get timeWindowSize() {
    return this.getNumberAttribute('time_window_size');
  }
  public set timeWindowSize(value: number) {
    this._timeWindowSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowSizeInput() {
    return this._timeWindowSize;
  }

  // time_window_unit - computed: false, optional: false, required: true
  private _timeWindowUnit?: string; 
  public get timeWindowUnit() {
    return this.getStringAttribute('time_window_unit');
  }
  public set timeWindowUnit(value: string) {
    this._timeWindowUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowUnitInput() {
    return this._timeWindowUnit;
  }
}
export interface KibanaAlertSchedule {
  /**
  * Specifies the interval in seconds, minutes, hours or days at which the alert should execute, e.g. 10s, 5m, 1h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#interval KibanaAlert#interval}
  */
  readonly interval: string;
}

export function kibanaAlertScheduleToTerraform(struct?: KibanaAlertScheduleOutputReference | KibanaAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function kibanaAlertScheduleToHclTerraform(struct?: KibanaAlertScheduleOutputReference | KibanaAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaAlertScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaAlertSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaAlertSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert elasticsearch_kibana_alert}
*/
export class KibanaAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_kibana_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaAlert to import
  * @param importFromId The id of the existing KibanaAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_kibana_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/kibana_alert elasticsearch_kibana_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaAlertConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_kibana_alert',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertTypeId = config.alertTypeId;
    this._consumer = config.consumer;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._notifyWhen = config.notifyWhen;
    this._paramsJson = config.paramsJson;
    this._tags = config.tags;
    this._throttle = config.throttle;
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_type_id - computed: false, optional: true, required: false
  private _alertTypeId?: string; 
  public get alertTypeId() {
    return this.getStringAttribute('alert_type_id');
  }
  public set alertTypeId(value: string) {
    this._alertTypeId = value;
  }
  public resetAlertTypeId() {
    this._alertTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeIdInput() {
    return this._alertTypeId;
  }

  // consumer - computed: false, optional: true, required: false
  private _consumer?: string; 
  public get consumer() {
    return this.getStringAttribute('consumer');
  }
  public set consumer(value: string) {
    this._consumer = value;
  }
  public resetConsumer() {
    this._consumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer;
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

  // notify_when - computed: false, optional: true, required: false
  private _notifyWhen?: string; 
  public get notifyWhen() {
    return this.getStringAttribute('notify_when');
  }
  public set notifyWhen(value: string) {
    this._notifyWhen = value;
  }
  public resetNotifyWhen() {
    this._notifyWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWhenInput() {
    return this._notifyWhen;
  }

  // params_json - computed: false, optional: true, required: false
  private _paramsJson?: string; 
  public get paramsJson() {
    return this.getStringAttribute('params_json');
  }
  public set paramsJson(value: string) {
    this._paramsJson = value;
  }
  public resetParamsJson() {
    this._paramsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsJsonInput() {
    return this._paramsJson;
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

  // throttle - computed: false, optional: true, required: false
  private _throttle?: string; 
  public get throttle() {
    return this.getStringAttribute('throttle');
  }
  public set throttle(value: string) {
    this._throttle = value;
  }
  public resetThrottle() {
    this._throttle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new KibanaAlertActionsList(this, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: KibanaAlertActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new KibanaAlertConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: KibanaAlertConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new KibanaAlertScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: KibanaAlertSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_type_id: cdktf.stringToTerraform(this._alertTypeId),
      consumer: cdktf.stringToTerraform(this._consumer),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_when: cdktf.stringToTerraform(this._notifyWhen),
      params_json: cdktf.stringToTerraform(this._paramsJson),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      throttle: cdktf.stringToTerraform(this._throttle),
      actions: cdktf.listMapper(kibanaAlertActionsToTerraform, true)(this._actions.internalValue),
      conditions: kibanaAlertConditionsToTerraform(this._conditions.internalValue),
      schedule: kibanaAlertScheduleToTerraform(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_type_id: {
        value: cdktf.stringToHclTerraform(this._alertTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer: {
        value: cdktf.stringToHclTerraform(this._consumer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      notify_when: {
        value: cdktf.stringToHclTerraform(this._notifyWhen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params_json: {
        value: cdktf.stringToHclTerraform(this._paramsJson),
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
      throttle: {
        value: cdktf.stringToHclTerraform(this._throttle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(kibanaAlertActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KibanaAlertActionsList",
      },
      conditions: {
        value: kibanaAlertConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KibanaAlertConditionsList",
      },
      schedule: {
        value: kibanaAlertScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaAlertScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
