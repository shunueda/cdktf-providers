// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterbgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#activate RouterbgpNeighbor#activate}
  */
  readonly activate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#activate6 RouterbgpNeighbor#activate6}
  */
  readonly activate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#activate_evpn RouterbgpNeighbor#activate_evpn}
  */
  readonly activateEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#activate_vpnv4 RouterbgpNeighbor#activate_vpnv4}
  */
  readonly activateVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#activate_vpnv6 RouterbgpNeighbor#activate_vpnv6}
  */
  readonly activateVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#additional_path RouterbgpNeighbor#additional_path}
  */
  readonly additionalPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#additional_path6 RouterbgpNeighbor#additional_path6}
  */
  readonly additionalPath6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#additional_path_vpnv4 RouterbgpNeighbor#additional_path_vpnv4}
  */
  readonly additionalPathVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#additional_path_vpnv6 RouterbgpNeighbor#additional_path_vpnv6}
  */
  readonly additionalPathVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#adv_additional_path RouterbgpNeighbor#adv_additional_path}
  */
  readonly advAdditionalPath?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#adv_additional_path6 RouterbgpNeighbor#adv_additional_path6}
  */
  readonly advAdditionalPath6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#adv_additional_path_vpnv4 RouterbgpNeighbor#adv_additional_path_vpnv4}
  */
  readonly advAdditionalPathVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#adv_additional_path_vpnv6 RouterbgpNeighbor#adv_additional_path_vpnv6}
  */
  readonly advAdditionalPathVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#advertisement_interval RouterbgpNeighbor#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in RouterbgpNeighbor#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in6 RouterbgpNeighbor#allowas_in6}
  */
  readonly allowasIn6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in_enable RouterbgpNeighbor#allowas_in_enable}
  */
  readonly allowasInEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in_enable6 RouterbgpNeighbor#allowas_in_enable6}
  */
  readonly allowasInEnable6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in_enable_evpn RouterbgpNeighbor#allowas_in_enable_evpn}
  */
  readonly allowasInEnableEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in_enable_vpnv4 RouterbgpNeighbor#allowas_in_enable_vpnv4}
  */
  readonly allowasInEnableVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in_enable_vpnv6 RouterbgpNeighbor#allowas_in_enable_vpnv6}
  */
  readonly allowasInEnableVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in_evpn RouterbgpNeighbor#allowas_in_evpn}
  */
  readonly allowasInEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in_vpnv4 RouterbgpNeighbor#allowas_in_vpnv4}
  */
  readonly allowasInVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#allowas_in_vpnv6 RouterbgpNeighbor#allowas_in_vpnv6}
  */
  readonly allowasInVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#as_override RouterbgpNeighbor#as_override}
  */
  readonly asOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#as_override6 RouterbgpNeighbor#as_override6}
  */
  readonly asOverride6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#attribute_unchanged RouterbgpNeighbor#attribute_unchanged}
  */
  readonly attributeUnchanged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#attribute_unchanged6 RouterbgpNeighbor#attribute_unchanged6}
  */
  readonly attributeUnchanged6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#attribute_unchanged_vpnv4 RouterbgpNeighbor#attribute_unchanged_vpnv4}
  */
  readonly attributeUnchangedVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#attribute_unchanged_vpnv6 RouterbgpNeighbor#attribute_unchanged_vpnv6}
  */
  readonly attributeUnchangedVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#auth_options RouterbgpNeighbor#auth_options}
  */
  readonly authOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#bfd RouterbgpNeighbor#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_default_originate RouterbgpNeighbor#capability_default_originate}
  */
  readonly capabilityDefaultOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_default_originate6 RouterbgpNeighbor#capability_default_originate6}
  */
  readonly capabilityDefaultOriginate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_dynamic RouterbgpNeighbor#capability_dynamic}
  */
  readonly capabilityDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_graceful_restart RouterbgpNeighbor#capability_graceful_restart}
  */
  readonly capabilityGracefulRestart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_graceful_restart6 RouterbgpNeighbor#capability_graceful_restart6}
  */
  readonly capabilityGracefulRestart6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_graceful_restart_evpn RouterbgpNeighbor#capability_graceful_restart_evpn}
  */
  readonly capabilityGracefulRestartEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_graceful_restart_vpnv4 RouterbgpNeighbor#capability_graceful_restart_vpnv4}
  */
  readonly capabilityGracefulRestartVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_graceful_restart_vpnv6 RouterbgpNeighbor#capability_graceful_restart_vpnv6}
  */
  readonly capabilityGracefulRestartVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_orf RouterbgpNeighbor#capability_orf}
  */
  readonly capabilityOrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_orf6 RouterbgpNeighbor#capability_orf6}
  */
  readonly capabilityOrf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#capability_route_refresh RouterbgpNeighbor#capability_route_refresh}
  */
  readonly capabilityRouteRefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#connect_timer RouterbgpNeighbor#connect_timer}
  */
  readonly connectTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#default_originate_routemap RouterbgpNeighbor#default_originate_routemap}
  */
  readonly defaultOriginateRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#default_originate_routemap6 RouterbgpNeighbor#default_originate_routemap6}
  */
  readonly defaultOriginateRoutemap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#description RouterbgpNeighbor#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#distribute_list_in RouterbgpNeighbor#distribute_list_in}
  */
  readonly distributeListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#distribute_list_in6 RouterbgpNeighbor#distribute_list_in6}
  */
  readonly distributeListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#distribute_list_in_vpnv4 RouterbgpNeighbor#distribute_list_in_vpnv4}
  */
  readonly distributeListInVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#distribute_list_in_vpnv6 RouterbgpNeighbor#distribute_list_in_vpnv6}
  */
  readonly distributeListInVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#distribute_list_out RouterbgpNeighbor#distribute_list_out}
  */
  readonly distributeListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#distribute_list_out6 RouterbgpNeighbor#distribute_list_out6}
  */
  readonly distributeListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#distribute_list_out_vpnv4 RouterbgpNeighbor#distribute_list_out_vpnv4}
  */
  readonly distributeListOutVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#distribute_list_out_vpnv6 RouterbgpNeighbor#distribute_list_out_vpnv6}
  */
  readonly distributeListOutVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#dont_capability_negotiate RouterbgpNeighbor#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#dynamic_sort_subtable RouterbgpNeighbor#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#ebgp_enforce_multihop RouterbgpNeighbor#ebgp_enforce_multihop}
  */
  readonly ebgpEnforceMultihop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#ebgp_multihop_ttl RouterbgpNeighbor#ebgp_multihop_ttl}
  */
  readonly ebgpMultihopTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#filter_list_in RouterbgpNeighbor#filter_list_in}
  */
  readonly filterListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#filter_list_in6 RouterbgpNeighbor#filter_list_in6}
  */
  readonly filterListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#filter_list_in_vpnv4 RouterbgpNeighbor#filter_list_in_vpnv4}
  */
  readonly filterListInVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#filter_list_in_vpnv6 RouterbgpNeighbor#filter_list_in_vpnv6}
  */
  readonly filterListInVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#filter_list_out RouterbgpNeighbor#filter_list_out}
  */
  readonly filterListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#filter_list_out6 RouterbgpNeighbor#filter_list_out6}
  */
  readonly filterListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#filter_list_out_vpnv4 RouterbgpNeighbor#filter_list_out_vpnv4}
  */
  readonly filterListOutVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#filter_list_out_vpnv6 RouterbgpNeighbor#filter_list_out_vpnv6}
  */
  readonly filterListOutVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#get_all_tables RouterbgpNeighbor#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#holdtime_timer RouterbgpNeighbor#holdtime_timer}
  */
  readonly holdtimeTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#id RouterbgpNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#interface RouterbgpNeighbor#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#ip RouterbgpNeighbor#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#keep_alive_timer RouterbgpNeighbor#keep_alive_timer}
  */
  readonly keepAliveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#link_down_failover RouterbgpNeighbor#link_down_failover}
  */
  readonly linkDownFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#local_as RouterbgpNeighbor#local_as}
  */
  readonly localAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#local_as_no_prepend RouterbgpNeighbor#local_as_no_prepend}
  */
  readonly localAsNoPrepend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#local_as_replace_as RouterbgpNeighbor#local_as_replace_as}
  */
  readonly localAsReplaceAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix RouterbgpNeighbor#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix6 RouterbgpNeighbor#maximum_prefix6}
  */
  readonly maximumPrefix6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_evpn RouterbgpNeighbor#maximum_prefix_evpn}
  */
  readonly maximumPrefixEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_threshold RouterbgpNeighbor#maximum_prefix_threshold}
  */
  readonly maximumPrefixThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_threshold6 RouterbgpNeighbor#maximum_prefix_threshold6}
  */
  readonly maximumPrefixThreshold6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_threshold_evpn RouterbgpNeighbor#maximum_prefix_threshold_evpn}
  */
  readonly maximumPrefixThresholdEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_threshold_vpnv4 RouterbgpNeighbor#maximum_prefix_threshold_vpnv4}
  */
  readonly maximumPrefixThresholdVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_threshold_vpnv6 RouterbgpNeighbor#maximum_prefix_threshold_vpnv6}
  */
  readonly maximumPrefixThresholdVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_vpnv4 RouterbgpNeighbor#maximum_prefix_vpnv4}
  */
  readonly maximumPrefixVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_vpnv6 RouterbgpNeighbor#maximum_prefix_vpnv6}
  */
  readonly maximumPrefixVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_warning_only RouterbgpNeighbor#maximum_prefix_warning_only}
  */
  readonly maximumPrefixWarningOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_warning_only6 RouterbgpNeighbor#maximum_prefix_warning_only6}
  */
  readonly maximumPrefixWarningOnly6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_warning_only_evpn RouterbgpNeighbor#maximum_prefix_warning_only_evpn}
  */
  readonly maximumPrefixWarningOnlyEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_warning_only_vpnv4 RouterbgpNeighbor#maximum_prefix_warning_only_vpnv4}
  */
  readonly maximumPrefixWarningOnlyVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#maximum_prefix_warning_only_vpnv6 RouterbgpNeighbor#maximum_prefix_warning_only_vpnv6}
  */
  readonly maximumPrefixWarningOnlyVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#next_hop_self RouterbgpNeighbor#next_hop_self}
  */
  readonly nextHopSelf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#next_hop_self6 RouterbgpNeighbor#next_hop_self6}
  */
  readonly nextHopSelf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#next_hop_self_rr RouterbgpNeighbor#next_hop_self_rr}
  */
  readonly nextHopSelfRr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#next_hop_self_rr6 RouterbgpNeighbor#next_hop_self_rr6}
  */
  readonly nextHopSelfRr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#next_hop_self_vpnv4 RouterbgpNeighbor#next_hop_self_vpnv4}
  */
  readonly nextHopSelfVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#next_hop_self_vpnv6 RouterbgpNeighbor#next_hop_self_vpnv6}
  */
  readonly nextHopSelfVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#override_capability RouterbgpNeighbor#override_capability}
  */
  readonly overrideCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#passive RouterbgpNeighbor#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#password RouterbgpNeighbor#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#prefix_list_in RouterbgpNeighbor#prefix_list_in}
  */
  readonly prefixListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#prefix_list_in6 RouterbgpNeighbor#prefix_list_in6}
  */
  readonly prefixListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#prefix_list_in_vpnv4 RouterbgpNeighbor#prefix_list_in_vpnv4}
  */
  readonly prefixListInVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#prefix_list_in_vpnv6 RouterbgpNeighbor#prefix_list_in_vpnv6}
  */
  readonly prefixListInVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#prefix_list_out RouterbgpNeighbor#prefix_list_out}
  */
  readonly prefixListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#prefix_list_out6 RouterbgpNeighbor#prefix_list_out6}
  */
  readonly prefixListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#prefix_list_out_vpnv4 RouterbgpNeighbor#prefix_list_out_vpnv4}
  */
  readonly prefixListOutVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#prefix_list_out_vpnv6 RouterbgpNeighbor#prefix_list_out_vpnv6}
  */
  readonly prefixListOutVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#remote_as RouterbgpNeighbor#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#remove_private_as RouterbgpNeighbor#remove_private_as}
  */
  readonly removePrivateAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#remove_private_as6 RouterbgpNeighbor#remove_private_as6}
  */
  readonly removePrivateAs6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#remove_private_as_evpn RouterbgpNeighbor#remove_private_as_evpn}
  */
  readonly removePrivateAsEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#remove_private_as_vpnv4 RouterbgpNeighbor#remove_private_as_vpnv4}
  */
  readonly removePrivateAsVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#remove_private_as_vpnv6 RouterbgpNeighbor#remove_private_as_vpnv6}
  */
  readonly removePrivateAsVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#restart_time RouterbgpNeighbor#restart_time}
  */
  readonly restartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#retain_stale_time RouterbgpNeighbor#retain_stale_time}
  */
  readonly retainStaleTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_in RouterbgpNeighbor#route_map_in}
  */
  readonly routeMapIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_in6 RouterbgpNeighbor#route_map_in6}
  */
  readonly routeMapIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_in_evpn RouterbgpNeighbor#route_map_in_evpn}
  */
  readonly routeMapInEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_in_vpnv4 RouterbgpNeighbor#route_map_in_vpnv4}
  */
  readonly routeMapInVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_in_vpnv6 RouterbgpNeighbor#route_map_in_vpnv6}
  */
  readonly routeMapInVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out RouterbgpNeighbor#route_map_out}
  */
  readonly routeMapOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out6 RouterbgpNeighbor#route_map_out6}
  */
  readonly routeMapOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out6_preferable RouterbgpNeighbor#route_map_out6_preferable}
  */
  readonly routeMapOut6Preferable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out_evpn RouterbgpNeighbor#route_map_out_evpn}
  */
  readonly routeMapOutEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out_preferable RouterbgpNeighbor#route_map_out_preferable}
  */
  readonly routeMapOutPreferable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out_vpnv4 RouterbgpNeighbor#route_map_out_vpnv4}
  */
  readonly routeMapOutVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out_vpnv4_preferable RouterbgpNeighbor#route_map_out_vpnv4_preferable}
  */
  readonly routeMapOutVpnv4Preferable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out_vpnv6 RouterbgpNeighbor#route_map_out_vpnv6}
  */
  readonly routeMapOutVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_map_out_vpnv6_preferable RouterbgpNeighbor#route_map_out_vpnv6_preferable}
  */
  readonly routeMapOutVpnv6Preferable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_reflector_client RouterbgpNeighbor#route_reflector_client}
  */
  readonly routeReflectorClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_reflector_client6 RouterbgpNeighbor#route_reflector_client6}
  */
  readonly routeReflectorClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_reflector_client_evpn RouterbgpNeighbor#route_reflector_client_evpn}
  */
  readonly routeReflectorClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_reflector_client_vpnv4 RouterbgpNeighbor#route_reflector_client_vpnv4}
  */
  readonly routeReflectorClientVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_reflector_client_vpnv6 RouterbgpNeighbor#route_reflector_client_vpnv6}
  */
  readonly routeReflectorClientVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_server_client RouterbgpNeighbor#route_server_client}
  */
  readonly routeServerClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_server_client6 RouterbgpNeighbor#route_server_client6}
  */
  readonly routeServerClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_server_client_evpn RouterbgpNeighbor#route_server_client_evpn}
  */
  readonly routeServerClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_server_client_vpnv4 RouterbgpNeighbor#route_server_client_vpnv4}
  */
  readonly routeServerClientVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#route_server_client_vpnv6 RouterbgpNeighbor#route_server_client_vpnv6}
  */
  readonly routeServerClientVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#rr_attr_allow_change RouterbgpNeighbor#rr_attr_allow_change}
  */
  readonly rrAttrAllowChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#rr_attr_allow_change6 RouterbgpNeighbor#rr_attr_allow_change6}
  */
  readonly rrAttrAllowChange6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#rr_attr_allow_change_evpn RouterbgpNeighbor#rr_attr_allow_change_evpn}
  */
  readonly rrAttrAllowChangeEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#rr_attr_allow_change_vpnv4 RouterbgpNeighbor#rr_attr_allow_change_vpnv4}
  */
  readonly rrAttrAllowChangeVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#rr_attr_allow_change_vpnv6 RouterbgpNeighbor#rr_attr_allow_change_vpnv6}
  */
  readonly rrAttrAllowChangeVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#send_community RouterbgpNeighbor#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#send_community6 RouterbgpNeighbor#send_community6}
  */
  readonly sendCommunity6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#send_community_evpn RouterbgpNeighbor#send_community_evpn}
  */
  readonly sendCommunityEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#send_community_vpnv4 RouterbgpNeighbor#send_community_vpnv4}
  */
  readonly sendCommunityVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#send_community_vpnv6 RouterbgpNeighbor#send_community_vpnv6}
  */
  readonly sendCommunityVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#shutdown RouterbgpNeighbor#shutdown}
  */
  readonly shutdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#soft_reconfiguration RouterbgpNeighbor#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#soft_reconfiguration6 RouterbgpNeighbor#soft_reconfiguration6}
  */
  readonly softReconfiguration6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#soft_reconfiguration_evpn RouterbgpNeighbor#soft_reconfiguration_evpn}
  */
  readonly softReconfigurationEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#soft_reconfiguration_vpnv4 RouterbgpNeighbor#soft_reconfiguration_vpnv4}
  */
  readonly softReconfigurationVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#soft_reconfiguration_vpnv6 RouterbgpNeighbor#soft_reconfiguration_vpnv6}
  */
  readonly softReconfigurationVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#stale_route RouterbgpNeighbor#stale_route}
  */
  readonly staleRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#strict_capability_match RouterbgpNeighbor#strict_capability_match}
  */
  readonly strictCapabilityMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#unsuppress_map RouterbgpNeighbor#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#unsuppress_map6 RouterbgpNeighbor#unsuppress_map6}
  */
  readonly unsuppressMap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#update_source RouterbgpNeighbor#update_source}
  */
  readonly updateSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#vdomparam RouterbgpNeighbor#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#weight RouterbgpNeighbor#weight}
  */
  readonly weight?: number;
  /**
  * conditional_advertise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#conditional_advertise RouterbgpNeighbor#conditional_advertise}
  */
  readonly conditionalAdvertise?: RouterbgpNeighborConditionalAdvertise[] | cdktf.IResolvable;
  /**
  * conditional_advertise6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#conditional_advertise6 RouterbgpNeighbor#conditional_advertise6}
  */
  readonly conditionalAdvertise6?: RouterbgpNeighborConditionalAdvertise6[] | cdktf.IResolvable;
}
export interface RouterbgpNeighborConditionalAdvertise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#advertise_routemap RouterbgpNeighbor#advertise_routemap}
  */
  readonly advertiseRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#condition_routemap RouterbgpNeighbor#condition_routemap}
  */
  readonly conditionRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#condition_type RouterbgpNeighbor#condition_type}
  */
  readonly conditionType?: string;
}

export function routerbgpNeighborConditionalAdvertiseToTerraform(struct?: RouterbgpNeighborConditionalAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_routemap: cdktf.stringToTerraform(struct!.advertiseRoutemap),
    condition_routemap: cdktf.stringToTerraform(struct!.conditionRoutemap),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function routerbgpNeighborConditionalAdvertiseToHclTerraform(struct?: RouterbgpNeighborConditionalAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_routemap: {
      value: cdktf.stringToHclTerraform(struct!.advertiseRoutemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_routemap: {
      value: cdktf.stringToHclTerraform(struct!.conditionRoutemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterbgpNeighborConditionalAdvertiseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterbgpNeighborConditionalAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseRoutemap = this._advertiseRoutemap;
    }
    if (this._conditionRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionRoutemap = this._conditionRoutemap;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterbgpNeighborConditionalAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseRoutemap = undefined;
      this._conditionRoutemap = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseRoutemap = value.advertiseRoutemap;
      this._conditionRoutemap = value.conditionRoutemap;
      this._conditionType = value.conditionType;
    }
  }

  // advertise_routemap - computed: false, optional: true, required: false
  private _advertiseRoutemap?: string; 
  public get advertiseRoutemap() {
    return this.getStringAttribute('advertise_routemap');
  }
  public set advertiseRoutemap(value: string) {
    this._advertiseRoutemap = value;
  }
  public resetAdvertiseRoutemap() {
    this._advertiseRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseRoutemapInput() {
    return this._advertiseRoutemap;
  }

  // condition_routemap - computed: false, optional: true, required: false
  private _conditionRoutemap?: string; 
  public get conditionRoutemap() {
    return this.getStringAttribute('condition_routemap');
  }
  public set conditionRoutemap(value: string) {
    this._conditionRoutemap = value;
  }
  public resetConditionRoutemap() {
    this._conditionRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionRoutemapInput() {
    return this._conditionRoutemap;
  }

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class RouterbgpNeighborConditionalAdvertiseList extends cdktf.ComplexList {
  public internalValue? : RouterbgpNeighborConditionalAdvertise[] | cdktf.IResolvable

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
  public get(index: number): RouterbgpNeighborConditionalAdvertiseOutputReference {
    return new RouterbgpNeighborConditionalAdvertiseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterbgpNeighborConditionalAdvertise6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#advertise_routemap RouterbgpNeighbor#advertise_routemap}
  */
  readonly advertiseRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#condition_routemap RouterbgpNeighbor#condition_routemap}
  */
  readonly conditionRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#condition_type RouterbgpNeighbor#condition_type}
  */
  readonly conditionType?: string;
}

export function routerbgpNeighborConditionalAdvertise6ToTerraform(struct?: RouterbgpNeighborConditionalAdvertise6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_routemap: cdktf.stringToTerraform(struct!.advertiseRoutemap),
    condition_routemap: cdktf.stringToTerraform(struct!.conditionRoutemap),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function routerbgpNeighborConditionalAdvertise6ToHclTerraform(struct?: RouterbgpNeighborConditionalAdvertise6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_routemap: {
      value: cdktf.stringToHclTerraform(struct!.advertiseRoutemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_routemap: {
      value: cdktf.stringToHclTerraform(struct!.conditionRoutemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterbgpNeighborConditionalAdvertise6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterbgpNeighborConditionalAdvertise6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseRoutemap = this._advertiseRoutemap;
    }
    if (this._conditionRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionRoutemap = this._conditionRoutemap;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterbgpNeighborConditionalAdvertise6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseRoutemap = undefined;
      this._conditionRoutemap = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseRoutemap = value.advertiseRoutemap;
      this._conditionRoutemap = value.conditionRoutemap;
      this._conditionType = value.conditionType;
    }
  }

  // advertise_routemap - computed: false, optional: true, required: false
  private _advertiseRoutemap?: string; 
  public get advertiseRoutemap() {
    return this.getStringAttribute('advertise_routemap');
  }
  public set advertiseRoutemap(value: string) {
    this._advertiseRoutemap = value;
  }
  public resetAdvertiseRoutemap() {
    this._advertiseRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseRoutemapInput() {
    return this._advertiseRoutemap;
  }

  // condition_routemap - computed: false, optional: true, required: false
  private _conditionRoutemap?: string; 
  public get conditionRoutemap() {
    return this.getStringAttribute('condition_routemap');
  }
  public set conditionRoutemap(value: string) {
    this._conditionRoutemap = value;
  }
  public resetConditionRoutemap() {
    this._conditionRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionRoutemapInput() {
    return this._conditionRoutemap;
  }

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class RouterbgpNeighborConditionalAdvertise6List extends cdktf.ComplexList {
  public internalValue? : RouterbgpNeighborConditionalAdvertise6[] | cdktf.IResolvable

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
  public get(index: number): RouterbgpNeighborConditionalAdvertise6OutputReference {
    return new RouterbgpNeighborConditionalAdvertise6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor fortios_routerbgp_neighbor}
*/
export class RouterbgpNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_routerbgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterbgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterbgpNeighbor to import
  * @param importFromId The id of the existing RouterbgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterbgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_routerbgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_neighbor fortios_routerbgp_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterbgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RouterbgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_routerbgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activate = config.activate;
    this._activate6 = config.activate6;
    this._activateEvpn = config.activateEvpn;
    this._activateVpnv4 = config.activateVpnv4;
    this._activateVpnv6 = config.activateVpnv6;
    this._additionalPath = config.additionalPath;
    this._additionalPath6 = config.additionalPath6;
    this._additionalPathVpnv4 = config.additionalPathVpnv4;
    this._additionalPathVpnv6 = config.additionalPathVpnv6;
    this._advAdditionalPath = config.advAdditionalPath;
    this._advAdditionalPath6 = config.advAdditionalPath6;
    this._advAdditionalPathVpnv4 = config.advAdditionalPathVpnv4;
    this._advAdditionalPathVpnv6 = config.advAdditionalPathVpnv6;
    this._advertisementInterval = config.advertisementInterval;
    this._allowasIn = config.allowasIn;
    this._allowasIn6 = config.allowasIn6;
    this._allowasInEnable = config.allowasInEnable;
    this._allowasInEnable6 = config.allowasInEnable6;
    this._allowasInEnableEvpn = config.allowasInEnableEvpn;
    this._allowasInEnableVpnv4 = config.allowasInEnableVpnv4;
    this._allowasInEnableVpnv6 = config.allowasInEnableVpnv6;
    this._allowasInEvpn = config.allowasInEvpn;
    this._allowasInVpnv4 = config.allowasInVpnv4;
    this._allowasInVpnv6 = config.allowasInVpnv6;
    this._asOverride = config.asOverride;
    this._asOverride6 = config.asOverride6;
    this._attributeUnchanged = config.attributeUnchanged;
    this._attributeUnchanged6 = config.attributeUnchanged6;
    this._attributeUnchangedVpnv4 = config.attributeUnchangedVpnv4;
    this._attributeUnchangedVpnv6 = config.attributeUnchangedVpnv6;
    this._authOptions = config.authOptions;
    this._bfd = config.bfd;
    this._capabilityDefaultOriginate = config.capabilityDefaultOriginate;
    this._capabilityDefaultOriginate6 = config.capabilityDefaultOriginate6;
    this._capabilityDynamic = config.capabilityDynamic;
    this._capabilityGracefulRestart = config.capabilityGracefulRestart;
    this._capabilityGracefulRestart6 = config.capabilityGracefulRestart6;
    this._capabilityGracefulRestartEvpn = config.capabilityGracefulRestartEvpn;
    this._capabilityGracefulRestartVpnv4 = config.capabilityGracefulRestartVpnv4;
    this._capabilityGracefulRestartVpnv6 = config.capabilityGracefulRestartVpnv6;
    this._capabilityOrf = config.capabilityOrf;
    this._capabilityOrf6 = config.capabilityOrf6;
    this._capabilityRouteRefresh = config.capabilityRouteRefresh;
    this._connectTimer = config.connectTimer;
    this._defaultOriginateRoutemap = config.defaultOriginateRoutemap;
    this._defaultOriginateRoutemap6 = config.defaultOriginateRoutemap6;
    this._description = config.description;
    this._distributeListIn = config.distributeListIn;
    this._distributeListIn6 = config.distributeListIn6;
    this._distributeListInVpnv4 = config.distributeListInVpnv4;
    this._distributeListInVpnv6 = config.distributeListInVpnv6;
    this._distributeListOut = config.distributeListOut;
    this._distributeListOut6 = config.distributeListOut6;
    this._distributeListOutVpnv4 = config.distributeListOutVpnv4;
    this._distributeListOutVpnv6 = config.distributeListOutVpnv6;
    this._dontCapabilityNegotiate = config.dontCapabilityNegotiate;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._ebgpEnforceMultihop = config.ebgpEnforceMultihop;
    this._ebgpMultihopTtl = config.ebgpMultihopTtl;
    this._filterListIn = config.filterListIn;
    this._filterListIn6 = config.filterListIn6;
    this._filterListInVpnv4 = config.filterListInVpnv4;
    this._filterListInVpnv6 = config.filterListInVpnv6;
    this._filterListOut = config.filterListOut;
    this._filterListOut6 = config.filterListOut6;
    this._filterListOutVpnv4 = config.filterListOutVpnv4;
    this._filterListOutVpnv6 = config.filterListOutVpnv6;
    this._getAllTables = config.fetchAllTables;
    this._holdtimeTimer = config.holdtimeTimer;
    this._id = config.id;
    this._interface = config.interface;
    this._ip = config.ip;
    this._keepAliveTimer = config.keepAliveTimer;
    this._linkDownFailover = config.linkDownFailover;
    this._localAs = config.localAs;
    this._localAsNoPrepend = config.localAsNoPrepend;
    this._localAsReplaceAs = config.localAsReplaceAs;
    this._maximumPrefix = config.maximumPrefix;
    this._maximumPrefix6 = config.maximumPrefix6;
    this._maximumPrefixEvpn = config.maximumPrefixEvpn;
    this._maximumPrefixThreshold = config.maximumPrefixThreshold;
    this._maximumPrefixThreshold6 = config.maximumPrefixThreshold6;
    this._maximumPrefixThresholdEvpn = config.maximumPrefixThresholdEvpn;
    this._maximumPrefixThresholdVpnv4 = config.maximumPrefixThresholdVpnv4;
    this._maximumPrefixThresholdVpnv6 = config.maximumPrefixThresholdVpnv6;
    this._maximumPrefixVpnv4 = config.maximumPrefixVpnv4;
    this._maximumPrefixVpnv6 = config.maximumPrefixVpnv6;
    this._maximumPrefixWarningOnly = config.maximumPrefixWarningOnly;
    this._maximumPrefixWarningOnly6 = config.maximumPrefixWarningOnly6;
    this._maximumPrefixWarningOnlyEvpn = config.maximumPrefixWarningOnlyEvpn;
    this._maximumPrefixWarningOnlyVpnv4 = config.maximumPrefixWarningOnlyVpnv4;
    this._maximumPrefixWarningOnlyVpnv6 = config.maximumPrefixWarningOnlyVpnv6;
    this._nextHopSelf = config.nextHopSelf;
    this._nextHopSelf6 = config.nextHopSelf6;
    this._nextHopSelfRr = config.nextHopSelfRr;
    this._nextHopSelfRr6 = config.nextHopSelfRr6;
    this._nextHopSelfVpnv4 = config.nextHopSelfVpnv4;
    this._nextHopSelfVpnv6 = config.nextHopSelfVpnv6;
    this._overrideCapability = config.overrideCapability;
    this._passive = config.passive;
    this._password = config.password;
    this._prefixListIn = config.prefixListIn;
    this._prefixListIn6 = config.prefixListIn6;
    this._prefixListInVpnv4 = config.prefixListInVpnv4;
    this._prefixListInVpnv6 = config.prefixListInVpnv6;
    this._prefixListOut = config.prefixListOut;
    this._prefixListOut6 = config.prefixListOut6;
    this._prefixListOutVpnv4 = config.prefixListOutVpnv4;
    this._prefixListOutVpnv6 = config.prefixListOutVpnv6;
    this._remoteAs = config.remoteAs;
    this._removePrivateAs = config.removePrivateAs;
    this._removePrivateAs6 = config.removePrivateAs6;
    this._removePrivateAsEvpn = config.removePrivateAsEvpn;
    this._removePrivateAsVpnv4 = config.removePrivateAsVpnv4;
    this._removePrivateAsVpnv6 = config.removePrivateAsVpnv6;
    this._restartTime = config.restartTime;
    this._retainStaleTime = config.retainStaleTime;
    this._routeMapIn = config.routeMapIn;
    this._routeMapIn6 = config.routeMapIn6;
    this._routeMapInEvpn = config.routeMapInEvpn;
    this._routeMapInVpnv4 = config.routeMapInVpnv4;
    this._routeMapInVpnv6 = config.routeMapInVpnv6;
    this._routeMapOut = config.routeMapOut;
    this._routeMapOut6 = config.routeMapOut6;
    this._routeMapOut6Preferable = config.routeMapOut6Preferable;
    this._routeMapOutEvpn = config.routeMapOutEvpn;
    this._routeMapOutPreferable = config.routeMapOutPreferable;
    this._routeMapOutVpnv4 = config.routeMapOutVpnv4;
    this._routeMapOutVpnv4Preferable = config.routeMapOutVpnv4Preferable;
    this._routeMapOutVpnv6 = config.routeMapOutVpnv6;
    this._routeMapOutVpnv6Preferable = config.routeMapOutVpnv6Preferable;
    this._routeReflectorClient = config.routeReflectorClient;
    this._routeReflectorClient6 = config.routeReflectorClient6;
    this._routeReflectorClientEvpn = config.routeReflectorClientEvpn;
    this._routeReflectorClientVpnv4 = config.routeReflectorClientVpnv4;
    this._routeReflectorClientVpnv6 = config.routeReflectorClientVpnv6;
    this._routeServerClient = config.routeServerClient;
    this._routeServerClient6 = config.routeServerClient6;
    this._routeServerClientEvpn = config.routeServerClientEvpn;
    this._routeServerClientVpnv4 = config.routeServerClientVpnv4;
    this._routeServerClientVpnv6 = config.routeServerClientVpnv6;
    this._rrAttrAllowChange = config.rrAttrAllowChange;
    this._rrAttrAllowChange6 = config.rrAttrAllowChange6;
    this._rrAttrAllowChangeEvpn = config.rrAttrAllowChangeEvpn;
    this._rrAttrAllowChangeVpnv4 = config.rrAttrAllowChangeVpnv4;
    this._rrAttrAllowChangeVpnv6 = config.rrAttrAllowChangeVpnv6;
    this._sendCommunity = config.sendCommunity;
    this._sendCommunity6 = config.sendCommunity6;
    this._sendCommunityEvpn = config.sendCommunityEvpn;
    this._sendCommunityVpnv4 = config.sendCommunityVpnv4;
    this._sendCommunityVpnv6 = config.sendCommunityVpnv6;
    this._shutdown = config.shutdown;
    this._softReconfiguration = config.softReconfiguration;
    this._softReconfiguration6 = config.softReconfiguration6;
    this._softReconfigurationEvpn = config.softReconfigurationEvpn;
    this._softReconfigurationVpnv4 = config.softReconfigurationVpnv4;
    this._softReconfigurationVpnv6 = config.softReconfigurationVpnv6;
    this._staleRoute = config.staleRoute;
    this._strictCapabilityMatch = config.strictCapabilityMatch;
    this._unsuppressMap = config.unsuppressMap;
    this._unsuppressMap6 = config.unsuppressMap6;
    this._updateSource = config.updateSource;
    this._vdomparam = config.vdomparam;
    this._weight = config.weight;
    this._conditionalAdvertise.internalValue = config.conditionalAdvertise;
    this._conditionalAdvertise6.internalValue = config.conditionalAdvertise6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: true, required: false
  private _activate?: string; 
  public get activate() {
    return this.getStringAttribute('activate');
  }
  public set activate(value: string) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // activate6 - computed: true, optional: true, required: false
  private _activate6?: string; 
  public get activate6() {
    return this.getStringAttribute('activate6');
  }
  public set activate6(value: string) {
    this._activate6 = value;
  }
  public resetActivate6() {
    this._activate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activate6Input() {
    return this._activate6;
  }

  // activate_evpn - computed: true, optional: true, required: false
  private _activateEvpn?: string; 
  public get activateEvpn() {
    return this.getStringAttribute('activate_evpn');
  }
  public set activateEvpn(value: string) {
    this._activateEvpn = value;
  }
  public resetActivateEvpn() {
    this._activateEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateEvpnInput() {
    return this._activateEvpn;
  }

  // activate_vpnv4 - computed: true, optional: true, required: false
  private _activateVpnv4?: string; 
  public get activateVpnv4() {
    return this.getStringAttribute('activate_vpnv4');
  }
  public set activateVpnv4(value: string) {
    this._activateVpnv4 = value;
  }
  public resetActivateVpnv4() {
    this._activateVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateVpnv4Input() {
    return this._activateVpnv4;
  }

  // activate_vpnv6 - computed: true, optional: true, required: false
  private _activateVpnv6?: string; 
  public get activateVpnv6() {
    return this.getStringAttribute('activate_vpnv6');
  }
  public set activateVpnv6(value: string) {
    this._activateVpnv6 = value;
  }
  public resetActivateVpnv6() {
    this._activateVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateVpnv6Input() {
    return this._activateVpnv6;
  }

  // additional_path - computed: true, optional: true, required: false
  private _additionalPath?: string; 
  public get additionalPath() {
    return this.getStringAttribute('additional_path');
  }
  public set additionalPath(value: string) {
    this._additionalPath = value;
  }
  public resetAdditionalPath() {
    this._additionalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathInput() {
    return this._additionalPath;
  }

  // additional_path6 - computed: true, optional: true, required: false
  private _additionalPath6?: string; 
  public get additionalPath6() {
    return this.getStringAttribute('additional_path6');
  }
  public set additionalPath6(value: string) {
    this._additionalPath6 = value;
  }
  public resetAdditionalPath6() {
    this._additionalPath6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPath6Input() {
    return this._additionalPath6;
  }

  // additional_path_vpnv4 - computed: true, optional: true, required: false
  private _additionalPathVpnv4?: string; 
  public get additionalPathVpnv4() {
    return this.getStringAttribute('additional_path_vpnv4');
  }
  public set additionalPathVpnv4(value: string) {
    this._additionalPathVpnv4 = value;
  }
  public resetAdditionalPathVpnv4() {
    this._additionalPathVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathVpnv4Input() {
    return this._additionalPathVpnv4;
  }

  // additional_path_vpnv6 - computed: true, optional: true, required: false
  private _additionalPathVpnv6?: string; 
  public get additionalPathVpnv6() {
    return this.getStringAttribute('additional_path_vpnv6');
  }
  public set additionalPathVpnv6(value: string) {
    this._additionalPathVpnv6 = value;
  }
  public resetAdditionalPathVpnv6() {
    this._additionalPathVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathVpnv6Input() {
    return this._additionalPathVpnv6;
  }

  // adv_additional_path - computed: true, optional: true, required: false
  private _advAdditionalPath?: number; 
  public get advAdditionalPath() {
    return this.getNumberAttribute('adv_additional_path');
  }
  public set advAdditionalPath(value: number) {
    this._advAdditionalPath = value;
  }
  public resetAdvAdditionalPath() {
    this._advAdditionalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathInput() {
    return this._advAdditionalPath;
  }

  // adv_additional_path6 - computed: true, optional: true, required: false
  private _advAdditionalPath6?: number; 
  public get advAdditionalPath6() {
    return this.getNumberAttribute('adv_additional_path6');
  }
  public set advAdditionalPath6(value: number) {
    this._advAdditionalPath6 = value;
  }
  public resetAdvAdditionalPath6() {
    this._advAdditionalPath6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPath6Input() {
    return this._advAdditionalPath6;
  }

  // adv_additional_path_vpnv4 - computed: true, optional: true, required: false
  private _advAdditionalPathVpnv4?: number; 
  public get advAdditionalPathVpnv4() {
    return this.getNumberAttribute('adv_additional_path_vpnv4');
  }
  public set advAdditionalPathVpnv4(value: number) {
    this._advAdditionalPathVpnv4 = value;
  }
  public resetAdvAdditionalPathVpnv4() {
    this._advAdditionalPathVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathVpnv4Input() {
    return this._advAdditionalPathVpnv4;
  }

  // adv_additional_path_vpnv6 - computed: true, optional: true, required: false
  private _advAdditionalPathVpnv6?: number; 
  public get advAdditionalPathVpnv6() {
    return this.getNumberAttribute('adv_additional_path_vpnv6');
  }
  public set advAdditionalPathVpnv6(value: number) {
    this._advAdditionalPathVpnv6 = value;
  }
  public resetAdvAdditionalPathVpnv6() {
    this._advAdditionalPathVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathVpnv6Input() {
    return this._advAdditionalPathVpnv6;
  }

  // advertisement_interval - computed: true, optional: true, required: false
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

  // allowas_in - computed: true, optional: true, required: false
  private _allowasIn?: number; 
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }
  public set allowasIn(value: number) {
    this._allowasIn = value;
  }
  public resetAllowasIn() {
    this._allowasIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn;
  }

  // allowas_in6 - computed: true, optional: true, required: false
  private _allowasIn6?: number; 
  public get allowasIn6() {
    return this.getNumberAttribute('allowas_in6');
  }
  public set allowasIn6(value: number) {
    this._allowasIn6 = value;
  }
  public resetAllowasIn6() {
    this._allowasIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasIn6Input() {
    return this._allowasIn6;
  }

  // allowas_in_enable - computed: true, optional: true, required: false
  private _allowasInEnable?: string; 
  public get allowasInEnable() {
    return this.getStringAttribute('allowas_in_enable');
  }
  public set allowasInEnable(value: string) {
    this._allowasInEnable = value;
  }
  public resetAllowasInEnable() {
    this._allowasInEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableInput() {
    return this._allowasInEnable;
  }

  // allowas_in_enable6 - computed: true, optional: true, required: false
  private _allowasInEnable6?: string; 
  public get allowasInEnable6() {
    return this.getStringAttribute('allowas_in_enable6');
  }
  public set allowasInEnable6(value: string) {
    this._allowasInEnable6 = value;
  }
  public resetAllowasInEnable6() {
    this._allowasInEnable6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnable6Input() {
    return this._allowasInEnable6;
  }

  // allowas_in_enable_evpn - computed: true, optional: true, required: false
  private _allowasInEnableEvpn?: string; 
  public get allowasInEnableEvpn() {
    return this.getStringAttribute('allowas_in_enable_evpn');
  }
  public set allowasInEnableEvpn(value: string) {
    this._allowasInEnableEvpn = value;
  }
  public resetAllowasInEnableEvpn() {
    this._allowasInEnableEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableEvpnInput() {
    return this._allowasInEnableEvpn;
  }

  // allowas_in_enable_vpnv4 - computed: true, optional: true, required: false
  private _allowasInEnableVpnv4?: string; 
  public get allowasInEnableVpnv4() {
    return this.getStringAttribute('allowas_in_enable_vpnv4');
  }
  public set allowasInEnableVpnv4(value: string) {
    this._allowasInEnableVpnv4 = value;
  }
  public resetAllowasInEnableVpnv4() {
    this._allowasInEnableVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableVpnv4Input() {
    return this._allowasInEnableVpnv4;
  }

  // allowas_in_enable_vpnv6 - computed: true, optional: true, required: false
  private _allowasInEnableVpnv6?: string; 
  public get allowasInEnableVpnv6() {
    return this.getStringAttribute('allowas_in_enable_vpnv6');
  }
  public set allowasInEnableVpnv6(value: string) {
    this._allowasInEnableVpnv6 = value;
  }
  public resetAllowasInEnableVpnv6() {
    this._allowasInEnableVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableVpnv6Input() {
    return this._allowasInEnableVpnv6;
  }

  // allowas_in_evpn - computed: true, optional: true, required: false
  private _allowasInEvpn?: number; 
  public get allowasInEvpn() {
    return this.getNumberAttribute('allowas_in_evpn');
  }
  public set allowasInEvpn(value: number) {
    this._allowasInEvpn = value;
  }
  public resetAllowasInEvpn() {
    this._allowasInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEvpnInput() {
    return this._allowasInEvpn;
  }

  // allowas_in_vpnv4 - computed: true, optional: true, required: false
  private _allowasInVpnv4?: number; 
  public get allowasInVpnv4() {
    return this.getNumberAttribute('allowas_in_vpnv4');
  }
  public set allowasInVpnv4(value: number) {
    this._allowasInVpnv4 = value;
  }
  public resetAllowasInVpnv4() {
    this._allowasInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInVpnv4Input() {
    return this._allowasInVpnv4;
  }

  // allowas_in_vpnv6 - computed: true, optional: true, required: false
  private _allowasInVpnv6?: number; 
  public get allowasInVpnv6() {
    return this.getNumberAttribute('allowas_in_vpnv6');
  }
  public set allowasInVpnv6(value: number) {
    this._allowasInVpnv6 = value;
  }
  public resetAllowasInVpnv6() {
    this._allowasInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInVpnv6Input() {
    return this._allowasInVpnv6;
  }

  // as_override - computed: true, optional: true, required: false
  private _asOverride?: string; 
  public get asOverride() {
    return this.getStringAttribute('as_override');
  }
  public set asOverride(value: string) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // as_override6 - computed: true, optional: true, required: false
  private _asOverride6?: string; 
  public get asOverride6() {
    return this.getStringAttribute('as_override6');
  }
  public set asOverride6(value: string) {
    this._asOverride6 = value;
  }
  public resetAsOverride6() {
    this._asOverride6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverride6Input() {
    return this._asOverride6;
  }

  // attribute_unchanged - computed: false, optional: true, required: false
  private _attributeUnchanged?: string; 
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }
  public set attributeUnchanged(value: string) {
    this._attributeUnchanged = value;
  }
  public resetAttributeUnchanged() {
    this._attributeUnchanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedInput() {
    return this._attributeUnchanged;
  }

  // attribute_unchanged6 - computed: false, optional: true, required: false
  private _attributeUnchanged6?: string; 
  public get attributeUnchanged6() {
    return this.getStringAttribute('attribute_unchanged6');
  }
  public set attributeUnchanged6(value: string) {
    this._attributeUnchanged6 = value;
  }
  public resetAttributeUnchanged6() {
    this._attributeUnchanged6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchanged6Input() {
    return this._attributeUnchanged6;
  }

  // attribute_unchanged_vpnv4 - computed: false, optional: true, required: false
  private _attributeUnchangedVpnv4?: string; 
  public get attributeUnchangedVpnv4() {
    return this.getStringAttribute('attribute_unchanged_vpnv4');
  }
  public set attributeUnchangedVpnv4(value: string) {
    this._attributeUnchangedVpnv4 = value;
  }
  public resetAttributeUnchangedVpnv4() {
    this._attributeUnchangedVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedVpnv4Input() {
    return this._attributeUnchangedVpnv4;
  }

  // attribute_unchanged_vpnv6 - computed: false, optional: true, required: false
  private _attributeUnchangedVpnv6?: string; 
  public get attributeUnchangedVpnv6() {
    return this.getStringAttribute('attribute_unchanged_vpnv6');
  }
  public set attributeUnchangedVpnv6(value: string) {
    this._attributeUnchangedVpnv6 = value;
  }
  public resetAttributeUnchangedVpnv6() {
    this._attributeUnchangedVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedVpnv6Input() {
    return this._attributeUnchangedVpnv6;
  }

  // auth_options - computed: false, optional: true, required: false
  private _authOptions?: string; 
  public get authOptions() {
    return this.getStringAttribute('auth_options');
  }
  public set authOptions(value: string) {
    this._authOptions = value;
  }
  public resetAuthOptions() {
    this._authOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOptionsInput() {
    return this._authOptions;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // capability_default_originate - computed: true, optional: true, required: false
  private _capabilityDefaultOriginate?: string; 
  public get capabilityDefaultOriginate() {
    return this.getStringAttribute('capability_default_originate');
  }
  public set capabilityDefaultOriginate(value: string) {
    this._capabilityDefaultOriginate = value;
  }
  public resetCapabilityDefaultOriginate() {
    this._capabilityDefaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDefaultOriginateInput() {
    return this._capabilityDefaultOriginate;
  }

  // capability_default_originate6 - computed: true, optional: true, required: false
  private _capabilityDefaultOriginate6?: string; 
  public get capabilityDefaultOriginate6() {
    return this.getStringAttribute('capability_default_originate6');
  }
  public set capabilityDefaultOriginate6(value: string) {
    this._capabilityDefaultOriginate6 = value;
  }
  public resetCapabilityDefaultOriginate6() {
    this._capabilityDefaultOriginate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDefaultOriginate6Input() {
    return this._capabilityDefaultOriginate6;
  }

  // capability_dynamic - computed: true, optional: true, required: false
  private _capabilityDynamic?: string; 
  public get capabilityDynamic() {
    return this.getStringAttribute('capability_dynamic');
  }
  public set capabilityDynamic(value: string) {
    this._capabilityDynamic = value;
  }
  public resetCapabilityDynamic() {
    this._capabilityDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDynamicInput() {
    return this._capabilityDynamic;
  }

  // capability_graceful_restart - computed: true, optional: true, required: false
  private _capabilityGracefulRestart?: string; 
  public get capabilityGracefulRestart() {
    return this.getStringAttribute('capability_graceful_restart');
  }
  public set capabilityGracefulRestart(value: string) {
    this._capabilityGracefulRestart = value;
  }
  public resetCapabilityGracefulRestart() {
    this._capabilityGracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartInput() {
    return this._capabilityGracefulRestart;
  }

  // capability_graceful_restart6 - computed: true, optional: true, required: false
  private _capabilityGracefulRestart6?: string; 
  public get capabilityGracefulRestart6() {
    return this.getStringAttribute('capability_graceful_restart6');
  }
  public set capabilityGracefulRestart6(value: string) {
    this._capabilityGracefulRestart6 = value;
  }
  public resetCapabilityGracefulRestart6() {
    this._capabilityGracefulRestart6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestart6Input() {
    return this._capabilityGracefulRestart6;
  }

  // capability_graceful_restart_evpn - computed: true, optional: true, required: false
  private _capabilityGracefulRestartEvpn?: string; 
  public get capabilityGracefulRestartEvpn() {
    return this.getStringAttribute('capability_graceful_restart_evpn');
  }
  public set capabilityGracefulRestartEvpn(value: string) {
    this._capabilityGracefulRestartEvpn = value;
  }
  public resetCapabilityGracefulRestartEvpn() {
    this._capabilityGracefulRestartEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartEvpnInput() {
    return this._capabilityGracefulRestartEvpn;
  }

  // capability_graceful_restart_vpnv4 - computed: true, optional: true, required: false
  private _capabilityGracefulRestartVpnv4?: string; 
  public get capabilityGracefulRestartVpnv4() {
    return this.getStringAttribute('capability_graceful_restart_vpnv4');
  }
  public set capabilityGracefulRestartVpnv4(value: string) {
    this._capabilityGracefulRestartVpnv4 = value;
  }
  public resetCapabilityGracefulRestartVpnv4() {
    this._capabilityGracefulRestartVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartVpnv4Input() {
    return this._capabilityGracefulRestartVpnv4;
  }

  // capability_graceful_restart_vpnv6 - computed: true, optional: true, required: false
  private _capabilityGracefulRestartVpnv6?: string; 
  public get capabilityGracefulRestartVpnv6() {
    return this.getStringAttribute('capability_graceful_restart_vpnv6');
  }
  public set capabilityGracefulRestartVpnv6(value: string) {
    this._capabilityGracefulRestartVpnv6 = value;
  }
  public resetCapabilityGracefulRestartVpnv6() {
    this._capabilityGracefulRestartVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartVpnv6Input() {
    return this._capabilityGracefulRestartVpnv6;
  }

  // capability_orf - computed: true, optional: true, required: false
  private _capabilityOrf?: string; 
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }
  public set capabilityOrf(value: string) {
    this._capabilityOrf = value;
  }
  public resetCapabilityOrf() {
    this._capabilityOrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOrfInput() {
    return this._capabilityOrf;
  }

  // capability_orf6 - computed: true, optional: true, required: false
  private _capabilityOrf6?: string; 
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
  }
  public set capabilityOrf6(value: string) {
    this._capabilityOrf6 = value;
  }
  public resetCapabilityOrf6() {
    this._capabilityOrf6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOrf6Input() {
    return this._capabilityOrf6;
  }

  // capability_route_refresh - computed: true, optional: true, required: false
  private _capabilityRouteRefresh?: string; 
  public get capabilityRouteRefresh() {
    return this.getStringAttribute('capability_route_refresh');
  }
  public set capabilityRouteRefresh(value: string) {
    this._capabilityRouteRefresh = value;
  }
  public resetCapabilityRouteRefresh() {
    this._capabilityRouteRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityRouteRefreshInput() {
    return this._capabilityRouteRefresh;
  }

  // connect_timer - computed: true, optional: true, required: false
  private _connectTimer?: number; 
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }
  public set connectTimer(value: number) {
    this._connectTimer = value;
  }
  public resetConnectTimer() {
    this._connectTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimerInput() {
    return this._connectTimer;
  }

  // default_originate_routemap - computed: false, optional: true, required: false
  private _defaultOriginateRoutemap?: string; 
  public get defaultOriginateRoutemap() {
    return this.getStringAttribute('default_originate_routemap');
  }
  public set defaultOriginateRoutemap(value: string) {
    this._defaultOriginateRoutemap = value;
  }
  public resetDefaultOriginateRoutemap() {
    this._defaultOriginateRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemapInput() {
    return this._defaultOriginateRoutemap;
  }

  // default_originate_routemap6 - computed: false, optional: true, required: false
  private _defaultOriginateRoutemap6?: string; 
  public get defaultOriginateRoutemap6() {
    return this.getStringAttribute('default_originate_routemap6');
  }
  public set defaultOriginateRoutemap6(value: string) {
    this._defaultOriginateRoutemap6 = value;
  }
  public resetDefaultOriginateRoutemap6() {
    this._defaultOriginateRoutemap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemap6Input() {
    return this._defaultOriginateRoutemap6;
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

  // distribute_list_in - computed: false, optional: true, required: false
  private _distributeListIn?: string; 
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }
  public set distributeListIn(value: string) {
    this._distributeListIn = value;
  }
  public resetDistributeListIn() {
    this._distributeListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInInput() {
    return this._distributeListIn;
  }

  // distribute_list_in6 - computed: false, optional: true, required: false
  private _distributeListIn6?: string; 
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }
  public set distributeListIn6(value: string) {
    this._distributeListIn6 = value;
  }
  public resetDistributeListIn6() {
    this._distributeListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListIn6Input() {
    return this._distributeListIn6;
  }

  // distribute_list_in_vpnv4 - computed: false, optional: true, required: false
  private _distributeListInVpnv4?: string; 
  public get distributeListInVpnv4() {
    return this.getStringAttribute('distribute_list_in_vpnv4');
  }
  public set distributeListInVpnv4(value: string) {
    this._distributeListInVpnv4 = value;
  }
  public resetDistributeListInVpnv4() {
    this._distributeListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInVpnv4Input() {
    return this._distributeListInVpnv4;
  }

  // distribute_list_in_vpnv6 - computed: false, optional: true, required: false
  private _distributeListInVpnv6?: string; 
  public get distributeListInVpnv6() {
    return this.getStringAttribute('distribute_list_in_vpnv6');
  }
  public set distributeListInVpnv6(value: string) {
    this._distributeListInVpnv6 = value;
  }
  public resetDistributeListInVpnv6() {
    this._distributeListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInVpnv6Input() {
    return this._distributeListInVpnv6;
  }

  // distribute_list_out - computed: false, optional: true, required: false
  private _distributeListOut?: string; 
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }
  public set distributeListOut(value: string) {
    this._distributeListOut = value;
  }
  public resetDistributeListOut() {
    this._distributeListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutInput() {
    return this._distributeListOut;
  }

  // distribute_list_out6 - computed: false, optional: true, required: false
  private _distributeListOut6?: string; 
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }
  public set distributeListOut6(value: string) {
    this._distributeListOut6 = value;
  }
  public resetDistributeListOut6() {
    this._distributeListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOut6Input() {
    return this._distributeListOut6;
  }

  // distribute_list_out_vpnv4 - computed: false, optional: true, required: false
  private _distributeListOutVpnv4?: string; 
  public get distributeListOutVpnv4() {
    return this.getStringAttribute('distribute_list_out_vpnv4');
  }
  public set distributeListOutVpnv4(value: string) {
    this._distributeListOutVpnv4 = value;
  }
  public resetDistributeListOutVpnv4() {
    this._distributeListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutVpnv4Input() {
    return this._distributeListOutVpnv4;
  }

  // distribute_list_out_vpnv6 - computed: false, optional: true, required: false
  private _distributeListOutVpnv6?: string; 
  public get distributeListOutVpnv6() {
    return this.getStringAttribute('distribute_list_out_vpnv6');
  }
  public set distributeListOutVpnv6(value: string) {
    this._distributeListOutVpnv6 = value;
  }
  public resetDistributeListOutVpnv6() {
    this._distributeListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutVpnv6Input() {
    return this._distributeListOutVpnv6;
  }

  // dont_capability_negotiate - computed: true, optional: true, required: false
  private _dontCapabilityNegotiate?: string; 
  public get dontCapabilityNegotiate() {
    return this.getStringAttribute('dont_capability_negotiate');
  }
  public set dontCapabilityNegotiate(value: string) {
    this._dontCapabilityNegotiate = value;
  }
  public resetDontCapabilityNegotiate() {
    this._dontCapabilityNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontCapabilityNegotiateInput() {
    return this._dontCapabilityNegotiate;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // ebgp_enforce_multihop - computed: true, optional: true, required: false
  private _ebgpEnforceMultihop?: string; 
  public get ebgpEnforceMultihop() {
    return this.getStringAttribute('ebgp_enforce_multihop');
  }
  public set ebgpEnforceMultihop(value: string) {
    this._ebgpEnforceMultihop = value;
  }
  public resetEbgpEnforceMultihop() {
    this._ebgpEnforceMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpEnforceMultihopInput() {
    return this._ebgpEnforceMultihop;
  }

  // ebgp_multihop_ttl - computed: true, optional: true, required: false
  private _ebgpMultihopTtl?: number; 
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }
  public set ebgpMultihopTtl(value: number) {
    this._ebgpMultihopTtl = value;
  }
  public resetEbgpMultihopTtl() {
    this._ebgpMultihopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopTtlInput() {
    return this._ebgpMultihopTtl;
  }

  // filter_list_in - computed: false, optional: true, required: false
  private _filterListIn?: string; 
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }
  public set filterListIn(value: string) {
    this._filterListIn = value;
  }
  public resetFilterListIn() {
    this._filterListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInInput() {
    return this._filterListIn;
  }

  // filter_list_in6 - computed: false, optional: true, required: false
  private _filterListIn6?: string; 
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }
  public set filterListIn6(value: string) {
    this._filterListIn6 = value;
  }
  public resetFilterListIn6() {
    this._filterListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListIn6Input() {
    return this._filterListIn6;
  }

  // filter_list_in_vpnv4 - computed: false, optional: true, required: false
  private _filterListInVpnv4?: string; 
  public get filterListInVpnv4() {
    return this.getStringAttribute('filter_list_in_vpnv4');
  }
  public set filterListInVpnv4(value: string) {
    this._filterListInVpnv4 = value;
  }
  public resetFilterListInVpnv4() {
    this._filterListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInVpnv4Input() {
    return this._filterListInVpnv4;
  }

  // filter_list_in_vpnv6 - computed: false, optional: true, required: false
  private _filterListInVpnv6?: string; 
  public get filterListInVpnv6() {
    return this.getStringAttribute('filter_list_in_vpnv6');
  }
  public set filterListInVpnv6(value: string) {
    this._filterListInVpnv6 = value;
  }
  public resetFilterListInVpnv6() {
    this._filterListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInVpnv6Input() {
    return this._filterListInVpnv6;
  }

  // filter_list_out - computed: false, optional: true, required: false
  private _filterListOut?: string; 
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }
  public set filterListOut(value: string) {
    this._filterListOut = value;
  }
  public resetFilterListOut() {
    this._filterListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutInput() {
    return this._filterListOut;
  }

  // filter_list_out6 - computed: false, optional: true, required: false
  private _filterListOut6?: string; 
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }
  public set filterListOut6(value: string) {
    this._filterListOut6 = value;
  }
  public resetFilterListOut6() {
    this._filterListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOut6Input() {
    return this._filterListOut6;
  }

  // filter_list_out_vpnv4 - computed: false, optional: true, required: false
  private _filterListOutVpnv4?: string; 
  public get filterListOutVpnv4() {
    return this.getStringAttribute('filter_list_out_vpnv4');
  }
  public set filterListOutVpnv4(value: string) {
    this._filterListOutVpnv4 = value;
  }
  public resetFilterListOutVpnv4() {
    this._filterListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutVpnv4Input() {
    return this._filterListOutVpnv4;
  }

  // filter_list_out_vpnv6 - computed: false, optional: true, required: false
  private _filterListOutVpnv6?: string; 
  public get filterListOutVpnv6() {
    return this.getStringAttribute('filter_list_out_vpnv6');
  }
  public set filterListOutVpnv6(value: string) {
    this._filterListOutVpnv6 = value;
  }
  public resetFilterListOutVpnv6() {
    this._filterListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutVpnv6Input() {
    return this._filterListOutVpnv6;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // holdtime_timer - computed: true, optional: true, required: false
  private _holdtimeTimer?: number; 
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }
  public set holdtimeTimer(value: number) {
    this._holdtimeTimer = value;
  }
  public resetHoldtimeTimer() {
    this._holdtimeTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeTimerInput() {
    return this._holdtimeTimer;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // keep_alive_timer - computed: true, optional: true, required: false
  private _keepAliveTimer?: number; 
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }
  public set keepAliveTimer(value: number) {
    this._keepAliveTimer = value;
  }
  public resetKeepAliveTimer() {
    this._keepAliveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimerInput() {
    return this._keepAliveTimer;
  }

  // link_down_failover - computed: true, optional: true, required: false
  private _linkDownFailover?: string; 
  public get linkDownFailover() {
    return this.getStringAttribute('link_down_failover');
  }
  public set linkDownFailover(value: string) {
    this._linkDownFailover = value;
  }
  public resetLinkDownFailover() {
    this._linkDownFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownFailoverInput() {
    return this._linkDownFailover;
  }

  // local_as - computed: false, optional: true, required: false
  private _localAs?: number; 
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }
  public set localAs(value: number) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_as_no_prepend - computed: true, optional: true, required: false
  private _localAsNoPrepend?: string; 
  public get localAsNoPrepend() {
    return this.getStringAttribute('local_as_no_prepend');
  }
  public set localAsNoPrepend(value: string) {
    this._localAsNoPrepend = value;
  }
  public resetLocalAsNoPrepend() {
    this._localAsNoPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependInput() {
    return this._localAsNoPrepend;
  }

  // local_as_replace_as - computed: true, optional: true, required: false
  private _localAsReplaceAs?: string; 
  public get localAsReplaceAs() {
    return this.getStringAttribute('local_as_replace_as');
  }
  public set localAsReplaceAs(value: string) {
    this._localAsReplaceAs = value;
  }
  public resetLocalAsReplaceAs() {
    this._localAsReplaceAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsReplaceAsInput() {
    return this._localAsReplaceAs;
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix?: number; 
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }
  public set maximumPrefix(value: number) {
    this._maximumPrefix = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix;
  }

  // maximum_prefix6 - computed: false, optional: true, required: false
  private _maximumPrefix6?: number; 
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }
  public set maximumPrefix6(value: number) {
    this._maximumPrefix6 = value;
  }
  public resetMaximumPrefix6() {
    this._maximumPrefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefix6Input() {
    return this._maximumPrefix6;
  }

  // maximum_prefix_evpn - computed: false, optional: true, required: false
  private _maximumPrefixEvpn?: number; 
  public get maximumPrefixEvpn() {
    return this.getNumberAttribute('maximum_prefix_evpn');
  }
  public set maximumPrefixEvpn(value: number) {
    this._maximumPrefixEvpn = value;
  }
  public resetMaximumPrefixEvpn() {
    this._maximumPrefixEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixEvpnInput() {
    return this._maximumPrefixEvpn;
  }

  // maximum_prefix_threshold - computed: true, optional: true, required: false
  private _maximumPrefixThreshold?: number; 
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }
  public set maximumPrefixThreshold(value: number) {
    this._maximumPrefixThreshold = value;
  }
  public resetMaximumPrefixThreshold() {
    this._maximumPrefixThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdInput() {
    return this._maximumPrefixThreshold;
  }

  // maximum_prefix_threshold6 - computed: true, optional: true, required: false
  private _maximumPrefixThreshold6?: number; 
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }
  public set maximumPrefixThreshold6(value: number) {
    this._maximumPrefixThreshold6 = value;
  }
  public resetMaximumPrefixThreshold6() {
    this._maximumPrefixThreshold6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThreshold6Input() {
    return this._maximumPrefixThreshold6;
  }

  // maximum_prefix_threshold_evpn - computed: true, optional: true, required: false
  private _maximumPrefixThresholdEvpn?: number; 
  public get maximumPrefixThresholdEvpn() {
    return this.getNumberAttribute('maximum_prefix_threshold_evpn');
  }
  public set maximumPrefixThresholdEvpn(value: number) {
    this._maximumPrefixThresholdEvpn = value;
  }
  public resetMaximumPrefixThresholdEvpn() {
    this._maximumPrefixThresholdEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdEvpnInput() {
    return this._maximumPrefixThresholdEvpn;
  }

  // maximum_prefix_threshold_vpnv4 - computed: true, optional: true, required: false
  private _maximumPrefixThresholdVpnv4?: number; 
  public get maximumPrefixThresholdVpnv4() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv4');
  }
  public set maximumPrefixThresholdVpnv4(value: number) {
    this._maximumPrefixThresholdVpnv4 = value;
  }
  public resetMaximumPrefixThresholdVpnv4() {
    this._maximumPrefixThresholdVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdVpnv4Input() {
    return this._maximumPrefixThresholdVpnv4;
  }

  // maximum_prefix_threshold_vpnv6 - computed: true, optional: true, required: false
  private _maximumPrefixThresholdVpnv6?: number; 
  public get maximumPrefixThresholdVpnv6() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv6');
  }
  public set maximumPrefixThresholdVpnv6(value: number) {
    this._maximumPrefixThresholdVpnv6 = value;
  }
  public resetMaximumPrefixThresholdVpnv6() {
    this._maximumPrefixThresholdVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdVpnv6Input() {
    return this._maximumPrefixThresholdVpnv6;
  }

  // maximum_prefix_vpnv4 - computed: false, optional: true, required: false
  private _maximumPrefixVpnv4?: number; 
  public get maximumPrefixVpnv4() {
    return this.getNumberAttribute('maximum_prefix_vpnv4');
  }
  public set maximumPrefixVpnv4(value: number) {
    this._maximumPrefixVpnv4 = value;
  }
  public resetMaximumPrefixVpnv4() {
    this._maximumPrefixVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixVpnv4Input() {
    return this._maximumPrefixVpnv4;
  }

  // maximum_prefix_vpnv6 - computed: false, optional: true, required: false
  private _maximumPrefixVpnv6?: number; 
  public get maximumPrefixVpnv6() {
    return this.getNumberAttribute('maximum_prefix_vpnv6');
  }
  public set maximumPrefixVpnv6(value: number) {
    this._maximumPrefixVpnv6 = value;
  }
  public resetMaximumPrefixVpnv6() {
    this._maximumPrefixVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixVpnv6Input() {
    return this._maximumPrefixVpnv6;
  }

  // maximum_prefix_warning_only - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnly?: string; 
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }
  public set maximumPrefixWarningOnly(value: string) {
    this._maximumPrefixWarningOnly = value;
  }
  public resetMaximumPrefixWarningOnly() {
    this._maximumPrefixWarningOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyInput() {
    return this._maximumPrefixWarningOnly;
  }

  // maximum_prefix_warning_only6 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnly6?: string; 
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }
  public set maximumPrefixWarningOnly6(value: string) {
    this._maximumPrefixWarningOnly6 = value;
  }
  public resetMaximumPrefixWarningOnly6() {
    this._maximumPrefixWarningOnly6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnly6Input() {
    return this._maximumPrefixWarningOnly6;
  }

  // maximum_prefix_warning_only_evpn - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyEvpn?: string; 
  public get maximumPrefixWarningOnlyEvpn() {
    return this.getStringAttribute('maximum_prefix_warning_only_evpn');
  }
  public set maximumPrefixWarningOnlyEvpn(value: string) {
    this._maximumPrefixWarningOnlyEvpn = value;
  }
  public resetMaximumPrefixWarningOnlyEvpn() {
    this._maximumPrefixWarningOnlyEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyEvpnInput() {
    return this._maximumPrefixWarningOnlyEvpn;
  }

  // maximum_prefix_warning_only_vpnv4 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyVpnv4?: string; 
  public get maximumPrefixWarningOnlyVpnv4() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv4');
  }
  public set maximumPrefixWarningOnlyVpnv4(value: string) {
    this._maximumPrefixWarningOnlyVpnv4 = value;
  }
  public resetMaximumPrefixWarningOnlyVpnv4() {
    this._maximumPrefixWarningOnlyVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyVpnv4Input() {
    return this._maximumPrefixWarningOnlyVpnv4;
  }

  // maximum_prefix_warning_only_vpnv6 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyVpnv6?: string; 
  public get maximumPrefixWarningOnlyVpnv6() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv6');
  }
  public set maximumPrefixWarningOnlyVpnv6(value: string) {
    this._maximumPrefixWarningOnlyVpnv6 = value;
  }
  public resetMaximumPrefixWarningOnlyVpnv6() {
    this._maximumPrefixWarningOnlyVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyVpnv6Input() {
    return this._maximumPrefixWarningOnlyVpnv6;
  }

  // next_hop_self - computed: true, optional: true, required: false
  private _nextHopSelf?: string; 
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }
  public set nextHopSelf(value: string) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self6 - computed: true, optional: true, required: false
  private _nextHopSelf6?: string; 
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
  }
  public set nextHopSelf6(value: string) {
    this._nextHopSelf6 = value;
  }
  public resetNextHopSelf6() {
    this._nextHopSelf6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelf6Input() {
    return this._nextHopSelf6;
  }

  // next_hop_self_rr - computed: true, optional: true, required: false
  private _nextHopSelfRr?: string; 
  public get nextHopSelfRr() {
    return this.getStringAttribute('next_hop_self_rr');
  }
  public set nextHopSelfRr(value: string) {
    this._nextHopSelfRr = value;
  }
  public resetNextHopSelfRr() {
    this._nextHopSelfRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfRrInput() {
    return this._nextHopSelfRr;
  }

  // next_hop_self_rr6 - computed: true, optional: true, required: false
  private _nextHopSelfRr6?: string; 
  public get nextHopSelfRr6() {
    return this.getStringAttribute('next_hop_self_rr6');
  }
  public set nextHopSelfRr6(value: string) {
    this._nextHopSelfRr6 = value;
  }
  public resetNextHopSelfRr6() {
    this._nextHopSelfRr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfRr6Input() {
    return this._nextHopSelfRr6;
  }

  // next_hop_self_vpnv4 - computed: true, optional: true, required: false
  private _nextHopSelfVpnv4?: string; 
  public get nextHopSelfVpnv4() {
    return this.getStringAttribute('next_hop_self_vpnv4');
  }
  public set nextHopSelfVpnv4(value: string) {
    this._nextHopSelfVpnv4 = value;
  }
  public resetNextHopSelfVpnv4() {
    this._nextHopSelfVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVpnv4Input() {
    return this._nextHopSelfVpnv4;
  }

  // next_hop_self_vpnv6 - computed: true, optional: true, required: false
  private _nextHopSelfVpnv6?: string; 
  public get nextHopSelfVpnv6() {
    return this.getStringAttribute('next_hop_self_vpnv6');
  }
  public set nextHopSelfVpnv6(value: string) {
    this._nextHopSelfVpnv6 = value;
  }
  public resetNextHopSelfVpnv6() {
    this._nextHopSelfVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVpnv6Input() {
    return this._nextHopSelfVpnv6;
  }

  // override_capability - computed: true, optional: true, required: false
  private _overrideCapability?: string; 
  public get overrideCapability() {
    return this.getStringAttribute('override_capability');
  }
  public set overrideCapability(value: string) {
    this._overrideCapability = value;
  }
  public resetOverrideCapability() {
    this._overrideCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCapabilityInput() {
    return this._overrideCapability;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prefix_list_in - computed: false, optional: true, required: false
  private _prefixListIn?: string; 
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }
  public set prefixListIn(value: string) {
    this._prefixListIn = value;
  }
  public resetPrefixListIn() {
    this._prefixListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInInput() {
    return this._prefixListIn;
  }

  // prefix_list_in6 - computed: false, optional: true, required: false
  private _prefixListIn6?: string; 
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }
  public set prefixListIn6(value: string) {
    this._prefixListIn6 = value;
  }
  public resetPrefixListIn6() {
    this._prefixListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIn6Input() {
    return this._prefixListIn6;
  }

  // prefix_list_in_vpnv4 - computed: false, optional: true, required: false
  private _prefixListInVpnv4?: string; 
  public get prefixListInVpnv4() {
    return this.getStringAttribute('prefix_list_in_vpnv4');
  }
  public set prefixListInVpnv4(value: string) {
    this._prefixListInVpnv4 = value;
  }
  public resetPrefixListInVpnv4() {
    this._prefixListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInVpnv4Input() {
    return this._prefixListInVpnv4;
  }

  // prefix_list_in_vpnv6 - computed: false, optional: true, required: false
  private _prefixListInVpnv6?: string; 
  public get prefixListInVpnv6() {
    return this.getStringAttribute('prefix_list_in_vpnv6');
  }
  public set prefixListInVpnv6(value: string) {
    this._prefixListInVpnv6 = value;
  }
  public resetPrefixListInVpnv6() {
    this._prefixListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInVpnv6Input() {
    return this._prefixListInVpnv6;
  }

  // prefix_list_out - computed: false, optional: true, required: false
  private _prefixListOut?: string; 
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }
  public set prefixListOut(value: string) {
    this._prefixListOut = value;
  }
  public resetPrefixListOut() {
    this._prefixListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutInput() {
    return this._prefixListOut;
  }

  // prefix_list_out6 - computed: false, optional: true, required: false
  private _prefixListOut6?: string; 
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }
  public set prefixListOut6(value: string) {
    this._prefixListOut6 = value;
  }
  public resetPrefixListOut6() {
    this._prefixListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOut6Input() {
    return this._prefixListOut6;
  }

  // prefix_list_out_vpnv4 - computed: false, optional: true, required: false
  private _prefixListOutVpnv4?: string; 
  public get prefixListOutVpnv4() {
    return this.getStringAttribute('prefix_list_out_vpnv4');
  }
  public set prefixListOutVpnv4(value: string) {
    this._prefixListOutVpnv4 = value;
  }
  public resetPrefixListOutVpnv4() {
    this._prefixListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutVpnv4Input() {
    return this._prefixListOutVpnv4;
  }

  // prefix_list_out_vpnv6 - computed: false, optional: true, required: false
  private _prefixListOutVpnv6?: string; 
  public get prefixListOutVpnv6() {
    return this.getStringAttribute('prefix_list_out_vpnv6');
  }
  public set prefixListOutVpnv6(value: string) {
    this._prefixListOutVpnv6 = value;
  }
  public resetPrefixListOutVpnv6() {
    this._prefixListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutVpnv6Input() {
    return this._prefixListOutVpnv6;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remove_private_as - computed: true, optional: true, required: false
  private _removePrivateAs?: string; 
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }
  public set removePrivateAs(value: string) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }

  // remove_private_as6 - computed: true, optional: true, required: false
  private _removePrivateAs6?: string; 
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
  }
  public set removePrivateAs6(value: string) {
    this._removePrivateAs6 = value;
  }
  public resetRemovePrivateAs6() {
    this._removePrivateAs6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAs6Input() {
    return this._removePrivateAs6;
  }

  // remove_private_as_evpn - computed: true, optional: true, required: false
  private _removePrivateAsEvpn?: string; 
  public get removePrivateAsEvpn() {
    return this.getStringAttribute('remove_private_as_evpn');
  }
  public set removePrivateAsEvpn(value: string) {
    this._removePrivateAsEvpn = value;
  }
  public resetRemovePrivateAsEvpn() {
    this._removePrivateAsEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsEvpnInput() {
    return this._removePrivateAsEvpn;
  }

  // remove_private_as_vpnv4 - computed: true, optional: true, required: false
  private _removePrivateAsVpnv4?: string; 
  public get removePrivateAsVpnv4() {
    return this.getStringAttribute('remove_private_as_vpnv4');
  }
  public set removePrivateAsVpnv4(value: string) {
    this._removePrivateAsVpnv4 = value;
  }
  public resetRemovePrivateAsVpnv4() {
    this._removePrivateAsVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsVpnv4Input() {
    return this._removePrivateAsVpnv4;
  }

  // remove_private_as_vpnv6 - computed: true, optional: true, required: false
  private _removePrivateAsVpnv6?: string; 
  public get removePrivateAsVpnv6() {
    return this.getStringAttribute('remove_private_as_vpnv6');
  }
  public set removePrivateAsVpnv6(value: string) {
    this._removePrivateAsVpnv6 = value;
  }
  public resetRemovePrivateAsVpnv6() {
    this._removePrivateAsVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsVpnv6Input() {
    return this._removePrivateAsVpnv6;
  }

  // restart_time - computed: false, optional: true, required: false
  private _restartTime?: number; 
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }
  public set restartTime(value: number) {
    this._restartTime = value;
  }
  public resetRestartTime() {
    this._restartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeInput() {
    return this._restartTime;
  }

  // retain_stale_time - computed: false, optional: true, required: false
  private _retainStaleTime?: number; 
  public get retainStaleTime() {
    return this.getNumberAttribute('retain_stale_time');
  }
  public set retainStaleTime(value: number) {
    this._retainStaleTime = value;
  }
  public resetRetainStaleTime() {
    this._retainStaleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStaleTimeInput() {
    return this._retainStaleTime;
  }

  // route_map_in - computed: false, optional: true, required: false
  private _routeMapIn?: string; 
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }
  public set routeMapIn(value: string) {
    this._routeMapIn = value;
  }
  public resetRouteMapIn() {
    this._routeMapIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInInput() {
    return this._routeMapIn;
  }

  // route_map_in6 - computed: false, optional: true, required: false
  private _routeMapIn6?: string; 
  public get routeMapIn6() {
    return this.getStringAttribute('route_map_in6');
  }
  public set routeMapIn6(value: string) {
    this._routeMapIn6 = value;
  }
  public resetRouteMapIn6() {
    this._routeMapIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapIn6Input() {
    return this._routeMapIn6;
  }

  // route_map_in_evpn - computed: false, optional: true, required: false
  private _routeMapInEvpn?: string; 
  public get routeMapInEvpn() {
    return this.getStringAttribute('route_map_in_evpn');
  }
  public set routeMapInEvpn(value: string) {
    this._routeMapInEvpn = value;
  }
  public resetRouteMapInEvpn() {
    this._routeMapInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInEvpnInput() {
    return this._routeMapInEvpn;
  }

  // route_map_in_vpnv4 - computed: false, optional: true, required: false
  private _routeMapInVpnv4?: string; 
  public get routeMapInVpnv4() {
    return this.getStringAttribute('route_map_in_vpnv4');
  }
  public set routeMapInVpnv4(value: string) {
    this._routeMapInVpnv4 = value;
  }
  public resetRouteMapInVpnv4() {
    this._routeMapInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInVpnv4Input() {
    return this._routeMapInVpnv4;
  }

  // route_map_in_vpnv6 - computed: false, optional: true, required: false
  private _routeMapInVpnv6?: string; 
  public get routeMapInVpnv6() {
    return this.getStringAttribute('route_map_in_vpnv6');
  }
  public set routeMapInVpnv6(value: string) {
    this._routeMapInVpnv6 = value;
  }
  public resetRouteMapInVpnv6() {
    this._routeMapInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInVpnv6Input() {
    return this._routeMapInVpnv6;
  }

  // route_map_out - computed: false, optional: true, required: false
  private _routeMapOut?: string; 
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }
  public set routeMapOut(value: string) {
    this._routeMapOut = value;
  }
  public resetRouteMapOut() {
    this._routeMapOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutInput() {
    return this._routeMapOut;
  }

  // route_map_out6 - computed: false, optional: true, required: false
  private _routeMapOut6?: string; 
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }
  public set routeMapOut6(value: string) {
    this._routeMapOut6 = value;
  }
  public resetRouteMapOut6() {
    this._routeMapOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6Input() {
    return this._routeMapOut6;
  }

  // route_map_out6_preferable - computed: false, optional: true, required: false
  private _routeMapOut6Preferable?: string; 
  public get routeMapOut6Preferable() {
    return this.getStringAttribute('route_map_out6_preferable');
  }
  public set routeMapOut6Preferable(value: string) {
    this._routeMapOut6Preferable = value;
  }
  public resetRouteMapOut6Preferable() {
    this._routeMapOut6Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6PreferableInput() {
    return this._routeMapOut6Preferable;
  }

  // route_map_out_evpn - computed: false, optional: true, required: false
  private _routeMapOutEvpn?: string; 
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
  }
  public set routeMapOutEvpn(value: string) {
    this._routeMapOutEvpn = value;
  }
  public resetRouteMapOutEvpn() {
    this._routeMapOutEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutEvpnInput() {
    return this._routeMapOutEvpn;
  }

  // route_map_out_preferable - computed: false, optional: true, required: false
  private _routeMapOutPreferable?: string; 
  public get routeMapOutPreferable() {
    return this.getStringAttribute('route_map_out_preferable');
  }
  public set routeMapOutPreferable(value: string) {
    this._routeMapOutPreferable = value;
  }
  public resetRouteMapOutPreferable() {
    this._routeMapOutPreferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutPreferableInput() {
    return this._routeMapOutPreferable;
  }

  // route_map_out_vpnv4 - computed: false, optional: true, required: false
  private _routeMapOutVpnv4?: string; 
  public get routeMapOutVpnv4() {
    return this.getStringAttribute('route_map_out_vpnv4');
  }
  public set routeMapOutVpnv4(value: string) {
    this._routeMapOutVpnv4 = value;
  }
  public resetRouteMapOutVpnv4() {
    this._routeMapOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv4Input() {
    return this._routeMapOutVpnv4;
  }

  // route_map_out_vpnv4_preferable - computed: false, optional: true, required: false
  private _routeMapOutVpnv4Preferable?: string; 
  public get routeMapOutVpnv4Preferable() {
    return this.getStringAttribute('route_map_out_vpnv4_preferable');
  }
  public set routeMapOutVpnv4Preferable(value: string) {
    this._routeMapOutVpnv4Preferable = value;
  }
  public resetRouteMapOutVpnv4Preferable() {
    this._routeMapOutVpnv4Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv4PreferableInput() {
    return this._routeMapOutVpnv4Preferable;
  }

  // route_map_out_vpnv6 - computed: false, optional: true, required: false
  private _routeMapOutVpnv6?: string; 
  public get routeMapOutVpnv6() {
    return this.getStringAttribute('route_map_out_vpnv6');
  }
  public set routeMapOutVpnv6(value: string) {
    this._routeMapOutVpnv6 = value;
  }
  public resetRouteMapOutVpnv6() {
    this._routeMapOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv6Input() {
    return this._routeMapOutVpnv6;
  }

  // route_map_out_vpnv6_preferable - computed: false, optional: true, required: false
  private _routeMapOutVpnv6Preferable?: string; 
  public get routeMapOutVpnv6Preferable() {
    return this.getStringAttribute('route_map_out_vpnv6_preferable');
  }
  public set routeMapOutVpnv6Preferable(value: string) {
    this._routeMapOutVpnv6Preferable = value;
  }
  public resetRouteMapOutVpnv6Preferable() {
    this._routeMapOutVpnv6Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv6PreferableInput() {
    return this._routeMapOutVpnv6Preferable;
  }

  // route_reflector_client - computed: true, optional: true, required: false
  private _routeReflectorClient?: string; 
  public get routeReflectorClient() {
    return this.getStringAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: string) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // route_reflector_client6 - computed: true, optional: true, required: false
  private _routeReflectorClient6?: string; 
  public get routeReflectorClient6() {
    return this.getStringAttribute('route_reflector_client6');
  }
  public set routeReflectorClient6(value: string) {
    this._routeReflectorClient6 = value;
  }
  public resetRouteReflectorClient6() {
    this._routeReflectorClient6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClient6Input() {
    return this._routeReflectorClient6;
  }

  // route_reflector_client_evpn - computed: true, optional: true, required: false
  private _routeReflectorClientEvpn?: string; 
  public get routeReflectorClientEvpn() {
    return this.getStringAttribute('route_reflector_client_evpn');
  }
  public set routeReflectorClientEvpn(value: string) {
    this._routeReflectorClientEvpn = value;
  }
  public resetRouteReflectorClientEvpn() {
    this._routeReflectorClientEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientEvpnInput() {
    return this._routeReflectorClientEvpn;
  }

  // route_reflector_client_vpnv4 - computed: true, optional: true, required: false
  private _routeReflectorClientVpnv4?: string; 
  public get routeReflectorClientVpnv4() {
    return this.getStringAttribute('route_reflector_client_vpnv4');
  }
  public set routeReflectorClientVpnv4(value: string) {
    this._routeReflectorClientVpnv4 = value;
  }
  public resetRouteReflectorClientVpnv4() {
    this._routeReflectorClientVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientVpnv4Input() {
    return this._routeReflectorClientVpnv4;
  }

  // route_reflector_client_vpnv6 - computed: true, optional: true, required: false
  private _routeReflectorClientVpnv6?: string; 
  public get routeReflectorClientVpnv6() {
    return this.getStringAttribute('route_reflector_client_vpnv6');
  }
  public set routeReflectorClientVpnv6(value: string) {
    this._routeReflectorClientVpnv6 = value;
  }
  public resetRouteReflectorClientVpnv6() {
    this._routeReflectorClientVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientVpnv6Input() {
    return this._routeReflectorClientVpnv6;
  }

  // route_server_client - computed: true, optional: true, required: false
  private _routeServerClient?: string; 
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }
  public set routeServerClient(value: string) {
    this._routeServerClient = value;
  }
  public resetRouteServerClient() {
    this._routeServerClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientInput() {
    return this._routeServerClient;
  }

  // route_server_client6 - computed: true, optional: true, required: false
  private _routeServerClient6?: string; 
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }
  public set routeServerClient6(value: string) {
    this._routeServerClient6 = value;
  }
  public resetRouteServerClient6() {
    this._routeServerClient6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClient6Input() {
    return this._routeServerClient6;
  }

  // route_server_client_evpn - computed: true, optional: true, required: false
  private _routeServerClientEvpn?: string; 
  public get routeServerClientEvpn() {
    return this.getStringAttribute('route_server_client_evpn');
  }
  public set routeServerClientEvpn(value: string) {
    this._routeServerClientEvpn = value;
  }
  public resetRouteServerClientEvpn() {
    this._routeServerClientEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientEvpnInput() {
    return this._routeServerClientEvpn;
  }

  // route_server_client_vpnv4 - computed: true, optional: true, required: false
  private _routeServerClientVpnv4?: string; 
  public get routeServerClientVpnv4() {
    return this.getStringAttribute('route_server_client_vpnv4');
  }
  public set routeServerClientVpnv4(value: string) {
    this._routeServerClientVpnv4 = value;
  }
  public resetRouteServerClientVpnv4() {
    this._routeServerClientVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientVpnv4Input() {
    return this._routeServerClientVpnv4;
  }

  // route_server_client_vpnv6 - computed: true, optional: true, required: false
  private _routeServerClientVpnv6?: string; 
  public get routeServerClientVpnv6() {
    return this.getStringAttribute('route_server_client_vpnv6');
  }
  public set routeServerClientVpnv6(value: string) {
    this._routeServerClientVpnv6 = value;
  }
  public resetRouteServerClientVpnv6() {
    this._routeServerClientVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientVpnv6Input() {
    return this._routeServerClientVpnv6;
  }

  // rr_attr_allow_change - computed: true, optional: true, required: false
  private _rrAttrAllowChange?: string; 
  public get rrAttrAllowChange() {
    return this.getStringAttribute('rr_attr_allow_change');
  }
  public set rrAttrAllowChange(value: string) {
    this._rrAttrAllowChange = value;
  }
  public resetRrAttrAllowChange() {
    this._rrAttrAllowChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeInput() {
    return this._rrAttrAllowChange;
  }

  // rr_attr_allow_change6 - computed: true, optional: true, required: false
  private _rrAttrAllowChange6?: string; 
  public get rrAttrAllowChange6() {
    return this.getStringAttribute('rr_attr_allow_change6');
  }
  public set rrAttrAllowChange6(value: string) {
    this._rrAttrAllowChange6 = value;
  }
  public resetRrAttrAllowChange6() {
    this._rrAttrAllowChange6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChange6Input() {
    return this._rrAttrAllowChange6;
  }

  // rr_attr_allow_change_evpn - computed: true, optional: true, required: false
  private _rrAttrAllowChangeEvpn?: string; 
  public get rrAttrAllowChangeEvpn() {
    return this.getStringAttribute('rr_attr_allow_change_evpn');
  }
  public set rrAttrAllowChangeEvpn(value: string) {
    this._rrAttrAllowChangeEvpn = value;
  }
  public resetRrAttrAllowChangeEvpn() {
    this._rrAttrAllowChangeEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeEvpnInput() {
    return this._rrAttrAllowChangeEvpn;
  }

  // rr_attr_allow_change_vpnv4 - computed: true, optional: true, required: false
  private _rrAttrAllowChangeVpnv4?: string; 
  public get rrAttrAllowChangeVpnv4() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv4');
  }
  public set rrAttrAllowChangeVpnv4(value: string) {
    this._rrAttrAllowChangeVpnv4 = value;
  }
  public resetRrAttrAllowChangeVpnv4() {
    this._rrAttrAllowChangeVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeVpnv4Input() {
    return this._rrAttrAllowChangeVpnv4;
  }

  // rr_attr_allow_change_vpnv6 - computed: true, optional: true, required: false
  private _rrAttrAllowChangeVpnv6?: string; 
  public get rrAttrAllowChangeVpnv6() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv6');
  }
  public set rrAttrAllowChangeVpnv6(value: string) {
    this._rrAttrAllowChangeVpnv6 = value;
  }
  public resetRrAttrAllowChangeVpnv6() {
    this._rrAttrAllowChangeVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeVpnv6Input() {
    return this._rrAttrAllowChangeVpnv6;
  }

  // send_community - computed: true, optional: true, required: false
  private _sendCommunity?: string; 
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }
  public set sendCommunity(value: string) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // send_community6 - computed: true, optional: true, required: false
  private _sendCommunity6?: string; 
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
  }
  public set sendCommunity6(value: string) {
    this._sendCommunity6 = value;
  }
  public resetSendCommunity6() {
    this._sendCommunity6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunity6Input() {
    return this._sendCommunity6;
  }

  // send_community_evpn - computed: true, optional: true, required: false
  private _sendCommunityEvpn?: string; 
  public get sendCommunityEvpn() {
    return this.getStringAttribute('send_community_evpn');
  }
  public set sendCommunityEvpn(value: string) {
    this._sendCommunityEvpn = value;
  }
  public resetSendCommunityEvpn() {
    this._sendCommunityEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityEvpnInput() {
    return this._sendCommunityEvpn;
  }

  // send_community_vpnv4 - computed: true, optional: true, required: false
  private _sendCommunityVpnv4?: string; 
  public get sendCommunityVpnv4() {
    return this.getStringAttribute('send_community_vpnv4');
  }
  public set sendCommunityVpnv4(value: string) {
    this._sendCommunityVpnv4 = value;
  }
  public resetSendCommunityVpnv4() {
    this._sendCommunityVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVpnv4Input() {
    return this._sendCommunityVpnv4;
  }

  // send_community_vpnv6 - computed: true, optional: true, required: false
  private _sendCommunityVpnv6?: string; 
  public get sendCommunityVpnv6() {
    return this.getStringAttribute('send_community_vpnv6');
  }
  public set sendCommunityVpnv6(value: string) {
    this._sendCommunityVpnv6 = value;
  }
  public resetSendCommunityVpnv6() {
    this._sendCommunityVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVpnv6Input() {
    return this._sendCommunityVpnv6;
  }

  // shutdown - computed: true, optional: true, required: false
  private _shutdown?: string; 
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }
  public set shutdown(value: string) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // soft_reconfiguration - computed: true, optional: true, required: false
  private _softReconfiguration?: string; 
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }
  public set softReconfiguration(value: string) {
    this._softReconfiguration = value;
  }
  public resetSoftReconfiguration() {
    this._softReconfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationInput() {
    return this._softReconfiguration;
  }

  // soft_reconfiguration6 - computed: true, optional: true, required: false
  private _softReconfiguration6?: string; 
  public get softReconfiguration6() {
    return this.getStringAttribute('soft_reconfiguration6');
  }
  public set softReconfiguration6(value: string) {
    this._softReconfiguration6 = value;
  }
  public resetSoftReconfiguration6() {
    this._softReconfiguration6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfiguration6Input() {
    return this._softReconfiguration6;
  }

  // soft_reconfiguration_evpn - computed: true, optional: true, required: false
  private _softReconfigurationEvpn?: string; 
  public get softReconfigurationEvpn() {
    return this.getStringAttribute('soft_reconfiguration_evpn');
  }
  public set softReconfigurationEvpn(value: string) {
    this._softReconfigurationEvpn = value;
  }
  public resetSoftReconfigurationEvpn() {
    this._softReconfigurationEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationEvpnInput() {
    return this._softReconfigurationEvpn;
  }

  // soft_reconfiguration_vpnv4 - computed: true, optional: true, required: false
  private _softReconfigurationVpnv4?: string; 
  public get softReconfigurationVpnv4() {
    return this.getStringAttribute('soft_reconfiguration_vpnv4');
  }
  public set softReconfigurationVpnv4(value: string) {
    this._softReconfigurationVpnv4 = value;
  }
  public resetSoftReconfigurationVpnv4() {
    this._softReconfigurationVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationVpnv4Input() {
    return this._softReconfigurationVpnv4;
  }

  // soft_reconfiguration_vpnv6 - computed: true, optional: true, required: false
  private _softReconfigurationVpnv6?: string; 
  public get softReconfigurationVpnv6() {
    return this.getStringAttribute('soft_reconfiguration_vpnv6');
  }
  public set softReconfigurationVpnv6(value: string) {
    this._softReconfigurationVpnv6 = value;
  }
  public resetSoftReconfigurationVpnv6() {
    this._softReconfigurationVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationVpnv6Input() {
    return this._softReconfigurationVpnv6;
  }

  // stale_route - computed: true, optional: true, required: false
  private _staleRoute?: string; 
  public get staleRoute() {
    return this.getStringAttribute('stale_route');
  }
  public set staleRoute(value: string) {
    this._staleRoute = value;
  }
  public resetStaleRoute() {
    this._staleRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleRouteInput() {
    return this._staleRoute;
  }

  // strict_capability_match - computed: true, optional: true, required: false
  private _strictCapabilityMatch?: string; 
  public get strictCapabilityMatch() {
    return this.getStringAttribute('strict_capability_match');
  }
  public set strictCapabilityMatch(value: string) {
    this._strictCapabilityMatch = value;
  }
  public resetStrictCapabilityMatch() {
    this._strictCapabilityMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCapabilityMatchInput() {
    return this._strictCapabilityMatch;
  }

  // unsuppress_map - computed: false, optional: true, required: false
  private _unsuppressMap?: string; 
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
  public set unsuppressMap(value: string) {
    this._unsuppressMap = value;
  }
  public resetUnsuppressMap() {
    this._unsuppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMapInput() {
    return this._unsuppressMap;
  }

  // unsuppress_map6 - computed: false, optional: true, required: false
  private _unsuppressMap6?: string; 
  public get unsuppressMap6() {
    return this.getStringAttribute('unsuppress_map6');
  }
  public set unsuppressMap6(value: string) {
    this._unsuppressMap6 = value;
  }
  public resetUnsuppressMap6() {
    this._unsuppressMap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMap6Input() {
    return this._unsuppressMap6;
  }

  // update_source - computed: false, optional: true, required: false
  private _updateSource?: string; 
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }
  public set updateSource(value: string) {
    this._updateSource = value;
  }
  public resetUpdateSource() {
    this._updateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInput() {
    return this._updateSource;
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

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // conditional_advertise - computed: false, optional: true, required: false
  private _conditionalAdvertise = new RouterbgpNeighborConditionalAdvertiseList(this, "conditional_advertise", false);
  public get conditionalAdvertise() {
    return this._conditionalAdvertise;
  }
  public putConditionalAdvertise(value: RouterbgpNeighborConditionalAdvertise[] | cdktf.IResolvable) {
    this._conditionalAdvertise.internalValue = value;
  }
  public resetConditionalAdvertise() {
    this._conditionalAdvertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertiseInput() {
    return this._conditionalAdvertise.internalValue;
  }

  // conditional_advertise6 - computed: false, optional: true, required: false
  private _conditionalAdvertise6 = new RouterbgpNeighborConditionalAdvertise6List(this, "conditional_advertise6", false);
  public get conditionalAdvertise6() {
    return this._conditionalAdvertise6;
  }
  public putConditionalAdvertise6(value: RouterbgpNeighborConditionalAdvertise6[] | cdktf.IResolvable) {
    this._conditionalAdvertise6.internalValue = value;
  }
  public resetConditionalAdvertise6() {
    this._conditionalAdvertise6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertise6Input() {
    return this._conditionalAdvertise6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate: cdktf.stringToTerraform(this._activate),
      activate6: cdktf.stringToTerraform(this._activate6),
      activate_evpn: cdktf.stringToTerraform(this._activateEvpn),
      activate_vpnv4: cdktf.stringToTerraform(this._activateVpnv4),
      activate_vpnv6: cdktf.stringToTerraform(this._activateVpnv6),
      additional_path: cdktf.stringToTerraform(this._additionalPath),
      additional_path6: cdktf.stringToTerraform(this._additionalPath6),
      additional_path_vpnv4: cdktf.stringToTerraform(this._additionalPathVpnv4),
      additional_path_vpnv6: cdktf.stringToTerraform(this._additionalPathVpnv6),
      adv_additional_path: cdktf.numberToTerraform(this._advAdditionalPath),
      adv_additional_path6: cdktf.numberToTerraform(this._advAdditionalPath6),
      adv_additional_path_vpnv4: cdktf.numberToTerraform(this._advAdditionalPathVpnv4),
      adv_additional_path_vpnv6: cdktf.numberToTerraform(this._advAdditionalPathVpnv6),
      advertisement_interval: cdktf.numberToTerraform(this._advertisementInterval),
      allowas_in: cdktf.numberToTerraform(this._allowasIn),
      allowas_in6: cdktf.numberToTerraform(this._allowasIn6),
      allowas_in_enable: cdktf.stringToTerraform(this._allowasInEnable),
      allowas_in_enable6: cdktf.stringToTerraform(this._allowasInEnable6),
      allowas_in_enable_evpn: cdktf.stringToTerraform(this._allowasInEnableEvpn),
      allowas_in_enable_vpnv4: cdktf.stringToTerraform(this._allowasInEnableVpnv4),
      allowas_in_enable_vpnv6: cdktf.stringToTerraform(this._allowasInEnableVpnv6),
      allowas_in_evpn: cdktf.numberToTerraform(this._allowasInEvpn),
      allowas_in_vpnv4: cdktf.numberToTerraform(this._allowasInVpnv4),
      allowas_in_vpnv6: cdktf.numberToTerraform(this._allowasInVpnv6),
      as_override: cdktf.stringToTerraform(this._asOverride),
      as_override6: cdktf.stringToTerraform(this._asOverride6),
      attribute_unchanged: cdktf.stringToTerraform(this._attributeUnchanged),
      attribute_unchanged6: cdktf.stringToTerraform(this._attributeUnchanged6),
      attribute_unchanged_vpnv4: cdktf.stringToTerraform(this._attributeUnchangedVpnv4),
      attribute_unchanged_vpnv6: cdktf.stringToTerraform(this._attributeUnchangedVpnv6),
      auth_options: cdktf.stringToTerraform(this._authOptions),
      bfd: cdktf.stringToTerraform(this._bfd),
      capability_default_originate: cdktf.stringToTerraform(this._capabilityDefaultOriginate),
      capability_default_originate6: cdktf.stringToTerraform(this._capabilityDefaultOriginate6),
      capability_dynamic: cdktf.stringToTerraform(this._capabilityDynamic),
      capability_graceful_restart: cdktf.stringToTerraform(this._capabilityGracefulRestart),
      capability_graceful_restart6: cdktf.stringToTerraform(this._capabilityGracefulRestart6),
      capability_graceful_restart_evpn: cdktf.stringToTerraform(this._capabilityGracefulRestartEvpn),
      capability_graceful_restart_vpnv4: cdktf.stringToTerraform(this._capabilityGracefulRestartVpnv4),
      capability_graceful_restart_vpnv6: cdktf.stringToTerraform(this._capabilityGracefulRestartVpnv6),
      capability_orf: cdktf.stringToTerraform(this._capabilityOrf),
      capability_orf6: cdktf.stringToTerraform(this._capabilityOrf6),
      capability_route_refresh: cdktf.stringToTerraform(this._capabilityRouteRefresh),
      connect_timer: cdktf.numberToTerraform(this._connectTimer),
      default_originate_routemap: cdktf.stringToTerraform(this._defaultOriginateRoutemap),
      default_originate_routemap6: cdktf.stringToTerraform(this._defaultOriginateRoutemap6),
      description: cdktf.stringToTerraform(this._description),
      distribute_list_in: cdktf.stringToTerraform(this._distributeListIn),
      distribute_list_in6: cdktf.stringToTerraform(this._distributeListIn6),
      distribute_list_in_vpnv4: cdktf.stringToTerraform(this._distributeListInVpnv4),
      distribute_list_in_vpnv6: cdktf.stringToTerraform(this._distributeListInVpnv6),
      distribute_list_out: cdktf.stringToTerraform(this._distributeListOut),
      distribute_list_out6: cdktf.stringToTerraform(this._distributeListOut6),
      distribute_list_out_vpnv4: cdktf.stringToTerraform(this._distributeListOutVpnv4),
      distribute_list_out_vpnv6: cdktf.stringToTerraform(this._distributeListOutVpnv6),
      dont_capability_negotiate: cdktf.stringToTerraform(this._dontCapabilityNegotiate),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      ebgp_enforce_multihop: cdktf.stringToTerraform(this._ebgpEnforceMultihop),
      ebgp_multihop_ttl: cdktf.numberToTerraform(this._ebgpMultihopTtl),
      filter_list_in: cdktf.stringToTerraform(this._filterListIn),
      filter_list_in6: cdktf.stringToTerraform(this._filterListIn6),
      filter_list_in_vpnv4: cdktf.stringToTerraform(this._filterListInVpnv4),
      filter_list_in_vpnv6: cdktf.stringToTerraform(this._filterListInVpnv6),
      filter_list_out: cdktf.stringToTerraform(this._filterListOut),
      filter_list_out6: cdktf.stringToTerraform(this._filterListOut6),
      filter_list_out_vpnv4: cdktf.stringToTerraform(this._filterListOutVpnv4),
      filter_list_out_vpnv6: cdktf.stringToTerraform(this._filterListOutVpnv6),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      holdtime_timer: cdktf.numberToTerraform(this._holdtimeTimer),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip: cdktf.stringToTerraform(this._ip),
      keep_alive_timer: cdktf.numberToTerraform(this._keepAliveTimer),
      link_down_failover: cdktf.stringToTerraform(this._linkDownFailover),
      local_as: cdktf.numberToTerraform(this._localAs),
      local_as_no_prepend: cdktf.stringToTerraform(this._localAsNoPrepend),
      local_as_replace_as: cdktf.stringToTerraform(this._localAsReplaceAs),
      maximum_prefix: cdktf.numberToTerraform(this._maximumPrefix),
      maximum_prefix6: cdktf.numberToTerraform(this._maximumPrefix6),
      maximum_prefix_evpn: cdktf.numberToTerraform(this._maximumPrefixEvpn),
      maximum_prefix_threshold: cdktf.numberToTerraform(this._maximumPrefixThreshold),
      maximum_prefix_threshold6: cdktf.numberToTerraform(this._maximumPrefixThreshold6),
      maximum_prefix_threshold_evpn: cdktf.numberToTerraform(this._maximumPrefixThresholdEvpn),
      maximum_prefix_threshold_vpnv4: cdktf.numberToTerraform(this._maximumPrefixThresholdVpnv4),
      maximum_prefix_threshold_vpnv6: cdktf.numberToTerraform(this._maximumPrefixThresholdVpnv6),
      maximum_prefix_vpnv4: cdktf.numberToTerraform(this._maximumPrefixVpnv4),
      maximum_prefix_vpnv6: cdktf.numberToTerraform(this._maximumPrefixVpnv6),
      maximum_prefix_warning_only: cdktf.stringToTerraform(this._maximumPrefixWarningOnly),
      maximum_prefix_warning_only6: cdktf.stringToTerraform(this._maximumPrefixWarningOnly6),
      maximum_prefix_warning_only_evpn: cdktf.stringToTerraform(this._maximumPrefixWarningOnlyEvpn),
      maximum_prefix_warning_only_vpnv4: cdktf.stringToTerraform(this._maximumPrefixWarningOnlyVpnv4),
      maximum_prefix_warning_only_vpnv6: cdktf.stringToTerraform(this._maximumPrefixWarningOnlyVpnv6),
      next_hop_self: cdktf.stringToTerraform(this._nextHopSelf),
      next_hop_self6: cdktf.stringToTerraform(this._nextHopSelf6),
      next_hop_self_rr: cdktf.stringToTerraform(this._nextHopSelfRr),
      next_hop_self_rr6: cdktf.stringToTerraform(this._nextHopSelfRr6),
      next_hop_self_vpnv4: cdktf.stringToTerraform(this._nextHopSelfVpnv4),
      next_hop_self_vpnv6: cdktf.stringToTerraform(this._nextHopSelfVpnv6),
      override_capability: cdktf.stringToTerraform(this._overrideCapability),
      passive: cdktf.stringToTerraform(this._passive),
      password: cdktf.stringToTerraform(this._password),
      prefix_list_in: cdktf.stringToTerraform(this._prefixListIn),
      prefix_list_in6: cdktf.stringToTerraform(this._prefixListIn6),
      prefix_list_in_vpnv4: cdktf.stringToTerraform(this._prefixListInVpnv4),
      prefix_list_in_vpnv6: cdktf.stringToTerraform(this._prefixListInVpnv6),
      prefix_list_out: cdktf.stringToTerraform(this._prefixListOut),
      prefix_list_out6: cdktf.stringToTerraform(this._prefixListOut6),
      prefix_list_out_vpnv4: cdktf.stringToTerraform(this._prefixListOutVpnv4),
      prefix_list_out_vpnv6: cdktf.stringToTerraform(this._prefixListOutVpnv6),
      remote_as: cdktf.numberToTerraform(this._remoteAs),
      remove_private_as: cdktf.stringToTerraform(this._removePrivateAs),
      remove_private_as6: cdktf.stringToTerraform(this._removePrivateAs6),
      remove_private_as_evpn: cdktf.stringToTerraform(this._removePrivateAsEvpn),
      remove_private_as_vpnv4: cdktf.stringToTerraform(this._removePrivateAsVpnv4),
      remove_private_as_vpnv6: cdktf.stringToTerraform(this._removePrivateAsVpnv6),
      restart_time: cdktf.numberToTerraform(this._restartTime),
      retain_stale_time: cdktf.numberToTerraform(this._retainStaleTime),
      route_map_in: cdktf.stringToTerraform(this._routeMapIn),
      route_map_in6: cdktf.stringToTerraform(this._routeMapIn6),
      route_map_in_evpn: cdktf.stringToTerraform(this._routeMapInEvpn),
      route_map_in_vpnv4: cdktf.stringToTerraform(this._routeMapInVpnv4),
      route_map_in_vpnv6: cdktf.stringToTerraform(this._routeMapInVpnv6),
      route_map_out: cdktf.stringToTerraform(this._routeMapOut),
      route_map_out6: cdktf.stringToTerraform(this._routeMapOut6),
      route_map_out6_preferable: cdktf.stringToTerraform(this._routeMapOut6Preferable),
      route_map_out_evpn: cdktf.stringToTerraform(this._routeMapOutEvpn),
      route_map_out_preferable: cdktf.stringToTerraform(this._routeMapOutPreferable),
      route_map_out_vpnv4: cdktf.stringToTerraform(this._routeMapOutVpnv4),
      route_map_out_vpnv4_preferable: cdktf.stringToTerraform(this._routeMapOutVpnv4Preferable),
      route_map_out_vpnv6: cdktf.stringToTerraform(this._routeMapOutVpnv6),
      route_map_out_vpnv6_preferable: cdktf.stringToTerraform(this._routeMapOutVpnv6Preferable),
      route_reflector_client: cdktf.stringToTerraform(this._routeReflectorClient),
      route_reflector_client6: cdktf.stringToTerraform(this._routeReflectorClient6),
      route_reflector_client_evpn: cdktf.stringToTerraform(this._routeReflectorClientEvpn),
      route_reflector_client_vpnv4: cdktf.stringToTerraform(this._routeReflectorClientVpnv4),
      route_reflector_client_vpnv6: cdktf.stringToTerraform(this._routeReflectorClientVpnv6),
      route_server_client: cdktf.stringToTerraform(this._routeServerClient),
      route_server_client6: cdktf.stringToTerraform(this._routeServerClient6),
      route_server_client_evpn: cdktf.stringToTerraform(this._routeServerClientEvpn),
      route_server_client_vpnv4: cdktf.stringToTerraform(this._routeServerClientVpnv4),
      route_server_client_vpnv6: cdktf.stringToTerraform(this._routeServerClientVpnv6),
      rr_attr_allow_change: cdktf.stringToTerraform(this._rrAttrAllowChange),
      rr_attr_allow_change6: cdktf.stringToTerraform(this._rrAttrAllowChange6),
      rr_attr_allow_change_evpn: cdktf.stringToTerraform(this._rrAttrAllowChangeEvpn),
      rr_attr_allow_change_vpnv4: cdktf.stringToTerraform(this._rrAttrAllowChangeVpnv4),
      rr_attr_allow_change_vpnv6: cdktf.stringToTerraform(this._rrAttrAllowChangeVpnv6),
      send_community: cdktf.stringToTerraform(this._sendCommunity),
      send_community6: cdktf.stringToTerraform(this._sendCommunity6),
      send_community_evpn: cdktf.stringToTerraform(this._sendCommunityEvpn),
      send_community_vpnv4: cdktf.stringToTerraform(this._sendCommunityVpnv4),
      send_community_vpnv6: cdktf.stringToTerraform(this._sendCommunityVpnv6),
      shutdown: cdktf.stringToTerraform(this._shutdown),
      soft_reconfiguration: cdktf.stringToTerraform(this._softReconfiguration),
      soft_reconfiguration6: cdktf.stringToTerraform(this._softReconfiguration6),
      soft_reconfiguration_evpn: cdktf.stringToTerraform(this._softReconfigurationEvpn),
      soft_reconfiguration_vpnv4: cdktf.stringToTerraform(this._softReconfigurationVpnv4),
      soft_reconfiguration_vpnv6: cdktf.stringToTerraform(this._softReconfigurationVpnv6),
      stale_route: cdktf.stringToTerraform(this._staleRoute),
      strict_capability_match: cdktf.stringToTerraform(this._strictCapabilityMatch),
      unsuppress_map: cdktf.stringToTerraform(this._unsuppressMap),
      unsuppress_map6: cdktf.stringToTerraform(this._unsuppressMap6),
      update_source: cdktf.stringToTerraform(this._updateSource),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      weight: cdktf.numberToTerraform(this._weight),
      conditional_advertise: cdktf.listMapper(routerbgpNeighborConditionalAdvertiseToTerraform, true)(this._conditionalAdvertise.internalValue),
      conditional_advertise6: cdktf.listMapper(routerbgpNeighborConditionalAdvertise6ToTerraform, true)(this._conditionalAdvertise6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate: {
        value: cdktf.stringToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate6: {
        value: cdktf.stringToHclTerraform(this._activate6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate_evpn: {
        value: cdktf.stringToHclTerraform(this._activateEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate_vpnv4: {
        value: cdktf.stringToHclTerraform(this._activateVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate_vpnv6: {
        value: cdktf.stringToHclTerraform(this._activateVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_path: {
        value: cdktf.stringToHclTerraform(this._additionalPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_path6: {
        value: cdktf.stringToHclTerraform(this._additionalPath6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_path_vpnv4: {
        value: cdktf.stringToHclTerraform(this._additionalPathVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_path_vpnv6: {
        value: cdktf.stringToHclTerraform(this._additionalPathVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adv_additional_path: {
        value: cdktf.numberToHclTerraform(this._advAdditionalPath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adv_additional_path6: {
        value: cdktf.numberToHclTerraform(this._advAdditionalPath6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adv_additional_path_vpnv4: {
        value: cdktf.numberToHclTerraform(this._advAdditionalPathVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adv_additional_path_vpnv6: {
        value: cdktf.numberToHclTerraform(this._advAdditionalPathVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advertisement_interval: {
        value: cdktf.numberToHclTerraform(this._advertisementInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in: {
        value: cdktf.numberToHclTerraform(this._allowasIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in6: {
        value: cdktf.numberToHclTerraform(this._allowasIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in_enable: {
        value: cdktf.stringToHclTerraform(this._allowasInEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowas_in_enable6: {
        value: cdktf.stringToHclTerraform(this._allowasInEnable6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowas_in_enable_evpn: {
        value: cdktf.stringToHclTerraform(this._allowasInEnableEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowas_in_enable_vpnv4: {
        value: cdktf.stringToHclTerraform(this._allowasInEnableVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowas_in_enable_vpnv6: {
        value: cdktf.stringToHclTerraform(this._allowasInEnableVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowas_in_evpn: {
        value: cdktf.numberToHclTerraform(this._allowasInEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in_vpnv4: {
        value: cdktf.numberToHclTerraform(this._allowasInVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in_vpnv6: {
        value: cdktf.numberToHclTerraform(this._allowasInVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_override: {
        value: cdktf.stringToHclTerraform(this._asOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_override6: {
        value: cdktf.stringToHclTerraform(this._asOverride6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_unchanged: {
        value: cdktf.stringToHclTerraform(this._attributeUnchanged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_unchanged6: {
        value: cdktf.stringToHclTerraform(this._attributeUnchanged6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_unchanged_vpnv4: {
        value: cdktf.stringToHclTerraform(this._attributeUnchangedVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_unchanged_vpnv6: {
        value: cdktf.stringToHclTerraform(this._attributeUnchangedVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_options: {
        value: cdktf.stringToHclTerraform(this._authOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_default_originate: {
        value: cdktf.stringToHclTerraform(this._capabilityDefaultOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_default_originate6: {
        value: cdktf.stringToHclTerraform(this._capabilityDefaultOriginate6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_dynamic: {
        value: cdktf.stringToHclTerraform(this._capabilityDynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_graceful_restart: {
        value: cdktf.stringToHclTerraform(this._capabilityGracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_graceful_restart6: {
        value: cdktf.stringToHclTerraform(this._capabilityGracefulRestart6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_graceful_restart_evpn: {
        value: cdktf.stringToHclTerraform(this._capabilityGracefulRestartEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_graceful_restart_vpnv4: {
        value: cdktf.stringToHclTerraform(this._capabilityGracefulRestartVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_graceful_restart_vpnv6: {
        value: cdktf.stringToHclTerraform(this._capabilityGracefulRestartVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_orf: {
        value: cdktf.stringToHclTerraform(this._capabilityOrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_orf6: {
        value: cdktf.stringToHclTerraform(this._capabilityOrf6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_route_refresh: {
        value: cdktf.stringToHclTerraform(this._capabilityRouteRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_timer: {
        value: cdktf.numberToHclTerraform(this._connectTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_originate_routemap: {
        value: cdktf.stringToHclTerraform(this._defaultOriginateRoutemap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_originate_routemap6: {
        value: cdktf.stringToHclTerraform(this._defaultOriginateRoutemap6),
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
      distribute_list_in: {
        value: cdktf.stringToHclTerraform(this._distributeListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_in6: {
        value: cdktf.stringToHclTerraform(this._distributeListIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_in_vpnv4: {
        value: cdktf.stringToHclTerraform(this._distributeListInVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_in_vpnv6: {
        value: cdktf.stringToHclTerraform(this._distributeListInVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_out: {
        value: cdktf.stringToHclTerraform(this._distributeListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_out6: {
        value: cdktf.stringToHclTerraform(this._distributeListOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_out_vpnv4: {
        value: cdktf.stringToHclTerraform(this._distributeListOutVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_out_vpnv6: {
        value: cdktf.stringToHclTerraform(this._distributeListOutVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dont_capability_negotiate: {
        value: cdktf.stringToHclTerraform(this._dontCapabilityNegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebgp_enforce_multihop: {
        value: cdktf.stringToHclTerraform(this._ebgpEnforceMultihop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebgp_multihop_ttl: {
        value: cdktf.numberToHclTerraform(this._ebgpMultihopTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter_list_in: {
        value: cdktf.stringToHclTerraform(this._filterListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_in6: {
        value: cdktf.stringToHclTerraform(this._filterListIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_in_vpnv4: {
        value: cdktf.stringToHclTerraform(this._filterListInVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_in_vpnv6: {
        value: cdktf.stringToHclTerraform(this._filterListInVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_out: {
        value: cdktf.stringToHclTerraform(this._filterListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_out6: {
        value: cdktf.stringToHclTerraform(this._filterListOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_out_vpnv4: {
        value: cdktf.stringToHclTerraform(this._filterListOutVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_out_vpnv6: {
        value: cdktf.stringToHclTerraform(this._filterListOutVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holdtime_timer: {
        value: cdktf.numberToHclTerraform(this._holdtimeTimer),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_alive_timer: {
        value: cdktf.numberToHclTerraform(this._keepAliveTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_down_failover: {
        value: cdktf.stringToHclTerraform(this._linkDownFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as: {
        value: cdktf.numberToHclTerraform(this._localAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_as_no_prepend: {
        value: cdktf.stringToHclTerraform(this._localAsNoPrepend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as_replace_as: {
        value: cdktf.stringToHclTerraform(this._localAsReplaceAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_prefix: {
        value: cdktf.numberToHclTerraform(this._maximumPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix6: {
        value: cdktf.numberToHclTerraform(this._maximumPrefix6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_evpn: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_threshold: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_threshold6: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThreshold6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_threshold_evpn: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThresholdEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_threshold_vpnv4: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThresholdVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_threshold_vpnv6: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThresholdVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_vpnv4: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_vpnv6: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_warning_only: {
        value: cdktf.stringToHclTerraform(this._maximumPrefixWarningOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_prefix_warning_only6: {
        value: cdktf.stringToHclTerraform(this._maximumPrefixWarningOnly6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_prefix_warning_only_evpn: {
        value: cdktf.stringToHclTerraform(this._maximumPrefixWarningOnlyEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_prefix_warning_only_vpnv4: {
        value: cdktf.stringToHclTerraform(this._maximumPrefixWarningOnlyVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_prefix_warning_only_vpnv6: {
        value: cdktf.stringToHclTerraform(this._maximumPrefixWarningOnlyVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self: {
        value: cdktf.stringToHclTerraform(this._nextHopSelf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self6: {
        value: cdktf.stringToHclTerraform(this._nextHopSelf6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self_rr: {
        value: cdktf.stringToHclTerraform(this._nextHopSelfRr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self_rr6: {
        value: cdktf.stringToHclTerraform(this._nextHopSelfRr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self_vpnv4: {
        value: cdktf.stringToHclTerraform(this._nextHopSelfVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self_vpnv6: {
        value: cdktf.stringToHclTerraform(this._nextHopSelfVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_capability: {
        value: cdktf.stringToHclTerraform(this._overrideCapability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.stringToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in: {
        value: cdktf.stringToHclTerraform(this._prefixListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in6: {
        value: cdktf.stringToHclTerraform(this._prefixListIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in_vpnv4: {
        value: cdktf.stringToHclTerraform(this._prefixListInVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in_vpnv6: {
        value: cdktf.stringToHclTerraform(this._prefixListInVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out: {
        value: cdktf.stringToHclTerraform(this._prefixListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out6: {
        value: cdktf.stringToHclTerraform(this._prefixListOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out_vpnv4: {
        value: cdktf.stringToHclTerraform(this._prefixListOutVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out_vpnv6: {
        value: cdktf.stringToHclTerraform(this._prefixListOutVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as: {
        value: cdktf.numberToHclTerraform(this._remoteAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_private_as: {
        value: cdktf.stringToHclTerraform(this._removePrivateAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_private_as6: {
        value: cdktf.stringToHclTerraform(this._removePrivateAs6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_private_as_evpn: {
        value: cdktf.stringToHclTerraform(this._removePrivateAsEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_private_as_vpnv4: {
        value: cdktf.stringToHclTerraform(this._removePrivateAsVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_private_as_vpnv6: {
        value: cdktf.stringToHclTerraform(this._removePrivateAsVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_time: {
        value: cdktf.numberToHclTerraform(this._restartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_stale_time: {
        value: cdktf.numberToHclTerraform(this._retainStaleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_map_in: {
        value: cdktf.stringToHclTerraform(this._routeMapIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_in6: {
        value: cdktf.stringToHclTerraform(this._routeMapIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_in_evpn: {
        value: cdktf.stringToHclTerraform(this._routeMapInEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_in_vpnv4: {
        value: cdktf.stringToHclTerraform(this._routeMapInVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_in_vpnv6: {
        value: cdktf.stringToHclTerraform(this._routeMapInVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out: {
        value: cdktf.stringToHclTerraform(this._routeMapOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out6: {
        value: cdktf.stringToHclTerraform(this._routeMapOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out6_preferable: {
        value: cdktf.stringToHclTerraform(this._routeMapOut6Preferable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out_evpn: {
        value: cdktf.stringToHclTerraform(this._routeMapOutEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out_preferable: {
        value: cdktf.stringToHclTerraform(this._routeMapOutPreferable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out_vpnv4: {
        value: cdktf.stringToHclTerraform(this._routeMapOutVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out_vpnv4_preferable: {
        value: cdktf.stringToHclTerraform(this._routeMapOutVpnv4Preferable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out_vpnv6: {
        value: cdktf.stringToHclTerraform(this._routeMapOutVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out_vpnv6_preferable: {
        value: cdktf.stringToHclTerraform(this._routeMapOutVpnv6Preferable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_reflector_client: {
        value: cdktf.stringToHclTerraform(this._routeReflectorClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_reflector_client6: {
        value: cdktf.stringToHclTerraform(this._routeReflectorClient6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_reflector_client_evpn: {
        value: cdktf.stringToHclTerraform(this._routeReflectorClientEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_reflector_client_vpnv4: {
        value: cdktf.stringToHclTerraform(this._routeReflectorClientVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_reflector_client_vpnv6: {
        value: cdktf.stringToHclTerraform(this._routeReflectorClientVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_server_client: {
        value: cdktf.stringToHclTerraform(this._routeServerClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_server_client6: {
        value: cdktf.stringToHclTerraform(this._routeServerClient6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_server_client_evpn: {
        value: cdktf.stringToHclTerraform(this._routeServerClientEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_server_client_vpnv4: {
        value: cdktf.stringToHclTerraform(this._routeServerClientVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_server_client_vpnv6: {
        value: cdktf.stringToHclTerraform(this._routeServerClientVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_attr_allow_change: {
        value: cdktf.stringToHclTerraform(this._rrAttrAllowChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_attr_allow_change6: {
        value: cdktf.stringToHclTerraform(this._rrAttrAllowChange6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_attr_allow_change_evpn: {
        value: cdktf.stringToHclTerraform(this._rrAttrAllowChangeEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_attr_allow_change_vpnv4: {
        value: cdktf.stringToHclTerraform(this._rrAttrAllowChangeVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_attr_allow_change_vpnv6: {
        value: cdktf.stringToHclTerraform(this._rrAttrAllowChangeVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community: {
        value: cdktf.stringToHclTerraform(this._sendCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community6: {
        value: cdktf.stringToHclTerraform(this._sendCommunity6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community_evpn: {
        value: cdktf.stringToHclTerraform(this._sendCommunityEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community_vpnv4: {
        value: cdktf.stringToHclTerraform(this._sendCommunityVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community_vpnv6: {
        value: cdktf.stringToHclTerraform(this._sendCommunityVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.stringToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration: {
        value: cdktf.stringToHclTerraform(this._softReconfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration6: {
        value: cdktf.stringToHclTerraform(this._softReconfiguration6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration_evpn: {
        value: cdktf.stringToHclTerraform(this._softReconfigurationEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration_vpnv4: {
        value: cdktf.stringToHclTerraform(this._softReconfigurationVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration_vpnv6: {
        value: cdktf.stringToHclTerraform(this._softReconfigurationVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stale_route: {
        value: cdktf.stringToHclTerraform(this._staleRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_capability_match: {
        value: cdktf.stringToHclTerraform(this._strictCapabilityMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsuppress_map: {
        value: cdktf.stringToHclTerraform(this._unsuppressMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsuppress_map6: {
        value: cdktf.stringToHclTerraform(this._unsuppressMap6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_source: {
        value: cdktf.stringToHclTerraform(this._updateSource),
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
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conditional_advertise: {
        value: cdktf.listMapperHcl(routerbgpNeighborConditionalAdvertiseToHclTerraform, true)(this._conditionalAdvertise.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterbgpNeighborConditionalAdvertiseList",
      },
      conditional_advertise6: {
        value: cdktf.listMapperHcl(routerbgpNeighborConditionalAdvertise6ToHclTerraform, true)(this._conditionalAdvertise6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterbgpNeighborConditionalAdvertise6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
