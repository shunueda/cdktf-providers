// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#metadata DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired state of ClusterImpairment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#spec DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpec;
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#annotations DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#labels DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#name DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptions {
  /**
  * The correlation between sequential corruption values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#correlation}
  */
  readonly correlation?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptionsToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.numberToTerraform(struct!.correlation),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptionsToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.numberToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: number; 
  public get correlation() {
    return this.getNumberAttribute('correlation');
  }
  public set correlation(value: number) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptions {
  /**
  * The correlation between sequential duplication values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#correlation}
  */
  readonly correlation?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptionsToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.numberToTerraform(struct!.correlation),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptionsToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.numberToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: number; 
  public get correlation() {
    return this.getNumberAttribute('correlation');
  }
  public set correlation(value: number) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptions {
  /**
  * The way the jitter is distributed. Options: Normal, Uniform, Pareto, Paretonormal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#distribution DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#distribution}
  */
  readonly distribution?: string;
  /**
  * Variation in the latency that follows the specified distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#jitter DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#jitter}
  */
  readonly jitter?: number;
  /**
  * The correlation between sequential jitter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#jitter_correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#jitter_correlation}
  */
  readonly jitterCorrelation?: number;
  /**
  * The percentage of packets that are not delayed, causing reordering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#reorder DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#reorder}
  */
  readonly reorder?: number;
  /**
  * The correlation between sequential reorder values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#reorder_correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#reorder_correlation}
  */
  readonly reorderCorrelation?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptionsToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution: cdktf.stringToTerraform(struct!.distribution),
    jitter: cdktf.numberToTerraform(struct!.jitter),
    jitter_correlation: cdktf.numberToTerraform(struct!.jitterCorrelation),
    reorder: cdktf.numberToTerraform(struct!.reorder),
    reorder_correlation: cdktf.numberToTerraform(struct!.reorderCorrelation),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptionsToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution: {
      value: cdktf.stringToHclTerraform(struct!.distribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jitter: {
      value: cdktf.numberToHclTerraform(struct!.jitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_correlation: {
      value: cdktf.numberToHclTerraform(struct!.jitterCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reorder: {
      value: cdktf.numberToHclTerraform(struct!.reorder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reorder_correlation: {
      value: cdktf.numberToHclTerraform(struct!.reorderCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._jitterCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterCorrelation = this._jitterCorrelation;
    }
    if (this._reorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorder = this._reorder;
    }
    if (this._reorderCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorderCorrelation = this._reorderCorrelation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribution = undefined;
      this._jitter = undefined;
      this._jitterCorrelation = undefined;
      this._reorder = undefined;
      this._reorderCorrelation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribution = value.distribution;
      this._jitter = value.jitter;
      this._jitterCorrelation = value.jitterCorrelation;
      this._reorder = value.reorder;
      this._reorderCorrelation = value.reorderCorrelation;
    }
  }

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // jitter - computed: false, optional: true, required: false
  private _jitter?: number; 
  public get jitter() {
    return this.getNumberAttribute('jitter');
  }
  public set jitter(value: number) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // jitter_correlation - computed: false, optional: true, required: false
  private _jitterCorrelation?: number; 
  public get jitterCorrelation() {
    return this.getNumberAttribute('jitter_correlation');
  }
  public set jitterCorrelation(value: number) {
    this._jitterCorrelation = value;
  }
  public resetJitterCorrelation() {
    this._jitterCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterCorrelationInput() {
    return this._jitterCorrelation;
  }

  // reorder - computed: false, optional: true, required: false
  private _reorder?: number; 
  public get reorder() {
    return this.getNumberAttribute('reorder');
  }
  public set reorder(value: number) {
    this._reorder = value;
  }
  public resetReorder() {
    this._reorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderInput() {
    return this._reorder;
  }

  // reorder_correlation - computed: false, optional: true, required: false
  private _reorderCorrelation?: number; 
  public get reorderCorrelation() {
    return this.getNumberAttribute('reorder_correlation');
  }
  public set reorderCorrelation(value: number) {
    this._reorderCorrelation = value;
  }
  public resetReorderCorrelation() {
    this._reorderCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderCorrelationInput() {
    return this._reorderCorrelation;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptions {
  /**
  * The correlation between sequential packet loss values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#correlation}
  */
  readonly correlation?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptionsToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.numberToTerraform(struct!.correlation),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptionsToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.numberToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: number; 
  public get correlation() {
    return this.getNumberAttribute('correlation');
  }
  public set correlation(value: number) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgress {
  /**
  * The bandwidth limit in kbit/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#bandwidth DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * The percent of packets that are corrupted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#corruption DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#corruption}
  */
  readonly corruption?: number;
  /**
  * Advanced corruption options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#corruption_options DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#corruption_options}
  */
  readonly corruptionOptions?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptions;
  /**
  * The percent of packets duplicated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#duplication DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#duplication}
  */
  readonly duplication?: number;
  /**
  * Advanced duplication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#duplication_options DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#duplication_options}
  */
  readonly duplicationOptions?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptions;
  /**
  * The latency applied in ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#latency DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#latency}
  */
  readonly latency?: number;
  /**
  * Advanced latency options. Example: jitter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#latency_options DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#latency_options}
  */
  readonly latencyOptions?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptions;
  /**
  * The packet loss in percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#loss DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#loss}
  */
  readonly loss?: number;
  /**
  * Advanced packet loss options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#loss_options DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#loss_options}
  */
  readonly lossOptions?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptions;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    corruption: cdktf.numberToTerraform(struct!.corruption),
    corruption_options: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptionsToTerraform(struct!.corruptionOptions),
    duplication: cdktf.numberToTerraform(struct!.duplication),
    duplication_options: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptionsToTerraform(struct!.duplicationOptions),
    latency: cdktf.numberToTerraform(struct!.latency),
    latency_options: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptionsToTerraform(struct!.latencyOptions),
    loss: cdktf.numberToTerraform(struct!.loss),
    loss_options: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptionsToTerraform(struct!.lossOptions),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    corruption: {
      value: cdktf.numberToHclTerraform(struct!.corruption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    corruption_options: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptionsToHclTerraform(struct!.corruptionOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptions",
    },
    duplication: {
      value: cdktf.numberToHclTerraform(struct!.duplication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duplication_options: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptionsToHclTerraform(struct!.duplicationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptions",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_options: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptionsToHclTerraform(struct!.latencyOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptions",
    },
    loss: {
      value: cdktf.numberToHclTerraform(struct!.loss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loss_options: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptionsToHclTerraform(struct!.lossOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._corruption !== undefined) {
      hasAnyValues = true;
      internalValueResult.corruption = this._corruption;
    }
    if (this._corruptionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corruptionOptions = this._corruptionOptions?.internalValue;
    }
    if (this._duplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplication = this._duplication;
    }
    if (this._duplicationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicationOptions = this._duplicationOptions?.internalValue;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._latencyOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyOptions = this._latencyOptions?.internalValue;
    }
    if (this._loss !== undefined) {
      hasAnyValues = true;
      internalValueResult.loss = this._loss;
    }
    if (this._lossOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossOptions = this._lossOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._corruption = undefined;
      this._corruptionOptions.internalValue = undefined;
      this._duplication = undefined;
      this._duplicationOptions.internalValue = undefined;
      this._latency = undefined;
      this._latencyOptions.internalValue = undefined;
      this._loss = undefined;
      this._lossOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._corruption = value.corruption;
      this._corruptionOptions.internalValue = value.corruptionOptions;
      this._duplication = value.duplication;
      this._duplicationOptions.internalValue = value.duplicationOptions;
      this._latency = value.latency;
      this._latencyOptions.internalValue = value.latencyOptions;
      this._loss = value.loss;
      this._lossOptions.internalValue = value.lossOptions;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // corruption - computed: false, optional: true, required: false
  private _corruption?: number; 
  public get corruption() {
    return this.getNumberAttribute('corruption');
  }
  public set corruption(value: number) {
    this._corruption = value;
  }
  public resetCorruption() {
    this._corruption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corruptionInput() {
    return this._corruption;
  }

  // corruption_options - computed: false, optional: true, required: false
  private _corruptionOptions = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptionsOutputReference(this, "corruption_options");
  public get corruptionOptions() {
    return this._corruptionOptions;
  }
  public putCorruptionOptions(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressCorruptionOptions) {
    this._corruptionOptions.internalValue = value;
  }
  public resetCorruptionOptions() {
    this._corruptionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corruptionOptionsInput() {
    return this._corruptionOptions.internalValue;
  }

  // duplication - computed: false, optional: true, required: false
  private _duplication?: number; 
  public get duplication() {
    return this.getNumberAttribute('duplication');
  }
  public set duplication(value: number) {
    this._duplication = value;
  }
  public resetDuplication() {
    this._duplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationInput() {
    return this._duplication;
  }

  // duplication_options - computed: false, optional: true, required: false
  private _duplicationOptions = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptionsOutputReference(this, "duplication_options");
  public get duplicationOptions() {
    return this._duplicationOptions;
  }
  public putDuplicationOptions(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressDuplicationOptions) {
    this._duplicationOptions.internalValue = value;
  }
  public resetDuplicationOptions() {
    this._duplicationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationOptionsInput() {
    return this._duplicationOptions.internalValue;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // latency_options - computed: false, optional: true, required: false
  private _latencyOptions = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptionsOutputReference(this, "latency_options");
  public get latencyOptions() {
    return this._latencyOptions;
  }
  public putLatencyOptions(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLatencyOptions) {
    this._latencyOptions.internalValue = value;
  }
  public resetLatencyOptions() {
    this._latencyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyOptionsInput() {
    return this._latencyOptions.internalValue;
  }

  // loss - computed: false, optional: true, required: false
  private _loss?: number; 
  public get loss() {
    return this.getNumberAttribute('loss');
  }
  public set loss(value: number) {
    this._loss = value;
  }
  public resetLoss() {
    this._loss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossInput() {
    return this._loss;
  }

  // loss_options - computed: false, optional: true, required: false
  private _lossOptions = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptionsOutputReference(this, "loss_options");
  public get lossOptions() {
    return this._lossOptions;
  }
  public putLossOptions(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressLossOptions) {
    this._lossOptions.internalValue = value;
  }
  public resetLossOptions() {
    this._lossOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossOptionsInput() {
    return this._lossOptions.internalValue;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptions {
  /**
  * The correlation between sequential corruption values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#correlation}
  */
  readonly correlation?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptionsToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.numberToTerraform(struct!.correlation),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptionsToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.numberToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: number; 
  public get correlation() {
    return this.getNumberAttribute('correlation');
  }
  public set correlation(value: number) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptions {
  /**
  * The correlation between sequential duplication values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#correlation}
  */
  readonly correlation?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptionsToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.numberToTerraform(struct!.correlation),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptionsToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.numberToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: number; 
  public get correlation() {
    return this.getNumberAttribute('correlation');
  }
  public set correlation(value: number) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptions {
  /**
  * The way the jitter is distributed. Options: Normal, Uniform, Pareto, Paretonormal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#distribution DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#distribution}
  */
  readonly distribution?: string;
  /**
  * Variation in the latency that follows the specified distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#jitter DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#jitter}
  */
  readonly jitter?: number;
  /**
  * The correlation between sequential jitter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#jitter_correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#jitter_correlation}
  */
  readonly jitterCorrelation?: number;
  /**
  * The percentage of packets that are not delayed, causing reordering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#reorder DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#reorder}
  */
  readonly reorder?: number;
  /**
  * The correlation between sequential reorder values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#reorder_correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#reorder_correlation}
  */
  readonly reorderCorrelation?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptionsToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution: cdktf.stringToTerraform(struct!.distribution),
    jitter: cdktf.numberToTerraform(struct!.jitter),
    jitter_correlation: cdktf.numberToTerraform(struct!.jitterCorrelation),
    reorder: cdktf.numberToTerraform(struct!.reorder),
    reorder_correlation: cdktf.numberToTerraform(struct!.reorderCorrelation),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptionsToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution: {
      value: cdktf.stringToHclTerraform(struct!.distribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jitter: {
      value: cdktf.numberToHclTerraform(struct!.jitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_correlation: {
      value: cdktf.numberToHclTerraform(struct!.jitterCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reorder: {
      value: cdktf.numberToHclTerraform(struct!.reorder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reorder_correlation: {
      value: cdktf.numberToHclTerraform(struct!.reorderCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._jitterCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterCorrelation = this._jitterCorrelation;
    }
    if (this._reorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorder = this._reorder;
    }
    if (this._reorderCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorderCorrelation = this._reorderCorrelation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribution = undefined;
      this._jitter = undefined;
      this._jitterCorrelation = undefined;
      this._reorder = undefined;
      this._reorderCorrelation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribution = value.distribution;
      this._jitter = value.jitter;
      this._jitterCorrelation = value.jitterCorrelation;
      this._reorder = value.reorder;
      this._reorderCorrelation = value.reorderCorrelation;
    }
  }

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // jitter - computed: false, optional: true, required: false
  private _jitter?: number; 
  public get jitter() {
    return this.getNumberAttribute('jitter');
  }
  public set jitter(value: number) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // jitter_correlation - computed: false, optional: true, required: false
  private _jitterCorrelation?: number; 
  public get jitterCorrelation() {
    return this.getNumberAttribute('jitter_correlation');
  }
  public set jitterCorrelation(value: number) {
    this._jitterCorrelation = value;
  }
  public resetJitterCorrelation() {
    this._jitterCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterCorrelationInput() {
    return this._jitterCorrelation;
  }

  // reorder - computed: false, optional: true, required: false
  private _reorder?: number; 
  public get reorder() {
    return this.getNumberAttribute('reorder');
  }
  public set reorder(value: number) {
    this._reorder = value;
  }
  public resetReorder() {
    this._reorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderInput() {
    return this._reorder;
  }

  // reorder_correlation - computed: false, optional: true, required: false
  private _reorderCorrelation?: number; 
  public get reorderCorrelation() {
    return this.getNumberAttribute('reorder_correlation');
  }
  public set reorderCorrelation(value: number) {
    this._reorderCorrelation = value;
  }
  public resetReorderCorrelation() {
    this._reorderCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderCorrelationInput() {
    return this._reorderCorrelation;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptions {
  /**
  * The correlation between sequential packet loss values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#correlation DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#correlation}
  */
  readonly correlation?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptionsToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation: cdktf.numberToTerraform(struct!.correlation),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptionsToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation: {
      value: cdktf.numberToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlation = value.correlation;
    }
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: number; 
  public get correlation() {
    return this.getNumberAttribute('correlation');
  }
  public set correlation(value: number) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngress {
  /**
  * The bandwidth limit in kbit/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#bandwidth DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * The percent of packets that are corrupted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#corruption DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#corruption}
  */
  readonly corruption?: number;
  /**
  * Advanced corruption options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#corruption_options DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#corruption_options}
  */
  readonly corruptionOptions?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptions;
  /**
  * The percent of packets duplicated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#duplication DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#duplication}
  */
  readonly duplication?: number;
  /**
  * Advanced duplication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#duplication_options DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#duplication_options}
  */
  readonly duplicationOptions?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptions;
  /**
  * The latency applied in ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#latency DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#latency}
  */
  readonly latency?: number;
  /**
  * Advanced latency options. Example: jitter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#latency_options DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#latency_options}
  */
  readonly latencyOptions?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptions;
  /**
  * The packet loss in percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#loss DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#loss}
  */
  readonly loss?: number;
  /**
  * Advanced packet loss options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#loss_options DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#loss_options}
  */
  readonly lossOptions?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptions;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    corruption: cdktf.numberToTerraform(struct!.corruption),
    corruption_options: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptionsToTerraform(struct!.corruptionOptions),
    duplication: cdktf.numberToTerraform(struct!.duplication),
    duplication_options: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptionsToTerraform(struct!.duplicationOptions),
    latency: cdktf.numberToTerraform(struct!.latency),
    latency_options: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptionsToTerraform(struct!.latencyOptions),
    loss: cdktf.numberToTerraform(struct!.loss),
    loss_options: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptionsToTerraform(struct!.lossOptions),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    corruption: {
      value: cdktf.numberToHclTerraform(struct!.corruption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    corruption_options: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptionsToHclTerraform(struct!.corruptionOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptions",
    },
    duplication: {
      value: cdktf.numberToHclTerraform(struct!.duplication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duplication_options: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptionsToHclTerraform(struct!.duplicationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptions",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_options: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptionsToHclTerraform(struct!.latencyOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptions",
    },
    loss: {
      value: cdktf.numberToHclTerraform(struct!.loss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loss_options: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptionsToHclTerraform(struct!.lossOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._corruption !== undefined) {
      hasAnyValues = true;
      internalValueResult.corruption = this._corruption;
    }
    if (this._corruptionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corruptionOptions = this._corruptionOptions?.internalValue;
    }
    if (this._duplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplication = this._duplication;
    }
    if (this._duplicationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicationOptions = this._duplicationOptions?.internalValue;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._latencyOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyOptions = this._latencyOptions?.internalValue;
    }
    if (this._loss !== undefined) {
      hasAnyValues = true;
      internalValueResult.loss = this._loss;
    }
    if (this._lossOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossOptions = this._lossOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._corruption = undefined;
      this._corruptionOptions.internalValue = undefined;
      this._duplication = undefined;
      this._duplicationOptions.internalValue = undefined;
      this._latency = undefined;
      this._latencyOptions.internalValue = undefined;
      this._loss = undefined;
      this._lossOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._corruption = value.corruption;
      this._corruptionOptions.internalValue = value.corruptionOptions;
      this._duplication = value.duplication;
      this._duplicationOptions.internalValue = value.duplicationOptions;
      this._latency = value.latency;
      this._latencyOptions.internalValue = value.latencyOptions;
      this._loss = value.loss;
      this._lossOptions.internalValue = value.lossOptions;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // corruption - computed: false, optional: true, required: false
  private _corruption?: number; 
  public get corruption() {
    return this.getNumberAttribute('corruption');
  }
  public set corruption(value: number) {
    this._corruption = value;
  }
  public resetCorruption() {
    this._corruption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corruptionInput() {
    return this._corruption;
  }

  // corruption_options - computed: false, optional: true, required: false
  private _corruptionOptions = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptionsOutputReference(this, "corruption_options");
  public get corruptionOptions() {
    return this._corruptionOptions;
  }
  public putCorruptionOptions(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressCorruptionOptions) {
    this._corruptionOptions.internalValue = value;
  }
  public resetCorruptionOptions() {
    this._corruptionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corruptionOptionsInput() {
    return this._corruptionOptions.internalValue;
  }

  // duplication - computed: false, optional: true, required: false
  private _duplication?: number; 
  public get duplication() {
    return this.getNumberAttribute('duplication');
  }
  public set duplication(value: number) {
    this._duplication = value;
  }
  public resetDuplication() {
    this._duplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationInput() {
    return this._duplication;
  }

  // duplication_options - computed: false, optional: true, required: false
  private _duplicationOptions = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptionsOutputReference(this, "duplication_options");
  public get duplicationOptions() {
    return this._duplicationOptions;
  }
  public putDuplicationOptions(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressDuplicationOptions) {
    this._duplicationOptions.internalValue = value;
  }
  public resetDuplicationOptions() {
    this._duplicationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationOptionsInput() {
    return this._duplicationOptions.internalValue;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // latency_options - computed: false, optional: true, required: false
  private _latencyOptions = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptionsOutputReference(this, "latency_options");
  public get latencyOptions() {
    return this._latencyOptions;
  }
  public putLatencyOptions(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLatencyOptions) {
    this._latencyOptions.internalValue = value;
  }
  public resetLatencyOptions() {
    this._latencyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyOptionsInput() {
    return this._latencyOptions.internalValue;
  }

  // loss - computed: false, optional: true, required: false
  private _loss?: number; 
  public get loss() {
    return this.getNumberAttribute('loss');
  }
  public set loss(value: number) {
    this._loss = value;
  }
  public resetLoss() {
    this._loss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossInput() {
    return this._loss;
  }

  // loss_options - computed: false, optional: true, required: false
  private _lossOptions = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptionsOutputReference(this, "loss_options");
  public get lossOptions() {
    return this._lossOptions;
  }
  public putLossOptions(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressLossOptions) {
    this._lossOptions.internalValue = value;
  }
  public resetLossOptions() {
    this._lossOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossOptionsInput() {
    return this._lossOptions.internalValue;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlapping {
  /**
  * The duration that the link should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#down_time DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#down_time}
  */
  readonly downTime?: number;
  /**
  * Whether to enable link flapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#enable DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * The duration that the link should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#up_time DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#up_time}
  */
  readonly upTime?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlappingToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down_time: cdktf.numberToTerraform(struct!.downTime),
    enable: cdktf.booleanToTerraform(struct!.enable),
    up_time: cdktf.numberToTerraform(struct!.upTime),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlappingToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down_time: {
      value: cdktf.numberToHclTerraform(struct!.downTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    up_time: {
      value: cdktf.numberToHclTerraform(struct!.upTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.downTime = this._downTime;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._upTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.upTime = this._upTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downTime = undefined;
      this._enable = undefined;
      this._upTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downTime = value.downTime;
      this._enable = value.enable;
      this._upTime = value.upTime;
    }
  }

  // down_time - computed: false, optional: true, required: false
  private _downTime?: number; 
  public get downTime() {
    return this.getNumberAttribute('down_time');
  }
  public set downTime(value: number) {
    this._downTime = value;
  }
  public resetDownTime() {
    this._downTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downTimeInput() {
    return this._downTime;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // up_time - computed: false, optional: true, required: false
  private _upTime?: number; 
  public get upTime() {
    return this.getNumberAttribute('up_time');
  }
  public set upTime(value: number) {
    this._upTime = value;
  }
  public resetUpTime() {
    this._upTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upTimeInput() {
    return this._upTime;
  }
}
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelector {
  /**
  * The key for the node selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#key DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The value for the node selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#value DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelectorToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelector | cdktf.IResolvable): any {
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

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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
export interface DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpec {
  /**
  * The duration of the impairment in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#duration DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#duration}
  */
  readonly duration?: number;
  /**
  * The configuration section that specifies the egress impairments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#egress DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#egress}
  */
  readonly egress?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgress;
  /**
  * The configuration section that specifies the ingress impairments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#ingress DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngress;
  /**
  * All interfaces that the impairments should be applied to. Must be valid interfaces or the impairments will fail to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#interfaces DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * The configuration section that specifies the link flapping impairments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#link_flapping DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#link_flapping}
  */
  readonly linkFlapping?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlapping;
  /**
  * The configuration section that specifies the node selector that should be applied to the daemonset. Default: worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#node_selector DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelector;
  /**
  * The delay (in seconds) before starting the impairments. At least 5 seconds recommended for Kubernetes and for synchronization of the impairments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#start_delay DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest#start_delay}
  */
  readonly startDelay?: number;
}

export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    egress: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressToTerraform(struct!.egress),
    ingress: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressToTerraform(struct!.ingress),
    interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaces),
    link_flapping: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlappingToTerraform(struct!.linkFlapping),
    node_selector: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
    start_delay: cdktf.numberToTerraform(struct!.startDelay),
  }
}


export function dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressToHclTerraform(struct!.egress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgress",
    },
    ingress: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngress",
    },
    interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_flapping: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlappingToHclTerraform(struct!.linkFlapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlapping",
    },
    node_selector: {
      value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelector",
    },
    start_delay: {
      value: cdktf.numberToHclTerraform(struct!.startDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._linkFlapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkFlapping = this._linkFlapping?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._startDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDelay = this._startDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._interfaces = undefined;
      this._linkFlapping.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
      this._startDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._egress.internalValue = value.egress;
      this._ingress.internalValue = value.ingress;
      this._interfaces = value.interfaces;
      this._linkFlapping.internalValue = value.linkFlapping;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._startDelay = value.startDelay;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecEgress) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // link_flapping - computed: false, optional: true, required: false
  private _linkFlapping = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlappingOutputReference(this, "link_flapping");
  public get linkFlapping() {
    return this._linkFlapping;
  }
  public putLinkFlapping(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecLinkFlapping) {
    this._linkFlapping.internalValue = value;
  }
  public resetLinkFlapping() {
    this._linkFlapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkFlappingInput() {
    return this._linkFlapping.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // start_delay - computed: false, optional: true, required: false
  private _startDelay?: number; 
  public get startDelay() {
    return this.getNumberAttribute('start_delay');
  }
  public set startDelay(value: number) {
    this._startDelay = value;
  }
  public resetStartDelay() {
    this._startDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInput() {
    return this._startDelay;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest k8s_apps_redhat_com_cluster_impairment_v1alpha1_manifest}
*/
export class DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_redhat_com_cluster_impairment_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsRedhatComClusterImpairmentV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_redhat_com_cluster_impairment_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_redhat_com_cluster_impairment_v1alpha1_manifest k8s_apps_redhat_com_cluster_impairment_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_redhat_com_cluster_impairment_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsRedhatComClusterImpairmentV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
