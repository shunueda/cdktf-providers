// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayBgpConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines if ECMP (Equal-cost multi-path routing) is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#ecmp_enabled NsxtEdgegatewayBgpConfiguration#ecmp_enabled}
  */
  readonly ecmpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Edge gateway ID for BGP Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#edge_gateway_id NsxtEdgegatewayBgpConfiguration#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Defines if BGP service is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#enabled NsxtEdgegatewayBgpConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Graceful restart configuration on Edge Gateway. One of 'DISABLE', 'HELPER_ONLY', 'GRACEFUL_AND_HELPER'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#graceful_restart_mode NsxtEdgegatewayBgpConfiguration#graceful_restart_mode}
  */
  readonly gracefulRestartMode?: string;
  /**
  * Maximum time taken (in seconds) for a BGP session to be established after a restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#graceful_restart_timer NsxtEdgegatewayBgpConfiguration#graceful_restart_timer}
  */
  readonly gracefulRestartTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#id NsxtEdgegatewayBgpConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Autonomous system number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#local_as_number NsxtEdgegatewayBgpConfiguration#local_as_number}
  */
  readonly localAsNumber?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#org NsxtEdgegatewayBgpConfiguration#org}
  */
  readonly org?: string;
  /**
  * Maximum time (in seconds) before stale routes are removed when BGP restarts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#stale_route_timer NsxtEdgegatewayBgpConfiguration#stale_route_timer}
  */
  readonly staleRouteTimer?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration vcd_nsxt_edgegateway_bgp_configuration}
*/
export class NsxtEdgegatewayBgpConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_bgp_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegatewayBgpConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegatewayBgpConfiguration to import
  * @param importFromId The id of the existing NsxtEdgegatewayBgpConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegatewayBgpConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_bgp_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_configuration vcd_nsxt_edgegateway_bgp_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayBgpConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayBgpConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_bgp_configuration',
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
    this._ecmpEnabled = config.ecmpEnabled;
    this._edgeGatewayId = config.edgeGatewayId;
    this._enabled = config.enabled;
    this._gracefulRestartMode = config.gracefulRestartMode;
    this._gracefulRestartTimer = config.gracefulRestartTimer;
    this._id = config.id;
    this._localAsNumber = config.localAsNumber;
    this._org = config.org;
    this._staleRouteTimer = config.staleRouteTimer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ecmp_enabled - computed: false, optional: true, required: false
  private _ecmpEnabled?: boolean | cdktf.IResolvable; 
  public get ecmpEnabled() {
    return this.getBooleanAttribute('ecmp_enabled');
  }
  public set ecmpEnabled(value: boolean | cdktf.IResolvable) {
    this._ecmpEnabled = value;
  }
  public resetEcmpEnabled() {
    this._ecmpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpEnabledInput() {
    return this._ecmpEnabled;
  }

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // graceful_restart_mode - computed: true, optional: true, required: false
  private _gracefulRestartMode?: string; 
  public get gracefulRestartMode() {
    return this.getStringAttribute('graceful_restart_mode');
  }
  public set gracefulRestartMode(value: string) {
    this._gracefulRestartMode = value;
  }
  public resetGracefulRestartMode() {
    this._gracefulRestartMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartModeInput() {
    return this._gracefulRestartMode;
  }

  // graceful_restart_timer - computed: true, optional: true, required: false
  private _gracefulRestartTimer?: number; 
  public get gracefulRestartTimer() {
    return this.getNumberAttribute('graceful_restart_timer');
  }
  public set gracefulRestartTimer(value: number) {
    this._gracefulRestartTimer = value;
  }
  public resetGracefulRestartTimer() {
    this._gracefulRestartTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartTimerInput() {
    return this._gracefulRestartTimer;
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

  // local_as_number - computed: true, optional: true, required: false
  private _localAsNumber?: string; 
  public get localAsNumber() {
    return this.getStringAttribute('local_as_number');
  }
  public set localAsNumber(value: string) {
    this._localAsNumber = value;
  }
  public resetLocalAsNumber() {
    this._localAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNumberInput() {
    return this._localAsNumber;
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

  // stale_route_timer - computed: true, optional: true, required: false
  private _staleRouteTimer?: number; 
  public get staleRouteTimer() {
    return this.getNumberAttribute('stale_route_timer');
  }
  public set staleRouteTimer(value: number) {
    this._staleRouteTimer = value;
  }
  public resetStaleRouteTimer() {
    this._staleRouteTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleRouteTimerInput() {
    return this._staleRouteTimer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ecmp_enabled: cdktf.booleanToTerraform(this._ecmpEnabled),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      graceful_restart_mode: cdktf.stringToTerraform(this._gracefulRestartMode),
      graceful_restart_timer: cdktf.numberToTerraform(this._gracefulRestartTimer),
      id: cdktf.stringToTerraform(this._id),
      local_as_number: cdktf.stringToTerraform(this._localAsNumber),
      org: cdktf.stringToTerraform(this._org),
      stale_route_timer: cdktf.numberToTerraform(this._staleRouteTimer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ecmp_enabled: {
        value: cdktf.booleanToHclTerraform(this._ecmpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graceful_restart_mode: {
        value: cdktf.stringToHclTerraform(this._gracefulRestartMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_timer: {
        value: cdktf.numberToHclTerraform(this._gracefulRestartTimer),
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
      local_as_number: {
        value: cdktf.stringToHclTerraform(this._localAsNumber),
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
      stale_route_timer: {
        value: cdktf.numberToHclTerraform(this._staleRouteTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
