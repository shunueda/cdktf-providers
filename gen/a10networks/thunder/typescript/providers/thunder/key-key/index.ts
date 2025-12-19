// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key#id KeyKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * KeyChainFlag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key#key_chain_flag KeyKey#key_chain_flag}
  */
  readonly keyChainFlag: string;
  /**
  * KeyChainName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key#key_chain_name KeyKey#key_chain_name}
  */
  readonly keyChainName: string;
  /**
  * Key identifier number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key#key_number KeyKey#key_number}
  */
  readonly keyNumber: number;
  /**
  * Set key string (The key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key#key_string KeyKey#key_string}
  */
  readonly keyString?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key#user_tag KeyKey#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key#uuid KeyKey#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key thunder_key_key}
*/
export class KeyKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_key_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyKey to import
  * @param importFromId The id of the existing KeyKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_key_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/key_key thunder_key_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_key_key',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._id = config.id;
    this._keyChainFlag = config.keyChainFlag;
    this._keyChainName = config.keyChainName;
    this._keyNumber = config.keyNumber;
    this._keyString = config.keyString;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_chain_flag - computed: false, optional: false, required: true
  private _keyChainFlag?: string; 
  public get keyChainFlag() {
    return this.getStringAttribute('key_chain_flag');
  }
  public set keyChainFlag(value: string) {
    this._keyChainFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainFlagInput() {
    return this._keyChainFlag;
  }

  // key_chain_name - computed: false, optional: false, required: true
  private _keyChainName?: string; 
  public get keyChainName() {
    return this.getStringAttribute('key_chain_name');
  }
  public set keyChainName(value: string) {
    this._keyChainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainNameInput() {
    return this._keyChainName;
  }

  // key_number - computed: false, optional: false, required: true
  private _keyNumber?: number; 
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
  public set keyNumber(value: number) {
    this._keyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }

  // key_string - computed: false, optional: true, required: false
  private _keyString?: string; 
  public get keyString() {
    return this.getStringAttribute('key_string');
  }
  public set keyString(value: string) {
    this._keyString = value;
  }
  public resetKeyString() {
    this._keyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringInput() {
    return this._keyString;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_chain_flag: cdktf.stringToTerraform(this._keyChainFlag),
      key_chain_name: cdktf.stringToTerraform(this._keyChainName),
      key_number: cdktf.numberToTerraform(this._keyNumber),
      key_string: cdktf.stringToTerraform(this._keyString),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_chain_flag: {
        value: cdktf.stringToHclTerraform(this._keyChainFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_chain_name: {
        value: cdktf.stringToHclTerraform(this._keyChainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_number: {
        value: cdktf.numberToHclTerraform(this._keyNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_string: {
        value: cdktf.stringToHclTerraform(this._keyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
