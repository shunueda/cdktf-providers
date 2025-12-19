// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodImapAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#id HealthMonitorMethodImapA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IMAP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#imap HealthMonitorMethodImapA#imap}
  */
  readonly imap?: number;
  /**
  * Challenge-response authentication mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#imap_cram_md5 HealthMonitorMethodImapA#imap_cram_md5}
  */
  readonly imapCramMd5?: number;
  /**
  * Simple login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#imap_login HealthMonitorMethodImapA#imap_login}
  */
  readonly imapLogin?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#imap_password HealthMonitorMethodImapA#imap_password}
  */
  readonly imapPassword?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#imap_password_string HealthMonitorMethodImapA#imap_password_string}
  */
  readonly imapPasswordString?: string;
  /**
  * Plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#imap_plain HealthMonitorMethodImapA#imap_plain}
  */
  readonly imapPlain?: number;
  /**
  * Specify the IMAP port, default is 143 (Port Number (default 143))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#imap_port HealthMonitorMethodImapA#imap_port}
  */
  readonly imapPort?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#imap_username HealthMonitorMethodImapA#imap_username}
  */
  readonly imapUsername?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#monitor_name HealthMonitorMethodImapA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Specify the Authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#pwd_auth HealthMonitorMethodImapA#pwd_auth}
  */
  readonly pwdAuth?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#uuid HealthMonitorMethodImapA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap thunder_health_monitor_method_imap}
*/
export class HealthMonitorMethodImapA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_imap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodImapA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodImapA to import
  * @param importFromId The id of the existing HealthMonitorMethodImapA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodImapA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_imap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_imap thunder_health_monitor_method_imap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodImapAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodImapAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_imap',
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
    this._imap = config.imap;
    this._imapCramMd5 = config.imapCramMd5;
    this._imapLogin = config.imapLogin;
    this._imapPassword = config.imapPassword;
    this._imapPasswordString = config.imapPasswordString;
    this._imapPlain = config.imapPlain;
    this._imapPort = config.imapPort;
    this._imapUsername = config.imapUsername;
    this._monitorName = config.monitorName;
    this._pwdAuth = config.pwdAuth;
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

  // imap - computed: false, optional: true, required: false
  private _imap?: number; 
  public get imap() {
    return this.getNumberAttribute('imap');
  }
  public set imap(value: number) {
    this._imap = value;
  }
  public resetImap() {
    this._imap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInput() {
    return this._imap;
  }

  // imap_cram_md5 - computed: false, optional: true, required: false
  private _imapCramMd5?: number; 
  public get imapCramMd5() {
    return this.getNumberAttribute('imap_cram_md5');
  }
  public set imapCramMd5(value: number) {
    this._imapCramMd5 = value;
  }
  public resetImapCramMd5() {
    this._imapCramMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapCramMd5Input() {
    return this._imapCramMd5;
  }

  // imap_login - computed: false, optional: true, required: false
  private _imapLogin?: number; 
  public get imapLogin() {
    return this.getNumberAttribute('imap_login');
  }
  public set imapLogin(value: number) {
    this._imapLogin = value;
  }
  public resetImapLogin() {
    this._imapLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapLoginInput() {
    return this._imapLogin;
  }

  // imap_password - computed: false, optional: true, required: false
  private _imapPassword?: number; 
  public get imapPassword() {
    return this.getNumberAttribute('imap_password');
  }
  public set imapPassword(value: number) {
    this._imapPassword = value;
  }
  public resetImapPassword() {
    this._imapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPasswordInput() {
    return this._imapPassword;
  }

  // imap_password_string - computed: false, optional: true, required: false
  private _imapPasswordString?: string; 
  public get imapPasswordString() {
    return this.getStringAttribute('imap_password_string');
  }
  public set imapPasswordString(value: string) {
    this._imapPasswordString = value;
  }
  public resetImapPasswordString() {
    this._imapPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPasswordStringInput() {
    return this._imapPasswordString;
  }

  // imap_plain - computed: false, optional: true, required: false
  private _imapPlain?: number; 
  public get imapPlain() {
    return this.getNumberAttribute('imap_plain');
  }
  public set imapPlain(value: number) {
    this._imapPlain = value;
  }
  public resetImapPlain() {
    this._imapPlain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPlainInput() {
    return this._imapPlain;
  }

  // imap_port - computed: false, optional: true, required: false
  private _imapPort?: number; 
  public get imapPort() {
    return this.getNumberAttribute('imap_port');
  }
  public set imapPort(value: number) {
    this._imapPort = value;
  }
  public resetImapPort() {
    this._imapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPortInput() {
    return this._imapPort;
  }

  // imap_username - computed: false, optional: true, required: false
  private _imapUsername?: string; 
  public get imapUsername() {
    return this.getStringAttribute('imap_username');
  }
  public set imapUsername(value: string) {
    this._imapUsername = value;
  }
  public resetImapUsername() {
    this._imapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapUsernameInput() {
    return this._imapUsername;
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

  // pwd_auth - computed: false, optional: true, required: false
  private _pwdAuth?: number; 
  public get pwdAuth() {
    return this.getNumberAttribute('pwd_auth');
  }
  public set pwdAuth(value: number) {
    this._pwdAuth = value;
  }
  public resetPwdAuth() {
    this._pwdAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdAuthInput() {
    return this._pwdAuth;
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
      imap: cdktf.numberToTerraform(this._imap),
      imap_cram_md5: cdktf.numberToTerraform(this._imapCramMd5),
      imap_login: cdktf.numberToTerraform(this._imapLogin),
      imap_password: cdktf.numberToTerraform(this._imapPassword),
      imap_password_string: cdktf.stringToTerraform(this._imapPasswordString),
      imap_plain: cdktf.numberToTerraform(this._imapPlain),
      imap_port: cdktf.numberToTerraform(this._imapPort),
      imap_username: cdktf.stringToTerraform(this._imapUsername),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      pwd_auth: cdktf.numberToTerraform(this._pwdAuth),
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
      imap: {
        value: cdktf.numberToHclTerraform(this._imap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      imap_cram_md5: {
        value: cdktf.numberToHclTerraform(this._imapCramMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      imap_login: {
        value: cdktf.numberToHclTerraform(this._imapLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      imap_password: {
        value: cdktf.numberToHclTerraform(this._imapPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      imap_password_string: {
        value: cdktf.stringToHclTerraform(this._imapPasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imap_plain: {
        value: cdktf.numberToHclTerraform(this._imapPlain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      imap_port: {
        value: cdktf.numberToHclTerraform(this._imapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      imap_username: {
        value: cdktf.stringToHclTerraform(this._imapUsername),
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
      pwd_auth: {
        value: cdktf.numberToHclTerraform(this._pwdAuth),
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
