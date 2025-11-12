// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_omp_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSystemOmpFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_omp_feature#feature_profile_id DataSdwanSystemOmpFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_omp_feature#id DataSdwanSystemOmpFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_omp_feature sdwan_system_omp_feature}
*/
export class DataSdwanSystemOmpFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_omp_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSystemOmpFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSystemOmpFeature to import
  * @param importFromId The id of the existing DataSdwanSystemOmpFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_omp_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSystemOmpFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_omp_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_omp_feature sdwan_system_omp_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSystemOmpFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSystemOmpFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_omp_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_ipv4_bgp - computed: true, optional: false, required: false
  public get advertiseIpv4Bgp() {
    return this.getBooleanAttribute('advertise_ipv4_bgp');
  }

  // advertise_ipv4_bgp_variable - computed: true, optional: false, required: false
  public get advertiseIpv4BgpVariable() {
    return this.getStringAttribute('advertise_ipv4_bgp_variable');
  }

  // advertise_ipv4_connected - computed: true, optional: false, required: false
  public get advertiseIpv4Connected() {
    return this.getBooleanAttribute('advertise_ipv4_connected');
  }

  // advertise_ipv4_connected_variable - computed: true, optional: false, required: false
  public get advertiseIpv4ConnectedVariable() {
    return this.getStringAttribute('advertise_ipv4_connected_variable');
  }

  // advertise_ipv4_eigrp - computed: true, optional: false, required: false
  public get advertiseIpv4Eigrp() {
    return this.getBooleanAttribute('advertise_ipv4_eigrp');
  }

  // advertise_ipv4_eigrp_variable - computed: true, optional: false, required: false
  public get advertiseIpv4EigrpVariable() {
    return this.getStringAttribute('advertise_ipv4_eigrp_variable');
  }

  // advertise_ipv4_isis - computed: true, optional: false, required: false
  public get advertiseIpv4Isis() {
    return this.getBooleanAttribute('advertise_ipv4_isis');
  }

  // advertise_ipv4_isis_variable - computed: true, optional: false, required: false
  public get advertiseIpv4IsisVariable() {
    return this.getStringAttribute('advertise_ipv4_isis_variable');
  }

  // advertise_ipv4_lisp - computed: true, optional: false, required: false
  public get advertiseIpv4Lisp() {
    return this.getBooleanAttribute('advertise_ipv4_lisp');
  }

  // advertise_ipv4_lisp_variable - computed: true, optional: false, required: false
  public get advertiseIpv4LispVariable() {
    return this.getStringAttribute('advertise_ipv4_lisp_variable');
  }

  // advertise_ipv4_ospf - computed: true, optional: false, required: false
  public get advertiseIpv4Ospf() {
    return this.getBooleanAttribute('advertise_ipv4_ospf');
  }

  // advertise_ipv4_ospf_v3 - computed: true, optional: false, required: false
  public get advertiseIpv4OspfV3() {
    return this.getBooleanAttribute('advertise_ipv4_ospf_v3');
  }

  // advertise_ipv4_ospf_v3_variable - computed: true, optional: false, required: false
  public get advertiseIpv4OspfV3Variable() {
    return this.getStringAttribute('advertise_ipv4_ospf_v3_variable');
  }

  // advertise_ipv4_ospf_variable - computed: true, optional: false, required: false
  public get advertiseIpv4OspfVariable() {
    return this.getStringAttribute('advertise_ipv4_ospf_variable');
  }

  // advertise_ipv4_static - computed: true, optional: false, required: false
  public get advertiseIpv4Static() {
    return this.getBooleanAttribute('advertise_ipv4_static');
  }

  // advertise_ipv4_static_variable - computed: true, optional: false, required: false
  public get advertiseIpv4StaticVariable() {
    return this.getStringAttribute('advertise_ipv4_static_variable');
  }

  // advertise_ipv6_bgp - computed: true, optional: false, required: false
  public get advertiseIpv6Bgp() {
    return this.getBooleanAttribute('advertise_ipv6_bgp');
  }

  // advertise_ipv6_bgp_variable - computed: true, optional: false, required: false
  public get advertiseIpv6BgpVariable() {
    return this.getStringAttribute('advertise_ipv6_bgp_variable');
  }

  // advertise_ipv6_connected - computed: true, optional: false, required: false
  public get advertiseIpv6Connected() {
    return this.getBooleanAttribute('advertise_ipv6_connected');
  }

  // advertise_ipv6_connected_variable - computed: true, optional: false, required: false
  public get advertiseIpv6ConnectedVariable() {
    return this.getStringAttribute('advertise_ipv6_connected_variable');
  }

  // advertise_ipv6_eigrp - computed: true, optional: false, required: false
  public get advertiseIpv6Eigrp() {
    return this.getBooleanAttribute('advertise_ipv6_eigrp');
  }

  // advertise_ipv6_eigrp_variable - computed: true, optional: false, required: false
  public get advertiseIpv6EigrpVariable() {
    return this.getStringAttribute('advertise_ipv6_eigrp_variable');
  }

  // advertise_ipv6_isis - computed: true, optional: false, required: false
  public get advertiseIpv6Isis() {
    return this.getBooleanAttribute('advertise_ipv6_isis');
  }

  // advertise_ipv6_isis_variable - computed: true, optional: false, required: false
  public get advertiseIpv6IsisVariable() {
    return this.getStringAttribute('advertise_ipv6_isis_variable');
  }

  // advertise_ipv6_lisp - computed: true, optional: false, required: false
  public get advertiseIpv6Lisp() {
    return this.getBooleanAttribute('advertise_ipv6_lisp');
  }

  // advertise_ipv6_lisp_variable - computed: true, optional: false, required: false
  public get advertiseIpv6LispVariable() {
    return this.getStringAttribute('advertise_ipv6_lisp_variable');
  }

  // advertise_ipv6_ospf - computed: true, optional: false, required: false
  public get advertiseIpv6Ospf() {
    return this.getBooleanAttribute('advertise_ipv6_ospf');
  }

  // advertise_ipv6_ospf_variable - computed: true, optional: false, required: false
  public get advertiseIpv6OspfVariable() {
    return this.getStringAttribute('advertise_ipv6_ospf_variable');
  }

  // advertise_ipv6_static - computed: true, optional: false, required: false
  public get advertiseIpv6Static() {
    return this.getBooleanAttribute('advertise_ipv6_static');
  }

  // advertise_ipv6_static_variable - computed: true, optional: false, required: false
  public get advertiseIpv6StaticVariable() {
    return this.getStringAttribute('advertise_ipv6_static_variable');
  }

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }

  // advertisement_interval_variable - computed: true, optional: false, required: false
  public get advertisementIntervalVariable() {
    return this.getStringAttribute('advertisement_interval_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ecmp_limit - computed: true, optional: false, required: false
  public get ecmpLimit() {
    return this.getNumberAttribute('ecmp_limit');
  }

  // ecmp_limit_variable - computed: true, optional: false, required: false
  public get ecmpLimitVariable() {
    return this.getStringAttribute('ecmp_limit_variable');
  }

  // eor_timer - computed: true, optional: false, required: false
  public get eorTimer() {
    return this.getNumberAttribute('eor_timer');
  }

  // eor_timer_variable - computed: true, optional: false, required: false
  public get eorTimerVariable() {
    return this.getStringAttribute('eor_timer_variable');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // graceful_restart - computed: true, optional: false, required: false
  public get gracefulRestart() {
    return this.getBooleanAttribute('graceful_restart');
  }

  // graceful_restart_timer - computed: true, optional: false, required: false
  public get gracefulRestartTimer() {
    return this.getNumberAttribute('graceful_restart_timer');
  }

  // graceful_restart_timer_variable - computed: true, optional: false, required: false
  public get gracefulRestartTimerVariable() {
    return this.getStringAttribute('graceful_restart_timer_variable');
  }

  // graceful_restart_variable - computed: true, optional: false, required: false
  public get gracefulRestartVariable() {
    return this.getStringAttribute('graceful_restart_variable');
  }

  // holdtime - computed: true, optional: false, required: false
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }

  // holdtime_variable - computed: true, optional: false, required: false
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_region_path_length - computed: true, optional: false, required: false
  public get ignoreRegionPathLength() {
    return this.getBooleanAttribute('ignore_region_path_length');
  }

  // ignore_region_path_length_variable - computed: true, optional: false, required: false
  public get ignoreRegionPathLengthVariable() {
    return this.getStringAttribute('ignore_region_path_length_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // omp_admin_distance_ipv4 - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv4() {
    return this.getNumberAttribute('omp_admin_distance_ipv4');
  }

  // omp_admin_distance_ipv4_variable - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv4Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv4_variable');
  }

  // omp_admin_distance_ipv6 - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv6() {
    return this.getNumberAttribute('omp_admin_distance_ipv6');
  }

  // omp_admin_distance_ipv6_variable - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv6Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv6_variable');
  }

  // overlay_as - computed: true, optional: false, required: false
  public get overlayAs() {
    return this.getNumberAttribute('overlay_as');
  }

  // overlay_as_variable - computed: true, optional: false, required: false
  public get overlayAsVariable() {
    return this.getStringAttribute('overlay_as_variable');
  }

  // paths_advertised_per_prefix - computed: true, optional: false, required: false
  public get pathsAdvertisedPerPrefix() {
    return this.getNumberAttribute('paths_advertised_per_prefix');
  }

  // paths_advertised_per_prefix_variable - computed: true, optional: false, required: false
  public get pathsAdvertisedPerPrefixVariable() {
    return this.getStringAttribute('paths_advertised_per_prefix_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // site_types - computed: true, optional: false, required: false
  public get siteTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('site_types'));
  }

  // site_types_variable - computed: true, optional: false, required: false
  public get siteTypesVariable() {
    return this.getStringAttribute('site_types_variable');
  }

  // transport_gateway - computed: true, optional: false, required: false
  public get transportGateway() {
    return this.getStringAttribute('transport_gateway');
  }

  // transport_gateway_variable - computed: true, optional: false, required: false
  public get transportGatewayVariable() {
    return this.getStringAttribute('transport_gateway_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
