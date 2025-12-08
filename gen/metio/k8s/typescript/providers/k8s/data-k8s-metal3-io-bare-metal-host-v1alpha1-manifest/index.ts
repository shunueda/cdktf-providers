// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#metadata DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadata;
  /**
  * BareMetalHostSpec defines the desired state of BareMetalHost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#spec DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpec;
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#annotations DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#labels DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#namespace DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmc {
  /**
  * Address holds the URL for accessing the controller on the network. The scheme part designates the driver to use with the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#address DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#address}
  */
  readonly address: string;
  /**
  * The name of the secret containing the BMC credentials (requires keys 'username' and 'password').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#credentials_name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#credentials_name}
  */
  readonly credentialsName: string;
  /**
  * DisableCertificateVerification disables verification of server certificates when using HTTPS to connect to the BMC. This is required when the server certificate is self-signed, but is insecure because it allows a man-in-the-middle to intercept the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#disable_certificate_verification DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#disable_certificate_verification}
  */
  readonly disableCertificateVerification?: boolean | cdktf.IResolvable;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmcToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    credentials_name: cdktf.stringToTerraform(struct!.credentialsName),
    disable_certificate_verification: cdktf.booleanToTerraform(struct!.disableCertificateVerification),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmcToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_certificate_verification: {
      value: cdktf.booleanToHclTerraform(struct!.disableCertificateVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._credentialsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsName = this._credentialsName;
    }
    if (this._disableCertificateVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCertificateVerification = this._disableCertificateVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._credentialsName = undefined;
      this._disableCertificateVerification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._credentialsName = value.credentialsName;
      this._disableCertificateVerification = value.disableCertificateVerification;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // credentials_name - computed: false, optional: false, required: true
  private _credentialsName?: string; 
  public get credentialsName() {
    return this.getStringAttribute('credentials_name');
  }
  public set credentialsName(value: string) {
    this._credentialsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsNameInput() {
    return this._credentialsName;
  }

  // disable_certificate_verification - computed: false, optional: true, required: false
  private _disableCertificateVerification?: boolean | cdktf.IResolvable; 
  public get disableCertificateVerification() {
    return this.getBooleanAttribute('disable_certificate_verification');
  }
  public set disableCertificateVerification(value: boolean | cdktf.IResolvable) {
    this._disableCertificateVerification = value;
  }
  public resetDisableCertificateVerification() {
    this._disableCertificateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCertificateVerificationInput() {
    return this._disableCertificateVerification;
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#api_version DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#field_path DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#kind DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#namespace DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#resource_version DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#uid DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRefToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRef | cdktf.IResolvable): any {
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


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRefToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRef | cdktf.IResolvable): any {
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

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeploy {
  /**
  * Custom deploy method name. This name is specific to the deploy ramdisk used. If you don't have a custom deploy ramdisk, you shouldn't use CustomDeploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#method DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#method}
  */
  readonly method: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeployToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeploy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeployToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeploy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeploy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeploy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmware {
  /**
  * Allows a single physical processor core to appear as several logical processors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#simultaneous_multithreading_enabled DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#simultaneous_multithreading_enabled}
  */
  readonly simultaneousMultithreadingEnabled?: boolean | cdktf.IResolvable;
  /**
  * SR-IOV support enables a hypervisor to create virtual instances of a PCI-express device, potentially increasing performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#sriov_enabled DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#sriov_enabled}
  */
  readonly sriovEnabled?: boolean | cdktf.IResolvable;
  /**
  * Supports the virtualization of platform hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#virtualization_enabled DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#virtualization_enabled}
  */
  readonly virtualizationEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmwareToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simultaneous_multithreading_enabled: cdktf.booleanToTerraform(struct!.simultaneousMultithreadingEnabled),
    sriov_enabled: cdktf.booleanToTerraform(struct!.sriovEnabled),
    virtualization_enabled: cdktf.booleanToTerraform(struct!.virtualizationEnabled),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmwareToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simultaneous_multithreading_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.simultaneousMultithreadingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sriov_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sriovEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    virtualization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.virtualizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simultaneousMultithreadingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.simultaneousMultithreadingEnabled = this._simultaneousMultithreadingEnabled;
    }
    if (this._sriovEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sriovEnabled = this._sriovEnabled;
    }
    if (this._virtualizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualizationEnabled = this._virtualizationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simultaneousMultithreadingEnabled = undefined;
      this._sriovEnabled = undefined;
      this._virtualizationEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simultaneousMultithreadingEnabled = value.simultaneousMultithreadingEnabled;
      this._sriovEnabled = value.sriovEnabled;
      this._virtualizationEnabled = value.virtualizationEnabled;
    }
  }

  // simultaneous_multithreading_enabled - computed: false, optional: true, required: false
  private _simultaneousMultithreadingEnabled?: boolean | cdktf.IResolvable; 
  public get simultaneousMultithreadingEnabled() {
    return this.getBooleanAttribute('simultaneous_multithreading_enabled');
  }
  public set simultaneousMultithreadingEnabled(value: boolean | cdktf.IResolvable) {
    this._simultaneousMultithreadingEnabled = value;
  }
  public resetSimultaneousMultithreadingEnabled() {
    this._simultaneousMultithreadingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simultaneousMultithreadingEnabledInput() {
    return this._simultaneousMultithreadingEnabled;
  }

  // sriov_enabled - computed: false, optional: true, required: false
  private _sriovEnabled?: boolean | cdktf.IResolvable; 
  public get sriovEnabled() {
    return this.getBooleanAttribute('sriov_enabled');
  }
  public set sriovEnabled(value: boolean | cdktf.IResolvable) {
    this._sriovEnabled = value;
  }
  public resetSriovEnabled() {
    this._sriovEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovEnabledInput() {
    return this._sriovEnabled;
  }

  // virtualization_enabled - computed: false, optional: true, required: false
  private _virtualizationEnabled?: boolean | cdktf.IResolvable; 
  public get virtualizationEnabled() {
    return this.getBooleanAttribute('virtualization_enabled');
  }
  public set virtualizationEnabled(value: boolean | cdktf.IResolvable) {
    this._virtualizationEnabled = value;
  }
  public resetVirtualizationEnabled() {
    this._virtualizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualizationEnabledInput() {
    return this._virtualizationEnabled;
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImage {
  /**
  * Checksum is the checksum for the image. Required for all formats except for 'live-iso'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#checksum DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#checksum}
  */
  readonly checksum?: string;
  /**
  * ChecksumType is the checksum algorithm for the image, e.g md5, sha256 or sha512. The special value 'auto' can be used to detect the algorithm from the checksum. If missing, MD5 is used. If in doubt, use 'auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#checksum_type DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#checksum_type}
  */
  readonly checksumType?: string;
  /**
  * Format contains the format of the image (raw, qcow2, ...). When set to 'live-iso', an ISO 9660 image referenced by the url will be live-booted and not deployed to disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#format DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * URL is a location of an image to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#url DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    checksum_type: cdktf.stringToTerraform(struct!.checksumType),
    format: cdktf.stringToTerraform(struct!.format),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_type: {
      value: cdktf.stringToHclTerraform(struct!.checksumType),
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

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._checksumType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumType = this._checksumType;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksum = undefined;
      this._checksumType = undefined;
      this._format = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksum = value.checksum;
      this._checksumType = value.checksumType;
      this._format = value.format;
      this._url = value.url;
    }
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // checksum_type - computed: false, optional: true, required: false
  private _checksumType?: string; 
  public get checksumType() {
    return this.getStringAttribute('checksum_type');
  }
  public set checksumType(value: string) {
    this._checksumType = value;
  }
  public resetChecksumType() {
    this._checksumType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumTypeInput() {
    return this._checksumType;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaData {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#namespace DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaDataToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaDataToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaData | cdktf.IResolvable): any {
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

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkData {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#namespace DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkDataToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkDataToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkData | cdktf.IResolvable): any {
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

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumes {
  /**
  * The name of the RAID controller to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#controller DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#controller}
  */
  readonly controller?: string;
  /**
  * RAID level for the logical disk. The following levels are supported: 0, 1, 2, 5, 6, 1+0, 5+0, 6+0 (drivers may support only some of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#level DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#level}
  */
  readonly level: string;
  /**
  * Name of the volume. Should be unique within the Node. If not specified, the name will be auto-generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Integer, number of physical disks to use for the logical disk. Defaults to minimum number of disks required for the particular RAID level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#number_of_physical_disks DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#number_of_physical_disks}
  */
  readonly numberOfPhysicalDisks?: number;
  /**
  * Optional list of physical disk names to be used for the hardware RAID volumes. The disk names are interpreted by the hardware RAID controller, and the format is hardware specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#physical_disks DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#physical_disks}
  */
  readonly physicalDisks?: string[];
  /**
  * Select disks with only rotational (if set to true) or solid-state (if set to false) storage. By default, any disks can be picked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#rotational DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#rotational}
  */
  readonly rotational?: boolean | cdktf.IResolvable;
  /**
  * Size of the logical disk to be created in GiB. If unspecified or set be 0, the maximum capacity of disk will be used for logical disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#size_gibibytes DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#size_gibibytes}
  */
  readonly sizeGibibytes?: number;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller: cdktf.stringToTerraform(struct!.controller),
    level: cdktf.stringToTerraform(struct!.level),
    name: cdktf.stringToTerraform(struct!.name),
    number_of_physical_disks: cdktf.numberToTerraform(struct!.numberOfPhysicalDisks),
    physical_disks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.physicalDisks),
    rotational: cdktf.booleanToTerraform(struct!.rotational),
    size_gibibytes: cdktf.numberToTerraform(struct!.sizeGibibytes),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller: {
      value: cdktf.stringToHclTerraform(struct!.controller),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
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
    number_of_physical_disks: {
      value: cdktf.numberToHclTerraform(struct!.numberOfPhysicalDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    physical_disks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.physicalDisks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rotational: {
      value: cdktf.booleanToHclTerraform(struct!.rotational),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size_gibibytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeGibibytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numberOfPhysicalDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfPhysicalDisks = this._numberOfPhysicalDisks;
    }
    if (this._physicalDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalDisks = this._physicalDisks;
    }
    if (this._rotational !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotational = this._rotational;
    }
    if (this._sizeGibibytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGibibytes = this._sizeGibibytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controller = undefined;
      this._level = undefined;
      this._name = undefined;
      this._numberOfPhysicalDisks = undefined;
      this._physicalDisks = undefined;
      this._rotational = undefined;
      this._sizeGibibytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controller = value.controller;
      this._level = value.level;
      this._name = value.name;
      this._numberOfPhysicalDisks = value.numberOfPhysicalDisks;
      this._physicalDisks = value.physicalDisks;
      this._rotational = value.rotational;
      this._sizeGibibytes = value.sizeGibibytes;
    }
  }

  // controller - computed: false, optional: true, required: false
  private _controller?: string; 
  public get controller() {
    return this.getStringAttribute('controller');
  }
  public set controller(value: string) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // number_of_physical_disks - computed: false, optional: true, required: false
  private _numberOfPhysicalDisks?: number; 
  public get numberOfPhysicalDisks() {
    return this.getNumberAttribute('number_of_physical_disks');
  }
  public set numberOfPhysicalDisks(value: number) {
    this._numberOfPhysicalDisks = value;
  }
  public resetNumberOfPhysicalDisks() {
    this._numberOfPhysicalDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPhysicalDisksInput() {
    return this._numberOfPhysicalDisks;
  }

  // physical_disks - computed: false, optional: true, required: false
  private _physicalDisks?: string[]; 
  public get physicalDisks() {
    return this.getListAttribute('physical_disks');
  }
  public set physicalDisks(value: string[]) {
    this._physicalDisks = value;
  }
  public resetPhysicalDisks() {
    this._physicalDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalDisksInput() {
    return this._physicalDisks;
  }

  // rotational - computed: false, optional: true, required: false
  private _rotational?: boolean | cdktf.IResolvable; 
  public get rotational() {
    return this.getBooleanAttribute('rotational');
  }
  public set rotational(value: boolean | cdktf.IResolvable) {
    this._rotational = value;
  }
  public resetRotational() {
    this._rotational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationalInput() {
    return this._rotational;
  }

  // size_gibibytes - computed: false, optional: true, required: false
  private _sizeGibibytes?: number; 
  public get sizeGibibytes() {
    return this.getNumberAttribute('size_gibibytes');
  }
  public set sizeGibibytes(value: number) {
    this._sizeGibibytes = value;
  }
  public resetSizeGibibytes() {
    this._sizeGibibytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGibibytesInput() {
    return this._sizeGibibytes;
  }
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesOutputReference {
    return new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisks {
  /**
  * A Linux device name like '/dev/vda', or a by-path link to it like '/dev/disk/by-path/pci-0000:01:00.0-scsi-0:2:0:0'. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#device_name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#device_name}
  */
  readonly deviceName?: string;
  /**
  * A SCSI bus address like 0:0:0:0. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#hctl DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#hctl}
  */
  readonly hctl?: string;
  /**
  * The minimum size of the device in Gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#min_size_gigabytes DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#min_size_gigabytes}
  */
  readonly minSizeGigabytes?: number;
  /**
  * A vendor-specific device identifier. The hint can be a substring of the actual value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#model DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#model}
  */
  readonly model?: string;
  /**
  * True if the device should use spinning media, false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#rotational DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#rotational}
  */
  readonly rotational?: boolean | cdktf.IResolvable;
  /**
  * Device serial number. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#serial_number DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The name of the vendor or manufacturer of the device. The hint can be a substring of the actual value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#vendor DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#vendor}
  */
  readonly vendor?: string;
  /**
  * Unique storage identifier. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#wwn DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#wwn}
  */
  readonly wwn?: string;
  /**
  * Unique vendor storage identifier. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#wwn_vendor_extension DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#wwn_vendor_extension}
  */
  readonly wwnVendorExtension?: string;
  /**
  * Unique storage identifier with the vendor extension appended. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#wwn_with_extension DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#wwn_with_extension}
  */
  readonly wwnWithExtension?: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    hctl: cdktf.stringToTerraform(struct!.hctl),
    min_size_gigabytes: cdktf.numberToTerraform(struct!.minSizeGigabytes),
    model: cdktf.stringToTerraform(struct!.model),
    rotational: cdktf.booleanToTerraform(struct!.rotational),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    wwn: cdktf.stringToTerraform(struct!.wwn),
    wwn_vendor_extension: cdktf.stringToTerraform(struct!.wwnVendorExtension),
    wwn_with_extension: cdktf.stringToTerraform(struct!.wwnWithExtension),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hctl: {
      value: cdktf.stringToHclTerraform(struct!.hctl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_gigabytes: {
      value: cdktf.numberToHclTerraform(struct!.minSizeGigabytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotational: {
      value: cdktf.booleanToHclTerraform(struct!.rotational),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn: {
      value: cdktf.stringToHclTerraform(struct!.wwn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn_vendor_extension: {
      value: cdktf.stringToHclTerraform(struct!.wwnVendorExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn_with_extension: {
      value: cdktf.stringToHclTerraform(struct!.wwnWithExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._hctl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hctl = this._hctl;
    }
    if (this._minSizeGigabytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeGigabytes = this._minSizeGigabytes;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._rotational !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotational = this._rotational;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._wwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwn = this._wwn;
    }
    if (this._wwnVendorExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnVendorExtension = this._wwnVendorExtension;
    }
    if (this._wwnWithExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnWithExtension = this._wwnWithExtension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._hctl = undefined;
      this._minSizeGigabytes = undefined;
      this._model = undefined;
      this._rotational = undefined;
      this._serialNumber = undefined;
      this._vendor = undefined;
      this._wwn = undefined;
      this._wwnVendorExtension = undefined;
      this._wwnWithExtension = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._hctl = value.hctl;
      this._minSizeGigabytes = value.minSizeGigabytes;
      this._model = value.model;
      this._rotational = value.rotational;
      this._serialNumber = value.serialNumber;
      this._vendor = value.vendor;
      this._wwn = value.wwn;
      this._wwnVendorExtension = value.wwnVendorExtension;
      this._wwnWithExtension = value.wwnWithExtension;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // hctl - computed: false, optional: true, required: false
  private _hctl?: string; 
  public get hctl() {
    return this.getStringAttribute('hctl');
  }
  public set hctl(value: string) {
    this._hctl = value;
  }
  public resetHctl() {
    this._hctl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hctlInput() {
    return this._hctl;
  }

  // min_size_gigabytes - computed: false, optional: true, required: false
  private _minSizeGigabytes?: number; 
  public get minSizeGigabytes() {
    return this.getNumberAttribute('min_size_gigabytes');
  }
  public set minSizeGigabytes(value: number) {
    this._minSizeGigabytes = value;
  }
  public resetMinSizeGigabytes() {
    this._minSizeGigabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeGigabytesInput() {
    return this._minSizeGigabytes;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // rotational - computed: false, optional: true, required: false
  private _rotational?: boolean | cdktf.IResolvable; 
  public get rotational() {
    return this.getBooleanAttribute('rotational');
  }
  public set rotational(value: boolean | cdktf.IResolvable) {
    this._rotational = value;
  }
  public resetRotational() {
    this._rotational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationalInput() {
    return this._rotational;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // wwn - computed: false, optional: true, required: false
  private _wwn?: string; 
  public get wwn() {
    return this.getStringAttribute('wwn');
  }
  public set wwn(value: string) {
    this._wwn = value;
  }
  public resetWwn() {
    this._wwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnInput() {
    return this._wwn;
  }

  // wwn_vendor_extension - computed: false, optional: true, required: false
  private _wwnVendorExtension?: string; 
  public get wwnVendorExtension() {
    return this.getStringAttribute('wwn_vendor_extension');
  }
  public set wwnVendorExtension(value: string) {
    this._wwnVendorExtension = value;
  }
  public resetWwnVendorExtension() {
    this._wwnVendorExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnVendorExtensionInput() {
    return this._wwnVendorExtension;
  }

  // wwn_with_extension - computed: false, optional: true, required: false
  private _wwnWithExtension?: string; 
  public get wwnWithExtension() {
    return this.getStringAttribute('wwn_with_extension');
  }
  public set wwnWithExtension(value: string) {
    this._wwnWithExtension = value;
  }
  public resetWwnWithExtension() {
    this._wwnWithExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnWithExtensionInput() {
    return this._wwnWithExtension;
  }
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksOutputReference {
    return new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumes {
  /**
  * RAID level for the logical disk. The following levels are supported: 0, 1 and 1+0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#level DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#level}
  */
  readonly level: string;
  /**
  * A list of device hints, the number of items should be greater than or equal to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#physical_disks DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#physical_disks}
  */
  readonly physicalDisks?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisks[] | cdktf.IResolvable;
  /**
  * Size of the logical disk to be created in GiB. If unspecified or set be 0, the maximum capacity of disk will be used for logical disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#size_gibibytes DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#size_gibibytes}
  */
  readonly sizeGibibytes?: number;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    physical_disks: cdktf.listMapper(dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksToTerraform, false)(struct!.physicalDisks),
    size_gibibytes: cdktf.numberToTerraform(struct!.sizeGibibytes),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumes | cdktf.IResolvable): any {
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
    physical_disks: {
      value: cdktf.listMapperHcl(dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksToHclTerraform, false)(struct!.physicalDisks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksList",
    },
    size_gibibytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeGibibytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._physicalDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalDisks = this._physicalDisks?.internalValue;
    }
    if (this._sizeGibibytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGibibytes = this._sizeGibibytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._physicalDisks.internalValue = undefined;
      this._sizeGibibytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._physicalDisks.internalValue = value.physicalDisks;
      this._sizeGibibytes = value.sizeGibibytes;
    }
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // physical_disks - computed: false, optional: true, required: false
  private _physicalDisks = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisksList(this, "physical_disks", false);
  public get physicalDisks() {
    return this._physicalDisks;
  }
  public putPhysicalDisks(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesPhysicalDisks[] | cdktf.IResolvable) {
    this._physicalDisks.internalValue = value;
  }
  public resetPhysicalDisks() {
    this._physicalDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalDisksInput() {
    return this._physicalDisks.internalValue;
  }

  // size_gibibytes - computed: false, optional: true, required: false
  private _sizeGibibytes?: number; 
  public get sizeGibibytes() {
    return this.getNumberAttribute('size_gibibytes');
  }
  public set sizeGibibytes(value: number) {
    this._sizeGibibytes = value;
  }
  public resetSizeGibibytes() {
    this._sizeGibibytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGibibytesInput() {
    return this._sizeGibibytes;
  }
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesOutputReference {
    return new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaid {
  /**
  * The list of logical disks for hardware RAID, if rootDeviceHints isn't used, first volume is root volume. You can set the value of this field to '[]' to clear all the hardware RAID configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#hardware_raid_volumes DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#hardware_raid_volumes}
  */
  readonly hardwareRaidVolumes?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumes[] | cdktf.IResolvable;
  /**
  * The list of logical disks for software RAID, if rootDeviceHints isn't used, first volume is root volume. If HardwareRAIDVolumes is set this item will be invalid. The number of created Software RAID devices must be 1 or 2. If there is only one Software RAID device, it has to be a RAID-1. If there are two, the first one has to be a RAID-1, while the RAID level for the second one can be 0, 1, or 1+0. As the first RAID device will be the deployment device, enforcing a RAID-1 reduces the risk of ending up with a non-booting node in case of a disk failure. Software RAID will always be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#software_raid_volumes DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#software_raid_volumes}
  */
  readonly softwareRaidVolumes?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumes[] | cdktf.IResolvable;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_raid_volumes: cdktf.listMapper(dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesToTerraform, false)(struct!.hardwareRaidVolumes),
    software_raid_volumes: cdktf.listMapper(dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesToTerraform, false)(struct!.softwareRaidVolumes),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_raid_volumes: {
      value: cdktf.listMapperHcl(dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesToHclTerraform, false)(struct!.hardwareRaidVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesList",
    },
    software_raid_volumes: {
      value: cdktf.listMapperHcl(dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesToHclTerraform, false)(struct!.softwareRaidVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareRaidVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareRaidVolumes = this._hardwareRaidVolumes?.internalValue;
    }
    if (this._softwareRaidVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareRaidVolumes = this._softwareRaidVolumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardwareRaidVolumes.internalValue = undefined;
      this._softwareRaidVolumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardwareRaidVolumes.internalValue = value.hardwareRaidVolumes;
      this._softwareRaidVolumes.internalValue = value.softwareRaidVolumes;
    }
  }

  // hardware_raid_volumes - computed: false, optional: true, required: false
  private _hardwareRaidVolumes = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumesList(this, "hardware_raid_volumes", false);
  public get hardwareRaidVolumes() {
    return this._hardwareRaidVolumes;
  }
  public putHardwareRaidVolumes(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidHardwareRaidVolumes[] | cdktf.IResolvable) {
    this._hardwareRaidVolumes.internalValue = value;
  }
  public resetHardwareRaidVolumes() {
    this._hardwareRaidVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareRaidVolumesInput() {
    return this._hardwareRaidVolumes.internalValue;
  }

  // software_raid_volumes - computed: false, optional: true, required: false
  private _softwareRaidVolumes = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumesList(this, "software_raid_volumes", false);
  public get softwareRaidVolumes() {
    return this._softwareRaidVolumes;
  }
  public putSoftwareRaidVolumes(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidSoftwareRaidVolumes[] | cdktf.IResolvable) {
    this._softwareRaidVolumes.internalValue = value;
  }
  public resetSoftwareRaidVolumes() {
    this._softwareRaidVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareRaidVolumesInput() {
    return this._softwareRaidVolumes.internalValue;
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHints {
  /**
  * A Linux device name like '/dev/vda', or a by-path link to it like '/dev/disk/by-path/pci-0000:01:00.0-scsi-0:2:0:0'. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#device_name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#device_name}
  */
  readonly deviceName?: string;
  /**
  * A SCSI bus address like 0:0:0:0. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#hctl DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#hctl}
  */
  readonly hctl?: string;
  /**
  * The minimum size of the device in Gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#min_size_gigabytes DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#min_size_gigabytes}
  */
  readonly minSizeGigabytes?: number;
  /**
  * A vendor-specific device identifier. The hint can be a substring of the actual value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#model DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#model}
  */
  readonly model?: string;
  /**
  * True if the device should use spinning media, false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#rotational DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#rotational}
  */
  readonly rotational?: boolean | cdktf.IResolvable;
  /**
  * Device serial number. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#serial_number DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The name of the vendor or manufacturer of the device. The hint can be a substring of the actual value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#vendor DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#vendor}
  */
  readonly vendor?: string;
  /**
  * Unique storage identifier. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#wwn DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#wwn}
  */
  readonly wwn?: string;
  /**
  * Unique vendor storage identifier. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#wwn_vendor_extension DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#wwn_vendor_extension}
  */
  readonly wwnVendorExtension?: string;
  /**
  * Unique storage identifier with the vendor extension appended. The hint must match the actual value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#wwn_with_extension DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#wwn_with_extension}
  */
  readonly wwnWithExtension?: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHintsToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    hctl: cdktf.stringToTerraform(struct!.hctl),
    min_size_gigabytes: cdktf.numberToTerraform(struct!.minSizeGigabytes),
    model: cdktf.stringToTerraform(struct!.model),
    rotational: cdktf.booleanToTerraform(struct!.rotational),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    wwn: cdktf.stringToTerraform(struct!.wwn),
    wwn_vendor_extension: cdktf.stringToTerraform(struct!.wwnVendorExtension),
    wwn_with_extension: cdktf.stringToTerraform(struct!.wwnWithExtension),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHintsToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hctl: {
      value: cdktf.stringToHclTerraform(struct!.hctl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_gigabytes: {
      value: cdktf.numberToHclTerraform(struct!.minSizeGigabytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotational: {
      value: cdktf.booleanToHclTerraform(struct!.rotational),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn: {
      value: cdktf.stringToHclTerraform(struct!.wwn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn_vendor_extension: {
      value: cdktf.stringToHclTerraform(struct!.wwnVendorExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwn_with_extension: {
      value: cdktf.stringToHclTerraform(struct!.wwnWithExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._hctl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hctl = this._hctl;
    }
    if (this._minSizeGigabytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeGigabytes = this._minSizeGigabytes;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._rotational !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotational = this._rotational;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._wwn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwn = this._wwn;
    }
    if (this._wwnVendorExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnVendorExtension = this._wwnVendorExtension;
    }
    if (this._wwnWithExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnWithExtension = this._wwnWithExtension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._hctl = undefined;
      this._minSizeGigabytes = undefined;
      this._model = undefined;
      this._rotational = undefined;
      this._serialNumber = undefined;
      this._vendor = undefined;
      this._wwn = undefined;
      this._wwnVendorExtension = undefined;
      this._wwnWithExtension = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._hctl = value.hctl;
      this._minSizeGigabytes = value.minSizeGigabytes;
      this._model = value.model;
      this._rotational = value.rotational;
      this._serialNumber = value.serialNumber;
      this._vendor = value.vendor;
      this._wwn = value.wwn;
      this._wwnVendorExtension = value.wwnVendorExtension;
      this._wwnWithExtension = value.wwnWithExtension;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // hctl - computed: false, optional: true, required: false
  private _hctl?: string; 
  public get hctl() {
    return this.getStringAttribute('hctl');
  }
  public set hctl(value: string) {
    this._hctl = value;
  }
  public resetHctl() {
    this._hctl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hctlInput() {
    return this._hctl;
  }

  // min_size_gigabytes - computed: false, optional: true, required: false
  private _minSizeGigabytes?: number; 
  public get minSizeGigabytes() {
    return this.getNumberAttribute('min_size_gigabytes');
  }
  public set minSizeGigabytes(value: number) {
    this._minSizeGigabytes = value;
  }
  public resetMinSizeGigabytes() {
    this._minSizeGigabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeGigabytesInput() {
    return this._minSizeGigabytes;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // rotational - computed: false, optional: true, required: false
  private _rotational?: boolean | cdktf.IResolvable; 
  public get rotational() {
    return this.getBooleanAttribute('rotational');
  }
  public set rotational(value: boolean | cdktf.IResolvable) {
    this._rotational = value;
  }
  public resetRotational() {
    this._rotational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationalInput() {
    return this._rotational;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // wwn - computed: false, optional: true, required: false
  private _wwn?: string; 
  public get wwn() {
    return this.getStringAttribute('wwn');
  }
  public set wwn(value: string) {
    this._wwn = value;
  }
  public resetWwn() {
    this._wwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnInput() {
    return this._wwn;
  }

  // wwn_vendor_extension - computed: false, optional: true, required: false
  private _wwnVendorExtension?: string; 
  public get wwnVendorExtension() {
    return this.getStringAttribute('wwn_vendor_extension');
  }
  public set wwnVendorExtension(value: string) {
    this._wwnVendorExtension = value;
  }
  public resetWwnVendorExtension() {
    this._wwnVendorExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnVendorExtensionInput() {
    return this._wwnVendorExtension;
  }

  // wwn_with_extension - computed: false, optional: true, required: false
  private _wwnWithExtension?: string; 
  public get wwnWithExtension() {
    return this.getStringAttribute('wwn_with_extension');
  }
  public set wwnWithExtension(value: string) {
    this._wwnWithExtension = value;
  }
  public resetWwnWithExtension() {
    this._wwnWithExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnWithExtensionInput() {
    return this._wwnWithExtension;
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#effect DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#key DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#time_added DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#value DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsOutputReference {
    return new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserData {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#namespace DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserDataToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserDataToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserData | cdktf.IResolvable): any {
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

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpec {
  /**
  * CPU architecture of the host, e.g. 'x86_64' or 'aarch64'. If unset, eventually populated by inspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#architecture DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#architecture}
  */
  readonly architecture?: string;
  /**
  * When set to disabled, automated cleaning will be skipped during provisioning and deprovisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#automated_cleaning_mode DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#automated_cleaning_mode}
  */
  readonly automatedCleaningMode?: string;
  /**
  * How do we connect to the BMC (Baseboard Management Controller) on the host?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#bmc DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#bmc}
  */
  readonly bmc?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmc;
  /**
  * The MAC address of the NIC used for provisioning the host. In case of network boot, this is the MAC address of the PXE booting interface. The MAC address of the BMC must never be used here!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#boot_mac_address DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#boot_mac_address}
  */
  readonly bootMacAddress?: string;
  /**
  * Select the method of initializing the hardware during boot. Defaults to UEFI. Legacy boot should only be used for hardware that does not support UEFI correctly. Set to UEFISecureBoot to turn secure boot on automatically after provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#boot_mode DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#boot_mode}
  */
  readonly bootMode?: string;
  /**
  * ConsumerRef can be used to store information about something that is using a host. When it is not empty, the host is considered 'in use'. The common use case is a link to a Machine resource when the host is used by Cluster API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#consumer_ref DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#consumer_ref}
  */
  readonly consumerRef?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRef;
  /**
  * A custom deploy procedure. This is an advanced feature that allows using a custom deploy step provided by a site-specific deployment ramdisk. Most users will want to use 'image' instead. Settings this field triggers provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#custom_deploy DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#custom_deploy}
  */
  readonly customDeploy?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeploy;
  /**
  * Description is a human-entered text used to help identify the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#description DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * ExternallyProvisioned means something else has provisioned the image running on the host, and the operator should only manage the power status. This field is used for integration with already provisioned hosts and when pivoting hosts between clusters. If unsure, leave this field as false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#externally_provisioned DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#externally_provisioned}
  */
  readonly externallyProvisioned?: boolean | cdktf.IResolvable;
  /**
  * Firmware (BIOS) configuration for bare metal server. If set, the requested settings will be applied before the host is provisioned. Only some vendor drivers support this field. An alternative is to use HostFirmwareSettings resources that allow changing arbitrary values and support the generic Redfish-based drivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#firmware DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#firmware}
  */
  readonly firmware?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmware;
  /**
  * What is the name of the hardware profile for this host? Hardware profiles are deprecated and should not be used. Use the separate fields Architecture and RootDeviceHints instead. Set to 'empty' to prepare for the future version of the API without hardware profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#hardware_profile DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#hardware_profile}
  */
  readonly hardwareProfile?: string;
  /**
  * Image holds the details of the image to be provisioned. Populating the image will cause the host to start provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#image DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImage;
  /**
  * MetaData holds the reference to the Secret containing host metadata which is passed to the Config Drive. By default, the operater will generate metadata for the host, so most users do not need to set this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#meta_data DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#meta_data}
  */
  readonly metaData?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaData;
  /**
  * NetworkData holds the reference to the Secret containing network configuration which is passed to the Config Drive and interpreted by the first boot software such as cloud-init.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#network_data DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#network_data}
  */
  readonly networkData?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkData;
  /**
  * Should the host be powered on? Changing this value will trigger a change in power state of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#online DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#online}
  */
  readonly online: boolean | cdktf.IResolvable;
  /**
  * PreprovisioningNetworkDataName is the name of the Secret in the local namespace containing network configuration which is passed to the preprovisioning image, and to the Config Drive if not overridden by specifying NetworkData.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#preprovisioning_network_data_name DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#preprovisioning_network_data_name}
  */
  readonly preprovisioningNetworkDataName?: string;
  /**
  * RAID configuration for bare metal server. If set, the RAID settings will be applied before the host is provisioned. If not, the current settings will not be modified. Only one of the sub-fields hardwareRAIDVolumes and softwareRAIDVolumes can be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#raid DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#raid}
  */
  readonly raid?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaid;
  /**
  * Provide guidance about how to choose the device for the image being provisioned. The default is currently to use /dev/sda as the root device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#root_device_hints DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#root_device_hints}
  */
  readonly rootDeviceHints?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHints;
  /**
  * Taints is the full, authoritative list of taints to apply to the corresponding Machine. This list will overwrite any modifications made to the Machine on an ongoing basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#taints DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#taints}
  */
  readonly taints?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable;
  /**
  * UserData holds the reference to the Secret containing the user data which is passed to the Config Drive and interpreted by the first-boot software such as cloud-init. The format of user data is specific to the first-boot software.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#user_data DataK8SMetal3IoBareMetalHostV1Alpha1Manifest#user_data}
  */
  readonly userData?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserData;
}

export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    automated_cleaning_mode: cdktf.stringToTerraform(struct!.automatedCleaningMode),
    bmc: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmcToTerraform(struct!.bmc),
    boot_mac_address: cdktf.stringToTerraform(struct!.bootMacAddress),
    boot_mode: cdktf.stringToTerraform(struct!.bootMode),
    consumer_ref: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRefToTerraform(struct!.consumerRef),
    custom_deploy: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeployToTerraform(struct!.customDeploy),
    description: cdktf.stringToTerraform(struct!.description),
    externally_provisioned: cdktf.booleanToTerraform(struct!.externallyProvisioned),
    firmware: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmwareToTerraform(struct!.firmware),
    hardware_profile: cdktf.stringToTerraform(struct!.hardwareProfile),
    image: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    meta_data: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaDataToTerraform(struct!.metaData),
    network_data: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkDataToTerraform(struct!.networkData),
    online: cdktf.booleanToTerraform(struct!.online),
    preprovisioning_network_data_name: cdktf.stringToTerraform(struct!.preprovisioningNetworkDataName),
    raid: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidToTerraform(struct!.raid),
    root_device_hints: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHintsToTerraform(struct!.rootDeviceHints),
    taints: cdktf.listMapper(dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsToTerraform, false)(struct!.taints),
    user_data: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserDataToTerraform(struct!.userData),
  }
}


export function dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architecture: {
      value: cdktf.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automated_cleaning_mode: {
      value: cdktf.stringToHclTerraform(struct!.automatedCleaningMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bmc: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmcToHclTerraform(struct!.bmc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmc",
    },
    boot_mac_address: {
      value: cdktf.stringToHclTerraform(struct!.bootMacAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_mode: {
      value: cdktf.stringToHclTerraform(struct!.bootMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_ref: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRefToHclTerraform(struct!.consumerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRef",
    },
    custom_deploy: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeployToHclTerraform(struct!.customDeploy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeploy",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    externally_provisioned: {
      value: cdktf.booleanToHclTerraform(struct!.externallyProvisioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firmware: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmwareToHclTerraform(struct!.firmware),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmware",
    },
    hardware_profile: {
      value: cdktf.stringToHclTerraform(struct!.hardwareProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImage",
    },
    meta_data: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaDataToHclTerraform(struct!.metaData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaData",
    },
    network_data: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkDataToHclTerraform(struct!.networkData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkData",
    },
    online: {
      value: cdktf.booleanToHclTerraform(struct!.online),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preprovisioning_network_data_name: {
      value: cdktf.stringToHclTerraform(struct!.preprovisioningNetworkDataName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raid: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidToHclTerraform(struct!.raid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaid",
    },
    root_device_hints: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHintsToHclTerraform(struct!.rootDeviceHints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHints",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsList",
    },
    user_data: {
      value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserDataToHclTerraform(struct!.userData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._automatedCleaningMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedCleaningMode = this._automatedCleaningMode;
    }
    if (this._bmc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmc = this._bmc?.internalValue;
    }
    if (this._bootMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootMacAddress = this._bootMacAddress;
    }
    if (this._bootMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootMode = this._bootMode;
    }
    if (this._consumerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerRef = this._consumerRef?.internalValue;
    }
    if (this._customDeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDeploy = this._customDeploy?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externallyProvisioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.externallyProvisioned = this._externallyProvisioned;
    }
    if (this._firmware?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware?.internalValue;
    }
    if (this._hardwareProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareProfile = this._hardwareProfile;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    if (this._networkData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkData = this._networkData?.internalValue;
    }
    if (this._online !== undefined) {
      hasAnyValues = true;
      internalValueResult.online = this._online;
    }
    if (this._preprovisioningNetworkDataName !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprovisioningNetworkDataName = this._preprovisioningNetworkDataName;
    }
    if (this._raid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raid = this._raid?.internalValue;
    }
    if (this._rootDeviceHints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDeviceHints = this._rootDeviceHints?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._userData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture = undefined;
      this._automatedCleaningMode = undefined;
      this._bmc.internalValue = undefined;
      this._bootMacAddress = undefined;
      this._bootMode = undefined;
      this._consumerRef.internalValue = undefined;
      this._customDeploy.internalValue = undefined;
      this._description = undefined;
      this._externallyProvisioned = undefined;
      this._firmware.internalValue = undefined;
      this._hardwareProfile = undefined;
      this._image.internalValue = undefined;
      this._metaData.internalValue = undefined;
      this._networkData.internalValue = undefined;
      this._online = undefined;
      this._preprovisioningNetworkDataName = undefined;
      this._raid.internalValue = undefined;
      this._rootDeviceHints.internalValue = undefined;
      this._taints.internalValue = undefined;
      this._userData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture = value.architecture;
      this._automatedCleaningMode = value.automatedCleaningMode;
      this._bmc.internalValue = value.bmc;
      this._bootMacAddress = value.bootMacAddress;
      this._bootMode = value.bootMode;
      this._consumerRef.internalValue = value.consumerRef;
      this._customDeploy.internalValue = value.customDeploy;
      this._description = value.description;
      this._externallyProvisioned = value.externallyProvisioned;
      this._firmware.internalValue = value.firmware;
      this._hardwareProfile = value.hardwareProfile;
      this._image.internalValue = value.image;
      this._metaData.internalValue = value.metaData;
      this._networkData.internalValue = value.networkData;
      this._online = value.online;
      this._preprovisioningNetworkDataName = value.preprovisioningNetworkDataName;
      this._raid.internalValue = value.raid;
      this._rootDeviceHints.internalValue = value.rootDeviceHints;
      this._taints.internalValue = value.taints;
      this._userData.internalValue = value.userData;
    }
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // automated_cleaning_mode - computed: false, optional: true, required: false
  private _automatedCleaningMode?: string; 
  public get automatedCleaningMode() {
    return this.getStringAttribute('automated_cleaning_mode');
  }
  public set automatedCleaningMode(value: string) {
    this._automatedCleaningMode = value;
  }
  public resetAutomatedCleaningMode() {
    this._automatedCleaningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCleaningModeInput() {
    return this._automatedCleaningMode;
  }

  // bmc - computed: false, optional: true, required: false
  private _bmc = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmcOutputReference(this, "bmc");
  public get bmc() {
    return this._bmc;
  }
  public putBmc(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecBmc) {
    this._bmc.internalValue = value;
  }
  public resetBmc() {
    this._bmc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcInput() {
    return this._bmc.internalValue;
  }

  // boot_mac_address - computed: false, optional: true, required: false
  private _bootMacAddress?: string; 
  public get bootMacAddress() {
    return this.getStringAttribute('boot_mac_address');
  }
  public set bootMacAddress(value: string) {
    this._bootMacAddress = value;
  }
  public resetBootMacAddress() {
    this._bootMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootMacAddressInput() {
    return this._bootMacAddress;
  }

  // boot_mode - computed: false, optional: true, required: false
  private _bootMode?: string; 
  public get bootMode() {
    return this.getStringAttribute('boot_mode');
  }
  public set bootMode(value: string) {
    this._bootMode = value;
  }
  public resetBootMode() {
    this._bootMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootModeInput() {
    return this._bootMode;
  }

  // consumer_ref - computed: false, optional: true, required: false
  private _consumerRef = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRefOutputReference(this, "consumer_ref");
  public get consumerRef() {
    return this._consumerRef;
  }
  public putConsumerRef(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecConsumerRef) {
    this._consumerRef.internalValue = value;
  }
  public resetConsumerRef() {
    this._consumerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerRefInput() {
    return this._consumerRef.internalValue;
  }

  // custom_deploy - computed: false, optional: true, required: false
  private _customDeploy = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeployOutputReference(this, "custom_deploy");
  public get customDeploy() {
    return this._customDeploy;
  }
  public putCustomDeploy(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecCustomDeploy) {
    this._customDeploy.internalValue = value;
  }
  public resetCustomDeploy() {
    this._customDeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDeployInput() {
    return this._customDeploy.internalValue;
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

  // externally_provisioned - computed: false, optional: true, required: false
  private _externallyProvisioned?: boolean | cdktf.IResolvable; 
  public get externallyProvisioned() {
    return this.getBooleanAttribute('externally_provisioned');
  }
  public set externallyProvisioned(value: boolean | cdktf.IResolvable) {
    this._externallyProvisioned = value;
  }
  public resetExternallyProvisioned() {
    this._externallyProvisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externallyProvisionedInput() {
    return this._externallyProvisioned;
  }

  // firmware - computed: false, optional: true, required: false
  private _firmware = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmwareOutputReference(this, "firmware");
  public get firmware() {
    return this._firmware;
  }
  public putFirmware(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecFirmware) {
    this._firmware.internalValue = value;
  }
  public resetFirmware() {
    this._firmware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware.internalValue;
  }

  // hardware_profile - computed: false, optional: true, required: false
  private _hardwareProfile?: string; 
  public get hardwareProfile() {
    return this.getStringAttribute('hardware_profile');
  }
  public set hardwareProfile(value: string) {
    this._hardwareProfile = value;
  }
  public resetHardwareProfile() {
    this._hardwareProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareProfileInput() {
    return this._hardwareProfile;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaDataOutputReference(this, "meta_data");
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecMetaData) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }

  // network_data - computed: false, optional: true, required: false
  private _networkData = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkDataOutputReference(this, "network_data");
  public get networkData() {
    return this._networkData;
  }
  public putNetworkData(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecNetworkData) {
    this._networkData.internalValue = value;
  }
  public resetNetworkData() {
    this._networkData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataInput() {
    return this._networkData.internalValue;
  }

  // online - computed: false, optional: false, required: true
  private _online?: boolean | cdktf.IResolvable; 
  public get online() {
    return this.getBooleanAttribute('online');
  }
  public set online(value: boolean | cdktf.IResolvable) {
    this._online = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineInput() {
    return this._online;
  }

  // preprovisioning_network_data_name - computed: false, optional: true, required: false
  private _preprovisioningNetworkDataName?: string; 
  public get preprovisioningNetworkDataName() {
    return this.getStringAttribute('preprovisioning_network_data_name');
  }
  public set preprovisioningNetworkDataName(value: string) {
    this._preprovisioningNetworkDataName = value;
  }
  public resetPreprovisioningNetworkDataName() {
    this._preprovisioningNetworkDataName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprovisioningNetworkDataNameInput() {
    return this._preprovisioningNetworkDataName;
  }

  // raid - computed: false, optional: true, required: false
  private _raid = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaidOutputReference(this, "raid");
  public get raid() {
    return this._raid;
  }
  public putRaid(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRaid) {
    this._raid.internalValue = value;
  }
  public resetRaid() {
    this._raid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidInput() {
    return this._raid.internalValue;
  }

  // root_device_hints - computed: false, optional: true, required: false
  private _rootDeviceHints = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHintsOutputReference(this, "root_device_hints");
  public get rootDeviceHints() {
    return this._rootDeviceHints;
  }
  public putRootDeviceHints(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecRootDeviceHints) {
    this._rootDeviceHints.internalValue = value;
  }
  public resetRootDeviceHints() {
    this._rootDeviceHints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceHintsInput() {
    return this._rootDeviceHints.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserDataOutputReference(this, "user_data");
  public get userData() {
    return this._userData;
  }
  public putUserData(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecUserData) {
    this._userData.internalValue = value;
  }
  public resetUserData() {
    this._userData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest k8s_metal3_io_bare_metal_host_v1alpha1_manifest}
*/
export class DataK8SMetal3IoBareMetalHostV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_metal3_io_bare_metal_host_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMetal3IoBareMetalHostV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMetal3IoBareMetalHostV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMetal3IoBareMetalHostV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMetal3IoBareMetalHostV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_metal3_io_bare_metal_host_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/metal3_io_bare_metal_host_v1alpha1_manifest k8s_metal3_io_bare_metal_host_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMetal3IoBareMetalHostV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_metal3_io_bare_metal_host_v1alpha1_manifest',
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
  private _metadata = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetal3IoBareMetalHostV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
