// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodUdpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Force Up with no response at the first time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp#force_up_with_single_healthcheck HealthMonitorMethodUdpA#force_up_with_single_healthcheck}
  */
  readonly forceUpWithSingleHealthcheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp#id HealthMonitorMethodUdpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp#monitor_name HealthMonitorMethodUdpA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * UDP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp#udp HealthMonitorMethodUdpA#udp}
  */
  readonly udp?: number;
  /**
  * Specify UDP port (Specify port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp#udp_port HealthMonitorMethodUdpA#udp_port}
  */
  readonly udpPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp#uuid HealthMonitorMethodUdpA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp thunder_health_monitor_method_udp}
*/
export class HealthMonitorMethodUdpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodUdpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodUdpA to import
  * @param importFromId The id of the existing HealthMonitorMethodUdpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodUdpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_udp thunder_health_monitor_method_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodUdpAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodUdpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_udp',
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
    this._forceUpWithSingleHealthcheck = config.forceUpWithSingleHealthcheck;
    this._id = config.id;
    this._monitorName = config.monitorName;
    this._udp = config.udp;
    this._udpPort = config.udpPort;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_up_with_single_healthcheck - computed: false, optional: true, required: false
  private _forceUpWithSingleHealthcheck?: number; 
  public get forceUpWithSingleHealthcheck() {
    return this.getNumberAttribute('force_up_with_single_healthcheck');
  }
  public set forceUpWithSingleHealthcheck(value: number) {
    this._forceUpWithSingleHealthcheck = value;
  }
  public resetForceUpWithSingleHealthcheck() {
    this._forceUpWithSingleHealthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpWithSingleHealthcheckInput() {
    return this._forceUpWithSingleHealthcheck;
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

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: number; 
  public get udp() {
    return this.getNumberAttribute('udp');
  }
  public set udp(value: number) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }

  // udp_port - computed: false, optional: true, required: false
  private _udpPort?: number; 
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
  }
  public set udpPort(value: number) {
    this._udpPort = value;
  }
  public resetUdpPort() {
    this._udpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortInput() {
    return this._udpPort;
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
      force_up_with_single_healthcheck: cdktf.numberToTerraform(this._forceUpWithSingleHealthcheck),
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      udp: cdktf.numberToTerraform(this._udp),
      udp_port: cdktf.numberToTerraform(this._udpPort),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_up_with_single_healthcheck: {
        value: cdktf.numberToHclTerraform(this._forceUpWithSingleHealthcheck),
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
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp: {
        value: cdktf.numberToHclTerraform(this._udp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_port: {
        value: cdktf.numberToHclTerraform(this._udpPort),
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
