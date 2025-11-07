// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsSyncGcpSecretManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#config SecretsSyncGcpSecretManager#config}
  */
  readonly config: string;
  /**
  * The behavior to be performed on the secrets in the sync target when this resource is deleted or recreated. Either `leave_in_target` (default) or `delete_from_target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#delete_behavior SecretsSyncGcpSecretManager#delete_behavior}
  */
  readonly deleteBehavior?: string;
  /**
  * Specifies the format secrets will be stored in. Either `env` or `json`. Defaults to `json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#format SecretsSyncGcpSecretManager#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#id SecretsSyncGcpSecretManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the integration to use for this sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#integration SecretsSyncGcpSecretManager#integration}
  */
  readonly integration: string;
  /**
  * The name used to store the secret when sync_strategy is set to `single-secret` (note that the integration's `gcp_secret_prefix` will be prepended to this).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#name SecretsSyncGcpSecretManager#name}
  */
  readonly name?: string;
  /**
  * The name of the Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#project SecretsSyncGcpSecretManager#project}
  */
  readonly project: string;
  /**
  * The GCP regions used for replication. Can include any supported GCP region or `["automatic"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#regions SecretsSyncGcpSecretManager#regions}
  */
  readonly regions: string[];
  /**
  * Determines whether secrets are synced to a single secret (`single-secret`) as a JSON object or multiple discrete secrets (`multi-secret`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#sync_strategy SecretsSyncGcpSecretManager#sync_strategy}
  */
  readonly syncStrategy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager doppler_secrets_sync_gcp_secret_manager}
*/
export class SecretsSyncGcpSecretManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_secrets_sync_gcp_secret_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretsSyncGcpSecretManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncGcpSecretManager to import
  * @param importFromId The id of the existing SecretsSyncGcpSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncGcpSecretManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_secrets_sync_gcp_secret_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_gcp_secret_manager doppler_secrets_sync_gcp_secret_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncGcpSecretManagerConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncGcpSecretManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_secrets_sync_gcp_secret_manager',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
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
    this._format = config.format;
    this._id = config.id;
    this._integration = config.integration;
    this._name = config.name;
    this._project = config.project;
    this._regions = config.regions;
    this._syncStrategy = config.syncStrategy;
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      delete_behavior: cdktf.stringToTerraform(this._deleteBehavior),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      sync_strategy: cdktf.stringToTerraform(this._syncStrategy),
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
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sync_strategy: {
        value: cdktf.stringToHclTerraform(this._syncStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
