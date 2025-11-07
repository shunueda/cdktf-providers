// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchmldsnoopingGlobalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals#aging_time SwitchmldsnoopingGlobals#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals#id SwitchmldsnoopingGlobals#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals#leave_response_timeout SwitchmldsnoopingGlobals#leave_response_timeout}
  */
  readonly leaveResponseTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals#proxy_report_interval SwitchmldsnoopingGlobals#proxy_report_interval}
  */
  readonly proxyReportInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals#query_interval SwitchmldsnoopingGlobals#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals#query_max_response_timeout SwitchmldsnoopingGlobals#query_max_response_timeout}
  */
  readonly queryMaxResponseTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals fortiswitch_switchmldsnooping_globals}
*/
export class SwitchmldsnoopingGlobals extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchmldsnooping_globals";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchmldsnoopingGlobals resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchmldsnoopingGlobals to import
  * @param importFromId The id of the existing SwitchmldsnoopingGlobals that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchmldsnoopingGlobals to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchmldsnooping_globals", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmldsnooping_globals fortiswitch_switchmldsnooping_globals} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchmldsnoopingGlobalsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchmldsnoopingGlobalsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchmldsnooping_globals',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agingTime = config.agingTime;
    this._id = config.id;
    this._leaveResponseTimeout = config.leaveResponseTimeout;
    this._proxyReportInterval = config.proxyReportInterval;
    this._queryInterval = config.queryInterval;
    this._queryMaxResponseTimeout = config.queryMaxResponseTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aging_time - computed: true, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
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

  // leave_response_timeout - computed: true, optional: true, required: false
  private _leaveResponseTimeout?: number; 
  public get leaveResponseTimeout() {
    return this.getNumberAttribute('leave_response_timeout');
  }
  public set leaveResponseTimeout(value: number) {
    this._leaveResponseTimeout = value;
  }
  public resetLeaveResponseTimeout() {
    this._leaveResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaveResponseTimeoutInput() {
    return this._leaveResponseTimeout;
  }

  // proxy_report_interval - computed: true, optional: true, required: false
  private _proxyReportInterval?: number; 
  public get proxyReportInterval() {
    return this.getNumberAttribute('proxy_report_interval');
  }
  public set proxyReportInterval(value: number) {
    this._proxyReportInterval = value;
  }
  public resetProxyReportInterval() {
    this._proxyReportInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyReportIntervalInput() {
    return this._proxyReportInterval;
  }

  // query_interval - computed: true, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // query_max_response_timeout - computed: true, optional: true, required: false
  private _queryMaxResponseTimeout?: number; 
  public get queryMaxResponseTimeout() {
    return this.getNumberAttribute('query_max_response_timeout');
  }
  public set queryMaxResponseTimeout(value: number) {
    this._queryMaxResponseTimeout = value;
  }
  public resetQueryMaxResponseTimeout() {
    this._queryMaxResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryMaxResponseTimeoutInput() {
    return this._queryMaxResponseTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aging_time: cdktf.numberToTerraform(this._agingTime),
      id: cdktf.stringToTerraform(this._id),
      leave_response_timeout: cdktf.numberToTerraform(this._leaveResponseTimeout),
      proxy_report_interval: cdktf.numberToTerraform(this._proxyReportInterval),
      query_interval: cdktf.numberToTerraform(this._queryInterval),
      query_max_response_timeout: cdktf.numberToTerraform(this._queryMaxResponseTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aging_time: {
        value: cdktf.numberToHclTerraform(this._agingTime),
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
      leave_response_timeout: {
        value: cdktf.numberToHclTerraform(this._leaveResponseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_report_interval: {
        value: cdktf.numberToHclTerraform(this._proxyReportInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_interval: {
        value: cdktf.numberToHclTerraform(this._queryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_max_response_timeout: {
        value: cdktf.numberToHclTerraform(this._queryMaxResponseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
