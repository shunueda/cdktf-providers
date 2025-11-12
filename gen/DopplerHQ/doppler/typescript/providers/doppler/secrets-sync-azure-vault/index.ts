// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsSyncAzureVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#config SecretsSyncAzureVault#config}
  */
  readonly config: string;
  /**
  * The behavior to be performed on the secrets in the sync target when this resource is deleted or recreated. Either `leave_in_target` (default) or `delete_from_target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#delete_behavior SecretsSyncAzureVault#delete_behavior}
  */
  readonly deleteBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#id SecretsSyncAzureVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the integration to use for this sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#integration SecretsSyncAzureVault#integration}
  */
  readonly integration: string;
  /**
  * The name of the Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#project SecretsSyncAzureVault#project}
  */
  readonly project: string;
  /**
  * The name of the secret being synced to when using the "single-secret" sync strategy. Required when using "single-secret" sync strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#single_secret_name SecretsSyncAzureVault#single_secret_name}
  */
  readonly singleSecretName?: string;
  /**
  * Determines whether secrets are synced to a single secret (`single-secret`) as a JSON object or multiple discrete secrets (`multi-secret`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#sync_strategy SecretsSyncAzureVault#sync_strategy}
  */
  readonly syncStrategy: string;
  /**
  * The Azure Vault URI for the vault secrets will be synced to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#vault_uri SecretsSyncAzureVault#vault_uri}
  */
  readonly vaultUri: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault doppler_secrets_sync_azure_vault}
*/
export class SecretsSyncAzureVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_secrets_sync_azure_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretsSyncAzureVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncAzureVault to import
  * @param importFromId The id of the existing SecretsSyncAzureVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncAzureVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_secrets_sync_azure_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_azure_vault doppler_secrets_sync_azure_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncAzureVaultConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncAzureVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_secrets_sync_azure_vault',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0',
        providerVersionConstraint: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._deleteBehavior = config.deleteBehavior;
    this._id = config.id;
    this._integration = config.integration;
    this._project = config.project;
    this._singleSecretName = config.singleSecretName;
    this._syncStrategy = config.syncStrategy;
    this._vaultUri = config.vaultUri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // delete_behavior - computed: false, optional: true, required: false
  private _deleteBehavior?: string; 
  public get deleteBehavior() {
    return this.getStringAttribute('delete_behavior');
  }
  public set deleteBehavior(value: string) {
    this._deleteBehavior = value;
  }
  public resetDeleteBehavior() {
    this._deleteBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBehaviorInput() {
    return this._deleteBehavior;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // single_secret_name - computed: false, optional: true, required: false
  private _singleSecretName?: string; 
  public get singleSecretName() {
    return this.getStringAttribute('single_secret_name');
  }
  public set singleSecretName(value: string) {
    this._singleSecretName = value;
  }
  public resetSingleSecretName() {
    this._singleSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSecretNameInput() {
    return this._singleSecretName;
  }

  // sync_strategy - computed: false, optional: false, required: true
  private _syncStrategy?: string; 
  public get syncStrategy() {
    return this.getStringAttribute('sync_strategy');
  }
  public set syncStrategy(value: string) {
    this._syncStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStrategyInput() {
    return this._syncStrategy;
  }

  // vault_uri - computed: false, optional: false, required: true
  private _vaultUri?: string; 
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }
  public set vaultUri(value: string) {
    this._vaultUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUriInput() {
    return this._vaultUri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      delete_behavior: cdktf.stringToTerraform(this._deleteBehavior),
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      project: cdktf.stringToTerraform(this._project),
      single_secret_name: cdktf.stringToTerraform(this._singleSecretName),
      sync_strategy: cdktf.stringToTerraform(this._syncStrategy),
      vault_uri: cdktf.stringToTerraform(this._vaultUri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_behavior: {
        value: cdktf.stringToHclTerraform(this._deleteBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration: {
        value: cdktf.stringToHclTerraform(this._integration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_secret_name: {
        value: cdktf.stringToHclTerraform(this._singleSecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_strategy: {
        value: cdktf.stringToHclTerraform(this._syncStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_uri: {
        value: cdktf.stringToHclTerraform(this._vaultUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
