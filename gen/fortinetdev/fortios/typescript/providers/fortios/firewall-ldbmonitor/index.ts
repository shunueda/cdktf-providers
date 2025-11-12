// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallLdbmonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#dns_match_ip FirewallLdbmonitor#dns_match_ip}
  */
  readonly dnsMatchIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#dns_protocol FirewallLdbmonitor#dns_protocol}
  */
  readonly dnsProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#dns_request_domain FirewallLdbmonitor#dns_request_domain}
  */
  readonly dnsRequestDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#http_get FirewallLdbmonitor#http_get}
  */
  readonly httpGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#http_match FirewallLdbmonitor#http_match}
  */
  readonly httpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#http_max_redirects FirewallLdbmonitor#http_max_redirects}
  */
  readonly httpMaxRedirects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#id FirewallLdbmonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#interval FirewallLdbmonitor#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#name FirewallLdbmonitor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#port FirewallLdbmonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#retry FirewallLdbmonitor#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#src_ip FirewallLdbmonitor#src_ip}
  */
  readonly srcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#timeout FirewallLdbmonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#type FirewallLdbmonitor#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#vdomparam FirewallLdbmonitor#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor fortios_firewall_ldbmonitor}
*/
export class FirewallLdbmonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_ldbmonitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallLdbmonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallLdbmonitor to import
  * @param importFromId The id of the existing FirewallLdbmonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallLdbmonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_ldbmonitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ldbmonitor fortios_firewall_ldbmonitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallLdbmonitorConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallLdbmonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_ldbmonitor',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsMatchIp = config.dnsMatchIp;
    this._dnsProtocol = config.dnsProtocol;
    this._dnsRequestDomain = config.dnsRequestDomain;
    this._httpGet = config.httpGet;
    this._httpMatch = config.httpMatch;
    this._httpMaxRedirects = config.httpMaxRedirects;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._port = config.port;
    this._retry = config.retry;
    this._srcIp = config.srcIp;
    this._timeout = config.timeout;
    this._type = config.type;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_match_ip - computed: true, optional: true, required: false
  private _dnsMatchIp?: string; 
  public get dnsMatchIp() {
    return this.getStringAttribute('dns_match_ip');
  }
  public set dnsMatchIp(value: string) {
    this._dnsMatchIp = value;
  }
  public resetDnsMatchIp() {
    this._dnsMatchIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMatchIpInput() {
    return this._dnsMatchIp;
  }

  // dns_protocol - computed: true, optional: true, required: false
  private _dnsProtocol?: string; 
  public get dnsProtocol() {
    return this.getStringAttribute('dns_protocol');
  }
  public set dnsProtocol(value: string) {
    this._dnsProtocol = value;
  }
  public resetDnsProtocol() {
    this._dnsProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProtocolInput() {
    return this._dnsProtocol;
  }

  // dns_request_domain - computed: false, optional: true, required: false
  private _dnsRequestDomain?: string; 
  public get dnsRequestDomain() {
    return this.getStringAttribute('dns_request_domain');
  }
  public set dnsRequestDomain(value: string) {
    this._dnsRequestDomain = value;
  }
  public resetDnsRequestDomain() {
    this._dnsRequestDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestDomainInput() {
    return this._dnsRequestDomain;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: string; 
  public get httpGet() {
    return this.getStringAttribute('http_get');
  }
  public set httpGet(value: string) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet;
  }

  // http_match - computed: false, optional: true, required: false
  private _httpMatch?: string; 
  public get httpMatch() {
    return this.getStringAttribute('http_match');
  }
  public set httpMatch(value: string) {
    this._httpMatch = value;
  }
  public resetHttpMatch() {
    this._httpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch;
  }

  // http_max_redirects - computed: false, optional: true, required: false
  private _httpMaxRedirects?: number; 
  public get httpMaxRedirects() {
    return this.getNumberAttribute('http_max_redirects');
  }
  public set httpMaxRedirects(value: number) {
    this._httpMaxRedirects = value;
  }
  public resetHttpMaxRedirects() {
    this._httpMaxRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxRedirectsInput() {
    return this._httpMaxRedirects;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // src_ip - computed: true, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_match_ip: cdktf.stringToTerraform(this._dnsMatchIp),
      dns_protocol: cdktf.stringToTerraform(this._dnsProtocol),
      dns_request_domain: cdktf.stringToTerraform(this._dnsRequestDomain),
      http_get: cdktf.stringToTerraform(this._httpGet),
      http_match: cdktf.stringToTerraform(this._httpMatch),
      http_max_redirects: cdktf.numberToTerraform(this._httpMaxRedirects),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      retry: cdktf.numberToTerraform(this._retry),
      src_ip: cdktf.stringToTerraform(this._srcIp),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_match_ip: {
        value: cdktf.stringToHclTerraform(this._dnsMatchIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_protocol: {
        value: cdktf.stringToHclTerraform(this._dnsProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_request_domain: {
        value: cdktf.stringToHclTerraform(this._dnsRequestDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_get: {
        value: cdktf.stringToHclTerraform(this._httpGet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_match: {
        value: cdktf.stringToHclTerraform(this._httpMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_max_redirects: {
        value: cdktf.numberToHclTerraform(this._httpMaxRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ip: {
        value: cdktf.stringToHclTerraform(this._srcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
