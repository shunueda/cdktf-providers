// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/trust_manager_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryTrustManagerProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/trust_manager_provider#name DataPingdirectoryTrustManagerProvider#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/trust_manager_provider pingdirectory_trust_manager_provider}
*/
export class DataPingdirectoryTrustManagerProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_trust_manager_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryTrustManagerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryTrustManagerProvider to import
  * @param importFromId The id of the existing DataPingdirectoryTrustManagerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/trust_manager_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryTrustManagerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_trust_manager_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/trust_manager_provider pingdirectory_trust_manager_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryTrustManagerProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryTrustManagerProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_trust_manager_provider',
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

  // enable_trust_manager_caching - computed: true, optional: false, required: false
  public get enableTrustManagerCaching() {
    return this.getBooleanAttribute('enable_trust_manager_caching');
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

  // include_jvm_default_issuers - computed: true, optional: false, required: false
  public get includeJvmDefaultIssuers() {
    return this.getBooleanAttribute('include_jvm_default_issuers');
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

  // trust_store_file - computed: true, optional: false, required: false
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }

  // trust_store_pin - computed: true, optional: false, required: false
  public get trustStorePin() {
    return this.getStringAttribute('trust_store_pin');
  }

  // trust_store_pin_file - computed: true, optional: false, required: false
  public get trustStorePinFile() {
    return this.getStringAttribute('trust_store_pin_file');
  }

  // trust_store_pin_passphrase_provider - computed: true, optional: false, required: false
  public get trustStorePinPassphraseProvider() {
    return this.getStringAttribute('trust_store_pin_passphrase_provider');
  }

  // trust_store_type - computed: true, optional: false, required: false
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
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
