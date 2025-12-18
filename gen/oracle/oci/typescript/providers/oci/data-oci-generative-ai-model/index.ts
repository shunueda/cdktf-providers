// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_model#model_id DataOciGenerativeAiModel#model_id}
  */
  readonly modelId: string;
}
export interface DataOciGenerativeAiModelFineTuneDetailsTrainingConfig {
}

export function dataOciGenerativeAiModelFineTuneDetailsTrainingConfigToTerraform(struct?: DataOciGenerativeAiModelFineTuneDetailsTrainingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiModelFineTuneDetailsTrainingConfigToHclTerraform(struct?: DataOciGenerativeAiModelFineTuneDetailsTrainingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiModelFineTuneDetailsTrainingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiModelFineTuneDetailsTrainingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // early_stopping_patience - computed: true, optional: false, required: false
  public get earlyStoppingPatience() {
    return this.getNumberAttribute('early_stopping_patience');
  }

  // early_stopping_threshold - computed: true, optional: false, required: false
  public get earlyStoppingThreshold() {
    return this.getNumberAttribute('early_stopping_threshold');
  }

  // learning_rate - computed: true, optional: false, required: false
  public get learningRate() {
    return this.getNumberAttribute('learning_rate');
  }

  // log_model_metrics_interval_in_steps - computed: true, optional: false, required: false
  public get logModelMetricsIntervalInSteps() {
    return this.getNumberAttribute('log_model_metrics_interval_in_steps');
  }

  // lora_alpha - computed: true, optional: false, required: false
  public get loraAlpha() {
    return this.getNumberAttribute('lora_alpha');
  }

  // lora_dropout - computed: true, optional: false, required: false
  public get loraDropout() {
    return this.getNumberAttribute('lora_dropout');
  }

  // lora_r - computed: true, optional: false, required: false
  public get loraR() {
    return this.getNumberAttribute('lora_r');
  }

  // num_of_last_layers - computed: true, optional: false, required: false
  public get numOfLastLayers() {
    return this.getNumberAttribute('num_of_last_layers');
  }

  // total_training_epochs - computed: true, optional: false, required: false
  public get totalTrainingEpochs() {
    return this.getNumberAttribute('total_training_epochs');
  }

  // training_batch_size - computed: true, optional: false, required: false
  public get trainingBatchSize() {
    return this.getNumberAttribute('training_batch_size');
  }

  // training_config_type - computed: true, optional: false, required: false
  public get trainingConfigType() {
    return this.getStringAttribute('training_config_type');
  }
}

export class DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference {
    return new DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiModelFineTuneDetailsTrainingDataset {
}

export function dataOciGenerativeAiModelFineTuneDetailsTrainingDatasetToTerraform(struct?: DataOciGenerativeAiModelFineTuneDetailsTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiModelFineTuneDetailsTrainingDatasetToHclTerraform(struct?: DataOciGenerativeAiModelFineTuneDetailsTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiModelFineTuneDetailsTrainingDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiModelFineTuneDetailsTrainingDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // dataset_type - computed: true, optional: false, required: false
  public get datasetType() {
    return this.getStringAttribute('dataset_type');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference {
    return new DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiModelFineTuneDetails {
}

export function dataOciGenerativeAiModelFineTuneDetailsToTerraform(struct?: DataOciGenerativeAiModelFineTuneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiModelFineTuneDetailsToHclTerraform(struct?: DataOciGenerativeAiModelFineTuneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiModelFineTuneDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiModelFineTuneDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiModelFineTuneDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dedicated_ai_cluster_id - computed: true, optional: false, required: false
  public get dedicatedAiClusterId() {
    return this.getStringAttribute('dedicated_ai_cluster_id');
  }

  // training_config - computed: true, optional: false, required: false
  private _trainingConfig = new DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList(this, "training_config", false);
  public get trainingConfig() {
    return this._trainingConfig;
  }

  // training_dataset - computed: true, optional: false, required: false
  private _trainingDataset = new DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList(this, "training_dataset", false);
  public get trainingDataset() {
    return this._trainingDataset;
  }
}

export class DataOciGenerativeAiModelFineTuneDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiModelFineTuneDetailsOutputReference {
    return new DataOciGenerativeAiModelFineTuneDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiModelModelMetrics {
}

export function dataOciGenerativeAiModelModelMetricsToTerraform(struct?: DataOciGenerativeAiModelModelMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiModelModelMetricsToHclTerraform(struct?: DataOciGenerativeAiModelModelMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiModelModelMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiModelModelMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiModelModelMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // final_accuracy - computed: true, optional: false, required: false
  public get finalAccuracy() {
    return this.getNumberAttribute('final_accuracy');
  }

  // final_loss - computed: true, optional: false, required: false
  public get finalLoss() {
    return this.getNumberAttribute('final_loss');
  }

  // model_metrics_type - computed: true, optional: false, required: false
  public get modelMetricsType() {
    return this.getStringAttribute('model_metrics_type');
  }
}

export class DataOciGenerativeAiModelModelMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiModelModelMetricsOutputReference {
    return new DataOciGenerativeAiModelModelMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_model oci_generative_ai_model}
*/
export class DataOciGenerativeAiModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGenerativeAiModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGenerativeAiModel to import
  * @param importFromId The id of the existing DataOciGenerativeAiModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGenerativeAiModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_model oci_generative_ai_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_model',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._modelId = config.modelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_model_id - computed: true, optional: false, required: false
  public get baseModelId() {
    return this.getStringAttribute('base_model_id');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fine_tune_details - computed: true, optional: false, required: false
  private _fineTuneDetails = new DataOciGenerativeAiModelFineTuneDetailsList(this, "fine_tune_details", false);
  public get fineTuneDetails() {
    return this._fineTuneDetails;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_long_term_supported - computed: true, optional: false, required: false
  public get isLongTermSupported() {
    return this.getBooleanAttribute('is_long_term_supported');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // model_metrics - computed: true, optional: false, required: false
  private _modelMetrics = new DataOciGenerativeAiModelModelMetricsList(this, "model_metrics", false);
  public get modelMetrics() {
    return this._modelMetrics;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_deprecated - computed: true, optional: false, required: false
  public get timeDeprecated() {
    return this.getStringAttribute('time_deprecated');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_id: cdktf.stringToTerraform(this._modelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
