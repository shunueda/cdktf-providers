// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription#msg_vpn_name SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * Messages matching this subscription will follow this filter's configuration.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription#subscription SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription#subscription}
  */
  readonly subscription: string;
  /**
  * The syntax of the trace filter subscription.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The allowed values and their meaning are:
  * 
  * <pre>
  * "smf" - Subscription uses SMF syntax.
  * "mqtt" - Subscription uses MQTT syntax.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription#subscription_syntax SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription#subscription_syntax}
  */
  readonly subscriptionSyntax: string;
  /**
  * The name of the Telemetry Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription#telemetry_profile_name SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription#telemetry_profile_name}
  */
  readonly telemetryProfileName: string;
  /**
  * A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as "appNameDebug".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription#trace_filter_name SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription#trace_filter_name}
  */
  readonly traceFilterName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription}
*/
export class SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnTelemetryProfileTraceFilterSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_telemetry_profile_trace_filter_subscription',
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
    this._msgVpnName = config.msgVpnName;
    this._subscription = config.subscription;
    this._subscriptionSyntax = config.subscriptionSyntax;
    this._telemetryProfileName = config.telemetryProfileName;
    this._traceFilterName = config.traceFilterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // subscription - computed: false, optional: false, required: true
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }

  // subscription_syntax - computed: false, optional: false, required: true
  private _subscriptionSyntax?: string; 
  public get subscriptionSyntax() {
    return this.getStringAttribute('subscription_syntax');
  }
  public set subscriptionSyntax(value: string) {
    this._subscriptionSyntax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionSyntaxInput() {
    return this._subscriptionSyntax;
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
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      subscription: cdktf.stringToTerraform(this._subscription),
      subscription_syntax: cdktf.stringToTerraform(this._subscriptionSyntax),
      telemetry_profile_name: cdktf.stringToTerraform(this._telemetryProfileName),
      trace_filter_name: cdktf.stringToTerraform(this._traceFilterName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription: {
        value: cdktf.stringToHclTerraform(this._subscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_syntax: {
        value: cdktf.stringToHclTerraform(this._subscriptionSyntax),
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
