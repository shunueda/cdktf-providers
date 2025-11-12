// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CipherGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describing the Cipher Group algorithms created. Minimum length =  1 Maximum length =  256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_group#cipher_group_description CipherGroup#cipher_group_description}
  */
  readonly cipherGroupDescription: string;
  /**
  * Name of Cipher Group. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_group#cipher_group_name CipherGroup#cipher_group_name}
  */
  readonly cipherGroupName: string;
  /**
  * list of cipher suites in form of array of strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_group#cipher_name_list_array CipherGroup#cipher_name_list_array}
  */
  readonly cipherNameListArray: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_group#id CipherGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_group netscalersdx_cipher_group}
*/
export class CipherGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_cipher_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CipherGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CipherGroup to import
  * @param importFromId The id of the existing CipherGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CipherGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_cipher_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_group netscalersdx_cipher_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CipherGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CipherGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_cipher_group',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipherGroupDescription = config.cipherGroupDescription;
    this._cipherGroupName = config.cipherGroupName;
    this._cipherNameListArray = config.cipherNameListArray;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher_group_description - computed: false, optional: false, required: true
  private _cipherGroupDescription?: string; 
  public get cipherGroupDescription() {
    return this.getStringAttribute('cipher_group_description');
  }
  public set cipherGroupDescription(value: string) {
    this._cipherGroupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherGroupDescriptionInput() {
    return this._cipherGroupDescription;
  }

  // cipher_group_name - computed: false, optional: false, required: true
  private _cipherGroupName?: string; 
  public get cipherGroupName() {
    return this.getStringAttribute('cipher_group_name');
  }
  public set cipherGroupName(value: string) {
    this._cipherGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherGroupNameInput() {
    return this._cipherGroupName;
  }

  // cipher_name_list_array - computed: false, optional: false, required: true
  private _cipherNameListArray?: string[]; 
  public get cipherNameListArray() {
    return cdktf.Fn.tolist(this.getListAttribute('cipher_name_list_array'));
  }
  public set cipherNameListArray(value: string[]) {
    this._cipherNameListArray = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherNameListArrayInput() {
    return this._cipherNameListArray;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipher_group_description: cdktf.stringToTerraform(this._cipherGroupDescription),
      cipher_group_name: cdktf.stringToTerraform(this._cipherGroupName),
      cipher_name_list_array: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cipherNameListArray),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipher_group_description: {
        value: cdktf.stringToHclTerraform(this._cipherGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher_group_name: {
        value: cdktf.stringToHclTerraform(this._cipherGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher_name_list_array: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cipherNameListArray),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
