// https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PatroniProviderConfig {
  /**
  * Path to a CA certificate used to trust the patroni server certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#ca_cert PatroniProvider#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Path to a certificate used to authentify to the patroni servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#cert PatroniProvider#cert}
  */
  readonly cert?: string;
  /**
  * Path to a certificate used to authentify to the patroni servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#connection_timeout PatroniProvider#connection_timeout}
  */
  readonly connectionTimeout?: string;
  /**
  * Path to a secret key used to authentify to the patroni servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#key PatroniProvider#key}
  */
  readonly key?: string;
  /**
  * Path to a certificate used to authentify to the patroni servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#request_timeout PatroniProvider#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * List of patroni servers to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#servers PatroniProvider#servers}
  */
  readonly servers: PatroniProviderServers[] | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#alias PatroniProvider#alias}
  */
  readonly alias?: string;
}
export interface PatroniProviderServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#address PatroniProvider#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#name PatroniProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#port PatroniProvider#port}
  */
  readonly port: number;
}

export function patroniProviderServersToTerraform(struct?: PatroniProviderServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function patroniProviderServersToHclTerraform(struct?: PatroniProviderServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs patroni}
*/
export class PatroniProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "patroni";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PatroniProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PatroniProvider to import
  * @param importFromId The id of the existing PatroniProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PatroniProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "patroni", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs patroni} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PatroniProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PatroniProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'patroni',
      terraformGeneratorMetadata: {
        providerName: 'patroni',
        providerVersion: '0.1.1',
        providerVersionConstraint: '0.1.1'
      },
      terraformProviderSource: 'Ferlab-Ste-Justine/patroni'
    });
    this._caCert = config.caCert;
    this._cert = config.cert;
    this._connectionTimeout = config.connectionTimeout;
    this._key = config.key;
    this._requestTimeout = config.requestTimeout;
    this._servers = config.servers;
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

  // servers - computed: false, optional: false, required: true
  private _servers?: PatroniProviderServers[] | cdktf.IResolvable; 
  public get servers() {
    return this._servers;
  }
  public set servers(value: PatroniProviderServers[] | cdktf.IResolvable | undefined) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
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
      key: cdktf.stringToTerraform(this._key),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      servers: cdktf.listMapper(patroniProviderServersToTerraform, false)(this._servers),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      servers: {
        value: cdktf.listMapperHcl(patroniProviderServersToHclTerraform, false)(this._servers),
        isBlock: true,
        type: "list",
        storageClassType: "PatroniProviderServersList",
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
