// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#metadata DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadata;
  /**
  * JobConfigSpec defines the desired state of the JobConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#spec DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpec;
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#annotations DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#labels DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#name DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#namespace DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrency {
  /**
  * Maximum number of Jobs that can be running concurrently for the same JobConfig. Cannot be specified if Policy is set to Allow. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#max_concurrency DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Policy describes how to treat concurrent executions of the same JobConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#policy DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#policy}
  */
  readonly policy: string;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrencyToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrencyToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrency = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrency = value.maxConcurrency;
      this._policy = value.policy;
    }
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBool {
  /**
  * Default value, will be used to populate the option if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#default DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#default}
  */
  readonly default: boolean | cdktf.IResolvable;
  /**
  * If Format is custom, will be substituted if value is false. Can also be an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#false_val DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#false_val}
  */
  readonly falseVal?: string;
  /**
  * Determines how to format the value as string. Can be one of: TrueFalse, OneZero, YesNo, Custom Default: TrueFalse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#format DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * If Format is custom, will be substituted if value is true. Can also be an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#true_val DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#true_val}
  */
  readonly trueVal?: string;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBoolToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    false_val: cdktf.stringToTerraform(struct!.falseVal),
    format: cdktf.stringToTerraform(struct!.format),
    true_val: cdktf.stringToTerraform(struct!.trueVal),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBoolToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    false_val: {
      value: cdktf.stringToHclTerraform(struct!.falseVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    true_val: {
      value: cdktf.stringToHclTerraform(struct!.trueVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._falseVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.falseVal = this._falseVal;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._trueVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.trueVal = this._trueVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._falseVal = undefined;
      this._format = undefined;
      this._trueVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._falseVal = value.falseVal;
      this._format = value.format;
      this._trueVal = value.trueVal;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // false_val - computed: false, optional: true, required: false
  private _falseVal?: string; 
  public get falseVal() {
    return this.getStringAttribute('false_val');
  }
  public set falseVal(value: string) {
    this._falseVal = value;
  }
  public resetFalseVal() {
    this._falseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseValInput() {
    return this._falseVal;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // true_val - computed: false, optional: true, required: false
  private _trueVal?: string; 
  public get trueVal() {
    return this.getStringAttribute('true_val');
  }
  public set trueVal(value: string) {
    this._trueVal = value;
  }
  public resetTrueVal() {
    this._trueVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trueValInput() {
    return this._trueVal;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDate {
  /**
  * Date format in moment.js format. If not specified, will use RFC3339 format by default. Date format reference: https://momentjs.com/docs/#/displaying/format/ Default:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#format DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#format}
  */
  readonly format?: string;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDateToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDateToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMulti {
  /**
  * Whether to allow custom values instead of just the list of allowed values. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#allow_custom DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#allow_custom}
  */
  readonly allowCustom?: boolean | cdktf.IResolvable;
  /**
  * Default values, will be used to populate the option if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#default DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#default}
  */
  readonly default?: string[];
  /**
  * Delimiter to join values by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#delimiter DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#delimiter}
  */
  readonly delimiter: string;
  /**
  * List of values to be chosen from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#values DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#values}
  */
  readonly values: string[];
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMultiToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_custom: cdktf.booleanToTerraform(struct!.allowCustom),
    default: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.default),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMultiToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_custom: {
      value: cdktf.booleanToHclTerraform(struct!.allowCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
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

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMultiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMulti | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCustom = this._allowCustom;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMulti | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCustom = undefined;
      this._default = undefined;
      this._delimiter = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCustom = value.allowCustom;
      this._default = value.default;
      this._delimiter = value.delimiter;
      this._values = value.values;
    }
  }

  // allow_custom - computed: false, optional: true, required: false
  private _allowCustom?: boolean | cdktf.IResolvable; 
  public get allowCustom() {
    return this.getBooleanAttribute('allow_custom');
  }
  public set allowCustom(value: boolean | cdktf.IResolvable) {
    this._allowCustom = value;
  }
  public resetAllowCustom() {
    this._allowCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomInput() {
    return this._allowCustom;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string[]; 
  public get default() {
    return this.getListAttribute('default');
  }
  public set default(value: string[]) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelect {
  /**
  * Whether to allow custom values instead of just the list of allowed values. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#allow_custom DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#allow_custom}
  */
  readonly allowCustom?: boolean | cdktf.IResolvable;
  /**
  * Default value, will be used to populate the option if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#default DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#default}
  */
  readonly default?: string;
  /**
  * List of values to be chosen from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#values DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelectToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_custom: cdktf.booleanToTerraform(struct!.allowCustom),
    default: cdktf.stringToTerraform(struct!.default),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelectToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_custom: {
      value: cdktf.booleanToHclTerraform(struct!.allowCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCustom = this._allowCustom;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCustom = undefined;
      this._default = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCustom = value.allowCustom;
      this._default = value.default;
      this._values = value.values;
    }
  }

  // allow_custom - computed: false, optional: true, required: false
  private _allowCustom?: boolean | cdktf.IResolvable; 
  public get allowCustom() {
    return this.getBooleanAttribute('allow_custom');
  }
  public set allowCustom(value: boolean | cdktf.IResolvable) {
    this._allowCustom = value;
  }
  public resetAllowCustom() {
    this._allowCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomInput() {
    return this._allowCustom;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsString {
  /**
  * Optional default value, will be used to populate the option if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#default DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#default}
  */
  readonly default?: string;
  /**
  * Whether to trim spaces before substitution. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#trim_spaces DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#trim_spaces}
  */
  readonly trimSpaces?: boolean | cdktf.IResolvable;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsStringToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    trim_spaces: cdktf.booleanToTerraform(struct!.trimSpaces),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsStringToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_spaces: {
      value: cdktf.booleanToHclTerraform(struct!.trimSpaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._trimSpaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpaces = this._trimSpaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._trimSpaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._trimSpaces = value.trimSpaces;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // trim_spaces - computed: false, optional: true, required: false
  private _trimSpaces?: boolean | cdktf.IResolvable; 
  public get trimSpaces() {
    return this.getBooleanAttribute('trim_spaces');
  }
  public set trimSpaces(value: boolean | cdktf.IResolvable) {
    this._trimSpaces = value;
  }
  public resetTrimSpaces() {
    this._trimSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpacesInput() {
    return this._trimSpaces;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptions {
  /**
  * Bool adds additional configuration for OptionTypeBool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#bool DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#bool}
  */
  readonly bool?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBool;
  /**
  * Date adds additional configuration for OptionTypeDate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#date DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#date}
  */
  readonly date?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDate;
  /**
  * Label is an optional human-readable label for this option, which is purely used for display purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#label DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#label}
  */
  readonly label?: string;
  /**
  * Multi adds additional configuration for OptionTypeMulti.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#multi DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#multi}
  */
  readonly multi?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMulti;
  /**
  * The name of the job option. Will be substituted as '${option.NAME}'. Must match the following regex: ^[a-zA-Z_0-9.-]+$
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#name DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Required defines whether this field is required. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#required DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Select adds additional configuration for OptionTypeSelect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#select DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#select}
  */
  readonly select?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelect;
  /**
  * String adds additional configuration for OptionTypeString.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#string DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#string}
  */
  readonly string?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsString;
  /**
  * The type of the job option. Can be one of: bool, string, select, multi, date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#type DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBoolToTerraform(struct!.bool),
    date: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDateToTerraform(struct!.date),
    label: cdktf.stringToTerraform(struct!.label),
    multi: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMultiToTerraform(struct!.multi),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    select: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelectToTerraform(struct!.select),
    string: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsStringToTerraform(struct!.string),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBoolToHclTerraform(struct!.bool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBool",
    },
    date: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDateToHclTerraform(struct!.date),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDate",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMultiToHclTerraform(struct!.multi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMulti",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    select: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelect",
    },
    string: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsStringToHclTerraform(struct!.string),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsString",
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

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bool = this._bool?.internalValue;
    }
    if (this._date?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._multi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multi = this._multi?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bool.internalValue = undefined;
      this._date.internalValue = undefined;
      this._label = undefined;
      this._multi.internalValue = undefined;
      this._name = undefined;
      this._required = undefined;
      this._select.internalValue = undefined;
      this._string.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bool.internalValue = value.bool;
      this._date.internalValue = value.date;
      this._label = value.label;
      this._multi.internalValue = value.multi;
      this._name = value.name;
      this._required = value.required;
      this._select.internalValue = value.select;
      this._string.internalValue = value.string;
      this._type = value.type;
    }
  }

  // bool - computed: false, optional: true, required: false
  private _bool = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBoolOutputReference(this, "bool");
  public get bool() {
    return this._bool;
  }
  public putBool(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsBool) {
    this._bool.internalValue = value;
  }
  public resetBool() {
    this._bool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolInput() {
    return this._bool.internalValue;
  }

  // date - computed: false, optional: true, required: false
  private _date = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDateOutputReference(this, "date");
  public get date() {
    return this._date;
  }
  public putDate(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsDate) {
    this._date.internalValue = value;
  }
  public resetDate() {
    this._date.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // multi - computed: false, optional: true, required: false
  private _multi = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMultiOutputReference(this, "multi");
  public get multi() {
    return this._multi;
  }
  public putMulti(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsMulti) {
    this._multi.internalValue = value;
  }
  public resetMulti() {
    this._multi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiInput() {
    return this._multi.internalValue;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // select - computed: false, optional: true, required: false
  private _select = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsStringOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsString) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
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

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsOutputReference {
    return new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOption {
  /**
  * Options is a list of job options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#options DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#options}
  */
  readonly options?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptions[] | cdktf.IResolvable;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.listMapper(dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsToTerraform, false)(struct!.options),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.listMapperHcl(dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options.internalValue = value.options;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraints {
  /**
  * Specifies the latest possible time that is allowed to be scheduled. If set, the scheduler should not create schedules after this time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#not_after DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#not_after}
  */
  readonly notAfter?: string;
  /**
  * Specifies the earliest possible time that is allowed to be scheduled. If set, the scheduler should not create schedules before this time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#not_before DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#not_before}
  */
  readonly notBefore?: string;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraintsToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_after: cdktf.stringToTerraform(struct!.notAfter),
    not_before: cdktf.stringToTerraform(struct!.notBefore),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraintsToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_after: {
      value: cdktf.stringToHclTerraform(struct!.notAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_before: {
      value: cdktf.stringToHclTerraform(struct!.notBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAfter = this._notAfter;
    }
    if (this._notBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notBefore = this._notBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notAfter = undefined;
      this._notBefore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notAfter = value.notAfter;
      this._notBefore = value.notBefore;
    }
  }

  // not_after - computed: false, optional: true, required: false
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  public resetNotAfter() {
    this._notAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // not_before - computed: false, optional: true, required: false
  private _notBefore?: string; 
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
  public set notBefore(value: string) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCron {
  /**
  * Cron expression to specify how the JobConfig will be periodically scheduled. Example: '0 0/5 * * *'. Supports cron schedules with optional 'seconds' and 'years' fields, i.e. can parse between 5 to 7 tokens. More information: https://github.com/furiko-io/cronexpr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#expression DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * List of cron expressions to specify how the JobConfig will be periodically scheduled. Take for example a requirement to schedule a job every day at 3AM, 3:30AM and 4AM. There is no way to represent this with a single cron expression, but we could do so with two cron expressions: '0/30 3 * * *', and '0 4 * * *'. Exactly one of Expression or Expressions must be specified. If two expressions fall on the same time, only one of them will take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#expressions DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#expressions}
  */
  readonly expressions?: string[];
  /**
  * Timezone to interpret the cron schedule in. For example, a cron schedule of '0 10 * * *' with a timezone of 'Asia/Singapore' will be interpreted as running at 02:00:00 UTC time every day. Timezone must be one of the following: 1. A valid tz string (e.g. 'Asia/Singapore', 'America/New_York'). 2. A UTC offset with minutes (e.g. UTC-10:00). 3. A GMT offset with minutes (e.g. GMT+05:30). The meaning is the same as its UTC counterpart. This field merely is used for parsing the cron Expression, and has nothing to do with /etc/timezone inside the container (i.e. it will not set $TZ automatically). Defaults to the controller's default configured timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#timezone DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCronToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCronToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCronOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCron | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._expressions = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._expressions = value.expressions;
      this._timezone = value.timezone;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // expressions - computed: false, optional: true, required: false
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  public resetExpressions() {
    this._expressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecSchedule {
  /**
  * Specifies any constraints that should apply to this Schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#constraints DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#constraints}
  */
  readonly constraints?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraints;
  /**
  * Specify a schedule using cron expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#cron DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#cron}
  */
  readonly cron?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCron;
  /**
  * If true, then automatic scheduling will be disabled for the JobConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#disabled DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the time that the schedule was last updated. This prevents accidental back-scheduling. For example, if a JobConfig that was previously disabled from automatic scheduling is now enabled, we do not want to perform back-scheduling for schedules after LastScheduled prior to updating of the JobConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#last_updated DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#last_updated}
  */
  readonly lastUpdated?: string;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraintsToTerraform(struct!.constraints),
    cron: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCronToTerraform(struct!.cron),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    last_updated: cdktf.stringToTerraform(struct!.lastUpdated),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraints",
    },
    cron: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCronToHclTerraform(struct!.cron),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCron",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_updated: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._cron.internalValue = undefined;
      this._disabled = undefined;
      this._lastUpdated = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._cron.internalValue = value.cron;
      this._disabled = value.disabled;
      this._lastUpdated = value.lastUpdated;
    }
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }
  public putCron(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleCron) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelism {
  /**
  * Defines when the Job will complete when there are multiple tasks running in parallel. For example, if using the AllSuccessful strategy, the Job will only terminate once all parallel tasks have terminated successfully, or once any task has exhausted its maxAttempts limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#completion_strategy DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#completion_strategy}
  */
  readonly completionStrategy?: string;
  /**
  * Specifies an exact number of tasks to be run in parallel. The index number can be retrieved via the '${task.index_num}' context variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#with_count DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#with_count}
  */
  readonly withCount?: number;
  /**
  * Specifies a list of keys corresponding to each task that will be run in parallel. The index key can be retrieved via the '${task.index_key}' context variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#with_keys DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#with_keys}
  */
  readonly withKeys?: string[];
  /**
  * Specifies a matrix of key-value pairs, with each key mapped to a list of possible values, such that tasks will be started for each combination of key-value pairs. The matrix values can be retrieved via context variables in the following format: '${task.index_matrix.<key>}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#with_matrix DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#with_matrix}
  */
  readonly withMatrix?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelismToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelism | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completion_strategy: cdktf.stringToTerraform(struct!.completionStrategy),
    with_count: cdktf.numberToTerraform(struct!.withCount),
    with_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.withKeys),
    with_matrix: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.withMatrix),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelismToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelism | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completion_strategy: {
      value: cdktf.stringToHclTerraform(struct!.completionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_count: {
      value: cdktf.numberToHclTerraform(struct!.withCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    with_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    with_matrix: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.withMatrix),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelismOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelism | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.completionStrategy = this._completionStrategy;
    }
    if (this._withCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.withCount = this._withCount;
    }
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    if (this._withMatrix !== undefined) {
      hasAnyValues = true;
      internalValueResult.withMatrix = this._withMatrix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelism | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completionStrategy = undefined;
      this._withCount = undefined;
      this._withKeys = undefined;
      this._withMatrix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completionStrategy = value.completionStrategy;
      this._withCount = value.withCount;
      this._withKeys = value.withKeys;
      this._withMatrix = value.withMatrix;
    }
  }

  // completion_strategy - computed: false, optional: true, required: false
  private _completionStrategy?: string; 
  public get completionStrategy() {
    return this.getStringAttribute('completion_strategy');
  }
  public set completionStrategy(value: string) {
    this._completionStrategy = value;
  }
  public resetCompletionStrategy() {
    this._completionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionStrategyInput() {
    return this._completionStrategy;
  }

  // with_count - computed: false, optional: true, required: false
  private _withCount?: number; 
  public get withCount() {
    return this.getNumberAttribute('with_count');
  }
  public set withCount(value: number) {
    this._withCount = value;
  }
  public resetWithCount() {
    this._withCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withCountInput() {
    return this._withCount;
  }

  // with_keys - computed: false, optional: true, required: false
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  public resetWithKeys() {
    this._withKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }

  // with_matrix - computed: false, optional: true, required: false
  private _withMatrix?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get withMatrix() {
    return this.interpolationForAttribute('with_matrix');
  }
  public set withMatrix(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._withMatrix = value;
  }
  public resetWithMatrix() {
    this._withMatrix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withMatrixInput() {
    return this._withMatrix;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePod {
  /**
  * Standard object's metadata that will be added to Pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#metadata DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Specification of the desired behavior of the pod. API docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#podspec-v1-core Supports context variable substitution in the following fields for containers and initContainers: image, command, args, env.value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#spec DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: { [key: string]: string };
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePodToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.spec),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePodToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.spec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: { [key: string]: string }; 
  public get spec() {
    return this.getStringMapAttribute('spec');
  }
  public set spec(value: { [key: string]: string }) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplate {
  /**
  * Describes how to create tasks as Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#pod DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#pod}
  */
  readonly pod?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePod;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplateToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePodToTerraform(struct!.pod),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplateToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pod.internalValue = value.pod;
    }
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplatePod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpec {
  /**
  * Defines whether tasks are allowed to be force deleted or not. If the node is unresponsive, it may be possible that the task cannot be killed by normal graceful deletion. The controller may choose to force delete the task, which would ignore the final state of the task since the node is unable to return whether the task is actually still alive. If not set to true, there may be some cases when there may actually be two concurrently running tasks when even when ConcurrencyPolicyForbid. Setting this to true would prevent this from happening, but the Job may remain stuck indefinitely until the node recovers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#forbid_task_force_deletion DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#forbid_task_force_deletion}
  */
  readonly forbidTaskForceDeletion?: boolean | cdktf.IResolvable;
  /**
  * Specifies maximum number of attempts before the Job will terminate in failure. If defined, the controller will wait retryDelaySeconds before creating the next task. Once maxAttempts is reached, the Job terminates in RetryLimitExceeded. If parallelism is also defined, this corresponds to the maximum attempts for each parallel task. That is, if there are 5 parallel task to be run at a time, with maxAttempts of 3, the Job may create up to a maximum of 15 tasks if each has failed. Value must be a positive integer. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#max_attempts DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Describes how to run multiple tasks in parallel for the Job. If not set, then there will be at most a single task running at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#parallelism DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#parallelism}
  */
  readonly parallelism?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelism;
  /**
  * Optional duration in seconds to wait between retries. If left empty or zero, it means no delay (i.e. retry immediately). If parallelism is also defined, the retry delay is from the time of the last failed task with the same index. That is, if there are two parallel tasks - index 0 and index 1 - which failed at t=0 and t=15, with retryDelaySeconds of 30, the controller will only create the next attempts at t=30 and t=45 respectively. Value must be a non-negative integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#retry_delay_seconds DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#retry_delay_seconds}
  */
  readonly retryDelaySeconds?: number;
  /**
  * Optional duration in seconds to wait before terminating the task if it is still pending. This field is useful to prevent jobs from being stuck forever if the Job has a deadline to start running by. If not set, it will be set to the DefaultPendingTimeoutSeconds configuration value in the controller. To disable pending timeout, set this to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#task_pending_timeout_seconds DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#task_pending_timeout_seconds}
  */
  readonly taskPendingTimeoutSeconds?: number;
  /**
  * Defines the template to create a single task in the Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#task_template DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#task_template}
  */
  readonly taskTemplate: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplate;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forbid_task_force_deletion: cdktf.booleanToTerraform(struct!.forbidTaskForceDeletion),
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    parallelism: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelismToTerraform(struct!.parallelism),
    retry_delay_seconds: cdktf.numberToTerraform(struct!.retryDelaySeconds),
    task_pending_timeout_seconds: cdktf.numberToTerraform(struct!.taskPendingTimeoutSeconds),
    task_template: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplateToTerraform(struct!.taskTemplate),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forbid_task_force_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.forbidTaskForceDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallelism: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelismToHclTerraform(struct!.parallelism),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelism",
    },
    retry_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.retryDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_pending_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.taskPendingTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_template: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplateToHclTerraform(struct!.taskTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forbidTaskForceDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidTaskForceDeletion = this._forbidTaskForceDeletion;
    }
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._parallelism?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism?.internalValue;
    }
    if (this._retryDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDelaySeconds = this._retryDelaySeconds;
    }
    if (this._taskPendingTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskPendingTimeoutSeconds = this._taskPendingTimeoutSeconds;
    }
    if (this._taskTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTemplate = this._taskTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forbidTaskForceDeletion = undefined;
      this._maxAttempts = undefined;
      this._parallelism.internalValue = undefined;
      this._retryDelaySeconds = undefined;
      this._taskPendingTimeoutSeconds = undefined;
      this._taskTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forbidTaskForceDeletion = value.forbidTaskForceDeletion;
      this._maxAttempts = value.maxAttempts;
      this._parallelism.internalValue = value.parallelism;
      this._retryDelaySeconds = value.retryDelaySeconds;
      this._taskPendingTimeoutSeconds = value.taskPendingTimeoutSeconds;
      this._taskTemplate.internalValue = value.taskTemplate;
    }
  }

  // forbid_task_force_deletion - computed: false, optional: true, required: false
  private _forbidTaskForceDeletion?: boolean | cdktf.IResolvable; 
  public get forbidTaskForceDeletion() {
    return this.getBooleanAttribute('forbid_task_force_deletion');
  }
  public set forbidTaskForceDeletion(value: boolean | cdktf.IResolvable) {
    this._forbidTaskForceDeletion = value;
  }
  public resetForbidTaskForceDeletion() {
    this._forbidTaskForceDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbidTaskForceDeletionInput() {
    return this._forbidTaskForceDeletion;
  }

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelismOutputReference(this, "parallelism");
  public get parallelism() {
    return this._parallelism;
  }
  public putParallelism(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecParallelism) {
    this._parallelism.internalValue = value;
  }
  public resetParallelism() {
    this._parallelism.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism.internalValue;
  }

  // retry_delay_seconds - computed: false, optional: true, required: false
  private _retryDelaySeconds?: number; 
  public get retryDelaySeconds() {
    return this.getNumberAttribute('retry_delay_seconds');
  }
  public set retryDelaySeconds(value: number) {
    this._retryDelaySeconds = value;
  }
  public resetRetryDelaySeconds() {
    this._retryDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelaySecondsInput() {
    return this._retryDelaySeconds;
  }

  // task_pending_timeout_seconds - computed: false, optional: true, required: false
  private _taskPendingTimeoutSeconds?: number; 
  public get taskPendingTimeoutSeconds() {
    return this.getNumberAttribute('task_pending_timeout_seconds');
  }
  public set taskPendingTimeoutSeconds(value: number) {
    this._taskPendingTimeoutSeconds = value;
  }
  public resetTaskPendingTimeoutSeconds() {
    this._taskPendingTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskPendingTimeoutSecondsInput() {
    return this._taskPendingTimeoutSeconds;
  }

  // task_template - computed: false, optional: false, required: true
  private _taskTemplate = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplateOutputReference(this, "task_template");
  public get taskTemplate() {
    return this._taskTemplate;
  }
  public putTaskTemplate(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecTaskTemplate) {
    this._taskTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTemplateInput() {
    return this._taskTemplate.internalValue;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplate {
  /**
  * Standard object's metadata that will be added to Job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#metadata DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Specification of the desired behavior of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#spec DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpec;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpec {
  /**
  * Concurrency defines the behaviour of multiple concurrent Jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#concurrency DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#concurrency}
  */
  readonly concurrency: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrency;
  /**
  * Option is an optional field that defines how the JobConfig is parameterized. Each option defined here can subsequently be used in the Template via context variable substitution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#option DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#option}
  */
  readonly option?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOption;
  /**
  * Schedule is an optional field that defines automatic scheduling of the JobConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#schedule DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#schedule}
  */
  readonly schedule?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecSchedule;
  /**
  * Template for creating the Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#template DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest#template}
  */
  readonly template: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplate;
}

export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrencyToTerraform(struct!.concurrency),
    option: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionToTerraform(struct!.option),
    schedule: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleToTerraform(struct!.schedule),
    template: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrencyToHclTerraform(struct!.concurrency),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrency",
    },
    option: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionToHclTerraform(struct!.option),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOption",
    },
    schedule: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecSchedule",
    },
    template: {
      value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency?.internalValue;
    }
    if (this._option?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency.internalValue = undefined;
      this._option.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency.internalValue = value.concurrency;
      this._option.internalValue = value.option;
      this._schedule.internalValue = value.schedule;
      this._template.internalValue = value.template;
    }
  }

  // concurrency - computed: false, optional: false, required: true
  private _concurrency = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrencyOutputReference(this, "concurrency");
  public get concurrency() {
    return this._concurrency;
  }
  public putConcurrency(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecConcurrency) {
    this._concurrency.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency.internalValue;
  }

  // option - computed: false, optional: true, required: false
  private _option = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }
  public putOption(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOption) {
    this._option.internalValue = value;
  }
  public resetOption() {
    this._option.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest k8s_execution_furiko_io_job_config_v1alpha1_manifest}
*/
export class DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_execution_furiko_io_job_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExecutionFurikoIoJobConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_execution_furiko_io_job_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/execution_furiko_io_job_config_v1alpha1_manifest k8s_execution_furiko_io_job_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_execution_furiko_io_job_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExecutionFurikoIoJobConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
