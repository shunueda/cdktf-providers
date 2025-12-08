// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoHostV3Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#metadata DataK8SGetambassadorIoHostV3Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoHostV3Alpha1ManifestMetadata;
  /**
  * HostSpec defines the desired state of Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#spec DataK8SGetambassadorIoHostV3Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpec;
}
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#annotations DataK8SGetambassadorIoHostV3Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#labels DataK8SGetambassadorIoHostV3Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#name DataK8SGetambassadorIoHostV3Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#namespace DataK8SGetambassadorIoHostV3Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoHostV3Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecret {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#name DataK8SGetambassadorIoHostV3Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecretToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecretToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecret | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProvider {
  /**
  * Specifies who to talk ACME with to get certs. Defaults to Let's Encrypt; if 'none' (case-insensitive), do not try to do ACME for this Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#authority DataK8SGetambassadorIoHostV3Alpha1Manifest#authority}
  */
  readonly authority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#email DataK8SGetambassadorIoHostV3Alpha1Manifest#email}
  */
  readonly email?: string;
  /**
  * Specifies the Kubernetes Secret to use to store the private key of the ACME account (essentially, where to store the auto-generated password for the auto-created ACME account). You should not normally need to set this--the default value is based on a combination of the ACME authority being registered wit and the email address associated with the account. Note that this is a native-Kubernetes-style core.v1.LocalObjectReference, not an Ambassador-style '{name}.{namespace}' string. Because we're opinionated, it does not support referencing a Secret in another namespace (because most native Kubernetes resources don't support that), but if we ever abandon that opinion and decide to support non-local references it, it would be by adding a 'namespace:' field by changing it from a core.v1.LocalObjectReference to a core.v1.SecretReference, not by adopting the '{name}.{namespace}' notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#private_key_secret DataK8SGetambassadorIoHostV3Alpha1Manifest#private_key_secret}
  */
  readonly privateKeySecret?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecret;
  /**
  * This is normally set automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#registration DataK8SGetambassadorIoHostV3Alpha1Manifest#registration}
  */
  readonly registration?: string;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    email: cdktf.stringToTerraform(struct!.email),
    private_key_secret: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecretToTerraform(struct!.privateKeySecret),
    registration: cdktf.stringToTerraform(struct!.registration),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProvider | cdktf.IResolvable): any {
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
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecretToHclTerraform(struct!.privateKeySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecret",
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProvider | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProvider | cdktf.IResolvable | undefined) {
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
  private _privateKeySecret = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecretOutputReference(this, "private_key_secret");
  public get privateKeySecret() {
    return this._privateKeySecret;
  }
  public putPrivateKeySecret(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderPrivateKeySecret) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#key DataK8SGetambassadorIoHostV3Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#operator DataK8SGetambassadorIoHostV3Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#values DataK8SGetambassadorIoHostV3Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsOutputReference {
    return new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#match_expressions DataK8SGetambassadorIoHostV3Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#match_labels DataK8SGetambassadorIoHostV3Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsList",
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrl {
  /**
  * Is the Preview URL feature enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#enabled DataK8SGetambassadorIoHostV3Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * What type of Preview URL is allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#type DataK8SGetambassadorIoHostV3Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrlToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrlToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrl | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrl | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#action DataK8SGetambassadorIoHostV3Alpha1Manifest#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#additional_port DataK8SGetambassadorIoHostV3Alpha1Manifest#additional_port}
  */
  readonly additionalPort?: number;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecureToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    additional_port: cdktf.numberToTerraform(struct!.additionalPort),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecureToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecure | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecure | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#insecure DataK8SGetambassadorIoHostV3Alpha1Manifest#insecure}
  */
  readonly insecure?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecure;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecureToTerraform(struct!.insecure),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecureToHclTerraform(struct!.insecure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicy | cdktf.IResolvable | undefined) {
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
  private _insecure = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecureOutputReference(this, "insecure");
  public get insecure() {
    return this._insecure;
  }
  public putInsecure(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyInsecure) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#key DataK8SGetambassadorIoHostV3Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#operator DataK8SGetambassadorIoHostV3Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#values DataK8SGetambassadorIoHostV3Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#match_expressions DataK8SGetambassadorIoHostV3Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#match_labels DataK8SGetambassadorIoHostV3Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsList",
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#alpn_protocols DataK8SGetambassadorIoHostV3Alpha1Manifest#alpn_protocols}
  */
  readonly alpnProtocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#ca_secret DataK8SGetambassadorIoHostV3Alpha1Manifest#ca_secret}
  */
  readonly caSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#cacert_chain_file DataK8SGetambassadorIoHostV3Alpha1Manifest#cacert_chain_file}
  */
  readonly cacertChainFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#cert_chain_file DataK8SGetambassadorIoHostV3Alpha1Manifest#cert_chain_file}
  */
  readonly certChainFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#cert_required DataK8SGetambassadorIoHostV3Alpha1Manifest#cert_required}
  */
  readonly certRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#cipher_suites DataK8SGetambassadorIoHostV3Alpha1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#crl_secret DataK8SGetambassadorIoHostV3Alpha1Manifest#crl_secret}
  */
  readonly crlSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#ecdh_curves DataK8SGetambassadorIoHostV3Alpha1Manifest#ecdh_curves}
  */
  readonly ecdhCurves?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#max_tls_version DataK8SGetambassadorIoHostV3Alpha1Manifest#max_tls_version}
  */
  readonly maxTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#min_tls_version DataK8SGetambassadorIoHostV3Alpha1Manifest#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#private_key_file DataK8SGetambassadorIoHostV3Alpha1Manifest#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#redirect_cleartext_from DataK8SGetambassadorIoHostV3Alpha1Manifest#redirect_cleartext_from}
  */
  readonly redirectCleartextFrom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#sni DataK8SGetambassadorIoHostV3Alpha1Manifest#sni}
  */
  readonly sni?: string;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTls | cdktf.IResolvable): any {
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
    crl_secret: cdktf.stringToTerraform(struct!.crlSecret),
    ecdh_curves: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ecdhCurves),
    max_tls_version: cdktf.stringToTerraform(struct!.maxTlsVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    private_key_file: cdktf.stringToTerraform(struct!.privateKeyFile),
    redirect_cleartext_from: cdktf.numberToTerraform(struct!.redirectCleartextFrom),
    sni: cdktf.stringToTerraform(struct!.sni),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTls | cdktf.IResolvable): any {
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
    crl_secret: {
      value: cdktf.stringToHclTerraform(struct!.crlSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTls | cdktf.IResolvable | undefined {
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
    if (this._crlSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSecret = this._crlSecret;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alpnProtocols = undefined;
      this._caSecret = undefined;
      this._cacertChainFile = undefined;
      this._certChainFile = undefined;
      this._certRequired = undefined;
      this._cipherSuites = undefined;
      this._crlSecret = undefined;
      this._ecdhCurves = undefined;
      this._maxTlsVersion = undefined;
      this._minTlsVersion = undefined;
      this._privateKeyFile = undefined;
      this._redirectCleartextFrom = undefined;
      this._sni = undefined;
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
      this._crlSecret = value.crlSecret;
      this._ecdhCurves = value.ecdhCurves;
      this._maxTlsVersion = value.maxTlsVersion;
      this._minTlsVersion = value.minTlsVersion;
      this._privateKeyFile = value.privateKeyFile;
      this._redirectCleartextFrom = value.redirectCleartextFrom;
      this._sni = value.sni;
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

  // crl_secret - computed: false, optional: true, required: false
  private _crlSecret?: string; 
  public get crlSecret() {
    return this.getStringAttribute('crl_secret');
  }
  public set crlSecret(value: string) {
    this._crlSecret = value;
  }
  public resetCrlSecret() {
    this._crlSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSecretInput() {
    return this._crlSecret;
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
}
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContext {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#name DataK8SGetambassadorIoHostV3Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContextToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContextToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContext | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContext | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecret {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#name DataK8SGetambassadorIoHostV3Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#namespace DataK8SGetambassadorIoHostV3Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecretToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecretToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecret | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoHostV3Alpha1ManifestSpec {
  /**
  * Specifies whether/who to talk ACME with to automatically manage the $tlsSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#acme_provider DataK8SGetambassadorIoHostV3Alpha1Manifest#acme_provider}
  */
  readonly acmeProvider?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProvider;
  /**
  * Common to all Ambassador objects (and optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#ambassador_id DataK8SGetambassadorIoHostV3Alpha1Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Hostname by which the Ambassador can be reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#hostname DataK8SGetambassadorIoHostV3Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Selector for Mappings we'll associate with this Host. At the moment, Selector and MappingSelector are synonyms, but that will change soon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#mapping_selector DataK8SGetambassadorIoHostV3Alpha1Manifest#mapping_selector}
  */
  readonly mappingSelector?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelector;
  /**
  * Configuration for the Preview URL feature of Service Preview. Defaults to preview URLs not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#preview_url DataK8SGetambassadorIoHostV3Alpha1Manifest#preview_url}
  */
  readonly previewUrl?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrl;
  /**
  * Request policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#request_policy DataK8SGetambassadorIoHostV3Alpha1Manifest#request_policy}
  */
  readonly requestPolicy?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicy;
  /**
  * DEPRECATED: Selector by which we can find further configuration. Use MappingSelector instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#selector DataK8SGetambassadorIoHostV3Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelector;
  /**
  * TLS configuration. It is not valid to specify both 'tlsContext' and 'tls'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#tls DataK8SGetambassadorIoHostV3Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTls;
  /**
  * Name of the TLSContext the Host resource is linked with. It is not valid to specify both 'tlsContext' and 'tls'. Note that this is a native-Kubernetes-style core.v1.LocalObjectReference, not an Ambassador-style '{name}.{namespace}' string. Because we're opinionated, it does not support referencing a Secret in another namespace (because most native Kubernetes resources don't support that), but if we ever abandon that opinion and decide to support non-local references it, it would be by adding a 'namespace:' field by changing it from a core.v1.LocalObjectReference to a core.v1.SecretReference, not by adopting the '{name}.{namespace}' notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#tls_context DataK8SGetambassadorIoHostV3Alpha1Manifest#tls_context}
  */
  readonly tlsContext?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContext;
  /**
  * Name of the Kubernetes secret into which to save generated certificates. If ACME is enabled (see $acmeProvider), then the default is $hostname; otherwise the default is ''. If the value is '', then we do not do TLS for this Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#tls_secret DataK8SGetambassadorIoHostV3Alpha1Manifest#tls_secret}
  */
  readonly tlsSecret?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecret;
}

export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acme_provider: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderToTerraform(struct!.acmeProvider),
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    mapping_selector: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorToTerraform(struct!.mappingSelector),
    preview_url: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrlToTerraform(struct!.previewUrl),
    request_policy: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyToTerraform(struct!.requestPolicy),
    selector: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    tls: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsToTerraform(struct!.tls),
    tls_context: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContextToTerraform(struct!.tlsContext),
    tls_secret: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecretToTerraform(struct!.tlsSecret),
  }
}


export function dataK8SGetambassadorIoHostV3Alpha1ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoHostV3Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acme_provider: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderToHclTerraform(struct!.acmeProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProvider",
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
    mapping_selector: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorToHclTerraform(struct!.mappingSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelector",
    },
    preview_url: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrlToHclTerraform(struct!.previewUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrl",
    },
    request_policy: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyToHclTerraform(struct!.requestPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicy",
    },
    selector: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelector",
    },
    tls: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTls",
    },
    tls_context: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContextToHclTerraform(struct!.tlsContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContext",
    },
    tls_secret: {
      value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecretToHclTerraform(struct!.tlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoHostV3Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoHostV3Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._mappingSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingSelector = this._mappingSelector?.internalValue;
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

  public set internalValue(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acmeProvider.internalValue = undefined;
      this._ambassadorId = undefined;
      this._hostname = undefined;
      this._mappingSelector.internalValue = undefined;
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
      this._mappingSelector.internalValue = value.mappingSelector;
      this._previewUrl.internalValue = value.previewUrl;
      this._requestPolicy.internalValue = value.requestPolicy;
      this._selector.internalValue = value.selector;
      this._tls.internalValue = value.tls;
      this._tlsContext.internalValue = value.tlsContext;
      this._tlsSecret.internalValue = value.tlsSecret;
    }
  }

  // acme_provider - computed: false, optional: true, required: false
  private _acmeProvider = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProviderOutputReference(this, "acme_provider");
  public get acmeProvider() {
    return this._acmeProvider;
  }
  public putAcmeProvider(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecAcmeProvider) {
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

  // mapping_selector - computed: false, optional: true, required: false
  private _mappingSelector = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelectorOutputReference(this, "mapping_selector");
  public get mappingSelector() {
    return this._mappingSelector;
  }
  public putMappingSelector(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecMappingSelector) {
    this._mappingSelector.internalValue = value;
  }
  public resetMappingSelector() {
    this._mappingSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingSelectorInput() {
    return this._mappingSelector.internalValue;
  }

  // preview_url - computed: false, optional: true, required: false
  private _previewUrl = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrlOutputReference(this, "preview_url");
  public get previewUrl() {
    return this._previewUrl;
  }
  public putPreviewUrl(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecPreviewUrl) {
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
  private _requestPolicy = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicyOutputReference(this, "request_policy");
  public get requestPolicy() {
    return this._requestPolicy;
  }
  public putRequestPolicy(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecRequestPolicy) {
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
  private _selector = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecSelector) {
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
  private _tls = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTls) {
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
  private _tlsContext = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContextOutputReference(this, "tls_context");
  public get tlsContext() {
    return this._tlsContext;
  }
  public putTlsContext(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsContext) {
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
  private _tlsSecret = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecretOutputReference(this, "tls_secret");
  public get tlsSecret() {
    return this._tlsSecret;
  }
  public putTlsSecret(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpecTlsSecret) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest k8s_getambassador_io_host_v3alpha1_manifest}
*/
export class DataK8SGetambassadorIoHostV3Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_host_v3alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoHostV3Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoHostV3Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoHostV3Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoHostV3Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_host_v3alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/getambassador_io_host_v3alpha1_manifest k8s_getambassador_io_host_v3alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoHostV3Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoHostV3Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_host_v3alpha1_manifest',
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
  private _metadata = new DataK8SGetambassadorIoHostV3Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoHostV3Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoHostV3Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoHostV3Alpha1ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoHostV3Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoHostV3Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoHostV3Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoHostV3Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
