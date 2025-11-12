// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/cipher_stream_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryCipherStreamProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/cipher_stream_provider#name DataPingdirectoryCipherStreamProvider#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/cipher_stream_provider pingdirectory_cipher_stream_provider}
*/
export class DataPingdirectoryCipherStreamProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_cipher_stream_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryCipherStreamProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryCipherStreamProvider to import
  * @param importFromId The id of the existing DataPingdirectoryCipherStreamProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/cipher_stream_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryCipherStreamProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_cipher_stream_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/cipher_stream_provider pingdirectory_cipher_stream_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryCipherStreamProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryCipherStreamProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_cipher_stream_provider',
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

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // aws_external_server - computed: true, optional: false, required: false
  public get awsExternalServer() {
    return this.getStringAttribute('aws_external_server');
  }

  // aws_region_name - computed: true, optional: false, required: false
  public get awsRegionName() {
    return this.getStringAttribute('aws_region_name');
  }

  // aws_secret_access_key - computed: true, optional: false, required: false
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
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

  // encrypted_passphrase_file - computed: true, optional: false, required: false
  public get encryptedPassphraseFile() {
    return this.getStringAttribute('encrypted_passphrase_file');
  }

  // encryption_metadata_file - computed: true, optional: false, required: false
  public get encryptionMetadataFile() {
    return this.getStringAttribute('encryption_metadata_file');
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

  // iteration_count - computed: true, optional: false, required: false
  public get iterationCount() {
    return this.getNumberAttribute('iteration_count');
  }

  // key_store_pin - computed: true, optional: false, required: false
  public get keyStorePin() {
    return this.getStringAttribute('key_store_pin');
  }

  // key_store_pin_environment_variable - computed: true, optional: false, required: false
  public get keyStorePinEnvironmentVariable() {
    return this.getStringAttribute('key_store_pin_environment_variable');
  }

  // key_store_pin_file - computed: true, optional: false, required: false
  public get keyStorePinFile() {
    return this.getStringAttribute('key_store_pin_file');
  }

  // key_vault_uri - computed: true, optional: false, required: false
  public get keyVaultUri() {
    return this.getStringAttribute('key_vault_uri');
  }

  // key_wrapping_transformation - computed: true, optional: false, required: false
  public get keyWrappingTransformation() {
    return this.getStringAttribute('key_wrapping_transformation');
  }

  // kms_encryption_key_arn - computed: true, optional: false, required: false
  public get kmsEncryptionKeyArn() {
    return this.getStringAttribute('kms_encryption_key_arn');
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

  // password_file - computed: true, optional: false, required: false
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }

  // pkcs11_key_store_type - computed: true, optional: false, required: false
  public get pkcs11KeyStoreType() {
    return this.getStringAttribute('pkcs11_key_store_type');
  }

  // pkcs11_provider_class - computed: true, optional: false, required: false
  public get pkcs11ProviderClass() {
    return this.getStringAttribute('pkcs11_provider_class');
  }

  // pkcs11_provider_configuration_file - computed: true, optional: false, required: false
  public get pkcs11ProviderConfigurationFile() {
    return this.getStringAttribute('pkcs11_provider_configuration_file');
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

  // ssl_cert_nickname - computed: true, optional: false, required: false
  public get sslCertNickname() {
    return this.getStringAttribute('ssl_cert_nickname');
  }

  // trust_store_file - computed: true, optional: false, required: false
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }

  // trust_store_pin - computed: true, optional: false, required: false
  public get trustStorePin() {
    return this.getStringAttribute('trust_store_pin');
  }

  // trust_store_type - computed: true, optional: false, required: false
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_authentication_method - computed: true, optional: false, required: false
  public get vaultAuthenticationMethod() {
    return this.getStringAttribute('vault_authentication_method');
  }

  // vault_encryption_metadata_file - computed: true, optional: false, required: false
  public get vaultEncryptionMetadataFile() {
    return this.getStringAttribute('vault_encryption_metadata_file');
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

  // vault_server_base_uri - computed: true, optional: false, required: false
  public get vaultServerBaseUri() {
    return cdktf.Fn.tolist(this.getListAttribute('vault_server_base_uri'));
  }

  // wait_for_password_file - computed: true, optional: false, required: false
  public get waitForPasswordFile() {
    return this.getBooleanAttribute('wait_for_password_file');
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
