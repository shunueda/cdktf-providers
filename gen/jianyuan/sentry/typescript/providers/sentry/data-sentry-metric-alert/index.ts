// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/metric_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSentryMetricAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/metric_alert#id DataSentryMetricAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The internal ID for this metric alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/metric_alert#internal_id DataSentryMetricAlert#internal_id}
  */
  readonly internalId: string;
  /**
  * The slug of the organization the metric alert belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/metric_alert#organization DataSentryMetricAlert#organization}
  */
  readonly organization: string;
  /**
  * The slug of the project the metric alert belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/metric_alert#project DataSentryMetricAlert#project}
  */
  readonly project: string;
}
export interface DataSentryMetricAlertTriggerAction {
}

export function dataSentryMetricAlertTriggerActionToTerraform(struct?: DataSentryMetricAlertTriggerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryMetricAlertTriggerActionToHclTerraform(struct?: DataSentryMetricAlertTriggerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryMetricAlertTriggerActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSentryMetricAlertTriggerAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryMetricAlertTriggerAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_channel_id - computed: true, optional: false, required: false
  public get inputChannelId() {
    return this.getStringAttribute('input_channel_id');
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getNumberAttribute('integration_id');
  }

  // target_identifier - computed: true, optional: false, required: false
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSentryMetricAlertTriggerActionList extends cdktf.ComplexList {

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
  public get(index: number): DataSentryMetricAlertTriggerActionOutputReference {
    return new DataSentryMetricAlertTriggerActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSentryMetricAlertTrigger {
}

export function dataSentryMetricAlertTriggerToTerraform(struct?: DataSentryMetricAlertTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryMetricAlertTriggerToHclTerraform(struct?: DataSentryMetricAlertTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryMetricAlertTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSentryMetricAlertTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryMetricAlertTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataSentryMetricAlertTriggerActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // alert_threshold - computed: true, optional: false, required: false
  public get alertThreshold() {
    return this.getNumberAttribute('alert_threshold');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // resolve_threshold - computed: true, optional: false, required: false
  public get resolveThreshold() {
    return this.getNumberAttribute('resolve_threshold');
  }

  // threshold_type - computed: true, optional: false, required: false
  public get thresholdType() {
    return this.getNumberAttribute('threshold_type');
  }
}

export class DataSentryMetricAlertTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataSentryMetricAlertTriggerOutputReference {
    return new DataSentryMetricAlertTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/metric_alert sentry_metric_alert}
*/
export class DataSentryMetricAlert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_metric_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSentryMetricAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSentryMetricAlert to import
  * @param importFromId The id of the existing DataSentryMetricAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/metric_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSentryMetricAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_metric_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/metric_alert sentry_metric_alert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSentryMetricAlertConfig
  */
  public constructor(scope: Construct, id: string, config: DataSentryMetricAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_metric_alert',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._internalId = config.internalId;
    this._organization = config.organization;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate - computed: true, optional: false, required: false
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // event_types - computed: true, optional: false, required: false
  public get eventTypes() {
    return this.getListAttribute('event_types');
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

  // internal_id - computed: false, optional: false, required: true
  private _internalId?: string; 
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }
  public set internalId(value: string) {
    this._internalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIdInput() {
    return this._internalId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
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

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // resolve_threshold - computed: true, optional: false, required: false
  public get resolveThreshold() {
    return this.getNumberAttribute('resolve_threshold');
  }

  // threshold_type - computed: true, optional: false, required: false
  public get thresholdType() {
    return this.getNumberAttribute('threshold_type');
  }

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }

  // trigger - computed: true, optional: false, required: false
  private _trigger = new DataSentryMetricAlertTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      internal_id: cdktf.stringToTerraform(this._internalId),
      organization: cdktf.stringToTerraform(this._organization),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_id: {
        value: cdktf.stringToHclTerraform(this._internalId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
