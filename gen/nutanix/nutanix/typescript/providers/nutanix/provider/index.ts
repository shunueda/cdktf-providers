// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NutanixProviderConfig {
  /**
  * URL for Nutanix Prism (e.g IP or FQDN for cluster VIP
  * note, this is never the data services VIP, and should not be an
  * individual CVM address, as this would cause calls to fail during
  * cluster lifecycle management operations, such as AOS upgrades.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#endpoint NutanixProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * endpoint for foundation VM (eg. Foundation VM IP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#foundation_endpoint NutanixProvider#foundation_endpoint}
  */
  readonly foundationEndpoint?: string;
  /**
  * Port for foundation VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#foundation_port NutanixProvider#foundation_port}
  */
  readonly foundationPort?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If omitted,default value is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#insecure NutanixProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * endpoint for Era VM (era ip)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#ndb_endpoint NutanixProvider#ndb_endpoint}
  */
  readonly ndbEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#ndb_password NutanixProvider#ndb_password}
  */
  readonly ndbPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#ndb_username NutanixProvider#ndb_username}
  */
  readonly ndbUsername?: string;
  /**
  * Password for provided user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#password NutanixProvider#password}
  */
  readonly password?: string;
  /**
  * Port for Nutanix Prism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#port NutanixProvider#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#proxy_url NutanixProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Use session authentification instead of basic auth for each request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#session_auth NutanixProvider#session_auth}
  */
  readonly sessionAuth?: boolean | cdktf.IResolvable;
  /**
  * User name for Nutanix Prism. Could be
  * local cluster auth (e.g. 'admin') or directory auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#username NutanixProvider#username}
  */
  readonly username?: string;
  /**
  * Set if you know that the creation o update of a resource may take long time (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#wait_timeout NutanixProvider#wait_timeout}
  */
  readonly waitTimeout?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#alias NutanixProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs nutanix}
*/
export class NutanixProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NutanixProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NutanixProvider to import
  * @param importFromId The id of the existing NutanixProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NutanixProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs nutanix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NutanixProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NutanixProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      terraformProviderSource: 'nutanix/nutanix'
    });
    this._endpoint = config.endpoint;
    this._foundationEndpoint = config.foundationEndpoint;
    this._foundationPort = config.foundationPort;
    this._insecure = config.insecure;
    this._ndbEndpoint = config.ndbEndpoint;
    this._ndbPassword = config.ndbPassword;
    this._ndbUsername = config.ndbUsername;
    this._password = config.password;
    this._port = config.port;
    this._proxyUrl = config.proxyUrl;
    this._sessionAuth = config.sessionAuth;
    this._username = config.username;
    this._waitTimeout = config.waitTimeout;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // foundation_endpoint - computed: false, optional: true, required: false
  private _foundationEndpoint?: string; 
  public get foundationEndpoint() {
    return this._foundationEndpoint;
  }
  public set foundationEndpoint(value: string | undefined) {
    this._foundationEndpoint = value;
  }
  public resetFoundationEndpoint() {
    this._foundationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foundationEndpointInput() {
    return this._foundationEndpoint;
  }

  // foundation_port - computed: false, optional: true, required: false
  private _foundationPort?: string; 
  public get foundationPort() {
    return this._foundationPort;
  }
  public set foundationPort(value: string | undefined) {
    this._foundationPort = value;
  }
  public resetFoundationPort() {
    this._foundationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foundationPortInput() {
    return this._foundationPort;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // ndb_endpoint - computed: false, optional: true, required: false
  private _ndbEndpoint?: string; 
  public get ndbEndpoint() {
    return this._ndbEndpoint;
  }
  public set ndbEndpoint(value: string | undefined) {
    this._ndbEndpoint = value;
  }
  public resetNdbEndpoint() {
    this._ndbEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndbEndpointInput() {
    return this._ndbEndpoint;
  }

  // ndb_password - computed: false, optional: true, required: false
  private _ndbPassword?: string; 
  public get ndbPassword() {
    return this._ndbPassword;
  }
  public set ndbPassword(value: string | undefined) {
    this._ndbPassword = value;
  }
  public resetNdbPassword() {
    this._ndbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndbPasswordInput() {
    return this._ndbPassword;
  }

  // ndb_username - computed: false, optional: true, required: false
  private _ndbUsername?: string; 
  public get ndbUsername() {
    return this._ndbUsername;
  }
  public set ndbUsername(value: string | undefined) {
    this._ndbUsername = value;
  }
  public resetNdbUsername() {
    this._ndbUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndbUsernameInput() {
    return this._ndbUsername;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this._port;
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this._proxyUrl;
  }
  public set proxyUrl(value: string | undefined) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // session_auth - computed: false, optional: true, required: false
  private _sessionAuth?: boolean | cdktf.IResolvable; 
  public get sessionAuth() {
    return this._sessionAuth;
  }
  public set sessionAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._sessionAuth = value;
  }
  public resetSessionAuth() {
    this._sessionAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAuthInput() {
    return this._sessionAuth;
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

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this._waitTimeout;
  }
  public set waitTimeout(value: number | undefined) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      foundation_endpoint: cdktf.stringToTerraform(this._foundationEndpoint),
      foundation_port: cdktf.stringToTerraform(this._foundationPort),
      insecure: cdktf.booleanToTerraform(this._insecure),
      ndb_endpoint: cdktf.stringToTerraform(this._ndbEndpoint),
      ndb_password: cdktf.stringToTerraform(this._ndbPassword),
      ndb_username: cdktf.stringToTerraform(this._ndbUsername),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      session_auth: cdktf.booleanToTerraform(this._sessionAuth),
      username: cdktf.stringToTerraform(this._username),
      wait_timeout: cdktf.numberToTerraform(this._waitTimeout),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      foundation_endpoint: {
        value: cdktf.stringToHclTerraform(this._foundationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      foundation_port: {
        value: cdktf.stringToHclTerraform(this._foundationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ndb_endpoint: {
        value: cdktf.stringToHclTerraform(this._ndbEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ndb_password: {
        value: cdktf.stringToHclTerraform(this._ndbPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ndb_username: {
        value: cdktf.stringToHclTerraform(this._ndbUsername),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_auth: {
        value: cdktf.booleanToHclTerraform(this._sessionAuth),
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
      wait_timeout: {
        value: cdktf.numberToHclTerraform(this._waitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
