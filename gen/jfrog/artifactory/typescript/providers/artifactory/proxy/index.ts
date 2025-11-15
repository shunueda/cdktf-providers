// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#host Proxy#host}
  */
  readonly host: string;
  /**
  * The unique ID of the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#key Proxy#key}
  */
  readonly key: string;
  /**
  * The proxy domain/realm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#nt_domain Proxy#nt_domain}
  */
  readonly ntDomain?: string;
  /**
  * The computer name of the machine (the machine connecting to the NTLM proxy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#nt_host Proxy#nt_host}
  */
  readonly ntHost?: string;
  /**
  * The proxy password when authentication credentials are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#password Proxy#password}
  */
  readonly password?: string;
  /**
  * When set, this proxy will be the default proxy for new remote repositories and for internal HTTP requests issued by Artifactory. Will also be used as proxy for all other services in the platform (for example: Xray, Distribution, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#platform_default Proxy#platform_default}
  */
  readonly platformDefault?: boolean | cdktf.IResolvable;
  /**
  * The proxy port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#port Proxy#port}
  */
  readonly port: number;
  /**
  * An optional list of host names to which this proxy may redirect requests. The credentials defined for the proxy are reused by requests redirected to all of these hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#redirect_to_hosts Proxy#redirect_to_hosts}
  */
  readonly redirectToHosts?: string[];
  /**
  * An optional list of services names to which this proxy be the default of. The options are jfrt, jfmc, jfxr, jfds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#services Proxy#services}
  */
  readonly services?: string[];
  /**
  * The proxy username when authentication credentials are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#username Proxy#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy artifactory_proxy}
*/
export class Proxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Proxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Proxy to import
  * @param importFromId The id of the existing Proxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Proxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/proxy artifactory_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_proxy',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._key = config.key;
    this._ntDomain = config.ntDomain;
    this._ntHost = config.ntHost;
    this._password = config.password;
    this._platformDefault = config.platformDefault;
    this._port = config.port;
    this._redirectToHosts = config.redirectToHosts;
    this._services = config.services;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // nt_domain - computed: true, optional: true, required: false
  private _ntDomain?: string; 
  public get ntDomain() {
    return this.getStringAttribute('nt_domain');
  }
  public set ntDomain(value: string) {
    this._ntDomain = value;
  }
  public resetNtDomain() {
    this._ntDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntDomainInput() {
    return this._ntDomain;
  }

  // nt_host - computed: true, optional: true, required: false
  private _ntHost?: string; 
  public get ntHost() {
    return this.getStringAttribute('nt_host');
  }
  public set ntHost(value: string) {
    this._ntHost = value;
  }
  public resetNtHost() {
    this._ntHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntHostInput() {
    return this._ntHost;
  }

  // password - computed: false, optional: true, required: false
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

  // platform_default - computed: true, optional: true, required: false
  private _platformDefault?: boolean | cdktf.IResolvable; 
  public get platformDefault() {
    return this.getBooleanAttribute('platform_default');
  }
  public set platformDefault(value: boolean | cdktf.IResolvable) {
    this._platformDefault = value;
  }
  public resetPlatformDefault() {
    this._platformDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformDefaultInput() {
    return this._platformDefault;
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

  // redirect_to_hosts - computed: false, optional: true, required: false
  private _redirectToHosts?: string[]; 
  public get redirectToHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_to_hosts'));
  }
  public set redirectToHosts(value: string[]) {
    this._redirectToHosts = value;
  }
  public resetRedirectToHosts() {
    this._redirectToHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToHostsInput() {
    return this._redirectToHosts;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      key: cdktf.stringToTerraform(this._key),
      nt_domain: cdktf.stringToTerraform(this._ntDomain),
      nt_host: cdktf.stringToTerraform(this._ntHost),
      password: cdktf.stringToTerraform(this._password),
      platform_default: cdktf.booleanToTerraform(this._platformDefault),
      port: cdktf.numberToTerraform(this._port),
      redirect_to_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectToHosts),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      nt_domain: {
        value: cdktf.stringToHclTerraform(this._ntDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nt_host: {
        value: cdktf.stringToHclTerraform(this._ntHost),
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
      platform_default: {
        value: cdktf.booleanToHclTerraform(this._platformDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_to_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectToHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
