// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceRoutingOspfv3Ipv6FeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure OSPFv3 IPv6 area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#areas ServiceRoutingOspfv3Ipv6Feature#areas}
  */
  readonly areas?: ServiceRoutingOspfv3Ipv6FeatureAreas[] | cdktf.IResolvable;
  /**
  * Distribute default external route into OSPF disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#default_information_originate ServiceRoutingOspfv3Ipv6Feature#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Always advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#default_information_originate_always ServiceRoutingOspfv3Ipv6Feature#default_information_originate_always}
  */
  readonly defaultInformationOriginateAlways?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#default_information_originate_always_variable ServiceRoutingOspfv3Ipv6Feature#default_information_originate_always_variable}
  */
  readonly defaultInformationOriginateAlwaysVariable?: string;
  /**
  * Set metric used to generate default route <0..16777214>
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#default_information_originate_metric ServiceRoutingOspfv3Ipv6Feature#default_information_originate_metric}
  */
  readonly defaultInformationOriginateMetric?: number;
  /**
  * Set default route metric type
  *   - Choices: `type1`, `type2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#default_information_originate_metric_type ServiceRoutingOspfv3Ipv6Feature#default_information_originate_metric_type}
  */
  readonly defaultInformationOriginateMetricType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#default_information_originate_metric_type_variable ServiceRoutingOspfv3Ipv6Feature#default_information_originate_metric_type_variable}
  */
  readonly defaultInformationOriginateMetricTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#default_information_originate_metric_variable ServiceRoutingOspfv3Ipv6Feature#default_information_originate_metric_variable}
  */
  readonly defaultInformationOriginateMetricVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#description ServiceRoutingOspfv3Ipv6Feature#description}
  */
  readonly description?: string;
  /**
  * Distance
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#distance ServiceRoutingOspfv3Ipv6Feature#distance}
  */
  readonly distance?: number;
  /**
  * Set distance for external routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#distance_external ServiceRoutingOspfv3Ipv6Feature#distance_external}
  */
  readonly distanceExternal?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#distance_external_variable ServiceRoutingOspfv3Ipv6Feature#distance_external_variable}
  */
  readonly distanceExternalVariable?: string;
  /**
  * Set distance for inter-area routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#distance_inter_area ServiceRoutingOspfv3Ipv6Feature#distance_inter_area}
  */
  readonly distanceInterArea?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#distance_inter_area_variable ServiceRoutingOspfv3Ipv6Feature#distance_inter_area_variable}
  */
  readonly distanceInterAreaVariable?: string;
  /**
  * Set distance for intra-area routes
  *   - Range: `1`-`254`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#distance_intra_area ServiceRoutingOspfv3Ipv6Feature#distance_intra_area}
  */
  readonly distanceIntraArea?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#distance_intra_area_variable ServiceRoutingOspfv3Ipv6Feature#distance_intra_area_variable}
  */
  readonly distanceIntraAreaVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#distance_variable ServiceRoutingOspfv3Ipv6Feature#distance_variable}
  */
  readonly distanceVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#feature_profile_id ServiceRoutingOspfv3Ipv6Feature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Table map filtered or not
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#filter ServiceRoutingOspfv3Ipv6Feature#filter}
  */
  readonly filter?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#filter_variable ServiceRoutingOspfv3Ipv6Feature#filter_variable}
  */
  readonly filterVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#name ServiceRoutingOspfv3Ipv6Feature#name}
  */
  readonly name: string;
  /**
  * Redistribute routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#redistributes ServiceRoutingOspfv3Ipv6Feature#redistributes}
  */
  readonly redistributes?: ServiceRoutingOspfv3Ipv6FeatureRedistributes[] | cdktf.IResolvable;
  /**
  * Set reference bandwidth method to assign OSPF cost
  *   - Range: `1`-`4294967`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#reference_bandwidth ServiceRoutingOspfv3Ipv6Feature#reference_bandwidth}
  */
  readonly referenceBandwidth?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#reference_bandwidth_variable ServiceRoutingOspfv3Ipv6Feature#reference_bandwidth_variable}
  */
  readonly referenceBandwidthVariable?: string;
  /**
  * Calculate summary route cost based on RFC 1583
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#rfc_1583_compatible ServiceRoutingOspfv3Ipv6Feature#rfc_1583_compatible}
  */
  readonly rfc1583Compatible?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#rfc_1583_compatible_variable ServiceRoutingOspfv3Ipv6Feature#rfc_1583_compatible_variable}
  */
  readonly rfc1583CompatibleVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#route_policy_id ServiceRoutingOspfv3Ipv6Feature#route_policy_id}
  */
  readonly routePolicyId?: string;
  /**
  * Set OSPF router ID to override system IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#router_id ServiceRoutingOspfv3Ipv6Feature#router_id}
  */
  readonly routerId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#router_id_variable ServiceRoutingOspfv3Ipv6Feature#router_id_variable}
  */
  readonly routerIdVariable?: string;
  /**
  * Not advertise maximum metric Router LSA policy by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#router_lsa_action ServiceRoutingOspfv3Ipv6Feature#router_lsa_action}
  */
  readonly routerLsaAction?: string;
  /**
  * Set how long to advertise maximum metric after router boot up
  *   - Range: `5`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#router_lsa_on_startup_time ServiceRoutingOspfv3Ipv6Feature#router_lsa_on_startup_time}
  */
  readonly routerLsaOnStartupTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#router_lsa_on_startup_time_variable ServiceRoutingOspfv3Ipv6Feature#router_lsa_on_startup_time_variable}
  */
  readonly routerLsaOnStartupTimeVariable?: string;
  /**
  * Set delay from first change received until performing SPF calculation
  *   - Range: `1`-`600000`
  *   - Default value: `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#spf_calculation_delay ServiceRoutingOspfv3Ipv6Feature#spf_calculation_delay}
  */
  readonly spfCalculationDelay?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#spf_calculation_delay_variable ServiceRoutingOspfv3Ipv6Feature#spf_calculation_delay_variable}
  */
  readonly spfCalculationDelayVariable?: string;
  /**
  * Set initial hold time between consecutive SPF calculations
  *   - Range: `1`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#spf_initial_hold_time ServiceRoutingOspfv3Ipv6Feature#spf_initial_hold_time}
  */
  readonly spfInitialHoldTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#spf_initial_hold_time_variable ServiceRoutingOspfv3Ipv6Feature#spf_initial_hold_time_variable}
  */
  readonly spfInitialHoldTimeVariable?: string;
  /**
  * Set maximum hold time between consecutive SPF calculations
  *   - Range: `1`-`600000`
  *   - Default value: `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#spf_maximum_hold_time ServiceRoutingOspfv3Ipv6Feature#spf_maximum_hold_time}
  */
  readonly spfMaximumHoldTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#spf_maximum_hold_time_variable ServiceRoutingOspfv3Ipv6Feature#spf_maximum_hold_time_variable}
  */
  readonly spfMaximumHoldTimeVariable?: string;
}
export interface ServiceRoutingOspfv3Ipv6FeatureAreasInterfaces {
  /**
  * Set OSPF interface authentication IPSEC key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#authentication_key ServiceRoutingOspfv3Ipv6Feature#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#authentication_key_variable ServiceRoutingOspfv3Ipv6Feature#authentication_key_variable}
  */
  readonly authenticationKeyVariable?: string;
  /**
  * Set OSPF interface authentication IPSec SPI, range 256..4294967295
  *   - Range: `256`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#authentication_spi ServiceRoutingOspfv3Ipv6Feature#authentication_spi}
  */
  readonly authenticationSpi?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#authentication_spi_variable ServiceRoutingOspfv3Ipv6Feature#authentication_spi_variable}
  */
  readonly authenticationSpiVariable?: string;
  /**
  * No Authentication by default
  *   - Choices: `no-auth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#authentication_type ServiceRoutingOspfv3Ipv6Feature#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Set cost of OSPF interface
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#cost ServiceRoutingOspfv3Ipv6Feature#cost}
  */
  readonly cost?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#cost_variable ServiceRoutingOspfv3Ipv6Feature#cost_variable}
  */
  readonly costVariable?: string;
  /**
  * Set interval after which neighbor is declared to be down
  *   - Range: `1`-`65535`
  *   - Default value: `40`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#dead_interval ServiceRoutingOspfv3Ipv6Feature#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#dead_interval_variable ServiceRoutingOspfv3Ipv6Feature#dead_interval_variable}
  */
  readonly deadIntervalVariable?: string;
  /**
  * Set interval between OSPF hello packets
  *   - Range: `1`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#hello_interval ServiceRoutingOspfv3Ipv6Feature#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#hello_interval_variable ServiceRoutingOspfv3Ipv6Feature#hello_interval_variable}
  */
  readonly helloIntervalVariable?: string;
  /**
  * Set time between retransmitting LSAs
  *   - Range: `1`-`65535`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#lsa_retransmit_interval ServiceRoutingOspfv3Ipv6Feature#lsa_retransmit_interval}
  */
  readonly lsaRetransmitInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#lsa_retransmit_interval_variable ServiceRoutingOspfv3Ipv6Feature#lsa_retransmit_interval_variable}
  */
  readonly lsaRetransmitIntervalVariable?: string;
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#name ServiceRoutingOspfv3Ipv6Feature#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#name_variable ServiceRoutingOspfv3Ipv6Feature#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Set the OSPF network type
  *   - Choices: `broadcast`, `point-to-point`, `non-broadcast`, `point-to-multipoint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#network_type ServiceRoutingOspfv3Ipv6Feature#network_type}
  */
  readonly networkType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#network_type_variable ServiceRoutingOspfv3Ipv6Feature#network_type_variable}
  */
  readonly networkTypeVariable?: string;
  /**
  * Set the interface to advertise its address, but not to actively run OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#passive_interface ServiceRoutingOspfv3Ipv6Feature#passive_interface}
  */
  readonly passiveInterface?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#passive_interface_variable ServiceRoutingOspfv3Ipv6Feature#passive_interface_variable}
  */
  readonly passiveInterfaceVariable?: string;
}

export function serviceRoutingOspfv3Ipv6FeatureAreasInterfacesToTerraform(struct?: ServiceRoutingOspfv3Ipv6FeatureAreasInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    authentication_key_variable: cdktf.stringToTerraform(struct!.authenticationKeyVariable),
    authentication_spi: cdktf.numberToTerraform(struct!.authenticationSpi),
    authentication_spi_variable: cdktf.stringToTerraform(struct!.authenticationSpiVariable),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    cost: cdktf.numberToTerraform(struct!.cost),
    cost_variable: cdktf.stringToTerraform(struct!.costVariable),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    dead_interval_variable: cdktf.stringToTerraform(struct!.deadIntervalVariable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    hello_interval_variable: cdktf.stringToTerraform(struct!.helloIntervalVariable),
    lsa_retransmit_interval: cdktf.numberToTerraform(struct!.lsaRetransmitInterval),
    lsa_retransmit_interval_variable: cdktf.stringToTerraform(struct!.lsaRetransmitIntervalVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    network_type_variable: cdktf.stringToTerraform(struct!.networkTypeVariable),
    passive_interface: cdktf.booleanToTerraform(struct!.passiveInterface),
    passive_interface_variable: cdktf.stringToTerraform(struct!.passiveInterfaceVariable),
  }
}


export function serviceRoutingOspfv3Ipv6FeatureAreasInterfacesToHclTerraform(struct?: ServiceRoutingOspfv3Ipv6FeatureAreasInterfaces | cdktf.IResolvable): any {
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
    authentication_spi: {
      value: cdktf.numberToHclTerraform(struct!.authenticationSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_spi_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationSpiVariable),
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
    lsa_retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.lsaRetransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsa_retransmit_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.lsaRetransmitIntervalVariable),
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
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkTypeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingOspfv3Ipv6FeatureAreasInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingOspfv3Ipv6FeatureAreasInterfaces | cdktf.IResolvable | undefined {
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
    if (this._authenticationSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSpi = this._authenticationSpi;
    }
    if (this._authenticationSpiVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSpiVariable = this._authenticationSpiVariable;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
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
    if (this._lsaRetransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsaRetransmitInterval = this._lsaRetransmitInterval;
    }
    if (this._lsaRetransmitIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsaRetransmitIntervalVariable = this._lsaRetransmitIntervalVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._networkTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTypeVariable = this._networkTypeVariable;
    }
    if (this._passiveInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveInterface = this._passiveInterface;
    }
    if (this._passiveInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveInterfaceVariable = this._passiveInterfaceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutingOspfv3Ipv6FeatureAreasInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
      this._authenticationKeyVariable = undefined;
      this._authenticationSpi = undefined;
      this._authenticationSpiVariable = undefined;
      this._authenticationType = undefined;
      this._cost = undefined;
      this._costVariable = undefined;
      this._deadInterval = undefined;
      this._deadIntervalVariable = undefined;
      this._helloInterval = undefined;
      this._helloIntervalVariable = undefined;
      this._lsaRetransmitInterval = undefined;
      this._lsaRetransmitIntervalVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._networkType = undefined;
      this._networkTypeVariable = undefined;
      this._passiveInterface = undefined;
      this._passiveInterfaceVariable = undefined;
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
      this._authenticationSpi = value.authenticationSpi;
      this._authenticationSpiVariable = value.authenticationSpiVariable;
      this._authenticationType = value.authenticationType;
      this._cost = value.cost;
      this._costVariable = value.costVariable;
      this._deadInterval = value.deadInterval;
      this._deadIntervalVariable = value.deadIntervalVariable;
      this._helloInterval = value.helloInterval;
      this._helloIntervalVariable = value.helloIntervalVariable;
      this._lsaRetransmitInterval = value.lsaRetransmitInterval;
      this._lsaRetransmitIntervalVariable = value.lsaRetransmitIntervalVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._networkType = value.networkType;
      this._networkTypeVariable = value.networkTypeVariable;
      this._passiveInterface = value.passiveInterface;
      this._passiveInterfaceVariable = value.passiveInterfaceVariable;
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

  // authentication_spi - computed: false, optional: true, required: false
  private _authenticationSpi?: number; 
  public get authenticationSpi() {
    return this.getNumberAttribute('authentication_spi');
  }
  public set authenticationSpi(value: number) {
    this._authenticationSpi = value;
  }
  public resetAuthenticationSpi() {
    this._authenticationSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSpiInput() {
    return this._authenticationSpi;
  }

  // authentication_spi_variable - computed: false, optional: true, required: false
  private _authenticationSpiVariable?: string; 
  public get authenticationSpiVariable() {
    return this.getStringAttribute('authentication_spi_variable');
  }
  public set authenticationSpiVariable(value: string) {
    this._authenticationSpiVariable = value;
  }
  public resetAuthenticationSpiVariable() {
    this._authenticationSpiVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSpiVariableInput() {
    return this._authenticationSpiVariable;
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

  // lsa_retransmit_interval - computed: false, optional: true, required: false
  private _lsaRetransmitInterval?: number; 
  public get lsaRetransmitInterval() {
    return this.getNumberAttribute('lsa_retransmit_interval');
  }
  public set lsaRetransmitInterval(value: number) {
    this._lsaRetransmitInterval = value;
  }
  public resetLsaRetransmitInterval() {
    this._lsaRetransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaRetransmitIntervalInput() {
    return this._lsaRetransmitInterval;
  }

  // lsa_retransmit_interval_variable - computed: false, optional: true, required: false
  private _lsaRetransmitIntervalVariable?: string; 
  public get lsaRetransmitIntervalVariable() {
    return this.getStringAttribute('lsa_retransmit_interval_variable');
  }
  public set lsaRetransmitIntervalVariable(value: string) {
    this._lsaRetransmitIntervalVariable = value;
  }
  public resetLsaRetransmitIntervalVariable() {
    this._lsaRetransmitIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaRetransmitIntervalVariableInput() {
    return this._lsaRetransmitIntervalVariable;
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

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // network_type_variable - computed: false, optional: true, required: false
  private _networkTypeVariable?: string; 
  public get networkTypeVariable() {
    return this.getStringAttribute('network_type_variable');
  }
  public set networkTypeVariable(value: string) {
    this._networkTypeVariable = value;
  }
  public resetNetworkTypeVariable() {
    this._networkTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeVariableInput() {
    return this._networkTypeVariable;
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
}

export class ServiceRoutingOspfv3Ipv6FeatureAreasInterfacesList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingOspfv3Ipv6FeatureAreasInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingOspfv3Ipv6FeatureAreasInterfacesOutputReference {
    return new ServiceRoutingOspfv3Ipv6FeatureAreasInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutingOspfv3Ipv6FeatureAreasRanges {
  /**
  * Set cost for this range
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#cost ServiceRoutingOspfv3Ipv6Feature#cost}
  */
  readonly cost?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#cost_variable ServiceRoutingOspfv3Ipv6Feature#cost_variable}
  */
  readonly costVariable?: string;
  /**
  * Do not advertise this range
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#no_advertise ServiceRoutingOspfv3Ipv6Feature#no_advertise}
  */
  readonly noAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#no_advertise_variable ServiceRoutingOspfv3Ipv6Feature#no_advertise_variable}
  */
  readonly noAdvertiseVariable?: string;
  /**
  * IPv6 prefix,for example 2001::/64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#prefix ServiceRoutingOspfv3Ipv6Feature#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#prefix_variable ServiceRoutingOspfv3Ipv6Feature#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function serviceRoutingOspfv3Ipv6FeatureAreasRangesToTerraform(struct?: ServiceRoutingOspfv3Ipv6FeatureAreasRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    cost_variable: cdktf.stringToTerraform(struct!.costVariable),
    no_advertise: cdktf.booleanToTerraform(struct!.noAdvertise),
    no_advertise_variable: cdktf.stringToTerraform(struct!.noAdvertiseVariable),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function serviceRoutingOspfv3Ipv6FeatureAreasRangesToHclTerraform(struct?: ServiceRoutingOspfv3Ipv6FeatureAreasRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingOspfv3Ipv6FeatureAreasRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingOspfv3Ipv6FeatureAreasRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutingOspfv3Ipv6FeatureAreasRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._costVariable = undefined;
      this._noAdvertise = undefined;
      this._noAdvertiseVariable = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._costVariable = value.costVariable;
      this._noAdvertise = value.noAdvertise;
      this._noAdvertiseVariable = value.noAdvertiseVariable;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class ServiceRoutingOspfv3Ipv6FeatureAreasRangesList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingOspfv3Ipv6FeatureAreasRanges[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingOspfv3Ipv6FeatureAreasRangesOutputReference {
    return new ServiceRoutingOspfv3Ipv6FeatureAreasRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutingOspfv3Ipv6FeatureAreas {
  /**
  * Always translate type7 LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#always_translate ServiceRoutingOspfv3Ipv6Feature#always_translate}
  */
  readonly alwaysTranslate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#always_translate_variable ServiceRoutingOspfv3Ipv6Feature#always_translate_variable}
  */
  readonly alwaysTranslateVariable?: string;
  /**
  * Set OSPF area number
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#area_number ServiceRoutingOspfv3Ipv6Feature#area_number}
  */
  readonly areaNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#area_number_variable ServiceRoutingOspfv3Ipv6Feature#area_number_variable}
  */
  readonly areaNumberVariable?: string;
  /**
  * stub area type
  *   - Choices: `stub`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#area_type ServiceRoutingOspfv3Ipv6Feature#area_type}
  */
  readonly areaType?: string;
  /**
  * Set OSPF interface parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#interfaces ServiceRoutingOspfv3Ipv6Feature#interfaces}
  */
  readonly interfaces?: ServiceRoutingOspfv3Ipv6FeatureAreasInterfaces[] | cdktf.IResolvable;
  /**
  * Do not inject inter-area routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#no_summary ServiceRoutingOspfv3Ipv6Feature#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#no_summary_variable ServiceRoutingOspfv3Ipv6Feature#no_summary_variable}
  */
  readonly noSummaryVariable?: string;
  /**
  * Summarize OSPF routes at an area boundary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#ranges ServiceRoutingOspfv3Ipv6Feature#ranges}
  */
  readonly ranges?: ServiceRoutingOspfv3Ipv6FeatureAreasRanges[] | cdktf.IResolvable;
}

export function serviceRoutingOspfv3Ipv6FeatureAreasToTerraform(struct?: ServiceRoutingOspfv3Ipv6FeatureAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_translate: cdktf.booleanToTerraform(struct!.alwaysTranslate),
    always_translate_variable: cdktf.stringToTerraform(struct!.alwaysTranslateVariable),
    area_number: cdktf.numberToTerraform(struct!.areaNumber),
    area_number_variable: cdktf.stringToTerraform(struct!.areaNumberVariable),
    area_type: cdktf.stringToTerraform(struct!.areaType),
    interfaces: cdktf.listMapper(serviceRoutingOspfv3Ipv6FeatureAreasInterfacesToTerraform, false)(struct!.interfaces),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
    no_summary_variable: cdktf.stringToTerraform(struct!.noSummaryVariable),
    ranges: cdktf.listMapper(serviceRoutingOspfv3Ipv6FeatureAreasRangesToTerraform, false)(struct!.ranges),
  }
}


export function serviceRoutingOspfv3Ipv6FeatureAreasToHclTerraform(struct?: ServiceRoutingOspfv3Ipv6FeatureAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_translate: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysTranslate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_translate_variable: {
      value: cdktf.stringToHclTerraform(struct!.alwaysTranslateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    area_type: {
      value: cdktf.stringToHclTerraform(struct!.areaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(serviceRoutingOspfv3Ipv6FeatureAreasInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceRoutingOspfv3Ipv6FeatureAreasInterfacesList",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_summary_variable: {
      value: cdktf.stringToHclTerraform(struct!.noSummaryVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ranges: {
      value: cdktf.listMapperHcl(serviceRoutingOspfv3Ipv6FeatureAreasRangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceRoutingOspfv3Ipv6FeatureAreasRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingOspfv3Ipv6FeatureAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingOspfv3Ipv6FeatureAreas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysTranslate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysTranslate = this._alwaysTranslate;
    }
    if (this._alwaysTranslateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysTranslateVariable = this._alwaysTranslateVariable;
    }
    if (this._areaNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNumber = this._areaNumber;
    }
    if (this._areaNumberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNumberVariable = this._areaNumberVariable;
    }
    if (this._areaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaType = this._areaType;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    if (this._noSummaryVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummaryVariable = this._noSummaryVariable;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutingOspfv3Ipv6FeatureAreas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysTranslate = undefined;
      this._alwaysTranslateVariable = undefined;
      this._areaNumber = undefined;
      this._areaNumberVariable = undefined;
      this._areaType = undefined;
      this._interfaces.internalValue = undefined;
      this._noSummary = undefined;
      this._noSummaryVariable = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysTranslate = value.alwaysTranslate;
      this._alwaysTranslateVariable = value.alwaysTranslateVariable;
      this._areaNumber = value.areaNumber;
      this._areaNumberVariable = value.areaNumberVariable;
      this._areaType = value.areaType;
      this._interfaces.internalValue = value.interfaces;
      this._noSummary = value.noSummary;
      this._noSummaryVariable = value.noSummaryVariable;
      this._ranges.internalValue = value.ranges;
    }
  }

  // always_translate - computed: false, optional: true, required: false
  private _alwaysTranslate?: boolean | cdktf.IResolvable; 
  public get alwaysTranslate() {
    return this.getBooleanAttribute('always_translate');
  }
  public set alwaysTranslate(value: boolean | cdktf.IResolvable) {
    this._alwaysTranslate = value;
  }
  public resetAlwaysTranslate() {
    this._alwaysTranslate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysTranslateInput() {
    return this._alwaysTranslate;
  }

  // always_translate_variable - computed: false, optional: true, required: false
  private _alwaysTranslateVariable?: string; 
  public get alwaysTranslateVariable() {
    return this.getStringAttribute('always_translate_variable');
  }
  public set alwaysTranslateVariable(value: string) {
    this._alwaysTranslateVariable = value;
  }
  public resetAlwaysTranslateVariable() {
    this._alwaysTranslateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysTranslateVariableInput() {
    return this._alwaysTranslateVariable;
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

  // area_type - computed: false, optional: true, required: false
  private _areaType?: string; 
  public get areaType() {
    return this.getStringAttribute('area_type');
  }
  public set areaType(value: string) {
    this._areaType = value;
  }
  public resetAreaType() {
    this._areaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaTypeInput() {
    return this._areaType;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ServiceRoutingOspfv3Ipv6FeatureAreasInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ServiceRoutingOspfv3Ipv6FeatureAreasInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }

  // no_summary_variable - computed: false, optional: true, required: false
  private _noSummaryVariable?: string; 
  public get noSummaryVariable() {
    return this.getStringAttribute('no_summary_variable');
  }
  public set noSummaryVariable(value: string) {
    this._noSummaryVariable = value;
  }
  public resetNoSummaryVariable() {
    this._noSummaryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryVariableInput() {
    return this._noSummaryVariable;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new ServiceRoutingOspfv3Ipv6FeatureAreasRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: ServiceRoutingOspfv3Ipv6FeatureAreasRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class ServiceRoutingOspfv3Ipv6FeatureAreasList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingOspfv3Ipv6FeatureAreas[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingOspfv3Ipv6FeatureAreasOutputReference {
    return new ServiceRoutingOspfv3Ipv6FeatureAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutingOspfv3Ipv6FeatureRedistributes {
  /**
  * Set the protocol
  *   - Choices: `connected`, `static`, `omp`, `bgp`, `eigrp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#protocol ServiceRoutingOspfv3Ipv6Feature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#protocol_variable ServiceRoutingOspfv3Ipv6Feature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#route_policy_id ServiceRoutingOspfv3Ipv6Feature#route_policy_id}
  */
  readonly routePolicyId?: string;
  /**
  * Translate Rib Metric, Attribute conditional on `protocol` being equal to `omp`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#translate_rib_metric ServiceRoutingOspfv3Ipv6Feature#translate_rib_metric}
  */
  readonly translateRibMetric?: boolean | cdktf.IResolvable;
}

export function serviceRoutingOspfv3Ipv6FeatureRedistributesToTerraform(struct?: ServiceRoutingOspfv3Ipv6FeatureRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
    translate_rib_metric: cdktf.booleanToTerraform(struct!.translateRibMetric),
  }
}


export function serviceRoutingOspfv3Ipv6FeatureRedistributesToHclTerraform(struct?: ServiceRoutingOspfv3Ipv6FeatureRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_rib_metric: {
      value: cdktf.booleanToHclTerraform(struct!.translateRibMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingOspfv3Ipv6FeatureRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingOspfv3Ipv6FeatureRedistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    if (this._translateRibMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateRibMetric = this._translateRibMetric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutingOspfv3Ipv6FeatureRedistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicyId = undefined;
      this._translateRibMetric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicyId = value.routePolicyId;
      this._translateRibMetric = value.translateRibMetric;
    }
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

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }

  // translate_rib_metric - computed: false, optional: true, required: false
  private _translateRibMetric?: boolean | cdktf.IResolvable; 
  public get translateRibMetric() {
    return this.getBooleanAttribute('translate_rib_metric');
  }
  public set translateRibMetric(value: boolean | cdktf.IResolvable) {
    this._translateRibMetric = value;
  }
  public resetTranslateRibMetric() {
    this._translateRibMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateRibMetricInput() {
    return this._translateRibMetric;
  }
}

export class ServiceRoutingOspfv3Ipv6FeatureRedistributesList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingOspfv3Ipv6FeatureRedistributes[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingOspfv3Ipv6FeatureRedistributesOutputReference {
    return new ServiceRoutingOspfv3Ipv6FeatureRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature sdwan_service_routing_ospfv3_ipv6_feature}
*/
export class ServiceRoutingOspfv3Ipv6Feature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_routing_ospfv3_ipv6_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceRoutingOspfv3Ipv6Feature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceRoutingOspfv3Ipv6Feature to import
  * @param importFromId The id of the existing ServiceRoutingOspfv3Ipv6Feature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceRoutingOspfv3Ipv6Feature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_routing_ospfv3_ipv6_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_ospfv3_ipv6_feature sdwan_service_routing_ospfv3_ipv6_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceRoutingOspfv3Ipv6FeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceRoutingOspfv3Ipv6FeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_routing_ospfv3_ipv6_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areas.internalValue = config.areas;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultInformationOriginateAlways = config.defaultInformationOriginateAlways;
    this._defaultInformationOriginateAlwaysVariable = config.defaultInformationOriginateAlwaysVariable;
    this._defaultInformationOriginateMetric = config.defaultInformationOriginateMetric;
    this._defaultInformationOriginateMetricType = config.defaultInformationOriginateMetricType;
    this._defaultInformationOriginateMetricTypeVariable = config.defaultInformationOriginateMetricTypeVariable;
    this._defaultInformationOriginateMetricVariable = config.defaultInformationOriginateMetricVariable;
    this._description = config.description;
    this._distance = config.distance;
    this._distanceExternal = config.distanceExternal;
    this._distanceExternalVariable = config.distanceExternalVariable;
    this._distanceInterArea = config.distanceInterArea;
    this._distanceInterAreaVariable = config.distanceInterAreaVariable;
    this._distanceIntraArea = config.distanceIntraArea;
    this._distanceIntraAreaVariable = config.distanceIntraAreaVariable;
    this._distanceVariable = config.distanceVariable;
    this._featureProfileId = config.featureProfileId;
    this._filter = config.filter;
    this._filterVariable = config.filterVariable;
    this._name = config.name;
    this._redistributes.internalValue = config.redistributes;
    this._referenceBandwidth = config.referenceBandwidth;
    this._referenceBandwidthVariable = config.referenceBandwidthVariable;
    this._rfc1583Compatible = config.rfc1583Compatible;
    this._rfc1583CompatibleVariable = config.rfc1583CompatibleVariable;
    this._routePolicyId = config.routePolicyId;
    this._routerId = config.routerId;
    this._routerIdVariable = config.routerIdVariable;
    this._routerLsaAction = config.routerLsaAction;
    this._routerLsaOnStartupTime = config.routerLsaOnStartupTime;
    this._routerLsaOnStartupTimeVariable = config.routerLsaOnStartupTimeVariable;
    this._spfCalculationDelay = config.spfCalculationDelay;
    this._spfCalculationDelayVariable = config.spfCalculationDelayVariable;
    this._spfInitialHoldTime = config.spfInitialHoldTime;
    this._spfInitialHoldTimeVariable = config.spfInitialHoldTimeVariable;
    this._spfMaximumHoldTime = config.spfMaximumHoldTime;
    this._spfMaximumHoldTimeVariable = config.spfMaximumHoldTimeVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: false, optional: true, required: false
  private _areas = new ServiceRoutingOspfv3Ipv6FeatureAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }
  public putAreas(value: ServiceRoutingOspfv3Ipv6FeatureAreas[] | cdktf.IResolvable) {
    this._areas.internalValue = value;
  }
  public resetAreas() {
    this._areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areasInput() {
    return this._areas.internalValue;
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // default_information_originate_always - computed: false, optional: true, required: false
  private _defaultInformationOriginateAlways?: boolean | cdktf.IResolvable; 
  public get defaultInformationOriginateAlways() {
    return this.getBooleanAttribute('default_information_originate_always');
  }
  public set defaultInformationOriginateAlways(value: boolean | cdktf.IResolvable) {
    this._defaultInformationOriginateAlways = value;
  }
  public resetDefaultInformationOriginateAlways() {
    this._defaultInformationOriginateAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateAlwaysInput() {
    return this._defaultInformationOriginateAlways;
  }

  // default_information_originate_always_variable - computed: false, optional: true, required: false
  private _defaultInformationOriginateAlwaysVariable?: string; 
  public get defaultInformationOriginateAlwaysVariable() {
    return this.getStringAttribute('default_information_originate_always_variable');
  }
  public set defaultInformationOriginateAlwaysVariable(value: string) {
    this._defaultInformationOriginateAlwaysVariable = value;
  }
  public resetDefaultInformationOriginateAlwaysVariable() {
    this._defaultInformationOriginateAlwaysVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateAlwaysVariableInput() {
    return this._defaultInformationOriginateAlwaysVariable;
  }

  // default_information_originate_metric - computed: false, optional: true, required: false
  private _defaultInformationOriginateMetric?: number; 
  public get defaultInformationOriginateMetric() {
    return this.getNumberAttribute('default_information_originate_metric');
  }
  public set defaultInformationOriginateMetric(value: number) {
    this._defaultInformationOriginateMetric = value;
  }
  public resetDefaultInformationOriginateMetric() {
    this._defaultInformationOriginateMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateMetricInput() {
    return this._defaultInformationOriginateMetric;
  }

  // default_information_originate_metric_type - computed: false, optional: true, required: false
  private _defaultInformationOriginateMetricType?: string; 
  public get defaultInformationOriginateMetricType() {
    return this.getStringAttribute('default_information_originate_metric_type');
  }
  public set defaultInformationOriginateMetricType(value: string) {
    this._defaultInformationOriginateMetricType = value;
  }
  public resetDefaultInformationOriginateMetricType() {
    this._defaultInformationOriginateMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateMetricTypeInput() {
    return this._defaultInformationOriginateMetricType;
  }

  // default_information_originate_metric_type_variable - computed: false, optional: true, required: false
  private _defaultInformationOriginateMetricTypeVariable?: string; 
  public get defaultInformationOriginateMetricTypeVariable() {
    return this.getStringAttribute('default_information_originate_metric_type_variable');
  }
  public set defaultInformationOriginateMetricTypeVariable(value: string) {
    this._defaultInformationOriginateMetricTypeVariable = value;
  }
  public resetDefaultInformationOriginateMetricTypeVariable() {
    this._defaultInformationOriginateMetricTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateMetricTypeVariableInput() {
    return this._defaultInformationOriginateMetricTypeVariable;
  }

  // default_information_originate_metric_variable - computed: false, optional: true, required: false
  private _defaultInformationOriginateMetricVariable?: string; 
  public get defaultInformationOriginateMetricVariable() {
    return this.getStringAttribute('default_information_originate_metric_variable');
  }
  public set defaultInformationOriginateMetricVariable(value: string) {
    this._defaultInformationOriginateMetricVariable = value;
  }
  public resetDefaultInformationOriginateMetricVariable() {
    this._defaultInformationOriginateMetricVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateMetricVariableInput() {
    return this._defaultInformationOriginateMetricVariable;
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

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // distance_external - computed: false, optional: true, required: false
  private _distanceExternal?: number; 
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }
  public set distanceExternal(value: number) {
    this._distanceExternal = value;
  }
  public resetDistanceExternal() {
    this._distanceExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExternalInput() {
    return this._distanceExternal;
  }

  // distance_external_variable - computed: false, optional: true, required: false
  private _distanceExternalVariable?: string; 
  public get distanceExternalVariable() {
    return this.getStringAttribute('distance_external_variable');
  }
  public set distanceExternalVariable(value: string) {
    this._distanceExternalVariable = value;
  }
  public resetDistanceExternalVariable() {
    this._distanceExternalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExternalVariableInput() {
    return this._distanceExternalVariable;
  }

  // distance_inter_area - computed: false, optional: true, required: false
  private _distanceInterArea?: number; 
  public get distanceInterArea() {
    return this.getNumberAttribute('distance_inter_area');
  }
  public set distanceInterArea(value: number) {
    this._distanceInterArea = value;
  }
  public resetDistanceInterArea() {
    this._distanceInterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInterAreaInput() {
    return this._distanceInterArea;
  }

  // distance_inter_area_variable - computed: false, optional: true, required: false
  private _distanceInterAreaVariable?: string; 
  public get distanceInterAreaVariable() {
    return this.getStringAttribute('distance_inter_area_variable');
  }
  public set distanceInterAreaVariable(value: string) {
    this._distanceInterAreaVariable = value;
  }
  public resetDistanceInterAreaVariable() {
    this._distanceInterAreaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInterAreaVariableInput() {
    return this._distanceInterAreaVariable;
  }

  // distance_intra_area - computed: false, optional: true, required: false
  private _distanceIntraArea?: number; 
  public get distanceIntraArea() {
    return this.getNumberAttribute('distance_intra_area');
  }
  public set distanceIntraArea(value: number) {
    this._distanceIntraArea = value;
  }
  public resetDistanceIntraArea() {
    this._distanceIntraArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceIntraAreaInput() {
    return this._distanceIntraArea;
  }

  // distance_intra_area_variable - computed: false, optional: true, required: false
  private _distanceIntraAreaVariable?: string; 
  public get distanceIntraAreaVariable() {
    return this.getStringAttribute('distance_intra_area_variable');
  }
  public set distanceIntraAreaVariable(value: string) {
    this._distanceIntraAreaVariable = value;
  }
  public resetDistanceIntraAreaVariable() {
    this._distanceIntraAreaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceIntraAreaVariableInput() {
    return this._distanceIntraAreaVariable;
  }

  // distance_variable - computed: false, optional: true, required: false
  private _distanceVariable?: string; 
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }
  public set distanceVariable(value: string) {
    this._distanceVariable = value;
  }
  public resetDistanceVariable() {
    this._distanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceVariableInput() {
    return this._distanceVariable;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: boolean | cdktf.IResolvable; 
  public get filter() {
    return this.getBooleanAttribute('filter');
  }
  public set filter(value: boolean | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_variable - computed: false, optional: true, required: false
  private _filterVariable?: string; 
  public get filterVariable() {
    return this.getStringAttribute('filter_variable');
  }
  public set filterVariable(value: string) {
    this._filterVariable = value;
  }
  public resetFilterVariable() {
    this._filterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterVariableInput() {
    return this._filterVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // redistributes - computed: false, optional: true, required: false
  private _redistributes = new ServiceRoutingOspfv3Ipv6FeatureRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }
  public putRedistributes(value: ServiceRoutingOspfv3Ipv6FeatureRedistributes[] | cdktf.IResolvable) {
    this._redistributes.internalValue = value;
  }
  public resetRedistributes() {
    this._redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributesInput() {
    return this._redistributes.internalValue;
  }

  // reference_bandwidth - computed: false, optional: true, required: false
  private _referenceBandwidth?: number; 
  public get referenceBandwidth() {
    return this.getNumberAttribute('reference_bandwidth');
  }
  public set referenceBandwidth(value: number) {
    this._referenceBandwidth = value;
  }
  public resetReferenceBandwidth() {
    this._referenceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceBandwidthInput() {
    return this._referenceBandwidth;
  }

  // reference_bandwidth_variable - computed: false, optional: true, required: false
  private _referenceBandwidthVariable?: string; 
  public get referenceBandwidthVariable() {
    return this.getStringAttribute('reference_bandwidth_variable');
  }
  public set referenceBandwidthVariable(value: string) {
    this._referenceBandwidthVariable = value;
  }
  public resetReferenceBandwidthVariable() {
    this._referenceBandwidthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceBandwidthVariableInput() {
    return this._referenceBandwidthVariable;
  }

  // rfc_1583_compatible - computed: false, optional: true, required: false
  private _rfc1583Compatible?: boolean | cdktf.IResolvable; 
  public get rfc1583Compatible() {
    return this.getBooleanAttribute('rfc_1583_compatible');
  }
  public set rfc1583Compatible(value: boolean | cdktf.IResolvable) {
    this._rfc1583Compatible = value;
  }
  public resetRfc1583Compatible() {
    this._rfc1583Compatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc1583CompatibleInput() {
    return this._rfc1583Compatible;
  }

  // rfc_1583_compatible_variable - computed: false, optional: true, required: false
  private _rfc1583CompatibleVariable?: string; 
  public get rfc1583CompatibleVariable() {
    return this.getStringAttribute('rfc_1583_compatible_variable');
  }
  public set rfc1583CompatibleVariable(value: string) {
    this._rfc1583CompatibleVariable = value;
  }
  public resetRfc1583CompatibleVariable() {
    this._rfc1583CompatibleVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc1583CompatibleVariableInput() {
    return this._rfc1583CompatibleVariable;
  }

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // router_id_variable - computed: false, optional: true, required: false
  private _routerIdVariable?: string; 
  public get routerIdVariable() {
    return this.getStringAttribute('router_id_variable');
  }
  public set routerIdVariable(value: string) {
    this._routerIdVariable = value;
  }
  public resetRouterIdVariable() {
    this._routerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdVariableInput() {
    return this._routerIdVariable;
  }

  // router_lsa_action - computed: false, optional: true, required: false
  private _routerLsaAction?: string; 
  public get routerLsaAction() {
    return this.getStringAttribute('router_lsa_action');
  }
  public set routerLsaAction(value: string) {
    this._routerLsaAction = value;
  }
  public resetRouterLsaAction() {
    this._routerLsaAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerLsaActionInput() {
    return this._routerLsaAction;
  }

  // router_lsa_on_startup_time - computed: false, optional: true, required: false
  private _routerLsaOnStartupTime?: number; 
  public get routerLsaOnStartupTime() {
    return this.getNumberAttribute('router_lsa_on_startup_time');
  }
  public set routerLsaOnStartupTime(value: number) {
    this._routerLsaOnStartupTime = value;
  }
  public resetRouterLsaOnStartupTime() {
    this._routerLsaOnStartupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerLsaOnStartupTimeInput() {
    return this._routerLsaOnStartupTime;
  }

  // router_lsa_on_startup_time_variable - computed: false, optional: true, required: false
  private _routerLsaOnStartupTimeVariable?: string; 
  public get routerLsaOnStartupTimeVariable() {
    return this.getStringAttribute('router_lsa_on_startup_time_variable');
  }
  public set routerLsaOnStartupTimeVariable(value: string) {
    this._routerLsaOnStartupTimeVariable = value;
  }
  public resetRouterLsaOnStartupTimeVariable() {
    this._routerLsaOnStartupTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerLsaOnStartupTimeVariableInput() {
    return this._routerLsaOnStartupTimeVariable;
  }

  // spf_calculation_delay - computed: false, optional: true, required: false
  private _spfCalculationDelay?: number; 
  public get spfCalculationDelay() {
    return this.getNumberAttribute('spf_calculation_delay');
  }
  public set spfCalculationDelay(value: number) {
    this._spfCalculationDelay = value;
  }
  public resetSpfCalculationDelay() {
    this._spfCalculationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfCalculationDelayInput() {
    return this._spfCalculationDelay;
  }

  // spf_calculation_delay_variable - computed: false, optional: true, required: false
  private _spfCalculationDelayVariable?: string; 
  public get spfCalculationDelayVariable() {
    return this.getStringAttribute('spf_calculation_delay_variable');
  }
  public set spfCalculationDelayVariable(value: string) {
    this._spfCalculationDelayVariable = value;
  }
  public resetSpfCalculationDelayVariable() {
    this._spfCalculationDelayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfCalculationDelayVariableInput() {
    return this._spfCalculationDelayVariable;
  }

  // spf_initial_hold_time - computed: false, optional: true, required: false
  private _spfInitialHoldTime?: number; 
  public get spfInitialHoldTime() {
    return this.getNumberAttribute('spf_initial_hold_time');
  }
  public set spfInitialHoldTime(value: number) {
    this._spfInitialHoldTime = value;
  }
  public resetSpfInitialHoldTime() {
    this._spfInitialHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfInitialHoldTimeInput() {
    return this._spfInitialHoldTime;
  }

  // spf_initial_hold_time_variable - computed: false, optional: true, required: false
  private _spfInitialHoldTimeVariable?: string; 
  public get spfInitialHoldTimeVariable() {
    return this.getStringAttribute('spf_initial_hold_time_variable');
  }
  public set spfInitialHoldTimeVariable(value: string) {
    this._spfInitialHoldTimeVariable = value;
  }
  public resetSpfInitialHoldTimeVariable() {
    this._spfInitialHoldTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfInitialHoldTimeVariableInput() {
    return this._spfInitialHoldTimeVariable;
  }

  // spf_maximum_hold_time - computed: false, optional: true, required: false
  private _spfMaximumHoldTime?: number; 
  public get spfMaximumHoldTime() {
    return this.getNumberAttribute('spf_maximum_hold_time');
  }
  public set spfMaximumHoldTime(value: number) {
    this._spfMaximumHoldTime = value;
  }
  public resetSpfMaximumHoldTime() {
    this._spfMaximumHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfMaximumHoldTimeInput() {
    return this._spfMaximumHoldTime;
  }

  // spf_maximum_hold_time_variable - computed: false, optional: true, required: false
  private _spfMaximumHoldTimeVariable?: string; 
  public get spfMaximumHoldTimeVariable() {
    return this.getStringAttribute('spf_maximum_hold_time_variable');
  }
  public set spfMaximumHoldTimeVariable(value: string) {
    this._spfMaximumHoldTimeVariable = value;
  }
  public resetSpfMaximumHoldTimeVariable() {
    this._spfMaximumHoldTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfMaximumHoldTimeVariableInput() {
    return this._spfMaximumHoldTimeVariable;
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
      areas: cdktf.listMapper(serviceRoutingOspfv3Ipv6FeatureAreasToTerraform, false)(this._areas.internalValue),
      default_information_originate: cdktf.booleanToTerraform(this._defaultInformationOriginate),
      default_information_originate_always: cdktf.booleanToTerraform(this._defaultInformationOriginateAlways),
      default_information_originate_always_variable: cdktf.stringToTerraform(this._defaultInformationOriginateAlwaysVariable),
      default_information_originate_metric: cdktf.numberToTerraform(this._defaultInformationOriginateMetric),
      default_information_originate_metric_type: cdktf.stringToTerraform(this._defaultInformationOriginateMetricType),
      default_information_originate_metric_type_variable: cdktf.stringToTerraform(this._defaultInformationOriginateMetricTypeVariable),
      default_information_originate_metric_variable: cdktf.stringToTerraform(this._defaultInformationOriginateMetricVariable),
      description: cdktf.stringToTerraform(this._description),
      distance: cdktf.numberToTerraform(this._distance),
      distance_external: cdktf.numberToTerraform(this._distanceExternal),
      distance_external_variable: cdktf.stringToTerraform(this._distanceExternalVariable),
      distance_inter_area: cdktf.numberToTerraform(this._distanceInterArea),
      distance_inter_area_variable: cdktf.stringToTerraform(this._distanceInterAreaVariable),
      distance_intra_area: cdktf.numberToTerraform(this._distanceIntraArea),
      distance_intra_area_variable: cdktf.stringToTerraform(this._distanceIntraAreaVariable),
      distance_variable: cdktf.stringToTerraform(this._distanceVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      filter: cdktf.booleanToTerraform(this._filter),
      filter_variable: cdktf.stringToTerraform(this._filterVariable),
      name: cdktf.stringToTerraform(this._name),
      redistributes: cdktf.listMapper(serviceRoutingOspfv3Ipv6FeatureRedistributesToTerraform, false)(this._redistributes.internalValue),
      reference_bandwidth: cdktf.numberToTerraform(this._referenceBandwidth),
      reference_bandwidth_variable: cdktf.stringToTerraform(this._referenceBandwidthVariable),
      rfc_1583_compatible: cdktf.booleanToTerraform(this._rfc1583Compatible),
      rfc_1583_compatible_variable: cdktf.stringToTerraform(this._rfc1583CompatibleVariable),
      route_policy_id: cdktf.stringToTerraform(this._routePolicyId),
      router_id: cdktf.stringToTerraform(this._routerId),
      router_id_variable: cdktf.stringToTerraform(this._routerIdVariable),
      router_lsa_action: cdktf.stringToTerraform(this._routerLsaAction),
      router_lsa_on_startup_time: cdktf.numberToTerraform(this._routerLsaOnStartupTime),
      router_lsa_on_startup_time_variable: cdktf.stringToTerraform(this._routerLsaOnStartupTimeVariable),
      spf_calculation_delay: cdktf.numberToTerraform(this._spfCalculationDelay),
      spf_calculation_delay_variable: cdktf.stringToTerraform(this._spfCalculationDelayVariable),
      spf_initial_hold_time: cdktf.numberToTerraform(this._spfInitialHoldTime),
      spf_initial_hold_time_variable: cdktf.stringToTerraform(this._spfInitialHoldTimeVariable),
      spf_maximum_hold_time: cdktf.numberToTerraform(this._spfMaximumHoldTime),
      spf_maximum_hold_time_variable: cdktf.stringToTerraform(this._spfMaximumHoldTimeVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      areas: {
        value: cdktf.listMapperHcl(serviceRoutingOspfv3Ipv6FeatureAreasToHclTerraform, false)(this._areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceRoutingOspfv3Ipv6FeatureAreasList",
      },
      default_information_originate: {
        value: cdktf.booleanToHclTerraform(this._defaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_information_originate_always: {
        value: cdktf.booleanToHclTerraform(this._defaultInformationOriginateAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_information_originate_always_variable: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginateAlwaysVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_originate_metric: {
        value: cdktf.numberToHclTerraform(this._defaultInformationOriginateMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_information_originate_metric_type: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginateMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_originate_metric_type_variable: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginateMetricTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_originate_metric_variable: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginateMetricVariable),
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
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_external: {
        value: cdktf.numberToHclTerraform(this._distanceExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_external_variable: {
        value: cdktf.stringToHclTerraform(this._distanceExternalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance_inter_area: {
        value: cdktf.numberToHclTerraform(this._distanceInterArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_inter_area_variable: {
        value: cdktf.stringToHclTerraform(this._distanceInterAreaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance_intra_area: {
        value: cdktf.numberToHclTerraform(this._distanceIntraArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_intra_area_variable: {
        value: cdktf.stringToHclTerraform(this._distanceIntraAreaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance_variable: {
        value: cdktf.stringToHclTerraform(this._distanceVariable),
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
      filter: {
        value: cdktf.booleanToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_variable: {
        value: cdktf.stringToHclTerraform(this._filterVariable),
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
      redistributes: {
        value: cdktf.listMapperHcl(serviceRoutingOspfv3Ipv6FeatureRedistributesToHclTerraform, false)(this._redistributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceRoutingOspfv3Ipv6FeatureRedistributesList",
      },
      reference_bandwidth: {
        value: cdktf.numberToHclTerraform(this._referenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reference_bandwidth_variable: {
        value: cdktf.stringToHclTerraform(this._referenceBandwidthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfc_1583_compatible: {
        value: cdktf.booleanToHclTerraform(this._rfc1583Compatible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rfc_1583_compatible_variable: {
        value: cdktf.stringToHclTerraform(this._rfc1583CompatibleVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_policy_id: {
        value: cdktf.stringToHclTerraform(this._routePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id_variable: {
        value: cdktf.stringToHclTerraform(this._routerIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_lsa_action: {
        value: cdktf.stringToHclTerraform(this._routerLsaAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_lsa_on_startup_time: {
        value: cdktf.numberToHclTerraform(this._routerLsaOnStartupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_lsa_on_startup_time_variable: {
        value: cdktf.stringToHclTerraform(this._routerLsaOnStartupTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_calculation_delay: {
        value: cdktf.numberToHclTerraform(this._spfCalculationDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_calculation_delay_variable: {
        value: cdktf.stringToHclTerraform(this._spfCalculationDelayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_initial_hold_time: {
        value: cdktf.numberToHclTerraform(this._spfInitialHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_initial_hold_time_variable: {
        value: cdktf.stringToHclTerraform(this._spfInitialHoldTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_maximum_hold_time: {
        value: cdktf.numberToHclTerraform(this._spfMaximumHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_maximum_hold_time_variable: {
        value: cdktf.stringToHclTerraform(this._spfMaximumHoldTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
