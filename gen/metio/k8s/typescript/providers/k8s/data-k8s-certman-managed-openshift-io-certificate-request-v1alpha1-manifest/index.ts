// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#metadata DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadata;
  /**
  * CertificateRequestSpec defines the desired state of CertificateRequest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#spec DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpec;
}
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#annotations DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#labels DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#name DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#namespace DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecret {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#api_version DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#field_path DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#kind DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#name DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#namespace DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#resource_version DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#uid DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecretToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecretToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentials {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#name DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentialsToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentialsToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentials | cdktf.IResolvable): any {
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

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentials | cdktf.IResolvable | undefined) {
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
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAws {
  /**
  * Credentials refers to a secret that contains the AWS account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#credentials DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#credentials}
  */
  readonly credentials: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentials;
  /**
  * Region specifies the AWS region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#region DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentialsToTerraform(struct!.credentials),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentials",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._region = value.region;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentials {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#name DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentialsToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentialsToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentials | cdktf.IResolvable): any {
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

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentials | cdktf.IResolvable | undefined) {
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
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzure {
  /**
  * Credentials refers to a secret that contains the AZURE account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#credentials DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#credentials}
  */
  readonly credentials: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentials;
  /**
  * ResourceGroupName refers to the resource group that contains the dns zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#resource_group_name DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentialsToTerraform(struct!.credentials),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentials",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._resourceGroupName = value.resourceGroupName;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentials {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#name DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentialsToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentialsToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentials | cdktf.IResolvable): any {
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

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentials | cdktf.IResolvable | undefined) {
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
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcp {
  /**
  * Credentials refers to a secret that contains the GCP account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#credentials DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#credentials}
  */
  readonly credentials: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentials;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentialsToTerraform(struct!.credentials),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#answer_dns_challenge_error_string DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#answer_dns_challenge_error_string}
  */
  readonly answerDnsChallengeErrorString?: string;
  /**
  * these options configure the return values for the mock client's functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#answer_dns_challenge_fqdn DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#answer_dns_challenge_fqdn}
  */
  readonly answerDnsChallengeFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#delete_acme_challenge_resource_records_error_string DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#delete_acme_challenge_resource_records_error_string}
  */
  readonly deleteAcmeChallengeResourceRecordsErrorString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#validate_dns_write_access_bool DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#validate_dns_write_access_bool}
  */
  readonly validateDnsWriteAccessBool?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#validate_dns_write_access_error_string DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#validate_dns_write_access_error_string}
  */
  readonly validateDnsWriteAccessErrorString?: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMockToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    answer_dns_challenge_error_string: cdktf.stringToTerraform(struct!.answerDnsChallengeErrorString),
    answer_dns_challenge_fqdn: cdktf.stringToTerraform(struct!.answerDnsChallengeFqdn),
    delete_acme_challenge_resource_records_error_string: cdktf.stringToTerraform(struct!.deleteAcmeChallengeResourceRecordsErrorString),
    validate_dns_write_access_bool: cdktf.booleanToTerraform(struct!.validateDnsWriteAccessBool),
    validate_dns_write_access_error_string: cdktf.stringToTerraform(struct!.validateDnsWriteAccessErrorString),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMockToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    answer_dns_challenge_error_string: {
      value: cdktf.stringToHclTerraform(struct!.answerDnsChallengeErrorString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    answer_dns_challenge_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.answerDnsChallengeFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_acme_challenge_resource_records_error_string: {
      value: cdktf.stringToHclTerraform(struct!.deleteAcmeChallengeResourceRecordsErrorString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_dns_write_access_bool: {
      value: cdktf.booleanToHclTerraform(struct!.validateDnsWriteAccessBool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_dns_write_access_error_string: {
      value: cdktf.stringToHclTerraform(struct!.validateDnsWriteAccessErrorString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerDnsChallengeErrorString !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerDnsChallengeErrorString = this._answerDnsChallengeErrorString;
    }
    if (this._answerDnsChallengeFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerDnsChallengeFqdn = this._answerDnsChallengeFqdn;
    }
    if (this._deleteAcmeChallengeResourceRecordsErrorString !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAcmeChallengeResourceRecordsErrorString = this._deleteAcmeChallengeResourceRecordsErrorString;
    }
    if (this._validateDnsWriteAccessBool !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateDnsWriteAccessBool = this._validateDnsWriteAccessBool;
    }
    if (this._validateDnsWriteAccessErrorString !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateDnsWriteAccessErrorString = this._validateDnsWriteAccessErrorString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerDnsChallengeErrorString = undefined;
      this._answerDnsChallengeFqdn = undefined;
      this._deleteAcmeChallengeResourceRecordsErrorString = undefined;
      this._validateDnsWriteAccessBool = undefined;
      this._validateDnsWriteAccessErrorString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerDnsChallengeErrorString = value.answerDnsChallengeErrorString;
      this._answerDnsChallengeFqdn = value.answerDnsChallengeFqdn;
      this._deleteAcmeChallengeResourceRecordsErrorString = value.deleteAcmeChallengeResourceRecordsErrorString;
      this._validateDnsWriteAccessBool = value.validateDnsWriteAccessBool;
      this._validateDnsWriteAccessErrorString = value.validateDnsWriteAccessErrorString;
    }
  }

  // answer_dns_challenge_error_string - computed: false, optional: true, required: false
  private _answerDnsChallengeErrorString?: string; 
  public get answerDnsChallengeErrorString() {
    return this.getStringAttribute('answer_dns_challenge_error_string');
  }
  public set answerDnsChallengeErrorString(value: string) {
    this._answerDnsChallengeErrorString = value;
  }
  public resetAnswerDnsChallengeErrorString() {
    this._answerDnsChallengeErrorString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerDnsChallengeErrorStringInput() {
    return this._answerDnsChallengeErrorString;
  }

  // answer_dns_challenge_fqdn - computed: false, optional: true, required: false
  private _answerDnsChallengeFqdn?: string; 
  public get answerDnsChallengeFqdn() {
    return this.getStringAttribute('answer_dns_challenge_fqdn');
  }
  public set answerDnsChallengeFqdn(value: string) {
    this._answerDnsChallengeFqdn = value;
  }
  public resetAnswerDnsChallengeFqdn() {
    this._answerDnsChallengeFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerDnsChallengeFqdnInput() {
    return this._answerDnsChallengeFqdn;
  }

  // delete_acme_challenge_resource_records_error_string - computed: false, optional: true, required: false
  private _deleteAcmeChallengeResourceRecordsErrorString?: string; 
  public get deleteAcmeChallengeResourceRecordsErrorString() {
    return this.getStringAttribute('delete_acme_challenge_resource_records_error_string');
  }
  public set deleteAcmeChallengeResourceRecordsErrorString(value: string) {
    this._deleteAcmeChallengeResourceRecordsErrorString = value;
  }
  public resetDeleteAcmeChallengeResourceRecordsErrorString() {
    this._deleteAcmeChallengeResourceRecordsErrorString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAcmeChallengeResourceRecordsErrorStringInput() {
    return this._deleteAcmeChallengeResourceRecordsErrorString;
  }

  // validate_dns_write_access_bool - computed: false, optional: true, required: false
  private _validateDnsWriteAccessBool?: boolean | cdktf.IResolvable; 
  public get validateDnsWriteAccessBool() {
    return this.getBooleanAttribute('validate_dns_write_access_bool');
  }
  public set validateDnsWriteAccessBool(value: boolean | cdktf.IResolvable) {
    this._validateDnsWriteAccessBool = value;
  }
  public resetValidateDnsWriteAccessBool() {
    this._validateDnsWriteAccessBool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateDnsWriteAccessBoolInput() {
    return this._validateDnsWriteAccessBool;
  }

  // validate_dns_write_access_error_string - computed: false, optional: true, required: false
  private _validateDnsWriteAccessErrorString?: string; 
  public get validateDnsWriteAccessErrorString() {
    return this.getStringAttribute('validate_dns_write_access_error_string');
  }
  public set validateDnsWriteAccessErrorString(value: string) {
    this._validateDnsWriteAccessErrorString = value;
  }
  public resetValidateDnsWriteAccessErrorString() {
    this._validateDnsWriteAccessErrorString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateDnsWriteAccessErrorStringInput() {
    return this._validateDnsWriteAccessErrorString;
  }
}
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatform {
  /**
  * AWSPlatformSecrets contains secrets for clusters on the AWS platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#aws DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#aws}
  */
  readonly aws?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAws;
  /**
  * AzurePlatformSecrets contains secrets for clusters on the Azure platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#azure DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#azure}
  */
  readonly azure?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzure;
  /**
  * GCPPlatformSecrets contains secrets for clusters on the GCP platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#gcp DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#gcp}
  */
  readonly gcp?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcp;
  /**
  * MockPlatformSecrets indicates a mock client should be generated, which doesn't interact with any platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#mock DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#mock}
  */
  readonly mock?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMock;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsToTerraform(struct!.aws),
    azure: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureToTerraform(struct!.azure),
    gcp: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpToTerraform(struct!.gcp),
    mock: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMockToTerraform(struct!.mock),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAws",
    },
    azure: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzure",
    },
    gcp: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcp",
    },
    mock: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMockToHclTerraform(struct!.mock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMock",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    if (this._mock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mock = this._mock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._mock.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._gcp.internalValue = value.gcp;
      this._mock.internalValue = value.mock;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // mock - computed: false, optional: true, required: false
  private _mock = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMockOutputReference(this, "mock");
  public get mock() {
    return this._mock;
  }
  public putMock(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformMock) {
    this._mock.internalValue = value;
  }
  public resetMock() {
    this._mock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockInput() {
    return this._mock.internalValue;
  }
}
export interface DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpec {
  /**
  * ACMEDNSDomain is the DNS zone that will house the TXT records needed for the certificate to be created. In Route53 this would be the public Route53 hosted zone (the Domain Name not the ZoneID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#acme_dns_domain DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#acme_dns_domain}
  */
  readonly acmeDnsDomain: string;
  /**
  * APIURL is the URL where the cluster's API can be accessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#api_url DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#api_url}
  */
  readonly apiUrl?: string;
  /**
  * CertificateSecret is the reference to the secret where certificates are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#certificate_secret DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#certificate_secret}
  */
  readonly certificateSecret: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecret;
  /**
  * DNSNames is a list of subject alt names to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#dns_names DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#dns_names}
  */
  readonly dnsNames: string[];
  /**
  * Let's Encrypt will use this to contact you about expiring certificates, and issues related to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#email DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#email}
  */
  readonly email: string;
  /**
  * Platform contains specific cloud provider information such as credentials and secrets for the cluster infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#platform DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#platform}
  */
  readonly platform: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatform;
  /**
  * Number of days before expiration to reissue certificate. NOTE: Keeping 'renew' in JSON for backward-compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#renew_before_days DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#renew_before_days}
  */
  readonly renewBeforeDays?: number;
  /**
  * WebConsoleURL is the URL for the cluster's web console UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#web_console_url DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest#web_console_url}
  */
  readonly webConsoleUrl?: string;
}

export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acme_dns_domain: cdktf.stringToTerraform(struct!.acmeDnsDomain),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    certificate_secret: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecretToTerraform(struct!.certificateSecret),
    dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNames),
    email: cdktf.stringToTerraform(struct!.email),
    platform: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformToTerraform(struct!.platform),
    renew_before_days: cdktf.numberToTerraform(struct!.renewBeforeDays),
    web_console_url: cdktf.stringToTerraform(struct!.webConsoleUrl),
  }
}


export function dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acme_dns_domain: {
      value: cdktf.stringToHclTerraform(struct!.acmeDnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_secret: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecretToHclTerraform(struct!.certificateSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecret",
    },
    dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatform",
    },
    renew_before_days: {
      value: cdktf.numberToHclTerraform(struct!.renewBeforeDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_console_url: {
      value: cdktf.stringToHclTerraform(struct!.webConsoleUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmeDnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmeDnsDomain = this._acmeDnsDomain;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._certificateSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecret = this._certificateSecret?.internalValue;
    }
    if (this._dnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._platform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform?.internalValue;
    }
    if (this._renewBeforeDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewBeforeDays = this._renewBeforeDays;
    }
    if (this._webConsoleUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webConsoleUrl = this._webConsoleUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acmeDnsDomain = undefined;
      this._apiUrl = undefined;
      this._certificateSecret.internalValue = undefined;
      this._dnsNames = undefined;
      this._email = undefined;
      this._platform.internalValue = undefined;
      this._renewBeforeDays = undefined;
      this._webConsoleUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acmeDnsDomain = value.acmeDnsDomain;
      this._apiUrl = value.apiUrl;
      this._certificateSecret.internalValue = value.certificateSecret;
      this._dnsNames = value.dnsNames;
      this._email = value.email;
      this._platform.internalValue = value.platform;
      this._renewBeforeDays = value.renewBeforeDays;
      this._webConsoleUrl = value.webConsoleUrl;
    }
  }

  // acme_dns_domain - computed: false, optional: false, required: true
  private _acmeDnsDomain?: string; 
  public get acmeDnsDomain() {
    return this.getStringAttribute('acme_dns_domain');
  }
  public set acmeDnsDomain(value: string) {
    this._acmeDnsDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeDnsDomainInput() {
    return this._acmeDnsDomain;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // certificate_secret - computed: false, optional: false, required: true
  private _certificateSecret = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecretOutputReference(this, "certificate_secret");
  public get certificateSecret() {
    return this._certificateSecret;
  }
  public putCertificateSecret(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecCertificateSecret) {
    this._certificateSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretInput() {
    return this._certificateSecret.internalValue;
  }

  // dns_names - computed: false, optional: false, required: true
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // platform - computed: false, optional: false, required: true
  private _platform = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecPlatform) {
    this._platform.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // renew_before_days - computed: false, optional: true, required: false
  private _renewBeforeDays?: number; 
  public get renewBeforeDays() {
    return this.getNumberAttribute('renew_before_days');
  }
  public set renewBeforeDays(value: number) {
    this._renewBeforeDays = value;
  }
  public resetRenewBeforeDays() {
    this._renewBeforeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeDaysInput() {
    return this._renewBeforeDays;
  }

  // web_console_url - computed: false, optional: true, required: false
  private _webConsoleUrl?: string; 
  public get webConsoleUrl() {
    return this.getStringAttribute('web_console_url');
  }
  public set webConsoleUrl(value: string) {
    this._webConsoleUrl = value;
  }
  public resetWebConsoleUrl() {
    this._webConsoleUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webConsoleUrlInput() {
    return this._webConsoleUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest k8s_certman_managed_openshift_io_certificate_request_v1alpha1_manifest}
*/
export class DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_certman_managed_openshift_io_certificate_request_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_certman_managed_openshift_io_certificate_request_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/certman_managed_openshift_io_certificate_request_v1alpha1_manifest k8s_certman_managed_openshift_io_certificate_request_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_certman_managed_openshift_io_certificate_request_v1alpha1_manifest',
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
  private _metadata = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCertmanManagedOpenshiftIoCertificateRequestV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
