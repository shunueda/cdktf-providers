// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_delete_debug_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityMonitorDeleteDebugFileAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_delete_debug_file#debug_ip_addr VisibilityMonitorDeleteDebugFileA#debug_ip_addr}
  */
  readonly debugIpAddr: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_delete_debug_file#debug_port VisibilityMonitorDeleteDebugFileA#debug_port}
  */
  readonly debugPort?: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_delete_debug_file#debug_protocol VisibilityMonitorDeleteDebugFileA#debug_protocol}
  */
  readonly debugProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_delete_debug_file#id VisibilityMonitorDeleteDebugFileA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_delete_debug_file thunder_visibility_monitor_delete_debug_file}
*/
export class VisibilityMonitorDeleteDebugFileA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitor_delete_debug_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityMonitorDeleteDebugFileA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityMonitorDeleteDebugFileA to import
  * @param importFromId The id of the existing VisibilityMonitorDeleteDebugFileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_delete_debug_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityMonitorDeleteDebugFileA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitor_delete_debug_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_delete_debug_file thunder_visibility_monitor_delete_debug_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityMonitorDeleteDebugFileAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityMonitorDeleteDebugFileAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitor_delete_debug_file',
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
    this._debugIpAddr = config.debugIpAddr;
    this._debugPort = config.debugPort;
    this._debugProtocol = config.debugProtocol;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_ip_addr - computed: false, optional: false, required: true
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: true, required: false
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  public resetDebugPort() {
    this._debugPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: true, required: false
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  public resetDebugProtocol() {
    this._debugProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
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
      debug_ip_addr: cdktf.stringToTerraform(this._debugIpAddr),
      debug_port: cdktf.numberToTerraform(this._debugPort),
      debug_protocol: cdktf.stringToTerraform(this._debugProtocol),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_ip_addr: {
        value: cdktf.stringToHclTerraform(this._debugIpAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_port: {
        value: cdktf.numberToHclTerraform(this._debugPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug_protocol: {
        value: cdktf.stringToHclTerraform(this._debugProtocol),
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
