// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiemSplunkConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client account id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#account_id SiemSplunkConnection#account_id}
  */
  readonly accountId?: string;
  /**
  * Name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#connection_name SiemSplunkConnection#connection_name}
  */
  readonly connectionName: string;
  /**
  * flag to disable ssl cert verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#disable_cert_verification SiemSplunkConnection#disable_cert_verification}
  */
  readonly disableCertVerification?: boolean | cdktf.IResolvable;
  /**
  * Splunk endpoint host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#host SiemSplunkConnection#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#id SiemSplunkConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * inputHash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#input_hash SiemSplunkConnection#input_hash}
  */
  readonly inputHash?: string;
  /**
  * Splunk endpoint port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#port SiemSplunkConnection#port}
  */
  readonly port: number;
  /**
  * Splunk access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#token SiemSplunkConnection#token}
  */
  readonly token?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection incapsula_siem_splunk_connection}
*/
export class SiemSplunkConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_siem_splunk_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiemSplunkConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiemSplunkConnection to import
  * @param importFromId The id of the existing SiemSplunkConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiemSplunkConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_siem_splunk_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_splunk_connection incapsula_siem_splunk_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiemSplunkConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: SiemSplunkConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_siem_splunk_connection',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._connectionName = config.connectionName;
    this._disableCertVerification = config.disableCertVerification;
    this._host = config.host;
    this._id = config.id;
    this._inputHash = config.inputHash;
    this._port = config.port;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // disable_cert_verification - computed: false, optional: true, required: false
  private _disableCertVerification?: boolean | cdktf.IResolvable; 
  public get disableCertVerification() {
    return this.getBooleanAttribute('disable_cert_verification');
  }
  public set disableCertVerification(value: boolean | cdktf.IResolvable) {
    this._disableCertVerification = value;
  }
  public resetDisableCertVerification() {
    this._disableCertVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCertVerificationInput() {
    return this._disableCertVerification;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // input_hash - computed: true, optional: true, required: false
  private _inputHash?: string; 
  public get inputHash() {
    return this.getStringAttribute('input_hash');
  }
  public set inputHash(value: string) {
    this._inputHash = value;
  }
  public resetInputHash() {
    this._inputHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputHashInput() {
    return this._inputHash;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      disable_cert_verification: cdktf.booleanToTerraform(this._disableCertVerification),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      input_hash: cdktf.stringToTerraform(this._inputHash),
      port: cdktf.numberToTerraform(this._port),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_cert_verification: {
        value: cdktf.booleanToHclTerraform(this._disableCertVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      input_hash: {
        value: cdktf.stringToHclTerraform(this._inputHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
