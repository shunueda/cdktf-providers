// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#metadata DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadata;
  /**
  * SecretStoreSpec defines the desired state of SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#spec DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpec;
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#annotations DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#labels DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRef {
  /**
  * Audience specifies the 'aud' claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
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
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuth {
  /**
  * the Akeyless Kubernetes auth-method access-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#access_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#access_id}
  */
  readonly accessId: string;
  /**
  * Kubernetes-auth configuration name in Akeyless-Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#k8s_conf_name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#k8s_conf_name}
  */
  readonly k8SConfName: string;
  /**
  * Optional secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Akeyless. If a name is specified without a key, 'token' is the default. If one is not specified, the one bound to the controller will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRef;
  /**
  * Optional service account field containing the name of a kubernetes ServiceAccount. If the service account is specified, the service account secret token JWT will be used for authenticating with Akeyless. If the service account selector is not supplied, the secretRef will be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account_ref}
  */
  readonly serviceAccountRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    k8s_conf_name: cdktf.stringToTerraform(struct!.k8SConfName),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRefToTerraform(struct!.secretRef),
    service_account_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRefToTerraform(struct!.serviceAccountRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_conf_name: {
      value: cdktf.stringToHclTerraform(struct!.k8SConfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRef",
    },
    service_account_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._k8SConfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SConfName = this._k8SConfName;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId = undefined;
      this._k8SConfName = undefined;
      this._secretRef.internalValue = undefined;
      this._serviceAccountRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId = value.accessId;
      this._k8SConfName = value.k8SConfName;
      this._secretRef.internalValue = value.secretRef;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // k8s_conf_name - computed: false, optional: false, required: true
  private _k8SConfName?: string; 
  public get k8SConfName() {
    return this.getStringAttribute('k8s_conf_name');
  }
  public set k8SConfName(value: string) {
    this._k8SConfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SConfNameInput() {
    return this._k8SConfName;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // service_account_ref - computed: false, optional: true, required: false
  private _serviceAccountRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  public resetServiceAccountRef() {
    this._serviceAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessId {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessIdToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessIdToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessId | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessType {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessType | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParam {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParamToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParamToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParam | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRef {
  /**
  * The SecretAccessID is used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#access_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#access_id}
  */
  readonly accessId?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessId;
  /**
  * A reference to a specific 'key' within a Secret resource, In some instances, 'key' is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#access_type DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#access_type}
  */
  readonly accessType?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessType;
  /**
  * A reference to a specific 'key' within a Secret resource, In some instances, 'key' is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#access_type_param DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#access_type_param}
  */
  readonly accessTypeParam?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParam;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessIdToTerraform(struct!.accessId),
    access_type: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeToTerraform(struct!.accessType),
    access_type_param: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParamToTerraform(struct!.accessTypeParam),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessIdToHclTerraform(struct!.accessId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessId",
    },
    access_type: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeToHclTerraform(struct!.accessType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessType",
    },
    access_type_param: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParamToHclTerraform(struct!.accessTypeParam),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParam",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId?.internalValue;
    }
    if (this._accessType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType?.internalValue;
    }
    if (this._accessTypeParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTypeParam = this._accessTypeParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId.internalValue = undefined;
      this._accessType.internalValue = undefined;
      this._accessTypeParam.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId.internalValue = value.accessId;
      this._accessType.internalValue = value.accessType;
      this._accessTypeParam.internalValue = value.accessTypeParam;
    }
  }

  // access_id - computed: false, optional: true, required: false
  private _accessId = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessIdOutputReference(this, "access_id");
  public get accessId() {
    return this._accessId;
  }
  public putAccessId(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessId) {
    this._accessId.internalValue = value;
  }
  public resetAccessId() {
    this._accessId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId.internalValue;
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeOutputReference(this, "access_type");
  public get accessType() {
    return this._accessType;
  }
  public putAccessType(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessType) {
    this._accessType.internalValue = value;
  }
  public resetAccessType() {
    this._accessType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType.internalValue;
  }

  // access_type_param - computed: false, optional: true, required: false
  private _accessTypeParam = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParamOutputReference(this, "access_type_param");
  public get accessTypeParam() {
    return this._accessTypeParam;
  }
  public putAccessTypeParam(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefAccessTypeParam) {
    this._accessTypeParam.internalValue = value;
  }
  public resetAccessTypeParam() {
    this._accessTypeParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeParamInput() {
    return this._accessTypeParam.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRef {
  /**
  * Kubernetes authenticates with Akeyless by passing the ServiceAccount token stored in the named Secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#kubernetes_auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#kubernetes_auth}
  */
  readonly kubernetesAuth?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuth;
  /**
  * Reference to a Secret that contains the details to authenticate with Akeyless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthToTerraform(struct!.kubernetesAuth),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthToHclTerraform(struct!.kubernetesAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuth",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesAuth = this._kubernetesAuth?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubernetesAuth.internalValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubernetesAuth.internalValue = value.kubernetesAuth;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // kubernetes_auth - computed: false, optional: true, required: false
  private _kubernetesAuth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuthOutputReference(this, "kubernetes_auth");
  public get kubernetesAuth() {
    return this._kubernetesAuth;
  }
  public putKubernetesAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefKubernetesAuth) {
    this._kubernetesAuth.internalValue = value;
  }
  public resetKubernetesAuth() {
    this._kubernetesAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAuthInput() {
    return this._kubernetesAuth.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProvider {
  /**
  * The key the value inside of the provider type to use, only used with 'Secret' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the object located at the provider type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The namespace the Provider type is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of provider to use such as 'Secret', or 'ConfigMap'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#type DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProvider | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeyless {
  /**
  * Akeyless GW API Url from which the secrets to be fetched from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#akeyless_gw_api_url DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#akeyless_gw_api_url}
  */
  readonly akeylessGwApiUrl: string;
  /**
  * Auth configures how the operator authenticates with Akeyless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth_secret_ref}
  */
  readonly authSecretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRef;
  /**
  * PEM/base64 encoded CA bundle used to validate Akeyless Gateway certificate. Only used if the AkeylessGWApiURL URL is using HTTPS protocol. If not set the system root certificates are used to validate the TLS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_bundle DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * The provider for the CA bundle to use to validate Akeyless Gateway certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_provider DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_provider}
  */
  readonly caProvider?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProvider;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeyless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    akeyless_gw_api_url: cdktf.stringToTerraform(struct!.akeylessGwApiUrl),
    auth_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefToTerraform(struct!.authSecretRef),
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    ca_provider: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProviderToTerraform(struct!.caProvider),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeyless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    akeyless_gw_api_url: {
      value: cdktf.stringToHclTerraform(struct!.akeylessGwApiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefToHclTerraform(struct!.authSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRef",
    },
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProviderToHclTerraform(struct!.caProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeyless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._akeylessGwApiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.akeylessGwApiUrl = this._akeylessGwApiUrl;
    }
    if (this._authSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSecretRef = this._authSecretRef?.internalValue;
    }
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._caProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caProvider = this._caProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeyless | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._akeylessGwApiUrl = undefined;
      this._authSecretRef.internalValue = undefined;
      this._caBundle = undefined;
      this._caProvider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._akeylessGwApiUrl = value.akeylessGwApiUrl;
      this._authSecretRef.internalValue = value.authSecretRef;
      this._caBundle = value.caBundle;
      this._caProvider.internalValue = value.caProvider;
    }
  }

  // akeyless_gw_api_url - computed: false, optional: false, required: true
  private _akeylessGwApiUrl?: string; 
  public get akeylessGwApiUrl() {
    return this.getStringAttribute('akeyless_gw_api_url');
  }
  public set akeylessGwApiUrl(value: string) {
    this._akeylessGwApiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get akeylessGwApiUrlInput() {
    return this._akeylessGwApiUrl;
  }

  // auth_secret_ref - computed: false, optional: false, required: true
  private _authSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRefOutputReference(this, "auth_secret_ref");
  public get authSecretRef() {
    return this._authSecretRef;
  }
  public putAuthSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessAuthSecretRef) {
    this._authSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretRefInput() {
    return this._authSecretRef.internalValue;
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // ca_provider - computed: false, optional: true, required: false
  private _caProvider = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProviderOutputReference(this, "ca_provider");
  public get caProvider() {
    return this._caProvider;
  }
  public putCaProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessCaProvider) {
    this._caProvider.internalValue = value;
  }
  public resetCaProvider() {
    this._caProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caProviderInput() {
    return this._caProvider.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#oidc_provider_arn DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#oidc_provider_arn}
  */
  readonly oidcProviderArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#oidc_token_file_path DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#oidc_token_file_path}
  */
  readonly oidcTokenFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#role_arn DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#session_name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#session_name}
  */
  readonly sessionName: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsaToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_provider_arn: cdktf.stringToTerraform(struct!.oidcProviderArn),
    oidc_token_file_path: cdktf.stringToTerraform(struct!.oidcTokenFilePath),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsaToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_provider_arn: {
      value: cdktf.stringToHclTerraform(struct!.oidcProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_token_file_path: {
      value: cdktf.stringToHclTerraform(struct!.oidcTokenFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidcProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcProviderArn = this._oidcProviderArn;
    }
    if (this._oidcTokenFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcTokenFilePath = this._oidcTokenFilePath;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidcProviderArn = undefined;
      this._oidcTokenFilePath = undefined;
      this._roleArn = undefined;
      this._sessionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidcProviderArn = value.oidcProviderArn;
      this._oidcTokenFilePath = value.oidcTokenFilePath;
      this._roleArn = value.roleArn;
      this._sessionName = value.sessionName;
    }
  }

  // oidc_provider_arn - computed: false, optional: false, required: true
  private _oidcProviderArn?: string; 
  public get oidcProviderArn() {
    return this.getStringAttribute('oidc_provider_arn');
  }
  public set oidcProviderArn(value: string) {
    this._oidcProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcProviderArnInput() {
    return this._oidcProviderArn;
  }

  // oidc_token_file_path - computed: false, optional: false, required: true
  private _oidcTokenFilePath?: string; 
  public get oidcTokenFilePath() {
    return this.getStringAttribute('oidc_token_file_path');
  }
  public set oidcTokenFilePath(value: string) {
    this._oidcTokenFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenFilePathInput() {
    return this._oidcTokenFilePath;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // session_name - computed: false, optional: false, required: true
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRef {
  /**
  * The AccessKeyID is used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#access_key_id_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#access_key_id_secret_ref}
  */
  readonly accessKeyIdSecretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRef;
  /**
  * The AccessKeySecret is used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#access_key_secret_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#access_key_secret_secret_ref}
  */
  readonly accessKeySecretSecretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRefToTerraform(struct!.accessKeyIdSecretRef),
    access_key_secret_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRefToTerraform(struct!.accessKeySecretSecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRefToHclTerraform(struct!.accessKeyIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRef",
    },
    access_key_secret_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRefToHclTerraform(struct!.accessKeySecretSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyIdSecretRef = this._accessKeyIdSecretRef?.internalValue;
    }
    if (this._accessKeySecretSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeySecretSecretRef = this._accessKeySecretSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = undefined;
      this._accessKeySecretSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = value.accessKeyIdSecretRef;
      this._accessKeySecretSecretRef.internalValue = value.accessKeySecretSecretRef;
    }
  }

  // access_key_id_secret_ref - computed: false, optional: false, required: true
  private _accessKeyIdSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRefOutputReference(this, "access_key_id_secret_ref");
  public get accessKeyIdSecretRef() {
    return this._accessKeyIdSecretRef;
  }
  public putAccessKeyIdSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeyIdSecretRef) {
    this._accessKeyIdSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdSecretRefInput() {
    return this._accessKeyIdSecretRef.internalValue;
  }

  // access_key_secret_secret_ref - computed: false, optional: false, required: true
  private _accessKeySecretSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRefOutputReference(this, "access_key_secret_secret_ref");
  public get accessKeySecretSecretRef() {
    return this._accessKeySecretSecretRef;
  }
  public putAccessKeySecretSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefAccessKeySecretSecretRef) {
    this._accessKeySecretSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretSecretRefInput() {
    return this._accessKeySecretSecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuth {
  /**
  * Authenticate against Alibaba using RRSA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#rrsa DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#rrsa}
  */
  readonly rrsa?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsa;
  /**
  * AlibabaAuthSecretRef holds secret references for Alibaba credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrsa: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsaToTerraform(struct!.rrsa),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rrsa: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsaToHclTerraform(struct!.rrsa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsa",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rrsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsa = this._rrsa?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rrsa.internalValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rrsa.internalValue = value.rrsa;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // rrsa - computed: false, optional: true, required: false
  private _rrsa = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsaOutputReference(this, "rrsa");
  public get rrsa() {
    return this._rrsa;
  }
  public putRrsa(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthRrsa) {
    this._rrsa.internalValue = value;
  }
  public resetRrsa() {
    this._rrsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsaInput() {
    return this._rrsa.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibaba {
  /**
  * AlibabaAuth contains a secretRef for credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuth;
  /**
  * Alibaba Region to be used for the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#region_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#region_id}
  */
  readonly regionId: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibaba | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthToTerraform(struct!.auth),
    region_id: cdktf.stringToTerraform(struct!.regionId),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibaba | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuth",
    },
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibaba | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibaba | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._regionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._regionId = value.regionId;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRef {
  /**
  * Audience specifies the 'aud' claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
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
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwt {
  /**
  * A reference to a ServiceAccount resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account_ref}
  */
  readonly serviceAccountRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRefToTerraform(struct!.serviceAccountRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
    }
  }

  // service_account_ref - computed: false, optional: true, required: false
  private _serviceAccountRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  public resetServiceAccountRef() {
    this._serviceAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRef {
  /**
  * The AccessKeyID is used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#access_key_id_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#access_key_id_secret_ref}
  */
  readonly accessKeyIdSecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRef;
  /**
  * The SecretAccessKey is used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_access_key_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_access_key_secret_ref}
  */
  readonly secretAccessKeySecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRefToTerraform(struct!.accessKeyIdSecretRef),
    secret_access_key_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRefToTerraform(struct!.secretAccessKeySecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRefToHclTerraform(struct!.accessKeyIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRef",
    },
    secret_access_key_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRefToHclTerraform(struct!.secretAccessKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyIdSecretRef = this._accessKeyIdSecretRef?.internalValue;
    }
    if (this._secretAccessKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecretRef = this._secretAccessKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = undefined;
      this._secretAccessKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = value.accessKeyIdSecretRef;
      this._secretAccessKeySecretRef.internalValue = value.secretAccessKeySecretRef;
    }
  }

  // access_key_id_secret_ref - computed: false, optional: true, required: false
  private _accessKeyIdSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRefOutputReference(this, "access_key_id_secret_ref");
  public get accessKeyIdSecretRef() {
    return this._accessKeyIdSecretRef;
  }
  public putAccessKeyIdSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefAccessKeyIdSecretRef) {
    this._accessKeyIdSecretRef.internalValue = value;
  }
  public resetAccessKeyIdSecretRef() {
    this._accessKeyIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdSecretRefInput() {
    return this._accessKeyIdSecretRef.internalValue;
  }

  // secret_access_key_secret_ref - computed: false, optional: true, required: false
  private _secretAccessKeySecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRefOutputReference(this, "secret_access_key_secret_ref");
  public get secretAccessKeySecretRef() {
    return this._secretAccessKeySecretRef;
  }
  public putSecretAccessKeySecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefSecretAccessKeySecretRef) {
    this._secretAccessKeySecretRef.internalValue = value;
  }
  public resetSecretAccessKeySecretRef() {
    this._secretAccessKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretRefInput() {
    return this._secretAccessKeySecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuth {
  /**
  * Authenticate against AWS using service account tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#jwt DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#jwt}
  */
  readonly jwt?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwt;
  /**
  * AWSAuthSecretRef holds secret references for AWS credentials both AccessKeyID and SecretAccessKey must be defined in order to properly authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwt: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtToTerraform(struct!.jwt),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwt: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwt",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jwt.internalValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jwt.internalValue = value.jwt;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthJwt) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAws {
  /**
  * Auth defines the information necessary to authenticate against AWS if not set aws sdk will infer credentials from your environment see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuth;
  /**
  * AWS Region to be used for the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#region DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#region}
  */
  readonly region: string;
  /**
  * Role is a Role ARN which the SecretManager provider will assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#role DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Service defines which service should be used to fetch the secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service}
  */
  readonly service: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthToTerraform(struct!.auth),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuth",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._region = undefined;
      this._role = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._region = value.region;
      this._role = value.role;
      this._service = value.service;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientId {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientIdToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientIdToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientId | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecret {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecretToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecretToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecret | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRef {
  /**
  * The Azure clientId of the service principle used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#client_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#client_id}
  */
  readonly clientId?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientId;
  /**
  * The Azure ClientSecret of the service principle used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#client_secret DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecret;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientIdToTerraform(struct!.clientId),
    client_secret: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecretToTerraform(struct!.clientSecret),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientId",
    },
    client_secret: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId?.internalValue;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId.internalValue = undefined;
      this._clientSecret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId.internalValue = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientId) {
    this._clientId.internalValue = value;
  }
  public resetClientId() {
    this._clientId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRef {
  /**
  * Audience specifies the 'aud' claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
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
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekv {
  /**
  * Auth configures how the operator authenticates with Azure. Required for ServicePrincipal auth type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth_secret_ref}
  */
  readonly authSecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRef;
  /**
  * Auth type defines how to authenticate to the keyvault service. Valid values are: - 'ServicePrincipal' (default): Using a service principal (tenantId, clientId, clientSecret) - 'ManagedIdentity': Using Managed Identity assigned to the pod (see aad-pod-identity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth_type DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth_type}
  */
  readonly authType?: string;
  /**
  * If multiple Managed Identity is assigned to the pod, you can select the one to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#identity_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#identity_id}
  */
  readonly identityId?: string;
  /**
  * ServiceAccountRef specified the service account that should be used when authenticating with WorkloadIdentity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account_ref}
  */
  readonly serviceAccountRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRef;
  /**
  * TenantID configures the Azure Tenant to send requests to. Required for ServicePrincipal auth type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#tenant_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Vault Url from which the secrets to be fetched from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#vault_url DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#vault_url}
  */
  readonly vaultUrl: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefToTerraform(struct!.authSecretRef),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    service_account_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRefToTerraform(struct!.serviceAccountRef),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    vault_url: cdktf.stringToTerraform(struct!.vaultUrl),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefToHclTerraform(struct!.authSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRef",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRef",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_url: {
      value: cdktf.stringToHclTerraform(struct!.vaultUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSecretRef = this._authSecretRef?.internalValue;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._vaultUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultUrl = this._vaultUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authSecretRef.internalValue = undefined;
      this._authType = undefined;
      this._identityId = undefined;
      this._serviceAccountRef.internalValue = undefined;
      this._tenantId = undefined;
      this._vaultUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authSecretRef.internalValue = value.authSecretRef;
      this._authType = value.authType;
      this._identityId = value.identityId;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
      this._tenantId = value.tenantId;
      this._vaultUrl = value.vaultUrl;
    }
  }

  // auth_secret_ref - computed: false, optional: true, required: false
  private _authSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRefOutputReference(this, "auth_secret_ref");
  public get authSecretRef() {
    return this._authSecretRef;
  }
  public putAuthSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvAuthSecretRef) {
    this._authSecretRef.internalValue = value;
  }
  public resetAuthSecretRef() {
    this._authSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretRefInput() {
    return this._authSecretRef.internalValue;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // service_account_ref - computed: false, optional: true, required: false
  private _serviceAccountRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  public resetServiceAccountRef() {
    this._serviceAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vault_url - computed: false, optional: false, required: true
  private _vaultUrl?: string; 
  public get vaultUrl() {
    return this.getStringAttribute('vault_url');
  }
  public set vaultUrl(value: string) {
    this._vaultUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUrlInput() {
    return this._vaultUrl;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#value DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#value_map DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#value_map}
  */
  readonly valueMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#version DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valueMap),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeData | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valueMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMap = this._valueMap;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueMap = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._valueMap = value.valueMap;
      this._version = value.version;
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

  // value_map - computed: false, optional: true, required: false
  private _valueMap?: { [key: string]: string }; 
  public get valueMap() {
    return this.getStringMapAttribute('value_map');
  }
  public set valueMap(value: { [key: string]: string }) {
    this._valueMap = value;
  }
  public resetValueMap() {
    this._valueMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataOutputReference {
    return new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFake {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#data DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#data}
  */
  readonly data: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeData[] | cdktf.IResolvable;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataToTerraform, false)(struct!.data),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFake | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFake | cdktf.IResolvable | undefined) {
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

  // data - computed: false, optional: false, required: true
  private _data = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRef {
  /**
  * The SecretAccessKey is used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_access_key_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_access_key_secret_ref}
  */
  readonly secretAccessKeySecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_access_key_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRefToTerraform(struct!.secretAccessKeySecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_access_key_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRefToHclTerraform(struct!.secretAccessKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretAccessKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecretRef = this._secretAccessKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretAccessKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretAccessKeySecretRef.internalValue = value.secretAccessKeySecretRef;
    }
  }

  // secret_access_key_secret_ref - computed: false, optional: true, required: false
  private _secretAccessKeySecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRefOutputReference(this, "secret_access_key_secret_ref");
  public get secretAccessKeySecretRef() {
    return this._secretAccessKeySecretRef;
  }
  public putSecretAccessKeySecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefSecretAccessKeySecretRef) {
    this._secretAccessKeySecretRef.internalValue = value;
  }
  public resetSecretAccessKeySecretRef() {
    this._secretAccessKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretRefInput() {
    return this._secretAccessKeySecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRef {
  /**
  * Audience specifies the 'aud' claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
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
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#cluster_location DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#cluster_location}
  */
  readonly clusterLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#cluster_name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#cluster_project_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#cluster_project_id}
  */
  readonly clusterProjectId?: string;
  /**
  * A reference to a ServiceAccount resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account_ref}
  */
  readonly serviceAccountRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_location: cdktf.stringToTerraform(struct!.clusterLocation),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_project_id: cdktf.stringToTerraform(struct!.clusterProjectId),
    service_account_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRefToTerraform(struct!.serviceAccountRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_location: {
      value: cdktf.stringToHclTerraform(struct!.clusterLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_project_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLocation = this._clusterLocation;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterProjectId = this._clusterProjectId;
    }
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterLocation = undefined;
      this._clusterName = undefined;
      this._clusterProjectId = undefined;
      this._serviceAccountRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterLocation = value.clusterLocation;
      this._clusterName = value.clusterName;
      this._clusterProjectId = value.clusterProjectId;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
    }
  }

  // cluster_location - computed: false, optional: false, required: true
  private _clusterLocation?: string; 
  public get clusterLocation() {
    return this.getStringAttribute('cluster_location');
  }
  public set clusterLocation(value: string) {
    this._clusterLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLocationInput() {
    return this._clusterLocation;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_project_id - computed: false, optional: true, required: false
  private _clusterProjectId?: string; 
  public get clusterProjectId() {
    return this.getStringAttribute('cluster_project_id');
  }
  public set clusterProjectId(value: string) {
    this._clusterProjectId = value;
  }
  public resetClusterProjectId() {
    this._clusterProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProjectIdInput() {
    return this._clusterProjectId;
  }

  // service_account_ref - computed: false, optional: false, required: true
  private _serviceAccountRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#workload_identity DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#workload_identity}
  */
  readonly workloadIdentity?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentity;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefToTerraform(struct!.secretRef),
    workload_identity: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityToTerraform(struct!.workloadIdentity),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRef",
    },
    workload_identity: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityToHclTerraform(struct!.workloadIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._workloadIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentity = this._workloadIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._workloadIdentity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._workloadIdentity.internalValue = value.workloadIdentity;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // workload_identity - computed: false, optional: true, required: false
  private _workloadIdentity = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentityOutputReference(this, "workload_identity");
  public get workloadIdentity() {
    return this._workloadIdentity;
  }
  public putWorkloadIdentity(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthWorkloadIdentity) {
    this._workloadIdentity.internalValue = value;
  }
  public resetWorkloadIdentity() {
    this._workloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityInput() {
    return this._workloadIdentity.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsm {
  /**
  * Auth defines the information necessary to authenticate against GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuth;
  /**
  * ProjectID project where secret is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#project_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#project_id}
  */
  readonly projectId?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthToTerraform(struct!.auth),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuth",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._projectId = value.projectId;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessToken {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessTokenToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessTokenToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessToken | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRef {
  /**
  * AccessToken is used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#access_token DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#access_token}
  */
  readonly accessToken?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessToken;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessTokenToTerraform(struct!.accessToken),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = value.accessToken;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefAccessToken) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlab {
  /**
  * Auth configures how secret-manager authenticates with a GitLab instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuth;
  /**
  * ProjectID specifies a project where secrets are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#project_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#project_id}
  */
  readonly projectId?: string;
  /**
  * URL configures the GitLab instance URL. Defaults to https://gitlab.com/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#url DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthToTerraform(struct!.auth),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuth",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._projectId = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._projectId = value.projectId;
      this._url = value.url;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRef {
  /**
  * The SecretAccessKey is used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_api_key_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_api_key_secret_ref}
  */
  readonly secretApiKeySecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_api_key_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRefToTerraform(struct!.secretApiKeySecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_api_key_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRefToHclTerraform(struct!.secretApiKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretApiKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretApiKeySecretRef = this._secretApiKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretApiKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretApiKeySecretRef.internalValue = value.secretApiKeySecretRef;
    }
  }

  // secret_api_key_secret_ref - computed: false, optional: true, required: false
  private _secretApiKeySecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRefOutputReference(this, "secret_api_key_secret_ref");
  public get secretApiKeySecretRef() {
    return this._secretApiKeySecretRef;
  }
  public putSecretApiKeySecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefSecretApiKeySecretRef) {
    this._secretApiKeySecretRef.internalValue = value;
  }
  public resetSecretApiKeySecretRef() {
    this._secretApiKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretApiKeySecretRefInput() {
    return this._secretApiKeySecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbm {
  /**
  * Auth configures how secret-manager authenticates with the IBM secrets manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuth;
  /**
  * ServiceURL is the Endpoint URL that is specific to the Secrets Manager service instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_url DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_url}
  */
  readonly serviceUrl?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthToTerraform(struct!.auth),
    service_url: cdktf.stringToTerraform(struct!.serviceUrl),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuth",
    },
    service_url: {
      value: cdktf.stringToHclTerraform(struct!.serviceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._serviceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUrl = this._serviceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._serviceUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._serviceUrl = value.serviceUrl;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // service_url - computed: false, optional: true, required: false
  private _serviceUrl?: string; 
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string) {
    this._serviceUrl = value;
  }
  public resetServiceUrl() {
    this._serviceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlInput() {
    return this._serviceUrl;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCert {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCertToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCertToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCert | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKey {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKeyToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKeyToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKey | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCert {
  /**
  * A reference to a specific 'key' within a Secret resource, In some instances, 'key' is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#client_cert DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#client_cert}
  */
  readonly clientCert?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCert;
  /**
  * A reference to a specific 'key' within a Secret resource, In some instances, 'key' is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#client_key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#client_key}
  */
  readonly clientKey?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKey;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCertToTerraform(struct!.clientCert),
    client_key: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKeyToTerraform(struct!.clientKey),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cert: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCertToHclTerraform(struct!.clientCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCert",
    },
    client_key: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKeyToHclTerraform(struct!.clientKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert?.internalValue;
    }
    if (this._clientKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCert.internalValue = undefined;
      this._clientKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCert.internalValue = value.clientCert;
      this._clientKey.internalValue = value.clientKey;
    }
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCertOutputReference(this, "client_cert");
  public get clientCert() {
    return this._clientCert;
  }
  public putClientCert(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientCert) {
    this._clientCert.internalValue = value;
  }
  public resetClientCert() {
    this._clientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert.internalValue;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKeyOutputReference(this, "client_key");
  public get clientKey() {
    return this._clientKey;
  }
  public putClientKey(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertClientKey) {
    this._clientKey.internalValue = value;
  }
  public resetClientKey() {
    this._clientKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccount {
  /**
  * Audience specifies the 'aud' claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccountToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccountToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
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
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccount {
  /**
  * A reference to a ServiceAccount resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccount;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccountToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccount.internalValue = value.serviceAccount;
    }
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerToken {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerTokenToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerTokenToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerToken | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToken {
  /**
  * A reference to a specific 'key' within a Secret resource, In some instances, 'key' is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#bearer_token DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#bearer_token}
  */
  readonly bearerToken?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerToken;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerTokenToTerraform(struct!.bearerToken),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerTokenToHclTerraform(struct!.bearerToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearerToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearerToken.internalValue = value.bearerToken;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
  public putBearerToken(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenBearerToken) {
    this._bearerToken.internalValue = value;
  }
  public resetBearerToken() {
    this._bearerToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuth {
  /**
  * has both clientCert and clientKey as secretKeySelector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#cert DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCert;
  /**
  * points to a service account that should be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccount;
  /**
  * use static token to authenticate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#token DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#token}
  */
  readonly token?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToken;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertToTerraform(struct!.cert),
    service_account: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountToTerraform(struct!.serviceAccount),
    token: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenToTerraform(struct!.token),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCert",
    },
    service_account: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccount",
    },
    token: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._token.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert.internalValue = value.cert;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._token.internalValue = value.token;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToken) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProvider {
  /**
  * The key the value inside of the provider type to use, only used with 'Secret' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the object located at the provider type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The namespace the Provider type is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of provider to use such as 'Secret', or 'ConfigMap'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#type DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProvider | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServer {
  /**
  * CABundle is a base64-encoded CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_bundle DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * see: https://external-secrets.io/v0.4.1/spec/#external-secrets.io/v1alpha1.CAProvider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_provider DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_provider}
  */
  readonly caProvider?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProvider;
  /**
  * configures the Kubernetes server Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#url DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    ca_provider: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProviderToTerraform(struct!.caProvider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProviderToHclTerraform(struct!.caProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProvider",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._caProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caProvider = this._caProvider?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundle = undefined;
      this._caProvider.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caBundle = value.caBundle;
      this._caProvider.internalValue = value.caProvider;
      this._url = value.url;
    }
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // ca_provider - computed: false, optional: true, required: false
  private _caProvider = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProviderOutputReference(this, "ca_provider");
  public get caProvider() {
    return this._caProvider;
  }
  public putCaProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerCaProvider) {
    this._caProvider.internalValue = value;
  }
  public resetCaProvider() {
    this._caProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caProviderInput() {
    return this._caProvider.internalValue;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetes {
  /**
  * Auth configures how secret-manager authenticates with a Kubernetes instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuth;
  /**
  * Remote namespace to fetch the secrets from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#remote_namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#remote_namespace}
  */
  readonly remoteNamespace?: string;
  /**
  * configures the Kubernetes server Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#server DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServer;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToTerraform(struct!.auth),
    remote_namespace: cdktf.stringToTerraform(struct!.remoteNamespace),
    server: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerToTerraform(struct!.server),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuth",
    },
    remote_namespace: {
      value: cdktf.stringToHclTerraform(struct!.remoteNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._remoteNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteNamespace = this._remoteNamespace;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._remoteNamespace = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._remoteNamespace = value.remoteNamespace;
      this._server.internalValue = value.server;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // remote_namespace - computed: false, optional: true, required: false
  private _remoteNamespace?: string; 
  public get remoteNamespace() {
    return this.getStringAttribute('remote_namespace');
  }
  public set remoteNamespace(value: string) {
    this._remoteNamespace = value;
  }
  public resetRemoteNamespace() {
    this._remoteNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNamespaceInput() {
    return this._remoteNamespace;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesServer) {
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprint {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprintToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprintToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprint | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekey {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekeyToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekeyToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekey | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRef {
  /**
  * Fingerprint is the fingerprint of the API private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#fingerprint DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#fingerprint}
  */
  readonly fingerprint: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprint;
  /**
  * PrivateKey is the user's API Signing Key in PEM format, used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#privatekey DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#privatekey}
  */
  readonly privatekey: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekey;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprintToTerraform(struct!.fingerprint),
    privatekey: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekeyToTerraform(struct!.privatekey),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprintToHclTerraform(struct!.fingerprint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprint",
    },
    privatekey: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekeyToHclTerraform(struct!.privatekey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint?.internalValue;
    }
    if (this._privatekey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatekey = this._privatekey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprint.internalValue = undefined;
      this._privatekey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fingerprint.internalValue = value.fingerprint;
      this._privatekey.internalValue = value.privatekey;
    }
  }

  // fingerprint - computed: false, optional: false, required: true
  private _fingerprint = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprintOutputReference(this, "fingerprint");
  public get fingerprint() {
    return this._fingerprint;
  }
  public putFingerprint(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefFingerprint) {
    this._fingerprint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint.internalValue;
  }

  // privatekey - computed: false, optional: false, required: true
  private _privatekey = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekeyOutputReference(this, "privatekey");
  public get privatekey() {
    return this._privatekey;
  }
  public putPrivatekey(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefPrivatekey) {
    this._privatekey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privatekeyInput() {
    return this._privatekey.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuth {
  /**
  * SecretRef to pass through sensitive information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRef;
  /**
  * Tenancy is the tenancy OCID where user is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#tenancy DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#tenancy}
  */
  readonly tenancy: string;
  /**
  * User is an access OCID specific to the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#user DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#user}
  */
  readonly user: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefToTerraform(struct!.secretRef),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRef",
    },
    tenancy: {
      value: cdktf.stringToHclTerraform(struct!.tenancy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._tenancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancy = this._tenancy;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._tenancy = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._tenancy = value.tenancy;
      this._user = value.user;
    }
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // tenancy - computed: false, optional: false, required: true
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRef {
  /**
  * Audience specifies the 'aud' claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
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
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracle {
  /**
  * Auth configures how secret-manager authenticates with the Oracle Vault. If empty, instance principal is used. Optionally, the authenticating principal type and/or user data may be supplied for the use of workload identity and user principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuth;
  /**
  * Compartment is the vault compartment OCID. Required for PushSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#compartment DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#compartment}
  */
  readonly compartment?: string;
  /**
  * EncryptionKey is the OCID of the encryption key within the vault. Required for PushSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#encryption_key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * The type of principal to use for authentication. If left blank, the Auth struct will determine the principal type. This optional field must be specified if using workload identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#principal_type DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#principal_type}
  */
  readonly principalType?: string;
  /**
  * Region is the region where vault is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#region DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#region}
  */
  readonly region: string;
  /**
  * ServiceAccountRef specified the service account that should be used when authenticating with WorkloadIdentity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account_ref}
  */
  readonly serviceAccountRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRef;
  /**
  * Vault is the vault's OCID of the specific vault where secret is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#vault DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#vault}
  */
  readonly vault: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthToTerraform(struct!.auth),
    compartment: cdktf.stringToTerraform(struct!.compartment),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    principal_type: cdktf.stringToTerraform(struct!.principalType),
    region: cdktf.stringToTerraform(struct!.region),
    service_account_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRefToTerraform(struct!.serviceAccountRef),
    vault: cdktf.stringToTerraform(struct!.vault),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuth",
    },
    compartment: {
      value: cdktf.stringToHclTerraform(struct!.compartment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktf.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRef",
    },
    vault: {
      value: cdktf.stringToHclTerraform(struct!.vault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._compartment !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartment = this._compartment;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    if (this._vault !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._compartment = undefined;
      this._encryptionKey = undefined;
      this._principalType = undefined;
      this._region = undefined;
      this._serviceAccountRef.internalValue = undefined;
      this._vault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._compartment = value.compartment;
      this._encryptionKey = value.encryptionKey;
      this._principalType = value.principalType;
      this._region = value.region;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
      this._vault = value.vault;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // compartment - computed: false, optional: true, required: false
  private _compartment?: string; 
  public get compartment() {
    return this.getStringAttribute('compartment');
  }
  public set compartment(value: string) {
    this._compartment = value;
  }
  public resetCompartment() {
    this._compartment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentInput() {
    return this._compartment;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // principal_type - computed: false, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
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

  // service_account_ref - computed: false, optional: true, required: false
  private _serviceAccountRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  public resetServiceAccountRef() {
    this._serviceAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }

  // vault - computed: false, optional: false, required: true
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentials {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentialsToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentialsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentials | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRef {
  /**
  * Username / Password is used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#credentials DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentials;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentialsToTerraform(struct!.credentials),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRef | cdktf.IResolvable | undefined) {
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

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepot {
  /**
  * Auth configures how secret-manager authenticates with a Password Depot instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuth;
  /**
  * Database to use as source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#database DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#database}
  */
  readonly database: string;
  /**
  * URL configures the Password Depot instance URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#host DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#host}
  */
  readonly host: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthToTerraform(struct!.auth),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuth",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._database = undefined;
      this._host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._database = value.database;
      this._host = value.host;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRole {
  /**
  * Path where the App Role authentication backend is mounted in Vault, e.g: 'approle'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#path DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * RoleID configured in the App Role authentication backend when setting up the authentication backend in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#role_id DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#role_id}
  */
  readonly roleId: string;
  /**
  * Reference to a key in a Secret that contains the App Role secret used to authenticate with Vault. The 'key' field must be specified and denotes which entry within the Secret resource is used as the app role secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    role_id: cdktf.stringToTerraform(struct!.roleId),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._roleId = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._roleId = value.roleId;
      this._secretRef.internalValue = value.secretRef;
    }
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

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCert {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCertToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCertToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCert | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCert {
  /**
  * ClientCert is a certificate to authenticate using the Cert Vault authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#client_cert DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#client_cert}
  */
  readonly clientCert?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCert;
  /**
  * SecretRef to a key in a Secret resource containing client private key to authenticate with Vault using the Cert authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCertToTerraform(struct!.clientCert),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cert: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCertToHclTerraform(struct!.clientCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCert",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCert.internalValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCert.internalValue = value.clientCert;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCertOutputReference(this, "client_cert");
  public get clientCert() {
    return this._clientCert;
  }
  public putClientCert(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertClientCert) {
    this._clientCert.internalValue = value;
  }
  public resetClientCert() {
    this._clientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRef {
  /**
  * Audience specifies the 'aud' claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
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
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountToken {
  /**
  * Optional audiences field that will be used to request a temporary Kubernetes service account token for the service account referenced by 'serviceAccountRef'. Defaults to a single audience 'vault' it not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * Optional expiration time in seconds that will be used to request a temporary Kubernetes service account token for the service account referenced by 'serviceAccountRef'. Defaults to 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#expiration_seconds DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Service account field containing the name of a kubernetes ServiceAccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account_ref}
  */
  readonly serviceAccountRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    service_account_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRefToTerraform(struct!.serviceAccountRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._expirationSeconds = undefined;
      this._serviceAccountRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._expirationSeconds = value.expirationSeconds;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // service_account_ref - computed: false, optional: false, required: true
  private _serviceAccountRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwt {
  /**
  * Optional ServiceAccountToken specifies the Kubernetes service account for which to request a token for with the 'TokenRequest' API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#kubernetes_service_account_token DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#kubernetes_service_account_token}
  */
  readonly kubernetesServiceAccountToken?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountToken;
  /**
  * Path where the JWT authentication backend is mounted in Vault, e.g: 'jwt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#path DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Role is a JWT role to authenticate using the JWT/OIDC Vault authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#role DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Optional SecretRef that refers to a key in a Secret resource containing JWT token to authenticate with Vault using the JWT/OIDC authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_service_account_token: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenToTerraform(struct!.kubernetesServiceAccountToken),
    path: cdktf.stringToTerraform(struct!.path),
    role: cdktf.stringToTerraform(struct!.role),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_service_account_token: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenToHclTerraform(struct!.kubernetesServiceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountToken",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesServiceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesServiceAccountToken = this._kubernetesServiceAccountToken?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubernetesServiceAccountToken.internalValue = undefined;
      this._path = undefined;
      this._role = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubernetesServiceAccountToken.internalValue = value.kubernetesServiceAccountToken;
      this._path = value.path;
      this._role = value.role;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // kubernetes_service_account_token - computed: false, optional: true, required: false
  private _kubernetesServiceAccountToken = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountTokenOutputReference(this, "kubernetes_service_account_token");
  public get kubernetesServiceAccountToken() {
    return this._kubernetesServiceAccountToken;
  }
  public putKubernetesServiceAccountToken(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtKubernetesServiceAccountToken) {
    this._kubernetesServiceAccountToken.internalValue = value;
  }
  public resetKubernetesServiceAccountToken() {
    this._kubernetesServiceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesServiceAccountTokenInput() {
    return this._kubernetesServiceAccountToken.internalValue;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRef {
  /**
  * Audience specifies the 'aud' claim for the service account token If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity then this audiences will be appended to the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#audiences DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * The name of the ServiceAccount resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
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
      this._audiences = value.audiences;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetes {
  /**
  * Path where the Kubernetes authentication backend is mounted in Vault, e.g: 'kubernetes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#mount_path DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * A required field containing the Vault Role to assume. A Role binds a Kubernetes ServiceAccount with a set of Vault policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#role DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#role}
  */
  readonly role: string;
  /**
  * Optional secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Vault. If a name is specified without a key, 'token' is the default. If one is not specified, the one bound to the controller will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRef;
  /**
  * Optional service account field containing the name of a kubernetes ServiceAccount. If the service account is specified, the service account secret token JWT will be used for authenticating with Vault. If the service account selector is not supplied, the secretRef will be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#service_account_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#service_account_ref}
  */
  readonly serviceAccountRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    role: cdktf.stringToTerraform(struct!.role),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRefToTerraform(struct!.secretRef),
    service_account_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRefToTerraform(struct!.serviceAccountRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRef",
    },
    service_account_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRefToHclTerraform(struct!.serviceAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._serviceAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRef = this._serviceAccountRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._role = undefined;
      this._secretRef.internalValue = undefined;
      this._serviceAccountRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._role = value.role;
      this._secretRef.internalValue = value.secretRef;
      this._serviceAccountRef.internalValue = value.serviceAccountRef;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // service_account_ref - computed: false, optional: true, required: false
  private _serviceAccountRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRefOutputReference(this, "service_account_ref");
  public get serviceAccountRef() {
    return this._serviceAccountRef;
  }
  public putServiceAccountRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesServiceAccountRef) {
    this._serviceAccountRef.internalValue = value;
  }
  public resetServiceAccountRef() {
    this._serviceAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRefInput() {
    return this._serviceAccountRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdap {
  /**
  * Path where the LDAP authentication backend is mounted in Vault, e.g: 'ldap'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#path DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * SecretRef to a key in a Secret resource containing password for the LDAP user used to authenticate with Vault using the LDAP authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRef;
  /**
  * Username is a LDAP user name used to authenticate using the LDAP Vault authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#username DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRefToTerraform(struct!.secretRef),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRef",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._secretRef.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._secretRef.internalValue = value.secretRef;
      this._username = value.username;
    }
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuth {
  /**
  * AppRole authenticates with Vault using the App Role auth mechanism, with the role and secret stored in a Kubernetes Secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#app_role DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#app_role}
  */
  readonly appRole?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRole;
  /**
  * Cert authenticates with TLS Certificates by passing client certificate, private key and ca certificate Cert authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#cert DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCert;
  /**
  * Jwt authenticates with Vault by passing role and JWT token using the JWT/OIDC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#jwt DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#jwt}
  */
  readonly jwt?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwt;
  /**
  * Kubernetes authenticates with Vault by passing the ServiceAccount token stored in the named Secret resource to the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#kubernetes DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetes;
  /**
  * Ldap authenticates with Vault by passing username/password pair using the LDAP authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ldap DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ldap}
  */
  readonly ldap?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdap;
  /**
  * TokenSecretRef authenticates with Vault by presenting a token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#token_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#token_secret_ref}
  */
  readonly tokenSecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_role: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleToTerraform(struct!.appRole),
    cert: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertToTerraform(struct!.cert),
    jwt: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtToTerraform(struct!.jwt),
    kubernetes: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesToTerraform(struct!.kubernetes),
    ldap: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapToTerraform(struct!.ldap),
    token_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRefToTerraform(struct!.tokenSecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_role: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleToHclTerraform(struct!.appRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRole",
    },
    cert: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCert",
    },
    jwt: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwt",
    },
    kubernetes: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetes",
    },
    ldap: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdap",
    },
    token_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRefToHclTerraform(struct!.tokenSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appRole = this._appRole?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._tokenSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretRef = this._tokenSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appRole.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._jwt.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._ldap.internalValue = undefined;
      this._tokenSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appRole.internalValue = value.appRole;
      this._cert.internalValue = value.cert;
      this._jwt.internalValue = value.jwt;
      this._kubernetes.internalValue = value.kubernetes;
      this._ldap.internalValue = value.ldap;
      this._tokenSecretRef.internalValue = value.tokenSecretRef;
    }
  }

  // app_role - computed: false, optional: true, required: false
  private _appRole = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRoleOutputReference(this, "app_role");
  public get appRole() {
    return this._appRole;
  }
  public putAppRole(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthAppRole) {
    this._appRole.internalValue = value;
  }
  public resetAppRole() {
    this._appRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleInput() {
    return this._appRole.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthJwt) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // token_secret_ref - computed: false, optional: true, required: false
  private _tokenSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRefOutputReference(this, "token_secret_ref");
  public get tokenSecretRef() {
    return this._tokenSecretRef;
  }
  public putTokenSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthTokenSecretRef) {
    this._tokenSecretRef.internalValue = value;
  }
  public resetTokenSecretRef() {
    this._tokenSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretRefInput() {
    return this._tokenSecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProvider {
  /**
  * The key the value inside of the provider type to use, only used with 'Secret' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the object located at the provider type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The namespace the Provider type is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of provider to use such as 'Secret', or 'ConfigMap'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#type DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProvider | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVault {
  /**
  * Auth configures how secret-manager authenticates with the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuth;
  /**
  * PEM encoded CA bundle used to validate Vault server certificate. Only used if the Server URL is using HTTPS protocol. This parameter is ignored for plain HTTP protocol connection. If not set the system root certificates are used to validate the TLS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_bundle DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * The provider for the CA bundle to use to validate Vault server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_provider DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_provider}
  */
  readonly caProvider?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProvider;
  /**
  * ForwardInconsistent tells Vault to forward read-after-write requests to the Vault leader instead of simply retrying within a loop. This can increase performance if the option is enabled serverside. https://www.vaultproject.io/docs/configuration/replication#allow_forwarding_via_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#forward_inconsistent DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#forward_inconsistent}
  */
  readonly forwardInconsistent?: boolean | cdktf.IResolvable;
  /**
  * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows Vault environments to support Secure Multi-tenancy. e.g: 'ns1'. More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Path is the mount path of the Vault KV backend endpoint, e.g: 'secret'. The v2 KV secret engine version specific '/data' path suffix for fetching secrets from Vault is optional and will be appended if not present in specified path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#path DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * ReadYourWrites ensures isolated read-after-write semantics by providing discovered cluster replication states in each request. More information about eventual consistency in Vault can be found here https://www.vaultproject.io/docs/enterprise/consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#read_your_writes DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#read_your_writes}
  */
  readonly readYourWrites?: boolean | cdktf.IResolvable;
  /**
  * Server is the connection address for the Vault server, e.g: 'https://vault.example.com:8200'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#server DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#server}
  */
  readonly server: string;
  /**
  * Version is the Vault KV secret engine version. This can be either 'v1' or 'v2'. Version defaults to 'v2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#version DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthToTerraform(struct!.auth),
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    ca_provider: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProviderToTerraform(struct!.caProvider),
    forward_inconsistent: cdktf.booleanToTerraform(struct!.forwardInconsistent),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    read_your_writes: cdktf.booleanToTerraform(struct!.readYourWrites),
    server: cdktf.stringToTerraform(struct!.server),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuth",
    },
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProviderToHclTerraform(struct!.caProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProvider",
    },
    forward_inconsistent: {
      value: cdktf.booleanToHclTerraform(struct!.forwardInconsistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    read_your_writes: {
      value: cdktf.booleanToHclTerraform(struct!.readYourWrites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._caProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caProvider = this._caProvider?.internalValue;
    }
    if (this._forwardInconsistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardInconsistent = this._forwardInconsistent;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readYourWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.readYourWrites = this._readYourWrites;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._caBundle = undefined;
      this._caProvider.internalValue = undefined;
      this._forwardInconsistent = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._readYourWrites = undefined;
      this._server = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._caBundle = value.caBundle;
      this._caProvider.internalValue = value.caProvider;
      this._forwardInconsistent = value.forwardInconsistent;
      this._namespace = value.namespace;
      this._path = value.path;
      this._readYourWrites = value.readYourWrites;
      this._server = value.server;
      this._version = value.version;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // ca_provider - computed: false, optional: true, required: false
  private _caProvider = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProviderOutputReference(this, "ca_provider");
  public get caProvider() {
    return this._caProvider;
  }
  public putCaProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultCaProvider) {
    this._caProvider.internalValue = value;
  }
  public resetCaProvider() {
    this._caProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caProviderInput() {
    return this._caProvider.internalValue;
  }

  // forward_inconsistent - computed: false, optional: true, required: false
  private _forwardInconsistent?: boolean | cdktf.IResolvable; 
  public get forwardInconsistent() {
    return this.getBooleanAttribute('forward_inconsistent');
  }
  public set forwardInconsistent(value: boolean | cdktf.IResolvable) {
    this._forwardInconsistent = value;
  }
  public resetForwardInconsistent() {
    this._forwardInconsistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInconsistentInput() {
    return this._forwardInconsistent;
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

  // read_your_writes - computed: false, optional: true, required: false
  private _readYourWrites?: boolean | cdktf.IResolvable; 
  public get readYourWrites() {
    return this.getBooleanAttribute('read_your_writes');
  }
  public set readYourWrites(value: boolean | cdktf.IResolvable) {
    this._readYourWrites = value;
  }
  public resetReadYourWrites() {
    this._readYourWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readYourWritesInput() {
    return this._readYourWrites;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProvider {
  /**
  * The key the value inside of the provider type to use, only used with 'Secret' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the object located at the provider type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The namespace the Provider type is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of provider to use such as 'Secret', or 'ConfigMap'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#type DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProvider | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResult {
  /**
  * Json path of return value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#json_path DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#json_path}
  */
  readonly jsonPath?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResultToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResultToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPath = value.jsonPath;
    }
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecrets {
  /**
  * Name of this secret in templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Secret ref to fill in credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecrets | cdktf.IResolvable): any {
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
    secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretRef.internalValue = value.secretRef;
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

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsOutputReference {
    return new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhook {
  /**
  * Body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#body DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#body}
  */
  readonly body?: string;
  /**
  * PEM encoded CA bundle used to validate webhook server certificate. Only used if the Server URL is using HTTPS protocol. This parameter is ignored for plain HTTP protocol connection. If not set the system root certificates are used to validate the TLS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_bundle DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * The provider for the CA bundle to use to validate webhook server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_provider DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_provider}
  */
  readonly caProvider?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProvider;
  /**
  * Headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#headers DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Webhook Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#method DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Result formatting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#result DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#result}
  */
  readonly result: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResult;
  /**
  * Secrets to fill in templates These secrets will be passed to the templating function as key value pairs under the given name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#secrets DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#secrets}
  */
  readonly secrets?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecrets[] | cdktf.IResolvable;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#timeout DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Webhook url to call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#url DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    ca_provider: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProviderToTerraform(struct!.caProvider),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    result: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResultToTerraform(struct!.result),
    secrets: cdktf.listMapper(dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsToTerraform, false)(struct!.secrets),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProviderToHclTerraform(struct!.caProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProvider",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResult",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._caProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caProvider = this._caProvider?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._caBundle = undefined;
      this._caProvider.internalValue = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._result.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._caBundle = value.caBundle;
      this._caProvider.internalValue = value.caProvider;
      this._headers = value.headers;
      this._method = value.method;
      this._result.internalValue = value.result;
      this._secrets.internalValue = value.secrets;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // ca_provider - computed: false, optional: true, required: false
  private _caProvider = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProviderOutputReference(this, "ca_provider");
  public get caProvider() {
    return this._caProvider;
  }
  public putCaProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookCaProvider) {
    this._caProvider.internalValue = value;
  }
  public resetCaProvider() {
    this._caProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caProviderInput() {
    return this._caProvider.internalValue;
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

  // result - computed: false, optional: false, required: true
  private _result = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuth {
  /**
  * The authorized key used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#authorized_key_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#authorized_key_secret_ref}
  */
  readonly authorizedKeySecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_key_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefToTerraform(struct!.authorizedKeySecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_key_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefToHclTerraform(struct!.authorizedKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKeySecretRef = this._authorizedKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedKeySecretRef.internalValue = value.authorizedKeySecretRef;
    }
  }

  // authorized_key_secret_ref - computed: false, optional: true, required: false
  private _authorizedKeySecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefOutputReference(this, "authorized_key_secret_ref");
  public get authorizedKeySecretRef() {
    return this._authorizedKeySecretRef;
  }
  public putAuthorizedKeySecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef) {
    this._authorizedKeySecretRef.internalValue = value;
  }
  public resetAuthorizedKeySecretRef() {
    this._authorizedKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeySecretRefInput() {
    return this._authorizedKeySecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProvider {
  /**
  * A reference to a specific 'key' within a Secret resource, In some instances, 'key' is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#cert_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefToTerraform(struct!.certSecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = value.certSecretRef;
    }
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockbox {
  /**
  * Yandex.Cloud API endpoint (e.g. 'api.cloud.yandex.net:443')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#api_endpoint DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * Auth defines the information necessary to authenticate against Yandex Lockbox
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuth;
  /**
  * The provider for the CA bundle to use to validate Yandex.Cloud server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ca_provider DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ca_provider}
  */
  readonly caProvider?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProvider;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthToTerraform(struct!.auth),
    ca_provider: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderToTerraform(struct!.caProvider),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuth",
    },
    ca_provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderToHclTerraform(struct!.caProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockbox | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._caProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caProvider = this._caProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockbox | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiEndpoint = undefined;
      this._auth.internalValue = undefined;
      this._caProvider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiEndpoint = value.apiEndpoint;
      this._auth.internalValue = value.auth;
      this._caProvider.internalValue = value.caProvider;
    }
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // ca_provider - computed: false, optional: true, required: false
  private _caProvider = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProviderOutputReference(this, "ca_provider");
  public get caProvider() {
    return this._caProvider;
  }
  public putCaProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxCaProvider) {
    this._caProvider.internalValue = value;
  }
  public resetCaProvider() {
    this._caProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caProviderInput() {
    return this._caProvider.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProvider {
  /**
  * Akeyless configures this store to sync secrets using Akeyless Vault provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#akeyless DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#akeyless}
  */
  readonly akeyless?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeyless;
  /**
  * Alibaba configures this store to sync secrets using Alibaba Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#alibaba DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#alibaba}
  */
  readonly alibaba?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibaba;
  /**
  * AWS configures this store to sync secrets using AWS Secret Manager provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#aws DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#aws}
  */
  readonly aws?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAws;
  /**
  * AzureKV configures this store to sync secrets using Azure Key Vault provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#azurekv DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#azurekv}
  */
  readonly azurekv?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekv;
  /**
  * Fake configures a store with static key/value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#fake DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#fake}
  */
  readonly fake?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFake;
  /**
  * GCPSM configures this store to sync secrets using Google Cloud Platform Secret Manager provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#gcpsm DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#gcpsm}
  */
  readonly gcpsm?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsm;
  /**
  * GitLab configures this store to sync secrets using GitLab Variables provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#gitlab DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#gitlab}
  */
  readonly gitlab?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlab;
  /**
  * IBM configures this store to sync secrets using IBM Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#ibm DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#ibm}
  */
  readonly ibm?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbm;
  /**
  * Kubernetes configures this store to sync secrets using a Kubernetes cluster provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#kubernetes DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetes;
  /**
  * Oracle configures this store to sync secrets using Oracle Vault provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#oracle DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#oracle}
  */
  readonly oracle?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracle;
  /**
  * Configures a store to sync secrets with a Password Depot instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#passworddepot DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#passworddepot}
  */
  readonly passworddepot?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepot;
  /**
  * Vault configures this store to sync secrets using Hashi provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#vault DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#vault}
  */
  readonly vault?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVault;
  /**
  * Webhook configures this store to sync secrets using a generic templated webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#webhook DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#webhook}
  */
  readonly webhook?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhook;
  /**
  * YandexLockbox configures this store to sync secrets using Yandex Lockbox provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#yandexlockbox DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#yandexlockbox}
  */
  readonly yandexlockbox?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockbox;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    akeyless: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessToTerraform(struct!.akeyless),
    alibaba: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaToTerraform(struct!.alibaba),
    aws: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsToTerraform(struct!.aws),
    azurekv: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvToTerraform(struct!.azurekv),
    fake: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeToTerraform(struct!.fake),
    gcpsm: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmToTerraform(struct!.gcpsm),
    gitlab: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabToTerraform(struct!.gitlab),
    ibm: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmToTerraform(struct!.ibm),
    kubernetes: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesToTerraform(struct!.kubernetes),
    oracle: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleToTerraform(struct!.oracle),
    passworddepot: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotToTerraform(struct!.passworddepot),
    vault: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultToTerraform(struct!.vault),
    webhook: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookToTerraform(struct!.webhook),
    yandexlockbox: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxToTerraform(struct!.yandexlockbox),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    akeyless: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessToHclTerraform(struct!.akeyless),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeyless",
    },
    alibaba: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaToHclTerraform(struct!.alibaba),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibaba",
    },
    aws: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAws",
    },
    azurekv: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvToHclTerraform(struct!.azurekv),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekv",
    },
    fake: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeToHclTerraform(struct!.fake),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFake",
    },
    gcpsm: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmToHclTerraform(struct!.gcpsm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsm",
    },
    gitlab: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlab",
    },
    ibm: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmToHclTerraform(struct!.ibm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbm",
    },
    kubernetes: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetes",
    },
    oracle: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleToHclTerraform(struct!.oracle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracle",
    },
    passworddepot: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotToHclTerraform(struct!.passworddepot),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepot",
    },
    vault: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVault",
    },
    webhook: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhook",
    },
    yandexlockbox: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxToHclTerraform(struct!.yandexlockbox),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockbox",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._akeyless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.akeyless = this._akeyless?.internalValue;
    }
    if (this._alibaba?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alibaba = this._alibaba?.internalValue;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azurekv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurekv = this._azurekv?.internalValue;
    }
    if (this._fake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fake = this._fake?.internalValue;
    }
    if (this._gcpsm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpsm = this._gcpsm?.internalValue;
    }
    if (this._gitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlab = this._gitlab?.internalValue;
    }
    if (this._ibm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibm = this._ibm?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._oracle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracle = this._oracle?.internalValue;
    }
    if (this._passworddepot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passworddepot = this._passworddepot?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    if (this._yandexlockbox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yandexlockbox = this._yandexlockbox?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._akeyless.internalValue = undefined;
      this._alibaba.internalValue = undefined;
      this._aws.internalValue = undefined;
      this._azurekv.internalValue = undefined;
      this._fake.internalValue = undefined;
      this._gcpsm.internalValue = undefined;
      this._gitlab.internalValue = undefined;
      this._ibm.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._oracle.internalValue = undefined;
      this._passworddepot.internalValue = undefined;
      this._vault.internalValue = undefined;
      this._webhook.internalValue = undefined;
      this._yandexlockbox.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._akeyless.internalValue = value.akeyless;
      this._alibaba.internalValue = value.alibaba;
      this._aws.internalValue = value.aws;
      this._azurekv.internalValue = value.azurekv;
      this._fake.internalValue = value.fake;
      this._gcpsm.internalValue = value.gcpsm;
      this._gitlab.internalValue = value.gitlab;
      this._ibm.internalValue = value.ibm;
      this._kubernetes.internalValue = value.kubernetes;
      this._oracle.internalValue = value.oracle;
      this._passworddepot.internalValue = value.passworddepot;
      this._vault.internalValue = value.vault;
      this._webhook.internalValue = value.webhook;
      this._yandexlockbox.internalValue = value.yandexlockbox;
    }
  }

  // akeyless - computed: false, optional: true, required: false
  private _akeyless = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeylessOutputReference(this, "akeyless");
  public get akeyless() {
    return this._akeyless;
  }
  public putAkeyless(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAkeyless) {
    this._akeyless.internalValue = value;
  }
  public resetAkeyless() {
    this._akeyless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akeylessInput() {
    return this._akeyless.internalValue;
  }

  // alibaba - computed: false, optional: true, required: false
  private _alibaba = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibabaOutputReference(this, "alibaba");
  public get alibaba() {
    return this._alibaba;
  }
  public putAlibaba(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAlibaba) {
    this._alibaba.internalValue = value;
  }
  public resetAlibaba() {
    this._alibaba.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alibabaInput() {
    return this._alibaba.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azurekv - computed: false, optional: true, required: false
  private _azurekv = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekvOutputReference(this, "azurekv");
  public get azurekv() {
    return this._azurekv;
  }
  public putAzurekv(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderAzurekv) {
    this._azurekv.internalValue = value;
  }
  public resetAzurekv() {
    this._azurekv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurekvInput() {
    return this._azurekv.internalValue;
  }

  // fake - computed: false, optional: true, required: false
  private _fake = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFakeOutputReference(this, "fake");
  public get fake() {
    return this._fake;
  }
  public putFake(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderFake) {
    this._fake.internalValue = value;
  }
  public resetFake() {
    this._fake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeInput() {
    return this._fake.internalValue;
  }

  // gcpsm - computed: false, optional: true, required: false
  private _gcpsm = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsmOutputReference(this, "gcpsm");
  public get gcpsm() {
    return this._gcpsm;
  }
  public putGcpsm(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGcpsm) {
    this._gcpsm.internalValue = value;
  }
  public resetGcpsm() {
    this._gcpsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpsmInput() {
    return this._gcpsm.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // ibm - computed: false, optional: true, required: false
  private _ibm = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbmOutputReference(this, "ibm");
  public get ibm() {
    return this._ibm;
  }
  public putIbm(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderIbm) {
    this._ibm.internalValue = value;
  }
  public resetIbm() {
    this._ibm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmInput() {
    return this._ibm.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // oracle - computed: false, optional: true, required: false
  private _oracle = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracleOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOracle) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }

  // passworddepot - computed: false, optional: true, required: false
  private _passworddepot = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepotOutputReference(this, "passworddepot");
  public get passworddepot() {
    return this._passworddepot;
  }
  public putPassworddepot(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderPassworddepot) {
    this._passworddepot.internalValue = value;
  }
  public resetPassworddepot() {
    this._passworddepot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passworddepotInput() {
    return this._passworddepot.internalValue;
  }

  // vault - computed: false, optional: true, required: false
  private _vault = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // yandexlockbox - computed: false, optional: true, required: false
  private _yandexlockbox = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockboxOutputReference(this, "yandexlockbox");
  public get yandexlockbox() {
    return this._yandexlockbox;
  }
  public putYandexlockbox(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderYandexlockbox) {
    this._yandexlockbox.internalValue = value;
  }
  public resetYandexlockbox() {
    this._yandexlockbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yandexlockboxInput() {
    return this._yandexlockbox.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#max_retries DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#retry_interval DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#retry_interval}
  */
  readonly retryInterval?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettingsToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettingsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRetries = undefined;
      this._retryInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRetries = value.maxRetries;
      this._retryInterval = value.retryInterval;
    }
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

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpec {
  /**
  * Used to select the correct ESO controller (think: ingress.ingressClassName) The ESO controller is instantiated with a specific controller name and filters ES based on this property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#controller DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#controller}
  */
  readonly controller?: string;
  /**
  * Used to configure the provider. Only one provider may be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#provider DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#provider}
  */
  readonly provider: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProvider;
  /**
  * Used to configure http retries if failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#retry_settings DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest#retry_settings}
  */
  readonly retrySettings?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettings;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller: cdktf.stringToTerraform(struct!.controller),
    provider: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderToTerraform(struct!.provider),
    retry_settings: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettingsToTerraform(struct!.retrySettings),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProvider",
    },
    retry_settings: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettingsToHclTerraform(struct!.retrySettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    if (this._retrySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrySettings = this._retrySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controller = undefined;
      this._provider.internalValue = undefined;
      this._retrySettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controller = value.controller;
      this._provider.internalValue = value.provider;
      this._retrySettings.internalValue = value.retrySettings;
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

  // provider - computed: false, optional: false, required: true
  private _provider = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecProvider) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }

  // retry_settings - computed: false, optional: true, required: false
  private _retrySettings = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettingsOutputReference(this, "retry_settings");
  public get retrySettings() {
    return this._retrySettings;
  }
  public putRetrySettings(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecRetrySettings) {
    this._retrySettings.internalValue = value;
  }
  public resetRetrySettings() {
    this._retrySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrySettingsInput() {
    return this._retrySettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest k8s_external_secrets_io_cluster_secret_store_v1alpha1_manifest}
*/
export class DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_external_secrets_io_cluster_secret_store_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_external_secrets_io_cluster_secret_store_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/external_secrets_io_cluster_secret_store_v1alpha1_manifest k8s_external_secrets_io_cluster_secret_store_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_external_secrets_io_cluster_secret_store_v1alpha1_manifest',
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
  private _metadata = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpec) {
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
      metadata: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
