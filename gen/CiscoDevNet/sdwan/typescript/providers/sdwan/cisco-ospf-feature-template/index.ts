// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoOspfFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure OSPF area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#areas CiscoOspfFeatureTemplate#areas}
  */
  readonly areas?: CiscoOspfFeatureTemplateAreas[] | cdktf.IResolvable;
  /**
  * Set reference bandwidth method to assign OSPF cost
  *   - Range: `1`-`4294967`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#auto_cost_reference_bandwidth CiscoOspfFeatureTemplate#auto_cost_reference_bandwidth}
  */
  readonly autoCostReferenceBandwidth?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#auto_cost_reference_bandwidth_variable CiscoOspfFeatureTemplate#auto_cost_reference_bandwidth_variable}
  */
  readonly autoCostReferenceBandwidthVariable?: string;
  /**
  * Calculate summary route cost based on RFC 1583
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#compatible_rfc1583 CiscoOspfFeatureTemplate#compatible_rfc1583}
  */
  readonly compatibleRfc1583?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#compatible_rfc1583_variable CiscoOspfFeatureTemplate#compatible_rfc1583_variable}
  */
  readonly compatibleRfc1583Variable?: string;
  /**
  * Distribute default external route into OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#default_information_originate CiscoOspfFeatureTemplate#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Always advertise default route
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#default_information_originate_always CiscoOspfFeatureTemplate#default_information_originate_always}
  */
  readonly defaultInformationOriginateAlways?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#default_information_originate_always_variable CiscoOspfFeatureTemplate#default_information_originate_always_variable}
  */
  readonly defaultInformationOriginateAlwaysVariable?: string;
  /**
  * Set metric used to generate default route <0..16777214>
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#default_information_originate_metric CiscoOspfFeatureTemplate#default_information_originate_metric}
  */
  readonly defaultInformationOriginateMetric?: number;
  /**
  * Set default route type
  *   - Choices: `type1`, `type2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#default_information_originate_metric_type CiscoOspfFeatureTemplate#default_information_originate_metric_type}
  */
  readonly defaultInformationOriginateMetricType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#default_information_originate_metric_type_variable CiscoOspfFeatureTemplate#default_information_originate_metric_type_variable}
  */
  readonly defaultInformationOriginateMetricTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#default_information_originate_metric_variable CiscoOspfFeatureTemplate#default_information_originate_metric_variable}
  */
  readonly defaultInformationOriginateMetricVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#description CiscoOspfFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#device_types CiscoOspfFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Set distance for external routes
  *   - Range: `1`-`255`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#distance_external CiscoOspfFeatureTemplate#distance_external}
  */
  readonly distanceExternal?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#distance_external_variable CiscoOspfFeatureTemplate#distance_external_variable}
  */
  readonly distanceExternalVariable?: string;
  /**
  * Set distance for inter-area routes
  *   - Range: `1`-`255`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#distance_inter_area CiscoOspfFeatureTemplate#distance_inter_area}
  */
  readonly distanceInterArea?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#distance_inter_area_variable CiscoOspfFeatureTemplate#distance_inter_area_variable}
  */
  readonly distanceInterAreaVariable?: string;
  /**
  * Set distance for intra-area routes
  *   - Range: `1`-`255`
  *   - Default value: `110`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#distance_intra_area CiscoOspfFeatureTemplate#distance_intra_area}
  */
  readonly distanceIntraArea?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#distance_intra_area_variable CiscoOspfFeatureTemplate#distance_intra_area_variable}
  */
  readonly distanceIntraAreaVariable?: string;
  /**
  * Advertise own router LSA with infinite distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#max_metric_router_lsa CiscoOspfFeatureTemplate#max_metric_router_lsa}
  */
  readonly maxMetricRouterLsa?: CiscoOspfFeatureTemplateMaxMetricRouterLsa[] | cdktf.IResolvable;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#name CiscoOspfFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Redistribute routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#redistribute CiscoOspfFeatureTemplate#redistribute}
  */
  readonly redistribute?: CiscoOspfFeatureTemplateRedistribute[] | cdktf.IResolvable;
  /**
  * Set route policy to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#route_policies CiscoOspfFeatureTemplate#route_policies}
  */
  readonly routePolicies?: CiscoOspfFeatureTemplateRoutePolicies[] | cdktf.IResolvable;
  /**
  * Set OSPF router ID to override system IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#router_id CiscoOspfFeatureTemplate#router_id}
  */
  readonly routerId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#router_id_variable CiscoOspfFeatureTemplate#router_id_variable}
  */
  readonly routerIdVariable?: string;
  /**
  * Set delay from first change received until performing SPF calculation
  *   - Range: `1`-`600000`
  *   - Default value: `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#timers_spf_delay CiscoOspfFeatureTemplate#timers_spf_delay}
  */
  readonly timersSpfDelay?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#timers_spf_delay_variable CiscoOspfFeatureTemplate#timers_spf_delay_variable}
  */
  readonly timersSpfDelayVariable?: string;
  /**
  * Set initial hold time between consecutive SPF calculations
  *   - Range: `1`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#timers_spf_initial_hold CiscoOspfFeatureTemplate#timers_spf_initial_hold}
  */
  readonly timersSpfInitialHold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#timers_spf_initial_hold_variable CiscoOspfFeatureTemplate#timers_spf_initial_hold_variable}
  */
  readonly timersSpfInitialHoldVariable?: string;
  /**
  * Set maximum hold time between consecutive SPF calculations
  *   - Range: `1`-`600000`
  *   - Default value: `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#timers_spf_max_hold CiscoOspfFeatureTemplate#timers_spf_max_hold}
  */
  readonly timersSpfMaxHold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#timers_spf_max_hold_variable CiscoOspfFeatureTemplate#timers_spf_max_hold_variable}
  */
  readonly timersSpfMaxHoldVariable?: string;
}
export interface CiscoOspfFeatureTemplateAreasInterfaces {
  /**
  * Set MD5 authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#authentication_message_digest_key CiscoOspfFeatureTemplate#authentication_message_digest_key}
  */
  readonly authenticationMessageDigestKey?: string;
  /**
  * Set MD5 message digest key
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#authentication_message_digest_key_id CiscoOspfFeatureTemplate#authentication_message_digest_key_id}
  */
  readonly authenticationMessageDigestKeyId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#authentication_message_digest_key_id_variable CiscoOspfFeatureTemplate#authentication_message_digest_key_id_variable}
  */
  readonly authenticationMessageDigestKeyIdVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#authentication_message_digest_key_variable CiscoOspfFeatureTemplate#authentication_message_digest_key_variable}
  */
  readonly authenticationMessageDigestKeyVariable?: string;
  /**
  * Set OSPF interface authentication type
  *   - Choices: `simple`, `message-digest`, `null`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#authentication_type CiscoOspfFeatureTemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#authentication_type_variable CiscoOspfFeatureTemplate#authentication_type_variable}
  */
  readonly authenticationTypeVariable?: string;
  /**
  * Set cost of OSPF interface
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#cost CiscoOspfFeatureTemplate#cost}
  */
  readonly cost?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#cost_variable CiscoOspfFeatureTemplate#cost_variable}
  */
  readonly costVariable?: string;
  /**
  * Set interval after which neighbor is declared to be down
  *   - Range: `1`-`65535`
  *   - Default value: `40`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#dead_interval CiscoOspfFeatureTemplate#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#dead_interval_variable CiscoOspfFeatureTemplate#dead_interval_variable}
  */
  readonly deadIntervalVariable?: string;
  /**
  * Set interval between OSPF hello packets
  *   - Range: `1`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#hello_interval CiscoOspfFeatureTemplate#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#hello_interval_variable CiscoOspfFeatureTemplate#hello_interval_variable}
  */
  readonly helloIntervalVariable?: string;
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#name CiscoOspfFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#name_variable CiscoOspfFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Set the OSPF network type
  *   - Choices: `broadcast`, `point-to-point`, `non-broadcast`, `point-to-multipoint`
  *   - Default value: `broadcast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#network CiscoOspfFeatureTemplate#network}
  */
  readonly network?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#network_variable CiscoOspfFeatureTemplate#network_variable}
  */
  readonly networkVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#optional CiscoOspfFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the interface to advertise its address, but not to actively run OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#passive_interface CiscoOspfFeatureTemplate#passive_interface}
  */
  readonly passiveInterface?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#passive_interface_variable CiscoOspfFeatureTemplate#passive_interface_variable}
  */
  readonly passiveInterfaceVariable?: string;
  /**
  * Set router’s priority to be elected as designated router
  *   - Range: `0`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#priority CiscoOspfFeatureTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#priority_variable CiscoOspfFeatureTemplate#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Set time between retransmitting LSAs
  *   - Range: `1`-`65535`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#retransmit_interval CiscoOspfFeatureTemplate#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#retransmit_interval_variable CiscoOspfFeatureTemplate#retransmit_interval_variable}
  */
  readonly retransmitIntervalVariable?: string;
}

export function ciscoOspfFeatureTemplateAreasInterfacesToTerraform(struct?: CiscoOspfFeatureTemplateAreasInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_message_digest_key: cdktf.stringToTerraform(struct!.authenticationMessageDigestKey),
    authentication_message_digest_key_id: cdktf.numberToTerraform(struct!.authenticationMessageDigestKeyId),
    authentication_message_digest_key_id_variable: cdktf.stringToTerraform(struct!.authenticationMessageDigestKeyIdVariable),
    authentication_message_digest_key_variable: cdktf.stringToTerraform(struct!.authenticationMessageDigestKeyVariable),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    authentication_type_variable: cdktf.stringToTerraform(struct!.authenticationTypeVariable),
    cost: cdktf.numberToTerraform(struct!.cost),
    cost_variable: cdktf.stringToTerraform(struct!.costVariable),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    dead_interval_variable: cdktf.stringToTerraform(struct!.deadIntervalVariable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    hello_interval_variable: cdktf.stringToTerraform(struct!.helloIntervalVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    network: cdktf.stringToTerraform(struct!.network),
    network_variable: cdktf.stringToTerraform(struct!.networkVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    passive_interface: cdktf.booleanToTerraform(struct!.passiveInterface),
    passive_interface_variable: cdktf.stringToTerraform(struct!.passiveInterfaceVariable),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    retransmit_interval_variable: cdktf.stringToTerraform(struct!.retransmitIntervalVariable),
  }
}


export function ciscoOspfFeatureTemplateAreasInterfacesToHclTerraform(struct?: CiscoOspfFeatureTemplateAreasInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_message_digest_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMessageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_message_digest_key_id: {
      value: cdktf.numberToHclTerraform(struct!.authenticationMessageDigestKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_message_digest_key_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMessageDigestKeyIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_message_digest_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMessageDigestKeyVariable),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_variable: {
      value: cdktf.stringToHclTerraform(struct!.priorityVariable),
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

export class CiscoOspfFeatureTemplateAreasInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoOspfFeatureTemplateAreasInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMessageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMessageDigestKey = this._authenticationMessageDigestKey;
    }
    if (this._authenticationMessageDigestKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMessageDigestKeyId = this._authenticationMessageDigestKeyId;
    }
    if (this._authenticationMessageDigestKeyIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMessageDigestKeyIdVariable = this._authenticationMessageDigestKeyIdVariable;
    }
    if (this._authenticationMessageDigestKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMessageDigestKeyVariable = this._authenticationMessageDigestKeyVariable;
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
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
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

  public set internalValue(value: CiscoOspfFeatureTemplateAreasInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMessageDigestKey = undefined;
      this._authenticationMessageDigestKeyId = undefined;
      this._authenticationMessageDigestKeyIdVariable = undefined;
      this._authenticationMessageDigestKeyVariable = undefined;
      this._authenticationType = undefined;
      this._authenticationTypeVariable = undefined;
      this._cost = undefined;
      this._costVariable = undefined;
      this._deadInterval = undefined;
      this._deadIntervalVariable = undefined;
      this._helloInterval = undefined;
      this._helloIntervalVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._network = undefined;
      this._networkVariable = undefined;
      this._optional = undefined;
      this._passiveInterface = undefined;
      this._passiveInterfaceVariable = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
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
      this._authenticationMessageDigestKey = value.authenticationMessageDigestKey;
      this._authenticationMessageDigestKeyId = value.authenticationMessageDigestKeyId;
      this._authenticationMessageDigestKeyIdVariable = value.authenticationMessageDigestKeyIdVariable;
      this._authenticationMessageDigestKeyVariable = value.authenticationMessageDigestKeyVariable;
      this._authenticationType = value.authenticationType;
      this._authenticationTypeVariable = value.authenticationTypeVariable;
      this._cost = value.cost;
      this._costVariable = value.costVariable;
      this._deadInterval = value.deadInterval;
      this._deadIntervalVariable = value.deadIntervalVariable;
      this._helloInterval = value.helloInterval;
      this._helloIntervalVariable = value.helloIntervalVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._network = value.network;
      this._networkVariable = value.networkVariable;
      this._optional = value.optional;
      this._passiveInterface = value.passiveInterface;
      this._passiveInterfaceVariable = value.passiveInterfaceVariable;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._retransmitInterval = value.retransmitInterval;
      this._retransmitIntervalVariable = value.retransmitIntervalVariable;
    }
  }

  // authentication_message_digest_key - computed: false, optional: true, required: false
  private _authenticationMessageDigestKey?: string; 
  public get authenticationMessageDigestKey() {
    return this.getStringAttribute('authentication_message_digest_key');
  }
  public set authenticationMessageDigestKey(value: string) {
    this._authenticationMessageDigestKey = value;
  }
  public resetAuthenticationMessageDigestKey() {
    this._authenticationMessageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMessageDigestKeyInput() {
    return this._authenticationMessageDigestKey;
  }

  // authentication_message_digest_key_id - computed: false, optional: true, required: false
  private _authenticationMessageDigestKeyId?: number; 
  public get authenticationMessageDigestKeyId() {
    return this.getNumberAttribute('authentication_message_digest_key_id');
  }
  public set authenticationMessageDigestKeyId(value: number) {
    this._authenticationMessageDigestKeyId = value;
  }
  public resetAuthenticationMessageDigestKeyId() {
    this._authenticationMessageDigestKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMessageDigestKeyIdInput() {
    return this._authenticationMessageDigestKeyId;
  }

  // authentication_message_digest_key_id_variable - computed: false, optional: true, required: false
  private _authenticationMessageDigestKeyIdVariable?: string; 
  public get authenticationMessageDigestKeyIdVariable() {
    return this.getStringAttribute('authentication_message_digest_key_id_variable');
  }
  public set authenticationMessageDigestKeyIdVariable(value: string) {
    this._authenticationMessageDigestKeyIdVariable = value;
  }
  public resetAuthenticationMessageDigestKeyIdVariable() {
    this._authenticationMessageDigestKeyIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMessageDigestKeyIdVariableInput() {
    return this._authenticationMessageDigestKeyIdVariable;
  }

  // authentication_message_digest_key_variable - computed: false, optional: true, required: false
  private _authenticationMessageDigestKeyVariable?: string; 
  public get authenticationMessageDigestKeyVariable() {
    return this.getStringAttribute('authentication_message_digest_key_variable');
  }
  public set authenticationMessageDigestKeyVariable(value: string) {
    this._authenticationMessageDigestKeyVariable = value;
  }
  public resetAuthenticationMessageDigestKeyVariable() {
    this._authenticationMessageDigestKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMessageDigestKeyVariableInput() {
    return this._authenticationMessageDigestKeyVariable;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
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

export class CiscoOspfFeatureTemplateAreasInterfacesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfFeatureTemplateAreasInterfaces[] | cdktf.IResolvable

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
  public get(index: number): CiscoOspfFeatureTemplateAreasInterfacesOutputReference {
    return new CiscoOspfFeatureTemplateAreasInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfFeatureTemplateAreasRanges {
  /**
  * Set matching prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#address CiscoOspfFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#address_variable CiscoOspfFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Set cost for this range
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#cost CiscoOspfFeatureTemplate#cost}
  */
  readonly cost?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#cost_variable CiscoOspfFeatureTemplate#cost_variable}
  */
  readonly costVariable?: string;
  /**
  * Do not advertise this range
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#no_advertise CiscoOspfFeatureTemplate#no_advertise}
  */
  readonly noAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#no_advertise_variable CiscoOspfFeatureTemplate#no_advertise_variable}
  */
  readonly noAdvertiseVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#optional CiscoOspfFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoOspfFeatureTemplateAreasRangesToTerraform(struct?: CiscoOspfFeatureTemplateAreasRanges | cdktf.IResolvable): any {
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


export function ciscoOspfFeatureTemplateAreasRangesToHclTerraform(struct?: CiscoOspfFeatureTemplateAreasRanges | cdktf.IResolvable): any {
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

export class CiscoOspfFeatureTemplateAreasRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoOspfFeatureTemplateAreasRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CiscoOspfFeatureTemplateAreasRanges | cdktf.IResolvable | undefined) {
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

export class CiscoOspfFeatureTemplateAreasRangesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfFeatureTemplateAreasRanges[] | cdktf.IResolvable

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
  public get(index: number): CiscoOspfFeatureTemplateAreasRangesOutputReference {
    return new CiscoOspfFeatureTemplateAreasRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfFeatureTemplateAreas {
  /**
  * Set OSPF area number
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#area_number CiscoOspfFeatureTemplate#area_number}
  */
  readonly areaNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#area_number_variable CiscoOspfFeatureTemplate#area_number_variable}
  */
  readonly areaNumberVariable?: string;
  /**
  * Set OSPF interface parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#interfaces CiscoOspfFeatureTemplate#interfaces}
  */
  readonly interfaces?: CiscoOspfFeatureTemplateAreasInterfaces[] | cdktf.IResolvable;
  /**
  * NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#nssa CiscoOspfFeatureTemplate#nssa}
  */
  readonly nssa?: boolean | cdktf.IResolvable;
  /**
  * Do not inject interarea routes into NSSA
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#nssa_no_summary CiscoOspfFeatureTemplate#nssa_no_summary}
  */
  readonly nssaNoSummary?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#nssa_no_summary_variable CiscoOspfFeatureTemplate#nssa_no_summary_variable}
  */
  readonly nssaNoSummaryVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#optional CiscoOspfFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Summarize OSPF routes at an area boundary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#ranges CiscoOspfFeatureTemplate#ranges}
  */
  readonly ranges?: CiscoOspfFeatureTemplateAreasRanges[] | cdktf.IResolvable;
  /**
  * Stub area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#stub CiscoOspfFeatureTemplate#stub}
  */
  readonly stub?: boolean | cdktf.IResolvable;
  /**
  * Do not inject interarea routes into stub
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#stub_no_summary CiscoOspfFeatureTemplate#stub_no_summary}
  */
  readonly stubNoSummary?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#stub_no_summary_variable CiscoOspfFeatureTemplate#stub_no_summary_variable}
  */
  readonly stubNoSummaryVariable?: string;
}

export function ciscoOspfFeatureTemplateAreasToTerraform(struct?: CiscoOspfFeatureTemplateAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_number: cdktf.numberToTerraform(struct!.areaNumber),
    area_number_variable: cdktf.stringToTerraform(struct!.areaNumberVariable),
    interfaces: cdktf.listMapper(ciscoOspfFeatureTemplateAreasInterfacesToTerraform, false)(struct!.interfaces),
    nssa: cdktf.booleanToTerraform(struct!.nssa),
    nssa_no_summary: cdktf.booleanToTerraform(struct!.nssaNoSummary),
    nssa_no_summary_variable: cdktf.stringToTerraform(struct!.nssaNoSummaryVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    ranges: cdktf.listMapper(ciscoOspfFeatureTemplateAreasRangesToTerraform, false)(struct!.ranges),
    stub: cdktf.booleanToTerraform(struct!.stub),
    stub_no_summary: cdktf.booleanToTerraform(struct!.stubNoSummary),
    stub_no_summary_variable: cdktf.stringToTerraform(struct!.stubNoSummaryVariable),
  }
}


export function ciscoOspfFeatureTemplateAreasToHclTerraform(struct?: CiscoOspfFeatureTemplateAreas | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(ciscoOspfFeatureTemplateAreasInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoOspfFeatureTemplateAreasInterfacesList",
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
      value: cdktf.listMapperHcl(ciscoOspfFeatureTemplateAreasRangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoOspfFeatureTemplateAreasRangesList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfFeatureTemplateAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoOspfFeatureTemplateAreas | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfFeatureTemplateAreas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaNumber = undefined;
      this._areaNumberVariable = undefined;
      this._interfaces.internalValue = undefined;
      this._nssa = undefined;
      this._nssaNoSummary = undefined;
      this._nssaNoSummaryVariable = undefined;
      this._optional = undefined;
      this._ranges.internalValue = undefined;
      this._stub = undefined;
      this._stubNoSummary = undefined;
      this._stubNoSummaryVariable = undefined;
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
      this._nssa = value.nssa;
      this._nssaNoSummary = value.nssaNoSummary;
      this._nssaNoSummaryVariable = value.nssaNoSummaryVariable;
      this._optional = value.optional;
      this._ranges.internalValue = value.ranges;
      this._stub = value.stub;
      this._stubNoSummary = value.stubNoSummary;
      this._stubNoSummaryVariable = value.stubNoSummaryVariable;
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
  private _interfaces = new CiscoOspfFeatureTemplateAreasInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: CiscoOspfFeatureTemplateAreasInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
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
  private _ranges = new CiscoOspfFeatureTemplateAreasRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: CiscoOspfFeatureTemplateAreasRanges[] | cdktf.IResolvable) {
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
}

export class CiscoOspfFeatureTemplateAreasList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfFeatureTemplateAreas[] | cdktf.IResolvable

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
  public get(index: number): CiscoOspfFeatureTemplateAreasOutputReference {
    return new CiscoOspfFeatureTemplateAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfFeatureTemplateMaxMetricRouterLsa {
  /**
  * Set the router LSA advertisement type
  *   - Choices: `administrative`, `on-startup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#ad_type CiscoOspfFeatureTemplate#ad_type}
  */
  readonly adType?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#optional CiscoOspfFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set how long to advertise maximum metric after router starts up
  *   - Range: `5`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#time CiscoOspfFeatureTemplate#time}
  */
  readonly time?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#time_variable CiscoOspfFeatureTemplate#time_variable}
  */
  readonly timeVariable?: string;
}

export function ciscoOspfFeatureTemplateMaxMetricRouterLsaToTerraform(struct?: CiscoOspfFeatureTemplateMaxMetricRouterLsa | cdktf.IResolvable): any {
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


export function ciscoOspfFeatureTemplateMaxMetricRouterLsaToHclTerraform(struct?: CiscoOspfFeatureTemplateMaxMetricRouterLsa | cdktf.IResolvable): any {
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

export class CiscoOspfFeatureTemplateMaxMetricRouterLsaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoOspfFeatureTemplateMaxMetricRouterLsa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CiscoOspfFeatureTemplateMaxMetricRouterLsa | cdktf.IResolvable | undefined) {
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

export class CiscoOspfFeatureTemplateMaxMetricRouterLsaList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfFeatureTemplateMaxMetricRouterLsa[] | cdktf.IResolvable

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
  public get(index: number): CiscoOspfFeatureTemplateMaxMetricRouterLsaOutputReference {
    return new CiscoOspfFeatureTemplateMaxMetricRouterLsaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfFeatureTemplateRedistribute {
  /**
  * Enable NAT DIA for redistributed routes
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#nat_dia CiscoOspfFeatureTemplate#nat_dia}
  */
  readonly natDia?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#nat_dia_variable CiscoOspfFeatureTemplate#nat_dia_variable}
  */
  readonly natDiaVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#optional CiscoOspfFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the protocol
  *   - Choices: `static`, `connected`, `bgp`, `omp`, `nat`, `eigrp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#protocol CiscoOspfFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#protocol_variable CiscoOspfFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Set route policy to apply to redistributed routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#route_policy CiscoOspfFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#route_policy_variable CiscoOspfFeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
}

export function ciscoOspfFeatureTemplateRedistributeToTerraform(struct?: CiscoOspfFeatureTemplateRedistribute | cdktf.IResolvable): any {
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


export function ciscoOspfFeatureTemplateRedistributeToHclTerraform(struct?: CiscoOspfFeatureTemplateRedistribute | cdktf.IResolvable): any {
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

export class CiscoOspfFeatureTemplateRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoOspfFeatureTemplateRedistribute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CiscoOspfFeatureTemplateRedistribute | cdktf.IResolvable | undefined) {
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

export class CiscoOspfFeatureTemplateRedistributeList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfFeatureTemplateRedistribute[] | cdktf.IResolvable

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
  public get(index: number): CiscoOspfFeatureTemplateRedistributeOutputReference {
    return new CiscoOspfFeatureTemplateRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOspfFeatureTemplateRoutePolicies {
  /**
  * Set direction to apply policy
  *   - Choices: `in`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#direction CiscoOspfFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#direction_variable CiscoOspfFeatureTemplate#direction_variable}
  */
  readonly directionVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#optional CiscoOspfFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Name of route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#policy_name CiscoOspfFeatureTemplate#policy_name}
  */
  readonly policyName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#policy_name_variable CiscoOspfFeatureTemplate#policy_name_variable}
  */
  readonly policyNameVariable?: string;
}

export function ciscoOspfFeatureTemplateRoutePoliciesToTerraform(struct?: CiscoOspfFeatureTemplateRoutePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    direction_variable: cdktf.stringToTerraform(struct!.directionVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_name_variable: cdktf.stringToTerraform(struct!.policyNameVariable),
  }
}


export function ciscoOspfFeatureTemplateRoutePoliciesToHclTerraform(struct?: CiscoOspfFeatureTemplateRoutePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction_variable: {
      value: cdktf.stringToHclTerraform(struct!.directionVariable),
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
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.policyNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOspfFeatureTemplateRoutePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoOspfFeatureTemplateRoutePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._directionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.directionVariable = this._directionVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyNameVariable = this._policyNameVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOspfFeatureTemplateRoutePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._directionVariable = undefined;
      this._optional = undefined;
      this._policyName = undefined;
      this._policyNameVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._directionVariable = value.directionVariable;
      this._optional = value.optional;
      this._policyName = value.policyName;
      this._policyNameVariable = value.policyNameVariable;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // direction_variable - computed: false, optional: true, required: false
  private _directionVariable?: string; 
  public get directionVariable() {
    return this.getStringAttribute('direction_variable');
  }
  public set directionVariable(value: string) {
    this._directionVariable = value;
  }
  public resetDirectionVariable() {
    this._directionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionVariableInput() {
    return this._directionVariable;
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

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_name_variable - computed: false, optional: true, required: false
  private _policyNameVariable?: string; 
  public get policyNameVariable() {
    return this.getStringAttribute('policy_name_variable');
  }
  public set policyNameVariable(value: string) {
    this._policyNameVariable = value;
  }
  public resetPolicyNameVariable() {
    this._policyNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameVariableInput() {
    return this._policyNameVariable;
  }
}

export class CiscoOspfFeatureTemplateRoutePoliciesList extends cdktf.ComplexList {
  public internalValue? : CiscoOspfFeatureTemplateRoutePolicies[] | cdktf.IResolvable

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
  public get(index: number): CiscoOspfFeatureTemplateRoutePoliciesOutputReference {
    return new CiscoOspfFeatureTemplateRoutePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template sdwan_cisco_ospf_feature_template}
*/
export class CiscoOspfFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_ospf_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoOspfFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoOspfFeatureTemplate to import
  * @param importFromId The id of the existing CiscoOspfFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoOspfFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_ospf_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ospf_feature_template sdwan_cisco_ospf_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoOspfFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoOspfFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_ospf_feature_template',
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
    this._areas.internalValue = config.areas;
    this._autoCostReferenceBandwidth = config.autoCostReferenceBandwidth;
    this._autoCostReferenceBandwidthVariable = config.autoCostReferenceBandwidthVariable;
    this._compatibleRfc1583 = config.compatibleRfc1583;
    this._compatibleRfc1583Variable = config.compatibleRfc1583Variable;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultInformationOriginateAlways = config.defaultInformationOriginateAlways;
    this._defaultInformationOriginateAlwaysVariable = config.defaultInformationOriginateAlwaysVariable;
    this._defaultInformationOriginateMetric = config.defaultInformationOriginateMetric;
    this._defaultInformationOriginateMetricType = config.defaultInformationOriginateMetricType;
    this._defaultInformationOriginateMetricTypeVariable = config.defaultInformationOriginateMetricTypeVariable;
    this._defaultInformationOriginateMetricVariable = config.defaultInformationOriginateMetricVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._distanceExternal = config.distanceExternal;
    this._distanceExternalVariable = config.distanceExternalVariable;
    this._distanceInterArea = config.distanceInterArea;
    this._distanceInterAreaVariable = config.distanceInterAreaVariable;
    this._distanceIntraArea = config.distanceIntraArea;
    this._distanceIntraAreaVariable = config.distanceIntraAreaVariable;
    this._maxMetricRouterLsa.internalValue = config.maxMetricRouterLsa;
    this._name = config.name;
    this._redistribute.internalValue = config.redistribute;
    this._routePolicies.internalValue = config.routePolicies;
    this._routerId = config.routerId;
    this._routerIdVariable = config.routerIdVariable;
    this._timersSpfDelay = config.timersSpfDelay;
    this._timersSpfDelayVariable = config.timersSpfDelayVariable;
    this._timersSpfInitialHold = config.timersSpfInitialHold;
    this._timersSpfInitialHoldVariable = config.timersSpfInitialHoldVariable;
    this._timersSpfMaxHold = config.timersSpfMaxHold;
    this._timersSpfMaxHoldVariable = config.timersSpfMaxHoldVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: false, optional: true, required: false
  private _areas = new CiscoOspfFeatureTemplateAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }
  public putAreas(value: CiscoOspfFeatureTemplateAreas[] | cdktf.IResolvable) {
    this._areas.internalValue = value;
  }
  public resetAreas() {
    this._areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areasInput() {
    return this._areas.internalValue;
  }

  // auto_cost_reference_bandwidth - computed: false, optional: true, required: false
  private _autoCostReferenceBandwidth?: number; 
  public get autoCostReferenceBandwidth() {
    return this.getNumberAttribute('auto_cost_reference_bandwidth');
  }
  public set autoCostReferenceBandwidth(value: number) {
    this._autoCostReferenceBandwidth = value;
  }
  public resetAutoCostReferenceBandwidth() {
    this._autoCostReferenceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCostReferenceBandwidthInput() {
    return this._autoCostReferenceBandwidth;
  }

  // auto_cost_reference_bandwidth_variable - computed: false, optional: true, required: false
  private _autoCostReferenceBandwidthVariable?: string; 
  public get autoCostReferenceBandwidthVariable() {
    return this.getStringAttribute('auto_cost_reference_bandwidth_variable');
  }
  public set autoCostReferenceBandwidthVariable(value: string) {
    this._autoCostReferenceBandwidthVariable = value;
  }
  public resetAutoCostReferenceBandwidthVariable() {
    this._autoCostReferenceBandwidthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCostReferenceBandwidthVariableInput() {
    return this._autoCostReferenceBandwidthVariable;
  }

  // compatible_rfc1583 - computed: false, optional: true, required: false
  private _compatibleRfc1583?: boolean | cdktf.IResolvable; 
  public get compatibleRfc1583() {
    return this.getBooleanAttribute('compatible_rfc1583');
  }
  public set compatibleRfc1583(value: boolean | cdktf.IResolvable) {
    this._compatibleRfc1583 = value;
  }
  public resetCompatibleRfc1583() {
    this._compatibleRfc1583 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleRfc1583Input() {
    return this._compatibleRfc1583;
  }

  // compatible_rfc1583_variable - computed: false, optional: true, required: false
  private _compatibleRfc1583Variable?: string; 
  public get compatibleRfc1583Variable() {
    return this.getStringAttribute('compatible_rfc1583_variable');
  }
  public set compatibleRfc1583Variable(value: string) {
    this._compatibleRfc1583Variable = value;
  }
  public resetCompatibleRfc1583Variable() {
    this._compatibleRfc1583Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleRfc1583VariableInput() {
    return this._compatibleRfc1583Variable;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_metric_router_lsa - computed: false, optional: true, required: false
  private _maxMetricRouterLsa = new CiscoOspfFeatureTemplateMaxMetricRouterLsaList(this, "max_metric_router_lsa", false);
  public get maxMetricRouterLsa() {
    return this._maxMetricRouterLsa;
  }
  public putMaxMetricRouterLsa(value: CiscoOspfFeatureTemplateMaxMetricRouterLsa[] | cdktf.IResolvable) {
    this._maxMetricRouterLsa.internalValue = value;
  }
  public resetMaxMetricRouterLsa() {
    this._maxMetricRouterLsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMetricRouterLsaInput() {
    return this._maxMetricRouterLsa.internalValue;
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

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new CiscoOspfFeatureTemplateRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: CiscoOspfFeatureTemplateRedistribute[] | cdktf.IResolvable) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // route_policies - computed: false, optional: true, required: false
  private _routePolicies = new CiscoOspfFeatureTemplateRoutePoliciesList(this, "route_policies", false);
  public get routePolicies() {
    return this._routePolicies;
  }
  public putRoutePolicies(value: CiscoOspfFeatureTemplateRoutePolicies[] | cdktf.IResolvable) {
    this._routePolicies.internalValue = value;
  }
  public resetRoutePolicies() {
    this._routePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePoliciesInput() {
    return this._routePolicies.internalValue;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // timers_spf_delay - computed: false, optional: true, required: false
  private _timersSpfDelay?: number; 
  public get timersSpfDelay() {
    return this.getNumberAttribute('timers_spf_delay');
  }
  public set timersSpfDelay(value: number) {
    this._timersSpfDelay = value;
  }
  public resetTimersSpfDelay() {
    this._timersSpfDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersSpfDelayInput() {
    return this._timersSpfDelay;
  }

  // timers_spf_delay_variable - computed: false, optional: true, required: false
  private _timersSpfDelayVariable?: string; 
  public get timersSpfDelayVariable() {
    return this.getStringAttribute('timers_spf_delay_variable');
  }
  public set timersSpfDelayVariable(value: string) {
    this._timersSpfDelayVariable = value;
  }
  public resetTimersSpfDelayVariable() {
    this._timersSpfDelayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersSpfDelayVariableInput() {
    return this._timersSpfDelayVariable;
  }

  // timers_spf_initial_hold - computed: false, optional: true, required: false
  private _timersSpfInitialHold?: number; 
  public get timersSpfInitialHold() {
    return this.getNumberAttribute('timers_spf_initial_hold');
  }
  public set timersSpfInitialHold(value: number) {
    this._timersSpfInitialHold = value;
  }
  public resetTimersSpfInitialHold() {
    this._timersSpfInitialHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersSpfInitialHoldInput() {
    return this._timersSpfInitialHold;
  }

  // timers_spf_initial_hold_variable - computed: false, optional: true, required: false
  private _timersSpfInitialHoldVariable?: string; 
  public get timersSpfInitialHoldVariable() {
    return this.getStringAttribute('timers_spf_initial_hold_variable');
  }
  public set timersSpfInitialHoldVariable(value: string) {
    this._timersSpfInitialHoldVariable = value;
  }
  public resetTimersSpfInitialHoldVariable() {
    this._timersSpfInitialHoldVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersSpfInitialHoldVariableInput() {
    return this._timersSpfInitialHoldVariable;
  }

  // timers_spf_max_hold - computed: false, optional: true, required: false
  private _timersSpfMaxHold?: number; 
  public get timersSpfMaxHold() {
    return this.getNumberAttribute('timers_spf_max_hold');
  }
  public set timersSpfMaxHold(value: number) {
    this._timersSpfMaxHold = value;
  }
  public resetTimersSpfMaxHold() {
    this._timersSpfMaxHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersSpfMaxHoldInput() {
    return this._timersSpfMaxHold;
  }

  // timers_spf_max_hold_variable - computed: false, optional: true, required: false
  private _timersSpfMaxHoldVariable?: string; 
  public get timersSpfMaxHoldVariable() {
    return this.getStringAttribute('timers_spf_max_hold_variable');
  }
  public set timersSpfMaxHoldVariable(value: string) {
    this._timersSpfMaxHoldVariable = value;
  }
  public resetTimersSpfMaxHoldVariable() {
    this._timersSpfMaxHoldVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersSpfMaxHoldVariableInput() {
    return this._timersSpfMaxHoldVariable;
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
      areas: cdktf.listMapper(ciscoOspfFeatureTemplateAreasToTerraform, false)(this._areas.internalValue),
      auto_cost_reference_bandwidth: cdktf.numberToTerraform(this._autoCostReferenceBandwidth),
      auto_cost_reference_bandwidth_variable: cdktf.stringToTerraform(this._autoCostReferenceBandwidthVariable),
      compatible_rfc1583: cdktf.booleanToTerraform(this._compatibleRfc1583),
      compatible_rfc1583_variable: cdktf.stringToTerraform(this._compatibleRfc1583Variable),
      default_information_originate: cdktf.booleanToTerraform(this._defaultInformationOriginate),
      default_information_originate_always: cdktf.booleanToTerraform(this._defaultInformationOriginateAlways),
      default_information_originate_always_variable: cdktf.stringToTerraform(this._defaultInformationOriginateAlwaysVariable),
      default_information_originate_metric: cdktf.numberToTerraform(this._defaultInformationOriginateMetric),
      default_information_originate_metric_type: cdktf.stringToTerraform(this._defaultInformationOriginateMetricType),
      default_information_originate_metric_type_variable: cdktf.stringToTerraform(this._defaultInformationOriginateMetricTypeVariable),
      default_information_originate_metric_variable: cdktf.stringToTerraform(this._defaultInformationOriginateMetricVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      distance_external: cdktf.numberToTerraform(this._distanceExternal),
      distance_external_variable: cdktf.stringToTerraform(this._distanceExternalVariable),
      distance_inter_area: cdktf.numberToTerraform(this._distanceInterArea),
      distance_inter_area_variable: cdktf.stringToTerraform(this._distanceInterAreaVariable),
      distance_intra_area: cdktf.numberToTerraform(this._distanceIntraArea),
      distance_intra_area_variable: cdktf.stringToTerraform(this._distanceIntraAreaVariable),
      max_metric_router_lsa: cdktf.listMapper(ciscoOspfFeatureTemplateMaxMetricRouterLsaToTerraform, false)(this._maxMetricRouterLsa.internalValue),
      name: cdktf.stringToTerraform(this._name),
      redistribute: cdktf.listMapper(ciscoOspfFeatureTemplateRedistributeToTerraform, false)(this._redistribute.internalValue),
      route_policies: cdktf.listMapper(ciscoOspfFeatureTemplateRoutePoliciesToTerraform, false)(this._routePolicies.internalValue),
      router_id: cdktf.stringToTerraform(this._routerId),
      router_id_variable: cdktf.stringToTerraform(this._routerIdVariable),
      timers_spf_delay: cdktf.numberToTerraform(this._timersSpfDelay),
      timers_spf_delay_variable: cdktf.stringToTerraform(this._timersSpfDelayVariable),
      timers_spf_initial_hold: cdktf.numberToTerraform(this._timersSpfInitialHold),
      timers_spf_initial_hold_variable: cdktf.stringToTerraform(this._timersSpfInitialHoldVariable),
      timers_spf_max_hold: cdktf.numberToTerraform(this._timersSpfMaxHold),
      timers_spf_max_hold_variable: cdktf.stringToTerraform(this._timersSpfMaxHoldVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      areas: {
        value: cdktf.listMapperHcl(ciscoOspfFeatureTemplateAreasToHclTerraform, false)(this._areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfFeatureTemplateAreasList",
      },
      auto_cost_reference_bandwidth: {
        value: cdktf.numberToHclTerraform(this._autoCostReferenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_cost_reference_bandwidth_variable: {
        value: cdktf.stringToHclTerraform(this._autoCostReferenceBandwidthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatible_rfc1583: {
        value: cdktf.booleanToHclTerraform(this._compatibleRfc1583),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compatible_rfc1583_variable: {
        value: cdktf.stringToHclTerraform(this._compatibleRfc1583Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      max_metric_router_lsa: {
        value: cdktf.listMapperHcl(ciscoOspfFeatureTemplateMaxMetricRouterLsaToHclTerraform, false)(this._maxMetricRouterLsa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfFeatureTemplateMaxMetricRouterLsaList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute: {
        value: cdktf.listMapperHcl(ciscoOspfFeatureTemplateRedistributeToHclTerraform, false)(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfFeatureTemplateRedistributeList",
      },
      route_policies: {
        value: cdktf.listMapperHcl(ciscoOspfFeatureTemplateRoutePoliciesToHclTerraform, false)(this._routePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOspfFeatureTemplateRoutePoliciesList",
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
      timers_spf_delay: {
        value: cdktf.numberToHclTerraform(this._timersSpfDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_spf_delay_variable: {
        value: cdktf.stringToHclTerraform(this._timersSpfDelayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timers_spf_initial_hold: {
        value: cdktf.numberToHclTerraform(this._timersSpfInitialHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_spf_initial_hold_variable: {
        value: cdktf.stringToHclTerraform(this._timersSpfInitialHoldVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timers_spf_max_hold: {
        value: cdktf.numberToHclTerraform(this._timersSpfMaxHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_spf_max_hold_variable: {
        value: cdktf.stringToHclTerraform(this._timersSpfMaxHoldVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
