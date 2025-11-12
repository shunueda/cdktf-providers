// https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpinnakerProviderConfig {
  /**
  * Path to Gate config file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs#config SpinnakerProvider#config}
  */
  readonly config?: string;
  /**
  * Headers to be passed to the gate endpoint by the client on each request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs#default_headers SpinnakerProvider#default_headers}
  */
  readonly defaultHeaders?: string;
  /**
  * URL for Spinnaker Gate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs#gate_endpoint SpinnakerProvider#gate_endpoint}
  */
  readonly gateEndpoint?: string;
  /**
  * Ignore certificate errors from Gate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs#ignore_cert_errors SpinnakerProvider#ignore_cert_errors}
  */
  readonly ignoreCertErrors?: boolean | cdktf.IResolvable;
  /**
  * URL for Spinnaker Gate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs#server SpinnakerProvider#server}
  */
  readonly server?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs#alias SpinnakerProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs spinnaker}
*/
export class SpinnakerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spinnaker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpinnakerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpinnakerProvider to import
  * @param importFromId The id of the existing SpinnakerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpinnakerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spinnaker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mercari/spinnaker/0.0.1/docs spinnaker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpinnakerProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SpinnakerProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spinnaker',
      terraformGeneratorMetadata: {
        providerName: 'spinnaker',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      terraformProviderSource: 'mercari/spinnaker'
    });
    this._config = config.config;
    this._defaultHeaders = config.defaultHeaders;
    this._gateEndpoint = config.gateEndpoint;
    this._ignoreCertErrors = config.ignoreCertErrors;
    this._server = config.server;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this._config;
  }
  public set config(value: string | undefined) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // default_headers - computed: false, optional: true, required: false
  private _defaultHeaders?: string; 
  public get defaultHeaders() {
    return this._defaultHeaders;
  }
  public set defaultHeaders(value: string | undefined) {
    this._defaultHeaders = value;
  }
  public resetDefaultHeaders() {
    this._defaultHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeadersInput() {
    return this._defaultHeaders;
  }

  // gate_endpoint - computed: false, optional: true, required: false
  private _gateEndpoint?: string; 
  public get gateEndpoint() {
    return this._gateEndpoint;
  }
  public set gateEndpoint(value: string | undefined) {
    this._gateEndpoint = value;
  }
  public resetGateEndpoint() {
    this._gateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateEndpointInput() {
    return this._gateEndpoint;
  }

  // ignore_cert_errors - computed: false, optional: true, required: false
  private _ignoreCertErrors?: boolean | cdktf.IResolvable; 
  public get ignoreCertErrors() {
    return this._ignoreCertErrors;
  }
  public set ignoreCertErrors(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreCertErrors = value;
  }
  public resetIgnoreCertErrors() {
    this._ignoreCertErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertErrorsInput() {
    return this._ignoreCertErrors;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this._server;
  }
  public set server(value: string | undefined) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      default_headers: cdktf.stringToTerraform(this._defaultHeaders),
      gate_endpoint: cdktf.stringToTerraform(this._gateEndpoint),
      ignore_cert_errors: cdktf.booleanToTerraform(this._ignoreCertErrors),
      server: cdktf.stringToTerraform(this._server),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_headers: {
        value: cdktf.stringToHclTerraform(this._defaultHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gate_endpoint: {
        value: cdktf.stringToHclTerraform(this._gateEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_cert_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreCertErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
