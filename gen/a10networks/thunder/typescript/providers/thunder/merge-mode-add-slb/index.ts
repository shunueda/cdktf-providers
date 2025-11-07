// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MergeModeAddSlbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb#id MergeModeAddSlb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Control block-merge behavior for slb service-group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb#member MergeModeAddSlb#member}
  */
  readonly member?: number;
  /**
  * Control block-merge behavior for slb server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb#server_port MergeModeAddSlb#server_port}
  */
  readonly serverPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb#uuid MergeModeAddSlb#uuid}
  */
  readonly uuid?: string;
  /**
  * Control block-merge behavior for slb virtual-server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb#virtual_server_port MergeModeAddSlb#virtual_server_port}
  */
  readonly virtualServerPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb thunder_merge_mode_add_slb}
*/
export class MergeModeAddSlb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_merge_mode_add_slb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MergeModeAddSlb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MergeModeAddSlb to import
  * @param importFromId The id of the existing MergeModeAddSlb that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MergeModeAddSlb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_merge_mode_add_slb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/merge_mode_add_slb thunder_merge_mode_add_slb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MergeModeAddSlbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MergeModeAddSlbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_merge_mode_add_slb',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._member = config.member;
    this._serverPort = config.serverPort;
    this._uuid = config.uuid;
    this._virtualServerPort = config.virtualServerPort;
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

  // member - computed: false, optional: true, required: false
  private _member?: number; 
  public get member() {
    return this.getNumberAttribute('member');
  }
  public set member(value: number) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
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

  // virtual_server_port - computed: false, optional: true, required: false
  private _virtualServerPort?: number; 
  public get virtualServerPort() {
    return this.getNumberAttribute('virtual_server_port');
  }
  public set virtualServerPort(value: number) {
    this._virtualServerPort = value;
  }
  public resetVirtualServerPort() {
    this._virtualServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerPortInput() {
    return this._virtualServerPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      member: cdktf.numberToTerraform(this._member),
      server_port: cdktf.numberToTerraform(this._serverPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      virtual_server_port: cdktf.numberToTerraform(this._virtualServerPort),
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
      member: {
        value: cdktf.numberToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_port: {
        value: cdktf.numberToHclTerraform(this._virtualServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
