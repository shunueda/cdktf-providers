// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_tcp_syn_per_sec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSetTcpSynPerSecAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_tcp_syn_per_sec#id SystemSetTcpSynPerSecA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure Tcp SYN's per sec, default 70
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_tcp_syn_per_sec#tcp_syn_value SystemSetTcpSynPerSecA#tcp_syn_value}
  */
  readonly tcpSynValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_tcp_syn_per_sec#uuid SystemSetTcpSynPerSecA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_tcp_syn_per_sec thunder_system_set_tcp_syn_per_sec}
*/
export class SystemSetTcpSynPerSecA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_set_tcp_syn_per_sec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSetTcpSynPerSecA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSetTcpSynPerSecA to import
  * @param importFromId The id of the existing SystemSetTcpSynPerSecA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_tcp_syn_per_sec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSetTcpSynPerSecA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_set_tcp_syn_per_sec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_tcp_syn_per_sec thunder_system_set_tcp_syn_per_sec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSetTcpSynPerSecAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSetTcpSynPerSecAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_set_tcp_syn_per_sec',
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
    this._tcpSynValue = config.tcpSynValue;
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

  // tcp_syn_value - computed: false, optional: true, required: false
  private _tcpSynValue?: number; 
  public get tcpSynValue() {
    return this.getNumberAttribute('tcp_syn_value');
  }
  public set tcpSynValue(value: number) {
    this._tcpSynValue = value;
  }
  public resetTcpSynValue() {
    this._tcpSynValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynValueInput() {
    return this._tcpSynValue;
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
      tcp_syn_value: cdktf.numberToTerraform(this._tcpSynValue),
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
      tcp_syn_value: {
        value: cdktf.numberToHclTerraform(this._tcpSynValue),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
