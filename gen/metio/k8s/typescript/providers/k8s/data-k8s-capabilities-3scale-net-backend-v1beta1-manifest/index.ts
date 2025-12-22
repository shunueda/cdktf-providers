// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#metadata DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadata;
  /**
  * BackendSpec defines the desired state of Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#spec DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpec;
}
export interface DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#annotations DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#labels DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#name DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadataToTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#http_method DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#http_method}
  */
  readonly httpMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#increment DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#increment}
  */
  readonly increment: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#last DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#last}
  */
  readonly last?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#metric_method_ref DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#metric_method_ref}
  */
  readonly metricMethodRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#pattern DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesToTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    increment: cdktf.numberToTerraform(struct!.increment),
    last: cdktf.booleanToTerraform(struct!.last),
    metric_method_ref: cdktf.stringToTerraform(struct!.metricMethodRef),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesToHclTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    increment: {
      value: cdktf.numberToHclTerraform(struct!.increment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktf.booleanToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_method_ref: {
      value: cdktf.stringToHclTerraform(struct!.metricMethodRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._metricMethodRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMethodRef = this._metricMethodRef;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpMethod = undefined;
      this._increment = undefined;
      this._last = undefined;
      this._metricMethodRef = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpMethod = value.httpMethod;
      this._increment = value.increment;
      this._last = value.last;
      this._metricMethodRef = value.metricMethodRef;
      this._pattern = value.pattern;
    }
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // increment - computed: false, optional: false, required: true
  private _increment?: number; 
  public get increment() {
    return this.getNumberAttribute('increment');
  }
  public set increment(value: number) {
    this._increment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementInput() {
    return this._increment;
  }

  // last - computed: false, optional: true, required: false
  private _last?: boolean | cdktf.IResolvable; 
  public get last() {
    return this.getBooleanAttribute('last');
  }
  public set last(value: boolean | cdktf.IResolvable) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // metric_method_ref - computed: false, optional: false, required: true
  private _metricMethodRef?: string; 
  public get metricMethodRef() {
    return this.getStringAttribute('metric_method_ref');
  }
  public set metricMethodRef(value: string) {
    this._metricMethodRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMethodRefInput() {
    return this._metricMethodRef;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesOutputReference {
    return new DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#description DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#friendly_name DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#friendly_name}
  */
  readonly friendlyName: string;
}

export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethodsToTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
  }
}


export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethodsToHclTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friendly_name: {
      value: cdktf.stringToHclTerraform(struct!.friendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._friendlyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._friendlyName = value.friendlyName;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }
}
export interface DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#description DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#friendly_name DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#unit DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetricsToTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetricsToHclTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friendly_name: {
      value: cdktf.stringToHclTerraform(struct!.friendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._friendlyName = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._friendlyName = value.friendlyName;
      this._unit = value.unit;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#name DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRefToTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpec {
  /**
  * Description is a human readable text of the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#description DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#mapping_rules DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#mapping_rules}
  */
  readonly mappingRules?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRules[] | cdktf.IResolvable;
  /**
  * Methods Map: system_name -> MethodSpec system_name attr is unique for all metrics AND methods In other words, if metric's system_name is A, there is no metric or method with system_name A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#methods DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#methods}
  */
  readonly methods?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethods;
  /**
  * Metrics Map: system_name -> MetricSpec system_name attr is unique for all metrics AND methods In other words, if metric's system_name is A, there is no metric or method with system_name A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#metrics DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetrics;
  /**
  * Name is human readable name for the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#name DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * PrivateBaseURL Private Base URL of the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#private_base_url DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#private_base_url}
  */
  readonly privateBaseUrl: string;
  /**
  * ProviderAccountRef references account provider credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#provider_account_ref DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#provider_account_ref}
  */
  readonly providerAccountRef?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRef;
  /**
  * SystemName identifies uniquely the backend within the account provider Default value will be sanitized Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#system_name DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest#system_name}
  */
  readonly systemName?: string;
}

export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecToTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    mapping_rules: cdktf.listMapper(dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesToTerraform, false)(struct!.mappingRules),
    methods: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethodsToTerraform(struct!.methods),
    metrics: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetricsToTerraform(struct!.metrics),
    name: cdktf.stringToTerraform(struct!.name),
    private_base_url: cdktf.stringToTerraform(struct!.privateBaseUrl),
    provider_account_ref: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRefToTerraform(struct!.providerAccountRef),
    system_name: cdktf.stringToTerraform(struct!.systemName),
  }
}


export function dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_rules: {
      value: cdktf.listMapperHcl(dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesToHclTerraform, false)(struct!.mappingRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesList",
    },
    methods: {
      value: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethodsToHclTerraform(struct!.methods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethods",
    },
    metrics: {
      value: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetrics",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_base_url: {
      value: cdktf.stringToHclTerraform(struct!.privateBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_account_ref: {
      value: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct!.providerAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRef",
    },
    system_name: {
      value: cdktf.stringToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mappingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingRules = this._mappingRules?.internalValue;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateBaseUrl = this._privateBaseUrl;
    }
    if (this._providerAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountRef = this._providerAccountRef?.internalValue;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._mappingRules.internalValue = undefined;
      this._methods.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._name = undefined;
      this._privateBaseUrl = undefined;
      this._providerAccountRef.internalValue = undefined;
      this._systemName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._mappingRules.internalValue = value.mappingRules;
      this._methods.internalValue = value.methods;
      this._metrics.internalValue = value.metrics;
      this._name = value.name;
      this._privateBaseUrl = value.privateBaseUrl;
      this._providerAccountRef.internalValue = value.providerAccountRef;
      this._systemName = value.systemName;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // mapping_rules - computed: false, optional: true, required: false
  private _mappingRules = new DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRulesList(this, "mapping_rules", false);
  public get mappingRules() {
    return this._mappingRules;
  }
  public putMappingRules(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMappingRules[] | cdktf.IResolvable) {
    this._mappingRules.internalValue = value;
  }
  public resetMappingRules() {
    this._mappingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRulesInput() {
    return this._mappingRules.internalValue;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethodsOutputReference(this, "methods");
  public get methods() {
    return this._methods;
  }
  public putMethods(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMethods) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
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

  // private_base_url - computed: false, optional: false, required: true
  private _privateBaseUrl?: string; 
  public get privateBaseUrl() {
    return this.getStringAttribute('private_base_url');
  }
  public set privateBaseUrl(value: string) {
    this._privateBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateBaseUrlInput() {
    return this._privateBaseUrl;
  }

  // provider_account_ref - computed: false, optional: true, required: false
  private _providerAccountRef = new DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRefOutputReference(this, "provider_account_ref");
  public get providerAccountRef() {
    return this._providerAccountRef;
  }
  public putProviderAccountRef(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecProviderAccountRef) {
    this._providerAccountRef.internalValue = value;
  }
  public resetProviderAccountRef() {
    this._providerAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountRefInput() {
    return this._providerAccountRef.internalValue;
  }

  // system_name - computed: false, optional: true, required: false
  private _systemName?: string; 
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
  public set systemName(value: string) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest k8s_capabilities_3scale_net_backend_v1beta1_manifest}
*/
export class DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capabilities_3scale_net_backend_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapabilities3ScaleNetBackendV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capabilities_3scale_net_backend_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_backend_v1beta1_manifest k8s_capabilities_3scale_net_backend_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capabilities_3scale_net_backend_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpec) {
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
      metadata: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetBackendV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
