// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#metadata DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadata;
  /**
  * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#spec DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpec;
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#annotations DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#labels DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#name DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#namespace DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilter {
  /**
  * CEL expression for selecting when requests/connections should be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#expression DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilterToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilterToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilter | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
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
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatch {
  /**
  * This determines whether or not to apply the access logging configuration based on the direction of traffic relative to the proxied workload. Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#mode DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatchToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatchToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProviders {
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#name DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProviders | cdktf.IResolvable): any {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProviders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProviders | cdktf.IResolvable | undefined) {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersOutputReference {
    return new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLogging {
  /**
  * Controls logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#disabled DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#filter DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilter;
  /**
  * Allows tailoring of logging behavior to specific conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#match DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#match}
  */
  readonly match?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatch;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#providers DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#providers}
  */
  readonly providers?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProviders[] | cdktf.IResolvable;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilterToTerraform(struct!.filter),
    match: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatchToTerraform(struct!.match),
    providers: cdktf.listMapper(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersToTerraform, false)(struct!.providers),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilter",
    },
    match: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatch",
    },
    providers: {
      value: cdktf.listMapperHcl(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersToHclTerraform, false)(struct!.providers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._providers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._filter.internalValue = undefined;
      this._match.internalValue = undefined;
      this._providers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._filter.internalValue = value.filter;
      this._match.internalValue = value.match;
      this._providers.internalValue = value.providers;
    }
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // providers - computed: false, optional: true, required: false
  private _providers = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProvidersList(this, "providers", false);
  public get providers() {
    return this._providers;
  }
  public putProviders(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingProviders[] | cdktf.IResolvable) {
    this._providers.internalValue = value;
  }
  public resetProviders() {
    this._providers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingList extends cdktf.ComplexList {
  public internalValue? : DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLogging[] | cdktf.IResolvable

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
  public get(index: number): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingOutputReference {
    return new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatch {
  /**
  * Allows free-form specification of a metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#custom_metric DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#custom_metric}
  */
  readonly customMetric?: string;
  /**
  * One of the well-known [Istio Standard Metrics](https://istio.io/latest/docs/reference/config/metrics/). Valid Options: ALL_METRICS, REQUEST_COUNT, REQUEST_DURATION, REQUEST_SIZE, RESPONSE_SIZE, TCP_OPENED_CONNECTIONS, TCP_CLOSED_CONNECTIONS, TCP_SENT_BYTES, TCP_RECEIVED_BYTES, GRPC_REQUEST_MESSAGES, GRPC_RESPONSE_MESSAGES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#metric DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#metric}
  */
  readonly metric?: string;
  /**
  * Controls which mode of metrics generation is selected: 'CLIENT', 'SERVER', or 'CLIENT_AND_SERVER'. Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#mode DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatchToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_metric: cdktf.stringToTerraform(struct!.customMetric),
    metric: cdktf.stringToTerraform(struct!.metric),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatchToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_metric: {
      value: cdktf.stringToHclTerraform(struct!.customMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetric = this._customMetric;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetric = undefined;
      this._metric = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetric = value.customMetric;
      this._metric = value.metric;
      this._mode = value.mode;
    }
  }

  // custom_metric - computed: false, optional: true, required: false
  private _customMetric?: string; 
  public get customMetric() {
    return this.getStringAttribute('custom_metric');
  }
  public set customMetric(value: string) {
    this._customMetric = value;
  }
  public resetCustomMetric() {
    this._customMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricInput() {
    return this._customMetric;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverrides {
  /**
  * Operation controls whether or not to update/add a tag, or to remove it. Valid Options: UPSERT, REMOVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#operation DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#operation}
  */
  readonly operation?: string;
  /**
  * Value is only considered if the operation is 'UPSERT'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#value DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverridesToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverridesToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverrides {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#disabled DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Match allows providing the scope of the override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#match DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#match}
  */
  readonly match?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatch;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#tag_overrides DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#tag_overrides}
  */
  readonly tagOverrides?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverrides;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    match: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatchToTerraform(struct!.match),
    tag_overrides: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverridesToTerraform(struct!.tagOverrides),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatch",
    },
    tag_overrides: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverridesToHclTerraform(struct!.tagOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverrides",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._tagOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagOverrides = this._tagOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._match.internalValue = undefined;
      this._tagOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._match.internalValue = value.match;
      this._tagOverrides.internalValue = value.tagOverrides;
    }
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

  // match - computed: false, optional: true, required: false
  private _match = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // tag_overrides - computed: false, optional: true, required: false
  private _tagOverrides = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverridesOutputReference(this, "tag_overrides");
  public get tagOverrides() {
    return this._tagOverrides;
  }
  public putTagOverrides(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesTagOverrides) {
    this._tagOverrides.internalValue = value;
  }
  public resetTagOverrides() {
    this._tagOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOverridesInput() {
    return this._tagOverrides.internalValue;
  }
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesOutputReference {
    return new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProviders {
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#name DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProviders | cdktf.IResolvable): any {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProviders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProviders | cdktf.IResolvable | undefined) {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersOutputReference {
    return new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetrics {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#overrides DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#overrides}
  */
  readonly overrides?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverrides[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#providers DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#providers}
  */
  readonly providers?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProviders[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#reporting_interval DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#reporting_interval}
  */
  readonly reportingInterval?: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overrides: cdktf.listMapper(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesToTerraform, false)(struct!.overrides),
    providers: cdktf.listMapper(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersToTerraform, false)(struct!.providers),
    reporting_interval: cdktf.stringToTerraform(struct!.reportingInterval),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overrides: {
      value: cdktf.listMapperHcl(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesList",
    },
    providers: {
      value: cdktf.listMapperHcl(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersToHclTerraform, false)(struct!.providers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersList",
    },
    reporting_interval: {
      value: cdktf.stringToHclTerraform(struct!.reportingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._providers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers?.internalValue;
    }
    if (this._reportingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingInterval = this._reportingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrides.internalValue = undefined;
      this._providers.internalValue = undefined;
      this._reportingInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrides.internalValue = value.overrides;
      this._providers.internalValue = value.providers;
      this._reportingInterval = value.reportingInterval;
    }
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // providers - computed: false, optional: true, required: false
  private _providers = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProvidersList(this, "providers", false);
  public get providers() {
    return this._providers;
  }
  public putProviders(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsProviders[] | cdktf.IResolvable) {
    this._providers.internalValue = value;
  }
  public resetProviders() {
    this._providers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }

  // reporting_interval - computed: false, optional: true, required: false
  private _reportingInterval?: string; 
  public get reportingInterval() {
    return this.getStringAttribute('reporting_interval');
  }
  public set reportingInterval(value: string) {
    this._reportingInterval = value;
  }
  public resetReportingInterval() {
    this._reportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingIntervalInput() {
    return this._reportingInterval;
  }
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOutputReference {
    return new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelector {
  /**
  * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#match_labels DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
    }
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
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRef {
  /**
  * group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#group DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#kind DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#name DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#namespace DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefs {
  /**
  * group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#group DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#kind DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#name DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#namespace DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsOutputReference {
    return new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironment {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#default_value DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Name of the environment variable from which to extract the tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#name DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironmentToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironmentToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeader {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#default_value DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Name of the header from which to extract the tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#name DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeaderToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeaderToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteral {
  /**
  * The tag value to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#value DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteralToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteralToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTags {
  /**
  * Environment adds the value of an environment variable to each span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#environment DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#environment}
  */
  readonly environment?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironment;
  /**
  * RequestHeader adds the value of an header from the request to each span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#header DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#header}
  */
  readonly header?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeader;
  /**
  * Literal adds the same, hard-coded value to each span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#literal DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#literal}
  */
  readonly literal?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteral;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironmentToTerraform(struct!.environment),
    header: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeaderToTerraform(struct!.header),
    literal: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteralToTerraform(struct!.literal),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironment",
    },
    header: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeader",
    },
    literal: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteralToHclTerraform(struct!.literal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteral",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._literal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment.internalValue = undefined;
      this._header.internalValue = undefined;
      this._literal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment.internalValue = value.environment;
      this._header.internalValue = value.header;
      this._literal.internalValue = value.literal;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // literal - computed: false, optional: true, required: false
  private _literal = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteralOutputReference(this, "literal");
  public get literal() {
    return this._literal;
  }
  public putLiteral(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsLiteral) {
    this._literal.internalValue = value;
  }
  public resetLiteral() {
    this._literal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal.internalValue;
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatch {
  /**
  * This determines whether or not to apply the tracing configuration based on the direction of traffic relative to the proxied workload. Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#mode DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatchToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatchToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProviders {
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#name DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProviders | cdktf.IResolvable): any {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProviders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProviders | cdktf.IResolvable | undefined) {
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

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersOutputReference {
    return new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracing {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#custom_tags DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#custom_tags}
  */
  readonly customTags?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTags;
  /**
  * Controls span reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#disable_span_reporting DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#disable_span_reporting}
  */
  readonly disableSpanReporting?: boolean | cdktf.IResolvable;
  /**
  * Allows tailoring of behavior to specific conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#match DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#match}
  */
  readonly match?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatch;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#providers DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#providers}
  */
  readonly providers?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProviders[] | cdktf.IResolvable;
  /**
  * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#random_sampling_percentage DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#random_sampling_percentage}
  */
  readonly randomSamplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#use_request_id_for_trace_sampling DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#use_request_id_for_trace_sampling}
  */
  readonly useRequestIdForTraceSampling?: boolean | cdktf.IResolvable;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsToTerraform(struct!.customTags),
    disable_span_reporting: cdktf.booleanToTerraform(struct!.disableSpanReporting),
    match: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatchToTerraform(struct!.match),
    providers: cdktf.listMapper(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersToTerraform, false)(struct!.providers),
    random_sampling_percentage: cdktf.numberToTerraform(struct!.randomSamplingPercentage),
    use_request_id_for_trace_sampling: cdktf.booleanToTerraform(struct!.useRequestIdForTraceSampling),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsToHclTerraform(struct!.customTags),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTags",
    },
    disable_span_reporting: {
      value: cdktf.booleanToHclTerraform(struct!.disableSpanReporting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatch",
    },
    providers: {
      value: cdktf.listMapperHcl(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersToHclTerraform, false)(struct!.providers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersList",
    },
    random_sampling_percentage: {
      value: cdktf.numberToHclTerraform(struct!.randomSamplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_request_id_for_trace_sampling: {
      value: cdktf.booleanToHclTerraform(struct!.useRequestIdForTraceSampling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags?.internalValue;
    }
    if (this._disableSpanReporting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSpanReporting = this._disableSpanReporting;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._providers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providers = this._providers?.internalValue;
    }
    if (this._randomSamplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSamplingPercentage = this._randomSamplingPercentage;
    }
    if (this._useRequestIdForTraceSampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRequestIdForTraceSampling = this._useRequestIdForTraceSampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customTags.internalValue = undefined;
      this._disableSpanReporting = undefined;
      this._match.internalValue = undefined;
      this._providers.internalValue = undefined;
      this._randomSamplingPercentage = undefined;
      this._useRequestIdForTraceSampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customTags.internalValue = value.customTags;
      this._disableSpanReporting = value.disableSpanReporting;
      this._match.internalValue = value.match;
      this._providers.internalValue = value.providers;
      this._randomSamplingPercentage = value.randomSamplingPercentage;
      this._useRequestIdForTraceSampling = value.useRequestIdForTraceSampling;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTagsOutputReference(this, "custom_tags");
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingCustomTags) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }

  // disable_span_reporting - computed: false, optional: true, required: false
  private _disableSpanReporting?: boolean | cdktf.IResolvable; 
  public get disableSpanReporting() {
    return this.getBooleanAttribute('disable_span_reporting');
  }
  public set disableSpanReporting(value: boolean | cdktf.IResolvable) {
    this._disableSpanReporting = value;
  }
  public resetDisableSpanReporting() {
    this._disableSpanReporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSpanReportingInput() {
    return this._disableSpanReporting;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // providers - computed: false, optional: true, required: false
  private _providers = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProvidersList(this, "providers", false);
  public get providers() {
    return this._providers;
  }
  public putProviders(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingProviders[] | cdktf.IResolvable) {
    this._providers.internalValue = value;
  }
  public resetProviders() {
    this._providers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }

  // random_sampling_percentage - computed: false, optional: true, required: false
  private _randomSamplingPercentage?: number; 
  public get randomSamplingPercentage() {
    return this.getNumberAttribute('random_sampling_percentage');
  }
  public set randomSamplingPercentage(value: number) {
    this._randomSamplingPercentage = value;
  }
  public resetRandomSamplingPercentage() {
    this._randomSamplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSamplingPercentageInput() {
    return this._randomSamplingPercentage;
  }

  // use_request_id_for_trace_sampling - computed: false, optional: true, required: false
  private _useRequestIdForTraceSampling?: boolean | cdktf.IResolvable; 
  public get useRequestIdForTraceSampling() {
    return this.getBooleanAttribute('use_request_id_for_trace_sampling');
  }
  public set useRequestIdForTraceSampling(value: boolean | cdktf.IResolvable) {
    this._useRequestIdForTraceSampling = value;
  }
  public resetUseRequestIdForTraceSampling() {
    this._useRequestIdForTraceSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRequestIdForTraceSamplingInput() {
    return this._useRequestIdForTraceSampling;
  }
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingList extends cdktf.ComplexList {
  public internalValue? : DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracing[] | cdktf.IResolvable

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
  public get(index: number): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingOutputReference {
    return new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpec {
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#access_logging DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#access_logging}
  */
  readonly accessLogging?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLogging[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#metrics DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#selector DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#target_ref DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRef;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#target_refs DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#target_refs}
  */
  readonly targetRefs?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#tracing DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest#tracing}
  */
  readonly tracing?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracing[] | cdktf.IResolvable;
}

export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecToTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_logging: cdktf.listMapper(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingToTerraform, false)(struct!.accessLogging),
    metrics: cdktf.listMapper(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsToTerraform, false)(struct!.metrics),
    selector: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    target_ref: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    target_refs: cdktf.listMapper(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
    tracing: cdktf.listMapper(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingToTerraform, false)(struct!.tracing),
  }
}


export function dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_logging: {
      value: cdktf.listMapperHcl(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingToHclTerraform, false)(struct!.accessLogging),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingList",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsList",
    },
    selector: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelector",
    },
    target_ref: {
      value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRef",
    },
    target_refs: {
      value: cdktf.listMapperHcl(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsList",
    },
    tracing: {
      value: cdktf.listMapperHcl(dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingToHclTerraform, false)(struct!.tracing),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLogging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogging = this._accessLogging?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLogging.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._targetRef.internalValue = undefined;
      this._targetRefs.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLogging.internalValue = value.accessLogging;
      this._metrics.internalValue = value.metrics;
      this._selector.internalValue = value.selector;
      this._targetRef.internalValue = value.targetRef;
      this._targetRefs.internalValue = value.targetRefs;
      this._tracing.internalValue = value.tracing;
    }
  }

  // access_logging - computed: false, optional: true, required: false
  private _accessLogging = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLoggingList(this, "access_logging", false);
  public get accessLogging() {
    return this._accessLogging;
  }
  public putAccessLogging(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecAccessLogging[] | cdktf.IResolvable) {
    this._accessLogging.internalValue = value;
  }
  public resetAccessLogging() {
    this._accessLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLoggingInput() {
    return this._accessLogging.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // target_refs - computed: false, optional: true, required: false
  private _targetRefs = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  public resetTargetRefs() {
    this._targetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracingList(this, "tracing", false);
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecTracing[] | cdktf.IResolvable) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest k8s_telemetry_istio_io_telemetry_v1alpha1_manifest}
*/
export class DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_telemetry_istio_io_telemetry_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STelemetryIstioIoTelemetryV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_telemetry_istio_io_telemetry_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/telemetry_istio_io_telemetry_v1alpha1_manifest k8s_telemetry_istio_io_telemetry_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_telemetry_istio_io_telemetry_v1alpha1_manifest',
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
  private _metadata = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpec) {
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
      metadata: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STelemetryIstioIoTelemetryV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
