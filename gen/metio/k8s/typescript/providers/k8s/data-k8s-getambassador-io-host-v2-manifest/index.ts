// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoHostV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#metadata DataK8SGetambassadorIoHostV2Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoHostV2ManifestMetadata;
  /**
  * HostSpec defines the desired state of Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#spec DataK8SGetambassadorIoHostV2Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoHostV2ManifestSpec;
}
export interface DataK8SGetambassadorIoHostV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#annotations DataK8SGetambassadorIoHostV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#labels DataK8SGetambassadorIoHostV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#name DataK8SGetambassadorIoHostV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#namespace DataK8SGetambassadorIoHostV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoHostV2ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoHostV2ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecret {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#name DataK8SGetambassadorIoHostV2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecretToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecretToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecret | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV2ManifestSpecAcmeProvider {
  /**
  * Specifies who to talk ACME with to get certs. Defaults to Let's Encrypt; if 'none' (case-insensitive), do not try to do ACME for this Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#authority DataK8SGetambassadorIoHostV2Manifest#authority}
  */
  readonly authority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#email DataK8SGetambassadorIoHostV2Manifest#email}
  */
  readonly email?: string;
  /**
  * Specifies the Kubernetes Secret to use to store the private key of the ACME account (essentially, where to store the auto-generated password for the auto-created ACME account). You should not normally need to set this--the default value is based on a combination of the ACME authority being registered wit and the email address associated with the account. Note that this is a native-Kubernetes-style core.v1.LocalObjectReference, not an Ambassador-style '{name}.{namespace}' string. Because we're opinionated, it does not support referencing a Secret in another namespace (because most native Kubernetes resources don't support that), but if we ever abandon that opinion and decide to support non-local references it, it would be by adding a 'namespace:' field by changing it from a core.v1.LocalObjectReference to a core.v1.SecretReference, not by adopting the '{name}.{namespace}' notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#private_key_secret DataK8SGetambassadorIoHostV2Manifest#private_key_secret}
  */
  readonly privateKeySecret?: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecret;
  /**
  * This is normally set automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#registration DataK8SGetambassadorIoHostV2Manifest#registration}
  */
  readonly registration?: string;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    email: cdktf.stringToTerraform(struct!.email),
    private_key_secret: dataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecretToTerraform(struct!.privateKeySecret),
    registration: cdktf.stringToTerraform(struct!.registration),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProvider | cdktf.IResolvable): any {
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
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_secret: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecretToHclTerraform(struct!.privateKeySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecret",
    },
    registration: {
      value: cdktf.stringToHclTerraform(struct!.registration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecAcmeProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._privateKeySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeySecret = this._privateKeySecret?.internalValue;
    }
    if (this._registration !== undefined) {
      hasAnyValues = true;
      internalValueResult.registration = this._registration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._email = undefined;
      this._privateKeySecret.internalValue = undefined;
      this._registration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._email = value.email;
      this._privateKeySecret.internalValue = value.privateKeySecret;
      this._registration = value.registration;
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // private_key_secret - computed: false, optional: true, required: false
  private _privateKeySecret = new DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecretOutputReference(this, "private_key_secret");
  public get privateKeySecret() {
    return this._privateKeySecret;
  }
  public putPrivateKeySecret(value: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderPrivateKeySecret) {
    this._privateKeySecret.internalValue = value;
  }
  public resetPrivateKeySecret() {
    this._privateKeySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeySecretInput() {
    return this._privateKeySecret.internalValue;
  }

  // registration - computed: false, optional: true, required: false
  private _registration?: string; 
  public get registration() {
    return this.getStringAttribute('registration');
  }
  public set registration(value: string) {
    this._registration = value;
  }
  public resetRegistration() {
    this._registration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationInput() {
    return this._registration;
  }
}
export interface DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrl {
  /**
  * Is the Preview URL feature enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#enabled DataK8SGetambassadorIoHostV2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * What type of Preview URL is allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#type DataK8SGetambassadorIoHostV2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecPreviewUrlToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecPreviewUrlToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrl | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._type = value.type;
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
}
export interface DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#action DataK8SGetambassadorIoHostV2Manifest#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#additional_port DataK8SGetambassadorIoHostV2Manifest#additional_port}
  */
  readonly additionalPort?: number;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecureToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    additional_port: cdktf.numberToTerraform(struct!.additionalPort),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecureToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_port: {
      value: cdktf.numberToHclTerraform(struct!.additionalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._additionalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPort = this._additionalPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._additionalPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._additionalPort = value.additionalPort;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // additional_port - computed: false, optional: true, required: false
  private _additionalPort?: number; 
  public get additionalPort() {
    return this.getNumberAttribute('additional_port');
  }
  public set additionalPort(value: number) {
    this._additionalPort = value;
  }
  public resetAdditionalPort() {
    this._additionalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPortInput() {
    return this._additionalPort;
  }
}
export interface DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#insecure DataK8SGetambassadorIoHostV2Manifest#insecure}
  */
  readonly insecure?: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecure;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: dataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecureToTerraform(struct!.insecure),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecureToHclTerraform(struct!.insecure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecure.internalValue = value.insecure;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure = new DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecureOutputReference(this, "insecure");
  public get insecure() {
    return this._insecure;
  }
  public putInsecure(value: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyInsecure) {
    this._insecure.internalValue = value;
  }
  public resetInsecure() {
    this._insecure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure.internalValue;
  }
}
export interface DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#key DataK8SGetambassadorIoHostV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#operator DataK8SGetambassadorIoHostV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#values DataK8SGetambassadorIoHostV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoHostV2ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#match_expressions DataK8SGetambassadorIoHostV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#match_labels DataK8SGetambassadorIoHostV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGetambassadorIoHostV2ManifestSpecSelectorToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecSelectorToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsList",
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

export class DataK8SGetambassadorIoHostV2ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGetambassadorIoHostV2ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SGetambassadorIoHostV2ManifestSpecTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#alpn_protocols DataK8SGetambassadorIoHostV2Manifest#alpn_protocols}
  */
  readonly alpnProtocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#ca_secret DataK8SGetambassadorIoHostV2Manifest#ca_secret}
  */
  readonly caSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#cacert_chain_file DataK8SGetambassadorIoHostV2Manifest#cacert_chain_file}
  */
  readonly cacertChainFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#cert_chain_file DataK8SGetambassadorIoHostV2Manifest#cert_chain_file}
  */
  readonly certChainFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#cert_required DataK8SGetambassadorIoHostV2Manifest#cert_required}
  */
  readonly certRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#cipher_suites DataK8SGetambassadorIoHostV2Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#ecdh_curves DataK8SGetambassadorIoHostV2Manifest#ecdh_curves}
  */
  readonly ecdhCurves?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#max_tls_version DataK8SGetambassadorIoHostV2Manifest#max_tls_version}
  */
  readonly maxTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#min_tls_version DataK8SGetambassadorIoHostV2Manifest#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#private_key_file DataK8SGetambassadorIoHostV2Manifest#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#redirect_cleartext_from DataK8SGetambassadorIoHostV2Manifest#redirect_cleartext_from}
  */
  readonly redirectCleartextFrom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#sni DataK8SGetambassadorIoHostV2Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#v3_crl_secret DataK8SGetambassadorIoHostV2Manifest#v3_crl_secret}
  */
  readonly v3CrlSecret?: string;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecTlsToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alpn_protocols: cdktf.stringToTerraform(struct!.alpnProtocols),
    ca_secret: cdktf.stringToTerraform(struct!.caSecret),
    cacert_chain_file: cdktf.stringToTerraform(struct!.cacertChainFile),
    cert_chain_file: cdktf.stringToTerraform(struct!.certChainFile),
    cert_required: cdktf.booleanToTerraform(struct!.certRequired),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    ecdh_curves: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ecdhCurves),
    max_tls_version: cdktf.stringToTerraform(struct!.maxTlsVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    private_key_file: cdktf.stringToTerraform(struct!.privateKeyFile),
    redirect_cleartext_from: cdktf.numberToTerraform(struct!.redirectCleartextFrom),
    sni: cdktf.stringToTerraform(struct!.sni),
    v3_crl_secret: cdktf.stringToTerraform(struct!.v3CrlSecret),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecTlsToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alpn_protocols: {
      value: cdktf.stringToHclTerraform(struct!.alpnProtocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_secret: {
      value: cdktf.stringToHclTerraform(struct!.caSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cacert_chain_file: {
      value: cdktf.stringToHclTerraform(struct!.cacertChainFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_chain_file: {
      value: cdktf.stringToHclTerraform(struct!.certChainFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_required: {
      value: cdktf.booleanToHclTerraform(struct!.certRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ecdh_curves: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ecdhCurves),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.maxTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_file: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_cleartext_from: {
      value: cdktf.numberToHclTerraform(struct!.redirectCleartextFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_crl_secret: {
      value: cdktf.stringToHclTerraform(struct!.v3CrlSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoHostV2ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alpnProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.alpnProtocols = this._alpnProtocols;
    }
    if (this._caSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecret = this._caSecret;
    }
    if (this._cacertChainFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertChainFile = this._cacertChainFile;
    }
    if (this._certChainFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certChainFile = this._certChainFile;
    }
    if (this._certRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.certRequired = this._certRequired;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._ecdhCurves !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecdhCurves = this._ecdhCurves;
    }
    if (this._maxTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTlsVersion = this._maxTlsVersion;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    if (this._redirectCleartextFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectCleartextFrom = this._redirectCleartextFrom;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._v3CrlSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3CrlSecret = this._v3CrlSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alpnProtocols = undefined;
      this._caSecret = undefined;
      this._cacertChainFile = undefined;
      this._certChainFile = undefined;
      this._certRequired = undefined;
      this._cipherSuites = undefined;
      this._ecdhCurves = undefined;
      this._maxTlsVersion = undefined;
      this._minTlsVersion = undefined;
      this._privateKeyFile = undefined;
      this._redirectCleartextFrom = undefined;
      this._sni = undefined;
      this._v3CrlSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alpnProtocols = value.alpnProtocols;
      this._caSecret = value.caSecret;
      this._cacertChainFile = value.cacertChainFile;
      this._certChainFile = value.certChainFile;
      this._certRequired = value.certRequired;
      this._cipherSuites = value.cipherSuites;
      this._ecdhCurves = value.ecdhCurves;
      this._maxTlsVersion = value.maxTlsVersion;
      this._minTlsVersion = value.minTlsVersion;
      this._privateKeyFile = value.privateKeyFile;
      this._redirectCleartextFrom = value.redirectCleartextFrom;
      this._sni = value.sni;
      this._v3CrlSecret = value.v3CrlSecret;
    }
  }

  // alpn_protocols - computed: false, optional: true, required: false
  private _alpnProtocols?: string; 
  public get alpnProtocols() {
    return this.getStringAttribute('alpn_protocols');
  }
  public set alpnProtocols(value: string) {
    this._alpnProtocols = value;
  }
  public resetAlpnProtocols() {
    this._alpnProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnProtocolsInput() {
    return this._alpnProtocols;
  }

  // ca_secret - computed: false, optional: true, required: false
  private _caSecret?: string; 
  public get caSecret() {
    return this.getStringAttribute('ca_secret');
  }
  public set caSecret(value: string) {
    this._caSecret = value;
  }
  public resetCaSecret() {
    this._caSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretInput() {
    return this._caSecret;
  }

  // cacert_chain_file - computed: false, optional: true, required: false
  private _cacertChainFile?: string; 
  public get cacertChainFile() {
    return this.getStringAttribute('cacert_chain_file');
  }
  public set cacertChainFile(value: string) {
    this._cacertChainFile = value;
  }
  public resetCacertChainFile() {
    this._cacertChainFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertChainFileInput() {
    return this._cacertChainFile;
  }

  // cert_chain_file - computed: false, optional: true, required: false
  private _certChainFile?: string; 
  public get certChainFile() {
    return this.getStringAttribute('cert_chain_file');
  }
  public set certChainFile(value: string) {
    this._certChainFile = value;
  }
  public resetCertChainFile() {
    this._certChainFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certChainFileInput() {
    return this._certChainFile;
  }

  // cert_required - computed: false, optional: true, required: false
  private _certRequired?: boolean | cdktf.IResolvable; 
  public get certRequired() {
    return this.getBooleanAttribute('cert_required');
  }
  public set certRequired(value: boolean | cdktf.IResolvable) {
    this._certRequired = value;
  }
  public resetCertRequired() {
    this._certRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certRequiredInput() {
    return this._certRequired;
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // ecdh_curves - computed: false, optional: true, required: false
  private _ecdhCurves?: string[]; 
  public get ecdhCurves() {
    return this.getListAttribute('ecdh_curves');
  }
  public set ecdhCurves(value: string[]) {
    this._ecdhCurves = value;
  }
  public resetEcdhCurves() {
    this._ecdhCurves = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdhCurvesInput() {
    return this._ecdhCurves;
  }

  // max_tls_version - computed: false, optional: true, required: false
  private _maxTlsVersion?: string; 
  public get maxTlsVersion() {
    return this.getStringAttribute('max_tls_version');
  }
  public set maxTlsVersion(value: string) {
    this._maxTlsVersion = value;
  }
  public resetMaxTlsVersion() {
    this._maxTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTlsVersionInput() {
    return this._maxTlsVersion;
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // redirect_cleartext_from - computed: false, optional: true, required: false
  private _redirectCleartextFrom?: number; 
  public get redirectCleartextFrom() {
    return this.getNumberAttribute('redirect_cleartext_from');
  }
  public set redirectCleartextFrom(value: number) {
    this._redirectCleartextFrom = value;
  }
  public resetRedirectCleartextFrom() {
    this._redirectCleartextFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectCleartextFromInput() {
    return this._redirectCleartextFrom;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // v3_crl_secret - computed: false, optional: true, required: false
  private _v3CrlSecret?: string; 
  public get v3CrlSecret() {
    return this.getStringAttribute('v3_crl_secret');
  }
  public set v3CrlSecret(value: string) {
    this._v3CrlSecret = value;
  }
  public resetV3CrlSecret() {
    this._v3CrlSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3CrlSecretInput() {
    return this._v3CrlSecret;
  }
}
export interface DataK8SGetambassadorIoHostV2ManifestSpecTlsContext {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#name DataK8SGetambassadorIoHostV2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecTlsContextToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecTlsContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecTlsContextToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecTlsContext | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV2ManifestSpecTlsContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecTlsContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecTlsContext | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV2ManifestSpecTlsSecret {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#name DataK8SGetambassadorIoHostV2Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#namespace DataK8SGetambassadorIoHostV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecTlsSecretToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecTlsSecretToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpecTlsSecret | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV2ManifestSpecTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpecTlsSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpecTlsSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV2ManifestSpec {
  /**
  * Specifies whether/who to talk ACME with to automatically manage the $tlsSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#acme_provider DataK8SGetambassadorIoHostV2Manifest#acme_provider}
  */
  readonly acmeProvider?: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProvider;
  /**
  * Common to all Ambassador objects (and optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#ambassador_id DataK8SGetambassadorIoHostV2Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Hostname by which the Ambassador can be reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#hostname DataK8SGetambassadorIoHostV2Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Configuration for the Preview URL feature of Service Preview. Defaults to preview URLs not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#preview_url DataK8SGetambassadorIoHostV2Manifest#preview_url}
  */
  readonly previewUrl?: DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrl;
  /**
  * Request policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#request_policy DataK8SGetambassadorIoHostV2Manifest#request_policy}
  */
  readonly requestPolicy?: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicy;
  /**
  * Selector by which we can find further configuration. Defaults to hostname=$hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#selector DataK8SGetambassadorIoHostV2Manifest#selector}
  */
  readonly selector?: DataK8SGetambassadorIoHostV2ManifestSpecSelector;
  /**
  * TLS configuration. It is not valid to specify both 'tlsContext' and 'tls'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#tls DataK8SGetambassadorIoHostV2Manifest#tls}
  */
  readonly tls?: DataK8SGetambassadorIoHostV2ManifestSpecTls;
  /**
  * Name of the TLSContext the Host resource is linked with. It is not valid to specify both 'tlsContext' and 'tls'. Note that this is a native-Kubernetes-style core.v1.LocalObjectReference, not an Ambassador-style '{name}.{namespace}' string. Because we're opinionated, it does not support referencing a Secret in another namespace (because most native Kubernetes resources don't support that), but if we ever abandon that opinion and decide to support non-local references it, it would be by adding a 'namespace:' field by changing it from a core.v1.LocalObjectReference to a core.v1.SecretReference, not by adopting the '{name}.{namespace}' notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#tls_context DataK8SGetambassadorIoHostV2Manifest#tls_context}
  */
  readonly tlsContext?: DataK8SGetambassadorIoHostV2ManifestSpecTlsContext;
  /**
  * Name of the Kubernetes secret into which to save generated certificates. If ACME is enabled (see $acmeProvider), then the default is $hostname; otherwise the default is ''. If the value is '', then we do not do TLS for this Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#tls_secret DataK8SGetambassadorIoHostV2Manifest#tls_secret}
  */
  readonly tlsSecret?: DataK8SGetambassadorIoHostV2ManifestSpecTlsSecret;
}

export function dataK8SGetambassadorIoHostV2ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acme_provider: dataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderToTerraform(struct!.acmeProvider),
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    preview_url: dataK8SGetambassadorIoHostV2ManifestSpecPreviewUrlToTerraform(struct!.previewUrl),
    request_policy: dataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyToTerraform(struct!.requestPolicy),
    selector: dataK8SGetambassadorIoHostV2ManifestSpecSelectorToTerraform(struct!.selector),
    tls: dataK8SGetambassadorIoHostV2ManifestSpecTlsToTerraform(struct!.tls),
    tls_context: dataK8SGetambassadorIoHostV2ManifestSpecTlsContextToTerraform(struct!.tlsContext),
    tls_secret: dataK8SGetambassadorIoHostV2ManifestSpecTlsSecretToTerraform(struct!.tlsSecret),
  }
}


export function dataK8SGetambassadorIoHostV2ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoHostV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acme_provider: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderToHclTerraform(struct!.acmeProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecAcmeProvider",
    },
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preview_url: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecPreviewUrlToHclTerraform(struct!.previewUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrl",
    },
    request_policy: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyToHclTerraform(struct!.requestPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicy",
    },
    selector: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecSelector",
    },
    tls: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecTls",
    },
    tls_context: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecTlsContextToHclTerraform(struct!.tlsContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecTlsContext",
    },
    tls_secret: {
      value: dataK8SGetambassadorIoHostV2ManifestSpecTlsSecretToHclTerraform(struct!.tlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpecTlsSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoHostV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmeProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmeProvider = this._acmeProvider?.internalValue;
    }
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._previewUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewUrl = this._previewUrl?.internalValue;
    }
    if (this._requestPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPolicy = this._requestPolicy?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._tlsContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsContext = this._tlsContext?.internalValue;
    }
    if (this._tlsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecret = this._tlsSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoHostV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acmeProvider.internalValue = undefined;
      this._ambassadorId = undefined;
      this._hostname = undefined;
      this._previewUrl.internalValue = undefined;
      this._requestPolicy.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._tlsContext.internalValue = undefined;
      this._tlsSecret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acmeProvider.internalValue = value.acmeProvider;
      this._ambassadorId = value.ambassadorId;
      this._hostname = value.hostname;
      this._previewUrl.internalValue = value.previewUrl;
      this._requestPolicy.internalValue = value.requestPolicy;
      this._selector.internalValue = value.selector;
      this._tls.internalValue = value.tls;
      this._tlsContext.internalValue = value.tlsContext;
      this._tlsSecret.internalValue = value.tlsSecret;
    }
  }

  // acme_provider - computed: false, optional: true, required: false
  private _acmeProvider = new DataK8SGetambassadorIoHostV2ManifestSpecAcmeProviderOutputReference(this, "acme_provider");
  public get acmeProvider() {
    return this._acmeProvider;
  }
  public putAcmeProvider(value: DataK8SGetambassadorIoHostV2ManifestSpecAcmeProvider) {
    this._acmeProvider.internalValue = value;
  }
  public resetAcmeProvider() {
    this._acmeProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeProviderInput() {
    return this._acmeProvider.internalValue;
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

  // preview_url - computed: false, optional: true, required: false
  private _previewUrl = new DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrlOutputReference(this, "preview_url");
  public get previewUrl() {
    return this._previewUrl;
  }
  public putPreviewUrl(value: DataK8SGetambassadorIoHostV2ManifestSpecPreviewUrl) {
    this._previewUrl.internalValue = value;
  }
  public resetPreviewUrl() {
    this._previewUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewUrlInput() {
    return this._previewUrl.internalValue;
  }

  // request_policy - computed: false, optional: true, required: false
  private _requestPolicy = new DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicyOutputReference(this, "request_policy");
  public get requestPolicy() {
    return this._requestPolicy;
  }
  public putRequestPolicy(value: DataK8SGetambassadorIoHostV2ManifestSpecRequestPolicy) {
    this._requestPolicy.internalValue = value;
  }
  public resetRequestPolicy() {
    this._requestPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPolicyInput() {
    return this._requestPolicy.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SGetambassadorIoHostV2ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SGetambassadorIoHostV2ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SGetambassadorIoHostV2ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SGetambassadorIoHostV2ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // tls_context - computed: false, optional: true, required: false
  private _tlsContext = new DataK8SGetambassadorIoHostV2ManifestSpecTlsContextOutputReference(this, "tls_context");
  public get tlsContext() {
    return this._tlsContext;
  }
  public putTlsContext(value: DataK8SGetambassadorIoHostV2ManifestSpecTlsContext) {
    this._tlsContext.internalValue = value;
  }
  public resetTlsContext() {
    this._tlsContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsContextInput() {
    return this._tlsContext.internalValue;
  }

  // tls_secret - computed: false, optional: true, required: false
  private _tlsSecret = new DataK8SGetambassadorIoHostV2ManifestSpecTlsSecretOutputReference(this, "tls_secret");
  public get tlsSecret() {
    return this._tlsSecret;
  }
  public putTlsSecret(value: DataK8SGetambassadorIoHostV2ManifestSpecTlsSecret) {
    this._tlsSecret.internalValue = value;
  }
  public resetTlsSecret() {
    this._tlsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretInput() {
    return this._tlsSecret.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest k8s_getambassador_io_host_v2_manifest}
*/
export class DataK8SGetambassadorIoHostV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_host_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoHostV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoHostV2Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoHostV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoHostV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_host_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_host_v2_manifest k8s_getambassador_io_host_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoHostV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoHostV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_host_v2_manifest',
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
  private _metadata = new DataK8SGetambassadorIoHostV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoHostV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoHostV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoHostV2ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoHostV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoHostV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoHostV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoHostV2ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoHostV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoHostV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
