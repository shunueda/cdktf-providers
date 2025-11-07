// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemProberesponseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#device_name SystemProberesponse#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#http_probe_value SystemProberesponse#http_probe_value}
  */
  readonly httpProbeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#id SystemProberesponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#mode SystemProberesponse#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#password SystemProberesponse#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#port SystemProberesponse#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#security_mode SystemProberesponse#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#timeout SystemProberesponse#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#ttl_mode SystemProberesponse#ttl_mode}
  */
  readonly ttlMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse fmgdevice_system_proberesponse}
*/
export class SystemProberesponse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_proberesponse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemProberesponse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemProberesponse to import
  * @param importFromId The id of the existing SystemProberesponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemProberesponse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_proberesponse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_proberesponse fmgdevice_system_proberesponse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemProberesponseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemProberesponseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_proberesponse',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._httpProbeValue = config.httpProbeValue;
    this._id = config.id;
    this._mode = config.mode;
    this._password = config.password;
    this._port = config.port;
    this._securityMode = config.securityMode;
    this._timeout = config.timeout;
    this._ttlMode = config.ttlMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // http_probe_value - computed: false, optional: true, required: false
  private _httpProbeValue?: string; 
  public get httpProbeValue() {
    return this.getStringAttribute('http_probe_value');
  }
  public set httpProbeValue(value: string) {
    this._httpProbeValue = value;
  }
  public resetHttpProbeValue() {
    this._httpProbeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProbeValueInput() {
    return this._httpProbeValue;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // ttl_mode - computed: false, optional: true, required: false
  private _ttlMode?: string; 
  public get ttlMode() {
    return this.getStringAttribute('ttl_mode');
  }
  public set ttlMode(value: string) {
    this._ttlMode = value;
  }
  public resetTtlMode() {
    this._ttlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlModeInput() {
    return this._ttlMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      http_probe_value: cdktf.stringToTerraform(this._httpProbeValue),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      port: cdktf.numberToTerraform(this._port),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      timeout: cdktf.numberToTerraform(this._timeout),
      ttl_mode: cdktf.stringToTerraform(this._ttlMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_probe_value: {
        value: cdktf.stringToHclTerraform(this._httpProbeValue),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl_mode: {
        value: cdktf.stringToHclTerraform(this._ttlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
