// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricLanClassicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable only, when IP Authorization is enabled in the AAA Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#aaa_remote_ip_enabled FabricLanClassic#aaa_remote_ip_enabled}
  */
  readonly aaaRemoteIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * AAA Configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#aaa_server_conf FabricLanClassic#aaa_server_conf}
  */
  readonly aaaServerConf?: string;
  /**
  * Allow onboarding of this fabric to Nexus Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#allow_nxc FabricLanClassic#allow_nxc}
  */
  readonly allowNxc?: boolean | cdktf.IResolvable;
  /**
  * Additional CLIs required during device bootup/login e.g. AAA/Radius
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#bootstrap_conf FabricLanClassic#bootstrap_conf}
  */
  readonly bootstrapConf?: string;
  /**
  * Automatic IP Assignment For POAP (For NX-OS Switches Only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#bootstrap_enable FabricLanClassic#bootstrap_enable}
  */
  readonly bootstrapEnable?: boolean | cdktf.IResolvable;
  /**
  * DHCPv4 Multi Subnet Scope - lines with # prefix are ignored here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#bootstrap_multisubnet FabricLanClassic#bootstrap_multisubnet}
  */
  readonly bootstrapMultisubnet?: string;
  /**
  * Enable CDP on management interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#cdp_enable FabricLanClassic#cdp_enable}
  */
  readonly cdpEnable?: boolean | cdktf.IResolvable;
  /**
  * Address range to assign P2P DCI Links
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#dci_subnet_range FabricLanClassic#dci_subnet_range}
  */
  readonly dciSubnetRange?: string;
  /**
  * Target Mask for Subnet Range (Min:8, Max:31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#dci_subnet_target_mask FabricLanClassic#dci_subnet_target_mask}
  */
  readonly dciSubnetTargetMask?: number;
  /**
  * This flag does configuration save and deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#deploy FabricLanClassic#deploy}
  */
  readonly deploy: boolean | cdktf.IResolvable;
  /**
  * Disable all deployments in this fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#deployment_freeze FabricLanClassic#deployment_freeze}
  */
  readonly deploymentFreeze?: boolean | cdktf.IResolvable;
  /**
  * Automatic IP Assignment For POAP From Local DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#dhcp_enable FabricLanClassic#dhcp_enable}
  */
  readonly dhcpEnable?: boolean | cdktf.IResolvable;
  /**
  * End Address For Switch POAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#dhcp_end FabricLanClassic#dhcp_end}
  */
  readonly dhcpEnd?: string;
  /**
  * DHCP Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#dhcp_ipv6_enable FabricLanClassic#dhcp_ipv6_enable}
  */
  readonly dhcpIpv6Enable?: string;
  /**
  * Start Address For Switch POAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#dhcp_start FabricLanClassic#dhcp_start}
  */
  readonly dhcpStart?: string;
  /**
  * Include AAA configs from Advanced tab during device bootup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#enable_aaa FabricLanClassic#enable_aaa}
  */
  readonly enableAaa?: boolean | cdktf.IResolvable;
  /**
  * Enable Netflow on VTEPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#enable_netflow FabricLanClassic#enable_netflow}
  */
  readonly enableNetflow?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTPS NX-API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#enable_nxapi FabricLanClassic#enable_nxapi}
  */
  readonly enableNxapi?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTP NX-API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#enable_nxapi_http FabricLanClassic#enable_nxapi_http}
  */
  readonly enableNxapiHttp?: boolean | cdktf.IResolvable;
  /**
  * Backup hourly only if there is any config deployment since last backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#enable_real_time_backup FabricLanClassic#enable_real_time_backup}
  */
  readonly enableRealTimeBackup?: boolean | cdktf.IResolvable;
  /**
  * Valid for NX-OS only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#enable_rt_intf_stats FabricLanClassic#enable_rt_intf_stats}
  */
  readonly enableRtIntfStats?: boolean | cdktf.IResolvable;
  /**
  * Backup at the specified time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#enable_scheduled_backup FabricLanClassic#enable_scheduled_backup}
  */
  readonly enableScheduledBackup?: boolean | cdktf.IResolvable;
  /**
  * External Fabric Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#ext_fabric_type FabricLanClassic#ext_fabric_type}
  */
  readonly extFabricType?: string;
  /**
  * Additional supported CLIs for all same OS (e.g. all NxOS etc) switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#fabric_freeform FabricLanClassic#fabric_freeform}
  */
  readonly fabricFreeform?: string;
  /**
  * Fabric name to be created, updated or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#fabric_name FabricLanClassic#fabric_name}
  */
  readonly fabricName: string;
  /**
  * Enable Precision Time Protocol (PTP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#feature_ptp FabricLanClassic#feature_ptp}
  */
  readonly featurePtp?: boolean | cdktf.IResolvable;
  /**
  * Template Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#ff FabricLanClassic#ff}
  */
  readonly ff?: string;
  /**
  * Enable POAP over Inband Interface (Pre-req: Inband Mgmt Knob should be Enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#inband_enable FabricLanClassic#inband_enable}
  */
  readonly inbandEnable?: boolean | cdktf.IResolvable;
  /**
  * Import switches with inband connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#inband_mgmt FabricLanClassic#inband_mgmt}
  */
  readonly inbandMgmt?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds (Min:5, Max:300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#intf_stat_load_interval FabricLanClassic#intf_stat_load_interval}
  */
  readonly intfStatLoadInterval?: number;
  /**
  * If enabled, fabric is only monitored. No configuration will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#is_read_only FabricLanClassic#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Underlay Routing Loopback IP Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#loopback0_ip_range FabricLanClassic#loopback0_ip_range}
  */
  readonly loopback0IpRange?: string;
  /**
  * Default Gateway For Management VRF On The Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#mgmt_gw FabricLanClassic#mgmt_gw}
  */
  readonly mgmtGw?: string;
  /**
  * Switch Mgmt IP Subnet Prefix (Min:8, Max:30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#mgmt_prefix FabricLanClassic#mgmt_prefix}
  */
  readonly mgmtPrefix?: number;
  /**
  * Enable MPLS Handoff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#mpls_handoff FabricLanClassic#mpls_handoff}
  */
  readonly mplsHandoff?: boolean | cdktf.IResolvable;
  /**
  * (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#mpls_lb_id FabricLanClassic#mpls_lb_id}
  */
  readonly mplsLbId?: number;
  /**
  * MPLS Loopback IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#mpls_loopback_ip_range FabricLanClassic#mpls_loopback_ip_range}
  */
  readonly mplsLoopbackIpRange?: string;
  /**
  * One or Multiple Netflow Exporters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#netflow_exporter_list FabricLanClassic#netflow_exporter_list}
  */
  readonly netflowExporterList?: string;
  /**
  * One or Multiple Netflow Monitors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#netflow_monitor_list FabricLanClassic#netflow_monitor_list}
  */
  readonly netflowMonitorList?: string;
  /**
  * One or Multiple Netflow Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#netflow_record_list FabricLanClassic#netflow_record_list}
  */
  readonly netflowRecordList?: string;
  /**
  * One or multiple Netflow Samplers. Applicable to N7K only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#netflow_sampler_list FabricLanClassic#netflow_sampler_list}
  */
  readonly netflowSamplerList?: string;
  /**
  * NX-API HTTP Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#nxapi_http_port FabricLanClassic#nxapi_http_port}
  */
  readonly nxapiHttpPort?: number;
  /**
  * NX-API HTTPS Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#nxapi_https_port FabricLanClassic#nxapi_https_port}
  */
  readonly nxapiHttpsPort?: number;
  /**
  * VRF to be used to reach Nexus Cloud, enter 'management' for management VRF and 'default' for default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#nxc_dest_vrf FabricLanClassic#nxc_dest_vrf}
  */
  readonly nxcDestVrf?: string;
  /**
  * Proxy port number, default is 8080
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#nxc_proxy_port FabricLanClassic#nxc_proxy_port}
  */
  readonly nxcProxyPort?: number;
  /**
  * IPv4 or IPv6 address, or DNS name of the proxy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#nxc_proxy_server FabricLanClassic#nxc_proxy_server}
  */
  readonly nxcProxyServer?: string;
  /**
  * Source interface for communication to Nexus Cloud, mandatory if Destination VRF is not management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#nxc_src_intf FabricLanClassic#nxc_src_intf}
  */
  readonly nxcSrcIntf?: string;
  /**
  * If enabled, Fabric NxCloud Settings will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#overwrite_global_nxc FabricLanClassic#overwrite_global_nxc}
  */
  readonly overwriteGlobalNxc?: boolean | cdktf.IResolvable;
  /**
  * Enable Performance Monitoring (For NX-OS Switches Only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#pm_enable FabricLanClassic#pm_enable}
  */
  readonly pmEnable?: boolean | cdktf.IResolvable;
  /**
  * Default Power Supply Mode For Bootstrapped NX-OS Switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#power_redundancy_mode FabricLanClassic#power_redundancy_mode}
  */
  readonly powerRedundancyMode?: string;
  /**
  * Multiple Independent PTP Clocking Subdomains on a Single Network (Min:0, Max:127)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#ptp_domain_id FabricLanClassic#ptp_domain_id}
  */
  readonly ptpDomainId?: number;
  /**
  * (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#ptp_lb_id FabricLanClassic#ptp_lb_id}
  */
  readonly ptpLbId?: number;
  /**
  * Time (UTC) in 24hr format. (00:00 to 23:59)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#scheduled_time FabricLanClassic#scheduled_time}
  */
  readonly scheduledTime?: string;
  /**
  * Configure NDFC as a receiver for SNMP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#snmp_server_host_trap FabricLanClassic#snmp_server_host_trap}
  */
  readonly snmpServerHostTrap?: boolean | cdktf.IResolvable;
  /**
  * Per Border Dot1q Range For VRF Lite Connectivity (Min:2, Max:4093)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#subinterface_range FabricLanClassic#subinterface_range}
  */
  readonly subinterfaceRange?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic ndfc_fabric_lan_classic}
*/
export class FabricLanClassic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_fabric_lan_classic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricLanClassic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricLanClassic to import
  * @param importFromId The id of the existing FabricLanClassic that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricLanClassic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_fabric_lan_classic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_lan_classic ndfc_fabric_lan_classic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricLanClassicConfig
  */
  public constructor(scope: Construct, id: string, config: FabricLanClassicConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_fabric_lan_classic',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aaaRemoteIpEnabled = config.aaaRemoteIpEnabled;
    this._aaaServerConf = config.aaaServerConf;
    this._allowNxc = config.allowNxc;
    this._bootstrapConf = config.bootstrapConf;
    this._bootstrapEnable = config.bootstrapEnable;
    this._bootstrapMultisubnet = config.bootstrapMultisubnet;
    this._cdpEnable = config.cdpEnable;
    this._dciSubnetRange = config.dciSubnetRange;
    this._dciSubnetTargetMask = config.dciSubnetTargetMask;
    this._deploy = config.deploy;
    this._deploymentFreeze = config.deploymentFreeze;
    this._dhcpEnable = config.dhcpEnable;
    this._dhcpEnd = config.dhcpEnd;
    this._dhcpIpv6Enable = config.dhcpIpv6Enable;
    this._dhcpStart = config.dhcpStart;
    this._enableAaa = config.enableAaa;
    this._enableNetflow = config.enableNetflow;
    this._enableNxapi = config.enableNxapi;
    this._enableNxapiHttp = config.enableNxapiHttp;
    this._enableRealTimeBackup = config.enableRealTimeBackup;
    this._enableRtIntfStats = config.enableRtIntfStats;
    this._enableScheduledBackup = config.enableScheduledBackup;
    this._extFabricType = config.extFabricType;
    this._fabricFreeform = config.fabricFreeform;
    this._fabricName = config.fabricName;
    this._featurePtp = config.featurePtp;
    this._ff = config.ff;
    this._inbandEnable = config.inbandEnable;
    this._inbandMgmt = config.inbandMgmt;
    this._intfStatLoadInterval = config.intfStatLoadInterval;
    this._isReadOnly = config.isReadOnly;
    this._loopback0IpRange = config.loopback0IpRange;
    this._mgmtGw = config.mgmtGw;
    this._mgmtPrefix = config.mgmtPrefix;
    this._mplsHandoff = config.mplsHandoff;
    this._mplsLbId = config.mplsLbId;
    this._mplsLoopbackIpRange = config.mplsLoopbackIpRange;
    this._netflowExporterList = config.netflowExporterList;
    this._netflowMonitorList = config.netflowMonitorList;
    this._netflowRecordList = config.netflowRecordList;
    this._netflowSamplerList = config.netflowSamplerList;
    this._nxapiHttpPort = config.nxapiHttpPort;
    this._nxapiHttpsPort = config.nxapiHttpsPort;
    this._nxcDestVrf = config.nxcDestVrf;
    this._nxcProxyPort = config.nxcProxyPort;
    this._nxcProxyServer = config.nxcProxyServer;
    this._nxcSrcIntf = config.nxcSrcIntf;
    this._overwriteGlobalNxc = config.overwriteGlobalNxc;
    this._pmEnable = config.pmEnable;
    this._powerRedundancyMode = config.powerRedundancyMode;
    this._ptpDomainId = config.ptpDomainId;
    this._ptpLbId = config.ptpLbId;
    this._scheduledTime = config.scheduledTime;
    this._snmpServerHostTrap = config.snmpServerHostTrap;
    this._subinterfaceRange = config.subinterfaceRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_remote_ip_enabled - computed: true, optional: true, required: false
  private _aaaRemoteIpEnabled?: boolean | cdktf.IResolvable; 
  public get aaaRemoteIpEnabled() {
    return this.getBooleanAttribute('aaa_remote_ip_enabled');
  }
  public set aaaRemoteIpEnabled(value: boolean | cdktf.IResolvable) {
    this._aaaRemoteIpEnabled = value;
  }
  public resetAaaRemoteIpEnabled() {
    this._aaaRemoteIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaRemoteIpEnabledInput() {
    return this._aaaRemoteIpEnabled;
  }

  // aaa_server_conf - computed: true, optional: true, required: false
  private _aaaServerConf?: string; 
  public get aaaServerConf() {
    return this.getStringAttribute('aaa_server_conf');
  }
  public set aaaServerConf(value: string) {
    this._aaaServerConf = value;
  }
  public resetAaaServerConf() {
    this._aaaServerConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaServerConfInput() {
    return this._aaaServerConf;
  }

  // allow_nxc - computed: true, optional: true, required: false
  private _allowNxc?: boolean | cdktf.IResolvable; 
  public get allowNxc() {
    return this.getBooleanAttribute('allow_nxc');
  }
  public set allowNxc(value: boolean | cdktf.IResolvable) {
    this._allowNxc = value;
  }
  public resetAllowNxc() {
    this._allowNxc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNxcInput() {
    return this._allowNxc;
  }

  // allow_nxc_prev - computed: true, optional: false, required: false
  public get allowNxcPrev() {
    return this.getBooleanAttribute('allow_nxc_prev');
  }

  // bootstrap_conf - computed: true, optional: true, required: false
  private _bootstrapConf?: string; 
  public get bootstrapConf() {
    return this.getStringAttribute('bootstrap_conf');
  }
  public set bootstrapConf(value: string) {
    this._bootstrapConf = value;
  }
  public resetBootstrapConf() {
    this._bootstrapConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapConfInput() {
    return this._bootstrapConf;
  }

  // bootstrap_enable - computed: true, optional: true, required: false
  private _bootstrapEnable?: boolean | cdktf.IResolvable; 
  public get bootstrapEnable() {
    return this.getBooleanAttribute('bootstrap_enable');
  }
  public set bootstrapEnable(value: boolean | cdktf.IResolvable) {
    this._bootstrapEnable = value;
  }
  public resetBootstrapEnable() {
    this._bootstrapEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapEnableInput() {
    return this._bootstrapEnable;
  }

  // bootstrap_multisubnet - computed: true, optional: true, required: false
  private _bootstrapMultisubnet?: string; 
  public get bootstrapMultisubnet() {
    return this.getStringAttribute('bootstrap_multisubnet');
  }
  public set bootstrapMultisubnet(value: string) {
    this._bootstrapMultisubnet = value;
  }
  public resetBootstrapMultisubnet() {
    this._bootstrapMultisubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapMultisubnetInput() {
    return this._bootstrapMultisubnet;
  }

  // bootstrap_multisubnet_internal - computed: true, optional: false, required: false
  public get bootstrapMultisubnetInternal() {
    return this.getStringAttribute('bootstrap_multisubnet_internal');
  }

  // cdp_enable - computed: true, optional: true, required: false
  private _cdpEnable?: boolean | cdktf.IResolvable; 
  public get cdpEnable() {
    return this.getBooleanAttribute('cdp_enable');
  }
  public set cdpEnable(value: boolean | cdktf.IResolvable) {
    this._cdpEnable = value;
  }
  public resetCdpEnable() {
    this._cdpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpEnableInput() {
    return this._cdpEnable;
  }

  // dci_subnet_range - computed: true, optional: true, required: false
  private _dciSubnetRange?: string; 
  public get dciSubnetRange() {
    return this.getStringAttribute('dci_subnet_range');
  }
  public set dciSubnetRange(value: string) {
    this._dciSubnetRange = value;
  }
  public resetDciSubnetRange() {
    this._dciSubnetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciSubnetRangeInput() {
    return this._dciSubnetRange;
  }

  // dci_subnet_target_mask - computed: true, optional: true, required: false
  private _dciSubnetTargetMask?: number; 
  public get dciSubnetTargetMask() {
    return this.getNumberAttribute('dci_subnet_target_mask');
  }
  public set dciSubnetTargetMask(value: number) {
    this._dciSubnetTargetMask = value;
  }
  public resetDciSubnetTargetMask() {
    this._dciSubnetTargetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciSubnetTargetMaskInput() {
    return this._dciSubnetTargetMask;
  }

  // deploy - computed: false, optional: false, required: true
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // deployment_freeze - computed: true, optional: true, required: false
  private _deploymentFreeze?: boolean | cdktf.IResolvable; 
  public get deploymentFreeze() {
    return this.getBooleanAttribute('deployment_freeze');
  }
  public set deploymentFreeze(value: boolean | cdktf.IResolvable) {
    this._deploymentFreeze = value;
  }
  public resetDeploymentFreeze() {
    this._deploymentFreeze = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentFreezeInput() {
    return this._deploymentFreeze;
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // dhcp_enable - computed: true, optional: true, required: false
  private _dhcpEnable?: boolean | cdktf.IResolvable; 
  public get dhcpEnable() {
    return this.getBooleanAttribute('dhcp_enable');
  }
  public set dhcpEnable(value: boolean | cdktf.IResolvable) {
    this._dhcpEnable = value;
  }
  public resetDhcpEnable() {
    this._dhcpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnableInput() {
    return this._dhcpEnable;
  }

  // dhcp_end - computed: true, optional: true, required: false
  private _dhcpEnd?: string; 
  public get dhcpEnd() {
    return this.getStringAttribute('dhcp_end');
  }
  public set dhcpEnd(value: string) {
    this._dhcpEnd = value;
  }
  public resetDhcpEnd() {
    this._dhcpEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEndInput() {
    return this._dhcpEnd;
  }

  // dhcp_end_internal - computed: true, optional: false, required: false
  public get dhcpEndInternal() {
    return this.getStringAttribute('dhcp_end_internal');
  }

  // dhcp_ipv6_enable - computed: true, optional: true, required: false
  private _dhcpIpv6Enable?: string; 
  public get dhcpIpv6Enable() {
    return this.getStringAttribute('dhcp_ipv6_enable');
  }
  public set dhcpIpv6Enable(value: string) {
    this._dhcpIpv6Enable = value;
  }
  public resetDhcpIpv6Enable() {
    this._dhcpIpv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpv6EnableInput() {
    return this._dhcpIpv6Enable;
  }

  // dhcp_ipv6_enable_internal - computed: true, optional: false, required: false
  public get dhcpIpv6EnableInternal() {
    return this.getStringAttribute('dhcp_ipv6_enable_internal');
  }

  // dhcp_start - computed: true, optional: true, required: false
  private _dhcpStart?: string; 
  public get dhcpStart() {
    return this.getStringAttribute('dhcp_start');
  }
  public set dhcpStart(value: string) {
    this._dhcpStart = value;
  }
  public resetDhcpStart() {
    this._dhcpStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStartInput() {
    return this._dhcpStart;
  }

  // dhcp_start_internal - computed: true, optional: false, required: false
  public get dhcpStartInternal() {
    return this.getStringAttribute('dhcp_start_internal');
  }

  // enable_aaa - computed: true, optional: true, required: false
  private _enableAaa?: boolean | cdktf.IResolvable; 
  public get enableAaa() {
    return this.getBooleanAttribute('enable_aaa');
  }
  public set enableAaa(value: boolean | cdktf.IResolvable) {
    this._enableAaa = value;
  }
  public resetEnableAaa() {
    this._enableAaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAaaInput() {
    return this._enableAaa;
  }

  // enable_netflow - computed: true, optional: true, required: false
  private _enableNetflow?: boolean | cdktf.IResolvable; 
  public get enableNetflow() {
    return this.getBooleanAttribute('enable_netflow');
  }
  public set enableNetflow(value: boolean | cdktf.IResolvable) {
    this._enableNetflow = value;
  }
  public resetEnableNetflow() {
    this._enableNetflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetflowInput() {
    return this._enableNetflow;
  }

  // enable_netflow_prev - computed: true, optional: false, required: false
  public get enableNetflowPrev() {
    return this.getBooleanAttribute('enable_netflow_prev');
  }

  // enable_nxapi - computed: true, optional: true, required: false
  private _enableNxapi?: boolean | cdktf.IResolvable; 
  public get enableNxapi() {
    return this.getBooleanAttribute('enable_nxapi');
  }
  public set enableNxapi(value: boolean | cdktf.IResolvable) {
    this._enableNxapi = value;
  }
  public resetEnableNxapi() {
    this._enableNxapi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNxapiInput() {
    return this._enableNxapi;
  }

  // enable_nxapi_http - computed: true, optional: true, required: false
  private _enableNxapiHttp?: boolean | cdktf.IResolvable; 
  public get enableNxapiHttp() {
    return this.getBooleanAttribute('enable_nxapi_http');
  }
  public set enableNxapiHttp(value: boolean | cdktf.IResolvable) {
    this._enableNxapiHttp = value;
  }
  public resetEnableNxapiHttp() {
    this._enableNxapiHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNxapiHttpInput() {
    return this._enableNxapiHttp;
  }

  // enable_real_time_backup - computed: true, optional: true, required: false
  private _enableRealTimeBackup?: boolean | cdktf.IResolvable; 
  public get enableRealTimeBackup() {
    return this.getBooleanAttribute('enable_real_time_backup');
  }
  public set enableRealTimeBackup(value: boolean | cdktf.IResolvable) {
    this._enableRealTimeBackup = value;
  }
  public resetEnableRealTimeBackup() {
    this._enableRealTimeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRealTimeBackupInput() {
    return this._enableRealTimeBackup;
  }

  // enable_rt_intf_stats - computed: true, optional: true, required: false
  private _enableRtIntfStats?: boolean | cdktf.IResolvable; 
  public get enableRtIntfStats() {
    return this.getBooleanAttribute('enable_rt_intf_stats');
  }
  public set enableRtIntfStats(value: boolean | cdktf.IResolvable) {
    this._enableRtIntfStats = value;
  }
  public resetEnableRtIntfStats() {
    this._enableRtIntfStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRtIntfStatsInput() {
    return this._enableRtIntfStats;
  }

  // enable_scheduled_backup - computed: true, optional: true, required: false
  private _enableScheduledBackup?: boolean | cdktf.IResolvable; 
  public get enableScheduledBackup() {
    return this.getBooleanAttribute('enable_scheduled_backup');
  }
  public set enableScheduledBackup(value: boolean | cdktf.IResolvable) {
    this._enableScheduledBackup = value;
  }
  public resetEnableScheduledBackup() {
    this._enableScheduledBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScheduledBackupInput() {
    return this._enableScheduledBackup;
  }

  // ext_fabric_type - computed: true, optional: true, required: false
  private _extFabricType?: string; 
  public get extFabricType() {
    return this.getStringAttribute('ext_fabric_type');
  }
  public set extFabricType(value: string) {
    this._extFabricType = value;
  }
  public resetExtFabricType() {
    this._extFabricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extFabricTypeInput() {
    return this._extFabricType;
  }

  // fabric_freeform - computed: true, optional: true, required: false
  private _fabricFreeform?: string; 
  public get fabricFreeform() {
    return this.getStringAttribute('fabric_freeform');
  }
  public set fabricFreeform(value: string) {
    this._fabricFreeform = value;
  }
  public resetFabricFreeform() {
    this._fabricFreeform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricFreeformInput() {
    return this._fabricFreeform;
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
  }

  // fabric_technology - computed: true, optional: false, required: false
  public get fabricTechnology() {
    return this.getStringAttribute('fabric_technology');
  }

  // fabric_type - computed: true, optional: false, required: false
  public get fabricType() {
    return this.getStringAttribute('fabric_type');
  }

  // feature_ptp - computed: true, optional: true, required: false
  private _featurePtp?: boolean | cdktf.IResolvable; 
  public get featurePtp() {
    return this.getBooleanAttribute('feature_ptp');
  }
  public set featurePtp(value: boolean | cdktf.IResolvable) {
    this._featurePtp = value;
  }
  public resetFeaturePtp() {
    this._featurePtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePtpInput() {
    return this._featurePtp;
  }

  // feature_ptp_internal - computed: true, optional: false, required: false
  public get featurePtpInternal() {
    return this.getBooleanAttribute('feature_ptp_internal');
  }

  // ff - computed: true, optional: true, required: false
  private _ff?: string; 
  public get ff() {
    return this.getStringAttribute('ff');
  }
  public set ff(value: string) {
    this._ff = value;
  }
  public resetFf() {
    this._ff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ffInput() {
    return this._ff;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inband_enable - computed: true, optional: true, required: false
  private _inbandEnable?: boolean | cdktf.IResolvable; 
  public get inbandEnable() {
    return this.getBooleanAttribute('inband_enable');
  }
  public set inbandEnable(value: boolean | cdktf.IResolvable) {
    this._inbandEnable = value;
  }
  public resetInbandEnable() {
    this._inbandEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandEnableInput() {
    return this._inbandEnable;
  }

  // inband_enable_prev - computed: true, optional: false, required: false
  public get inbandEnablePrev() {
    return this.getBooleanAttribute('inband_enable_prev');
  }

  // inband_mgmt - computed: true, optional: true, required: false
  private _inbandMgmt?: boolean | cdktf.IResolvable; 
  public get inbandMgmt() {
    return this.getBooleanAttribute('inband_mgmt');
  }
  public set inbandMgmt(value: boolean | cdktf.IResolvable) {
    this._inbandMgmt = value;
  }
  public resetInbandMgmt() {
    this._inbandMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandMgmtInput() {
    return this._inbandMgmt;
  }

  // inband_mgmt_prev - computed: true, optional: false, required: false
  public get inbandMgmtPrev() {
    return this.getBooleanAttribute('inband_mgmt_prev');
  }

  // intf_stat_load_interval - computed: true, optional: true, required: false
  private _intfStatLoadInterval?: number; 
  public get intfStatLoadInterval() {
    return this.getNumberAttribute('intf_stat_load_interval');
  }
  public set intfStatLoadInterval(value: number) {
    this._intfStatLoadInterval = value;
  }
  public resetIntfStatLoadInterval() {
    this._intfStatLoadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfStatLoadIntervalInput() {
    return this._intfStatLoadInterval;
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // loopback0_ip_range - computed: true, optional: true, required: false
  private _loopback0IpRange?: string; 
  public get loopback0IpRange() {
    return this.getStringAttribute('loopback0_ip_range');
  }
  public set loopback0IpRange(value: string) {
    this._loopback0IpRange = value;
  }
  public resetLoopback0IpRange() {
    this._loopback0IpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopback0IpRangeInput() {
    return this._loopback0IpRange;
  }

  // mgmt_gw - computed: true, optional: true, required: false
  private _mgmtGw?: string; 
  public get mgmtGw() {
    return this.getStringAttribute('mgmt_gw');
  }
  public set mgmtGw(value: string) {
    this._mgmtGw = value;
  }
  public resetMgmtGw() {
    this._mgmtGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtGwInput() {
    return this._mgmtGw;
  }

  // mgmt_gw_internal - computed: true, optional: false, required: false
  public get mgmtGwInternal() {
    return this.getStringAttribute('mgmt_gw_internal');
  }

  // mgmt_prefix - computed: true, optional: true, required: false
  private _mgmtPrefix?: number; 
  public get mgmtPrefix() {
    return this.getNumberAttribute('mgmt_prefix');
  }
  public set mgmtPrefix(value: number) {
    this._mgmtPrefix = value;
  }
  public resetMgmtPrefix() {
    this._mgmtPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtPrefixInput() {
    return this._mgmtPrefix;
  }

  // mgmt_prefix_internal - computed: true, optional: false, required: false
  public get mgmtPrefixInternal() {
    return this.getNumberAttribute('mgmt_prefix_internal');
  }

  // mgmt_v6prefix - computed: true, optional: false, required: false
  public get mgmtV6Prefix() {
    return this.getNumberAttribute('mgmt_v6prefix');
  }

  // mgmt_v6prefix_internal - computed: true, optional: false, required: false
  public get mgmtV6PrefixInternal() {
    return this.getNumberAttribute('mgmt_v6prefix_internal');
  }

  // mpls_handoff - computed: true, optional: true, required: false
  private _mplsHandoff?: boolean | cdktf.IResolvable; 
  public get mplsHandoff() {
    return this.getBooleanAttribute('mpls_handoff');
  }
  public set mplsHandoff(value: boolean | cdktf.IResolvable) {
    this._mplsHandoff = value;
  }
  public resetMplsHandoff() {
    this._mplsHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsHandoffInput() {
    return this._mplsHandoff;
  }

  // mpls_lb_id - computed: true, optional: true, required: false
  private _mplsLbId?: number; 
  public get mplsLbId() {
    return this.getNumberAttribute('mpls_lb_id');
  }
  public set mplsLbId(value: number) {
    this._mplsLbId = value;
  }
  public resetMplsLbId() {
    this._mplsLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsLbIdInput() {
    return this._mplsLbId;
  }

  // mpls_loopback_ip_range - computed: true, optional: true, required: false
  private _mplsLoopbackIpRange?: string; 
  public get mplsLoopbackIpRange() {
    return this.getStringAttribute('mpls_loopback_ip_range');
  }
  public set mplsLoopbackIpRange(value: string) {
    this._mplsLoopbackIpRange = value;
  }
  public resetMplsLoopbackIpRange() {
    this._mplsLoopbackIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsLoopbackIpRangeInput() {
    return this._mplsLoopbackIpRange;
  }

  // netflow_exporter_list - computed: true, optional: true, required: false
  private _netflowExporterList?: string; 
  public get netflowExporterList() {
    return this.getStringAttribute('netflow_exporter_list');
  }
  public set netflowExporterList(value: string) {
    this._netflowExporterList = value;
  }
  public resetNetflowExporterList() {
    this._netflowExporterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowExporterListInput() {
    return this._netflowExporterList;
  }

  // netflow_monitor_list - computed: true, optional: true, required: false
  private _netflowMonitorList?: string; 
  public get netflowMonitorList() {
    return this.getStringAttribute('netflow_monitor_list');
  }
  public set netflowMonitorList(value: string) {
    this._netflowMonitorList = value;
  }
  public resetNetflowMonitorList() {
    this._netflowMonitorList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowMonitorListInput() {
    return this._netflowMonitorList;
  }

  // netflow_record_list - computed: true, optional: true, required: false
  private _netflowRecordList?: string; 
  public get netflowRecordList() {
    return this.getStringAttribute('netflow_record_list');
  }
  public set netflowRecordList(value: string) {
    this._netflowRecordList = value;
  }
  public resetNetflowRecordList() {
    this._netflowRecordList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowRecordListInput() {
    return this._netflowRecordList;
  }

  // netflow_sampler_list - computed: true, optional: true, required: false
  private _netflowSamplerList?: string; 
  public get netflowSamplerList() {
    return this.getStringAttribute('netflow_sampler_list');
  }
  public set netflowSamplerList(value: string) {
    this._netflowSamplerList = value;
  }
  public resetNetflowSamplerList() {
    this._netflowSamplerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplerListInput() {
    return this._netflowSamplerList;
  }

  // nxapi_http_port - computed: true, optional: true, required: false
  private _nxapiHttpPort?: number; 
  public get nxapiHttpPort() {
    return this.getNumberAttribute('nxapi_http_port');
  }
  public set nxapiHttpPort(value: number) {
    this._nxapiHttpPort = value;
  }
  public resetNxapiHttpPort() {
    this._nxapiHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxapiHttpPortInput() {
    return this._nxapiHttpPort;
  }

  // nxapi_https_port - computed: true, optional: true, required: false
  private _nxapiHttpsPort?: number; 
  public get nxapiHttpsPort() {
    return this.getNumberAttribute('nxapi_https_port');
  }
  public set nxapiHttpsPort(value: number) {
    this._nxapiHttpsPort = value;
  }
  public resetNxapiHttpsPort() {
    this._nxapiHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxapiHttpsPortInput() {
    return this._nxapiHttpsPort;
  }

  // nxc_dest_vrf - computed: true, optional: true, required: false
  private _nxcDestVrf?: string; 
  public get nxcDestVrf() {
    return this.getStringAttribute('nxc_dest_vrf');
  }
  public set nxcDestVrf(value: string) {
    this._nxcDestVrf = value;
  }
  public resetNxcDestVrf() {
    this._nxcDestVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxcDestVrfInput() {
    return this._nxcDestVrf;
  }

  // nxc_proxy_port - computed: true, optional: true, required: false
  private _nxcProxyPort?: number; 
  public get nxcProxyPort() {
    return this.getNumberAttribute('nxc_proxy_port');
  }
  public set nxcProxyPort(value: number) {
    this._nxcProxyPort = value;
  }
  public resetNxcProxyPort() {
    this._nxcProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxcProxyPortInput() {
    return this._nxcProxyPort;
  }

  // nxc_proxy_server - computed: true, optional: true, required: false
  private _nxcProxyServer?: string; 
  public get nxcProxyServer() {
    return this.getStringAttribute('nxc_proxy_server');
  }
  public set nxcProxyServer(value: string) {
    this._nxcProxyServer = value;
  }
  public resetNxcProxyServer() {
    this._nxcProxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxcProxyServerInput() {
    return this._nxcProxyServer;
  }

  // nxc_src_intf - computed: true, optional: true, required: false
  private _nxcSrcIntf?: string; 
  public get nxcSrcIntf() {
    return this.getStringAttribute('nxc_src_intf');
  }
  public set nxcSrcIntf(value: string) {
    this._nxcSrcIntf = value;
  }
  public resetNxcSrcIntf() {
    this._nxcSrcIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxcSrcIntfInput() {
    return this._nxcSrcIntf;
  }

  // overwrite_global_nxc - computed: true, optional: true, required: false
  private _overwriteGlobalNxc?: boolean | cdktf.IResolvable; 
  public get overwriteGlobalNxc() {
    return this.getBooleanAttribute('overwrite_global_nxc');
  }
  public set overwriteGlobalNxc(value: boolean | cdktf.IResolvable) {
    this._overwriteGlobalNxc = value;
  }
  public resetOverwriteGlobalNxc() {
    this._overwriteGlobalNxc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteGlobalNxcInput() {
    return this._overwriteGlobalNxc;
  }

  // pm_enable - computed: true, optional: true, required: false
  private _pmEnable?: boolean | cdktf.IResolvable; 
  public get pmEnable() {
    return this.getBooleanAttribute('pm_enable');
  }
  public set pmEnable(value: boolean | cdktf.IResolvable) {
    this._pmEnable = value;
  }
  public resetPmEnable() {
    this._pmEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmEnableInput() {
    return this._pmEnable;
  }

  // pm_enable_prev - computed: true, optional: false, required: false
  public get pmEnablePrev() {
    return this.getBooleanAttribute('pm_enable_prev');
  }

  // power_redundancy_mode - computed: true, optional: true, required: false
  private _powerRedundancyMode?: string; 
  public get powerRedundancyMode() {
    return this.getStringAttribute('power_redundancy_mode');
  }
  public set powerRedundancyMode(value: string) {
    this._powerRedundancyMode = value;
  }
  public resetPowerRedundancyMode() {
    this._powerRedundancyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerRedundancyModeInput() {
    return this._powerRedundancyMode;
  }

  // ptp_domain_id - computed: true, optional: true, required: false
  private _ptpDomainId?: number; 
  public get ptpDomainId() {
    return this.getNumberAttribute('ptp_domain_id');
  }
  public set ptpDomainId(value: number) {
    this._ptpDomainId = value;
  }
  public resetPtpDomainId() {
    this._ptpDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpDomainIdInput() {
    return this._ptpDomainId;
  }

  // ptp_lb_id - computed: true, optional: true, required: false
  private _ptpLbId?: number; 
  public get ptpLbId() {
    return this.getNumberAttribute('ptp_lb_id');
  }
  public set ptpLbId(value: number) {
    this._ptpLbId = value;
  }
  public resetPtpLbId() {
    this._ptpLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpLbIdInput() {
    return this._ptpLbId;
  }

  // scheduled_time - computed: true, optional: true, required: false
  private _scheduledTime?: string; 
  public get scheduledTime() {
    return this.getStringAttribute('scheduled_time');
  }
  public set scheduledTime(value: string) {
    this._scheduledTime = value;
  }
  public resetScheduledTime() {
    this._scheduledTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTimeInput() {
    return this._scheduledTime;
  }

  // snmp_server_host_trap - computed: true, optional: true, required: false
  private _snmpServerHostTrap?: boolean | cdktf.IResolvable; 
  public get snmpServerHostTrap() {
    return this.getBooleanAttribute('snmp_server_host_trap');
  }
  public set snmpServerHostTrap(value: boolean | cdktf.IResolvable) {
    this._snmpServerHostTrap = value;
  }
  public resetSnmpServerHostTrap() {
    this._snmpServerHostTrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpServerHostTrapInput() {
    return this._snmpServerHostTrap;
  }

  // subinterface_range - computed: true, optional: true, required: false
  private _subinterfaceRange?: string; 
  public get subinterfaceRange() {
    return this.getStringAttribute('subinterface_range');
  }
  public set subinterfaceRange(value: string) {
    this._subinterfaceRange = value;
  }
  public resetSubinterfaceRange() {
    this._subinterfaceRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subinterfaceRangeInput() {
    return this._subinterfaceRange;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaa_remote_ip_enabled: cdktf.booleanToTerraform(this._aaaRemoteIpEnabled),
      aaa_server_conf: cdktf.stringToTerraform(this._aaaServerConf),
      allow_nxc: cdktf.booleanToTerraform(this._allowNxc),
      bootstrap_conf: cdktf.stringToTerraform(this._bootstrapConf),
      bootstrap_enable: cdktf.booleanToTerraform(this._bootstrapEnable),
      bootstrap_multisubnet: cdktf.stringToTerraform(this._bootstrapMultisubnet),
      cdp_enable: cdktf.booleanToTerraform(this._cdpEnable),
      dci_subnet_range: cdktf.stringToTerraform(this._dciSubnetRange),
      dci_subnet_target_mask: cdktf.numberToTerraform(this._dciSubnetTargetMask),
      deploy: cdktf.booleanToTerraform(this._deploy),
      deployment_freeze: cdktf.booleanToTerraform(this._deploymentFreeze),
      dhcp_enable: cdktf.booleanToTerraform(this._dhcpEnable),
      dhcp_end: cdktf.stringToTerraform(this._dhcpEnd),
      dhcp_ipv6_enable: cdktf.stringToTerraform(this._dhcpIpv6Enable),
      dhcp_start: cdktf.stringToTerraform(this._dhcpStart),
      enable_aaa: cdktf.booleanToTerraform(this._enableAaa),
      enable_netflow: cdktf.booleanToTerraform(this._enableNetflow),
      enable_nxapi: cdktf.booleanToTerraform(this._enableNxapi),
      enable_nxapi_http: cdktf.booleanToTerraform(this._enableNxapiHttp),
      enable_real_time_backup: cdktf.booleanToTerraform(this._enableRealTimeBackup),
      enable_rt_intf_stats: cdktf.booleanToTerraform(this._enableRtIntfStats),
      enable_scheduled_backup: cdktf.booleanToTerraform(this._enableScheduledBackup),
      ext_fabric_type: cdktf.stringToTerraform(this._extFabricType),
      fabric_freeform: cdktf.stringToTerraform(this._fabricFreeform),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      feature_ptp: cdktf.booleanToTerraform(this._featurePtp),
      ff: cdktf.stringToTerraform(this._ff),
      inband_enable: cdktf.booleanToTerraform(this._inbandEnable),
      inband_mgmt: cdktf.booleanToTerraform(this._inbandMgmt),
      intf_stat_load_interval: cdktf.numberToTerraform(this._intfStatLoadInterval),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      loopback0_ip_range: cdktf.stringToTerraform(this._loopback0IpRange),
      mgmt_gw: cdktf.stringToTerraform(this._mgmtGw),
      mgmt_prefix: cdktf.numberToTerraform(this._mgmtPrefix),
      mpls_handoff: cdktf.booleanToTerraform(this._mplsHandoff),
      mpls_lb_id: cdktf.numberToTerraform(this._mplsLbId),
      mpls_loopback_ip_range: cdktf.stringToTerraform(this._mplsLoopbackIpRange),
      netflow_exporter_list: cdktf.stringToTerraform(this._netflowExporterList),
      netflow_monitor_list: cdktf.stringToTerraform(this._netflowMonitorList),
      netflow_record_list: cdktf.stringToTerraform(this._netflowRecordList),
      netflow_sampler_list: cdktf.stringToTerraform(this._netflowSamplerList),
      nxapi_http_port: cdktf.numberToTerraform(this._nxapiHttpPort),
      nxapi_https_port: cdktf.numberToTerraform(this._nxapiHttpsPort),
      nxc_dest_vrf: cdktf.stringToTerraform(this._nxcDestVrf),
      nxc_proxy_port: cdktf.numberToTerraform(this._nxcProxyPort),
      nxc_proxy_server: cdktf.stringToTerraform(this._nxcProxyServer),
      nxc_src_intf: cdktf.stringToTerraform(this._nxcSrcIntf),
      overwrite_global_nxc: cdktf.booleanToTerraform(this._overwriteGlobalNxc),
      pm_enable: cdktf.booleanToTerraform(this._pmEnable),
      power_redundancy_mode: cdktf.stringToTerraform(this._powerRedundancyMode),
      ptp_domain_id: cdktf.numberToTerraform(this._ptpDomainId),
      ptp_lb_id: cdktf.numberToTerraform(this._ptpLbId),
      scheduled_time: cdktf.stringToTerraform(this._scheduledTime),
      snmp_server_host_trap: cdktf.booleanToTerraform(this._snmpServerHostTrap),
      subinterface_range: cdktf.stringToTerraform(this._subinterfaceRange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaa_remote_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._aaaRemoteIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aaa_server_conf: {
        value: cdktf.stringToHclTerraform(this._aaaServerConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_nxc: {
        value: cdktf.booleanToHclTerraform(this._allowNxc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bootstrap_conf: {
        value: cdktf.stringToHclTerraform(this._bootstrapConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_enable: {
        value: cdktf.booleanToHclTerraform(this._bootstrapEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bootstrap_multisubnet: {
        value: cdktf.stringToHclTerraform(this._bootstrapMultisubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdp_enable: {
        value: cdktf.booleanToHclTerraform(this._cdpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dci_subnet_range: {
        value: cdktf.stringToHclTerraform(this._dciSubnetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_subnet_target_mask: {
        value: cdktf.numberToHclTerraform(this._dciSubnetTargetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_freeze: {
        value: cdktf.booleanToHclTerraform(this._deploymentFreeze),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_enable: {
        value: cdktf.booleanToHclTerraform(this._dhcpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_end: {
        value: cdktf.stringToHclTerraform(this._dhcpEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ipv6_enable: {
        value: cdktf.stringToHclTerraform(this._dhcpIpv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_start: {
        value: cdktf.stringToHclTerraform(this._dhcpStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_aaa: {
        value: cdktf.booleanToHclTerraform(this._enableAaa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_netflow: {
        value: cdktf.booleanToHclTerraform(this._enableNetflow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nxapi: {
        value: cdktf.booleanToHclTerraform(this._enableNxapi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nxapi_http: {
        value: cdktf.booleanToHclTerraform(this._enableNxapiHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_real_time_backup: {
        value: cdktf.booleanToHclTerraform(this._enableRealTimeBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rt_intf_stats: {
        value: cdktf.booleanToHclTerraform(this._enableRtIntfStats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_scheduled_backup: {
        value: cdktf.booleanToHclTerraform(this._enableScheduledBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ext_fabric_type: {
        value: cdktf.stringToHclTerraform(this._extFabricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_freeform: {
        value: cdktf.stringToHclTerraform(this._fabricFreeform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_ptp: {
        value: cdktf.booleanToHclTerraform(this._featurePtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ff: {
        value: cdktf.stringToHclTerraform(this._ff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inband_enable: {
        value: cdktf.booleanToHclTerraform(this._inbandEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inband_mgmt: {
        value: cdktf.booleanToHclTerraform(this._inbandMgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      intf_stat_load_interval: {
        value: cdktf.numberToHclTerraform(this._intfStatLoadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_read_only: {
        value: cdktf.booleanToHclTerraform(this._isReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      loopback0_ip_range: {
        value: cdktf.stringToHclTerraform(this._loopback0IpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_gw: {
        value: cdktf.stringToHclTerraform(this._mgmtGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_prefix: {
        value: cdktf.numberToHclTerraform(this._mgmtPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpls_handoff: {
        value: cdktf.booleanToHclTerraform(this._mplsHandoff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mpls_lb_id: {
        value: cdktf.numberToHclTerraform(this._mplsLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpls_loopback_ip_range: {
        value: cdktf.stringToHclTerraform(this._mplsLoopbackIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_exporter_list: {
        value: cdktf.stringToHclTerraform(this._netflowExporterList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_monitor_list: {
        value: cdktf.stringToHclTerraform(this._netflowMonitorList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_record_list: {
        value: cdktf.stringToHclTerraform(this._netflowRecordList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_sampler_list: {
        value: cdktf.stringToHclTerraform(this._netflowSamplerList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxapi_http_port: {
        value: cdktf.numberToHclTerraform(this._nxapiHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxapi_https_port: {
        value: cdktf.numberToHclTerraform(this._nxapiHttpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxc_dest_vrf: {
        value: cdktf.stringToHclTerraform(this._nxcDestVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxc_proxy_port: {
        value: cdktf.numberToHclTerraform(this._nxcProxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxc_proxy_server: {
        value: cdktf.stringToHclTerraform(this._nxcProxyServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxc_src_intf: {
        value: cdktf.stringToHclTerraform(this._nxcSrcIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_global_nxc: {
        value: cdktf.booleanToHclTerraform(this._overwriteGlobalNxc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pm_enable: {
        value: cdktf.booleanToHclTerraform(this._pmEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      power_redundancy_mode: {
        value: cdktf.stringToHclTerraform(this._powerRedundancyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptp_domain_id: {
        value: cdktf.numberToHclTerraform(this._ptpDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ptp_lb_id: {
        value: cdktf.numberToHclTerraform(this._ptpLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduled_time: {
        value: cdktf.stringToHclTerraform(this._scheduledTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_server_host_trap: {
        value: cdktf.booleanToHclTerraform(this._snmpServerHostTrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subinterface_range: {
        value: cdktf.stringToHclTerraform(this._subinterfaceRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
