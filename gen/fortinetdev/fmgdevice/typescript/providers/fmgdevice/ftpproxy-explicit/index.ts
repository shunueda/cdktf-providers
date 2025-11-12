// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtpproxyExplicitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#device_name FtpproxyExplicit#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#device_vdom FtpproxyExplicit#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#id FtpproxyExplicit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#incoming_ip FtpproxyExplicit#incoming_ip}
  */
  readonly incomingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#incoming_port FtpproxyExplicit#incoming_port}
  */
  readonly incomingPort?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#outgoing_ip FtpproxyExplicit#outgoing_ip}
  */
  readonly outgoingIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#sec_default_action FtpproxyExplicit#sec_default_action}
  */
  readonly secDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#server_data_mode FtpproxyExplicit#server_data_mode}
  */
  readonly serverDataMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#ssl FtpproxyExplicit#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#ssl_algorithm FtpproxyExplicit#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#ssl_cert FtpproxyExplicit#ssl_cert}
  */
  readonly sslCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#ssl_dh_bits FtpproxyExplicit#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#status FtpproxyExplicit#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit fmgdevice_ftpproxy_explicit}
*/
export class FtpproxyExplicit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_ftpproxy_explicit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtpproxyExplicit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtpproxyExplicit to import
  * @param importFromId The id of the existing FtpproxyExplicit that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtpproxyExplicit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_ftpproxy_explicit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ftpproxy_explicit fmgdevice_ftpproxy_explicit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtpproxyExplicitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FtpproxyExplicitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_ftpproxy_explicit',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
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
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._incomingIp = config.incomingIp;
    this._incomingPort = config.incomingPort;
    this._outgoingIp = config.outgoingIp;
    this._secDefaultAction = config.secDefaultAction;
    this._serverDataMode = config.serverDataMode;
    this._ssl = config.ssl;
    this._sslAlgorithm = config.sslAlgorithm;
    this._sslCert = config.sslCert;
    this._sslDhBits = config.sslDhBits;
    this._status = config.status;
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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // incoming_ip - computed: false, optional: true, required: false
  private _incomingIp?: string; 
  public get incomingIp() {
    return this.getStringAttribute('incoming_ip');
  }
  public set incomingIp(value: string) {
    this._incomingIp = value;
  }
  public resetIncomingIp() {
    this._incomingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingIpInput() {
    return this._incomingIp;
  }

  // incoming_port - computed: true, optional: true, required: false
  private _incomingPort?: string[]; 
  public get incomingPort() {
    return cdktf.Fn.tolist(this.getListAttribute('incoming_port'));
  }
  public set incomingPort(value: string[]) {
    this._incomingPort = value;
  }
  public resetIncomingPort() {
    this._incomingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPortInput() {
    return this._incomingPort;
  }

  // outgoing_ip - computed: true, optional: true, required: false
  private _outgoingIp?: string[]; 
  public get outgoingIp() {
    return cdktf.Fn.tolist(this.getListAttribute('outgoing_ip'));
  }
  public set outgoingIp(value: string[]) {
    this._outgoingIp = value;
  }
  public resetOutgoingIp() {
    this._outgoingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingIpInput() {
    return this._outgoingIp;
  }

  // sec_default_action - computed: false, optional: true, required: false
  private _secDefaultAction?: string; 
  public get secDefaultAction() {
    return this.getStringAttribute('sec_default_action');
  }
  public set secDefaultAction(value: string) {
    this._secDefaultAction = value;
  }
  public resetSecDefaultAction() {
    this._secDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secDefaultActionInput() {
    return this._secDefaultAction;
  }

  // server_data_mode - computed: true, optional: true, required: false
  private _serverDataMode?: string; 
  public get serverDataMode() {
    return this.getStringAttribute('server_data_mode');
  }
  public set serverDataMode(value: string) {
    this._serverDataMode = value;
  }
  public resetServerDataMode() {
    this._serverDataMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDataModeInput() {
    return this._serverDataMode;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_algorithm - computed: false, optional: true, required: false
  private _sslAlgorithm?: string; 
  public get sslAlgorithm() {
    return this.getStringAttribute('ssl_algorithm');
  }
  public set sslAlgorithm(value: string) {
    this._sslAlgorithm = value;
  }
  public resetSslAlgorithm() {
    this._sslAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAlgorithmInput() {
    return this._sslAlgorithm;
  }

  // ssl_cert - computed: true, optional: true, required: false
  private _sslCert?: string[]; 
  public get sslCert() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_cert'));
  }
  public set sslCert(value: string[]) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_dh_bits - computed: false, optional: true, required: false
  private _sslDhBits?: string; 
  public get sslDhBits() {
    return this.getStringAttribute('ssl_dh_bits');
  }
  public set sslDhBits(value: string) {
    this._sslDhBits = value;
  }
  public resetSslDhBits() {
    this._sslDhBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDhBitsInput() {
    return this._sslDhBits;
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
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      incoming_ip: cdktf.stringToTerraform(this._incomingIp),
      incoming_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incomingPort),
      outgoing_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outgoingIp),
      sec_default_action: cdktf.stringToTerraform(this._secDefaultAction),
      server_data_mode: cdktf.stringToTerraform(this._serverDataMode),
      ssl: cdktf.stringToTerraform(this._ssl),
      ssl_algorithm: cdktf.stringToTerraform(this._sslAlgorithm),
      ssl_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCert),
      ssl_dh_bits: cdktf.stringToTerraform(this._sslDhBits),
      status: cdktf.stringToTerraform(this._status),
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
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      incoming_ip: {
        value: cdktf.stringToHclTerraform(this._incomingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incoming_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incomingPort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      outgoing_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outgoingIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sec_default_action: {
        value: cdktf.stringToHclTerraform(this._secDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_data_mode: {
        value: cdktf.stringToHclTerraform(this._serverDataMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.stringToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_algorithm: {
        value: cdktf.stringToHclTerraform(this._sslAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslCert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_dh_bits: {
        value: cdktf.stringToHclTerraform(this._sslDhBits),
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
