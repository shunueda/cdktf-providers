// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#metadata DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadata;
  /**
  * Spec defines the desired state of BackendTLSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#spec DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#spec}
  */
  readonly spec: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpec;
}
export interface DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#annotations DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#labels DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#name DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#namespace DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefs {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#group DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#kind DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#name DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * SectionName is the name of a section within the target resource. When unspecified, this targetRef targets the entire resource. In the following resources, SectionName is interpreted as the following: * Gateway: Listener name * HTTPRoute: HTTPRouteRule name * Service: Port name If a SectionName is specified, but does not exist on the targeted object, the Policy must fail to attach, and the policy implementation should record a 'ResolvedRefs' or similar Condition in the Policy's status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#section_name DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#section_name}
  */
  readonly sectionName?: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
  }
}


export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefs | cdktf.IResolvable): any {
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
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
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
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._sectionName = undefined;
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
      this._sectionName = value.sectionName;
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

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }
}

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefs {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#group DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the referent. For example 'HTTPRoute' or 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#kind DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#name DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefs | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefs | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefs | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNames {
  /**
  * Hostname contains Subject Alternative Name specified in DNS name format. Required when Type is set to Hostname, ignored otherwise. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#hostname DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Type determines the format of the Subject Alternative Name. Always required. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#type DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#type}
  */
  readonly type: string;
  /**
  * URI contains Subject Alternative Name specified in a full URI format. It MUST include both a scheme (e.g., 'http' or 'ftp') and a scheme-specific-part. Common values include SPIFFE IDs like 'spiffe://mycluster.example.com/ns/myns/sa/svc1sa'. Required when Type is set to URI, ignored otherwise. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#uri DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._type = value.type;
      this._uri = value.uri;
    }
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNames[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesOutputReference {
    return new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidation {
  /**
  * CACertificateRefs contains one or more references to Kubernetes objects that contain a PEM-encoded TLS CA certificate bundle, which is used to validate a TLS handshake between the Gateway and backend Pod. If CACertificateRefs is empty or unspecified, then WellKnownCACertificates must be specified. Only one of CACertificateRefs or WellKnownCACertificates may be specified, not both. If CACertifcateRefs is empty or unspecified, the configuration for WellKnownCACertificates MUST be honored instead if supported by the implementation. References to a resource in a different namespace are invalid for the moment, although we will revisit this in the future. A single CACertificateRef to a Kubernetes ConfigMap kind has 'Core' support. Implementations MAY choose to support attaching multiple certificates to a backend, but this behavior is implementation-specific. Support: Core - An optional single reference to a Kubernetes ConfigMap, with the CA certificate in a key named 'ca.crt'. Support: Implementation-specific (More than one reference, or other kinds of resources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#ca_certificate_refs DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#ca_certificate_refs}
  */
  readonly caCertificateRefs?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefs[] | cdktf.IResolvable;
  /**
  * Hostname is used for two purposes in the connection between Gateways and backends: 1. Hostname MUST be used as the SNI to connect to the backend (RFC 6066). 2. If SubjectAltNames is not specified, Hostname MUST be used for authentication and MUST match the certificate served by the matching backend. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#hostname DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#hostname}
  */
  readonly hostname: string;
  /**
  * SubjectAltNames contains one or more Subject Alternative Names. When specified, the certificate served from the backend MUST have at least one Subject Alternate Name matching one of the specified SubjectAltNames. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#subject_alt_names DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNames[] | cdktf.IResolvable;
  /**
  * WellKnownCACertificates specifies whether system CA certificates may be used in the TLS handshake between the gateway and backend pod. If WellKnownCACertificates is unspecified or empty (''), then CACertificateRefs must be specified with at least one entry for a valid configuration. Only one of CACertificateRefs or WellKnownCACertificates may be specified, not both. If an implementation does not support the WellKnownCACertificates field or the value supplied is not supported, the Status Conditions on the Policy MUST be updated to include an Accepted: False Condition with Reason: Invalid. Support: Implementation-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#well_known_ca_certificates DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#well_known_ca_certificates}
  */
  readonly wellKnownCaCertificates?: string;
}

export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsToTerraform, false)(struct!.caCertificateRefs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    subject_alt_names: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesToTerraform, false)(struct!.subjectAltNames),
    well_known_ca_certificates: cdktf.stringToTerraform(struct!.wellKnownCaCertificates),
  }
}


export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsToHclTerraform, false)(struct!.caCertificateRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesList",
    },
    well_known_ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.wellKnownCaCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificateRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateRefs = this._caCertificateRefs?.internalValue;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._subjectAltNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames?.internalValue;
    }
    if (this._wellKnownCaCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownCaCertificates = this._wellKnownCaCertificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificateRefs.internalValue = undefined;
      this._hostname = undefined;
      this._subjectAltNames.internalValue = undefined;
      this._wellKnownCaCertificates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificateRefs.internalValue = value.caCertificateRefs;
      this._hostname = value.hostname;
      this._subjectAltNames.internalValue = value.subjectAltNames;
      this._wellKnownCaCertificates = value.wellKnownCaCertificates;
    }
  }

  // ca_certificate_refs - computed: false, optional: true, required: false
  private _caCertificateRefs = new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefsList(this, "ca_certificate_refs", false);
  public get caCertificateRefs() {
    return this._caCertificateRefs;
  }
  public putCaCertificateRefs(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationCaCertificateRefs[] | cdktf.IResolvable) {
    this._caCertificateRefs.internalValue = value;
  }
  public resetCaCertificateRefs() {
    this._caCertificateRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateRefsInput() {
    return this._caCertificateRefs.internalValue;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames = new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNamesList(this, "subject_alt_names", false);
  public get subjectAltNames() {
    return this._subjectAltNames;
  }
  public putSubjectAltNames(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationSubjectAltNames[] | cdktf.IResolvable) {
    this._subjectAltNames.internalValue = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames.internalValue;
  }

  // well_known_ca_certificates - computed: false, optional: true, required: false
  private _wellKnownCaCertificates?: string; 
  public get wellKnownCaCertificates() {
    return this.getStringAttribute('well_known_ca_certificates');
  }
  public set wellKnownCaCertificates(value: string) {
    this._wellKnownCaCertificates = value;
  }
  public resetWellKnownCaCertificates() {
    this._wellKnownCaCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownCaCertificatesInput() {
    return this._wellKnownCaCertificates;
  }
}
export interface DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpec {
  /**
  * Options are a list of key/value pairs to enable extended TLS configuration for each implementation. For example, configuring the minimum TLS version or supported cipher suites. A set of common keys MAY be defined by the API in the future. To avoid any ambiguity, implementation-specific definitions MUST use domain-prefixed names, such as 'example.com/my-custom-option'. Un-prefixed names are reserved for key names defined by Gateway API. Support: Implementation-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#options DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * TargetRefs identifies an API object to apply the policy to. Only Services have Extended support. Implementations MAY support additional objects, with Implementation Specific support. Note that this config applies to the entire referenced resource by default, but this default may change in the future to provide a more granular application of the policy. Support: Extended for Kubernetes Service Support: Implementation-specific for any other resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#target_refs DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#target_refs}
  */
  readonly targetRefs: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefs[] | cdktf.IResolvable;
  /**
  * Validation contains backend TLS validation configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#validation DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest#validation}
  */
  readonly validation: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidation;
}

export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecToTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    target_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
    validation: dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationToTerraform(struct!.validation),
  }
}


export function dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsList",
    },
    validation: {
      value: dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._targetRefs.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._targetRefs.internalValue = value.targetRefs;
      this._validation.internalValue = value.validation;
    }
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

  // target_refs - computed: false, optional: false, required: true
  private _targetRefs = new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecValidation) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest k8s_gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest}
*/
export class DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest k8s_gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_networking_k8s_io_backend_tls_policy_v1alpha3_manifest',
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
  private _metadata = new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpec) {
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
      metadata: dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoBackendTlsPolicyV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
