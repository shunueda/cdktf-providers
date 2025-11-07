// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UNENCRYPTED (cleartext) community string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#communities SnmpServer#communities}
  */
  readonly communities?: SnmpServerCommunities[] | cdktf.IResolvable;
  /**
  * Text for mib Object sysContact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#contact SnmpServer#contact}
  */
  readonly contact?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#delete_mode SnmpServer#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#device SnmpServer#device}
  */
  readonly device?: string;
  /**
  * Name of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#groups SnmpServer#groups}
  */
  readonly groups?: SnmpServerGroups[] | cdktf.IResolvable;
  /**
  * Text for mib Object sysLocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#location SnmpServer#location}
  */
  readonly location?: string;
  /**
  * Assign an interface for the source address of all traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#trap_source SnmpServer#trap_source}
  */
  readonly trapSource?: string;
  /**
  * Enable BFD traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_bfd SnmpServer#traps_bfd}
  */
  readonly trapsBfd?: boolean | cdktf.IResolvable;
  /**
  * Enable CISCO-BGP4-MIB v2 traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_bgp_cbgp_two_enable SnmpServer#traps_bgp_cbgp_two_enable}
  */
  readonly trapsBgpCbgpTwoEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable CISCO-BGP4-MIB v2 up/down traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_bgp_cbgp_two_updown SnmpServer#traps_bgp_cbgp_two_updown}
  */
  readonly trapsBgpCbgpTwoUpdown?: boolean | cdktf.IResolvable;
  /**
  * Enable CISCO-BGP4-MIB v2 up/down traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_bgp_enable_cisco_bgp4_mib SnmpServer#traps_bgp_enable_cisco_bgp4_mib}
  */
  readonly trapsBgpEnableCiscoBgp4Mib?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP4-MIB and CISCO-BGP4-MIB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_bgp_enable_updown SnmpServer#traps_bgp_enable_updown}
  */
  readonly trapsBgpEnableUpdown?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Trap for Bridge MIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_bridgemib SnmpServer#traps_bridgemib}
  */
  readonly trapsBridgemib?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP config traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_config SnmpServer#traps_config}
  */
  readonly trapsConfig?: boolean | cdktf.IResolvable;
  /**
  * Enable CISCO-CONFIG-COPY-MIB ccCopyCompletion traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_copy_complete SnmpServer#traps_copy_complete}
  */
  readonly trapsCopyComplete?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP entity traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_entity SnmpServer#traps_entity}
  */
  readonly trapsEntity?: boolean | cdktf.IResolvable;
  /**
  * Enable all CISCO-ENTITY-REDUNDANCY-MIB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_entity_redundancy_all SnmpServer#traps_entity_redundancy_all}
  */
  readonly trapsEntityRedundancyAll?: boolean | cdktf.IResolvable;
  /**
  * Enable entity oper status enable notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_entity_state_operstatus SnmpServer#traps_entity_state_operstatus}
  */
  readonly trapsEntityStateOperstatus?: boolean | cdktf.IResolvable;
  /**
  * Enable all OAM event traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_ethernet_oam_events SnmpServer#traps_ethernet_oam_events}
  */
  readonly trapsEthernetOamEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP entity FRU control traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_fru_ctrl SnmpServer#traps_fru_ctrl}
  */
  readonly trapsFruCtrl?: boolean | cdktf.IResolvable;
  /**
  * isisAdjacencyChange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_adjacency_change SnmpServer#traps_isis_adjacency_change}
  */
  readonly trapsIsisAdjacencyChange?: boolean | cdktf.IResolvable;
  /**
  * Enable all IS-IS traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_all SnmpServer#traps_isis_all}
  */
  readonly trapsIsisAll?: boolean | cdktf.IResolvable;
  /**
  * isisAreaMismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_area_mismatch SnmpServer#traps_isis_area_mismatch}
  */
  readonly trapsIsisAreaMismatch?: boolean | cdktf.IResolvable;
  /**
  * isisAttemptToExceedMaxSequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_attempt_to_exceed_max_sequence SnmpServer#traps_isis_attempt_to_exceed_max_sequence}
  */
  readonly trapsIsisAttemptToExceedMaxSequence?: boolean | cdktf.IResolvable;
  /**
  * isisAuthenticationFailure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_authentication_failure SnmpServer#traps_isis_authentication_failure}
  */
  readonly trapsIsisAuthenticationFailure?: boolean | cdktf.IResolvable;
  /**
  * isisAuthenticationTypeFailure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_authentication_type_failure SnmpServer#traps_isis_authentication_type_failure}
  */
  readonly trapsIsisAuthenticationTypeFailure?: boolean | cdktf.IResolvable;
  /**
  * isisCorruptedLSPDetected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_corrupted_lsp_detected SnmpServer#traps_isis_corrupted_lsp_detected}
  */
  readonly trapsIsisCorruptedLspDetected?: boolean | cdktf.IResolvable;
  /**
  * isisDatabaseOverload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_database_overload SnmpServer#traps_isis_database_overload}
  */
  readonly trapsIsisDatabaseOverload?: boolean | cdktf.IResolvable;
  /**
  * isisIDLenMismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_id_len_mismatch SnmpServer#traps_isis_id_len_mismatch}
  */
  readonly trapsIsisIdLenMismatch?: boolean | cdktf.IResolvable;
  /**
  * isisLSPErrorDetected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_lsp_error_detected SnmpServer#traps_isis_lsp_error_detected}
  */
  readonly trapsIsisLspErrorDetected?: boolean | cdktf.IResolvable;
  /**
  * isisLSPTooLargeToPropagate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_lsp_too_large_to_propagate SnmpServer#traps_isis_lsp_too_large_to_propagate}
  */
  readonly trapsIsisLspTooLargeToPropagate?: boolean | cdktf.IResolvable;
  /**
  * isisManualAddressDrops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_manual_address_drops SnmpServer#traps_isis_manual_address_drops}
  */
  readonly trapsIsisManualAddressDrops?: boolean | cdktf.IResolvable;
  /**
  * isisMaxAreaAddressesMismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_max_area_addresses_mismatch SnmpServer#traps_isis_max_area_addresses_mismatch}
  */
  readonly trapsIsisMaxAreaAddressesMismatch?: boolean | cdktf.IResolvable;
  /**
  * isisOrigLSPBuffSizeMismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_orig_lsp_buff_size_mismatch SnmpServer#traps_isis_orig_lsp_buff_size_mismatch}
  */
  readonly trapsIsisOrigLspBuffSizeMismatch?: boolean | cdktf.IResolvable;
  /**
  * isisOwnLSPPurge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_own_lsp_purge SnmpServer#traps_isis_own_lsp_purge}
  */
  readonly trapsIsisOwnLspPurge?: boolean | cdktf.IResolvable;
  /**
  * isisProtocolsSupportedMismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_protocols_supported_mismatch SnmpServer#traps_isis_protocols_supported_mismatch}
  */
  readonly trapsIsisProtocolsSupportedMismatch?: boolean | cdktf.IResolvable;
  /**
  * isisRejectedAdjacency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_rejected_adjacency SnmpServer#traps_isis_rejected_adjacency}
  */
  readonly trapsIsisRejectedAdjacency?: boolean | cdktf.IResolvable;
  /**
  * isisSequenceNumberSkip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_sequence_number_skip SnmpServer#traps_isis_sequence_number_skip}
  */
  readonly trapsIsisSequenceNumberSkip?: boolean | cdktf.IResolvable;
  /**
  * isisVersionSkew
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_isis_version_skew SnmpServer#traps_isis_version_skew}
  */
  readonly trapsIsisVersionSkew?: boolean | cdktf.IResolvable;
  /**
  * Enable all L2VPN traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_l2vpn_all SnmpServer#traps_l2vpn_all}
  */
  readonly trapsL2VpnAll?: boolean | cdktf.IResolvable;
  /**
  * Enable VC down traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_l2vpn_vc_down SnmpServer#traps_l2vpn_vc_down}
  */
  readonly trapsL2VpnVcDown?: boolean | cdktf.IResolvable;
  /**
  * Enable VC up traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_l2vpn_vc_up SnmpServer#traps_l2vpn_vc_up}
  */
  readonly trapsL2VpnVcUp?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP Cisco Ntp traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_ntp SnmpServer#traps_ntp}
  */
  readonly trapsNtp?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP entity power traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_power SnmpServer#traps_power}
  */
  readonly trapsPower?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP RF-MIB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_rf SnmpServer#traps_rf}
  */
  readonly trapsRf?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP entity sensor traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_sensor SnmpServer#traps_sensor}
  */
  readonly trapsSensor?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMPv2-MIB linDownp traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_snmp_linkdown SnmpServer#traps_snmp_linkdown}
  */
  readonly trapsSnmpLinkdown?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMPv2-MIB linkUp traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_snmp_linkup SnmpServer#traps_snmp_linkup}
  */
  readonly trapsSnmpLinkup?: boolean | cdktf.IResolvable;
  /**
  * Enable SNMP SYSTEMMIB-MIB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#traps_system SnmpServer#traps_system}
  */
  readonly trapsSystem?: boolean | cdktf.IResolvable;
  /**
  * Name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#users SnmpServer#users}
  */
  readonly users?: SnmpServerUsers[] | cdktf.IResolvable;
}
export interface SnmpServerCommunities {
  /**
  * The UNENCRYPTED (cleartext) community string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#community SnmpServer#community}
  */
  readonly community: string;
  /**
  * Type of Access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#ipv4 SnmpServer#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Type of Access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#ipv6 SnmpServer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Read-only community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#ro SnmpServer#ro}
  */
  readonly ro?: boolean | cdktf.IResolvable;
  /**
  * Read-write community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#rw SnmpServer#rw}
  */
  readonly rw?: boolean | cdktf.IResolvable;
  /**
  * SDR Owner permissions for MIB Objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#sdrowner SnmpServer#sdrowner}
  */
  readonly sdrowner?: boolean | cdktf.IResolvable;
  /**
  * System Owner permissions for MIB objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#systemowner SnmpServer#systemowner}
  */
  readonly systemowner?: boolean | cdktf.IResolvable;
  /**
  * Restrict this community to a named view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#view SnmpServer#view}
  */
  readonly view?: string;
}

export function snmpServerCommunitiesToTerraform(struct?: SnmpServerCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    ro: cdktf.booleanToTerraform(struct!.ro),
    rw: cdktf.booleanToTerraform(struct!.rw),
    sdrowner: cdktf.booleanToTerraform(struct!.sdrowner),
    systemowner: cdktf.booleanToTerraform(struct!.systemowner),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function snmpServerCommunitiesToHclTerraform(struct?: SnmpServerCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ro: {
      value: cdktf.booleanToHclTerraform(struct!.ro),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rw: {
      value: cdktf.booleanToHclTerraform(struct!.rw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sdrowner: {
      value: cdktf.booleanToHclTerraform(struct!.sdrowner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    systemowner: {
      value: cdktf.booleanToHclTerraform(struct!.systemowner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerCommunities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ro !== undefined) {
      hasAnyValues = true;
      internalValueResult.ro = this._ro;
    }
    if (this._rw !== undefined) {
      hasAnyValues = true;
      internalValueResult.rw = this._rw;
    }
    if (this._sdrowner !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdrowner = this._sdrowner;
    }
    if (this._systemowner !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemowner = this._systemowner;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerCommunities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._ro = undefined;
      this._rw = undefined;
      this._sdrowner = undefined;
      this._systemowner = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._ro = value.ro;
      this._rw = value.rw;
      this._sdrowner = value.sdrowner;
      this._systemowner = value.systemowner;
      this._view = value.view;
    }
  }

  // community - computed: false, optional: false, required: true
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ro - computed: false, optional: true, required: false
  private _ro?: boolean | cdktf.IResolvable; 
  public get ro() {
    return this.getBooleanAttribute('ro');
  }
  public set ro(value: boolean | cdktf.IResolvable) {
    this._ro = value;
  }
  public resetRo() {
    this._ro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roInput() {
    return this._ro;
  }

  // rw - computed: false, optional: true, required: false
  private _rw?: boolean | cdktf.IResolvable; 
  public get rw() {
    return this.getBooleanAttribute('rw');
  }
  public set rw(value: boolean | cdktf.IResolvable) {
    this._rw = value;
  }
  public resetRw() {
    this._rw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwInput() {
    return this._rw;
  }

  // sdrowner - computed: false, optional: true, required: false
  private _sdrowner?: boolean | cdktf.IResolvable; 
  public get sdrowner() {
    return this.getBooleanAttribute('sdrowner');
  }
  public set sdrowner(value: boolean | cdktf.IResolvable) {
    this._sdrowner = value;
  }
  public resetSdrowner() {
    this._sdrowner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrownerInput() {
    return this._sdrowner;
  }

  // systemowner - computed: false, optional: true, required: false
  private _systemowner?: boolean | cdktf.IResolvable; 
  public get systemowner() {
    return this.getBooleanAttribute('systemowner');
  }
  public set systemowner(value: boolean | cdktf.IResolvable) {
    this._systemowner = value;
  }
  public resetSystemowner() {
    this._systemowner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemownerInput() {
    return this._systemowner;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class SnmpServerCommunitiesList extends cdktf.ComplexList {
  public internalValue? : SnmpServerCommunities[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerCommunitiesOutputReference {
    return new SnmpServerCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerGroups {
  /**
  * Name of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#group_name SnmpServer#group_name}
  */
  readonly groupName: string;
  /**
  * Attach a SNMP context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_context SnmpServer#v3_context}
  */
  readonly v3Context?: string;
  /**
  * Type of Access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_ipv4 SnmpServer#v3_ipv4}
  */
  readonly v3Ipv4?: string;
  /**
  * Type of Access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_ipv6 SnmpServer#v3_ipv6}
  */
  readonly v3Ipv6?: string;
  /**
  * specify a notify view for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_notify SnmpServer#v3_notify}
  */
  readonly v3Notify?: string;
  /**
  * group using authPriv Security Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_priv SnmpServer#v3_priv}
  */
  readonly v3Priv?: boolean | cdktf.IResolvable;
  /**
  * specify a read view for this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_read SnmpServer#v3_read}
  */
  readonly v3Read?: string;
  /**
  * specify a write view for this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_write SnmpServer#v3_write}
  */
  readonly v3Write?: string;
}

export function snmpServerGroupsToTerraform(struct?: SnmpServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    v3_context: cdktf.stringToTerraform(struct!.v3Context),
    v3_ipv4: cdktf.stringToTerraform(struct!.v3Ipv4),
    v3_ipv6: cdktf.stringToTerraform(struct!.v3Ipv6),
    v3_notify: cdktf.stringToTerraform(struct!.v3Notify),
    v3_priv: cdktf.booleanToTerraform(struct!.v3Priv),
    v3_read: cdktf.stringToTerraform(struct!.v3Read),
    v3_write: cdktf.stringToTerraform(struct!.v3Write),
  }
}


export function snmpServerGroupsToHclTerraform(struct?: SnmpServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_context: {
      value: cdktf.stringToHclTerraform(struct!.v3Context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.v3Ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.v3Ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_notify: {
      value: cdktf.stringToHclTerraform(struct!.v3Notify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_priv: {
      value: cdktf.booleanToHclTerraform(struct!.v3Priv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v3_read: {
      value: cdktf.stringToHclTerraform(struct!.v3Read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_write: {
      value: cdktf.stringToHclTerraform(struct!.v3Write),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._v3Context !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Context = this._v3Context;
    }
    if (this._v3Ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Ipv4 = this._v3Ipv4;
    }
    if (this._v3Ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Ipv6 = this._v3Ipv6;
    }
    if (this._v3Notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Notify = this._v3Notify;
    }
    if (this._v3Priv !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Priv = this._v3Priv;
    }
    if (this._v3Read !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Read = this._v3Read;
    }
    if (this._v3Write !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Write = this._v3Write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._v3Context = undefined;
      this._v3Ipv4 = undefined;
      this._v3Ipv6 = undefined;
      this._v3Notify = undefined;
      this._v3Priv = undefined;
      this._v3Read = undefined;
      this._v3Write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._v3Context = value.v3Context;
      this._v3Ipv4 = value.v3Ipv4;
      this._v3Ipv6 = value.v3Ipv6;
      this._v3Notify = value.v3Notify;
      this._v3Priv = value.v3Priv;
      this._v3Read = value.v3Read;
      this._v3Write = value.v3Write;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // v3_context - computed: false, optional: true, required: false
  private _v3Context?: string; 
  public get v3Context() {
    return this.getStringAttribute('v3_context');
  }
  public set v3Context(value: string) {
    this._v3Context = value;
  }
  public resetV3Context() {
    this._v3Context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3ContextInput() {
    return this._v3Context;
  }

  // v3_ipv4 - computed: false, optional: true, required: false
  private _v3Ipv4?: string; 
  public get v3Ipv4() {
    return this.getStringAttribute('v3_ipv4');
  }
  public set v3Ipv4(value: string) {
    this._v3Ipv4 = value;
  }
  public resetV3Ipv4() {
    this._v3Ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3Ipv4Input() {
    return this._v3Ipv4;
  }

  // v3_ipv6 - computed: false, optional: true, required: false
  private _v3Ipv6?: string; 
  public get v3Ipv6() {
    return this.getStringAttribute('v3_ipv6');
  }
  public set v3Ipv6(value: string) {
    this._v3Ipv6 = value;
  }
  public resetV3Ipv6() {
    this._v3Ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3Ipv6Input() {
    return this._v3Ipv6;
  }

  // v3_notify - computed: false, optional: true, required: false
  private _v3Notify?: string; 
  public get v3Notify() {
    return this.getStringAttribute('v3_notify');
  }
  public set v3Notify(value: string) {
    this._v3Notify = value;
  }
  public resetV3Notify() {
    this._v3Notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3NotifyInput() {
    return this._v3Notify;
  }

  // v3_priv - computed: false, optional: true, required: false
  private _v3Priv?: boolean | cdktf.IResolvable; 
  public get v3Priv() {
    return this.getBooleanAttribute('v3_priv');
  }
  public set v3Priv(value: boolean | cdktf.IResolvable) {
    this._v3Priv = value;
  }
  public resetV3Priv() {
    this._v3Priv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3PrivInput() {
    return this._v3Priv;
  }

  // v3_read - computed: false, optional: true, required: false
  private _v3Read?: string; 
  public get v3Read() {
    return this.getStringAttribute('v3_read');
  }
  public set v3Read(value: string) {
    this._v3Read = value;
  }
  public resetV3Read() {
    this._v3Read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3ReadInput() {
    return this._v3Read;
  }

  // v3_write - computed: false, optional: true, required: false
  private _v3Write?: string; 
  public get v3Write() {
    return this.getStringAttribute('v3_write');
  }
  public set v3Write(value: string) {
    this._v3Write = value;
  }
  public resetV3Write() {
    this._v3Write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3WriteInput() {
    return this._v3Write;
  }
}

export class SnmpServerGroupsList extends cdktf.ComplexList {
  public internalValue? : SnmpServerGroups[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerGroupsOutputReference {
    return new SnmpServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerUsers {
  /**
  * Group to which the user belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#group_name SnmpServer#group_name}
  */
  readonly groupName: string;
  /**
  * Name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#user_name SnmpServer#user_name}
  */
  readonly userName: string;
  /**
  * Specifies an aes-128 ENCRYPTED authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_auth_md5_encryption_aes SnmpServer#v3_auth_md5_encryption_aes}
  */
  readonly v3AuthMd5EncryptionAes?: string;
  /**
  * Specifies an default ENCRYPTED authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_auth_md5_encryption_default SnmpServer#v3_auth_md5_encryption_default}
  */
  readonly v3AuthMd5EncryptionDefault?: string;
  /**
  * Specifies an aes-128 ENCRYPTED authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_auth_sha_encryption_aes SnmpServer#v3_auth_sha_encryption_aes}
  */
  readonly v3AuthShaEncryptionAes?: string;
  /**
  * Specifies an default ENCRYPTED authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_auth_sha_encryption_default SnmpServer#v3_auth_sha_encryption_default}
  */
  readonly v3AuthShaEncryptionDefault?: string;
  /**
  * Type of Access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_ipv4 SnmpServer#v3_ipv4}
  */
  readonly v3Ipv4?: string;
  /**
  * Specifies an aes-128 ENCRYPTED authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_priv_aes_aes_128_encryption_aes SnmpServer#v3_priv_aes_aes_128_encryption_aes}
  */
  readonly v3PrivAesAes128EncryptionAes?: string;
  /**
  * Specifies an default ENCRYPTED authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_priv_aes_aes_128_encryption_default SnmpServer#v3_priv_aes_aes_128_encryption_default}
  */
  readonly v3PrivAesAes128EncryptionDefault?: string;
  /**
  * System Owner permissions for MIB objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#v3_systemowner SnmpServer#v3_systemowner}
  */
  readonly v3Systemowner?: boolean | cdktf.IResolvable;
}

export function snmpServerUsersToTerraform(struct?: SnmpServerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    user_name: cdktf.stringToTerraform(struct!.userName),
    v3_auth_md5_encryption_aes: cdktf.stringToTerraform(struct!.v3AuthMd5EncryptionAes),
    v3_auth_md5_encryption_default: cdktf.stringToTerraform(struct!.v3AuthMd5EncryptionDefault),
    v3_auth_sha_encryption_aes: cdktf.stringToTerraform(struct!.v3AuthShaEncryptionAes),
    v3_auth_sha_encryption_default: cdktf.stringToTerraform(struct!.v3AuthShaEncryptionDefault),
    v3_ipv4: cdktf.stringToTerraform(struct!.v3Ipv4),
    v3_priv_aes_aes_128_encryption_aes: cdktf.stringToTerraform(struct!.v3PrivAesAes128EncryptionAes),
    v3_priv_aes_aes_128_encryption_default: cdktf.stringToTerraform(struct!.v3PrivAesAes128EncryptionDefault),
    v3_systemowner: cdktf.booleanToTerraform(struct!.v3Systemowner),
  }
}


export function snmpServerUsersToHclTerraform(struct?: SnmpServerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_md5_encryption_aes: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthMd5EncryptionAes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_md5_encryption_default: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthMd5EncryptionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_sha_encryption_aes: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthShaEncryptionAes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_auth_sha_encryption_default: {
      value: cdktf.stringToHclTerraform(struct!.v3AuthShaEncryptionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.v3Ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_priv_aes_aes_128_encryption_aes: {
      value: cdktf.stringToHclTerraform(struct!.v3PrivAesAes128EncryptionAes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_priv_aes_aes_128_encryption_default: {
      value: cdktf.stringToHclTerraform(struct!.v3PrivAesAes128EncryptionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v3_systemowner: {
      value: cdktf.booleanToHclTerraform(struct!.v3Systemowner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._v3AuthMd5EncryptionAes !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthMd5EncryptionAes = this._v3AuthMd5EncryptionAes;
    }
    if (this._v3AuthMd5EncryptionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthMd5EncryptionDefault = this._v3AuthMd5EncryptionDefault;
    }
    if (this._v3AuthShaEncryptionAes !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthShaEncryptionAes = this._v3AuthShaEncryptionAes;
    }
    if (this._v3AuthShaEncryptionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3AuthShaEncryptionDefault = this._v3AuthShaEncryptionDefault;
    }
    if (this._v3Ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Ipv4 = this._v3Ipv4;
    }
    if (this._v3PrivAesAes128EncryptionAes !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3PrivAesAes128EncryptionAes = this._v3PrivAesAes128EncryptionAes;
    }
    if (this._v3PrivAesAes128EncryptionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3PrivAesAes128EncryptionDefault = this._v3PrivAesAes128EncryptionDefault;
    }
    if (this._v3Systemowner !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Systemowner = this._v3Systemowner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._userName = undefined;
      this._v3AuthMd5EncryptionAes = undefined;
      this._v3AuthMd5EncryptionDefault = undefined;
      this._v3AuthShaEncryptionAes = undefined;
      this._v3AuthShaEncryptionDefault = undefined;
      this._v3Ipv4 = undefined;
      this._v3PrivAesAes128EncryptionAes = undefined;
      this._v3PrivAesAes128EncryptionDefault = undefined;
      this._v3Systemowner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._userName = value.userName;
      this._v3AuthMd5EncryptionAes = value.v3AuthMd5EncryptionAes;
      this._v3AuthMd5EncryptionDefault = value.v3AuthMd5EncryptionDefault;
      this._v3AuthShaEncryptionAes = value.v3AuthShaEncryptionAes;
      this._v3AuthShaEncryptionDefault = value.v3AuthShaEncryptionDefault;
      this._v3Ipv4 = value.v3Ipv4;
      this._v3PrivAesAes128EncryptionAes = value.v3PrivAesAes128EncryptionAes;
      this._v3PrivAesAes128EncryptionDefault = value.v3PrivAesAes128EncryptionDefault;
      this._v3Systemowner = value.v3Systemowner;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // v3_auth_md5_encryption_aes - computed: false, optional: true, required: false
  private _v3AuthMd5EncryptionAes?: string; 
  public get v3AuthMd5EncryptionAes() {
    return this.getStringAttribute('v3_auth_md5_encryption_aes');
  }
  public set v3AuthMd5EncryptionAes(value: string) {
    this._v3AuthMd5EncryptionAes = value;
  }
  public resetV3AuthMd5EncryptionAes() {
    this._v3AuthMd5EncryptionAes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthMd5EncryptionAesInput() {
    return this._v3AuthMd5EncryptionAes;
  }

  // v3_auth_md5_encryption_default - computed: false, optional: true, required: false
  private _v3AuthMd5EncryptionDefault?: string; 
  public get v3AuthMd5EncryptionDefault() {
    return this.getStringAttribute('v3_auth_md5_encryption_default');
  }
  public set v3AuthMd5EncryptionDefault(value: string) {
    this._v3AuthMd5EncryptionDefault = value;
  }
  public resetV3AuthMd5EncryptionDefault() {
    this._v3AuthMd5EncryptionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthMd5EncryptionDefaultInput() {
    return this._v3AuthMd5EncryptionDefault;
  }

  // v3_auth_sha_encryption_aes - computed: false, optional: true, required: false
  private _v3AuthShaEncryptionAes?: string; 
  public get v3AuthShaEncryptionAes() {
    return this.getStringAttribute('v3_auth_sha_encryption_aes');
  }
  public set v3AuthShaEncryptionAes(value: string) {
    this._v3AuthShaEncryptionAes = value;
  }
  public resetV3AuthShaEncryptionAes() {
    this._v3AuthShaEncryptionAes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthShaEncryptionAesInput() {
    return this._v3AuthShaEncryptionAes;
  }

  // v3_auth_sha_encryption_default - computed: false, optional: true, required: false
  private _v3AuthShaEncryptionDefault?: string; 
  public get v3AuthShaEncryptionDefault() {
    return this.getStringAttribute('v3_auth_sha_encryption_default');
  }
  public set v3AuthShaEncryptionDefault(value: string) {
    this._v3AuthShaEncryptionDefault = value;
  }
  public resetV3AuthShaEncryptionDefault() {
    this._v3AuthShaEncryptionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthShaEncryptionDefaultInput() {
    return this._v3AuthShaEncryptionDefault;
  }

  // v3_ipv4 - computed: false, optional: true, required: false
  private _v3Ipv4?: string; 
  public get v3Ipv4() {
    return this.getStringAttribute('v3_ipv4');
  }
  public set v3Ipv4(value: string) {
    this._v3Ipv4 = value;
  }
  public resetV3Ipv4() {
    this._v3Ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3Ipv4Input() {
    return this._v3Ipv4;
  }

  // v3_priv_aes_aes_128_encryption_aes - computed: false, optional: true, required: false
  private _v3PrivAesAes128EncryptionAes?: string; 
  public get v3PrivAesAes128EncryptionAes() {
    return this.getStringAttribute('v3_priv_aes_aes_128_encryption_aes');
  }
  public set v3PrivAesAes128EncryptionAes(value: string) {
    this._v3PrivAesAes128EncryptionAes = value;
  }
  public resetV3PrivAesAes128EncryptionAes() {
    this._v3PrivAesAes128EncryptionAes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3PrivAesAes128EncryptionAesInput() {
    return this._v3PrivAesAes128EncryptionAes;
  }

  // v3_priv_aes_aes_128_encryption_default - computed: false, optional: true, required: false
  private _v3PrivAesAes128EncryptionDefault?: string; 
  public get v3PrivAesAes128EncryptionDefault() {
    return this.getStringAttribute('v3_priv_aes_aes_128_encryption_default');
  }
  public set v3PrivAesAes128EncryptionDefault(value: string) {
    this._v3PrivAesAes128EncryptionDefault = value;
  }
  public resetV3PrivAesAes128EncryptionDefault() {
    this._v3PrivAesAes128EncryptionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3PrivAesAes128EncryptionDefaultInput() {
    return this._v3PrivAesAes128EncryptionDefault;
  }

  // v3_systemowner - computed: false, optional: true, required: false
  private _v3Systemowner?: boolean | cdktf.IResolvable; 
  public get v3Systemowner() {
    return this.getBooleanAttribute('v3_systemowner');
  }
  public set v3Systemowner(value: boolean | cdktf.IResolvable) {
    this._v3Systemowner = value;
  }
  public resetV3Systemowner() {
    this._v3Systemowner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3SystemownerInput() {
    return this._v3Systemowner;
  }
}

export class SnmpServerUsersList extends cdktf.ComplexList {
  public internalValue? : SnmpServerUsers[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerUsersOutputReference {
    return new SnmpServerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server iosxr_snmp_server}
*/
export class SnmpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_snmp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServer to import
  * @param importFromId The id of the existing SnmpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_snmp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server iosxr_snmp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_snmp_server',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communities.internalValue = config.communities;
    this._contact = config.contact;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._groups.internalValue = config.groups;
    this._location = config.location;
    this._trapSource = config.trapSource;
    this._trapsBfd = config.trapsBfd;
    this._trapsBgpCbgpTwoEnable = config.trapsBgpCbgpTwoEnable;
    this._trapsBgpCbgpTwoUpdown = config.trapsBgpCbgpTwoUpdown;
    this._trapsBgpEnableCiscoBgp4Mib = config.trapsBgpEnableCiscoBgp4Mib;
    this._trapsBgpEnableUpdown = config.trapsBgpEnableUpdown;
    this._trapsBridgemib = config.trapsBridgemib;
    this._trapsConfig = config.trapsConfig;
    this._trapsCopyComplete = config.trapsCopyComplete;
    this._trapsEntity = config.trapsEntity;
    this._trapsEntityRedundancyAll = config.trapsEntityRedundancyAll;
    this._trapsEntityStateOperstatus = config.trapsEntityStateOperstatus;
    this._trapsEthernetOamEvents = config.trapsEthernetOamEvents;
    this._trapsFruCtrl = config.trapsFruCtrl;
    this._trapsIsisAdjacencyChange = config.trapsIsisAdjacencyChange;
    this._trapsIsisAll = config.trapsIsisAll;
    this._trapsIsisAreaMismatch = config.trapsIsisAreaMismatch;
    this._trapsIsisAttemptToExceedMaxSequence = config.trapsIsisAttemptToExceedMaxSequence;
    this._trapsIsisAuthenticationFailure = config.trapsIsisAuthenticationFailure;
    this._trapsIsisAuthenticationTypeFailure = config.trapsIsisAuthenticationTypeFailure;
    this._trapsIsisCorruptedLspDetected = config.trapsIsisCorruptedLspDetected;
    this._trapsIsisDatabaseOverload = config.trapsIsisDatabaseOverload;
    this._trapsIsisIdLenMismatch = config.trapsIsisIdLenMismatch;
    this._trapsIsisLspErrorDetected = config.trapsIsisLspErrorDetected;
    this._trapsIsisLspTooLargeToPropagate = config.trapsIsisLspTooLargeToPropagate;
    this._trapsIsisManualAddressDrops = config.trapsIsisManualAddressDrops;
    this._trapsIsisMaxAreaAddressesMismatch = config.trapsIsisMaxAreaAddressesMismatch;
    this._trapsIsisOrigLspBuffSizeMismatch = config.trapsIsisOrigLspBuffSizeMismatch;
    this._trapsIsisOwnLspPurge = config.trapsIsisOwnLspPurge;
    this._trapsIsisProtocolsSupportedMismatch = config.trapsIsisProtocolsSupportedMismatch;
    this._trapsIsisRejectedAdjacency = config.trapsIsisRejectedAdjacency;
    this._trapsIsisSequenceNumberSkip = config.trapsIsisSequenceNumberSkip;
    this._trapsIsisVersionSkew = config.trapsIsisVersionSkew;
    this._trapsL2VpnAll = config.trapsL2VpnAll;
    this._trapsL2VpnVcDown = config.trapsL2VpnVcDown;
    this._trapsL2VpnVcUp = config.trapsL2VpnVcUp;
    this._trapsNtp = config.trapsNtp;
    this._trapsPower = config.trapsPower;
    this._trapsRf = config.trapsRf;
    this._trapsSensor = config.trapsSensor;
    this._trapsSnmpLinkdown = config.trapsSnmpLinkdown;
    this._trapsSnmpLinkup = config.trapsSnmpLinkup;
    this._trapsSystem = config.trapsSystem;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communities - computed: false, optional: true, required: false
  private _communities = new SnmpServerCommunitiesList(this, "communities", false);
  public get communities() {
    return this._communities;
  }
  public putCommunities(value: SnmpServerCommunities[] | cdktf.IResolvable) {
    this._communities.internalValue = value;
  }
  public resetCommunities() {
    this._communities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitiesInput() {
    return this._communities.internalValue;
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
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

  // groups - computed: false, optional: true, required: false
  private _groups = new SnmpServerGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: SnmpServerGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // trap_source - computed: false, optional: true, required: false
  private _trapSource?: string; 
  public get trapSource() {
    return this.getStringAttribute('trap_source');
  }
  public set trapSource(value: string) {
    this._trapSource = value;
  }
  public resetTrapSource() {
    this._trapSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceInput() {
    return this._trapSource;
  }

  // traps_bfd - computed: false, optional: true, required: false
  private _trapsBfd?: boolean | cdktf.IResolvable; 
  public get trapsBfd() {
    return this.getBooleanAttribute('traps_bfd');
  }
  public set trapsBfd(value: boolean | cdktf.IResolvable) {
    this._trapsBfd = value;
  }
  public resetTrapsBfd() {
    this._trapsBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsBfdInput() {
    return this._trapsBfd;
  }

  // traps_bgp_cbgp_two_enable - computed: false, optional: true, required: false
  private _trapsBgpCbgpTwoEnable?: boolean | cdktf.IResolvable; 
  public get trapsBgpCbgpTwoEnable() {
    return this.getBooleanAttribute('traps_bgp_cbgp_two_enable');
  }
  public set trapsBgpCbgpTwoEnable(value: boolean | cdktf.IResolvable) {
    this._trapsBgpCbgpTwoEnable = value;
  }
  public resetTrapsBgpCbgpTwoEnable() {
    this._trapsBgpCbgpTwoEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsBgpCbgpTwoEnableInput() {
    return this._trapsBgpCbgpTwoEnable;
  }

  // traps_bgp_cbgp_two_updown - computed: false, optional: true, required: false
  private _trapsBgpCbgpTwoUpdown?: boolean | cdktf.IResolvable; 
  public get trapsBgpCbgpTwoUpdown() {
    return this.getBooleanAttribute('traps_bgp_cbgp_two_updown');
  }
  public set trapsBgpCbgpTwoUpdown(value: boolean | cdktf.IResolvable) {
    this._trapsBgpCbgpTwoUpdown = value;
  }
  public resetTrapsBgpCbgpTwoUpdown() {
    this._trapsBgpCbgpTwoUpdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsBgpCbgpTwoUpdownInput() {
    return this._trapsBgpCbgpTwoUpdown;
  }

  // traps_bgp_enable_cisco_bgp4_mib - computed: false, optional: true, required: false
  private _trapsBgpEnableCiscoBgp4Mib?: boolean | cdktf.IResolvable; 
  public get trapsBgpEnableCiscoBgp4Mib() {
    return this.getBooleanAttribute('traps_bgp_enable_cisco_bgp4_mib');
  }
  public set trapsBgpEnableCiscoBgp4Mib(value: boolean | cdktf.IResolvable) {
    this._trapsBgpEnableCiscoBgp4Mib = value;
  }
  public resetTrapsBgpEnableCiscoBgp4Mib() {
    this._trapsBgpEnableCiscoBgp4Mib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsBgpEnableCiscoBgp4MibInput() {
    return this._trapsBgpEnableCiscoBgp4Mib;
  }

  // traps_bgp_enable_updown - computed: false, optional: true, required: false
  private _trapsBgpEnableUpdown?: boolean | cdktf.IResolvable; 
  public get trapsBgpEnableUpdown() {
    return this.getBooleanAttribute('traps_bgp_enable_updown');
  }
  public set trapsBgpEnableUpdown(value: boolean | cdktf.IResolvable) {
    this._trapsBgpEnableUpdown = value;
  }
  public resetTrapsBgpEnableUpdown() {
    this._trapsBgpEnableUpdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsBgpEnableUpdownInput() {
    return this._trapsBgpEnableUpdown;
  }

  // traps_bridgemib - computed: false, optional: true, required: false
  private _trapsBridgemib?: boolean | cdktf.IResolvable; 
  public get trapsBridgemib() {
    return this.getBooleanAttribute('traps_bridgemib');
  }
  public set trapsBridgemib(value: boolean | cdktf.IResolvable) {
    this._trapsBridgemib = value;
  }
  public resetTrapsBridgemib() {
    this._trapsBridgemib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsBridgemibInput() {
    return this._trapsBridgemib;
  }

  // traps_config - computed: false, optional: true, required: false
  private _trapsConfig?: boolean | cdktf.IResolvable; 
  public get trapsConfig() {
    return this.getBooleanAttribute('traps_config');
  }
  public set trapsConfig(value: boolean | cdktf.IResolvable) {
    this._trapsConfig = value;
  }
  public resetTrapsConfig() {
    this._trapsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsConfigInput() {
    return this._trapsConfig;
  }

  // traps_copy_complete - computed: false, optional: true, required: false
  private _trapsCopyComplete?: boolean | cdktf.IResolvable; 
  public get trapsCopyComplete() {
    return this.getBooleanAttribute('traps_copy_complete');
  }
  public set trapsCopyComplete(value: boolean | cdktf.IResolvable) {
    this._trapsCopyComplete = value;
  }
  public resetTrapsCopyComplete() {
    this._trapsCopyComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsCopyCompleteInput() {
    return this._trapsCopyComplete;
  }

  // traps_entity - computed: false, optional: true, required: false
  private _trapsEntity?: boolean | cdktf.IResolvable; 
  public get trapsEntity() {
    return this.getBooleanAttribute('traps_entity');
  }
  public set trapsEntity(value: boolean | cdktf.IResolvable) {
    this._trapsEntity = value;
  }
  public resetTrapsEntity() {
    this._trapsEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsEntityInput() {
    return this._trapsEntity;
  }

  // traps_entity_redundancy_all - computed: false, optional: true, required: false
  private _trapsEntityRedundancyAll?: boolean | cdktf.IResolvable; 
  public get trapsEntityRedundancyAll() {
    return this.getBooleanAttribute('traps_entity_redundancy_all');
  }
  public set trapsEntityRedundancyAll(value: boolean | cdktf.IResolvable) {
    this._trapsEntityRedundancyAll = value;
  }
  public resetTrapsEntityRedundancyAll() {
    this._trapsEntityRedundancyAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsEntityRedundancyAllInput() {
    return this._trapsEntityRedundancyAll;
  }

  // traps_entity_state_operstatus - computed: false, optional: true, required: false
  private _trapsEntityStateOperstatus?: boolean | cdktf.IResolvable; 
  public get trapsEntityStateOperstatus() {
    return this.getBooleanAttribute('traps_entity_state_operstatus');
  }
  public set trapsEntityStateOperstatus(value: boolean | cdktf.IResolvable) {
    this._trapsEntityStateOperstatus = value;
  }
  public resetTrapsEntityStateOperstatus() {
    this._trapsEntityStateOperstatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsEntityStateOperstatusInput() {
    return this._trapsEntityStateOperstatus;
  }

  // traps_ethernet_oam_events - computed: false, optional: true, required: false
  private _trapsEthernetOamEvents?: boolean | cdktf.IResolvable; 
  public get trapsEthernetOamEvents() {
    return this.getBooleanAttribute('traps_ethernet_oam_events');
  }
  public set trapsEthernetOamEvents(value: boolean | cdktf.IResolvable) {
    this._trapsEthernetOamEvents = value;
  }
  public resetTrapsEthernetOamEvents() {
    this._trapsEthernetOamEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsEthernetOamEventsInput() {
    return this._trapsEthernetOamEvents;
  }

  // traps_fru_ctrl - computed: false, optional: true, required: false
  private _trapsFruCtrl?: boolean | cdktf.IResolvable; 
  public get trapsFruCtrl() {
    return this.getBooleanAttribute('traps_fru_ctrl');
  }
  public set trapsFruCtrl(value: boolean | cdktf.IResolvable) {
    this._trapsFruCtrl = value;
  }
  public resetTrapsFruCtrl() {
    this._trapsFruCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsFruCtrlInput() {
    return this._trapsFruCtrl;
  }

  // traps_isis_adjacency_change - computed: false, optional: true, required: false
  private _trapsIsisAdjacencyChange?: boolean | cdktf.IResolvable; 
  public get trapsIsisAdjacencyChange() {
    return this.getBooleanAttribute('traps_isis_adjacency_change');
  }
  public set trapsIsisAdjacencyChange(value: boolean | cdktf.IResolvable) {
    this._trapsIsisAdjacencyChange = value;
  }
  public resetTrapsIsisAdjacencyChange() {
    this._trapsIsisAdjacencyChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisAdjacencyChangeInput() {
    return this._trapsIsisAdjacencyChange;
  }

  // traps_isis_all - computed: false, optional: true, required: false
  private _trapsIsisAll?: boolean | cdktf.IResolvable; 
  public get trapsIsisAll() {
    return this.getBooleanAttribute('traps_isis_all');
  }
  public set trapsIsisAll(value: boolean | cdktf.IResolvable) {
    this._trapsIsisAll = value;
  }
  public resetTrapsIsisAll() {
    this._trapsIsisAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisAllInput() {
    return this._trapsIsisAll;
  }

  // traps_isis_area_mismatch - computed: false, optional: true, required: false
  private _trapsIsisAreaMismatch?: boolean | cdktf.IResolvable; 
  public get trapsIsisAreaMismatch() {
    return this.getBooleanAttribute('traps_isis_area_mismatch');
  }
  public set trapsIsisAreaMismatch(value: boolean | cdktf.IResolvable) {
    this._trapsIsisAreaMismatch = value;
  }
  public resetTrapsIsisAreaMismatch() {
    this._trapsIsisAreaMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisAreaMismatchInput() {
    return this._trapsIsisAreaMismatch;
  }

  // traps_isis_attempt_to_exceed_max_sequence - computed: false, optional: true, required: false
  private _trapsIsisAttemptToExceedMaxSequence?: boolean | cdktf.IResolvable; 
  public get trapsIsisAttemptToExceedMaxSequence() {
    return this.getBooleanAttribute('traps_isis_attempt_to_exceed_max_sequence');
  }
  public set trapsIsisAttemptToExceedMaxSequence(value: boolean | cdktf.IResolvable) {
    this._trapsIsisAttemptToExceedMaxSequence = value;
  }
  public resetTrapsIsisAttemptToExceedMaxSequence() {
    this._trapsIsisAttemptToExceedMaxSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisAttemptToExceedMaxSequenceInput() {
    return this._trapsIsisAttemptToExceedMaxSequence;
  }

  // traps_isis_authentication_failure - computed: false, optional: true, required: false
  private _trapsIsisAuthenticationFailure?: boolean | cdktf.IResolvable; 
  public get trapsIsisAuthenticationFailure() {
    return this.getBooleanAttribute('traps_isis_authentication_failure');
  }
  public set trapsIsisAuthenticationFailure(value: boolean | cdktf.IResolvable) {
    this._trapsIsisAuthenticationFailure = value;
  }
  public resetTrapsIsisAuthenticationFailure() {
    this._trapsIsisAuthenticationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisAuthenticationFailureInput() {
    return this._trapsIsisAuthenticationFailure;
  }

  // traps_isis_authentication_type_failure - computed: false, optional: true, required: false
  private _trapsIsisAuthenticationTypeFailure?: boolean | cdktf.IResolvable; 
  public get trapsIsisAuthenticationTypeFailure() {
    return this.getBooleanAttribute('traps_isis_authentication_type_failure');
  }
  public set trapsIsisAuthenticationTypeFailure(value: boolean | cdktf.IResolvable) {
    this._trapsIsisAuthenticationTypeFailure = value;
  }
  public resetTrapsIsisAuthenticationTypeFailure() {
    this._trapsIsisAuthenticationTypeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisAuthenticationTypeFailureInput() {
    return this._trapsIsisAuthenticationTypeFailure;
  }

  // traps_isis_corrupted_lsp_detected - computed: false, optional: true, required: false
  private _trapsIsisCorruptedLspDetected?: boolean | cdktf.IResolvable; 
  public get trapsIsisCorruptedLspDetected() {
    return this.getBooleanAttribute('traps_isis_corrupted_lsp_detected');
  }
  public set trapsIsisCorruptedLspDetected(value: boolean | cdktf.IResolvable) {
    this._trapsIsisCorruptedLspDetected = value;
  }
  public resetTrapsIsisCorruptedLspDetected() {
    this._trapsIsisCorruptedLspDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisCorruptedLspDetectedInput() {
    return this._trapsIsisCorruptedLspDetected;
  }

  // traps_isis_database_overload - computed: false, optional: true, required: false
  private _trapsIsisDatabaseOverload?: boolean | cdktf.IResolvable; 
  public get trapsIsisDatabaseOverload() {
    return this.getBooleanAttribute('traps_isis_database_overload');
  }
  public set trapsIsisDatabaseOverload(value: boolean | cdktf.IResolvable) {
    this._trapsIsisDatabaseOverload = value;
  }
  public resetTrapsIsisDatabaseOverload() {
    this._trapsIsisDatabaseOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisDatabaseOverloadInput() {
    return this._trapsIsisDatabaseOverload;
  }

  // traps_isis_id_len_mismatch - computed: false, optional: true, required: false
  private _trapsIsisIdLenMismatch?: boolean | cdktf.IResolvable; 
  public get trapsIsisIdLenMismatch() {
    return this.getBooleanAttribute('traps_isis_id_len_mismatch');
  }
  public set trapsIsisIdLenMismatch(value: boolean | cdktf.IResolvable) {
    this._trapsIsisIdLenMismatch = value;
  }
  public resetTrapsIsisIdLenMismatch() {
    this._trapsIsisIdLenMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisIdLenMismatchInput() {
    return this._trapsIsisIdLenMismatch;
  }

  // traps_isis_lsp_error_detected - computed: false, optional: true, required: false
  private _trapsIsisLspErrorDetected?: boolean | cdktf.IResolvable; 
  public get trapsIsisLspErrorDetected() {
    return this.getBooleanAttribute('traps_isis_lsp_error_detected');
  }
  public set trapsIsisLspErrorDetected(value: boolean | cdktf.IResolvable) {
    this._trapsIsisLspErrorDetected = value;
  }
  public resetTrapsIsisLspErrorDetected() {
    this._trapsIsisLspErrorDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisLspErrorDetectedInput() {
    return this._trapsIsisLspErrorDetected;
  }

  // traps_isis_lsp_too_large_to_propagate - computed: false, optional: true, required: false
  private _trapsIsisLspTooLargeToPropagate?: boolean | cdktf.IResolvable; 
  public get trapsIsisLspTooLargeToPropagate() {
    return this.getBooleanAttribute('traps_isis_lsp_too_large_to_propagate');
  }
  public set trapsIsisLspTooLargeToPropagate(value: boolean | cdktf.IResolvable) {
    this._trapsIsisLspTooLargeToPropagate = value;
  }
  public resetTrapsIsisLspTooLargeToPropagate() {
    this._trapsIsisLspTooLargeToPropagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisLspTooLargeToPropagateInput() {
    return this._trapsIsisLspTooLargeToPropagate;
  }

  // traps_isis_manual_address_drops - computed: false, optional: true, required: false
  private _trapsIsisManualAddressDrops?: boolean | cdktf.IResolvable; 
  public get trapsIsisManualAddressDrops() {
    return this.getBooleanAttribute('traps_isis_manual_address_drops');
  }
  public set trapsIsisManualAddressDrops(value: boolean | cdktf.IResolvable) {
    this._trapsIsisManualAddressDrops = value;
  }
  public resetTrapsIsisManualAddressDrops() {
    this._trapsIsisManualAddressDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisManualAddressDropsInput() {
    return this._trapsIsisManualAddressDrops;
  }

  // traps_isis_max_area_addresses_mismatch - computed: false, optional: true, required: false
  private _trapsIsisMaxAreaAddressesMismatch?: boolean | cdktf.IResolvable; 
  public get trapsIsisMaxAreaAddressesMismatch() {
    return this.getBooleanAttribute('traps_isis_max_area_addresses_mismatch');
  }
  public set trapsIsisMaxAreaAddressesMismatch(value: boolean | cdktf.IResolvable) {
    this._trapsIsisMaxAreaAddressesMismatch = value;
  }
  public resetTrapsIsisMaxAreaAddressesMismatch() {
    this._trapsIsisMaxAreaAddressesMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisMaxAreaAddressesMismatchInput() {
    return this._trapsIsisMaxAreaAddressesMismatch;
  }

  // traps_isis_orig_lsp_buff_size_mismatch - computed: false, optional: true, required: false
  private _trapsIsisOrigLspBuffSizeMismatch?: boolean | cdktf.IResolvable; 
  public get trapsIsisOrigLspBuffSizeMismatch() {
    return this.getBooleanAttribute('traps_isis_orig_lsp_buff_size_mismatch');
  }
  public set trapsIsisOrigLspBuffSizeMismatch(value: boolean | cdktf.IResolvable) {
    this._trapsIsisOrigLspBuffSizeMismatch = value;
  }
  public resetTrapsIsisOrigLspBuffSizeMismatch() {
    this._trapsIsisOrigLspBuffSizeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisOrigLspBuffSizeMismatchInput() {
    return this._trapsIsisOrigLspBuffSizeMismatch;
  }

  // traps_isis_own_lsp_purge - computed: false, optional: true, required: false
  private _trapsIsisOwnLspPurge?: boolean | cdktf.IResolvable; 
  public get trapsIsisOwnLspPurge() {
    return this.getBooleanAttribute('traps_isis_own_lsp_purge');
  }
  public set trapsIsisOwnLspPurge(value: boolean | cdktf.IResolvable) {
    this._trapsIsisOwnLspPurge = value;
  }
  public resetTrapsIsisOwnLspPurge() {
    this._trapsIsisOwnLspPurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisOwnLspPurgeInput() {
    return this._trapsIsisOwnLspPurge;
  }

  // traps_isis_protocols_supported_mismatch - computed: false, optional: true, required: false
  private _trapsIsisProtocolsSupportedMismatch?: boolean | cdktf.IResolvable; 
  public get trapsIsisProtocolsSupportedMismatch() {
    return this.getBooleanAttribute('traps_isis_protocols_supported_mismatch');
  }
  public set trapsIsisProtocolsSupportedMismatch(value: boolean | cdktf.IResolvable) {
    this._trapsIsisProtocolsSupportedMismatch = value;
  }
  public resetTrapsIsisProtocolsSupportedMismatch() {
    this._trapsIsisProtocolsSupportedMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisProtocolsSupportedMismatchInput() {
    return this._trapsIsisProtocolsSupportedMismatch;
  }

  // traps_isis_rejected_adjacency - computed: false, optional: true, required: false
  private _trapsIsisRejectedAdjacency?: boolean | cdktf.IResolvable; 
  public get trapsIsisRejectedAdjacency() {
    return this.getBooleanAttribute('traps_isis_rejected_adjacency');
  }
  public set trapsIsisRejectedAdjacency(value: boolean | cdktf.IResolvable) {
    this._trapsIsisRejectedAdjacency = value;
  }
  public resetTrapsIsisRejectedAdjacency() {
    this._trapsIsisRejectedAdjacency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisRejectedAdjacencyInput() {
    return this._trapsIsisRejectedAdjacency;
  }

  // traps_isis_sequence_number_skip - computed: false, optional: true, required: false
  private _trapsIsisSequenceNumberSkip?: boolean | cdktf.IResolvable; 
  public get trapsIsisSequenceNumberSkip() {
    return this.getBooleanAttribute('traps_isis_sequence_number_skip');
  }
  public set trapsIsisSequenceNumberSkip(value: boolean | cdktf.IResolvable) {
    this._trapsIsisSequenceNumberSkip = value;
  }
  public resetTrapsIsisSequenceNumberSkip() {
    this._trapsIsisSequenceNumberSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisSequenceNumberSkipInput() {
    return this._trapsIsisSequenceNumberSkip;
  }

  // traps_isis_version_skew - computed: false, optional: true, required: false
  private _trapsIsisVersionSkew?: boolean | cdktf.IResolvable; 
  public get trapsIsisVersionSkew() {
    return this.getBooleanAttribute('traps_isis_version_skew');
  }
  public set trapsIsisVersionSkew(value: boolean | cdktf.IResolvable) {
    this._trapsIsisVersionSkew = value;
  }
  public resetTrapsIsisVersionSkew() {
    this._trapsIsisVersionSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsIsisVersionSkewInput() {
    return this._trapsIsisVersionSkew;
  }

  // traps_l2vpn_all - computed: false, optional: true, required: false
  private _trapsL2VpnAll?: boolean | cdktf.IResolvable; 
  public get trapsL2VpnAll() {
    return this.getBooleanAttribute('traps_l2vpn_all');
  }
  public set trapsL2VpnAll(value: boolean | cdktf.IResolvable) {
    this._trapsL2VpnAll = value;
  }
  public resetTrapsL2VpnAll() {
    this._trapsL2VpnAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsL2VpnAllInput() {
    return this._trapsL2VpnAll;
  }

  // traps_l2vpn_vc_down - computed: false, optional: true, required: false
  private _trapsL2VpnVcDown?: boolean | cdktf.IResolvable; 
  public get trapsL2VpnVcDown() {
    return this.getBooleanAttribute('traps_l2vpn_vc_down');
  }
  public set trapsL2VpnVcDown(value: boolean | cdktf.IResolvable) {
    this._trapsL2VpnVcDown = value;
  }
  public resetTrapsL2VpnVcDown() {
    this._trapsL2VpnVcDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsL2VpnVcDownInput() {
    return this._trapsL2VpnVcDown;
  }

  // traps_l2vpn_vc_up - computed: false, optional: true, required: false
  private _trapsL2VpnVcUp?: boolean | cdktf.IResolvable; 
  public get trapsL2VpnVcUp() {
    return this.getBooleanAttribute('traps_l2vpn_vc_up');
  }
  public set trapsL2VpnVcUp(value: boolean | cdktf.IResolvable) {
    this._trapsL2VpnVcUp = value;
  }
  public resetTrapsL2VpnVcUp() {
    this._trapsL2VpnVcUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsL2VpnVcUpInput() {
    return this._trapsL2VpnVcUp;
  }

  // traps_ntp - computed: false, optional: true, required: false
  private _trapsNtp?: boolean | cdktf.IResolvable; 
  public get trapsNtp() {
    return this.getBooleanAttribute('traps_ntp');
  }
  public set trapsNtp(value: boolean | cdktf.IResolvable) {
    this._trapsNtp = value;
  }
  public resetTrapsNtp() {
    this._trapsNtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsNtpInput() {
    return this._trapsNtp;
  }

  // traps_power - computed: false, optional: true, required: false
  private _trapsPower?: boolean | cdktf.IResolvable; 
  public get trapsPower() {
    return this.getBooleanAttribute('traps_power');
  }
  public set trapsPower(value: boolean | cdktf.IResolvable) {
    this._trapsPower = value;
  }
  public resetTrapsPower() {
    this._trapsPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsPowerInput() {
    return this._trapsPower;
  }

  // traps_rf - computed: false, optional: true, required: false
  private _trapsRf?: boolean | cdktf.IResolvable; 
  public get trapsRf() {
    return this.getBooleanAttribute('traps_rf');
  }
  public set trapsRf(value: boolean | cdktf.IResolvable) {
    this._trapsRf = value;
  }
  public resetTrapsRf() {
    this._trapsRf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsRfInput() {
    return this._trapsRf;
  }

  // traps_sensor - computed: false, optional: true, required: false
  private _trapsSensor?: boolean | cdktf.IResolvable; 
  public get trapsSensor() {
    return this.getBooleanAttribute('traps_sensor');
  }
  public set trapsSensor(value: boolean | cdktf.IResolvable) {
    this._trapsSensor = value;
  }
  public resetTrapsSensor() {
    this._trapsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsSensorInput() {
    return this._trapsSensor;
  }

  // traps_snmp_linkdown - computed: false, optional: true, required: false
  private _trapsSnmpLinkdown?: boolean | cdktf.IResolvable; 
  public get trapsSnmpLinkdown() {
    return this.getBooleanAttribute('traps_snmp_linkdown');
  }
  public set trapsSnmpLinkdown(value: boolean | cdktf.IResolvable) {
    this._trapsSnmpLinkdown = value;
  }
  public resetTrapsSnmpLinkdown() {
    this._trapsSnmpLinkdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsSnmpLinkdownInput() {
    return this._trapsSnmpLinkdown;
  }

  // traps_snmp_linkup - computed: false, optional: true, required: false
  private _trapsSnmpLinkup?: boolean | cdktf.IResolvable; 
  public get trapsSnmpLinkup() {
    return this.getBooleanAttribute('traps_snmp_linkup');
  }
  public set trapsSnmpLinkup(value: boolean | cdktf.IResolvable) {
    this._trapsSnmpLinkup = value;
  }
  public resetTrapsSnmpLinkup() {
    this._trapsSnmpLinkup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsSnmpLinkupInput() {
    return this._trapsSnmpLinkup;
  }

  // traps_system - computed: false, optional: true, required: false
  private _trapsSystem?: boolean | cdktf.IResolvable; 
  public get trapsSystem() {
    return this.getBooleanAttribute('traps_system');
  }
  public set trapsSystem(value: boolean | cdktf.IResolvable) {
    this._trapsSystem = value;
  }
  public resetTrapsSystem() {
    this._trapsSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsSystemInput() {
    return this._trapsSystem;
  }

  // users - computed: false, optional: true, required: false
  private _users = new SnmpServerUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: SnmpServerUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communities: cdktf.listMapper(snmpServerCommunitiesToTerraform, false)(this._communities.internalValue),
      contact: cdktf.stringToTerraform(this._contact),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      groups: cdktf.listMapper(snmpServerGroupsToTerraform, false)(this._groups.internalValue),
      location: cdktf.stringToTerraform(this._location),
      trap_source: cdktf.stringToTerraform(this._trapSource),
      traps_bfd: cdktf.booleanToTerraform(this._trapsBfd),
      traps_bgp_cbgp_two_enable: cdktf.booleanToTerraform(this._trapsBgpCbgpTwoEnable),
      traps_bgp_cbgp_two_updown: cdktf.booleanToTerraform(this._trapsBgpCbgpTwoUpdown),
      traps_bgp_enable_cisco_bgp4_mib: cdktf.booleanToTerraform(this._trapsBgpEnableCiscoBgp4Mib),
      traps_bgp_enable_updown: cdktf.booleanToTerraform(this._trapsBgpEnableUpdown),
      traps_bridgemib: cdktf.booleanToTerraform(this._trapsBridgemib),
      traps_config: cdktf.booleanToTerraform(this._trapsConfig),
      traps_copy_complete: cdktf.booleanToTerraform(this._trapsCopyComplete),
      traps_entity: cdktf.booleanToTerraform(this._trapsEntity),
      traps_entity_redundancy_all: cdktf.booleanToTerraform(this._trapsEntityRedundancyAll),
      traps_entity_state_operstatus: cdktf.booleanToTerraform(this._trapsEntityStateOperstatus),
      traps_ethernet_oam_events: cdktf.booleanToTerraform(this._trapsEthernetOamEvents),
      traps_fru_ctrl: cdktf.booleanToTerraform(this._trapsFruCtrl),
      traps_isis_adjacency_change: cdktf.booleanToTerraform(this._trapsIsisAdjacencyChange),
      traps_isis_all: cdktf.booleanToTerraform(this._trapsIsisAll),
      traps_isis_area_mismatch: cdktf.booleanToTerraform(this._trapsIsisAreaMismatch),
      traps_isis_attempt_to_exceed_max_sequence: cdktf.booleanToTerraform(this._trapsIsisAttemptToExceedMaxSequence),
      traps_isis_authentication_failure: cdktf.booleanToTerraform(this._trapsIsisAuthenticationFailure),
      traps_isis_authentication_type_failure: cdktf.booleanToTerraform(this._trapsIsisAuthenticationTypeFailure),
      traps_isis_corrupted_lsp_detected: cdktf.booleanToTerraform(this._trapsIsisCorruptedLspDetected),
      traps_isis_database_overload: cdktf.booleanToTerraform(this._trapsIsisDatabaseOverload),
      traps_isis_id_len_mismatch: cdktf.booleanToTerraform(this._trapsIsisIdLenMismatch),
      traps_isis_lsp_error_detected: cdktf.booleanToTerraform(this._trapsIsisLspErrorDetected),
      traps_isis_lsp_too_large_to_propagate: cdktf.booleanToTerraform(this._trapsIsisLspTooLargeToPropagate),
      traps_isis_manual_address_drops: cdktf.booleanToTerraform(this._trapsIsisManualAddressDrops),
      traps_isis_max_area_addresses_mismatch: cdktf.booleanToTerraform(this._trapsIsisMaxAreaAddressesMismatch),
      traps_isis_orig_lsp_buff_size_mismatch: cdktf.booleanToTerraform(this._trapsIsisOrigLspBuffSizeMismatch),
      traps_isis_own_lsp_purge: cdktf.booleanToTerraform(this._trapsIsisOwnLspPurge),
      traps_isis_protocols_supported_mismatch: cdktf.booleanToTerraform(this._trapsIsisProtocolsSupportedMismatch),
      traps_isis_rejected_adjacency: cdktf.booleanToTerraform(this._trapsIsisRejectedAdjacency),
      traps_isis_sequence_number_skip: cdktf.booleanToTerraform(this._trapsIsisSequenceNumberSkip),
      traps_isis_version_skew: cdktf.booleanToTerraform(this._trapsIsisVersionSkew),
      traps_l2vpn_all: cdktf.booleanToTerraform(this._trapsL2VpnAll),
      traps_l2vpn_vc_down: cdktf.booleanToTerraform(this._trapsL2VpnVcDown),
      traps_l2vpn_vc_up: cdktf.booleanToTerraform(this._trapsL2VpnVcUp),
      traps_ntp: cdktf.booleanToTerraform(this._trapsNtp),
      traps_power: cdktf.booleanToTerraform(this._trapsPower),
      traps_rf: cdktf.booleanToTerraform(this._trapsRf),
      traps_sensor: cdktf.booleanToTerraform(this._trapsSensor),
      traps_snmp_linkdown: cdktf.booleanToTerraform(this._trapsSnmpLinkdown),
      traps_snmp_linkup: cdktf.booleanToTerraform(this._trapsSnmpLinkup),
      traps_system: cdktf.booleanToTerraform(this._trapsSystem),
      users: cdktf.listMapper(snmpServerUsersToTerraform, false)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communities: {
        value: cdktf.listMapperHcl(snmpServerCommunitiesToHclTerraform, false)(this._communities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerCommunitiesList",
      },
      contact: {
        value: cdktf.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      groups: {
        value: cdktf.listMapperHcl(snmpServerGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerGroupsList",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_source: {
        value: cdktf.stringToHclTerraform(this._trapSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traps_bfd: {
        value: cdktf.booleanToHclTerraform(this._trapsBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_bgp_cbgp_two_enable: {
        value: cdktf.booleanToHclTerraform(this._trapsBgpCbgpTwoEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_bgp_cbgp_two_updown: {
        value: cdktf.booleanToHclTerraform(this._trapsBgpCbgpTwoUpdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_bgp_enable_cisco_bgp4_mib: {
        value: cdktf.booleanToHclTerraform(this._trapsBgpEnableCiscoBgp4Mib),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_bgp_enable_updown: {
        value: cdktf.booleanToHclTerraform(this._trapsBgpEnableUpdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_bridgemib: {
        value: cdktf.booleanToHclTerraform(this._trapsBridgemib),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_config: {
        value: cdktf.booleanToHclTerraform(this._trapsConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_copy_complete: {
        value: cdktf.booleanToHclTerraform(this._trapsCopyComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_entity: {
        value: cdktf.booleanToHclTerraform(this._trapsEntity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_entity_redundancy_all: {
        value: cdktf.booleanToHclTerraform(this._trapsEntityRedundancyAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_entity_state_operstatus: {
        value: cdktf.booleanToHclTerraform(this._trapsEntityStateOperstatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_ethernet_oam_events: {
        value: cdktf.booleanToHclTerraform(this._trapsEthernetOamEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_fru_ctrl: {
        value: cdktf.booleanToHclTerraform(this._trapsFruCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_adjacency_change: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisAdjacencyChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_all: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_area_mismatch: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisAreaMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_attempt_to_exceed_max_sequence: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisAttemptToExceedMaxSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_authentication_failure: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisAuthenticationFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_authentication_type_failure: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisAuthenticationTypeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_corrupted_lsp_detected: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisCorruptedLspDetected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_database_overload: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisDatabaseOverload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_id_len_mismatch: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisIdLenMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_lsp_error_detected: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisLspErrorDetected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_lsp_too_large_to_propagate: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisLspTooLargeToPropagate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_manual_address_drops: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisManualAddressDrops),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_max_area_addresses_mismatch: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisMaxAreaAddressesMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_orig_lsp_buff_size_mismatch: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisOrigLspBuffSizeMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_own_lsp_purge: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisOwnLspPurge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_protocols_supported_mismatch: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisProtocolsSupportedMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_rejected_adjacency: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisRejectedAdjacency),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_sequence_number_skip: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisSequenceNumberSkip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_isis_version_skew: {
        value: cdktf.booleanToHclTerraform(this._trapsIsisVersionSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_l2vpn_all: {
        value: cdktf.booleanToHclTerraform(this._trapsL2VpnAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_l2vpn_vc_down: {
        value: cdktf.booleanToHclTerraform(this._trapsL2VpnVcDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_l2vpn_vc_up: {
        value: cdktf.booleanToHclTerraform(this._trapsL2VpnVcUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_ntp: {
        value: cdktf.booleanToHclTerraform(this._trapsNtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_power: {
        value: cdktf.booleanToHclTerraform(this._trapsPower),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_rf: {
        value: cdktf.booleanToHclTerraform(this._trapsRf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_sensor: {
        value: cdktf.booleanToHclTerraform(this._trapsSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_snmp_linkdown: {
        value: cdktf.booleanToHclTerraform(this._trapsSnmpLinkdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_snmp_linkup: {
        value: cdktf.booleanToHclTerraform(this._trapsSnmpLinkup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traps_system: {
        value: cdktf.booleanToHclTerraform(this._trapsSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      users: {
        value: cdktf.listMapperHcl(snmpServerUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
