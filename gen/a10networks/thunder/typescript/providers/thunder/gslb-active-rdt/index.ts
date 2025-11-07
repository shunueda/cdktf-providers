// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbActiveRdtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify Query Domain (Specify Domain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#domain GslbActiveRdt#domain}
  */
  readonly domain?: string;
  /**
  * Using ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#icmp GslbActiveRdt#icmp}
  */
  readonly icmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#id GslbActiveRdt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify Query Interval, unit: second, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#interval GslbActiveRdt#interval}
  */
  readonly interval?: number;
  /**
  * Specify local port to send probe packet, default is 0 (no port)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#port GslbActiveRdt#port}
  */
  readonly port?: number;
  /**
  * Specify Retry Count, default is 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#retry GslbActiveRdt#retry}
  */
  readonly retry?: number;
  /**
  * Specify Sleep Time when query fail, unit: second, default is 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#sleep GslbActiveRdt#sleep}
  */
  readonly sleep?: number;
  /**
  * Specify Query Timeout, unit: msec, default is 3000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#timeout GslbActiveRdt#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify Tracking Time, unit: second, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#track GslbActiveRdt#track}
  */
  readonly track?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#uuid GslbActiveRdt#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt thunder_gslb_active_rdt}
*/
export class GslbActiveRdt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_active_rdt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbActiveRdt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbActiveRdt to import
  * @param importFromId The id of the existing GslbActiveRdt that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbActiveRdt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_active_rdt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_active_rdt thunder_gslb_active_rdt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbActiveRdtConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbActiveRdtConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_active_rdt',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._icmp = config.icmp;
    this._id = config.id;
    this._interval = config.interval;
    this._port = config.port;
    this._retry = config.retry;
    this._sleep = config.sleep;
    this._timeout = config.timeout;
    this._track = config.track;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
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

  // retry - computed: false, optional: true, required: false
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

  // sleep - computed: false, optional: true, required: false
  private _sleep?: number; 
  public get sleep() {
    return this.getNumberAttribute('sleep');
  }
  public set sleep(value: number) {
    this._sleep = value;
  }
  public resetSleep() {
    this._sleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep;
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

  // track - computed: false, optional: true, required: false
  private _track?: number; 
  public get track() {
    return this.getNumberAttribute('track');
  }
  public set track(value: number) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      icmp: cdktf.numberToTerraform(this._icmp),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      port: cdktf.numberToTerraform(this._port),
      retry: cdktf.numberToTerraform(this._retry),
      sleep: cdktf.numberToTerraform(this._sleep),
      timeout: cdktf.numberToTerraform(this._timeout),
      track: cdktf.numberToTerraform(this._track),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp: {
        value: cdktf.numberToHclTerraform(this._icmp),
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
      sleep: {
        value: cdktf.numberToHclTerraform(this._sleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track: {
        value: cdktf.numberToHclTerraform(this._track),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
