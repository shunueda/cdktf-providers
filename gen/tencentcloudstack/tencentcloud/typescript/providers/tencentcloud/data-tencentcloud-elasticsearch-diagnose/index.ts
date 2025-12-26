// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudElasticsearchDiagnoseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Report date, format 20210301.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose#date DataTencentcloudElasticsearchDiagnose#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose#id DataTencentcloudElasticsearchDiagnose#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose#instance_id DataTencentcloudElasticsearchDiagnose#instance_id}
  */
  readonly instanceId: string;
  /**
  * Number of copies returned in the report. Default value 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose#limit DataTencentcloudElasticsearchDiagnose#limit}
  */
  readonly limit?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose#result_output_file DataTencentcloudElasticsearchDiagnose#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParam {
}

export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParamToTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParamToHclTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // indices - computed: true, optional: false, required: false
  public get indices() {
    return this.getStringAttribute('indices');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // jobs - computed: true, optional: false, required: false
  public get jobs() {
    return cdktf.Fn.tolist(this.getListAttribute('jobs'));
  }
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParamOutputReference {
    return new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetails {
}

export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetailsToTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetailsToHclTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advise - computed: true, optional: false, required: false
  public get advise() {
    return this.getStringAttribute('advise');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetailsOutputReference {
    return new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensions {
}

export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensionsToTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensionsToHclTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensionsOutputReference {
    return new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetrics {
}

export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsToTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsToHclTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsOutputReference {
    return new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetails {
}

export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsToTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsToHclTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsOutputReference {
    return new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetails {
}

export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetailsToTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetailsToHclTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advise - computed: true, optional: false, required: false
  public get advise() {
    return this.getStringAttribute('advise');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetailsOutputReference {
    return new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResults {
}

export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsToTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsToHclTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advise - computed: true, optional: false, required: false
  public get advise() {
    return this.getStringAttribute('advise');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
  }

  // log_details - computed: true, optional: false, required: false
  private _logDetails = new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsLogDetailsList(this, "log_details", false);
  public get logDetails() {
    return this._logDetails;
  }

  // metric_details - computed: true, optional: false, required: false
  private _metricDetails = new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsMetricDetailsList(this, "metric_details", false);
  public get metricDetails() {
    return this._metricDetails;
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }

  // setting_details - computed: true, optional: false, required: false
  private _settingDetails = new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsSettingDetailsList(this, "setting_details", false);
  public get settingDetails() {
    return this._settingDetails;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsOutputReference {
    return new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticsearchDiagnoseDiagnoseResults {
}

export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsToTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchDiagnoseDiagnoseResultsToHclTerraform(struct?: DataTencentcloudElasticsearchDiagnoseDiagnoseResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchDiagnoseDiagnoseResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchDiagnoseDiagnoseResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed - computed: true, optional: false, required: false
  public get completed() {
    return this.getBooleanAttribute('completed');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // job_param - computed: true, optional: false, required: false
  private _jobParam = new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobParamList(this, "job_param", false);
  public get jobParam() {
    return this._jobParam;
  }

  // job_results - computed: true, optional: false, required: false
  private _jobResults = new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsJobResultsList(this, "job_results", false);
  public get jobResults() {
    return this._jobResults;
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getNumberAttribute('job_type');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }
}

export class DataTencentcloudElasticsearchDiagnoseDiagnoseResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchDiagnoseDiagnoseResultsOutputReference {
    return new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose tencentcloud_elasticsearch_diagnose}
*/
export class DataTencentcloudElasticsearchDiagnose extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_diagnose";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudElasticsearchDiagnose resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudElasticsearchDiagnose to import
  * @param importFromId The id of the existing DataTencentcloudElasticsearchDiagnose that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudElasticsearchDiagnose to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_diagnose", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/elasticsearch_diagnose tencentcloud_elasticsearch_diagnose} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudElasticsearchDiagnoseConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudElasticsearchDiagnoseConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_diagnose',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._date = config.date;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._limit = config.limit;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // diagnose_results - computed: true, optional: false, required: false
  private _diagnoseResults = new DataTencentcloudElasticsearchDiagnoseDiagnoseResultsList(this, "diagnose_results", false);
  public get diagnoseResults() {
    return this._diagnoseResults;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      date: cdktf.stringToTerraform(this._date),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      limit: cdktf.numberToTerraform(this._limit),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      date: {
        value: cdktf.stringToHclTerraform(this._date),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
