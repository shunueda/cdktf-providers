// https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/string
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAnsiblevaultStringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ansible-vault string representation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/string#encrypted DataAnsiblevaultString#encrypted}
  */
  readonly encrypted: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/string#id DataAnsiblevaultString#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Vault key searched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/string#key DataAnsiblevaultString#key}
  */
  readonly key?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/string ansiblevault_string}
*/
export class DataAnsiblevaultString extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansiblevault_string";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAnsiblevaultString resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAnsiblevaultString to import
  * @param importFromId The id of the existing DataAnsiblevaultString that should be imported. Refer to the {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/string#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAnsiblevaultString to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansiblevault_string", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/string ansiblevault_string} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAnsiblevaultStringConfig
  */
  public constructor(scope: Construct, id: string, config: DataAnsiblevaultStringConfig) {
    super(scope, id, {
      terraformResourceType: 'ansiblevault_string',
      terraformGeneratorMetadata: {
        providerName: 'ansiblevault',
        providerVersion: '3.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._key = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encrypted - computed: false, optional: false, required: true
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encrypted: cdktf.stringToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encrypted: {
        value: cdktf.stringToHclTerraform(this._encrypted),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
