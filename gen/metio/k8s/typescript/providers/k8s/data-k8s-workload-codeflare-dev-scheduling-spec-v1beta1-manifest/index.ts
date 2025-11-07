// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#metadata DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#spec DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpec;
}
export interface DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#annotations DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#labels DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#name DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#namespace DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadataToTerraform(struct?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#expected DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#expected}
  */
  readonly expected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#limit DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#overrun DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#overrun}
  */
  readonly overrun?: boolean | cdktf.IResolvable;
}

export function dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDurationToTerraform(struct?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected: cdktf.numberToTerraform(struct!.expected),
    limit: cdktf.numberToTerraform(struct!.limit),
    overrun: cdktf.booleanToTerraform(struct!.overrun),
  }
}


export function dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDurationToHclTerraform(struct?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected: {
      value: cdktf.numberToHclTerraform(struct!.expected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overrun: {
      value: cdktf.booleanToHclTerraform(struct!.overrun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expected !== undefined) {
      hasAnyValues = true;
      internalValueResult.expected = this._expected;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._overrun !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrun = this._overrun;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expected = undefined;
      this._limit = undefined;
      this._overrun = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expected = value.expected;
      this._limit = value.limit;
      this._overrun = value.overrun;
    }
  }

  // expected - computed: false, optional: true, required: false
  private _expected?: number; 
  public get expected() {
    return this.getNumberAttribute('expected');
  }
  public set expected(value: number) {
    this._expected = value;
  }
  public resetExpected() {
    this._expected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
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

  // overrun - computed: false, optional: true, required: false
  private _overrun?: boolean | cdktf.IResolvable; 
  public get overrun() {
    return this.getBooleanAttribute('overrun');
  }
  public set overrun(value: boolean | cdktf.IResolvable) {
    this._overrun = value;
  }
  public resetOverrun() {
    this._overrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrunInput() {
    return this._overrun;
  }
}
export interface DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuing {
  /**
  * Growth strategy to increase the waiting time between requeuing checks. The values available are 'exponential', 'linear', or 'none'. For example, 'exponential' growth would double the 'timeInSeconds' value every time a requeuing event is triggered. If the string value is misspelled or not one of the possible options, the growth behavior is defaulted to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#growth_type DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#growth_type}
  */
  readonly growthType?: string;
  /**
  * Value to keep track of the initial wait time. Users cannot set this as it is taken from 'timeInSeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#initial_time_in_seconds DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#initial_time_in_seconds}
  */
  readonly initialTimeInSeconds?: number;
  /**
  * Maximum number of requeuing events allowed. Once this value is reached (e.g., 'numRequeuings = maxNumRequeuings', no more requeuing checks are performed and the generic items are stopped and removed from the cluster (AppWrapper remains deployed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#max_num_requeuings DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#max_num_requeuings}
  */
  readonly maxNumRequeuings?: number;
  /**
  * Maximum waiting time for requeuing checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#max_time_in_seconds DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#max_time_in_seconds}
  */
  readonly maxTimeInSeconds?: number;
  /**
  * Field to keep track of how many times a requeuing event has been triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#num_requeuings DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#num_requeuings}
  */
  readonly numRequeuings?: number;
  /**
  * Initial waiting time before requeuing conditions are checked. This value is specified by the user, but it may grow as requeuing events happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#time_in_seconds DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#time_in_seconds}
  */
  readonly timeInSeconds?: number;
}

export function dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuingToTerraform(struct?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    growth_type: cdktf.stringToTerraform(struct!.growthType),
    initial_time_in_seconds: cdktf.numberToTerraform(struct!.initialTimeInSeconds),
    max_num_requeuings: cdktf.numberToTerraform(struct!.maxNumRequeuings),
    max_time_in_seconds: cdktf.numberToTerraform(struct!.maxTimeInSeconds),
    num_requeuings: cdktf.numberToTerraform(struct!.numRequeuings),
    time_in_seconds: cdktf.numberToTerraform(struct!.timeInSeconds),
  }
}


export function dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuingToHclTerraform(struct?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    growth_type: {
      value: cdktf.stringToHclTerraform(struct!.growthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_num_requeuings: {
      value: cdktf.numberToHclTerraform(struct!.maxNumRequeuings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_requeuings: {
      value: cdktf.numberToHclTerraform(struct!.numRequeuings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._growthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.growthType = this._growthType;
    }
    if (this._initialTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialTimeInSeconds = this._initialTimeInSeconds;
    }
    if (this._maxNumRequeuings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumRequeuings = this._maxNumRequeuings;
    }
    if (this._maxTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeInSeconds = this._maxTimeInSeconds;
    }
    if (this._numRequeuings !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRequeuings = this._numRequeuings;
    }
    if (this._timeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInSeconds = this._timeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._growthType = undefined;
      this._initialTimeInSeconds = undefined;
      this._maxNumRequeuings = undefined;
      this._maxTimeInSeconds = undefined;
      this._numRequeuings = undefined;
      this._timeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._growthType = value.growthType;
      this._initialTimeInSeconds = value.initialTimeInSeconds;
      this._maxNumRequeuings = value.maxNumRequeuings;
      this._maxTimeInSeconds = value.maxTimeInSeconds;
      this._numRequeuings = value.numRequeuings;
      this._timeInSeconds = value.timeInSeconds;
    }
  }

  // growth_type - computed: false, optional: true, required: false
  private _growthType?: string; 
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
  public set growthType(value: string) {
    this._growthType = value;
  }
  public resetGrowthType() {
    this._growthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthTypeInput() {
    return this._growthType;
  }

  // initial_time_in_seconds - computed: false, optional: true, required: false
  private _initialTimeInSeconds?: number; 
  public get initialTimeInSeconds() {
    return this.getNumberAttribute('initial_time_in_seconds');
  }
  public set initialTimeInSeconds(value: number) {
    this._initialTimeInSeconds = value;
  }
  public resetInitialTimeInSeconds() {
    this._initialTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialTimeInSecondsInput() {
    return this._initialTimeInSeconds;
  }

  // max_num_requeuings - computed: false, optional: true, required: false
  private _maxNumRequeuings?: number; 
  public get maxNumRequeuings() {
    return this.getNumberAttribute('max_num_requeuings');
  }
  public set maxNumRequeuings(value: number) {
    this._maxNumRequeuings = value;
  }
  public resetMaxNumRequeuings() {
    this._maxNumRequeuings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumRequeuingsInput() {
    return this._maxNumRequeuings;
  }

  // max_time_in_seconds - computed: false, optional: true, required: false
  private _maxTimeInSeconds?: number; 
  public get maxTimeInSeconds() {
    return this.getNumberAttribute('max_time_in_seconds');
  }
  public set maxTimeInSeconds(value: number) {
    this._maxTimeInSeconds = value;
  }
  public resetMaxTimeInSeconds() {
    this._maxTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeInSecondsInput() {
    return this._maxTimeInSeconds;
  }

  // num_requeuings - computed: false, optional: true, required: false
  private _numRequeuings?: number; 
  public get numRequeuings() {
    return this.getNumberAttribute('num_requeuings');
  }
  public set numRequeuings(value: number) {
    this._numRequeuings = value;
  }
  public resetNumRequeuings() {
    this._numRequeuings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRequeuingsInput() {
    return this._numRequeuings;
  }

  // time_in_seconds - computed: false, optional: true, required: false
  private _timeInSeconds?: number; 
  public get timeInSeconds() {
    return this.getNumberAttribute('time_in_seconds');
  }
  public set timeInSeconds(value: number) {
    this._timeInSeconds = value;
  }
  public resetTimeInSeconds() {
    this._timeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInSecondsInput() {
    return this._timeInSeconds;
  }
}
export interface DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpec {
  /**
  * Wall clock duration time of appwrapper in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#dispatch_duration DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#dispatch_duration}
  */
  readonly dispatchDuration?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDuration;
  /**
  * Expected number of pods in running and/or completed state. Requeuing is triggered when the number of running/completed pods is not equal to this value. When not specified, requeuing is disabled and no check is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#min_available DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#min_available}
  */
  readonly minAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#node_selector DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specification of the requeuing strategy based on waiting time. Values in this field control how often the pod check should happen, and if requeuing has reached its maximum number of times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#requeuing DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest#requeuing}
  */
  readonly requeuing?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuing;
}

export function dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecToTerraform(struct?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dispatch_duration: dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDurationToTerraform(struct!.dispatchDuration),
    min_available: cdktf.numberToTerraform(struct!.minAvailable),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    requeuing: dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuingToTerraform(struct!.requeuing),
  }
}


export function dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dispatch_duration: {
      value: dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDurationToHclTerraform(struct!.dispatchDuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDuration",
    },
    min_available: {
      value: cdktf.numberToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requeuing: {
      value: dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuingToHclTerraform(struct!.requeuing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dispatchDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dispatchDuration = this._dispatchDuration?.internalValue;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._requeuing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeuing = this._requeuing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dispatchDuration.internalValue = undefined;
      this._minAvailable = undefined;
      this._nodeSelector = undefined;
      this._requeuing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dispatchDuration.internalValue = value.dispatchDuration;
      this._minAvailable = value.minAvailable;
      this._nodeSelector = value.nodeSelector;
      this._requeuing.internalValue = value.requeuing;
    }
  }

  // dispatch_duration - computed: false, optional: true, required: false
  private _dispatchDuration = new DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDurationOutputReference(this, "dispatch_duration");
  public get dispatchDuration() {
    return this._dispatchDuration;
  }
  public putDispatchDuration(value: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecDispatchDuration) {
    this._dispatchDuration.internalValue = value;
  }
  public resetDispatchDuration() {
    this._dispatchDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchDurationInput() {
    return this._dispatchDuration.internalValue;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: number; 
  public get minAvailable() {
    return this.getNumberAttribute('min_available');
  }
  public set minAvailable(value: number) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
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

  // requeuing - computed: false, optional: true, required: false
  private _requeuing = new DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuingOutputReference(this, "requeuing");
  public get requeuing() {
    return this._requeuing;
  }
  public putRequeuing(value: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecRequeuing) {
    this._requeuing.internalValue = value;
  }
  public resetRequeuing() {
    this._requeuing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeuingInput() {
    return this._requeuing.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest k8s_workload_codeflare_dev_scheduling_spec_v1beta1_manifest}
*/
export class DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_workload_codeflare_dev_scheduling_spec_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_workload_codeflare_dev_scheduling_spec_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/workload_codeflare_dev_scheduling_spec_v1beta1_manifest k8s_workload_codeflare_dev_scheduling_spec_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_workload_codeflare_dev_scheduling_spec_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpec) {
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
      metadata: dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkloadCodeflareDevSchedulingSpecV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
