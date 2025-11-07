// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenerativeAiModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}
  */
  readonly baseModelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}
  */
  readonly vendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}
  */
  readonly version?: string;
  /**
  * fine_tune_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#fine_tune_details GenerativeAiModel#fine_tune_details}
  */
  readonly fineTuneDetails: GenerativeAiModelFineTuneDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#timeouts GenerativeAiModel#timeouts}
  */
  readonly timeouts?: GenerativeAiModelTimeouts;
}
export interface GenerativeAiModelModelMetrics {
}

export function generativeAiModelModelMetricsToTerraform(struct?: GenerativeAiModelModelMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function generativeAiModelModelMetricsToHclTerraform(struct?: GenerativeAiModelModelMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GenerativeAiModelModelMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenerativeAiModelModelMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiModelModelMetrics | undefined) {
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

export class GenerativeAiModelModelMetricsList extends cdktf.ComplexList {

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
  public get(index: number): GenerativeAiModelModelMetricsOutputReference {
    return new GenerativeAiModelModelMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenerativeAiModelFineTuneDetailsTrainingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}
  */
  readonly earlyStoppingPatience?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}
  */
  readonly earlyStoppingThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}
  */
  readonly learningRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}
  */
  readonly logModelMetricsIntervalInSteps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}
  */
  readonly loraAlpha?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}
  */
  readonly loraDropout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}
  */
  readonly loraR?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}
  */
  readonly numOfLastLayers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}
  */
  readonly totalTrainingEpochs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}
  */
  readonly trainingBatchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}
  */
  readonly trainingConfigType: string;
}

export function generativeAiModelFineTuneDetailsTrainingConfigToTerraform(struct?: GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference | GenerativeAiModelFineTuneDetailsTrainingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    early_stopping_patience: cdktf.numberToTerraform(struct!.earlyStoppingPatience),
    early_stopping_threshold: cdktf.numberToTerraform(struct!.earlyStoppingThreshold),
    learning_rate: cdktf.numberToTerraform(struct!.learningRate),
    log_model_metrics_interval_in_steps: cdktf.numberToTerraform(struct!.logModelMetricsIntervalInSteps),
    lora_alpha: cdktf.numberToTerraform(struct!.loraAlpha),
    lora_dropout: cdktf.numberToTerraform(struct!.loraDropout),
    lora_r: cdktf.numberToTerraform(struct!.loraR),
    num_of_last_layers: cdktf.numberToTerraform(struct!.numOfLastLayers),
    total_training_epochs: cdktf.numberToTerraform(struct!.totalTrainingEpochs),
    training_batch_size: cdktf.numberToTerraform(struct!.trainingBatchSize),
    training_config_type: cdktf.stringToTerraform(struct!.trainingConfigType),
  }
}


export function generativeAiModelFineTuneDetailsTrainingConfigToHclTerraform(struct?: GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference | GenerativeAiModelFineTuneDetailsTrainingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    early_stopping_patience: {
      value: cdktf.numberToHclTerraform(struct!.earlyStoppingPatience),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    early_stopping_threshold: {
      value: cdktf.numberToHclTerraform(struct!.earlyStoppingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learning_rate: {
      value: cdktf.numberToHclTerraform(struct!.learningRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_model_metrics_interval_in_steps: {
      value: cdktf.numberToHclTerraform(struct!.logModelMetricsIntervalInSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lora_alpha: {
      value: cdktf.numberToHclTerraform(struct!.loraAlpha),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lora_dropout: {
      value: cdktf.numberToHclTerraform(struct!.loraDropout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lora_r: {
      value: cdktf.numberToHclTerraform(struct!.loraR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_last_layers: {
      value: cdktf.numberToHclTerraform(struct!.numOfLastLayers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_training_epochs: {
      value: cdktf.numberToHclTerraform(struct!.totalTrainingEpochs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.trainingBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_config_type: {
      value: cdktf.stringToHclTerraform(struct!.trainingConfigType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiModelFineTuneDetailsTrainingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earlyStoppingPatience !== undefined) {
      hasAnyValues = true;
      internalValueResult.earlyStoppingPatience = this._earlyStoppingPatience;
    }
    if (this._earlyStoppingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.earlyStoppingThreshold = this._earlyStoppingThreshold;
    }
    if (this._learningRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningRate = this._learningRate;
    }
    if (this._logModelMetricsIntervalInSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.logModelMetricsIntervalInSteps = this._logModelMetricsIntervalInSteps;
    }
    if (this._loraAlpha !== undefined) {
      hasAnyValues = true;
      internalValueResult.loraAlpha = this._loraAlpha;
    }
    if (this._loraDropout !== undefined) {
      hasAnyValues = true;
      internalValueResult.loraDropout = this._loraDropout;
    }
    if (this._loraR !== undefined) {
      hasAnyValues = true;
      internalValueResult.loraR = this._loraR;
    }
    if (this._numOfLastLayers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfLastLayers = this._numOfLastLayers;
    }
    if (this._totalTrainingEpochs !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTrainingEpochs = this._totalTrainingEpochs;
    }
    if (this._trainingBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingBatchSize = this._trainingBatchSize;
    }
    if (this._trainingConfigType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingConfigType = this._trainingConfigType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiModelFineTuneDetailsTrainingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._earlyStoppingPatience = undefined;
      this._earlyStoppingThreshold = undefined;
      this._learningRate = undefined;
      this._logModelMetricsIntervalInSteps = undefined;
      this._loraAlpha = undefined;
      this._loraDropout = undefined;
      this._loraR = undefined;
      this._numOfLastLayers = undefined;
      this._totalTrainingEpochs = undefined;
      this._trainingBatchSize = undefined;
      this._trainingConfigType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._earlyStoppingPatience = value.earlyStoppingPatience;
      this._earlyStoppingThreshold = value.earlyStoppingThreshold;
      this._learningRate = value.learningRate;
      this._logModelMetricsIntervalInSteps = value.logModelMetricsIntervalInSteps;
      this._loraAlpha = value.loraAlpha;
      this._loraDropout = value.loraDropout;
      this._loraR = value.loraR;
      this._numOfLastLayers = value.numOfLastLayers;
      this._totalTrainingEpochs = value.totalTrainingEpochs;
      this._trainingBatchSize = value.trainingBatchSize;
      this._trainingConfigType = value.trainingConfigType;
    }
  }

  // early_stopping_patience - computed: true, optional: true, required: false
  private _earlyStoppingPatience?: number; 
  public get earlyStoppingPatience() {
    return this.getNumberAttribute('early_stopping_patience');
  }
  public set earlyStoppingPatience(value: number) {
    this._earlyStoppingPatience = value;
  }
  public resetEarlyStoppingPatience() {
    this._earlyStoppingPatience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyStoppingPatienceInput() {
    return this._earlyStoppingPatience;
  }

  // early_stopping_threshold - computed: true, optional: true, required: false
  private _earlyStoppingThreshold?: number; 
  public get earlyStoppingThreshold() {
    return this.getNumberAttribute('early_stopping_threshold');
  }
  public set earlyStoppingThreshold(value: number) {
    this._earlyStoppingThreshold = value;
  }
  public resetEarlyStoppingThreshold() {
    this._earlyStoppingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyStoppingThresholdInput() {
    return this._earlyStoppingThreshold;
  }

  // learning_rate - computed: true, optional: true, required: false
  private _learningRate?: number; 
  public get learningRate() {
    return this.getNumberAttribute('learning_rate');
  }
  public set learningRate(value: number) {
    this._learningRate = value;
  }
  public resetLearningRate() {
    this._learningRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningRateInput() {
    return this._learningRate;
  }

  // log_model_metrics_interval_in_steps - computed: true, optional: true, required: false
  private _logModelMetricsIntervalInSteps?: number; 
  public get logModelMetricsIntervalInSteps() {
    return this.getNumberAttribute('log_model_metrics_interval_in_steps');
  }
  public set logModelMetricsIntervalInSteps(value: number) {
    this._logModelMetricsIntervalInSteps = value;
  }
  public resetLogModelMetricsIntervalInSteps() {
    this._logModelMetricsIntervalInSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logModelMetricsIntervalInStepsInput() {
    return this._logModelMetricsIntervalInSteps;
  }

  // lora_alpha - computed: true, optional: true, required: false
  private _loraAlpha?: number; 
  public get loraAlpha() {
    return this.getNumberAttribute('lora_alpha');
  }
  public set loraAlpha(value: number) {
    this._loraAlpha = value;
  }
  public resetLoraAlpha() {
    this._loraAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loraAlphaInput() {
    return this._loraAlpha;
  }

  // lora_dropout - computed: true, optional: true, required: false
  private _loraDropout?: number; 
  public get loraDropout() {
    return this.getNumberAttribute('lora_dropout');
  }
  public set loraDropout(value: number) {
    this._loraDropout = value;
  }
  public resetLoraDropout() {
    this._loraDropout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loraDropoutInput() {
    return this._loraDropout;
  }

  // lora_r - computed: true, optional: true, required: false
  private _loraR?: number; 
  public get loraR() {
    return this.getNumberAttribute('lora_r');
  }
  public set loraR(value: number) {
    this._loraR = value;
  }
  public resetLoraR() {
    this._loraR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loraRInput() {
    return this._loraR;
  }

  // num_of_last_layers - computed: true, optional: true, required: false
  private _numOfLastLayers?: number; 
  public get numOfLastLayers() {
    return this.getNumberAttribute('num_of_last_layers');
  }
  public set numOfLastLayers(value: number) {
    this._numOfLastLayers = value;
  }
  public resetNumOfLastLayers() {
    this._numOfLastLayers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfLastLayersInput() {
    return this._numOfLastLayers;
  }

  // total_training_epochs - computed: true, optional: true, required: false
  private _totalTrainingEpochs?: number; 
  public get totalTrainingEpochs() {
    return this.getNumberAttribute('total_training_epochs');
  }
  public set totalTrainingEpochs(value: number) {
    this._totalTrainingEpochs = value;
  }
  public resetTotalTrainingEpochs() {
    this._totalTrainingEpochs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTrainingEpochsInput() {
    return this._totalTrainingEpochs;
  }

  // training_batch_size - computed: true, optional: true, required: false
  private _trainingBatchSize?: number; 
  public get trainingBatchSize() {
    return this.getNumberAttribute('training_batch_size');
  }
  public set trainingBatchSize(value: number) {
    this._trainingBatchSize = value;
  }
  public resetTrainingBatchSize() {
    this._trainingBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingBatchSizeInput() {
    return this._trainingBatchSize;
  }

  // training_config_type - computed: false, optional: false, required: true
  private _trainingConfigType?: string; 
  public get trainingConfigType() {
    return this.getStringAttribute('training_config_type');
  }
  public set trainingConfigType(value: string) {
    this._trainingConfigType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingConfigTypeInput() {
    return this._trainingConfigType;
  }
}
export interface GenerativeAiModelFineTuneDetailsTrainingDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}
  */
  readonly datasetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}
  */
  readonly object: string;
}

export function generativeAiModelFineTuneDetailsTrainingDatasetToTerraform(struct?: GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference | GenerativeAiModelFineTuneDetailsTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    dataset_type: cdktf.stringToTerraform(struct!.datasetType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function generativeAiModelFineTuneDetailsTrainingDatasetToHclTerraform(struct?: GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference | GenerativeAiModelFineTuneDetailsTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_type: {
      value: cdktf.stringToHclTerraform(struct!.datasetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiModelFineTuneDetailsTrainingDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._datasetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetType = this._datasetType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiModelFineTuneDetailsTrainingDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._datasetType = undefined;
      this._namespace = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._datasetType = value.datasetType;
      this._namespace = value.namespace;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // dataset_type - computed: false, optional: false, required: true
  private _datasetType?: string; 
  public get datasetType() {
    return this.getStringAttribute('dataset_type');
  }
  public set datasetType(value: string) {
    this._datasetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTypeInput() {
    return this._datasetType;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GenerativeAiModelFineTuneDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}
  */
  readonly dedicatedAiClusterId: string;
  /**
  * training_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#training_config GenerativeAiModel#training_config}
  */
  readonly trainingConfig?: GenerativeAiModelFineTuneDetailsTrainingConfig;
  /**
  * training_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#training_dataset GenerativeAiModel#training_dataset}
  */
  readonly trainingDataset: GenerativeAiModelFineTuneDetailsTrainingDataset;
}

export function generativeAiModelFineTuneDetailsToTerraform(struct?: GenerativeAiModelFineTuneDetailsOutputReference | GenerativeAiModelFineTuneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated_ai_cluster_id: cdktf.stringToTerraform(struct!.dedicatedAiClusterId),
    training_config: generativeAiModelFineTuneDetailsTrainingConfigToTerraform(struct!.trainingConfig),
    training_dataset: generativeAiModelFineTuneDetailsTrainingDatasetToTerraform(struct!.trainingDataset),
  }
}


export function generativeAiModelFineTuneDetailsToHclTerraform(struct?: GenerativeAiModelFineTuneDetailsOutputReference | GenerativeAiModelFineTuneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated_ai_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedAiClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_config: {
      value: generativeAiModelFineTuneDetailsTrainingConfigToHclTerraform(struct!.trainingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiModelFineTuneDetailsTrainingConfigList",
    },
    training_dataset: {
      value: generativeAiModelFineTuneDetailsTrainingDatasetToHclTerraform(struct!.trainingDataset),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiModelFineTuneDetailsTrainingDatasetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiModelFineTuneDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiModelFineTuneDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicatedAiClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedAiClusterId = this._dedicatedAiClusterId;
    }
    if (this._trainingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingConfig = this._trainingConfig?.internalValue;
    }
    if (this._trainingDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingDataset = this._trainingDataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiModelFineTuneDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedicatedAiClusterId = undefined;
      this._trainingConfig.internalValue = undefined;
      this._trainingDataset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedicatedAiClusterId = value.dedicatedAiClusterId;
      this._trainingConfig.internalValue = value.trainingConfig;
      this._trainingDataset.internalValue = value.trainingDataset;
    }
  }

  // dedicated_ai_cluster_id - computed: false, optional: false, required: true
  private _dedicatedAiClusterId?: string; 
  public get dedicatedAiClusterId() {
    return this.getStringAttribute('dedicated_ai_cluster_id');
  }
  public set dedicatedAiClusterId(value: string) {
    this._dedicatedAiClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedAiClusterIdInput() {
    return this._dedicatedAiClusterId;
  }

  // training_config - computed: false, optional: true, required: false
  private _trainingConfig = new GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference(this, "training_config");
  public get trainingConfig() {
    return this._trainingConfig;
  }
  public putTrainingConfig(value: GenerativeAiModelFineTuneDetailsTrainingConfig) {
    this._trainingConfig.internalValue = value;
  }
  public resetTrainingConfig() {
    this._trainingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingConfigInput() {
    return this._trainingConfig.internalValue;
  }

  // training_dataset - computed: false, optional: false, required: true
  private _trainingDataset = new GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference(this, "training_dataset");
  public get trainingDataset() {
    return this._trainingDataset;
  }
  public putTrainingDataset(value: GenerativeAiModelFineTuneDetailsTrainingDataset) {
    this._trainingDataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingDatasetInput() {
    return this._trainingDataset.internalValue;
  }
}
export interface GenerativeAiModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}
  */
  readonly update?: string;
}

export function generativeAiModelTimeoutsToTerraform(struct?: GenerativeAiModelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function generativeAiModelTimeoutsToHclTerraform(struct?: GenerativeAiModelTimeouts | cdktf.IResolvable): any {
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

export class GenerativeAiModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenerativeAiModelTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiModelTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model oci_generative_ai_model}
*/
export class GenerativeAiModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenerativeAiModel to import
  * @param importFromId The id of the existing GenerativeAiModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenerativeAiModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_model oci_generative_ai_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenerativeAiModelConfig
  */
  public constructor(scope: Construct, id: string, config: GenerativeAiModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_model',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseModelId = config.baseModelId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._vendor = config.vendor;
    this._version = config.version;
    this._fineTuneDetails.internalValue = config.fineTuneDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_model_id - computed: false, optional: false, required: true
  private _baseModelId?: string; 
  public get baseModelId() {
    return this.getStringAttribute('base_model_id');
  }
  public set baseModelId(value: string) {
    this._baseModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelIdInput() {
    return this._baseModelId;
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_long_term_supported - computed: true, optional: false, required: false
  public get isLongTermSupported() {
    return this.getBooleanAttribute('is_long_term_supported');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // model_metrics - computed: true, optional: false, required: false
  private _modelMetrics = new GenerativeAiModelModelMetricsList(this, "model_metrics", false);
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

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // fine_tune_details - computed: false, optional: false, required: true
  private _fineTuneDetails = new GenerativeAiModelFineTuneDetailsOutputReference(this, "fine_tune_details");
  public get fineTuneDetails() {
    return this._fineTuneDetails;
  }
  public putFineTuneDetails(value: GenerativeAiModelFineTuneDetails) {
    this._fineTuneDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fineTuneDetailsInput() {
    return this._fineTuneDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GenerativeAiModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GenerativeAiModelTimeouts) {
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
      base_model_id: cdktf.stringToTerraform(this._baseModelId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      vendor: cdktf.stringToTerraform(this._vendor),
      version: cdktf.stringToTerraform(this._version),
      fine_tune_details: generativeAiModelFineTuneDetailsToTerraform(this._fineTuneDetails.internalValue),
      timeouts: generativeAiModelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_model_id: {
        value: cdktf.stringToHclTerraform(this._baseModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fine_tune_details: {
        value: generativeAiModelFineTuneDetailsToHclTerraform(this._fineTuneDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiModelFineTuneDetailsList",
      },
      timeouts: {
        value: generativeAiModelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GenerativeAiModelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
