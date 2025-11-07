// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#access_vlan_mode SwitchGlobal#access_vlan_mode}
  */
  readonly accessVlanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#auto_fortilink_discovery SwitchGlobal#auto_fortilink_discovery}
  */
  readonly autoFortilinkDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#auto_isl SwitchGlobal#auto_isl}
  */
  readonly autoIsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#auto_isl_port_group SwitchGlobal#auto_isl_port_group}
  */
  readonly autoIslPortGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#auto_stp_priority SwitchGlobal#auto_stp_priority}
  */
  readonly autoStpPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#bpdu_learn SwitchGlobal#bpdu_learn}
  */
  readonly bpduLearn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#dhcp_snooping_database_export SwitchGlobal#dhcp_snooping_database_export}
  */
  readonly dhcpSnoopingDatabaseExport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#dmi_global_all SwitchGlobal#dmi_global_all}
  */
  readonly dmiGlobalAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#flapguard_retain_trigger SwitchGlobal#flapguard_retain_trigger}
  */
  readonly flapguardRetainTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#flood_unknown_multicast SwitchGlobal#flood_unknown_multicast}
  */
  readonly floodUnknownMulticast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#flood_vtp SwitchGlobal#flood_vtp}
  */
  readonly floodVtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#forti_trunk_dmac SwitchGlobal#forti_trunk_dmac}
  */
  readonly fortiTrunkDmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#fortilink_heartbeat_timeout SwitchGlobal#fortilink_heartbeat_timeout}
  */
  readonly fortilinkHeartbeatTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#fortilink_p2p_native_vlan SwitchGlobal#fortilink_p2p_native_vlan}
  */
  readonly fortilinkP2PNativeVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#fortilink_p2p_tpid SwitchGlobal#fortilink_p2p_tpid}
  */
  readonly fortilinkP2PTpid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#fortilink_vlan_optimization SwitchGlobal#fortilink_vlan_optimization}
  */
  readonly fortilinkVlanOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#id SwitchGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#ip_mac_binding SwitchGlobal#ip_mac_binding}
  */
  readonly ipMacBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#l2_memory_check SwitchGlobal#l2_memory_check}
  */
  readonly l2MemoryCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#l2_memory_check_interval SwitchGlobal#l2_memory_check_interval}
  */
  readonly l2MemoryCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#log_mac_limit_violations SwitchGlobal#log_mac_limit_violations}
  */
  readonly logMacLimitViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#loop_guard_tx_interval SwitchGlobal#loop_guard_tx_interval}
  */
  readonly loopGuardTxInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_address SwitchGlobal#mac_address}
  */
  readonly macAddress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_address_algorithm SwitchGlobal#mac_address_algorithm}
  */
  readonly macAddressAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_aging_interval SwitchGlobal#mac_aging_interval}
  */
  readonly macAgingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_violation_timer SwitchGlobal#mac_violation_timer}
  */
  readonly macViolationTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#max_path_in_ecmp_group SwitchGlobal#max_path_in_ecmp_group}
  */
  readonly maxPathInEcmpGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mclag_igmpsnooping_aware SwitchGlobal#mclag_igmpsnooping_aware}
  */
  readonly mclagIgmpsnoopingAware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mclag_peer_info_timeout SwitchGlobal#mclag_peer_info_timeout}
  */
  readonly mclagPeerInfoTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mclag_port_base SwitchGlobal#mclag_port_base}
  */
  readonly mclagPortBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mclag_split_brain_all_ports_down SwitchGlobal#mclag_split_brain_all_ports_down}
  */
  readonly mclagSplitBrainAllPortsDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mclag_split_brain_detect SwitchGlobal#mclag_split_brain_detect}
  */
  readonly mclagSplitBrainDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mclag_split_brain_priority SwitchGlobal#mclag_split_brain_priority}
  */
  readonly mclagSplitBrainPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mclag_stp_aware SwitchGlobal#mclag_stp_aware}
  */
  readonly mclagStpAware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mirror_qos SwitchGlobal#mirror_qos}
  */
  readonly mirrorQos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#name SwitchGlobal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#poe_alarm_threshold SwitchGlobal#poe_alarm_threshold}
  */
  readonly poeAlarmThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#poe_guard_band SwitchGlobal#poe_guard_band}
  */
  readonly poeGuardBand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#poe_power_budget SwitchGlobal#poe_power_budget}
  */
  readonly poePowerBudget?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#poe_power_mode SwitchGlobal#poe_power_mode}
  */
  readonly poePowerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#poe_pre_standard_detect SwitchGlobal#poe_pre_standard_detect}
  */
  readonly poePreStandardDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#storm_control_high_rate SwitchGlobal#storm_control_high_rate}
  */
  readonly stormControlHighRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#storm_control_monitor SwitchGlobal#storm_control_monitor}
  */
  readonly stormControlMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#storm_control_rate_filter SwitchGlobal#storm_control_rate_filter}
  */
  readonly stormControlRateFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#trunk_hash_mode SwitchGlobal#trunk_hash_mode}
  */
  readonly trunkHashMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#trunk_hash_unicast_src_port SwitchGlobal#trunk_hash_unicast_src_port}
  */
  readonly trunkHashUnicastSrcPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#trunk_hash_unkunicast_src_dst SwitchGlobal#trunk_hash_unkunicast_src_dst}
  */
  readonly trunkHashUnkunicastSrcDst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#virtual_wire_tpid SwitchGlobal#virtual_wire_tpid}
  */
  readonly virtualWireTpid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#vlan_pruning SwitchGlobal#vlan_pruning}
  */
  readonly vlanPruning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#vxlan_dport SwitchGlobal#vxlan_dport}
  */
  readonly vxlanDport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#vxlan_port SwitchGlobal#vxlan_port}
  */
  readonly vxlanPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#vxlan_sport SwitchGlobal#vxlan_sport}
  */
  readonly vxlanSport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#vxlan_stp_virtual_mac SwitchGlobal#vxlan_stp_virtual_mac}
  */
  readonly vxlanStpVirtualMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#vxlan_stp_virtual_root SwitchGlobal#vxlan_stp_virtual_root}
  */
  readonly vxlanStpVirtualRoot?: string;
  /**
  * port_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#port_security SwitchGlobal#port_security}
  */
  readonly portSecurity?: SwitchGlobalPortSecurity;
}
export interface SwitchGlobalPortSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#link_down_auth SwitchGlobal#link_down_auth}
  */
  readonly linkDownAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mab_entry_as SwitchGlobal#mab_entry_as}
  */
  readonly mabEntryAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mab_reauth SwitchGlobal#mab_reauth}
  */
  readonly mabReauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_called_station_delimiter SwitchGlobal#mac_called_station_delimiter}
  */
  readonly macCalledStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_calling_station_delimiter SwitchGlobal#mac_calling_station_delimiter}
  */
  readonly macCallingStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_case SwitchGlobal#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_password_delimiter SwitchGlobal#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#mac_username_delimiter SwitchGlobal#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#max_reauth_attempt SwitchGlobal#max_reauth_attempt}
  */
  readonly maxReauthAttempt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#quarantine_vlan SwitchGlobal#quarantine_vlan}
  */
  readonly quarantineVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#reauth_period SwitchGlobal#reauth_period}
  */
  readonly reauthPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#tx_period SwitchGlobal#tx_period}
  */
  readonly txPeriod?: number;
}

export function switchGlobalPortSecurityToTerraform(struct?: SwitchGlobalPortSecurityOutputReference | SwitchGlobalPortSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_down_auth: cdktf.stringToTerraform(struct!.linkDownAuth),
    mab_entry_as: cdktf.stringToTerraform(struct!.mabEntryAs),
    mab_reauth: cdktf.stringToTerraform(struct!.mabReauth),
    mac_called_station_delimiter: cdktf.stringToTerraform(struct!.macCalledStationDelimiter),
    mac_calling_station_delimiter: cdktf.stringToTerraform(struct!.macCallingStationDelimiter),
    mac_case: cdktf.stringToTerraform(struct!.macCase),
    mac_password_delimiter: cdktf.stringToTerraform(struct!.macPasswordDelimiter),
    mac_username_delimiter: cdktf.stringToTerraform(struct!.macUsernameDelimiter),
    max_reauth_attempt: cdktf.numberToTerraform(struct!.maxReauthAttempt),
    quarantine_vlan: cdktf.stringToTerraform(struct!.quarantineVlan),
    reauth_period: cdktf.numberToTerraform(struct!.reauthPeriod),
    tx_period: cdktf.numberToTerraform(struct!.txPeriod),
  }
}


export function switchGlobalPortSecurityToHclTerraform(struct?: SwitchGlobalPortSecurityOutputReference | SwitchGlobalPortSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_down_auth: {
      value: cdktf.stringToHclTerraform(struct!.linkDownAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mab_entry_as: {
      value: cdktf.stringToHclTerraform(struct!.mabEntryAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mab_reauth: {
      value: cdktf.stringToHclTerraform(struct!.mabReauth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_called_station_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macCalledStationDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_calling_station_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macCallingStationDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_case: {
      value: cdktf.stringToHclTerraform(struct!.macCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_password_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macPasswordDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_username_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.macUsernameDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_reauth_attempt: {
      value: cdktf.numberToHclTerraform(struct!.maxReauthAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quarantine_vlan: {
      value: cdktf.stringToHclTerraform(struct!.quarantineVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reauth_period: {
      value: cdktf.numberToHclTerraform(struct!.reauthPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_period: {
      value: cdktf.numberToHclTerraform(struct!.txPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchGlobalPortSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchGlobalPortSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkDownAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownAuth = this._linkDownAuth;
    }
    if (this._mabEntryAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mabEntryAs = this._mabEntryAs;
    }
    if (this._mabReauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.mabReauth = this._mabReauth;
    }
    if (this._macCalledStationDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macCalledStationDelimiter = this._macCalledStationDelimiter;
    }
    if (this._macCallingStationDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macCallingStationDelimiter = this._macCallingStationDelimiter;
    }
    if (this._macCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.macCase = this._macCase;
    }
    if (this._macPasswordDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macPasswordDelimiter = this._macPasswordDelimiter;
    }
    if (this._macUsernameDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.macUsernameDelimiter = this._macUsernameDelimiter;
    }
    if (this._maxReauthAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReauthAttempt = this._maxReauthAttempt;
    }
    if (this._quarantineVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineVlan = this._quarantineVlan;
    }
    if (this._reauthPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthPeriod = this._reauthPeriod;
    }
    if (this._txPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.txPeriod = this._txPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchGlobalPortSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkDownAuth = undefined;
      this._mabEntryAs = undefined;
      this._mabReauth = undefined;
      this._macCalledStationDelimiter = undefined;
      this._macCallingStationDelimiter = undefined;
      this._macCase = undefined;
      this._macPasswordDelimiter = undefined;
      this._macUsernameDelimiter = undefined;
      this._maxReauthAttempt = undefined;
      this._quarantineVlan = undefined;
      this._reauthPeriod = undefined;
      this._txPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkDownAuth = value.linkDownAuth;
      this._mabEntryAs = value.mabEntryAs;
      this._mabReauth = value.mabReauth;
      this._macCalledStationDelimiter = value.macCalledStationDelimiter;
      this._macCallingStationDelimiter = value.macCallingStationDelimiter;
      this._macCase = value.macCase;
      this._macPasswordDelimiter = value.macPasswordDelimiter;
      this._macUsernameDelimiter = value.macUsernameDelimiter;
      this._maxReauthAttempt = value.maxReauthAttempt;
      this._quarantineVlan = value.quarantineVlan;
      this._reauthPeriod = value.reauthPeriod;
      this._txPeriod = value.txPeriod;
    }
  }

  // link_down_auth - computed: true, optional: true, required: false
  private _linkDownAuth?: string; 
  public get linkDownAuth() {
    return this.getStringAttribute('link_down_auth');
  }
  public set linkDownAuth(value: string) {
    this._linkDownAuth = value;
  }
  public resetLinkDownAuth() {
    this._linkDownAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownAuthInput() {
    return this._linkDownAuth;
  }

  // mab_entry_as - computed: true, optional: true, required: false
  private _mabEntryAs?: string; 
  public get mabEntryAs() {
    return this.getStringAttribute('mab_entry_as');
  }
  public set mabEntryAs(value: string) {
    this._mabEntryAs = value;
  }
  public resetMabEntryAs() {
    this._mabEntryAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mabEntryAsInput() {
    return this._mabEntryAs;
  }

  // mab_reauth - computed: true, optional: true, required: false
  private _mabReauth?: string; 
  public get mabReauth() {
    return this.getStringAttribute('mab_reauth');
  }
  public set mabReauth(value: string) {
    this._mabReauth = value;
  }
  public resetMabReauth() {
    this._mabReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mabReauthInput() {
    return this._mabReauth;
  }

  // mac_called_station_delimiter - computed: true, optional: true, required: false
  private _macCalledStationDelimiter?: string; 
  public get macCalledStationDelimiter() {
    return this.getStringAttribute('mac_called_station_delimiter');
  }
  public set macCalledStationDelimiter(value: string) {
    this._macCalledStationDelimiter = value;
  }
  public resetMacCalledStationDelimiter() {
    this._macCalledStationDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCalledStationDelimiterInput() {
    return this._macCalledStationDelimiter;
  }

  // mac_calling_station_delimiter - computed: true, optional: true, required: false
  private _macCallingStationDelimiter?: string; 
  public get macCallingStationDelimiter() {
    return this.getStringAttribute('mac_calling_station_delimiter');
  }
  public set macCallingStationDelimiter(value: string) {
    this._macCallingStationDelimiter = value;
  }
  public resetMacCallingStationDelimiter() {
    this._macCallingStationDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCallingStationDelimiterInput() {
    return this._macCallingStationDelimiter;
  }

  // mac_case - computed: true, optional: true, required: false
  private _macCase?: string; 
  public get macCase() {
    return this.getStringAttribute('mac_case');
  }
  public set macCase(value: string) {
    this._macCase = value;
  }
  public resetMacCase() {
    this._macCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCaseInput() {
    return this._macCase;
  }

  // mac_password_delimiter - computed: true, optional: true, required: false
  private _macPasswordDelimiter?: string; 
  public get macPasswordDelimiter() {
    return this.getStringAttribute('mac_password_delimiter');
  }
  public set macPasswordDelimiter(value: string) {
    this._macPasswordDelimiter = value;
  }
  public resetMacPasswordDelimiter() {
    this._macPasswordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macPasswordDelimiterInput() {
    return this._macPasswordDelimiter;
  }

  // mac_username_delimiter - computed: true, optional: true, required: false
  private _macUsernameDelimiter?: string; 
  public get macUsernameDelimiter() {
    return this.getStringAttribute('mac_username_delimiter');
  }
  public set macUsernameDelimiter(value: string) {
    this._macUsernameDelimiter = value;
  }
  public resetMacUsernameDelimiter() {
    this._macUsernameDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macUsernameDelimiterInput() {
    return this._macUsernameDelimiter;
  }

  // max_reauth_attempt - computed: true, optional: true, required: false
  private _maxReauthAttempt?: number; 
  public get maxReauthAttempt() {
    return this.getNumberAttribute('max_reauth_attempt');
  }
  public set maxReauthAttempt(value: number) {
    this._maxReauthAttempt = value;
  }
  public resetMaxReauthAttempt() {
    this._maxReauthAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReauthAttemptInput() {
    return this._maxReauthAttempt;
  }

  // quarantine_vlan - computed: true, optional: true, required: false
  private _quarantineVlan?: string; 
  public get quarantineVlan() {
    return this.getStringAttribute('quarantine_vlan');
  }
  public set quarantineVlan(value: string) {
    this._quarantineVlan = value;
  }
  public resetQuarantineVlan() {
    this._quarantineVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineVlanInput() {
    return this._quarantineVlan;
  }

  // reauth_period - computed: true, optional: true, required: false
  private _reauthPeriod?: number; 
  public get reauthPeriod() {
    return this.getNumberAttribute('reauth_period');
  }
  public set reauthPeriod(value: number) {
    this._reauthPeriod = value;
  }
  public resetReauthPeriod() {
    this._reauthPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthPeriodInput() {
    return this._reauthPeriod;
  }

  // tx_period - computed: true, optional: true, required: false
  private _txPeriod?: number; 
  public get txPeriod() {
    return this.getNumberAttribute('tx_period');
  }
  public set txPeriod(value: number) {
    this._txPeriod = value;
  }
  public resetTxPeriod() {
    this._txPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPeriodInput() {
    return this._txPeriod;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global fortiswitch_switch_global}
*/
export class SwitchGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchGlobal to import
  * @param importFromId The id of the existing SwitchGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_global fortiswitch_switch_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_global',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessVlanMode = config.accessVlanMode;
    this._autoFortilinkDiscovery = config.autoFortilinkDiscovery;
    this._autoIsl = config.autoIsl;
    this._autoIslPortGroup = config.autoIslPortGroup;
    this._autoStpPriority = config.autoStpPriority;
    this._bpduLearn = config.bpduLearn;
    this._dhcpSnoopingDatabaseExport = config.dhcpSnoopingDatabaseExport;
    this._dmiGlobalAll = config.dmiGlobalAll;
    this._flapguardRetainTrigger = config.flapguardRetainTrigger;
    this._floodUnknownMulticast = config.floodUnknownMulticast;
    this._floodVtp = config.floodVtp;
    this._fortiTrunkDmac = config.fortiTrunkDmac;
    this._fortilinkHeartbeatTimeout = config.fortilinkHeartbeatTimeout;
    this._fortilinkP2PNativeVlan = config.fortilinkP2PNativeVlan;
    this._fortilinkP2PTpid = config.fortilinkP2PTpid;
    this._fortilinkVlanOptimization = config.fortilinkVlanOptimization;
    this._id = config.id;
    this._ipMacBinding = config.ipMacBinding;
    this._l2MemoryCheck = config.l2MemoryCheck;
    this._l2MemoryCheckInterval = config.l2MemoryCheckInterval;
    this._logMacLimitViolations = config.logMacLimitViolations;
    this._loopGuardTxInterval = config.loopGuardTxInterval;
    this._macAddress = config.macAddress;
    this._macAddressAlgorithm = config.macAddressAlgorithm;
    this._macAgingInterval = config.macAgingInterval;
    this._macViolationTimer = config.macViolationTimer;
    this._maxPathInEcmpGroup = config.maxPathInEcmpGroup;
    this._mclagIgmpsnoopingAware = config.mclagIgmpsnoopingAware;
    this._mclagPeerInfoTimeout = config.mclagPeerInfoTimeout;
    this._mclagPortBase = config.mclagPortBase;
    this._mclagSplitBrainAllPortsDown = config.mclagSplitBrainAllPortsDown;
    this._mclagSplitBrainDetect = config.mclagSplitBrainDetect;
    this._mclagSplitBrainPriority = config.mclagSplitBrainPriority;
    this._mclagStpAware = config.mclagStpAware;
    this._mirrorQos = config.mirrorQos;
    this._name = config.name;
    this._poeAlarmThreshold = config.poeAlarmThreshold;
    this._poeGuardBand = config.poeGuardBand;
    this._poePowerBudget = config.poePowerBudget;
    this._poePowerMode = config.poePowerMode;
    this._poePreStandardDetect = config.poePreStandardDetect;
    this._stormControlHighRate = config.stormControlHighRate;
    this._stormControlMonitor = config.stormControlMonitor;
    this._stormControlRateFilter = config.stormControlRateFilter;
    this._trunkHashMode = config.trunkHashMode;
    this._trunkHashUnicastSrcPort = config.trunkHashUnicastSrcPort;
    this._trunkHashUnkunicastSrcDst = config.trunkHashUnkunicastSrcDst;
    this._virtualWireTpid = config.virtualWireTpid;
    this._vlanPruning = config.vlanPruning;
    this._vxlanDport = config.vxlanDport;
    this._vxlanPort = config.vxlanPort;
    this._vxlanSport = config.vxlanSport;
    this._vxlanStpVirtualMac = config.vxlanStpVirtualMac;
    this._vxlanStpVirtualRoot = config.vxlanStpVirtualRoot;
    this._portSecurity.internalValue = config.portSecurity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan_mode - computed: true, optional: true, required: false
  private _accessVlanMode?: string; 
  public get accessVlanMode() {
    return this.getStringAttribute('access_vlan_mode');
  }
  public set accessVlanMode(value: string) {
    this._accessVlanMode = value;
  }
  public resetAccessVlanMode() {
    this._accessVlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanModeInput() {
    return this._accessVlanMode;
  }

  // auto_fortilink_discovery - computed: true, optional: true, required: false
  private _autoFortilinkDiscovery?: string; 
  public get autoFortilinkDiscovery() {
    return this.getStringAttribute('auto_fortilink_discovery');
  }
  public set autoFortilinkDiscovery(value: string) {
    this._autoFortilinkDiscovery = value;
  }
  public resetAutoFortilinkDiscovery() {
    this._autoFortilinkDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFortilinkDiscoveryInput() {
    return this._autoFortilinkDiscovery;
  }

  // auto_isl - computed: true, optional: true, required: false
  private _autoIsl?: string; 
  public get autoIsl() {
    return this.getStringAttribute('auto_isl');
  }
  public set autoIsl(value: string) {
    this._autoIsl = value;
  }
  public resetAutoIsl() {
    this._autoIsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslInput() {
    return this._autoIsl;
  }

  // auto_isl_port_group - computed: true, optional: true, required: false
  private _autoIslPortGroup?: number; 
  public get autoIslPortGroup() {
    return this.getNumberAttribute('auto_isl_port_group');
  }
  public set autoIslPortGroup(value: number) {
    this._autoIslPortGroup = value;
  }
  public resetAutoIslPortGroup() {
    this._autoIslPortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslPortGroupInput() {
    return this._autoIslPortGroup;
  }

  // auto_stp_priority - computed: true, optional: true, required: false
  private _autoStpPriority?: string; 
  public get autoStpPriority() {
    return this.getStringAttribute('auto_stp_priority');
  }
  public set autoStpPriority(value: string) {
    this._autoStpPriority = value;
  }
  public resetAutoStpPriority() {
    this._autoStpPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStpPriorityInput() {
    return this._autoStpPriority;
  }

  // bpdu_learn - computed: true, optional: true, required: false
  private _bpduLearn?: string; 
  public get bpduLearn() {
    return this.getStringAttribute('bpdu_learn');
  }
  public set bpduLearn(value: string) {
    this._bpduLearn = value;
  }
  public resetBpduLearn() {
    this._bpduLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduLearnInput() {
    return this._bpduLearn;
  }

  // dhcp_snooping_database_export - computed: true, optional: true, required: false
  private _dhcpSnoopingDatabaseExport?: string; 
  public get dhcpSnoopingDatabaseExport() {
    return this.getStringAttribute('dhcp_snooping_database_export');
  }
  public set dhcpSnoopingDatabaseExport(value: string) {
    this._dhcpSnoopingDatabaseExport = value;
  }
  public resetDhcpSnoopingDatabaseExport() {
    this._dhcpSnoopingDatabaseExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingDatabaseExportInput() {
    return this._dhcpSnoopingDatabaseExport;
  }

  // dmi_global_all - computed: true, optional: true, required: false
  private _dmiGlobalAll?: string; 
  public get dmiGlobalAll() {
    return this.getStringAttribute('dmi_global_all');
  }
  public set dmiGlobalAll(value: string) {
    this._dmiGlobalAll = value;
  }
  public resetDmiGlobalAll() {
    this._dmiGlobalAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmiGlobalAllInput() {
    return this._dmiGlobalAll;
  }

  // flapguard_retain_trigger - computed: true, optional: true, required: false
  private _flapguardRetainTrigger?: string; 
  public get flapguardRetainTrigger() {
    return this.getStringAttribute('flapguard_retain_trigger');
  }
  public set flapguardRetainTrigger(value: string) {
    this._flapguardRetainTrigger = value;
  }
  public resetFlapguardRetainTrigger() {
    this._flapguardRetainTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapguardRetainTriggerInput() {
    return this._flapguardRetainTrigger;
  }

  // flood_unknown_multicast - computed: true, optional: true, required: false
  private _floodUnknownMulticast?: string; 
  public get floodUnknownMulticast() {
    return this.getStringAttribute('flood_unknown_multicast');
  }
  public set floodUnknownMulticast(value: string) {
    this._floodUnknownMulticast = value;
  }
  public resetFloodUnknownMulticast() {
    this._floodUnknownMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodUnknownMulticastInput() {
    return this._floodUnknownMulticast;
  }

  // flood_vtp - computed: true, optional: true, required: false
  private _floodVtp?: string; 
  public get floodVtp() {
    return this.getStringAttribute('flood_vtp');
  }
  public set floodVtp(value: string) {
    this._floodVtp = value;
  }
  public resetFloodVtp() {
    this._floodVtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodVtpInput() {
    return this._floodVtp;
  }

  // forti_trunk_dmac - computed: true, optional: true, required: false
  private _fortiTrunkDmac?: string; 
  public get fortiTrunkDmac() {
    return this.getStringAttribute('forti_trunk_dmac');
  }
  public set fortiTrunkDmac(value: string) {
    this._fortiTrunkDmac = value;
  }
  public resetFortiTrunkDmac() {
    this._fortiTrunkDmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiTrunkDmacInput() {
    return this._fortiTrunkDmac;
  }

  // fortilink_heartbeat_timeout - computed: true, optional: true, required: false
  private _fortilinkHeartbeatTimeout?: number; 
  public get fortilinkHeartbeatTimeout() {
    return this.getNumberAttribute('fortilink_heartbeat_timeout');
  }
  public set fortilinkHeartbeatTimeout(value: number) {
    this._fortilinkHeartbeatTimeout = value;
  }
  public resetFortilinkHeartbeatTimeout() {
    this._fortilinkHeartbeatTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkHeartbeatTimeoutInput() {
    return this._fortilinkHeartbeatTimeout;
  }

  // fortilink_p2p_native_vlan - computed: true, optional: true, required: false
  private _fortilinkP2PNativeVlan?: number; 
  public get fortilinkP2PNativeVlan() {
    return this.getNumberAttribute('fortilink_p2p_native_vlan');
  }
  public set fortilinkP2PNativeVlan(value: number) {
    this._fortilinkP2PNativeVlan = value;
  }
  public resetFortilinkP2PNativeVlan() {
    this._fortilinkP2PNativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkP2PNativeVlanInput() {
    return this._fortilinkP2PNativeVlan;
  }

  // fortilink_p2p_tpid - computed: true, optional: true, required: false
  private _fortilinkP2PTpid?: number; 
  public get fortilinkP2PTpid() {
    return this.getNumberAttribute('fortilink_p2p_tpid');
  }
  public set fortilinkP2PTpid(value: number) {
    this._fortilinkP2PTpid = value;
  }
  public resetFortilinkP2PTpid() {
    this._fortilinkP2PTpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkP2PTpidInput() {
    return this._fortilinkP2PTpid;
  }

  // fortilink_vlan_optimization - computed: true, optional: true, required: false
  private _fortilinkVlanOptimization?: string; 
  public get fortilinkVlanOptimization() {
    return this.getStringAttribute('fortilink_vlan_optimization');
  }
  public set fortilinkVlanOptimization(value: string) {
    this._fortilinkVlanOptimization = value;
  }
  public resetFortilinkVlanOptimization() {
    this._fortilinkVlanOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkVlanOptimizationInput() {
    return this._fortilinkVlanOptimization;
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

  // ip_mac_binding - computed: true, optional: true, required: false
  private _ipMacBinding?: string; 
  public get ipMacBinding() {
    return this.getStringAttribute('ip_mac_binding');
  }
  public set ipMacBinding(value: string) {
    this._ipMacBinding = value;
  }
  public resetIpMacBinding() {
    this._ipMacBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacBindingInput() {
    return this._ipMacBinding;
  }

  // l2_memory_check - computed: true, optional: true, required: false
  private _l2MemoryCheck?: string; 
  public get l2MemoryCheck() {
    return this.getStringAttribute('l2_memory_check');
  }
  public set l2MemoryCheck(value: string) {
    this._l2MemoryCheck = value;
  }
  public resetL2MemoryCheck() {
    this._l2MemoryCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2MemoryCheckInput() {
    return this._l2MemoryCheck;
  }

  // l2_memory_check_interval - computed: true, optional: true, required: false
  private _l2MemoryCheckInterval?: number; 
  public get l2MemoryCheckInterval() {
    return this.getNumberAttribute('l2_memory_check_interval');
  }
  public set l2MemoryCheckInterval(value: number) {
    this._l2MemoryCheckInterval = value;
  }
  public resetL2MemoryCheckInterval() {
    this._l2MemoryCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2MemoryCheckIntervalInput() {
    return this._l2MemoryCheckInterval;
  }

  // log_mac_limit_violations - computed: true, optional: true, required: false
  private _logMacLimitViolations?: string; 
  public get logMacLimitViolations() {
    return this.getStringAttribute('log_mac_limit_violations');
  }
  public set logMacLimitViolations(value: string) {
    this._logMacLimitViolations = value;
  }
  public resetLogMacLimitViolations() {
    this._logMacLimitViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMacLimitViolationsInput() {
    return this._logMacLimitViolations;
  }

  // loop_guard_tx_interval - computed: true, optional: true, required: false
  private _loopGuardTxInterval?: number; 
  public get loopGuardTxInterval() {
    return this.getNumberAttribute('loop_guard_tx_interval');
  }
  public set loopGuardTxInterval(value: number) {
    this._loopGuardTxInterval = value;
  }
  public resetLoopGuardTxInterval() {
    this._loopGuardTxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopGuardTxIntervalInput() {
    return this._loopGuardTxInterval;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: number; 
  public get macAddress() {
    return this.getNumberAttribute('mac_address');
  }
  public set macAddress(value: number) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mac_address_algorithm - computed: true, optional: true, required: false
  private _macAddressAlgorithm?: string; 
  public get macAddressAlgorithm() {
    return this.getStringAttribute('mac_address_algorithm');
  }
  public set macAddressAlgorithm(value: string) {
    this._macAddressAlgorithm = value;
  }
  public resetMacAddressAlgorithm() {
    this._macAddressAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressAlgorithmInput() {
    return this._macAddressAlgorithm;
  }

  // mac_aging_interval - computed: true, optional: true, required: false
  private _macAgingInterval?: number; 
  public get macAgingInterval() {
    return this.getNumberAttribute('mac_aging_interval');
  }
  public set macAgingInterval(value: number) {
    this._macAgingInterval = value;
  }
  public resetMacAgingInterval() {
    this._macAgingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAgingIntervalInput() {
    return this._macAgingInterval;
  }

  // mac_violation_timer - computed: true, optional: true, required: false
  private _macViolationTimer?: number; 
  public get macViolationTimer() {
    return this.getNumberAttribute('mac_violation_timer');
  }
  public set macViolationTimer(value: number) {
    this._macViolationTimer = value;
  }
  public resetMacViolationTimer() {
    this._macViolationTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macViolationTimerInput() {
    return this._macViolationTimer;
  }

  // max_path_in_ecmp_group - computed: true, optional: true, required: false
  private _maxPathInEcmpGroup?: number; 
  public get maxPathInEcmpGroup() {
    return this.getNumberAttribute('max_path_in_ecmp_group');
  }
  public set maxPathInEcmpGroup(value: number) {
    this._maxPathInEcmpGroup = value;
  }
  public resetMaxPathInEcmpGroup() {
    this._maxPathInEcmpGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPathInEcmpGroupInput() {
    return this._maxPathInEcmpGroup;
  }

  // mclag_igmpsnooping_aware - computed: true, optional: true, required: false
  private _mclagIgmpsnoopingAware?: string; 
  public get mclagIgmpsnoopingAware() {
    return this.getStringAttribute('mclag_igmpsnooping_aware');
  }
  public set mclagIgmpsnoopingAware(value: string) {
    this._mclagIgmpsnoopingAware = value;
  }
  public resetMclagIgmpsnoopingAware() {
    this._mclagIgmpsnoopingAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagIgmpsnoopingAwareInput() {
    return this._mclagIgmpsnoopingAware;
  }

  // mclag_peer_info_timeout - computed: true, optional: true, required: false
  private _mclagPeerInfoTimeout?: number; 
  public get mclagPeerInfoTimeout() {
    return this.getNumberAttribute('mclag_peer_info_timeout');
  }
  public set mclagPeerInfoTimeout(value: number) {
    this._mclagPeerInfoTimeout = value;
  }
  public resetMclagPeerInfoTimeout() {
    this._mclagPeerInfoTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagPeerInfoTimeoutInput() {
    return this._mclagPeerInfoTimeout;
  }

  // mclag_port_base - computed: true, optional: true, required: false
  private _mclagPortBase?: number; 
  public get mclagPortBase() {
    return this.getNumberAttribute('mclag_port_base');
  }
  public set mclagPortBase(value: number) {
    this._mclagPortBase = value;
  }
  public resetMclagPortBase() {
    this._mclagPortBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagPortBaseInput() {
    return this._mclagPortBase;
  }

  // mclag_split_brain_all_ports_down - computed: true, optional: true, required: false
  private _mclagSplitBrainAllPortsDown?: string; 
  public get mclagSplitBrainAllPortsDown() {
    return this.getStringAttribute('mclag_split_brain_all_ports_down');
  }
  public set mclagSplitBrainAllPortsDown(value: string) {
    this._mclagSplitBrainAllPortsDown = value;
  }
  public resetMclagSplitBrainAllPortsDown() {
    this._mclagSplitBrainAllPortsDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagSplitBrainAllPortsDownInput() {
    return this._mclagSplitBrainAllPortsDown;
  }

  // mclag_split_brain_detect - computed: true, optional: true, required: false
  private _mclagSplitBrainDetect?: string; 
  public get mclagSplitBrainDetect() {
    return this.getStringAttribute('mclag_split_brain_detect');
  }
  public set mclagSplitBrainDetect(value: string) {
    this._mclagSplitBrainDetect = value;
  }
  public resetMclagSplitBrainDetect() {
    this._mclagSplitBrainDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagSplitBrainDetectInput() {
    return this._mclagSplitBrainDetect;
  }

  // mclag_split_brain_priority - computed: true, optional: true, required: false
  private _mclagSplitBrainPriority?: number; 
  public get mclagSplitBrainPriority() {
    return this.getNumberAttribute('mclag_split_brain_priority');
  }
  public set mclagSplitBrainPriority(value: number) {
    this._mclagSplitBrainPriority = value;
  }
  public resetMclagSplitBrainPriority() {
    this._mclagSplitBrainPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagSplitBrainPriorityInput() {
    return this._mclagSplitBrainPriority;
  }

  // mclag_stp_aware - computed: true, optional: true, required: false
  private _mclagStpAware?: string; 
  public get mclagStpAware() {
    return this.getStringAttribute('mclag_stp_aware');
  }
  public set mclagStpAware(value: string) {
    this._mclagStpAware = value;
  }
  public resetMclagStpAware() {
    this._mclagStpAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagStpAwareInput() {
    return this._mclagStpAware;
  }

  // mirror_qos - computed: true, optional: true, required: false
  private _mirrorQos?: number; 
  public get mirrorQos() {
    return this.getNumberAttribute('mirror_qos');
  }
  public set mirrorQos(value: number) {
    this._mirrorQos = value;
  }
  public resetMirrorQos() {
    this._mirrorQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorQosInput() {
    return this._mirrorQos;
  }

  // name - computed: true, optional: true, required: false
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

  // poe_alarm_threshold - computed: true, optional: true, required: false
  private _poeAlarmThreshold?: number; 
  public get poeAlarmThreshold() {
    return this.getNumberAttribute('poe_alarm_threshold');
  }
  public set poeAlarmThreshold(value: number) {
    this._poeAlarmThreshold = value;
  }
  public resetPoeAlarmThreshold() {
    this._poeAlarmThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeAlarmThresholdInput() {
    return this._poeAlarmThreshold;
  }

  // poe_guard_band - computed: true, optional: true, required: false
  private _poeGuardBand?: number; 
  public get poeGuardBand() {
    return this.getNumberAttribute('poe_guard_band');
  }
  public set poeGuardBand(value: number) {
    this._poeGuardBand = value;
  }
  public resetPoeGuardBand() {
    this._poeGuardBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeGuardBandInput() {
    return this._poeGuardBand;
  }

  // poe_power_budget - computed: true, optional: true, required: false
  private _poePowerBudget?: number; 
  public get poePowerBudget() {
    return this.getNumberAttribute('poe_power_budget');
  }
  public set poePowerBudget(value: number) {
    this._poePowerBudget = value;
  }
  public resetPoePowerBudget() {
    this._poePowerBudget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePowerBudgetInput() {
    return this._poePowerBudget;
  }

  // poe_power_mode - computed: true, optional: true, required: false
  private _poePowerMode?: string; 
  public get poePowerMode() {
    return this.getStringAttribute('poe_power_mode');
  }
  public set poePowerMode(value: string) {
    this._poePowerMode = value;
  }
  public resetPoePowerMode() {
    this._poePowerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePowerModeInput() {
    return this._poePowerMode;
  }

  // poe_pre_standard_detect - computed: true, optional: true, required: false
  private _poePreStandardDetect?: string; 
  public get poePreStandardDetect() {
    return this.getStringAttribute('poe_pre_standard_detect');
  }
  public set poePreStandardDetect(value: string) {
    this._poePreStandardDetect = value;
  }
  public resetPoePreStandardDetect() {
    this._poePreStandardDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePreStandardDetectInput() {
    return this._poePreStandardDetect;
  }

  // storm_control_high_rate - computed: true, optional: true, required: false
  private _stormControlHighRate?: number; 
  public get stormControlHighRate() {
    return this.getNumberAttribute('storm_control_high_rate');
  }
  public set stormControlHighRate(value: number) {
    this._stormControlHighRate = value;
  }
  public resetStormControlHighRate() {
    this._stormControlHighRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlHighRateInput() {
    return this._stormControlHighRate;
  }

  // storm_control_monitor - computed: true, optional: true, required: false
  private _stormControlMonitor?: string; 
  public get stormControlMonitor() {
    return this.getStringAttribute('storm_control_monitor');
  }
  public set stormControlMonitor(value: string) {
    this._stormControlMonitor = value;
  }
  public resetStormControlMonitor() {
    this._stormControlMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlMonitorInput() {
    return this._stormControlMonitor;
  }

  // storm_control_rate_filter - computed: true, optional: true, required: false
  private _stormControlRateFilter?: number; 
  public get stormControlRateFilter() {
    return this.getNumberAttribute('storm_control_rate_filter');
  }
  public set stormControlRateFilter(value: number) {
    this._stormControlRateFilter = value;
  }
  public resetStormControlRateFilter() {
    this._stormControlRateFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlRateFilterInput() {
    return this._stormControlRateFilter;
  }

  // trunk_hash_mode - computed: true, optional: true, required: false
  private _trunkHashMode?: string; 
  public get trunkHashMode() {
    return this.getStringAttribute('trunk_hash_mode');
  }
  public set trunkHashMode(value: string) {
    this._trunkHashMode = value;
  }
  public resetTrunkHashMode() {
    this._trunkHashMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkHashModeInput() {
    return this._trunkHashMode;
  }

  // trunk_hash_unicast_src_port - computed: true, optional: true, required: false
  private _trunkHashUnicastSrcPort?: string; 
  public get trunkHashUnicastSrcPort() {
    return this.getStringAttribute('trunk_hash_unicast_src_port');
  }
  public set trunkHashUnicastSrcPort(value: string) {
    this._trunkHashUnicastSrcPort = value;
  }
  public resetTrunkHashUnicastSrcPort() {
    this._trunkHashUnicastSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkHashUnicastSrcPortInput() {
    return this._trunkHashUnicastSrcPort;
  }

  // trunk_hash_unkunicast_src_dst - computed: true, optional: true, required: false
  private _trunkHashUnkunicastSrcDst?: string; 
  public get trunkHashUnkunicastSrcDst() {
    return this.getStringAttribute('trunk_hash_unkunicast_src_dst');
  }
  public set trunkHashUnkunicastSrcDst(value: string) {
    this._trunkHashUnkunicastSrcDst = value;
  }
  public resetTrunkHashUnkunicastSrcDst() {
    this._trunkHashUnkunicastSrcDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkHashUnkunicastSrcDstInput() {
    return this._trunkHashUnkunicastSrcDst;
  }

  // virtual_wire_tpid - computed: true, optional: true, required: false
  private _virtualWireTpid?: number; 
  public get virtualWireTpid() {
    return this.getNumberAttribute('virtual_wire_tpid');
  }
  public set virtualWireTpid(value: number) {
    this._virtualWireTpid = value;
  }
  public resetVirtualWireTpid() {
    this._virtualWireTpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireTpidInput() {
    return this._virtualWireTpid;
  }

  // vlan_pruning - computed: true, optional: true, required: false
  private _vlanPruning?: string; 
  public get vlanPruning() {
    return this.getStringAttribute('vlan_pruning');
  }
  public set vlanPruning(value: string) {
    this._vlanPruning = value;
  }
  public resetVlanPruning() {
    this._vlanPruning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPruningInput() {
    return this._vlanPruning;
  }

  // vxlan_dport - computed: true, optional: true, required: false
  private _vxlanDport?: number; 
  public get vxlanDport() {
    return this.getNumberAttribute('vxlan_dport');
  }
  public set vxlanDport(value: number) {
    this._vxlanDport = value;
  }
  public resetVxlanDport() {
    this._vxlanDport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanDportInput() {
    return this._vxlanDport;
  }

  // vxlan_port - computed: true, optional: true, required: false
  private _vxlanPort?: number; 
  public get vxlanPort() {
    return this.getNumberAttribute('vxlan_port');
  }
  public set vxlanPort(value: number) {
    this._vxlanPort = value;
  }
  public resetVxlanPort() {
    this._vxlanPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanPortInput() {
    return this._vxlanPort;
  }

  // vxlan_sport - computed: true, optional: true, required: false
  private _vxlanSport?: number; 
  public get vxlanSport() {
    return this.getNumberAttribute('vxlan_sport');
  }
  public set vxlanSport(value: number) {
    this._vxlanSport = value;
  }
  public resetVxlanSport() {
    this._vxlanSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanSportInput() {
    return this._vxlanSport;
  }

  // vxlan_stp_virtual_mac - computed: true, optional: true, required: false
  private _vxlanStpVirtualMac?: string; 
  public get vxlanStpVirtualMac() {
    return this.getStringAttribute('vxlan_stp_virtual_mac');
  }
  public set vxlanStpVirtualMac(value: string) {
    this._vxlanStpVirtualMac = value;
  }
  public resetVxlanStpVirtualMac() {
    this._vxlanStpVirtualMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanStpVirtualMacInput() {
    return this._vxlanStpVirtualMac;
  }

  // vxlan_stp_virtual_root - computed: true, optional: true, required: false
  private _vxlanStpVirtualRoot?: string; 
  public get vxlanStpVirtualRoot() {
    return this.getStringAttribute('vxlan_stp_virtual_root');
  }
  public set vxlanStpVirtualRoot(value: string) {
    this._vxlanStpVirtualRoot = value;
  }
  public resetVxlanStpVirtualRoot() {
    this._vxlanStpVirtualRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanStpVirtualRootInput() {
    return this._vxlanStpVirtualRoot;
  }

  // port_security - computed: false, optional: true, required: false
  private _portSecurity = new SwitchGlobalPortSecurityOutputReference(this, "port_security");
  public get portSecurity() {
    return this._portSecurity;
  }
  public putPortSecurity(value: SwitchGlobalPortSecurity) {
    this._portSecurity.internalValue = value;
  }
  public resetPortSecurity() {
    this._portSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityInput() {
    return this._portSecurity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_vlan_mode: cdktf.stringToTerraform(this._accessVlanMode),
      auto_fortilink_discovery: cdktf.stringToTerraform(this._autoFortilinkDiscovery),
      auto_isl: cdktf.stringToTerraform(this._autoIsl),
      auto_isl_port_group: cdktf.numberToTerraform(this._autoIslPortGroup),
      auto_stp_priority: cdktf.stringToTerraform(this._autoStpPriority),
      bpdu_learn: cdktf.stringToTerraform(this._bpduLearn),
      dhcp_snooping_database_export: cdktf.stringToTerraform(this._dhcpSnoopingDatabaseExport),
      dmi_global_all: cdktf.stringToTerraform(this._dmiGlobalAll),
      flapguard_retain_trigger: cdktf.stringToTerraform(this._flapguardRetainTrigger),
      flood_unknown_multicast: cdktf.stringToTerraform(this._floodUnknownMulticast),
      flood_vtp: cdktf.stringToTerraform(this._floodVtp),
      forti_trunk_dmac: cdktf.stringToTerraform(this._fortiTrunkDmac),
      fortilink_heartbeat_timeout: cdktf.numberToTerraform(this._fortilinkHeartbeatTimeout),
      fortilink_p2p_native_vlan: cdktf.numberToTerraform(this._fortilinkP2PNativeVlan),
      fortilink_p2p_tpid: cdktf.numberToTerraform(this._fortilinkP2PTpid),
      fortilink_vlan_optimization: cdktf.stringToTerraform(this._fortilinkVlanOptimization),
      id: cdktf.stringToTerraform(this._id),
      ip_mac_binding: cdktf.stringToTerraform(this._ipMacBinding),
      l2_memory_check: cdktf.stringToTerraform(this._l2MemoryCheck),
      l2_memory_check_interval: cdktf.numberToTerraform(this._l2MemoryCheckInterval),
      log_mac_limit_violations: cdktf.stringToTerraform(this._logMacLimitViolations),
      loop_guard_tx_interval: cdktf.numberToTerraform(this._loopGuardTxInterval),
      mac_address: cdktf.numberToTerraform(this._macAddress),
      mac_address_algorithm: cdktf.stringToTerraform(this._macAddressAlgorithm),
      mac_aging_interval: cdktf.numberToTerraform(this._macAgingInterval),
      mac_violation_timer: cdktf.numberToTerraform(this._macViolationTimer),
      max_path_in_ecmp_group: cdktf.numberToTerraform(this._maxPathInEcmpGroup),
      mclag_igmpsnooping_aware: cdktf.stringToTerraform(this._mclagIgmpsnoopingAware),
      mclag_peer_info_timeout: cdktf.numberToTerraform(this._mclagPeerInfoTimeout),
      mclag_port_base: cdktf.numberToTerraform(this._mclagPortBase),
      mclag_split_brain_all_ports_down: cdktf.stringToTerraform(this._mclagSplitBrainAllPortsDown),
      mclag_split_brain_detect: cdktf.stringToTerraform(this._mclagSplitBrainDetect),
      mclag_split_brain_priority: cdktf.numberToTerraform(this._mclagSplitBrainPriority),
      mclag_stp_aware: cdktf.stringToTerraform(this._mclagStpAware),
      mirror_qos: cdktf.numberToTerraform(this._mirrorQos),
      name: cdktf.stringToTerraform(this._name),
      poe_alarm_threshold: cdktf.numberToTerraform(this._poeAlarmThreshold),
      poe_guard_band: cdktf.numberToTerraform(this._poeGuardBand),
      poe_power_budget: cdktf.numberToTerraform(this._poePowerBudget),
      poe_power_mode: cdktf.stringToTerraform(this._poePowerMode),
      poe_pre_standard_detect: cdktf.stringToTerraform(this._poePreStandardDetect),
      storm_control_high_rate: cdktf.numberToTerraform(this._stormControlHighRate),
      storm_control_monitor: cdktf.stringToTerraform(this._stormControlMonitor),
      storm_control_rate_filter: cdktf.numberToTerraform(this._stormControlRateFilter),
      trunk_hash_mode: cdktf.stringToTerraform(this._trunkHashMode),
      trunk_hash_unicast_src_port: cdktf.stringToTerraform(this._trunkHashUnicastSrcPort),
      trunk_hash_unkunicast_src_dst: cdktf.stringToTerraform(this._trunkHashUnkunicastSrcDst),
      virtual_wire_tpid: cdktf.numberToTerraform(this._virtualWireTpid),
      vlan_pruning: cdktf.stringToTerraform(this._vlanPruning),
      vxlan_dport: cdktf.numberToTerraform(this._vxlanDport),
      vxlan_port: cdktf.numberToTerraform(this._vxlanPort),
      vxlan_sport: cdktf.numberToTerraform(this._vxlanSport),
      vxlan_stp_virtual_mac: cdktf.stringToTerraform(this._vxlanStpVirtualMac),
      vxlan_stp_virtual_root: cdktf.stringToTerraform(this._vxlanStpVirtualRoot),
      port_security: switchGlobalPortSecurityToTerraform(this._portSecurity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vlan_mode: {
        value: cdktf.stringToHclTerraform(this._accessVlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_fortilink_discovery: {
        value: cdktf.stringToHclTerraform(this._autoFortilinkDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl: {
        value: cdktf.stringToHclTerraform(this._autoIsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl_port_group: {
        value: cdktf.numberToHclTerraform(this._autoIslPortGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_stp_priority: {
        value: cdktf.stringToHclTerraform(this._autoStpPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bpdu_learn: {
        value: cdktf.stringToHclTerraform(this._bpduLearn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snooping_database_export: {
        value: cdktf.stringToHclTerraform(this._dhcpSnoopingDatabaseExport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dmi_global_all: {
        value: cdktf.stringToHclTerraform(this._dmiGlobalAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flapguard_retain_trigger: {
        value: cdktf.stringToHclTerraform(this._flapguardRetainTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flood_unknown_multicast: {
        value: cdktf.stringToHclTerraform(this._floodUnknownMulticast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flood_vtp: {
        value: cdktf.stringToHclTerraform(this._floodVtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forti_trunk_dmac: {
        value: cdktf.stringToHclTerraform(this._fortiTrunkDmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink_heartbeat_timeout: {
        value: cdktf.numberToHclTerraform(this._fortilinkHeartbeatTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortilink_p2p_native_vlan: {
        value: cdktf.numberToHclTerraform(this._fortilinkP2PNativeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortilink_p2p_tpid: {
        value: cdktf.numberToHclTerraform(this._fortilinkP2PTpid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortilink_vlan_optimization: {
        value: cdktf.stringToHclTerraform(this._fortilinkVlanOptimization),
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
      ip_mac_binding: {
        value: cdktf.stringToHclTerraform(this._ipMacBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2_memory_check: {
        value: cdktf.stringToHclTerraform(this._l2MemoryCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2_memory_check_interval: {
        value: cdktf.numberToHclTerraform(this._l2MemoryCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_mac_limit_violations: {
        value: cdktf.stringToHclTerraform(this._logMacLimitViolations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_guard_tx_interval: {
        value: cdktf.numberToHclTerraform(this._loopGuardTxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.numberToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address_algorithm: {
        value: cdktf.stringToHclTerraform(this._macAddressAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_aging_interval: {
        value: cdktf.numberToHclTerraform(this._macAgingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_violation_timer: {
        value: cdktf.numberToHclTerraform(this._macViolationTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_path_in_ecmp_group: {
        value: cdktf.numberToHclTerraform(this._maxPathInEcmpGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mclag_igmpsnooping_aware: {
        value: cdktf.stringToHclTerraform(this._mclagIgmpsnoopingAware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mclag_peer_info_timeout: {
        value: cdktf.numberToHclTerraform(this._mclagPeerInfoTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mclag_port_base: {
        value: cdktf.numberToHclTerraform(this._mclagPortBase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mclag_split_brain_all_ports_down: {
        value: cdktf.stringToHclTerraform(this._mclagSplitBrainAllPortsDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mclag_split_brain_detect: {
        value: cdktf.stringToHclTerraform(this._mclagSplitBrainDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mclag_split_brain_priority: {
        value: cdktf.numberToHclTerraform(this._mclagSplitBrainPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mclag_stp_aware: {
        value: cdktf.stringToHclTerraform(this._mclagStpAware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_qos: {
        value: cdktf.numberToHclTerraform(this._mirrorQos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_alarm_threshold: {
        value: cdktf.numberToHclTerraform(this._poeAlarmThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poe_guard_band: {
        value: cdktf.numberToHclTerraform(this._poeGuardBand),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poe_power_budget: {
        value: cdktf.numberToHclTerraform(this._poePowerBudget),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poe_power_mode: {
        value: cdktf.stringToHclTerraform(this._poePowerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_pre_standard_detect: {
        value: cdktf.stringToHclTerraform(this._poePreStandardDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storm_control_high_rate: {
        value: cdktf.numberToHclTerraform(this._stormControlHighRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_monitor: {
        value: cdktf.stringToHclTerraform(this._stormControlMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storm_control_rate_filter: {
        value: cdktf.numberToHclTerraform(this._stormControlRateFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk_hash_mode: {
        value: cdktf.stringToHclTerraform(this._trunkHashMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_hash_unicast_src_port: {
        value: cdktf.stringToHclTerraform(this._trunkHashUnicastSrcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_hash_unkunicast_src_dst: {
        value: cdktf.stringToHclTerraform(this._trunkHashUnkunicastSrcDst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_wire_tpid: {
        value: cdktf.numberToHclTerraform(this._virtualWireTpid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_pruning: {
        value: cdktf.stringToHclTerraform(this._vlanPruning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_dport: {
        value: cdktf.numberToHclTerraform(this._vxlanDport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vxlan_port: {
        value: cdktf.numberToHclTerraform(this._vxlanPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vxlan_sport: {
        value: cdktf.numberToHclTerraform(this._vxlanSport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vxlan_stp_virtual_mac: {
        value: cdktf.stringToHclTerraform(this._vxlanStpVirtualMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_stp_virtual_root: {
        value: cdktf.stringToHclTerraform(this._vxlanStpVirtualRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_security: {
        value: switchGlobalPortSecurityToHclTerraform(this._portSecurity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchGlobalPortSecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
