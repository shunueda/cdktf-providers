// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncomingProxySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * While the proxy server is configured to pass client certificates as HTTP request headers, specify the chain header name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#client_cert_chain_ssl_header_name IncomingProxySettings#client_cert_chain_ssl_header_name}
  */
  readonly clientCertChainSslHeaderName?: string;
  /**
  * Specify the encoding format of the client certificate header. The default value is `APACHE_MOD_SSL`. Supported values are `APACHE_MOD_SSL`, `NGINX`. Supported in PF version `12.2` and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#client_cert_header_encoding_format IncomingProxySettings#client_cert_header_encoding_format}
  */
  readonly clientCertHeaderEncodingFormat?: string;
  /**
  * While the proxy server is configured to pass client certificates as HTTP request headers, specify the header name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#client_cert_ssl_header_name IncomingProxySettings#client_cert_ssl_header_name}
  */
  readonly clientCertSslHeaderName?: string;
  /**
  * Enable client certificate header authentication. Supported in PF version `12.2` and later. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#enable_client_cert_header_auth IncomingProxySettings#enable_client_cert_header_auth}
  */
  readonly enableClientCertHeaderAuth?: boolean | cdktf.IResolvable;
  /**
  * PingFederate combines multiple comma-separated header values into the same order that they are received. Define which hostname you want to use. Default is to use the last hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#forwarded_host_header_index IncomingProxySettings#forwarded_host_header_index}
  */
  readonly forwardedHostHeaderIndex?: string;
  /**
  * Globally specify the header name (for example, X-Forwarded-Host) where PingFederate should attempt to retrieve the hostname and port in all HTTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#forwarded_host_header_name IncomingProxySettings#forwarded_host_header_name}
  */
  readonly forwardedHostHeaderName?: string;
  /**
  * PingFederate combines multiple comma-separated header values into the same order that they are received. Define which IP address you want to use. Default is to use the last address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#forwarded_ip_address_header_index IncomingProxySettings#forwarded_ip_address_header_index}
  */
  readonly forwardedIpAddressHeaderIndex?: string;
  /**
  * Globally specify the header name (for example, X-Forwarded-For) where PingFederate should attempt to retrieve the client IP address in all HTTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#forwarded_ip_address_header_name IncomingProxySettings#forwarded_ip_address_header_name}
  */
  readonly forwardedIpAddressHeaderName?: string;
  /**
  * Allows you to globally specify that connections to the reverse proxy are made over HTTPS even when HTTP is used between the reverse proxy and PingFederate. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#proxy_terminates_https_conns IncomingProxySettings#proxy_terminates_https_conns}
  */
  readonly proxyTerminatesHttpsConns?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings pingfederate_incoming_proxy_settings}
*/
export class IncomingProxySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_incoming_proxy_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncomingProxySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncomingProxySettings to import
  * @param importFromId The id of the existing IncomingProxySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncomingProxySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_incoming_proxy_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/incoming_proxy_settings pingfederate_incoming_proxy_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncomingProxySettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IncomingProxySettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_incoming_proxy_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientCertChainSslHeaderName = config.clientCertChainSslHeaderName;
    this._clientCertHeaderEncodingFormat = config.clientCertHeaderEncodingFormat;
    this._clientCertSslHeaderName = config.clientCertSslHeaderName;
    this._enableClientCertHeaderAuth = config.enableClientCertHeaderAuth;
    this._forwardedHostHeaderIndex = config.forwardedHostHeaderIndex;
    this._forwardedHostHeaderName = config.forwardedHostHeaderName;
    this._forwardedIpAddressHeaderIndex = config.forwardedIpAddressHeaderIndex;
    this._forwardedIpAddressHeaderName = config.forwardedIpAddressHeaderName;
    this._proxyTerminatesHttpsConns = config.proxyTerminatesHttpsConns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_cert_chain_ssl_header_name - computed: false, optional: true, required: false
  private _clientCertChainSslHeaderName?: string; 
  public get clientCertChainSslHeaderName() {
    return this.getStringAttribute('client_cert_chain_ssl_header_name');
  }
  public set clientCertChainSslHeaderName(value: string) {
    this._clientCertChainSslHeaderName = value;
  }
  public resetClientCertChainSslHeaderName() {
    this._clientCertChainSslHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertChainSslHeaderNameInput() {
    return this._clientCertChainSslHeaderName;
  }

  // client_cert_header_encoding_format - computed: true, optional: true, required: false
  private _clientCertHeaderEncodingFormat?: string; 
  public get clientCertHeaderEncodingFormat() {
    return this.getStringAttribute('client_cert_header_encoding_format');
  }
  public set clientCertHeaderEncodingFormat(value: string) {
    this._clientCertHeaderEncodingFormat = value;
  }
  public resetClientCertHeaderEncodingFormat() {
    this._clientCertHeaderEncodingFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertHeaderEncodingFormatInput() {
    return this._clientCertHeaderEncodingFormat;
  }

  // client_cert_ssl_header_name - computed: false, optional: true, required: false
  private _clientCertSslHeaderName?: string; 
  public get clientCertSslHeaderName() {
    return this.getStringAttribute('client_cert_ssl_header_name');
  }
  public set clientCertSslHeaderName(value: string) {
    this._clientCertSslHeaderName = value;
  }
  public resetClientCertSslHeaderName() {
    this._clientCertSslHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertSslHeaderNameInput() {
    return this._clientCertSslHeaderName;
  }

  // enable_client_cert_header_auth - computed: true, optional: true, required: false
  private _enableClientCertHeaderAuth?: boolean | cdktf.IResolvable; 
  public get enableClientCertHeaderAuth() {
    return this.getBooleanAttribute('enable_client_cert_header_auth');
  }
  public set enableClientCertHeaderAuth(value: boolean | cdktf.IResolvable) {
    this._enableClientCertHeaderAuth = value;
  }
  public resetEnableClientCertHeaderAuth() {
    this._enableClientCertHeaderAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClientCertHeaderAuthInput() {
    return this._enableClientCertHeaderAuth;
  }

  // forwarded_host_header_index - computed: true, optional: true, required: false
  private _forwardedHostHeaderIndex?: string; 
  public get forwardedHostHeaderIndex() {
    return this.getStringAttribute('forwarded_host_header_index');
  }
  public set forwardedHostHeaderIndex(value: string) {
    this._forwardedHostHeaderIndex = value;
  }
  public resetForwardedHostHeaderIndex() {
    this._forwardedHostHeaderIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedHostHeaderIndexInput() {
    return this._forwardedHostHeaderIndex;
  }

  // forwarded_host_header_name - computed: false, optional: true, required: false
  private _forwardedHostHeaderName?: string; 
  public get forwardedHostHeaderName() {
    return this.getStringAttribute('forwarded_host_header_name');
  }
  public set forwardedHostHeaderName(value: string) {
    this._forwardedHostHeaderName = value;
  }
  public resetForwardedHostHeaderName() {
    this._forwardedHostHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedHostHeaderNameInput() {
    return this._forwardedHostHeaderName;
  }

  // forwarded_ip_address_header_index - computed: true, optional: true, required: false
  private _forwardedIpAddressHeaderIndex?: string; 
  public get forwardedIpAddressHeaderIndex() {
    return this.getStringAttribute('forwarded_ip_address_header_index');
  }
  public set forwardedIpAddressHeaderIndex(value: string) {
    this._forwardedIpAddressHeaderIndex = value;
  }
  public resetForwardedIpAddressHeaderIndex() {
    this._forwardedIpAddressHeaderIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedIpAddressHeaderIndexInput() {
    return this._forwardedIpAddressHeaderIndex;
  }

  // forwarded_ip_address_header_name - computed: false, optional: true, required: false
  private _forwardedIpAddressHeaderName?: string; 
  public get forwardedIpAddressHeaderName() {
    return this.getStringAttribute('forwarded_ip_address_header_name');
  }
  public set forwardedIpAddressHeaderName(value: string) {
    this._forwardedIpAddressHeaderName = value;
  }
  public resetForwardedIpAddressHeaderName() {
    this._forwardedIpAddressHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedIpAddressHeaderNameInput() {
    return this._forwardedIpAddressHeaderName;
  }

  // proxy_terminates_https_conns - computed: true, optional: true, required: false
  private _proxyTerminatesHttpsConns?: boolean | cdktf.IResolvable; 
  public get proxyTerminatesHttpsConns() {
    return this.getBooleanAttribute('proxy_terminates_https_conns');
  }
  public set proxyTerminatesHttpsConns(value: boolean | cdktf.IResolvable) {
    this._proxyTerminatesHttpsConns = value;
  }
  public resetProxyTerminatesHttpsConns() {
    this._proxyTerminatesHttpsConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTerminatesHttpsConnsInput() {
    return this._proxyTerminatesHttpsConns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_cert_chain_ssl_header_name: cdktf.stringToTerraform(this._clientCertChainSslHeaderName),
      client_cert_header_encoding_format: cdktf.stringToTerraform(this._clientCertHeaderEncodingFormat),
      client_cert_ssl_header_name: cdktf.stringToTerraform(this._clientCertSslHeaderName),
      enable_client_cert_header_auth: cdktf.booleanToTerraform(this._enableClientCertHeaderAuth),
      forwarded_host_header_index: cdktf.stringToTerraform(this._forwardedHostHeaderIndex),
      forwarded_host_header_name: cdktf.stringToTerraform(this._forwardedHostHeaderName),
      forwarded_ip_address_header_index: cdktf.stringToTerraform(this._forwardedIpAddressHeaderIndex),
      forwarded_ip_address_header_name: cdktf.stringToTerraform(this._forwardedIpAddressHeaderName),
      proxy_terminates_https_conns: cdktf.booleanToTerraform(this._proxyTerminatesHttpsConns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_cert_chain_ssl_header_name: {
        value: cdktf.stringToHclTerraform(this._clientCertChainSslHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_header_encoding_format: {
        value: cdktf.stringToHclTerraform(this._clientCertHeaderEncodingFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_ssl_header_name: {
        value: cdktf.stringToHclTerraform(this._clientCertSslHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_client_cert_header_auth: {
        value: cdktf.booleanToHclTerraform(this._enableClientCertHeaderAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forwarded_host_header_index: {
        value: cdktf.stringToHclTerraform(this._forwardedHostHeaderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarded_host_header_name: {
        value: cdktf.stringToHclTerraform(this._forwardedHostHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarded_ip_address_header_index: {
        value: cdktf.stringToHclTerraform(this._forwardedIpAddressHeaderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarded_ip_address_header_name: {
        value: cdktf.stringToHclTerraform(this._forwardedIpAddressHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_terminates_https_conns: {
        value: cdktf.booleanToHclTerraform(this._proxyTerminatesHttpsConns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
