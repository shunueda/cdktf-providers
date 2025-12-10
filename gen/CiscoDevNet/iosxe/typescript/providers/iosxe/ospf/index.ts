// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * OSPF area parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#areas Ospf#areas}
  */
  readonly areas?: OspfAreas[] | cdktf.IResolvable;
  /**
  * Use reference bandwidth method to assign OSPF cost
  *   - Range: `1`-`4294967`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#auto_cost_reference_bandwidth Ospf#auto_cost_reference_bandwidth}
  */
  readonly autoCostReferenceBandwidth?: number;
  /**
  * Enable BFD on all interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#bfd_all_interfaces Ospf#bfd_all_interfaces}
  */
  readonly bfdAllInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#default_information_originate Ospf#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Always advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#default_information_originate_always Ospf#default_information_originate_always}
  */
  readonly defaultInformationOriginateAlways?: boolean | cdktf.IResolvable;
  /**
  * Set metric of redistributed routes
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#default_metric Ospf#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#delete_mode Ospf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#device Ospf#device}
  */
  readonly device?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#distance Ospf#distance}
  */
  readonly distance?: number;
  /**
  * OSPF domain-tag
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#domain_tag Ospf#domain_tag}
  */
  readonly domainTag?: number;
  /**
  * Priority of prefixes to be protected
  *   - Choices: `high`, `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#fast_reroute_per_prefix_enable_prefix_priority Ospf#fast_reroute_per_prefix_enable_prefix_priority}
  */
  readonly fastReroutePerPrefixEnablePrefixPriority?: string;
  /**
  * Log changes in adjacency state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#log_adjacency_changes Ospf#log_adjacency_changes}
  */
  readonly logAdjacencyChanges?: boolean | cdktf.IResolvable;
  /**
  * Log all state changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#log_adjacency_changes_detail Ospf#log_adjacency_changes_detail}
  */
  readonly logAdjacencyChangesDetail?: boolean | cdktf.IResolvable;
  /**
  * Maximum metric in self-originated router-LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#max_metric_router_lsa Ospf#max_metric_router_lsa}
  */
  readonly maxMetricRouterLsa?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#max_metric_router_lsa_external_lsa_metric Ospf#max_metric_router_lsa_external_lsa_metric}
  */
  readonly maxMetricRouterLsaExternalLsaMetric?: number;
  /**
  * Set maximum metric for stub links in router-LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#max_metric_router_lsa_include_stub Ospf#max_metric_router_lsa_include_stub}
  */
  readonly maxMetricRouterLsaIncludeStub?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `5`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#max_metric_router_lsa_on_startup_time Ospf#max_metric_router_lsa_on_startup_time}
  */
  readonly maxMetricRouterLsaOnStartupTime?: number;
  /**
  * Let BGP decide when to originate router-LSA with normal metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#max_metric_router_lsa_on_startup_wait_for_bgp Ospf#max_metric_router_lsa_on_startup_wait_for_bgp}
  */
  readonly maxMetricRouterLsaOnStartupWaitForBgp?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#max_metric_router_lsa_summary_lsa_metric Ospf#max_metric_router_lsa_summary_lsa_metric}
  */
  readonly maxMetricRouterLsaSummaryLsaMetric?: number;
  /**
  * Configure LDP automatic configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#mpls_ldp_autoconfig Ospf#mpls_ldp_autoconfig}
  */
  readonly mplsLdpAutoconfig?: boolean | cdktf.IResolvable;
  /**
  * Configure LDP-IGP Synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#mpls_ldp_sync Ospf#mpls_ldp_sync}
  */
  readonly mplsLdpSync?: boolean | cdktf.IResolvable;
  /**
  * Specify a neighbor router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#neighbors Ospf#neighbors}
  */
  readonly neighbors?: OspfNeighbors[] | cdktf.IResolvable;
  /**
  * Enable routing on an IP network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#networks Ospf#networks}
  */
  readonly networks?: OspfNetworks[] | cdktf.IResolvable;
  /**
  * Cisco Non-stop forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nsf_cisco Ospf#nsf_cisco}
  */
  readonly nsfCisco?: boolean | cdktf.IResolvable;
  /**
  * For the whole OSPF process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nsf_cisco_enforce_global Ospf#nsf_cisco_enforce_global}
  */
  readonly nsfCiscoEnforceGlobal?: boolean | cdktf.IResolvable;
  /**
  * IETF graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nsf_ietf Ospf#nsf_ietf}
  */
  readonly nsfIetf?: boolean | cdktf.IResolvable;
  /**
  * Graceful restart interval
  *   - Range: `1`-`1800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nsf_ietf_restart_interval Ospf#nsf_ietf_restart_interval}
  */
  readonly nsfIetfRestartInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface Ospf#passive_interface}
  */
  readonly passiveInterface?: string[];
  /**
  * Suppress routing updates on all interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_default Ospf#passive_interface_default}
  */
  readonly passiveInterfaceDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_five_gigabit_ethernets Ospf#passive_interface_disable_five_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableFiveGigabitEthernets?: OspfPassiveInterfaceDisableFiveGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_forty_gigabit_ethernets Ospf#passive_interface_disable_forty_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableFortyGigabitEthernets?: OspfPassiveInterfaceDisableFortyGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_four_hundred_gigabit_ethernets Ospf#passive_interface_disable_four_hundred_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableFourHundredGigabitEthernets?: OspfPassiveInterfaceDisableFourHundredGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_gigabit_ethernets Ospf#passive_interface_disable_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableGigabitEthernets?: OspfPassiveInterfaceDisableGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_hundred_gigabit_ethernets Ospf#passive_interface_disable_hundred_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableHundredGigabitEthernets?: OspfPassiveInterfaceDisableHundredGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_loopbacks Ospf#passive_interface_disable_loopbacks}
  */
  readonly passiveInterfaceDisableLoopbacks?: OspfPassiveInterfaceDisableLoopbacks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_port_channel_subinterfaces Ospf#passive_interface_disable_port_channel_subinterfaces}
  */
  readonly passiveInterfaceDisablePortChannelSubinterfaces?: OspfPassiveInterfaceDisablePortChannelSubinterfaces[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_port_channels Ospf#passive_interface_disable_port_channels}
  */
  readonly passiveInterfaceDisablePortChannels?: OspfPassiveInterfaceDisablePortChannels[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_ten_gigabit_ethernets Ospf#passive_interface_disable_ten_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableTenGigabitEthernets?: OspfPassiveInterfaceDisableTenGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_tunnels Ospf#passive_interface_disable_tunnels}
  */
  readonly passiveInterfaceDisableTunnels?: OspfPassiveInterfaceDisableTunnels[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_twenty_five_gigabit_ethernets Ospf#passive_interface_disable_twenty_five_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableTwentyFiveGigabitEthernets?: OspfPassiveInterfaceDisableTwentyFiveGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_two_gigabit_ethernets Ospf#passive_interface_disable_two_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableTwoGigabitEthernets?: OspfPassiveInterfaceDisableTwoGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_two_hundred_gigabit_ethernets Ospf#passive_interface_disable_two_hundred_gigabit_ethernets}
  */
  readonly passiveInterfaceDisableTwoHundredGigabitEthernets?: OspfPassiveInterfaceDisableTwoHundredGigabitEthernets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#passive_interface_disable_vlans Ospf#passive_interface_disable_vlans}
  */
  readonly passiveInterfaceDisableVlans?: OspfPassiveInterfaceDisableVlans[] | cdktf.IResolvable;
  /**
  * OSPF topology priority
  *   - Range: `0`-`127`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#priority Ospf#priority}
  */
  readonly priority?: number;
  /**
  * Process ID
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#process_id Ospf#process_id}
  */
  readonly processId: number;
  /**
  * Consider subnets for redistribution into OSPF (Will be removed in the future)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#redistribute_connected_subnets Ospf#redistribute_connected_subnets}
  */
  readonly redistributeConnectedSubnets?: boolean | cdktf.IResolvable;
  /**
  * Consider subnets for redistribution into OSPF (Will be removed in the future)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#redistribute_static_subnets Ospf#redistribute_static_subnets}
  */
  readonly redistributeStaticSubnets?: boolean | cdktf.IResolvable;
  /**
  * Configure router identifier. New router-id will take effect immediately (peers will reset)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#router_id Ospf#router_id}
  */
  readonly routerId?: string;
  /**
  * Shutdown the OSPF protocol under the current instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#shutdown Ospf#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Configure IP address summaries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#summary_addresses Ospf#summary_addresses}
  */
  readonly summaryAddresses?: OspfSummaryAddresses[] | cdktf.IResolvable;
}
export interface OspfAreas {
  /**
  * OSPF area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#area_id Ospf#area_id}
  */
  readonly areaId: string;
  /**
  * Use message-digest authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#authentication_message_digest Ospf#authentication_message_digest}
  */
  readonly authenticationMessageDigest?: boolean | cdktf.IResolvable;
  /**
  * Specify a NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nssa Ospf#nssa}
  */
  readonly nssa?: boolean | cdktf.IResolvable;
  /**
  * Originate Type 7 default into NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nssa_default_information_originate Ospf#nssa_default_information_originate}
  */
  readonly nssaDefaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * OSPF default metric
  *   - Range: `0`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nssa_default_information_originate_metric Ospf#nssa_default_information_originate_metric}
  */
  readonly nssaDefaultInformationOriginateMetric?: number;
  /**
  * OSPF metric type for default routes
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nssa_default_information_originate_metric_type Ospf#nssa_default_information_originate_metric_type}
  */
  readonly nssaDefaultInformationOriginateMetricType?: number;
  /**
  * No redistribution into this NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nssa_no_redistribution Ospf#nssa_no_redistribution}
  */
  readonly nssaNoRedistribution?: boolean | cdktf.IResolvable;
  /**
  * Do not send summary LSA into NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#nssa_no_summary Ospf#nssa_no_summary}
  */
  readonly nssaNoSummary?: boolean | cdktf.IResolvable;
}

export function ospfAreasToTerraform(struct?: OspfAreas | cdktf.IResolvable): any {
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


export function ospfAreasToHclTerraform(struct?: OspfAreas | cdktf.IResolvable): any {
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

export class OspfAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfAreas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfAreas | cdktf.IResolvable | undefined) {
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

export class OspfAreasList extends cdktf.ComplexList {
  public internalValue? : OspfAreas[] | cdktf.IResolvable

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
  public get(index: number): OspfAreasOutputReference {
    return new OspfAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfNeighbors {
  /**
  * OSPF cost for point-to-multipoint neighbor
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#cost Ospf#cost}
  */
  readonly cost?: number;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#ip Ospf#ip}
  */
  readonly ip: string;
  /**
  * OSPF priority of non-broadcast neighbor
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#priority Ospf#priority}
  */
  readonly priority?: number;
}

export function ospfNeighborsToTerraform(struct?: OspfNeighbors | cdktf.IResolvable): any {
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


export function ospfNeighborsToHclTerraform(struct?: OspfNeighbors | cdktf.IResolvable): any {
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

export class OspfNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfNeighbors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfNeighbors | cdktf.IResolvable | undefined) {
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

export class OspfNeighborsList extends cdktf.ComplexList {
  public internalValue? : OspfNeighbors[] | cdktf.IResolvable

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
  public get(index: number): OspfNeighborsOutputReference {
    return new OspfNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfNetworks {
  /**
  * Set the OSPF area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#area Ospf#area}
  */
  readonly area?: string;
  /**
  * Network number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#ip Ospf#ip}
  */
  readonly ip: string;
  /**
  * OSPF wild card bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#wildcard Ospf#wildcard}
  */
  readonly wildcard: string;
}

export function ospfNetworksToTerraform(struct?: OspfNetworks | cdktf.IResolvable): any {
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


export function ospfNetworksToHclTerraform(struct?: OspfNetworks | cdktf.IResolvable): any {
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

export class OspfNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfNetworks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfNetworks | cdktf.IResolvable | undefined) {
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

export class OspfNetworksList extends cdktf.ComplexList {
  public internalValue? : OspfNetworks[] | cdktf.IResolvable

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
  public get(index: number): OspfNetworksOutputReference {
    return new OspfNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableFiveGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableFiveGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableFiveGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableFiveGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableFiveGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableFiveGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableFiveGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableFiveGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableFiveGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableFortyGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableFortyGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableFortyGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableFortyGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableFortyGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableFortyGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableFortyGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableFortyGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableFortyGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableFourHundredGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableFourHundredGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableFourHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableFourHundredGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableFourHundredGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableFourHundredGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableFourHundredGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableFourHundredGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableFourHundredGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableHundredGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableHundredGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableHundredGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableHundredGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableHundredGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableHundredGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableHundredGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableHundredGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableLoopbacks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableLoopbacksToTerraform(struct?: OspfPassiveInterfaceDisableLoopbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableLoopbacksToHclTerraform(struct?: OspfPassiveInterfaceDisableLoopbacks | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableLoopbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableLoopbacks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableLoopbacks | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableLoopbacksList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableLoopbacks[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableLoopbacksOutputReference {
    return new OspfPassiveInterfaceDisableLoopbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisablePortChannelSubinterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisablePortChannelSubinterfacesToTerraform(struct?: OspfPassiveInterfaceDisablePortChannelSubinterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisablePortChannelSubinterfacesToHclTerraform(struct?: OspfPassiveInterfaceDisablePortChannelSubinterfaces | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisablePortChannelSubinterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisablePortChannelSubinterfaces | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisablePortChannelSubinterfacesList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisablePortChannelSubinterfaces[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference {
    return new OspfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisablePortChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisablePortChannelsToTerraform(struct?: OspfPassiveInterfaceDisablePortChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisablePortChannelsToHclTerraform(struct?: OspfPassiveInterfaceDisablePortChannels | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisablePortChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisablePortChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisablePortChannels | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisablePortChannelsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisablePortChannels[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisablePortChannelsOutputReference {
    return new OspfPassiveInterfaceDisablePortChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableTenGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableTenGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableTenGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableTenGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableTenGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableTenGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableTenGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableTenGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableTenGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableTenGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableTenGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableTenGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableTunnels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableTunnelsToTerraform(struct?: OspfPassiveInterfaceDisableTunnels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableTunnelsToHclTerraform(struct?: OspfPassiveInterfaceDisableTunnels | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableTunnels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableTunnels | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableTunnelsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableTunnels[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableTunnelsOutputReference {
    return new OspfPassiveInterfaceDisableTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableTwentyFiveGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableTwentyFiveGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableTwentyFiveGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableTwentyFiveGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableTwentyFiveGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableTwentyFiveGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableTwoGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableTwoGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableTwoGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableTwoGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableTwoGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableTwoGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableTwoGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableTwoGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableTwoGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableTwoHundredGigabitEthernets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableTwoHundredGigabitEthernetsToTerraform(struct?: OspfPassiveInterfaceDisableTwoHundredGigabitEthernets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableTwoHundredGigabitEthernetsToHclTerraform(struct?: OspfPassiveInterfaceDisableTwoHundredGigabitEthernets | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableTwoHundredGigabitEthernets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableTwoHundredGigabitEthernets | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableTwoHundredGigabitEthernetsList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableTwoHundredGigabitEthernets[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference {
    return new OspfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfPassiveInterfaceDisableVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#name Ospf#name}
  */
  readonly name: string;
}

export function ospfPassiveInterfaceDisableVlansToTerraform(struct?: OspfPassiveInterfaceDisableVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ospfPassiveInterfaceDisableVlansToHclTerraform(struct?: OspfPassiveInterfaceDisableVlans | cdktf.IResolvable): any {
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

export class OspfPassiveInterfaceDisableVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfPassiveInterfaceDisableVlans | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfPassiveInterfaceDisableVlans | cdktf.IResolvable | undefined) {
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

export class OspfPassiveInterfaceDisableVlansList extends cdktf.ComplexList {
  public internalValue? : OspfPassiveInterfaceDisableVlans[] | cdktf.IResolvable

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
  public get(index: number): OspfPassiveInterfaceDisableVlansOutputReference {
    return new OspfPassiveInterfaceDisableVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfSummaryAddresses {
  /**
  * IP summary address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#ip Ospf#ip}
  */
  readonly ip: string;
  /**
  * Summary mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#mask Ospf#mask}
  */
  readonly mask: string;
}

export function ospfSummaryAddressesToTerraform(struct?: OspfSummaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function ospfSummaryAddressesToHclTerraform(struct?: OspfSummaryAddresses | cdktf.IResolvable): any {
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

export class OspfSummaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfSummaryAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspfSummaryAddresses | cdktf.IResolvable | undefined) {
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

export class OspfSummaryAddressesList extends cdktf.ComplexList {
  public internalValue? : OspfSummaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): OspfSummaryAddressesOutputReference {
    return new OspfSummaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf iosxe_ospf}
*/
export class Ospf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ospf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ospf to import
  * @param importFromId The id of the existing Ospf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ospf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/ospf iosxe_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OspfConfig
  */
  public constructor(scope: Construct, id: string, config: OspfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_ospf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
    this._fastReroutePerPrefixEnablePrefixPriority = config.fastReroutePerPrefixEnablePrefixPriority;
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
    this._neighbors.internalValue = config.neighbors;
    this._networks.internalValue = config.networks;
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
    this._summaryAddresses.internalValue = config.summaryAddresses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: false, optional: true, required: false
  private _areas = new OspfAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }
  public putAreas(value: OspfAreas[] | cdktf.IResolvable) {
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

  // fast_reroute_per_prefix_enable_prefix_priority - computed: false, optional: true, required: false
  private _fastReroutePerPrefixEnablePrefixPriority?: string; 
  public get fastReroutePerPrefixEnablePrefixPriority() {
    return this.getStringAttribute('fast_reroute_per_prefix_enable_prefix_priority');
  }
  public set fastReroutePerPrefixEnablePrefixPriority(value: string) {
    this._fastReroutePerPrefixEnablePrefixPriority = value;
  }
  public resetFastReroutePerPrefixEnablePrefixPriority() {
    this._fastReroutePerPrefixEnablePrefixPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixEnablePrefixPriorityInput() {
    return this._fastReroutePerPrefixEnablePrefixPriority;
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

  // neighbors - computed: false, optional: true, required: false
  private _neighbors = new OspfNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }
  public putNeighbors(value: OspfNeighbors[] | cdktf.IResolvable) {
    this._neighbors.internalValue = value;
  }
  public resetNeighbors() {
    this._neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborsInput() {
    return this._neighbors.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new OspfNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: OspfNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
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
  private _passiveInterfaceDisableFiveGigabitEthernets = new OspfPassiveInterfaceDisableFiveGigabitEthernetsList(this, "passive_interface_disable_five_gigabit_ethernets", true);
  public get passiveInterfaceDisableFiveGigabitEthernets() {
    return this._passiveInterfaceDisableFiveGigabitEthernets;
  }
  public putPassiveInterfaceDisableFiveGigabitEthernets(value: OspfPassiveInterfaceDisableFiveGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableFortyGigabitEthernets = new OspfPassiveInterfaceDisableFortyGigabitEthernetsList(this, "passive_interface_disable_forty_gigabit_ethernets", true);
  public get passiveInterfaceDisableFortyGigabitEthernets() {
    return this._passiveInterfaceDisableFortyGigabitEthernets;
  }
  public putPassiveInterfaceDisableFortyGigabitEthernets(value: OspfPassiveInterfaceDisableFortyGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableFourHundredGigabitEthernets = new OspfPassiveInterfaceDisableFourHundredGigabitEthernetsList(this, "passive_interface_disable_four_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableFourHundredGigabitEthernets() {
    return this._passiveInterfaceDisableFourHundredGigabitEthernets;
  }
  public putPassiveInterfaceDisableFourHundredGigabitEthernets(value: OspfPassiveInterfaceDisableFourHundredGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableGigabitEthernets = new OspfPassiveInterfaceDisableGigabitEthernetsList(this, "passive_interface_disable_gigabit_ethernets", true);
  public get passiveInterfaceDisableGigabitEthernets() {
    return this._passiveInterfaceDisableGigabitEthernets;
  }
  public putPassiveInterfaceDisableGigabitEthernets(value: OspfPassiveInterfaceDisableGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableHundredGigabitEthernets = new OspfPassiveInterfaceDisableHundredGigabitEthernetsList(this, "passive_interface_disable_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableHundredGigabitEthernets() {
    return this._passiveInterfaceDisableHundredGigabitEthernets;
  }
  public putPassiveInterfaceDisableHundredGigabitEthernets(value: OspfPassiveInterfaceDisableHundredGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableLoopbacks = new OspfPassiveInterfaceDisableLoopbacksList(this, "passive_interface_disable_loopbacks", true);
  public get passiveInterfaceDisableLoopbacks() {
    return this._passiveInterfaceDisableLoopbacks;
  }
  public putPassiveInterfaceDisableLoopbacks(value: OspfPassiveInterfaceDisableLoopbacks[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisablePortChannelSubinterfaces = new OspfPassiveInterfaceDisablePortChannelSubinterfacesList(this, "passive_interface_disable_port_channel_subinterfaces", true);
  public get passiveInterfaceDisablePortChannelSubinterfaces() {
    return this._passiveInterfaceDisablePortChannelSubinterfaces;
  }
  public putPassiveInterfaceDisablePortChannelSubinterfaces(value: OspfPassiveInterfaceDisablePortChannelSubinterfaces[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisablePortChannels = new OspfPassiveInterfaceDisablePortChannelsList(this, "passive_interface_disable_port_channels", true);
  public get passiveInterfaceDisablePortChannels() {
    return this._passiveInterfaceDisablePortChannels;
  }
  public putPassiveInterfaceDisablePortChannels(value: OspfPassiveInterfaceDisablePortChannels[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableTenGigabitEthernets = new OspfPassiveInterfaceDisableTenGigabitEthernetsList(this, "passive_interface_disable_ten_gigabit_ethernets", true);
  public get passiveInterfaceDisableTenGigabitEthernets() {
    return this._passiveInterfaceDisableTenGigabitEthernets;
  }
  public putPassiveInterfaceDisableTenGigabitEthernets(value: OspfPassiveInterfaceDisableTenGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableTunnels = new OspfPassiveInterfaceDisableTunnelsList(this, "passive_interface_disable_tunnels", true);
  public get passiveInterfaceDisableTunnels() {
    return this._passiveInterfaceDisableTunnels;
  }
  public putPassiveInterfaceDisableTunnels(value: OspfPassiveInterfaceDisableTunnels[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableTwentyFiveGigabitEthernets = new OspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList(this, "passive_interface_disable_twenty_five_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwentyFiveGigabitEthernets() {
    return this._passiveInterfaceDisableTwentyFiveGigabitEthernets;
  }
  public putPassiveInterfaceDisableTwentyFiveGigabitEthernets(value: OspfPassiveInterfaceDisableTwentyFiveGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableTwoGigabitEthernets = new OspfPassiveInterfaceDisableTwoGigabitEthernetsList(this, "passive_interface_disable_two_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwoGigabitEthernets() {
    return this._passiveInterfaceDisableTwoGigabitEthernets;
  }
  public putPassiveInterfaceDisableTwoGigabitEthernets(value: OspfPassiveInterfaceDisableTwoGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableTwoHundredGigabitEthernets = new OspfPassiveInterfaceDisableTwoHundredGigabitEthernetsList(this, "passive_interface_disable_two_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwoHundredGigabitEthernets() {
    return this._passiveInterfaceDisableTwoHundredGigabitEthernets;
  }
  public putPassiveInterfaceDisableTwoHundredGigabitEthernets(value: OspfPassiveInterfaceDisableTwoHundredGigabitEthernets[] | cdktf.IResolvable) {
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
  private _passiveInterfaceDisableVlans = new OspfPassiveInterfaceDisableVlansList(this, "passive_interface_disable_vlans", true);
  public get passiveInterfaceDisableVlans() {
    return this._passiveInterfaceDisableVlans;
  }
  public putPassiveInterfaceDisableVlans(value: OspfPassiveInterfaceDisableVlans[] | cdktf.IResolvable) {
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

  // summary_addresses - computed: false, optional: true, required: false
  private _summaryAddresses = new OspfSummaryAddressesList(this, "summary_addresses", false);
  public get summaryAddresses() {
    return this._summaryAddresses;
  }
  public putSummaryAddresses(value: OspfSummaryAddresses[] | cdktf.IResolvable) {
    this._summaryAddresses.internalValue = value;
  }
  public resetSummaryAddresses() {
    this._summaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressesInput() {
    return this._summaryAddresses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      areas: cdktf.listMapper(ospfAreasToTerraform, false)(this._areas.internalValue),
      auto_cost_reference_bandwidth: cdktf.numberToTerraform(this._autoCostReferenceBandwidth),
      bfd_all_interfaces: cdktf.booleanToTerraform(this._bfdAllInterfaces),
      default_information_originate: cdktf.booleanToTerraform(this._defaultInformationOriginate),
      default_information_originate_always: cdktf.booleanToTerraform(this._defaultInformationOriginateAlways),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      distance: cdktf.numberToTerraform(this._distance),
      domain_tag: cdktf.numberToTerraform(this._domainTag),
      fast_reroute_per_prefix_enable_prefix_priority: cdktf.stringToTerraform(this._fastReroutePerPrefixEnablePrefixPriority),
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
      neighbors: cdktf.listMapper(ospfNeighborsToTerraform, false)(this._neighbors.internalValue),
      networks: cdktf.listMapper(ospfNetworksToTerraform, false)(this._networks.internalValue),
      nsf_cisco: cdktf.booleanToTerraform(this._nsfCisco),
      nsf_cisco_enforce_global: cdktf.booleanToTerraform(this._nsfCiscoEnforceGlobal),
      nsf_ietf: cdktf.booleanToTerraform(this._nsfIetf),
      nsf_ietf_restart_interval: cdktf.numberToTerraform(this._nsfIetfRestartInterval),
      passive_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passiveInterface),
      passive_interface_default: cdktf.booleanToTerraform(this._passiveInterfaceDefault),
      passive_interface_disable_five_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableFiveGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableFiveGigabitEthernets.internalValue),
      passive_interface_disable_forty_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableFortyGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableFortyGigabitEthernets.internalValue),
      passive_interface_disable_four_hundred_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableFourHundredGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableFourHundredGigabitEthernets.internalValue),
      passive_interface_disable_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableGigabitEthernets.internalValue),
      passive_interface_disable_hundred_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableHundredGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableHundredGigabitEthernets.internalValue),
      passive_interface_disable_loopbacks: cdktf.listMapper(ospfPassiveInterfaceDisableLoopbacksToTerraform, false)(this._passiveInterfaceDisableLoopbacks.internalValue),
      passive_interface_disable_port_channel_subinterfaces: cdktf.listMapper(ospfPassiveInterfaceDisablePortChannelSubinterfacesToTerraform, false)(this._passiveInterfaceDisablePortChannelSubinterfaces.internalValue),
      passive_interface_disable_port_channels: cdktf.listMapper(ospfPassiveInterfaceDisablePortChannelsToTerraform, false)(this._passiveInterfaceDisablePortChannels.internalValue),
      passive_interface_disable_ten_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableTenGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableTenGigabitEthernets.internalValue),
      passive_interface_disable_tunnels: cdktf.listMapper(ospfPassiveInterfaceDisableTunnelsToTerraform, false)(this._passiveInterfaceDisableTunnels.internalValue),
      passive_interface_disable_twenty_five_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableTwentyFiveGigabitEthernets.internalValue),
      passive_interface_disable_two_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableTwoGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableTwoGigabitEthernets.internalValue),
      passive_interface_disable_two_hundred_gigabit_ethernets: cdktf.listMapper(ospfPassiveInterfaceDisableTwoHundredGigabitEthernetsToTerraform, false)(this._passiveInterfaceDisableTwoHundredGigabitEthernets.internalValue),
      passive_interface_disable_vlans: cdktf.listMapper(ospfPassiveInterfaceDisableVlansToTerraform, false)(this._passiveInterfaceDisableVlans.internalValue),
      priority: cdktf.numberToTerraform(this._priority),
      process_id: cdktf.numberToTerraform(this._processId),
      redistribute_connected_subnets: cdktf.booleanToTerraform(this._redistributeConnectedSubnets),
      redistribute_static_subnets: cdktf.booleanToTerraform(this._redistributeStaticSubnets),
      router_id: cdktf.stringToTerraform(this._routerId),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      summary_addresses: cdktf.listMapper(ospfSummaryAddressesToTerraform, false)(this._summaryAddresses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      areas: {
        value: cdktf.listMapperHcl(ospfAreasToHclTerraform, false)(this._areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfAreasList",
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
      fast_reroute_per_prefix_enable_prefix_priority: {
        value: cdktf.stringToHclTerraform(this._fastReroutePerPrefixEnablePrefixPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      neighbors: {
        value: cdktf.listMapperHcl(ospfNeighborsToHclTerraform, false)(this._neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfNeighborsList",
      },
      networks: {
        value: cdktf.listMapperHcl(ospfNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfNetworksList",
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
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableFiveGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableFiveGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableFiveGigabitEthernetsList",
      },
      passive_interface_disable_forty_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableFortyGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableFortyGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableFortyGigabitEthernetsList",
      },
      passive_interface_disable_four_hundred_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableFourHundredGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableFourHundredGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableFourHundredGigabitEthernetsList",
      },
      passive_interface_disable_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableGigabitEthernetsList",
      },
      passive_interface_disable_hundred_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableHundredGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableHundredGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableHundredGigabitEthernetsList",
      },
      passive_interface_disable_loopbacks: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableLoopbacksToHclTerraform, false)(this._passiveInterfaceDisableLoopbacks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableLoopbacksList",
      },
      passive_interface_disable_port_channel_subinterfaces: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisablePortChannelSubinterfacesToHclTerraform, false)(this._passiveInterfaceDisablePortChannelSubinterfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisablePortChannelSubinterfacesList",
      },
      passive_interface_disable_port_channels: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisablePortChannelsToHclTerraform, false)(this._passiveInterfaceDisablePortChannels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisablePortChannelsList",
      },
      passive_interface_disable_ten_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableTenGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableTenGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableTenGigabitEthernetsList",
      },
      passive_interface_disable_tunnels: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableTunnelsToHclTerraform, false)(this._passiveInterfaceDisableTunnels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableTunnelsList",
      },
      passive_interface_disable_twenty_five_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableTwentyFiveGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList",
      },
      passive_interface_disable_two_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableTwoGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableTwoGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableTwoGigabitEthernetsList",
      },
      passive_interface_disable_two_hundred_gigabit_ethernets: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableTwoHundredGigabitEthernetsToHclTerraform, false)(this._passiveInterfaceDisableTwoHundredGigabitEthernets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableTwoHundredGigabitEthernetsList",
      },
      passive_interface_disable_vlans: {
        value: cdktf.listMapperHcl(ospfPassiveInterfaceDisableVlansToHclTerraform, false)(this._passiveInterfaceDisableVlans.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfPassiveInterfaceDisableVlansList",
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
      summary_addresses: {
        value: cdktf.listMapperHcl(ospfSummaryAddressesToHclTerraform, false)(this._summaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfSummaryAddressesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
