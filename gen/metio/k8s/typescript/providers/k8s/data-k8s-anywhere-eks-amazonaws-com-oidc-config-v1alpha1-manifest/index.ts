// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadata;
  /**
  * OIDCConfigSpec defines the desired state of OIDCConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#claim DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#claim}
  */
  readonly claim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#value DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
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

export class DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._value = value.value;
    }
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
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

export class DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsOutputReference {
    return new DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpec {
  /**
  * ClientId defines the client ID for the OpenID Connect client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#client_id DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * GroupsClaim defines the name of a custom OpenID Connect claim for specifying user groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#groups_claim DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * GroupsPrefix defines a string to be prefixed to all groups to prevent conflicts with other authentication strategies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#groups_prefix DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * IssuerUrl defines the URL of the OpenID issuer, only HTTPS scheme will be accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#issuer_url DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * RequiredClaims defines a key=value pair that describes a required claim in the ID Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#required_claims DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#required_claims}
  */
  readonly requiredClaims?: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaims[] | cdktf.IResolvable;
  /**
  * UsernameClaim defines the OpenID claim to use as the user name. Note that claims other than the default ('sub') is not guaranteed to be unique and immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#username_claim DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * UsernamePrefix defines a string to prefixed to all usernames. If not provided, username claims other than 'email' are prefixed by the issuer URL to avoid clashes. To skip any prefixing, provide the value '-'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#username_prefix DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    required_claims: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsToTerraform, false)(struct!.requiredClaims),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}


export function dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupsClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_prefix: {
      value: cdktf.stringToHclTerraform(struct!.groupsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_claims: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsToHclTerraform, false)(struct!.requiredClaims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsList",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_prefix: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._groupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsClaim = this._groupsClaim;
    }
    if (this._groupsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsPrefix = this._groupsPrefix;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._requiredClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredClaims = this._requiredClaims?.internalValue;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    if (this._usernamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrefix = this._usernamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._groupsClaim = undefined;
      this._groupsPrefix = undefined;
      this._issuerUrl = undefined;
      this._requiredClaims.internalValue = undefined;
      this._usernameClaim = undefined;
      this._usernamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._groupsClaim = value.groupsClaim;
      this._groupsPrefix = value.groupsPrefix;
      this._issuerUrl = value.issuerUrl;
      this._requiredClaims.internalValue = value.requiredClaims;
      this._usernameClaim = value.usernameClaim;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // groups_prefix - computed: false, optional: true, required: false
  private _groupsPrefix?: string; 
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }
  public set groupsPrefix(value: string) {
    this._groupsPrefix = value;
  }
  public resetGroupsPrefix() {
    this._groupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPrefixInput() {
    return this._groupsPrefix;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // required_claims - computed: false, optional: true, required: false
  private _requiredClaims = new DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaimsList(this, "required_claims", false);
  public get requiredClaims() {
    return this._requiredClaims;
  }
  public putRequiredClaims(value: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecRequiredClaims[] | cdktf.IResolvable) {
    this._requiredClaims.internalValue = value;
  }
  public resetRequiredClaims() {
    this._requiredClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimsInput() {
    return this._requiredClaims.internalValue;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }

  // username_prefix - computed: false, optional: true, required: false
  private _usernamePrefix?: string; 
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
  public set usernamePrefix(value: string) {
    this._usernamePrefix = value;
  }
  public resetUsernamePrefix() {
    this._usernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePrefixInput() {
    return this._usernamePrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_oidc_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComOidcConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
