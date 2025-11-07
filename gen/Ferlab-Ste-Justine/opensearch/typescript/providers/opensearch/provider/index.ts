// https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchProviderConfig {
  /**
  * File that contains the CA certificate that signed the opensearch servers' certificates. Can alternatively be set with the OPENSEARCH_CACERT environment variable. Can also be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#ca_cert OpensearchProvider#ca_cert}
  */
  readonly caCert?: string;
  /**
  * File that contains the client certificate used to authentify the user. Can alternatively be set with the OPENSEARCH_CERT environment variable. Can be omitted if password authentication is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#client_cert OpensearchProvider#client_cert}
  */
  readonly clientCert?: string;
  /**
  * File that contains the client encryption key used to authentify the user. Can alternatively be set with the OPENSEARCH_KEY environment variable. Can be omitted if password authentication is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#client_key OpensearchProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * Timeout to establish the opensearch servers connection in golang duration format. Defaults to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#connection_timeout OpensearchProvider#connection_timeout}
  */
  readonly connectionTimeout?: string;
  /**
  * Endpoints of the opensearch servers. The entry of each server should follow the http|https://ip:port format and be coma separated. Can alternatively be set with the OPENSEARCH_ENDPOINTS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#endpoints OpensearchProvider#endpoints}
  */
  readonly endpoints?: string;
  /**
  * Password of the opensearch user that will be used to access opensearch. Can alternatively be set with the OPENSEARCH_PASSWORD environment variable. Can also be omitted if tls certificate authentication will be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#password OpensearchProvider#password}
  */
  readonly password?: string;
  /**
  * Timeout for individual requests the provider makes on the opensearch servers in golang duration format. Defaults to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#request_timeout OpensearchProvider#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Number of times operations that result in retriable errors should be re-attempted. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#retries OpensearchProvider#retries}
  */
  readonly retries?: number;
  /**
  * Name of the opensearch user that will be used to access opensearch. Can alternatively be set with the OPENSEARCH_USERNAME environment variable. Can also be omitted if tls certificate authentication will be used instead as the username will be infered from the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#username OpensearchProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#alias OpensearchProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs opensearch}
*/
export class OpensearchProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchProvider to import
  * @param importFromId The id of the existing OpensearchProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs opensearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpensearchProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opensearch',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '0.1.0'
      },
      terraformProviderSource: 'Ferlab-Ste-Justine/opensearch'
    });
    this._caCert = config.caCert;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._connectionTimeout = config.connectionTimeout;
    this._endpoints = config.endpoints;
    this._password = config.password;
    this._requestTimeout = config.requestTimeout;
    this._retries = config.retries;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this._caCert;
  }
  public set caCert(value: string | undefined) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this._clientCert;
  }
  public set clientCert(value: string | undefined) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this._clientKey;
  }
  public set clientKey(value: string | undefined) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: string; 
  public get connectionTimeout() {
    return this._connectionTimeout;
  }
  public set connectionTimeout(value: string | undefined) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: string | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: string | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      ca_cert: cdktf.stringToTerraform(this._caCert),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      connection_timeout: cdktf.stringToTerraform(this._connectionTimeout),
      endpoints: cdktf.stringToTerraform(this._endpoints),
      password: cdktf.stringToTerraform(this._password),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      retries: cdktf.numberToTerraform(this._retries),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_timeout: {
        value: cdktf.stringToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: cdktf.stringToHclTerraform(this._endpoints),
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
      request_timeout: {
        value: cdktf.stringToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
