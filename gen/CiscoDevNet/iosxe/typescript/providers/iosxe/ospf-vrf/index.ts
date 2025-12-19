// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OspfVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * OSPF area parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#areas OspfVrf#areas}
  */
  readonly areas?: OspfVrfAreas[] | cdktf.IResolvable;
  /**
  * Use reference bandwidth method to assign OSPF cost
  *   - Range: `1`-`4294967`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#auto_cost_reference_bandwidth OspfVrf#auto_cost_reference_bandwidth}
  */
  readonly autoCostReferenceBandwidth?: number;
  /**
  * Enable BFD on all interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#bfd_all_interfaces OspfVrf#bfd_all_interfaces}
  */
  readonly bfdAllInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#default_information_originate OspfVrf#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Always advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#default_information_originate_always OspfVrf#default_information_originate_always}
  */
  readonly defaultInformationOriginateAlways?: boolean | cdktf.IResolvable;
  /**
  * Set metric of redistributed routes
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#default_metric OspfVrf#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#delete_mode OspfVrf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#device OspfVrf#device}
  */
  readonly device?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#distance OspfVrf#distance}
  */
  readonly distance?: number;
  /**
  * OSPF domain-tag
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#domain_tag OspfVrf#domain_tag}
  */
  readonly domainTag?: number;
  /**
  * Log changes in adjacency state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#log_adjacency_changes OspfVrf#log_adjacency_changes}
  */
  readonly logAdjacencyChanges?: boolean | cdktf.IResolvable;
  /**
  * Log all state changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#log_adjacency_changes_detail OspfVrf#log_adjacency_changes_detail}
  */
  readonly logAdjacencyChangesDetail?: boolean | cdktf.IResolvable;
  /**
  * Maximum metric in self-originated router-LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#max_metric_router_lsa OspfVrf#max_metric_router_lsa}
  */
  readonly maxMetricRouterLsa?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#max_metric_router_lsa_external_lsa_metric OspfVrf#max_metric_router_lsa_external_lsa_metric}
  */
  readonly maxMetricRouterLsaExternalLsaMetric?: number;
  /**
  * Set maximum metric for stub links in router-LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#max_metric_router_lsa_include_stub OspfVrf#max_metric_router_lsa_include_stub}
  */
  readonly maxMetricRouterLsaIncludeStub?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `5`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#max_metric_router_lsa_on_startup_time OspfVrf#max_metric_router_lsa_on_startup_time}
  */
  readonly maxMetricRouterLsaOnStartupTime?: number;
  /**
  * Let BGP decide when to originate router-LSA with normal metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#max_metric_router_lsa_on_startup_wait_for_bgp OspfVrf#max_metric_router_lsa_on_startup_wait_for_bgp}
  */
  readonly maxMetricRouterLsaOnStartupWaitForBgp?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#max_metric_router_lsa_summary_lsa_metric OspfVrf#max_metric_router_lsa_summary_lsa_metric}
  */
  readonly maxMetricRouterLsaSummaryLsaMetric?: number;
  /**
  * Configure LDP automatic configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#mpls_ldp_autoconfig OspfVrf#mpls_ldp_autoconfig}
  */
  readonly mplsLdpAutoconfig?: boolean | cdktf.IResolvable;
  /**
  * Configure LDP-IGP Synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#mpls_ldp_sync OspfVrf#mpls_ldp_sync}
  */
  readonly mplsLdpSync?: boolean | cdktf.IResolvable;
  /**
  * Specify a neighbor router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#neighbor OspfVrf#neighbor}
  */
  readonly neighbor?: OspfVrfNeighbor[] | cdktf.IResolvable;
  /**
  * Enable routing on an IP network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#network OspfVrf#network}
  */
  readonly network?: OspfVrfNetwork[] | cdktf.IResolvable;
  /**
  * Cisco Non-stop forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nsf_cisco OspfVrf#nsf_cisco}
  */
  readonly nsfCisco?: boolean | cdktf.IResolvable;
  /**
  * For the whole OSPF process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nsf_cisco_enforce_global OspfVrf#nsf_cisco_enforce_global}
  */
  readonly nsfCiscoEnforceGlobal?: boolean | cdktf.IResolvable;
  /**
  * IETF graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nsf_ietf OspfVrf#nsf_ietf}
  */
  readonly nsfIetf?: boolean | cdktf.IResolvable;
  /**
  * Graceful restart interval
  *   - Range: `1`-`1800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nsf_ietf_restart_interval OspfVrf#nsf_ietf_restart_interval}
  */
  readonly nsfIetfRestartInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface OspfVrf#passive_interface}
  */
  readonly passiveInterface?: string[];
  /**
  * Suppress routing updates on all interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_default OspfVrf#passive_interface_default}
  */
  readonly passiveInterfaceDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_five_gigabit_ethernets OspfVrf#passive_interface_disable_five_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableFiveGigabitEthernets?: OspfVrfPassiveInterfaceDisableFiveGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_forty_gigabit_ethernets OspfVrf#passive_interface_disable_forty_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableFortyGigabitEthernets?: OspfVrfPassiveInterfaceDisableFortyGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_four_hundred_gigabit_ethernets OspfVrf#passive_interface_disable_four_hundred_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableFourHundredGigabitEthernets?: OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_gigabit_ethernets OspfVrf#passive_interface_disable_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableGigabitEthernets?: OspfVrfPassiveInterfaceDisableGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_hundred_gigabit_ethernets OspfVrf#passive_interface_disable_hundred_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableHundredGigabitEthernets?: OspfVrfPassiveInterfaceDisableHundredGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_loopbacks OspfVrf#passive_interface_disable_loopbacks}
  */
  readonly passiveInterfaceDisableLoopbacks?: OspfVrfPassiveInterfaceDisableLoopbacks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_port_channel_subinterfaces OspfVrf#passive_interface_disable_port_channel_subinterfaces}
  */
  readonly passiveInterfaceDisablePortChannelSubinterfaces?: OspfVrfPassiveInterfaceDisablePortChannelSubinterfaces[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_port_channels OspfVrf#passive_interface_disable_port_channels}
  */
  readonly passiveInterfaceDisablePortChannels?: OspfVrfPassiveInterfaceDisablePortChannels[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_ten_gigabit_ethernets OspfVrf#passive_interface_disable_ten_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableTenGigabitEthernets?: OspfVrfPassiveInterfaceDisableTenGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_tunnels OspfVrf#passive_interface_disable_tunnels}
  */
  readonly passiveInterfaceDisableTunnels?: OspfVrfPassiveInterfaceDisableTunnels[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_twenty_five_gigabit_ethernets OspfVrf#passive_interface_disable_twenty_five_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableTwentyFiveGigabitEthernets?: OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_two_gigabit_ethernets OspfVrf#passive_interface_disable_two_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableTwoGigabitEthernets?: OspfVrfPassiveInterfaceDisableTwoGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_two_hundred_gigabit_ethernets OspfVrf#passive_interface_disable_two_hundred_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableTwoHundredGigabitEthernets?: OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#passive_interface_disable_vlans OspfVrf#passive_interface_disable_vlans}
  */
  readonly passiveInterfaceDisableVlans?: OspfVrfPassiveInterfaceDisableVlans[] | cdktf.IResolvable;
  /**
  * OSPF topology priority
  *   - Range: `0`-`127`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#priority OspfVrf#priority}
  */
  readonly priority?: number;
  /**
  * Process ID
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#process_id OspfVrf#process_id}
  */
  readonly processId: number;
  /**
  * Consider subnets for redistribution into OSPF (Will be removed in the future)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#redistribute_connected_subnets OspfVrf#redistribute_connected_subnets}
  */
  readonly redistributeConnectedSubnets?: boolean | cdktf.IResolvable;
  /**
  * Consider subnets for redistribution into OSPF (Will be removed in the future)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#redistribute_static_subnets OspfVrf#redistribute_static_subnets}
  */
  readonly redistributeStaticSubnets?: boolean | cdktf.IResolvable;
  /**
  * Configure router identifier. New router-id will take effect immediately (peers will reset)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#router_id OspfVrf#router_id}
  */
  readonly routerId?: string;
  /**
  * Shutdown the OSPF protocol under the current instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#shutdown OspfVrf#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Configure IP address summaries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#summary_address OspfVrf#summary_address}
  */
  readonly summaryAddress?: OspfVrfSummaryAddress[] | cdktf.IResolvable;
  /**
  * VPN Routing/Forwarding Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#vrf OspfVrf#vrf}
  */
  readonly vrf: string;
}
export interface OspfVrfAreas {
  /**
  * OSPF area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#area_id OspfVrf#area_id}
  */
  readonly areaId: string;
  /**
  * Use message-digest authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#authentication_message_digest OspfVrf#authentication_message_digest}
  */
  readonly authenticationMessageDigest?: boolean | cdktf.IResolvable;
  /**
  * Specify a NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nssa OspfVrf#nssa}
  */
  readonly nssa?: boolean | cdktf.IResolvable;
  /**
  * Originate Type 7 default into NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nssa_default_information_originate OspfVrf#nssa_default_information_originate}
  */
  readonly nssaDefaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * OSPF default metric
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nssa_default_information_originate_metric OspfVrf#nssa_default_information_originate_metric}
  */
  readonly nssaDefaultInformationOriginateMetric?: number;
  /**
  * OSPF metric type for default routes
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nssa_default_information_originate_metric_type OspfVrf#nssa_default_information_originate_metric_type}
  */
  readonly nssaDefaultInformationOriginateMetricType?: number;
  /**
  * No redistribution into this NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nssa_no_redistribution OspfVrf#nssa_no_redistribution}
  */
  readonly nssaNoRedistribution?: boolean | cdktf.IResolvable;
  /**
  * Do not send summary LSA into NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#nssa_no_summary OspfVrf#nssa_no_summary}
  */
  readonly nssaNoSummary?: boolean | cdktf.IResolvable;
}

export function ospfVrfAreasToTerraform(struct?: OspfVrfAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id: cdktf.stringToTerraform(struct!.areaId),
    authentication_message_digest: cdktf.booleanToTerraform(struct!.authenticationMessageDigest),
    nssa: cdktf.booleanToTerraform(struct!.nssa),
    nssa_default_information_originate: cdktf.booleanToTerraform(struct!.nssaDefaultInformationOriginate),
    nssa_default_information_originate_metric: cdktf.numberToTerraform(struct!.nssaDefaultInformationOriginateMetric),
    nssa_default_information_originate_metric_type: cdktf.numberToTerraform(struct!.nssaDefaultInformationOriginateMetricType),
    nssa_no_redistribution: cdktf.booleanToTerraform(struct!.nssaNoRedistribution),
    nssa_no_summary: cdktf.booleanToTerraform(struct!.nssaNoSummary),
  }
}


export function ospfVrfAreasToHclTerraform(struct?: OspfVrfAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id: {
      value: cdktf.stringToHclTerraform(struct!.areaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_message_digest: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationMessageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa: {
      value: cdktf.booleanToHclTerraform(struct!.nssa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa_default_information_originate: {
      value: cdktf.booleanToHclTerraform(struct!.nssaDefaultInformationOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa_default_information_originate_metric: {
      value: cdktf.numberToHclTerraform(struct!.nssaDefaultInformationOriginateMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nssa_default_information_originate_metric_type: {
      value: cdktf.numberToHclTerraform(struct!.nssaDefaultInformationOriginateMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nssa_no_redistribution: {
      value: cdktf.booleanToHclTerraform(struct!.nssaNoRedistribution),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfAreas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaId = this._areaId;
    }
    if (this._authenticationMessageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMessageDigest = this._authenticationMessageDigest;
    }
    if (this._nssa !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssa = this._nssa;
    }
    if (this._nssaDefaultInformationOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaDefaultInformationOriginate = this._nssaDefaultInformationOriginate;
    }
    if (this._nssaDefaultInformationOriginateMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaDefaultInformationOriginateMetric = this._nssaDefaultInformationOriginateMetric;
    }
    if (this._nssaDefaultInformationOriginateMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaDefaultInformationOriginateMetricType = this._nssaDefaultInformationOriginateMetricType;
    }
    if (this._nssaNoRedistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaNoRedistribution = this._nssaNoRedistribution;
    }
    if (this._nssaNoSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaNoSummary = this._nssaNoSummary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfAreas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaId = undefined;
      this._authenticationMessageDigest = undefined;
      this._nssa = undefined;
      this._nssaDefaultInformationOriginate = undefined;
      this._nssaDefaultInformationOriginateMetric = undefined;
      this._nssaDefaultInformationOriginateMetricType = undefined;
      this._nssaNoRedistribution = undefined;
      this._nssaNoSummary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaId = value.areaId;
      this._authenticationMessageDigest = value.authenticationMessageDigest;
      this._nssa = value.nssa;
      this._nssaDefaultInformationOriginate = value.nssaDefaultInformationOriginate;
      this._nssaDefaultInformationOriginateMetric = value.nssaDefaultInformationOriginateMetric;
      this._nssaDefaultInformationOriginateMetricType = value.nssaDefaultInformationOriginateMetricType;
      this._nssaNoRedistribution = value.nssaNoRedistribution;
      this._nssaNoSummary = value.nssaNoSummary;
    }
  }

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // authentication_message_digest - computed: false, optional: true, required: false
  private _authenticationMessageDigest?: boolean | cdktf.IResolvable; 
  public get authenticationMessageDigest() {
    return this.getBooleanAttribute('authentication_message_digest');
  }
  public set authenticationMessageDigest(value: boolean | cdktf.IResolvable) {
    this._authenticationMessageDigest = value;
  }
  public resetAuthenticationMessageDigest() {
    this._authenticationMessageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMessageDigestInput() {
    return this._authenticationMessageDigest;
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

  // nssa_default_information_originate - computed: false, optional: true, required: false
  private _nssaDefaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get nssaDefaultInformationOriginate() {
    return this.getBooleanAttribute('nssa_default_information_originate');
  }
  public set nssaDefaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._nssaDefaultInformationOriginate = value;
  }
  public resetNssaDefaultInformationOriginate() {
    this._nssaDefaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaDefaultInformationOriginateInput() {
    return this._nssaDefaultInformationOriginate;
  }

  // nssa_default_information_originate_metric - computed: false, optional: true, required: false
  private _nssaDefaultInformationOriginateMetric?: number; 
  public get nssaDefaultInformationOriginateMetric() {
    return this.getNumberAttribute('nssa_default_information_originate_metric');
  }
  public set nssaDefaultInformationOriginateMetric(value: number) {
    this._nssaDefaultInformationOriginateMetric = value;
  }
  public resetNssaDefaultInformationOriginateMetric() {
    this._nssaDefaultInformationOriginateMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaDefaultInformationOriginateMetricInput() {
    return this._nssaDefaultInformationOriginateMetric;
  }

  // nssa_default_information_originate_metric_type - computed: false, optional: true, required: false
  private _nssaDefaultInformationOriginateMetricType?: number; 
  public get nssaDefaultInformationOriginateMetricType() {
    return this.getNumberAttribute('nssa_default_information_originate_metric_type');
  }
  public set nssaDefaultInformationOriginateMetricType(value: number) {
    this._nssaDefaultInformationOriginateMetricType = value;
  }
  public resetNssaDefaultInformationOriginateMetricType() {
    this._nssaDefaultInformationOriginateMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaDefaultInformationOriginateMetricTypeInput() {
    return this._nssaDefaultInformationOriginateMetricType;
  }

  // nssa_no_redistribution - computed: false, optional: true, required: false
  private _nssaNoRedistribution?: boolean | cdktf.IResolvable; 
  public get nssaNoRedistribution() {
    return this.getBooleanAttribute('nssa_no_redistribution');
  }
  public set nssaNoRedistribution(value: boolean | cdktf.IResolvable) {
    this._nssaNoRedistribution = value;
  }
  public resetNssaNoRedistribution() {
    this._nssaNoRedistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaNoRedistributionInput() {
    return this._nssaNoRedistribution;
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
}

export class OspfVrfAreasList extends cdktf.ComplexList {
  public internalValue? : OspfVrfAreas[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfAreasOutputReference {
    return new OspfVrfAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfNeighbor {
  /**
  * OSPF cost for point-to-multipoint neighbor
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#cost OspfVrf#cost}
  */
  readonly cost?: number;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#ip OspfVrf#ip}
  */
  readonly ip: string;
  /**
  * OSPF priority of non-broadcast neighbor
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#priority OspfVrf#priority}
  */
  readonly priority?: number;
}

export function ospfVrfNeighborToTerraform(struct?: OspfVrfNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    ip: cdktf.stringToTerraform(struct!.ip),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function ospfVrfNeighborToHclTerraform(struct?: OspfVrfNeighbor | cdktf.IResolvable): any {
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._ip = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._ip = value.ip;
      this._priority = value.priority;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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
}

export class OspfVrfNeighborList extends cdktf.ComplexList {
  public internalValue? : OspfVrfNeighbor[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfNeighborOutputReference {
    return new OspfVrfNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfNetwork {
  /**
  * Set the OSPF area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#area OspfVrf#area}
  */
  readonly area?: string;
  /**
  * Network number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#ip OspfVrf#ip}
  */
  readonly ip: string;
  /**
  * OSPF wild card bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#wildcard OspfVrf#wildcard}
  */
  readonly wildcard: string;
}

export function ospfVrfNetworkToTerraform(struct?: OspfVrfNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.stringToTerraform(struct!.area),
    ip: cdktf.stringToTerraform(struct!.ip),
    wildcard: cdktf.stringToTerraform(struct!.wildcard),
  }
}


export function ospfVrfNetworkToHclTerraform(struct?: OspfVrfNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.stringToHclTerraform(struct!.area),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.stringToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area = undefined;
      this._ip = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area = value.area;
      this._ip = value.ip;
      this._wildcard = value.wildcard;
    }
  }

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // wildcard - computed: false, optional: false, required: true
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}

export class OspfVrfNetworkList extends cdktf.ComplexList {
  public internalValue? : OspfVrfNetwork[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfNetworkOutputReference {
    return new OspfVrfNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableFiveGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableFiveGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableFiveGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableFiveGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableFiveGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableFiveGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableFiveGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableFiveGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableFiveGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableFortyGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableFortyGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableFortyGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableFortyGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableFortyGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableFortyGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableFortyGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableFortyGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableFortyGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableHundredGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableHundredGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableHundredGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableHundredGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableHundredGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableHundredGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableHundredGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableLoopbacks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableLoopbacksToTerraform(struct?: OspfVrfPassiveInterfaceDisableLoopbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableLoopbacksToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableLoopbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableLoopbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableLoopbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableLoopbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableLoopbacksList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableLoopbacks[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableLoopbacksOutputReference {
    return new OspfVrfPassiveInterfaceDisableLoopbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisablePortChannelSubinterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisablePortChannelSubinterfacesToTerraform(struct?: OspfVrfPassiveInterfaceDisablePortChannelSubinterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisablePortChannelSubinterfacesToHclTerraform(struct?: OspfVrfPassiveInterfaceDisablePortChannelSubinterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisablePortChannelSubinterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisablePortChannelSubinterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisablePortChannelSubinterfacesList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisablePortChannelSubinterfaces[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference {
    return new OspfVrfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisablePortChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisablePortChannelsToTerraform(struct?: OspfVrfPassiveInterfaceDisablePortChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisablePortChannelsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisablePortChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisablePortChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisablePortChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisablePortChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisablePortChannelsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisablePortChannels[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisablePortChannelsOutputReference {
    return new OspfVrfPassiveInterfaceDisablePortChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableTenGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableTenGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableTenGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableTenGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableTenGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableTenGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableTenGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableTenGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableTenGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableTenGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableTenGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableTenGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableTunnels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableTunnelsToTerraform(struct?: OspfVrfPassiveInterfaceDisableTunnels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableTunnelsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableTunnels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableTunnels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableTunnels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableTunnelsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableTunnels[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableTunnelsOutputReference {
    return new OspfVrfPassiveInterfaceDisableTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableTwoGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableTwoGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableTwoGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableTwoGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableTwoGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableTwoGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableTwoGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableTwoGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableTwoGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsToTerraform(struct?: OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference {
    return new OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfPassiveInterfaceDisableVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#name OspfVrf#name}
  */
  readonly name: string;
}

export function ospfVrfPassiveInterfaceDisableVlansToTerraform(struct?: OspfVrfPassiveInterfaceDisableVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfVrfPassiveInterfaceDisableVlansToHclTerraform(struct?: OspfVrfPassiveInterfaceDisableVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfPassiveInterfaceDisableVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfPassiveInterfaceDisableVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfPassiveInterfaceDisableVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class OspfVrfPassiveInterfaceDisableVlansList extends cdktf.ComplexList {
  public internalValue? : OspfVrfPassiveInterfaceDisableVlans[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfPassiveInterfaceDisableVlansOutputReference {
    return new OspfVrfPassiveInterfaceDisableVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfVrfSummaryAddress {
  /**
  * IP summary address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#ip OspfVrf#ip}
  */
  readonly ip: string;
  /**
  * Summary mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#mask OspfVrf#mask}
  */
  readonly mask: string;
}

export function ospfVrfSummaryAddressToTerraform(struct?: OspfVrfSummaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function ospfVrfSummaryAddressToHclTerraform(struct?: OspfVrfSummaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfVrfSummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfVrfSummaryAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfVrfSummaryAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._mask = value.mask;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class OspfVrfSummaryAddressList extends cdktf.ComplexList {
  public internalValue? : OspfVrfSummaryAddress[] | cdktf.IResolvable

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
  public get(index: number): OspfVrfSummaryAddressOutputReference {
    return new OspfVrfSummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf iosxe_ospf_vrf}
*/
export class OspfVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_ospf_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OspfVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OspfVrf to import
  * @param importFromId The id of the existing OspfVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OspfVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_ospf_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/ospf_vrf iosxe_ospf_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OspfVrfConfig
  */
  public constructor(scope: Construct, id: string, config: OspfVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_ospf_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
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
    this._bfdAllInterfaces = config.bfdAllInterfaces;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultInformationOriginateAlways = config.defaultInformationOriginateAlways;
    this._defaultMetric = config.defaultMetric;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._distance = config.distance;
    this._domainTag = config.domainTag;
    this._logAdjacencyChanges = config.logAdjacencyChanges;
    this._logAdjacencyChangesDetail = config.logAdjacencyChangesDetail;
    this._maxMetricRouterLsa = config.maxMetricRouterLsa;
    this._maxMetricRouterLsaExternalLsaMetric = config.maxMetricRouterLsaExternalLsaMetric;
    this._maxMetricRouterLsaIncludeStub = config.maxMetricRouterLsaIncludeStub;
    this._maxMetricRouterLsaOnStartupTime = config.maxMetricRouterLsaOnStartupTime;
    this._maxMetricRouterLsaOnStartupWaitForBgp = config.maxMetricRouterLsaOnStartupWaitForBgp;
    this._maxMetricRouterLsaSummaryLsaMetric = config.maxMetricRouterLsaSummaryLsaMetric;
    this._mplsLdpAutoconfig = config.mplsLdpAutoconfig;
    this._mplsLdpSync = config.mplsLdpSync;
    this._neighbor.internalValue = config.neighbor;
    this._network.internalValue = config.network;
    this._nsfCisco = config.nsfCisco;
    this._nsfCiscoEnforceGlobal = config.nsfCiscoEnforceGlobal;
    this._nsfIetf = config.nsfIetf;
    this._nsfIetfRestartInterval = config.nsfIetfRestartInterval;
    this._passiveInterface = config.passiveInterface;
    this._passiveInterfaceDefault = config.passiveInterfaceDefault;
    this._passiveInterfaceDisableFiveGigabitEthernets.internalValue = config.passiveInterfaceDisableFiveGigabitEthernets;
    this._passiveInterfaceDisableFortyGigabitEthernets.internalValue = config.passiveInterfaceDisableFortyGigabitEthernets;
    this._passiveInterfaceDisableFourHundredGigabitEthernets.internalValue = config.passiveInterfaceDisableFourHundredGigabitEthernets;
    this._passiveInterfaceDisableGigabitEthernets.internalValue = config.passiveInterfaceDisableGigabitEthernets;
    this._passiveInterfaceDisableHundredGigabitEthernets.internalValue = config.passiveInterfaceDisableHundredGigabitEthernets;
    this._passiveInterfaceDisableLoopbacks.internalValue = config.passiveInterfaceDisableLoopbacks;
    this._passiveInterfaceDisablePortChannelSubinterfaces.internalValue = config.passiveInterfaceDisablePortChannelSubinterfaces;
    this._passiveInterfaceDisablePortChannels.internalValue = config.passiveInterfaceDisablePortChannels;
    this._passiveInterfaceDisableTenGigabitEthernets.internalValue = config.passiveInterfaceDisableTenGigabitEthernets;
    this._passiveInterfaceDisableTunnels.internalValue = config.passiveInterfaceDisableTunnels;
    this._passiveInterfaceDisableTwentyFiveGigabitEthernets.internalValue = config.passiveInterfaceDisableTwentyFiveGigabitEthernets;
    this._passiveInterfaceDisableTwoGigabitEthernets.internalValue = config.passiveInterfaceDisableTwoGigabitEthernets;
    this._passiveInterfaceDisableTwoHundredGigabitEthernets.internalValue = config.passiveInterfaceDisableTwoHundredGigabitEthernets;
    this._passiveInterfaceDisableVlans.internalValue = config.passiveInterfaceDisableVlans;
    this._priority = config.priority;
    this._processId = config.processId;
    this._redistributeConnectedSubnets = config.redistributeConnectedSubnets;
    this._redistributeStaticSubnets = config.redistributeStaticSubnets;
    this._routerId = config.routerId;
    this._shutdown = config.shutdown;
    this._summaryAddress.internalValue = config.summaryAddress;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: false, optional: true, required: false
  private _areas = new OspfVrfAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }
  public putAreas(value: OspfVrfAreas[] | cdktf.IResolvable) {
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

  // bfd_all_interfaces - computed: false, optional: true, required: false
  private _bfdAllInterfaces?: boolean | cdktf.IResolvable; 
  public get bfdAllInterfaces() {
    return this.getBooleanAttribute('bfd_all_interfaces');
  }
  public set bfdAllInterfaces(value: boolean | cdktf.IResolvable) {
    this._bfdAllInterfaces = value;
  }
  public resetBfdAllInterfaces() {
    this._bfdAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAllInterfacesInput() {
    return this._bfdAllInterfaces;
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

  // default_metric - computed: false, optional: true, required: false
  private _defaultMetric?: number; 
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
  }
  public set defaultMetric(value: number) {
    this._defaultMetric = value;
  }
  public resetDefaultMetric() {
    this._defaultMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMetricInput() {
    return this._defaultMetric;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // domain_tag - computed: false, optional: true, required: false
  private _domainTag?: number; 
  public get domainTag() {
    return this.getNumberAttribute('domain_tag');
  }
  public set domainTag(value: number) {
    this._domainTag = value;
  }
  public resetDomainTag() {
    this._domainTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainTagInput() {
    return this._domainTag;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_adjacency_changes - computed: false, optional: true, required: false
  private _logAdjacencyChanges?: boolean | cdktf.IResolvable; 
  public get logAdjacencyChanges() {
    return this.getBooleanAttribute('log_adjacency_changes');
  }
  public set logAdjacencyChanges(value: boolean | cdktf.IResolvable) {
    this._logAdjacencyChanges = value;
  }
  public resetLogAdjacencyChanges() {
    this._logAdjacencyChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesInput() {
    return this._logAdjacencyChanges;
  }

  // log_adjacency_changes_detail - computed: false, optional: true, required: false
  private _logAdjacencyChangesDetail?: boolean | cdktf.IResolvable; 
  public get logAdjacencyChangesDetail() {
    return this.getBooleanAttribute('log_adjacency_changes_detail');
  }
  public set logAdjacencyChangesDetail(value: boolean | cdktf.IResolvable) {
    this._logAdjacencyChangesDetail = value;
  }
  public resetLogAdjacencyChangesDetail() {
    this._logAdjacencyChangesDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesDetailInput() {
    return this._logAdjacencyChangesDetail;
  }

  // max_metric_router_lsa - computed: false, optional: true, required: false
  private _maxMetricRouterLsa?: boolean | cdktf.IResolvable; 
  public get maxMetricRouterLsa() {
    return this.getBooleanAttribute('max_metric_router_lsa');
  }
  public set maxMetricRouterLsa(value: boolean | cdktf.IResolvable) {
    this._maxMetricRouterLsa = value;
  }
  public resetMaxMetricRouterLsa() {
    this._maxMetricRouterLsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMetricRouterLsaInput() {
    return this._maxMetricRouterLsa;
  }

  // max_metric_router_lsa_external_lsa_metric - computed: false, optional: true, required: false
  private _maxMetricRouterLsaExternalLsaMetric?: number; 
  public get maxMetricRouterLsaExternalLsaMetric() {
    return this.getNumberAttribute('max_metric_router_lsa_external_lsa_metric');
  }
  public set maxMetricRouterLsaExternalLsaMetric(value: number) {
    this._maxMetricRouterLsaExternalLsaMetric = value;
  }
  public resetMaxMetricRouterLsaExternalLsaMetric() {
    this._maxMetricRouterLsaExternalLsaMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMetricRouterLsaExternalLsaMetricInput() {
    return this._maxMetricRouterLsaExternalLsaMetric;
  }

  // max_metric_router_lsa_include_stub - computed: false, optional: true, required: false
  private _maxMetricRouterLsaIncludeStub?: boolean | cdktf.IResolvable; 
  public get maxMetricRouterLsaIncludeStub() {
    return this.getBooleanAttribute('max_metric_router_lsa_include_stub');
  }
  public set maxMetricRouterLsaIncludeStub(value: boolean | cdktf.IResolvable) {
    this._maxMetricRouterLsaIncludeStub = value;
  }
  public resetMaxMetricRouterLsaIncludeStub() {
    this._maxMetricRouterLsaIncludeStub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMetricRouterLsaIncludeStubInput() {
    return this._maxMetricRouterLsaIncludeStub;
  }

  // max_metric_router_lsa_on_startup_time - computed: false, optional: true, required: false
  private _maxMetricRouterLsaOnStartupTime?: number; 
  public get maxMetricRouterLsaOnStartupTime() {
    return this.getNumberAttribute('max_metric_router_lsa_on_startup_time');
  }
  public set maxMetricRouterLsaOnStartupTime(value: number) {
    this._maxMetricRouterLsaOnStartupTime = value;
  }
  public resetMaxMetricRouterLsaOnStartupTime() {
    this._maxMetricRouterLsaOnStartupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMetricRouterLsaOnStartupTimeInput() {
    return this._maxMetricRouterLsaOnStartupTime;
  }

  // max_metric_router_lsa_on_startup_wait_for_bgp - computed: false, optional: true, required: false
  private _maxMetricRouterLsaOnStartupWaitForBgp?: boolean | cdktf.IResolvable; 
  public get maxMetricRouterLsaOnStartupWaitForBgp() {
    return this.getBooleanAttribute('max_metric_router_lsa_on_startup_wait_for_bgp');
  }
  public set maxMetricRouterLsaOnStartupWaitForBgp(value: boolean | cdktf.IResolvable) {
    this._maxMetricRouterLsaOnStartupWaitForBgp = value;
  }
  public resetMaxMetricRouterLsaOnStartupWaitForBgp() {
    this._maxMetricRouterLsaOnStartupWaitForBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMetricRouterLsaOnStartupWaitForBgpInput() {
    return this._maxMetricRouterLsaOnStartupWaitForBgp;
  }

  // max_metric_router_lsa_summary_lsa_metric - computed: false, optional: true, required: false
  private _maxMetricRouterLsaSummaryLsaMetric?: number; 
  public get maxMetricRouterLsaSummaryLsaMetric() {
    return this.getNumberAttribute('max_metric_router_lsa_summary_lsa_metric');
  }
  public set maxMetricRouterLsaSummaryLsaMetric(value: number) {
    this._maxMetricRouterLsaSummaryLsaMetric = value;
  }
  public resetMaxMetricRouterLsaSummaryLsaMetric() {
    this._maxMetricRouterLsaSummaryLsaMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMetricRouterLsaSummaryLsaMetricInput() {
    return this._maxMetricRouterLsaSummaryLsaMetric;
  }

  // mpls_ldp_autoconfig - computed: false, optional: true, required: false
  private _mplsLdpAutoconfig?: boolean | cdktf.IResolvable; 
  public get mplsLdpAutoconfig() {
    return this.getBooleanAttribute('mpls_ldp_autoconfig');
  }
  public set mplsLdpAutoconfig(value: boolean | cdktf.IResolvable) {
    this._mplsLdpAutoconfig = value;
  }
  public resetMplsLdpAutoconfig() {
    this._mplsLdpAutoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsLdpAutoconfigInput() {
    return this._mplsLdpAutoconfig;
  }

  // mpls_ldp_sync - computed: false, optional: true, required: false
  private _mplsLdpSync?: boolean | cdktf.IResolvable; 
  public get mplsLdpSync() {
    return this.getBooleanAttribute('mpls_ldp_sync');
  }
  public set mplsLdpSync(value: boolean | cdktf.IResolvable) {
    this._mplsLdpSync = value;
  }
  public resetMplsLdpSync() {
    this._mplsLdpSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsLdpSyncInput() {
    return this._mplsLdpSync;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new OspfVrfNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: OspfVrfNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new OspfVrfNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: OspfVrfNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // nsf_cisco - computed: false, optional: true, required: false
  private _nsfCisco?: boolean | cdktf.IResolvable; 
  public get nsfCisco() {
    return this.getBooleanAttribute('nsf_cisco');
  }
  public set nsfCisco(value: boolean | cdktf.IResolvable) {
    this._nsfCisco = value;
  }
  public resetNsfCisco() {
    this._nsfCisco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfCiscoInput() {
    return this._nsfCisco;
  }

  // nsf_cisco_enforce_global - computed: false, optional: true, required: false
  private _nsfCiscoEnforceGlobal?: boolean | cdktf.IResolvable; 
  public get nsfCiscoEnforceGlobal() {
    return this.getBooleanAttribute('nsf_cisco_enforce_global');
  }
  public set nsfCiscoEnforceGlobal(value: boolean | cdktf.IResolvable) {
    this._nsfCiscoEnforceGlobal = value;
  }
  public resetNsfCiscoEnforceGlobal() {
    this._nsfCiscoEnforceGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfCiscoEnforceGlobalInput() {
    return this._nsfCiscoEnforceGlobal;
  }

  // nsf_ietf - computed: false, optional: true, required: false
  private _nsfIetf?: boolean | cdktf.IResolvable; 
  public get nsfIetf() {
    return this.getBooleanAttribute('nsf_ietf');
  }
  public set nsfIetf(value: boolean | cdktf.IResolvable) {
    this._nsfIetf = value;
  }
  public resetNsfIetf() {
    this._nsfIetf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfIetfInput() {
    return this._nsfIetf;
  }

  // nsf_ietf_restart_interval - computed: false, optional: true, required: false
  private _nsfIetfRestartInterval?: number; 
  public get nsfIetfRestartInterval() {
    return this.getNumberAttribute('nsf_ietf_restart_interval');
  }
  public set nsfIetfRestartInterval(value: number) {
    this._nsfIetfRestartInterval = value;
  }
  public resetNsfIetfRestartInterval() {
    this._nsfIetfRestartInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfIetfRestartIntervalInput() {
    return this._nsfIetfRestartInterval;
  }

  // passive_interface - computed: false, optional: true, required: false
  private _passiveInterface?: string[]; 
  public get passiveInterface() {
    return this.getListAttribute('passive_interface');
  }
  public set passiveInterface(value: string[]) {
    this._passiveInterface = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface;
  }

  // passive_interface_default - computed: false, optional: true, required: false
  private _passiveInterfaceDefault?: boolean | cdktf.IResolvable; 
  public get passiveInterfaceDefault() {
    return this.getBooleanAttribute('passive_interface_default');
  }
  public set passiveInterfaceDefault(value: boolean | cdktf.IResolvable) {
    this._passiveInterfaceDefault = value;
  }
  public resetPassiveInterfaceDefault() {
    this._passiveInterfaceDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDefaultInput() {
    return this._passiveInterfaceDefault;
  }

  // passive_interface_disable_five_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableFiveGigabitEthernets = new OspfVrfPassiveInterfaceDisableFiveGigabitEthernetsList(this, "passive_interface_disable_five_gigabit_ethernets", true);
  public get passiveInterfaceDisableFiveGigabitEthernets() {
    return this._passiveInterfaceDisableFiveGigabitEthernets;
  }
  public putPassiveInterfaceDisableFiveGigabitEthernets(value: OspfVrfPassiveInterfaceDisableFiveGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableFiveGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableFiveGigabitEthernets() {
    this._passiveInterfaceDisableFiveGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableFiveGigabitEthernetsInput() {
    return this._passiveInterfaceDisableFiveGigabitEthernets.internalValue;
  }

  // passive_interface_disable_forty_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableFortyGigabitEthernets = new OspfVrfPassiveInterfaceDisableFortyGigabitEthernetsList(this, "passive_interface_disable_forty_gigabit_ethernets", true);
  public get passiveInterfaceDisableFortyGigabitEthernets() {
    return this._passiveInterfaceDisableFortyGigabitEthernets;
  }
  public putPassiveInterfaceDisableFortyGigabitEthernets(value: OspfVrfPassiveInterfaceDisableFortyGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableFortyGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableFortyGigabitEthernets() {
    this._passiveInterfaceDisableFortyGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableFortyGigabitEthernetsInput() {
    return this._passiveInterfaceDisableFortyGigabitEthernets.internalValue;
  }

  // passive_interface_disable_four_hundred_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableFourHundredGigabitEthernets = new OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsList(this, "passive_interface_disable_four_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableFourHundredGigabitEthernets() {
    return this._passiveInterfaceDisableFourHundredGigabitEthernets;
  }
  public putPassiveInterfaceDisableFourHundredGigabitEthernets(value: OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableFourHundredGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableFourHundredGigabitEthernets() {
    this._passiveInterfaceDisableFourHundredGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableFourHundredGigabitEthernetsInput() {
    return this._passiveInterfaceDisableFourHundredGigabitEthernets.internalValue;
  }

  // passive_interface_disable_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableGigabitEthernets = new OspfVrfPassiveInterfaceDisableGigabitEthernetsList(this, "passive_interface_disable_gigabit_ethernets", true);
  public get passiveInterfaceDisableGigabitEthernets() {
    return this._passiveInterfaceDisableGigabitEthernets;
  }
  public putPassiveInterfaceDisableGigabitEthernets(value: OspfVrfPassiveInterfaceDisableGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableGigabitEthernets() {
    this._passiveInterfaceDisableGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableGigabitEthernetsInput() {
    return this._passiveInterfaceDisableGigabitEthernets.internalValue;
  }

  // passive_interface_disable_hundred_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableHundredGigabitEthernets = new OspfVrfPassiveInterfaceDisableHundredGigabitEthernetsList(this, "passive_interface_disable_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableHundredGigabitEthernets() {
    return this._passiveInterfaceDisableHundredGigabitEthernets;
  }
  public putPassiveInterfaceDisableHundredGigabitEthernets(value: OspfVrfPassiveInterfaceDisableHundredGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableHundredGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableHundredGigabitEthernets() {
    this._passiveInterfaceDisableHundredGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableHundredGigabitEthernetsInput() {
    return this._passiveInterfaceDisableHundredGigabitEthernets.internalValue;
  }

  // passive_interface_disable_loopbacks - computed: false, optional: true, required: false
  private _passiveInterfaceDisableLoopbacks = new OspfVrfPassiveInterfaceDisableLoopbacksList(this, "passive_interface_disable_loopbacks", true);
  public get passiveInterfaceDisableLoopbacks() {
    return this._passiveInterfaceDisableLoopbacks;
  }
  public putPassiveInterfaceDisableLoopbacks(value: OspfVrfPassiveInterfaceDisableLoopbacks[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableLoopbacks.internalValue = value;
  }
  public resetPassiveInterfaceDisableLoopbacks() {
    this._passiveInterfaceDisableLoopbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableLoopbacksInput() {
    return this._passiveInterfaceDisableLoopbacks.internalValue;
  }

  // passive_interface_disable_port_channel_subinterfaces - computed: false, optional: true, required: false
  private _passiveInterfaceDisablePortChannelSubinterfaces = new OspfVrfPassiveInterfaceDisablePortChannelSubinterfacesList(this, "passive_interface_disable_port_channel_subinterfaces", true);
  public get passiveInterfaceDisablePortChannelSubinterfaces() {
    return this._passiveInterfaceDisablePortChannelSubinterfaces;
  }
  public putPassiveInterfaceDisablePortChannelSubinterfaces(value: OspfVrfPassiveInterfaceDisablePortChannelSubinterfaces[] | cdktf.IResolvable) {
    this._passiveInterfaceDisablePortChannelSubinterfaces.internalValue = value;
  }
  public resetPassiveInterfaceDisablePortChannelSubinterfaces() {
    this._passiveInterfaceDisablePortChannelSubinterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisablePortChannelSubinterfacesInput() {
    return this._passiveInterfaceDisablePortChannelSubinterfaces.internalValue;
  }

  // passive_interface_disable_port_channels - computed: false, optional: true, required: false
  private _passiveInterfaceDisablePortChannels = new OspfVrfPassiveInterfaceDisablePortChannelsList(this, "passive_interface_disable_port_channels", true);
  public get passiveInterfaceDisablePortChannels() {
    return this._passiveInterfaceDisablePortChannels;
  }
  public putPassiveInterfaceDisablePortChannels(value: OspfVrfPassiveInterfaceDisablePortChannels[] | cdktf.IResolvable) {
    this._passiveInterfaceDisablePortChannels.internalValue = value;
  }
  public resetPassiveInterfaceDisablePortChannels() {
    this._passiveInterfaceDisablePortChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisablePortChannelsInput() {
    return this._passiveInterfaceDisablePortChannels.internalValue;
  }

  // passive_interface_disable_ten_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableTenGigabitEthernets = new OspfVrfPassiveInterfaceDisableTenGigabitEthernetsList(this, "passive_interface_disable_ten_gigabit_ethernets", true);
  public get passiveInterfaceDisableTenGigabitEthernets() {
    return this._passiveInterfaceDisableTenGigabitEthernets;
  }
  public putPassiveInterfaceDisableTenGigabitEthernets(value: OspfVrfPassiveInterfaceDisableTenGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableTenGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableTenGigabitEthernets() {
    this._passiveInterfaceDisableTenGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableTenGigabitEthernetsInput() {
    return this._passiveInterfaceDisableTenGigabitEthernets.internalValue;
  }

  // passive_interface_disable_tunnels - computed: false, optional: true, required: false
  private _passiveInterfaceDisableTunnels = new OspfVrfPassiveInterfaceDisableTunnelsList(this, "passive_interface_disable_tunnels", true);
  public get passiveInterfaceDisableTunnels() {
    return this._passiveInterfaceDisableTunnels;
  }
  public putPassiveInterfaceDisableTunnels(value: OspfVrfPassiveInterfaceDisableTunnels[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableTunnels.internalValue = value;
  }
  public resetPassiveInterfaceDisableTunnels() {
    this._passiveInterfaceDisableTunnels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableTunnelsInput() {
    return this._passiveInterfaceDisableTunnels.internalValue;
  }

  // passive_interface_disable_twenty_five_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableTwentyFiveGigabitEthernets = new OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList(this, "passive_interface_disable_twenty_five_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwentyFiveGigabitEthernets() {
    return this._passiveInterfaceDisableTwentyFiveGigabitEthernets;
  }
  public putPassiveInterfaceDisableTwentyFiveGigabitEthernets(value: OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableTwentyFiveGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableTwentyFiveGigabitEthernets() {
    this._passiveInterfaceDisableTwentyFiveGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableTwentyFiveGigabitEthernetsInput() {
    return this._passiveInterfaceDisableTwentyFiveGigabitEthernets.internalValue;
  }

  // passive_interface_disable_two_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableTwoGigabitEthernets = new OspfVrfPassiveInterfaceDisableTwoGigabitEthernetsList(this, "passive_interface_disable_two_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwoGigabitEthernets() {
    return this._passiveInterfaceDisableTwoGigabitEthernets;
  }
  public putPassiveInterfaceDisableTwoGigabitEthernets(value: OspfVrfPassiveInterfaceDisableTwoGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableTwoGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableTwoGigabitEthernets() {
    this._passiveInterfaceDisableTwoGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableTwoGigabitEthernetsInput() {
    return this._passiveInterfaceDisableTwoGigabitEthernets.internalValue;
  }

  // passive_interface_disable_two_hundred_gigabit_ethernets - computed: false, optional: true, required: false
  private _passiveInterfaceDisableTwoHundredGigabitEthernets = new OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsList(this, "passive_interface_disable_two_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwoHundredGigabitEthernets() {
    return this._passiveInterfaceDisableTwoHundredGigabitEthernets;
  }
  public putPassiveInterfaceDisableTwoHundredGigabitEthernets(value: OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableTwoHundredGigabitEthernets.internalValue = value;
  }
  public resetPassiveInterfaceDisableTwoHundredGigabitEthernets() {
    this._passiveInterfaceDisableTwoHundredGigabitEthernets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableTwoHundredGigabitEthernetsInput() {
    return this._passiveInterfaceDisableTwoHundredGigabitEthernets.internalValue;
  }

  // passive_interface_disable_vlans - computed: false, optional: true, required: false
  private _passiveInterfaceDisableVlans = new OspfVrfPassiveInterfaceDisableVlansList(this, "passive_interface_disable_vlans", true);
  public get passiveInterfaceDisableVlans() {
    return this._passiveInterfaceDisableVlans;
  }
  public putPassiveInterfaceDisableVlans(value: OspfVrfPassiveInterfaceDisableVlans[] | cdktf.IResolvable) {
    this._passiveInterfaceDisableVlans.internalValue = value;
  }
  public resetPassiveInterfaceDisableVlans() {
    this._passiveInterfaceDisableVlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceDisableVlansInput() {
    return this._passiveInterfaceDisableVlans.internalValue;
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

  // process_id - computed: false, optional: false, required: true
  private _processId?: number; 
  public get processId() {
    return this.getNumberAttribute('process_id');
  }
  public set processId(value: number) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // redistribute_connected_subnets - computed: false, optional: true, required: false
  private _redistributeConnectedSubnets?: boolean | cdktf.IResolvable; 
  public get redistributeConnectedSubnets() {
    return this.getBooleanAttribute('redistribute_connected_subnets');
  }
  public set redistributeConnectedSubnets(value: boolean | cdktf.IResolvable) {
    this._redistributeConnectedSubnets = value;
  }
  public resetRedistributeConnectedSubnets() {
    this._redistributeConnectedSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedSubnetsInput() {
    return this._redistributeConnectedSubnets;
  }

  // redistribute_static_subnets - computed: false, optional: true, required: false
  private _redistributeStaticSubnets?: boolean | cdktf.IResolvable; 
  public get redistributeStaticSubnets() {
    return this.getBooleanAttribute('redistribute_static_subnets');
  }
  public set redistributeStaticSubnets(value: boolean | cdktf.IResolvable) {
    this._redistributeStaticSubnets = value;
  }
  public resetRedistributeStaticSubnets() {
    this._redistributeStaticSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticSubnetsInput() {
    return this._redistributeStaticSubnets;
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

  // summary_address - computed: false, optional: true, required: false
  private _summaryAddress = new OspfVrfSummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
  }
  public putSummaryAddress(value: OspfVrfSummaryAddress[] | cdktf.IResolvable) {
    this._summaryAddress.internalValue = value;
  }
  public resetSummaryAddress() {
    this._summaryAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressInput() {
    return this._summaryAddress.internalValue;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      areas: cdktf.listMapper(ospfVrfAreasToTerraform, false)(this._areas.internalValue),
      auto_cost_reference_bandwidth: cdktf.numberToTerraform(this._autoCostReferenceBandwidth),
      bfd_all_interfaces: cdktf.booleanToTerraform(this._bfdAllInterfaces),
      default_information_originate: cdktf.booleanToTerraform(this._defaultInformationOriginate),
      default_information_originate_always: cdktf.booleanToTerraform(this._defaultInformationOriginateAlways),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      distance: cdktf.numberToTerraform(this._distance),
      domain_tag: cdktf.numberToTerraform(this._domainTag),
      log_adjacency_changes: cdktf.booleanToTerraform(this._logAdjacencyChanges),
      log_adjacency_changes_detail: cdktf.booleanToTerraform(this._logAdjacencyChangesDetail),
      max_metric_router_lsa: cdktf.booleanToTerraform(this._maxMetricRouterLsa),
      max_metric_router_lsa_external_lsa_metric: cdktf.numberToTerraform(this._maxMetricRouterLsaExternalLsaMetric),
      max_metric_router_lsa_include_stub: cdktf.booleanToTerraform(this._maxMetricRouterLsaIncludeStub),
      max_metric_router_lsa_on_startup_time: cdktf.numberToTerraform(this._maxMetricRouterLsaOnStartupTime),
      max_metric_router_lsa_on_startup_wait_for_bgp: cdktf.booleanToTerraform(this._maxMetricRouterLsaOnStartupWaitForBgp),
      max_metric_router_lsa_summary_lsa_metric: cdktf.numberToTerraform(this._maxMetricRouterLsaSummaryLsaMetric),
      mpls_ldp_autoconfig: cdktf.booleanToTerraform(this._mplsLdpAutoconfig),
      mpls_ldp_sync: cdktf.booleanToTerraform(this._mplsLdpSync),
      neighbor: cdktf.listMapper(ospfVrfNeighborToTerraform, false)(this._neighbor.internalValue),
      network: cdktf.listMapper(ospfVrfNetworkToTerraform, false)(this._network.internalValue),
      nsf_cisco: cdktf.booleanToTerraform(this._nsfCisco),
      nsf_cisco_enforce_global: cdktf.booleanToTerraform(this._nsfCiscoEnforceGlobal),
      nsf_ietf: cdktf.booleanToTerraform(this._nsfIetf),
      nsf_ietf_restart_interval: cdktf.numberToTerraform(this._nsfIetfRestartInterval),
      passive_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passiveInterface),
      passive_interface_default: cdktf.booleanToTerraform(this._passiveInterfaceDefault),
      passive_interface_disable_five_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableFiveGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableFiveGigabitEthernets.internalValue),
      passive_interface_disable_forty_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableFortyGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableFortyGigabitEthernets.internalValue),
      passive_interface_disable_four_hundred_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableFourHundredGigabitEthernets.internalValue),
      passive_interface_disable_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableGigabitEthernets.internalValue),
      passive_interface_disable_hundred_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableHundredGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableHundredGigabitEthernets.internalValue),
      passive_interface_disable_loopbacks: cdktf.listMapper(ospfVrfPassiveInterfaceDisableLoopbacksToTerraform, false)(this._passiveInterfaceDisableLoopbacks.internalValue),
      passive_interface_disable_port_channel_subinterfaces: cdktf.listMapper(ospfVrfPassiveInterfaceDisablePortChannelSubinterfacesToTerraform, false)(this._passiveInterfaceDisablePortChannelSubinterfaces.internalValue),
      passive_interface_disable_port_channels: cdktf.listMapper(ospfVrfPassiveInterfaceDisablePortChannelsToTerraform, false)(this._passiveInterfaceDisablePortChannels.internalValue),
      passive_interface_disable_ten_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableTenGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableTenGigabitEthernets.internalValue),
      passive_interface_disable_tunnels: cdktf.listMapper(ospfVrfPassiveInterfaceDisableTunnelsToTerraform, false)(this._passiveInterfaceDisableTunnels.internalValue),
      passive_interface_disable_twenty_five_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableTwentyFiveGigabitEthernets.internalValue),
      passive_interface_disable_two_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableTwoGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableTwoGigabitEthernets.internalValue),
      passive_interface_disable_two_hundred_gigabit_ethernets: cdktf.listMapper(ospfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableTwoHundredGigabitEthernets.internalValue),
      passive_interface_disable_vlans: cdktf.listMapper(ospfVrfPassiveInterfaceDisableVlansToTerraform, false)(this._passiveInterfaceDisableVlans.internalValue),
      priority: cdktf.numberToTerraform(this._priority),
      process_id: cdktf.numberToTerraform(this._processId),
      redistribute_connected_subnets: cdktf.booleanToTerraform(this._redistributeConnectedSubnets),
      redistribute_static_subnets: cdktf.booleanToTerraform(this._redistributeStaticSubnets),
      router_id: cdktf.stringToTerraform(this._routerId),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      summary_address: cdktf.listMapper(ospfVrfSummaryAddressToTerraform, false)(this._summaryAddress.internalValue),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      areas: {
        value: cdktf.listMapperHcl(ospfVrfAreasToHclTerraform, false)(this._areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfVrfAreasList",
      },
      auto_cost_reference_bandwidth: {
        value: cdktf.numberToHclTerraform(this._autoCostReferenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_all_interfaces: {
        value: cdktf.booleanToHclTerraform(this._bfdAllInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      default_metric: {
        value: cdktf.numberToHclTerraform(this._defaultMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      domain_tag: {
        value: cdktf.numberToHclTerraform(this._domainTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_adjacency_changes: {
        value: cdktf.booleanToHclTerraform(this._logAdjacencyChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_adjacency_changes_detail: {
        value: cdktf.booleanToHclTerraform(this._logAdjacencyChangesDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_metric_router_lsa: {
        value: cdktf.booleanToHclTerraform(this._maxMetricRouterLsa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_metric_router_lsa_external_lsa_metric: {
        value: cdktf.numberToHclTerraform(this._maxMetricRouterLsaExternalLsaMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_metric_router_lsa_include_stub: {
        value: cdktf.booleanToHclTerraform(this._maxMetricRouterLsaIncludeStub),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_metric_router_lsa_on_startup_time: {
        value: cdktf.numberToHclTerraform(this._maxMetricRouterLsaOnStartupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_metric_router_lsa_on_startup_wait_for_bgp: {
        value: cdktf.booleanToHclTerraform(this._maxMetricRouterLsaOnStartupWaitForBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_metric_router_lsa_summary_lsa_metric: {
        value: cdktf.numberToHclTerraform(this._maxMetricRouterLsaSummaryLsaMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpls_ldp_autoconfig: {
        value: cdktf.booleanToHclTerraform(this._mplsLdpAutoconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mpls_ldp_sync: {
        value: cdktf.booleanToHclTerraform(this._mplsLdpSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      neighbor: {
        value: cdktf.listMapperHcl(ospfVrfNeighborToHclTerraform, false)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfVrfNeighborList",
      },
      network: {
        value: cdktf.listMapperHcl(ospfVrfNetworkToHclTerraform, false)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfVrfNetworkList",
      },
      nsf_cisco: {
        value: cdktf.booleanToHclTerraform(this._nsfCisco),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsf_cisco_enforce_global: {
        value: cdktf.booleanToHclTerraform(this._nsfCiscoEnforceGlobal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsf_ietf: {
        value: cdktf.booleanToHclTerraform(this._nsfIetf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsf_ietf_restart_interval: {
        value: cdktf.numberToHclTerraform(this._nsfIetfRestartInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passiveInterface),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      passive_interface_default: {
        value: cdktf.booleanToHclTerraform(this._passiveInterfaceDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passive_interface_disable_five_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableFiveGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableFiveGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableFiveGigabitEthernetsList",
      },
      passive_interface_disable_forty_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableFortyGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableFortyGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableFortyGigabitEthernetsList",
      },
      passive_interface_disable_four_hundred_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableFourHundredGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsList",
      },
      passive_interface_disable_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableGigabitEthernetsList",
      },
      passive_interface_disable_hundred_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableHundredGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableHundredGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableHundredGigabitEthernetsList",
      },
      passive_interface_disable_loopbacks: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableLoopbacksToHclTerraform, false)(this._passiveInterfaceDisableLoopbacks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableLoopbacksList",
      },
      passive_interface_disable_port_channel_subinterfaces: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisablePortChannelSubinterfacesToHclTerraform, false)(this._passiveInterfaceDisablePortChannelSubinterfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisablePortChannelSubinterfacesList",
      },
      passive_interface_disable_port_channels: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisablePortChannelsToHclTerraform, false)(this._passiveInterfaceDisablePortChannels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisablePortChannelsList",
      },
      passive_interface_disable_ten_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableTenGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableTenGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableTenGigabitEthernetsList",
      },
      passive_interface_disable_tunnels: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableTunnelsToHclTerraform, false)(this._passiveInterfaceDisableTunnels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableTunnelsList",
      },
      passive_interface_disable_twenty_five_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableTwentyFiveGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList",
      },
      passive_interface_disable_two_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableTwoGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableTwoGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableTwoGigabitEthernetsList",
      },
      passive_interface_disable_two_hundred_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableTwoHundredGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsList",
      },
      passive_interface_disable_vlans: {
        value: cdktf.listMapperHcl(ospfVrfPassiveInterfaceDisableVlansToHclTerraform, false)(this._passiveInterfaceDisableVlans.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfVrfPassiveInterfaceDisableVlansList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_id: {
        value: cdktf.numberToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redistribute_connected_subnets: {
        value: cdktf.booleanToHclTerraform(this._redistributeConnectedSubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_static_subnets: {
        value: cdktf.booleanToHclTerraform(this._redistributeStaticSubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
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
      summary_address: {
        value: cdktf.listMapperHcl(ospfVrfSummaryAddressToHclTerraform, false)(this._summaryAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfVrfSummaryAddressList",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
