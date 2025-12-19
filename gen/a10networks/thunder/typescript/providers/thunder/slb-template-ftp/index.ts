// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateFtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Non-Standard FTP Active mode port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#active_mode_port SlbTemplateFtp#active_mode_port}
  */
  readonly activeModePort?: number;
  /**
  * Non-Standard FTP Active mode port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#active_mode_port_val SlbTemplateFtp#active_mode_port_val}
  */
  readonly activeModePortVal?: number;
  /**
  * Allow any FTP Active mode port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#any SlbTemplateFtp#any}
  */
  readonly any?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#id SlbTemplateFtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * FTP template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#name SlbTemplateFtp#name}
  */
  readonly name: string;
  /**
  * End range of FTP Active mode port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#to SlbTemplateFtp#to}
  */
  readonly to?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#user_tag SlbTemplateFtp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#uuid SlbTemplateFtp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp thunder_slb_template_ftp}
*/
export class SlbTemplateFtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_ftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateFtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateFtp to import
  * @param importFromId The id of the existing SlbTemplateFtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateFtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_ftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_ftp thunder_slb_template_ftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateFtpConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateFtpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_ftp',
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
    this._activeModePort = config.activeModePort;
    this._activeModePortVal = config.activeModePortVal;
    this._any = config.any;
    this._id = config.id;
    this._name = config.name;
    this._to = config.to;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_mode_port - computed: false, optional: true, required: false
  private _activeModePort?: number; 
  public get activeModePort() {
    return this.getNumberAttribute('active_mode_port');
  }
  public set activeModePort(value: number) {
    this._activeModePort = value;
  }
  public resetActiveModePort() {
    this._activeModePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeModePortInput() {
    return this._activeModePort;
  }

  // active_mode_port_val - computed: false, optional: true, required: false
  private _activeModePortVal?: number; 
  public get activeModePortVal() {
    return this.getNumberAttribute('active_mode_port_val');
  }
  public set activeModePortVal(value: number) {
    this._activeModePortVal = value;
  }
  public resetActiveModePortVal() {
    this._activeModePortVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeModePortValInput() {
    return this._activeModePortVal;
  }

  // any - computed: false, optional: true, required: false
  private _any?: number; 
  public get any() {
    return this.getNumberAttribute('any');
  }
  public set any(value: number) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
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

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
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
      active_mode_port: cdktf.numberToTerraform(this._activeModePort),
      active_mode_port_val: cdktf.numberToTerraform(this._activeModePortVal),
      any: cdktf.numberToTerraform(this._any),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      to: cdktf.numberToTerraform(this._to),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_mode_port: {
        value: cdktf.numberToHclTerraform(this._activeModePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active_mode_port_val: {
        value: cdktf.numberToHclTerraform(this._activeModePortVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      any: {
        value: cdktf.numberToHclTerraform(this._any),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      to: {
        value: cdktf.numberToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
