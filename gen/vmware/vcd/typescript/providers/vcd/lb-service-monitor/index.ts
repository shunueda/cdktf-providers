// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbServiceMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge gateway name in which the LB Service Monitor is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#edge_gateway LbServiceMonitor#edge_gateway}
  */
  readonly edgeGateway: string;
  /**
  * String that the monitor expects to match in the status line of the http or https response (for example, HTTP/1.1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#expected LbServiceMonitor#expected}
  */
  readonly expected?: string;
  /**
  * Advanced monitor parameters as key=value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#extension LbServiceMonitor#extension}
  */
  readonly extension?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#id LbServiceMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval in seconds at which a server is to be monitored (defaults to 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#interval LbServiceMonitor#interval}
  */
  readonly interval?: number;
  /**
  * Number of times the specified monitoring Method must fail sequentially before the server is declared down  (defaults to 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#max_retries LbServiceMonitor#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Method to be used to detect server status. One of OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, or CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#method LbServiceMonitor#method}
  */
  readonly method?: string;
  /**
  * Unique LB Service Monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#name LbServiceMonitor#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#org LbServiceMonitor#org}
  */
  readonly org?: string;
  /**
  * String to be matched in the response content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#receive LbServiceMonitor#receive}
  */
  readonly receive?: string;
  /**
  * Data to be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#send LbServiceMonitor#send}
  */
  readonly send?: string;
  /**
  * Maximum time in seconds within which a response from the server must be received  (defaults to 15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#timeout LbServiceMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Way in which you want to send the health check request to the server. One of http, https, tcp, icmp, or udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#type LbServiceMonitor#type}
  */
  readonly type: string;
  /**
  * URL to be used in the server status request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#url LbServiceMonitor#url}
  */
  readonly url?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#vdc LbServiceMonitor#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor vcd_lb_service_monitor}
*/
export class LbServiceMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_lb_service_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbServiceMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbServiceMonitor to import
  * @param importFromId The id of the existing LbServiceMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbServiceMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_lb_service_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_service_monitor vcd_lb_service_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbServiceMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: LbServiceMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_lb_service_monitor',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGateway = config.edgeGateway;
    this._expected = config.expected;
    this._extension = config.extension;
    this._id = config.id;
    this._interval = config.interval;
    this._maxRetries = config.maxRetries;
    this._method = config.method;
    this._name = config.name;
    this._org = config.org;
    this._receive = config.receive;
    this._send = config.send;
    this._timeout = config.timeout;
    this._type = config.type;
    this._url = config.url;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_gateway - computed: false, optional: false, required: true
  private _edgeGateway?: string; 
  public get edgeGateway() {
    return this.getStringAttribute('edge_gateway');
  }
  public set edgeGateway(value: string) {
    this._edgeGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayInput() {
    return this._edgeGateway;
  }

  // expected - computed: false, optional: true, required: false
  private _expected?: string; 
  public get expected() {
    return this.getStringAttribute('expected');
  }
  public set expected(value: string) {
    this._expected = value;
  }
  public resetExpected() {
    this._expected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: { [key: string]: string }; 
  public get extension() {
    return this.getStringMapAttribute('extension');
  }
  public set extension(value: { [key: string]: string }) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
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

  // interval - computed: false, optional: true, required: false
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

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // timeout - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway: cdktf.stringToTerraform(this._edgeGateway),
      expected: cdktf.stringToTerraform(this._expected),
      extension: cdktf.hashMapper(cdktf.stringToTerraform)(this._extension),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      receive: cdktf.stringToTerraform(this._receive),
      send: cdktf.stringToTerraform(this._send),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway: {
        value: cdktf.stringToHclTerraform(this._edgeGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected: {
        value: cdktf.stringToHclTerraform(this._expected),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extension),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive: {
        value: cdktf.stringToHclTerraform(this._receive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send: {
        value: cdktf.stringToHclTerraform(this._send),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
