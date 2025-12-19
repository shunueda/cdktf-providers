// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodSipAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify accepted response codes (e.g. 200, 400-430, any) (Format is xxx,xxx-xxx,any (xxx between [100,899]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#expect_response_code HealthMonitorMethodSipA#expect_response_code}
  */
  readonly expectResponseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#id HealthMonitorMethodSipA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#monitor_name HealthMonitorMethodSipA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Send SIP REGISTER message, default is to send OPTION message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#register HealthMonitorMethodSipA#register}
  */
  readonly register?: number;
  /**
  * SIP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#sip HealthMonitorMethodSipA#sip}
  */
  readonly sip?: number;
  /**
  * Specify the SIP hostname that used in request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#sip_hostname HealthMonitorMethodSipA#sip_hostname}
  */
  readonly sipHostname?: string;
  /**
  * Specify the SIP port, default is 5060 (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#sip_port HealthMonitorMethodSipA#sip_port}
  */
  readonly sipPort?: number;
  /**
  * Use TCP for transmission, default is UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#sip_tcp HealthMonitorMethodSipA#sip_tcp}
  */
  readonly sipTcp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#uuid HealthMonitorMethodSipA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip thunder_health_monitor_method_sip}
*/
export class HealthMonitorMethodSipA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodSipA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodSipA to import
  * @param importFromId The id of the existing HealthMonitorMethodSipA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodSipA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_sip thunder_health_monitor_method_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodSipAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodSipAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_sip',
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
    this._expectResponseCode = config.expectResponseCode;
    this._id = config.id;
    this._monitorName = config.monitorName;
    this._register = config.register;
    this._sip = config.sip;
    this._sipHostname = config.sipHostname;
    this._sipPort = config.sipPort;
    this._sipTcp = config.sipTcp;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expect_response_code - computed: false, optional: true, required: false
  private _expectResponseCode?: string; 
  public get expectResponseCode() {
    return this.getStringAttribute('expect_response_code');
  }
  public set expectResponseCode(value: string) {
    this._expectResponseCode = value;
  }
  public resetExpectResponseCode() {
    this._expectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectResponseCodeInput() {
    return this._expectResponseCode;
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

  // register - computed: false, optional: true, required: false
  private _register?: number; 
  public get register() {
    return this.getNumberAttribute('register');
  }
  public set register(value: number) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: number; 
  public get sip() {
    return this.getNumberAttribute('sip');
  }
  public set sip(value: number) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // sip_hostname - computed: false, optional: true, required: false
  private _sipHostname?: string; 
  public get sipHostname() {
    return this.getStringAttribute('sip_hostname');
  }
  public set sipHostname(value: string) {
    this._sipHostname = value;
  }
  public resetSipHostname() {
    this._sipHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHostnameInput() {
    return this._sipHostname;
  }

  // sip_port - computed: false, optional: true, required: false
  private _sipPort?: number; 
  public get sipPort() {
    return this.getNumberAttribute('sip_port');
  }
  public set sipPort(value: number) {
    this._sipPort = value;
  }
  public resetSipPort() {
    this._sipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipPortInput() {
    return this._sipPort;
  }

  // sip_tcp - computed: false, optional: true, required: false
  private _sipTcp?: number; 
  public get sipTcp() {
    return this.getNumberAttribute('sip_tcp');
  }
  public set sipTcp(value: number) {
    this._sipTcp = value;
  }
  public resetSipTcp() {
    this._sipTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTcpInput() {
    return this._sipTcp;
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
      expect_response_code: cdktf.stringToTerraform(this._expectResponseCode),
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      register: cdktf.numberToTerraform(this._register),
      sip: cdktf.numberToTerraform(this._sip),
      sip_hostname: cdktf.stringToTerraform(this._sipHostname),
      sip_port: cdktf.numberToTerraform(this._sipPort),
      sip_tcp: cdktf.numberToTerraform(this._sipTcp),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expect_response_code: {
        value: cdktf.stringToHclTerraform(this._expectResponseCode),
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
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register: {
        value: cdktf.numberToHclTerraform(this._register),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip: {
        value: cdktf.numberToHclTerraform(this._sip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_hostname: {
        value: cdktf.stringToHclTerraform(this._sipHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_port: {
        value: cdktf.numberToHclTerraform(this._sipPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_tcp: {
        value: cdktf.numberToHclTerraform(this._sipTcp),
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
