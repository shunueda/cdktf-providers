// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemOmpFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_bgp SystemOmpFeature#advertise_ipv4_bgp}
  */
  readonly advertiseIpv4Bgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_bgp_variable SystemOmpFeature#advertise_ipv4_bgp_variable}
  */
  readonly advertiseIpv4BgpVariable?: string;
  /**
  * Connected
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_connected SystemOmpFeature#advertise_ipv4_connected}
  */
  readonly advertiseIpv4Connected?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_connected_variable SystemOmpFeature#advertise_ipv4_connected_variable}
  */
  readonly advertiseIpv4ConnectedVariable?: string;
  /**
  * EIGRP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_eigrp SystemOmpFeature#advertise_ipv4_eigrp}
  */
  readonly advertiseIpv4Eigrp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_eigrp_variable SystemOmpFeature#advertise_ipv4_eigrp_variable}
  */
  readonly advertiseIpv4EigrpVariable?: string;
  /**
  * ISIS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_isis SystemOmpFeature#advertise_ipv4_isis}
  */
  readonly advertiseIpv4Isis?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_isis_variable SystemOmpFeature#advertise_ipv4_isis_variable}
  */
  readonly advertiseIpv4IsisVariable?: string;
  /**
  * LISP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_lisp SystemOmpFeature#advertise_ipv4_lisp}
  */
  readonly advertiseIpv4Lisp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_lisp_variable SystemOmpFeature#advertise_ipv4_lisp_variable}
  */
  readonly advertiseIpv4LispVariable?: string;
  /**
  * OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_ospf SystemOmpFeature#advertise_ipv4_ospf}
  */
  readonly advertiseIpv4Ospf?: boolean | cdktf.IResolvable;
  /**
  * OSPFV3
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_ospf_v3 SystemOmpFeature#advertise_ipv4_ospf_v3}
  */
  readonly advertiseIpv4OspfV3?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_ospf_v3_variable SystemOmpFeature#advertise_ipv4_ospf_v3_variable}
  */
  readonly advertiseIpv4OspfV3Variable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_ospf_variable SystemOmpFeature#advertise_ipv4_ospf_variable}
  */
  readonly advertiseIpv4OspfVariable?: string;
  /**
  * Static
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_static SystemOmpFeature#advertise_ipv4_static}
  */
  readonly advertiseIpv4Static?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv4_static_variable SystemOmpFeature#advertise_ipv4_static_variable}
  */
  readonly advertiseIpv4StaticVariable?: string;
  /**
  * BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_bgp SystemOmpFeature#advertise_ipv6_bgp}
  */
  readonly advertiseIpv6Bgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_bgp_variable SystemOmpFeature#advertise_ipv6_bgp_variable}
  */
  readonly advertiseIpv6BgpVariable?: string;
  /**
  * Connected
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_connected SystemOmpFeature#advertise_ipv6_connected}
  */
  readonly advertiseIpv6Connected?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_connected_variable SystemOmpFeature#advertise_ipv6_connected_variable}
  */
  readonly advertiseIpv6ConnectedVariable?: string;
  /**
  * EIGRP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_eigrp SystemOmpFeature#advertise_ipv6_eigrp}
  */
  readonly advertiseIpv6Eigrp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_eigrp_variable SystemOmpFeature#advertise_ipv6_eigrp_variable}
  */
  readonly advertiseIpv6EigrpVariable?: string;
  /**
  * ISIS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_isis SystemOmpFeature#advertise_ipv6_isis}
  */
  readonly advertiseIpv6Isis?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_isis_variable SystemOmpFeature#advertise_ipv6_isis_variable}
  */
  readonly advertiseIpv6IsisVariable?: string;
  /**
  * LISP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_lisp SystemOmpFeature#advertise_ipv6_lisp}
  */
  readonly advertiseIpv6Lisp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_lisp_variable SystemOmpFeature#advertise_ipv6_lisp_variable}
  */
  readonly advertiseIpv6LispVariable?: string;
  /**
  * OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_ospf SystemOmpFeature#advertise_ipv6_ospf}
  */
  readonly advertiseIpv6Ospf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_ospf_variable SystemOmpFeature#advertise_ipv6_ospf_variable}
  */
  readonly advertiseIpv6OspfVariable?: string;
  /**
  * Static
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_static SystemOmpFeature#advertise_ipv6_static}
  */
  readonly advertiseIpv6Static?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertise_ipv6_static_variable SystemOmpFeature#advertise_ipv6_static_variable}
  */
  readonly advertiseIpv6StaticVariable?: string;
  /**
  * Advertisement Interval (seconds)
  *   - Range: `0`-`65535`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertisement_interval SystemOmpFeature#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#advertisement_interval_variable SystemOmpFeature#advertisement_interval_variable}
  */
  readonly advertisementIntervalVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#description SystemOmpFeature#description}
  */
  readonly description?: string;
  /**
  * Set maximum number of OMP paths to install in cEdge route table
  *   - Range: `1`-`0`
  *   - Default value: `4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#ecmp_limit SystemOmpFeature#ecmp_limit}
  */
  readonly ecmpLimit?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#ecmp_limit_variable SystemOmpFeature#ecmp_limit_variable}
  */
  readonly ecmpLimitVariable?: string;
  /**
  * EOR Timer
  *   - Range: `1`-`3600`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#eor_timer SystemOmpFeature#eor_timer}
  */
  readonly eorTimer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#eor_timer_variable SystemOmpFeature#eor_timer_variable}
  */
  readonly eorTimerVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#feature_profile_id SystemOmpFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Graceful Restart for OMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#graceful_restart SystemOmpFeature#graceful_restart}
  */
  readonly gracefulRestart?: boolean | cdktf.IResolvable;
  /**
  * Graceful Restart Timer (seconds)
  *   - Range: `1`-`604800`
  *   - Default value: `43200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#graceful_restart_timer SystemOmpFeature#graceful_restart_timer}
  */
  readonly gracefulRestartTimer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#graceful_restart_timer_variable SystemOmpFeature#graceful_restart_timer_variable}
  */
  readonly gracefulRestartTimerVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#graceful_restart_variable SystemOmpFeature#graceful_restart_variable}
  */
  readonly gracefulRestartVariable?: string;
  /**
  * Hold Time (seconds)
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#holdtime SystemOmpFeature#holdtime}
  */
  readonly holdtime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#holdtime_variable SystemOmpFeature#holdtime_variable}
  */
  readonly holdtimeVariable?: string;
  /**
  * Treat hierarchical and direct (secondary region) paths equally
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#ignore_region_path_length SystemOmpFeature#ignore_region_path_length}
  */
  readonly ignoreRegionPathLength?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#ignore_region_path_length_variable SystemOmpFeature#ignore_region_path_length_variable}
  */
  readonly ignoreRegionPathLengthVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#name SystemOmpFeature#name}
  */
  readonly name: string;
  /**
  * OMP Admin Distance IPv4
  *   - Range: `1`-`255`
  *   - Default value: `251`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#omp_admin_distance_ipv4 SystemOmpFeature#omp_admin_distance_ipv4}
  */
  readonly ompAdminDistanceIpv4?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#omp_admin_distance_ipv4_variable SystemOmpFeature#omp_admin_distance_ipv4_variable}
  */
  readonly ompAdminDistanceIpv4Variable?: string;
  /**
  * OMP Admin Distance IPv6
  *   - Range: `1`-`255`
  *   - Default value: `251`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#omp_admin_distance_ipv6 SystemOmpFeature#omp_admin_distance_ipv6}
  */
  readonly ompAdminDistanceIpv6?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#omp_admin_distance_ipv6_variable SystemOmpFeature#omp_admin_distance_ipv6_variable}
  */
  readonly ompAdminDistanceIpv6Variable?: string;
  /**
  * Overlay AS Number
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#overlay_as SystemOmpFeature#overlay_as}
  */
  readonly overlayAs?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#overlay_as_variable SystemOmpFeature#overlay_as_variable}
  */
  readonly overlayAsVariable?: string;
  /**
  * Number of Paths Advertised per Prefix
  *   - Range: `1`-`16`
  *   - Default value: `4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#paths_advertised_per_prefix SystemOmpFeature#paths_advertised_per_prefix}
  */
  readonly pathsAdvertisedPerPrefix?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#paths_advertised_per_prefix_variable SystemOmpFeature#paths_advertised_per_prefix_variable}
  */
  readonly pathsAdvertisedPerPrefixVariable?: string;
  /**
  * Shutdown
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#shutdown SystemOmpFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#shutdown_variable SystemOmpFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Site Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#site_types SystemOmpFeature#site_types}
  */
  readonly siteTypes?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#site_types_variable SystemOmpFeature#site_types_variable}
  */
  readonly siteTypesVariable?: string;
  /**
  * Transport Gateway Path Behavior
  *   - Choices: `prefer`, `ecmp-with-direct-path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#transport_gateway SystemOmpFeature#transport_gateway}
  */
  readonly transportGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#transport_gateway_variable SystemOmpFeature#transport_gateway_variable}
  */
  readonly transportGatewayVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature sdwan_system_omp_feature}
*/
export class SystemOmpFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_omp_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemOmpFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemOmpFeature to import
  * @param importFromId The id of the existing SystemOmpFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemOmpFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_omp_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_omp_feature sdwan_system_omp_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemOmpFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemOmpFeatureConfig) {
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
    this._advertiseIpv4Bgp = config.advertiseIpv4Bgp;
    this._advertiseIpv4BgpVariable = config.advertiseIpv4BgpVariable;
    this._advertiseIpv4Connected = config.advertiseIpv4Connected;
    this._advertiseIpv4ConnectedVariable = config.advertiseIpv4ConnectedVariable;
    this._advertiseIpv4Eigrp = config.advertiseIpv4Eigrp;
    this._advertiseIpv4EigrpVariable = config.advertiseIpv4EigrpVariable;
    this._advertiseIpv4Isis = config.advertiseIpv4Isis;
    this._advertiseIpv4IsisVariable = config.advertiseIpv4IsisVariable;
    this._advertiseIpv4Lisp = config.advertiseIpv4Lisp;
    this._advertiseIpv4LispVariable = config.advertiseIpv4LispVariable;
    this._advertiseIpv4Ospf = config.advertiseIpv4Ospf;
    this._advertiseIpv4OspfV3 = config.advertiseIpv4OspfV3;
    this._advertiseIpv4OspfV3Variable = config.advertiseIpv4OspfV3Variable;
    this._advertiseIpv4OspfVariable = config.advertiseIpv4OspfVariable;
    this._advertiseIpv4Static = config.advertiseIpv4Static;
    this._advertiseIpv4StaticVariable = config.advertiseIpv4StaticVariable;
    this._advertiseIpv6Bgp = config.advertiseIpv6Bgp;
    this._advertiseIpv6BgpVariable = config.advertiseIpv6BgpVariable;
    this._advertiseIpv6Connected = config.advertiseIpv6Connected;
    this._advertiseIpv6ConnectedVariable = config.advertiseIpv6ConnectedVariable;
    this._advertiseIpv6Eigrp = config.advertiseIpv6Eigrp;
    this._advertiseIpv6EigrpVariable = config.advertiseIpv6EigrpVariable;
    this._advertiseIpv6Isis = config.advertiseIpv6Isis;
    this._advertiseIpv6IsisVariable = config.advertiseIpv6IsisVariable;
    this._advertiseIpv6Lisp = config.advertiseIpv6Lisp;
    this._advertiseIpv6LispVariable = config.advertiseIpv6LispVariable;
    this._advertiseIpv6Ospf = config.advertiseIpv6Ospf;
    this._advertiseIpv6OspfVariable = config.advertiseIpv6OspfVariable;
    this._advertiseIpv6Static = config.advertiseIpv6Static;
    this._advertiseIpv6StaticVariable = config.advertiseIpv6StaticVariable;
    this._advertisementInterval = config.advertisementInterval;
    this._advertisementIntervalVariable = config.advertisementIntervalVariable;
    this._description = config.description;
    this._ecmpLimit = config.ecmpLimit;
    this._ecmpLimitVariable = config.ecmpLimitVariable;
    this._eorTimer = config.eorTimer;
    this._eorTimerVariable = config.eorTimerVariable;
    this._featureProfileId = config.featureProfileId;
    this._gracefulRestart = config.gracefulRestart;
    this._gracefulRestartTimer = config.gracefulRestartTimer;
    this._gracefulRestartTimerVariable = config.gracefulRestartTimerVariable;
    this._gracefulRestartVariable = config.gracefulRestartVariable;
    this._holdtime = config.holdtime;
    this._holdtimeVariable = config.holdtimeVariable;
    this._ignoreRegionPathLength = config.ignoreRegionPathLength;
    this._ignoreRegionPathLengthVariable = config.ignoreRegionPathLengthVariable;
    this._name = config.name;
    this._ompAdminDistanceIpv4 = config.ompAdminDistanceIpv4;
    this._ompAdminDistanceIpv4Variable = config.ompAdminDistanceIpv4Variable;
    this._ompAdminDistanceIpv6 = config.ompAdminDistanceIpv6;
    this._ompAdminDistanceIpv6Variable = config.ompAdminDistanceIpv6Variable;
    this._overlayAs = config.overlayAs;
    this._overlayAsVariable = config.overlayAsVariable;
    this._pathsAdvertisedPerPrefix = config.pathsAdvertisedPerPrefix;
    this._pathsAdvertisedPerPrefixVariable = config.pathsAdvertisedPerPrefixVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._siteTypes = config.siteTypes;
    this._siteTypesVariable = config.siteTypesVariable;
    this._transportGateway = config.transportGateway;
    this._transportGatewayVariable = config.transportGatewayVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_ipv4_bgp - computed: false, optional: true, required: false
  private _advertiseIpv4Bgp?: boolean | cdktf.IResolvable; 
  public get advertiseIpv4Bgp() {
    return this.getBooleanAttribute('advertise_ipv4_bgp');
  }
  public set advertiseIpv4Bgp(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv4Bgp = value;
  }
  public resetAdvertiseIpv4Bgp() {
    this._advertiseIpv4Bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4BgpInput() {
    return this._advertiseIpv4Bgp;
  }

  // advertise_ipv4_bgp_variable - computed: false, optional: true, required: false
  private _advertiseIpv4BgpVariable?: string; 
  public get advertiseIpv4BgpVariable() {
    return this.getStringAttribute('advertise_ipv4_bgp_variable');
  }
  public set advertiseIpv4BgpVariable(value: string) {
    this._advertiseIpv4BgpVariable = value;
  }
  public resetAdvertiseIpv4BgpVariable() {
    this._advertiseIpv4BgpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4BgpVariableInput() {
    return this._advertiseIpv4BgpVariable;
  }

  // advertise_ipv4_connected - computed: false, optional: true, required: false
  private _advertiseIpv4Connected?: boolean | cdktf.IResolvable; 
  public get advertiseIpv4Connected() {
    return this.getBooleanAttribute('advertise_ipv4_connected');
  }
  public set advertiseIpv4Connected(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv4Connected = value;
  }
  public resetAdvertiseIpv4Connected() {
    this._advertiseIpv4Connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4ConnectedInput() {
    return this._advertiseIpv4Connected;
  }

  // advertise_ipv4_connected_variable - computed: false, optional: true, required: false
  private _advertiseIpv4ConnectedVariable?: string; 
  public get advertiseIpv4ConnectedVariable() {
    return this.getStringAttribute('advertise_ipv4_connected_variable');
  }
  public set advertiseIpv4ConnectedVariable(value: string) {
    this._advertiseIpv4ConnectedVariable = value;
  }
  public resetAdvertiseIpv4ConnectedVariable() {
    this._advertiseIpv4ConnectedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4ConnectedVariableInput() {
    return this._advertiseIpv4ConnectedVariable;
  }

  // advertise_ipv4_eigrp - computed: false, optional: true, required: false
  private _advertiseIpv4Eigrp?: boolean | cdktf.IResolvable; 
  public get advertiseIpv4Eigrp() {
    return this.getBooleanAttribute('advertise_ipv4_eigrp');
  }
  public set advertiseIpv4Eigrp(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv4Eigrp = value;
  }
  public resetAdvertiseIpv4Eigrp() {
    this._advertiseIpv4Eigrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4EigrpInput() {
    return this._advertiseIpv4Eigrp;
  }

  // advertise_ipv4_eigrp_variable - computed: false, optional: true, required: false
  private _advertiseIpv4EigrpVariable?: string; 
  public get advertiseIpv4EigrpVariable() {
    return this.getStringAttribute('advertise_ipv4_eigrp_variable');
  }
  public set advertiseIpv4EigrpVariable(value: string) {
    this._advertiseIpv4EigrpVariable = value;
  }
  public resetAdvertiseIpv4EigrpVariable() {
    this._advertiseIpv4EigrpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4EigrpVariableInput() {
    return this._advertiseIpv4EigrpVariable;
  }

  // advertise_ipv4_isis - computed: false, optional: true, required: false
  private _advertiseIpv4Isis?: boolean | cdktf.IResolvable; 
  public get advertiseIpv4Isis() {
    return this.getBooleanAttribute('advertise_ipv4_isis');
  }
  public set advertiseIpv4Isis(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv4Isis = value;
  }
  public resetAdvertiseIpv4Isis() {
    this._advertiseIpv4Isis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4IsisInput() {
    return this._advertiseIpv4Isis;
  }

  // advertise_ipv4_isis_variable - computed: false, optional: true, required: false
  private _advertiseIpv4IsisVariable?: string; 
  public get advertiseIpv4IsisVariable() {
    return this.getStringAttribute('advertise_ipv4_isis_variable');
  }
  public set advertiseIpv4IsisVariable(value: string) {
    this._advertiseIpv4IsisVariable = value;
  }
  public resetAdvertiseIpv4IsisVariable() {
    this._advertiseIpv4IsisVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4IsisVariableInput() {
    return this._advertiseIpv4IsisVariable;
  }

  // advertise_ipv4_lisp - computed: false, optional: true, required: false
  private _advertiseIpv4Lisp?: boolean | cdktf.IResolvable; 
  public get advertiseIpv4Lisp() {
    return this.getBooleanAttribute('advertise_ipv4_lisp');
  }
  public set advertiseIpv4Lisp(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv4Lisp = value;
  }
  public resetAdvertiseIpv4Lisp() {
    this._advertiseIpv4Lisp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4LispInput() {
    return this._advertiseIpv4Lisp;
  }

  // advertise_ipv4_lisp_variable - computed: false, optional: true, required: false
  private _advertiseIpv4LispVariable?: string; 
  public get advertiseIpv4LispVariable() {
    return this.getStringAttribute('advertise_ipv4_lisp_variable');
  }
  public set advertiseIpv4LispVariable(value: string) {
    this._advertiseIpv4LispVariable = value;
  }
  public resetAdvertiseIpv4LispVariable() {
    this._advertiseIpv4LispVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4LispVariableInput() {
    return this._advertiseIpv4LispVariable;
  }

  // advertise_ipv4_ospf - computed: false, optional: true, required: false
  private _advertiseIpv4Ospf?: boolean | cdktf.IResolvable; 
  public get advertiseIpv4Ospf() {
    return this.getBooleanAttribute('advertise_ipv4_ospf');
  }
  public set advertiseIpv4Ospf(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv4Ospf = value;
  }
  public resetAdvertiseIpv4Ospf() {
    this._advertiseIpv4Ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4OspfInput() {
    return this._advertiseIpv4Ospf;
  }

  // advertise_ipv4_ospf_v3 - computed: false, optional: true, required: false
  private _advertiseIpv4OspfV3?: boolean | cdktf.IResolvable; 
  public get advertiseIpv4OspfV3() {
    return this.getBooleanAttribute('advertise_ipv4_ospf_v3');
  }
  public set advertiseIpv4OspfV3(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv4OspfV3 = value;
  }
  public resetAdvertiseIpv4OspfV3() {
    this._advertiseIpv4OspfV3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4OspfV3Input() {
    return this._advertiseIpv4OspfV3;
  }

  // advertise_ipv4_ospf_v3_variable - computed: false, optional: true, required: false
  private _advertiseIpv4OspfV3Variable?: string; 
  public get advertiseIpv4OspfV3Variable() {
    return this.getStringAttribute('advertise_ipv4_ospf_v3_variable');
  }
  public set advertiseIpv4OspfV3Variable(value: string) {
    this._advertiseIpv4OspfV3Variable = value;
  }
  public resetAdvertiseIpv4OspfV3Variable() {
    this._advertiseIpv4OspfV3Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4OspfV3VariableInput() {
    return this._advertiseIpv4OspfV3Variable;
  }

  // advertise_ipv4_ospf_variable - computed: false, optional: true, required: false
  private _advertiseIpv4OspfVariable?: string; 
  public get advertiseIpv4OspfVariable() {
    return this.getStringAttribute('advertise_ipv4_ospf_variable');
  }
  public set advertiseIpv4OspfVariable(value: string) {
    this._advertiseIpv4OspfVariable = value;
  }
  public resetAdvertiseIpv4OspfVariable() {
    this._advertiseIpv4OspfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4OspfVariableInput() {
    return this._advertiseIpv4OspfVariable;
  }

  // advertise_ipv4_static - computed: false, optional: true, required: false
  private _advertiseIpv4Static?: boolean | cdktf.IResolvable; 
  public get advertiseIpv4Static() {
    return this.getBooleanAttribute('advertise_ipv4_static');
  }
  public set advertiseIpv4Static(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv4Static = value;
  }
  public resetAdvertiseIpv4Static() {
    this._advertiseIpv4Static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4StaticInput() {
    return this._advertiseIpv4Static;
  }

  // advertise_ipv4_static_variable - computed: false, optional: true, required: false
  private _advertiseIpv4StaticVariable?: string; 
  public get advertiseIpv4StaticVariable() {
    return this.getStringAttribute('advertise_ipv4_static_variable');
  }
  public set advertiseIpv4StaticVariable(value: string) {
    this._advertiseIpv4StaticVariable = value;
  }
  public resetAdvertiseIpv4StaticVariable() {
    this._advertiseIpv4StaticVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4StaticVariableInput() {
    return this._advertiseIpv4StaticVariable;
  }

  // advertise_ipv6_bgp - computed: false, optional: true, required: false
  private _advertiseIpv6Bgp?: boolean | cdktf.IResolvable; 
  public get advertiseIpv6Bgp() {
    return this.getBooleanAttribute('advertise_ipv6_bgp');
  }
  public set advertiseIpv6Bgp(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv6Bgp = value;
  }
  public resetAdvertiseIpv6Bgp() {
    this._advertiseIpv6Bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6BgpInput() {
    return this._advertiseIpv6Bgp;
  }

  // advertise_ipv6_bgp_variable - computed: false, optional: true, required: false
  private _advertiseIpv6BgpVariable?: string; 
  public get advertiseIpv6BgpVariable() {
    return this.getStringAttribute('advertise_ipv6_bgp_variable');
  }
  public set advertiseIpv6BgpVariable(value: string) {
    this._advertiseIpv6BgpVariable = value;
  }
  public resetAdvertiseIpv6BgpVariable() {
    this._advertiseIpv6BgpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6BgpVariableInput() {
    return this._advertiseIpv6BgpVariable;
  }

  // advertise_ipv6_connected - computed: false, optional: true, required: false
  private _advertiseIpv6Connected?: boolean | cdktf.IResolvable; 
  public get advertiseIpv6Connected() {
    return this.getBooleanAttribute('advertise_ipv6_connected');
  }
  public set advertiseIpv6Connected(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv6Connected = value;
  }
  public resetAdvertiseIpv6Connected() {
    this._advertiseIpv6Connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6ConnectedInput() {
    return this._advertiseIpv6Connected;
  }

  // advertise_ipv6_connected_variable - computed: false, optional: true, required: false
  private _advertiseIpv6ConnectedVariable?: string; 
  public get advertiseIpv6ConnectedVariable() {
    return this.getStringAttribute('advertise_ipv6_connected_variable');
  }
  public set advertiseIpv6ConnectedVariable(value: string) {
    this._advertiseIpv6ConnectedVariable = value;
  }
  public resetAdvertiseIpv6ConnectedVariable() {
    this._advertiseIpv6ConnectedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6ConnectedVariableInput() {
    return this._advertiseIpv6ConnectedVariable;
  }

  // advertise_ipv6_eigrp - computed: false, optional: true, required: false
  private _advertiseIpv6Eigrp?: boolean | cdktf.IResolvable; 
  public get advertiseIpv6Eigrp() {
    return this.getBooleanAttribute('advertise_ipv6_eigrp');
  }
  public set advertiseIpv6Eigrp(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv6Eigrp = value;
  }
  public resetAdvertiseIpv6Eigrp() {
    this._advertiseIpv6Eigrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6EigrpInput() {
    return this._advertiseIpv6Eigrp;
  }

  // advertise_ipv6_eigrp_variable - computed: false, optional: true, required: false
  private _advertiseIpv6EigrpVariable?: string; 
  public get advertiseIpv6EigrpVariable() {
    return this.getStringAttribute('advertise_ipv6_eigrp_variable');
  }
  public set advertiseIpv6EigrpVariable(value: string) {
    this._advertiseIpv6EigrpVariable = value;
  }
  public resetAdvertiseIpv6EigrpVariable() {
    this._advertiseIpv6EigrpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6EigrpVariableInput() {
    return this._advertiseIpv6EigrpVariable;
  }

  // advertise_ipv6_isis - computed: false, optional: true, required: false
  private _advertiseIpv6Isis?: boolean | cdktf.IResolvable; 
  public get advertiseIpv6Isis() {
    return this.getBooleanAttribute('advertise_ipv6_isis');
  }
  public set advertiseIpv6Isis(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv6Isis = value;
  }
  public resetAdvertiseIpv6Isis() {
    this._advertiseIpv6Isis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6IsisInput() {
    return this._advertiseIpv6Isis;
  }

  // advertise_ipv6_isis_variable - computed: false, optional: true, required: false
  private _advertiseIpv6IsisVariable?: string; 
  public get advertiseIpv6IsisVariable() {
    return this.getStringAttribute('advertise_ipv6_isis_variable');
  }
  public set advertiseIpv6IsisVariable(value: string) {
    this._advertiseIpv6IsisVariable = value;
  }
  public resetAdvertiseIpv6IsisVariable() {
    this._advertiseIpv6IsisVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6IsisVariableInput() {
    return this._advertiseIpv6IsisVariable;
  }

  // advertise_ipv6_lisp - computed: false, optional: true, required: false
  private _advertiseIpv6Lisp?: boolean | cdktf.IResolvable; 
  public get advertiseIpv6Lisp() {
    return this.getBooleanAttribute('advertise_ipv6_lisp');
  }
  public set advertiseIpv6Lisp(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv6Lisp = value;
  }
  public resetAdvertiseIpv6Lisp() {
    this._advertiseIpv6Lisp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6LispInput() {
    return this._advertiseIpv6Lisp;
  }

  // advertise_ipv6_lisp_variable - computed: false, optional: true, required: false
  private _advertiseIpv6LispVariable?: string; 
  public get advertiseIpv6LispVariable() {
    return this.getStringAttribute('advertise_ipv6_lisp_variable');
  }
  public set advertiseIpv6LispVariable(value: string) {
    this._advertiseIpv6LispVariable = value;
  }
  public resetAdvertiseIpv6LispVariable() {
    this._advertiseIpv6LispVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6LispVariableInput() {
    return this._advertiseIpv6LispVariable;
  }

  // advertise_ipv6_ospf - computed: false, optional: true, required: false
  private _advertiseIpv6Ospf?: boolean | cdktf.IResolvable; 
  public get advertiseIpv6Ospf() {
    return this.getBooleanAttribute('advertise_ipv6_ospf');
  }
  public set advertiseIpv6Ospf(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv6Ospf = value;
  }
  public resetAdvertiseIpv6Ospf() {
    this._advertiseIpv6Ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6OspfInput() {
    return this._advertiseIpv6Ospf;
  }

  // advertise_ipv6_ospf_variable - computed: false, optional: true, required: false
  private _advertiseIpv6OspfVariable?: string; 
  public get advertiseIpv6OspfVariable() {
    return this.getStringAttribute('advertise_ipv6_ospf_variable');
  }
  public set advertiseIpv6OspfVariable(value: string) {
    this._advertiseIpv6OspfVariable = value;
  }
  public resetAdvertiseIpv6OspfVariable() {
    this._advertiseIpv6OspfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6OspfVariableInput() {
    return this._advertiseIpv6OspfVariable;
  }

  // advertise_ipv6_static - computed: false, optional: true, required: false
  private _advertiseIpv6Static?: boolean | cdktf.IResolvable; 
  public get advertiseIpv6Static() {
    return this.getBooleanAttribute('advertise_ipv6_static');
  }
  public set advertiseIpv6Static(value: boolean | cdktf.IResolvable) {
    this._advertiseIpv6Static = value;
  }
  public resetAdvertiseIpv6Static() {
    this._advertiseIpv6Static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6StaticInput() {
    return this._advertiseIpv6Static;
  }

  // advertise_ipv6_static_variable - computed: false, optional: true, required: false
  private _advertiseIpv6StaticVariable?: string; 
  public get advertiseIpv6StaticVariable() {
    return this.getStringAttribute('advertise_ipv6_static_variable');
  }
  public set advertiseIpv6StaticVariable(value: string) {
    this._advertiseIpv6StaticVariable = value;
  }
  public resetAdvertiseIpv6StaticVariable() {
    this._advertiseIpv6StaticVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6StaticVariableInput() {
    return this._advertiseIpv6StaticVariable;
  }

  // advertisement_interval - computed: false, optional: true, required: false
  private _advertisementInterval?: number; 
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }
  public set advertisementInterval(value: number) {
    this._advertisementInterval = value;
  }
  public resetAdvertisementInterval() {
    this._advertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalInput() {
    return this._advertisementInterval;
  }

  // advertisement_interval_variable - computed: false, optional: true, required: false
  private _advertisementIntervalVariable?: string; 
  public get advertisementIntervalVariable() {
    return this.getStringAttribute('advertisement_interval_variable');
  }
  public set advertisementIntervalVariable(value: string) {
    this._advertisementIntervalVariable = value;
  }
  public resetAdvertisementIntervalVariable() {
    this._advertisementIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalVariableInput() {
    return this._advertisementIntervalVariable;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ecmp_limit - computed: false, optional: true, required: false
  private _ecmpLimit?: number; 
  public get ecmpLimit() {
    return this.getNumberAttribute('ecmp_limit');
  }
  public set ecmpLimit(value: number) {
    this._ecmpLimit = value;
  }
  public resetEcmpLimit() {
    this._ecmpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpLimitInput() {
    return this._ecmpLimit;
  }

  // ecmp_limit_variable - computed: false, optional: true, required: false
  private _ecmpLimitVariable?: string; 
  public get ecmpLimitVariable() {
    return this.getStringAttribute('ecmp_limit_variable');
  }
  public set ecmpLimitVariable(value: string) {
    this._ecmpLimitVariable = value;
  }
  public resetEcmpLimitVariable() {
    this._ecmpLimitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpLimitVariableInput() {
    return this._ecmpLimitVariable;
  }

  // eor_timer - computed: false, optional: true, required: false
  private _eorTimer?: number; 
  public get eorTimer() {
    return this.getNumberAttribute('eor_timer');
  }
  public set eorTimer(value: number) {
    this._eorTimer = value;
  }
  public resetEorTimer() {
    this._eorTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eorTimerInput() {
    return this._eorTimer;
  }

  // eor_timer_variable - computed: false, optional: true, required: false
  private _eorTimerVariable?: string; 
  public get eorTimerVariable() {
    return this.getStringAttribute('eor_timer_variable');
  }
  public set eorTimerVariable(value: string) {
    this._eorTimerVariable = value;
  }
  public resetEorTimerVariable() {
    this._eorTimerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eorTimerVariableInput() {
    return this._eorTimerVariable;
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

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart?: boolean | cdktf.IResolvable; 
  public get gracefulRestart() {
    return this.getBooleanAttribute('graceful_restart');
  }
  public set gracefulRestart(value: boolean | cdktf.IResolvable) {
    this._gracefulRestart = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart;
  }

  // graceful_restart_timer - computed: false, optional: true, required: false
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

  // graceful_restart_timer_variable - computed: false, optional: true, required: false
  private _gracefulRestartTimerVariable?: string; 
  public get gracefulRestartTimerVariable() {
    return this.getStringAttribute('graceful_restart_timer_variable');
  }
  public set gracefulRestartTimerVariable(value: string) {
    this._gracefulRestartTimerVariable = value;
  }
  public resetGracefulRestartTimerVariable() {
    this._gracefulRestartTimerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartTimerVariableInput() {
    return this._gracefulRestartTimerVariable;
  }

  // graceful_restart_variable - computed: false, optional: true, required: false
  private _gracefulRestartVariable?: string; 
  public get gracefulRestartVariable() {
    return this.getStringAttribute('graceful_restart_variable');
  }
  public set gracefulRestartVariable(value: string) {
    this._gracefulRestartVariable = value;
  }
  public resetGracefulRestartVariable() {
    this._gracefulRestartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartVariableInput() {
    return this._gracefulRestartVariable;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // holdtime_variable - computed: false, optional: true, required: false
  private _holdtimeVariable?: string; 
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }
  public set holdtimeVariable(value: string) {
    this._holdtimeVariable = value;
  }
  public resetHoldtimeVariable() {
    this._holdtimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeVariableInput() {
    return this._holdtimeVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_region_path_length - computed: false, optional: true, required: false
  private _ignoreRegionPathLength?: boolean | cdktf.IResolvable; 
  public get ignoreRegionPathLength() {
    return this.getBooleanAttribute('ignore_region_path_length');
  }
  public set ignoreRegionPathLength(value: boolean | cdktf.IResolvable) {
    this._ignoreRegionPathLength = value;
  }
  public resetIgnoreRegionPathLength() {
    this._ignoreRegionPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRegionPathLengthInput() {
    return this._ignoreRegionPathLength;
  }

  // ignore_region_path_length_variable - computed: false, optional: true, required: false
  private _ignoreRegionPathLengthVariable?: string; 
  public get ignoreRegionPathLengthVariable() {
    return this.getStringAttribute('ignore_region_path_length_variable');
  }
  public set ignoreRegionPathLengthVariable(value: string) {
    this._ignoreRegionPathLengthVariable = value;
  }
  public resetIgnoreRegionPathLengthVariable() {
    this._ignoreRegionPathLengthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRegionPathLengthVariableInput() {
    return this._ignoreRegionPathLengthVariable;
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

  // omp_admin_distance_ipv4 - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv4?: number; 
  public get ompAdminDistanceIpv4() {
    return this.getNumberAttribute('omp_admin_distance_ipv4');
  }
  public set ompAdminDistanceIpv4(value: number) {
    this._ompAdminDistanceIpv4 = value;
  }
  public resetOmpAdminDistanceIpv4() {
    this._ompAdminDistanceIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv4Input() {
    return this._ompAdminDistanceIpv4;
  }

  // omp_admin_distance_ipv4_variable - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv4Variable?: string; 
  public get ompAdminDistanceIpv4Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv4_variable');
  }
  public set ompAdminDistanceIpv4Variable(value: string) {
    this._ompAdminDistanceIpv4Variable = value;
  }
  public resetOmpAdminDistanceIpv4Variable() {
    this._ompAdminDistanceIpv4Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv4VariableInput() {
    return this._ompAdminDistanceIpv4Variable;
  }

  // omp_admin_distance_ipv6 - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv6?: number; 
  public get ompAdminDistanceIpv6() {
    return this.getNumberAttribute('omp_admin_distance_ipv6');
  }
  public set ompAdminDistanceIpv6(value: number) {
    this._ompAdminDistanceIpv6 = value;
  }
  public resetOmpAdminDistanceIpv6() {
    this._ompAdminDistanceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv6Input() {
    return this._ompAdminDistanceIpv6;
  }

  // omp_admin_distance_ipv6_variable - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv6Variable?: string; 
  public get ompAdminDistanceIpv6Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv6_variable');
  }
  public set ompAdminDistanceIpv6Variable(value: string) {
    this._ompAdminDistanceIpv6Variable = value;
  }
  public resetOmpAdminDistanceIpv6Variable() {
    this._ompAdminDistanceIpv6Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv6VariableInput() {
    return this._ompAdminDistanceIpv6Variable;
  }

  // overlay_as - computed: false, optional: true, required: false
  private _overlayAs?: number; 
  public get overlayAs() {
    return this.getNumberAttribute('overlay_as');
  }
  public set overlayAs(value: number) {
    this._overlayAs = value;
  }
  public resetOverlayAs() {
    this._overlayAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayAsInput() {
    return this._overlayAs;
  }

  // overlay_as_variable - computed: false, optional: true, required: false
  private _overlayAsVariable?: string; 
  public get overlayAsVariable() {
    return this.getStringAttribute('overlay_as_variable');
  }
  public set overlayAsVariable(value: string) {
    this._overlayAsVariable = value;
  }
  public resetOverlayAsVariable() {
    this._overlayAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayAsVariableInput() {
    return this._overlayAsVariable;
  }

  // paths_advertised_per_prefix - computed: false, optional: true, required: false
  private _pathsAdvertisedPerPrefix?: number; 
  public get pathsAdvertisedPerPrefix() {
    return this.getNumberAttribute('paths_advertised_per_prefix');
  }
  public set pathsAdvertisedPerPrefix(value: number) {
    this._pathsAdvertisedPerPrefix = value;
  }
  public resetPathsAdvertisedPerPrefix() {
    this._pathsAdvertisedPerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsAdvertisedPerPrefixInput() {
    return this._pathsAdvertisedPerPrefix;
  }

  // paths_advertised_per_prefix_variable - computed: false, optional: true, required: false
  private _pathsAdvertisedPerPrefixVariable?: string; 
  public get pathsAdvertisedPerPrefixVariable() {
    return this.getStringAttribute('paths_advertised_per_prefix_variable');
  }
  public set pathsAdvertisedPerPrefixVariable(value: string) {
    this._pathsAdvertisedPerPrefixVariable = value;
  }
  public resetPathsAdvertisedPerPrefixVariable() {
    this._pathsAdvertisedPerPrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsAdvertisedPerPrefixVariableInput() {
    return this._pathsAdvertisedPerPrefixVariable;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // site_types - computed: false, optional: true, required: false
  private _siteTypes?: string[]; 
  public get siteTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('site_types'));
  }
  public set siteTypes(value: string[]) {
    this._siteTypes = value;
  }
  public resetSiteTypes() {
    this._siteTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypesInput() {
    return this._siteTypes;
  }

  // site_types_variable - computed: false, optional: true, required: false
  private _siteTypesVariable?: string; 
  public get siteTypesVariable() {
    return this.getStringAttribute('site_types_variable');
  }
  public set siteTypesVariable(value: string) {
    this._siteTypesVariable = value;
  }
  public resetSiteTypesVariable() {
    this._siteTypesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypesVariableInput() {
    return this._siteTypesVariable;
  }

  // transport_gateway - computed: false, optional: true, required: false
  private _transportGateway?: string; 
  public get transportGateway() {
    return this.getStringAttribute('transport_gateway');
  }
  public set transportGateway(value: string) {
    this._transportGateway = value;
  }
  public resetTransportGateway() {
    this._transportGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGatewayInput() {
    return this._transportGateway;
  }

  // transport_gateway_variable - computed: false, optional: true, required: false
  private _transportGatewayVariable?: string; 
  public get transportGatewayVariable() {
    return this.getStringAttribute('transport_gateway_variable');
  }
  public set transportGatewayVariable(value: string) {
    this._transportGatewayVariable = value;
  }
  public resetTransportGatewayVariable() {
    this._transportGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGatewayVariableInput() {
    return this._transportGatewayVariable;
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
      advertise_ipv4_bgp: cdktf.booleanToTerraform(this._advertiseIpv4Bgp),
      advertise_ipv4_bgp_variable: cdktf.stringToTerraform(this._advertiseIpv4BgpVariable),
      advertise_ipv4_connected: cdktf.booleanToTerraform(this._advertiseIpv4Connected),
      advertise_ipv4_connected_variable: cdktf.stringToTerraform(this._advertiseIpv4ConnectedVariable),
      advertise_ipv4_eigrp: cdktf.booleanToTerraform(this._advertiseIpv4Eigrp),
      advertise_ipv4_eigrp_variable: cdktf.stringToTerraform(this._advertiseIpv4EigrpVariable),
      advertise_ipv4_isis: cdktf.booleanToTerraform(this._advertiseIpv4Isis),
      advertise_ipv4_isis_variable: cdktf.stringToTerraform(this._advertiseIpv4IsisVariable),
      advertise_ipv4_lisp: cdktf.booleanToTerraform(this._advertiseIpv4Lisp),
      advertise_ipv4_lisp_variable: cdktf.stringToTerraform(this._advertiseIpv4LispVariable),
      advertise_ipv4_ospf: cdktf.booleanToTerraform(this._advertiseIpv4Ospf),
      advertise_ipv4_ospf_v3: cdktf.booleanToTerraform(this._advertiseIpv4OspfV3),
      advertise_ipv4_ospf_v3_variable: cdktf.stringToTerraform(this._advertiseIpv4OspfV3Variable),
      advertise_ipv4_ospf_variable: cdktf.stringToTerraform(this._advertiseIpv4OspfVariable),
      advertise_ipv4_static: cdktf.booleanToTerraform(this._advertiseIpv4Static),
      advertise_ipv4_static_variable: cdktf.stringToTerraform(this._advertiseIpv4StaticVariable),
      advertise_ipv6_bgp: cdktf.booleanToTerraform(this._advertiseIpv6Bgp),
      advertise_ipv6_bgp_variable: cdktf.stringToTerraform(this._advertiseIpv6BgpVariable),
      advertise_ipv6_connected: cdktf.booleanToTerraform(this._advertiseIpv6Connected),
      advertise_ipv6_connected_variable: cdktf.stringToTerraform(this._advertiseIpv6ConnectedVariable),
      advertise_ipv6_eigrp: cdktf.booleanToTerraform(this._advertiseIpv6Eigrp),
      advertise_ipv6_eigrp_variable: cdktf.stringToTerraform(this._advertiseIpv6EigrpVariable),
      advertise_ipv6_isis: cdktf.booleanToTerraform(this._advertiseIpv6Isis),
      advertise_ipv6_isis_variable: cdktf.stringToTerraform(this._advertiseIpv6IsisVariable),
      advertise_ipv6_lisp: cdktf.booleanToTerraform(this._advertiseIpv6Lisp),
      advertise_ipv6_lisp_variable: cdktf.stringToTerraform(this._advertiseIpv6LispVariable),
      advertise_ipv6_ospf: cdktf.booleanToTerraform(this._advertiseIpv6Ospf),
      advertise_ipv6_ospf_variable: cdktf.stringToTerraform(this._advertiseIpv6OspfVariable),
      advertise_ipv6_static: cdktf.booleanToTerraform(this._advertiseIpv6Static),
      advertise_ipv6_static_variable: cdktf.stringToTerraform(this._advertiseIpv6StaticVariable),
      advertisement_interval: cdktf.numberToTerraform(this._advertisementInterval),
      advertisement_interval_variable: cdktf.stringToTerraform(this._advertisementIntervalVariable),
      description: cdktf.stringToTerraform(this._description),
      ecmp_limit: cdktf.numberToTerraform(this._ecmpLimit),
      ecmp_limit_variable: cdktf.stringToTerraform(this._ecmpLimitVariable),
      eor_timer: cdktf.numberToTerraform(this._eorTimer),
      eor_timer_variable: cdktf.stringToTerraform(this._eorTimerVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      graceful_restart: cdktf.booleanToTerraform(this._gracefulRestart),
      graceful_restart_timer: cdktf.numberToTerraform(this._gracefulRestartTimer),
      graceful_restart_timer_variable: cdktf.stringToTerraform(this._gracefulRestartTimerVariable),
      graceful_restart_variable: cdktf.stringToTerraform(this._gracefulRestartVariable),
      holdtime: cdktf.numberToTerraform(this._holdtime),
      holdtime_variable: cdktf.stringToTerraform(this._holdtimeVariable),
      ignore_region_path_length: cdktf.booleanToTerraform(this._ignoreRegionPathLength),
      ignore_region_path_length_variable: cdktf.stringToTerraform(this._ignoreRegionPathLengthVariable),
      name: cdktf.stringToTerraform(this._name),
      omp_admin_distance_ipv4: cdktf.numberToTerraform(this._ompAdminDistanceIpv4),
      omp_admin_distance_ipv4_variable: cdktf.stringToTerraform(this._ompAdminDistanceIpv4Variable),
      omp_admin_distance_ipv6: cdktf.numberToTerraform(this._ompAdminDistanceIpv6),
      omp_admin_distance_ipv6_variable: cdktf.stringToTerraform(this._ompAdminDistanceIpv6Variable),
      overlay_as: cdktf.numberToTerraform(this._overlayAs),
      overlay_as_variable: cdktf.stringToTerraform(this._overlayAsVariable),
      paths_advertised_per_prefix: cdktf.numberToTerraform(this._pathsAdvertisedPerPrefix),
      paths_advertised_per_prefix_variable: cdktf.stringToTerraform(this._pathsAdvertisedPerPrefixVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      site_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._siteTypes),
      site_types_variable: cdktf.stringToTerraform(this._siteTypesVariable),
      transport_gateway: cdktf.stringToTerraform(this._transportGateway),
      transport_gateway_variable: cdktf.stringToTerraform(this._transportGatewayVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_ipv4_bgp: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv4Bgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv4_bgp_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv4BgpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv4_connected: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv4Connected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv4_connected_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv4ConnectedVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv4_eigrp: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv4Eigrp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv4_eigrp_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv4EigrpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv4_isis: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv4Isis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv4_isis_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv4IsisVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv4_lisp: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv4Lisp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv4_lisp_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv4LispVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv4_ospf: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv4Ospf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv4_ospf_v3: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv4OspfV3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv4_ospf_v3_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv4OspfV3Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv4_ospf_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv4OspfVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv4_static: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv4Static),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv4_static_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv4StaticVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv6_bgp: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv6Bgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv6_bgp_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv6BgpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv6_connected: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv6Connected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv6_connected_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv6ConnectedVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv6_eigrp: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv6Eigrp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv6_eigrp_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv6EigrpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv6_isis: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv6Isis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv6_isis_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv6IsisVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv6_lisp: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv6Lisp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv6_lisp_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv6LispVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv6_ospf: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv6Ospf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv6_ospf_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv6OspfVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_ipv6_static: {
        value: cdktf.booleanToHclTerraform(this._advertiseIpv6Static),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_ipv6_static_variable: {
        value: cdktf.stringToHclTerraform(this._advertiseIpv6StaticVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertisement_interval: {
        value: cdktf.numberToHclTerraform(this._advertisementInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advertisement_interval_variable: {
        value: cdktf.stringToHclTerraform(this._advertisementIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecmp_limit: {
        value: cdktf.numberToHclTerraform(this._ecmpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ecmp_limit_variable: {
        value: cdktf.stringToHclTerraform(this._ecmpLimitVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eor_timer: {
        value: cdktf.numberToHclTerraform(this._eorTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eor_timer_variable: {
        value: cdktf.stringToHclTerraform(this._eorTimerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart: {
        value: cdktf.booleanToHclTerraform(this._gracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graceful_restart_timer: {
        value: cdktf.numberToHclTerraform(this._gracefulRestartTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful_restart_timer_variable: {
        value: cdktf.stringToHclTerraform(this._gracefulRestartTimerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_variable: {
        value: cdktf.stringToHclTerraform(this._gracefulRestartVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holdtime: {
        value: cdktf.numberToHclTerraform(this._holdtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      holdtime_variable: {
        value: cdktf.stringToHclTerraform(this._holdtimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_region_path_length: {
        value: cdktf.booleanToHclTerraform(this._ignoreRegionPathLength),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_region_path_length_variable: {
        value: cdktf.stringToHclTerraform(this._ignoreRegionPathLengthVariable),
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
      omp_admin_distance_ipv4: {
        value: cdktf.numberToHclTerraform(this._ompAdminDistanceIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      omp_admin_distance_ipv4_variable: {
        value: cdktf.stringToHclTerraform(this._ompAdminDistanceIpv4Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omp_admin_distance_ipv6: {
        value: cdktf.numberToHclTerraform(this._ompAdminDistanceIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      omp_admin_distance_ipv6_variable: {
        value: cdktf.stringToHclTerraform(this._ompAdminDistanceIpv6Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_as: {
        value: cdktf.numberToHclTerraform(this._overlayAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overlay_as_variable: {
        value: cdktf.stringToHclTerraform(this._overlayAsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paths_advertised_per_prefix: {
        value: cdktf.numberToHclTerraform(this._pathsAdvertisedPerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paths_advertised_per_prefix_variable: {
        value: cdktf.stringToHclTerraform(this._pathsAdvertisedPerPrefixVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._siteTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      site_types_variable: {
        value: cdktf.stringToHclTerraform(this._siteTypesVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_gateway: {
        value: cdktf.stringToHclTerraform(this._transportGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._transportGatewayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
