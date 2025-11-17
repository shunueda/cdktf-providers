// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#metadata DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadata;
  /**
  * LokiStackSpec defines the desired state of LokiStack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#spec DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpec;
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#annotations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#labels DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#namespace DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadataToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestion {
  /**
  * IngestionBurstSize defines the local rate-limited sample size per distributor replica. It should be set to the set at least to the maximum logs size expected in a single push request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ingestion_burst_size DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ingestion_burst_size}
  */
  readonly ingestionBurstSize?: number;
  /**
  * IngestionRate defines the sample size per second. Units MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ingestion_rate DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ingestion_rate}
  */
  readonly ingestionRate?: number;
  /**
  * MaxGlobalStreamsPerTenant defines the maximum number of active streams per tenant, across the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_global_streams_per_tenant DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_global_streams_per_tenant}
  */
  readonly maxGlobalStreamsPerTenant?: number;
  /**
  * MaxLabelNameLength defines the maximum number of characters allowed for label keys in log streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_label_name_length DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_label_name_length}
  */
  readonly maxLabelNameLength?: number;
  /**
  * MaxLabelNamesPerSeries defines the maximum number of label names per series in each log stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_label_names_per_series DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_label_names_per_series}
  */
  readonly maxLabelNamesPerSeries?: number;
  /**
  * MaxLabelValueLength defines the maximum number of characters allowed for label values in log streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_label_value_length DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_label_value_length}
  */
  readonly maxLabelValueLength?: number;
  /**
  * MaxLineSize defines the maximum line size on ingestion path. Units in Bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_line_size DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_line_size}
  */
  readonly maxLineSize?: number;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestionToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion_burst_size: cdktf.numberToTerraform(struct!.ingestionBurstSize),
    ingestion_rate: cdktf.numberToTerraform(struct!.ingestionRate),
    max_global_streams_per_tenant: cdktf.numberToTerraform(struct!.maxGlobalStreamsPerTenant),
    max_label_name_length: cdktf.numberToTerraform(struct!.maxLabelNameLength),
    max_label_names_per_series: cdktf.numberToTerraform(struct!.maxLabelNamesPerSeries),
    max_label_value_length: cdktf.numberToTerraform(struct!.maxLabelValueLength),
    max_line_size: cdktf.numberToTerraform(struct!.maxLineSize),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestionToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion_burst_size: {
      value: cdktf.numberToHclTerraform(struct!.ingestionBurstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingestion_rate: {
      value: cdktf.numberToHclTerraform(struct!.ingestionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_global_streams_per_tenant: {
      value: cdktf.numberToHclTerraform(struct!.maxGlobalStreamsPerTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_label_name_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLabelNameLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_label_names_per_series: {
      value: cdktf.numberToHclTerraform(struct!.maxLabelNamesPerSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_label_value_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLabelValueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_line_size: {
      value: cdktf.numberToHclTerraform(struct!.maxLineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestionBurstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionBurstSize = this._ingestionBurstSize;
    }
    if (this._ingestionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionRate = this._ingestionRate;
    }
    if (this._maxGlobalStreamsPerTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGlobalStreamsPerTenant = this._maxGlobalStreamsPerTenant;
    }
    if (this._maxLabelNameLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLabelNameLength = this._maxLabelNameLength;
    }
    if (this._maxLabelNamesPerSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLabelNamesPerSeries = this._maxLabelNamesPerSeries;
    }
    if (this._maxLabelValueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLabelValueLength = this._maxLabelValueLength;
    }
    if (this._maxLineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLineSize = this._maxLineSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestionBurstSize = undefined;
      this._ingestionRate = undefined;
      this._maxGlobalStreamsPerTenant = undefined;
      this._maxLabelNameLength = undefined;
      this._maxLabelNamesPerSeries = undefined;
      this._maxLabelValueLength = undefined;
      this._maxLineSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestionBurstSize = value.ingestionBurstSize;
      this._ingestionRate = value.ingestionRate;
      this._maxGlobalStreamsPerTenant = value.maxGlobalStreamsPerTenant;
      this._maxLabelNameLength = value.maxLabelNameLength;
      this._maxLabelNamesPerSeries = value.maxLabelNamesPerSeries;
      this._maxLabelValueLength = value.maxLabelValueLength;
      this._maxLineSize = value.maxLineSize;
    }
  }

  // ingestion_burst_size - computed: false, optional: true, required: false
  private _ingestionBurstSize?: number; 
  public get ingestionBurstSize() {
    return this.getNumberAttribute('ingestion_burst_size');
  }
  public set ingestionBurstSize(value: number) {
    this._ingestionBurstSize = value;
  }
  public resetIngestionBurstSize() {
    this._ingestionBurstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionBurstSizeInput() {
    return this._ingestionBurstSize;
  }

  // ingestion_rate - computed: false, optional: true, required: false
  private _ingestionRate?: number; 
  public get ingestionRate() {
    return this.getNumberAttribute('ingestion_rate');
  }
  public set ingestionRate(value: number) {
    this._ingestionRate = value;
  }
  public resetIngestionRate() {
    this._ingestionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionRateInput() {
    return this._ingestionRate;
  }

  // max_global_streams_per_tenant - computed: false, optional: true, required: false
  private _maxGlobalStreamsPerTenant?: number; 
  public get maxGlobalStreamsPerTenant() {
    return this.getNumberAttribute('max_global_streams_per_tenant');
  }
  public set maxGlobalStreamsPerTenant(value: number) {
    this._maxGlobalStreamsPerTenant = value;
  }
  public resetMaxGlobalStreamsPerTenant() {
    this._maxGlobalStreamsPerTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGlobalStreamsPerTenantInput() {
    return this._maxGlobalStreamsPerTenant;
  }

  // max_label_name_length - computed: false, optional: true, required: false
  private _maxLabelNameLength?: number; 
  public get maxLabelNameLength() {
    return this.getNumberAttribute('max_label_name_length');
  }
  public set maxLabelNameLength(value: number) {
    this._maxLabelNameLength = value;
  }
  public resetMaxLabelNameLength() {
    this._maxLabelNameLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLabelNameLengthInput() {
    return this._maxLabelNameLength;
  }

  // max_label_names_per_series - computed: false, optional: true, required: false
  private _maxLabelNamesPerSeries?: number; 
  public get maxLabelNamesPerSeries() {
    return this.getNumberAttribute('max_label_names_per_series');
  }
  public set maxLabelNamesPerSeries(value: number) {
    this._maxLabelNamesPerSeries = value;
  }
  public resetMaxLabelNamesPerSeries() {
    this._maxLabelNamesPerSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLabelNamesPerSeriesInput() {
    return this._maxLabelNamesPerSeries;
  }

  // max_label_value_length - computed: false, optional: true, required: false
  private _maxLabelValueLength?: number; 
  public get maxLabelValueLength() {
    return this.getNumberAttribute('max_label_value_length');
  }
  public set maxLabelValueLength(value: number) {
    this._maxLabelValueLength = value;
  }
  public resetMaxLabelValueLength() {
    this._maxLabelValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLabelValueLengthInput() {
    return this._maxLabelValueLength;
  }

  // max_line_size - computed: false, optional: true, required: false
  private _maxLineSize?: number; 
  public get maxLineSize() {
    return this.getNumberAttribute('max_line_size');
  }
  public set maxLineSize(value: number) {
    this._maxLineSize = value;
  }
  public resetMaxLineSize() {
    this._maxLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLineSizeInput() {
    return this._maxLineSize;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueries {
  /**
  * MaxChunksPerQuery defines the maximum number of chunks that can be fetched by a single query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_chunks_per_query DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_chunks_per_query}
  */
  readonly maxChunksPerQuery?: number;
  /**
  * MaxEntriesLimitsPerQuery defines the maximum number of log entries that will be returned for a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_entries_limit_per_query DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_entries_limit_per_query}
  */
  readonly maxEntriesLimitPerQuery?: number;
  /**
  * MaxQuerySeries defines the maximum of unique series that is returned by a metric query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_query_series DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_query_series}
  */
  readonly maxQuerySeries?: number;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueriesToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_chunks_per_query: cdktf.numberToTerraform(struct!.maxChunksPerQuery),
    max_entries_limit_per_query: cdktf.numberToTerraform(struct!.maxEntriesLimitPerQuery),
    max_query_series: cdktf.numberToTerraform(struct!.maxQuerySeries),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueriesToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_chunks_per_query: {
      value: cdktf.numberToHclTerraform(struct!.maxChunksPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_entries_limit_per_query: {
      value: cdktf.numberToHclTerraform(struct!.maxEntriesLimitPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_query_series: {
      value: cdktf.numberToHclTerraform(struct!.maxQuerySeries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxChunksPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxChunksPerQuery = this._maxChunksPerQuery;
    }
    if (this._maxEntriesLimitPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntriesLimitPerQuery = this._maxEntriesLimitPerQuery;
    }
    if (this._maxQuerySeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySeries = this._maxQuerySeries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxChunksPerQuery = undefined;
      this._maxEntriesLimitPerQuery = undefined;
      this._maxQuerySeries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxChunksPerQuery = value.maxChunksPerQuery;
      this._maxEntriesLimitPerQuery = value.maxEntriesLimitPerQuery;
      this._maxQuerySeries = value.maxQuerySeries;
    }
  }

  // max_chunks_per_query - computed: false, optional: true, required: false
  private _maxChunksPerQuery?: number; 
  public get maxChunksPerQuery() {
    return this.getNumberAttribute('max_chunks_per_query');
  }
  public set maxChunksPerQuery(value: number) {
    this._maxChunksPerQuery = value;
  }
  public resetMaxChunksPerQuery() {
    this._maxChunksPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxChunksPerQueryInput() {
    return this._maxChunksPerQuery;
  }

  // max_entries_limit_per_query - computed: false, optional: true, required: false
  private _maxEntriesLimitPerQuery?: number; 
  public get maxEntriesLimitPerQuery() {
    return this.getNumberAttribute('max_entries_limit_per_query');
  }
  public set maxEntriesLimitPerQuery(value: number) {
    this._maxEntriesLimitPerQuery = value;
  }
  public resetMaxEntriesLimitPerQuery() {
    this._maxEntriesLimitPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesLimitPerQueryInput() {
    return this._maxEntriesLimitPerQuery;
  }

  // max_query_series - computed: false, optional: true, required: false
  private _maxQuerySeries?: number; 
  public get maxQuerySeries() {
    return this.getNumberAttribute('max_query_series');
  }
  public set maxQuerySeries(value: number) {
    this._maxQuerySeries = value;
  }
  public resetMaxQuerySeries() {
    this._maxQuerySeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySeriesInput() {
    return this._maxQuerySeries;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobal {
  /**
  * IngestionLimits defines the limits applied on ingested log streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ingestion DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ingestion}
  */
  readonly ingestion?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestion;
  /**
  * QueryLimits defines the limit applied on querying log streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#queries DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#queries}
  */
  readonly queries?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueries;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestionToTerraform(struct!.ingestion),
    queries: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueriesToTerraform(struct!.queries),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestionToHclTerraform(struct!.ingestion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestion",
    },
    queries: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueriesToHclTerraform(struct!.queries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueries",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestion = this._ingestion?.internalValue;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestion.internalValue = undefined;
      this._queries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestion.internalValue = value.ingestion;
      this._queries.internalValue = value.queries;
    }
  }

  // ingestion - computed: false, optional: true, required: false
  private _ingestion = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestionOutputReference(this, "ingestion");
  public get ingestion() {
    return this._ingestion;
  }
  public putIngestion(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalIngestion) {
    this._ingestion.internalValue = value;
  }
  public resetIngestion() {
    this._ingestion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionInput() {
    return this._ingestion.internalValue;
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueriesOutputReference(this, "queries");
  public get queries() {
    return this._queries;
  }
  public putQueries(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalQueries) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestion {
  /**
  * IngestionBurstSize defines the local rate-limited sample size per distributor replica. It should be set to the set at least to the maximum logs size expected in a single push request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ingestion_burst_size DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ingestion_burst_size}
  */
  readonly ingestionBurstSize?: number;
  /**
  * IngestionRate defines the sample size per second. Units MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ingestion_rate DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ingestion_rate}
  */
  readonly ingestionRate?: number;
  /**
  * MaxGlobalStreamsPerTenant defines the maximum number of active streams per tenant, across the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_global_streams_per_tenant DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_global_streams_per_tenant}
  */
  readonly maxGlobalStreamsPerTenant?: number;
  /**
  * MaxLabelNameLength defines the maximum number of characters allowed for label keys in log streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_label_name_length DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_label_name_length}
  */
  readonly maxLabelNameLength?: number;
  /**
  * MaxLabelNamesPerSeries defines the maximum number of label names per series in each log stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_label_names_per_series DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_label_names_per_series}
  */
  readonly maxLabelNamesPerSeries?: number;
  /**
  * MaxLabelValueLength defines the maximum number of characters allowed for label values in log streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_label_value_length DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_label_value_length}
  */
  readonly maxLabelValueLength?: number;
  /**
  * MaxLineSize defines the maximum line size on ingestion path. Units in Bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_line_size DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_line_size}
  */
  readonly maxLineSize?: number;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestionToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion_burst_size: cdktf.numberToTerraform(struct!.ingestionBurstSize),
    ingestion_rate: cdktf.numberToTerraform(struct!.ingestionRate),
    max_global_streams_per_tenant: cdktf.numberToTerraform(struct!.maxGlobalStreamsPerTenant),
    max_label_name_length: cdktf.numberToTerraform(struct!.maxLabelNameLength),
    max_label_names_per_series: cdktf.numberToTerraform(struct!.maxLabelNamesPerSeries),
    max_label_value_length: cdktf.numberToTerraform(struct!.maxLabelValueLength),
    max_line_size: cdktf.numberToTerraform(struct!.maxLineSize),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestionToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion_burst_size: {
      value: cdktf.numberToHclTerraform(struct!.ingestionBurstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingestion_rate: {
      value: cdktf.numberToHclTerraform(struct!.ingestionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_global_streams_per_tenant: {
      value: cdktf.numberToHclTerraform(struct!.maxGlobalStreamsPerTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_label_name_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLabelNameLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_label_names_per_series: {
      value: cdktf.numberToHclTerraform(struct!.maxLabelNamesPerSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_label_value_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLabelValueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_line_size: {
      value: cdktf.numberToHclTerraform(struct!.maxLineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestionBurstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionBurstSize = this._ingestionBurstSize;
    }
    if (this._ingestionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionRate = this._ingestionRate;
    }
    if (this._maxGlobalStreamsPerTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGlobalStreamsPerTenant = this._maxGlobalStreamsPerTenant;
    }
    if (this._maxLabelNameLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLabelNameLength = this._maxLabelNameLength;
    }
    if (this._maxLabelNamesPerSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLabelNamesPerSeries = this._maxLabelNamesPerSeries;
    }
    if (this._maxLabelValueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLabelValueLength = this._maxLabelValueLength;
    }
    if (this._maxLineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLineSize = this._maxLineSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestionBurstSize = undefined;
      this._ingestionRate = undefined;
      this._maxGlobalStreamsPerTenant = undefined;
      this._maxLabelNameLength = undefined;
      this._maxLabelNamesPerSeries = undefined;
      this._maxLabelValueLength = undefined;
      this._maxLineSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestionBurstSize = value.ingestionBurstSize;
      this._ingestionRate = value.ingestionRate;
      this._maxGlobalStreamsPerTenant = value.maxGlobalStreamsPerTenant;
      this._maxLabelNameLength = value.maxLabelNameLength;
      this._maxLabelNamesPerSeries = value.maxLabelNamesPerSeries;
      this._maxLabelValueLength = value.maxLabelValueLength;
      this._maxLineSize = value.maxLineSize;
    }
  }

  // ingestion_burst_size - computed: false, optional: true, required: false
  private _ingestionBurstSize?: number; 
  public get ingestionBurstSize() {
    return this.getNumberAttribute('ingestion_burst_size');
  }
  public set ingestionBurstSize(value: number) {
    this._ingestionBurstSize = value;
  }
  public resetIngestionBurstSize() {
    this._ingestionBurstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionBurstSizeInput() {
    return this._ingestionBurstSize;
  }

  // ingestion_rate - computed: false, optional: true, required: false
  private _ingestionRate?: number; 
  public get ingestionRate() {
    return this.getNumberAttribute('ingestion_rate');
  }
  public set ingestionRate(value: number) {
    this._ingestionRate = value;
  }
  public resetIngestionRate() {
    this._ingestionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionRateInput() {
    return this._ingestionRate;
  }

  // max_global_streams_per_tenant - computed: false, optional: true, required: false
  private _maxGlobalStreamsPerTenant?: number; 
  public get maxGlobalStreamsPerTenant() {
    return this.getNumberAttribute('max_global_streams_per_tenant');
  }
  public set maxGlobalStreamsPerTenant(value: number) {
    this._maxGlobalStreamsPerTenant = value;
  }
  public resetMaxGlobalStreamsPerTenant() {
    this._maxGlobalStreamsPerTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGlobalStreamsPerTenantInput() {
    return this._maxGlobalStreamsPerTenant;
  }

  // max_label_name_length - computed: false, optional: true, required: false
  private _maxLabelNameLength?: number; 
  public get maxLabelNameLength() {
    return this.getNumberAttribute('max_label_name_length');
  }
  public set maxLabelNameLength(value: number) {
    this._maxLabelNameLength = value;
  }
  public resetMaxLabelNameLength() {
    this._maxLabelNameLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLabelNameLengthInput() {
    return this._maxLabelNameLength;
  }

  // max_label_names_per_series - computed: false, optional: true, required: false
  private _maxLabelNamesPerSeries?: number; 
  public get maxLabelNamesPerSeries() {
    return this.getNumberAttribute('max_label_names_per_series');
  }
  public set maxLabelNamesPerSeries(value: number) {
    this._maxLabelNamesPerSeries = value;
  }
  public resetMaxLabelNamesPerSeries() {
    this._maxLabelNamesPerSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLabelNamesPerSeriesInput() {
    return this._maxLabelNamesPerSeries;
  }

  // max_label_value_length - computed: false, optional: true, required: false
  private _maxLabelValueLength?: number; 
  public get maxLabelValueLength() {
    return this.getNumberAttribute('max_label_value_length');
  }
  public set maxLabelValueLength(value: number) {
    this._maxLabelValueLength = value;
  }
  public resetMaxLabelValueLength() {
    this._maxLabelValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLabelValueLengthInput() {
    return this._maxLabelValueLength;
  }

  // max_line_size - computed: false, optional: true, required: false
  private _maxLineSize?: number; 
  public get maxLineSize() {
    return this.getNumberAttribute('max_line_size');
  }
  public set maxLineSize(value: number) {
    this._maxLineSize = value;
  }
  public resetMaxLineSize() {
    this._maxLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLineSizeInput() {
    return this._maxLineSize;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueries {
  /**
  * MaxChunksPerQuery defines the maximum number of chunks that can be fetched by a single query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_chunks_per_query DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_chunks_per_query}
  */
  readonly maxChunksPerQuery?: number;
  /**
  * MaxEntriesLimitsPerQuery defines the maximum number of log entries that will be returned for a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_entries_limit_per_query DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_entries_limit_per_query}
  */
  readonly maxEntriesLimitPerQuery?: number;
  /**
  * MaxQuerySeries defines the maximum of unique series that is returned by a metric query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#max_query_series DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#max_query_series}
  */
  readonly maxQuerySeries?: number;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueriesToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_chunks_per_query: cdktf.numberToTerraform(struct!.maxChunksPerQuery),
    max_entries_limit_per_query: cdktf.numberToTerraform(struct!.maxEntriesLimitPerQuery),
    max_query_series: cdktf.numberToTerraform(struct!.maxQuerySeries),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueriesToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_chunks_per_query: {
      value: cdktf.numberToHclTerraform(struct!.maxChunksPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_entries_limit_per_query: {
      value: cdktf.numberToHclTerraform(struct!.maxEntriesLimitPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_query_series: {
      value: cdktf.numberToHclTerraform(struct!.maxQuerySeries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxChunksPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxChunksPerQuery = this._maxChunksPerQuery;
    }
    if (this._maxEntriesLimitPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntriesLimitPerQuery = this._maxEntriesLimitPerQuery;
    }
    if (this._maxQuerySeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySeries = this._maxQuerySeries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxChunksPerQuery = undefined;
      this._maxEntriesLimitPerQuery = undefined;
      this._maxQuerySeries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxChunksPerQuery = value.maxChunksPerQuery;
      this._maxEntriesLimitPerQuery = value.maxEntriesLimitPerQuery;
      this._maxQuerySeries = value.maxQuerySeries;
    }
  }

  // max_chunks_per_query - computed: false, optional: true, required: false
  private _maxChunksPerQuery?: number; 
  public get maxChunksPerQuery() {
    return this.getNumberAttribute('max_chunks_per_query');
  }
  public set maxChunksPerQuery(value: number) {
    this._maxChunksPerQuery = value;
  }
  public resetMaxChunksPerQuery() {
    this._maxChunksPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxChunksPerQueryInput() {
    return this._maxChunksPerQuery;
  }

  // max_entries_limit_per_query - computed: false, optional: true, required: false
  private _maxEntriesLimitPerQuery?: number; 
  public get maxEntriesLimitPerQuery() {
    return this.getNumberAttribute('max_entries_limit_per_query');
  }
  public set maxEntriesLimitPerQuery(value: number) {
    this._maxEntriesLimitPerQuery = value;
  }
  public resetMaxEntriesLimitPerQuery() {
    this._maxEntriesLimitPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesLimitPerQueryInput() {
    return this._maxEntriesLimitPerQuery;
  }

  // max_query_series - computed: false, optional: true, required: false
  private _maxQuerySeries?: number; 
  public get maxQuerySeries() {
    return this.getNumberAttribute('max_query_series');
  }
  public set maxQuerySeries(value: number) {
    this._maxQuerySeries = value;
  }
  public resetMaxQuerySeries() {
    this._maxQuerySeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySeriesInput() {
    return this._maxQuerySeries;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenants {
  /**
  * IngestionLimits defines the limits applied on ingested log streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ingestion DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ingestion}
  */
  readonly ingestion?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestion;
  /**
  * QueryLimits defines the limit applied on querying log streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#queries DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#queries}
  */
  readonly queries?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueries;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestionToTerraform(struct!.ingestion),
    queries: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueriesToTerraform(struct!.queries),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestionToHclTerraform(struct!.ingestion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestion",
    },
    queries: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueriesToHclTerraform(struct!.queries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueries",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestion = this._ingestion?.internalValue;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestion.internalValue = undefined;
      this._queries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestion.internalValue = value.ingestion;
      this._queries.internalValue = value.queries;
    }
  }

  // ingestion - computed: false, optional: true, required: false
  private _ingestion = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestionOutputReference(this, "ingestion");
  public get ingestion() {
    return this._ingestion;
  }
  public putIngestion(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsIngestion) {
    this._ingestion.internalValue = value;
  }
  public resetIngestion() {
    this._ingestion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionInput() {
    return this._ingestion.internalValue;
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueriesOutputReference(this, "queries");
  public get queries() {
    return this._queries;
  }
  public putQueries(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsQueries) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimits {
  /**
  * Global defines the limits applied globally across the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#global DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#global}
  */
  readonly global?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobal;
  /**
  * Tenants defines the limits and overrides applied per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tenants DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tenants}
  */
  readonly tenants?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenants;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalToTerraform(struct!.global),
    tenants: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsToTerraform(struct!.tenants),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobal",
    },
    tenants: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsToHclTerraform(struct!.tenants),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenants",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._tenants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._global.internalValue = undefined;
      this._tenants.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._global.internalValue = value.global;
      this._tenants.internalValue = value.tenants;
    }
  }

  // global - computed: false, optional: true, required: false
  private _global = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenantsOutputReference(this, "tenants");
  public get tenants() {
    return this._tenants;
  }
  public putTenants(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsTenants) {
    this._tenants.internalValue = value;
  }
  public resetTenants() {
    this._tenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#values DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#match_expressions DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#match_labels DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#values DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#match_expressions DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#match_labels DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRules {
  /**
  * Enabled defines a flag to enable/disable the ruler component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#enabled DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Namespaces to be selected for PrometheusRules discovery. If unspecified, only the same namespace as the LokiStack object is in is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#namespace_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelector;
  /**
  * A selector to select which LokiRules to mount for loading alerting/recording rules from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelector;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    namespace_selector: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorToTerraform(struct!.namespaceSelector),
    selector: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRules | cdktf.IResolvable): any {
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
    namespace_selector: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelector",
    },
    selector: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._selector.internalValue = value.selector;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemas {
  /**
  * EffectiveDate is the date in UTC that the schema will be applied on. To ensure readibility of logs, this date should be before the current date in UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effective_date DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effective_date}
  */
  readonly effectiveDate: string;
  /**
  * Version for writing and reading logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#version DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effective_date: cdktf.stringToTerraform(struct!.effectiveDate),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effective_date: {
      value: cdktf.stringToHclTerraform(struct!.effectiveDate),
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectiveDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveDate = this._effectiveDate;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effectiveDate = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effectiveDate = value.effectiveDate;
      this._version = value.version;
    }
  }

  // effective_date - computed: false, optional: false, required: true
  private _effectiveDate?: string; 
  public get effectiveDate() {
    return this.getStringAttribute('effective_date');
  }
  public set effectiveDate(value: string) {
    this._effectiveDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveDateInput() {
    return this._effectiveDate;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecret {
  /**
  * Name of a secret in the namespace configured for object storage secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Type of object storage that should be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#type DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecretToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecretToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTls {
  /**
  * CA is the name of a ConfigMap containing a CA certificate. It needs to be in the same namespace as the LokiStack custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ca_name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ca_name}
  */
  readonly caName?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTlsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_name: cdktf.stringToTerraform(struct!.caName),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTlsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_name: {
      value: cdktf.stringToHclTerraform(struct!.caName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caName !== undefined) {
      hasAnyValues = true;
      internalValueResult.caName = this._caName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caName = value.caName;
    }
  }

  // ca_name - computed: false, optional: true, required: false
  private _caName?: string; 
  public get caName() {
    return this.getStringAttribute('ca_name');
  }
  public set caName(value: string) {
    this._caName = value;
  }
  public resetCaName() {
    this._caName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caNameInput() {
    return this._caName;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorage {
  /**
  * Schemas for reading and writing logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#schemas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#schemas}
  */
  readonly schemas?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemas[] | cdktf.IResolvable;
  /**
  * Secret for object storage authentication. Name of a secret in the same namespace as the LokiStack custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#secret DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#secret}
  */
  readonly secret: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecret;
  /**
  * TLS configuration for reaching the object storage endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tls DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTls;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasToTerraform, false)(struct!.schemas),
    secret: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecretToTerraform(struct!.secret),
    tls: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTlsToTerraform(struct!.tls),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasToHclTerraform, false)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasList",
    },
    secret: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecret",
    },
    tls: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemas.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemas.internalValue = value.schemas;
      this._secret.internalValue = value.secret;
      this._tls.internalValue = value.tls;
    }
  }

  // schemas - computed: false, optional: true, required: false
  private _schemas = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSchemas[] | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  public resetSchemas() {
    this._schemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#value DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactor {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#value DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributor {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#value DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGateway {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#value DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGateway {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#value DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngester {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngester | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngester | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngester | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngester | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#value DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerier {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#value DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontend {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#key DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#value DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRuler {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRuler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRuler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRuler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRuler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplate {
  /**
  * Compactor defines the compaction component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#compactor DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#compactor}
  */
  readonly compactor?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactor;
  /**
  * Distributor defines the distributor component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#distributor DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#distributor}
  */
  readonly distributor?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributor;
  /**
  * Gateway defines the lokistack gateway component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#gateway DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#gateway}
  */
  readonly gateway?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGateway;
  /**
  * IndexGateway defines the index gateway component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#index_gateway DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#index_gateway}
  */
  readonly indexGateway?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGateway;
  /**
  * Ingester defines the ingester component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ingester DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ingester}
  */
  readonly ingester?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngester;
  /**
  * Querier defines the querier component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#querier DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#querier}
  */
  readonly querier?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerier;
  /**
  * QueryFrontend defines the query frontend component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#query_frontend DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#query_frontend}
  */
  readonly queryFrontend?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontend;
  /**
  * Ruler defines the ruler component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#ruler DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#ruler}
  */
  readonly ruler?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRuler;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compactor: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorToTerraform(struct!.compactor),
    distributor: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorToTerraform(struct!.distributor),
    gateway: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayToTerraform(struct!.gateway),
    index_gateway: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayToTerraform(struct!.indexGateway),
    ingester: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterToTerraform(struct!.ingester),
    querier: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierToTerraform(struct!.querier),
    query_frontend: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendToTerraform(struct!.queryFrontend),
    ruler: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerToTerraform(struct!.ruler),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compactor: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorToHclTerraform(struct!.compactor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactor",
    },
    distributor: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorToHclTerraform(struct!.distributor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributor",
    },
    gateway: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGateway",
    },
    index_gateway: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayToHclTerraform(struct!.indexGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGateway",
    },
    ingester: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterToHclTerraform(struct!.ingester),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngester",
    },
    querier: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierToHclTerraform(struct!.querier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerier",
    },
    query_frontend: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendToHclTerraform(struct!.queryFrontend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontend",
    },
    ruler: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerToHclTerraform(struct!.ruler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRuler",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactor = this._compactor?.internalValue;
    }
    if (this._distributor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributor = this._distributor?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._indexGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexGateway = this._indexGateway?.internalValue;
    }
    if (this._ingester?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingester = this._ingester?.internalValue;
    }
    if (this._querier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querier = this._querier?.internalValue;
    }
    if (this._queryFrontend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFrontend = this._queryFrontend?.internalValue;
    }
    if (this._ruler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruler = this._ruler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compactor.internalValue = undefined;
      this._distributor.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._indexGateway.internalValue = undefined;
      this._ingester.internalValue = undefined;
      this._querier.internalValue = undefined;
      this._queryFrontend.internalValue = undefined;
      this._ruler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compactor.internalValue = value.compactor;
      this._distributor.internalValue = value.distributor;
      this._gateway.internalValue = value.gateway;
      this._indexGateway.internalValue = value.indexGateway;
      this._ingester.internalValue = value.ingester;
      this._querier.internalValue = value.querier;
      this._queryFrontend.internalValue = value.queryFrontend;
      this._ruler.internalValue = value.ruler;
    }
  }

  // compactor - computed: false, optional: true, required: false
  private _compactor = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactorOutputReference(this, "compactor");
  public get compactor() {
    return this._compactor;
  }
  public putCompactor(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateCompactor) {
    this._compactor.internalValue = value;
  }
  public resetCompactor() {
    this._compactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactorInput() {
    return this._compactor.internalValue;
  }

  // distributor - computed: false, optional: true, required: false
  private _distributor = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributorOutputReference(this, "distributor");
  public get distributor() {
    return this._distributor;
  }
  public putDistributor(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateDistributor) {
    this._distributor.internalValue = value;
  }
  public resetDistributor() {
    this._distributor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributorInput() {
    return this._distributor.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // index_gateway - computed: false, optional: true, required: false
  private _indexGateway = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGatewayOutputReference(this, "index_gateway");
  public get indexGateway() {
    return this._indexGateway;
  }
  public putIndexGateway(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIndexGateway) {
    this._indexGateway.internalValue = value;
  }
  public resetIndexGateway() {
    this._indexGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexGatewayInput() {
    return this._indexGateway.internalValue;
  }

  // ingester - computed: false, optional: true, required: false
  private _ingester = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngesterOutputReference(this, "ingester");
  public get ingester() {
    return this._ingester;
  }
  public putIngester(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateIngester) {
    this._ingester.internalValue = value;
  }
  public resetIngester() {
    this._ingester.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingesterInput() {
    return this._ingester.internalValue;
  }

  // querier - computed: false, optional: true, required: false
  private _querier = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerierOutputReference(this, "querier");
  public get querier() {
    return this._querier;
  }
  public putQuerier(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQuerier) {
    this._querier.internalValue = value;
  }
  public resetQuerier() {
    this._querier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierInput() {
    return this._querier.internalValue;
  }

  // query_frontend - computed: false, optional: true, required: false
  private _queryFrontend = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontendOutputReference(this, "query_frontend");
  public get queryFrontend() {
    return this._queryFrontend;
  }
  public putQueryFrontend(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateQueryFrontend) {
    this._queryFrontend.internalValue = value;
  }
  public resetQueryFrontend() {
    this._queryFrontend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrontendInput() {
    return this._queryFrontend.internalValue;
  }

  // ruler - computed: false, optional: true, required: false
  private _ruler = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRulerOutputReference(this, "ruler");
  public get ruler() {
    return this._ruler;
  }
  public putRuler(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateRuler) {
    this._ruler.internalValue = value;
  }
  public resetRuler() {
    this._ruler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulerInput() {
    return this._ruler.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecret {
  /**
  * Name of a secret in the namespace configured for tenant secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecretToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecretToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidc {
  /**
  * Group claim field from ID Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#group_claim DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#group_claim}
  */
  readonly groupClaim?: string;
  /**
  * IssuerURL defines the URL for issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#issuer_url DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * RedirectURL defines the URL for redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#redirect_url DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Secret defines the spec for the clientID, clientSecret and issuerCAPath for tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#secret DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#secret}
  */
  readonly secret: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecret;
  /**
  * User claim field from ID Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#username_claim DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#username_claim}
  */
  readonly usernameClaim?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_claim: cdktf.stringToTerraform(struct!.groupClaim),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    secret: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecretToTerraform(struct!.secret),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecret",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupClaim = this._groupClaim;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupClaim = undefined;
      this._issuerUrl = undefined;
      this._redirectUrl = undefined;
      this._secret.internalValue = undefined;
      this._usernameClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupClaim = value.groupClaim;
      this._issuerUrl = value.issuerUrl;
      this._redirectUrl = value.redirectUrl;
      this._secret.internalValue = value.secret;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // group_claim - computed: false, optional: true, required: false
  private _groupClaim?: string; 
  public get groupClaim() {
    return this.getStringAttribute('group_claim');
  }
  public set groupClaim(value: string) {
    this._groupClaim = value;
  }
  public resetGroupClaim() {
    this._groupClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimInput() {
    return this._groupClaim;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthentication {
  /**
  * OIDC defines the spec for the OIDC tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#oidc DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#oidc}
  */
  readonly oidc: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidc;
  /**
  * TenantID defines the id of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tenant_id DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tenant_id}
  */
  readonly tenantId: string;
  /**
  * TenantName defines the name of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tenant_name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tenant_name}
  */
  readonly tenantName: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcToTerraform(struct!.oidc),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidc",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidc.internalValue = undefined;
      this._tenantId = undefined;
      this._tenantName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidc.internalValue = value.oidc;
      this._tenantId = value.tenantId;
      this._tenantName = value.tenantName;
    }
  }

  // oidc - computed: false, optional: false, required: true
  private _oidc = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOidc) {
    this._oidc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpa {
  /**
  * URL defines the third-party endpoint for authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#url DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpaToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpaToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjects {
  /**
  * SubjectKind is a kind of LokiStack Gateway RBAC subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#kind DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#roles DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#roles}
  */
  readonly roles: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#subjects DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#subjects}
  */
  readonly subjects: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._roles = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._roles = value.roles;
      this._subjects.internalValue = value.subjects;
    }
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // subjects - computed: false, optional: false, required: true
  private _subjects = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#permissions DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#permissions}
  */
  readonly permissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#resources DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#resources}
  */
  readonly resources: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tenants DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tenants}
  */
  readonly tenants: string[];
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenants),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenants),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._tenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
      this._resources = undefined;
      this._tenants = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
      this._resources = value.resources;
      this._tenants = value.tenants;
    }
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // tenants - computed: false, optional: false, required: true
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorization {
  /**
  * OPA defines the spec for the third-party endpoint for tenant's authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#opa DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#opa}
  */
  readonly opa?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpa;
  /**
  * RoleBindings defines configuration to bind a set of roles to a set of subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#role_bindings DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#role_bindings}
  */
  readonly roleBindings?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable;
  /**
  * Roles defines a set of permissions to interact with a tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#roles DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#roles}
  */
  readonly roles?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opa: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpaToTerraform(struct!.opa),
    role_bindings: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsToTerraform, false)(struct!.roleBindings),
    roles: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesToTerraform, false)(struct!.roles),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opa: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpaToHclTerraform(struct!.opa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpa",
    },
    role_bindings: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsToHclTerraform, false)(struct!.roleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsList",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opa = this._opa?.internalValue;
    }
    if (this._roleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBindings = this._roleBindings?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._opa.internalValue = undefined;
      this._roleBindings.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._opa.internalValue = value.opa;
      this._roleBindings.internalValue = value.roleBindings;
      this._roles.internalValue = value.roles;
    }
  }

  // opa - computed: false, optional: true, required: false
  private _opa = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpaOutputReference(this, "opa");
  public get opa() {
    return this._opa;
  }
  public putOpa(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOpa) {
    this._opa.internalValue = value;
  }
  public resetOpa() {
    this._opa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaInput() {
    return this._opa.internalValue;
  }

  // role_bindings - computed: false, optional: true, required: false
  private _roleBindings = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
  public putRoleBindings(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable) {
    this._roleBindings.internalValue = value;
  }
  public resetRoleBindings() {
    this._roleBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingsInput() {
    return this._roleBindings.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenants {
  /**
  * Authentication defines the lokistack-gateway component authentication configuration spec per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#authentication DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#authentication}
  */
  readonly authentication?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable;
  /**
  * Authorization defines the lokistack-gateway component authorization configuration spec per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#authorization DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#authorization}
  */
  readonly authorization?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorization;
  /**
  * Mode defines the mode in which lokistack-gateway component will be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#mode DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#mode}
  */
  readonly mode: string;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationToTerraform, false)(struct!.authentication),
    authorization: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationToTerraform(struct!.authorization),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationToHclTerraform, false)(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationList",
    },
    authorization: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorization",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._authorization.internalValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._authorization.internalValue = value.authorization;
      this._mode = value.mode;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpec {
  /**
  * Limits defines the per-tenant limits to be applied to log stream processing and the per-tenant the config overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#limits DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#limits}
  */
  readonly limits?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimits;
  /**
  * ManagementState defines if the CR should be managed by the operator or not. Default is managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#management_state DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#management_state}
  */
  readonly managementState: string;
  /**
  * ReplicationFactor defines the policy for log stream replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#replication_factor DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Rules defines the spec for the ruler component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#rules DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#rules}
  */
  readonly rules?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRules;
  /**
  * Size defines one of the support Loki deployment scale out sizes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#size DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#size}
  */
  readonly size: string;
  /**
  * Storage defines the spec for the object storage endpoint to store logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#storage DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#storage}
  */
  readonly storage: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorage;
  /**
  * Storage class name defines the storage class for ingester/querier PVCs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#storage_class_name DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName: string;
  /**
  * Template defines the resource/limits/tolerations/nodeselectors per component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#template DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#template}
  */
  readonly template?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplate;
  /**
  * Tenants defines the per-tenant authentication and authorization spec for the lokistack-gateway component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#tenants DataK8SLokiGrafanaComLokiStackV1Beta1Manifest#tenants}
  */
  readonly tenants?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenants;
}

export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsToTerraform(struct!.limits),
    management_state: cdktf.stringToTerraform(struct!.managementState),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    rules: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesToTerraform(struct!.rules),
    size: cdktf.stringToTerraform(struct!.size),
    storage: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageToTerraform(struct!.storage),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    template: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateToTerraform(struct!.template),
    tenants: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsToTerraform(struct!.tenants),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimits",
    },
    management_state: {
      value: cdktf.stringToHclTerraform(struct!.managementState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRules",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorage",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplate",
    },
    tenants: {
      value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsToHclTerraform(struct!.tenants),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenants",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._managementState !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementState = this._managementState;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._tenants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
      this._managementState = undefined;
      this._replicationFactor = undefined;
      this._rules.internalValue = undefined;
      this._size = undefined;
      this._storage.internalValue = undefined;
      this._storageClassName = undefined;
      this._template.internalValue = undefined;
      this._tenants.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
      this._managementState = value.managementState;
      this._replicationFactor = value.replicationFactor;
      this._rules.internalValue = value.rules;
      this._size = value.size;
      this._storage.internalValue = value.storage;
      this._storageClassName = value.storageClassName;
      this._template.internalValue = value.template;
      this._tenants.internalValue = value.tenants;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // management_state - computed: false, optional: false, required: true
  private _managementState?: string; 
  public get managementState() {
    return this.getStringAttribute('management_state');
  }
  public set managementState(value: string) {
    this._managementState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStateInput() {
    return this._managementState;
  }

  // replication_factor - computed: false, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // storage_class_name - computed: false, optional: false, required: true
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenantsOutputReference(this, "tenants");
  public get tenants() {
    return this._tenants;
  }
  public putTenants(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecTenants) {
    this._tenants.internalValue = value;
  }
  public resetTenants() {
    this._tenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest k8s_loki_grafana_com_loki_stack_v1beta1_manifest}
*/
export class DataK8SLokiGrafanaComLokiStackV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_loki_grafana_com_loki_stack_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLokiGrafanaComLokiStackV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLokiGrafanaComLokiStackV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SLokiGrafanaComLokiStackV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLokiGrafanaComLokiStackV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_loki_grafana_com_loki_stack_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1beta1_manifest k8s_loki_grafana_com_loki_stack_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLokiGrafanaComLokiStackV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_loki_grafana_com_loki_stack_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLokiGrafanaComLokiStackV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
