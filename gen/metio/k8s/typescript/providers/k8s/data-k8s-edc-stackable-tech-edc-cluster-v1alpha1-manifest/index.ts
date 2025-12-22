// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#metadata DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#spec DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpec;
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#annotations DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#labels DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#name DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#namespace DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScope {
  /**
  * The node scope is resolved to the name of the Kubernetes Node object that the Pod is running on. This will typically be the DNS name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#node DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
  /**
  * The pod scope is resolved to the name of the Kubernetes Pod. This allows the secret to differentiate between StatefulSet replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pod DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pod}
  */
  readonly pod?: boolean | cdktf.IResolvable;
  /**
  * The service scope allows Pod objects to specify custom scopes. This should typically correspond to Service objects that the Pod participates in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#services DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScopeToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
    pod: cdktf.booleanToTerraform(struct!.pod),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScopeToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod: {
      value: cdktf.booleanToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._services = value.services;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: boolean | cdktf.IResolvable; 
  public get pod() {
    return this.getBooleanAttribute('pod');
  }
  public set pod(value: boolean | cdktf.IResolvable) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentials {
  /**
  * [Scope](https://docs.stackable.tech/home/nightly/secret-operator/scope) of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#scope DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScope;
  /**
  * [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) containing the LDAP bind credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#secret_class DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScopeToTerraform(struct!.scope),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScope",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope.internalValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope.internalValue = value.scope;
      this._secretClass = value.secretClass;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCert {
  /**
  * Name of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) which will provide the CA certificate. Note that a SecretClass does not need to have a key but can also work with just a CA certificate, so if you got provided with a CA cert but don't have access to the key you can still use this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#secret_class DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
  /**
  * Use TLS and the CA certificates trusted by the common web browsers to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#web_pki DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#web_pki}
  */
  readonly webPki?: { [key: string]: string };
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCertToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
    web_pki: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webPki),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCertToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_pki: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webPki),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    if (this._webPki !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPki = this._webPki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
      this._webPki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
      this._webPki = value.webPki;
    }
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }

  // web_pki - computed: false, optional: true, required: false
  private _webPki?: { [key: string]: string }; 
  public get webPki() {
    return this.getStringMapAttribute('web_pki');
  }
  public set webPki(value: { [key: string]: string }) {
    this._webPki = value;
  }
  public resetWebPki() {
    this._webPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPkiInput() {
    return this._webPki;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServer {
  /**
  * CA cert to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#ca_cert DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#ca_cert}
  */
  readonly caCert: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCert;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCertToTerraform(struct!.caCert),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
    }
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerCaCert) {
    this._caCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerification {
  /**
  * Use TLS but don't verify certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#none DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * Use TLS and a CA certificate to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#server DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServer;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    server: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerToTerraform(struct!.server),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._server.internalValue = value.server;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTls {
  /**
  * The verification method used to verify the certificates of the server and/or the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#verification DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#verification}
  */
  readonly verification: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerification;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verification: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationToTerraform(struct!.verification),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verification: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._verification.internalValue = value.verification;
    }
  }

  // verification - computed: false, optional: false, required: true
  private _verification = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsVerification) {
    this._verification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInline {
  /**
  * Which access style to use. Defaults to virtual hosted-style as most of the data products out there. Have a look at the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#access_style DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#access_style}
  */
  readonly accessStyle?: string;
  /**
  * If the S3 uses authentication you have to specify you S3 credentials. In the most cases a [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) providing 'accessKey' and 'secretKey' is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#credentials DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentials;
  /**
  * Hostname of the S3 server without any protocol or port. For example: 'west1.my-cloud.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#host DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Port the S3 server listens on. If not specified the product will determine the port to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#port DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * If you want to use TLS when talking to S3 you can enable TLS encrypted communication with this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#tls DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTls;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_style: cdktf.stringToTerraform(struct!.accessStyle),
    credentials: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsToTerraform(struct!.tls),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_style: {
      value: cdktf.stringToHclTerraform(struct!.accessStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentials",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    tls: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStyle = this._accessStyle;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStyle = undefined;
      this._credentials.internalValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStyle = value.accessStyle;
      this._credentials.internalValue = value.credentials;
      this._host = value.host;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // access_style - computed: false, optional: true, required: false
  private _accessStyle?: string; 
  public get accessStyle() {
    return this.getStringAttribute('access_style');
  }
  public set accessStyle(value: string) {
    this._accessStyle = value;
  }
  public resetAccessStyle() {
    this._accessStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStyleInput() {
    return this._accessStyle;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineTls) {
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
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnection {
  /**
  * Inline definition of an S3 connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#inline DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInline;
  /**
  * A reference to an S3Connection resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#reference DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3Inline {
  /**
  * The name of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#bucket_name DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The definition of an S3 connection, either inline or as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#connection DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#connection}
  */
  readonly connection?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnection;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3Inline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    connection: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionToTerraform(struct!.connection),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3Inline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3Inline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3Inline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._connection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._connection.internalValue = value.connection;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3 {
  /**
  * An inline definition, containing the S3 bucket properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#inline DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3Inline;
  /**
  * A reference to an S3 bucket object. This is simply the name of the 'S3Bucket' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#reference DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3ToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3ToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3Inline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3InlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3Inline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonos {
  /**
  * An S3 bucket definition, it can either be a reference to an explicit S3Bucket object, or it can be an inline definition of a bucket. Read the [S3 resources concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3) to learn more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#s3 DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#s3}
  */
  readonly s3: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#token_secret DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#token_secret}
  */
  readonly tokenSecret: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3ToTerraform(struct!.s3),
    token_secret: cdktf.stringToTerraform(struct!.tokenSecret),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3",
    },
    token_secret: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._tokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecret = this._tokenSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
      this._tokenSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
      this._tokenSecret = value.tokenSecret;
    }
  }

  // s3 - computed: false, optional: false, required: true
  private _s3 = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosS3) {
    this._s3.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // token_secret - computed: false, optional: false, required: true
  private _tokenSecret?: string; 
  public get tokenSecret() {
    return this.getStringAttribute('token_secret');
  }
  public set tokenSecret(value: string) {
    this._tokenSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#cert_secret DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#cert_secret}
  */
  readonly certSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#ionos DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#ionos}
  */
  readonly ionos: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonos;
  /**
  * In the future this setting will control, which ListenerClass <https://docs.stackable.tech/home/stable/listener-operator/listenerclass.html> will be used to expose the service. Currently only a subset of the ListenerClasses are supported by choosing the type of the created Services by looking at the ListenerClass name specified, In a future release support for custom ListenerClasses will be introduced without a breaking change: * cluster-internal: Use a ClusterIP service * external-unstable: Use a NodePort service * external-stable: Use a LoadBalancer service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#listener_class DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * Name of the Vector aggregator discovery ConfigMap. It must contain the key 'ADDRESS' with the address of the Vector aggregator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret: cdktf.stringToTerraform(struct!.certSecret),
    ionos: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosToTerraform(struct!.ionos),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret: {
      value: cdktf.stringToHclTerraform(struct!.certSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ionos: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosToHclTerraform(struct!.ionos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonos",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_aggregator_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.vectorAggregatorConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecret = this._certSecret;
    }
    if (this._ionos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ionos = this._ionos?.internalValue;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._vectorAggregatorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorAggregatorConfigMapName = this._vectorAggregatorConfigMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecret = undefined;
      this._ionos.internalValue = undefined;
      this._listenerClass = undefined;
      this._vectorAggregatorConfigMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecret = value.certSecret;
      this._ionos.internalValue = value.ionos;
      this._listenerClass = value.listenerClass;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
    }
  }

  // cert_secret - computed: false, optional: false, required: true
  private _certSecret?: string; 
  public get certSecret() {
    return this.getStringAttribute('cert_secret');
  }
  public set certSecret(value: string) {
    this._certSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretInput() {
    return this._certSecret;
  }

  // ionos - computed: false, optional: false, required: true
  private _ionos = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonosOutputReference(this, "ionos");
  public get ionos() {
    return this._ionos;
  }
  public putIonos(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigIonos) {
    this._ionos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ionosInput() {
    return this._ionos.internalValue;
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // vector_aggregator_config_map_name - computed: false, optional: true, required: false
  private _vectorAggregatorConfigMapName?: string; 
  public get vectorAggregatorConfigMapName() {
    return this.getStringAttribute('vector_aggregator_config_map_name');
  }
  public set vectorAggregatorConfigMapName(value: string) {
    this._vectorAggregatorConfigMapName = value;
  }
  public resetVectorAggregatorConfigMapName() {
    this._vectorAggregatorConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorAggregatorConfigMapNameInput() {
    return this._vectorAggregatorConfigMapName;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperation {
  /**
  * Flag to stop cluster reconciliation by the operator. This means that all changes in the custom resource spec are ignored until this flag is set to false or removed. The operator will however still watch the deployed resources at the time and update the custom resource status field. If applied at the same time with 'stopped', 'reconciliationPaused' will take precedence over 'stopped' and stop the reconciliation immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#reconciliation_paused DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#reconciliation_paused}
  */
  readonly reconciliationPaused?: boolean | cdktf.IResolvable;
  /**
  * Flag to stop the cluster. This means all deployed resources (e.g. Services, StatefulSets, ConfigMaps) are kept but all deployed Pods (e.g. replicas from a StatefulSet) are scaled to 0 and therefore stopped and removed. If applied at the same time with 'reconciliationPaused', the latter will pause reconciliation and 'stopped' will take no effect until 'reconciliationPaused' is set to false or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#stopped DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciliation_paused: cdktf.booleanToTerraform(struct!.reconciliationPaused),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciliation_paused: {
      value: cdktf.booleanToHclTerraform(struct!.reconciliationPaused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stopped: {
      value: cdktf.booleanToHclTerraform(struct!.stopped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconciliationPaused !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconciliationPaused = this._reconciliationPaused;
    }
    if (this._stopped !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopped = this._stopped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconciliationPaused = undefined;
      this._stopped = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconciliationPaused = value.reconciliationPaused;
      this._stopped = value.stopped;
    }
  }

  // reconciliation_paused - computed: false, optional: true, required: false
  private _reconciliationPaused?: boolean | cdktf.IResolvable; 
  public get reconciliationPaused() {
    return this.getBooleanAttribute('reconciliation_paused');
  }
  public set reconciliationPaused(value: boolean | cdktf.IResolvable) {
    this._reconciliationPaused = value;
  }
  public resetReconciliationPaused() {
    this._reconciliationPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconciliationPausedInput() {
    return this._reconciliationPaused;
  }

  // stopped - computed: false, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#node_affinity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#node_selector DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pod_affinity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity: { [key: string]: string };
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinityToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinityToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
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

  // pod_affinity - computed: false, optional: false, required: true
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: false, required: true
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#level DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#config_map DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustomToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#level DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFileToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#level DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#console DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#custom DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#file DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#loggers DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggers;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#containers DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#enable_vector_agent DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#max DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#min DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpuToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpuToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#limit DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#runtime_limits DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemoryToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemoryToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#key DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#operator DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#values DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference {
    return new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#match_expressions DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#match_labels DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsList",
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageData {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#capacity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#selectors DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#storage_class DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#data DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageData;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataToTerraform(struct!.data),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#cpu DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#memory DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#storage DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorage;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemory",
    },
    storage: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#affinity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinity;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#logging DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#resources DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResources;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinityToTerraform(struct!.affinity),
    logging: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinity",
    },
    logging: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLogging",
    },
    resources: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#enabled DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#max_unavailable DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
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
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudget;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
    }
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#node_affinity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#node_selector DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pod_affinity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity: { [key: string]: string };
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinityToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
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

  // pod_affinity - computed: false, optional: false, required: true
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: false, required: true
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#level DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#config_map DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#level DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#level DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#console DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#custom DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#file DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#loggers DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#containers DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#enable_vector_agent DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#max DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#min DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
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

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#limit DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#runtime_limits DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#key DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#operator DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#values DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference {
    return new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#match_expressions DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#match_labels DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList",
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageData {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#capacity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#selectors DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#storage_class DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#data DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageData;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataToTerraform(struct!.data),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#cpu DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#memory DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#storage DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorage;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#affinity DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinity;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#logging DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#resources DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResources;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    logging: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinity",
    },
    logging: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#cli_overrides DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#config DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#config_overrides DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#env_overrides DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pod_overrides DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#replicas DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._replicas = value.replicas;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
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
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#cli_overrides DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#config DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#config_overrides DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#env_overrides DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pod_overrides DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#role_config DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#role_groups DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroups;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_config: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfig",
    },
    role_groups: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._roleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleConfig = this._roleConfig?.internalValue;
    }
    if (this._roleGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleGroups = this._roleGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._roleConfig.internalValue = undefined;
      this._roleGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._roleConfig.internalValue = value.roleConfig;
      this._roleGroups.internalValue = value.roleGroups;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // role_config - computed: false, optional: true, required: false
  private _roleConfig = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleConfig) {
    this._roleConfig.internalValue = value;
  }
  public resetRoleConfig() {
    this._roleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigInput() {
    return this._roleConfig.internalValue;
  }

  // role_groups - computed: false, optional: false, required: true
  private _roleGroups = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#name DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#custom DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#product_version DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pull_policy DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#pull_secrets DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#repo DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#stackable_version DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.stringToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_version: {
      value: cdktf.stringToHclTerraform(struct!.productVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stackable_version: {
      value: cdktf.stringToHclTerraform(struct!.stackableVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._productVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.productVersion = this._productVersion;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._pullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecrets = this._pullSecrets?.internalValue;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._stackableVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackableVersion = this._stackableVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._productVersion = undefined;
      this._pullPolicy = undefined;
      this._pullSecrets.internalValue = undefined;
      this._repo = undefined;
      this._stackableVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._productVersion = value.productVersion;
      this._pullPolicy = value.pullPolicy;
      this._pullSecrets.internalValue = value.pullSecrets;
      this._repo = value.repo;
      this._stackableVersion = value.stackableVersion;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: string; 
  public get custom() {
    return this.getStringAttribute('custom');
  }
  public set custom(value: string) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // product_version - computed: false, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._pullSecrets.internalValue = value;
  }
  public resetPullSecrets() {
    this._pullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets.internalValue;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // stackable_version - computed: false, optional: true, required: false
  private _stackableVersion?: string; 
  public get stackableVersion() {
    return this.getStringAttribute('stackable_version');
  }
  public set stackableVersion(value: string) {
    this._stackableVersion = value;
  }
  public resetStackableVersion() {
    this._stackableVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackableVersionInput() {
    return this._stackableVersion;
  }
}
export interface DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpec {
  /**
  * General Hive metastore cluster settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#cluster_config DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfig;
  /**
  * Cluster operations like pause reconciliation or cluster stop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#cluster_operation DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#cluster_operation}
  */
  readonly clusterOperation?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperation;
  /**
  * This struct represents a role - e.g. HDFS datanodes or Trino workers. It has a key-value-map containing all the roleGroups that are part of this role. Additionally, there is a 'config', which is configurable at the role *and* roleGroup level. Everything at roleGroup level is merged on top of what is configured on role level. There is also a second form of config, which can only be configured at role level, the 'roleConfig'. You can learn more about this in the [Roles and role group concept documentation](https://docs.stackable.tech/home/nightly/concepts/roles-and-role-groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#connectors DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#connectors}
  */
  readonly connectors?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectors;
  /**
  * The image to use. In this example this will be an nginx image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#image DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest#image}
  */
  readonly image: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImage;
}

export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    cluster_operation: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct!.clusterOperation),
    connectors: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsToTerraform(struct!.connectors),
    image: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImageToTerraform(struct!.image),
  }
}


export function dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfig",
    },
    cluster_operation: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct!.clusterOperation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperation",
    },
    connectors: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsToHclTerraform(struct!.connectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectors",
    },
    image: {
      value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._clusterOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterOperation = this._clusterOperation?.internalValue;
    }
    if (this._connectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectors = this._connectors?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._clusterOperation.internalValue = undefined;
      this._connectors.internalValue = undefined;
      this._image.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._clusterOperation.internalValue = value.clusterOperation;
      this._connectors.internalValue = value.connectors;
      this._image.internalValue = value.image;
    }
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cluster_operation - computed: false, optional: true, required: false
  private _clusterOperation = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperationOutputReference(this, "cluster_operation");
  public get clusterOperation() {
    return this._clusterOperation;
  }
  public putClusterOperation(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecClusterOperation) {
    this._clusterOperation.internalValue = value;
  }
  public resetClusterOperation() {
    this._clusterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperationInput() {
    return this._clusterOperation.internalValue;
  }

  // connectors - computed: false, optional: true, required: false
  private _connectors = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectorsOutputReference(this, "connectors");
  public get connectors() {
    return this._connectors;
  }
  public putConnectors(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecConnectors) {
    this._connectors.internalValue = value;
  }
  public resetConnectors() {
    this._connectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsInput() {
    return this._connectors.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest k8s_edc_stackable_tech_edc_cluster_v1alpha1_manifest}
*/
export class DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_edc_stackable_tech_edc_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEdcStackableTechEdcClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_edc_stackable_tech_edc_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/edc_stackable_tech_edc_cluster_v1alpha1_manifest k8s_edc_stackable_tech_edc_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_edc_stackable_tech_edc_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEdcStackableTechEdcClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
