// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoOspfv3FeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#description CiscoOspfv3FeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#device_types CiscoOspfv3FeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Configure OSPF area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_areas CiscoOspfv3FeatureTemplate#ipv4_areas}
  */
  readonly ipv4Areas?: CiscoOspfv3FeatureTemplateIpv4Areas[] | cdktf.IResolvable;
  /**
  * Set reference bandwidth method to assign OSPF cost
  *   - Range: `1`-`4294967`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_auto_cost_reference_bandwidth CiscoOspfv3FeatureTemplate#ipv4_auto_cost_reference_bandwidth}
  */
  readonly ipv4AutoCostReferenceBandwidth?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_auto_cost_reference_bandwidth_variable CiscoOspfv3FeatureTemplate#ipv4_auto_cost_reference_bandwidth_variable}
  */
  readonly ipv4AutoCostReferenceBandwidthVariable?: string;
  /**
  * Calculate summary route cost based on RFC 1583
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_compatible_rfc1583 CiscoOspfv3FeatureTemplate#ipv4_compatible_rfc1583}
  */
  readonly ipv4CompatibleRfc1583?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_compatible_rfc1583_variable CiscoOspfv3FeatureTemplate#ipv4_compatible_rfc1583_variable}
  */
  readonly ipv4CompatibleRfc1583Variable?: string;
  /**
  * Distribute default external route into OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_default_information_originate CiscoOspfv3FeatureTemplate#ipv4_default_information_originate}
  */
  readonly ipv4DefaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Always advertise default route
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_default_information_originate_always CiscoOspfv3FeatureTemplate#ipv4_default_information_originate_always}
  */
  readonly ipv4DefaultInformationOriginateAlways?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_default_information_originate_always_variable CiscoOspfv3FeatureTemplate#ipv4_default_information_originate_always_variable}
  */
  readonly ipv4DefaultInformationOriginateAlwaysVariable?: string;
  /**
  * Set metric used to generate default route <0..16777214>
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_default_information_originate_metric CiscoOspfv3FeatureTemplate#ipv4_default_information_originate_metric}
  */
  readonly ipv4DefaultInformationOriginateMetric?: number;
  /**
  * Set default route type
  *   - Choices: `type1`, `type2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_default_information_originate_metric_type CiscoOspfv3FeatureTemplate#ipv4_default_information_originate_metric_type}
  */
  readonly ipv4DefaultInformationOriginateMetricType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_default_information_originate_metric_type_variable CiscoOspfv3FeatureTemplate#ipv4_default_information_originate_metric_type_variable}
  */
  readonly ipv4DefaultInformationOriginateMetricTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_default_information_originate_metric_variable CiscoOspfv3FeatureTemplate#ipv4_default_information_originate_metric_variable}
  */
  readonly ipv4DefaultInformationOriginateMetricVariable?: string;
  /**
  * Distance
  *   - Range: `1`-`255`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_distance CiscoOspfv3FeatureTemplate#ipv4_distance}
  */
  readonly ipv4Distance?: number;
  /**
  * Set distance for external routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_distance_external CiscoOspfv3FeatureTemplate#ipv4_distance_external}
  */
  readonly ipv4DistanceExternal?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_distance_external_variable CiscoOspfv3FeatureTemplate#ipv4_distance_external_variable}
  */
  readonly ipv4DistanceExternalVariable?: string;
  /**
  * Set distance for inter-area routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_distance_inter_area CiscoOspfv3FeatureTemplate#ipv4_distance_inter_area}
  */
  readonly ipv4DistanceInterArea?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_distance_inter_area_variable CiscoOspfv3FeatureTemplate#ipv4_distance_inter_area_variable}
  */
  readonly ipv4DistanceInterAreaVariable?: string;
  /**
  * Set distance for intra-area routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_distance_intra_area CiscoOspfv3FeatureTemplate#ipv4_distance_intra_area}
  */
  readonly ipv4DistanceIntraArea?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_distance_intra_area_variable CiscoOspfv3FeatureTemplate#ipv4_distance_intra_area_variable}
  */
  readonly ipv4DistanceIntraAreaVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_distance_variable CiscoOspfv3FeatureTemplate#ipv4_distance_variable}
  */
  readonly ipv4DistanceVariable?: string;
  /**
  * Filter
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_filter CiscoOspfv3FeatureTemplate#ipv4_filter}
  */
  readonly ipv4Filter?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_filter_variable CiscoOspfv3FeatureTemplate#ipv4_filter_variable}
  */
  readonly ipv4FilterVariable?: string;
  /**
  * Advertise own router LSA with infinite distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_max_metric_router_lsas CiscoOspfv3FeatureTemplate#ipv4_max_metric_router_lsas}
  */
  readonly ipv4MaxMetricRouterLsas?: CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas[] | cdktf.IResolvable;
  /**
  * Policy Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_policy_name CiscoOspfv3FeatureTemplate#ipv4_policy_name}
  */
  readonly ipv4PolicyName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_policy_name_variable CiscoOspfv3FeatureTemplate#ipv4_policy_name_variable}
  */
  readonly ipv4PolicyNameVariable?: string;
  /**
  * Redistribute routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_redistributes CiscoOspfv3FeatureTemplate#ipv4_redistributes}
  */
  readonly ipv4Redistributes?: CiscoOspfv3FeatureTemplateIpv4Redistributes[] | cdktf.IResolvable;
  /**
  * Set OSPF router ID to override system IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_router_id CiscoOspfv3FeatureTemplate#ipv4_router_id}
  */
  readonly ipv4RouterId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_router_id_variable CiscoOspfv3FeatureTemplate#ipv4_router_id_variable}
  */
  readonly ipv4RouterIdVariable?: string;
  /**
  * Set delay from first change received until performing SPF calculation
  *   - Range: `1`-`600000`
  *   - Default value: `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_timers_spf_delay CiscoOspfv3FeatureTemplate#ipv4_timers_spf_delay}
  */
  readonly ipv4TimersSpfDelay?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_timers_spf_delay_variable CiscoOspfv3FeatureTemplate#ipv4_timers_spf_delay_variable}
  */
  readonly ipv4TimersSpfDelayVariable?: string;
  /**
  * Set initial hold time between consecutive SPF calculations
  *   - Range: `1`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_timers_spf_initial_hold CiscoOspfv3FeatureTemplate#ipv4_timers_spf_initial_hold}
  */
  readonly ipv4TimersSpfInitialHold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_timers_spf_initial_hold_variable CiscoOspfv3FeatureTemplate#ipv4_timers_spf_initial_hold_variable}
  */
  readonly ipv4TimersSpfInitialHoldVariable?: string;
  /**
  * Set maximum hold time between consecutive SPF calculations
  *   - Range: `1`-`600000`
  *   - Default value: `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_timers_spf_max_hold CiscoOspfv3FeatureTemplate#ipv4_timers_spf_max_hold}
  */
  readonly ipv4TimersSpfMaxHold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv4_timers_spf_max_hold_variable CiscoOspfv3FeatureTemplate#ipv4_timers_spf_max_hold_variable}
  */
  readonly ipv4TimersSpfMaxHoldVariable?: string;
  /**
  * Configure OSPF area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_areas CiscoOspfv3FeatureTemplate#ipv6_areas}
  */
  readonly ipv6Areas?: CiscoOspfv3FeatureTemplateIpv6Areas[] | cdktf.IResolvable;
  /**
  * Set reference bandwidth method to assign OSPF cost
  *   - Range: `1`-`4294967`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_auto_cost_reference_bandwidth CiscoOspfv3FeatureTemplate#ipv6_auto_cost_reference_bandwidth}
  */
  readonly ipv6AutoCostReferenceBandwidth?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_auto_cost_reference_bandwidth_variable CiscoOspfv3FeatureTemplate#ipv6_auto_cost_reference_bandwidth_variable}
  */
  readonly ipv6AutoCostReferenceBandwidthVariable?: string;
  /**
  * Calculate summary route cost based on RFC 1583
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_compatible_rfc1583 CiscoOspfv3FeatureTemplate#ipv6_compatible_rfc1583}
  */
  readonly ipv6CompatibleRfc1583?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_compatible_rfc1583_variable CiscoOspfv3FeatureTemplate#ipv6_compatible_rfc1583_variable}
  */
  readonly ipv6CompatibleRfc1583Variable?: string;
  /**
  * Distribute default external route into OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_default_information_originate CiscoOspfv3FeatureTemplate#ipv6_default_information_originate}
  */
  readonly ipv6DefaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Always advertise default route
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_default_information_originate_always CiscoOspfv3FeatureTemplate#ipv6_default_information_originate_always}
  */
  readonly ipv6DefaultInformationOriginateAlways?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_default_information_originate_always_variable CiscoOspfv3FeatureTemplate#ipv6_default_information_originate_always_variable}
  */
  readonly ipv6DefaultInformationOriginateAlwaysVariable?: string;
  /**
  * Set metric used to generate default route <0..16777214>
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_default_information_originate_metric CiscoOspfv3FeatureTemplate#ipv6_default_information_originate_metric}
  */
  readonly ipv6DefaultInformationOriginateMetric?: number;
  /**
  * Set default route type
  *   - Choices: `type1`, `type2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_default_information_originate_metric_type CiscoOspfv3FeatureTemplate#ipv6_default_information_originate_metric_type}
  */
  readonly ipv6DefaultInformationOriginateMetricType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_default_information_originate_metric_type_variable CiscoOspfv3FeatureTemplate#ipv6_default_information_originate_metric_type_variable}
  */
  readonly ipv6DefaultInformationOriginateMetricTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_default_information_originate_metric_variable CiscoOspfv3FeatureTemplate#ipv6_default_information_originate_metric_variable}
  */
  readonly ipv6DefaultInformationOriginateMetricVariable?: string;
  /**
  * Distance
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_distance CiscoOspfv3FeatureTemplate#ipv6_distance}
  */
  readonly ipv6Distance?: number;
  /**
  * Set distance for external routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_distance_external CiscoOspfv3FeatureTemplate#ipv6_distance_external}
  */
  readonly ipv6DistanceExternal?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_distance_external_variable CiscoOspfv3FeatureTemplate#ipv6_distance_external_variable}
  */
  readonly ipv6DistanceExternalVariable?: string;
  /**
  * Set distance for inter-area routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_distance_inter_area CiscoOspfv3FeatureTemplate#ipv6_distance_inter_area}
  */
  readonly ipv6DistanceInterArea?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_distance_inter_area_variable CiscoOspfv3FeatureTemplate#ipv6_distance_inter_area_variable}
  */
  readonly ipv6DistanceInterAreaVariable?: string;
  /**
  * Set distance for intra-area routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_distance_intra_area CiscoOspfv3FeatureTemplate#ipv6_distance_intra_area}
  */
  readonly ipv6DistanceIntraArea?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_distance_intra_area_variable CiscoOspfv3FeatureTemplate#ipv6_distance_intra_area_variable}
  */
  readonly ipv6DistanceIntraAreaVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_distance_variable CiscoOspfv3FeatureTemplate#ipv6_distance_variable}
  */
  readonly ipv6DistanceVariable?: string;
  /**
  * Filter
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_filter CiscoOspfv3FeatureTemplate#ipv6_filter}
  */
  readonly ipv6Filter?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_filter_variable CiscoOspfv3FeatureTemplate#ipv6_filter_variable}
  */
  readonly ipv6FilterVariable?: string;
  /**
  * Advertise own router LSA with infinite distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_max_metric_router_lsas CiscoOspfv3FeatureTemplate#ipv6_max_metric_router_lsas}
  */
  readonly ipv6MaxMetricRouterLsas?: CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas[] | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_policy_name CiscoOspfv3FeatureTemplate#ipv6_policy_name}
  */
  readonly ipv6PolicyName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_policy_name_variable CiscoOspfv3FeatureTemplate#ipv6_policy_name_variable}
  */
  readonly ipv6PolicyNameVariable?: string;
  /**
  * Redistribute routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_redistributes CiscoOspfv3FeatureTemplate#ipv6_redistributes}
  */
  readonly ipv6Redistributes?: CiscoOspfv3FeatureTemplateIpv6Redistributes[] | cdktf.IResolvable;
  /**
  * Set OSPF router ID to override system IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_router_id CiscoOspfv3FeatureTemplate#ipv6_router_id}
  */
  readonly ipv6RouterId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_router_id_variable CiscoOspfv3FeatureTemplate#ipv6_router_id_variable}
  */
  readonly ipv6RouterIdVariable?: string;
  /**
  * Set delay from first change received until performing SPF calculation
  *   - Range: `0`-`600000`
  *   - Default value: `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_timers_spf_delay CiscoOspfv3FeatureTemplate#ipv6_timers_spf_delay}
  */
  readonly ipv6TimersSpfDelay?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_timers_spf_delay_variable CiscoOspfv3FeatureTemplate#ipv6_timers_spf_delay_variable}
  */
  readonly ipv6TimersSpfDelayVariable?: string;
  /**
  * Set initial hold time between consecutive SPF calculations
  *   - Range: `0`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_timers_spf_initial_hold CiscoOspfv3FeatureTemplate#ipv6_timers_spf_initial_hold}
  */
  readonly ipv6TimersSpfInitialHold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_timers_spf_initial_hold_variable CiscoOspfv3FeatureTemplate#ipv6_timers_spf_initial_hold_variable}
  */
  readonly ipv6TimersSpfInitialHoldVariable?: string;
  /**
  * Set maximum hold time between consecutive SPF calculations
  *   - Range: `0`-`600000`
  *   - Default value: `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_timers_spf_max_hold CiscoOspfv3FeatureTemplate#ipv6_timers_spf_max_hold}
  */
  readonly ipv6TimersSpfMaxHold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipv6_timers_spf_max_hold_variable CiscoOspfv3FeatureTemplate#ipv6_timers_spf_max_hold_variable}
  */
  readonly ipv6TimersSpfMaxHoldVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#name CiscoOspfv3FeatureTemplate#name}
  */
  readonly name: string;
}
export interface CiscoOspfv3FeatureTemplateIpv4AreasInterfaces {
  /**
  * Set OSPF interface authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#authentication_key CiscoOspfv3FeatureTemplate#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#authentication_key_variable CiscoOspfv3FeatureTemplate#authentication_key_variable}
  */
  readonly authenticationKeyVariable?: string;
  /**
  * Set OSPF interface authentication type
  *   - Choices: `md5`, `sha1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#authentication_type CiscoOspfv3FeatureTemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#authentication_type_variable CiscoOspfv3FeatureTemplate#authentication_type_variable}
  */
  readonly authenticationTypeVariable?: string;
  /**
  * Set cost of OSPF interface
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#cost CiscoOspfv3FeatureTemplate#cost}
  */
  readonly cost?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#cost_variable CiscoOspfv3FeatureTemplate#cost_variable}
  */
  readonly costVariable?: string;
  /**
  * Set interval after which neighbor is declared to be down
  *   - Range: `1`-`65535`
  *   - Default value: `40`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#dead_interval CiscoOspfv3FeatureTemplate#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#dead_interval_variable CiscoOspfv3FeatureTemplate#dead_interval_variable}
  */
  readonly deadIntervalVariable?: string;
  /**
  * Set interval between OSPF hello packets
  *   - Range: `1`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#hello_interval CiscoOspfv3FeatureTemplate#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#hello_interval_variable CiscoOspfv3FeatureTemplate#hello_interval_variable}
  */
  readonly helloIntervalVariable?: string;
  /**
  * Set OSPF interface authentication IPSec SPI, range 256..4294967295
  *   - Range: `256`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipsec_spi CiscoOspfv3FeatureTemplate#ipsec_spi}
  */
  readonly ipsecSpi?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipsec_spi_variable CiscoOspfv3FeatureTemplate#ipsec_spi_variable}
  */
  readonly ipsecSpiVariable?: string;
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#name CiscoOspfv3FeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#name_variable CiscoOspfv3FeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Set the OSPF network type
  *   - Choices: `broadcast`, `point-to-point`, `non-broadcast`, `point-to-multipoint`
  *   - Default value: `broadcast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#network CiscoOspfv3FeatureTemplate#network}
  */
  readonly network?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#network_variable CiscoOspfv3FeatureTemplate#network_variable}
  */
  readonly networkVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the interface to advertise its address, but not to actively run OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#passive_interface CiscoOspfv3FeatureTemplate#passive_interface}
  */
  readonly passiveInterface?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#passive_interface_variable CiscoOspfv3FeatureTemplate#passive_interface_variable}
  */
  readonly passiveInterfaceVariable?: string;
  /**
  * Set time between retransmitting LSAs
  *   - Range: `1`-`65535`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#retransmit_interval CiscoOspfv3FeatureTemplate#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#retransmit_interval_variable CiscoOspfv3FeatureTemplate#retransmit_interval_variable}
  */
  readonly retransmitIntervalVariable?: string;
}

export function ciscoOspfv3FeatureTemplateIpv4AreasInterfacesToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4AreasInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    authentication_key_variable: cdktf.stringToTerraform(struct!.authenticationKeyVariable),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    authentication_type_variable: cdktf.stringToTerraform(struct!.authenticationTypeVariable),
    cost: cdktf.numberToTerraform(struct!.cost),
    cost_variable: cdktf.stringToTerraform(struct!.costVariable),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    dead_interval_variable: cdktf.stringToTerraform(struct!.deadIntervalVariable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    hello_interval_variable: cdktf.stringToTerraform(struct!.helloIntervalVariable),
    ipsec_spi: cdktf.numberToTerraform(struct!.ipsecSpi),
    ipsec_spi_variable: cdktf.stringToTerraform(struct!.ipsecSpiVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    network: cdktf.stringToTerraform(struct!.network),
    network_variable: cdktf.stringToTerraform(struct!.networkVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    passive_interface: cdktf.booleanToTerraform(struct!.passiveInterface),
    passive_interface_variable: cdktf.stringToTerraform(struct!.passiveInterfaceVariable),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    retransmit_interval_variable: cdktf.stringToTerraform(struct!.retransmitIntervalVariable),
  }
}


export function ciscoOspfv3FeatureTemplateIpv4AreasInterfacesToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4AreasInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationTypeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cost_variable: {
      value: cdktf.stringToHclTerraform(struct!.costVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.deadIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.helloIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_spi: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_spi_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSpiVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive_interface: {
      value: cdktf.booleanToHclTerraform(struct!.passiveInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.passiveInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.retransmitIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv4AreasInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv4AreasInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._authenticationKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyVariable = this._authenticationKeyVariable;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._authenticationTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypeVariable = this._authenticationTypeVariable;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._costVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.costVariable = this._costVariable;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._deadIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadIntervalVariable = this._deadIntervalVariable;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._helloIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalVariable = this._helloIntervalVariable;
    }
    if (this._ipsecSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSpi = this._ipsecSpi;
    }
    if (this._ipsecSpiVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSpiVariable = this._ipsecSpiVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkVariable = this._networkVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._passiveInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveInterface = this._passiveInterface;
    }
    if (this._passiveInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveInterfaceVariable = this._passiveInterfaceVariable;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._retransmitIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitIntervalVariable = this._retransmitIntervalVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv4AreasInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
      this._authenticationKeyVariable = undefined;
      this._authenticationType = undefined;
      this._authenticationTypeVariable = undefined;
      this._cost = undefined;
      this._costVariable = undefined;
      this._deadInterval = undefined;
      this._deadIntervalVariable = undefined;
      this._helloInterval = undefined;
      this._helloIntervalVariable = undefined;
      this._ipsecSpi = undefined;
      this._ipsecSpiVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._network = undefined;
      this._networkVariable = undefined;
      this._optional = undefined;
      this._passiveInterface = undefined;
      this._passiveInterfaceVariable = undefined;
      this._retransmitInterval = undefined;
      this._retransmitIntervalVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
      this._authenticationKeyVariable = value.authenticationKeyVariable;
      this._authenticationType = value.authenticationType;
      this._authenticationTypeVariable = value.authenticationTypeVariable;
      this._cost = value.cost;
      this._costVariable = value.costVariable;
      this._deadInterval = value.deadInterval;
      this._deadIntervalVariable = value.deadIntervalVariable;
      this._helloInterval = value.helloInterval;
      this._helloIntervalVariable = value.helloIntervalVariable;
      this._ipsecSpi = value.ipsecSpi;
      this._ipsecSpiVariable = value.ipsecSpiVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._network = value.network;
      this._networkVariable = value.networkVariable;
      this._optional = value.optional;
      this._passiveInterface = value.passiveInterface;
      this._passiveInterfaceVariable = value.passiveInterfaceVariable;
      this._retransmitInterval = value.retransmitInterval;
      this._retransmitIntervalVariable = value.retransmitIntervalVariable;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_key_variable - computed: false, optional: true, required: false
  private _authenticationKeyVariable?: string; 
  public get authenticationKeyVariable() {
    return this.getStringAttribute('authentication_key_variable');
  }
  public set authenticationKeyVariable(value: string) {
    this._authenticationKeyVariable = value;
  }
  public resetAuthenticationKeyVariable() {
    this._authenticationKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyVariableInput() {
    return this._authenticationKeyVariable;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // authentication_type_variable - computed: false, optional: true, required: false
  private _authenticationTypeVariable?: string; 
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }
  public set authenticationTypeVariable(value: string) {
    this._authenticationTypeVariable = value;
  }
  public resetAuthenticationTypeVariable() {
    this._authenticationTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeVariableInput() {
    return this._authenticationTypeVariable;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // cost_variable - computed: false, optional: true, required: false
  private _costVariable?: string; 
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }
  public set costVariable(value: string) {
    this._costVariable = value;
  }
  public resetCostVariable() {
    this._costVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costVariableInput() {
    return this._costVariable;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // dead_interval_variable - computed: false, optional: true, required: false
  private _deadIntervalVariable?: string; 
  public get deadIntervalVariable() {
    return this.getStringAttribute('dead_interval_variable');
  }
  public set deadIntervalVariable(value: string) {
    this._deadIntervalVariable = value;
  }
  public resetDeadIntervalVariable() {
    this._deadIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalVariableInput() {
    return this._deadIntervalVariable;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // hello_interval_variable - computed: false, optional: true, required: false
  private _helloIntervalVariable?: string; 
  public get helloIntervalVariable() {
    return this.getStringAttribute('hello_interval_variable');
  }
  public set helloIntervalVariable(value: string) {
    this._helloIntervalVariable = value;
  }
  public resetHelloIntervalVariable() {
    this._helloIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalVariableInput() {
    return this._helloIntervalVariable;
  }

  // ipsec_spi - computed: false, optional: true, required: false
  private _ipsecSpi?: number; 
  public get ipsecSpi() {
    return this.getNumberAttribute('ipsec_spi');
  }
  public set ipsecSpi(value: number) {
    this._ipsecSpi = value;
  }
  public resetIpsecSpi() {
    this._ipsecSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSpiInput() {
    return this._ipsecSpi;
  }

  // ipsec_spi_variable - computed: false, optional: true, required: false
  private _ipsecSpiVariable?: string; 
  public get ipsecSpiVariable() {
    return this.getStringAttribute('ipsec_spi_variable');
  }
  public set ipsecSpiVariable(value: string) {
    this._ipsecSpiVariable = value;
  }
  public resetIpsecSpiVariable() {
    this._ipsecSpiVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSpiVariableInput() {
    return this._ipsecSpiVariable;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_variable - computed: false, optional: true, required: false
  private _networkVariable?: string; 
  public get networkVariable() {
    return this.getStringAttribute('network_variable');
  }
  public set networkVariable(value: string) {
    this._networkVariable = value;
  }
  public resetNetworkVariable() {
    this._networkVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkVariableInput() {
    return this._networkVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // passive_interface - computed: false, optional: true, required: false
  private _passiveInterface?: boolean | cdktf.IResolvable; 
  public get passiveInterface() {
    return this.getBooleanAttribute('passive_interface');
  }
  public set passiveInterface(value: boolean | cdktf.IResolvable) {
    this._passiveInterface = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface;
  }

  // passive_interface_variable - computed: false, optional: true, required: false
  private _passiveInterfaceVariable?: string; 
  public get passiveInterfaceVariable() {
    return this.getStringAttribute('passive_interface_variable');
  }
  public set passiveInterfaceVariable(value: string) {
    this._passiveInterfaceVariable = value;
  }
  public resetPassiveInterfaceVariable() {
    this._passiveInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceVariableInput() {
    return this._passiveInterfaceVariable;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // retransmit_interval_variable - computed: false, optional: true, required: false
  private _retransmitIntervalVariable?: string; 
  public get retransmitIntervalVariable() {
    return this.getStringAttribute('retransmit_interval_variable');
  }
  public set retransmitIntervalVariable(value: string) {
    this._retransmitIntervalVariable = value;
  }
  public resetRetransmitIntervalVariable() {
    this._retransmitIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalVariableInput() {
    return this._retransmitIntervalVariable;
  }
}

export class CiscoOspfv3FeatureTemplateIpv4AreasInterfacesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv4AreasInterfaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv4AreasInterfacesOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv4AreasInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv4AreasRanges {
  /**
  * Set Matching Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#address CiscoOspfv3FeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#address_variable CiscoOspfv3FeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Set cost for this range
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#cost CiscoOspfv3FeatureTemplate#cost}
  */
  readonly cost?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#cost_variable CiscoOspfv3FeatureTemplate#cost_variable}
  */
  readonly costVariable?: string;
  /**
  * Do not advertise this range
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#no_advertise CiscoOspfv3FeatureTemplate#no_advertise}
  */
  readonly noAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#no_advertise_variable CiscoOspfv3FeatureTemplate#no_advertise_variable}
  */
  readonly noAdvertiseVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoOspfv3FeatureTemplateIpv4AreasRangesToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4AreasRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    cost: cdktf.numberToTerraform(struct!.cost),
    cost_variable: cdktf.stringToTerraform(struct!.costVariable),
    no_advertise: cdktf.booleanToTerraform(struct!.noAdvertise),
    no_advertise_variable: cdktf.stringToTerraform(struct!.noAdvertiseVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoOspfv3FeatureTemplateIpv4AreasRangesToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4AreasRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cost_variable: {
      value: cdktf.stringToHclTerraform(struct!.costVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_advertise: {
      value: cdktf.booleanToHclTerraform(struct!.noAdvertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_advertise_variable: {
      value: cdktf.stringToHclTerraform(struct!.noAdvertiseVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv4AreasRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv4AreasRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._costVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.costVariable = this._costVariable;
    }
    if (this._noAdvertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdvertise = this._noAdvertise;
    }
    if (this._noAdvertiseVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdvertiseVariable = this._noAdvertiseVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv4AreasRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._cost = undefined;
      this._costVariable = undefined;
      this._noAdvertise = undefined;
      this._noAdvertiseVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._cost = value.cost;
      this._costVariable = value.costVariable;
      this._noAdvertise = value.noAdvertise;
      this._noAdvertiseVariable = value.noAdvertiseVariable;
      this._optional = value.optional;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // cost_variable - computed: false, optional: true, required: false
  private _costVariable?: string; 
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }
  public set costVariable(value: string) {
    this._costVariable = value;
  }
  public resetCostVariable() {
    this._costVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costVariableInput() {
    return this._costVariable;
  }

  // no_advertise - computed: false, optional: true, required: false
  private _noAdvertise?: boolean | cdktf.IResolvable; 
  public get noAdvertise() {
    return this.getBooleanAttribute('no_advertise');
  }
  public set noAdvertise(value: boolean | cdktf.IResolvable) {
    this._noAdvertise = value;
  }
  public resetNoAdvertise() {
    this._noAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdvertiseInput() {
    return this._noAdvertise;
  }

  // no_advertise_variable - computed: false, optional: true, required: false
  private _noAdvertiseVariable?: string; 
  public get noAdvertiseVariable() {
    return this.getStringAttribute('no_advertise_variable');
  }
  public set noAdvertiseVariable(value: string) {
    this._noAdvertiseVariable = value;
  }
  public resetNoAdvertiseVariable() {
    this._noAdvertiseVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdvertiseVariableInput() {
    return this._noAdvertiseVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoOspfv3FeatureTemplateIpv4AreasRangesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv4AreasRanges[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv4AreasRangesOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv4AreasRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv4Areas {
  /**
  * Set OSPF area number
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#area_number CiscoOspfv3FeatureTemplate#area_number}
  */
  readonly areaNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#area_number_variable CiscoOspfv3FeatureTemplate#area_number_variable}
  */
  readonly areaNumberVariable?: string;
  /**
  * Set OSPF interface parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#interfaces CiscoOspfv3FeatureTemplate#interfaces}
  */
  readonly interfaces?: CiscoOspfv3FeatureTemplateIpv4AreasInterfaces[] | cdktf.IResolvable;
  /**
  * Area Type Normal
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#normal CiscoOspfv3FeatureTemplate#normal}
  */
  readonly normal?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#normal_variable CiscoOspfv3FeatureTemplate#normal_variable}
  */
  readonly normalVariable?: string;
  /**
  * NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#nssa CiscoOspfv3FeatureTemplate#nssa}
  */
  readonly nssa?: boolean | cdktf.IResolvable;
  /**
  * Do not inject interarea routes into NSSA
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#nssa_no_summary CiscoOspfv3FeatureTemplate#nssa_no_summary}
  */
  readonly nssaNoSummary?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#nssa_no_summary_variable CiscoOspfv3FeatureTemplate#nssa_no_summary_variable}
  */
  readonly nssaNoSummaryVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Summarize OSPF routes at an area boundary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ranges CiscoOspfv3FeatureTemplate#ranges}
  */
  readonly ranges?: CiscoOspfv3FeatureTemplateIpv4AreasRanges[] | cdktf.IResolvable;
  /**
  * Stub area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#stub CiscoOspfv3FeatureTemplate#stub}
  */
  readonly stub?: boolean | cdktf.IResolvable;
  /**
  * Do not inject interarea routes into stub
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#stub_no_summary CiscoOspfv3FeatureTemplate#stub_no_summary}
  */
  readonly stubNoSummary?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#stub_no_summary_variable CiscoOspfv3FeatureTemplate#stub_no_summary_variable}
  */
  readonly stubNoSummaryVariable?: string;
  /**
  * Always Translate LSAs on this ABR
  *   - Choices: `always`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#translate CiscoOspfv3FeatureTemplate#translate}
  */
  readonly translate?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#translate_variable CiscoOspfv3FeatureTemplate#translate_variable}
  */
  readonly translateVariable?: string;
}

export function ciscoOspfv3FeatureTemplateIpv4AreasToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4Areas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_number: cdktf.numberToTerraform(struct!.areaNumber),
    area_number_variable: cdktf.stringToTerraform(struct!.areaNumberVariable),
    interfaces: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv4AreasInterfacesToTerraform, false)(struct!.interfaces),
    normal: cdktf.booleanToTerraform(struct!.normal),
    normal_variable: cdktf.stringToTerraform(struct!.normalVariable),
    nssa: cdktf.booleanToTerraform(struct!.nssa),
    nssa_no_summary: cdktf.booleanToTerraform(struct!.nssaNoSummary),
    nssa_no_summary_variable: cdktf.stringToTerraform(struct!.nssaNoSummaryVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    ranges: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv4AreasRangesToTerraform, false)(struct!.ranges),
    stub: cdktf.booleanToTerraform(struct!.stub),
    stub_no_summary: cdktf.booleanToTerraform(struct!.stubNoSummary),
    stub_no_summary_variable: cdktf.stringToTerraform(struct!.stubNoSummaryVariable),
    translate: cdktf.stringToTerraform(struct!.translate),
    translate_variable: cdktf.stringToTerraform(struct!.translateVariable),
  }
}


export function ciscoOspfv3FeatureTemplateIpv4AreasToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4Areas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_number: {
      value: cdktf.numberToHclTerraform(struct!.areaNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    area_number_variable: {
      value: cdktf.stringToHclTerraform(struct!.areaNumberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv4AreasInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoOspfv3FeatureTemplateIpv4AreasInterfacesList",
    },
    normal: {
      value: cdktf.booleanToHclTerraform(struct!.normal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_variable: {
      value: cdktf.stringToHclTerraform(struct!.normalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa: {
      value: cdktf.booleanToHclTerraform(struct!.nssa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa_no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.nssaNoSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa_no_summary_variable: {
      value: cdktf.stringToHclTerraform(struct!.nssaNoSummaryVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ranges: {
      value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv4AreasRangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoOspfv3FeatureTemplateIpv4AreasRangesList",
    },
    stub: {
      value: cdktf.booleanToHclTerraform(struct!.stub),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stub_no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.stubNoSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stub_no_summary_variable: {
      value: cdktf.stringToHclTerraform(struct!.stubNoSummaryVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate: {
      value: cdktf.stringToHclTerraform(struct!.translate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_variable: {
      value: cdktf.stringToHclTerraform(struct!.translateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv4AreasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv4Areas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNumber = this._areaNumber;
    }
    if (this._areaNumberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNumberVariable = this._areaNumberVariable;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._normal !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal;
    }
    if (this._normalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalVariable = this._normalVariable;
    }
    if (this._nssa !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssa = this._nssa;
    }
    if (this._nssaNoSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaNoSummary = this._nssaNoSummary;
    }
    if (this._nssaNoSummaryVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaNoSummaryVariable = this._nssaNoSummaryVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    if (this._stub !== undefined) {
      hasAnyValues = true;
      internalValueResult.stub = this._stub;
    }
    if (this._stubNoSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubNoSummary = this._stubNoSummary;
    }
    if (this._stubNoSummaryVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubNoSummaryVariable = this._stubNoSummaryVariable;
    }
    if (this._translate !== undefined) {
      hasAnyValues = true;
      internalValueResult.translate = this._translate;
    }
    if (this._translateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateVariable = this._translateVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv4Areas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaNumber = undefined;
      this._areaNumberVariable = undefined;
      this._interfaces.internalValue = undefined;
      this._normal = undefined;
      this._normalVariable = undefined;
      this._nssa = undefined;
      this._nssaNoSummary = undefined;
      this._nssaNoSummaryVariable = undefined;
      this._optional = undefined;
      this._ranges.internalValue = undefined;
      this._stub = undefined;
      this._stubNoSummary = undefined;
      this._stubNoSummaryVariable = undefined;
      this._translate = undefined;
      this._translateVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaNumber = value.areaNumber;
      this._areaNumberVariable = value.areaNumberVariable;
      this._interfaces.internalValue = value.interfaces;
      this._normal = value.normal;
      this._normalVariable = value.normalVariable;
      this._nssa = value.nssa;
      this._nssaNoSummary = value.nssaNoSummary;
      this._nssaNoSummaryVariable = value.nssaNoSummaryVariable;
      this._optional = value.optional;
      this._ranges.internalValue = value.ranges;
      this._stub = value.stub;
      this._stubNoSummary = value.stubNoSummary;
      this._stubNoSummaryVariable = value.stubNoSummaryVariable;
      this._translate = value.translate;
      this._translateVariable = value.translateVariable;
    }
  }

  // area_number - computed: false, optional: true, required: false
  private _areaNumber?: number; 
  public get areaNumber() {
    return this.getNumberAttribute('area_number');
  }
  public set areaNumber(value: number) {
    this._areaNumber = value;
  }
  public resetAreaNumber() {
    this._areaNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNumberInput() {
    return this._areaNumber;
  }

  // area_number_variable - computed: false, optional: true, required: false
  private _areaNumberVariable?: string; 
  public get areaNumberVariable() {
    return this.getStringAttribute('area_number_variable');
  }
  public set areaNumberVariable(value: string) {
    this._areaNumberVariable = value;
  }
  public resetAreaNumberVariable() {
    this._areaNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNumberVariableInput() {
    return this._areaNumberVariable;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new CiscoOspfv3FeatureTemplateIpv4AreasInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: CiscoOspfv3FeatureTemplateIpv4AreasInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // normal - computed: false, optional: true, required: false
  private _normal?: boolean | cdktf.IResolvable; 
  public get normal() {
    return this.getBooleanAttribute('normal');
  }
  public set normal(value: boolean | cdktf.IResolvable) {
    this._normal = value;
  }
  public resetNormal() {
    this._normal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal;
  }

  // normal_variable - computed: false, optional: true, required: false
  private _normalVariable?: string; 
  public get normalVariable() {
    return this.getStringAttribute('normal_variable');
  }
  public set normalVariable(value: string) {
    this._normalVariable = value;
  }
  public resetNormalVariable() {
    this._normalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalVariableInput() {
    return this._normalVariable;
  }

  // nssa - computed: false, optional: true, required: false
  private _nssa?: boolean | cdktf.IResolvable; 
  public get nssa() {
    return this.getBooleanAttribute('nssa');
  }
  public set nssa(value: boolean | cdktf.IResolvable) {
    this._nssa = value;
  }
  public resetNssa() {
    this._nssa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa;
  }

  // nssa_no_summary - computed: false, optional: true, required: false
  private _nssaNoSummary?: boolean | cdktf.IResolvable; 
  public get nssaNoSummary() {
    return this.getBooleanAttribute('nssa_no_summary');
  }
  public set nssaNoSummary(value: boolean | cdktf.IResolvable) {
    this._nssaNoSummary = value;
  }
  public resetNssaNoSummary() {
    this._nssaNoSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaNoSummaryInput() {
    return this._nssaNoSummary;
  }

  // nssa_no_summary_variable - computed: false, optional: true, required: false
  private _nssaNoSummaryVariable?: string; 
  public get nssaNoSummaryVariable() {
    return this.getStringAttribute('nssa_no_summary_variable');
  }
  public set nssaNoSummaryVariable(value: string) {
    this._nssaNoSummaryVariable = value;
  }
  public resetNssaNoSummaryVariable() {
    this._nssaNoSummaryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaNoSummaryVariableInput() {
    return this._nssaNoSummaryVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new CiscoOspfv3FeatureTemplateIpv4AreasRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: CiscoOspfv3FeatureTemplateIpv4AreasRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }

  // stub - computed: false, optional: true, required: false
  private _stub?: boolean | cdktf.IResolvable; 
  public get stub() {
    return this.getBooleanAttribute('stub');
  }
  public set stub(value: boolean | cdktf.IResolvable) {
    this._stub = value;
  }
  public resetStub() {
    this._stub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub;
  }

  // stub_no_summary - computed: false, optional: true, required: false
  private _stubNoSummary?: boolean | cdktf.IResolvable; 
  public get stubNoSummary() {
    return this.getBooleanAttribute('stub_no_summary');
  }
  public set stubNoSummary(value: boolean | cdktf.IResolvable) {
    this._stubNoSummary = value;
  }
  public resetStubNoSummary() {
    this._stubNoSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubNoSummaryInput() {
    return this._stubNoSummary;
  }

  // stub_no_summary_variable - computed: false, optional: true, required: false
  private _stubNoSummaryVariable?: string; 
  public get stubNoSummaryVariable() {
    return this.getStringAttribute('stub_no_summary_variable');
  }
  public set stubNoSummaryVariable(value: string) {
    this._stubNoSummaryVariable = value;
  }
  public resetStubNoSummaryVariable() {
    this._stubNoSummaryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubNoSummaryVariableInput() {
    return this._stubNoSummaryVariable;
  }

  // translate - computed: false, optional: true, required: false
  private _translate?: string; 
  public get translate() {
    return this.getStringAttribute('translate');
  }
  public set translate(value: string) {
    this._translate = value;
  }
  public resetTranslate() {
    this._translate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateInput() {
    return this._translate;
  }

  // translate_variable - computed: false, optional: true, required: false
  private _translateVariable?: string; 
  public get translateVariable() {
    return this.getStringAttribute('translate_variable');
  }
  public set translateVariable(value: string) {
    this._translateVariable = value;
  }
  public resetTranslateVariable() {
    this._translateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateVariableInput() {
    return this._translateVariable;
  }
}

export class CiscoOspfv3FeatureTemplateIpv4AreasList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv4Areas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv4AreasOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv4AreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas {
  /**
  * Set the router LSA advertisement type
  *   - Choices: `on-startup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ad_type CiscoOspfv3FeatureTemplate#ad_type}
  */
  readonly adType?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set how long to advertise maximum metric after router starts up
  *   - Range: `5`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#time CiscoOspfv3FeatureTemplate#time}
  */
  readonly time?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#time_variable CiscoOspfv3FeatureTemplate#time_variable}
  */
  readonly timeVariable?: string;
}

export function ciscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_type: cdktf.stringToTerraform(struct!.adType),
    optional: cdktf.booleanToTerraform(struct!.optional),
    time: cdktf.numberToTerraform(struct!.time),
    time_variable: cdktf.stringToTerraform(struct!.timeVariable),
  }
}


export function ciscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_type: {
      value: cdktf.stringToHclTerraform(struct!.adType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_variable: {
      value: cdktf.stringToHclTerraform(struct!.timeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adType = this._adType;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._timeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeVariable = this._timeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adType = undefined;
      this._optional = undefined;
      this._time = undefined;
      this._timeVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adType = value.adType;
      this._optional = value.optional;
      this._time = value.time;
      this._timeVariable = value.timeVariable;
    }
  }

  // ad_type - computed: false, optional: true, required: false
  private _adType?: string; 
  public get adType() {
    return this.getStringAttribute('ad_type');
  }
  public set adType(value: string) {
    this._adType = value;
  }
  public resetAdType() {
    this._adType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adTypeInput() {
    return this._adType;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // time_variable - computed: false, optional: true, required: false
  private _timeVariable?: string; 
  public get timeVariable() {
    return this.getStringAttribute('time_variable');
  }
  public set timeVariable(value: string) {
    this._timeVariable = value;
  }
  public resetTimeVariable() {
    this._timeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeVariableInput() {
    return this._timeVariable;
  }
}

export class CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv4Redistributes {
  /**
  * Enable NAT DIA for redistributed routes
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#nat_dia CiscoOspfv3FeatureTemplate#nat_dia}
  */
  readonly natDia?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#nat_dia_variable CiscoOspfv3FeatureTemplate#nat_dia_variable}
  */
  readonly natDiaVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the protocol
  *   - Choices: `bgp`, `connected`, `eigrp`, `isis`, `lisp`, `nat-route`, `omp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#protocol CiscoOspfv3FeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#protocol_variable CiscoOspfv3FeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Set route policy to apply to redistributed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#route_policy CiscoOspfv3FeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#route_policy_variable CiscoOspfv3FeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
}

export function ciscoOspfv3FeatureTemplateIpv4RedistributesToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4Redistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_dia: cdktf.booleanToTerraform(struct!.natDia),
    nat_dia_variable: cdktf.stringToTerraform(struct!.natDiaVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    route_policy_variable: cdktf.stringToTerraform(struct!.routePolicyVariable),
  }
}


export function ciscoOspfv3FeatureTemplateIpv4RedistributesToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv4Redistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_dia: {
      value: cdktf.booleanToHclTerraform(struct!.natDia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_dia_variable: {
      value: cdktf.stringToHclTerraform(struct!.natDiaVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv4RedistributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv4Redistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natDia !== undefined) {
      hasAnyValues = true;
      internalValueResult.natDia = this._natDia;
    }
    if (this._natDiaVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natDiaVariable = this._natDiaVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routePolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyVariable = this._routePolicyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv4Redistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natDia = undefined;
      this._natDiaVariable = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
      this._routePolicyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natDia = value.natDia;
      this._natDiaVariable = value.natDiaVariable;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
      this._routePolicyVariable = value.routePolicyVariable;
    }
  }

  // nat_dia - computed: false, optional: true, required: false
  private _natDia?: boolean | cdktf.IResolvable; 
  public get natDia() {
    return this.getBooleanAttribute('nat_dia');
  }
  public set natDia(value: boolean | cdktf.IResolvable) {
    this._natDia = value;
  }
  public resetNatDia() {
    this._natDia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDiaInput() {
    return this._natDia;
  }

  // nat_dia_variable - computed: false, optional: true, required: false
  private _natDiaVariable?: string; 
  public get natDiaVariable() {
    return this.getStringAttribute('nat_dia_variable');
  }
  public set natDiaVariable(value: string) {
    this._natDiaVariable = value;
  }
  public resetNatDiaVariable() {
    this._natDiaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDiaVariableInput() {
    return this._natDiaVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // route_policy_variable - computed: false, optional: true, required: false
  private _routePolicyVariable?: string; 
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
  public set routePolicyVariable(value: string) {
    this._routePolicyVariable = value;
  }
  public resetRoutePolicyVariable() {
    this._routePolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyVariableInput() {
    return this._routePolicyVariable;
  }
}

export class CiscoOspfv3FeatureTemplateIpv4RedistributesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv4Redistributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv4RedistributesOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv4RedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv6AreasInterfaces {
  /**
  * Set OSPF interface authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#authentication_key CiscoOspfv3FeatureTemplate#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#authentication_key_variable CiscoOspfv3FeatureTemplate#authentication_key_variable}
  */
  readonly authenticationKeyVariable?: string;
  /**
  * Set OSPF interface authentication type
  *   - Choices: `md5`, `sha1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#authentication_type CiscoOspfv3FeatureTemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#authentication_type_variable CiscoOspfv3FeatureTemplate#authentication_type_variable}
  */
  readonly authenticationTypeVariable?: string;
  /**
  * Set cost of OSPF interface
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#cost CiscoOspfv3FeatureTemplate#cost}
  */
  readonly cost?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#cost_variable CiscoOspfv3FeatureTemplate#cost_variable}
  */
  readonly costVariable?: string;
  /**
  * Set interval after which neighbor is declared to be down
  *   - Range: `1`-`65535`
  *   - Default value: `40`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#dead_interval CiscoOspfv3FeatureTemplate#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#dead_interval_variable CiscoOspfv3FeatureTemplate#dead_interval_variable}
  */
  readonly deadIntervalVariable?: string;
  /**
  * Set interval between OSPF hello packets
  *   - Range: `1`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#hello_interval CiscoOspfv3FeatureTemplate#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#hello_interval_variable CiscoOspfv3FeatureTemplate#hello_interval_variable}
  */
  readonly helloIntervalVariable?: string;
  /**
  * Set OSPF interface authentication IPSec SPI, range 256..4294967295
  *   - Range: `256`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipsec_spi CiscoOspfv3FeatureTemplate#ipsec_spi}
  */
  readonly ipsecSpi?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ipsec_spi_variable CiscoOspfv3FeatureTemplate#ipsec_spi_variable}
  */
  readonly ipsecSpiVariable?: string;
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#name CiscoOspfv3FeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#name_variable CiscoOspfv3FeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Set the OSPF network type
  *   - Choices: `broadcast`, `point-to-point`, `non-broadcast`, `point-to-multipoint`
  *   - Default value: `broadcast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#network CiscoOspfv3FeatureTemplate#network}
  */
  readonly network?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#network_variable CiscoOspfv3FeatureTemplate#network_variable}
  */
  readonly networkVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the interface to advertise its address, but not to actively run OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#passive_interface CiscoOspfv3FeatureTemplate#passive_interface}
  */
  readonly passiveInterface?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#passive_interface_variable CiscoOspfv3FeatureTemplate#passive_interface_variable}
  */
  readonly passiveInterfaceVariable?: string;
  /**
  * Set time between retransmitting LSAs
  *   - Range: `1`-`65535`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#retransmit_interval CiscoOspfv3FeatureTemplate#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#retransmit_interval_variable CiscoOspfv3FeatureTemplate#retransmit_interval_variable}
  */
  readonly retransmitIntervalVariable?: string;
}

export function ciscoOspfv3FeatureTemplateIpv6AreasInterfacesToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6AreasInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    authentication_key_variable: cdktf.stringToTerraform(struct!.authenticationKeyVariable),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    authentication_type_variable: cdktf.stringToTerraform(struct!.authenticationTypeVariable),
    cost: cdktf.numberToTerraform(struct!.cost),
    cost_variable: cdktf.stringToTerraform(struct!.costVariable),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    dead_interval_variable: cdktf.stringToTerraform(struct!.deadIntervalVariable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    hello_interval_variable: cdktf.stringToTerraform(struct!.helloIntervalVariable),
    ipsec_spi: cdktf.numberToTerraform(struct!.ipsecSpi),
    ipsec_spi_variable: cdktf.stringToTerraform(struct!.ipsecSpiVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    network: cdktf.stringToTerraform(struct!.network),
    network_variable: cdktf.stringToTerraform(struct!.networkVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    passive_interface: cdktf.booleanToTerraform(struct!.passiveInterface),
    passive_interface_variable: cdktf.stringToTerraform(struct!.passiveInterfaceVariable),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    retransmit_interval_variable: cdktf.stringToTerraform(struct!.retransmitIntervalVariable),
  }
}


export function ciscoOspfv3FeatureTemplateIpv6AreasInterfacesToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6AreasInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationTypeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cost_variable: {
      value: cdktf.stringToHclTerraform(struct!.costVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.deadIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.helloIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_spi: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_spi_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSpiVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive_interface: {
      value: cdktf.booleanToHclTerraform(struct!.passiveInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.passiveInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.retransmitIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv6AreasInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv6AreasInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._authenticationKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyVariable = this._authenticationKeyVariable;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._authenticationTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypeVariable = this._authenticationTypeVariable;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._costVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.costVariable = this._costVariable;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._deadIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadIntervalVariable = this._deadIntervalVariable;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._helloIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalVariable = this._helloIntervalVariable;
    }
    if (this._ipsecSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSpi = this._ipsecSpi;
    }
    if (this._ipsecSpiVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSpiVariable = this._ipsecSpiVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkVariable = this._networkVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._passiveInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveInterface = this._passiveInterface;
    }
    if (this._passiveInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveInterfaceVariable = this._passiveInterfaceVariable;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._retransmitIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitIntervalVariable = this._retransmitIntervalVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv6AreasInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
      this._authenticationKeyVariable = undefined;
      this._authenticationType = undefined;
      this._authenticationTypeVariable = undefined;
      this._cost = undefined;
      this._costVariable = undefined;
      this._deadInterval = undefined;
      this._deadIntervalVariable = undefined;
      this._helloInterval = undefined;
      this._helloIntervalVariable = undefined;
      this._ipsecSpi = undefined;
      this._ipsecSpiVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._network = undefined;
      this._networkVariable = undefined;
      this._optional = undefined;
      this._passiveInterface = undefined;
      this._passiveInterfaceVariable = undefined;
      this._retransmitInterval = undefined;
      this._retransmitIntervalVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
      this._authenticationKeyVariable = value.authenticationKeyVariable;
      this._authenticationType = value.authenticationType;
      this._authenticationTypeVariable = value.authenticationTypeVariable;
      this._cost = value.cost;
      this._costVariable = value.costVariable;
      this._deadInterval = value.deadInterval;
      this._deadIntervalVariable = value.deadIntervalVariable;
      this._helloInterval = value.helloInterval;
      this._helloIntervalVariable = value.helloIntervalVariable;
      this._ipsecSpi = value.ipsecSpi;
      this._ipsecSpiVariable = value.ipsecSpiVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._network = value.network;
      this._networkVariable = value.networkVariable;
      this._optional = value.optional;
      this._passiveInterface = value.passiveInterface;
      this._passiveInterfaceVariable = value.passiveInterfaceVariable;
      this._retransmitInterval = value.retransmitInterval;
      this._retransmitIntervalVariable = value.retransmitIntervalVariable;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_key_variable - computed: false, optional: true, required: false
  private _authenticationKeyVariable?: string; 
  public get authenticationKeyVariable() {
    return this.getStringAttribute('authentication_key_variable');
  }
  public set authenticationKeyVariable(value: string) {
    this._authenticationKeyVariable = value;
  }
  public resetAuthenticationKeyVariable() {
    this._authenticationKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyVariableInput() {
    return this._authenticationKeyVariable;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // authentication_type_variable - computed: false, optional: true, required: false
  private _authenticationTypeVariable?: string; 
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }
  public set authenticationTypeVariable(value: string) {
    this._authenticationTypeVariable = value;
  }
  public resetAuthenticationTypeVariable() {
    this._authenticationTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeVariableInput() {
    return this._authenticationTypeVariable;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // cost_variable - computed: false, optional: true, required: false
  private _costVariable?: string; 
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }
  public set costVariable(value: string) {
    this._costVariable = value;
  }
  public resetCostVariable() {
    this._costVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costVariableInput() {
    return this._costVariable;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // dead_interval_variable - computed: false, optional: true, required: false
  private _deadIntervalVariable?: string; 
  public get deadIntervalVariable() {
    return this.getStringAttribute('dead_interval_variable');
  }
  public set deadIntervalVariable(value: string) {
    this._deadIntervalVariable = value;
  }
  public resetDeadIntervalVariable() {
    this._deadIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalVariableInput() {
    return this._deadIntervalVariable;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // hello_interval_variable - computed: false, optional: true, required: false
  private _helloIntervalVariable?: string; 
  public get helloIntervalVariable() {
    return this.getStringAttribute('hello_interval_variable');
  }
  public set helloIntervalVariable(value: string) {
    this._helloIntervalVariable = value;
  }
  public resetHelloIntervalVariable() {
    this._helloIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalVariableInput() {
    return this._helloIntervalVariable;
  }

  // ipsec_spi - computed: false, optional: true, required: false
  private _ipsecSpi?: number; 
  public get ipsecSpi() {
    return this.getNumberAttribute('ipsec_spi');
  }
  public set ipsecSpi(value: number) {
    this._ipsecSpi = value;
  }
  public resetIpsecSpi() {
    this._ipsecSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSpiInput() {
    return this._ipsecSpi;
  }

  // ipsec_spi_variable - computed: false, optional: true, required: false
  private _ipsecSpiVariable?: string; 
  public get ipsecSpiVariable() {
    return this.getStringAttribute('ipsec_spi_variable');
  }
  public set ipsecSpiVariable(value: string) {
    this._ipsecSpiVariable = value;
  }
  public resetIpsecSpiVariable() {
    this._ipsecSpiVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSpiVariableInput() {
    return this._ipsecSpiVariable;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_variable - computed: false, optional: true, required: false
  private _networkVariable?: string; 
  public get networkVariable() {
    return this.getStringAttribute('network_variable');
  }
  public set networkVariable(value: string) {
    this._networkVariable = value;
  }
  public resetNetworkVariable() {
    this._networkVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkVariableInput() {
    return this._networkVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // passive_interface - computed: false, optional: true, required: false
  private _passiveInterface?: boolean | cdktf.IResolvable; 
  public get passiveInterface() {
    return this.getBooleanAttribute('passive_interface');
  }
  public set passiveInterface(value: boolean | cdktf.IResolvable) {
    this._passiveInterface = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface;
  }

  // passive_interface_variable - computed: false, optional: true, required: false
  private _passiveInterfaceVariable?: string; 
  public get passiveInterfaceVariable() {
    return this.getStringAttribute('passive_interface_variable');
  }
  public set passiveInterfaceVariable(value: string) {
    this._passiveInterfaceVariable = value;
  }
  public resetPassiveInterfaceVariable() {
    this._passiveInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceVariableInput() {
    return this._passiveInterfaceVariable;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // retransmit_interval_variable - computed: false, optional: true, required: false
  private _retransmitIntervalVariable?: string; 
  public get retransmitIntervalVariable() {
    return this.getStringAttribute('retransmit_interval_variable');
  }
  public set retransmitIntervalVariable(value: string) {
    this._retransmitIntervalVariable = value;
  }
  public resetRetransmitIntervalVariable() {
    this._retransmitIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalVariableInput() {
    return this._retransmitIntervalVariable;
  }
}

export class CiscoOspfv3FeatureTemplateIpv6AreasInterfacesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv6AreasInterfaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv6AreasInterfacesOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv6AreasInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv6AreasRanges {
  /**
  * Set Matching Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#address CiscoOspfv3FeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#address_variable CiscoOspfv3FeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Set cost for this range
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#cost CiscoOspfv3FeatureTemplate#cost}
  */
  readonly cost?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#cost_variable CiscoOspfv3FeatureTemplate#cost_variable}
  */
  readonly costVariable?: string;
  /**
  * Do not advertise this range
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#no_advertise CiscoOspfv3FeatureTemplate#no_advertise}
  */
  readonly noAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#no_advertise_variable CiscoOspfv3FeatureTemplate#no_advertise_variable}
  */
  readonly noAdvertiseVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoOspfv3FeatureTemplateIpv6AreasRangesToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6AreasRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    cost: cdktf.numberToTerraform(struct!.cost),
    cost_variable: cdktf.stringToTerraform(struct!.costVariable),
    no_advertise: cdktf.booleanToTerraform(struct!.noAdvertise),
    no_advertise_variable: cdktf.stringToTerraform(struct!.noAdvertiseVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoOspfv3FeatureTemplateIpv6AreasRangesToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6AreasRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cost_variable: {
      value: cdktf.stringToHclTerraform(struct!.costVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_advertise: {
      value: cdktf.booleanToHclTerraform(struct!.noAdvertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_advertise_variable: {
      value: cdktf.stringToHclTerraform(struct!.noAdvertiseVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv6AreasRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv6AreasRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._costVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.costVariable = this._costVariable;
    }
    if (this._noAdvertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdvertise = this._noAdvertise;
    }
    if (this._noAdvertiseVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdvertiseVariable = this._noAdvertiseVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv6AreasRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._cost = undefined;
      this._costVariable = undefined;
      this._noAdvertise = undefined;
      this._noAdvertiseVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._cost = value.cost;
      this._costVariable = value.costVariable;
      this._noAdvertise = value.noAdvertise;
      this._noAdvertiseVariable = value.noAdvertiseVariable;
      this._optional = value.optional;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // cost_variable - computed: false, optional: true, required: false
  private _costVariable?: string; 
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }
  public set costVariable(value: string) {
    this._costVariable = value;
  }
  public resetCostVariable() {
    this._costVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costVariableInput() {
    return this._costVariable;
  }

  // no_advertise - computed: false, optional: true, required: false
  private _noAdvertise?: boolean | cdktf.IResolvable; 
  public get noAdvertise() {
    return this.getBooleanAttribute('no_advertise');
  }
  public set noAdvertise(value: boolean | cdktf.IResolvable) {
    this._noAdvertise = value;
  }
  public resetNoAdvertise() {
    this._noAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdvertiseInput() {
    return this._noAdvertise;
  }

  // no_advertise_variable - computed: false, optional: true, required: false
  private _noAdvertiseVariable?: string; 
  public get noAdvertiseVariable() {
    return this.getStringAttribute('no_advertise_variable');
  }
  public set noAdvertiseVariable(value: string) {
    this._noAdvertiseVariable = value;
  }
  public resetNoAdvertiseVariable() {
    this._noAdvertiseVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdvertiseVariableInput() {
    return this._noAdvertiseVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoOspfv3FeatureTemplateIpv6AreasRangesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv6AreasRanges[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv6AreasRangesOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv6AreasRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv6Areas {
  /**
  * Set OSPF area number
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#area_number CiscoOspfv3FeatureTemplate#area_number}
  */
  readonly areaNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#area_number_variable CiscoOspfv3FeatureTemplate#area_number_variable}
  */
  readonly areaNumberVariable?: string;
  /**
  * Set OSPF interface parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#interfaces CiscoOspfv3FeatureTemplate#interfaces}
  */
  readonly interfaces?: CiscoOspfv3FeatureTemplateIpv6AreasInterfaces[] | cdktf.IResolvable;
  /**
  * Area Type Normal
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#normal CiscoOspfv3FeatureTemplate#normal}
  */
  readonly normal?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#normal_variable CiscoOspfv3FeatureTemplate#normal_variable}
  */
  readonly normalVariable?: string;
  /**
  * NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#nssa CiscoOspfv3FeatureTemplate#nssa}
  */
  readonly nssa?: boolean | cdktf.IResolvable;
  /**
  * Do not inject interarea routes into NSSA
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#nssa_no_summary CiscoOspfv3FeatureTemplate#nssa_no_summary}
  */
  readonly nssaNoSummary?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#nssa_no_summary_variable CiscoOspfv3FeatureTemplate#nssa_no_summary_variable}
  */
  readonly nssaNoSummaryVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Summarize OSPF routes at an area boundary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ranges CiscoOspfv3FeatureTemplate#ranges}
  */
  readonly ranges?: CiscoOspfv3FeatureTemplateIpv6AreasRanges[] | cdktf.IResolvable;
  /**
  * Stub area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#stub CiscoOspfv3FeatureTemplate#stub}
  */
  readonly stub?: boolean | cdktf.IResolvable;
  /**
  * Do not inject interarea routes into stub
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#stub_no_summary CiscoOspfv3FeatureTemplate#stub_no_summary}
  */
  readonly stubNoSummary?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#stub_no_summary_variable CiscoOspfv3FeatureTemplate#stub_no_summary_variable}
  */
  readonly stubNoSummaryVariable?: string;
  /**
  * Always translate LSAs on this ABR
  *   - Choices: `always`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#translate CiscoOspfv3FeatureTemplate#translate}
  */
  readonly translate?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#translate_variable CiscoOspfv3FeatureTemplate#translate_variable}
  */
  readonly translateVariable?: string;
}

export function ciscoOspfv3FeatureTemplateIpv6AreasToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6Areas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_number: cdktf.numberToTerraform(struct!.areaNumber),
    area_number_variable: cdktf.stringToTerraform(struct!.areaNumberVariable),
    interfaces: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv6AreasInterfacesToTerraform, false)(struct!.interfaces),
    normal: cdktf.booleanToTerraform(struct!.normal),
    normal_variable: cdktf.stringToTerraform(struct!.normalVariable),
    nssa: cdktf.booleanToTerraform(struct!.nssa),
    nssa_no_summary: cdktf.booleanToTerraform(struct!.nssaNoSummary),
    nssa_no_summary_variable: cdktf.stringToTerraform(struct!.nssaNoSummaryVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    ranges: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv6AreasRangesToTerraform, false)(struct!.ranges),
    stub: cdktf.booleanToTerraform(struct!.stub),
    stub_no_summary: cdktf.booleanToTerraform(struct!.stubNoSummary),
    stub_no_summary_variable: cdktf.stringToTerraform(struct!.stubNoSummaryVariable),
    translate: cdktf.stringToTerraform(struct!.translate),
    translate_variable: cdktf.stringToTerraform(struct!.translateVariable),
  }
}


export function ciscoOspfv3FeatureTemplateIpv6AreasToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6Areas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_number: {
      value: cdktf.numberToHclTerraform(struct!.areaNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    area_number_variable: {
      value: cdktf.stringToHclTerraform(struct!.areaNumberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv6AreasInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoOspfv3FeatureTemplateIpv6AreasInterfacesList",
    },
    normal: {
      value: cdktf.booleanToHclTerraform(struct!.normal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_variable: {
      value: cdktf.stringToHclTerraform(struct!.normalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa: {
      value: cdktf.booleanToHclTerraform(struct!.nssa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa_no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.nssaNoSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa_no_summary_variable: {
      value: cdktf.stringToHclTerraform(struct!.nssaNoSummaryVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ranges: {
      value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv6AreasRangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoOspfv3FeatureTemplateIpv6AreasRangesList",
    },
    stub: {
      value: cdktf.booleanToHclTerraform(struct!.stub),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stub_no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.stubNoSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stub_no_summary_variable: {
      value: cdktf.stringToHclTerraform(struct!.stubNoSummaryVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate: {
      value: cdktf.stringToHclTerraform(struct!.translate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_variable: {
      value: cdktf.stringToHclTerraform(struct!.translateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv6AreasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv6Areas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNumber = this._areaNumber;
    }
    if (this._areaNumberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNumberVariable = this._areaNumberVariable;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._normal !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal;
    }
    if (this._normalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalVariable = this._normalVariable;
    }
    if (this._nssa !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssa = this._nssa;
    }
    if (this._nssaNoSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaNoSummary = this._nssaNoSummary;
    }
    if (this._nssaNoSummaryVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaNoSummaryVariable = this._nssaNoSummaryVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    if (this._stub !== undefined) {
      hasAnyValues = true;
      internalValueResult.stub = this._stub;
    }
    if (this._stubNoSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubNoSummary = this._stubNoSummary;
    }
    if (this._stubNoSummaryVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubNoSummaryVariable = this._stubNoSummaryVariable;
    }
    if (this._translate !== undefined) {
      hasAnyValues = true;
      internalValueResult.translate = this._translate;
    }
    if (this._translateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateVariable = this._translateVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv6Areas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaNumber = undefined;
      this._areaNumberVariable = undefined;
      this._interfaces.internalValue = undefined;
      this._normal = undefined;
      this._normalVariable = undefined;
      this._nssa = undefined;
      this._nssaNoSummary = undefined;
      this._nssaNoSummaryVariable = undefined;
      this._optional = undefined;
      this._ranges.internalValue = undefined;
      this._stub = undefined;
      this._stubNoSummary = undefined;
      this._stubNoSummaryVariable = undefined;
      this._translate = undefined;
      this._translateVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaNumber = value.areaNumber;
      this._areaNumberVariable = value.areaNumberVariable;
      this._interfaces.internalValue = value.interfaces;
      this._normal = value.normal;
      this._normalVariable = value.normalVariable;
      this._nssa = value.nssa;
      this._nssaNoSummary = value.nssaNoSummary;
      this._nssaNoSummaryVariable = value.nssaNoSummaryVariable;
      this._optional = value.optional;
      this._ranges.internalValue = value.ranges;
      this._stub = value.stub;
      this._stubNoSummary = value.stubNoSummary;
      this._stubNoSummaryVariable = value.stubNoSummaryVariable;
      this._translate = value.translate;
      this._translateVariable = value.translateVariable;
    }
  }

  // area_number - computed: false, optional: true, required: false
  private _areaNumber?: number; 
  public get areaNumber() {
    return this.getNumberAttribute('area_number');
  }
  public set areaNumber(value: number) {
    this._areaNumber = value;
  }
  public resetAreaNumber() {
    this._areaNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNumberInput() {
    return this._areaNumber;
  }

  // area_number_variable - computed: false, optional: true, required: false
  private _areaNumberVariable?: string; 
  public get areaNumberVariable() {
    return this.getStringAttribute('area_number_variable');
  }
  public set areaNumberVariable(value: string) {
    this._areaNumberVariable = value;
  }
  public resetAreaNumberVariable() {
    this._areaNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNumberVariableInput() {
    return this._areaNumberVariable;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new CiscoOspfv3FeatureTemplateIpv6AreasInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: CiscoOspfv3FeatureTemplateIpv6AreasInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // normal - computed: false, optional: true, required: false
  private _normal?: boolean | cdktf.IResolvable; 
  public get normal() {
    return this.getBooleanAttribute('normal');
  }
  public set normal(value: boolean | cdktf.IResolvable) {
    this._normal = value;
  }
  public resetNormal() {
    this._normal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal;
  }

  // normal_variable - computed: false, optional: true, required: false
  private _normalVariable?: string; 
  public get normalVariable() {
    return this.getStringAttribute('normal_variable');
  }
  public set normalVariable(value: string) {
    this._normalVariable = value;
  }
  public resetNormalVariable() {
    this._normalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalVariableInput() {
    return this._normalVariable;
  }

  // nssa - computed: false, optional: true, required: false
  private _nssa?: boolean | cdktf.IResolvable; 
  public get nssa() {
    return this.getBooleanAttribute('nssa');
  }
  public set nssa(value: boolean | cdktf.IResolvable) {
    this._nssa = value;
  }
  public resetNssa() {
    this._nssa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa;
  }

  // nssa_no_summary - computed: false, optional: true, required: false
  private _nssaNoSummary?: boolean | cdktf.IResolvable; 
  public get nssaNoSummary() {
    return this.getBooleanAttribute('nssa_no_summary');
  }
  public set nssaNoSummary(value: boolean | cdktf.IResolvable) {
    this._nssaNoSummary = value;
  }
  public resetNssaNoSummary() {
    this._nssaNoSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaNoSummaryInput() {
    return this._nssaNoSummary;
  }

  // nssa_no_summary_variable - computed: false, optional: true, required: false
  private _nssaNoSummaryVariable?: string; 
  public get nssaNoSummaryVariable() {
    return this.getStringAttribute('nssa_no_summary_variable');
  }
  public set nssaNoSummaryVariable(value: string) {
    this._nssaNoSummaryVariable = value;
  }
  public resetNssaNoSummaryVariable() {
    this._nssaNoSummaryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaNoSummaryVariableInput() {
    return this._nssaNoSummaryVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new CiscoOspfv3FeatureTemplateIpv6AreasRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: CiscoOspfv3FeatureTemplateIpv6AreasRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }

  // stub - computed: false, optional: true, required: false
  private _stub?: boolean | cdktf.IResolvable; 
  public get stub() {
    return this.getBooleanAttribute('stub');
  }
  public set stub(value: boolean | cdktf.IResolvable) {
    this._stub = value;
  }
  public resetStub() {
    this._stub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub;
  }

  // stub_no_summary - computed: false, optional: true, required: false
  private _stubNoSummary?: boolean | cdktf.IResolvable; 
  public get stubNoSummary() {
    return this.getBooleanAttribute('stub_no_summary');
  }
  public set stubNoSummary(value: boolean | cdktf.IResolvable) {
    this._stubNoSummary = value;
  }
  public resetStubNoSummary() {
    this._stubNoSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubNoSummaryInput() {
    return this._stubNoSummary;
  }

  // stub_no_summary_variable - computed: false, optional: true, required: false
  private _stubNoSummaryVariable?: string; 
  public get stubNoSummaryVariable() {
    return this.getStringAttribute('stub_no_summary_variable');
  }
  public set stubNoSummaryVariable(value: string) {
    this._stubNoSummaryVariable = value;
  }
  public resetStubNoSummaryVariable() {
    this._stubNoSummaryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubNoSummaryVariableInput() {
    return this._stubNoSummaryVariable;
  }

  // translate - computed: false, optional: true, required: false
  private _translate?: string; 
  public get translate() {
    return this.getStringAttribute('translate');
  }
  public set translate(value: string) {
    this._translate = value;
  }
  public resetTranslate() {
    this._translate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateInput() {
    return this._translate;
  }

  // translate_variable - computed: false, optional: true, required: false
  private _translateVariable?: string; 
  public get translateVariable() {
    return this.getStringAttribute('translate_variable');
  }
  public set translateVariable(value: string) {
    this._translateVariable = value;
  }
  public resetTranslateVariable() {
    this._translateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateVariableInput() {
    return this._translateVariable;
  }
}

export class CiscoOspfv3FeatureTemplateIpv6AreasList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv6Areas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv6AreasOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv6AreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas {
  /**
  * Set the router LSA advertisement type
  *   - Choices: `on-startup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#ad_type CiscoOspfv3FeatureTemplate#ad_type}
  */
  readonly adType?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set how long to advertise maximum metric after router starts up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#time CiscoOspfv3FeatureTemplate#time}
  */
  readonly time?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#time_variable CiscoOspfv3FeatureTemplate#time_variable}
  */
  readonly timeVariable?: string;
}

export function ciscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_type: cdktf.stringToTerraform(struct!.adType),
    optional: cdktf.booleanToTerraform(struct!.optional),
    time: cdktf.numberToTerraform(struct!.time),
    time_variable: cdktf.stringToTerraform(struct!.timeVariable),
  }
}


export function ciscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_type: {
      value: cdktf.stringToHclTerraform(struct!.adType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_variable: {
      value: cdktf.stringToHclTerraform(struct!.timeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adType = this._adType;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._timeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeVariable = this._timeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adType = undefined;
      this._optional = undefined;
      this._time = undefined;
      this._timeVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adType = value.adType;
      this._optional = value.optional;
      this._time = value.time;
      this._timeVariable = value.timeVariable;
    }
  }

  // ad_type - computed: false, optional: true, required: false
  private _adType?: string; 
  public get adType() {
    return this.getStringAttribute('ad_type');
  }
  public set adType(value: string) {
    this._adType = value;
  }
  public resetAdType() {
    this._adType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adTypeInput() {
    return this._adType;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // time_variable - computed: false, optional: true, required: false
  private _timeVariable?: string; 
  public get timeVariable() {
    return this.getStringAttribute('time_variable');
  }
  public set timeVariable(value: string) {
    this._timeVariable = value;
  }
  public resetTimeVariable() {
    this._timeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeVariableInput() {
    return this._timeVariable;
  }
}

export class CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfv3FeatureTemplateIpv6Redistributes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#optional CiscoOspfv3FeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the protocol
  *   - Choices: `bgp`, `connected`, `eigrp`, `isis`, `lisp`, `nat-route`, `omp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#protocol CiscoOspfv3FeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#protocol_variable CiscoOspfv3FeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Set route policy to apply to redistributed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#route_policy CiscoOspfv3FeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#route_policy_variable CiscoOspfv3FeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
}

export function ciscoOspfv3FeatureTemplateIpv6RedistributesToTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6Redistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    route_policy_variable: cdktf.stringToTerraform(struct!.routePolicyVariable),
  }
}


export function ciscoOspfv3FeatureTemplateIpv6RedistributesToHclTerraform(struct?: CiscoOspfv3FeatureTemplateIpv6Redistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfv3FeatureTemplateIpv6RedistributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoOspfv3FeatureTemplateIpv6Redistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routePolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyVariable = this._routePolicyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfv3FeatureTemplateIpv6Redistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
      this._routePolicyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
      this._routePolicyVariable = value.routePolicyVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // route_policy_variable - computed: false, optional: true, required: false
  private _routePolicyVariable?: string; 
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
  public set routePolicyVariable(value: string) {
    this._routePolicyVariable = value;
  }
  public resetRoutePolicyVariable() {
    this._routePolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyVariableInput() {
    return this._routePolicyVariable;
  }
}

export class CiscoOspfv3FeatureTemplateIpv6RedistributesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfv3FeatureTemplateIpv6Redistributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoOspfv3FeatureTemplateIpv6RedistributesOutputReference {
    return new CiscoOspfv3FeatureTemplateIpv6RedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template sdwan_cisco_ospfv3_feature_template}
*/
export class CiscoOspfv3FeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_ospfv3_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoOspfv3FeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoOspfv3FeatureTemplate to import
  * @param importFromId The id of the existing CiscoOspfv3FeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoOspfv3FeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_ospfv3_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospfv3_feature_template sdwan_cisco_ospfv3_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoOspfv3FeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoOspfv3FeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_ospfv3_feature_template',
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
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._ipv4Areas.internalValue = config.ipv4Areas;
    this._ipv4AutoCostReferenceBandwidth = config.ipv4AutoCostReferenceBandwidth;
    this._ipv4AutoCostReferenceBandwidthVariable = config.ipv4AutoCostReferenceBandwidthVariable;
    this._ipv4CompatibleRfc1583 = config.ipv4CompatibleRfc1583;
    this._ipv4CompatibleRfc1583Variable = config.ipv4CompatibleRfc1583Variable;
    this._ipv4DefaultInformationOriginate = config.ipv4DefaultInformationOriginate;
    this._ipv4DefaultInformationOriginateAlways = config.ipv4DefaultInformationOriginateAlways;
    this._ipv4DefaultInformationOriginateAlwaysVariable = config.ipv4DefaultInformationOriginateAlwaysVariable;
    this._ipv4DefaultInformationOriginateMetric = config.ipv4DefaultInformationOriginateMetric;
    this._ipv4DefaultInformationOriginateMetricType = config.ipv4DefaultInformationOriginateMetricType;
    this._ipv4DefaultInformationOriginateMetricTypeVariable = config.ipv4DefaultInformationOriginateMetricTypeVariable;
    this._ipv4DefaultInformationOriginateMetricVariable = config.ipv4DefaultInformationOriginateMetricVariable;
    this._ipv4Distance = config.ipv4Distance;
    this._ipv4DistanceExternal = config.ipv4DistanceExternal;
    this._ipv4DistanceExternalVariable = config.ipv4DistanceExternalVariable;
    this._ipv4DistanceInterArea = config.ipv4DistanceInterArea;
    this._ipv4DistanceInterAreaVariable = config.ipv4DistanceInterAreaVariable;
    this._ipv4DistanceIntraArea = config.ipv4DistanceIntraArea;
    this._ipv4DistanceIntraAreaVariable = config.ipv4DistanceIntraAreaVariable;
    this._ipv4DistanceVariable = config.ipv4DistanceVariable;
    this._ipv4Filter = config.ipv4Filter;
    this._ipv4FilterVariable = config.ipv4FilterVariable;
    this._ipv4MaxMetricRouterLsas.internalValue = config.ipv4MaxMetricRouterLsas;
    this._ipv4PolicyName = config.ipv4PolicyName;
    this._ipv4PolicyNameVariable = config.ipv4PolicyNameVariable;
    this._ipv4Redistributes.internalValue = config.ipv4Redistributes;
    this._ipv4RouterId = config.ipv4RouterId;
    this._ipv4RouterIdVariable = config.ipv4RouterIdVariable;
    this._ipv4TimersSpfDelay = config.ipv4TimersSpfDelay;
    this._ipv4TimersSpfDelayVariable = config.ipv4TimersSpfDelayVariable;
    this._ipv4TimersSpfInitialHold = config.ipv4TimersSpfInitialHold;
    this._ipv4TimersSpfInitialHoldVariable = config.ipv4TimersSpfInitialHoldVariable;
    this._ipv4TimersSpfMaxHold = config.ipv4TimersSpfMaxHold;
    this._ipv4TimersSpfMaxHoldVariable = config.ipv4TimersSpfMaxHoldVariable;
    this._ipv6Areas.internalValue = config.ipv6Areas;
    this._ipv6AutoCostReferenceBandwidth = config.ipv6AutoCostReferenceBandwidth;
    this._ipv6AutoCostReferenceBandwidthVariable = config.ipv6AutoCostReferenceBandwidthVariable;
    this._ipv6CompatibleRfc1583 = config.ipv6CompatibleRfc1583;
    this._ipv6CompatibleRfc1583Variable = config.ipv6CompatibleRfc1583Variable;
    this._ipv6DefaultInformationOriginate = config.ipv6DefaultInformationOriginate;
    this._ipv6DefaultInformationOriginateAlways = config.ipv6DefaultInformationOriginateAlways;
    this._ipv6DefaultInformationOriginateAlwaysVariable = config.ipv6DefaultInformationOriginateAlwaysVariable;
    this._ipv6DefaultInformationOriginateMetric = config.ipv6DefaultInformationOriginateMetric;
    this._ipv6DefaultInformationOriginateMetricType = config.ipv6DefaultInformationOriginateMetricType;
    this._ipv6DefaultInformationOriginateMetricTypeVariable = config.ipv6DefaultInformationOriginateMetricTypeVariable;
    this._ipv6DefaultInformationOriginateMetricVariable = config.ipv6DefaultInformationOriginateMetricVariable;
    this._ipv6Distance = config.ipv6Distance;
    this._ipv6DistanceExternal = config.ipv6DistanceExternal;
    this._ipv6DistanceExternalVariable = config.ipv6DistanceExternalVariable;
    this._ipv6DistanceInterArea = config.ipv6DistanceInterArea;
    this._ipv6DistanceInterAreaVariable = config.ipv6DistanceInterAreaVariable;
    this._ipv6DistanceIntraArea = config.ipv6DistanceIntraArea;
    this._ipv6DistanceIntraAreaVariable = config.ipv6DistanceIntraAreaVariable;
    this._ipv6DistanceVariable = config.ipv6DistanceVariable;
    this._ipv6Filter = config.ipv6Filter;
    this._ipv6FilterVariable = config.ipv6FilterVariable;
    this._ipv6MaxMetricRouterLsas.internalValue = config.ipv6MaxMetricRouterLsas;
    this._ipv6PolicyName = config.ipv6PolicyName;
    this._ipv6PolicyNameVariable = config.ipv6PolicyNameVariable;
    this._ipv6Redistributes.internalValue = config.ipv6Redistributes;
    this._ipv6RouterId = config.ipv6RouterId;
    this._ipv6RouterIdVariable = config.ipv6RouterIdVariable;
    this._ipv6TimersSpfDelay = config.ipv6TimersSpfDelay;
    this._ipv6TimersSpfDelayVariable = config.ipv6TimersSpfDelayVariable;
    this._ipv6TimersSpfInitialHold = config.ipv6TimersSpfInitialHold;
    this._ipv6TimersSpfInitialHoldVariable = config.ipv6TimersSpfInitialHoldVariable;
    this._ipv6TimersSpfMaxHold = config.ipv6TimersSpfMaxHold;
    this._ipv6TimersSpfMaxHoldVariable = config.ipv6TimersSpfMaxHoldVariable;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_areas - computed: false, optional: true, required: false
  private _ipv4Areas = new CiscoOspfv3FeatureTemplateIpv4AreasList(this, "ipv4_areas", false);
  public get ipv4Areas() {
    return this._ipv4Areas;
  }
  public putIpv4Areas(value: CiscoOspfv3FeatureTemplateIpv4Areas[] | cdktf.IResolvable) {
    this._ipv4Areas.internalValue = value;
  }
  public resetIpv4Areas() {
    this._ipv4Areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AreasInput() {
    return this._ipv4Areas.internalValue;
  }

  // ipv4_auto_cost_reference_bandwidth - computed: false, optional: true, required: false
  private _ipv4AutoCostReferenceBandwidth?: number; 
  public get ipv4AutoCostReferenceBandwidth() {
    return this.getNumberAttribute('ipv4_auto_cost_reference_bandwidth');
  }
  public set ipv4AutoCostReferenceBandwidth(value: number) {
    this._ipv4AutoCostReferenceBandwidth = value;
  }
  public resetIpv4AutoCostReferenceBandwidth() {
    this._ipv4AutoCostReferenceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AutoCostReferenceBandwidthInput() {
    return this._ipv4AutoCostReferenceBandwidth;
  }

  // ipv4_auto_cost_reference_bandwidth_variable - computed: false, optional: true, required: false
  private _ipv4AutoCostReferenceBandwidthVariable?: string; 
  public get ipv4AutoCostReferenceBandwidthVariable() {
    return this.getStringAttribute('ipv4_auto_cost_reference_bandwidth_variable');
  }
  public set ipv4AutoCostReferenceBandwidthVariable(value: string) {
    this._ipv4AutoCostReferenceBandwidthVariable = value;
  }
  public resetIpv4AutoCostReferenceBandwidthVariable() {
    this._ipv4AutoCostReferenceBandwidthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AutoCostReferenceBandwidthVariableInput() {
    return this._ipv4AutoCostReferenceBandwidthVariable;
  }

  // ipv4_compatible_rfc1583 - computed: false, optional: true, required: false
  private _ipv4CompatibleRfc1583?: boolean | cdktf.IResolvable; 
  public get ipv4CompatibleRfc1583() {
    return this.getBooleanAttribute('ipv4_compatible_rfc1583');
  }
  public set ipv4CompatibleRfc1583(value: boolean | cdktf.IResolvable) {
    this._ipv4CompatibleRfc1583 = value;
  }
  public resetIpv4CompatibleRfc1583() {
    this._ipv4CompatibleRfc1583 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CompatibleRfc1583Input() {
    return this._ipv4CompatibleRfc1583;
  }

  // ipv4_compatible_rfc1583_variable - computed: false, optional: true, required: false
  private _ipv4CompatibleRfc1583Variable?: string; 
  public get ipv4CompatibleRfc1583Variable() {
    return this.getStringAttribute('ipv4_compatible_rfc1583_variable');
  }
  public set ipv4CompatibleRfc1583Variable(value: string) {
    this._ipv4CompatibleRfc1583Variable = value;
  }
  public resetIpv4CompatibleRfc1583Variable() {
    this._ipv4CompatibleRfc1583Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CompatibleRfc1583VariableInput() {
    return this._ipv4CompatibleRfc1583Variable;
  }

  // ipv4_default_information_originate - computed: false, optional: true, required: false
  private _ipv4DefaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get ipv4DefaultInformationOriginate() {
    return this.getBooleanAttribute('ipv4_default_information_originate');
  }
  public set ipv4DefaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._ipv4DefaultInformationOriginate = value;
  }
  public resetIpv4DefaultInformationOriginate() {
    this._ipv4DefaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultInformationOriginateInput() {
    return this._ipv4DefaultInformationOriginate;
  }

  // ipv4_default_information_originate_always - computed: false, optional: true, required: false
  private _ipv4DefaultInformationOriginateAlways?: boolean | cdktf.IResolvable; 
  public get ipv4DefaultInformationOriginateAlways() {
    return this.getBooleanAttribute('ipv4_default_information_originate_always');
  }
  public set ipv4DefaultInformationOriginateAlways(value: boolean | cdktf.IResolvable) {
    this._ipv4DefaultInformationOriginateAlways = value;
  }
  public resetIpv4DefaultInformationOriginateAlways() {
    this._ipv4DefaultInformationOriginateAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultInformationOriginateAlwaysInput() {
    return this._ipv4DefaultInformationOriginateAlways;
  }

  // ipv4_default_information_originate_always_variable - computed: false, optional: true, required: false
  private _ipv4DefaultInformationOriginateAlwaysVariable?: string; 
  public get ipv4DefaultInformationOriginateAlwaysVariable() {
    return this.getStringAttribute('ipv4_default_information_originate_always_variable');
  }
  public set ipv4DefaultInformationOriginateAlwaysVariable(value: string) {
    this._ipv4DefaultInformationOriginateAlwaysVariable = value;
  }
  public resetIpv4DefaultInformationOriginateAlwaysVariable() {
    this._ipv4DefaultInformationOriginateAlwaysVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultInformationOriginateAlwaysVariableInput() {
    return this._ipv4DefaultInformationOriginateAlwaysVariable;
  }

  // ipv4_default_information_originate_metric - computed: false, optional: true, required: false
  private _ipv4DefaultInformationOriginateMetric?: number; 
  public get ipv4DefaultInformationOriginateMetric() {
    return this.getNumberAttribute('ipv4_default_information_originate_metric');
  }
  public set ipv4DefaultInformationOriginateMetric(value: number) {
    this._ipv4DefaultInformationOriginateMetric = value;
  }
  public resetIpv4DefaultInformationOriginateMetric() {
    this._ipv4DefaultInformationOriginateMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultInformationOriginateMetricInput() {
    return this._ipv4DefaultInformationOriginateMetric;
  }

  // ipv4_default_information_originate_metric_type - computed: false, optional: true, required: false
  private _ipv4DefaultInformationOriginateMetricType?: string; 
  public get ipv4DefaultInformationOriginateMetricType() {
    return this.getStringAttribute('ipv4_default_information_originate_metric_type');
  }
  public set ipv4DefaultInformationOriginateMetricType(value: string) {
    this._ipv4DefaultInformationOriginateMetricType = value;
  }
  public resetIpv4DefaultInformationOriginateMetricType() {
    this._ipv4DefaultInformationOriginateMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultInformationOriginateMetricTypeInput() {
    return this._ipv4DefaultInformationOriginateMetricType;
  }

  // ipv4_default_information_originate_metric_type_variable - computed: false, optional: true, required: false
  private _ipv4DefaultInformationOriginateMetricTypeVariable?: string; 
  public get ipv4DefaultInformationOriginateMetricTypeVariable() {
    return this.getStringAttribute('ipv4_default_information_originate_metric_type_variable');
  }
  public set ipv4DefaultInformationOriginateMetricTypeVariable(value: string) {
    this._ipv4DefaultInformationOriginateMetricTypeVariable = value;
  }
  public resetIpv4DefaultInformationOriginateMetricTypeVariable() {
    this._ipv4DefaultInformationOriginateMetricTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultInformationOriginateMetricTypeVariableInput() {
    return this._ipv4DefaultInformationOriginateMetricTypeVariable;
  }

  // ipv4_default_information_originate_metric_variable - computed: false, optional: true, required: false
  private _ipv4DefaultInformationOriginateMetricVariable?: string; 
  public get ipv4DefaultInformationOriginateMetricVariable() {
    return this.getStringAttribute('ipv4_default_information_originate_metric_variable');
  }
  public set ipv4DefaultInformationOriginateMetricVariable(value: string) {
    this._ipv4DefaultInformationOriginateMetricVariable = value;
  }
  public resetIpv4DefaultInformationOriginateMetricVariable() {
    this._ipv4DefaultInformationOriginateMetricVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultInformationOriginateMetricVariableInput() {
    return this._ipv4DefaultInformationOriginateMetricVariable;
  }

  // ipv4_distance - computed: false, optional: true, required: false
  private _ipv4Distance?: number; 
  public get ipv4Distance() {
    return this.getNumberAttribute('ipv4_distance');
  }
  public set ipv4Distance(value: number) {
    this._ipv4Distance = value;
  }
  public resetIpv4Distance() {
    this._ipv4Distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DistanceInput() {
    return this._ipv4Distance;
  }

  // ipv4_distance_external - computed: false, optional: true, required: false
  private _ipv4DistanceExternal?: number; 
  public get ipv4DistanceExternal() {
    return this.getNumberAttribute('ipv4_distance_external');
  }
  public set ipv4DistanceExternal(value: number) {
    this._ipv4DistanceExternal = value;
  }
  public resetIpv4DistanceExternal() {
    this._ipv4DistanceExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DistanceExternalInput() {
    return this._ipv4DistanceExternal;
  }

  // ipv4_distance_external_variable - computed: false, optional: true, required: false
  private _ipv4DistanceExternalVariable?: string; 
  public get ipv4DistanceExternalVariable() {
    return this.getStringAttribute('ipv4_distance_external_variable');
  }
  public set ipv4DistanceExternalVariable(value: string) {
    this._ipv4DistanceExternalVariable = value;
  }
  public resetIpv4DistanceExternalVariable() {
    this._ipv4DistanceExternalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DistanceExternalVariableInput() {
    return this._ipv4DistanceExternalVariable;
  }

  // ipv4_distance_inter_area - computed: false, optional: true, required: false
  private _ipv4DistanceInterArea?: number; 
  public get ipv4DistanceInterArea() {
    return this.getNumberAttribute('ipv4_distance_inter_area');
  }
  public set ipv4DistanceInterArea(value: number) {
    this._ipv4DistanceInterArea = value;
  }
  public resetIpv4DistanceInterArea() {
    this._ipv4DistanceInterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DistanceInterAreaInput() {
    return this._ipv4DistanceInterArea;
  }

  // ipv4_distance_inter_area_variable - computed: false, optional: true, required: false
  private _ipv4DistanceInterAreaVariable?: string; 
  public get ipv4DistanceInterAreaVariable() {
    return this.getStringAttribute('ipv4_distance_inter_area_variable');
  }
  public set ipv4DistanceInterAreaVariable(value: string) {
    this._ipv4DistanceInterAreaVariable = value;
  }
  public resetIpv4DistanceInterAreaVariable() {
    this._ipv4DistanceInterAreaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DistanceInterAreaVariableInput() {
    return this._ipv4DistanceInterAreaVariable;
  }

  // ipv4_distance_intra_area - computed: false, optional: true, required: false
  private _ipv4DistanceIntraArea?: number; 
  public get ipv4DistanceIntraArea() {
    return this.getNumberAttribute('ipv4_distance_intra_area');
  }
  public set ipv4DistanceIntraArea(value: number) {
    this._ipv4DistanceIntraArea = value;
  }
  public resetIpv4DistanceIntraArea() {
    this._ipv4DistanceIntraArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DistanceIntraAreaInput() {
    return this._ipv4DistanceIntraArea;
  }

  // ipv4_distance_intra_area_variable - computed: false, optional: true, required: false
  private _ipv4DistanceIntraAreaVariable?: string; 
  public get ipv4DistanceIntraAreaVariable() {
    return this.getStringAttribute('ipv4_distance_intra_area_variable');
  }
  public set ipv4DistanceIntraAreaVariable(value: string) {
    this._ipv4DistanceIntraAreaVariable = value;
  }
  public resetIpv4DistanceIntraAreaVariable() {
    this._ipv4DistanceIntraAreaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DistanceIntraAreaVariableInput() {
    return this._ipv4DistanceIntraAreaVariable;
  }

  // ipv4_distance_variable - computed: false, optional: true, required: false
  private _ipv4DistanceVariable?: string; 
  public get ipv4DistanceVariable() {
    return this.getStringAttribute('ipv4_distance_variable');
  }
  public set ipv4DistanceVariable(value: string) {
    this._ipv4DistanceVariable = value;
  }
  public resetIpv4DistanceVariable() {
    this._ipv4DistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DistanceVariableInput() {
    return this._ipv4DistanceVariable;
  }

  // ipv4_filter - computed: false, optional: true, required: false
  private _ipv4Filter?: boolean | cdktf.IResolvable; 
  public get ipv4Filter() {
    return this.getBooleanAttribute('ipv4_filter');
  }
  public set ipv4Filter(value: boolean | cdktf.IResolvable) {
    this._ipv4Filter = value;
  }
  public resetIpv4Filter() {
    this._ipv4Filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FilterInput() {
    return this._ipv4Filter;
  }

  // ipv4_filter_variable - computed: false, optional: true, required: false
  private _ipv4FilterVariable?: string; 
  public get ipv4FilterVariable() {
    return this.getStringAttribute('ipv4_filter_variable');
  }
  public set ipv4FilterVariable(value: string) {
    this._ipv4FilterVariable = value;
  }
  public resetIpv4FilterVariable() {
    this._ipv4FilterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FilterVariableInput() {
    return this._ipv4FilterVariable;
  }

  // ipv4_max_metric_router_lsas - computed: false, optional: true, required: false
  private _ipv4MaxMetricRouterLsas = new CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasList(this, "ipv4_max_metric_router_lsas", false);
  public get ipv4MaxMetricRouterLsas() {
    return this._ipv4MaxMetricRouterLsas;
  }
  public putIpv4MaxMetricRouterLsas(value: CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas[] | cdktf.IResolvable) {
    this._ipv4MaxMetricRouterLsas.internalValue = value;
  }
  public resetIpv4MaxMetricRouterLsas() {
    this._ipv4MaxMetricRouterLsas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaxMetricRouterLsasInput() {
    return this._ipv4MaxMetricRouterLsas.internalValue;
  }

  // ipv4_policy_name - computed: false, optional: true, required: false
  private _ipv4PolicyName?: string; 
  public get ipv4PolicyName() {
    return this.getStringAttribute('ipv4_policy_name');
  }
  public set ipv4PolicyName(value: string) {
    this._ipv4PolicyName = value;
  }
  public resetIpv4PolicyName() {
    this._ipv4PolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PolicyNameInput() {
    return this._ipv4PolicyName;
  }

  // ipv4_policy_name_variable - computed: false, optional: true, required: false
  private _ipv4PolicyNameVariable?: string; 
  public get ipv4PolicyNameVariable() {
    return this.getStringAttribute('ipv4_policy_name_variable');
  }
  public set ipv4PolicyNameVariable(value: string) {
    this._ipv4PolicyNameVariable = value;
  }
  public resetIpv4PolicyNameVariable() {
    this._ipv4PolicyNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PolicyNameVariableInput() {
    return this._ipv4PolicyNameVariable;
  }

  // ipv4_redistributes - computed: false, optional: true, required: false
  private _ipv4Redistributes = new CiscoOspfv3FeatureTemplateIpv4RedistributesList(this, "ipv4_redistributes", false);
  public get ipv4Redistributes() {
    return this._ipv4Redistributes;
  }
  public putIpv4Redistributes(value: CiscoOspfv3FeatureTemplateIpv4Redistributes[] | cdktf.IResolvable) {
    this._ipv4Redistributes.internalValue = value;
  }
  public resetIpv4Redistributes() {
    this._ipv4Redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RedistributesInput() {
    return this._ipv4Redistributes.internalValue;
  }

  // ipv4_router_id - computed: false, optional: true, required: false
  private _ipv4RouterId?: string; 
  public get ipv4RouterId() {
    return this.getStringAttribute('ipv4_router_id');
  }
  public set ipv4RouterId(value: string) {
    this._ipv4RouterId = value;
  }
  public resetIpv4RouterId() {
    this._ipv4RouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouterIdInput() {
    return this._ipv4RouterId;
  }

  // ipv4_router_id_variable - computed: false, optional: true, required: false
  private _ipv4RouterIdVariable?: string; 
  public get ipv4RouterIdVariable() {
    return this.getStringAttribute('ipv4_router_id_variable');
  }
  public set ipv4RouterIdVariable(value: string) {
    this._ipv4RouterIdVariable = value;
  }
  public resetIpv4RouterIdVariable() {
    this._ipv4RouterIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouterIdVariableInput() {
    return this._ipv4RouterIdVariable;
  }

  // ipv4_timers_spf_delay - computed: false, optional: true, required: false
  private _ipv4TimersSpfDelay?: number; 
  public get ipv4TimersSpfDelay() {
    return this.getNumberAttribute('ipv4_timers_spf_delay');
  }
  public set ipv4TimersSpfDelay(value: number) {
    this._ipv4TimersSpfDelay = value;
  }
  public resetIpv4TimersSpfDelay() {
    this._ipv4TimersSpfDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TimersSpfDelayInput() {
    return this._ipv4TimersSpfDelay;
  }

  // ipv4_timers_spf_delay_variable - computed: false, optional: true, required: false
  private _ipv4TimersSpfDelayVariable?: string; 
  public get ipv4TimersSpfDelayVariable() {
    return this.getStringAttribute('ipv4_timers_spf_delay_variable');
  }
  public set ipv4TimersSpfDelayVariable(value: string) {
    this._ipv4TimersSpfDelayVariable = value;
  }
  public resetIpv4TimersSpfDelayVariable() {
    this._ipv4TimersSpfDelayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TimersSpfDelayVariableInput() {
    return this._ipv4TimersSpfDelayVariable;
  }

  // ipv4_timers_spf_initial_hold - computed: false, optional: true, required: false
  private _ipv4TimersSpfInitialHold?: number; 
  public get ipv4TimersSpfInitialHold() {
    return this.getNumberAttribute('ipv4_timers_spf_initial_hold');
  }
  public set ipv4TimersSpfInitialHold(value: number) {
    this._ipv4TimersSpfInitialHold = value;
  }
  public resetIpv4TimersSpfInitialHold() {
    this._ipv4TimersSpfInitialHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TimersSpfInitialHoldInput() {
    return this._ipv4TimersSpfInitialHold;
  }

  // ipv4_timers_spf_initial_hold_variable - computed: false, optional: true, required: false
  private _ipv4TimersSpfInitialHoldVariable?: string; 
  public get ipv4TimersSpfInitialHoldVariable() {
    return this.getStringAttribute('ipv4_timers_spf_initial_hold_variable');
  }
  public set ipv4TimersSpfInitialHoldVariable(value: string) {
    this._ipv4TimersSpfInitialHoldVariable = value;
  }
  public resetIpv4TimersSpfInitialHoldVariable() {
    this._ipv4TimersSpfInitialHoldVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TimersSpfInitialHoldVariableInput() {
    return this._ipv4TimersSpfInitialHoldVariable;
  }

  // ipv4_timers_spf_max_hold - computed: false, optional: true, required: false
  private _ipv4TimersSpfMaxHold?: number; 
  public get ipv4TimersSpfMaxHold() {
    return this.getNumberAttribute('ipv4_timers_spf_max_hold');
  }
  public set ipv4TimersSpfMaxHold(value: number) {
    this._ipv4TimersSpfMaxHold = value;
  }
  public resetIpv4TimersSpfMaxHold() {
    this._ipv4TimersSpfMaxHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TimersSpfMaxHoldInput() {
    return this._ipv4TimersSpfMaxHold;
  }

  // ipv4_timers_spf_max_hold_variable - computed: false, optional: true, required: false
  private _ipv4TimersSpfMaxHoldVariable?: string; 
  public get ipv4TimersSpfMaxHoldVariable() {
    return this.getStringAttribute('ipv4_timers_spf_max_hold_variable');
  }
  public set ipv4TimersSpfMaxHoldVariable(value: string) {
    this._ipv4TimersSpfMaxHoldVariable = value;
  }
  public resetIpv4TimersSpfMaxHoldVariable() {
    this._ipv4TimersSpfMaxHoldVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TimersSpfMaxHoldVariableInput() {
    return this._ipv4TimersSpfMaxHoldVariable;
  }

  // ipv6_areas - computed: false, optional: true, required: false
  private _ipv6Areas = new CiscoOspfv3FeatureTemplateIpv6AreasList(this, "ipv6_areas", false);
  public get ipv6Areas() {
    return this._ipv6Areas;
  }
  public putIpv6Areas(value: CiscoOspfv3FeatureTemplateIpv6Areas[] | cdktf.IResolvable) {
    this._ipv6Areas.internalValue = value;
  }
  public resetIpv6Areas() {
    this._ipv6Areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AreasInput() {
    return this._ipv6Areas.internalValue;
  }

  // ipv6_auto_cost_reference_bandwidth - computed: false, optional: true, required: false
  private _ipv6AutoCostReferenceBandwidth?: number; 
  public get ipv6AutoCostReferenceBandwidth() {
    return this.getNumberAttribute('ipv6_auto_cost_reference_bandwidth');
  }
  public set ipv6AutoCostReferenceBandwidth(value: number) {
    this._ipv6AutoCostReferenceBandwidth = value;
  }
  public resetIpv6AutoCostReferenceBandwidth() {
    this._ipv6AutoCostReferenceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoCostReferenceBandwidthInput() {
    return this._ipv6AutoCostReferenceBandwidth;
  }

  // ipv6_auto_cost_reference_bandwidth_variable - computed: false, optional: true, required: false
  private _ipv6AutoCostReferenceBandwidthVariable?: string; 
  public get ipv6AutoCostReferenceBandwidthVariable() {
    return this.getStringAttribute('ipv6_auto_cost_reference_bandwidth_variable');
  }
  public set ipv6AutoCostReferenceBandwidthVariable(value: string) {
    this._ipv6AutoCostReferenceBandwidthVariable = value;
  }
  public resetIpv6AutoCostReferenceBandwidthVariable() {
    this._ipv6AutoCostReferenceBandwidthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoCostReferenceBandwidthVariableInput() {
    return this._ipv6AutoCostReferenceBandwidthVariable;
  }

  // ipv6_compatible_rfc1583 - computed: false, optional: true, required: false
  private _ipv6CompatibleRfc1583?: boolean | cdktf.IResolvable; 
  public get ipv6CompatibleRfc1583() {
    return this.getBooleanAttribute('ipv6_compatible_rfc1583');
  }
  public set ipv6CompatibleRfc1583(value: boolean | cdktf.IResolvable) {
    this._ipv6CompatibleRfc1583 = value;
  }
  public resetIpv6CompatibleRfc1583() {
    this._ipv6CompatibleRfc1583 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CompatibleRfc1583Input() {
    return this._ipv6CompatibleRfc1583;
  }

  // ipv6_compatible_rfc1583_variable - computed: false, optional: true, required: false
  private _ipv6CompatibleRfc1583Variable?: string; 
  public get ipv6CompatibleRfc1583Variable() {
    return this.getStringAttribute('ipv6_compatible_rfc1583_variable');
  }
  public set ipv6CompatibleRfc1583Variable(value: string) {
    this._ipv6CompatibleRfc1583Variable = value;
  }
  public resetIpv6CompatibleRfc1583Variable() {
    this._ipv6CompatibleRfc1583Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CompatibleRfc1583VariableInput() {
    return this._ipv6CompatibleRfc1583Variable;
  }

  // ipv6_default_information_originate - computed: false, optional: true, required: false
  private _ipv6DefaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get ipv6DefaultInformationOriginate() {
    return this.getBooleanAttribute('ipv6_default_information_originate');
  }
  public set ipv6DefaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._ipv6DefaultInformationOriginate = value;
  }
  public resetIpv6DefaultInformationOriginate() {
    this._ipv6DefaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultInformationOriginateInput() {
    return this._ipv6DefaultInformationOriginate;
  }

  // ipv6_default_information_originate_always - computed: false, optional: true, required: false
  private _ipv6DefaultInformationOriginateAlways?: boolean | cdktf.IResolvable; 
  public get ipv6DefaultInformationOriginateAlways() {
    return this.getBooleanAttribute('ipv6_default_information_originate_always');
  }
  public set ipv6DefaultInformationOriginateAlways(value: boolean | cdktf.IResolvable) {
    this._ipv6DefaultInformationOriginateAlways = value;
  }
  public resetIpv6DefaultInformationOriginateAlways() {
    this._ipv6DefaultInformationOriginateAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultInformationOriginateAlwaysInput() {
    return this._ipv6DefaultInformationOriginateAlways;
  }

  // ipv6_default_information_originate_always_variable - computed: false, optional: true, required: false
  private _ipv6DefaultInformationOriginateAlwaysVariable?: string; 
  public get ipv6DefaultInformationOriginateAlwaysVariable() {
    return this.getStringAttribute('ipv6_default_information_originate_always_variable');
  }
  public set ipv6DefaultInformationOriginateAlwaysVariable(value: string) {
    this._ipv6DefaultInformationOriginateAlwaysVariable = value;
  }
  public resetIpv6DefaultInformationOriginateAlwaysVariable() {
    this._ipv6DefaultInformationOriginateAlwaysVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultInformationOriginateAlwaysVariableInput() {
    return this._ipv6DefaultInformationOriginateAlwaysVariable;
  }

  // ipv6_default_information_originate_metric - computed: false, optional: true, required: false
  private _ipv6DefaultInformationOriginateMetric?: number; 
  public get ipv6DefaultInformationOriginateMetric() {
    return this.getNumberAttribute('ipv6_default_information_originate_metric');
  }
  public set ipv6DefaultInformationOriginateMetric(value: number) {
    this._ipv6DefaultInformationOriginateMetric = value;
  }
  public resetIpv6DefaultInformationOriginateMetric() {
    this._ipv6DefaultInformationOriginateMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultInformationOriginateMetricInput() {
    return this._ipv6DefaultInformationOriginateMetric;
  }

  // ipv6_default_information_originate_metric_type - computed: false, optional: true, required: false
  private _ipv6DefaultInformationOriginateMetricType?: string; 
  public get ipv6DefaultInformationOriginateMetricType() {
    return this.getStringAttribute('ipv6_default_information_originate_metric_type');
  }
  public set ipv6DefaultInformationOriginateMetricType(value: string) {
    this._ipv6DefaultInformationOriginateMetricType = value;
  }
  public resetIpv6DefaultInformationOriginateMetricType() {
    this._ipv6DefaultInformationOriginateMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultInformationOriginateMetricTypeInput() {
    return this._ipv6DefaultInformationOriginateMetricType;
  }

  // ipv6_default_information_originate_metric_type_variable - computed: false, optional: true, required: false
  private _ipv6DefaultInformationOriginateMetricTypeVariable?: string; 
  public get ipv6DefaultInformationOriginateMetricTypeVariable() {
    return this.getStringAttribute('ipv6_default_information_originate_metric_type_variable');
  }
  public set ipv6DefaultInformationOriginateMetricTypeVariable(value: string) {
    this._ipv6DefaultInformationOriginateMetricTypeVariable = value;
  }
  public resetIpv6DefaultInformationOriginateMetricTypeVariable() {
    this._ipv6DefaultInformationOriginateMetricTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultInformationOriginateMetricTypeVariableInput() {
    return this._ipv6DefaultInformationOriginateMetricTypeVariable;
  }

  // ipv6_default_information_originate_metric_variable - computed: false, optional: true, required: false
  private _ipv6DefaultInformationOriginateMetricVariable?: string; 
  public get ipv6DefaultInformationOriginateMetricVariable() {
    return this.getStringAttribute('ipv6_default_information_originate_metric_variable');
  }
  public set ipv6DefaultInformationOriginateMetricVariable(value: string) {
    this._ipv6DefaultInformationOriginateMetricVariable = value;
  }
  public resetIpv6DefaultInformationOriginateMetricVariable() {
    this._ipv6DefaultInformationOriginateMetricVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultInformationOriginateMetricVariableInput() {
    return this._ipv6DefaultInformationOriginateMetricVariable;
  }

  // ipv6_distance - computed: false, optional: true, required: false
  private _ipv6Distance?: number; 
  public get ipv6Distance() {
    return this.getNumberAttribute('ipv6_distance');
  }
  public set ipv6Distance(value: number) {
    this._ipv6Distance = value;
  }
  public resetIpv6Distance() {
    this._ipv6Distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DistanceInput() {
    return this._ipv6Distance;
  }

  // ipv6_distance_external - computed: false, optional: true, required: false
  private _ipv6DistanceExternal?: number; 
  public get ipv6DistanceExternal() {
    return this.getNumberAttribute('ipv6_distance_external');
  }
  public set ipv6DistanceExternal(value: number) {
    this._ipv6DistanceExternal = value;
  }
  public resetIpv6DistanceExternal() {
    this._ipv6DistanceExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DistanceExternalInput() {
    return this._ipv6DistanceExternal;
  }

  // ipv6_distance_external_variable - computed: false, optional: true, required: false
  private _ipv6DistanceExternalVariable?: string; 
  public get ipv6DistanceExternalVariable() {
    return this.getStringAttribute('ipv6_distance_external_variable');
  }
  public set ipv6DistanceExternalVariable(value: string) {
    this._ipv6DistanceExternalVariable = value;
  }
  public resetIpv6DistanceExternalVariable() {
    this._ipv6DistanceExternalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DistanceExternalVariableInput() {
    return this._ipv6DistanceExternalVariable;
  }

  // ipv6_distance_inter_area - computed: false, optional: true, required: false
  private _ipv6DistanceInterArea?: number; 
  public get ipv6DistanceInterArea() {
    return this.getNumberAttribute('ipv6_distance_inter_area');
  }
  public set ipv6DistanceInterArea(value: number) {
    this._ipv6DistanceInterArea = value;
  }
  public resetIpv6DistanceInterArea() {
    this._ipv6DistanceInterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DistanceInterAreaInput() {
    return this._ipv6DistanceInterArea;
  }

  // ipv6_distance_inter_area_variable - computed: false, optional: true, required: false
  private _ipv6DistanceInterAreaVariable?: string; 
  public get ipv6DistanceInterAreaVariable() {
    return this.getStringAttribute('ipv6_distance_inter_area_variable');
  }
  public set ipv6DistanceInterAreaVariable(value: string) {
    this._ipv6DistanceInterAreaVariable = value;
  }
  public resetIpv6DistanceInterAreaVariable() {
    this._ipv6DistanceInterAreaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DistanceInterAreaVariableInput() {
    return this._ipv6DistanceInterAreaVariable;
  }

  // ipv6_distance_intra_area - computed: false, optional: true, required: false
  private _ipv6DistanceIntraArea?: number; 
  public get ipv6DistanceIntraArea() {
    return this.getNumberAttribute('ipv6_distance_intra_area');
  }
  public set ipv6DistanceIntraArea(value: number) {
    this._ipv6DistanceIntraArea = value;
  }
  public resetIpv6DistanceIntraArea() {
    this._ipv6DistanceIntraArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DistanceIntraAreaInput() {
    return this._ipv6DistanceIntraArea;
  }

  // ipv6_distance_intra_area_variable - computed: false, optional: true, required: false
  private _ipv6DistanceIntraAreaVariable?: string; 
  public get ipv6DistanceIntraAreaVariable() {
    return this.getStringAttribute('ipv6_distance_intra_area_variable');
  }
  public set ipv6DistanceIntraAreaVariable(value: string) {
    this._ipv6DistanceIntraAreaVariable = value;
  }
  public resetIpv6DistanceIntraAreaVariable() {
    this._ipv6DistanceIntraAreaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DistanceIntraAreaVariableInput() {
    return this._ipv6DistanceIntraAreaVariable;
  }

  // ipv6_distance_variable - computed: false, optional: true, required: false
  private _ipv6DistanceVariable?: string; 
  public get ipv6DistanceVariable() {
    return this.getStringAttribute('ipv6_distance_variable');
  }
  public set ipv6DistanceVariable(value: string) {
    this._ipv6DistanceVariable = value;
  }
  public resetIpv6DistanceVariable() {
    this._ipv6DistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DistanceVariableInput() {
    return this._ipv6DistanceVariable;
  }

  // ipv6_filter - computed: false, optional: true, required: false
  private _ipv6Filter?: boolean | cdktf.IResolvable; 
  public get ipv6Filter() {
    return this.getBooleanAttribute('ipv6_filter');
  }
  public set ipv6Filter(value: boolean | cdktf.IResolvable) {
    this._ipv6Filter = value;
  }
  public resetIpv6Filter() {
    this._ipv6Filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FilterInput() {
    return this._ipv6Filter;
  }

  // ipv6_filter_variable - computed: false, optional: true, required: false
  private _ipv6FilterVariable?: string; 
  public get ipv6FilterVariable() {
    return this.getStringAttribute('ipv6_filter_variable');
  }
  public set ipv6FilterVariable(value: string) {
    this._ipv6FilterVariable = value;
  }
  public resetIpv6FilterVariable() {
    this._ipv6FilterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FilterVariableInput() {
    return this._ipv6FilterVariable;
  }

  // ipv6_max_metric_router_lsas - computed: false, optional: true, required: false
  private _ipv6MaxMetricRouterLsas = new CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasList(this, "ipv6_max_metric_router_lsas", false);
  public get ipv6MaxMetricRouterLsas() {
    return this._ipv6MaxMetricRouterLsas;
  }
  public putIpv6MaxMetricRouterLsas(value: CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas[] | cdktf.IResolvable) {
    this._ipv6MaxMetricRouterLsas.internalValue = value;
  }
  public resetIpv6MaxMetricRouterLsas() {
    this._ipv6MaxMetricRouterLsas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaxMetricRouterLsasInput() {
    return this._ipv6MaxMetricRouterLsas.internalValue;
  }

  // ipv6_policy_name - computed: false, optional: true, required: false
  private _ipv6PolicyName?: string; 
  public get ipv6PolicyName() {
    return this.getStringAttribute('ipv6_policy_name');
  }
  public set ipv6PolicyName(value: string) {
    this._ipv6PolicyName = value;
  }
  public resetIpv6PolicyName() {
    this._ipv6PolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PolicyNameInput() {
    return this._ipv6PolicyName;
  }

  // ipv6_policy_name_variable - computed: false, optional: true, required: false
  private _ipv6PolicyNameVariable?: string; 
  public get ipv6PolicyNameVariable() {
    return this.getStringAttribute('ipv6_policy_name_variable');
  }
  public set ipv6PolicyNameVariable(value: string) {
    this._ipv6PolicyNameVariable = value;
  }
  public resetIpv6PolicyNameVariable() {
    this._ipv6PolicyNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PolicyNameVariableInput() {
    return this._ipv6PolicyNameVariable;
  }

  // ipv6_redistributes - computed: false, optional: true, required: false
  private _ipv6Redistributes = new CiscoOspfv3FeatureTemplateIpv6RedistributesList(this, "ipv6_redistributes", false);
  public get ipv6Redistributes() {
    return this._ipv6Redistributes;
  }
  public putIpv6Redistributes(value: CiscoOspfv3FeatureTemplateIpv6Redistributes[] | cdktf.IResolvable) {
    this._ipv6Redistributes.internalValue = value;
  }
  public resetIpv6Redistributes() {
    this._ipv6Redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RedistributesInput() {
    return this._ipv6Redistributes.internalValue;
  }

  // ipv6_router_id - computed: false, optional: true, required: false
  private _ipv6RouterId?: string; 
  public get ipv6RouterId() {
    return this.getStringAttribute('ipv6_router_id');
  }
  public set ipv6RouterId(value: string) {
    this._ipv6RouterId = value;
  }
  public resetIpv6RouterId() {
    this._ipv6RouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouterIdInput() {
    return this._ipv6RouterId;
  }

  // ipv6_router_id_variable - computed: false, optional: true, required: false
  private _ipv6RouterIdVariable?: string; 
  public get ipv6RouterIdVariable() {
    return this.getStringAttribute('ipv6_router_id_variable');
  }
  public set ipv6RouterIdVariable(value: string) {
    this._ipv6RouterIdVariable = value;
  }
  public resetIpv6RouterIdVariable() {
    this._ipv6RouterIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouterIdVariableInput() {
    return this._ipv6RouterIdVariable;
  }

  // ipv6_timers_spf_delay - computed: false, optional: true, required: false
  private _ipv6TimersSpfDelay?: number; 
  public get ipv6TimersSpfDelay() {
    return this.getNumberAttribute('ipv6_timers_spf_delay');
  }
  public set ipv6TimersSpfDelay(value: number) {
    this._ipv6TimersSpfDelay = value;
  }
  public resetIpv6TimersSpfDelay() {
    this._ipv6TimersSpfDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TimersSpfDelayInput() {
    return this._ipv6TimersSpfDelay;
  }

  // ipv6_timers_spf_delay_variable - computed: false, optional: true, required: false
  private _ipv6TimersSpfDelayVariable?: string; 
  public get ipv6TimersSpfDelayVariable() {
    return this.getStringAttribute('ipv6_timers_spf_delay_variable');
  }
  public set ipv6TimersSpfDelayVariable(value: string) {
    this._ipv6TimersSpfDelayVariable = value;
  }
  public resetIpv6TimersSpfDelayVariable() {
    this._ipv6TimersSpfDelayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TimersSpfDelayVariableInput() {
    return this._ipv6TimersSpfDelayVariable;
  }

  // ipv6_timers_spf_initial_hold - computed: false, optional: true, required: false
  private _ipv6TimersSpfInitialHold?: number; 
  public get ipv6TimersSpfInitialHold() {
    return this.getNumberAttribute('ipv6_timers_spf_initial_hold');
  }
  public set ipv6TimersSpfInitialHold(value: number) {
    this._ipv6TimersSpfInitialHold = value;
  }
  public resetIpv6TimersSpfInitialHold() {
    this._ipv6TimersSpfInitialHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TimersSpfInitialHoldInput() {
    return this._ipv6TimersSpfInitialHold;
  }

  // ipv6_timers_spf_initial_hold_variable - computed: false, optional: true, required: false
  private _ipv6TimersSpfInitialHoldVariable?: string; 
  public get ipv6TimersSpfInitialHoldVariable() {
    return this.getStringAttribute('ipv6_timers_spf_initial_hold_variable');
  }
  public set ipv6TimersSpfInitialHoldVariable(value: string) {
    this._ipv6TimersSpfInitialHoldVariable = value;
  }
  public resetIpv6TimersSpfInitialHoldVariable() {
    this._ipv6TimersSpfInitialHoldVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TimersSpfInitialHoldVariableInput() {
    return this._ipv6TimersSpfInitialHoldVariable;
  }

  // ipv6_timers_spf_max_hold - computed: false, optional: true, required: false
  private _ipv6TimersSpfMaxHold?: number; 
  public get ipv6TimersSpfMaxHold() {
    return this.getNumberAttribute('ipv6_timers_spf_max_hold');
  }
  public set ipv6TimersSpfMaxHold(value: number) {
    this._ipv6TimersSpfMaxHold = value;
  }
  public resetIpv6TimersSpfMaxHold() {
    this._ipv6TimersSpfMaxHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TimersSpfMaxHoldInput() {
    return this._ipv6TimersSpfMaxHold;
  }

  // ipv6_timers_spf_max_hold_variable - computed: false, optional: true, required: false
  private _ipv6TimersSpfMaxHoldVariable?: string; 
  public get ipv6TimersSpfMaxHoldVariable() {
    return this.getStringAttribute('ipv6_timers_spf_max_hold_variable');
  }
  public set ipv6TimersSpfMaxHoldVariable(value: string) {
    this._ipv6TimersSpfMaxHoldVariable = value;
  }
  public resetIpv6TimersSpfMaxHoldVariable() {
    this._ipv6TimersSpfMaxHoldVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TimersSpfMaxHoldVariableInput() {
    return this._ipv6TimersSpfMaxHoldVariable;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      ipv4_areas: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv4AreasToTerraform, false)(this._ipv4Areas.internalValue),
      ipv4_auto_cost_reference_bandwidth: cdktf.numberToTerraform(this._ipv4AutoCostReferenceBandwidth),
      ipv4_auto_cost_reference_bandwidth_variable: cdktf.stringToTerraform(this._ipv4AutoCostReferenceBandwidthVariable),
      ipv4_compatible_rfc1583: cdktf.booleanToTerraform(this._ipv4CompatibleRfc1583),
      ipv4_compatible_rfc1583_variable: cdktf.stringToTerraform(this._ipv4CompatibleRfc1583Variable),
      ipv4_default_information_originate: cdktf.booleanToTerraform(this._ipv4DefaultInformationOriginate),
      ipv4_default_information_originate_always: cdktf.booleanToTerraform(this._ipv4DefaultInformationOriginateAlways),
      ipv4_default_information_originate_always_variable: cdktf.stringToTerraform(this._ipv4DefaultInformationOriginateAlwaysVariable),
      ipv4_default_information_originate_metric: cdktf.numberToTerraform(this._ipv4DefaultInformationOriginateMetric),
      ipv4_default_information_originate_metric_type: cdktf.stringToTerraform(this._ipv4DefaultInformationOriginateMetricType),
      ipv4_default_information_originate_metric_type_variable: cdktf.stringToTerraform(this._ipv4DefaultInformationOriginateMetricTypeVariable),
      ipv4_default_information_originate_metric_variable: cdktf.stringToTerraform(this._ipv4DefaultInformationOriginateMetricVariable),
      ipv4_distance: cdktf.numberToTerraform(this._ipv4Distance),
      ipv4_distance_external: cdktf.numberToTerraform(this._ipv4DistanceExternal),
      ipv4_distance_external_variable: cdktf.stringToTerraform(this._ipv4DistanceExternalVariable),
      ipv4_distance_inter_area: cdktf.numberToTerraform(this._ipv4DistanceInterArea),
      ipv4_distance_inter_area_variable: cdktf.stringToTerraform(this._ipv4DistanceInterAreaVariable),
      ipv4_distance_intra_area: cdktf.numberToTerraform(this._ipv4DistanceIntraArea),
      ipv4_distance_intra_area_variable: cdktf.stringToTerraform(this._ipv4DistanceIntraAreaVariable),
      ipv4_distance_variable: cdktf.stringToTerraform(this._ipv4DistanceVariable),
      ipv4_filter: cdktf.booleanToTerraform(this._ipv4Filter),
      ipv4_filter_variable: cdktf.stringToTerraform(this._ipv4FilterVariable),
      ipv4_max_metric_router_lsas: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasToTerraform, false)(this._ipv4MaxMetricRouterLsas.internalValue),
      ipv4_policy_name: cdktf.stringToTerraform(this._ipv4PolicyName),
      ipv4_policy_name_variable: cdktf.stringToTerraform(this._ipv4PolicyNameVariable),
      ipv4_redistributes: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv4RedistributesToTerraform, false)(this._ipv4Redistributes.internalValue),
      ipv4_router_id: cdktf.stringToTerraform(this._ipv4RouterId),
      ipv4_router_id_variable: cdktf.stringToTerraform(this._ipv4RouterIdVariable),
      ipv4_timers_spf_delay: cdktf.numberToTerraform(this._ipv4TimersSpfDelay),
      ipv4_timers_spf_delay_variable: cdktf.stringToTerraform(this._ipv4TimersSpfDelayVariable),
      ipv4_timers_spf_initial_hold: cdktf.numberToTerraform(this._ipv4TimersSpfInitialHold),
      ipv4_timers_spf_initial_hold_variable: cdktf.stringToTerraform(this._ipv4TimersSpfInitialHoldVariable),
      ipv4_timers_spf_max_hold: cdktf.numberToTerraform(this._ipv4TimersSpfMaxHold),
      ipv4_timers_spf_max_hold_variable: cdktf.stringToTerraform(this._ipv4TimersSpfMaxHoldVariable),
      ipv6_areas: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv6AreasToTerraform, false)(this._ipv6Areas.internalValue),
      ipv6_auto_cost_reference_bandwidth: cdktf.numberToTerraform(this._ipv6AutoCostReferenceBandwidth),
      ipv6_auto_cost_reference_bandwidth_variable: cdktf.stringToTerraform(this._ipv6AutoCostReferenceBandwidthVariable),
      ipv6_compatible_rfc1583: cdktf.booleanToTerraform(this._ipv6CompatibleRfc1583),
      ipv6_compatible_rfc1583_variable: cdktf.stringToTerraform(this._ipv6CompatibleRfc1583Variable),
      ipv6_default_information_originate: cdktf.booleanToTerraform(this._ipv6DefaultInformationOriginate),
      ipv6_default_information_originate_always: cdktf.booleanToTerraform(this._ipv6DefaultInformationOriginateAlways),
      ipv6_default_information_originate_always_variable: cdktf.stringToTerraform(this._ipv6DefaultInformationOriginateAlwaysVariable),
      ipv6_default_information_originate_metric: cdktf.numberToTerraform(this._ipv6DefaultInformationOriginateMetric),
      ipv6_default_information_originate_metric_type: cdktf.stringToTerraform(this._ipv6DefaultInformationOriginateMetricType),
      ipv6_default_information_originate_metric_type_variable: cdktf.stringToTerraform(this._ipv6DefaultInformationOriginateMetricTypeVariable),
      ipv6_default_information_originate_metric_variable: cdktf.stringToTerraform(this._ipv6DefaultInformationOriginateMetricVariable),
      ipv6_distance: cdktf.numberToTerraform(this._ipv6Distance),
      ipv6_distance_external: cdktf.numberToTerraform(this._ipv6DistanceExternal),
      ipv6_distance_external_variable: cdktf.stringToTerraform(this._ipv6DistanceExternalVariable),
      ipv6_distance_inter_area: cdktf.numberToTerraform(this._ipv6DistanceInterArea),
      ipv6_distance_inter_area_variable: cdktf.stringToTerraform(this._ipv6DistanceInterAreaVariable),
      ipv6_distance_intra_area: cdktf.numberToTerraform(this._ipv6DistanceIntraArea),
      ipv6_distance_intra_area_variable: cdktf.stringToTerraform(this._ipv6DistanceIntraAreaVariable),
      ipv6_distance_variable: cdktf.stringToTerraform(this._ipv6DistanceVariable),
      ipv6_filter: cdktf.booleanToTerraform(this._ipv6Filter),
      ipv6_filter_variable: cdktf.stringToTerraform(this._ipv6FilterVariable),
      ipv6_max_metric_router_lsas: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasToTerraform, false)(this._ipv6MaxMetricRouterLsas.internalValue),
      ipv6_policy_name: cdktf.stringToTerraform(this._ipv6PolicyName),
      ipv6_policy_name_variable: cdktf.stringToTerraform(this._ipv6PolicyNameVariable),
      ipv6_redistributes: cdktf.listMapper(ciscoOspfv3FeatureTemplateIpv6RedistributesToTerraform, false)(this._ipv6Redistributes.internalValue),
      ipv6_router_id: cdktf.stringToTerraform(this._ipv6RouterId),
      ipv6_router_id_variable: cdktf.stringToTerraform(this._ipv6RouterIdVariable),
      ipv6_timers_spf_delay: cdktf.numberToTerraform(this._ipv6TimersSpfDelay),
      ipv6_timers_spf_delay_variable: cdktf.stringToTerraform(this._ipv6TimersSpfDelayVariable),
      ipv6_timers_spf_initial_hold: cdktf.numberToTerraform(this._ipv6TimersSpfInitialHold),
      ipv6_timers_spf_initial_hold_variable: cdktf.stringToTerraform(this._ipv6TimersSpfInitialHoldVariable),
      ipv6_timers_spf_max_hold: cdktf.numberToTerraform(this._ipv6TimersSpfMaxHold),
      ipv6_timers_spf_max_hold_variable: cdktf.stringToTerraform(this._ipv6TimersSpfMaxHoldVariable),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_areas: {
        value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv4AreasToHclTerraform, false)(this._ipv4Areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfv3FeatureTemplateIpv4AreasList",
      },
      ipv4_auto_cost_reference_bandwidth: {
        value: cdktf.numberToHclTerraform(this._ipv4AutoCostReferenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_auto_cost_reference_bandwidth_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4AutoCostReferenceBandwidthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_compatible_rfc1583: {
        value: cdktf.booleanToHclTerraform(this._ipv4CompatibleRfc1583),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_compatible_rfc1583_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4CompatibleRfc1583Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_default_information_originate: {
        value: cdktf.booleanToHclTerraform(this._ipv4DefaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_default_information_originate_always: {
        value: cdktf.booleanToHclTerraform(this._ipv4DefaultInformationOriginateAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_default_information_originate_always_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DefaultInformationOriginateAlwaysVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_default_information_originate_metric: {
        value: cdktf.numberToHclTerraform(this._ipv4DefaultInformationOriginateMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_default_information_originate_metric_type: {
        value: cdktf.stringToHclTerraform(this._ipv4DefaultInformationOriginateMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_default_information_originate_metric_type_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DefaultInformationOriginateMetricTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_default_information_originate_metric_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DefaultInformationOriginateMetricVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_distance: {
        value: cdktf.numberToHclTerraform(this._ipv4Distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_distance_external: {
        value: cdktf.numberToHclTerraform(this._ipv4DistanceExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_distance_external_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DistanceExternalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_distance_inter_area: {
        value: cdktf.numberToHclTerraform(this._ipv4DistanceInterArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_distance_inter_area_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DistanceInterAreaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_distance_intra_area: {
        value: cdktf.numberToHclTerraform(this._ipv4DistanceIntraArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_distance_intra_area_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DistanceIntraAreaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_distance_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DistanceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_filter: {
        value: cdktf.booleanToHclTerraform(this._ipv4Filter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_filter_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4FilterVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_max_metric_router_lsas: {
        value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasToHclTerraform, false)(this._ipv4MaxMetricRouterLsas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasList",
      },
      ipv4_policy_name: {
        value: cdktf.stringToHclTerraform(this._ipv4PolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_policy_name_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4PolicyNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_redistributes: {
        value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv4RedistributesToHclTerraform, false)(this._ipv4Redistributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfv3FeatureTemplateIpv4RedistributesList",
      },
      ipv4_router_id: {
        value: cdktf.stringToHclTerraform(this._ipv4RouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_router_id_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4RouterIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_timers_spf_delay: {
        value: cdktf.numberToHclTerraform(this._ipv4TimersSpfDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_timers_spf_delay_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4TimersSpfDelayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_timers_spf_initial_hold: {
        value: cdktf.numberToHclTerraform(this._ipv4TimersSpfInitialHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_timers_spf_initial_hold_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4TimersSpfInitialHoldVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_timers_spf_max_hold: {
        value: cdktf.numberToHclTerraform(this._ipv4TimersSpfMaxHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_timers_spf_max_hold_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4TimersSpfMaxHoldVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_areas: {
        value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv6AreasToHclTerraform, false)(this._ipv6Areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfv3FeatureTemplateIpv6AreasList",
      },
      ipv6_auto_cost_reference_bandwidth: {
        value: cdktf.numberToHclTerraform(this._ipv6AutoCostReferenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_auto_cost_reference_bandwidth_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6AutoCostReferenceBandwidthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_compatible_rfc1583: {
        value: cdktf.booleanToHclTerraform(this._ipv6CompatibleRfc1583),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_compatible_rfc1583_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6CompatibleRfc1583Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_default_information_originate: {
        value: cdktf.booleanToHclTerraform(this._ipv6DefaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_default_information_originate_always: {
        value: cdktf.booleanToHclTerraform(this._ipv6DefaultInformationOriginateAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_default_information_originate_always_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DefaultInformationOriginateAlwaysVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_default_information_originate_metric: {
        value: cdktf.numberToHclTerraform(this._ipv6DefaultInformationOriginateMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_default_information_originate_metric_type: {
        value: cdktf.stringToHclTerraform(this._ipv6DefaultInformationOriginateMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_default_information_originate_metric_type_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DefaultInformationOriginateMetricTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_default_information_originate_metric_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DefaultInformationOriginateMetricVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_distance: {
        value: cdktf.numberToHclTerraform(this._ipv6Distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_distance_external: {
        value: cdktf.numberToHclTerraform(this._ipv6DistanceExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_distance_external_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DistanceExternalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_distance_inter_area: {
        value: cdktf.numberToHclTerraform(this._ipv6DistanceInterArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_distance_inter_area_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DistanceInterAreaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_distance_intra_area: {
        value: cdktf.numberToHclTerraform(this._ipv6DistanceIntraArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_distance_intra_area_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DistanceIntraAreaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_distance_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DistanceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_filter: {
        value: cdktf.booleanToHclTerraform(this._ipv6Filter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_filter_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6FilterVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_max_metric_router_lsas: {
        value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasToHclTerraform, false)(this._ipv6MaxMetricRouterLsas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasList",
      },
      ipv6_policy_name: {
        value: cdktf.stringToHclTerraform(this._ipv6PolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_policy_name_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6PolicyNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_redistributes: {
        value: cdktf.listMapperHcl(ciscoOspfv3FeatureTemplateIpv6RedistributesToHclTerraform, false)(this._ipv6Redistributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfv3FeatureTemplateIpv6RedistributesList",
      },
      ipv6_router_id: {
        value: cdktf.stringToHclTerraform(this._ipv6RouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_router_id_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6RouterIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_timers_spf_delay: {
        value: cdktf.numberToHclTerraform(this._ipv6TimersSpfDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_timers_spf_delay_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6TimersSpfDelayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_timers_spf_initial_hold: {
        value: cdktf.numberToHclTerraform(this._ipv6TimersSpfInitialHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_timers_spf_initial_hold_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6TimersSpfInitialHoldVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_timers_spf_max_hold: {
        value: cdktf.numberToHclTerraform(this._ipv6TimersSpfMaxHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_timers_spf_max_hold_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6TimersSpfMaxHoldVariable),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
