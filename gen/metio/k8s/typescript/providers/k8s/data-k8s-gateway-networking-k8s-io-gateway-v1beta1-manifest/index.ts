// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#metadata DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadata;
  /**
  * Spec defines the desired state of Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#spec DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpec;
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#annotations DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#labels DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadataToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddresses {
  /**
  * Type of the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value of the address. The validity of the values will depend on the type and support by the controller. Examples: '1.2.3.4', '128::1', 'my-ip-address'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRef {
  /**
  * Group is the group of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
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
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructure {
  /**
  * Annotations that SHOULD be applied to any resources created in response to this Gateway. For implementations creating other Kubernetes objects, this should be the 'metadata.annotations' field on resources. For other implementations, this refers to any relevant (implementation specific) 'annotations' concepts. An implementation may chose to add additional implementation-specific annotations as they see fit. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#annotations DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels that SHOULD be applied to any resources created in response to this Gateway. For implementations creating other Kubernetes objects, this should be the 'metadata.labels' field on resources. For other implementations, this refers to any relevant (implementation specific) 'labels' concepts. An implementation may chose to add additional implementation-specific labels as they see fit. If an implementation maps these labels to Pods, or any other resource that would need to be recreated when labels change, it SHOULD clearly warn about this behavior in documentation. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#labels DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ParametersRef is a reference to a resource that contains the configuration parameters corresponding to the Gateway. This is optional if the controller does not require any additional configuration. This follows the same semantics as GatewayClass's 'parametersRef', but on a per-Gateway basis The Gateway's GatewayClass may provide its own 'parametersRef'. When both are specified, the merging behavior is implementation specific. It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway. Support: Implementation-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#parameters_ref DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#parameters_ref}
  */
  readonly parametersRef?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRef;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    parameters_ref: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRefToTerraform(struct!.parametersRef),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructure | cdktf.IResolvable): any {
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
    parameters_ref: {
      value: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRefToHclTerraform(struct!.parametersRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructure | cdktf.IResolvable | undefined {
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
    if (this._parametersRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parametersRef = this._parametersRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._parametersRef.internalValue = undefined;
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
      this._parametersRef.internalValue = value.parametersRef;
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

  // parameters_ref - computed: false, optional: true, required: false
  private _parametersRef = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRefOutputReference(this, "parameters_ref");
  public get parametersRef() {
    return this._parametersRef;
  }
  public putParametersRef(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureParametersRef) {
    this._parametersRef.internalValue = value;
  }
  public resetParametersRef() {
    this._parametersRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersRefInput() {
    return this._parametersRef.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKinds {
  /**
  * Group is the group of the Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the kind of the Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#kind}
  */
  readonly kind: string;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKinds | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKinds | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKinds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKinds[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#key DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#operator DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#values DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#match_expressions DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#match_labels DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsList",
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespaces {
  /**
  * From indicates where Routes will be selected for this Gateway. Possible values are: * All: Routes in all namespaces may be used by this Gateway. * Selector: Routes in namespaces selected by the selector may be used by this Gateway. * Same: Only Routes in the same namespace may be used by this Gateway. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#from DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#from}
  */
  readonly from?: string;
  /**
  * Selector must be specified when From is set to 'Selector'. In that case, only Routes in Namespaces matching this Selector will be selected by this Gateway. This field is ignored for other values of 'From'. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#selector DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelector;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    selector: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._selector.internalValue = value.selector;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesSelector) {
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
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutes {
  /**
  * Kinds specifies the groups and kinds of Routes that are allowed to bind to this Gateway Listener. When unspecified or empty, the kinds of Routes selected are determined using the Listener protocol. A RouteGroupKind MUST correspond to kinds of Routes that are compatible with the application protocol specified in the Listener's Protocol field. If an implementation does not support or recognize this resource type, it MUST set the 'ResolvedRefs' condition to False for this Listener with the 'InvalidRouteKinds' reason. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#kinds DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#kinds}
  */
  readonly kinds?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKinds[] | cdktf.IResolvable;
  /**
  * Namespaces indicates namespaces from which Routes may be attached to this Listener. This is restricted to the namespace of this Gateway by default. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#namespaces DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespaces;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kinds: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsToTerraform, false)(struct!.kinds),
    namespaces: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesToTerraform(struct!.namespaces),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kinds: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsToHclTerraform, false)(struct!.kinds),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsList",
    },
    namespaces: {
      value: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesToHclTerraform(struct!.namespaces),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespaces",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds?.internalValue;
    }
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinds.internalValue = undefined;
      this._namespaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinds.internalValue = value.kinds;
      this._namespaces.internalValue = value.namespaces;
    }
  }

  // kinds - computed: false, optional: true, required: false
  private _kinds = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKindsList(this, "kinds", false);
  public get kinds() {
    return this._kinds;
  }
  public putKinds(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesKinds[] | cdktf.IResolvable) {
    this._kinds.internalValue = value;
  }
  public resetKinds() {
    this._kinds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespacesOutputReference(this, "namespaces");
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesNamespaces) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefs {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is kind of the referent. For example 'Secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the referenced object. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefs | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefs | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefs | cdktf.IResolvable | undefined) {
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTls {
  /**
  * CertificateRefs contains a series of references to Kubernetes objects that contains TLS certificates and private keys. These certificates are used to establish a TLS handshake for requests that match the hostname of the associated listener. A single CertificateRef to a Kubernetes Secret has 'Core' support. Implementations MAY choose to support attaching multiple certificates to a Listener, but this behavior is implementation-specific. References to a resource in different namespace are invalid UNLESS there is a ReferenceGrant in the target namespace that allows the certificate to be attached. If a ReferenceGrant does not allow this reference, the 'ResolvedRefs' condition MUST be set to False for this listener with the 'RefNotPermitted' reason. This field is required to have at least one element when the mode is set to 'Terminate' (default) and is optional otherwise. CertificateRefs can reference to standard Kubernetes resources, i.e. Secret, or implementation-specific custom resources. Support: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls Support: Implementation-specific (More than one reference or other resource types)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#certificate_refs DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#certificate_refs}
  */
  readonly certificateRefs?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefs[] | cdktf.IResolvable;
  /**
  * Mode defines the TLS behavior for the TLS session initiated by the client. There are two possible modes: - Terminate: The TLS session between the downstream client and the Gateway is terminated at the Gateway. This mode requires certificates to be specified in some way, such as populating the certificateRefs field. - Passthrough: The TLS session is NOT terminated by the Gateway. This implies that the Gateway can't decipher the TLS stream except for the ClientHello message of the TLS protocol. The certificateRefs field is ignored in this mode. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#mode DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Options are a list of key/value pairs to enable extended TLS configuration for each implementation. For example, configuring the minimum TLS version or supported cipher suites. A set of common keys MAY be defined by the API in the future. To avoid any ambiguity, implementation-specific definitions MUST use domain-prefixed names, such as 'example.com/my-custom-option'. Un-prefixed names are reserved for key names defined by Gateway API. Support: Implementation-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#options DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#options}
  */
  readonly options?: { [key: string]: string };
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsToTerraform, false)(struct!.certificateRefs),
    mode: cdktf.stringToTerraform(struct!.mode),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsToHclTerraform, false)(struct!.certificateRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateRefs = this._certificateRefs?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateRefs.internalValue = undefined;
      this._mode = undefined;
      this._options = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateRefs.internalValue = value.certificateRefs;
      this._mode = value.mode;
      this._options = value.options;
    }
  }

  // certificate_refs - computed: false, optional: true, required: false
  private _certificateRefs = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefsList(this, "certificate_refs", false);
  public get certificateRefs() {
    return this._certificateRefs;
  }
  public putCertificateRefs(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsCertificateRefs[] | cdktf.IResolvable) {
    this._certificateRefs.internalValue = value;
  }
  public resetCertificateRefs() {
    this._certificateRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRefsInput() {
    return this._certificateRefs.internalValue;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListeners {
  /**
  * AllowedRoutes defines the types of routes that MAY be attached to a Listener and the trusted namespaces where those Route resources MAY be present. Although a client request may match multiple route rules, only one rule may ultimately receive the request. Matching precedence MUST be determined in order of the following criteria: * The most specific match as defined by the Route type. * The oldest Route based on creation timestamp. For example, a Route with a creation timestamp of '2020-09-08 01:02:03' is given precedence over a Route with a creation timestamp of '2020-09-08 01:02:04'. * If everything else is equivalent, the Route appearing first in alphabetical order (namespace/name) should be given precedence. For example, foo/bar is given precedence over foo/baz. All valid rules within a Route attached to this Listener should be implemented. Invalid Route rules can be ignored (sometimes that will mean the full Route). If a Route rule transitions from valid to invalid, support for that Route rule should be dropped to ensure consistency. For example, even if a filter specified by a Route rule is invalid, the rest of the rules within that Route should still be supported. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#allowed_routes DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#allowed_routes}
  */
  readonly allowedRoutes?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutes;
  /**
  * Hostname specifies the virtual hostname to match for protocol types that define this concept. When unspecified, all hostnames are matched. This field is ignored for protocols that don't require hostname based matching. Implementations MUST apply Hostname matching appropriately for each of the following protocols: * TLS: The Listener Hostname MUST match the SNI. * HTTP: The Listener Hostname MUST match the Host header of the request. * HTTPS: The Listener Hostname SHOULD match at both the TLS and HTTP protocol layers as described above. If an implementation does not ensure that both the SNI and Host header match the Listener hostname, it MUST clearly document that. For HTTPRoute and TLSRoute resources, there is an interaction with the 'spec.hostnames' array. When both listener and route specify hostnames, there MUST be an intersection between the values for a Route to be accepted. For more information, refer to the Route specific Hostnames documentation. Hostnames that are prefixed with a wildcard label ('*.') are interpreted as a suffix match. That means that a match for '*.example.com' would match both 'test.example.com', and 'foo.test.example.com', but not 'example.com'. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#hostname DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Name is the name of the Listener. This name MUST be unique within a Gateway. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Port is the network port. Multiple listeners may use the same port, subject to the Listener compatibility rules. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#port DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Protocol specifies the network protocol this listener expects to receive. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#protocol DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * TLS is the TLS configuration for the Listener. This field is required if the Protocol field is 'HTTPS' or 'TLS'. It is invalid to set this field if the Protocol field is 'HTTP', 'TCP', or 'UDP'. The association of SNIs to Certificate defined in GatewayTLSConfig is defined based on the Hostname field for this listener. The GatewayClass MUST use the longest matching SNI out of all available certificates for any TLS handshake. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#tls DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTls;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_routes: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesToTerraform(struct!.allowedRoutes),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    tls: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsToTerraform(struct!.tls),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_routes: {
      value: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesToHclTerraform(struct!.allowedRoutes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutes",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoutes = this._allowedRoutes?.internalValue;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoutes.internalValue = undefined;
      this._hostname = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoutes.internalValue = value.allowedRoutes;
      this._hostname = value.hostname;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
      this._tls.internalValue = value.tls;
    }
  }

  // allowed_routes - computed: false, optional: true, required: false
  private _allowedRoutes = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutesOutputReference(this, "allowed_routes");
  public get allowedRoutes() {
    return this._allowedRoutes;
  }
  public putAllowedRoutes(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersAllowedRoutes) {
    this._allowedRoutes.internalValue = value;
  }
  public resetAllowedRoutes() {
    this._allowedRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRoutesInput() {
    return this._allowedRoutes.internalValue;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersTls) {
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

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpec {
  /**
  * Addresses requested for this Gateway. This is optional and behavior can depend on the implementation. If a value is set in the spec and the requested address is invalid or unavailable, the implementation MUST indicate this in the associated entry in GatewayStatus.Addresses. The Addresses field represents a request for the address(es) on the 'outside of the Gateway', that traffic bound for this Gateway will use. This could be the IP address or hostname of an external load balancer or other networking infrastructure, or some other address that traffic will be sent to. If no Addresses are specified, the implementation MAY schedule the Gateway in an implementation-specific manner, assigning an appropriate set of Addresses. The implementation MUST bind all Listeners to every GatewayAddress that it assigns to the Gateway and add a corresponding entry in GatewayStatus.Addresses. Support: Extended 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#addresses DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#addresses}
  */
  readonly addresses?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddresses[] | cdktf.IResolvable;
  /**
  * GatewayClassName used for this Gateway. This is the name of a GatewayClass resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#gateway_class_name DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#gateway_class_name}
  */
  readonly gatewayClassName: string;
  /**
  * Infrastructure defines infrastructure level attributes about this Gateway instance. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#infrastructure DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#infrastructure}
  */
  readonly infrastructure?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructure;
  /**
  * Listeners associated with this Gateway. Listeners define logical endpoints that are bound on this Gateway's addresses. At least one Listener MUST be specified. Each Listener in a set of Listeners (for example, in a single Gateway) MUST be _distinct_, in that a traffic flow MUST be able to be assigned to exactly one listener. (This section uses 'set of Listeners' rather than 'Listeners in a single Gateway' because implementations MAY merge configuration from multiple Gateways onto a single data plane, and these rules _also_ apply in that case). Practically, this means that each listener in a set MUST have a unique combination of Port, Protocol, and, if supported by the protocol, Hostname. Some combinations of port, protocol, and TLS settings are considered Core support and MUST be supported by implementations based on their targeted conformance profile: HTTP Profile 1. HTTPRoute, Port: 80, Protocol: HTTP 2. HTTPRoute, Port: 443, Protocol: HTTPS, TLS Mode: Terminate, TLS keypair provided TLS Profile 1. TLSRoute, Port: 443, Protocol: TLS, TLS Mode: Passthrough 'Distinct' Listeners have the following property: The implementation can match inbound requests to a single distinct Listener. When multiple Listeners share values for fields (for example, two Listeners with the same Port value), the implementation can match requests to only one of the Listeners using other Listener fields. For example, the following Listener scenarios are distinct: 1. Multiple Listeners with the same Port that all use the 'HTTP' Protocol that all have unique Hostname values. 2. Multiple Listeners with the same Port that use either the 'HTTPS' or 'TLS' Protocol that all have unique Hostname values. 3. A mixture of 'TCP' and 'UDP' Protocol Listeners, where no Listener with the same Protocol has the same Port value. Some fields in the Listener struct have possible values that affect whether the Listener is distinct. Hostname is particularly relevant for HTTP or HTTPS protocols. When using the Hostname value to select between same-Port, same-Protocol Listeners, the Hostname value must be different on each Listener for the Listener to be distinct. When the Listeners are distinct based on Hostname, inbound request hostnames MUST match from the most specific to least specific Hostname values to choose the correct Listener and its associated set of Routes. Exact matches must be processed before wildcard matches, and wildcard matches must be processed before fallback (empty Hostname value) matches. For example, ''foo.example.com'' takes precedence over ''*.example.com'', and ''*.example.com'' takes precedence over ```'. Additionally, if there are multiple wildcard entries, more specific wildcard entries must be processed before less specific wildcard entries. For example, ''*.foo.example.com'' takes precedence over ''*.example.com''. The precise definition here is that the higher the number of dots in the hostname to the right of the wildcard character, the higher the precedence. The wildcard character will match any number of characters _and dots_ to the left, however, so ''*.example.com'' will match both ''foo.bar.example.com'' _and_ ''bar.example.com''. If a set of Listeners contains Listeners that are not distinct, then those Listeners are Conflicted, and the implementation MUST set the 'Conflicted' condition in the Listener Status to 'True'. Implementations MAY choose to accept a Gateway with some Conflicted Listeners only if they only accept the partial Listener set that contains no Conflicted Listeners. To put this another way, implementations may accept a partial Listener set only if they throw out *all* the conflicting Listeners. No picking one of the conflicting listeners as the winner. This also means that the Gateway must have at least one non-conflicting Listener in this case, otherwise it violates the requirement that at least one Listener must be present. The implementation MUST set a 'ListenersNotValid' condition on the Gateway Status when the Gateway contains Conflicted Listeners whether or not they accept the Gateway. That Condition SHOULD clearly indicate in the Message which Listeners are conflicted, and which are Accepted. Additionally, the Listener status for those listeners SHOULD indicate which Listeners are conflicted and not Accepted. A Gateway's Listeners are considered 'compatible' if: 1. They are distinct. 2. The implementation can serve them in compliance with the Addresses requirement that all Listeners are available on all assigned addresses. Compatible combinations in Extended support are expected to vary across implementations. A combination that is compatible for one implementation may not be compatible for another. For example, an implementation that cannot serve both TCP and UDP listeners on the same address, or cannot mix HTTPS and generic TLS listens on the same port would not consider those cases compatible, even though they are distinct. Note that requests SHOULD match at most one Listener. For example, if Listeners are defined for 'foo.example.com' and '*.example.com', a request to 'foo.example.com' SHOULD only be routed using routes attached to the 'foo.example.com' Listener (and not the '*.example.com' Listener). This concept is known as 'Listener Isolation'. Implementations that do not support Listener Isolation MUST clearly document this. Implementations MAY merge separate Gateways onto a single set of Addresses if all Listeners across all Gateways are compatible. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#listeners DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest#listeners}
  */
  readonly listeners: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListeners[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesToTerraform, false)(struct!.addresses),
    gateway_class_name: cdktf.stringToTerraform(struct!.gatewayClassName),
    infrastructure: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureToTerraform(struct!.infrastructure),
    listeners: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersToTerraform, false)(struct!.listeners),
  }
}


export function dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesList",
    },
    gateway_class_name: {
      value: cdktf.stringToHclTerraform(struct!.gatewayClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure: {
      value: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureToHclTerraform(struct!.infrastructure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructure",
    },
    listeners: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersToHclTerraform, false)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._gatewayClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayClassName = this._gatewayClassName;
    }
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._gatewayClassName = undefined;
      this._infrastructure.internalValue = undefined;
      this._listeners.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._gatewayClassName = value.gatewayClassName;
      this._infrastructure.internalValue = value.infrastructure;
      this._listeners.internalValue = value.listeners;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // gateway_class_name - computed: false, optional: false, required: true
  private _gatewayClassName?: string; 
  public get gatewayClassName() {
    return this.getStringAttribute('gateway_class_name');
  }
  public set gatewayClassName(value: string) {
    this._gatewayClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayClassNameInput() {
    return this._gatewayClassName;
  }

  // infrastructure - computed: false, optional: true, required: false
  private _infrastructure = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }

  // listeners - computed: false, optional: false, required: true
  private _listeners = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest k8s_gateway_networking_k8s_io_gateway_v1beta1_manifest}
*/
export class DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_networking_k8s_io_gateway_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNetworkingK8SIoGatewayV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_networking_k8s_io_gateway_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/gateway_networking_k8s_io_gateway_v1beta1_manifest k8s_gateway_networking_k8s_io_gateway_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_networking_k8s_io_gateway_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoGatewayV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
