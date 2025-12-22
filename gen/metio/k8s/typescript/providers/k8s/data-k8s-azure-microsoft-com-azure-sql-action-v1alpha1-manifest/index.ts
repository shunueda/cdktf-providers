// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadata;
  /**
  * AzureSqlActionSpec defines the desired state of AzureSqlAction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#spec DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#labels DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#name DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#action_name DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#action_name}
  */
  readonly actionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#db_name DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#db_user DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#db_user}
  */
  readonly dbUser?: string;
  /**
  * INSERT ADDITIONAL SPEC FIELDS - desired state of cluster Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#server_admin_secret_name DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#server_admin_secret_name}
  */
  readonly serverAdminSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#server_name DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#server_secret_key_vault DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#server_secret_key_vault}
  */
  readonly serverSecretKeyVault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#subscription_id DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#user_secret_key_vault DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest#user_secret_key_vault}
  */
  readonly userSecretKeyVault?: string;
}

export function dataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_user: cdktf.stringToTerraform(struct!.dbUser),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    server_admin_secret_name: cdktf.stringToTerraform(struct!.serverAdminSecretName),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    server_secret_key_vault: cdktf.stringToTerraform(struct!.serverSecretKeyVault),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    user_secret_key_vault: cdktf.stringToTerraform(struct!.userSecretKeyVault),
  }
}


export function dataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_user: {
      value: cdktf.stringToHclTerraform(struct!.dbUser),
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
    server_admin_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.serverAdminSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_secret_key_vault: {
      value: cdktf.stringToHclTerraform(struct!.serverSecretKeyVault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_secret_key_vault: {
      value: cdktf.stringToHclTerraform(struct!.userSecretKeyVault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUser = this._dbUser;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._serverAdminSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAdminSecretName = this._serverAdminSecretName;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._serverSecretKeyVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSecretKeyVault = this._serverSecretKeyVault;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._userSecretKeyVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSecretKeyVault = this._userSecretKeyVault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._dbName = undefined;
      this._dbUser = undefined;
      this._resourceGroup = undefined;
      this._serverAdminSecretName = undefined;
      this._serverName = undefined;
      this._serverSecretKeyVault = undefined;
      this._subscriptionId = undefined;
      this._userSecretKeyVault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._dbName = value.dbName;
      this._dbUser = value.dbUser;
      this._resourceGroup = value.resourceGroup;
      this._serverAdminSecretName = value.serverAdminSecretName;
      this._serverName = value.serverName;
      this._serverSecretKeyVault = value.serverSecretKeyVault;
      this._subscriptionId = value.subscriptionId;
      this._userSecretKeyVault = value.userSecretKeyVault;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_user - computed: false, optional: true, required: false
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  public resetDbUser() {
    this._dbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
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

  // server_admin_secret_name - computed: false, optional: true, required: false
  private _serverAdminSecretName?: string; 
  public get serverAdminSecretName() {
    return this.getStringAttribute('server_admin_secret_name');
  }
  public set serverAdminSecretName(value: string) {
    this._serverAdminSecretName = value;
  }
  public resetServerAdminSecretName() {
    this._serverAdminSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAdminSecretNameInput() {
    return this._serverAdminSecretName;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_secret_key_vault - computed: false, optional: true, required: false
  private _serverSecretKeyVault?: string; 
  public get serverSecretKeyVault() {
    return this.getStringAttribute('server_secret_key_vault');
  }
  public set serverSecretKeyVault(value: string) {
    this._serverSecretKeyVault = value;
  }
  public resetServerSecretKeyVault() {
    this._serverSecretKeyVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSecretKeyVaultInput() {
    return this._serverSecretKeyVault;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // user_secret_key_vault - computed: false, optional: true, required: false
  private _userSecretKeyVault?: string; 
  public get userSecretKeyVault() {
    return this.getStringAttribute('user_secret_key_vault');
  }
  public set userSecretKeyVault(value: string) {
    this._userSecretKeyVault = value;
  }
  public resetUserSecretKeyVault() {
    this._userSecretKeyVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSecretKeyVaultInput() {
    return this._userSecretKeyVault;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest k8s_azure_microsoft_com_azure_sql_action_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_azure_sql_action_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_azure_sql_action_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_action_v1alpha1_manifest k8s_azure_microsoft_com_azure_sql_action_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_azure_sql_action_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlActionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
