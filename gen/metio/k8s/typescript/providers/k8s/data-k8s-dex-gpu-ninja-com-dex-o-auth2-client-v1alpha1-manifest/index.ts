// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#metadata DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadata;
  /**
  * DexOAuth2ClientSpec defines the desired state of the OAuth2 client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#spec DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpec;
}
export interface DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#annotations DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#labels DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#namespace DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRef {
  /**
  * Name of the referenced DexIdentityProvider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the optional namespace of the referenced DexIdentityProvider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#namespace DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRefToTerraform(struct?: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpec {
  /**
  * IdentityProviderRef is a reference to the identity provider which this client is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#identity_provider_ref DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#identity_provider_ref}
  */
  readonly identityProviderRef: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRef;
  /**
  * LogoURL is the URL to a logo for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#logo_url DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Name is the human-readable name of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Public indicates that this client is a public client, such as a mobile app. Public clients must use either use a redirectURL 127.0.0.1:X or 'urn:ietf:wg:oauth:2.0:oob'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#public DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * RedirectURIs is a list of allowed redirect URLs for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#redirect_ur_is DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#redirect_ur_is}
  */
  readonly redirectUrIs?: string[];
  /**
  * SecretName is the name of the secret that will be created to store the OAuth2 client id and client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#secret_name DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * TrustedPeers are a list of peers which can issue tokens on this client's behalf using the dynamic 'oauth2:server:client_id:(client_id)' scope. If a peer makes such a request, this client's ID will appear as the ID Token's audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#trusted_peers DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest#trusted_peers}
  */
  readonly trustedPeers?: string[];
}

export function dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_ref: dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRefToTerraform(struct!.identityProviderRef),
    logo_url: cdktf.stringToTerraform(struct!.logoUrl),
    name: cdktf.stringToTerraform(struct!.name),
    public: cdktf.booleanToTerraform(struct!.public),
    redirect_ur_is: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUrIs),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    trusted_peers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedPeers),
  }
}


export function dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_ref: {
      value: dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRefToHclTerraform(struct!.identityProviderRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRef",
    },
    logo_url: {
      value: cdktf.stringToHclTerraform(struct!.logoUrl),
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
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_ur_is: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectUrIs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_peers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedPeers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderRef = this._identityProviderRef?.internalValue;
    }
    if (this._logoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoUrl = this._logoUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    if (this._redirectUrIs !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrIs = this._redirectUrIs;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._trustedPeers !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedPeers = this._trustedPeers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderRef.internalValue = undefined;
      this._logoUrl = undefined;
      this._name = undefined;
      this._public = undefined;
      this._redirectUrIs = undefined;
      this._secretName = undefined;
      this._trustedPeers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderRef.internalValue = value.identityProviderRef;
      this._logoUrl = value.logoUrl;
      this._name = value.name;
      this._public = value.public;
      this._redirectUrIs = value.redirectUrIs;
      this._secretName = value.secretName;
      this._trustedPeers = value.trustedPeers;
    }
  }

  // identity_provider_ref - computed: false, optional: false, required: true
  private _identityProviderRef = new DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRefOutputReference(this, "identity_provider_ref");
  public get identityProviderRef() {
    return this._identityProviderRef;
  }
  public putIdentityProviderRef(value: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecIdentityProviderRef) {
    this._identityProviderRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderRefInput() {
    return this._identityProviderRef.internalValue;
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
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

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // redirect_ur_is - computed: false, optional: true, required: false
  private _redirectUrIs?: string[]; 
  public get redirectUrIs() {
    return this.getListAttribute('redirect_ur_is');
  }
  public set redirectUrIs(value: string[]) {
    this._redirectUrIs = value;
  }
  public resetRedirectUrIs() {
    this._redirectUrIs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrIsInput() {
    return this._redirectUrIs;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // trusted_peers - computed: false, optional: true, required: false
  private _trustedPeers?: string[]; 
  public get trustedPeers() {
    return this.getListAttribute('trusted_peers');
  }
  public set trustedPeers(value: string[]) {
    this._trustedPeers = value;
  }
  public resetTrustedPeers() {
    this._trustedPeers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedPeersInput() {
    return this._trustedPeers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest k8s_dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest}
*/
export class DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest k8s_dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dex_gpu_ninja_com_dex_o_auth2_client_v1alpha1_manifest',
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
  private _metadata = new DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDexGpuNinjaComDexOAuth2ClientV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
