// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InputsTcpSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if input is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl#disabled InputsTcpSsl#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl#id InputsTcpSsl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server certificate password, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl#password InputsTcpSsl#password}
  */
  readonly password?: string;
  /**
  * Determines whether a client must authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl#require_client_cert InputsTcpSsl#require_client_cert}
  */
  readonly requireClientCert?: boolean | cdktf.IResolvable;
  /**
  * Certificate authority list (root file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl#root_ca InputsTcpSsl#root_ca}
  */
  readonly rootCa?: string;
  /**
  * Full path to the server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl#server_cert InputsTcpSsl#server_cert}
  */
  readonly serverCert?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl splunk_inputs_tcp_ssl}
*/
export class InputsTcpSsl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_inputs_tcp_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InputsTcpSsl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InputsTcpSsl to import
  * @param importFromId The id of the existing InputsTcpSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InputsTcpSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_inputs_tcp_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_tcp_ssl splunk_inputs_tcp_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InputsTcpSslConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InputsTcpSslConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'splunk_inputs_tcp_ssl',
      terraformGeneratorMetadata: {
        providerName: 'splunk',
        providerVersion: '1.4.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._id = config.id;
    this._password = config.password;
    this._requireClientCert = config.requireClientCert;
    this._rootCa = config.rootCa;
    this._serverCert = config.serverCert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // require_client_cert - computed: true, optional: true, required: false
  private _requireClientCert?: boolean | cdktf.IResolvable; 
  public get requireClientCert() {
    return this.getBooleanAttribute('require_client_cert');
  }
  public set requireClientCert(value: boolean | cdktf.IResolvable) {
    this._requireClientCert = value;
  }
  public resetRequireClientCert() {
    this._requireClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireClientCertInput() {
    return this._requireClientCert;
  }

  // root_ca - computed: true, optional: true, required: false
  private _rootCa?: string; 
  public get rootCa() {
    return this.getStringAttribute('root_ca');
  }
  public set rootCa(value: string) {
    this._rootCa = value;
  }
  public resetRootCa() {
    this._rootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaInput() {
    return this._rootCa;
  }

  // server_cert - computed: true, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      require_client_cert: cdktf.booleanToTerraform(this._requireClientCert),
      root_ca: cdktf.stringToTerraform(this._rootCa),
      server_cert: cdktf.stringToTerraform(this._serverCert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_client_cert: {
        value: cdktf.booleanToHclTerraform(this._requireClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_ca: {
        value: cdktf.stringToHclTerraform(this._rootCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_cert: {
        value: cdktf.stringToHclTerraform(this._serverCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
