// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#metadata DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadata;
  /**
  * MySQLUserSpec defines the desired state of MySqlUser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#spec DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpec;
}
export interface DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#annotations DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#labels DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#name DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#namespace DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#admin_secret DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#admin_secret}
  */
  readonly adminSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#admin_secret_key_vault DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#admin_secret_key_vault}
  */
  readonly adminSecretKeyVault?: string;
  /**
  * The database-level roles assigned to the user (keyed by database name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#database_roles DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#database_roles}
  */
  readonly databaseRoles?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#key_vault_to_store_secrets DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#key_vault_to_store_secrets}
  */
  readonly keyVaultToStoreSecrets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#resource_group DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * The server-level roles assigned ot the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#roles DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * INSERT ADDITIONAL SPEC FIELDS - desired state of cluster Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#server DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#username DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_secret: cdktf.stringToTerraform(struct!.adminSecret),
    admin_secret_key_vault: cdktf.stringToTerraform(struct!.adminSecretKeyVault),
    database_roles: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.databaseRoles),
    key_vault_to_store_secrets: cdktf.stringToTerraform(struct!.keyVaultToStoreSecrets),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_secret: {
      value: cdktf.stringToHclTerraform(struct!.adminSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_secret_key_vault: {
      value: cdktf.stringToHclTerraform(struct!.adminSecretKeyVault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_roles: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.databaseRoles),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    key_vault_to_store_secrets: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultToStoreSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSecret = this._adminSecret;
    }
    if (this._adminSecretKeyVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSecretKeyVault = this._adminSecretKeyVault;
    }
    if (this._databaseRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRoles = this._databaseRoles;
    }
    if (this._keyVaultToStoreSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultToStoreSecrets = this._keyVaultToStoreSecrets;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminSecret = undefined;
      this._adminSecretKeyVault = undefined;
      this._databaseRoles = undefined;
      this._keyVaultToStoreSecrets = undefined;
      this._resourceGroup = undefined;
      this._roles = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminSecret = value.adminSecret;
      this._adminSecretKeyVault = value.adminSecretKeyVault;
      this._databaseRoles = value.databaseRoles;
      this._keyVaultToStoreSecrets = value.keyVaultToStoreSecrets;
      this._resourceGroup = value.resourceGroup;
      this._roles = value.roles;
      this._server = value.server;
      this._username = value.username;
    }
  }

  // admin_secret - computed: false, optional: true, required: false
  private _adminSecret?: string; 
  public get adminSecret() {
    return this.getStringAttribute('admin_secret');
  }
  public set adminSecret(value: string) {
    this._adminSecret = value;
  }
  public resetAdminSecret() {
    this._adminSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSecretInput() {
    return this._adminSecret;
  }

  // admin_secret_key_vault - computed: false, optional: true, required: false
  private _adminSecretKeyVault?: string; 
  public get adminSecretKeyVault() {
    return this.getStringAttribute('admin_secret_key_vault');
  }
  public set adminSecretKeyVault(value: string) {
    this._adminSecretKeyVault = value;
  }
  public resetAdminSecretKeyVault() {
    this._adminSecretKeyVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSecretKeyVaultInput() {
    return this._adminSecretKeyVault;
  }

  // database_roles - computed: false, optional: true, required: false
  private _databaseRoles?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get databaseRoles() {
    return this.interpolationForAttribute('database_roles');
  }
  public set databaseRoles(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._databaseRoles = value;
  }
  public resetDatabaseRoles() {
    this._databaseRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRolesInput() {
    return this._databaseRoles;
  }

  // key_vault_to_store_secrets - computed: false, optional: true, required: false
  private _keyVaultToStoreSecrets?: string; 
  public get keyVaultToStoreSecrets() {
    return this.getStringAttribute('key_vault_to_store_secrets');
  }
  public set keyVaultToStoreSecrets(value: string) {
    this._keyVaultToStoreSecrets = value;
  }
  public resetKeyVaultToStoreSecrets() {
    this._keyVaultToStoreSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultToStoreSecretsInput() {
    return this._keyVaultToStoreSecrets;
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest k8s_azure_microsoft_com_my_sql_user_v1alpha2_manifest}
*/
export class DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_my_sql_user_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComMySqlUserV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_my_sql_user_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/azure_microsoft_com_my_sql_user_v1alpha2_manifest k8s_azure_microsoft_com_my_sql_user_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_my_sql_user_v1alpha2_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComMySqlUserV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
