// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFortianalyzerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#__change_ip SystemFortianalyzer#__change_ip}
  */
  readonly changeIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#address_mode SystemFortianalyzer#address_mode}
  */
  readonly addressMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#conn_timeout SystemFortianalyzer#conn_timeout}
  */
  readonly connTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#encrypt SystemFortianalyzer#encrypt}
  */
  readonly encrypt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#fdp_device SystemFortianalyzer#fdp_device}
  */
  readonly fdpDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#fdp_interface SystemFortianalyzer#fdp_interface}
  */
  readonly fdpInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#id SystemFortianalyzer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#localid SystemFortianalyzer#localid}
  */
  readonly localid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#mgmt_name SystemFortianalyzer#mgmt_name}
  */
  readonly mgmtName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#psksecret SystemFortianalyzer#psksecret}
  */
  readonly psksecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#server SystemFortianalyzer#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#status SystemFortianalyzer#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer fortiswitch_system_fortianalyzer}
*/
export class SystemFortianalyzer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_fortianalyzer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFortianalyzer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFortianalyzer to import
  * @param importFromId The id of the existing SystemFortianalyzer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFortianalyzer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_fortianalyzer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fortianalyzer fortiswitch_system_fortianalyzer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFortianalyzerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFortianalyzerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_fortianalyzer',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._changeIp = config.changeIp;
    this._addressMode = config.addressMode;
    this._connTimeout = config.connTimeout;
    this._encrypt = config.encrypt;
    this._fdpDevice = config.fdpDevice;
    this._fdpInterface = config.fdpInterface;
    this._id = config.id;
    this._localid = config.localid;
    this._mgmtName = config.mgmtName;
    this._psksecret = config.psksecret;
    this._server = config.server;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // __change_ip - computed: true, optional: true, required: false
  private _changeIp?: number; 
  public get changeIp() {
    return this.getNumberAttribute('__change_ip');
  }
  public set changeIp(value: number) {
    this._changeIp = value;
  }
  public resetChangeIp() {
    this._changeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeIpInput() {
    return this._changeIp;
  }

  // address_mode - computed: true, optional: true, required: false
  private _addressMode?: string; 
  public get addressMode() {
    return this.getStringAttribute('address_mode');
  }
  public set addressMode(value: string) {
    this._addressMode = value;
  }
  public resetAddressMode() {
    this._addressMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressModeInput() {
    return this._addressMode;
  }

  // conn_timeout - computed: true, optional: true, required: false
  private _connTimeout?: number; 
  public get connTimeout() {
    return this.getNumberAttribute('conn_timeout');
  }
  public set connTimeout(value: number) {
    this._connTimeout = value;
  }
  public resetConnTimeout() {
    this._connTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTimeoutInput() {
    return this._connTimeout;
  }

  // encrypt - computed: true, optional: true, required: false
  private _encrypt?: string; 
  public get encrypt() {
    return this.getStringAttribute('encrypt');
  }
  public set encrypt(value: string) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // fdp_device - computed: true, optional: true, required: false
  private _fdpDevice?: string; 
  public get fdpDevice() {
    return this.getStringAttribute('fdp_device');
  }
  public set fdpDevice(value: string) {
    this._fdpDevice = value;
  }
  public resetFdpDevice() {
    this._fdpDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdpDeviceInput() {
    return this._fdpDevice;
  }

  // fdp_interface - computed: true, optional: true, required: false
  private _fdpInterface?: string; 
  public get fdpInterface() {
    return this.getStringAttribute('fdp_interface');
  }
  public set fdpInterface(value: string) {
    this._fdpInterface = value;
  }
  public resetFdpInterface() {
    this._fdpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdpInterfaceInput() {
    return this._fdpInterface;
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

  // localid - computed: true, optional: true, required: false
  private _localid?: string; 
  public get localid() {
    return this.getStringAttribute('localid');
  }
  public set localid(value: string) {
    this._localid = value;
  }
  public resetLocalid() {
    this._localid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localidInput() {
    return this._localid;
  }

  // mgmt_name - computed: true, optional: true, required: false
  private _mgmtName?: string; 
  public get mgmtName() {
    return this.getStringAttribute('mgmt_name');
  }
  public set mgmtName(value: string) {
    this._mgmtName = value;
  }
  public resetMgmtName() {
    this._mgmtName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNameInput() {
    return this._mgmtName;
  }

  // psksecret - computed: false, optional: true, required: false
  private _psksecret?: string; 
  public get psksecret() {
    return this.getStringAttribute('psksecret');
  }
  public set psksecret(value: string) {
    this._psksecret = value;
  }
  public resetPsksecret() {
    this._psksecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      __change_ip: cdktf.numberToTerraform(this._changeIp),
      address_mode: cdktf.stringToTerraform(this._addressMode),
      conn_timeout: cdktf.numberToTerraform(this._connTimeout),
      encrypt: cdktf.stringToTerraform(this._encrypt),
      fdp_device: cdktf.stringToTerraform(this._fdpDevice),
      fdp_interface: cdktf.stringToTerraform(this._fdpInterface),
      id: cdktf.stringToTerraform(this._id),
      localid: cdktf.stringToTerraform(this._localid),
      mgmt_name: cdktf.stringToTerraform(this._mgmtName),
      psksecret: cdktf.stringToTerraform(this._psksecret),
      server: cdktf.stringToTerraform(this._server),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      __change_ip: {
        value: cdktf.numberToHclTerraform(this._changeIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      address_mode: {
        value: cdktf.stringToHclTerraform(this._addressMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_timeout: {
        value: cdktf.numberToHclTerraform(this._connTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypt: {
        value: cdktf.stringToHclTerraform(this._encrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fdp_device: {
        value: cdktf.stringToHclTerraform(this._fdpDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fdp_interface: {
        value: cdktf.stringToHclTerraform(this._fdpInterface),
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
      localid: {
        value: cdktf.stringToHclTerraform(this._localid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_name: {
        value: cdktf.stringToHclTerraform(this._mgmtName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psksecret: {
        value: cdktf.stringToHclTerraform(this._psksecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
