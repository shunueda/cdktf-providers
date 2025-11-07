// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadata;
  /**
  * KeyVaultSpec defines the desired state of KeyVault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#spec DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#labels DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#name DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#certificates DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#certificates}
  */
  readonly certificates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#keys DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#keys}
  */
  readonly keys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#secrets DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#secrets}
  */
  readonly secrets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#storage DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#storage}
  */
  readonly storage?: string[];
}

export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissionsToTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificates),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
    storage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storage),
  }
}


export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissionsToHclTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storage),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificates = undefined;
      this._keys = undefined;
      this._secrets = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificates = value.certificates;
      this._keys = value.keys;
      this._secrets = value.secrets;
      this._storage = value.storage;
    }
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string[]; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string[]; 
  public get storage() {
    return this.getListAttribute('storage');
  }
  public set storage(value: string[]) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPolicies {
  /**
  * ApplicationID - Application ID of the client making request on behalf of a principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#application_id DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#application_id}
  */
  readonly applicationId?: string;
  /**
  * ClientID - The client ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The client ID must be unique for the list of access policies. TODO: Remove this in a future API version, see: https://github.com/Azure/azure-service-operator/issues/1351
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#client_id DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * ObjectID is the AAD object id of the entity to provide access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#object_id DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#object_id}
  */
  readonly objectId?: string;
  /**
  * Permissions - Permissions the identity has for keys, secrets, and certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#permissions DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#permissions}
  */
  readonly permissions?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissions;
  /**
  * TenantID - The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#tenant_id DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesToTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    permissions: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissionsToTerraform(struct!.permissions),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesToHclTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissions",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._clientId = undefined;
      this._objectId = undefined;
      this._permissions.internalValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._clientId = value.clientId;
      this._objectId = value.objectId;
      this._permissions.internalValue = value.permissions;
      this._tenantId = value.tenantId;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
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
}

export class DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesOutputReference {
    return new DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPolicies {
  /**
  * Bypass - Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'. If not specified the default is 'AzureServices'. Possible values include: 'AzureServices', 'None'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#bypass DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#bypass}
  */
  readonly bypass?: string;
  /**
  * DefaultAction - The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. Possible values include: 'Allow', 'Deny'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#default_action DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#default_action}
  */
  readonly defaultAction?: string;
  /**
  * IPRules - The list of IP address rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#ip_rules DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * VirtualNetworkRules - The list of virtual network rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#virtual_network_rules DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#virtual_network_rules}
  */
  readonly virtualNetworkRules?: string[];
}

export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPoliciesToTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.stringToTerraform(struct!.bypass),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRules),
    virtual_network_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualNetworkRules),
  }
}


export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPoliciesToHclTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.stringToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virtual_network_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualNetworkRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules;
    }
    if (this._virtualNetworkRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkRules = this._virtualNetworkRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypass = undefined;
      this._defaultAction = undefined;
      this._ipRules = undefined;
      this._virtualNetworkRules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypass = value.bypass;
      this._defaultAction = value.defaultAction;
      this._ipRules = value.ipRules;
      this._virtualNetworkRules = value.virtualNetworkRules;
    }
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass?: string; 
  public get bypass() {
    return this.getStringAttribute('bypass');
  }
  public set bypass(value: string) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules?: string[]; 
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules;
  }

  // virtual_network_rules - computed: false, optional: true, required: false
  private _virtualNetworkRules?: string[]; 
  public get virtualNetworkRules() {
    return this.getListAttribute('virtual_network_rules');
  }
  public set virtualNetworkRules(value: string[]) {
    this._virtualNetworkRules = value;
  }
  public resetVirtualNetworkRules() {
    this._virtualNetworkRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRulesInput() {
    return this._virtualNetworkRules;
  }
}
export interface DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSku {
  /**
  * Name - The SKU name. Required for account creation; optional for update. Possible values include: 'Premium', 'Standard'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#name DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSkuToTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSkuToHclTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSku | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSku | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSku | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#access_policies DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#access_policies}
  */
  readonly accessPolicies?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPolicies[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#enable_soft_delete DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#enable_soft_delete}
  */
  readonly enableSoftDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#location DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#network_policies DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#network_policies}
  */
  readonly networkPolicies?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * KeyVaultSku the SKU of the Key Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#sku DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest#sku}
  */
  readonly sku?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSku;
}

export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_policies: cdktf.listMapper(dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesToTerraform, false)(struct!.accessPolicies),
    enable_soft_delete: cdktf.booleanToTerraform(struct!.enableSoftDelete),
    location: cdktf.stringToTerraform(struct!.location),
    network_policies: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPoliciesToTerraform(struct!.networkPolicies),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    sku: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSkuToTerraform(struct!.sku),
  }
}


export function dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_policies: {
      value: cdktf.listMapperHcl(dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesToHclTerraform, false)(struct!.accessPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesList",
    },
    enable_soft_delete: {
      value: cdktf.booleanToHclTerraform(struct!.enableSoftDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policies: {
      value: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPoliciesToHclTerraform(struct!.networkPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPolicies",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSkuToHclTerraform(struct!.sku),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSku",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicies = this._accessPolicies?.internalValue;
    }
    if (this._enableSoftDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSoftDelete = this._enableSoftDelete;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicies.internalValue = undefined;
      this._enableSoftDelete = undefined;
      this._location = undefined;
      this._networkPolicies.internalValue = undefined;
      this._resourceGroup = undefined;
      this._sku.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicies.internalValue = value.accessPolicies;
      this._enableSoftDelete = value.enableSoftDelete;
      this._location = value.location;
      this._networkPolicies.internalValue = value.networkPolicies;
      this._resourceGroup = value.resourceGroup;
      this._sku.internalValue = value.sku;
    }
  }

  // access_policies - computed: false, optional: true, required: false
  private _accessPolicies = new DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPoliciesList(this, "access_policies", false);
  public get accessPolicies() {
    return this._accessPolicies;
  }
  public putAccessPolicies(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecAccessPolicies[] | cdktf.IResolvable) {
    this._accessPolicies.internalValue = value;
  }
  public resetAccessPolicies() {
    this._accessPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies.internalValue;
  }

  // enable_soft_delete - computed: false, optional: true, required: false
  private _enableSoftDelete?: boolean | cdktf.IResolvable; 
  public get enableSoftDelete() {
    return this.getBooleanAttribute('enable_soft_delete');
  }
  public set enableSoftDelete(value: boolean | cdktf.IResolvable) {
    this._enableSoftDelete = value;
  }
  public resetEnableSoftDelete() {
    this._enableSoftDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSoftDeleteInput() {
    return this._enableSoftDelete;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // network_policies - computed: false, optional: true, required: false
  private _networkPolicies = new DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPoliciesOutputReference(this, "network_policies");
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecNetworkPolicies) {
    this._networkPolicies.internalValue = value;
  }
  public resetNetworkPolicies() {
    this._networkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // sku - computed: false, optional: true, required: false
  private _sku = new DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecSku) {
    this._sku.internalValue = value;
  }
  public resetSku() {
    this._sku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest k8s_azure_microsoft_com_key_vault_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_key_vault_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComKeyVaultV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_key_vault_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_key_vault_v1alpha1_manifest k8s_azure_microsoft_com_key_vault_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_key_vault_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComKeyVaultV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
