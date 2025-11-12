// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#bgp_debug_flags RouterSetting#bgp_debug_flags}
  */
  readonly bgpDebugFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#hostname RouterSetting#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#id RouterSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#igmp_debug_flags RouterSetting#igmp_debug_flags}
  */
  readonly igmpDebugFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#imi_debug_flags RouterSetting#imi_debug_flags}
  */
  readonly imiDebugFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#isis_debug_flags RouterSetting#isis_debug_flags}
  */
  readonly isisDebugFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#kernel_route_distance RouterSetting#kernel_route_distance}
  */
  readonly kernelRouteDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf6_debug_events_flags RouterSetting#ospf6_debug_events_flags}
  */
  readonly ospf6DebugEventsFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf6_debug_ifsm_flags RouterSetting#ospf6_debug_ifsm_flags}
  */
  readonly ospf6DebugIfsmFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf6_debug_lsa_flags RouterSetting#ospf6_debug_lsa_flags}
  */
  readonly ospf6DebugLsaFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf6_debug_nfsm_flags RouterSetting#ospf6_debug_nfsm_flags}
  */
  readonly ospf6DebugNfsmFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf6_debug_nsm_flags RouterSetting#ospf6_debug_nsm_flags}
  */
  readonly ospf6DebugNsmFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf6_debug_packet_flags RouterSetting#ospf6_debug_packet_flags}
  */
  readonly ospf6DebugPacketFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf6_debug_route_flags RouterSetting#ospf6_debug_route_flags}
  */
  readonly ospf6DebugRouteFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf_debug_events_flags RouterSetting#ospf_debug_events_flags}
  */
  readonly ospfDebugEventsFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf_debug_ifsm_flags RouterSetting#ospf_debug_ifsm_flags}
  */
  readonly ospfDebugIfsmFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf_debug_lsa_flags RouterSetting#ospf_debug_lsa_flags}
  */
  readonly ospfDebugLsaFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf_debug_nfsm_flags RouterSetting#ospf_debug_nfsm_flags}
  */
  readonly ospfDebugNfsmFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf_debug_nsm_flags RouterSetting#ospf_debug_nsm_flags}
  */
  readonly ospfDebugNsmFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf_debug_packet_flags RouterSetting#ospf_debug_packet_flags}
  */
  readonly ospfDebugPacketFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ospf_debug_route_flags RouterSetting#ospf_debug_route_flags}
  */
  readonly ospfDebugRouteFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#pimdm_debug_flags RouterSetting#pimdm_debug_flags}
  */
  readonly pimdmDebugFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#pimsm_debug_joinprune_flags RouterSetting#pimsm_debug_joinprune_flags}
  */
  readonly pimsmDebugJoinpruneFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#pimsm_debug_simple_flags RouterSetting#pimsm_debug_simple_flags}
  */
  readonly pimsmDebugSimpleFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#pimsm_debug_timer_flags RouterSetting#pimsm_debug_timer_flags}
  */
  readonly pimsmDebugTimerFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#rip_debug_flags RouterSetting#rip_debug_flags}
  */
  readonly ripDebugFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#ripng_debug_flags RouterSetting#ripng_debug_flags}
  */
  readonly ripngDebugFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#show_filter RouterSetting#show_filter}
  */
  readonly showFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#vdomparam RouterSetting#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting fortios_router_setting}
*/
export class RouterSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterSetting to import
  * @param importFromId The id of the existing RouterSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_setting fortios_router_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterSettingConfig = {}) {
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
    this._bgpDebugFlags = config.bgpDebugFlags;
    this._hostname = config.hostname;
    this._id = config.id;
    this._igmpDebugFlags = config.igmpDebugFlags;
    this._imiDebugFlags = config.imiDebugFlags;
    this._isisDebugFlags = config.isisDebugFlags;
    this._kernelRouteDistance = config.kernelRouteDistance;
    this._ospf6DebugEventsFlags = config.ospf6DebugEventsFlags;
    this._ospf6DebugIfsmFlags = config.ospf6DebugIfsmFlags;
    this._ospf6DebugLsaFlags = config.ospf6DebugLsaFlags;
    this._ospf6DebugNfsmFlags = config.ospf6DebugNfsmFlags;
    this._ospf6DebugNsmFlags = config.ospf6DebugNsmFlags;
    this._ospf6DebugPacketFlags = config.ospf6DebugPacketFlags;
    this._ospf6DebugRouteFlags = config.ospf6DebugRouteFlags;
    this._ospfDebugEventsFlags = config.ospfDebugEventsFlags;
    this._ospfDebugIfsmFlags = config.ospfDebugIfsmFlags;
    this._ospfDebugLsaFlags = config.ospfDebugLsaFlags;
    this._ospfDebugNfsmFlags = config.ospfDebugNfsmFlags;
    this._ospfDebugNsmFlags = config.ospfDebugNsmFlags;
    this._ospfDebugPacketFlags = config.ospfDebugPacketFlags;
    this._ospfDebugRouteFlags = config.ospfDebugRouteFlags;
    this._pimdmDebugFlags = config.pimdmDebugFlags;
    this._pimsmDebugJoinpruneFlags = config.pimsmDebugJoinpruneFlags;
    this._pimsmDebugSimpleFlags = config.pimsmDebugSimpleFlags;
    this._pimsmDebugTimerFlags = config.pimsmDebugTimerFlags;
    this._ripDebugFlags = config.ripDebugFlags;
    this._ripngDebugFlags = config.ripngDebugFlags;
    this._showFilter = config.showFilter;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_debug_flags - computed: false, optional: true, required: false
  private _bgpDebugFlags?: string; 
  public get bgpDebugFlags() {
    return this.getStringAttribute('bgp_debug_flags');
  }
  public set bgpDebugFlags(value: string) {
    this._bgpDebugFlags = value;
  }
  public resetBgpDebugFlags() {
    this._bgpDebugFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpDebugFlagsInput() {
    return this._bgpDebugFlags;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // igmp_debug_flags - computed: false, optional: true, required: false
  private _igmpDebugFlags?: string; 
  public get igmpDebugFlags() {
    return this.getStringAttribute('igmp_debug_flags');
  }
  public set igmpDebugFlags(value: string) {
    this._igmpDebugFlags = value;
  }
  public resetIgmpDebugFlags() {
    this._igmpDebugFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpDebugFlagsInput() {
    return this._igmpDebugFlags;
  }

  // imi_debug_flags - computed: false, optional: true, required: false
  private _imiDebugFlags?: string; 
  public get imiDebugFlags() {
    return this.getStringAttribute('imi_debug_flags');
  }
  public set imiDebugFlags(value: string) {
    this._imiDebugFlags = value;
  }
  public resetImiDebugFlags() {
    this._imiDebugFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imiDebugFlagsInput() {
    return this._imiDebugFlags;
  }

  // isis_debug_flags - computed: false, optional: true, required: false
  private _isisDebugFlags?: string; 
  public get isisDebugFlags() {
    return this.getStringAttribute('isis_debug_flags');
  }
  public set isisDebugFlags(value: string) {
    this._isisDebugFlags = value;
  }
  public resetIsisDebugFlags() {
    this._isisDebugFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisDebugFlagsInput() {
    return this._isisDebugFlags;
  }

  // kernel_route_distance - computed: true, optional: true, required: false
  private _kernelRouteDistance?: number; 
  public get kernelRouteDistance() {
    return this.getNumberAttribute('kernel_route_distance');
  }
  public set kernelRouteDistance(value: number) {
    this._kernelRouteDistance = value;
  }
  public resetKernelRouteDistance() {
    this._kernelRouteDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelRouteDistanceInput() {
    return this._kernelRouteDistance;
  }

  // ospf6_debug_events_flags - computed: false, optional: true, required: false
  private _ospf6DebugEventsFlags?: string; 
  public get ospf6DebugEventsFlags() {
    return this.getStringAttribute('ospf6_debug_events_flags');
  }
  public set ospf6DebugEventsFlags(value: string) {
    this._ospf6DebugEventsFlags = value;
  }
  public resetOspf6DebugEventsFlags() {
    this._ospf6DebugEventsFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6DebugEventsFlagsInput() {
    return this._ospf6DebugEventsFlags;
  }

  // ospf6_debug_ifsm_flags - computed: false, optional: true, required: false
  private _ospf6DebugIfsmFlags?: string; 
  public get ospf6DebugIfsmFlags() {
    return this.getStringAttribute('ospf6_debug_ifsm_flags');
  }
  public set ospf6DebugIfsmFlags(value: string) {
    this._ospf6DebugIfsmFlags = value;
  }
  public resetOspf6DebugIfsmFlags() {
    this._ospf6DebugIfsmFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6DebugIfsmFlagsInput() {
    return this._ospf6DebugIfsmFlags;
  }

  // ospf6_debug_lsa_flags - computed: false, optional: true, required: false
  private _ospf6DebugLsaFlags?: string; 
  public get ospf6DebugLsaFlags() {
    return this.getStringAttribute('ospf6_debug_lsa_flags');
  }
  public set ospf6DebugLsaFlags(value: string) {
    this._ospf6DebugLsaFlags = value;
  }
  public resetOspf6DebugLsaFlags() {
    this._ospf6DebugLsaFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6DebugLsaFlagsInput() {
    return this._ospf6DebugLsaFlags;
  }

  // ospf6_debug_nfsm_flags - computed: false, optional: true, required: false
  private _ospf6DebugNfsmFlags?: string; 
  public get ospf6DebugNfsmFlags() {
    return this.getStringAttribute('ospf6_debug_nfsm_flags');
  }
  public set ospf6DebugNfsmFlags(value: string) {
    this._ospf6DebugNfsmFlags = value;
  }
  public resetOspf6DebugNfsmFlags() {
    this._ospf6DebugNfsmFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6DebugNfsmFlagsInput() {
    return this._ospf6DebugNfsmFlags;
  }

  // ospf6_debug_nsm_flags - computed: false, optional: true, required: false
  private _ospf6DebugNsmFlags?: string; 
  public get ospf6DebugNsmFlags() {
    return this.getStringAttribute('ospf6_debug_nsm_flags');
  }
  public set ospf6DebugNsmFlags(value: string) {
    this._ospf6DebugNsmFlags = value;
  }
  public resetOspf6DebugNsmFlags() {
    this._ospf6DebugNsmFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6DebugNsmFlagsInput() {
    return this._ospf6DebugNsmFlags;
  }

  // ospf6_debug_packet_flags - computed: false, optional: true, required: false
  private _ospf6DebugPacketFlags?: string; 
  public get ospf6DebugPacketFlags() {
    return this.getStringAttribute('ospf6_debug_packet_flags');
  }
  public set ospf6DebugPacketFlags(value: string) {
    this._ospf6DebugPacketFlags = value;
  }
  public resetOspf6DebugPacketFlags() {
    this._ospf6DebugPacketFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6DebugPacketFlagsInput() {
    return this._ospf6DebugPacketFlags;
  }

  // ospf6_debug_route_flags - computed: false, optional: true, required: false
  private _ospf6DebugRouteFlags?: string; 
  public get ospf6DebugRouteFlags() {
    return this.getStringAttribute('ospf6_debug_route_flags');
  }
  public set ospf6DebugRouteFlags(value: string) {
    this._ospf6DebugRouteFlags = value;
  }
  public resetOspf6DebugRouteFlags() {
    this._ospf6DebugRouteFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6DebugRouteFlagsInput() {
    return this._ospf6DebugRouteFlags;
  }

  // ospf_debug_events_flags - computed: false, optional: true, required: false
  private _ospfDebugEventsFlags?: string; 
  public get ospfDebugEventsFlags() {
    return this.getStringAttribute('ospf_debug_events_flags');
  }
  public set ospfDebugEventsFlags(value: string) {
    this._ospfDebugEventsFlags = value;
  }
  public resetOspfDebugEventsFlags() {
    this._ospfDebugEventsFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfDebugEventsFlagsInput() {
    return this._ospfDebugEventsFlags;
  }

  // ospf_debug_ifsm_flags - computed: false, optional: true, required: false
  private _ospfDebugIfsmFlags?: string; 
  public get ospfDebugIfsmFlags() {
    return this.getStringAttribute('ospf_debug_ifsm_flags');
  }
  public set ospfDebugIfsmFlags(value: string) {
    this._ospfDebugIfsmFlags = value;
  }
  public resetOspfDebugIfsmFlags() {
    this._ospfDebugIfsmFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfDebugIfsmFlagsInput() {
    return this._ospfDebugIfsmFlags;
  }

  // ospf_debug_lsa_flags - computed: false, optional: true, required: false
  private _ospfDebugLsaFlags?: string; 
  public get ospfDebugLsaFlags() {
    return this.getStringAttribute('ospf_debug_lsa_flags');
  }
  public set ospfDebugLsaFlags(value: string) {
    this._ospfDebugLsaFlags = value;
  }
  public resetOspfDebugLsaFlags() {
    this._ospfDebugLsaFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfDebugLsaFlagsInput() {
    return this._ospfDebugLsaFlags;
  }

  // ospf_debug_nfsm_flags - computed: false, optional: true, required: false
  private _ospfDebugNfsmFlags?: string; 
  public get ospfDebugNfsmFlags() {
    return this.getStringAttribute('ospf_debug_nfsm_flags');
  }
  public set ospfDebugNfsmFlags(value: string) {
    this._ospfDebugNfsmFlags = value;
  }
  public resetOspfDebugNfsmFlags() {
    this._ospfDebugNfsmFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfDebugNfsmFlagsInput() {
    return this._ospfDebugNfsmFlags;
  }

  // ospf_debug_nsm_flags - computed: false, optional: true, required: false
  private _ospfDebugNsmFlags?: string; 
  public get ospfDebugNsmFlags() {
    return this.getStringAttribute('ospf_debug_nsm_flags');
  }
  public set ospfDebugNsmFlags(value: string) {
    this._ospfDebugNsmFlags = value;
  }
  public resetOspfDebugNsmFlags() {
    this._ospfDebugNsmFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfDebugNsmFlagsInput() {
    return this._ospfDebugNsmFlags;
  }

  // ospf_debug_packet_flags - computed: false, optional: true, required: false
  private _ospfDebugPacketFlags?: string; 
  public get ospfDebugPacketFlags() {
    return this.getStringAttribute('ospf_debug_packet_flags');
  }
  public set ospfDebugPacketFlags(value: string) {
    this._ospfDebugPacketFlags = value;
  }
  public resetOspfDebugPacketFlags() {
    this._ospfDebugPacketFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfDebugPacketFlagsInput() {
    return this._ospfDebugPacketFlags;
  }

  // ospf_debug_route_flags - computed: false, optional: true, required: false
  private _ospfDebugRouteFlags?: string; 
  public get ospfDebugRouteFlags() {
    return this.getStringAttribute('ospf_debug_route_flags');
  }
  public set ospfDebugRouteFlags(value: string) {
    this._ospfDebugRouteFlags = value;
  }
  public resetOspfDebugRouteFlags() {
    this._ospfDebugRouteFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfDebugRouteFlagsInput() {
    return this._ospfDebugRouteFlags;
  }

  // pimdm_debug_flags - computed: false, optional: true, required: false
  private _pimdmDebugFlags?: string; 
  public get pimdmDebugFlags() {
    return this.getStringAttribute('pimdm_debug_flags');
  }
  public set pimdmDebugFlags(value: string) {
    this._pimdmDebugFlags = value;
  }
  public resetPimdmDebugFlags() {
    this._pimdmDebugFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimdmDebugFlagsInput() {
    return this._pimdmDebugFlags;
  }

  // pimsm_debug_joinprune_flags - computed: false, optional: true, required: false
  private _pimsmDebugJoinpruneFlags?: string; 
  public get pimsmDebugJoinpruneFlags() {
    return this.getStringAttribute('pimsm_debug_joinprune_flags');
  }
  public set pimsmDebugJoinpruneFlags(value: string) {
    this._pimsmDebugJoinpruneFlags = value;
  }
  public resetPimsmDebugJoinpruneFlags() {
    this._pimsmDebugJoinpruneFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimsmDebugJoinpruneFlagsInput() {
    return this._pimsmDebugJoinpruneFlags;
  }

  // pimsm_debug_simple_flags - computed: false, optional: true, required: false
  private _pimsmDebugSimpleFlags?: string; 
  public get pimsmDebugSimpleFlags() {
    return this.getStringAttribute('pimsm_debug_simple_flags');
  }
  public set pimsmDebugSimpleFlags(value: string) {
    this._pimsmDebugSimpleFlags = value;
  }
  public resetPimsmDebugSimpleFlags() {
    this._pimsmDebugSimpleFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimsmDebugSimpleFlagsInput() {
    return this._pimsmDebugSimpleFlags;
  }

  // pimsm_debug_timer_flags - computed: false, optional: true, required: false
  private _pimsmDebugTimerFlags?: string; 
  public get pimsmDebugTimerFlags() {
    return this.getStringAttribute('pimsm_debug_timer_flags');
  }
  public set pimsmDebugTimerFlags(value: string) {
    this._pimsmDebugTimerFlags = value;
  }
  public resetPimsmDebugTimerFlags() {
    this._pimsmDebugTimerFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimsmDebugTimerFlagsInput() {
    return this._pimsmDebugTimerFlags;
  }

  // rip_debug_flags - computed: false, optional: true, required: false
  private _ripDebugFlags?: string; 
  public get ripDebugFlags() {
    return this.getStringAttribute('rip_debug_flags');
  }
  public set ripDebugFlags(value: string) {
    this._ripDebugFlags = value;
  }
  public resetRipDebugFlags() {
    this._ripDebugFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripDebugFlagsInput() {
    return this._ripDebugFlags;
  }

  // ripng_debug_flags - computed: false, optional: true, required: false
  private _ripngDebugFlags?: string; 
  public get ripngDebugFlags() {
    return this.getStringAttribute('ripng_debug_flags');
  }
  public set ripngDebugFlags(value: string) {
    this._ripngDebugFlags = value;
  }
  public resetRipngDebugFlags() {
    this._ripngDebugFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngDebugFlagsInput() {
    return this._ripngDebugFlags;
  }

  // show_filter - computed: false, optional: true, required: false
  private _showFilter?: string; 
  public get showFilter() {
    return this.getStringAttribute('show_filter');
  }
  public set showFilter(value: string) {
    this._showFilter = value;
  }
  public resetShowFilter() {
    this._showFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFilterInput() {
    return this._showFilter;
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
      bgp_debug_flags: cdktf.stringToTerraform(this._bgpDebugFlags),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      igmp_debug_flags: cdktf.stringToTerraform(this._igmpDebugFlags),
      imi_debug_flags: cdktf.stringToTerraform(this._imiDebugFlags),
      isis_debug_flags: cdktf.stringToTerraform(this._isisDebugFlags),
      kernel_route_distance: cdktf.numberToTerraform(this._kernelRouteDistance),
      ospf6_debug_events_flags: cdktf.stringToTerraform(this._ospf6DebugEventsFlags),
      ospf6_debug_ifsm_flags: cdktf.stringToTerraform(this._ospf6DebugIfsmFlags),
      ospf6_debug_lsa_flags: cdktf.stringToTerraform(this._ospf6DebugLsaFlags),
      ospf6_debug_nfsm_flags: cdktf.stringToTerraform(this._ospf6DebugNfsmFlags),
      ospf6_debug_nsm_flags: cdktf.stringToTerraform(this._ospf6DebugNsmFlags),
      ospf6_debug_packet_flags: cdktf.stringToTerraform(this._ospf6DebugPacketFlags),
      ospf6_debug_route_flags: cdktf.stringToTerraform(this._ospf6DebugRouteFlags),
      ospf_debug_events_flags: cdktf.stringToTerraform(this._ospfDebugEventsFlags),
      ospf_debug_ifsm_flags: cdktf.stringToTerraform(this._ospfDebugIfsmFlags),
      ospf_debug_lsa_flags: cdktf.stringToTerraform(this._ospfDebugLsaFlags),
      ospf_debug_nfsm_flags: cdktf.stringToTerraform(this._ospfDebugNfsmFlags),
      ospf_debug_nsm_flags: cdktf.stringToTerraform(this._ospfDebugNsmFlags),
      ospf_debug_packet_flags: cdktf.stringToTerraform(this._ospfDebugPacketFlags),
      ospf_debug_route_flags: cdktf.stringToTerraform(this._ospfDebugRouteFlags),
      pimdm_debug_flags: cdktf.stringToTerraform(this._pimdmDebugFlags),
      pimsm_debug_joinprune_flags: cdktf.stringToTerraform(this._pimsmDebugJoinpruneFlags),
      pimsm_debug_simple_flags: cdktf.stringToTerraform(this._pimsmDebugSimpleFlags),
      pimsm_debug_timer_flags: cdktf.stringToTerraform(this._pimsmDebugTimerFlags),
      rip_debug_flags: cdktf.stringToTerraform(this._ripDebugFlags),
      ripng_debug_flags: cdktf.stringToTerraform(this._ripngDebugFlags),
      show_filter: cdktf.stringToTerraform(this._showFilter),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_debug_flags: {
        value: cdktf.stringToHclTerraform(this._bgpDebugFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_debug_flags: {
        value: cdktf.stringToHclTerraform(this._igmpDebugFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imi_debug_flags: {
        value: cdktf.stringToHclTerraform(this._imiDebugFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isis_debug_flags: {
        value: cdktf.stringToHclTerraform(this._isisDebugFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kernel_route_distance: {
        value: cdktf.numberToHclTerraform(this._kernelRouteDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospf6_debug_events_flags: {
        value: cdktf.stringToHclTerraform(this._ospf6DebugEventsFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf6_debug_ifsm_flags: {
        value: cdktf.stringToHclTerraform(this._ospf6DebugIfsmFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf6_debug_lsa_flags: {
        value: cdktf.stringToHclTerraform(this._ospf6DebugLsaFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf6_debug_nfsm_flags: {
        value: cdktf.stringToHclTerraform(this._ospf6DebugNfsmFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf6_debug_nsm_flags: {
        value: cdktf.stringToHclTerraform(this._ospf6DebugNsmFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf6_debug_packet_flags: {
        value: cdktf.stringToHclTerraform(this._ospf6DebugPacketFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf6_debug_route_flags: {
        value: cdktf.stringToHclTerraform(this._ospf6DebugRouteFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_debug_events_flags: {
        value: cdktf.stringToHclTerraform(this._ospfDebugEventsFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_debug_ifsm_flags: {
        value: cdktf.stringToHclTerraform(this._ospfDebugIfsmFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_debug_lsa_flags: {
        value: cdktf.stringToHclTerraform(this._ospfDebugLsaFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_debug_nfsm_flags: {
        value: cdktf.stringToHclTerraform(this._ospfDebugNfsmFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_debug_nsm_flags: {
        value: cdktf.stringToHclTerraform(this._ospfDebugNsmFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_debug_packet_flags: {
        value: cdktf.stringToHclTerraform(this._ospfDebugPacketFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_debug_route_flags: {
        value: cdktf.stringToHclTerraform(this._ospfDebugRouteFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pimdm_debug_flags: {
        value: cdktf.stringToHclTerraform(this._pimdmDebugFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pimsm_debug_joinprune_flags: {
        value: cdktf.stringToHclTerraform(this._pimsmDebugJoinpruneFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pimsm_debug_simple_flags: {
        value: cdktf.stringToHclTerraform(this._pimsmDebugSimpleFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pimsm_debug_timer_flags: {
        value: cdktf.stringToHclTerraform(this._pimsmDebugTimerFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rip_debug_flags: {
        value: cdktf.stringToHclTerraform(this._ripDebugFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ripng_debug_flags: {
        value: cdktf.stringToHclTerraform(this._ripngDebugFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_filter: {
        value: cdktf.stringToHclTerraform(this._showFilter),
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
