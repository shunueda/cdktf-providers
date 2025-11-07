// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/configstore_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigstoreEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map representing an entry in the Config Store, (key/value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/configstore_entries#entries ConfigstoreEntries#entries}
  */
  readonly entries: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/configstore_entries#id ConfigstoreEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Have Terraform manage the entries (default: false). If set to `true` Terraform will remove any entries that were added externally from the config seeded values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/configstore_entries#manage_entries ConfigstoreEntries#manage_entries}
  */
  readonly manageEntries?: boolean | cdktf.IResolvable;
  /**
  * An alphanumeric string identifying the Config Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/configstore_entries#store_id ConfigstoreEntries#store_id}
  */
  readonly storeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/configstore_entries fastly_configstore_entries}
*/
export class ConfigstoreEntries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_configstore_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigstoreEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigstoreEntries to import
  * @param importFromId The id of the existing ConfigstoreEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/configstore_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigstoreEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_configstore_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/configstore_entries fastly_configstore_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigstoreEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigstoreEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_configstore_entries',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entries = config.entries;
    this._id = config.id;
    this._manageEntries = config.manageEntries;
    this._storeId = config.storeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: false, optional: false, required: true
  private _entries?: { [key: string]: string }; 
  public get entries() {
    return this.getStringMapAttribute('entries');
  }
  public set entries(value: { [key: string]: string }) {
    this._entries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries;
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

  // manage_entries - computed: false, optional: true, required: false
  private _manageEntries?: boolean | cdktf.IResolvable; 
  public get manageEntries() {
    return this.getBooleanAttribute('manage_entries');
  }
  public set manageEntries(value: boolean | cdktf.IResolvable) {
    this._manageEntries = value;
  }
  public resetManageEntries() {
    this._manageEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageEntriesInput() {
    return this._manageEntries;
  }

  // store_id - computed: false, optional: false, required: true
  private _storeId?: string; 
  public get storeId() {
    return this.getStringAttribute('store_id');
  }
  public set storeId(value: string) {
    this._storeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeIdInput() {
    return this._storeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entries: cdktf.hashMapper(cdktf.stringToTerraform)(this._entries),
      id: cdktf.stringToTerraform(this._id),
      manage_entries: cdktf.booleanToTerraform(this._manageEntries),
      store_id: cdktf.stringToTerraform(this._storeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entries: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._entries),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_entries: {
        value: cdktf.booleanToHclTerraform(this._manageEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      store_id: {
        value: cdktf.stringToHclTerraform(this._storeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
