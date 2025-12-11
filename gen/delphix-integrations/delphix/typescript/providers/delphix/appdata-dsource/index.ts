// https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppdataDsourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#description AppdataDsource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#environment_user AppdataDsource#environment_user}
  */
  readonly environmentUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#excludes AppdataDsource#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#follow_symlinks AppdataDsource#follow_symlinks}
  */
  readonly followSymlinks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#group_id AppdataDsource#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#ignore_tag_changes AppdataDsource#ignore_tag_changes}
  */
  readonly ignoreTagChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#link_type AppdataDsource#link_type}
  */
  readonly linkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#log_sync_enabled AppdataDsource#log_sync_enabled}
  */
  readonly logSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#make_current_account_owner AppdataDsource#make_current_account_owner}
  */
  readonly makeCurrentAccountOwner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#name AppdataDsource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#parameters AppdataDsource#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#retention_policy_id AppdataDsource#retention_policy_id}
  */
  readonly retentionPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#rollback_on_failure AppdataDsource#rollback_on_failure}
  */
  readonly rollbackOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#skip_wait_for_snapshot_creation AppdataDsource#skip_wait_for_snapshot_creation}
  */
  readonly skipWaitForSnapshotCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#source_value AppdataDsource#source_value}
  */
  readonly sourceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#staging_environment AppdataDsource#staging_environment}
  */
  readonly stagingEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#staging_environment_user AppdataDsource#staging_environment_user}
  */
  readonly stagingEnvironmentUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#staging_mount_base AppdataDsource#staging_mount_base}
  */
  readonly stagingMountBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#sync_parameters AppdataDsource#sync_parameters}
  */
  readonly syncParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#sync_policy_id AppdataDsource#sync_policy_id}
  */
  readonly syncPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#wait_time AppdataDsource#wait_time}
  */
  readonly waitTime?: number;
  /**
  * ops_post_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#ops_post_sync AppdataDsource#ops_post_sync}
  */
  readonly opsPostSync?: AppdataDsourceOpsPostSync[] | cdktf.IResolvable;
  /**
  * ops_pre_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#ops_pre_sync AppdataDsource#ops_pre_sync}
  */
  readonly opsPreSync?: AppdataDsourceOpsPreSync[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#tags AppdataDsource#tags}
  */
  readonly tags?: AppdataDsourceTags[] | cdktf.IResolvable;
}
export interface AppdataDsourceOpsPostSyncCredentialsEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#azure_vault_name AppdataDsource#azure_vault_name}
  */
  readonly azureVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#azure_vault_secret_key AppdataDsource#azure_vault_secret_key}
  */
  readonly azureVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#azure_vault_username_key AppdataDsource#azure_vault_username_key}
  */
  readonly azureVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#base_var_name AppdataDsource#base_var_name}
  */
  readonly baseVarName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#cyberark_vault_query_string AppdataDsource#cyberark_vault_query_string}
  */
  readonly cyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#hashicorp_vault_engine AppdataDsource#hashicorp_vault_engine}
  */
  readonly hashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#hashicorp_vault_secret_key AppdataDsource#hashicorp_vault_secret_key}
  */
  readonly hashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#hashicorp_vault_secret_path AppdataDsource#hashicorp_vault_secret_path}
  */
  readonly hashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#hashicorp_vault_username_key AppdataDsource#hashicorp_vault_username_key}
  */
  readonly hashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#password AppdataDsource#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#vault AppdataDsource#vault}
  */
  readonly vault?: string;
}

export function appdataDsourceOpsPostSyncCredentialsEnvVarsToTerraform(struct?: AppdataDsourceOpsPostSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_vault_name: cdktf.stringToTerraform(struct!.azureVaultName),
    azure_vault_secret_key: cdktf.stringToTerraform(struct!.azureVaultSecretKey),
    azure_vault_username_key: cdktf.stringToTerraform(struct!.azureVaultUsernameKey),
    base_var_name: cdktf.stringToTerraform(struct!.baseVarName),
    cyberark_vault_query_string: cdktf.stringToTerraform(struct!.cyberarkVaultQueryString),
    hashicorp_vault_engine: cdktf.stringToTerraform(struct!.hashicorpVaultEngine),
    hashicorp_vault_secret_key: cdktf.stringToTerraform(struct!.hashicorpVaultSecretKey),
    hashicorp_vault_secret_path: cdktf.stringToTerraform(struct!.hashicorpVaultSecretPath),
    hashicorp_vault_username_key: cdktf.stringToTerraform(struct!.hashicorpVaultUsernameKey),
    password: cdktf.stringToTerraform(struct!.password),
    vault: cdktf.stringToTerraform(struct!.vault),
  }
}


export function appdataDsourceOpsPostSyncCredentialsEnvVarsToHclTerraform(struct?: AppdataDsourceOpsPostSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_vault_name: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_var_name: {
      value: cdktf.stringToHclTerraform(struct!.baseVarName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cyberark_vault_query_string: {
      value: cdktf.stringToHclTerraform(struct!.cyberarkVaultQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_engine: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_path: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AppdataDsourceOpsPostSyncCredentialsEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppdataDsourceOpsPostSyncCredentialsEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureVaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultName = this._azureVaultName;
    }
    if (this._azureVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultSecretKey = this._azureVaultSecretKey;
    }
    if (this._azureVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultUsernameKey = this._azureVaultUsernameKey;
    }
    if (this._baseVarName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseVarName = this._baseVarName;
    }
    if (this._cyberarkVaultQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cyberarkVaultQueryString = this._cyberarkVaultQueryString;
    }
    if (this._hashicorpVaultEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultEngine = this._hashicorpVaultEngine;
    }
    if (this._hashicorpVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretKey = this._hashicorpVaultSecretKey;
    }
    if (this._hashicorpVaultSecretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretPath = this._hashicorpVaultSecretPath;
    }
    if (this._hashicorpVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultUsernameKey = this._hashicorpVaultUsernameKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._vault !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdataDsourceOpsPostSyncCredentialsEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureVaultName = undefined;
      this._azureVaultSecretKey = undefined;
      this._azureVaultUsernameKey = undefined;
      this._baseVarName = undefined;
      this._cyberarkVaultQueryString = undefined;
      this._hashicorpVaultEngine = undefined;
      this._hashicorpVaultSecretKey = undefined;
      this._hashicorpVaultSecretPath = undefined;
      this._hashicorpVaultUsernameKey = undefined;
      this._password = undefined;
      this._vault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureVaultName = value.azureVaultName;
      this._azureVaultSecretKey = value.azureVaultSecretKey;
      this._azureVaultUsernameKey = value.azureVaultUsernameKey;
      this._baseVarName = value.baseVarName;
      this._cyberarkVaultQueryString = value.cyberarkVaultQueryString;
      this._hashicorpVaultEngine = value.hashicorpVaultEngine;
      this._hashicorpVaultSecretKey = value.hashicorpVaultSecretKey;
      this._hashicorpVaultSecretPath = value.hashicorpVaultSecretPath;
      this._hashicorpVaultUsernameKey = value.hashicorpVaultUsernameKey;
      this._password = value.password;
      this._vault = value.vault;
    }
  }

  // azure_vault_name - computed: false, optional: true, required: false
  private _azureVaultName?: string; 
  public get azureVaultName() {
    return this.getStringAttribute('azure_vault_name');
  }
  public set azureVaultName(value: string) {
    this._azureVaultName = value;
  }
  public resetAzureVaultName() {
    this._azureVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultNameInput() {
    return this._azureVaultName;
  }

  // azure_vault_secret_key - computed: false, optional: true, required: false
  private _azureVaultSecretKey?: string; 
  public get azureVaultSecretKey() {
    return this.getStringAttribute('azure_vault_secret_key');
  }
  public set azureVaultSecretKey(value: string) {
    this._azureVaultSecretKey = value;
  }
  public resetAzureVaultSecretKey() {
    this._azureVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultSecretKeyInput() {
    return this._azureVaultSecretKey;
  }

  // azure_vault_username_key - computed: false, optional: true, required: false
  private _azureVaultUsernameKey?: string; 
  public get azureVaultUsernameKey() {
    return this.getStringAttribute('azure_vault_username_key');
  }
  public set azureVaultUsernameKey(value: string) {
    this._azureVaultUsernameKey = value;
  }
  public resetAzureVaultUsernameKey() {
    this._azureVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultUsernameKeyInput() {
    return this._azureVaultUsernameKey;
  }

  // base_var_name - computed: false, optional: false, required: true
  private _baseVarName?: string; 
  public get baseVarName() {
    return this.getStringAttribute('base_var_name');
  }
  public set baseVarName(value: string) {
    this._baseVarName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVarNameInput() {
    return this._baseVarName;
  }

  // cyberark_vault_query_string - computed: false, optional: true, required: false
  private _cyberarkVaultQueryString?: string; 
  public get cyberarkVaultQueryString() {
    return this.getStringAttribute('cyberark_vault_query_string');
  }
  public set cyberarkVaultQueryString(value: string) {
    this._cyberarkVaultQueryString = value;
  }
  public resetCyberarkVaultQueryString() {
    this._cyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkVaultQueryStringInput() {
    return this._cyberarkVaultQueryString;
  }

  // hashicorp_vault_engine - computed: false, optional: true, required: false
  private _hashicorpVaultEngine?: string; 
  public get hashicorpVaultEngine() {
    return this.getStringAttribute('hashicorp_vault_engine');
  }
  public set hashicorpVaultEngine(value: string) {
    this._hashicorpVaultEngine = value;
  }
  public resetHashicorpVaultEngine() {
    this._hashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultEngineInput() {
    return this._hashicorpVaultEngine;
  }

  // hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _hashicorpVaultSecretKey?: string; 
  public get hashicorpVaultSecretKey() {
    return this.getStringAttribute('hashicorp_vault_secret_key');
  }
  public set hashicorpVaultSecretKey(value: string) {
    this._hashicorpVaultSecretKey = value;
  }
  public resetHashicorpVaultSecretKey() {
    this._hashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretKeyInput() {
    return this._hashicorpVaultSecretKey;
  }

  // hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _hashicorpVaultSecretPath?: string; 
  public get hashicorpVaultSecretPath() {
    return this.getStringAttribute('hashicorp_vault_secret_path');
  }
  public set hashicorpVaultSecretPath(value: string) {
    this._hashicorpVaultSecretPath = value;
  }
  public resetHashicorpVaultSecretPath() {
    this._hashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretPathInput() {
    return this._hashicorpVaultSecretPath;
  }

  // hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _hashicorpVaultUsernameKey?: string; 
  public get hashicorpVaultUsernameKey() {
    return this.getStringAttribute('hashicorp_vault_username_key');
  }
  public set hashicorpVaultUsernameKey(value: string) {
    this._hashicorpVaultUsernameKey = value;
  }
  public resetHashicorpVaultUsernameKey() {
    this._hashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultUsernameKeyInput() {
    return this._hashicorpVaultUsernameKey;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // vault - computed: false, optional: true, required: false
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  public resetVault() {
    this._vault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }
}

export class AppdataDsourceOpsPostSyncCredentialsEnvVarsList extends cdktf.ComplexList {
  public internalValue? : AppdataDsourceOpsPostSyncCredentialsEnvVars[] | cdktf.IResolvable

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
  public get(index: number): AppdataDsourceOpsPostSyncCredentialsEnvVarsOutputReference {
    return new AppdataDsourceOpsPostSyncCredentialsEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppdataDsourceOpsPostSync {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#command AppdataDsource#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#name AppdataDsource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#shell AppdataDsource#shell}
  */
  readonly shell?: string;
  /**
  * credentials_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#credentials_env_vars AppdataDsource#credentials_env_vars}
  */
  readonly credentialsEnvVars?: AppdataDsourceOpsPostSyncCredentialsEnvVars[] | cdktf.IResolvable;
}

export function appdataDsourceOpsPostSyncToTerraform(struct?: AppdataDsourceOpsPostSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
    credentials_env_vars: cdktf.listMapper(appdataDsourceOpsPostSyncCredentialsEnvVarsToTerraform, true)(struct!.credentialsEnvVars),
  }
}


export function appdataDsourceOpsPostSyncToHclTerraform(struct?: AppdataDsourceOpsPostSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
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
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_env_vars: {
      value: cdktf.listMapperHcl(appdataDsourceOpsPostSyncCredentialsEnvVarsToHclTerraform, true)(struct!.credentialsEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "AppdataDsourceOpsPostSyncCredentialsEnvVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdataDsourceOpsPostSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppdataDsourceOpsPostSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._credentialsEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsEnvVars = this._credentialsEnvVars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdataDsourceOpsPostSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
      this._credentialsEnvVars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._name = value.name;
      this._shell = value.shell;
      this._credentialsEnvVars.internalValue = value.credentialsEnvVars;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // has_credentials - computed: true, optional: false, required: false
  public get hasCredentials() {
    return this.getBooleanAttribute('has_credentials');
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

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // credentials_env_vars - computed: false, optional: true, required: false
  private _credentialsEnvVars = new AppdataDsourceOpsPostSyncCredentialsEnvVarsList(this, "credentials_env_vars", false);
  public get credentialsEnvVars() {
    return this._credentialsEnvVars;
  }
  public putCredentialsEnvVars(value: AppdataDsourceOpsPostSyncCredentialsEnvVars[] | cdktf.IResolvable) {
    this._credentialsEnvVars.internalValue = value;
  }
  public resetCredentialsEnvVars() {
    this._credentialsEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsEnvVarsInput() {
    return this._credentialsEnvVars.internalValue;
  }
}

export class AppdataDsourceOpsPostSyncList extends cdktf.ComplexList {
  public internalValue? : AppdataDsourceOpsPostSync[] | cdktf.IResolvable

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
  public get(index: number): AppdataDsourceOpsPostSyncOutputReference {
    return new AppdataDsourceOpsPostSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppdataDsourceOpsPreSyncCredentialsEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#azure_vault_name AppdataDsource#azure_vault_name}
  */
  readonly azureVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#azure_vault_secret_key AppdataDsource#azure_vault_secret_key}
  */
  readonly azureVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#azure_vault_username_key AppdataDsource#azure_vault_username_key}
  */
  readonly azureVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#base_var_name AppdataDsource#base_var_name}
  */
  readonly baseVarName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#cyberark_vault_query_string AppdataDsource#cyberark_vault_query_string}
  */
  readonly cyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#hashicorp_vault_engine AppdataDsource#hashicorp_vault_engine}
  */
  readonly hashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#hashicorp_vault_secret_key AppdataDsource#hashicorp_vault_secret_key}
  */
  readonly hashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#hashicorp_vault_secret_path AppdataDsource#hashicorp_vault_secret_path}
  */
  readonly hashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#hashicorp_vault_username_key AppdataDsource#hashicorp_vault_username_key}
  */
  readonly hashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#password AppdataDsource#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#vault AppdataDsource#vault}
  */
  readonly vault?: string;
}

export function appdataDsourceOpsPreSyncCredentialsEnvVarsToTerraform(struct?: AppdataDsourceOpsPreSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_vault_name: cdktf.stringToTerraform(struct!.azureVaultName),
    azure_vault_secret_key: cdktf.stringToTerraform(struct!.azureVaultSecretKey),
    azure_vault_username_key: cdktf.stringToTerraform(struct!.azureVaultUsernameKey),
    base_var_name: cdktf.stringToTerraform(struct!.baseVarName),
    cyberark_vault_query_string: cdktf.stringToTerraform(struct!.cyberarkVaultQueryString),
    hashicorp_vault_engine: cdktf.stringToTerraform(struct!.hashicorpVaultEngine),
    hashicorp_vault_secret_key: cdktf.stringToTerraform(struct!.hashicorpVaultSecretKey),
    hashicorp_vault_secret_path: cdktf.stringToTerraform(struct!.hashicorpVaultSecretPath),
    hashicorp_vault_username_key: cdktf.stringToTerraform(struct!.hashicorpVaultUsernameKey),
    password: cdktf.stringToTerraform(struct!.password),
    vault: cdktf.stringToTerraform(struct!.vault),
  }
}


export function appdataDsourceOpsPreSyncCredentialsEnvVarsToHclTerraform(struct?: AppdataDsourceOpsPreSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_vault_name: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_var_name: {
      value: cdktf.stringToHclTerraform(struct!.baseVarName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cyberark_vault_query_string: {
      value: cdktf.stringToHclTerraform(struct!.cyberarkVaultQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_engine: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_path: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AppdataDsourceOpsPreSyncCredentialsEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppdataDsourceOpsPreSyncCredentialsEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureVaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultName = this._azureVaultName;
    }
    if (this._azureVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultSecretKey = this._azureVaultSecretKey;
    }
    if (this._azureVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultUsernameKey = this._azureVaultUsernameKey;
    }
    if (this._baseVarName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseVarName = this._baseVarName;
    }
    if (this._cyberarkVaultQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cyberarkVaultQueryString = this._cyberarkVaultQueryString;
    }
    if (this._hashicorpVaultEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultEngine = this._hashicorpVaultEngine;
    }
    if (this._hashicorpVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretKey = this._hashicorpVaultSecretKey;
    }
    if (this._hashicorpVaultSecretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretPath = this._hashicorpVaultSecretPath;
    }
    if (this._hashicorpVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultUsernameKey = this._hashicorpVaultUsernameKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._vault !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdataDsourceOpsPreSyncCredentialsEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureVaultName = undefined;
      this._azureVaultSecretKey = undefined;
      this._azureVaultUsernameKey = undefined;
      this._baseVarName = undefined;
      this._cyberarkVaultQueryString = undefined;
      this._hashicorpVaultEngine = undefined;
      this._hashicorpVaultSecretKey = undefined;
      this._hashicorpVaultSecretPath = undefined;
      this._hashicorpVaultUsernameKey = undefined;
      this._password = undefined;
      this._vault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureVaultName = value.azureVaultName;
      this._azureVaultSecretKey = value.azureVaultSecretKey;
      this._azureVaultUsernameKey = value.azureVaultUsernameKey;
      this._baseVarName = value.baseVarName;
      this._cyberarkVaultQueryString = value.cyberarkVaultQueryString;
      this._hashicorpVaultEngine = value.hashicorpVaultEngine;
      this._hashicorpVaultSecretKey = value.hashicorpVaultSecretKey;
      this._hashicorpVaultSecretPath = value.hashicorpVaultSecretPath;
      this._hashicorpVaultUsernameKey = value.hashicorpVaultUsernameKey;
      this._password = value.password;
      this._vault = value.vault;
    }
  }

  // azure_vault_name - computed: false, optional: true, required: false
  private _azureVaultName?: string; 
  public get azureVaultName() {
    return this.getStringAttribute('azure_vault_name');
  }
  public set azureVaultName(value: string) {
    this._azureVaultName = value;
  }
  public resetAzureVaultName() {
    this._azureVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultNameInput() {
    return this._azureVaultName;
  }

  // azure_vault_secret_key - computed: false, optional: true, required: false
  private _azureVaultSecretKey?: string; 
  public get azureVaultSecretKey() {
    return this.getStringAttribute('azure_vault_secret_key');
  }
  public set azureVaultSecretKey(value: string) {
    this._azureVaultSecretKey = value;
  }
  public resetAzureVaultSecretKey() {
    this._azureVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultSecretKeyInput() {
    return this._azureVaultSecretKey;
  }

  // azure_vault_username_key - computed: false, optional: true, required: false
  private _azureVaultUsernameKey?: string; 
  public get azureVaultUsernameKey() {
    return this.getStringAttribute('azure_vault_username_key');
  }
  public set azureVaultUsernameKey(value: string) {
    this._azureVaultUsernameKey = value;
  }
  public resetAzureVaultUsernameKey() {
    this._azureVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultUsernameKeyInput() {
    return this._azureVaultUsernameKey;
  }

  // base_var_name - computed: false, optional: false, required: true
  private _baseVarName?: string; 
  public get baseVarName() {
    return this.getStringAttribute('base_var_name');
  }
  public set baseVarName(value: string) {
    this._baseVarName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVarNameInput() {
    return this._baseVarName;
  }

  // cyberark_vault_query_string - computed: false, optional: true, required: false
  private _cyberarkVaultQueryString?: string; 
  public get cyberarkVaultQueryString() {
    return this.getStringAttribute('cyberark_vault_query_string');
  }
  public set cyberarkVaultQueryString(value: string) {
    this._cyberarkVaultQueryString = value;
  }
  public resetCyberarkVaultQueryString() {
    this._cyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkVaultQueryStringInput() {
    return this._cyberarkVaultQueryString;
  }

  // hashicorp_vault_engine - computed: false, optional: true, required: false
  private _hashicorpVaultEngine?: string; 
  public get hashicorpVaultEngine() {
    return this.getStringAttribute('hashicorp_vault_engine');
  }
  public set hashicorpVaultEngine(value: string) {
    this._hashicorpVaultEngine = value;
  }
  public resetHashicorpVaultEngine() {
    this._hashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultEngineInput() {
    return this._hashicorpVaultEngine;
  }

  // hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _hashicorpVaultSecretKey?: string; 
  public get hashicorpVaultSecretKey() {
    return this.getStringAttribute('hashicorp_vault_secret_key');
  }
  public set hashicorpVaultSecretKey(value: string) {
    this._hashicorpVaultSecretKey = value;
  }
  public resetHashicorpVaultSecretKey() {
    this._hashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretKeyInput() {
    return this._hashicorpVaultSecretKey;
  }

  // hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _hashicorpVaultSecretPath?: string; 
  public get hashicorpVaultSecretPath() {
    return this.getStringAttribute('hashicorp_vault_secret_path');
  }
  public set hashicorpVaultSecretPath(value: string) {
    this._hashicorpVaultSecretPath = value;
  }
  public resetHashicorpVaultSecretPath() {
    this._hashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretPathInput() {
    return this._hashicorpVaultSecretPath;
  }

  // hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _hashicorpVaultUsernameKey?: string; 
  public get hashicorpVaultUsernameKey() {
    return this.getStringAttribute('hashicorp_vault_username_key');
  }
  public set hashicorpVaultUsernameKey(value: string) {
    this._hashicorpVaultUsernameKey = value;
  }
  public resetHashicorpVaultUsernameKey() {
    this._hashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultUsernameKeyInput() {
    return this._hashicorpVaultUsernameKey;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // vault - computed: false, optional: true, required: false
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  public resetVault() {
    this._vault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }
}

export class AppdataDsourceOpsPreSyncCredentialsEnvVarsList extends cdktf.ComplexList {
  public internalValue? : AppdataDsourceOpsPreSyncCredentialsEnvVars[] | cdktf.IResolvable

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
  public get(index: number): AppdataDsourceOpsPreSyncCredentialsEnvVarsOutputReference {
    return new AppdataDsourceOpsPreSyncCredentialsEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppdataDsourceOpsPreSync {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#command AppdataDsource#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#name AppdataDsource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#shell AppdataDsource#shell}
  */
  readonly shell?: string;
  /**
  * credentials_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#credentials_env_vars AppdataDsource#credentials_env_vars}
  */
  readonly credentialsEnvVars?: AppdataDsourceOpsPreSyncCredentialsEnvVars[] | cdktf.IResolvable;
}

export function appdataDsourceOpsPreSyncToTerraform(struct?: AppdataDsourceOpsPreSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
    credentials_env_vars: cdktf.listMapper(appdataDsourceOpsPreSyncCredentialsEnvVarsToTerraform, true)(struct!.credentialsEnvVars),
  }
}


export function appdataDsourceOpsPreSyncToHclTerraform(struct?: AppdataDsourceOpsPreSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
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
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_env_vars: {
      value: cdktf.listMapperHcl(appdataDsourceOpsPreSyncCredentialsEnvVarsToHclTerraform, true)(struct!.credentialsEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "AppdataDsourceOpsPreSyncCredentialsEnvVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdataDsourceOpsPreSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppdataDsourceOpsPreSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._credentialsEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsEnvVars = this._credentialsEnvVars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdataDsourceOpsPreSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
      this._credentialsEnvVars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._name = value.name;
      this._shell = value.shell;
      this._credentialsEnvVars.internalValue = value.credentialsEnvVars;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // has_credentials - computed: true, optional: false, required: false
  public get hasCredentials() {
    return this.getBooleanAttribute('has_credentials');
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

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // credentials_env_vars - computed: false, optional: true, required: false
  private _credentialsEnvVars = new AppdataDsourceOpsPreSyncCredentialsEnvVarsList(this, "credentials_env_vars", false);
  public get credentialsEnvVars() {
    return this._credentialsEnvVars;
  }
  public putCredentialsEnvVars(value: AppdataDsourceOpsPreSyncCredentialsEnvVars[] | cdktf.IResolvable) {
    this._credentialsEnvVars.internalValue = value;
  }
  public resetCredentialsEnvVars() {
    this._credentialsEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsEnvVarsInput() {
    return this._credentialsEnvVars.internalValue;
  }
}

export class AppdataDsourceOpsPreSyncList extends cdktf.ComplexList {
  public internalValue? : AppdataDsourceOpsPreSync[] | cdktf.IResolvable

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
  public get(index: number): AppdataDsourceOpsPreSyncOutputReference {
    return new AppdataDsourceOpsPreSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppdataDsourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#key AppdataDsource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#value AppdataDsource#value}
  */
  readonly value?: string;
}

export function appdataDsourceTagsToTerraform(struct?: AppdataDsourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appdataDsourceTagsToHclTerraform(struct?: AppdataDsourceTags | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdataDsourceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppdataDsourceTags | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdataDsourceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
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

export class AppdataDsourceTagsList extends cdktf.ComplexList {
  public internalValue? : AppdataDsourceTags[] | cdktf.IResolvable

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
  public get(index: number): AppdataDsourceTagsOutputReference {
    return new AppdataDsourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource delphix_appdata_dsource}
*/
export class AppdataDsource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "delphix_appdata_dsource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppdataDsource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppdataDsource to import
  * @param importFromId The id of the existing AppdataDsource that should be imported. Refer to the {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppdataDsource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "delphix_appdata_dsource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/appdata_dsource delphix_appdata_dsource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppdataDsourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppdataDsourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'delphix_appdata_dsource',
      terraformGeneratorMetadata: {
        providerName: 'delphix',
        providerVersion: '4.1.1',
        providerVersionConstraint: '4.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._environmentUser = config.environmentUser;
    this._excludes = config.excludes;
    this._followSymlinks = config.followSymlinks;
    this._groupId = config.groupId;
    this._ignoreTagChanges = config.ignoreTagChanges;
    this._linkType = config.linkType;
    this._logSyncEnabled = config.logSyncEnabled;
    this._makeCurrentAccountOwner = config.makeCurrentAccountOwner;
    this._name = config.name;
    this._parameters = config.parameters;
    this._retentionPolicyId = config.retentionPolicyId;
    this._rollbackOnFailure = config.rollbackOnFailure;
    this._skipWaitForSnapshotCreation = config.skipWaitForSnapshotCreation;
    this._sourceValue = config.sourceValue;
    this._stagingEnvironment = config.stagingEnvironment;
    this._stagingEnvironmentUser = config.stagingEnvironmentUser;
    this._stagingMountBase = config.stagingMountBase;
    this._syncParameters = config.syncParameters;
    this._syncPolicyId = config.syncPolicyId;
    this._waitTime = config.waitTime;
    this._opsPostSync.internalValue = config.opsPostSync;
    this._opsPreSync.internalValue = config.opsPreSync;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // current_timeflow_id - computed: true, optional: false, required: false
  public get currentTimeflowId() {
    return this.getStringAttribute('current_timeflow_id');
  }

  // data_uuid - computed: true, optional: false, required: false
  public get dataUuid() {
    return this.getStringAttribute('data_uuid');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // engine_name - computed: true, optional: false, required: false
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }

  // environment_user - computed: false, optional: true, required: false
  private _environmentUser?: string; 
  public get environmentUser() {
    return this.getStringAttribute('environment_user');
  }
  public set environmentUser(value: string) {
    this._environmentUser = value;
  }
  public resetEnvironmentUser() {
    this._environmentUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentUserInput() {
    return this._environmentUser;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // follow_symlinks - computed: false, optional: true, required: false
  private _followSymlinks?: string[]; 
  public get followSymlinks() {
    return this.getListAttribute('follow_symlinks');
  }
  public set followSymlinks(value: string[]) {
    this._followSymlinks = value;
  }
  public resetFollowSymlinks() {
    this._followSymlinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSymlinksInput() {
    return this._followSymlinks;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_tag_changes - computed: false, optional: true, required: false
  private _ignoreTagChanges?: boolean | cdktf.IResolvable; 
  public get ignoreTagChanges() {
    return this.getBooleanAttribute('ignore_tag_changes');
  }
  public set ignoreTagChanges(value: boolean | cdktf.IResolvable) {
    this._ignoreTagChanges = value;
  }
  public resetIgnoreTagChanges() {
    this._ignoreTagChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagChangesInput() {
    return this._ignoreTagChanges;
  }

  // is_appdata - computed: true, optional: false, required: false
  public get isAppdata() {
    return this.getBooleanAttribute('is_appdata');
  }

  // is_replica - computed: true, optional: false, required: false
  public get isReplica() {
    return this.getBooleanAttribute('is_replica');
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // log_sync_enabled - computed: false, optional: true, required: false
  private _logSyncEnabled?: boolean | cdktf.IResolvable; 
  public get logSyncEnabled() {
    return this.getBooleanAttribute('log_sync_enabled');
  }
  public set logSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._logSyncEnabled = value;
  }
  public resetLogSyncEnabled() {
    this._logSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSyncEnabledInput() {
    return this._logSyncEnabled;
  }

  // make_current_account_owner - computed: false, optional: true, required: false
  private _makeCurrentAccountOwner?: boolean | cdktf.IResolvable; 
  public get makeCurrentAccountOwner() {
    return this.getBooleanAttribute('make_current_account_owner');
  }
  public set makeCurrentAccountOwner(value: boolean | cdktf.IResolvable) {
    this._makeCurrentAccountOwner = value;
  }
  public resetMakeCurrentAccountOwner() {
    this._makeCurrentAccountOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makeCurrentAccountOwnerInput() {
    return this._makeCurrentAccountOwner;
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // plugin_version - computed: true, optional: false, required: false
  public get pluginVersion() {
    return this.getStringAttribute('plugin_version');
  }

  // previous_timeflow_id - computed: true, optional: false, required: false
  public get previousTimeflowId() {
    return this.getStringAttribute('previous_timeflow_id');
  }

  // retention_policy_id - computed: true, optional: true, required: false
  private _retentionPolicyId?: string; 
  public get retentionPolicyId() {
    return this.getStringAttribute('retention_policy_id');
  }
  public set retentionPolicyId(value: string) {
    this._retentionPolicyId = value;
  }
  public resetRetentionPolicyId() {
    this._retentionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyIdInput() {
    return this._retentionPolicyId;
  }

  // rollback_on_failure - computed: false, optional: true, required: false
  private _rollbackOnFailure?: boolean | cdktf.IResolvable; 
  public get rollbackOnFailure() {
    return this.getBooleanAttribute('rollback_on_failure');
  }
  public set rollbackOnFailure(value: boolean | cdktf.IResolvable) {
    this._rollbackOnFailure = value;
  }
  public resetRollbackOnFailure() {
    this._rollbackOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackOnFailureInput() {
    return this._rollbackOnFailure;
  }

  // skip_wait_for_snapshot_creation - computed: false, optional: true, required: false
  private _skipWaitForSnapshotCreation?: boolean | cdktf.IResolvable; 
  public get skipWaitForSnapshotCreation() {
    return this.getBooleanAttribute('skip_wait_for_snapshot_creation');
  }
  public set skipWaitForSnapshotCreation(value: boolean | cdktf.IResolvable) {
    this._skipWaitForSnapshotCreation = value;
  }
  public resetSkipWaitForSnapshotCreation() {
    this._skipWaitForSnapshotCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitForSnapshotCreationInput() {
    return this._skipWaitForSnapshotCreation;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_value - computed: false, optional: true, required: false
  private _sourceValue?: string; 
  public get sourceValue() {
    return this.getStringAttribute('source_value');
  }
  public set sourceValue(value: string) {
    this._sourceValue = value;
  }
  public resetSourceValue() {
    this._sourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceValueInput() {
    return this._sourceValue;
  }

  // staging_environment - computed: false, optional: true, required: false
  private _stagingEnvironment?: string; 
  public get stagingEnvironment() {
    return this.getStringAttribute('staging_environment');
  }
  public set stagingEnvironment(value: string) {
    this._stagingEnvironment = value;
  }
  public resetStagingEnvironment() {
    this._stagingEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingEnvironmentInput() {
    return this._stagingEnvironment;
  }

  // staging_environment_user - computed: false, optional: true, required: false
  private _stagingEnvironmentUser?: string; 
  public get stagingEnvironmentUser() {
    return this.getStringAttribute('staging_environment_user');
  }
  public set stagingEnvironmentUser(value: string) {
    this._stagingEnvironmentUser = value;
  }
  public resetStagingEnvironmentUser() {
    this._stagingEnvironmentUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingEnvironmentUserInput() {
    return this._stagingEnvironmentUser;
  }

  // staging_mount_base - computed: false, optional: true, required: false
  private _stagingMountBase?: string; 
  public get stagingMountBase() {
    return this.getStringAttribute('staging_mount_base');
  }
  public set stagingMountBase(value: string) {
    this._stagingMountBase = value;
  }
  public resetStagingMountBase() {
    this._stagingMountBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingMountBaseInput() {
    return this._stagingMountBase;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_parameters - computed: false, optional: true, required: false
  private _syncParameters?: string; 
  public get syncParameters() {
    return this.getStringAttribute('sync_parameters');
  }
  public set syncParameters(value: string) {
    this._syncParameters = value;
  }
  public resetSyncParameters() {
    this._syncParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncParametersInput() {
    return this._syncParameters;
  }

  // sync_policy_id - computed: true, optional: true, required: false
  private _syncPolicyId?: string; 
  public get syncPolicyId() {
    return this.getStringAttribute('sync_policy_id');
  }
  public set syncPolicyId(value: string) {
    this._syncPolicyId = value;
  }
  public resetSyncPolicyId() {
    this._syncPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyIdInput() {
    return this._syncPolicyId;
  }

  // wait_time - computed: false, optional: true, required: false
  private _waitTime?: number; 
  public get waitTime() {
    return this.getNumberAttribute('wait_time');
  }
  public set waitTime(value: number) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }

  // ops_post_sync - computed: false, optional: true, required: false
  private _opsPostSync = new AppdataDsourceOpsPostSyncList(this, "ops_post_sync", false);
  public get opsPostSync() {
    return this._opsPostSync;
  }
  public putOpsPostSync(value: AppdataDsourceOpsPostSync[] | cdktf.IResolvable) {
    this._opsPostSync.internalValue = value;
  }
  public resetOpsPostSync() {
    this._opsPostSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsPostSyncInput() {
    return this._opsPostSync.internalValue;
  }

  // ops_pre_sync - computed: false, optional: true, required: false
  private _opsPreSync = new AppdataDsourceOpsPreSyncList(this, "ops_pre_sync", false);
  public get opsPreSync() {
    return this._opsPreSync;
  }
  public putOpsPreSync(value: AppdataDsourceOpsPreSync[] | cdktf.IResolvable) {
    this._opsPreSync.internalValue = value;
  }
  public resetOpsPreSync() {
    this._opsPreSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsPreSyncInput() {
    return this._opsPreSync.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AppdataDsourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppdataDsourceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      environment_user: cdktf.stringToTerraform(this._environmentUser),
      excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludes),
      follow_symlinks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._followSymlinks),
      group_id: cdktf.stringToTerraform(this._groupId),
      ignore_tag_changes: cdktf.booleanToTerraform(this._ignoreTagChanges),
      link_type: cdktf.stringToTerraform(this._linkType),
      log_sync_enabled: cdktf.booleanToTerraform(this._logSyncEnabled),
      make_current_account_owner: cdktf.booleanToTerraform(this._makeCurrentAccountOwner),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.stringToTerraform(this._parameters),
      retention_policy_id: cdktf.stringToTerraform(this._retentionPolicyId),
      rollback_on_failure: cdktf.booleanToTerraform(this._rollbackOnFailure),
      skip_wait_for_snapshot_creation: cdktf.booleanToTerraform(this._skipWaitForSnapshotCreation),
      source_value: cdktf.stringToTerraform(this._sourceValue),
      staging_environment: cdktf.stringToTerraform(this._stagingEnvironment),
      staging_environment_user: cdktf.stringToTerraform(this._stagingEnvironmentUser),
      staging_mount_base: cdktf.stringToTerraform(this._stagingMountBase),
      sync_parameters: cdktf.stringToTerraform(this._syncParameters),
      sync_policy_id: cdktf.stringToTerraform(this._syncPolicyId),
      wait_time: cdktf.numberToTerraform(this._waitTime),
      ops_post_sync: cdktf.listMapper(appdataDsourceOpsPostSyncToTerraform, true)(this._opsPostSync.internalValue),
      ops_pre_sync: cdktf.listMapper(appdataDsourceOpsPreSyncToTerraform, true)(this._opsPreSync.internalValue),
      tags: cdktf.listMapper(appdataDsourceTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_user: {
        value: cdktf.stringToHclTerraform(this._environmentUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      follow_symlinks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._followSymlinks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_tag_changes: {
        value: cdktf.booleanToHclTerraform(this._ignoreTagChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link_type: {
        value: cdktf.stringToHclTerraform(this._linkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._logSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      make_current_account_owner: {
        value: cdktf.booleanToHclTerraform(this._makeCurrentAccountOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_policy_id: {
        value: cdktf.stringToHclTerraform(this._retentionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollback_on_failure: {
        value: cdktf.booleanToHclTerraform(this._rollbackOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_wait_for_snapshot_creation: {
        value: cdktf.booleanToHclTerraform(this._skipWaitForSnapshotCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_value: {
        value: cdktf.stringToHclTerraform(this._sourceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging_environment: {
        value: cdktf.stringToHclTerraform(this._stagingEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging_environment_user: {
        value: cdktf.stringToHclTerraform(this._stagingEnvironmentUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging_mount_base: {
        value: cdktf.stringToHclTerraform(this._stagingMountBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_parameters: {
        value: cdktf.stringToHclTerraform(this._syncParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_policy_id: {
        value: cdktf.stringToHclTerraform(this._syncPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_time: {
        value: cdktf.numberToHclTerraform(this._waitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ops_post_sync: {
        value: cdktf.listMapperHcl(appdataDsourceOpsPostSyncToHclTerraform, true)(this._opsPostSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppdataDsourceOpsPostSyncList",
      },
      ops_pre_sync: {
        value: cdktf.listMapperHcl(appdataDsourceOpsPreSyncToHclTerraform, true)(this._opsPreSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppdataDsourceOpsPreSyncList",
      },
      tags: {
        value: cdktf.listMapperHcl(appdataDsourceTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppdataDsourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
