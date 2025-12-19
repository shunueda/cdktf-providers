// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodRtspAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp#id HealthMonitorMethodRtspA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp#monitor_name HealthMonitorMethodRtspA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * RTSP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp#rtsp HealthMonitorMethodRtspA#rtsp}
  */
  readonly rtsp?: number;
  /**
  * Specify RTSP port, default is 554 (Port Number (default 554))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp#rtsp_port HealthMonitorMethodRtspA#rtsp_port}
  */
  readonly rtspPort?: number;
  /**
  * Specify URL string (Specify the path on the server)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp#rtspurl HealthMonitorMethodRtspA#rtspurl}
  */
  readonly rtspurl?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp#uuid HealthMonitorMethodRtspA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp thunder_health_monitor_method_rtsp}
*/
export class HealthMonitorMethodRtspA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_rtsp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodRtspA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodRtspA to import
  * @param importFromId The id of the existing HealthMonitorMethodRtspA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodRtspA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_rtsp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_rtsp thunder_health_monitor_method_rtsp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodRtspAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodRtspAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_rtsp',
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
    this._monitorName = config.monitorName;
    this._rtsp = config.rtsp;
    this._rtspPort = config.rtspPort;
    this._rtspurl = config.rtspurl;
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

  // rtsp - computed: false, optional: true, required: false
  private _rtsp?: number; 
  public get rtsp() {
    return this.getNumberAttribute('rtsp');
  }
  public set rtsp(value: number) {
    this._rtsp = value;
  }
  public resetRtsp() {
    this._rtsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspInput() {
    return this._rtsp;
  }

  // rtsp_port - computed: false, optional: true, required: false
  private _rtspPort?: number; 
  public get rtspPort() {
    return this.getNumberAttribute('rtsp_port');
  }
  public set rtspPort(value: number) {
    this._rtspPort = value;
  }
  public resetRtspPort() {
    this._rtspPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspPortInput() {
    return this._rtspPort;
  }

  // rtspurl - computed: false, optional: true, required: false
  private _rtspurl?: string; 
  public get rtspurl() {
    return this.getStringAttribute('rtspurl');
  }
  public set rtspurl(value: string) {
    this._rtspurl = value;
  }
  public resetRtspurl() {
    this._rtspurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspurlInput() {
    return this._rtspurl;
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
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      rtsp: cdktf.numberToTerraform(this._rtsp),
      rtsp_port: cdktf.numberToTerraform(this._rtspPort),
      rtspurl: cdktf.stringToTerraform(this._rtspurl),
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
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtsp: {
        value: cdktf.numberToHclTerraform(this._rtsp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtsp_port: {
        value: cdktf.numberToHclTerraform(this._rtspPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtspurl: {
        value: cdktf.stringToHclTerraform(this._rtspurl),
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
