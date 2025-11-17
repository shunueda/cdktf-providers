// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#metadata DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadata;
  /**
  * VaultAuthSpec defines the desired state of VaultAuth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#spec DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpec;
}
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#annotations DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#labels DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRole {
  /**
  * RoleID of the AppRole Role to use for authenticating to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#role_id DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#role_id}
  */
  readonly roleId?: string;
  /**
  * SecretRef is the name of a Kubernetes secret in the consumer's (VDS/VSS/PKI) namespace which provides the AppRole Role's SecretID. The secret must have a key named 'id' which holds the AppRole Role's secretID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#secret_ref DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: string;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRoleToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRoleToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
      this._secretRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
      this._secretRef = value.secretRef;
    }
  }

  // role_id - computed: false, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
  }
}
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAws {
  /**
  * The Vault header value to include in the STS signing request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#header_value DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#header_value}
  */
  readonly headerValue?: string;
  /**
  * The IAM endpoint to use; if not set will use the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#iam_endpoint DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#iam_endpoint}
  */
  readonly iamEndpoint?: string;
  /**
  * IRSAServiceAccount name to use with IAM Roles for Service Accounts (IRSA), and should be annotated with 'eks.amazonaws.com/role-arn'. This ServiceAccount will be checked for other EKS annotations: eks.amazonaws.com/audience and eks.amazonaws.com/token-expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#irsa_service_account DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#irsa_service_account}
  */
  readonly irsaServiceAccount?: string;
  /**
  * AWS Region to use for signing the authentication request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#region DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#region}
  */
  readonly region?: string;
  /**
  * Vault role to use for authenticating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#role DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * SecretRef is the name of a Kubernetes Secret in the consumer's (VDS/VSS/PKI) namespace which holds credentials for AWS. Expected keys include 'access_key_id', 'secret_access_key', 'session_token'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#secret_ref DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: string;
  /**
  * The role session name to use when creating a webidentity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#session_name DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#session_name}
  */
  readonly sessionName?: string;
  /**
  * The STS endpoint to use; if not set will use the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#sts_endpoint DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#sts_endpoint}
  */
  readonly stsEndpoint?: string;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAwsToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    iam_endpoint: cdktf.stringToTerraform(struct!.iamEndpoint),
    irsa_service_account: cdktf.stringToTerraform(struct!.irsaServiceAccount),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    sts_endpoint: cdktf.stringToTerraform(struct!.stsEndpoint),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAwsToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.iamEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    irsa_service_account: {
      value: cdktf.stringToHclTerraform(struct!.irsaServiceAccount),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
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
    sts_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.stsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._iamEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamEndpoint = this._iamEndpoint;
    }
    if (this._irsaServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.irsaServiceAccount = this._irsaServiceAccount;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    if (this._stsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.stsEndpoint = this._stsEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerValue = undefined;
      this._iamEndpoint = undefined;
      this._irsaServiceAccount = undefined;
      this._region = undefined;
      this._role = undefined;
      this._secretRef = undefined;
      this._sessionName = undefined;
      this._stsEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerValue = value.headerValue;
      this._iamEndpoint = value.iamEndpoint;
      this._irsaServiceAccount = value.irsaServiceAccount;
      this._region = value.region;
      this._role = value.role;
      this._secretRef = value.secretRef;
      this._sessionName = value.sessionName;
      this._stsEndpoint = value.stsEndpoint;
    }
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // iam_endpoint - computed: false, optional: true, required: false
  private _iamEndpoint?: string; 
  public get iamEndpoint() {
    return this.getStringAttribute('iam_endpoint');
  }
  public set iamEndpoint(value: string) {
    this._iamEndpoint = value;
  }
  public resetIamEndpoint() {
    this._iamEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamEndpointInput() {
    return this._iamEndpoint;
  }

  // irsa_service_account - computed: false, optional: true, required: false
  private _irsaServiceAccount?: string; 
  public get irsaServiceAccount() {
    return this.getStringAttribute('irsa_service_account');
  }
  public set irsaServiceAccount(value: string) {
    this._irsaServiceAccount = value;
  }
  public resetIrsaServiceAccount() {
    this._irsaServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get irsaServiceAccountInput() {
    return this._irsaServiceAccount;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }

  // sts_endpoint - computed: false, optional: true, required: false
  private _stsEndpoint?: string; 
  public get stsEndpoint() {
    return this.getStringAttribute('sts_endpoint');
  }
  public set stsEndpoint(value: string) {
    this._stsEndpoint = value;
  }
  public resetStsEndpoint() {
    this._stsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsEndpointInput() {
    return this._stsEndpoint;
  }
}
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcp {
  /**
  * GKE cluster name. Defaults to the cluster-name returned from the operator pod's local metadata server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#cluster_name DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * GCP project ID. Defaults to the project-id returned from the operator pod's local metadata server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#project_id DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#project_id}
  */
  readonly projectId?: string;
  /**
  * GCP Region of the GKE cluster's identity provider. Defaults to the region returned from the operator pod's local metadata server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#region DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#region}
  */
  readonly region?: string;
  /**
  * Vault role to use for authenticating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#role DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * WorkloadIdentityServiceAccount is the name of a Kubernetes service account (in the same Kubernetes namespace as the Vault*Secret referencing this resource) which has been configured for workload identity in GKE. Should be annotated with 'iam.gke.io/gcp-service-account'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#workload_identity_service_account DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#workload_identity_service_account}
  */
  readonly workloadIdentityServiceAccount?: string;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcpToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    workload_identity_service_account: cdktf.stringToTerraform(struct!.workloadIdentityServiceAccount),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcpToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_identity_service_account: {
      value: cdktf.stringToHclTerraform(struct!.workloadIdentityServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._workloadIdentityServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentityServiceAccount = this._workloadIdentityServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._role = undefined;
      this._workloadIdentityServiceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._projectId = value.projectId;
      this._region = value.region;
      this._role = value.role;
      this._workloadIdentityServiceAccount = value.workloadIdentityServiceAccount;
    }
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
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

  // workload_identity_service_account - computed: false, optional: true, required: false
  private _workloadIdentityServiceAccount?: string; 
  public get workloadIdentityServiceAccount() {
    return this.getStringAttribute('workload_identity_service_account');
  }
  public set workloadIdentityServiceAccount(value: string) {
    this._workloadIdentityServiceAccount = value;
  }
  public resetWorkloadIdentityServiceAccount() {
    this._workloadIdentityServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityServiceAccountInput() {
    return this._workloadIdentityServiceAccount;
  }
}
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwt {
  /**
  * TokenAudiences to include in the ServiceAccount token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#audiences DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * Role to use for authenticating to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#role DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * SecretRef is the name of a Kubernetes secret in the consumer's (VDS/VSS/PKI) namespace which provides the JWT token to authenticate to Vault's JWT authentication backend. The secret must have a key named 'jwt' which holds the JWT token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#secret_ref DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: string;
  /**
  * ServiceAccount to use when creating a ServiceAccount token to authenticate to Vault's JWT authentication backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#service_account DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * TokenExpirationSeconds to set the ServiceAccount token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#token_expiration_seconds DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#token_expiration_seconds}
  */
  readonly tokenExpirationSeconds?: number;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwtToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    role: cdktf.stringToTerraform(struct!.role),
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    token_expiration_seconds: cdktf.numberToTerraform(struct!.tokenExpirationSeconds),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwtToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwt | cdktf.IResolvable): any {
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tokenExpirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._tokenExpirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenExpirationSeconds = this._tokenExpirationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._role = undefined;
      this._secretRef = undefined;
      this._serviceAccount = undefined;
      this._tokenExpirationSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._role = value.role;
      this._secretRef = value.secretRef;
      this._serviceAccount = value.serviceAccount;
      this._tokenExpirationSeconds = value.tokenExpirationSeconds;
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
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // token_expiration_seconds - computed: false, optional: true, required: false
  private _tokenExpirationSeconds?: number; 
  public get tokenExpirationSeconds() {
    return this.getNumberAttribute('token_expiration_seconds');
  }
  public set tokenExpirationSeconds(value: number) {
    this._tokenExpirationSeconds = value;
  }
  public resetTokenExpirationSeconds() {
    this._tokenExpirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExpirationSecondsInput() {
    return this._tokenExpirationSeconds;
  }
}
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetes {
  /**
  * TokenAudiences to include in the ServiceAccount token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#audiences DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * Role to use for authenticating to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#role DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * ServiceAccount to use when authenticating to Vault's authentication backend. This must reside in the consuming secret's (VDS/VSS/PKI) namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#service_account DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * TokenExpirationSeconds to set the ServiceAccount token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#token_expiration_seconds DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#token_expiration_seconds}
  */
  readonly tokenExpirationSeconds?: number;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetesToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    role: cdktf.stringToTerraform(struct!.role),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    token_expiration_seconds: cdktf.numberToTerraform(struct!.tokenExpirationSeconds),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetesToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetes | cdktf.IResolvable): any {
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tokenExpirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._tokenExpirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenExpirationSeconds = this._tokenExpirationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._role = undefined;
      this._serviceAccount = undefined;
      this._tokenExpirationSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._role = value.role;
      this._serviceAccount = value.serviceAccount;
      this._tokenExpirationSeconds = value.tokenExpirationSeconds;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // token_expiration_seconds - computed: false, optional: true, required: false
  private _tokenExpirationSeconds?: number; 
  public get tokenExpirationSeconds() {
    return this.getNumberAttribute('token_expiration_seconds');
  }
  public set tokenExpirationSeconds(value: number) {
    this._tokenExpirationSeconds = value;
  }
  public resetTokenExpirationSeconds() {
    this._tokenExpirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExpirationSecondsInput() {
    return this._tokenExpirationSeconds;
  }
}
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryption {
  /**
  * KeyName to use for encrypt/decrypt operations via Vault Transit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#key_name DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#key_name}
  */
  readonly keyName: string;
  /**
  * Mount path of the Transit engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#mount DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#mount}
  */
  readonly mount: string;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryptionToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    mount: cdktf.stringToTerraform(struct!.mount),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryptionToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyName = undefined;
      this._mount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyName = value.keyName;
      this._mount = value.mount;
    }
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }
}
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategy {
  /**
  * Headers configures the merge strategy for HTTP headers that are included in all Vault requests. Choices are 'union', 'replace', or 'none'. If 'union' is set, the headers from the VaultAuthGlobal and VaultAuth resources are merged. The headers from the VaultAuth always take precedence. If 'replace' is set, the first set of non-empty headers taken in order from: VaultAuth, VaultAuthGlobal auth method, VaultGlobal default headers. If 'none' is set, the headers from the VaultAuthGlobal resource are ignored and only the headers from the VaultAuth resource are used. The default is 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#headers DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#headers}
  */
  readonly headers?: string;
  /**
  * Params configures the merge strategy for HTTP parameters that are included in all Vault requests. Choices are 'union', 'replace', or 'none'. If 'union' is set, the parameters from the VaultAuthGlobal and VaultAuth resources are merged. The parameters from the VaultAuth always take precedence. If 'replace' is set, the first set of non-empty parameters taken in order from: VaultAuth, VaultAuthGlobal auth method, VaultGlobal default parameters. If 'none' is set, the parameters from the VaultAuthGlobal resource are ignored and only the parameters from the VaultAuth resource are used. The default is 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#params DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#params}
  */
  readonly params?: string;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategyToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.stringToTerraform(struct!.headers),
    params: cdktf.stringToTerraform(struct!.params),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategyToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.stringToHclTerraform(struct!.headers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.stringToHclTerraform(struct!.params),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._params = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._params = value.params;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // params - computed: false, optional: true, required: false
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }
}
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRef {
  /**
  * AllowDefault when set to true will use the default VaultAuthGlobal resource as the default if Name is not set. The 'allow-default-globals' option must be set on the operator's '-global-vault-auth-options' flag The default VaultAuthGlobal search is conditional. When a ref Namespace is set, the search for the default VaultAuthGlobal resource is constrained to that namespace. Otherwise, the search order is: 1. The default VaultAuthGlobal resource in the referring VaultAuth resource's namespace. 2. The default VaultAuthGlobal resource in the Operator's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#allow_default DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#allow_default}
  */
  readonly allowDefault?: boolean | cdktf.IResolvable;
  /**
  * MergeStrategy configures the merge strategy for HTTP headers and parameters that are included in all Vault authentication requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#merge_strategy DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#merge_strategy}
  */
  readonly mergeStrategy?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategy;
  /**
  * Name of the VaultAuthGlobal resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the VaultAuthGlobal resource. If not provided, the namespace of the referring VaultAuth resource is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_default: cdktf.booleanToTerraform(struct!.allowDefault),
    merge_strategy: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategyToTerraform(struct!.mergeStrategy),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_default: {
      value: cdktf.booleanToHclTerraform(struct!.allowDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    merge_strategy: {
      value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategyToHclTerraform(struct!.mergeStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategy",
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

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDefault = this._allowDefault;
    }
    if (this._mergeStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeStrategy = this._mergeStrategy?.internalValue;
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

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDefault = undefined;
      this._mergeStrategy.internalValue = undefined;
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
      this._allowDefault = value.allowDefault;
      this._mergeStrategy.internalValue = value.mergeStrategy;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // allow_default - computed: false, optional: true, required: false
  private _allowDefault?: boolean | cdktf.IResolvable; 
  public get allowDefault() {
    return this.getBooleanAttribute('allow_default');
  }
  public set allowDefault(value: boolean | cdktf.IResolvable) {
    this._allowDefault = value;
  }
  public resetAllowDefault() {
    this._allowDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDefaultInput() {
    return this._allowDefault;
  }

  // merge_strategy - computed: false, optional: true, required: false
  private _mergeStrategy = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategyOutputReference(this, "merge_strategy");
  public get mergeStrategy() {
    return this._mergeStrategy;
  }
  public putMergeStrategy(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefMergeStrategy) {
    this._mergeStrategy.internalValue = value;
  }
  public resetMergeStrategy() {
    this._mergeStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeStrategyInput() {
    return this._mergeStrategy.internalValue;
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
export interface DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpec {
  /**
  * AllowedNamespaces Kubernetes Namespaces which are allow-listed for use with this AuthMethod. This field allows administrators to customize which Kubernetes namespaces are authorized to use with this AuthMethod. While Vault will still enforce its own rules, this has the added configurability of restricting which VaultAuthMethods can be used by which namespaces. Accepted values: []{'*'} - wildcard, all namespaces. []{'a', 'b'} - list of namespaces. unset - disallow all namespaces except the Operator's the VaultAuthMethod's namespace, this is the default behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#allowed_namespaces DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#allowed_namespaces}
  */
  readonly allowedNamespaces?: string[];
  /**
  * AppRole specific auth configuration, requires that the Method be set to 'appRole'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#app_role DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#app_role}
  */
  readonly appRole?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRole;
  /**
  * AWS specific auth configuration, requires that Method be set to 'aws'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#aws DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#aws}
  */
  readonly aws?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAws;
  /**
  * GCP specific auth configuration, requires that Method be set to 'gcp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#gcp DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#gcp}
  */
  readonly gcp?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcp;
  /**
  * Headers to be included in all Vault requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#headers DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * JWT specific auth configuration, requires that the Method be set to 'jwt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#jwt DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#jwt}
  */
  readonly jwt?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwt;
  /**
  * Kubernetes specific auth configuration, requires that the Method be set to 'kubernetes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#kubernetes DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetes;
  /**
  * Method to use when authenticating to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#method DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#method}
  */
  readonly method?: string;
  /**
  * Mount to use when authenticating to auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#mount DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#mount}
  */
  readonly mount?: string;
  /**
  * Namespace to auth to in Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Params to use when authenticating to Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#params DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * StorageEncryption provides the necessary configuration to encrypt the client storage cache. This should only be configured when client cache persistence with encryption is enabled. This is done by passing setting the manager's commandline argument --client-cache-persistence-model=direct-encrypted. Typically, there should only ever be one VaultAuth configured with StorageEncryption in the Cluster, and it should have the label: cacheStorageEncryption=true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#storage_encryption DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#storage_encryption}
  */
  readonly storageEncryption?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryption;
  /**
  * VaultAuthGlobalRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#vault_auth_global_ref DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#vault_auth_global_ref}
  */
  readonly vaultAuthGlobalRef?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRef;
  /**
  * VaultConnectionRef to the VaultConnection resource, can be prefixed with a namespace, eg: 'namespaceA/vaultConnectionRefB'. If no namespace prefix is provided it will default to the namespace of the VaultConnection CR. If no value is specified for VaultConnectionRef the Operator will default to the 'default' VaultConnection, configured in the operator's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#vault_connection_ref DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest#vault_connection_ref}
  */
  readonly vaultConnectionRef?: string;
}

export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedNamespaces),
    app_role: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRoleToTerraform(struct!.appRole),
    aws: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAwsToTerraform(struct!.aws),
    gcp: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcpToTerraform(struct!.gcp),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    jwt: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwtToTerraform(struct!.jwt),
    kubernetes: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetesToTerraform(struct!.kubernetes),
    method: cdktf.stringToTerraform(struct!.method),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    storage_encryption: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryptionToTerraform(struct!.storageEncryption),
    vault_auth_global_ref: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefToTerraform(struct!.vaultAuthGlobalRef),
    vault_connection_ref: cdktf.stringToTerraform(struct!.vaultConnectionRef),
  }
}


export function dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    app_role: {
      value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRoleToHclTerraform(struct!.appRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRole",
    },
    aws: {
      value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAws",
    },
    gcp: {
      value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcp",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    jwt: {
      value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwt",
    },
    kubernetes: {
      value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetes",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
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
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage_encryption: {
      value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryptionToHclTerraform(struct!.storageEncryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryption",
    },
    vault_auth_global_ref: {
      value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefToHclTerraform(struct!.vaultAuthGlobalRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRef",
    },
    vault_connection_ref: {
      value: cdktf.stringToHclTerraform(struct!.vaultConnectionRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedNamespaces = this._allowedNamespaces;
    }
    if (this._appRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appRole = this._appRole?.internalValue;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._storageEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageEncryption = this._storageEncryption?.internalValue;
    }
    if (this._vaultAuthGlobalRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultAuthGlobalRef = this._vaultAuthGlobalRef?.internalValue;
    }
    if (this._vaultConnectionRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultConnectionRef = this._vaultConnectionRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedNamespaces = undefined;
      this._appRole.internalValue = undefined;
      this._aws.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._headers = undefined;
      this._jwt.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._method = undefined;
      this._mount = undefined;
      this._namespace = undefined;
      this._params = undefined;
      this._storageEncryption.internalValue = undefined;
      this._vaultAuthGlobalRef.internalValue = undefined;
      this._vaultConnectionRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedNamespaces = value.allowedNamespaces;
      this._appRole.internalValue = value.appRole;
      this._aws.internalValue = value.aws;
      this._gcp.internalValue = value.gcp;
      this._headers = value.headers;
      this._jwt.internalValue = value.jwt;
      this._kubernetes.internalValue = value.kubernetes;
      this._method = value.method;
      this._mount = value.mount;
      this._namespace = value.namespace;
      this._params = value.params;
      this._storageEncryption.internalValue = value.storageEncryption;
      this._vaultAuthGlobalRef.internalValue = value.vaultAuthGlobalRef;
      this._vaultConnectionRef = value.vaultConnectionRef;
    }
  }

  // allowed_namespaces - computed: false, optional: true, required: false
  private _allowedNamespaces?: string[]; 
  public get allowedNamespaces() {
    return this.getListAttribute('allowed_namespaces');
  }
  public set allowedNamespaces(value: string[]) {
    this._allowedNamespaces = value;
  }
  public resetAllowedNamespaces() {
    this._allowedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNamespacesInput() {
    return this._allowedNamespaces;
  }

  // app_role - computed: false, optional: true, required: false
  private _appRole = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRoleOutputReference(this, "app_role");
  public get appRole() {
    return this._appRole;
  }
  public putAppRole(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAppRole) {
    this._appRole.internalValue = value;
  }
  public resetAppRole() {
    this._appRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleInput() {
    return this._appRole.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
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

  // jwt - computed: false, optional: true, required: false
  private _jwt = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecJwt) {
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
  private _kubernetes = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
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

  // mount - computed: false, optional: true, required: false
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // storage_encryption - computed: false, optional: true, required: false
  private _storageEncryption = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryptionOutputReference(this, "storage_encryption");
  public get storageEncryption() {
    return this._storageEncryption;
  }
  public putStorageEncryption(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecStorageEncryption) {
    this._storageEncryption.internalValue = value;
  }
  public resetStorageEncryption() {
    this._storageEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptionInput() {
    return this._storageEncryption.internalValue;
  }

  // vault_auth_global_ref - computed: false, optional: true, required: false
  private _vaultAuthGlobalRef = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRefOutputReference(this, "vault_auth_global_ref");
  public get vaultAuthGlobalRef() {
    return this._vaultAuthGlobalRef;
  }
  public putVaultAuthGlobalRef(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecVaultAuthGlobalRef) {
    this._vaultAuthGlobalRef.internalValue = value;
  }
  public resetVaultAuthGlobalRef() {
    this._vaultAuthGlobalRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAuthGlobalRefInput() {
    return this._vaultAuthGlobalRef.internalValue;
  }

  // vault_connection_ref - computed: false, optional: true, required: false
  private _vaultConnectionRef?: string; 
  public get vaultConnectionRef() {
    return this.getStringAttribute('vault_connection_ref');
  }
  public set vaultConnectionRef(value: string) {
    this._vaultConnectionRef = value;
  }
  public resetVaultConnectionRef() {
    this._vaultConnectionRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConnectionRefInput() {
    return this._vaultConnectionRef;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest k8s_secrets_hashicorp_com_vault_auth_v1beta1_manifest}
*/
export class DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_hashicorp_com_vault_auth_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsHashicorpComVaultAuthV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_hashicorp_com_vault_auth_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_auth_v1beta1_manifest k8s_secrets_hashicorp_com_vault_auth_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_hashicorp_com_vault_auth_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComVaultAuthV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
