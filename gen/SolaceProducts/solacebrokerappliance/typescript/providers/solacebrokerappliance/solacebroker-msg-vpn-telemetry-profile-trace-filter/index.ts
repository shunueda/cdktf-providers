// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnTelemetryProfileTraceFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable the trace filter. When the filter is disabled, the filter's subscriptions will not trigger a message to be traced.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter#enabled SolacebrokerMsgVpnTelemetryProfileTraceFilter#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter#msg_vpn_name SolacebrokerMsgVpnTelemetryProfileTraceFilter#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Telemetry Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter#telemetry_profile_name SolacebrokerMsgVpnTelemetryProfileTraceFilter#telemetry_profile_name}
  */
  readonly telemetryProfileName: string;
  /**
  * A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as "appNameDebug".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter#trace_filter_name SolacebrokerMsgVpnTelemetryProfileTraceFilter#trace_filter_name}
  */
  readonly traceFilterName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter solacebroker_msg_vpn_telemetry_profile_trace_filter}
*/
export class SolacebrokerMsgVpnTelemetryProfileTraceFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_telemetry_profile_trace_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnTelemetryProfileTraceFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnTelemetryProfileTraceFilter to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnTelemetryProfileTraceFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnTelemetryProfileTraceFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_telemetry_profile_trace_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter solacebroker_msg_vpn_telemetry_profile_trace_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnTelemetryProfileTraceFilterConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnTelemetryProfileTraceFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_telemetry_profile_trace_filter',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._msgVpnName = config.msgVpnName;
    this._telemetryProfileName = config.telemetryProfileName;
    this._traceFilterName = config.traceFilterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // telemetry_profile_name - computed: false, optional: false, required: true
  private _telemetryProfileName?: string; 
  public get telemetryProfileName() {
    return this.getStringAttribute('telemetry_profile_name');
  }
  public set telemetryProfileName(value: string) {
    this._telemetryProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryProfileNameInput() {
    return this._telemetryProfileName;
  }

  // trace_filter_name - computed: false, optional: false, required: true
  private _traceFilterName?: string; 
  public get traceFilterName() {
    return this.getStringAttribute('trace_filter_name');
  }
  public set traceFilterName(value: string) {
    this._traceFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traceFilterNameInput() {
    return this._traceFilterName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      telemetry_profile_name: cdktf.stringToTerraform(this._telemetryProfileName),
      trace_filter_name: cdktf.stringToTerraform(this._traceFilterName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      telemetry_profile_name: {
        value: cdktf.stringToHclTerraform(this._telemetryProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_filter_name: {
        value: cdktf.stringToHclTerraform(this._traceFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
