// https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReverseProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docker access method. The default value is SUBDOMAIN. Supported values: SUBDOMAIN, REPOPATHPREFIX, PORTPERREPO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#docker_reverse_proxy_method ReverseProxy#docker_reverse_proxy_method}
  */
  readonly dockerReverseProxyMethod?: string;
  /**
  * The port for access via HTTP. The default value is 80. Only settable when `server_provider` is set to `NIGNIX` or `APACHE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#http_port ReverseProxy#http_port}
  */
  readonly httpPort?: number;
  /**
  * The port for access via HTTPS. The default value is 443. Only settable when `use_https` is set to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#https_port ReverseProxy#https_port}
  */
  readonly httpsPort?: number;
  /**
  * The internal server name for Artifactory which will be used by the web server to access the Artifactory machine. If the web server is installed on the same machine as Artifactory you can use localhost, otherwise use the IP or hostname. Must be set when `server_provider` is set to `NIGNIX` or `APACHE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#internal_hostname ReverseProxy#internal_hostname}
  */
  readonly internalHostname?: string;
  /**
  * The server name that will be used to access Artifactory. Should be correlated with the base URL value. Must be set when `server_provider` is set to `NIGNIX` or `APACHE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#public_server_name ReverseProxy#public_server_name}
  */
  readonly publicServerName?: string;
  /**
  * Set the server provider type. Supported values: DIRECT, NGINX, APACHE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#server_provider ReverseProxy#server_provider}
  */
  readonly serverProvider: string;
  /**
  * The full path of the certificate file on the web server, e.g. `/etc/ssl/certs/myserver.crt`. Must be set when `use_https` is set to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#ssl_certificate_path ReverseProxy#ssl_certificate_path}
  */
  readonly sslCertificatePath?: string;
  /**
  * The full path of the key file on the web server, e.g. `/etc/ssl/private/myserver.key`. Must be set when `use_https` is set to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#ssl_key_path ReverseProxy#ssl_key_path}
  */
  readonly sslKeyPath?: string;
  /**
  * When set, Artifactory will be accessible via HTTPS at the corresponding port that is set. Only settable when `server_provider` is set to `NIGNIX` or `APACHE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#use_https ReverseProxy#use_https}
  */
  readonly useHttps?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy platform_reverse_proxy}
*/
export class ReverseProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_reverse_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReverseProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReverseProxy to import
  * @param importFromId The id of the existing ReverseProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReverseProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_reverse_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/reverse_proxy platform_reverse_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReverseProxyConfig
  */
  public constructor(scope: Construct, id: string, config: ReverseProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_reverse_proxy',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.7',
        providerVersionConstraint: '2.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dockerReverseProxyMethod = config.dockerReverseProxyMethod;
    this._httpPort = config.httpPort;
    this._httpsPort = config.httpsPort;
    this._internalHostname = config.internalHostname;
    this._publicServerName = config.publicServerName;
    this._serverProvider = config.serverProvider;
    this._sslCertificatePath = config.sslCertificatePath;
    this._sslKeyPath = config.sslKeyPath;
    this._useHttps = config.useHttps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // docker_reverse_proxy_method - computed: true, optional: true, required: false
  private _dockerReverseProxyMethod?: string; 
  public get dockerReverseProxyMethod() {
    return this.getStringAttribute('docker_reverse_proxy_method');
  }
  public set dockerReverseProxyMethod(value: string) {
    this._dockerReverseProxyMethod = value;
  }
  public resetDockerReverseProxyMethod() {
    this._dockerReverseProxyMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerReverseProxyMethodInput() {
    return this._dockerReverseProxyMethod;
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: true, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // internal_hostname - computed: false, optional: true, required: false
  private _internalHostname?: string; 
  public get internalHostname() {
    return this.getStringAttribute('internal_hostname');
  }
  public set internalHostname(value: string) {
    this._internalHostname = value;
  }
  public resetInternalHostname() {
    this._internalHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalHostnameInput() {
    return this._internalHostname;
  }

  // public_server_name - computed: false, optional: true, required: false
  private _publicServerName?: string; 
  public get publicServerName() {
    return this.getStringAttribute('public_server_name');
  }
  public set publicServerName(value: string) {
    this._publicServerName = value;
  }
  public resetPublicServerName() {
    this._publicServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicServerNameInput() {
    return this._publicServerName;
  }

  // server_provider - computed: false, optional: false, required: true
  private _serverProvider?: string; 
  public get serverProvider() {
    return this.getStringAttribute('server_provider');
  }
  public set serverProvider(value: string) {
    this._serverProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProviderInput() {
    return this._serverProvider;
  }

  // ssl_certificate_path - computed: false, optional: true, required: false
  private _sslCertificatePath?: string; 
  public get sslCertificatePath() {
    return this.getStringAttribute('ssl_certificate_path');
  }
  public set sslCertificatePath(value: string) {
    this._sslCertificatePath = value;
  }
  public resetSslCertificatePath() {
    this._sslCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificatePathInput() {
    return this._sslCertificatePath;
  }

  // ssl_key_path - computed: false, optional: true, required: false
  private _sslKeyPath?: string; 
  public get sslKeyPath() {
    return this.getStringAttribute('ssl_key_path');
  }
  public set sslKeyPath(value: string) {
    this._sslKeyPath = value;
  }
  public resetSslKeyPath() {
    this._sslKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPathInput() {
    return this._sslKeyPath;
  }

  // use_https - computed: true, optional: true, required: false
  private _useHttps?: boolean | cdktf.IResolvable; 
  public get useHttps() {
    return this.getBooleanAttribute('use_https');
  }
  public set useHttps(value: boolean | cdktf.IResolvable) {
    this._useHttps = value;
  }
  public resetUseHttps() {
    this._useHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsInput() {
    return this._useHttps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      docker_reverse_proxy_method: cdktf.stringToTerraform(this._dockerReverseProxyMethod),
      http_port: cdktf.numberToTerraform(this._httpPort),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      internal_hostname: cdktf.stringToTerraform(this._internalHostname),
      public_server_name: cdktf.stringToTerraform(this._publicServerName),
      server_provider: cdktf.stringToTerraform(this._serverProvider),
      ssl_certificate_path: cdktf.stringToTerraform(this._sslCertificatePath),
      ssl_key_path: cdktf.stringToTerraform(this._sslKeyPath),
      use_https: cdktf.booleanToTerraform(this._useHttps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      docker_reverse_proxy_method: {
        value: cdktf.stringToHclTerraform(this._dockerReverseProxyMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_port: {
        value: cdktf.numberToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_port: {
        value: cdktf.numberToHclTerraform(this._httpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internal_hostname: {
        value: cdktf.stringToHclTerraform(this._internalHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_server_name: {
        value: cdktf.stringToHclTerraform(this._publicServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_provider: {
        value: cdktf.stringToHclTerraform(this._serverProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate_path: {
        value: cdktf.stringToHclTerraform(this._sslCertificatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key_path: {
        value: cdktf.stringToHclTerraform(this._sslKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_https: {
        value: cdktf.booleanToHclTerraform(this._useHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
