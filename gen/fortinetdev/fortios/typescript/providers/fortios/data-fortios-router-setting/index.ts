// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosRouterSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_setting#id DataFortiosRouterSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_setting#vdomparam DataFortiosRouterSetting#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_setting fortios_router_setting}
*/
export class DataFortiosRouterSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosRouterSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosRouterSetting to import
  * @param importFromId The id of the existing DataFortiosRouterSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosRouterSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_setting fortios_router_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosRouterSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosRouterSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_setting',
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
    this._id = config.id;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_debug_flags - computed: true, optional: false, required: false
  public get bgpDebugFlags() {
    return this.getStringAttribute('bgp_debug_flags');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // igmp_debug_flags - computed: true, optional: false, required: false
  public get igmpDebugFlags() {
    return this.getStringAttribute('igmp_debug_flags');
  }

  // imi_debug_flags - computed: true, optional: false, required: false
  public get imiDebugFlags() {
    return this.getStringAttribute('imi_debug_flags');
  }

  // isis_debug_flags - computed: true, optional: false, required: false
  public get isisDebugFlags() {
    return this.getStringAttribute('isis_debug_flags');
  }

  // kernel_route_distance - computed: true, optional: false, required: false
  public get kernelRouteDistance() {
    return this.getNumberAttribute('kernel_route_distance');
  }

  // ospf6_debug_events_flags - computed: true, optional: false, required: false
  public get ospf6DebugEventsFlags() {
    return this.getStringAttribute('ospf6_debug_events_flags');
  }

  // ospf6_debug_ifsm_flags - computed: true, optional: false, required: false
  public get ospf6DebugIfsmFlags() {
    return this.getStringAttribute('ospf6_debug_ifsm_flags');
  }

  // ospf6_debug_lsa_flags - computed: true, optional: false, required: false
  public get ospf6DebugLsaFlags() {
    return this.getStringAttribute('ospf6_debug_lsa_flags');
  }

  // ospf6_debug_nfsm_flags - computed: true, optional: false, required: false
  public get ospf6DebugNfsmFlags() {
    return this.getStringAttribute('ospf6_debug_nfsm_flags');
  }

  // ospf6_debug_nsm_flags - computed: true, optional: false, required: false
  public get ospf6DebugNsmFlags() {
    return this.getStringAttribute('ospf6_debug_nsm_flags');
  }

  // ospf6_debug_packet_flags - computed: true, optional: false, required: false
  public get ospf6DebugPacketFlags() {
    return this.getStringAttribute('ospf6_debug_packet_flags');
  }

  // ospf6_debug_route_flags - computed: true, optional: false, required: false
  public get ospf6DebugRouteFlags() {
    return this.getStringAttribute('ospf6_debug_route_flags');
  }

  // ospf_debug_events_flags - computed: true, optional: false, required: false
  public get ospfDebugEventsFlags() {
    return this.getStringAttribute('ospf_debug_events_flags');
  }

  // ospf_debug_ifsm_flags - computed: true, optional: false, required: false
  public get ospfDebugIfsmFlags() {
    return this.getStringAttribute('ospf_debug_ifsm_flags');
  }

  // ospf_debug_lsa_flags - computed: true, optional: false, required: false
  public get ospfDebugLsaFlags() {
    return this.getStringAttribute('ospf_debug_lsa_flags');
  }

  // ospf_debug_nfsm_flags - computed: true, optional: false, required: false
  public get ospfDebugNfsmFlags() {
    return this.getStringAttribute('ospf_debug_nfsm_flags');
  }

  // ospf_debug_nsm_flags - computed: true, optional: false, required: false
  public get ospfDebugNsmFlags() {
    return this.getStringAttribute('ospf_debug_nsm_flags');
  }

  // ospf_debug_packet_flags - computed: true, optional: false, required: false
  public get ospfDebugPacketFlags() {
    return this.getStringAttribute('ospf_debug_packet_flags');
  }

  // ospf_debug_route_flags - computed: true, optional: false, required: false
  public get ospfDebugRouteFlags() {
    return this.getStringAttribute('ospf_debug_route_flags');
  }

  // pimdm_debug_flags - computed: true, optional: false, required: false
  public get pimdmDebugFlags() {
    return this.getStringAttribute('pimdm_debug_flags');
  }

  // pimsm_debug_joinprune_flags - computed: true, optional: false, required: false
  public get pimsmDebugJoinpruneFlags() {
    return this.getStringAttribute('pimsm_debug_joinprune_flags');
  }

  // pimsm_debug_simple_flags - computed: true, optional: false, required: false
  public get pimsmDebugSimpleFlags() {
    return this.getStringAttribute('pimsm_debug_simple_flags');
  }

  // pimsm_debug_timer_flags - computed: true, optional: false, required: false
  public get pimsmDebugTimerFlags() {
    return this.getStringAttribute('pimsm_debug_timer_flags');
  }

  // rip_debug_flags - computed: true, optional: false, required: false
  public get ripDebugFlags() {
    return this.getStringAttribute('rip_debug_flags');
  }

  // ripng_debug_flags - computed: true, optional: false, required: false
  public get ripngDebugFlags() {
    return this.getStringAttribute('ripng_debug_flags');
  }

  // show_filter - computed: true, optional: false, required: false
  public get showFilter() {
    return this.getStringAttribute('show_filter');
  }

  // vdomparam - computed: false, optional: true, required: false
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
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
