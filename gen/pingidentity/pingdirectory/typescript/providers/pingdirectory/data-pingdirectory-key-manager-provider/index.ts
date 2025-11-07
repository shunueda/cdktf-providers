// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/key_manager_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryKeyManagerProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/key_manager_provider#name DataPingdirectoryKeyManagerProvider#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/key_manager_provider pingdirectory_key_manager_provider}
*/
export class DataPingdirectoryKeyManagerProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_key_manager_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryKeyManagerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryKeyManagerProvider to import
  * @param importFromId The id of the existing DataPingdirectoryKeyManagerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/key_manager_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryKeyManagerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_key_manager_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/key_manager_provider pingdirectory_key_manager_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryKeyManagerProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryKeyManagerProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_key_manager_provider',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_key_manager_caching - computed: true, optional: false, required: false
  public get enableKeyManagerCaching() {
    return this.getBooleanAttribute('enable_key_manager_caching');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_store_file - computed: true, optional: false, required: false
  public get keyStoreFile() {
    return this.getStringAttribute('key_store_file');
  }

  // key_store_pin - computed: true, optional: false, required: false
  public get keyStorePin() {
    return this.getStringAttribute('key_store_pin');
  }

  // key_store_pin_file - computed: true, optional: false, required: false
  public get keyStorePinFile() {
    return this.getStringAttribute('key_store_pin_file');
  }

  // key_store_pin_passphrase_provider - computed: true, optional: false, required: false
  public get keyStorePinPassphraseProvider() {
    return this.getStringAttribute('key_store_pin_passphrase_provider');
  }

  // key_store_type - computed: true, optional: false, required: false
  public get keyStoreType() {
    return this.getStringAttribute('key_store_type');
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

  // pkcs11_key_store_type - computed: true, optional: false, required: false
  public get pkcs11KeyStoreType() {
    return this.getStringAttribute('pkcs11_key_store_type');
  }

  // pkcs11_max_cache_duration - computed: true, optional: false, required: false
  public get pkcs11MaxCacheDuration() {
    return this.getStringAttribute('pkcs11_max_cache_duration');
  }

  // pkcs11_provider_class - computed: true, optional: false, required: false
  public get pkcs11ProviderClass() {
    return this.getStringAttribute('pkcs11_provider_class');
  }

  // pkcs11_provider_configuration_file - computed: true, optional: false, required: false
  public get pkcs11ProviderConfigurationFile() {
    return this.getStringAttribute('pkcs11_provider_configuration_file');
  }

  // private_key_pin - computed: true, optional: false, required: false
  public get privateKeyPin() {
    return this.getStringAttribute('private_key_pin');
  }

  // private_key_pin_file - computed: true, optional: false, required: false
  public get privateKeyPinFile() {
    return this.getStringAttribute('private_key_pin_file');
  }

  // private_key_pin_passphrase_provider - computed: true, optional: false, required: false
  public get privateKeyPinPassphraseProvider() {
    return this.getStringAttribute('private_key_pin_passphrase_provider');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
