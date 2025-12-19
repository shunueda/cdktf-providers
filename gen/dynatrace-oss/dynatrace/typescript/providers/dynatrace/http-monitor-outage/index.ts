// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpMonitorOutageConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Field has overlap with `dynatrace_http_monitor`) Alert if all locations are unable to access my web application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage#global_consecutive_outage_count_threshold HttpMonitorOutage#global_consecutive_outage_count_threshold}
  */
  readonly globalConsecutiveOutageCountThreshold?: number;
  /**
  * (Field has overlap with `dynatrace_http_monitor`) Generate a problem and send an alert when the monitor is unavailable at all configured locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage#global_outages HttpMonitorOutage#global_outages}
  */
  readonly globalOutages: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage#id HttpMonitorOutage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Field has overlap with `dynatrace_http_monitor`) are unable to access my web application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage#local_consecutive_outage_count_threshold HttpMonitorOutage#local_consecutive_outage_count_threshold}
  */
  readonly localConsecutiveOutageCountThreshold?: number;
  /**
  * (Field has overlap with `dynatrace_http_monitor`) Alert if at least
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage#local_location_outage_count_threshold HttpMonitorOutage#local_location_outage_count_threshold}
  */
  readonly localLocationOutageCountThreshold?: number;
  /**
  * (Field has overlap with `dynatrace_http_monitor`) Generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage#local_outages HttpMonitorOutage#local_outages}
  */
  readonly localOutages: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (HTTP_CHECK). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage#scope HttpMonitorOutage#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage dynatrace_http_monitor_outage}
*/
export class HttpMonitorOutage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_http_monitor_outage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpMonitorOutage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpMonitorOutage to import
  * @param importFromId The id of the existing HttpMonitorOutage that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpMonitorOutage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_http_monitor_outage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/http_monitor_outage dynatrace_http_monitor_outage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpMonitorOutageConfig
  */
  public constructor(scope: Construct, id: string, config: HttpMonitorOutageConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_http_monitor_outage',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._globalConsecutiveOutageCountThreshold = config.globalConsecutiveOutageCountThreshold;
    this._globalOutages = config.globalOutages;
    this._id = config.id;
    this._localConsecutiveOutageCountThreshold = config.localConsecutiveOutageCountThreshold;
    this._localLocationOutageCountThreshold = config.localLocationOutageCountThreshold;
    this._localOutages = config.localOutages;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_consecutive_outage_count_threshold - computed: false, optional: true, required: false
  private _globalConsecutiveOutageCountThreshold?: number; 
  public get globalConsecutiveOutageCountThreshold() {
    return this.getNumberAttribute('global_consecutive_outage_count_threshold');
  }
  public set globalConsecutiveOutageCountThreshold(value: number) {
    this._globalConsecutiveOutageCountThreshold = value;
  }
  public resetGlobalConsecutiveOutageCountThreshold() {
    this._globalConsecutiveOutageCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConsecutiveOutageCountThresholdInput() {
    return this._globalConsecutiveOutageCountThreshold;
  }

  // global_outages - computed: false, optional: false, required: true
  private _globalOutages?: boolean | cdktf.IResolvable; 
  public get globalOutages() {
    return this.getBooleanAttribute('global_outages');
  }
  public set globalOutages(value: boolean | cdktf.IResolvable) {
    this._globalOutages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutagesInput() {
    return this._globalOutages;
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

  // local_consecutive_outage_count_threshold - computed: false, optional: true, required: false
  private _localConsecutiveOutageCountThreshold?: number; 
  public get localConsecutiveOutageCountThreshold() {
    return this.getNumberAttribute('local_consecutive_outage_count_threshold');
  }
  public set localConsecutiveOutageCountThreshold(value: number) {
    this._localConsecutiveOutageCountThreshold = value;
  }
  public resetLocalConsecutiveOutageCountThreshold() {
    this._localConsecutiveOutageCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localConsecutiveOutageCountThresholdInput() {
    return this._localConsecutiveOutageCountThreshold;
  }

  // local_location_outage_count_threshold - computed: false, optional: true, required: false
  private _localLocationOutageCountThreshold?: number; 
  public get localLocationOutageCountThreshold() {
    return this.getNumberAttribute('local_location_outage_count_threshold');
  }
  public set localLocationOutageCountThreshold(value: number) {
    this._localLocationOutageCountThreshold = value;
  }
  public resetLocalLocationOutageCountThreshold() {
    this._localLocationOutageCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLocationOutageCountThresholdInput() {
    return this._localLocationOutageCountThreshold;
  }

  // local_outages - computed: false, optional: false, required: true
  private _localOutages?: boolean | cdktf.IResolvable; 
  public get localOutages() {
    return this.getBooleanAttribute('local_outages');
  }
  public set localOutages(value: boolean | cdktf.IResolvable) {
    this._localOutages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localOutagesInput() {
    return this._localOutages;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_consecutive_outage_count_threshold: cdktf.numberToTerraform(this._globalConsecutiveOutageCountThreshold),
      global_outages: cdktf.booleanToTerraform(this._globalOutages),
      id: cdktf.stringToTerraform(this._id),
      local_consecutive_outage_count_threshold: cdktf.numberToTerraform(this._localConsecutiveOutageCountThreshold),
      local_location_outage_count_threshold: cdktf.numberToTerraform(this._localLocationOutageCountThreshold),
      local_outages: cdktf.booleanToTerraform(this._localOutages),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      global_consecutive_outage_count_threshold: {
        value: cdktf.numberToHclTerraform(this._globalConsecutiveOutageCountThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      global_outages: {
        value: cdktf.booleanToHclTerraform(this._globalOutages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_consecutive_outage_count_threshold: {
        value: cdktf.numberToHclTerraform(this._localConsecutiveOutageCountThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_location_outage_count_threshold: {
        value: cdktf.numberToHclTerraform(this._localLocationOutageCountThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_outages: {
        value: cdktf.booleanToHclTerraform(this._localOutages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
