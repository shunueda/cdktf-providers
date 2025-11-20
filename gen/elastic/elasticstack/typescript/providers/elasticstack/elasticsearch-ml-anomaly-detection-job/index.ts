// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchMlAnomalyDetectionJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advanced configuration option. Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#allow_lazy_open ElasticsearchMlAnomalyDetectionJob#allow_lazy_open}
  */
  readonly allowLazyOpen?: boolean | cdktf.IResolvable;
  /**
  * Specifies how to analyze the data. After you create a job, you cannot change the analysis configuration; all the properties are informational.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#analysis_config ElasticsearchMlAnomalyDetectionJob#analysis_config}
  */
  readonly analysisConfig: ElasticsearchMlAnomalyDetectionJobAnalysisConfig;
  /**
  * Limits can be applied for the resources required to hold the mathematical models in memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#analysis_limits ElasticsearchMlAnomalyDetectionJob#analysis_limits}
  */
  readonly analysisLimits?: ElasticsearchMlAnomalyDetectionJobAnalysisLimits;
  /**
  * Advanced configuration option. The time between each periodic persistence of the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#background_persist_interval ElasticsearchMlAnomalyDetectionJob#background_persist_interval}
  */
  readonly backgroundPersistInterval?: string;
  /**
  * Advanced configuration option. Contains custom meta data about the job. For example, it can contain custom URL information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#custom_settings ElasticsearchMlAnomalyDetectionJob#custom_settings}
  */
  readonly customSettings?: string;
  /**
  * Advanced configuration option, which affects the automatic removal of old model snapshots for this job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#daily_model_snapshot_retention_after_days ElasticsearchMlAnomalyDetectionJob#daily_model_snapshot_retention_after_days}
  */
  readonly dailyModelSnapshotRetentionAfterDays?: number;
  /**
  * Defines the format of the input data when you send data to the job by using the post data API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#data_description ElasticsearchMlAnomalyDetectionJob#data_description}
  */
  readonly dataDescription: ElasticsearchMlAnomalyDetectionJobDataDescription;
  /**
  * A description of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#description ElasticsearchMlAnomalyDetectionJob#description}
  */
  readonly description?: string;
  /**
  * A set of job groups. A job can belong to no groups or many.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#groups ElasticsearchMlAnomalyDetectionJob#groups}
  */
  readonly groups?: string[];
  /**
  * The identifier for the anomaly detection job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#job_id ElasticsearchMlAnomalyDetectionJob#job_id}
  */
  readonly jobId: string;
  /**
  * This advanced configuration option stores model information along with the results. It provides a more detailed view into anomaly detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#model_plot_config ElasticsearchMlAnomalyDetectionJob#model_plot_config}
  */
  readonly modelPlotConfig?: ElasticsearchMlAnomalyDetectionJobModelPlotConfig;
  /**
  * Advanced configuration option, which affects the automatic removal of old model snapshots for this job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#model_snapshot_retention_days ElasticsearchMlAnomalyDetectionJob#model_snapshot_retention_days}
  */
  readonly modelSnapshotRetentionDays?: number;
  /**
  * Advanced configuration option. The period over which adjustments to the score are applied, as new data is seen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#renormalization_window_days ElasticsearchMlAnomalyDetectionJob#renormalization_window_days}
  */
  readonly renormalizationWindowDays?: number;
  /**
  * A text string that affects the name of the machine learning results index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#results_index_name ElasticsearchMlAnomalyDetectionJob#results_index_name}
  */
  readonly resultsIndexName?: string;
  /**
  * Advanced configuration option. The period of time (in days) that results are retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#results_retention_days ElasticsearchMlAnomalyDetectionJob#results_retention_days}
  */
  readonly resultsRetentionDays?: number;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#elasticsearch_connection ElasticsearchMlAnomalyDetectionJob#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchMlAnomalyDetectionJobElasticsearchConnection[] | cdktf.IResolvable;
}
export interface ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditions {
  /**
  * Specifies the result property to which the condition applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#applies_to ElasticsearchMlAnomalyDetectionJob#applies_to}
  */
  readonly appliesTo: string;
  /**
  * Specifies the condition operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#operator ElasticsearchMlAnomalyDetectionJob#operator}
  */
  readonly operator: string;
  /**
  * The value that is compared against the applies_to field using the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#value ElasticsearchMlAnomalyDetectionJob#value}
  */
  readonly value: number;
}

export function elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
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

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
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
      this._appliesTo = value.appliesTo;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // applies_to - computed: false, optional: false, required: true
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsOutputReference {
    return new ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRules {
  /**
  * The set of actions to be triggered when the rule applies. If more than one action is specified the effects of all actions are combined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#actions ElasticsearchMlAnomalyDetectionJob#actions}
  */
  readonly actions?: string[];
  /**
  * An array of numeric conditions when the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#conditions ElasticsearchMlAnomalyDetectionJob#conditions}
  */
  readonly conditions?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditions[] | cdktf.IResolvable;
}

export function elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    conditions: cdktf.listMapper(elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsToTerraform, false)(struct!.conditions),
  }
}


export function elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conditions: {
      value: cdktf.listMapperHcl(elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRules[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesOutputReference {
    return new ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectors {
  /**
  * The field used to split the data. In particular, this property is used for analyzing the splits with respect to their own history. It is used for finding unusual values in the context of the split.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#by_field_name ElasticsearchMlAnomalyDetectionJob#by_field_name}
  */
  readonly byFieldName?: string;
  /**
  * Custom rules enable you to customize the way detectors operate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#custom_rules ElasticsearchMlAnomalyDetectionJob#custom_rules}
  */
  readonly customRules?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRules[] | cdktf.IResolvable;
  /**
  * A description of the detector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#detector_description ElasticsearchMlAnomalyDetectionJob#detector_description}
  */
  readonly detectorDescription?: string;
  /**
  * Contains one of the following values: all, none, by, or over.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#exclude_frequent ElasticsearchMlAnomalyDetectionJob#exclude_frequent}
  */
  readonly excludeFrequent?: string;
  /**
  * The field that the detector function analyzes. Some functions require a field. Functions that don't require a field are count, rare, and freq_rare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#field_name ElasticsearchMlAnomalyDetectionJob#field_name}
  */
  readonly fieldName?: string;
  /**
  * The analysis function that is used. For example, count, rare, mean, min, max, sum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#function ElasticsearchMlAnomalyDetectionJob#function}
  */
  readonly function: string;
  /**
  * The field used to split the data. In particular, this property is used for analyzing the splits with respect to the history of all splits. It is used for finding unusual values in the population of all splits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#over_field_name ElasticsearchMlAnomalyDetectionJob#over_field_name}
  */
  readonly overFieldName?: string;
  /**
  * The field used to segment the analysis. When you use this property, you have completely independent baselines for each value of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#partition_field_name ElasticsearchMlAnomalyDetectionJob#partition_field_name}
  */
  readonly partitionFieldName?: string;
  /**
  * Defines whether a new series is used as the null series when there is no value for the by or partition fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#use_null ElasticsearchMlAnomalyDetectionJob#use_null}
  */
  readonly useNull?: boolean | cdktf.IResolvable;
}

export function elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by_field_name: cdktf.stringToTerraform(struct!.byFieldName),
    custom_rules: cdktf.listMapper(elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesToTerraform, false)(struct!.customRules),
    detector_description: cdktf.stringToTerraform(struct!.detectorDescription),
    exclude_frequent: cdktf.stringToTerraform(struct!.excludeFrequent),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    function: cdktf.stringToTerraform(struct!.function),
    over_field_name: cdktf.stringToTerraform(struct!.overFieldName),
    partition_field_name: cdktf.stringToTerraform(struct!.partitionFieldName),
    use_null: cdktf.booleanToTerraform(struct!.useNull),
  }
}


export function elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by_field_name: {
      value: cdktf.stringToHclTerraform(struct!.byFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_rules: {
      value: cdktf.listMapperHcl(elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesToHclTerraform, false)(struct!.customRules),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesList",
    },
    detector_description: {
      value: cdktf.stringToHclTerraform(struct!.detectorDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_frequent: {
      value: cdktf.stringToHclTerraform(struct!.excludeFrequent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    over_field_name: {
      value: cdktf.stringToHclTerraform(struct!.overFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_field_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_null: {
      value: cdktf.booleanToHclTerraform(struct!.useNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.byFieldName = this._byFieldName;
    }
    if (this._customRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRules = this._customRules?.internalValue;
    }
    if (this._detectorDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectorDescription = this._detectorDescription;
    }
    if (this._excludeFrequent !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFrequent = this._excludeFrequent;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._overFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overFieldName = this._overFieldName;
    }
    if (this._partitionFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionFieldName = this._partitionFieldName;
    }
    if (this._useNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNull = this._useNull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byFieldName = undefined;
      this._customRules.internalValue = undefined;
      this._detectorDescription = undefined;
      this._excludeFrequent = undefined;
      this._fieldName = undefined;
      this._function = undefined;
      this._overFieldName = undefined;
      this._partitionFieldName = undefined;
      this._useNull = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byFieldName = value.byFieldName;
      this._customRules.internalValue = value.customRules;
      this._detectorDescription = value.detectorDescription;
      this._excludeFrequent = value.excludeFrequent;
      this._fieldName = value.fieldName;
      this._function = value.function;
      this._overFieldName = value.overFieldName;
      this._partitionFieldName = value.partitionFieldName;
      this._useNull = value.useNull;
    }
  }

  // by_field_name - computed: false, optional: true, required: false
  private _byFieldName?: string; 
  public get byFieldName() {
    return this.getStringAttribute('by_field_name');
  }
  public set byFieldName(value: string) {
    this._byFieldName = value;
  }
  public resetByFieldName() {
    this._byFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byFieldNameInput() {
    return this._byFieldName;
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules = new ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsCustomRules[] | cdktf.IResolvable) {
    this._customRules.internalValue = value;
  }
  public resetCustomRules() {
    this._customRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules.internalValue;
  }

  // detector_description - computed: false, optional: true, required: false
  private _detectorDescription?: string; 
  public get detectorDescription() {
    return this.getStringAttribute('detector_description');
  }
  public set detectorDescription(value: string) {
    this._detectorDescription = value;
  }
  public resetDetectorDescription() {
    this._detectorDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorDescriptionInput() {
    return this._detectorDescription;
  }

  // exclude_frequent - computed: false, optional: true, required: false
  private _excludeFrequent?: string; 
  public get excludeFrequent() {
    return this.getStringAttribute('exclude_frequent');
  }
  public set excludeFrequent(value: string) {
    this._excludeFrequent = value;
  }
  public resetExcludeFrequent() {
    this._excludeFrequent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFrequentInput() {
    return this._excludeFrequent;
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // over_field_name - computed: false, optional: true, required: false
  private _overFieldName?: string; 
  public get overFieldName() {
    return this.getStringAttribute('over_field_name');
  }
  public set overFieldName(value: string) {
    this._overFieldName = value;
  }
  public resetOverFieldName() {
    this._overFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overFieldNameInput() {
    return this._overFieldName;
  }

  // partition_field_name - computed: false, optional: true, required: false
  private _partitionFieldName?: string; 
  public get partitionFieldName() {
    return this.getStringAttribute('partition_field_name');
  }
  public set partitionFieldName(value: string) {
    this._partitionFieldName = value;
  }
  public resetPartitionFieldName() {
    this._partitionFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionFieldNameInput() {
    return this._partitionFieldName;
  }

  // use_null - computed: true, optional: true, required: false
  private _useNull?: boolean | cdktf.IResolvable; 
  public get useNull() {
    return this.getBooleanAttribute('use_null');
  }
  public set useNull(value: boolean | cdktf.IResolvable) {
    this._useNull = value;
  }
  public resetUseNull() {
    this._useNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNullInput() {
    return this._useNull;
  }
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectors[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsOutputReference {
    return new ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorization {
  /**
  * To enable this setting, you must also set the partition_field_name property to the same value in every detector that uses the keyword mlcategory. Otherwise, job creation fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#enabled ElasticsearchMlAnomalyDetectionJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This setting can be set to true only if per-partition categorization is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#stop_on_warn ElasticsearchMlAnomalyDetectionJob#stop_on_warn}
  */
  readonly stopOnWarn?: boolean | cdktf.IResolvable;
}

export function elasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorizationToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    stop_on_warn: cdktf.booleanToTerraform(struct!.stopOnWarn),
  }
}


export function elasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorizationToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_on_warn: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnWarn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stopOnWarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnWarn = this._stopOnWarn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stopOnWarn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stopOnWarn = value.stopOnWarn;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // stop_on_warn - computed: false, optional: true, required: false
  private _stopOnWarn?: boolean | cdktf.IResolvable; 
  public get stopOnWarn() {
    return this.getBooleanAttribute('stop_on_warn');
  }
  public set stopOnWarn(value: boolean | cdktf.IResolvable) {
    this._stopOnWarn = value;
  }
  public resetStopOnWarn() {
    this._stopOnWarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnWarnInput() {
    return this._stopOnWarn;
  }
}
export interface ElasticsearchMlAnomalyDetectionJobAnalysisConfig {
  /**
  * The size of the interval that the analysis is aggregated into, typically between 15m and 1h. If the anomaly detector is expecting to see data at near real-time frequency, then the bucket_span should be set to a value around 10 times the time between ingested documents. For example, if data comes every second, bucket_span should be 10s; if data comes every 5 minutes, bucket_span should be 50m. For sparse or batch data, use larger bucket_span values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#bucket_span ElasticsearchMlAnomalyDetectionJob#bucket_span}
  */
  readonly bucketSpan?: string;
  /**
  * For categorization jobs only. The name of the field to categorize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#categorization_field_name ElasticsearchMlAnomalyDetectionJob#categorization_field_name}
  */
  readonly categorizationFieldName?: string;
  /**
  * For categorization jobs only. An array of regular expressions. A categorization message is matched against each regex in the order they are listed in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#categorization_filters ElasticsearchMlAnomalyDetectionJob#categorization_filters}
  */
  readonly categorizationFilters?: string[];
  /**
  * Detector configuration objects. Detectors identify the anomaly detection functions and the fields on which they operate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#detectors ElasticsearchMlAnomalyDetectionJob#detectors}
  */
  readonly detectors: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectors[] | cdktf.IResolvable;
  /**
  * A comma separated list of influencer field names. Typically these can be the by, over, or partition fields that are used in the detector configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#influencers ElasticsearchMlAnomalyDetectionJob#influencers}
  */
  readonly influencers?: string[];
  /**
  * The size of the window in which to expect data that is out of time order. If you specify a non-zero value, it must be greater than or equal to one second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#latency ElasticsearchMlAnomalyDetectionJob#latency}
  */
  readonly latency?: string;
  /**
  * Advanced configuration option. The time interval (in days) between pruning the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#model_prune_window ElasticsearchMlAnomalyDetectionJob#model_prune_window}
  */
  readonly modelPruneWindow?: string;
  /**
  * This functionality is reserved for internal use. It is not supported for use in customer environments and is not subject to the support SLA of official GA features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#multivariate_by_fields ElasticsearchMlAnomalyDetectionJob#multivariate_by_fields}
  */
  readonly multivariateByFields?: boolean | cdktf.IResolvable;
  /**
  * Settings related to how categorization interacts with partition fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#per_partition_categorization ElasticsearchMlAnomalyDetectionJob#per_partition_categorization}
  */
  readonly perPartitionCategorization?: ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorization;
  /**
  * If this property is specified, the data that is fed to the job is expected to be pre-summarized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#summary_count_field_name ElasticsearchMlAnomalyDetectionJob#summary_count_field_name}
  */
  readonly summaryCountFieldName?: string;
}

export function elasticsearchMlAnomalyDetectionJobAnalysisConfigToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_span: cdktf.stringToTerraform(struct!.bucketSpan),
    categorization_field_name: cdktf.stringToTerraform(struct!.categorizationFieldName),
    categorization_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categorizationFilters),
    detectors: cdktf.listMapper(elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsToTerraform, false)(struct!.detectors),
    influencers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.influencers),
    latency: cdktf.stringToTerraform(struct!.latency),
    model_prune_window: cdktf.stringToTerraform(struct!.modelPruneWindow),
    multivariate_by_fields: cdktf.booleanToTerraform(struct!.multivariateByFields),
    per_partition_categorization: elasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorizationToTerraform(struct!.perPartitionCategorization),
    summary_count_field_name: cdktf.stringToTerraform(struct!.summaryCountFieldName),
  }
}


export function elasticsearchMlAnomalyDetectionJobAnalysisConfigToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_span: {
      value: cdktf.stringToHclTerraform(struct!.bucketSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    categorization_field_name: {
      value: cdktf.stringToHclTerraform(struct!.categorizationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    categorization_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categorizationFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    detectors: {
      value: cdktf.listMapperHcl(elasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsToHclTerraform, false)(struct!.detectors),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsList",
    },
    influencers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.influencers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    latency: {
      value: cdktf.stringToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_prune_window: {
      value: cdktf.stringToHclTerraform(struct!.modelPruneWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multivariate_by_fields: {
      value: cdktf.booleanToHclTerraform(struct!.multivariateByFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_partition_categorization: {
      value: elasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorizationToHclTerraform(struct!.perPartitionCategorization),
      isBlock: true,
      type: "struct",
      storageClassType: "ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorization",
    },
    summary_count_field_name: {
      value: cdktf.stringToHclTerraform(struct!.summaryCountFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobAnalysisConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSpan = this._bucketSpan;
    }
    if (this._categorizationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorizationFieldName = this._categorizationFieldName;
    }
    if (this._categorizationFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorizationFilters = this._categorizationFilters;
    }
    if (this._detectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectors = this._detectors?.internalValue;
    }
    if (this._influencers !== undefined) {
      hasAnyValues = true;
      internalValueResult.influencers = this._influencers;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._modelPruneWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPruneWindow = this._modelPruneWindow;
    }
    if (this._multivariateByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.multivariateByFields = this._multivariateByFields;
    }
    if (this._perPartitionCategorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPartitionCategorization = this._perPartitionCategorization?.internalValue;
    }
    if (this._summaryCountFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryCountFieldName = this._summaryCountFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketSpan = undefined;
      this._categorizationFieldName = undefined;
      this._categorizationFilters = undefined;
      this._detectors.internalValue = undefined;
      this._influencers = undefined;
      this._latency = undefined;
      this._modelPruneWindow = undefined;
      this._multivariateByFields = undefined;
      this._perPartitionCategorization.internalValue = undefined;
      this._summaryCountFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketSpan = value.bucketSpan;
      this._categorizationFieldName = value.categorizationFieldName;
      this._categorizationFilters = value.categorizationFilters;
      this._detectors.internalValue = value.detectors;
      this._influencers = value.influencers;
      this._latency = value.latency;
      this._modelPruneWindow = value.modelPruneWindow;
      this._multivariateByFields = value.multivariateByFields;
      this._perPartitionCategorization.internalValue = value.perPartitionCategorization;
      this._summaryCountFieldName = value.summaryCountFieldName;
    }
  }

  // bucket_span - computed: true, optional: true, required: false
  private _bucketSpan?: string; 
  public get bucketSpan() {
    return this.getStringAttribute('bucket_span');
  }
  public set bucketSpan(value: string) {
    this._bucketSpan = value;
  }
  public resetBucketSpan() {
    this._bucketSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSpanInput() {
    return this._bucketSpan;
  }

  // categorization_field_name - computed: false, optional: true, required: false
  private _categorizationFieldName?: string; 
  public get categorizationFieldName() {
    return this.getStringAttribute('categorization_field_name');
  }
  public set categorizationFieldName(value: string) {
    this._categorizationFieldName = value;
  }
  public resetCategorizationFieldName() {
    this._categorizationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorizationFieldNameInput() {
    return this._categorizationFieldName;
  }

  // categorization_filters - computed: false, optional: true, required: false
  private _categorizationFilters?: string[]; 
  public get categorizationFilters() {
    return this.getListAttribute('categorization_filters');
  }
  public set categorizationFilters(value: string[]) {
    this._categorizationFilters = value;
  }
  public resetCategorizationFilters() {
    this._categorizationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorizationFiltersInput() {
    return this._categorizationFilters;
  }

  // detectors - computed: false, optional: false, required: true
  private _detectors = new ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectorsList(this, "detectors", false);
  public get detectors() {
    return this._detectors;
  }
  public putDetectors(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfigDetectors[] | cdktf.IResolvable) {
    this._detectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorsInput() {
    return this._detectors.internalValue;
  }

  // influencers - computed: false, optional: true, required: false
  private _influencers?: string[]; 
  public get influencers() {
    return this.getListAttribute('influencers');
  }
  public set influencers(value: string[]) {
    this._influencers = value;
  }
  public resetInfluencers() {
    this._influencers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influencersInput() {
    return this._influencers;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: string; 
  public get latency() {
    return this.getStringAttribute('latency');
  }
  public set latency(value: string) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // model_prune_window - computed: true, optional: true, required: false
  private _modelPruneWindow?: string; 
  public get modelPruneWindow() {
    return this.getStringAttribute('model_prune_window');
  }
  public set modelPruneWindow(value: string) {
    this._modelPruneWindow = value;
  }
  public resetModelPruneWindow() {
    this._modelPruneWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPruneWindowInput() {
    return this._modelPruneWindow;
  }

  // multivariate_by_fields - computed: false, optional: true, required: false
  private _multivariateByFields?: boolean | cdktf.IResolvable; 
  public get multivariateByFields() {
    return this.getBooleanAttribute('multivariate_by_fields');
  }
  public set multivariateByFields(value: boolean | cdktf.IResolvable) {
    this._multivariateByFields = value;
  }
  public resetMultivariateByFields() {
    this._multivariateByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multivariateByFieldsInput() {
    return this._multivariateByFields;
  }

  // per_partition_categorization - computed: false, optional: true, required: false
  private _perPartitionCategorization = new ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorizationOutputReference(this, "per_partition_categorization");
  public get perPartitionCategorization() {
    return this._perPartitionCategorization;
  }
  public putPerPartitionCategorization(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfigPerPartitionCategorization) {
    this._perPartitionCategorization.internalValue = value;
  }
  public resetPerPartitionCategorization() {
    this._perPartitionCategorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPartitionCategorizationInput() {
    return this._perPartitionCategorization.internalValue;
  }

  // summary_count_field_name - computed: false, optional: true, required: false
  private _summaryCountFieldName?: string; 
  public get summaryCountFieldName() {
    return this.getStringAttribute('summary_count_field_name');
  }
  public set summaryCountFieldName(value: string) {
    this._summaryCountFieldName = value;
  }
  public resetSummaryCountFieldName() {
    this._summaryCountFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryCountFieldNameInput() {
    return this._summaryCountFieldName;
  }
}
export interface ElasticsearchMlAnomalyDetectionJobAnalysisLimits {
  /**
  * The maximum number of examples stored per category in memory and in the results data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#categorization_examples_limit ElasticsearchMlAnomalyDetectionJob#categorization_examples_limit}
  */
  readonly categorizationExamplesLimit?: number;
  /**
  * The approximate maximum amount of memory resources that are required for analytical processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#model_memory_limit ElasticsearchMlAnomalyDetectionJob#model_memory_limit}
  */
  readonly modelMemoryLimit?: string;
}

export function elasticsearchMlAnomalyDetectionJobAnalysisLimitsToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorization_examples_limit: cdktf.numberToTerraform(struct!.categorizationExamplesLimit),
    model_memory_limit: cdktf.stringToTerraform(struct!.modelMemoryLimit),
  }
}


export function elasticsearchMlAnomalyDetectionJobAnalysisLimitsToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobAnalysisLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categorization_examples_limit: {
      value: cdktf.numberToHclTerraform(struct!.categorizationExamplesLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.modelMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlAnomalyDetectionJobAnalysisLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobAnalysisLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categorizationExamplesLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorizationExamplesLimit = this._categorizationExamplesLimit;
    }
    if (this._modelMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelMemoryLimit = this._modelMemoryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobAnalysisLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categorizationExamplesLimit = undefined;
      this._modelMemoryLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categorizationExamplesLimit = value.categorizationExamplesLimit;
      this._modelMemoryLimit = value.modelMemoryLimit;
    }
  }

  // categorization_examples_limit - computed: true, optional: true, required: false
  private _categorizationExamplesLimit?: number; 
  public get categorizationExamplesLimit() {
    return this.getNumberAttribute('categorization_examples_limit');
  }
  public set categorizationExamplesLimit(value: number) {
    this._categorizationExamplesLimit = value;
  }
  public resetCategorizationExamplesLimit() {
    this._categorizationExamplesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorizationExamplesLimitInput() {
    return this._categorizationExamplesLimit;
  }

  // model_memory_limit - computed: true, optional: true, required: false
  private _modelMemoryLimit?: string; 
  public get modelMemoryLimit() {
    return this.getStringAttribute('model_memory_limit');
  }
  public set modelMemoryLimit(value: string) {
    this._modelMemoryLimit = value;
  }
  public resetModelMemoryLimit() {
    this._modelMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelMemoryLimitInput() {
    return this._modelMemoryLimit;
  }
}
export interface ElasticsearchMlAnomalyDetectionJobDataDescription {
  /**
  * The name of the field that contains the timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#time_field ElasticsearchMlAnomalyDetectionJob#time_field}
  */
  readonly timeField?: string;
  /**
  * The time format, which can be epoch, epoch_ms, or a custom pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#time_format ElasticsearchMlAnomalyDetectionJob#time_format}
  */
  readonly timeFormat?: string;
}

export function elasticsearchMlAnomalyDetectionJobDataDescriptionToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobDataDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_field: cdktf.stringToTerraform(struct!.timeField),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
  }
}


export function elasticsearchMlAnomalyDetectionJobDataDescriptionToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobDataDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_field: {
      value: cdktf.stringToHclTerraform(struct!.timeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlAnomalyDetectionJobDataDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobDataDescription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeField = this._timeField;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobDataDescription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeField = undefined;
      this._timeFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeField = value.timeField;
      this._timeFormat = value.timeFormat;
    }
  }

  // time_field - computed: false, optional: true, required: false
  private _timeField?: string; 
  public get timeField() {
    return this.getStringAttribute('time_field');
  }
  public set timeField(value: string) {
    this._timeField = value;
  }
  public resetTimeField() {
    this._timeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFieldInput() {
    return this._timeField;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }
}
export interface ElasticsearchMlAnomalyDetectionJobModelPlotConfig {
  /**
  * If true, enables calculation and storage of the model change annotations for each entity that is being analyzed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#annotations_enabled ElasticsearchMlAnomalyDetectionJob#annotations_enabled}
  */
  readonly annotationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, enables calculation and storage of the model bounds for each entity that is being analyzed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#enabled ElasticsearchMlAnomalyDetectionJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Limits data collection to this comma separated list of partition or by field values. If terms are not specified or it is an empty string, no filtering is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#terms ElasticsearchMlAnomalyDetectionJob#terms}
  */
  readonly terms?: string;
}

export function elasticsearchMlAnomalyDetectionJobModelPlotConfigToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobModelPlotConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations_enabled: cdktf.booleanToTerraform(struct!.annotationsEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    terms: cdktf.stringToTerraform(struct!.terms),
  }
}


export function elasticsearchMlAnomalyDetectionJobModelPlotConfigToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobModelPlotConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.annotationsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terms: {
      value: cdktf.stringToHclTerraform(struct!.terms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlAnomalyDetectionJobModelPlotConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobModelPlotConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationsEnabled = this._annotationsEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._terms !== undefined) {
      hasAnyValues = true;
      internalValueResult.terms = this._terms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobModelPlotConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationsEnabled = undefined;
      this._enabled = undefined;
      this._terms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationsEnabled = value.annotationsEnabled;
      this._enabled = value.enabled;
      this._terms = value.terms;
    }
  }

  // annotations_enabled - computed: true, optional: true, required: false
  private _annotationsEnabled?: boolean | cdktf.IResolvable; 
  public get annotationsEnabled() {
    return this.getBooleanAttribute('annotations_enabled');
  }
  public set annotationsEnabled(value: boolean | cdktf.IResolvable) {
    this._annotationsEnabled = value;
  }
  public resetAnnotationsEnabled() {
    this._annotationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsEnabledInput() {
    return this._annotationsEnabled;
  }

  // enabled - computed: true, optional: true, required: false
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

  // terms - computed: false, optional: true, required: false
  private _terms?: string; 
  public get terms() {
    return this.getStringAttribute('terms');
  }
  public set terms(value: string) {
    this._terms = value;
  }
  public resetTerms() {
    this._terms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms;
  }
}
export interface ElasticsearchMlAnomalyDetectionJobElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#api_key ElasticsearchMlAnomalyDetectionJob#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#bearer_token ElasticsearchMlAnomalyDetectionJob#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#ca_data ElasticsearchMlAnomalyDetectionJob#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#ca_file ElasticsearchMlAnomalyDetectionJob#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#cert_data ElasticsearchMlAnomalyDetectionJob#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#cert_file ElasticsearchMlAnomalyDetectionJob#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#endpoints ElasticsearchMlAnomalyDetectionJob#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#es_client_authentication ElasticsearchMlAnomalyDetectionJob#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#headers ElasticsearchMlAnomalyDetectionJob#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#insecure ElasticsearchMlAnomalyDetectionJob#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#key_data ElasticsearchMlAnomalyDetectionJob#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#key_file ElasticsearchMlAnomalyDetectionJob#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#password ElasticsearchMlAnomalyDetectionJob#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#username ElasticsearchMlAnomalyDetectionJob#username}
  */
  readonly username?: string;
}

export function elasticsearchMlAnomalyDetectionJobElasticsearchConnectionToTerraform(struct?: ElasticsearchMlAnomalyDetectionJobElasticsearchConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    ca_data: cdktf.stringToTerraform(struct!.caData),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    es_client_authentication: cdktf.stringToTerraform(struct!.esClientAuthentication),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function elasticsearchMlAnomalyDetectionJobElasticsearchConnectionToHclTerraform(struct?: ElasticsearchMlAnomalyDetectionJobElasticsearchConnection | cdktf.IResolvable): any {
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
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_data: {
      value: cdktf.stringToHclTerraform(struct!.caData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    es_client_authentication: {
      value: cdktf.stringToHclTerraform(struct!.esClientAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class ElasticsearchMlAnomalyDetectionJobElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchMlAnomalyDetectionJobElasticsearchConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._caData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caData = this._caData;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._esClientAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.esClientAuthentication = this._esClientAuthentication;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlAnomalyDetectionJobElasticsearchConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._bearerToken = undefined;
      this._caData = undefined;
      this._caFile = undefined;
      this._certData = undefined;
      this._certFile = undefined;
      this._endpoints = undefined;
      this._esClientAuthentication = undefined;
      this._headers = undefined;
      this._insecure = undefined;
      this._keyData = undefined;
      this._keyFile = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._bearerToken = value.bearerToken;
      this._caData = value.caData;
      this._caFile = value.caFile;
      this._certData = value.certData;
      this._certFile = value.certFile;
      this._endpoints = value.endpoints;
      this._esClientAuthentication = value.esClientAuthentication;
      this._headers = value.headers;
      this._insecure = value.insecure;
      this._keyData = value.keyData;
      this._keyFile = value.keyFile;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // ca_data - computed: false, optional: true, required: false
  private _caData?: string; 
  public get caData() {
    return this.getStringAttribute('ca_data');
  }
  public set caData(value: string) {
    this._caData = value;
  }
  public resetCaData() {
    this._caData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDataInput() {
    return this._caData;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // es_client_authentication - computed: false, optional: true, required: false
  private _esClientAuthentication?: string; 
  public get esClientAuthentication() {
    return this.getStringAttribute('es_client_authentication');
  }
  public set esClientAuthentication(value: string) {
    this._esClientAuthentication = value;
  }
  public resetEsClientAuthentication() {
    this._esClientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esClientAuthenticationInput() {
    return this._esClientAuthentication;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

export class ElasticsearchMlAnomalyDetectionJobElasticsearchConnectionList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchMlAnomalyDetectionJobElasticsearchConnection[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchMlAnomalyDetectionJobElasticsearchConnectionOutputReference {
    return new ElasticsearchMlAnomalyDetectionJobElasticsearchConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job elasticstack_elasticsearch_ml_anomaly_detection_job}
*/
export class ElasticsearchMlAnomalyDetectionJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ml_anomaly_detection_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchMlAnomalyDetectionJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchMlAnomalyDetectionJob to import
  * @param importFromId The id of the existing ElasticsearchMlAnomalyDetectionJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchMlAnomalyDetectionJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ml_anomaly_detection_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_ml_anomaly_detection_job elasticstack_elasticsearch_ml_anomaly_detection_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchMlAnomalyDetectionJobConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchMlAnomalyDetectionJobConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ml_anomaly_detection_job',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowLazyOpen = config.allowLazyOpen;
    this._analysisConfig.internalValue = config.analysisConfig;
    this._analysisLimits.internalValue = config.analysisLimits;
    this._backgroundPersistInterval = config.backgroundPersistInterval;
    this._customSettings = config.customSettings;
    this._dailyModelSnapshotRetentionAfterDays = config.dailyModelSnapshotRetentionAfterDays;
    this._dataDescription.internalValue = config.dataDescription;
    this._description = config.description;
    this._groups = config.groups;
    this._jobId = config.jobId;
    this._modelPlotConfig.internalValue = config.modelPlotConfig;
    this._modelSnapshotRetentionDays = config.modelSnapshotRetentionDays;
    this._renormalizationWindowDays = config.renormalizationWindowDays;
    this._resultsIndexName = config.resultsIndexName;
    this._resultsRetentionDays = config.resultsRetentionDays;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_lazy_open - computed: true, optional: true, required: false
  private _allowLazyOpen?: boolean | cdktf.IResolvable; 
  public get allowLazyOpen() {
    return this.getBooleanAttribute('allow_lazy_open');
  }
  public set allowLazyOpen(value: boolean | cdktf.IResolvable) {
    this._allowLazyOpen = value;
  }
  public resetAllowLazyOpen() {
    this._allowLazyOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLazyOpenInput() {
    return this._allowLazyOpen;
  }

  // analysis_config - computed: false, optional: false, required: true
  private _analysisConfig = new ElasticsearchMlAnomalyDetectionJobAnalysisConfigOutputReference(this, "analysis_config");
  public get analysisConfig() {
    return this._analysisConfig;
  }
  public putAnalysisConfig(value: ElasticsearchMlAnomalyDetectionJobAnalysisConfig) {
    this._analysisConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisConfigInput() {
    return this._analysisConfig.internalValue;
  }

  // analysis_limits - computed: true, optional: true, required: false
  private _analysisLimits = new ElasticsearchMlAnomalyDetectionJobAnalysisLimitsOutputReference(this, "analysis_limits");
  public get analysisLimits() {
    return this._analysisLimits;
  }
  public putAnalysisLimits(value: ElasticsearchMlAnomalyDetectionJobAnalysisLimits) {
    this._analysisLimits.internalValue = value;
  }
  public resetAnalysisLimits() {
    this._analysisLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisLimitsInput() {
    return this._analysisLimits.internalValue;
  }

  // background_persist_interval - computed: false, optional: true, required: false
  private _backgroundPersistInterval?: string; 
  public get backgroundPersistInterval() {
    return this.getStringAttribute('background_persist_interval');
  }
  public set backgroundPersistInterval(value: string) {
    this._backgroundPersistInterval = value;
  }
  public resetBackgroundPersistInterval() {
    this._backgroundPersistInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundPersistIntervalInput() {
    return this._backgroundPersistInterval;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_settings - computed: false, optional: true, required: false
  private _customSettings?: string; 
  public get customSettings() {
    return this.getStringAttribute('custom_settings');
  }
  public set customSettings(value: string) {
    this._customSettings = value;
  }
  public resetCustomSettings() {
    this._customSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsInput() {
    return this._customSettings;
  }

  // daily_model_snapshot_retention_after_days - computed: true, optional: true, required: false
  private _dailyModelSnapshotRetentionAfterDays?: number; 
  public get dailyModelSnapshotRetentionAfterDays() {
    return this.getNumberAttribute('daily_model_snapshot_retention_after_days');
  }
  public set dailyModelSnapshotRetentionAfterDays(value: number) {
    this._dailyModelSnapshotRetentionAfterDays = value;
  }
  public resetDailyModelSnapshotRetentionAfterDays() {
    this._dailyModelSnapshotRetentionAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyModelSnapshotRetentionAfterDaysInput() {
    return this._dailyModelSnapshotRetentionAfterDays;
  }

  // data_description - computed: false, optional: false, required: true
  private _dataDescription = new ElasticsearchMlAnomalyDetectionJobDataDescriptionOutputReference(this, "data_description");
  public get dataDescription() {
    return this._dataDescription;
  }
  public putDataDescription(value: ElasticsearchMlAnomalyDetectionJobDataDescription) {
    this._dataDescription.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDescriptionInput() {
    return this._dataDescription.internalValue;
  }

  // description - computed: false, optional: true, required: false
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // job_version - computed: true, optional: false, required: false
  public get jobVersion() {
    return this.getStringAttribute('job_version');
  }

  // model_plot_config - computed: false, optional: true, required: false
  private _modelPlotConfig = new ElasticsearchMlAnomalyDetectionJobModelPlotConfigOutputReference(this, "model_plot_config");
  public get modelPlotConfig() {
    return this._modelPlotConfig;
  }
  public putModelPlotConfig(value: ElasticsearchMlAnomalyDetectionJobModelPlotConfig) {
    this._modelPlotConfig.internalValue = value;
  }
  public resetModelPlotConfig() {
    this._modelPlotConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPlotConfigInput() {
    return this._modelPlotConfig.internalValue;
  }

  // model_snapshot_id - computed: true, optional: false, required: false
  public get modelSnapshotId() {
    return this.getStringAttribute('model_snapshot_id');
  }

  // model_snapshot_retention_days - computed: true, optional: true, required: false
  private _modelSnapshotRetentionDays?: number; 
  public get modelSnapshotRetentionDays() {
    return this.getNumberAttribute('model_snapshot_retention_days');
  }
  public set modelSnapshotRetentionDays(value: number) {
    this._modelSnapshotRetentionDays = value;
  }
  public resetModelSnapshotRetentionDays() {
    this._modelSnapshotRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSnapshotRetentionDaysInput() {
    return this._modelSnapshotRetentionDays;
  }

  // renormalization_window_days - computed: false, optional: true, required: false
  private _renormalizationWindowDays?: number; 
  public get renormalizationWindowDays() {
    return this.getNumberAttribute('renormalization_window_days');
  }
  public set renormalizationWindowDays(value: number) {
    this._renormalizationWindowDays = value;
  }
  public resetRenormalizationWindowDays() {
    this._renormalizationWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renormalizationWindowDaysInput() {
    return this._renormalizationWindowDays;
  }

  // results_index_name - computed: true, optional: true, required: false
  private _resultsIndexName?: string; 
  public get resultsIndexName() {
    return this.getStringAttribute('results_index_name');
  }
  public set resultsIndexName(value: string) {
    this._resultsIndexName = value;
  }
  public resetResultsIndexName() {
    this._resultsIndexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsIndexNameInput() {
    return this._resultsIndexName;
  }

  // results_retention_days - computed: false, optional: true, required: false
  private _resultsRetentionDays?: number; 
  public get resultsRetentionDays() {
    return this.getNumberAttribute('results_retention_days');
  }
  public set resultsRetentionDays(value: number) {
    this._resultsRetentionDays = value;
  }
  public resetResultsRetentionDays() {
    this._resultsRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsRetentionDaysInput() {
    return this._resultsRetentionDays;
  }

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchMlAnomalyDetectionJobElasticsearchConnectionList(this, "elasticsearch_connection", false);
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchMlAnomalyDetectionJobElasticsearchConnection[] | cdktf.IResolvable) {
    this._elasticsearchConnection.internalValue = value;
  }
  public resetElasticsearchConnection() {
    this._elasticsearchConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectionInput() {
    return this._elasticsearchConnection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_lazy_open: cdktf.booleanToTerraform(this._allowLazyOpen),
      analysis_config: elasticsearchMlAnomalyDetectionJobAnalysisConfigToTerraform(this._analysisConfig.internalValue),
      analysis_limits: elasticsearchMlAnomalyDetectionJobAnalysisLimitsToTerraform(this._analysisLimits.internalValue),
      background_persist_interval: cdktf.stringToTerraform(this._backgroundPersistInterval),
      custom_settings: cdktf.stringToTerraform(this._customSettings),
      daily_model_snapshot_retention_after_days: cdktf.numberToTerraform(this._dailyModelSnapshotRetentionAfterDays),
      data_description: elasticsearchMlAnomalyDetectionJobDataDescriptionToTerraform(this._dataDescription.internalValue),
      description: cdktf.stringToTerraform(this._description),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      job_id: cdktf.stringToTerraform(this._jobId),
      model_plot_config: elasticsearchMlAnomalyDetectionJobModelPlotConfigToTerraform(this._modelPlotConfig.internalValue),
      model_snapshot_retention_days: cdktf.numberToTerraform(this._modelSnapshotRetentionDays),
      renormalization_window_days: cdktf.numberToTerraform(this._renormalizationWindowDays),
      results_index_name: cdktf.stringToTerraform(this._resultsIndexName),
      results_retention_days: cdktf.numberToTerraform(this._resultsRetentionDays),
      elasticsearch_connection: cdktf.listMapper(elasticsearchMlAnomalyDetectionJobElasticsearchConnectionToTerraform, true)(this._elasticsearchConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_lazy_open: {
        value: cdktf.booleanToHclTerraform(this._allowLazyOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      analysis_config: {
        value: elasticsearchMlAnomalyDetectionJobAnalysisConfigToHclTerraform(this._analysisConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchMlAnomalyDetectionJobAnalysisConfig",
      },
      analysis_limits: {
        value: elasticsearchMlAnomalyDetectionJobAnalysisLimitsToHclTerraform(this._analysisLimits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchMlAnomalyDetectionJobAnalysisLimits",
      },
      background_persist_interval: {
        value: cdktf.stringToHclTerraform(this._backgroundPersistInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_settings: {
        value: cdktf.stringToHclTerraform(this._customSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_model_snapshot_retention_after_days: {
        value: cdktf.numberToHclTerraform(this._dailyModelSnapshotRetentionAfterDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_description: {
        value: elasticsearchMlAnomalyDetectionJobDataDescriptionToHclTerraform(this._dataDescription.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchMlAnomalyDetectionJobDataDescription",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_plot_config: {
        value: elasticsearchMlAnomalyDetectionJobModelPlotConfigToHclTerraform(this._modelPlotConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchMlAnomalyDetectionJobModelPlotConfig",
      },
      model_snapshot_retention_days: {
        value: cdktf.numberToHclTerraform(this._modelSnapshotRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renormalization_window_days: {
        value: cdktf.numberToHclTerraform(this._renormalizationWindowDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      results_index_name: {
        value: cdktf.stringToHclTerraform(this._resultsIndexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      results_retention_days: {
        value: cdktf.numberToHclTerraform(this._resultsRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elasticsearch_connection: {
        value: cdktf.listMapperHcl(elasticsearchMlAnomalyDetectionJobElasticsearchConnectionToHclTerraform, true)(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchMlAnomalyDetectionJobElasticsearchConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
