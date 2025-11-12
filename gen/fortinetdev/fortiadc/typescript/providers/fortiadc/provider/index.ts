// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FortiadcProviderConfig {
  /**
  * CA Bundle file content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#cabundlecontent FortiadcProvider#cabundlecontent}
  */
  readonly cabundlecontent?: string;
  /**
  * CA Bundle file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#cabundlefile FortiadcProvider#cabundlefile}
  */
  readonly cabundlefile?: string;
  /**
  * CA certtificate(Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#cacert FortiadcProvider#cacert}
  */
  readonly cacert?: string;
  /**
  * User certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#clientcert FortiadcProvider#clientcert}
  */
  readonly clientcert?: string;
  /**
  * User private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#clientkey FortiadcProvider#clientkey}
  */
  readonly clientkey?: string;
  /**
  * CA Bundle file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#fmg_cabundlefile FortiadcProvider#fmg_cabundlefile}
  */
  readonly fmgCabundlefile?: string;
  /**
  * Hostname/IP address of the FortiManager to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#fmg_hostname FortiadcProvider#fmg_hostname}
  */
  readonly fmgHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#fmg_insecure FortiadcProvider#fmg_insecure}
  */
  readonly fmgInsecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#fmg_passwd FortiadcProvider#fmg_passwd}
  */
  readonly fmgPasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#fmg_username FortiadcProvider#fmg_username}
  */
  readonly fmgUsername?: string;
  /**
  * The hostname/IP address of the FortiOS to be connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#hostname FortiadcProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * HTTP proxy address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#http_proxy FortiadcProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTPS proxy address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#https_proxy FortiadcProvider#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#insecure FortiadcProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * NO proxy address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#no_proxy FortiadcProvider#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Enable/disable peer authentication, can be 'enable' or 'disable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#peerauth FortiadcProvider#peerauth}
  */
  readonly peerauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#token FortiadcProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#vdom FortiadcProvider#vdom}
  */
  readonly vdom?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#alias FortiadcProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs fortiadc}
*/
export class FortiadcProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FortiadcProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FortiadcProvider to import
  * @param importFromId The id of the existing FortiadcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FortiadcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs fortiadc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FortiadcProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FortiadcProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      terraformProviderSource: 'fortinetdev/fortiadc'
    });
    this._cabundlecontent = config.cabundlecontent;
    this._cabundlefile = config.cabundlefile;
    this._cacert = config.cacert;
    this._clientcert = config.clientcert;
    this._clientkey = config.clientkey;
    this._fmgCabundlefile = config.fmgCabundlefile;
    this._fmgHostname = config.fmgHostname;
    this._fmgInsecure = config.fmgInsecure;
    this._fmgPasswd = config.fmgPasswd;
    this._fmgUsername = config.fmgUsername;
    this._hostname = config.hostname;
    this._httpProxy = config.httpProxy;
    this._httpsProxy = config.httpsProxy;
    this._insecure = config.insecure;
    this._noProxy = config.noProxy;
    this._peerauth = config.peerauth;
    this._token = config.token;
    this._vdom = config.vdom;
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

  // fmg_cabundlefile - computed: false, optional: true, required: false
  private _fmgCabundlefile?: string; 
  public get fmgCabundlefile() {
    return this._fmgCabundlefile;
  }
  public set fmgCabundlefile(value: string | undefined) {
    this._fmgCabundlefile = value;
  }
  public resetFmgCabundlefile() {
    this._fmgCabundlefile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgCabundlefileInput() {
    return this._fmgCabundlefile;
  }

  // fmg_hostname - computed: false, optional: true, required: false
  private _fmgHostname?: string; 
  public get fmgHostname() {
    return this._fmgHostname;
  }
  public set fmgHostname(value: string | undefined) {
    this._fmgHostname = value;
  }
  public resetFmgHostname() {
    this._fmgHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgHostnameInput() {
    return this._fmgHostname;
  }

  // fmg_insecure - computed: false, optional: true, required: false
  private _fmgInsecure?: boolean | cdktf.IResolvable; 
  public get fmgInsecure() {
    return this._fmgInsecure;
  }
  public set fmgInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._fmgInsecure = value;
  }
  public resetFmgInsecure() {
    this._fmgInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgInsecureInput() {
    return this._fmgInsecure;
  }

  // fmg_passwd - computed: false, optional: true, required: false
  private _fmgPasswd?: string; 
  public get fmgPasswd() {
    return this._fmgPasswd;
  }
  public set fmgPasswd(value: string | undefined) {
    this._fmgPasswd = value;
  }
  public resetFmgPasswd() {
    this._fmgPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgPasswdInput() {
    return this._fmgPasswd;
  }

  // fmg_username - computed: false, optional: true, required: false
  private _fmgUsername?: string; 
  public get fmgUsername() {
    return this._fmgUsername;
  }
  public set fmgUsername(value: string | undefined) {
    this._fmgUsername = value;
  }
  public resetFmgUsername() {
    this._fmgUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgUsernameInput() {
    return this._fmgUsername;
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

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this._httpsProxy;
  }
  public set httpsProxy(value: string | undefined) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
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

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this._noProxy;
  }
  public set noProxy(value: string | undefined) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this._vdom;
  }
  public set vdom(value: string | undefined) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
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
      fmg_cabundlefile: cdktf.stringToTerraform(this._fmgCabundlefile),
      fmg_hostname: cdktf.stringToTerraform(this._fmgHostname),
      fmg_insecure: cdktf.booleanToTerraform(this._fmgInsecure),
      fmg_passwd: cdktf.stringToTerraform(this._fmgPasswd),
      fmg_username: cdktf.stringToTerraform(this._fmgUsername),
      hostname: cdktf.stringToTerraform(this._hostname),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      https_proxy: cdktf.stringToTerraform(this._httpsProxy),
      insecure: cdktf.booleanToTerraform(this._insecure),
      no_proxy: cdktf.stringToTerraform(this._noProxy),
      peerauth: cdktf.stringToTerraform(this._peerauth),
      token: cdktf.stringToTerraform(this._token),
      vdom: cdktf.stringToTerraform(this._vdom),
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
      fmg_cabundlefile: {
        value: cdktf.stringToHclTerraform(this._fmgCabundlefile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg_hostname: {
        value: cdktf.stringToHclTerraform(this._fmgHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg_insecure: {
        value: cdktf.booleanToHclTerraform(this._fmgInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fmg_passwd: {
        value: cdktf.stringToHclTerraform(this._fmgPasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg_username: {
        value: cdktf.stringToHclTerraform(this._fmgUsername),
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
      https_proxy: {
        value: cdktf.stringToHclTerraform(this._httpsProxy),
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
      no_proxy: {
        value: cdktf.stringToHclTerraform(this._noProxy),
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
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
