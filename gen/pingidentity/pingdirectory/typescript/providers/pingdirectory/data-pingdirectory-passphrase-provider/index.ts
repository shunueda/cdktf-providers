// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/passphrase_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryPassphraseProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/passphrase_provider#name DataPingdirectoryPassphraseProvider#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/passphrase_provider pingdirectory_passphrase_provider}
*/
export class DataPingdirectoryPassphraseProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_passphrase_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryPassphraseProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryPassphraseProvider to import
  * @param importFromId The id of the existing DataPingdirectoryPassphraseProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/passphrase_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryPassphraseProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_passphrase_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/passphrase_provider pingdirectory_passphrase_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryPassphraseProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryPassphraseProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_passphrase_provider',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_external_server - computed: true, optional: false, required: false
  public get awsExternalServer() {
    return this.getStringAttribute('aws_external_server');
  }

  // azure_authentication_method - computed: true, optional: false, required: false
  public get azureAuthenticationMethod() {
    return this.getStringAttribute('azure_authentication_method');
  }

  // conjur_external_server - computed: true, optional: false, required: false
  public get conjurExternalServer() {
    return this.getStringAttribute('conjur_external_server');
  }

  // conjur_secret_relative_path - computed: true, optional: false, required: false
  public get conjurSecretRelativePath() {
    return this.getStringAttribute('conjur_secret_relative_path');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // environment_variable - computed: true, optional: false, required: false
  public get environmentVariable() {
    return this.getStringAttribute('environment_variable');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // http_proxy_external_server - computed: true, optional: false, required: false
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_uri - computed: true, optional: false, required: false
  public get keyVaultUri() {
    return this.getStringAttribute('key_vault_uri');
  }

  // max_cache_duration - computed: true, optional: false, required: false
  public get maxCacheDuration() {
    return this.getStringAttribute('max_cache_duration');
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

  // obscured_value - computed: true, optional: false, required: false
  public get obscuredValue() {
    return this.getStringAttribute('obscured_value');
  }

  // password_file - computed: true, optional: false, required: false
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }

  // secret_field_name - computed: true, optional: false, required: false
  public get secretFieldName() {
    return this.getStringAttribute('secret_field_name');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // secret_version_id - computed: true, optional: false, required: false
  public get secretVersionId() {
    return this.getStringAttribute('secret_version_id');
  }

  // secret_version_stage - computed: true, optional: false, required: false
  public get secretVersionStage() {
    return this.getStringAttribute('secret_version_stage');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_external_server - computed: true, optional: false, required: false
  public get vaultExternalServer() {
    return this.getStringAttribute('vault_external_server');
  }

  // vault_secret_field_name - computed: true, optional: false, required: false
  public get vaultSecretFieldName() {
    return this.getStringAttribute('vault_secret_field_name');
  }

  // vault_secret_path - computed: true, optional: false, required: false
  public get vaultSecretPath() {
    return this.getStringAttribute('vault_secret_path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
