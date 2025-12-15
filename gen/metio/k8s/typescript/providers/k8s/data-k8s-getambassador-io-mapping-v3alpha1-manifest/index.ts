// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#metadata DataK8SGetambassadorIoMappingV3Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadata;
  /**
  * MappingSpec defines the desired state of Mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#spec DataK8SGetambassadorIoMappingV3Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpec;
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#annotations DataK8SGetambassadorIoMappingV3Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#labels DataK8SGetambassadorIoMappingV3Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#name DataK8SGetambassadorIoMappingV3Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#namespace DataK8SGetambassadorIoMappingV3Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#append DataK8SGetambassadorIoMappingV3Alpha1Manifest#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#v2_representation DataK8SGetambassadorIoMappingV3Alpha1Manifest#v2_representation}
  */
  readonly v2Representation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#value DataK8SGetambassadorIoMappingV3Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeadersToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    v2_representation: cdktf.stringToTerraform(struct!.v2Representation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeadersToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v2_representation: {
      value: cdktf.stringToHclTerraform(struct!.v2Representation),
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

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._v2Representation !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2Representation = this._v2Representation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._v2Representation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._v2Representation = value.v2Representation;
      this._value = value.value;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // v2_representation - computed: false, optional: true, required: false
  private _v2Representation?: string; 
  public get v2Representation() {
    return this.getStringAttribute('v2_representation');
  }
  public set v2Representation(value: string) {
    this._v2Representation = value;
  }
  public resetV2Representation() {
    this._v2Representation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2RepresentationInput() {
    return this._v2Representation;
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
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#append DataK8SGetambassadorIoMappingV3Alpha1Manifest#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#v2_representation DataK8SGetambassadorIoMappingV3Alpha1Manifest#v2_representation}
  */
  readonly v2Representation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#value DataK8SGetambassadorIoMappingV3Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeadersToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    v2_representation: cdktf.stringToTerraform(struct!.v2Representation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeadersToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v2_representation: {
      value: cdktf.stringToHclTerraform(struct!.v2Representation),
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

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._v2Representation !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2Representation = this._v2Representation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._v2Representation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._v2Representation = value.v2Representation;
      this._value = value.value;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // v2_representation - computed: false, optional: true, required: false
  private _v2Representation?: string; 
  public get v2Representation() {
    return this.getStringAttribute('v2_representation');
  }
  public set v2Representation(value: string) {
    this._v2Representation = value;
  }
  public resetV2Representation() {
    this._v2Representation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2RepresentationInput() {
    return this._v2Representation;
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
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#max_connections DataK8SGetambassadorIoMappingV3Alpha1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#max_pending_requests DataK8SGetambassadorIoMappingV3Alpha1Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#max_requests DataK8SGetambassadorIoMappingV3Alpha1Manifest#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#max_retries DataK8SGetambassadorIoMappingV3Alpha1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#priority DataK8SGetambassadorIoMappingV3Alpha1Manifest#priority}
  */
  readonly priority?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRetries = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRetries = value.maxRetries;
      this._priority = value.priority;
    }
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersOutputReference {
    return new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#credentials DataK8SGetambassadorIoMappingV3Alpha1Manifest#credentials}
  */
  readonly credentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#exposed_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#exposed_headers}
  */
  readonly exposedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#max_age DataK8SGetambassadorIoMappingV3Alpha1Manifest#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#methods DataK8SGetambassadorIoMappingV3Alpha1Manifest#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#origins DataK8SGetambassadorIoMappingV3Alpha1Manifest#origins}
  */
  readonly origins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#v2_comma_separated_origins DataK8SGetambassadorIoMappingV3Alpha1Manifest#v2_comma_separated_origins}
  */
  readonly v2CommaSeparatedOrigins?: boolean | cdktf.IResolvable;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCorsToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.booleanToTerraform(struct!.credentials),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origins),
    v2_comma_separated_origins: cdktf.booleanToTerraform(struct!.v2CommaSeparatedOrigins),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCorsToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.booleanToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    v2_comma_separated_origins: {
      value: cdktf.booleanToHclTerraform(struct!.v2CommaSeparatedOrigins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    if (this._v2CommaSeparatedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2CommaSeparatedOrigins = this._v2CommaSeparatedOrigins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._exposedHeaders = undefined;
      this._headers = undefined;
      this._maxAge = undefined;
      this._methods = undefined;
      this._origins = undefined;
      this._v2CommaSeparatedOrigins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._exposedHeaders = value.exposedHeaders;
      this._headers = value.headers;
      this._maxAge = value.maxAge;
      this._methods = value.methods;
      this._origins = value.origins;
      this._v2CommaSeparatedOrigins = value.v2CommaSeparatedOrigins;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: boolean | cdktf.IResolvable; 
  public get credentials() {
    return this.getBooleanAttribute('credentials');
  }
  public set credentials(value: boolean | cdktf.IResolvable) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // exposed_headers - computed: false, optional: true, required: false
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  public resetExposedHeaders() {
    this._exposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // origins - computed: false, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return this.getListAttribute('origins');
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }

  // v2_comma_separated_origins - computed: false, optional: true, required: false
  private _v2CommaSeparatedOrigins?: boolean | cdktf.IResolvable; 
  public get v2CommaSeparatedOrigins() {
    return this.getBooleanAttribute('v2_comma_separated_origins');
  }
  public set v2CommaSeparatedOrigins(value: boolean | cdktf.IResolvable) {
    this._v2CommaSeparatedOrigins = value;
  }
  public resetV2CommaSeparatedOrigins() {
    this._v2CommaSeparatedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2CommaSeparatedOriginsInput() {
    return this._v2CommaSeparatedOrigins;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#display_name DataK8SGetambassadorIoMappingV3Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#ignored DataK8SGetambassadorIoMappingV3Alpha1Manifest#ignored}
  */
  readonly ignored?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#path DataK8SGetambassadorIoMappingV3Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#timeout_ms DataK8SGetambassadorIoMappingV3Alpha1Manifest#timeout_ms}
  */
  readonly timeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#url DataK8SGetambassadorIoMappingV3Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocsToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ignored: cdktf.booleanToTerraform(struct!.ignored),
    path: cdktf.stringToTerraform(struct!.path),
    timeout_ms: cdktf.numberToTerraform(struct!.timeoutMs),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocsToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignored: {
      value: cdktf.booleanToHclTerraform(struct!.ignored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ignored !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignored = this._ignored;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._timeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMs = this._timeoutMs;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._ignored = undefined;
      this._path = undefined;
      this._timeoutMs = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._ignored = value.ignored;
      this._path = value.path;
      this._timeoutMs = value.timeoutMs;
      this._url = value.url;
    }
  }

  // display_name - computed: false, optional: true, required: false
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

  // ignored - computed: false, optional: true, required: false
  private _ignored?: boolean | cdktf.IResolvable; 
  public get ignored() {
    return this.getBooleanAttribute('ignored');
  }
  public set ignored(value: boolean | cdktf.IResolvable) {
    this._ignored = value;
  }
  public resetIgnored() {
    this._ignored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredInput() {
    return this._ignored;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }
  public set timeoutMs(value: number) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSource {
  /**
  * The name of a file on the Ambassador pod that contains a format text string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#filename DataK8SGetambassadorIoMappingV3Alpha1Manifest#filename}
  */
  readonly filename?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSourceToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSourceToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
    }
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBody {
  /**
  * The content type to set on the error response body when using text_format or text_format_source. Defaults to 'text/plain'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#content_type DataK8SGetambassadorIoMappingV3Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * A JSON response with content-type: application/json. The values can contain format text like in text_format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#json_format DataK8SGetambassadorIoMappingV3Alpha1Manifest#json_format}
  */
  readonly jsonFormat?: { [key: string]: string };
  /**
  * A format string representing a text response body. Content-Type can be set using the 'content_type' field below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#text_format DataK8SGetambassadorIoMappingV3Alpha1Manifest#text_format}
  */
  readonly textFormat?: string;
  /**
  * A format string sourced from a file on the Ambassador container. Useful for larger response bodies that should not be placed inline in configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#text_format_source DataK8SGetambassadorIoMappingV3Alpha1Manifest#text_format_source}
  */
  readonly textFormatSource?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSource;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    json_format: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jsonFormat),
    text_format: cdktf.stringToTerraform(struct!.textFormat),
    text_format_source: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSourceToTerraform(struct!.textFormatSource),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_format: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jsonFormat),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    text_format: {
      value: cdktf.stringToHclTerraform(struct!.textFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_format_source: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSourceToHclTerraform(struct!.textFormatSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._jsonFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFormat = this._jsonFormat;
    }
    if (this._textFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormat = this._textFormat;
    }
    if (this._textFormatSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormatSource = this._textFormatSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._jsonFormat = undefined;
      this._textFormat = undefined;
      this._textFormatSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._jsonFormat = value.jsonFormat;
      this._textFormat = value.textFormat;
      this._textFormatSource.internalValue = value.textFormatSource;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // json_format - computed: false, optional: true, required: false
  private _jsonFormat?: { [key: string]: string }; 
  public get jsonFormat() {
    return this.getStringMapAttribute('json_format');
  }
  public set jsonFormat(value: { [key: string]: string }) {
    this._jsonFormat = value;
  }
  public resetJsonFormat() {
    this._jsonFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFormatInput() {
    return this._jsonFormat;
  }

  // text_format - computed: false, optional: true, required: false
  private _textFormat?: string; 
  public get textFormat() {
    return this.getStringAttribute('text_format');
  }
  public set textFormat(value: string) {
    this._textFormat = value;
  }
  public resetTextFormat() {
    this._textFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatInput() {
    return this._textFormat;
  }

  // text_format_source - computed: false, optional: true, required: false
  private _textFormatSource = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSourceOutputReference(this, "text_format_source");
  public get textFormatSource() {
    return this._textFormatSource;
  }
  public putTextFormatSource(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyTextFormatSource) {
    this._textFormatSource.internalValue = value;
  }
  public resetTextFormatSource() {
    this._textFormatSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatSourceInput() {
    return this._textFormatSource.internalValue;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverrides {
  /**
  * The new response body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#body DataK8SGetambassadorIoMappingV3Alpha1Manifest#body}
  */
  readonly body: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBody;
  /**
  * The status code to match on -- not a pointer because it's required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#on_status_code DataK8SGetambassadorIoMappingV3Alpha1Manifest#on_status_code}
  */
  readonly onStatusCode: number;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyToTerraform(struct!.body),
    on_status_code: cdktf.numberToTerraform(struct!.onStatusCode),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBody",
    },
    on_status_code: {
      value: cdktf.numberToHclTerraform(struct!.onStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._onStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStatusCode = this._onStatusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._onStatusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._onStatusCode = value.onStatusCode;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesBody) {
    this._body.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // on_status_code - computed: false, optional: false, required: true
  private _onStatusCode?: number; 
  public get onStatusCode() {
    return this.getNumberAttribute('on_status_code');
  }
  public set onStatusCode(value: number) {
    this._onStatusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onStatusCodeInput() {
    return this._onStatusCode;
  }
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesOutputReference {
    return new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpc {
  /**
  * The value of the :authority header in the gRPC health check request. If left empty the upstream name will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#authority DataK8SGetambassadorIoMappingV3Alpha1Manifest#authority}
  */
  readonly authority?: string;
  /**
  * The upstream name parameter which will be sent to gRPC service in the health check message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#upstream_name DataK8SGetambassadorIoMappingV3Alpha1Manifest#upstream_name}
  */
  readonly upstreamName: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpcToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    upstream_name: cdktf.stringToTerraform(struct!.upstreamName),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpcToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_name: {
      value: cdktf.stringToHclTerraform(struct!.upstreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._upstreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamName = this._upstreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._upstreamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._upstreamName = value.upstreamName;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // upstream_name - computed: false, optional: false, required: true
  private _upstreamName?: string; 
  public get upstreamName() {
    return this.getStringAttribute('upstream_name');
  }
  public set upstreamName(value: string) {
    this._upstreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNameInput() {
    return this._upstreamName;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#append DataK8SGetambassadorIoMappingV3Alpha1Manifest#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#v2_representation DataK8SGetambassadorIoMappingV3Alpha1Manifest#v2_representation}
  */
  readonly v2Representation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#value DataK8SGetambassadorIoMappingV3Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeadersToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    v2_representation: cdktf.stringToTerraform(struct!.v2Representation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeadersToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v2_representation: {
      value: cdktf.stringToHclTerraform(struct!.v2Representation),
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

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._v2Representation !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2Representation = this._v2Representation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._v2Representation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._v2Representation = value.v2Representation;
      this._value = value.value;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // v2_representation - computed: false, optional: true, required: false
  private _v2Representation?: string; 
  public get v2Representation() {
    return this.getStringAttribute('v2_representation');
  }
  public set v2Representation(value: string) {
    this._v2Representation = value;
  }
  public resetV2Representation() {
    this._v2Representation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2RepresentationInput() {
    return this._v2Representation;
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
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatuses {
  /**
  * End of the statuses to include. Must be between 100 and 599 (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#max DataK8SGetambassadorIoMappingV3Alpha1Manifest#max}
  */
  readonly max: number;
  /**
  * Start of the statuses to include. Must be between 100 and 599 (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#min DataK8SGetambassadorIoMappingV3Alpha1Manifest#min}
  */
  readonly min: number;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatuses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesOutputReference {
    return new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#add_request_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#add_request_headers}
  */
  readonly addRequestHeaders?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#expected_statuses DataK8SGetambassadorIoMappingV3Alpha1Manifest#expected_statuses}
  */
  readonly expectedStatuses?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatuses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#hostname DataK8SGetambassadorIoMappingV3Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#path DataK8SGetambassadorIoMappingV3Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#remove_request_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#remove_request_headers}
  */
  readonly removeRequestHeaders?: string[];
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_request_headers: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeadersToTerraform(struct!.addRequestHeaders),
    expected_statuses: cdktf.listMapper(dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesToTerraform, false)(struct!.expectedStatuses),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    remove_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeRequestHeaders),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_request_headers: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeadersToHclTerraform(struct!.addRequestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeaders",
    },
    expected_statuses: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesToHclTerraform, false)(struct!.expectedStatuses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRequestHeaders = this._addRequestHeaders?.internalValue;
    }
    if (this._expectedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatuses = this._expectedStatuses?.internalValue;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._removeRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeRequestHeaders = this._removeRequestHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addRequestHeaders.internalValue = undefined;
      this._expectedStatuses.internalValue = undefined;
      this._hostname = undefined;
      this._path = undefined;
      this._removeRequestHeaders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addRequestHeaders.internalValue = value.addRequestHeaders;
      this._expectedStatuses.internalValue = value.expectedStatuses;
      this._hostname = value.hostname;
      this._path = value.path;
      this._removeRequestHeaders = value.removeRequestHeaders;
    }
  }

  // add_request_headers - computed: false, optional: true, required: false
  private _addRequestHeaders = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeadersOutputReference(this, "add_request_headers");
  public get addRequestHeaders() {
    return this._addRequestHeaders;
  }
  public putAddRequestHeaders(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpAddRequestHeaders) {
    this._addRequestHeaders.internalValue = value;
  }
  public resetAddRequestHeaders() {
    this._addRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRequestHeadersInput() {
    return this._addRequestHeaders.internalValue;
  }

  // expected_statuses - computed: false, optional: true, required: false
  private _expectedStatuses = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatusesList(this, "expected_statuses", false);
  public get expectedStatuses() {
    return this._expectedStatuses;
  }
  public putExpectedStatuses(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpExpectedStatuses[] | cdktf.IResolvable) {
    this._expectedStatuses.internalValue = value;
  }
  public resetExpectedStatuses() {
    this._expectedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusesInput() {
    return this._expectedStatuses.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // remove_request_headers - computed: false, optional: true, required: false
  private _removeRequestHeaders?: string[]; 
  public get removeRequestHeaders() {
    return this.getListAttribute('remove_request_headers');
  }
  public set removeRequestHeaders(value: string[]) {
    this._removeRequestHeaders = value;
  }
  public resetRemoveRequestHeaders() {
    this._removeRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeRequestHeadersInput() {
    return this._removeRequestHeaders;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheck {
  /**
  * HealthCheck for gRPC upstreams. Only one of grpc_health_check or http_health_check may be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#grpc DataK8SGetambassadorIoMappingV3Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpc;
  /**
  * HealthCheck for HTTP upstreams. Only one of http_health_check or grpc_health_check may be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#http DataK8SGetambassadorIoMappingV3Alpha1Manifest#http}
  */
  readonly http?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttp;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpcToTerraform(struct!.grpc),
    http: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpToTerraform(struct!.http),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpc",
    },
    http: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecks {
  /**
  * Configuration for where the healthcheck request should be made to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#health_check DataK8SGetambassadorIoMappingV3Alpha1Manifest#health_check}
  */
  readonly healthCheck: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheck;
  /**
  * Number of expected responses for the upstream to be considered healthy. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#healthy_threshold DataK8SGetambassadorIoMappingV3Alpha1Manifest#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Interval between health checks. Defaults to every 5 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#interval DataK8SGetambassadorIoMappingV3Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Timeout for connecting to the health checking endpoint. Defaults to 3 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#timeout DataK8SGetambassadorIoMappingV3Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Number of non-expected responses for the upstream to be considered unhealthy. A single 503 will mark the upstream as unhealthy regardless of the threshold. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#unhealthy_threshold DataK8SGetambassadorIoMappingV3Alpha1Manifest#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckToTerraform(struct!.healthCheck),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.stringToTerraform(struct!.interval),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheck",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = value.healthCheck;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksOutputReference {
    return new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepalive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#idle_time DataK8SGetambassadorIoMappingV3Alpha1Manifest#idle_time}
  */
  readonly idleTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#interval DataK8SGetambassadorIoMappingV3Alpha1Manifest#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#probes DataK8SGetambassadorIoMappingV3Alpha1Manifest#probes}
  */
  readonly probes?: number;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepaliveToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_time: cdktf.numberToTerraform(struct!.idleTime),
    interval: cdktf.numberToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepaliveToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_time: {
      value: cdktf.numberToHclTerraform(struct!.idleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTime = this._idleTime;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTime = undefined;
      this._interval = undefined;
      this._probes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTime = value.idleTime;
      this._interval = value.interval;
      this._probes = value.probes;
    }
  }

  // idle_time - computed: false, optional: true, required: false
  private _idleTime?: number; 
  public get idleTime() {
    return this.getNumberAttribute('idle_time');
  }
  public set idleTime(value: number) {
    this._idleTime = value;
  }
  public resetIdleTime() {
    this._idleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeInput() {
    return this._idleTime;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#name DataK8SGetambassadorIoMappingV3Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#path DataK8SGetambassadorIoMappingV3Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#ttl DataK8SGetambassadorIoMappingV3Alpha1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookieToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookieToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookie | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._ttl = value.ttl;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#cookie DataK8SGetambassadorIoMappingV3Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookie;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#header DataK8SGetambassadorIoMappingV3Alpha1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#policy DataK8SGetambassadorIoMappingV3Alpha1Manifest#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#source_ip DataK8SGetambassadorIoMappingV3Alpha1Manifest#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookieToTerraform(struct!.cookie),
    header: cdktf.stringToTerraform(struct!.header),
    policy: cdktf.stringToTerraform(struct!.policy),
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookie",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie.internalValue = undefined;
      this._header = undefined;
      this._policy = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie.internalValue = value.cookie;
      this._header = value.header;
      this._policy = value.policy;
      this._sourceIp = value.sourceIp;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#pattern DataK8SGetambassadorIoMappingV3Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#substitution DataK8SGetambassadorIoMappingV3Alpha1Manifest#substitution}
  */
  readonly substitution?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirectToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    substitution: cdktf.stringToTerraform(struct!.substitution),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirectToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._substitution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._substitution = value.substitution;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // substitution - computed: false, optional: true, required: false
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  public resetSubstitution() {
    this._substitution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#pattern DataK8SGetambassadorIoMappingV3Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#substitution DataK8SGetambassadorIoMappingV3Alpha1Manifest#substitution}
  */
  readonly substitution?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewriteToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    substitution: cdktf.stringToTerraform(struct!.substitution),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewriteToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._substitution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._substitution = value.substitution;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // substitution - computed: false, optional: true, required: false
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  public resetSubstitution() {
    this._substitution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#num_retries DataK8SGetambassadorIoMappingV3Alpha1Manifest#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#per_try_timeout DataK8SGetambassadorIoMappingV3Alpha1Manifest#per_try_timeout}
  */
  readonly perTryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#retry_on DataK8SGetambassadorIoMappingV3Alpha1Manifest#retry_on}
  */
  readonly retryOn?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicyToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    per_try_timeout: cdktf.stringToTerraform(struct!.perTryTimeout),
    retry_on: cdktf.stringToTerraform(struct!.retryOn),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicyToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.stringToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_on: {
      value: cdktf.stringToHclTerraform(struct!.retryOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numRetries = undefined;
      this._perTryTimeout = undefined;
      this._retryOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numRetries = value.numRetries;
      this._perTryTimeout = value.perTryTimeout;
      this._retryOn = value.retryOn;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: string; 
  public get perTryTimeout() {
    return this.getStringAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: string) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string; 
  public get retryOn() {
    return this.getStringAttribute('retry_on');
  }
  public set retryOn(value: string) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTls {
  /**
  * ServiceScheme specifies how to spell and capitalize the scheme-part of the service URL. Acceptable values are 'http://' (case-insensitive), 'https://' (case-insensitive), or ''. The value is used if it agrees with whether or not this resource enables TLS origination, or if something else in the resource overrides the scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#service_scheme DataK8SGetambassadorIoMappingV3Alpha1Manifest#service_scheme}
  */
  readonly serviceScheme?: string;
  /**
  * TLS controls whether and how to represent the 'tls' field when its value could be implied by the 'service' field. In v2, there were a lot of different ways to spell an 'empty' value, and this field specifies which way to spell it (and will therefore only be used if the value will indeed be empty). | Value | Representation | Meaning of representation | |--------------+---------------------------------------+------------------------------------| | '' | omit the field | defer to service (no TLSContext) | | 'null' | store an explicit 'null' in the field | defer to service (no TLSContext) | | 'string' | store an empty string in the field | defer to service (no TLSContext) | | 'bool:false' | store a Boolean 'false' in the field | defer to service (no TLSContext) | | 'bool:true' | store a Boolean 'true' in the field | originate TLS (no TLSContext) | If the meaning of the representation contradicts anything else (if a TLSContext is to be used, or in the case of 'bool:true' if TLS is not to be originated), then this field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#tls DataK8SGetambassadorIoMappingV3Alpha1Manifest#tls}
  */
  readonly tls?: string;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTlsToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_scheme: cdktf.stringToTerraform(struct!.serviceScheme),
    tls: cdktf.stringToTerraform(struct!.tls),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTlsToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_scheme: {
      value: cdktf.stringToHclTerraform(struct!.serviceScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceScheme = this._serviceScheme;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceScheme = undefined;
      this._tls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceScheme = value.serviceScheme;
      this._tls = value.tls;
    }
  }

  // service_scheme - computed: false, optional: true, required: false
  private _serviceScheme?: string; 
  public get serviceScheme() {
    return this.getStringAttribute('service_scheme');
  }
  public set serviceScheme(value: string) {
    this._serviceScheme = value;
  }
  public resetServiceScheme() {
    this._serviceScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSchemeInput() {
    return this._serviceScheme;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }
}
export interface DataK8SGetambassadorIoMappingV3Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#add_linkerd_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#add_linkerd_headers}
  */
  readonly addLinkerdHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#add_request_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#add_request_headers}
  */
  readonly addRequestHeaders?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#add_response_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#add_response_headers}
  */
  readonly addResponseHeaders?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeaders;
  /**
  * A case-insensitive list of the non-HTTP protocols to allow 'upgrading' to from HTTP via the 'Connection: upgrade' mechanism[1]. After the upgrade, Ambassador does not interpret the traffic, and behaves similarly to how it does for TCPMappings. [1]: https://tools.ietf.org/html/rfc7230#section-6.7 For example, if your upstream service supports WebSockets, you would write allow_upgrade: - websocket Or if your upstream service supports upgrading from HTTP to SPDY (as the Kubernetes apiserver does for 'kubectl exec' functionality), you would write allow_upgrade: - spdy/3.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#allow_upgrade DataK8SGetambassadorIoMappingV3Alpha1Manifest#allow_upgrade}
  */
  readonly allowUpgrade?: string[];
  /**
  * AmbassadorID declares which Ambassador instances should pay attention to this resource. If no value is provided, the default is: ambassador_id: - 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#ambassador_id DataK8SGetambassadorIoMappingV3Alpha1Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#auth_context_extensions DataK8SGetambassadorIoMappingV3Alpha1Manifest#auth_context_extensions}
  */
  readonly authContextExtensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#auto_host_rewrite DataK8SGetambassadorIoMappingV3Alpha1Manifest#auto_host_rewrite}
  */
  readonly autoHostRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#bypass_auth DataK8SGetambassadorIoMappingV3Alpha1Manifest#bypass_auth}
  */
  readonly bypassAuth?: boolean | cdktf.IResolvable;
  /**
  * If true, bypasses any 'error_response_overrides' set on the Ambassador module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#bypass_error_response_overrides DataK8SGetambassadorIoMappingV3Alpha1Manifest#bypass_error_response_overrides}
  */
  readonly bypassErrorResponseOverrides?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#case_sensitive DataK8SGetambassadorIoMappingV3Alpha1Manifest#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#circuit_breakers DataK8SGetambassadorIoMappingV3Alpha1Manifest#circuit_breakers}
  */
  readonly circuitBreakers?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#cluster_idle_timeout_ms DataK8SGetambassadorIoMappingV3Alpha1Manifest#cluster_idle_timeout_ms}
  */
  readonly clusterIdleTimeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#cluster_max_connection_lifetime_ms DataK8SGetambassadorIoMappingV3Alpha1Manifest#cluster_max_connection_lifetime_ms}
  */
  readonly clusterMaxConnectionLifetimeMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#cluster_tag DataK8SGetambassadorIoMappingV3Alpha1Manifest#cluster_tag}
  */
  readonly clusterTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#connect_timeout_ms DataK8SGetambassadorIoMappingV3Alpha1Manifest#connect_timeout_ms}
  */
  readonly connectTimeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#cors DataK8SGetambassadorIoMappingV3Alpha1Manifest#cors}
  */
  readonly cors?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#dns_type DataK8SGetambassadorIoMappingV3Alpha1Manifest#dns_type}
  */
  readonly dnsType?: string;
  /**
  * DocsInfo provides some extra information about the docs for the Mapping. Docs is used by both the agent and the DevPortal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#docs DataK8SGetambassadorIoMappingV3Alpha1Manifest#docs}
  */
  readonly docs?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#enable_ipv4 DataK8SGetambassadorIoMappingV3Alpha1Manifest#enable_ipv4}
  */
  readonly enableIpv4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#enable_ipv6 DataK8SGetambassadorIoMappingV3Alpha1Manifest#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#envoy_override DataK8SGetambassadorIoMappingV3Alpha1Manifest#envoy_override}
  */
  readonly envoyOverride?: { [key: string]: string };
  /**
  * Error response overrides for this Mapping. Replaces all of the 'error_response_overrides' set on the Ambassador module, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#error_response_overrides DataK8SGetambassadorIoMappingV3Alpha1Manifest#error_response_overrides}
  */
  readonly errorResponseOverrides?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverrides[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#grpc DataK8SGetambassadorIoMappingV3Alpha1Manifest#grpc}
  */
  readonly grpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#health_checks DataK8SGetambassadorIoMappingV3Alpha1Manifest#health_checks}
  */
  readonly healthChecks?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecks[] | cdktf.IResolvable;
  /**
  * Exact match for the hostname of a request if HostRegex is false; regex match for the hostname if HostRegex is true. Host specifies both a match for the ':authority' header of a request, as well as a match criterion for Host CRDs: a Mapping that specifies Host will not associate with a Host that doesn't have a matching Hostname. If both Host and Hostname are set, an error is logged, Host is ignored, and Hostname is used. DEPRECATED: Host is either an exact match or a regex, depending on HostRegex. Use HostName instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#host DataK8SGetambassadorIoMappingV3Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#host_redirect DataK8SGetambassadorIoMappingV3Alpha1Manifest#host_redirect}
  */
  readonly hostRedirect?: boolean | cdktf.IResolvable;
  /**
  * DEPRECATED: Host is either an exact match or a regex, depending on HostRegex. Use HostName instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#host_regex DataK8SGetambassadorIoMappingV3Alpha1Manifest#host_regex}
  */
  readonly hostRegex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#host_rewrite DataK8SGetambassadorIoMappingV3Alpha1Manifest#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Hostname is a DNS glob specifying the hosts to which this Mapping applies. Hostname specifies both a match for the ':authority' header of a request, as well as a match criterion for Host CRDs: a Mapping that specifies Hostname will not associate with a Host that doesn't have a matching Hostname. If both Host and Hostname are set, an error is logged, Host is ignored, and Hostname is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#hostname DataK8SGetambassadorIoMappingV3Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#idle_timeout_ms DataK8SGetambassadorIoMappingV3Alpha1Manifest#idle_timeout_ms}
  */
  readonly idleTimeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#keepalive DataK8SGetambassadorIoMappingV3Alpha1Manifest#keepalive}
  */
  readonly keepalive?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepalive;
  /**
  * A DomainMap is the overall Mapping.spec.Labels type. It maps domains (kind of like namespaces for Mapping labels) to arrays of label groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#labels DataK8SGetambassadorIoMappingV3Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#load_balancer DataK8SGetambassadorIoMappingV3Alpha1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#method DataK8SGetambassadorIoMappingV3Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#method_regex DataK8SGetambassadorIoMappingV3Alpha1Manifest#method_regex}
  */
  readonly methodRegex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#modules DataK8SGetambassadorIoMappingV3Alpha1Manifest#modules}
  */
  readonly modules?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#outlier_detection DataK8SGetambassadorIoMappingV3Alpha1Manifest#outlier_detection}
  */
  readonly outlierDetection?: string;
  /**
  * Path replacement to use when generating an HTTP redirect. Used with 'host_redirect'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#path_redirect DataK8SGetambassadorIoMappingV3Alpha1Manifest#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#precedence DataK8SGetambassadorIoMappingV3Alpha1Manifest#precedence}
  */
  readonly precedence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#prefix DataK8SGetambassadorIoMappingV3Alpha1Manifest#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#prefix_exact DataK8SGetambassadorIoMappingV3Alpha1Manifest#prefix_exact}
  */
  readonly prefixExact?: boolean | cdktf.IResolvable;
  /**
  * Prefix rewrite to use when generating an HTTP redirect. Used with 'host_redirect'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#prefix_redirect DataK8SGetambassadorIoMappingV3Alpha1Manifest#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#prefix_regex DataK8SGetambassadorIoMappingV3Alpha1Manifest#prefix_regex}
  */
  readonly prefixRegex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#priority DataK8SGetambassadorIoMappingV3Alpha1Manifest#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#query_parameters DataK8SGetambassadorIoMappingV3Alpha1Manifest#query_parameters}
  */
  readonly queryParameters?: { [key: string]: string };
  /**
  * The response code to use when generating an HTTP redirect. Defaults to 301. Used with 'host_redirect'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#redirect_response_code DataK8SGetambassadorIoMappingV3Alpha1Manifest#redirect_response_code}
  */
  readonly redirectResponseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#regex_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#regex_headers}
  */
  readonly regexHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#regex_query_parameters DataK8SGetambassadorIoMappingV3Alpha1Manifest#regex_query_parameters}
  */
  readonly regexQueryParameters?: { [key: string]: string };
  /**
  * Prefix regex rewrite to use when generating an HTTP redirect. Used with 'host_redirect'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#regex_redirect DataK8SGetambassadorIoMappingV3Alpha1Manifest#regex_redirect}
  */
  readonly regexRedirect?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#regex_rewrite DataK8SGetambassadorIoMappingV3Alpha1Manifest#regex_rewrite}
  */
  readonly regexRewrite?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewrite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#remove_request_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#remove_request_headers}
  */
  readonly removeRequestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#remove_response_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#remove_response_headers}
  */
  readonly removeResponseHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#resolver DataK8SGetambassadorIoMappingV3Alpha1Manifest#resolver}
  */
  readonly resolver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#respect_dns_ttl DataK8SGetambassadorIoMappingV3Alpha1Manifest#respect_dns_ttl}
  */
  readonly respectDnsTtl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#retry_policy DataK8SGetambassadorIoMappingV3Alpha1Manifest#retry_policy}
  */
  readonly retryPolicy?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#rewrite DataK8SGetambassadorIoMappingV3Alpha1Manifest#rewrite}
  */
  readonly rewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#service DataK8SGetambassadorIoMappingV3Alpha1Manifest#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#shadow DataK8SGetambassadorIoMappingV3Alpha1Manifest#shadow}
  */
  readonly shadow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#stats_name DataK8SGetambassadorIoMappingV3Alpha1Manifest#stats_name}
  */
  readonly statsName?: string;
  /**
  * The timeout for requests that use this Mapping. Overrides 'cluster_request_timeout_ms' set on the Ambassador Module, if it exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#timeout_ms DataK8SGetambassadorIoMappingV3Alpha1Manifest#timeout_ms}
  */
  readonly timeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#tls DataK8SGetambassadorIoMappingV3Alpha1Manifest#tls}
  */
  readonly tls?: string;
  /**
  * use_websocket is deprecated, and is equivlaent to setting 'allow_upgrade: ['websocket']'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#use_websocket DataK8SGetambassadorIoMappingV3Alpha1Manifest#use_websocket}
  */
  readonly useWebsocket?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#v2_bool_headers DataK8SGetambassadorIoMappingV3Alpha1Manifest#v2_bool_headers}
  */
  readonly v2BoolHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#v2_bool_query_parameters DataK8SGetambassadorIoMappingV3Alpha1Manifest#v2_bool_query_parameters}
  */
  readonly v2BoolQueryParameters?: string[];
  /**
  * V2ExplicitTLS controls some vanity/stylistic elements when converting from v3alpha1 to v2. The values in an V2ExplicitTLS should not in any way affect the runtime operation of Emissary; except that it may affect internal names in the Envoy config, which may in turn affect stats names. But it should not affect any end-user observable behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#v2_explicit_tls DataK8SGetambassadorIoMappingV3Alpha1Manifest#v2_explicit_tls}
  */
  readonly v2ExplicitTls?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#weight DataK8SGetambassadorIoMappingV3Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_linkerd_headers: cdktf.booleanToTerraform(struct!.addLinkerdHeaders),
    add_request_headers: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeadersToTerraform(struct!.addRequestHeaders),
    add_response_headers: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeadersToTerraform(struct!.addResponseHeaders),
    allow_upgrade: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowUpgrade),
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    auth_context_extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authContextExtensions),
    auto_host_rewrite: cdktf.booleanToTerraform(struct!.autoHostRewrite),
    bypass_auth: cdktf.booleanToTerraform(struct!.bypassAuth),
    bypass_error_response_overrides: cdktf.booleanToTerraform(struct!.bypassErrorResponseOverrides),
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    circuit_breakers: cdktf.listMapper(dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersToTerraform, false)(struct!.circuitBreakers),
    cluster_idle_timeout_ms: cdktf.numberToTerraform(struct!.clusterIdleTimeoutMs),
    cluster_max_connection_lifetime_ms: cdktf.numberToTerraform(struct!.clusterMaxConnectionLifetimeMs),
    cluster_tag: cdktf.stringToTerraform(struct!.clusterTag),
    connect_timeout_ms: cdktf.numberToTerraform(struct!.connectTimeoutMs),
    cors: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCorsToTerraform(struct!.cors),
    dns_type: cdktf.stringToTerraform(struct!.dnsType),
    docs: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocsToTerraform(struct!.docs),
    enable_ipv4: cdktf.booleanToTerraform(struct!.enableIpv4),
    enable_ipv6: cdktf.booleanToTerraform(struct!.enableIpv6),
    envoy_override: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envoyOverride),
    error_response_overrides: cdktf.listMapper(dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesToTerraform, false)(struct!.errorResponseOverrides),
    grpc: cdktf.booleanToTerraform(struct!.grpc),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    health_checks: cdktf.listMapper(dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksToTerraform, false)(struct!.healthChecks),
    host: cdktf.stringToTerraform(struct!.host),
    host_redirect: cdktf.booleanToTerraform(struct!.hostRedirect),
    host_regex: cdktf.booleanToTerraform(struct!.hostRegex),
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    idle_timeout_ms: cdktf.numberToTerraform(struct!.idleTimeoutMs),
    keepalive: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepaliveToTerraform(struct!.keepalive),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    load_balancer: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerToTerraform(struct!.loadBalancer),
    method: cdktf.stringToTerraform(struct!.method),
    method_regex: cdktf.booleanToTerraform(struct!.methodRegex),
    modules: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.modules),
    outlier_detection: cdktf.stringToTerraform(struct!.outlierDetection),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    precedence: cdktf.numberToTerraform(struct!.precedence),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_exact: cdktf.booleanToTerraform(struct!.prefixExact),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    prefix_regex: cdktf.booleanToTerraform(struct!.prefixRegex),
    priority: cdktf.stringToTerraform(struct!.priority),
    query_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryParameters),
    redirect_response_code: cdktf.numberToTerraform(struct!.redirectResponseCode),
    regex_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.regexHeaders),
    regex_query_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.regexQueryParameters),
    regex_redirect: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirectToTerraform(struct!.regexRedirect),
    regex_rewrite: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewriteToTerraform(struct!.regexRewrite),
    remove_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeRequestHeaders),
    remove_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeResponseHeaders),
    resolver: cdktf.stringToTerraform(struct!.resolver),
    respect_dns_ttl: cdktf.booleanToTerraform(struct!.respectDnsTtl),
    retry_policy: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicyToTerraform(struct!.retryPolicy),
    rewrite: cdktf.stringToTerraform(struct!.rewrite),
    service: cdktf.stringToTerraform(struct!.service),
    shadow: cdktf.booleanToTerraform(struct!.shadow),
    stats_name: cdktf.stringToTerraform(struct!.statsName),
    timeout_ms: cdktf.numberToTerraform(struct!.timeoutMs),
    tls: cdktf.stringToTerraform(struct!.tls),
    use_websocket: cdktf.booleanToTerraform(struct!.useWebsocket),
    v2_bool_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.v2BoolHeaders),
    v2_bool_query_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.v2BoolQueryParameters),
    v2_explicit_tls: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTlsToTerraform(struct!.v2ExplicitTls),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_linkerd_headers: {
      value: cdktf.booleanToHclTerraform(struct!.addLinkerdHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_request_headers: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeadersToHclTerraform(struct!.addRequestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeaders",
    },
    add_response_headers: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeadersToHclTerraform(struct!.addResponseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeaders",
    },
    allow_upgrade: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowUpgrade),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_context_extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authContextExtensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    auto_host_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.autoHostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_auth: {
      value: cdktf.booleanToHclTerraform(struct!.bypassAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_error_response_overrides: {
      value: cdktf.booleanToHclTerraform(struct!.bypassErrorResponseOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    circuit_breakers: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersToHclTerraform, false)(struct!.circuitBreakers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersList",
    },
    cluster_idle_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.clusterIdleTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_max_connection_lifetime_ms: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxConnectionLifetimeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_tag: {
      value: cdktf.stringToHclTerraform(struct!.clusterTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cors: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCors",
    },
    dns_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docs: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocsToHclTerraform(struct!.docs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocs",
    },
    enable_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    envoy_override: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envoyOverride),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    error_response_overrides: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesToHclTerraform, false)(struct!.errorResponseOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesList",
    },
    grpc: {
      value: cdktf.booleanToHclTerraform(struct!.grpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    health_checks: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksToHclTerraform, false)(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_regex: {
      value: cdktf.booleanToHclTerraform(struct!.hostRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepaliveToHclTerraform(struct!.keepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepalive",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    load_balancer: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancer",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_regex: {
      value: cdktf.booleanToHclTerraform(struct!.methodRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modules: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.modules),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    outlier_detection: {
      value: cdktf.stringToHclTerraform(struct!.outlierDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precedence: {
      value: cdktf.numberToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_exact: {
      value: cdktf.booleanToHclTerraform(struct!.prefixExact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_redirect: {
      value: cdktf.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_regex: {
      value: cdktf.booleanToHclTerraform(struct!.prefixRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    redirect_response_code: {
      value: cdktf.numberToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.regexHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regex_query_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.regexQueryParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regex_redirect: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirectToHclTerraform(struct!.regexRedirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirect",
    },
    regex_rewrite: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewriteToHclTerraform(struct!.regexRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewrite",
    },
    remove_request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remove_response_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeResponseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resolver: {
      value: cdktf.stringToHclTerraform(struct!.resolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    respect_dns_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.respectDnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_policy: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicy",
    },
    rewrite: {
      value: cdktf.stringToHclTerraform(struct!.rewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shadow: {
      value: cdktf.booleanToHclTerraform(struct!.shadow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stats_name: {
      value: cdktf.stringToHclTerraform(struct!.statsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_websocket: {
      value: cdktf.booleanToHclTerraform(struct!.useWebsocket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v2_bool_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.v2BoolHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    v2_bool_query_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.v2BoolQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    v2_explicit_tls: {
      value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTlsToHclTerraform(struct!.v2ExplicitTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTls",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoMappingV3Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addLinkerdHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLinkerdHeaders = this._addLinkerdHeaders;
    }
    if (this._addRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRequestHeaders = this._addRequestHeaders?.internalValue;
    }
    if (this._addResponseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addResponseHeaders = this._addResponseHeaders?.internalValue;
    }
    if (this._allowUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUpgrade = this._allowUpgrade;
    }
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._authContextExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContextExtensions = this._authContextExtensions;
    }
    if (this._autoHostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHostRewrite = this._autoHostRewrite;
    }
    if (this._bypassAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassAuth = this._bypassAuth;
    }
    if (this._bypassErrorResponseOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassErrorResponseOverrides = this._bypassErrorResponseOverrides;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._circuitBreakers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreakers = this._circuitBreakers?.internalValue;
    }
    if (this._clusterIdleTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdleTimeoutMs = this._clusterIdleTimeoutMs;
    }
    if (this._clusterMaxConnectionLifetimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxConnectionLifetimeMs = this._clusterMaxConnectionLifetimeMs;
    }
    if (this._clusterTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTag = this._clusterTag;
    }
    if (this._connectTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutMs = this._connectTimeoutMs;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._dnsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsType = this._dnsType;
    }
    if (this._docs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docs = this._docs?.internalValue;
    }
    if (this._enableIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv4 = this._enableIpv4;
    }
    if (this._enableIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv6 = this._enableIpv6;
    }
    if (this._envoyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyOverride = this._envoyOverride;
    }
    if (this._errorResponseOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseOverrides = this._errorResponseOverrides?.internalValue;
    }
    if (this._grpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._healthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._hostRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRegex = this._hostRegex;
    }
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._idleTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutMs = this._idleTimeoutMs;
    }
    if (this._keepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._methodRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodRegex = this._methodRegex;
    }
    if (this._modules !== undefined) {
      hasAnyValues = true;
      internalValueResult.modules = this._modules;
    }
    if (this._outlierDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixExact = this._prefixExact;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._prefixRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRegex = this._prefixRegex;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._queryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._regexHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexHeaders = this._regexHeaders;
    }
    if (this._regexQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexQueryParameters = this._regexQueryParameters;
    }
    if (this._regexRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexRedirect = this._regexRedirect?.internalValue;
    }
    if (this._regexRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexRewrite = this._regexRewrite?.internalValue;
    }
    if (this._removeRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeRequestHeaders = this._removeRequestHeaders;
    }
    if (this._removeResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeResponseHeaders = this._removeResponseHeaders;
    }
    if (this._resolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolver = this._resolver;
    }
    if (this._respectDnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectDnsTtl = this._respectDnsTtl;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._rewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._shadow !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadow = this._shadow;
    }
    if (this._statsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsName = this._statsName;
    }
    if (this._timeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMs = this._timeoutMs;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._useWebsocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWebsocket = this._useWebsocket;
    }
    if (this._v2BoolHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2BoolHeaders = this._v2BoolHeaders;
    }
    if (this._v2BoolQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2BoolQueryParameters = this._v2BoolQueryParameters;
    }
    if (this._v2ExplicitTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2ExplicitTls = this._v2ExplicitTls?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addLinkerdHeaders = undefined;
      this._addRequestHeaders.internalValue = undefined;
      this._addResponseHeaders.internalValue = undefined;
      this._allowUpgrade = undefined;
      this._ambassadorId = undefined;
      this._authContextExtensions = undefined;
      this._autoHostRewrite = undefined;
      this._bypassAuth = undefined;
      this._bypassErrorResponseOverrides = undefined;
      this._caseSensitive = undefined;
      this._circuitBreakers.internalValue = undefined;
      this._clusterIdleTimeoutMs = undefined;
      this._clusterMaxConnectionLifetimeMs = undefined;
      this._clusterTag = undefined;
      this._connectTimeoutMs = undefined;
      this._cors.internalValue = undefined;
      this._dnsType = undefined;
      this._docs.internalValue = undefined;
      this._enableIpv4 = undefined;
      this._enableIpv6 = undefined;
      this._envoyOverride = undefined;
      this._errorResponseOverrides.internalValue = undefined;
      this._grpc = undefined;
      this._headers = undefined;
      this._healthChecks.internalValue = undefined;
      this._host = undefined;
      this._hostRedirect = undefined;
      this._hostRegex = undefined;
      this._hostRewrite = undefined;
      this._hostname = undefined;
      this._idleTimeoutMs = undefined;
      this._keepalive.internalValue = undefined;
      this._labels = undefined;
      this._loadBalancer.internalValue = undefined;
      this._method = undefined;
      this._methodRegex = undefined;
      this._modules = undefined;
      this._outlierDetection = undefined;
      this._pathRedirect = undefined;
      this._precedence = undefined;
      this._prefix = undefined;
      this._prefixExact = undefined;
      this._prefixRedirect = undefined;
      this._prefixRegex = undefined;
      this._priority = undefined;
      this._queryParameters = undefined;
      this._redirectResponseCode = undefined;
      this._regexHeaders = undefined;
      this._regexQueryParameters = undefined;
      this._regexRedirect.internalValue = undefined;
      this._regexRewrite.internalValue = undefined;
      this._removeRequestHeaders = undefined;
      this._removeResponseHeaders = undefined;
      this._resolver = undefined;
      this._respectDnsTtl = undefined;
      this._retryPolicy.internalValue = undefined;
      this._rewrite = undefined;
      this._service = undefined;
      this._shadow = undefined;
      this._statsName = undefined;
      this._timeoutMs = undefined;
      this._tls = undefined;
      this._useWebsocket = undefined;
      this._v2BoolHeaders = undefined;
      this._v2BoolQueryParameters = undefined;
      this._v2ExplicitTls.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addLinkerdHeaders = value.addLinkerdHeaders;
      this._addRequestHeaders.internalValue = value.addRequestHeaders;
      this._addResponseHeaders.internalValue = value.addResponseHeaders;
      this._allowUpgrade = value.allowUpgrade;
      this._ambassadorId = value.ambassadorId;
      this._authContextExtensions = value.authContextExtensions;
      this._autoHostRewrite = value.autoHostRewrite;
      this._bypassAuth = value.bypassAuth;
      this._bypassErrorResponseOverrides = value.bypassErrorResponseOverrides;
      this._caseSensitive = value.caseSensitive;
      this._circuitBreakers.internalValue = value.circuitBreakers;
      this._clusterIdleTimeoutMs = value.clusterIdleTimeoutMs;
      this._clusterMaxConnectionLifetimeMs = value.clusterMaxConnectionLifetimeMs;
      this._clusterTag = value.clusterTag;
      this._connectTimeoutMs = value.connectTimeoutMs;
      this._cors.internalValue = value.cors;
      this._dnsType = value.dnsType;
      this._docs.internalValue = value.docs;
      this._enableIpv4 = value.enableIpv4;
      this._enableIpv6 = value.enableIpv6;
      this._envoyOverride = value.envoyOverride;
      this._errorResponseOverrides.internalValue = value.errorResponseOverrides;
      this._grpc = value.grpc;
      this._headers = value.headers;
      this._healthChecks.internalValue = value.healthChecks;
      this._host = value.host;
      this._hostRedirect = value.hostRedirect;
      this._hostRegex = value.hostRegex;
      this._hostRewrite = value.hostRewrite;
      this._hostname = value.hostname;
      this._idleTimeoutMs = value.idleTimeoutMs;
      this._keepalive.internalValue = value.keepalive;
      this._labels = value.labels;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._method = value.method;
      this._methodRegex = value.methodRegex;
      this._modules = value.modules;
      this._outlierDetection = value.outlierDetection;
      this._pathRedirect = value.pathRedirect;
      this._precedence = value.precedence;
      this._prefix = value.prefix;
      this._prefixExact = value.prefixExact;
      this._prefixRedirect = value.prefixRedirect;
      this._prefixRegex = value.prefixRegex;
      this._priority = value.priority;
      this._queryParameters = value.queryParameters;
      this._redirectResponseCode = value.redirectResponseCode;
      this._regexHeaders = value.regexHeaders;
      this._regexQueryParameters = value.regexQueryParameters;
      this._regexRedirect.internalValue = value.regexRedirect;
      this._regexRewrite.internalValue = value.regexRewrite;
      this._removeRequestHeaders = value.removeRequestHeaders;
      this._removeResponseHeaders = value.removeResponseHeaders;
      this._resolver = value.resolver;
      this._respectDnsTtl = value.respectDnsTtl;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._rewrite = value.rewrite;
      this._service = value.service;
      this._shadow = value.shadow;
      this._statsName = value.statsName;
      this._timeoutMs = value.timeoutMs;
      this._tls = value.tls;
      this._useWebsocket = value.useWebsocket;
      this._v2BoolHeaders = value.v2BoolHeaders;
      this._v2BoolQueryParameters = value.v2BoolQueryParameters;
      this._v2ExplicitTls.internalValue = value.v2ExplicitTls;
      this._weight = value.weight;
    }
  }

  // add_linkerd_headers - computed: false, optional: true, required: false
  private _addLinkerdHeaders?: boolean | cdktf.IResolvable; 
  public get addLinkerdHeaders() {
    return this.getBooleanAttribute('add_linkerd_headers');
  }
  public set addLinkerdHeaders(value: boolean | cdktf.IResolvable) {
    this._addLinkerdHeaders = value;
  }
  public resetAddLinkerdHeaders() {
    this._addLinkerdHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLinkerdHeadersInput() {
    return this._addLinkerdHeaders;
  }

  // add_request_headers - computed: false, optional: true, required: false
  private _addRequestHeaders = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeadersOutputReference(this, "add_request_headers");
  public get addRequestHeaders() {
    return this._addRequestHeaders;
  }
  public putAddRequestHeaders(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddRequestHeaders) {
    this._addRequestHeaders.internalValue = value;
  }
  public resetAddRequestHeaders() {
    this._addRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRequestHeadersInput() {
    return this._addRequestHeaders.internalValue;
  }

  // add_response_headers - computed: false, optional: true, required: false
  private _addResponseHeaders = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeadersOutputReference(this, "add_response_headers");
  public get addResponseHeaders() {
    return this._addResponseHeaders;
  }
  public putAddResponseHeaders(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecAddResponseHeaders) {
    this._addResponseHeaders.internalValue = value;
  }
  public resetAddResponseHeaders() {
    this._addResponseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addResponseHeadersInput() {
    return this._addResponseHeaders.internalValue;
  }

  // allow_upgrade - computed: false, optional: true, required: false
  private _allowUpgrade?: string[]; 
  public get allowUpgrade() {
    return this.getListAttribute('allow_upgrade');
  }
  public set allowUpgrade(value: string[]) {
    this._allowUpgrade = value;
  }
  public resetAllowUpgrade() {
    this._allowUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUpgradeInput() {
    return this._allowUpgrade;
  }

  // ambassador_id - computed: false, optional: true, required: false
  private _ambassadorId?: string[]; 
  public get ambassadorId() {
    return this.getListAttribute('ambassador_id');
  }
  public set ambassadorId(value: string[]) {
    this._ambassadorId = value;
  }
  public resetAmbassadorId() {
    this._ambassadorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambassadorIdInput() {
    return this._ambassadorId;
  }

  // auth_context_extensions - computed: false, optional: true, required: false
  private _authContextExtensions?: { [key: string]: string }; 
  public get authContextExtensions() {
    return this.getStringMapAttribute('auth_context_extensions');
  }
  public set authContextExtensions(value: { [key: string]: string }) {
    this._authContextExtensions = value;
  }
  public resetAuthContextExtensions() {
    this._authContextExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextExtensionsInput() {
    return this._authContextExtensions;
  }

  // auto_host_rewrite - computed: false, optional: true, required: false
  private _autoHostRewrite?: boolean | cdktf.IResolvable; 
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }
  public set autoHostRewrite(value: boolean | cdktf.IResolvable) {
    this._autoHostRewrite = value;
  }
  public resetAutoHostRewrite() {
    this._autoHostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHostRewriteInput() {
    return this._autoHostRewrite;
  }

  // bypass_auth - computed: false, optional: true, required: false
  private _bypassAuth?: boolean | cdktf.IResolvable; 
  public get bypassAuth() {
    return this.getBooleanAttribute('bypass_auth');
  }
  public set bypassAuth(value: boolean | cdktf.IResolvable) {
    this._bypassAuth = value;
  }
  public resetBypassAuth() {
    this._bypassAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAuthInput() {
    return this._bypassAuth;
  }

  // bypass_error_response_overrides - computed: false, optional: true, required: false
  private _bypassErrorResponseOverrides?: boolean | cdktf.IResolvable; 
  public get bypassErrorResponseOverrides() {
    return this.getBooleanAttribute('bypass_error_response_overrides');
  }
  public set bypassErrorResponseOverrides(value: boolean | cdktf.IResolvable) {
    this._bypassErrorResponseOverrides = value;
  }
  public resetBypassErrorResponseOverrides() {
    this._bypassErrorResponseOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassErrorResponseOverridesInput() {
    return this._bypassErrorResponseOverrides;
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // circuit_breakers - computed: false, optional: true, required: false
  private _circuitBreakers = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakersList(this, "circuit_breakers", false);
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCircuitBreakers[] | cdktf.IResolvable) {
    this._circuitBreakers.internalValue = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers.internalValue;
  }

  // cluster_idle_timeout_ms - computed: false, optional: true, required: false
  private _clusterIdleTimeoutMs?: number; 
  public get clusterIdleTimeoutMs() {
    return this.getNumberAttribute('cluster_idle_timeout_ms');
  }
  public set clusterIdleTimeoutMs(value: number) {
    this._clusterIdleTimeoutMs = value;
  }
  public resetClusterIdleTimeoutMs() {
    this._clusterIdleTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdleTimeoutMsInput() {
    return this._clusterIdleTimeoutMs;
  }

  // cluster_max_connection_lifetime_ms - computed: false, optional: true, required: false
  private _clusterMaxConnectionLifetimeMs?: number; 
  public get clusterMaxConnectionLifetimeMs() {
    return this.getNumberAttribute('cluster_max_connection_lifetime_ms');
  }
  public set clusterMaxConnectionLifetimeMs(value: number) {
    this._clusterMaxConnectionLifetimeMs = value;
  }
  public resetClusterMaxConnectionLifetimeMs() {
    this._clusterMaxConnectionLifetimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxConnectionLifetimeMsInput() {
    return this._clusterMaxConnectionLifetimeMs;
  }

  // cluster_tag - computed: false, optional: true, required: false
  private _clusterTag?: string; 
  public get clusterTag() {
    return this.getStringAttribute('cluster_tag');
  }
  public set clusterTag(value: string) {
    this._clusterTag = value;
  }
  public resetClusterTag() {
    this._clusterTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTagInput() {
    return this._clusterTag;
  }

  // connect_timeout_ms - computed: false, optional: true, required: false
  private _connectTimeoutMs?: number; 
  public get connectTimeoutMs() {
    return this.getNumberAttribute('connect_timeout_ms');
  }
  public set connectTimeoutMs(value: number) {
    this._connectTimeoutMs = value;
  }
  public resetConnectTimeoutMs() {
    this._connectTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutMsInput() {
    return this._connectTimeoutMs;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // dns_type - computed: false, optional: true, required: false
  private _dnsType?: string; 
  public get dnsType() {
    return this.getStringAttribute('dns_type');
  }
  public set dnsType(value: string) {
    this._dnsType = value;
  }
  public resetDnsType() {
    this._dnsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTypeInput() {
    return this._dnsType;
  }

  // docs - computed: false, optional: true, required: false
  private _docs = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocsOutputReference(this, "docs");
  public get docs() {
    return this._docs;
  }
  public putDocs(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecDocs) {
    this._docs.internalValue = value;
  }
  public resetDocs() {
    this._docs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docsInput() {
    return this._docs.internalValue;
  }

  // enable_ipv4 - computed: false, optional: true, required: false
  private _enableIpv4?: boolean | cdktf.IResolvable; 
  public get enableIpv4() {
    return this.getBooleanAttribute('enable_ipv4');
  }
  public set enableIpv4(value: boolean | cdktf.IResolvable) {
    this._enableIpv4 = value;
  }
  public resetEnableIpv4() {
    this._enableIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4Input() {
    return this._enableIpv4;
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // envoy_override - computed: false, optional: true, required: false
  private _envoyOverride?: { [key: string]: string }; 
  public get envoyOverride() {
    return this.getStringMapAttribute('envoy_override');
  }
  public set envoyOverride(value: { [key: string]: string }) {
    this._envoyOverride = value;
  }
  public resetEnvoyOverride() {
    this._envoyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyOverrideInput() {
    return this._envoyOverride;
  }

  // error_response_overrides - computed: false, optional: true, required: false
  private _errorResponseOverrides = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverridesList(this, "error_response_overrides", false);
  public get errorResponseOverrides() {
    return this._errorResponseOverrides;
  }
  public putErrorResponseOverrides(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecErrorResponseOverrides[] | cdktf.IResolvable) {
    this._errorResponseOverrides.internalValue = value;
  }
  public resetErrorResponseOverrides() {
    this._errorResponseOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseOverridesInput() {
    return this._errorResponseOverrides.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc?: boolean | cdktf.IResolvable; 
  public get grpc() {
    return this.getBooleanAttribute('grpc');
  }
  public set grpc(value: boolean | cdktf.IResolvable) {
    this._grpc = value;
  }
  public resetGrpc() {
    this._grpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecHealthChecks[] | cdktf.IResolvable) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: boolean | cdktf.IResolvable; 
  public get hostRedirect() {
    return this.getBooleanAttribute('host_redirect');
  }
  public set hostRedirect(value: boolean | cdktf.IResolvable) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // host_regex - computed: false, optional: true, required: false
  private _hostRegex?: boolean | cdktf.IResolvable; 
  public get hostRegex() {
    return this.getBooleanAttribute('host_regex');
  }
  public set hostRegex(value: boolean | cdktf.IResolvable) {
    this._hostRegex = value;
  }
  public resetHostRegex() {
    this._hostRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRegexInput() {
    return this._hostRegex;
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // idle_timeout_ms - computed: false, optional: true, required: false
  private _idleTimeoutMs?: number; 
  public get idleTimeoutMs() {
    return this.getNumberAttribute('idle_timeout_ms');
  }
  public set idleTimeoutMs(value: number) {
    this._idleTimeoutMs = value;
  }
  public resetIdleTimeoutMs() {
    this._idleTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMsInput() {
    return this._idleTimeoutMs;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepaliveOutputReference(this, "keepalive");
  public get keepalive() {
    return this._keepalive;
  }
  public putKeepalive(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecKeepalive) {
    this._keepalive.internalValue = value;
  }
  public resetKeepalive() {
    this._keepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive.internalValue;
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

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // method_regex - computed: false, optional: true, required: false
  private _methodRegex?: boolean | cdktf.IResolvable; 
  public get methodRegex() {
    return this.getBooleanAttribute('method_regex');
  }
  public set methodRegex(value: boolean | cdktf.IResolvable) {
    this._methodRegex = value;
  }
  public resetMethodRegex() {
    this._methodRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodRegexInput() {
    return this._methodRegex;
  }

  // modules - computed: false, optional: true, required: false
  private _modules?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get modules() {
    return this.interpolationForAttribute('modules');
  }
  public set modules(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._modules = value;
  }
  public resetModules() {
    this._modules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection?: string; 
  public get outlierDetection() {
    return this.getStringAttribute('outlier_detection');
  }
  public set outlierDetection(value: string) {
    this._outlierDetection = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_exact - computed: false, optional: true, required: false
  private _prefixExact?: boolean | cdktf.IResolvable; 
  public get prefixExact() {
    return this.getBooleanAttribute('prefix_exact');
  }
  public set prefixExact(value: boolean | cdktf.IResolvable) {
    this._prefixExact = value;
  }
  public resetPrefixExact() {
    this._prefixExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixExactInput() {
    return this._prefixExact;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // prefix_regex - computed: false, optional: true, required: false
  private _prefixRegex?: boolean | cdktf.IResolvable; 
  public get prefixRegex() {
    return this.getBooleanAttribute('prefix_regex');
  }
  public set prefixRegex(value: boolean | cdktf.IResolvable) {
    this._prefixRegex = value;
  }
  public resetPrefixRegex() {
    this._prefixRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRegexInput() {
    return this._prefixRegex;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters?: { [key: string]: string }; 
  public get queryParameters() {
    return this.getStringMapAttribute('query_parameters');
  }
  public set queryParameters(value: { [key: string]: string }) {
    this._queryParameters = value;
  }
  public resetQueryParameters() {
    this._queryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: number; 
  public get redirectResponseCode() {
    return this.getNumberAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: number) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // regex_headers - computed: false, optional: true, required: false
  private _regexHeaders?: { [key: string]: string }; 
  public get regexHeaders() {
    return this.getStringMapAttribute('regex_headers');
  }
  public set regexHeaders(value: { [key: string]: string }) {
    this._regexHeaders = value;
  }
  public resetRegexHeaders() {
    this._regexHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexHeadersInput() {
    return this._regexHeaders;
  }

  // regex_query_parameters - computed: false, optional: true, required: false
  private _regexQueryParameters?: { [key: string]: string }; 
  public get regexQueryParameters() {
    return this.getStringMapAttribute('regex_query_parameters');
  }
  public set regexQueryParameters(value: { [key: string]: string }) {
    this._regexQueryParameters = value;
  }
  public resetRegexQueryParameters() {
    this._regexQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexQueryParametersInput() {
    return this._regexQueryParameters;
  }

  // regex_redirect - computed: false, optional: true, required: false
  private _regexRedirect = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirectOutputReference(this, "regex_redirect");
  public get regexRedirect() {
    return this._regexRedirect;
  }
  public putRegexRedirect(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRedirect) {
    this._regexRedirect.internalValue = value;
  }
  public resetRegexRedirect() {
    this._regexRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexRedirectInput() {
    return this._regexRedirect.internalValue;
  }

  // regex_rewrite - computed: false, optional: true, required: false
  private _regexRewrite = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewriteOutputReference(this, "regex_rewrite");
  public get regexRewrite() {
    return this._regexRewrite;
  }
  public putRegexRewrite(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRegexRewrite) {
    this._regexRewrite.internalValue = value;
  }
  public resetRegexRewrite() {
    this._regexRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexRewriteInput() {
    return this._regexRewrite.internalValue;
  }

  // remove_request_headers - computed: false, optional: true, required: false
  private _removeRequestHeaders?: string[]; 
  public get removeRequestHeaders() {
    return this.getListAttribute('remove_request_headers');
  }
  public set removeRequestHeaders(value: string[]) {
    this._removeRequestHeaders = value;
  }
  public resetRemoveRequestHeaders() {
    this._removeRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeRequestHeadersInput() {
    return this._removeRequestHeaders;
  }

  // remove_response_headers - computed: false, optional: true, required: false
  private _removeResponseHeaders?: string[]; 
  public get removeResponseHeaders() {
    return this.getListAttribute('remove_response_headers');
  }
  public set removeResponseHeaders(value: string[]) {
    this._removeResponseHeaders = value;
  }
  public resetRemoveResponseHeaders() {
    this._removeResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeResponseHeadersInput() {
    return this._removeResponseHeaders;
  }

  // resolver - computed: false, optional: true, required: false
  private _resolver?: string; 
  public get resolver() {
    return this.getStringAttribute('resolver');
  }
  public set resolver(value: string) {
    this._resolver = value;
  }
  public resetResolver() {
    this._resolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverInput() {
    return this._resolver;
  }

  // respect_dns_ttl - computed: false, optional: true, required: false
  private _respectDnsTtl?: boolean | cdktf.IResolvable; 
  public get respectDnsTtl() {
    return this.getBooleanAttribute('respect_dns_ttl');
  }
  public set respectDnsTtl(value: boolean | cdktf.IResolvable) {
    this._respectDnsTtl = value;
  }
  public resetRespectDnsTtl() {
    this._respectDnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectDnsTtlInput() {
    return this._respectDnsTtl;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite?: string; 
  public get rewrite() {
    return this.getStringAttribute('rewrite');
  }
  public set rewrite(value: string) {
    this._rewrite = value;
  }
  public resetRewrite() {
    this._rewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // shadow - computed: false, optional: true, required: false
  private _shadow?: boolean | cdktf.IResolvable; 
  public get shadow() {
    return this.getBooleanAttribute('shadow');
  }
  public set shadow(value: boolean | cdktf.IResolvable) {
    this._shadow = value;
  }
  public resetShadow() {
    this._shadow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowInput() {
    return this._shadow;
  }

  // stats_name - computed: false, optional: true, required: false
  private _statsName?: string; 
  public get statsName() {
    return this.getStringAttribute('stats_name');
  }
  public set statsName(value: string) {
    this._statsName = value;
  }
  public resetStatsName() {
    this._statsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsNameInput() {
    return this._statsName;
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }
  public set timeoutMs(value: number) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // use_websocket - computed: false, optional: true, required: false
  private _useWebsocket?: boolean | cdktf.IResolvable; 
  public get useWebsocket() {
    return this.getBooleanAttribute('use_websocket');
  }
  public set useWebsocket(value: boolean | cdktf.IResolvable) {
    this._useWebsocket = value;
  }
  public resetUseWebsocket() {
    this._useWebsocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWebsocketInput() {
    return this._useWebsocket;
  }

  // v2_bool_headers - computed: false, optional: true, required: false
  private _v2BoolHeaders?: string[]; 
  public get v2BoolHeaders() {
    return this.getListAttribute('v2_bool_headers');
  }
  public set v2BoolHeaders(value: string[]) {
    this._v2BoolHeaders = value;
  }
  public resetV2BoolHeaders() {
    this._v2BoolHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2BoolHeadersInput() {
    return this._v2BoolHeaders;
  }

  // v2_bool_query_parameters - computed: false, optional: true, required: false
  private _v2BoolQueryParameters?: string[]; 
  public get v2BoolQueryParameters() {
    return this.getListAttribute('v2_bool_query_parameters');
  }
  public set v2BoolQueryParameters(value: string[]) {
    this._v2BoolQueryParameters = value;
  }
  public resetV2BoolQueryParameters() {
    this._v2BoolQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2BoolQueryParametersInput() {
    return this._v2BoolQueryParameters;
  }

  // v2_explicit_tls - computed: false, optional: true, required: false
  private _v2ExplicitTls = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTlsOutputReference(this, "v2_explicit_tls");
  public get v2ExplicitTls() {
    return this._v2ExplicitTls;
  }
  public putV2ExplicitTls(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecV2ExplicitTls) {
    this._v2ExplicitTls.internalValue = value;
  }
  public resetV2ExplicitTls() {
    this._v2ExplicitTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ExplicitTlsInput() {
    return this._v2ExplicitTls.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest k8s_getambassador_io_mapping_v3alpha1_manifest}
*/
export class DataK8SGetambassadorIoMappingV3Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_mapping_v3alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoMappingV3Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoMappingV3Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoMappingV3Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoMappingV3Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_mapping_v3alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/getambassador_io_mapping_v3alpha1_manifest k8s_getambassador_io_mapping_v3alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoMappingV3Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoMappingV3Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_mapping_v3alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoMappingV3Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoMappingV3Alpha1ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoMappingV3Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoMappingV3Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoMappingV3Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoMappingV3Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
