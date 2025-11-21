// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiLanguageModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#compartment_id AiLanguageModel#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#defined_tags AiLanguageModel#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#description AiLanguageModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#display_name AiLanguageModel#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#freeform_tags AiLanguageModel#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#id AiLanguageModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#project_id AiLanguageModel#project_id}
  */
  readonly projectId: string;
  /**
  * model_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#model_details AiLanguageModel#model_details}
  */
  readonly modelDetails: AiLanguageModelModelDetails;
  /**
  * test_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#test_strategy AiLanguageModel#test_strategy}
  */
  readonly testStrategy?: AiLanguageModelTestStrategy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#timeouts AiLanguageModel#timeouts}
  */
  readonly timeouts?: AiLanguageModelTimeouts;
  /**
  * training_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#training_dataset AiLanguageModel#training_dataset}
  */
  readonly trainingDataset: AiLanguageModelTrainingDataset;
}
export interface AiLanguageModelEvaluationResultsClassMetrics {
}

export function aiLanguageModelEvaluationResultsClassMetricsToTerraform(struct?: AiLanguageModelEvaluationResultsClassMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiLanguageModelEvaluationResultsClassMetricsToHclTerraform(struct?: AiLanguageModelEvaluationResultsClassMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiLanguageModelEvaluationResultsClassMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiLanguageModelEvaluationResultsClassMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelEvaluationResultsClassMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // f1 - computed: true, optional: false, required: false
  public get f1() {
    return this.getNumberAttribute('f1');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // recall - computed: true, optional: false, required: false
  public get recall() {
    return this.getNumberAttribute('recall');
  }

  // support - computed: true, optional: false, required: false
  public get support() {
    return this.getNumberAttribute('support');
  }
}

export class AiLanguageModelEvaluationResultsClassMetricsList extends cdktf.ComplexList {

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
  public get(index: number): AiLanguageModelEvaluationResultsClassMetricsOutputReference {
    return new AiLanguageModelEvaluationResultsClassMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiLanguageModelEvaluationResultsEntityMetrics {
}

export function aiLanguageModelEvaluationResultsEntityMetricsToTerraform(struct?: AiLanguageModelEvaluationResultsEntityMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiLanguageModelEvaluationResultsEntityMetricsToHclTerraform(struct?: AiLanguageModelEvaluationResultsEntityMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiLanguageModelEvaluationResultsEntityMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiLanguageModelEvaluationResultsEntityMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelEvaluationResultsEntityMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // f1 - computed: true, optional: false, required: false
  public get f1() {
    return this.getNumberAttribute('f1');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // recall - computed: true, optional: false, required: false
  public get recall() {
    return this.getNumberAttribute('recall');
  }
}

export class AiLanguageModelEvaluationResultsEntityMetricsList extends cdktf.ComplexList {

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
  public get(index: number): AiLanguageModelEvaluationResultsEntityMetricsOutputReference {
    return new AiLanguageModelEvaluationResultsEntityMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiLanguageModelEvaluationResultsMetrics {
}

export function aiLanguageModelEvaluationResultsMetricsToTerraform(struct?: AiLanguageModelEvaluationResultsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiLanguageModelEvaluationResultsMetricsToHclTerraform(struct?: AiLanguageModelEvaluationResultsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiLanguageModelEvaluationResultsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiLanguageModelEvaluationResultsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelEvaluationResultsMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accuracy - computed: true, optional: false, required: false
  public get accuracy() {
    return this.getNumberAttribute('accuracy');
  }

  // macro_f1 - computed: true, optional: false, required: false
  public get macroF1() {
    return this.getNumberAttribute('macro_f1');
  }

  // macro_precision - computed: true, optional: false, required: false
  public get macroPrecision() {
    return this.getNumberAttribute('macro_precision');
  }

  // macro_recall - computed: true, optional: false, required: false
  public get macroRecall() {
    return this.getNumberAttribute('macro_recall');
  }

  // micro_f1 - computed: true, optional: false, required: false
  public get microF1() {
    return this.getNumberAttribute('micro_f1');
  }

  // micro_precision - computed: true, optional: false, required: false
  public get microPrecision() {
    return this.getNumberAttribute('micro_precision');
  }

  // micro_recall - computed: true, optional: false, required: false
  public get microRecall() {
    return this.getNumberAttribute('micro_recall');
  }

  // weighted_f1 - computed: true, optional: false, required: false
  public get weightedF1() {
    return this.getNumberAttribute('weighted_f1');
  }

  // weighted_precision - computed: true, optional: false, required: false
  public get weightedPrecision() {
    return this.getNumberAttribute('weighted_precision');
  }

  // weighted_recall - computed: true, optional: false, required: false
  public get weightedRecall() {
    return this.getNumberAttribute('weighted_recall');
  }
}

export class AiLanguageModelEvaluationResultsMetricsList extends cdktf.ComplexList {

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
  public get(index: number): AiLanguageModelEvaluationResultsMetricsOutputReference {
    return new AiLanguageModelEvaluationResultsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiLanguageModelEvaluationResults {
}

export function aiLanguageModelEvaluationResultsToTerraform(struct?: AiLanguageModelEvaluationResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiLanguageModelEvaluationResultsToHclTerraform(struct?: AiLanguageModelEvaluationResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiLanguageModelEvaluationResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiLanguageModelEvaluationResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelEvaluationResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_metrics - computed: true, optional: false, required: false
  private _classMetrics = new AiLanguageModelEvaluationResultsClassMetricsList(this, "class_metrics", false);
  public get classMetrics() {
    return this._classMetrics;
  }

  // confusion_matrix - computed: true, optional: false, required: false
  public get confusionMatrix() {
    return this.getStringAttribute('confusion_matrix');
  }

  // entity_metrics - computed: true, optional: false, required: false
  private _entityMetrics = new AiLanguageModelEvaluationResultsEntityMetricsList(this, "entity_metrics", false);
  public get entityMetrics() {
    return this._entityMetrics;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new AiLanguageModelEvaluationResultsMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
}

export class AiLanguageModelEvaluationResultsList extends cdktf.ComplexList {

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
  public get(index: number): AiLanguageModelEvaluationResultsOutputReference {
    return new AiLanguageModelEvaluationResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiLanguageModelModelDetailsClassificationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#classification_mode AiLanguageModel#classification_mode}
  */
  readonly classificationMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#version AiLanguageModel#version}
  */
  readonly version?: string;
}

export function aiLanguageModelModelDetailsClassificationModeToTerraform(struct?: AiLanguageModelModelDetailsClassificationModeOutputReference | AiLanguageModelModelDetailsClassificationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification_mode: cdktf.stringToTerraform(struct!.classificationMode),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function aiLanguageModelModelDetailsClassificationModeToHclTerraform(struct?: AiLanguageModelModelDetailsClassificationModeOutputReference | AiLanguageModelModelDetailsClassificationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification_mode: {
      value: cdktf.stringToHclTerraform(struct!.classificationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelModelDetailsClassificationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelModelDetailsClassificationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationMode = this._classificationMode;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelModelDetailsClassificationMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classificationMode = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classificationMode = value.classificationMode;
      this._version = value.version;
    }
  }

  // classification_mode - computed: false, optional: false, required: true
  private _classificationMode?: string; 
  public get classificationMode() {
    return this.getStringAttribute('classification_mode');
  }
  public set classificationMode(value: string) {
    this._classificationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationModeInput() {
    return this._classificationMode;
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
}
export interface AiLanguageModelModelDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#language_code AiLanguageModel#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#model_type AiLanguageModel#model_type}
  */
  readonly modelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#version AiLanguageModel#version}
  */
  readonly version?: string;
  /**
  * classification_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#classification_mode AiLanguageModel#classification_mode}
  */
  readonly classificationMode?: AiLanguageModelModelDetailsClassificationMode;
}

export function aiLanguageModelModelDetailsToTerraform(struct?: AiLanguageModelModelDetailsOutputReference | AiLanguageModelModelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    version: cdktf.stringToTerraform(struct!.version),
    classification_mode: aiLanguageModelModelDetailsClassificationModeToTerraform(struct!.classificationMode),
  }
}


export function aiLanguageModelModelDetailsToHclTerraform(struct?: AiLanguageModelModelDetailsOutputReference | AiLanguageModelModelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classification_mode: {
      value: aiLanguageModelModelDetailsClassificationModeToHclTerraform(struct!.classificationMode),
      isBlock: true,
      type: "list",
      storageClassType: "AiLanguageModelModelDetailsClassificationModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelModelDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelModelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._classificationMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationMode = this._classificationMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelModelDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._languageCode = undefined;
      this._modelType = undefined;
      this._version = undefined;
      this._classificationMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._languageCode = value.languageCode;
      this._modelType = value.modelType;
      this._version = value.version;
      this._classificationMode.internalValue = value.classificationMode;
    }
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // model_type - computed: false, optional: false, required: true
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // classification_mode - computed: false, optional: true, required: false
  private _classificationMode = new AiLanguageModelModelDetailsClassificationModeOutputReference(this, "classification_mode");
  public get classificationMode() {
    return this._classificationMode;
  }
  public putClassificationMode(value: AiLanguageModelModelDetailsClassificationMode) {
    this._classificationMode.internalValue = value;
  }
  public resetClassificationMode() {
    this._classificationMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationModeInput() {
    return this._classificationMode.internalValue;
  }
}
export interface AiLanguageModelTestStrategyTestingDatasetLocationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}
  */
  readonly locationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}
  */
  readonly objectNames: string[];
}

export function aiLanguageModelTestStrategyTestingDatasetLocationDetailsToTerraform(struct?: AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference | AiLanguageModelTestStrategyTestingDatasetLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.objectNames),
  }
}


export function aiLanguageModelTestStrategyTestingDatasetLocationDetailsToHclTerraform(struct?: AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference | AiLanguageModelTestStrategyTestingDatasetLocationDetails): any {
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
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
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
    object_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.objectNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelTestStrategyTestingDatasetLocationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._objectNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNames = this._objectNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelTestStrategyTestingDatasetLocationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._locationType = undefined;
      this._namespace = undefined;
      this._objectNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._locationType = value.locationType;
      this._namespace = value.namespace;
      this._objectNames = value.objectNames;
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

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
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

  // object_names - computed: false, optional: false, required: true
  private _objectNames?: string[]; 
  public get objectNames() {
    return this.getListAttribute('object_names');
  }
  public set objectNames(value: string[]) {
    this._objectNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNamesInput() {
    return this._objectNames;
  }
}
export interface AiLanguageModelTestStrategyTestingDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}
  */
  readonly datasetType: string;
  /**
  * location_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}
  */
  readonly locationDetails?: AiLanguageModelTestStrategyTestingDatasetLocationDetails;
}

export function aiLanguageModelTestStrategyTestingDatasetToTerraform(struct?: AiLanguageModelTestStrategyTestingDatasetOutputReference | AiLanguageModelTestStrategyTestingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    dataset_type: cdktf.stringToTerraform(struct!.datasetType),
    location_details: aiLanguageModelTestStrategyTestingDatasetLocationDetailsToTerraform(struct!.locationDetails),
  }
}


export function aiLanguageModelTestStrategyTestingDatasetToHclTerraform(struct?: AiLanguageModelTestStrategyTestingDatasetOutputReference | AiLanguageModelTestStrategyTestingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
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
    location_details: {
      value: aiLanguageModelTestStrategyTestingDatasetLocationDetailsToHclTerraform(struct!.locationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "AiLanguageModelTestStrategyTestingDatasetLocationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelTestStrategyTestingDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelTestStrategyTestingDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._datasetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetType = this._datasetType;
    }
    if (this._locationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationDetails = this._locationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelTestStrategyTestingDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._datasetType = undefined;
      this._locationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._datasetType = value.datasetType;
      this._locationDetails.internalValue = value.locationDetails;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
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

  // location_details - computed: false, optional: true, required: false
  private _locationDetails = new AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference(this, "location_details");
  public get locationDetails() {
    return this._locationDetails;
  }
  public putLocationDetails(value: AiLanguageModelTestStrategyTestingDatasetLocationDetails) {
    this._locationDetails.internalValue = value;
  }
  public resetLocationDetails() {
    this._locationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationDetailsInput() {
    return this._locationDetails.internalValue;
  }
}
export interface AiLanguageModelTestStrategyValidationDatasetLocationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}
  */
  readonly locationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}
  */
  readonly objectNames: string[];
}

export function aiLanguageModelTestStrategyValidationDatasetLocationDetailsToTerraform(struct?: AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference | AiLanguageModelTestStrategyValidationDatasetLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.objectNames),
  }
}


export function aiLanguageModelTestStrategyValidationDatasetLocationDetailsToHclTerraform(struct?: AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference | AiLanguageModelTestStrategyValidationDatasetLocationDetails): any {
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
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
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
    object_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.objectNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelTestStrategyValidationDatasetLocationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._objectNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNames = this._objectNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelTestStrategyValidationDatasetLocationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._locationType = undefined;
      this._namespace = undefined;
      this._objectNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._locationType = value.locationType;
      this._namespace = value.namespace;
      this._objectNames = value.objectNames;
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

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
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

  // object_names - computed: false, optional: false, required: true
  private _objectNames?: string[]; 
  public get objectNames() {
    return this.getListAttribute('object_names');
  }
  public set objectNames(value: string[]) {
    this._objectNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNamesInput() {
    return this._objectNames;
  }
}
export interface AiLanguageModelTestStrategyValidationDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}
  */
  readonly datasetType: string;
  /**
  * location_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}
  */
  readonly locationDetails?: AiLanguageModelTestStrategyValidationDatasetLocationDetails;
}

export function aiLanguageModelTestStrategyValidationDatasetToTerraform(struct?: AiLanguageModelTestStrategyValidationDatasetOutputReference | AiLanguageModelTestStrategyValidationDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    dataset_type: cdktf.stringToTerraform(struct!.datasetType),
    location_details: aiLanguageModelTestStrategyValidationDatasetLocationDetailsToTerraform(struct!.locationDetails),
  }
}


export function aiLanguageModelTestStrategyValidationDatasetToHclTerraform(struct?: AiLanguageModelTestStrategyValidationDatasetOutputReference | AiLanguageModelTestStrategyValidationDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
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
    location_details: {
      value: aiLanguageModelTestStrategyValidationDatasetLocationDetailsToHclTerraform(struct!.locationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "AiLanguageModelTestStrategyValidationDatasetLocationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelTestStrategyValidationDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelTestStrategyValidationDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._datasetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetType = this._datasetType;
    }
    if (this._locationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationDetails = this._locationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelTestStrategyValidationDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._datasetType = undefined;
      this._locationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._datasetType = value.datasetType;
      this._locationDetails.internalValue = value.locationDetails;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
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

  // location_details - computed: false, optional: true, required: false
  private _locationDetails = new AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference(this, "location_details");
  public get locationDetails() {
    return this._locationDetails;
  }
  public putLocationDetails(value: AiLanguageModelTestStrategyValidationDatasetLocationDetails) {
    this._locationDetails.internalValue = value;
  }
  public resetLocationDetails() {
    this._locationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationDetailsInput() {
    return this._locationDetails.internalValue;
  }
}
export interface AiLanguageModelTestStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#strategy_type AiLanguageModel#strategy_type}
  */
  readonly strategyType: string;
  /**
  * testing_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#testing_dataset AiLanguageModel#testing_dataset}
  */
  readonly testingDataset: AiLanguageModelTestStrategyTestingDataset;
  /**
  * validation_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#validation_dataset AiLanguageModel#validation_dataset}
  */
  readonly validationDataset?: AiLanguageModelTestStrategyValidationDataset;
}

export function aiLanguageModelTestStrategyToTerraform(struct?: AiLanguageModelTestStrategyOutputReference | AiLanguageModelTestStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy_type: cdktf.stringToTerraform(struct!.strategyType),
    testing_dataset: aiLanguageModelTestStrategyTestingDatasetToTerraform(struct!.testingDataset),
    validation_dataset: aiLanguageModelTestStrategyValidationDatasetToTerraform(struct!.validationDataset),
  }
}


export function aiLanguageModelTestStrategyToHclTerraform(struct?: AiLanguageModelTestStrategyOutputReference | AiLanguageModelTestStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy_type: {
      value: cdktf.stringToHclTerraform(struct!.strategyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    testing_dataset: {
      value: aiLanguageModelTestStrategyTestingDatasetToHclTerraform(struct!.testingDataset),
      isBlock: true,
      type: "list",
      storageClassType: "AiLanguageModelTestStrategyTestingDatasetList",
    },
    validation_dataset: {
      value: aiLanguageModelTestStrategyValidationDatasetToHclTerraform(struct!.validationDataset),
      isBlock: true,
      type: "list",
      storageClassType: "AiLanguageModelTestStrategyValidationDatasetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelTestStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelTestStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyType = this._strategyType;
    }
    if (this._testingDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testingDataset = this._testingDataset?.internalValue;
    }
    if (this._validationDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationDataset = this._validationDataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelTestStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategyType = undefined;
      this._testingDataset.internalValue = undefined;
      this._validationDataset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategyType = value.strategyType;
      this._testingDataset.internalValue = value.testingDataset;
      this._validationDataset.internalValue = value.validationDataset;
    }
  }

  // strategy_type - computed: false, optional: false, required: true
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }

  // testing_dataset - computed: false, optional: false, required: true
  private _testingDataset = new AiLanguageModelTestStrategyTestingDatasetOutputReference(this, "testing_dataset");
  public get testingDataset() {
    return this._testingDataset;
  }
  public putTestingDataset(value: AiLanguageModelTestStrategyTestingDataset) {
    this._testingDataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testingDatasetInput() {
    return this._testingDataset.internalValue;
  }

  // validation_dataset - computed: false, optional: true, required: false
  private _validationDataset = new AiLanguageModelTestStrategyValidationDatasetOutputReference(this, "validation_dataset");
  public get validationDataset() {
    return this._validationDataset;
  }
  public putValidationDataset(value: AiLanguageModelTestStrategyValidationDataset) {
    this._validationDataset.internalValue = value;
  }
  public resetValidationDataset() {
    this._validationDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDatasetInput() {
    return this._validationDataset.internalValue;
  }
}
export interface AiLanguageModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#create AiLanguageModel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#delete AiLanguageModel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#update AiLanguageModel#update}
  */
  readonly update?: string;
}

export function aiLanguageModelTimeoutsToTerraform(struct?: AiLanguageModelTimeouts | cdktf.IResolvable): any {
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


export function aiLanguageModelTimeoutsToHclTerraform(struct?: AiLanguageModelTimeouts | cdktf.IResolvable): any {
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

export class AiLanguageModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiLanguageModelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiLanguageModelTimeouts | cdktf.IResolvable | undefined) {
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
export interface AiLanguageModelTrainingDatasetLocationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}
  */
  readonly locationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}
  */
  readonly objectNames: string[];
}

export function aiLanguageModelTrainingDatasetLocationDetailsToTerraform(struct?: AiLanguageModelTrainingDatasetLocationDetailsOutputReference | AiLanguageModelTrainingDatasetLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.objectNames),
  }
}


export function aiLanguageModelTrainingDatasetLocationDetailsToHclTerraform(struct?: AiLanguageModelTrainingDatasetLocationDetailsOutputReference | AiLanguageModelTrainingDatasetLocationDetails): any {
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
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
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
    object_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.objectNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelTrainingDatasetLocationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelTrainingDatasetLocationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._objectNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNames = this._objectNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelTrainingDatasetLocationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._locationType = undefined;
      this._namespace = undefined;
      this._objectNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._locationType = value.locationType;
      this._namespace = value.namespace;
      this._objectNames = value.objectNames;
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

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
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

  // object_names - computed: false, optional: false, required: true
  private _objectNames?: string[]; 
  public get objectNames() {
    return this.getListAttribute('object_names');
  }
  public set objectNames(value: string[]) {
    this._objectNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNamesInput() {
    return this._objectNames;
  }
}
export interface AiLanguageModelTrainingDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}
  */
  readonly datasetType: string;
  /**
  * location_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}
  */
  readonly locationDetails?: AiLanguageModelTrainingDatasetLocationDetails;
}

export function aiLanguageModelTrainingDatasetToTerraform(struct?: AiLanguageModelTrainingDatasetOutputReference | AiLanguageModelTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    dataset_type: cdktf.stringToTerraform(struct!.datasetType),
    location_details: aiLanguageModelTrainingDatasetLocationDetailsToTerraform(struct!.locationDetails),
  }
}


export function aiLanguageModelTrainingDatasetToHclTerraform(struct?: AiLanguageModelTrainingDatasetOutputReference | AiLanguageModelTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
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
    location_details: {
      value: aiLanguageModelTrainingDatasetLocationDetailsToHclTerraform(struct!.locationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "AiLanguageModelTrainingDatasetLocationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageModelTrainingDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageModelTrainingDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._datasetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetType = this._datasetType;
    }
    if (this._locationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationDetails = this._locationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageModelTrainingDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._datasetType = undefined;
      this._locationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._datasetType = value.datasetType;
      this._locationDetails.internalValue = value.locationDetails;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
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

  // location_details - computed: false, optional: true, required: false
  private _locationDetails = new AiLanguageModelTrainingDatasetLocationDetailsOutputReference(this, "location_details");
  public get locationDetails() {
    return this._locationDetails;
  }
  public putLocationDetails(value: AiLanguageModelTrainingDatasetLocationDetails) {
    this._locationDetails.internalValue = value;
  }
  public resetLocationDetails() {
    this._locationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationDetailsInput() {
    return this._locationDetails.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model oci_ai_language_model}
*/
export class AiLanguageModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_language_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiLanguageModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiLanguageModel to import
  * @param importFromId The id of the existing AiLanguageModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiLanguageModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_language_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_language_model oci_ai_language_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiLanguageModelConfig
  */
  public constructor(scope: Construct, id: string, config: AiLanguageModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_language_model',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._projectId = config.projectId;
    this._modelDetails.internalValue = config.modelDetails;
    this._testStrategy.internalValue = config.testStrategy;
    this._timeouts.internalValue = config.timeouts;
    this._trainingDataset.internalValue = config.trainingDataset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // evaluation_results - computed: true, optional: false, required: false
  private _evaluationResults = new AiLanguageModelEvaluationResultsList(this, "evaluation_results", false);
  public get evaluationResults() {
    return this._evaluationResults;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // model_details - computed: false, optional: false, required: true
  private _modelDetails = new AiLanguageModelModelDetailsOutputReference(this, "model_details");
  public get modelDetails() {
    return this._modelDetails;
  }
  public putModelDetails(value: AiLanguageModelModelDetails) {
    this._modelDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDetailsInput() {
    return this._modelDetails.internalValue;
  }

  // test_strategy - computed: false, optional: true, required: false
  private _testStrategy = new AiLanguageModelTestStrategyOutputReference(this, "test_strategy");
  public get testStrategy() {
    return this._testStrategy;
  }
  public putTestStrategy(value: AiLanguageModelTestStrategy) {
    this._testStrategy.internalValue = value;
  }
  public resetTestStrategy() {
    this._testStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStrategyInput() {
    return this._testStrategy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiLanguageModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiLanguageModelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // training_dataset - computed: false, optional: false, required: true
  private _trainingDataset = new AiLanguageModelTrainingDatasetOutputReference(this, "training_dataset");
  public get trainingDataset() {
    return this._trainingDataset;
  }
  public putTrainingDataset(value: AiLanguageModelTrainingDataset) {
    this._trainingDataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingDatasetInput() {
    return this._trainingDataset.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      model_details: aiLanguageModelModelDetailsToTerraform(this._modelDetails.internalValue),
      test_strategy: aiLanguageModelTestStrategyToTerraform(this._testStrategy.internalValue),
      timeouts: aiLanguageModelTimeoutsToTerraform(this._timeouts.internalValue),
      training_dataset: aiLanguageModelTrainingDatasetToTerraform(this._trainingDataset.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_details: {
        value: aiLanguageModelModelDetailsToHclTerraform(this._modelDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiLanguageModelModelDetailsList",
      },
      test_strategy: {
        value: aiLanguageModelTestStrategyToHclTerraform(this._testStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiLanguageModelTestStrategyList",
      },
      timeouts: {
        value: aiLanguageModelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiLanguageModelTimeouts",
      },
      training_dataset: {
        value: aiLanguageModelTrainingDatasetToHclTerraform(this._trainingDataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiLanguageModelTrainingDatasetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
