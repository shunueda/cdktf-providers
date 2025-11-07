// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FortiswitchProviderConfig {
  /**
  * CA Bundle file content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#cabundlecontent FortiswitchProvider#cabundlecontent}
  */
  readonly cabundlecontent?: string;
  /**
  * CA Bundle file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#cabundlefile FortiswitchProvider#cabundlefile}
  */
  readonly cabundlefile?: string;
  /**
  * CA certtificate(Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#cacert FortiswitchProvider#cacert}
  */
  readonly cacert?: string;
  /**
  * User certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#clientcert FortiswitchProvider#clientcert}
  */
  readonly clientcert?: string;
  /**
  * User private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#clientkey FortiswitchProvider#clientkey}
  */
  readonly clientkey?: string;
  /**
  * The hostname/IP address of the FortiSwitch to be connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#hostname FortiswitchProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * HTTP proxy address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#http_proxy FortiswitchProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#insecure FortiswitchProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password of the FortiSwitch to be connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#password FortiswitchProvider#password}
  */
  readonly password?: string;
  /**
  * Enable/disable peer authentication, can be 'enable' or 'disable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#peerauth FortiswitchProvider#peerauth}
  */
  readonly peerauth?: string;
  /**
  * The username of the FortiSwitch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#username FortiswitchProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#alias FortiswitchProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs fortiswitch}
*/
export class FortiswitchProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FortiswitchProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FortiswitchProvider to import
  * @param importFromId The id of the existing FortiswitchProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FortiswitchProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs fortiswitch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FortiswitchProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FortiswitchProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      terraformProviderSource: 'fortinetdev/fortiswitch'
    });
    this._cabundlecontent = config.cabundlecontent;
    this._cabundlefile = config.cabundlefile;
    this._cacert = config.cacert;
    this._clientcert = config.clientcert;
    this._clientkey = config.clientkey;
    this._hostname = config.hostname;
    this._httpProxy = config.httpProxy;
    this._insecure = config.insecure;
    this._password = config.password;
    this._peerauth = config.peerauth;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cabundlecontent - computed: false, optional: true, required: false
  private _cabundlecontent?: string; 
  public get cabundlecontent() {
    return this._cabundlecontent;
  }
  public set cabundlecontent(value: string | undefined) {
    this._cabundlecontent = value;
  }
  public resetCabundlecontent() {
    this._cabundlecontent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cabundlecontentInput() {
    return this._cabundlecontent;
  }

  // cabundlefile - computed: false, optional: true, required: false
  private _cabundlefile?: string; 
  public get cabundlefile() {
    return this._cabundlefile;
  }
  public set cabundlefile(value: string | undefined) {
    this._cabundlefile = value;
  }
  public resetCabundlefile() {
    this._cabundlefile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cabundlefileInput() {
    return this._cabundlefile;
  }

  // cacert - computed: false, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this._cacert;
  }
  public set cacert(value: string | undefined) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // clientcert - computed: false, optional: true, required: false
  private _clientcert?: string; 
  public get clientcert() {
    return this._clientcert;
  }
  public set clientcert(value: string | undefined) {
    this._clientcert = value;
  }
  public resetClientcert() {
    this._clientcert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcertInput() {
    return this._clientcert;
  }

  // clientkey - computed: false, optional: true, required: false
  private _clientkey?: string; 
  public get clientkey() {
    return this._clientkey;
  }
  public set clientkey(value: string | undefined) {
    this._clientkey = value;
  }
  public resetClientkey() {
    this._clientkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientkeyInput() {
    return this._clientkey;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
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

  // peerauth - computed: false, optional: true, required: false
  private _peerauth?: string; 
  public get peerauth() {
    return this._peerauth;
  }
  public set peerauth(value: string | undefined) {
    this._peerauth = value;
  }
  public resetPeerauth() {
    this._peerauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerauthInput() {
    return this._peerauth;
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
      cabundlecontent: cdktf.stringToTerraform(this._cabundlecontent),
      cabundlefile: cdktf.stringToTerraform(this._cabundlefile),
      cacert: cdktf.stringToTerraform(this._cacert),
      clientcert: cdktf.stringToTerraform(this._clientcert),
      clientkey: cdktf.stringToTerraform(this._clientkey),
      hostname: cdktf.stringToTerraform(this._hostname),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      peerauth: cdktf.stringToTerraform(this._peerauth),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cabundlecontent: {
        value: cdktf.stringToHclTerraform(this._cabundlecontent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cabundlefile: {
        value: cdktf.stringToHclTerraform(this._cabundlefile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacert: {
        value: cdktf.stringToHclTerraform(this._cacert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcert: {
        value: cdktf.stringToHclTerraform(this._clientcert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientkey: {
        value: cdktf.stringToHclTerraform(this._clientkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peerauth: {
        value: cdktf.stringToHclTerraform(this._peerauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
