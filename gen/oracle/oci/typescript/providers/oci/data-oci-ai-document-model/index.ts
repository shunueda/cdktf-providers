// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ai_document_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAiDocumentModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ai_document_model#model_id DataOciAiDocumentModel#model_id}
  */
  readonly modelId: string;
}
export interface DataOciAiDocumentModelComponentModels {
}

export function dataOciAiDocumentModelComponentModelsToTerraform(struct?: DataOciAiDocumentModelComponentModels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelComponentModelsToHclTerraform(struct?: DataOciAiDocumentModelComponentModels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelComponentModelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelComponentModels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelComponentModels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}

export class DataOciAiDocumentModelComponentModelsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelComponentModelsOutputReference {
    return new DataOciAiDocumentModelComponentModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelLocks {
}

export function dataOciAiDocumentModelLocksToTerraform(struct?: DataOciAiDocumentModelLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelLocksToHclTerraform(struct?: DataOciAiDocumentModelLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciAiDocumentModelLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelLocksOutputReference {
    return new DataOciAiDocumentModelLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelMetricsDatasetSummary {
}

export function dataOciAiDocumentModelMetricsDatasetSummaryToTerraform(struct?: DataOciAiDocumentModelMetricsDatasetSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelMetricsDatasetSummaryToHclTerraform(struct?: DataOciAiDocumentModelMetricsDatasetSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelMetricsDatasetSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelMetricsDatasetSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelMetricsDatasetSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_sample_count - computed: true, optional: false, required: false
  public get testSampleCount() {
    return this.getNumberAttribute('test_sample_count');
  }

  // training_sample_count - computed: true, optional: false, required: false
  public get trainingSampleCount() {
    return this.getNumberAttribute('training_sample_count');
  }

  // validation_sample_count - computed: true, optional: false, required: false
  public get validationSampleCount() {
    return this.getNumberAttribute('validation_sample_count');
  }
}

export class DataOciAiDocumentModelMetricsDatasetSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelMetricsDatasetSummaryOutputReference {
    return new DataOciAiDocumentModelMetricsDatasetSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntries {
}

export function dataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntriesToTerraform(struct?: DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntriesToHclTerraform(struct?: DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntries | undefined) {
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

  // f1score - computed: true, optional: false, required: false
  public get f1Score() {
    return this.getNumberAttribute('f1score');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // recall - computed: true, optional: false, required: false
  public get recall() {
    return this.getNumberAttribute('recall');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference {
    return new DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelMetricsLabelMetricsReport {
}

export function dataOciAiDocumentModelMetricsLabelMetricsReportToTerraform(struct?: DataOciAiDocumentModelMetricsLabelMetricsReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelMetricsLabelMetricsReportToHclTerraform(struct?: DataOciAiDocumentModelMetricsLabelMetricsReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelMetricsLabelMetricsReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelMetricsLabelMetricsReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelMetricsLabelMetricsReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidence_entries - computed: true, optional: false, required: false
  private _confidenceEntries = new DataOciAiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList(this, "confidence_entries", false);
  public get confidenceEntries() {
    return this._confidenceEntries;
  }

  // document_count - computed: true, optional: false, required: false
  public get documentCount() {
    return this.getNumberAttribute('document_count');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // mean_average_precision - computed: true, optional: false, required: false
  public get meanAveragePrecision() {
    return this.getNumberAttribute('mean_average_precision');
  }
}

export class DataOciAiDocumentModelMetricsLabelMetricsReportList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelMetricsLabelMetricsReportOutputReference {
    return new DataOciAiDocumentModelMetricsLabelMetricsReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntries {
}

export function dataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntriesToTerraform(struct?: DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntriesToHclTerraform(struct?: DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntries | undefined) {
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

  // f1score - computed: true, optional: false, required: false
  public get f1Score() {
    return this.getNumberAttribute('f1score');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // recall - computed: true, optional: false, required: false
  public get recall() {
    return this.getNumberAttribute('recall');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference {
    return new DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelMetricsOverallMetricsReport {
}

export function dataOciAiDocumentModelMetricsOverallMetricsReportToTerraform(struct?: DataOciAiDocumentModelMetricsOverallMetricsReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelMetricsOverallMetricsReportToHclTerraform(struct?: DataOciAiDocumentModelMetricsOverallMetricsReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelMetricsOverallMetricsReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelMetricsOverallMetricsReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelMetricsOverallMetricsReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidence_entries - computed: true, optional: false, required: false
  private _confidenceEntries = new DataOciAiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList(this, "confidence_entries", false);
  public get confidenceEntries() {
    return this._confidenceEntries;
  }

  // document_count - computed: true, optional: false, required: false
  public get documentCount() {
    return this.getNumberAttribute('document_count');
  }

  // mean_average_precision - computed: true, optional: false, required: false
  public get meanAveragePrecision() {
    return this.getNumberAttribute('mean_average_precision');
  }
}

export class DataOciAiDocumentModelMetricsOverallMetricsReportList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelMetricsOverallMetricsReportOutputReference {
    return new DataOciAiDocumentModelMetricsOverallMetricsReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelMetrics {
}

export function dataOciAiDocumentModelMetricsToTerraform(struct?: DataOciAiDocumentModelMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelMetricsToHclTerraform(struct?: DataOciAiDocumentModelMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_summary - computed: true, optional: false, required: false
  private _datasetSummary = new DataOciAiDocumentModelMetricsDatasetSummaryList(this, "dataset_summary", false);
  public get datasetSummary() {
    return this._datasetSummary;
  }

  // label_metrics_report - computed: true, optional: false, required: false
  private _labelMetricsReport = new DataOciAiDocumentModelMetricsLabelMetricsReportList(this, "label_metrics_report", false);
  public get labelMetricsReport() {
    return this._labelMetricsReport;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // overall_metrics_report - computed: true, optional: false, required: false
  private _overallMetricsReport = new DataOciAiDocumentModelMetricsOverallMetricsReportList(this, "overall_metrics_report", false);
  public get overallMetricsReport() {
    return this._overallMetricsReport;
  }
}

export class DataOciAiDocumentModelMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelMetricsOutputReference {
    return new DataOciAiDocumentModelMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelModelSubType {
}

export function dataOciAiDocumentModelModelSubTypeToTerraform(struct?: DataOciAiDocumentModelModelSubType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelModelSubTypeToHclTerraform(struct?: DataOciAiDocumentModelModelSubType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelModelSubTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelModelSubType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelModelSubType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_sub_type - computed: true, optional: false, required: false
  public get modelSubType() {
    return this.getStringAttribute('model_sub_type');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
}

export class DataOciAiDocumentModelModelSubTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelModelSubTypeOutputReference {
    return new DataOciAiDocumentModelModelSubTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelTestingDataset {
}

export function dataOciAiDocumentModelTestingDatasetToTerraform(struct?: DataOciAiDocumentModelTestingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelTestingDatasetToHclTerraform(struct?: DataOciAiDocumentModelTestingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelTestingDatasetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelTestingDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelTestingDataset | undefined) {
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

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
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

export class DataOciAiDocumentModelTestingDatasetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelTestingDatasetOutputReference {
    return new DataOciAiDocumentModelTestingDatasetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelTrainingDataset {
}

export function dataOciAiDocumentModelTrainingDatasetToTerraform(struct?: DataOciAiDocumentModelTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelTrainingDatasetToHclTerraform(struct?: DataOciAiDocumentModelTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelTrainingDatasetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelTrainingDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelTrainingDataset | undefined) {
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

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
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

export class DataOciAiDocumentModelTrainingDatasetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelTrainingDatasetOutputReference {
    return new DataOciAiDocumentModelTrainingDatasetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiDocumentModelValidationDataset {
}

export function dataOciAiDocumentModelValidationDatasetToTerraform(struct?: DataOciAiDocumentModelValidationDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiDocumentModelValidationDatasetToHclTerraform(struct?: DataOciAiDocumentModelValidationDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiDocumentModelValidationDatasetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiDocumentModelValidationDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiDocumentModelValidationDataset | undefined) {
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

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
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

export class DataOciAiDocumentModelValidationDatasetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiDocumentModelValidationDatasetOutputReference {
    return new DataOciAiDocumentModelValidationDatasetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ai_document_model oci_ai_document_model}
*/
export class DataOciAiDocumentModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_document_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAiDocumentModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAiDocumentModel to import
  * @param importFromId The id of the existing DataOciAiDocumentModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ai_document_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAiDocumentModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_document_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ai_document_model oci_ai_document_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAiDocumentModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAiDocumentModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_document_model',
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

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_models - computed: true, optional: false, required: false
  private _componentModels = new DataOciAiDocumentModelComponentModelsList(this, "component_models", false);
  public get componentModels() {
    return this._componentModels;
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_units - computed: true, optional: false, required: false
  public get inferenceUnits() {
    return this.getNumberAttribute('inference_units');
  }

  // is_composed_model - computed: true, optional: false, required: false
  public get isComposedModel() {
    return this.getBooleanAttribute('is_composed_model');
  }

  // is_quick_mode - computed: true, optional: false, required: false
  public get isQuickMode() {
    return this.getBooleanAttribute('is_quick_mode');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciAiDocumentModelLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // max_training_time_in_hours - computed: true, optional: false, required: false
  public get maxTrainingTimeInHours() {
    return this.getNumberAttribute('max_training_time_in_hours');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataOciAiDocumentModelMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
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

  // model_sub_type - computed: true, optional: false, required: false
  private _modelSubType = new DataOciAiDocumentModelModelSubTypeList(this, "model_sub_type", false);
  public get modelSubType() {
    return this._modelSubType;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // testing_dataset - computed: true, optional: false, required: false
  private _testingDataset = new DataOciAiDocumentModelTestingDatasetList(this, "testing_dataset", false);
  public get testingDataset() {
    return this._testingDataset;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // trained_time_in_hours - computed: true, optional: false, required: false
  public get trainedTimeInHours() {
    return this.getNumberAttribute('trained_time_in_hours');
  }

  // training_dataset - computed: true, optional: false, required: false
  private _trainingDataset = new DataOciAiDocumentModelTrainingDatasetList(this, "training_dataset", false);
  public get trainingDataset() {
    return this._trainingDataset;
  }

  // validation_dataset - computed: true, optional: false, required: false
  private _validationDataset = new DataOciAiDocumentModelValidationDatasetList(this, "validation_dataset", false);
  public get validationDataset() {
    return this._validationDataset;
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
