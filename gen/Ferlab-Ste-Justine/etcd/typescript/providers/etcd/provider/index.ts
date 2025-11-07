// https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EtcdProviderConfig {
  /**
  * File that contains the CA certificate that signed the etcd servers' certificates. Can alternatively be set with the ETCDCTL_CACERT environment variable. Can also be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#ca_cert EtcdProvider#ca_cert}
  */
  readonly caCert?: string;
  /**
  * File that contains the client certificate used to authentify the user. Can alternatively be set with the ETCDCTL_CERT environment variable. Can be omitted if password authentication is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#cert EtcdProvider#cert}
  */
  readonly cert?: string;
  /**
  * Timeout to establish the etcd servers connection as a duration. Defaults to 10s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#connection_timeout EtcdProvider#connection_timeout}
  */
  readonly connectionTimeout?: string;
  /**
  * Endpoints of the etcd servers. The entry of each server should follow the ip:port format and be coma separated. Can alternatively be set with the ETCDCTL_ENDPOINTS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#endpoints EtcdProvider#endpoints}
  */
  readonly endpoints?: string;
  /**
  * File that contains the client encryption key used to authentify the user. Can alternatively be set with the ETCDCTL_KEY environment variable. Can be omitted if password authentication is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#key EtcdProvider#key}
  */
  readonly key?: string;
  /**
  * Password of the etcd user that will be used to access etcd. Can alternatively be set with the ETCDCTL_PASSWORD environment variable. Can also be omitted if tls certificate authentication will be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#password EtcdProvider#password}
  */
  readonly password?: string;
  /**
  * Timeout for individual requests the provider makes on the etcd servers as a duration. Defaults to 10s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#request_timeout EtcdProvider#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Number of times operations that result in retriable errors should be re-attempted. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#retries EtcdProvider#retries}
  */
  readonly retries?: number;
  /**
  * Duration to wait after a failing etcd request before retrying. Defaults to 100ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#retry_interval EtcdProvider#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * If set to true, connection to the etcd cluster will be attempted in plaintext without encryption. Default to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#skip_tls EtcdProvider#skip_tls}
  */
  readonly skipTls?: boolean | cdktf.IResolvable;
  /**
  * Name of the etcd user that will be used to access etcd. Can alternatively be set with the ETCDCTL_USERNAME environment variable. Can also be omitted if tls certificate authentication will be used instead as the username will be infered from the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#username EtcdProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#alias EtcdProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs etcd}
*/
export class EtcdProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "etcd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EtcdProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EtcdProvider to import
  * @param importFromId The id of the existing EtcdProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EtcdProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "etcd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs etcd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EtcdProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EtcdProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'etcd',
      terraformGeneratorMetadata: {
        providerName: 'etcd',
        providerVersion: '0.11.0'
      },
      terraformProviderSource: 'Ferlab-Ste-Justine/etcd'
    });
    this._caCert = config.caCert;
    this._cert = config.cert;
    this._connectionTimeout = config.connectionTimeout;
    this._endpoints = config.endpoints;
    this._key = config.key;
    this._password = config.password;
    this._requestTimeout = config.requestTimeout;
    this._retries = config.retries;
    this._retryInterval = config.retryInterval;
    this._skipTls = config.skipTls;
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

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this._retryInterval;
  }
  public set retryInterval(value: string | undefined) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // skip_tls - computed: false, optional: true, required: false
  private _skipTls?: boolean | cdktf.IResolvable; 
  public get skipTls() {
    return this._skipTls;
  }
  public set skipTls(value: boolean | cdktf.IResolvable | undefined) {
    this._skipTls = value;
  }
  public resetSkipTls() {
    this._skipTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsInput() {
    return this._skipTls;
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
      cert: cdktf.stringToTerraform(this._cert),
      connection_timeout: cdktf.stringToTerraform(this._connectionTimeout),
      endpoints: cdktf.stringToTerraform(this._endpoints),
      key: cdktf.stringToTerraform(this._key),
      password: cdktf.stringToTerraform(this._password),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      retries: cdktf.numberToTerraform(this._retries),
      retry_interval: cdktf.stringToTerraform(this._retryInterval),
      skip_tls: cdktf.booleanToTerraform(this._skipTls),
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
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      retry_interval: {
        value: cdktf.stringToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_tls: {
        value: cdktf.booleanToHclTerraform(this._skipTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
