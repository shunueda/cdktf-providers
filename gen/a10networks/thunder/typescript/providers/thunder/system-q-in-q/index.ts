// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemQInQAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable 802.1QinQ on all physical ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q#enable_all_ports SystemQInQA#enable_all_ports}
  */
  readonly enableAllPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q#id SystemQInQA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TPID for inner VLAN (Inner TPID, 16 bit hex value, default is 8100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q#inner_tpid SystemQInQA#inner_tpid}
  */
  readonly innerTpid?: string;
  /**
  * TPID for outer VLAN (Outer TPID, 16 bit hex value, default is 8100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q#outer_tpid SystemQInQA#outer_tpid}
  */
  readonly outerTpid?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q#uuid SystemQInQA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q thunder_system_q_in_q}
*/
export class SystemQInQA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_q_in_q";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemQInQA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemQInQA to import
  * @param importFromId The id of the existing SystemQInQA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemQInQA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_q_in_q", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_q_in_q thunder_system_q_in_q} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemQInQAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemQInQAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_q_in_q',
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
    this._enableAllPorts = config.enableAllPorts;
    this._id = config.id;
    this._innerTpid = config.innerTpid;
    this._outerTpid = config.outerTpid;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_all_ports - computed: false, optional: true, required: false
  private _enableAllPorts?: number; 
  public get enableAllPorts() {
    return this.getNumberAttribute('enable_all_ports');
  }
  public set enableAllPorts(value: number) {
    this._enableAllPorts = value;
  }
  public resetEnableAllPorts() {
    this._enableAllPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllPortsInput() {
    return this._enableAllPorts;
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

  // inner_tpid - computed: false, optional: true, required: false
  private _innerTpid?: string; 
  public get innerTpid() {
    return this.getStringAttribute('inner_tpid');
  }
  public set innerTpid(value: string) {
    this._innerTpid = value;
  }
  public resetInnerTpid() {
    this._innerTpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innerTpidInput() {
    return this._innerTpid;
  }

  // outer_tpid - computed: false, optional: true, required: false
  private _outerTpid?: string; 
  public get outerTpid() {
    return this.getStringAttribute('outer_tpid');
  }
  public set outerTpid(value: string) {
    this._outerTpid = value;
  }
  public resetOuterTpid() {
    this._outerTpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerTpidInput() {
    return this._outerTpid;
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
      enable_all_ports: cdktf.numberToTerraform(this._enableAllPorts),
      id: cdktf.stringToTerraform(this._id),
      inner_tpid: cdktf.stringToTerraform(this._innerTpid),
      outer_tpid: cdktf.stringToTerraform(this._outerTpid),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_all_ports: {
        value: cdktf.numberToHclTerraform(this._enableAllPorts),
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
      inner_tpid: {
        value: cdktf.stringToHclTerraform(this._innerTpid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outer_tpid: {
        value: cdktf.stringToHclTerraform(this._outerTpid),
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
