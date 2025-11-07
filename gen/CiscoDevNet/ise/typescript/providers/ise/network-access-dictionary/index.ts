// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_dictionary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAccessDictionaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the dictionary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_dictionary#description NetworkAccessDictionary#description}
  */
  readonly description?: string;
  /**
  * The dictionary attribute type
  *   - Choices: `ENTITY_ATTR`, `MSG_ATTR`, `PIP_ATTR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_dictionary#dictionary_attr_type NetworkAccessDictionary#dictionary_attr_type}
  */
  readonly dictionaryAttrType: string;
  /**
  * The dictionary name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_dictionary#name NetworkAccessDictionary#name}
  */
  readonly name: string;
  /**
  * The version of the dictionary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_dictionary#version NetworkAccessDictionary#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_dictionary ise_network_access_dictionary}
*/
export class NetworkAccessDictionary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_network_access_dictionary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAccessDictionary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAccessDictionary to import
  * @param importFromId The id of the existing NetworkAccessDictionary that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_dictionary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAccessDictionary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_network_access_dictionary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_dictionary ise_network_access_dictionary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAccessDictionaryConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAccessDictionaryConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_network_access_dictionary',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
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
    this._dictionaryAttrType = config.dictionaryAttrType;
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dictionary_attr_type - computed: false, optional: false, required: true
  private _dictionaryAttrType?: string; 
  public get dictionaryAttrType() {
    return this.getStringAttribute('dictionary_attr_type');
  }
  public set dictionaryAttrType(value: string) {
    this._dictionaryAttrType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryAttrTypeInput() {
    return this._dictionaryAttrType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dictionary_attr_type: cdktf.stringToTerraform(this._dictionaryAttrType),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
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
      dictionary_attr_type: {
        value: cdktf.stringToHclTerraform(this._dictionaryAttrType),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
