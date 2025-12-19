// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateClientSshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable SSH forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh#forward_proxy_enable SlbTemplateClientSsh#forward_proxy_enable}
  */
  readonly forwardProxyEnable?: number;
  /**
  * Specify private-key (Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh#forward_proxy_hostkey SlbTemplateClientSsh#forward_proxy_hostkey}
  */
  readonly forwardProxyHostkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh#id SlbTemplateClientSsh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Client SSH Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh#name SlbTemplateClientSsh#name}
  */
  readonly name: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh#passphrase SlbTemplateClientSsh#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh#user_tag SlbTemplateClientSsh#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh#uuid SlbTemplateClientSsh#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh thunder_slb_template_client_ssh}
*/
export class SlbTemplateClientSsh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_client_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateClientSsh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateClientSsh to import
  * @param importFromId The id of the existing SlbTemplateClientSsh that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateClientSsh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_client_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssh thunder_slb_template_client_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateClientSshConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateClientSshConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_client_ssh',
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
    this._forwardProxyEnable = config.forwardProxyEnable;
    this._forwardProxyHostkey = config.forwardProxyHostkey;
    this._id = config.id;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // forward_proxy_enable - computed: false, optional: true, required: false
  private _forwardProxyEnable?: number; 
  public get forwardProxyEnable() {
    return this.getNumberAttribute('forward_proxy_enable');
  }
  public set forwardProxyEnable(value: number) {
    this._forwardProxyEnable = value;
  }
  public resetForwardProxyEnable() {
    this._forwardProxyEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyEnableInput() {
    return this._forwardProxyEnable;
  }

  // forward_proxy_hostkey - computed: false, optional: true, required: false
  private _forwardProxyHostkey?: string; 
  public get forwardProxyHostkey() {
    return this.getStringAttribute('forward_proxy_hostkey');
  }
  public set forwardProxyHostkey(value: string) {
    this._forwardProxyHostkey = value;
  }
  public resetForwardProxyHostkey() {
    this._forwardProxyHostkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyHostkeyInput() {
    return this._forwardProxyHostkey;
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

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
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
      forward_proxy_enable: cdktf.numberToTerraform(this._forwardProxyEnable),
      forward_proxy_hostkey: cdktf.stringToTerraform(this._forwardProxyHostkey),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forward_proxy_enable: {
        value: cdktf.numberToHclTerraform(this._forwardProxyEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_hostkey: {
        value: cdktf.stringToHclTerraform(this._forwardProxyHostkey),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
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
