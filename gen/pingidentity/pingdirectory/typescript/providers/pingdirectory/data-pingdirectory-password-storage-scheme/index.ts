// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_storage_scheme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryPasswordStorageSchemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_storage_scheme#name DataPingdirectoryPasswordStorageScheme#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_storage_scheme pingdirectory_password_storage_scheme}
*/
export class DataPingdirectoryPasswordStorageScheme extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_password_storage_scheme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryPasswordStorageScheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryPasswordStorageScheme to import
  * @param importFromId The id of the existing DataPingdirectoryPasswordStorageScheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_storage_scheme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryPasswordStorageScheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_password_storage_scheme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_storage_scheme pingdirectory_password_storage_scheme} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryPasswordStorageSchemeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryPasswordStorageSchemeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_password_storage_scheme',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
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

  // bcrypt_cost_factor - computed: true, optional: false, required: false
  public get bcryptCostFactor() {
    return this.getNumberAttribute('bcrypt_cost_factor');
  }

  // conjur_external_server - computed: true, optional: false, required: false
  public get conjurExternalServer() {
    return this.getStringAttribute('conjur_external_server');
  }

  // default_field - computed: true, optional: false, required: false
  public get defaultField() {
    return this.getStringAttribute('default_field');
  }

  // derived_key_length_bytes - computed: true, optional: false, required: false
  public get derivedKeyLengthBytes() {
    return this.getNumberAttribute('derived_key_length_bytes');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // digest_algorithm - computed: true, optional: false, required: false
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encoded_password_cache_size - computed: true, optional: false, required: false
  public get encodedPasswordCacheSize() {
    return this.getNumberAttribute('encoded_password_cache_size');
  }

  // encryption_settings_definition_id - computed: true, optional: false, required: false
  public get encryptionSettingsDefinitionId() {
    return this.getStringAttribute('encryption_settings_definition_id');
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

  // key_vault_uri - computed: true, optional: false, required: false
  public get keyVaultUri() {
    return this.getStringAttribute('key_vault_uri');
  }

  // max_password_length - computed: true, optional: false, required: false
  public get maxPasswordLength() {
    return this.getNumberAttribute('max_password_length');
  }

  // memory_usage_kb - computed: true, optional: false, required: false
  public get memoryUsageKb() {
    return this.getNumberAttribute('memory_usage_kb');
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

  // num_digest_rounds - computed: true, optional: false, required: false
  public get numDigestRounds() {
    return this.getNumberAttribute('num_digest_rounds');
  }

  // parallelism_factor - computed: true, optional: false, required: false
  public get parallelismFactor() {
    return this.getNumberAttribute('parallelism_factor');
  }

  // password_encoding_mechanism - computed: true, optional: false, required: false
  public get passwordEncodingMechanism() {
    return this.getStringAttribute('password_encoding_mechanism');
  }

  // salt_length_bytes - computed: true, optional: false, required: false
  public get saltLengthBytes() {
    return this.getNumberAttribute('salt_length_bytes');
  }

  // scrypt_block_size - computed: true, optional: false, required: false
  public get scryptBlockSize() {
    return this.getNumberAttribute('scrypt_block_size');
  }

  // scrypt_cpu_memory_cost_factor_exponent - computed: true, optional: false, required: false
  public get scryptCpuMemoryCostFactorExponent() {
    return this.getNumberAttribute('scrypt_cpu_memory_cost_factor_exponent');
  }

  // scrypt_parallelization_parameter - computed: true, optional: false, required: false
  public get scryptParallelizationParameter() {
    return this.getNumberAttribute('scrypt_parallelization_parameter');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_external_server - computed: true, optional: false, required: false
  public get vaultExternalServer() {
    return this.getStringAttribute('vault_external_server');
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
