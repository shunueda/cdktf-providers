// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CipherConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Cipher Group. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_config#cipher_group_name CipherConfig#cipher_group_name}
  */
  readonly cipherGroupName?: string;
  /**
  * list of cipher suites in form of array of strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_config#cipher_name_list_array CipherConfig#cipher_name_list_array}
  */
  readonly cipherNameListArray?: string[];
  /**
  * SSL Ciphers Config Mode [CipherGroup, CipherSuites].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_config#config_mode CipherConfig#config_mode}
  */
  readonly configMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_config#id CipherConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_config netscalersdx_cipher_config}
*/
export class CipherConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_cipher_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CipherConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CipherConfig to import
  * @param importFromId The id of the existing CipherConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CipherConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_cipher_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/cipher_config netscalersdx_cipher_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CipherConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CipherConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_cipher_config',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipherGroupName = config.cipherGroupName;
    this._cipherNameListArray = config.cipherNameListArray;
    this._configMode = config.configMode;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher_group_name - computed: true, optional: true, required: false
  private _cipherGroupName?: string; 
  public get cipherGroupName() {
    return this.getStringAttribute('cipher_group_name');
  }
  public set cipherGroupName(value: string) {
    this._cipherGroupName = value;
  }
  public resetCipherGroupName() {
    this._cipherGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherGroupNameInput() {
    return this._cipherGroupName;
  }

  // cipher_name_list_array - computed: true, optional: true, required: false
  private _cipherNameListArray?: string[]; 
  public get cipherNameListArray() {
    return cdktf.Fn.tolist(this.getListAttribute('cipher_name_list_array'));
  }
  public set cipherNameListArray(value: string[]) {
    this._cipherNameListArray = value;
  }
  public resetCipherNameListArray() {
    this._cipherNameListArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherNameListArrayInput() {
    return this._cipherNameListArray;
  }

  // config_mode - computed: true, optional: true, required: false
  private _configMode?: string; 
  public get configMode() {
    return this.getStringAttribute('config_mode');
  }
  public set configMode(value: string) {
    this._configMode = value;
  }
  public resetConfigMode() {
    this._configMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configModeInput() {
    return this._configMode;
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
      cipher_group_name: cdktf.stringToTerraform(this._cipherGroupName),
      cipher_name_list_array: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cipherNameListArray),
      config_mode: cdktf.stringToTerraform(this._configMode),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      config_mode: {
        value: cdktf.stringToHclTerraform(this._configMode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
