// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#arps SystemHa#arps}
  */
  readonly arps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#arps_interval SystemHa#arps_interval}
  */
  readonly arpsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#authentication SystemHa#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#bounce_intf_upon_failover SystemHa#bounce_intf_upon_failover}
  */
  readonly bounceIntfUponFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#check_secondary_dev_health SystemHa#check_secondary_dev_health}
  */
  readonly checkSecondaryDevHealth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#cpu_threshold SystemHa#cpu_threshold}
  */
  readonly cpuThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#dynamic_sort_subtable SystemHa#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#encryption SystemHa#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#evpn_ttl SystemHa#evpn_ttl}
  */
  readonly evpnTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#failover_hold_time SystemHa#failover_hold_time}
  */
  readonly failoverHoldTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#ftp_proxy_threshold SystemHa#ftp_proxy_threshold}
  */
  readonly ftpProxyThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#get_all_tables SystemHa#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#gratuitous_arps SystemHa#gratuitous_arps}
  */
  readonly gratuitousArps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#group_id SystemHa#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#group_name SystemHa#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#ha_direct SystemHa#ha_direct}
  */
  readonly haDirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#ha_eth_type SystemHa#ha_eth_type}
  */
  readonly haEthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#ha_mgmt_status SystemHa#ha_mgmt_status}
  */
  readonly haMgmtStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#ha_uptime_diff_margin SystemHa#ha_uptime_diff_margin}
  */
  readonly haUptimeDiffMargin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#hb_interval SystemHa#hb_interval}
  */
  readonly hbInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#hb_interval_in_milliseconds SystemHa#hb_interval_in_milliseconds}
  */
  readonly hbIntervalInMilliseconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#hb_lost_threshold SystemHa#hb_lost_threshold}
  */
  readonly hbLostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#hbdev SystemHa#hbdev}
  */
  readonly hbdev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#hc_eth_type SystemHa#hc_eth_type}
  */
  readonly hcEthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#hello_holddown SystemHa#hello_holddown}
  */
  readonly helloHolddown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#http_proxy_threshold SystemHa#http_proxy_threshold}
  */
  readonly httpProxyThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#imap_proxy_threshold SystemHa#imap_proxy_threshold}
  */
  readonly imapProxyThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#inter_cluster_session_sync SystemHa#inter_cluster_session_sync}
  */
  readonly interClusterSessionSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#ipsec_phase2_proposal SystemHa#ipsec_phase2_proposal}
  */
  readonly ipsecPhase2Proposal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#key SystemHa#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#l2ep_eth_type SystemHa#l2ep_eth_type}
  */
  readonly l2EpEthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#link_failed_signal SystemHa#link_failed_signal}
  */
  readonly linkFailedSignal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#load_balance_all SystemHa#load_balance_all}
  */
  readonly loadBalanceAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#logical_sn SystemHa#logical_sn}
  */
  readonly logicalSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#memory_based_failover SystemHa#memory_based_failover}
  */
  readonly memoryBasedFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#memory_compatible_mode SystemHa#memory_compatible_mode}
  */
  readonly memoryCompatibleMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#memory_failover_flip_timeout SystemHa#memory_failover_flip_timeout}
  */
  readonly memoryFailoverFlipTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#memory_failover_monitor_period SystemHa#memory_failover_monitor_period}
  */
  readonly memoryFailoverMonitorPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#memory_failover_sample_rate SystemHa#memory_failover_sample_rate}
  */
  readonly memoryFailoverSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#memory_failover_threshold SystemHa#memory_failover_threshold}
  */
  readonly memoryFailoverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#memory_threshold SystemHa#memory_threshold}
  */
  readonly memoryThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#mode SystemHa#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#monitor SystemHa#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#multicast_ttl SystemHa#multicast_ttl}
  */
  readonly multicastTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#nntp_proxy_threshold SystemHa#nntp_proxy_threshold}
  */
  readonly nntpProxyThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#override SystemHa#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#override_wait_time SystemHa#override_wait_time}
  */
  readonly overrideWaitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#password SystemHa#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_failover_threshold SystemHa#pingserver_failover_threshold}
  */
  readonly pingserverFailoverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_flip_timeout SystemHa#pingserver_flip_timeout}
  */
  readonly pingserverFlipTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_monitor_interface SystemHa#pingserver_monitor_interface}
  */
  readonly pingserverMonitorInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_secondary_force_reset SystemHa#pingserver_secondary_force_reset}
  */
  readonly pingserverSecondaryForceReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_slave_force_reset SystemHa#pingserver_slave_force_reset}
  */
  readonly pingserverSlaveForceReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pop3_proxy_threshold SystemHa#pop3_proxy_threshold}
  */
  readonly pop3ProxyThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#priority SystemHa#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#route_hold SystemHa#route_hold}
  */
  readonly routeHold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#route_ttl SystemHa#route_ttl}
  */
  readonly routeTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#route_wait SystemHa#route_wait}
  */
  readonly routeWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#schedule SystemHa#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#session_pickup SystemHa#session_pickup}
  */
  readonly sessionPickup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#session_pickup_connectionless SystemHa#session_pickup_connectionless}
  */
  readonly sessionPickupConnectionless?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#session_pickup_delay SystemHa#session_pickup_delay}
  */
  readonly sessionPickupDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#session_pickup_expectation SystemHa#session_pickup_expectation}
  */
  readonly sessionPickupExpectation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#session_pickup_nat SystemHa#session_pickup_nat}
  */
  readonly sessionPickupNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#session_sync_dev SystemHa#session_sync_dev}
  */
  readonly sessionSyncDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#smtp_proxy_threshold SystemHa#smtp_proxy_threshold}
  */
  readonly smtpProxyThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#ssd_failover SystemHa#ssd_failover}
  */
  readonly ssdFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#standalone_config_sync SystemHa#standalone_config_sync}
  */
  readonly standaloneConfigSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#standalone_mgmt_vdom SystemHa#standalone_mgmt_vdom}
  */
  readonly standaloneMgmtVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#sync_config SystemHa#sync_config}
  */
  readonly syncConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#sync_packet_balance SystemHa#sync_packet_balance}
  */
  readonly syncPacketBalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#unicast_gateway SystemHa#unicast_gateway}
  */
  readonly unicastGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#unicast_hb SystemHa#unicast_hb}
  */
  readonly unicastHb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#unicast_hb_netmask SystemHa#unicast_hb_netmask}
  */
  readonly unicastHbNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#unicast_hb_peerip SystemHa#unicast_hb_peerip}
  */
  readonly unicastHbPeerip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#unicast_status SystemHa#unicast_status}
  */
  readonly unicastStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#uninterruptible_primary_wait SystemHa#uninterruptible_primary_wait}
  */
  readonly uninterruptiblePrimaryWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#uninterruptible_upgrade SystemHa#uninterruptible_upgrade}
  */
  readonly uninterruptibleUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#upgrade_mode SystemHa#upgrade_mode}
  */
  readonly upgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vcluster2 SystemHa#vcluster2}
  */
  readonly vcluster2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vcluster_id SystemHa#vcluster_id}
  */
  readonly vclusterId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vcluster_status SystemHa#vcluster_status}
  */
  readonly vclusterStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vdom SystemHa#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vdomparam SystemHa#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#weight SystemHa#weight}
  */
  readonly weight?: string;
  /**
  * auto_virtual_mac_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#auto_virtual_mac_interface SystemHa#auto_virtual_mac_interface}
  */
  readonly autoVirtualMacInterface?: SystemHaAutoVirtualMacInterface[] | cdktf.IResolvable;
  /**
  * backup_hbdev block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#backup_hbdev SystemHa#backup_hbdev}
  */
  readonly backupHbdev?: SystemHaBackupHbdev[] | cdktf.IResolvable;
  /**
  * ha_mgmt_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#ha_mgmt_interfaces SystemHa#ha_mgmt_interfaces}
  */
  readonly haMgmtInterfaces?: SystemHaHaMgmtInterfaces[] | cdktf.IResolvable;
  /**
  * secondary_vcluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#secondary_vcluster SystemHa#secondary_vcluster}
  */
  readonly secondaryVcluster?: SystemHaSecondaryVcluster;
  /**
  * unicast_peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#unicast_peers SystemHa#unicast_peers}
  */
  readonly unicastPeers?: SystemHaUnicastPeers[] | cdktf.IResolvable;
  /**
  * vcluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vcluster SystemHa#vcluster}
  */
  readonly vcluster?: SystemHaVcluster[] | cdktf.IResolvable;
}
export interface SystemHaAutoVirtualMacInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#interface_name SystemHa#interface_name}
  */
  readonly interfaceName?: string;
}

export function systemHaAutoVirtualMacInterfaceToTerraform(struct?: SystemHaAutoVirtualMacInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function systemHaAutoVirtualMacInterfaceToHclTerraform(struct?: SystemHaAutoVirtualMacInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaAutoVirtualMacInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaAutoVirtualMacInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaAutoVirtualMacInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class SystemHaAutoVirtualMacInterfaceList extends cdktf.ComplexList {
  public internalValue? : SystemHaAutoVirtualMacInterface[] | cdktf.IResolvable

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
  public get(index: number): SystemHaAutoVirtualMacInterfaceOutputReference {
    return new SystemHaAutoVirtualMacInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaBackupHbdev {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#name SystemHa#name}
  */
  readonly name?: string;
}

export function systemHaBackupHbdevToTerraform(struct?: SystemHaBackupHbdev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemHaBackupHbdevToHclTerraform(struct?: SystemHaBackupHbdev | cdktf.IResolvable): any {
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

export class SystemHaBackupHbdevOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaBackupHbdev | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemHaBackupHbdev | cdktf.IResolvable | undefined) {
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
}

export class SystemHaBackupHbdevList extends cdktf.ComplexList {
  public internalValue? : SystemHaBackupHbdev[] | cdktf.IResolvable

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
  public get(index: number): SystemHaBackupHbdevOutputReference {
    return new SystemHaBackupHbdevOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaHaMgmtInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#dst SystemHa#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#dst6 SystemHa#dst6}
  */
  readonly dst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#gateway SystemHa#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#gateway6 SystemHa#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#interface SystemHa#interface}
  */
  readonly interface?: string;
}

export function systemHaHaMgmtInterfacesToTerraform(struct?: SystemHaHaMgmtInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst: cdktf.stringToTerraform(struct!.dst),
    dst6: cdktf.stringToTerraform(struct!.dst6),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}


export function systemHaHaMgmtInterfacesToHclTerraform(struct?: SystemHaHaMgmtInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst6: {
      value: cdktf.stringToHclTerraform(struct!.dst6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaHaMgmtInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaHaMgmtInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._dst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst6 = this._dst6;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaHaMgmtInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dst = undefined;
      this._dst6 = undefined;
      this._gateway = undefined;
      this._gateway6 = undefined;
      this._id = undefined;
      this._interface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dst = value.dst;
      this._dst6 = value.dst6;
      this._gateway = value.gateway;
      this._gateway6 = value.gateway6;
      this._id = value.id;
      this._interface = value.interface;
    }
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst6 - computed: true, optional: true, required: false
  private _dst6?: string; 
  public get dst6() {
    return this.getStringAttribute('dst6');
  }
  public set dst6(value: string) {
    this._dst6 = value;
  }
  public resetDst6() {
    this._dst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: true, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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
}

export class SystemHaHaMgmtInterfacesList extends cdktf.ComplexList {
  public internalValue? : SystemHaHaMgmtInterfaces[] | cdktf.IResolvable

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
  public get(index: number): SystemHaHaMgmtInterfacesOutputReference {
    return new SystemHaHaMgmtInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaSecondaryVcluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#monitor SystemHa#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#override SystemHa#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#override_wait_time SystemHa#override_wait_time}
  */
  readonly overrideWaitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_failover_threshold SystemHa#pingserver_failover_threshold}
  */
  readonly pingserverFailoverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_monitor_interface SystemHa#pingserver_monitor_interface}
  */
  readonly pingserverMonitorInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_secondary_force_reset SystemHa#pingserver_secondary_force_reset}
  */
  readonly pingserverSecondaryForceReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_slave_force_reset SystemHa#pingserver_slave_force_reset}
  */
  readonly pingserverSlaveForceReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#priority SystemHa#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vcluster_id SystemHa#vcluster_id}
  */
  readonly vclusterId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vdom SystemHa#vdom}
  */
  readonly vdom?: string;
}

export function systemHaSecondaryVclusterToTerraform(struct?: SystemHaSecondaryVclusterOutputReference | SystemHaSecondaryVcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor: cdktf.stringToTerraform(struct!.monitor),
    override: cdktf.stringToTerraform(struct!.override),
    override_wait_time: cdktf.numberToTerraform(struct!.overrideWaitTime),
    pingserver_failover_threshold: cdktf.numberToTerraform(struct!.pingserverFailoverThreshold),
    pingserver_monitor_interface: cdktf.stringToTerraform(struct!.pingserverMonitorInterface),
    pingserver_secondary_force_reset: cdktf.stringToTerraform(struct!.pingserverSecondaryForceReset),
    pingserver_slave_force_reset: cdktf.stringToTerraform(struct!.pingserverSlaveForceReset),
    priority: cdktf.numberToTerraform(struct!.priority),
    vcluster_id: cdktf.numberToTerraform(struct!.vclusterId),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function systemHaSecondaryVclusterToHclTerraform(struct?: SystemHaSecondaryVclusterOutputReference | SystemHaSecondaryVcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.stringToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.overrideWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pingserver_failover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.pingserverFailoverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pingserver_monitor_interface: {
      value: cdktf.stringToHclTerraform(struct!.pingserverMonitorInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pingserver_secondary_force_reset: {
      value: cdktf.stringToHclTerraform(struct!.pingserverSecondaryForceReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pingserver_slave_force_reset: {
      value: cdktf.stringToHclTerraform(struct!.pingserverSlaveForceReset),
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
    vcluster_id: {
      value: cdktf.numberToHclTerraform(struct!.vclusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaSecondaryVclusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemHaSecondaryVcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._overrideWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideWaitTime = this._overrideWaitTime;
    }
    if (this._pingserverFailoverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverFailoverThreshold = this._pingserverFailoverThreshold;
    }
    if (this._pingserverMonitorInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverMonitorInterface = this._pingserverMonitorInterface;
    }
    if (this._pingserverSecondaryForceReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverSecondaryForceReset = this._pingserverSecondaryForceReset;
    }
    if (this._pingserverSlaveForceReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverSlaveForceReset = this._pingserverSlaveForceReset;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._vclusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vclusterId = this._vclusterId;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaSecondaryVcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitor = undefined;
      this._override = undefined;
      this._overrideWaitTime = undefined;
      this._pingserverFailoverThreshold = undefined;
      this._pingserverMonitorInterface = undefined;
      this._pingserverSecondaryForceReset = undefined;
      this._pingserverSlaveForceReset = undefined;
      this._priority = undefined;
      this._vclusterId = undefined;
      this._vdom = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitor = value.monitor;
      this._override = value.override;
      this._overrideWaitTime = value.overrideWaitTime;
      this._pingserverFailoverThreshold = value.pingserverFailoverThreshold;
      this._pingserverMonitorInterface = value.pingserverMonitorInterface;
      this._pingserverSecondaryForceReset = value.pingserverSecondaryForceReset;
      this._pingserverSlaveForceReset = value.pingserverSlaveForceReset;
      this._priority = value.priority;
      this._vclusterId = value.vclusterId;
      this._vdom = value.vdom;
    }
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // override - computed: true, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // override_wait_time - computed: false, optional: true, required: false
  private _overrideWaitTime?: number; 
  public get overrideWaitTime() {
    return this.getNumberAttribute('override_wait_time');
  }
  public set overrideWaitTime(value: number) {
    this._overrideWaitTime = value;
  }
  public resetOverrideWaitTime() {
    this._overrideWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideWaitTimeInput() {
    return this._overrideWaitTime;
  }

  // pingserver_failover_threshold - computed: false, optional: true, required: false
  private _pingserverFailoverThreshold?: number; 
  public get pingserverFailoverThreshold() {
    return this.getNumberAttribute('pingserver_failover_threshold');
  }
  public set pingserverFailoverThreshold(value: number) {
    this._pingserverFailoverThreshold = value;
  }
  public resetPingserverFailoverThreshold() {
    this._pingserverFailoverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverFailoverThresholdInput() {
    return this._pingserverFailoverThreshold;
  }

  // pingserver_monitor_interface - computed: false, optional: true, required: false
  private _pingserverMonitorInterface?: string; 
  public get pingserverMonitorInterface() {
    return this.getStringAttribute('pingserver_monitor_interface');
  }
  public set pingserverMonitorInterface(value: string) {
    this._pingserverMonitorInterface = value;
  }
  public resetPingserverMonitorInterface() {
    this._pingserverMonitorInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverMonitorInterfaceInput() {
    return this._pingserverMonitorInterface;
  }

  // pingserver_secondary_force_reset - computed: true, optional: true, required: false
  private _pingserverSecondaryForceReset?: string; 
  public get pingserverSecondaryForceReset() {
    return this.getStringAttribute('pingserver_secondary_force_reset');
  }
  public set pingserverSecondaryForceReset(value: string) {
    this._pingserverSecondaryForceReset = value;
  }
  public resetPingserverSecondaryForceReset() {
    this._pingserverSecondaryForceReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverSecondaryForceResetInput() {
    return this._pingserverSecondaryForceReset;
  }

  // pingserver_slave_force_reset - computed: false, optional: true, required: false
  private _pingserverSlaveForceReset?: string; 
  public get pingserverSlaveForceReset() {
    return this.getStringAttribute('pingserver_slave_force_reset');
  }
  public set pingserverSlaveForceReset(value: string) {
    this._pingserverSlaveForceReset = value;
  }
  public resetPingserverSlaveForceReset() {
    this._pingserverSlaveForceReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverSlaveForceResetInput() {
    return this._pingserverSlaveForceReset;
  }

  // priority - computed: true, optional: true, required: false
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

  // vcluster_id - computed: true, optional: true, required: false
  private _vclusterId?: number; 
  public get vclusterId() {
    return this.getNumberAttribute('vcluster_id');
  }
  public set vclusterId(value: number) {
    this._vclusterId = value;
  }
  public resetVclusterId() {
    this._vclusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterIdInput() {
    return this._vclusterId;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}
export interface SystemHaUnicastPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#peer_ip SystemHa#peer_ip}
  */
  readonly peerIp?: string;
}

export function systemHaUnicastPeersToTerraform(struct?: SystemHaUnicastPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
  }
}


export function systemHaUnicastPeersToHclTerraform(struct?: SystemHaUnicastPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaUnicastPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaUnicastPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaUnicastPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._peerIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._peerIp = value.peerIp;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // peer_ip - computed: true, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }
}

export class SystemHaUnicastPeersList extends cdktf.ComplexList {
  public internalValue? : SystemHaUnicastPeers[] | cdktf.IResolvable

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
  public get(index: number): SystemHaUnicastPeersOutputReference {
    return new SystemHaUnicastPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaVclusterVdom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#name SystemHa#name}
  */
  readonly name?: string;
}

export function systemHaVclusterVdomToTerraform(struct?: SystemHaVclusterVdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemHaVclusterVdomToHclTerraform(struct?: SystemHaVclusterVdom | cdktf.IResolvable): any {
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

export class SystemHaVclusterVdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaVclusterVdom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemHaVclusterVdom | cdktf.IResolvable | undefined) {
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
}

export class SystemHaVclusterVdomList extends cdktf.ComplexList {
  public internalValue? : SystemHaVclusterVdom[] | cdktf.IResolvable

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
  public get(index: number): SystemHaVclusterVdomOutputReference {
    return new SystemHaVclusterVdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaVcluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#monitor SystemHa#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#override SystemHa#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#override_wait_time SystemHa#override_wait_time}
  */
  readonly overrideWaitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_failover_threshold SystemHa#pingserver_failover_threshold}
  */
  readonly pingserverFailoverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_flip_timeout SystemHa#pingserver_flip_timeout}
  */
  readonly pingserverFlipTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_monitor_interface SystemHa#pingserver_monitor_interface}
  */
  readonly pingserverMonitorInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_secondary_force_reset SystemHa#pingserver_secondary_force_reset}
  */
  readonly pingserverSecondaryForceReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#pingserver_slave_force_reset SystemHa#pingserver_slave_force_reset}
  */
  readonly pingserverSlaveForceReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#priority SystemHa#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vcluster_id SystemHa#vcluster_id}
  */
  readonly vclusterId?: number;
  /**
  * vdom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#vdom SystemHa#vdom}
  */
  readonly vdom?: SystemHaVclusterVdom[] | cdktf.IResolvable;
}

export function systemHaVclusterToTerraform(struct?: SystemHaVcluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor: cdktf.stringToTerraform(struct!.monitor),
    override: cdktf.stringToTerraform(struct!.override),
    override_wait_time: cdktf.numberToTerraform(struct!.overrideWaitTime),
    pingserver_failover_threshold: cdktf.numberToTerraform(struct!.pingserverFailoverThreshold),
    pingserver_flip_timeout: cdktf.numberToTerraform(struct!.pingserverFlipTimeout),
    pingserver_monitor_interface: cdktf.stringToTerraform(struct!.pingserverMonitorInterface),
    pingserver_secondary_force_reset: cdktf.stringToTerraform(struct!.pingserverSecondaryForceReset),
    pingserver_slave_force_reset: cdktf.stringToTerraform(struct!.pingserverSlaveForceReset),
    priority: cdktf.numberToTerraform(struct!.priority),
    vcluster_id: cdktf.numberToTerraform(struct!.vclusterId),
    vdom: cdktf.listMapper(systemHaVclusterVdomToTerraform, true)(struct!.vdom),
  }
}


export function systemHaVclusterToHclTerraform(struct?: SystemHaVcluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.stringToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.overrideWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pingserver_failover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.pingserverFailoverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pingserver_flip_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pingserverFlipTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pingserver_monitor_interface: {
      value: cdktf.stringToHclTerraform(struct!.pingserverMonitorInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pingserver_secondary_force_reset: {
      value: cdktf.stringToHclTerraform(struct!.pingserverSecondaryForceReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pingserver_slave_force_reset: {
      value: cdktf.stringToHclTerraform(struct!.pingserverSlaveForceReset),
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
    vcluster_id: {
      value: cdktf.numberToHclTerraform(struct!.vclusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdom: {
      value: cdktf.listMapperHcl(systemHaVclusterVdomToHclTerraform, true)(struct!.vdom),
      isBlock: true,
      type: "set",
      storageClassType: "SystemHaVclusterVdomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaVclusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaVcluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._overrideWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideWaitTime = this._overrideWaitTime;
    }
    if (this._pingserverFailoverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverFailoverThreshold = this._pingserverFailoverThreshold;
    }
    if (this._pingserverFlipTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverFlipTimeout = this._pingserverFlipTimeout;
    }
    if (this._pingserverMonitorInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverMonitorInterface = this._pingserverMonitorInterface;
    }
    if (this._pingserverSecondaryForceReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverSecondaryForceReset = this._pingserverSecondaryForceReset;
    }
    if (this._pingserverSlaveForceReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingserverSlaveForceReset = this._pingserverSlaveForceReset;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._vclusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vclusterId = this._vclusterId;
    }
    if (this._vdom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaVcluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitor = undefined;
      this._override = undefined;
      this._overrideWaitTime = undefined;
      this._pingserverFailoverThreshold = undefined;
      this._pingserverFlipTimeout = undefined;
      this._pingserverMonitorInterface = undefined;
      this._pingserverSecondaryForceReset = undefined;
      this._pingserverSlaveForceReset = undefined;
      this._priority = undefined;
      this._vclusterId = undefined;
      this._vdom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitor = value.monitor;
      this._override = value.override;
      this._overrideWaitTime = value.overrideWaitTime;
      this._pingserverFailoverThreshold = value.pingserverFailoverThreshold;
      this._pingserverFlipTimeout = value.pingserverFlipTimeout;
      this._pingserverMonitorInterface = value.pingserverMonitorInterface;
      this._pingserverSecondaryForceReset = value.pingserverSecondaryForceReset;
      this._pingserverSlaveForceReset = value.pingserverSlaveForceReset;
      this._priority = value.priority;
      this._vclusterId = value.vclusterId;
      this._vdom.internalValue = value.vdom;
    }
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // override - computed: true, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // override_wait_time - computed: false, optional: true, required: false
  private _overrideWaitTime?: number; 
  public get overrideWaitTime() {
    return this.getNumberAttribute('override_wait_time');
  }
  public set overrideWaitTime(value: number) {
    this._overrideWaitTime = value;
  }
  public resetOverrideWaitTime() {
    this._overrideWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideWaitTimeInput() {
    return this._overrideWaitTime;
  }

  // pingserver_failover_threshold - computed: false, optional: true, required: false
  private _pingserverFailoverThreshold?: number; 
  public get pingserverFailoverThreshold() {
    return this.getNumberAttribute('pingserver_failover_threshold');
  }
  public set pingserverFailoverThreshold(value: number) {
    this._pingserverFailoverThreshold = value;
  }
  public resetPingserverFailoverThreshold() {
    this._pingserverFailoverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverFailoverThresholdInput() {
    return this._pingserverFailoverThreshold;
  }

  // pingserver_flip_timeout - computed: true, optional: true, required: false
  private _pingserverFlipTimeout?: number; 
  public get pingserverFlipTimeout() {
    return this.getNumberAttribute('pingserver_flip_timeout');
  }
  public set pingserverFlipTimeout(value: number) {
    this._pingserverFlipTimeout = value;
  }
  public resetPingserverFlipTimeout() {
    this._pingserverFlipTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverFlipTimeoutInput() {
    return this._pingserverFlipTimeout;
  }

  // pingserver_monitor_interface - computed: false, optional: true, required: false
  private _pingserverMonitorInterface?: string; 
  public get pingserverMonitorInterface() {
    return this.getStringAttribute('pingserver_monitor_interface');
  }
  public set pingserverMonitorInterface(value: string) {
    this._pingserverMonitorInterface = value;
  }
  public resetPingserverMonitorInterface() {
    this._pingserverMonitorInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverMonitorInterfaceInput() {
    return this._pingserverMonitorInterface;
  }

  // pingserver_secondary_force_reset - computed: true, optional: true, required: false
  private _pingserverSecondaryForceReset?: string; 
  public get pingserverSecondaryForceReset() {
    return this.getStringAttribute('pingserver_secondary_force_reset');
  }
  public set pingserverSecondaryForceReset(value: string) {
    this._pingserverSecondaryForceReset = value;
  }
  public resetPingserverSecondaryForceReset() {
    this._pingserverSecondaryForceReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverSecondaryForceResetInput() {
    return this._pingserverSecondaryForceReset;
  }

  // pingserver_slave_force_reset - computed: true, optional: true, required: false
  private _pingserverSlaveForceReset?: string; 
  public get pingserverSlaveForceReset() {
    return this.getStringAttribute('pingserver_slave_force_reset');
  }
  public set pingserverSlaveForceReset(value: string) {
    this._pingserverSlaveForceReset = value;
  }
  public resetPingserverSlaveForceReset() {
    this._pingserverSlaveForceReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverSlaveForceResetInput() {
    return this._pingserverSlaveForceReset;
  }

  // priority - computed: true, optional: true, required: false
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

  // vcluster_id - computed: true, optional: true, required: false
  private _vclusterId?: number; 
  public get vclusterId() {
    return this.getNumberAttribute('vcluster_id');
  }
  public set vclusterId(value: number) {
    this._vclusterId = value;
  }
  public resetVclusterId() {
    this._vclusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterIdInput() {
    return this._vclusterId;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom = new SystemHaVclusterVdomList(this, "vdom", true);
  public get vdom() {
    return this._vdom;
  }
  public putVdom(value: SystemHaVclusterVdom[] | cdktf.IResolvable) {
    this._vdom.internalValue = value;
  }
  public resetVdom() {
    this._vdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom.internalValue;
  }
}

export class SystemHaVclusterList extends cdktf.ComplexList {
  public internalValue? : SystemHaVcluster[] | cdktf.IResolvable

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
  public get(index: number): SystemHaVclusterOutputReference {
    return new SystemHaVclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha fortios_system_ha}
*/
export class SystemHa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHa to import
  * @param importFromId The id of the existing SystemHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ha fortios_system_ha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemHaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_ha',
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
    this._arps = config.arps;
    this._arpsInterval = config.arpsInterval;
    this._authentication = config.authentication;
    this._bounceIntfUponFailover = config.bounceIntfUponFailover;
    this._checkSecondaryDevHealth = config.checkSecondaryDevHealth;
    this._cpuThreshold = config.cpuThreshold;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encryption = config.encryption;
    this._evpnTtl = config.evpnTtl;
    this._failoverHoldTime = config.failoverHoldTime;
    this._ftpProxyThreshold = config.ftpProxyThreshold;
    this._getAllTables = config.fetchAllTables;
    this._gratuitousArps = config.gratuitousArps;
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._haDirect = config.haDirect;
    this._haEthType = config.haEthType;
    this._haMgmtStatus = config.haMgmtStatus;
    this._haUptimeDiffMargin = config.haUptimeDiffMargin;
    this._hbInterval = config.hbInterval;
    this._hbIntervalInMilliseconds = config.hbIntervalInMilliseconds;
    this._hbLostThreshold = config.hbLostThreshold;
    this._hbdev = config.hbdev;
    this._hcEthType = config.hcEthType;
    this._helloHolddown = config.helloHolddown;
    this._httpProxyThreshold = config.httpProxyThreshold;
    this._id = config.id;
    this._imapProxyThreshold = config.imapProxyThreshold;
    this._interClusterSessionSync = config.interClusterSessionSync;
    this._ipsecPhase2Proposal = config.ipsecPhase2Proposal;
    this._key = config.key;
    this._l2EpEthType = config.l2EpEthType;
    this._linkFailedSignal = config.linkFailedSignal;
    this._loadBalanceAll = config.loadBalanceAll;
    this._logicalSn = config.logicalSn;
    this._memoryBasedFailover = config.memoryBasedFailover;
    this._memoryCompatibleMode = config.memoryCompatibleMode;
    this._memoryFailoverFlipTimeout = config.memoryFailoverFlipTimeout;
    this._memoryFailoverMonitorPeriod = config.memoryFailoverMonitorPeriod;
    this._memoryFailoverSampleRate = config.memoryFailoverSampleRate;
    this._memoryFailoverThreshold = config.memoryFailoverThreshold;
    this._memoryThreshold = config.memoryThreshold;
    this._mode = config.mode;
    this._monitor = config.monitor;
    this._multicastTtl = config.multicastTtl;
    this._nntpProxyThreshold = config.nntpProxyThreshold;
    this._override = config.override;
    this._overrideWaitTime = config.overrideWaitTime;
    this._password = config.password;
    this._pingserverFailoverThreshold = config.pingserverFailoverThreshold;
    this._pingserverFlipTimeout = config.pingserverFlipTimeout;
    this._pingserverMonitorInterface = config.pingserverMonitorInterface;
    this._pingserverSecondaryForceReset = config.pingserverSecondaryForceReset;
    this._pingserverSlaveForceReset = config.pingserverSlaveForceReset;
    this._pop3ProxyThreshold = config.pop3ProxyThreshold;
    this._priority = config.priority;
    this._routeHold = config.routeHold;
    this._routeTtl = config.routeTtl;
    this._routeWait = config.routeWait;
    this._schedule = config.schedule;
    this._sessionPickup = config.sessionPickup;
    this._sessionPickupConnectionless = config.sessionPickupConnectionless;
    this._sessionPickupDelay = config.sessionPickupDelay;
    this._sessionPickupExpectation = config.sessionPickupExpectation;
    this._sessionPickupNat = config.sessionPickupNat;
    this._sessionSyncDev = config.sessionSyncDev;
    this._smtpProxyThreshold = config.smtpProxyThreshold;
    this._ssdFailover = config.ssdFailover;
    this._standaloneConfigSync = config.standaloneConfigSync;
    this._standaloneMgmtVdom = config.standaloneMgmtVdom;
    this._syncConfig = config.syncConfig;
    this._syncPacketBalance = config.syncPacketBalance;
    this._unicastGateway = config.unicastGateway;
    this._unicastHb = config.unicastHb;
    this._unicastHbNetmask = config.unicastHbNetmask;
    this._unicastHbPeerip = config.unicastHbPeerip;
    this._unicastStatus = config.unicastStatus;
    this._uninterruptiblePrimaryWait = config.uninterruptiblePrimaryWait;
    this._uninterruptibleUpgrade = config.uninterruptibleUpgrade;
    this._upgradeMode = config.upgradeMode;
    this._vcluster2 = config.vcluster2;
    this._vclusterId = config.vclusterId;
    this._vclusterStatus = config.vclusterStatus;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._weight = config.weight;
    this._autoVirtualMacInterface.internalValue = config.autoVirtualMacInterface;
    this._backupHbdev.internalValue = config.backupHbdev;
    this._haMgmtInterfaces.internalValue = config.haMgmtInterfaces;
    this._secondaryVcluster.internalValue = config.secondaryVcluster;
    this._unicastPeers.internalValue = config.unicastPeers;
    this._vcluster.internalValue = config.vcluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arps - computed: true, optional: true, required: false
  private _arps?: number; 
  public get arps() {
    return this.getNumberAttribute('arps');
  }
  public set arps(value: number) {
    this._arps = value;
  }
  public resetArps() {
    this._arps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpsInput() {
    return this._arps;
  }

  // arps_interval - computed: true, optional: true, required: false
  private _arpsInterval?: number; 
  public get arpsInterval() {
    return this.getNumberAttribute('arps_interval');
  }
  public set arpsInterval(value: number) {
    this._arpsInterval = value;
  }
  public resetArpsInterval() {
    this._arpsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpsIntervalInput() {
    return this._arpsInterval;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bounce_intf_upon_failover - computed: true, optional: true, required: false
  private _bounceIntfUponFailover?: string; 
  public get bounceIntfUponFailover() {
    return this.getStringAttribute('bounce_intf_upon_failover');
  }
  public set bounceIntfUponFailover(value: string) {
    this._bounceIntfUponFailover = value;
  }
  public resetBounceIntfUponFailover() {
    this._bounceIntfUponFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceIntfUponFailoverInput() {
    return this._bounceIntfUponFailover;
  }

  // check_secondary_dev_health - computed: true, optional: true, required: false
  private _checkSecondaryDevHealth?: string; 
  public get checkSecondaryDevHealth() {
    return this.getStringAttribute('check_secondary_dev_health');
  }
  public set checkSecondaryDevHealth(value: string) {
    this._checkSecondaryDevHealth = value;
  }
  public resetCheckSecondaryDevHealth() {
    this._checkSecondaryDevHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSecondaryDevHealthInput() {
    return this._checkSecondaryDevHealth;
  }

  // cpu_threshold - computed: true, optional: true, required: false
  private _cpuThreshold?: string; 
  public get cpuThreshold() {
    return this.getStringAttribute('cpu_threshold');
  }
  public set cpuThreshold(value: string) {
    this._cpuThreshold = value;
  }
  public resetCpuThreshold() {
    this._cpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdInput() {
    return this._cpuThreshold;
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

  // encryption - computed: true, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // evpn_ttl - computed: true, optional: true, required: false
  private _evpnTtl?: number; 
  public get evpnTtl() {
    return this.getNumberAttribute('evpn_ttl');
  }
  public set evpnTtl(value: number) {
    this._evpnTtl = value;
  }
  public resetEvpnTtl() {
    this._evpnTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnTtlInput() {
    return this._evpnTtl;
  }

  // failover_hold_time - computed: false, optional: true, required: false
  private _failoverHoldTime?: number; 
  public get failoverHoldTime() {
    return this.getNumberAttribute('failover_hold_time');
  }
  public set failoverHoldTime(value: number) {
    this._failoverHoldTime = value;
  }
  public resetFailoverHoldTime() {
    this._failoverHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverHoldTimeInput() {
    return this._failoverHoldTime;
  }

  // ftp_proxy_threshold - computed: true, optional: true, required: false
  private _ftpProxyThreshold?: string; 
  public get ftpProxyThreshold() {
    return this.getStringAttribute('ftp_proxy_threshold');
  }
  public set ftpProxyThreshold(value: string) {
    this._ftpProxyThreshold = value;
  }
  public resetFtpProxyThreshold() {
    this._ftpProxyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpProxyThresholdInput() {
    return this._ftpProxyThreshold;
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

  // gratuitous_arps - computed: true, optional: true, required: false
  private _gratuitousArps?: string; 
  public get gratuitousArps() {
    return this.getStringAttribute('gratuitous_arps');
  }
  public set gratuitousArps(value: string) {
    this._gratuitousArps = value;
  }
  public resetGratuitousArps() {
    this._gratuitousArps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gratuitousArpsInput() {
    return this._gratuitousArps;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // ha_direct - computed: true, optional: true, required: false
  private _haDirect?: string; 
  public get haDirect() {
    return this.getStringAttribute('ha_direct');
  }
  public set haDirect(value: string) {
    this._haDirect = value;
  }
  public resetHaDirect() {
    this._haDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDirectInput() {
    return this._haDirect;
  }

  // ha_eth_type - computed: true, optional: true, required: false
  private _haEthType?: string; 
  public get haEthType() {
    return this.getStringAttribute('ha_eth_type');
  }
  public set haEthType(value: string) {
    this._haEthType = value;
  }
  public resetHaEthType() {
    this._haEthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEthTypeInput() {
    return this._haEthType;
  }

  // ha_mgmt_status - computed: true, optional: true, required: false
  private _haMgmtStatus?: string; 
  public get haMgmtStatus() {
    return this.getStringAttribute('ha_mgmt_status');
  }
  public set haMgmtStatus(value: string) {
    this._haMgmtStatus = value;
  }
  public resetHaMgmtStatus() {
    this._haMgmtStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haMgmtStatusInput() {
    return this._haMgmtStatus;
  }

  // ha_uptime_diff_margin - computed: true, optional: true, required: false
  private _haUptimeDiffMargin?: number; 
  public get haUptimeDiffMargin() {
    return this.getNumberAttribute('ha_uptime_diff_margin');
  }
  public set haUptimeDiffMargin(value: number) {
    this._haUptimeDiffMargin = value;
  }
  public resetHaUptimeDiffMargin() {
    this._haUptimeDiffMargin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haUptimeDiffMarginInput() {
    return this._haUptimeDiffMargin;
  }

  // hb_interval - computed: true, optional: true, required: false
  private _hbInterval?: number; 
  public get hbInterval() {
    return this.getNumberAttribute('hb_interval');
  }
  public set hbInterval(value: number) {
    this._hbInterval = value;
  }
  public resetHbInterval() {
    this._hbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbIntervalInput() {
    return this._hbInterval;
  }

  // hb_interval_in_milliseconds - computed: true, optional: true, required: false
  private _hbIntervalInMilliseconds?: string; 
  public get hbIntervalInMilliseconds() {
    return this.getStringAttribute('hb_interval_in_milliseconds');
  }
  public set hbIntervalInMilliseconds(value: string) {
    this._hbIntervalInMilliseconds = value;
  }
  public resetHbIntervalInMilliseconds() {
    this._hbIntervalInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbIntervalInMillisecondsInput() {
    return this._hbIntervalInMilliseconds;
  }

  // hb_lost_threshold - computed: true, optional: true, required: false
  private _hbLostThreshold?: number; 
  public get hbLostThreshold() {
    return this.getNumberAttribute('hb_lost_threshold');
  }
  public set hbLostThreshold(value: number) {
    this._hbLostThreshold = value;
  }
  public resetHbLostThreshold() {
    this._hbLostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbLostThresholdInput() {
    return this._hbLostThreshold;
  }

  // hbdev - computed: false, optional: true, required: false
  private _hbdev?: string; 
  public get hbdev() {
    return this.getStringAttribute('hbdev');
  }
  public set hbdev(value: string) {
    this._hbdev = value;
  }
  public resetHbdev() {
    this._hbdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbdevInput() {
    return this._hbdev;
  }

  // hc_eth_type - computed: true, optional: true, required: false
  private _hcEthType?: string; 
  public get hcEthType() {
    return this.getStringAttribute('hc_eth_type');
  }
  public set hcEthType(value: string) {
    this._hcEthType = value;
  }
  public resetHcEthType() {
    this._hcEthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcEthTypeInput() {
    return this._hcEthType;
  }

  // hello_holddown - computed: true, optional: true, required: false
  private _helloHolddown?: number; 
  public get helloHolddown() {
    return this.getNumberAttribute('hello_holddown');
  }
  public set helloHolddown(value: number) {
    this._helloHolddown = value;
  }
  public resetHelloHolddown() {
    this._helloHolddown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloHolddownInput() {
    return this._helloHolddown;
  }

  // http_proxy_threshold - computed: true, optional: true, required: false
  private _httpProxyThreshold?: string; 
  public get httpProxyThreshold() {
    return this.getStringAttribute('http_proxy_threshold');
  }
  public set httpProxyThreshold(value: string) {
    this._httpProxyThreshold = value;
  }
  public resetHttpProxyThreshold() {
    this._httpProxyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyThresholdInput() {
    return this._httpProxyThreshold;
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

  // imap_proxy_threshold - computed: true, optional: true, required: false
  private _imapProxyThreshold?: string; 
  public get imapProxyThreshold() {
    return this.getStringAttribute('imap_proxy_threshold');
  }
  public set imapProxyThreshold(value: string) {
    this._imapProxyThreshold = value;
  }
  public resetImapProxyThreshold() {
    this._imapProxyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapProxyThresholdInput() {
    return this._imapProxyThreshold;
  }

  // inter_cluster_session_sync - computed: false, optional: true, required: false
  private _interClusterSessionSync?: string; 
  public get interClusterSessionSync() {
    return this.getStringAttribute('inter_cluster_session_sync');
  }
  public set interClusterSessionSync(value: string) {
    this._interClusterSessionSync = value;
  }
  public resetInterClusterSessionSync() {
    this._interClusterSessionSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interClusterSessionSyncInput() {
    return this._interClusterSessionSync;
  }

  // ipsec_phase2_proposal - computed: false, optional: true, required: false
  private _ipsecPhase2Proposal?: string; 
  public get ipsecPhase2Proposal() {
    return this.getStringAttribute('ipsec_phase2_proposal');
  }
  public set ipsecPhase2Proposal(value: string) {
    this._ipsecPhase2Proposal = value;
  }
  public resetIpsecPhase2Proposal() {
    this._ipsecPhase2Proposal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase2ProposalInput() {
    return this._ipsecPhase2Proposal;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // l2ep_eth_type - computed: true, optional: true, required: false
  private _l2EpEthType?: string; 
  public get l2EpEthType() {
    return this.getStringAttribute('l2ep_eth_type');
  }
  public set l2EpEthType(value: string) {
    this._l2EpEthType = value;
  }
  public resetL2EpEthType() {
    this._l2EpEthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2EpEthTypeInput() {
    return this._l2EpEthType;
  }

  // link_failed_signal - computed: true, optional: true, required: false
  private _linkFailedSignal?: string; 
  public get linkFailedSignal() {
    return this.getStringAttribute('link_failed_signal');
  }
  public set linkFailedSignal(value: string) {
    this._linkFailedSignal = value;
  }
  public resetLinkFailedSignal() {
    this._linkFailedSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkFailedSignalInput() {
    return this._linkFailedSignal;
  }

  // load_balance_all - computed: true, optional: true, required: false
  private _loadBalanceAll?: string; 
  public get loadBalanceAll() {
    return this.getStringAttribute('load_balance_all');
  }
  public set loadBalanceAll(value: string) {
    this._loadBalanceAll = value;
  }
  public resetLoadBalanceAll() {
    this._loadBalanceAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceAllInput() {
    return this._loadBalanceAll;
  }

  // logical_sn - computed: true, optional: true, required: false
  private _logicalSn?: string; 
  public get logicalSn() {
    return this.getStringAttribute('logical_sn');
  }
  public set logicalSn(value: string) {
    this._logicalSn = value;
  }
  public resetLogicalSn() {
    this._logicalSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalSnInput() {
    return this._logicalSn;
  }

  // memory_based_failover - computed: true, optional: true, required: false
  private _memoryBasedFailover?: string; 
  public get memoryBasedFailover() {
    return this.getStringAttribute('memory_based_failover');
  }
  public set memoryBasedFailover(value: string) {
    this._memoryBasedFailover = value;
  }
  public resetMemoryBasedFailover() {
    this._memoryBasedFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBasedFailoverInput() {
    return this._memoryBasedFailover;
  }

  // memory_compatible_mode - computed: true, optional: true, required: false
  private _memoryCompatibleMode?: string; 
  public get memoryCompatibleMode() {
    return this.getStringAttribute('memory_compatible_mode');
  }
  public set memoryCompatibleMode(value: string) {
    this._memoryCompatibleMode = value;
  }
  public resetMemoryCompatibleMode() {
    this._memoryCompatibleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryCompatibleModeInput() {
    return this._memoryCompatibleMode;
  }

  // memory_failover_flip_timeout - computed: true, optional: true, required: false
  private _memoryFailoverFlipTimeout?: number; 
  public get memoryFailoverFlipTimeout() {
    return this.getNumberAttribute('memory_failover_flip_timeout');
  }
  public set memoryFailoverFlipTimeout(value: number) {
    this._memoryFailoverFlipTimeout = value;
  }
  public resetMemoryFailoverFlipTimeout() {
    this._memoryFailoverFlipTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryFailoverFlipTimeoutInput() {
    return this._memoryFailoverFlipTimeout;
  }

  // memory_failover_monitor_period - computed: true, optional: true, required: false
  private _memoryFailoverMonitorPeriod?: number; 
  public get memoryFailoverMonitorPeriod() {
    return this.getNumberAttribute('memory_failover_monitor_period');
  }
  public set memoryFailoverMonitorPeriod(value: number) {
    this._memoryFailoverMonitorPeriod = value;
  }
  public resetMemoryFailoverMonitorPeriod() {
    this._memoryFailoverMonitorPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryFailoverMonitorPeriodInput() {
    return this._memoryFailoverMonitorPeriod;
  }

  // memory_failover_sample_rate - computed: true, optional: true, required: false
  private _memoryFailoverSampleRate?: number; 
  public get memoryFailoverSampleRate() {
    return this.getNumberAttribute('memory_failover_sample_rate');
  }
  public set memoryFailoverSampleRate(value: number) {
    this._memoryFailoverSampleRate = value;
  }
  public resetMemoryFailoverSampleRate() {
    this._memoryFailoverSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryFailoverSampleRateInput() {
    return this._memoryFailoverSampleRate;
  }

  // memory_failover_threshold - computed: false, optional: true, required: false
  private _memoryFailoverThreshold?: number; 
  public get memoryFailoverThreshold() {
    return this.getNumberAttribute('memory_failover_threshold');
  }
  public set memoryFailoverThreshold(value: number) {
    this._memoryFailoverThreshold = value;
  }
  public resetMemoryFailoverThreshold() {
    this._memoryFailoverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryFailoverThresholdInput() {
    return this._memoryFailoverThreshold;
  }

  // memory_threshold - computed: true, optional: true, required: false
  private _memoryThreshold?: string; 
  public get memoryThreshold() {
    return this.getStringAttribute('memory_threshold');
  }
  public set memoryThreshold(value: string) {
    this._memoryThreshold = value;
  }
  public resetMemoryThreshold() {
    this._memoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryThresholdInput() {
    return this._memoryThreshold;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // multicast_ttl - computed: true, optional: true, required: false
  private _multicastTtl?: number; 
  public get multicastTtl() {
    return this.getNumberAttribute('multicast_ttl');
  }
  public set multicastTtl(value: number) {
    this._multicastTtl = value;
  }
  public resetMulticastTtl() {
    this._multicastTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTtlInput() {
    return this._multicastTtl;
  }

  // nntp_proxy_threshold - computed: true, optional: true, required: false
  private _nntpProxyThreshold?: string; 
  public get nntpProxyThreshold() {
    return this.getStringAttribute('nntp_proxy_threshold');
  }
  public set nntpProxyThreshold(value: string) {
    this._nntpProxyThreshold = value;
  }
  public resetNntpProxyThreshold() {
    this._nntpProxyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nntpProxyThresholdInput() {
    return this._nntpProxyThreshold;
  }

  // override - computed: true, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // override_wait_time - computed: false, optional: true, required: false
  private _overrideWaitTime?: number; 
  public get overrideWaitTime() {
    return this.getNumberAttribute('override_wait_time');
  }
  public set overrideWaitTime(value: number) {
    this._overrideWaitTime = value;
  }
  public resetOverrideWaitTime() {
    this._overrideWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideWaitTimeInput() {
    return this._overrideWaitTime;
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

  // pingserver_failover_threshold - computed: false, optional: true, required: false
  private _pingserverFailoverThreshold?: number; 
  public get pingserverFailoverThreshold() {
    return this.getNumberAttribute('pingserver_failover_threshold');
  }
  public set pingserverFailoverThreshold(value: number) {
    this._pingserverFailoverThreshold = value;
  }
  public resetPingserverFailoverThreshold() {
    this._pingserverFailoverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverFailoverThresholdInput() {
    return this._pingserverFailoverThreshold;
  }

  // pingserver_flip_timeout - computed: true, optional: true, required: false
  private _pingserverFlipTimeout?: number; 
  public get pingserverFlipTimeout() {
    return this.getNumberAttribute('pingserver_flip_timeout');
  }
  public set pingserverFlipTimeout(value: number) {
    this._pingserverFlipTimeout = value;
  }
  public resetPingserverFlipTimeout() {
    this._pingserverFlipTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverFlipTimeoutInput() {
    return this._pingserverFlipTimeout;
  }

  // pingserver_monitor_interface - computed: false, optional: true, required: false
  private _pingserverMonitorInterface?: string; 
  public get pingserverMonitorInterface() {
    return this.getStringAttribute('pingserver_monitor_interface');
  }
  public set pingserverMonitorInterface(value: string) {
    this._pingserverMonitorInterface = value;
  }
  public resetPingserverMonitorInterface() {
    this._pingserverMonitorInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverMonitorInterfaceInput() {
    return this._pingserverMonitorInterface;
  }

  // pingserver_secondary_force_reset - computed: true, optional: true, required: false
  private _pingserverSecondaryForceReset?: string; 
  public get pingserverSecondaryForceReset() {
    return this.getStringAttribute('pingserver_secondary_force_reset');
  }
  public set pingserverSecondaryForceReset(value: string) {
    this._pingserverSecondaryForceReset = value;
  }
  public resetPingserverSecondaryForceReset() {
    this._pingserverSecondaryForceReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverSecondaryForceResetInput() {
    return this._pingserverSecondaryForceReset;
  }

  // pingserver_slave_force_reset - computed: true, optional: true, required: false
  private _pingserverSlaveForceReset?: string; 
  public get pingserverSlaveForceReset() {
    return this.getStringAttribute('pingserver_slave_force_reset');
  }
  public set pingserverSlaveForceReset(value: string) {
    this._pingserverSlaveForceReset = value;
  }
  public resetPingserverSlaveForceReset() {
    this._pingserverSlaveForceReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverSlaveForceResetInput() {
    return this._pingserverSlaveForceReset;
  }

  // pop3_proxy_threshold - computed: true, optional: true, required: false
  private _pop3ProxyThreshold?: string; 
  public get pop3ProxyThreshold() {
    return this.getStringAttribute('pop3_proxy_threshold');
  }
  public set pop3ProxyThreshold(value: string) {
    this._pop3ProxyThreshold = value;
  }
  public resetPop3ProxyThreshold() {
    this._pop3ProxyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3ProxyThresholdInput() {
    return this._pop3ProxyThreshold;
  }

  // priority - computed: true, optional: true, required: false
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

  // route_hold - computed: true, optional: true, required: false
  private _routeHold?: number; 
  public get routeHold() {
    return this.getNumberAttribute('route_hold');
  }
  public set routeHold(value: number) {
    this._routeHold = value;
  }
  public resetRouteHold() {
    this._routeHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeHoldInput() {
    return this._routeHold;
  }

  // route_ttl - computed: true, optional: true, required: false
  private _routeTtl?: number; 
  public get routeTtl() {
    return this.getNumberAttribute('route_ttl');
  }
  public set routeTtl(value: number) {
    this._routeTtl = value;
  }
  public resetRouteTtl() {
    this._routeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTtlInput() {
    return this._routeTtl;
  }

  // route_wait - computed: false, optional: true, required: false
  private _routeWait?: number; 
  public get routeWait() {
    return this.getNumberAttribute('route_wait');
  }
  public set routeWait(value: number) {
    this._routeWait = value;
  }
  public resetRouteWait() {
    this._routeWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeWaitInput() {
    return this._routeWait;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // session_pickup - computed: true, optional: true, required: false
  private _sessionPickup?: string; 
  public get sessionPickup() {
    return this.getStringAttribute('session_pickup');
  }
  public set sessionPickup(value: string) {
    this._sessionPickup = value;
  }
  public resetSessionPickup() {
    this._sessionPickup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPickupInput() {
    return this._sessionPickup;
  }

  // session_pickup_connectionless - computed: true, optional: true, required: false
  private _sessionPickupConnectionless?: string; 
  public get sessionPickupConnectionless() {
    return this.getStringAttribute('session_pickup_connectionless');
  }
  public set sessionPickupConnectionless(value: string) {
    this._sessionPickupConnectionless = value;
  }
  public resetSessionPickupConnectionless() {
    this._sessionPickupConnectionless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPickupConnectionlessInput() {
    return this._sessionPickupConnectionless;
  }

  // session_pickup_delay - computed: true, optional: true, required: false
  private _sessionPickupDelay?: string; 
  public get sessionPickupDelay() {
    return this.getStringAttribute('session_pickup_delay');
  }
  public set sessionPickupDelay(value: string) {
    this._sessionPickupDelay = value;
  }
  public resetSessionPickupDelay() {
    this._sessionPickupDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPickupDelayInput() {
    return this._sessionPickupDelay;
  }

  // session_pickup_expectation - computed: true, optional: true, required: false
  private _sessionPickupExpectation?: string; 
  public get sessionPickupExpectation() {
    return this.getStringAttribute('session_pickup_expectation');
  }
  public set sessionPickupExpectation(value: string) {
    this._sessionPickupExpectation = value;
  }
  public resetSessionPickupExpectation() {
    this._sessionPickupExpectation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPickupExpectationInput() {
    return this._sessionPickupExpectation;
  }

  // session_pickup_nat - computed: true, optional: true, required: false
  private _sessionPickupNat?: string; 
  public get sessionPickupNat() {
    return this.getStringAttribute('session_pickup_nat');
  }
  public set sessionPickupNat(value: string) {
    this._sessionPickupNat = value;
  }
  public resetSessionPickupNat() {
    this._sessionPickupNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPickupNatInput() {
    return this._sessionPickupNat;
  }

  // session_sync_dev - computed: false, optional: true, required: false
  private _sessionSyncDev?: string; 
  public get sessionSyncDev() {
    return this.getStringAttribute('session_sync_dev');
  }
  public set sessionSyncDev(value: string) {
    this._sessionSyncDev = value;
  }
  public resetSessionSyncDev() {
    this._sessionSyncDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSyncDevInput() {
    return this._sessionSyncDev;
  }

  // smtp_proxy_threshold - computed: true, optional: true, required: false
  private _smtpProxyThreshold?: string; 
  public get smtpProxyThreshold() {
    return this.getStringAttribute('smtp_proxy_threshold');
  }
  public set smtpProxyThreshold(value: string) {
    this._smtpProxyThreshold = value;
  }
  public resetSmtpProxyThreshold() {
    this._smtpProxyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpProxyThresholdInput() {
    return this._smtpProxyThreshold;
  }

  // ssd_failover - computed: true, optional: true, required: false
  private _ssdFailover?: string; 
  public get ssdFailover() {
    return this.getStringAttribute('ssd_failover');
  }
  public set ssdFailover(value: string) {
    this._ssdFailover = value;
  }
  public resetSsdFailover() {
    this._ssdFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdFailoverInput() {
    return this._ssdFailover;
  }

  // standalone_config_sync - computed: true, optional: true, required: false
  private _standaloneConfigSync?: string; 
  public get standaloneConfigSync() {
    return this.getStringAttribute('standalone_config_sync');
  }
  public set standaloneConfigSync(value: string) {
    this._standaloneConfigSync = value;
  }
  public resetStandaloneConfigSync() {
    this._standaloneConfigSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneConfigSyncInput() {
    return this._standaloneConfigSync;
  }

  // standalone_mgmt_vdom - computed: true, optional: true, required: false
  private _standaloneMgmtVdom?: string; 
  public get standaloneMgmtVdom() {
    return this.getStringAttribute('standalone_mgmt_vdom');
  }
  public set standaloneMgmtVdom(value: string) {
    this._standaloneMgmtVdom = value;
  }
  public resetStandaloneMgmtVdom() {
    this._standaloneMgmtVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneMgmtVdomInput() {
    return this._standaloneMgmtVdom;
  }

  // sync_config - computed: true, optional: true, required: false
  private _syncConfig?: string; 
  public get syncConfig() {
    return this.getStringAttribute('sync_config');
  }
  public set syncConfig(value: string) {
    this._syncConfig = value;
  }
  public resetSyncConfig() {
    this._syncConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig;
  }

  // sync_packet_balance - computed: true, optional: true, required: false
  private _syncPacketBalance?: string; 
  public get syncPacketBalance() {
    return this.getStringAttribute('sync_packet_balance');
  }
  public set syncPacketBalance(value: string) {
    this._syncPacketBalance = value;
  }
  public resetSyncPacketBalance() {
    this._syncPacketBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPacketBalanceInput() {
    return this._syncPacketBalance;
  }

  // unicast_gateway - computed: true, optional: true, required: false
  private _unicastGateway?: string; 
  public get unicastGateway() {
    return this.getStringAttribute('unicast_gateway');
  }
  public set unicastGateway(value: string) {
    this._unicastGateway = value;
  }
  public resetUnicastGateway() {
    this._unicastGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastGatewayInput() {
    return this._unicastGateway;
  }

  // unicast_hb - computed: true, optional: true, required: false
  private _unicastHb?: string; 
  public get unicastHb() {
    return this.getStringAttribute('unicast_hb');
  }
  public set unicastHb(value: string) {
    this._unicastHb = value;
  }
  public resetUnicastHb() {
    this._unicastHb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastHbInput() {
    return this._unicastHb;
  }

  // unicast_hb_netmask - computed: true, optional: true, required: false
  private _unicastHbNetmask?: string; 
  public get unicastHbNetmask() {
    return this.getStringAttribute('unicast_hb_netmask');
  }
  public set unicastHbNetmask(value: string) {
    this._unicastHbNetmask = value;
  }
  public resetUnicastHbNetmask() {
    this._unicastHbNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastHbNetmaskInput() {
    return this._unicastHbNetmask;
  }

  // unicast_hb_peerip - computed: true, optional: true, required: false
  private _unicastHbPeerip?: string; 
  public get unicastHbPeerip() {
    return this.getStringAttribute('unicast_hb_peerip');
  }
  public set unicastHbPeerip(value: string) {
    this._unicastHbPeerip = value;
  }
  public resetUnicastHbPeerip() {
    this._unicastHbPeerip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastHbPeeripInput() {
    return this._unicastHbPeerip;
  }

  // unicast_status - computed: true, optional: true, required: false
  private _unicastStatus?: string; 
  public get unicastStatus() {
    return this.getStringAttribute('unicast_status');
  }
  public set unicastStatus(value: string) {
    this._unicastStatus = value;
  }
  public resetUnicastStatus() {
    this._unicastStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastStatusInput() {
    return this._unicastStatus;
  }

  // uninterruptible_primary_wait - computed: true, optional: true, required: false
  private _uninterruptiblePrimaryWait?: number; 
  public get uninterruptiblePrimaryWait() {
    return this.getNumberAttribute('uninterruptible_primary_wait');
  }
  public set uninterruptiblePrimaryWait(value: number) {
    this._uninterruptiblePrimaryWait = value;
  }
  public resetUninterruptiblePrimaryWait() {
    this._uninterruptiblePrimaryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninterruptiblePrimaryWaitInput() {
    return this._uninterruptiblePrimaryWait;
  }

  // uninterruptible_upgrade - computed: true, optional: true, required: false
  private _uninterruptibleUpgrade?: string; 
  public get uninterruptibleUpgrade() {
    return this.getStringAttribute('uninterruptible_upgrade');
  }
  public set uninterruptibleUpgrade(value: string) {
    this._uninterruptibleUpgrade = value;
  }
  public resetUninterruptibleUpgrade() {
    this._uninterruptibleUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninterruptibleUpgradeInput() {
    return this._uninterruptibleUpgrade;
  }

  // upgrade_mode - computed: true, optional: true, required: false
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }

  // vcluster2 - computed: true, optional: true, required: false
  private _vcluster2?: string; 
  public get vcluster2() {
    return this.getStringAttribute('vcluster2');
  }
  public set vcluster2(value: string) {
    this._vcluster2 = value;
  }
  public resetVcluster2() {
    this._vcluster2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcluster2Input() {
    return this._vcluster2;
  }

  // vcluster_id - computed: false, optional: true, required: false
  private _vclusterId?: number; 
  public get vclusterId() {
    return this.getNumberAttribute('vcluster_id');
  }
  public set vclusterId(value: number) {
    this._vclusterId = value;
  }
  public resetVclusterId() {
    this._vclusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterIdInput() {
    return this._vclusterId;
  }

  // vcluster_status - computed: true, optional: true, required: false
  private _vclusterStatus?: string; 
  public get vclusterStatus() {
    return this.getStringAttribute('vcluster_status');
  }
  public set vclusterStatus(value: string) {
    this._vclusterStatus = value;
  }
  public resetVclusterStatus() {
    this._vclusterStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterStatusInput() {
    return this._vclusterStatus;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
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
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // auto_virtual_mac_interface - computed: false, optional: true, required: false
  private _autoVirtualMacInterface = new SystemHaAutoVirtualMacInterfaceList(this, "auto_virtual_mac_interface", true);
  public get autoVirtualMacInterface() {
    return this._autoVirtualMacInterface;
  }
  public putAutoVirtualMacInterface(value: SystemHaAutoVirtualMacInterface[] | cdktf.IResolvable) {
    this._autoVirtualMacInterface.internalValue = value;
  }
  public resetAutoVirtualMacInterface() {
    this._autoVirtualMacInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVirtualMacInterfaceInput() {
    return this._autoVirtualMacInterface.internalValue;
  }

  // backup_hbdev - computed: false, optional: true, required: false
  private _backupHbdev = new SystemHaBackupHbdevList(this, "backup_hbdev", true);
  public get backupHbdev() {
    return this._backupHbdev;
  }
  public putBackupHbdev(value: SystemHaBackupHbdev[] | cdktf.IResolvable) {
    this._backupHbdev.internalValue = value;
  }
  public resetBackupHbdev() {
    this._backupHbdev.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupHbdevInput() {
    return this._backupHbdev.internalValue;
  }

  // ha_mgmt_interfaces - computed: false, optional: true, required: false
  private _haMgmtInterfaces = new SystemHaHaMgmtInterfacesList(this, "ha_mgmt_interfaces", false);
  public get haMgmtInterfaces() {
    return this._haMgmtInterfaces;
  }
  public putHaMgmtInterfaces(value: SystemHaHaMgmtInterfaces[] | cdktf.IResolvable) {
    this._haMgmtInterfaces.internalValue = value;
  }
  public resetHaMgmtInterfaces() {
    this._haMgmtInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haMgmtInterfacesInput() {
    return this._haMgmtInterfaces.internalValue;
  }

  // secondary_vcluster - computed: false, optional: true, required: false
  private _secondaryVcluster = new SystemHaSecondaryVclusterOutputReference(this, "secondary_vcluster");
  public get secondaryVcluster() {
    return this._secondaryVcluster;
  }
  public putSecondaryVcluster(value: SystemHaSecondaryVcluster) {
    this._secondaryVcluster.internalValue = value;
  }
  public resetSecondaryVcluster() {
    this._secondaryVcluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVclusterInput() {
    return this._secondaryVcluster.internalValue;
  }

  // unicast_peers - computed: false, optional: true, required: false
  private _unicastPeers = new SystemHaUnicastPeersList(this, "unicast_peers", false);
  public get unicastPeers() {
    return this._unicastPeers;
  }
  public putUnicastPeers(value: SystemHaUnicastPeers[] | cdktf.IResolvable) {
    this._unicastPeers.internalValue = value;
  }
  public resetUnicastPeers() {
    this._unicastPeers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastPeersInput() {
    return this._unicastPeers.internalValue;
  }

  // vcluster - computed: false, optional: true, required: false
  private _vcluster = new SystemHaVclusterList(this, "vcluster", false);
  public get vcluster() {
    return this._vcluster;
  }
  public putVcluster(value: SystemHaVcluster[] | cdktf.IResolvable) {
    this._vcluster.internalValue = value;
  }
  public resetVcluster() {
    this._vcluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterInput() {
    return this._vcluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arps: cdktf.numberToTerraform(this._arps),
      arps_interval: cdktf.numberToTerraform(this._arpsInterval),
      authentication: cdktf.stringToTerraform(this._authentication),
      bounce_intf_upon_failover: cdktf.stringToTerraform(this._bounceIntfUponFailover),
      check_secondary_dev_health: cdktf.stringToTerraform(this._checkSecondaryDevHealth),
      cpu_threshold: cdktf.stringToTerraform(this._cpuThreshold),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      encryption: cdktf.stringToTerraform(this._encryption),
      evpn_ttl: cdktf.numberToTerraform(this._evpnTtl),
      failover_hold_time: cdktf.numberToTerraform(this._failoverHoldTime),
      ftp_proxy_threshold: cdktf.stringToTerraform(this._ftpProxyThreshold),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      gratuitous_arps: cdktf.stringToTerraform(this._gratuitousArps),
      group_id: cdktf.numberToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      ha_direct: cdktf.stringToTerraform(this._haDirect),
      ha_eth_type: cdktf.stringToTerraform(this._haEthType),
      ha_mgmt_status: cdktf.stringToTerraform(this._haMgmtStatus),
      ha_uptime_diff_margin: cdktf.numberToTerraform(this._haUptimeDiffMargin),
      hb_interval: cdktf.numberToTerraform(this._hbInterval),
      hb_interval_in_milliseconds: cdktf.stringToTerraform(this._hbIntervalInMilliseconds),
      hb_lost_threshold: cdktf.numberToTerraform(this._hbLostThreshold),
      hbdev: cdktf.stringToTerraform(this._hbdev),
      hc_eth_type: cdktf.stringToTerraform(this._hcEthType),
      hello_holddown: cdktf.numberToTerraform(this._helloHolddown),
      http_proxy_threshold: cdktf.stringToTerraform(this._httpProxyThreshold),
      id: cdktf.stringToTerraform(this._id),
      imap_proxy_threshold: cdktf.stringToTerraform(this._imapProxyThreshold),
      inter_cluster_session_sync: cdktf.stringToTerraform(this._interClusterSessionSync),
      ipsec_phase2_proposal: cdktf.stringToTerraform(this._ipsecPhase2Proposal),
      key: cdktf.stringToTerraform(this._key),
      l2ep_eth_type: cdktf.stringToTerraform(this._l2EpEthType),
      link_failed_signal: cdktf.stringToTerraform(this._linkFailedSignal),
      load_balance_all: cdktf.stringToTerraform(this._loadBalanceAll),
      logical_sn: cdktf.stringToTerraform(this._logicalSn),
      memory_based_failover: cdktf.stringToTerraform(this._memoryBasedFailover),
      memory_compatible_mode: cdktf.stringToTerraform(this._memoryCompatibleMode),
      memory_failover_flip_timeout: cdktf.numberToTerraform(this._memoryFailoverFlipTimeout),
      memory_failover_monitor_period: cdktf.numberToTerraform(this._memoryFailoverMonitorPeriod),
      memory_failover_sample_rate: cdktf.numberToTerraform(this._memoryFailoverSampleRate),
      memory_failover_threshold: cdktf.numberToTerraform(this._memoryFailoverThreshold),
      memory_threshold: cdktf.stringToTerraform(this._memoryThreshold),
      mode: cdktf.stringToTerraform(this._mode),
      monitor: cdktf.stringToTerraform(this._monitor),
      multicast_ttl: cdktf.numberToTerraform(this._multicastTtl),
      nntp_proxy_threshold: cdktf.stringToTerraform(this._nntpProxyThreshold),
      override: cdktf.stringToTerraform(this._override),
      override_wait_time: cdktf.numberToTerraform(this._overrideWaitTime),
      password: cdktf.stringToTerraform(this._password),
      pingserver_failover_threshold: cdktf.numberToTerraform(this._pingserverFailoverThreshold),
      pingserver_flip_timeout: cdktf.numberToTerraform(this._pingserverFlipTimeout),
      pingserver_monitor_interface: cdktf.stringToTerraform(this._pingserverMonitorInterface),
      pingserver_secondary_force_reset: cdktf.stringToTerraform(this._pingserverSecondaryForceReset),
      pingserver_slave_force_reset: cdktf.stringToTerraform(this._pingserverSlaveForceReset),
      pop3_proxy_threshold: cdktf.stringToTerraform(this._pop3ProxyThreshold),
      priority: cdktf.numberToTerraform(this._priority),
      route_hold: cdktf.numberToTerraform(this._routeHold),
      route_ttl: cdktf.numberToTerraform(this._routeTtl),
      route_wait: cdktf.numberToTerraform(this._routeWait),
      schedule: cdktf.stringToTerraform(this._schedule),
      session_pickup: cdktf.stringToTerraform(this._sessionPickup),
      session_pickup_connectionless: cdktf.stringToTerraform(this._sessionPickupConnectionless),
      session_pickup_delay: cdktf.stringToTerraform(this._sessionPickupDelay),
      session_pickup_expectation: cdktf.stringToTerraform(this._sessionPickupExpectation),
      session_pickup_nat: cdktf.stringToTerraform(this._sessionPickupNat),
      session_sync_dev: cdktf.stringToTerraform(this._sessionSyncDev),
      smtp_proxy_threshold: cdktf.stringToTerraform(this._smtpProxyThreshold),
      ssd_failover: cdktf.stringToTerraform(this._ssdFailover),
      standalone_config_sync: cdktf.stringToTerraform(this._standaloneConfigSync),
      standalone_mgmt_vdom: cdktf.stringToTerraform(this._standaloneMgmtVdom),
      sync_config: cdktf.stringToTerraform(this._syncConfig),
      sync_packet_balance: cdktf.stringToTerraform(this._syncPacketBalance),
      unicast_gateway: cdktf.stringToTerraform(this._unicastGateway),
      unicast_hb: cdktf.stringToTerraform(this._unicastHb),
      unicast_hb_netmask: cdktf.stringToTerraform(this._unicastHbNetmask),
      unicast_hb_peerip: cdktf.stringToTerraform(this._unicastHbPeerip),
      unicast_status: cdktf.stringToTerraform(this._unicastStatus),
      uninterruptible_primary_wait: cdktf.numberToTerraform(this._uninterruptiblePrimaryWait),
      uninterruptible_upgrade: cdktf.stringToTerraform(this._uninterruptibleUpgrade),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      vcluster2: cdktf.stringToTerraform(this._vcluster2),
      vcluster_id: cdktf.numberToTerraform(this._vclusterId),
      vcluster_status: cdktf.stringToTerraform(this._vclusterStatus),
      vdom: cdktf.stringToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      weight: cdktf.stringToTerraform(this._weight),
      auto_virtual_mac_interface: cdktf.listMapper(systemHaAutoVirtualMacInterfaceToTerraform, true)(this._autoVirtualMacInterface.internalValue),
      backup_hbdev: cdktf.listMapper(systemHaBackupHbdevToTerraform, true)(this._backupHbdev.internalValue),
      ha_mgmt_interfaces: cdktf.listMapper(systemHaHaMgmtInterfacesToTerraform, true)(this._haMgmtInterfaces.internalValue),
      secondary_vcluster: systemHaSecondaryVclusterToTerraform(this._secondaryVcluster.internalValue),
      unicast_peers: cdktf.listMapper(systemHaUnicastPeersToTerraform, true)(this._unicastPeers.internalValue),
      vcluster: cdktf.listMapper(systemHaVclusterToTerraform, true)(this._vcluster.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arps: {
        value: cdktf.numberToHclTerraform(this._arps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arps_interval: {
        value: cdktf.numberToHclTerraform(this._arpsInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bounce_intf_upon_failover: {
        value: cdktf.stringToHclTerraform(this._bounceIntfUponFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_secondary_dev_health: {
        value: cdktf.stringToHclTerraform(this._checkSecondaryDevHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_threshold: {
        value: cdktf.stringToHclTerraform(this._cpuThreshold),
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
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evpn_ttl: {
        value: cdktf.numberToHclTerraform(this._evpnTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_hold_time: {
        value: cdktf.numberToHclTerraform(this._failoverHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftp_proxy_threshold: {
        value: cdktf.stringToHclTerraform(this._ftpProxyThreshold),
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
      gratuitous_arps: {
        value: cdktf.stringToHclTerraform(this._gratuitousArps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_direct: {
        value: cdktf.stringToHclTerraform(this._haDirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_eth_type: {
        value: cdktf.stringToHclTerraform(this._haEthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_mgmt_status: {
        value: cdktf.stringToHclTerraform(this._haMgmtStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_uptime_diff_margin: {
        value: cdktf.numberToHclTerraform(this._haUptimeDiffMargin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_interval: {
        value: cdktf.numberToHclTerraform(this._hbInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_interval_in_milliseconds: {
        value: cdktf.stringToHclTerraform(this._hbIntervalInMilliseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hb_lost_threshold: {
        value: cdktf.numberToHclTerraform(this._hbLostThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hbdev: {
        value: cdktf.stringToHclTerraform(this._hbdev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hc_eth_type: {
        value: cdktf.stringToHclTerraform(this._hcEthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_holddown: {
        value: cdktf.numberToHclTerraform(this._helloHolddown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_proxy_threshold: {
        value: cdktf.stringToHclTerraform(this._httpProxyThreshold),
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
      imap_proxy_threshold: {
        value: cdktf.stringToHclTerraform(this._imapProxyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inter_cluster_session_sync: {
        value: cdktf.stringToHclTerraform(this._interClusterSessionSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_phase2_proposal: {
        value: cdktf.stringToHclTerraform(this._ipsecPhase2Proposal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2ep_eth_type: {
        value: cdktf.stringToHclTerraform(this._l2EpEthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_failed_signal: {
        value: cdktf.stringToHclTerraform(this._linkFailedSignal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balance_all: {
        value: cdktf.stringToHclTerraform(this._loadBalanceAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_sn: {
        value: cdktf.stringToHclTerraform(this._logicalSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_based_failover: {
        value: cdktf.stringToHclTerraform(this._memoryBasedFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_compatible_mode: {
        value: cdktf.stringToHclTerraform(this._memoryCompatibleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_failover_flip_timeout: {
        value: cdktf.numberToHclTerraform(this._memoryFailoverFlipTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_failover_monitor_period: {
        value: cdktf.numberToHclTerraform(this._memoryFailoverMonitorPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_failover_sample_rate: {
        value: cdktf.numberToHclTerraform(this._memoryFailoverSampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_failover_threshold: {
        value: cdktf.numberToHclTerraform(this._memoryFailoverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_threshold: {
        value: cdktf.stringToHclTerraform(this._memoryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_ttl: {
        value: cdktf.numberToHclTerraform(this._multicastTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nntp_proxy_threshold: {
        value: cdktf.stringToHclTerraform(this._nntpProxyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_wait_time: {
        value: cdktf.numberToHclTerraform(this._overrideWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pingserver_failover_threshold: {
        value: cdktf.numberToHclTerraform(this._pingserverFailoverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pingserver_flip_timeout: {
        value: cdktf.numberToHclTerraform(this._pingserverFlipTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pingserver_monitor_interface: {
        value: cdktf.stringToHclTerraform(this._pingserverMonitorInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pingserver_secondary_force_reset: {
        value: cdktf.stringToHclTerraform(this._pingserverSecondaryForceReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pingserver_slave_force_reset: {
        value: cdktf.stringToHclTerraform(this._pingserverSlaveForceReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop3_proxy_threshold: {
        value: cdktf.stringToHclTerraform(this._pop3ProxyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_hold: {
        value: cdktf.numberToHclTerraform(this._routeHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_ttl: {
        value: cdktf.numberToHclTerraform(this._routeTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_wait: {
        value: cdktf.numberToHclTerraform(this._routeWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_pickup: {
        value: cdktf.stringToHclTerraform(this._sessionPickup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_pickup_connectionless: {
        value: cdktf.stringToHclTerraform(this._sessionPickupConnectionless),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_pickup_delay: {
        value: cdktf.stringToHclTerraform(this._sessionPickupDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_pickup_expectation: {
        value: cdktf.stringToHclTerraform(this._sessionPickupExpectation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_pickup_nat: {
        value: cdktf.stringToHclTerraform(this._sessionPickupNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_sync_dev: {
        value: cdktf.stringToHclTerraform(this._sessionSyncDev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_proxy_threshold: {
        value: cdktf.stringToHclTerraform(this._smtpProxyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssd_failover: {
        value: cdktf.stringToHclTerraform(this._ssdFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standalone_config_sync: {
        value: cdktf.stringToHclTerraform(this._standaloneConfigSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standalone_mgmt_vdom: {
        value: cdktf.stringToHclTerraform(this._standaloneMgmtVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_config: {
        value: cdktf.stringToHclTerraform(this._syncConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_packet_balance: {
        value: cdktf.stringToHclTerraform(this._syncPacketBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_gateway: {
        value: cdktf.stringToHclTerraform(this._unicastGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_hb: {
        value: cdktf.stringToHclTerraform(this._unicastHb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_hb_netmask: {
        value: cdktf.stringToHclTerraform(this._unicastHbNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_hb_peerip: {
        value: cdktf.stringToHclTerraform(this._unicastHbPeerip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_status: {
        value: cdktf.stringToHclTerraform(this._unicastStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uninterruptible_primary_wait: {
        value: cdktf.numberToHclTerraform(this._uninterruptiblePrimaryWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uninterruptible_upgrade: {
        value: cdktf.stringToHclTerraform(this._uninterruptibleUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_mode: {
        value: cdktf.stringToHclTerraform(this._upgradeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcluster2: {
        value: cdktf.stringToHclTerraform(this._vcluster2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcluster_id: {
        value: cdktf.numberToHclTerraform(this._vclusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcluster_status: {
        value: cdktf.stringToHclTerraform(this._vclusterStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
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
        value: cdktf.stringToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_virtual_mac_interface: {
        value: cdktf.listMapperHcl(systemHaAutoVirtualMacInterfaceToHclTerraform, true)(this._autoVirtualMacInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemHaAutoVirtualMacInterfaceList",
      },
      backup_hbdev: {
        value: cdktf.listMapperHcl(systemHaBackupHbdevToHclTerraform, true)(this._backupHbdev.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemHaBackupHbdevList",
      },
      ha_mgmt_interfaces: {
        value: cdktf.listMapperHcl(systemHaHaMgmtInterfacesToHclTerraform, true)(this._haMgmtInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaHaMgmtInterfacesList",
      },
      secondary_vcluster: {
        value: systemHaSecondaryVclusterToHclTerraform(this._secondaryVcluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaSecondaryVclusterList",
      },
      unicast_peers: {
        value: cdktf.listMapperHcl(systemHaUnicastPeersToHclTerraform, true)(this._unicastPeers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaUnicastPeersList",
      },
      vcluster: {
        value: cdktf.listMapperHcl(systemHaVclusterToHclTerraform, true)(this._vcluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaVclusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
