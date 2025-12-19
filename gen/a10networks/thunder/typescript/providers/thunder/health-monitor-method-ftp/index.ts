// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodFtpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * FTP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#ftp HealthMonitorMethodFtpA#ftp}
  */
  readonly ftp?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#ftp_password HealthMonitorMethodFtpA#ftp_password}
  */
  readonly ftpPassword?: number;
  /**
  * Specify the user password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#ftp_password_string HealthMonitorMethodFtpA#ftp_password_string}
  */
  readonly ftpPasswordString?: string;
  /**
  * Specify FTP port (Specify port number, default is 21)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#ftp_port HealthMonitorMethodFtpA#ftp_port}
  */
  readonly ftpPort?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#ftp_username HealthMonitorMethodFtpA#ftp_username}
  */
  readonly ftpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#id HealthMonitorMethodFtpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#monitor_name HealthMonitorMethodFtpA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#uuid HealthMonitorMethodFtpA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp thunder_health_monitor_method_ftp}
*/
export class HealthMonitorMethodFtpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_ftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodFtpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodFtpA to import
  * @param importFromId The id of the existing HealthMonitorMethodFtpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodFtpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_ftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_ftp thunder_health_monitor_method_ftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodFtpAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodFtpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_ftp',
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
    this._ftp = config.ftp;
    this._ftpPassword = config.ftpPassword;
    this._ftpPasswordString = config.ftpPasswordString;
    this._ftpPort = config.ftpPort;
    this._ftpUsername = config.ftpUsername;
    this._id = config.id;
    this._monitorName = config.monitorName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftp - computed: false, optional: true, required: false
  private _ftp?: number; 
  public get ftp() {
    return this.getNumberAttribute('ftp');
  }
  public set ftp(value: number) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // ftp_password - computed: false, optional: true, required: false
  private _ftpPassword?: number; 
  public get ftpPassword() {
    return this.getNumberAttribute('ftp_password');
  }
  public set ftpPassword(value: number) {
    this._ftpPassword = value;
  }
  public resetFtpPassword() {
    this._ftpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPasswordInput() {
    return this._ftpPassword;
  }

  // ftp_password_string - computed: false, optional: true, required: false
  private _ftpPasswordString?: string; 
  public get ftpPasswordString() {
    return this.getStringAttribute('ftp_password_string');
  }
  public set ftpPasswordString(value: string) {
    this._ftpPasswordString = value;
  }
  public resetFtpPasswordString() {
    this._ftpPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPasswordStringInput() {
    return this._ftpPasswordString;
  }

  // ftp_port - computed: false, optional: true, required: false
  private _ftpPort?: number; 
  public get ftpPort() {
    return this.getNumberAttribute('ftp_port');
  }
  public set ftpPort(value: number) {
    this._ftpPort = value;
  }
  public resetFtpPort() {
    this._ftpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPortInput() {
    return this._ftpPort;
  }

  // ftp_username - computed: false, optional: true, required: false
  private _ftpUsername?: string; 
  public get ftpUsername() {
    return this.getStringAttribute('ftp_username');
  }
  public set ftpUsername(value: string) {
    this._ftpUsername = value;
  }
  public resetFtpUsername() {
    this._ftpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpUsernameInput() {
    return this._ftpUsername;
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
      ftp: cdktf.numberToTerraform(this._ftp),
      ftp_password: cdktf.numberToTerraform(this._ftpPassword),
      ftp_password_string: cdktf.stringToTerraform(this._ftpPasswordString),
      ftp_port: cdktf.numberToTerraform(this._ftpPort),
      ftp_username: cdktf.stringToTerraform(this._ftpUsername),
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftp: {
        value: cdktf.numberToHclTerraform(this._ftp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftp_password: {
        value: cdktf.numberToHclTerraform(this._ftpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftp_password_string: {
        value: cdktf.stringToHclTerraform(this._ftpPasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_port: {
        value: cdktf.numberToHclTerraform(this._ftpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftp_username: {
        value: cdktf.stringToHclTerraform(this._ftpUsername),
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
