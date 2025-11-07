// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricVxlanMsdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Shared MAC address for all leafs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#anycast_gw_mac FabricVxlanMsd#anycast_gw_mac}
  */
  readonly anycastGwMac?: string;
  /**
  * 1-4294967295 | 1-65535[.0-65535], e.g. 65000, 65001
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#bgp_rp_asn FabricVxlanMsd#bgp_rp_asn}
  */
  readonly bgpRpAsn?: string;
  /**
  * Routing tag associated with IP address of loopback and DCI interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#bgw_routing_tag FabricVxlanMsd#bgw_routing_tag}
  */
  readonly bgwRoutingTag?: number;
  /**
  * Manual, Auto Overlay EVPN Peering to Route Servers, Auto Overlay EVPN Direct Peering to Border Gateways
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#border_gwy_connections FabricVxlanMsd#border_gwy_connections}
  */
  readonly borderGwyConnections?: string;
  /**
  * CloudSec Cryptographic Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#cloudsec_algorithm FabricVxlanMsd#cloudsec_algorithm}
  */
  readonly cloudsecAlgorithm?: string;
  /**
  * Auto Config CloudSec on Border Gateways
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#cloudsec_autoconfig FabricVxlanMsd#cloudsec_autoconfig}
  */
  readonly cloudsecAutoconfig?: boolean | cdktf.IResolvable;
  /**
  * If set to 'strict', data across site must be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#cloudsec_enforcement FabricVxlanMsd#cloudsec_enforcement}
  */
  readonly cloudsecEnforcement?: string;
  /**
  * Cisco Type 7 Encrypted Octet String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#cloudsec_key_string FabricVxlanMsd#cloudsec_key_string}
  */
  readonly cloudsecKeyString?: string;
  /**
  * CloudSec Operational Status periodic report timer in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#cloudsec_report_timer FabricVxlanMsd#cloudsec_report_timer}
  */
  readonly cloudsecReportTimer?: number;
  /**
  * Address range to assign P2P DCI Links
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#dci_subnet_range FabricVxlanMsd#dci_subnet_range}
  */
  readonly dciSubnetRange?: string;
  /**
  * Target Mask for Subnet Range (Min:8, Max:31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#dci_subnet_target_mask FabricVxlanMsd#dci_subnet_target_mask}
  */
  readonly dciSubnetTargetMask?: number;
  /**
  * Default Overlay Network Template For Leafs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#default_network FabricVxlanMsd#default_network}
  */
  readonly defaultNetwork?: string;
  /**
  * Default PVLAN Secondary Network Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#default_pvlan_sec_network FabricVxlanMsd#default_pvlan_sec_network}
  */
  readonly defaultPvlanSecNetwork?: string;
  /**
  * Default Overlay VRF Template For Leafs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#default_vrf FabricVxlanMsd#default_vrf}
  */
  readonly defaultVrf?: string;
  /**
  * Multi-Site underlay and overlay control plane convergence time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#delay_restore FabricVxlanMsd#delay_restore}
  */
  readonly delayRestore?: number;
  /**
  * This flag does configuration save and deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#deploy FabricVxlanMsd#deploy}
  */
  readonly deploy: boolean | cdktf.IResolvable;
  /**
  * BGP BFD on Multi-Site Underlay IFCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#enable_bgp_bfd FabricVxlanMsd#enable_bgp_bfd}
  */
  readonly enableBgpBfd?: boolean | cdktf.IResolvable;
  /**
  * BGP log neighbor change on Multi-Site Underlay IFCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#enable_bgp_log_neighbor_change FabricVxlanMsd#enable_bgp_log_neighbor_change}
  */
  readonly enableBgpLogNeighborChange?: boolean | cdktf.IResolvable;
  /**
  * BGP Send-community on Multi-Site Underlay IFCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#enable_bgp_send_comm FabricVxlanMsd#enable_bgp_send_comm}
  */
  readonly enableBgpSendComm?: boolean | cdktf.IResolvable;
  /**
  * Enable PVLAN on MSD and its child fabrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#enable_pvlan FabricVxlanMsd#enable_pvlan}
  */
  readonly enablePvlan?: boolean | cdktf.IResolvable;
  /**
  * For auto-created Multi-Site overlay IFCs in Route Servers. Applicable only when Multi-Site Overlay IFC Deployment Method is Centralized_To_Route_Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#enable_rs_redist_direct FabricVxlanMsd#enable_rs_redist_direct}
  */
  readonly enableRsRedistDirect?: boolean | cdktf.IResolvable;
  /**
  * Backup at the specified time. Note: Fabric Backup/Restore functionality is being deprecated for MSD fabrics. Recommendation is to use NDFC Backup & Restore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#enable_scheduled_backup FabricVxlanMsd#enable_scheduled_backup}
  */
  readonly enableScheduledBackup?: boolean | cdktf.IResolvable;
  /**
  * Enable Security Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#enable_sgt FabricVxlanMsd#enable_sgt}
  */
  readonly enableSgt?: string;
  /**
  * Enable IPv4 and/or IPv6 Tenant Routed Multicast across sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#enable_trm_trmv6 FabricVxlanMsd#enable_trm_trmv6}
  */
  readonly enableTrmTrmv6?: boolean | cdktf.IResolvable;
  /**
  * External Fabric Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#ext_fabric_type FabricVxlanMsd#ext_fabric_type}
  */
  readonly extFabricType?: string;
  /**
  * Fabric name to be created, updated or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#fabric_name FabricVxlanMsd#fabric_name}
  */
  readonly fabricName: string;
  /**
  * Template Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#ff FabricVxlanMsd#ff}
  */
  readonly ff?: string;
  /**
  * Overlay Network Identifier Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#l2_segment_id_range FabricVxlanMsd#l2_segment_id_range}
  */
  readonly l2SegmentIdRange?: string;
  /**
  * Overlay VRF Identifier Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#l3_partition_id_range FabricVxlanMsd#l3_partition_id_range}
  */
  readonly l3PartitionIdRange?: string;
  /**
  * Multi-Site VTEP VIP Loopback IP Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#loopback100_ip_range FabricVxlanMsd#loopback100_ip_range}
  */
  readonly loopback100IpRange?: string;
  /**
  * Multi-Site VTEP VIP Loopback IPv6 Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#loopback100_ipv6_range FabricVxlanMsd#loopback100_ipv6_range}
  */
  readonly loopback100Ipv6Range?: string;
  /**
  * BGP Key Encryption Type: 3 - 3DES, 7 - Cisco
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#ms_ifc_bgp_auth_key_type FabricVxlanMsd#ms_ifc_bgp_auth_key_type}
  */
  readonly msIfcBgpAuthKeyType?: number;
  /**
  * Encrypted eBGP Password Hex String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#ms_ifc_bgp_password FabricVxlanMsd#ms_ifc_bgp_password}
  */
  readonly msIfcBgpPassword?: string;
  /**
  * Enable Multi-Site eBGP Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#ms_ifc_bgp_password_enable FabricVxlanMsd#ms_ifc_bgp_password_enable}
  */
  readonly msIfcBgpPasswordEnable?: boolean | cdktf.IResolvable;
  /**
  * Multi-Site VTEP VIP Loopback ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#ms_loopback_id FabricVxlanMsd#ms_loopback_id}
  */
  readonly msLoopbackId?: number;
  /**
  * Multi-Site Underlay IFC Auto Deployment Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#ms_underlay_autoconfig FabricVxlanMsd#ms_underlay_autoconfig}
  */
  readonly msUnderlayAutoconfig?: boolean | cdktf.IResolvable;
  /**
  * Default Overlay Network Template For Borders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#network_extension_template FabricVxlanMsd#network_extension_template}
  */
  readonly networkExtensionTemplate?: string;
  /**
  * Multi-Site Route-Server peer list (typically loopback IP address on Route-Server for Multi-Site EVPN peering with BGWs), e.g. 128.89.0.1, 128.89.0.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#rp_server_ip FabricVxlanMsd#rp_server_ip}
  */
  readonly rpServerIp?: string;
  /**
  * Routing tag associated with Route Server IP for redistribute direct. This is the IP used in eBGP EVPN peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#rs_routing_tag FabricVxlanMsd#rs_routing_tag}
  */
  readonly rsRoutingTag?: number;
  /**
  * Time (UTC) in 24hr format. (00:00 to 23:59)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#scheduled_time FabricVxlanMsd#scheduled_time}
  */
  readonly scheduledTime?: string;
  /**
  * Security Group Tag (SGT) ID Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#sgt_id_range FabricVxlanMsd#sgt_id_range}
  */
  readonly sgtIdRange?: string;
  /**
  * Prefix to be used when a new Security Group is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#sgt_name_prefix FabricVxlanMsd#sgt_name_prefix}
  */
  readonly sgtNamePrefix?: string;
  /**
  * Generate security groups configuration for non-enforced VRFs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#sgt_preprovision FabricVxlanMsd#sgt_preprovision}
  */
  readonly sgtPreprovision?: boolean | cdktf.IResolvable;
  /**
  * Enables Overlay VLANs on uplink between ToRs and Leafs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#tor_auto_deploy FabricVxlanMsd#tor_auto_deploy}
  */
  readonly torAutoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Address range to assign P2P DCI Links
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#v6_dci_subnet_range FabricVxlanMsd#v6_dci_subnet_range}
  */
  readonly v6DciSubnetRange?: string;
  /**
  * Target IPv6 Mask for Subnet Range (Min:120, Max:127)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#v6_dci_subnet_target_mask FabricVxlanMsd#v6_dci_subnet_target_mask}
  */
  readonly v6DciSubnetTargetMask?: number;
  /**
  * Default Overlay VRF Template For Borders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#vrf_extension_template FabricVxlanMsd#vrf_extension_template}
  */
  readonly vrfExtensionTemplate?: string;
  /**
  * If not enabled, IPv4 underlay is used in child VXLAN fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#vxlan_underlay_is_v6 FabricVxlanMsd#vxlan_underlay_is_v6}
  */
  readonly vxlanUnderlayIsV6?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd ndfc_fabric_vxlan_msd}
*/
export class FabricVxlanMsd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_fabric_vxlan_msd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricVxlanMsd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricVxlanMsd to import
  * @param importFromId The id of the existing FabricVxlanMsd that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricVxlanMsd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_fabric_vxlan_msd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_msd ndfc_fabric_vxlan_msd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricVxlanMsdConfig
  */
  public constructor(scope: Construct, id: string, config: FabricVxlanMsdConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_fabric_vxlan_msd',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anycastGwMac = config.anycastGwMac;
    this._bgpRpAsn = config.bgpRpAsn;
    this._bgwRoutingTag = config.bgwRoutingTag;
    this._borderGwyConnections = config.borderGwyConnections;
    this._cloudsecAlgorithm = config.cloudsecAlgorithm;
    this._cloudsecAutoconfig = config.cloudsecAutoconfig;
    this._cloudsecEnforcement = config.cloudsecEnforcement;
    this._cloudsecKeyString = config.cloudsecKeyString;
    this._cloudsecReportTimer = config.cloudsecReportTimer;
    this._dciSubnetRange = config.dciSubnetRange;
    this._dciSubnetTargetMask = config.dciSubnetTargetMask;
    this._defaultNetwork = config.defaultNetwork;
    this._defaultPvlanSecNetwork = config.defaultPvlanSecNetwork;
    this._defaultVrf = config.defaultVrf;
    this._delayRestore = config.delayRestore;
    this._deploy = config.deploy;
    this._enableBgpBfd = config.enableBgpBfd;
    this._enableBgpLogNeighborChange = config.enableBgpLogNeighborChange;
    this._enableBgpSendComm = config.enableBgpSendComm;
    this._enablePvlan = config.enablePvlan;
    this._enableRsRedistDirect = config.enableRsRedistDirect;
    this._enableScheduledBackup = config.enableScheduledBackup;
    this._enableSgt = config.enableSgt;
    this._enableTrmTrmv6 = config.enableTrmTrmv6;
    this._extFabricType = config.extFabricType;
    this._fabricName = config.fabricName;
    this._ff = config.ff;
    this._l2SegmentIdRange = config.l2SegmentIdRange;
    this._l3PartitionIdRange = config.l3PartitionIdRange;
    this._loopback100IpRange = config.loopback100IpRange;
    this._loopback100Ipv6Range = config.loopback100Ipv6Range;
    this._msIfcBgpAuthKeyType = config.msIfcBgpAuthKeyType;
    this._msIfcBgpPassword = config.msIfcBgpPassword;
    this._msIfcBgpPasswordEnable = config.msIfcBgpPasswordEnable;
    this._msLoopbackId = config.msLoopbackId;
    this._msUnderlayAutoconfig = config.msUnderlayAutoconfig;
    this._networkExtensionTemplate = config.networkExtensionTemplate;
    this._rpServerIp = config.rpServerIp;
    this._rsRoutingTag = config.rsRoutingTag;
    this._scheduledTime = config.scheduledTime;
    this._sgtIdRange = config.sgtIdRange;
    this._sgtNamePrefix = config.sgtNamePrefix;
    this._sgtPreprovision = config.sgtPreprovision;
    this._torAutoDeploy = config.torAutoDeploy;
    this._v6DciSubnetRange = config.v6DciSubnetRange;
    this._v6DciSubnetTargetMask = config.v6DciSubnetTargetMask;
    this._vrfExtensionTemplate = config.vrfExtensionTemplate;
    this._vxlanUnderlayIsV6 = config.vxlanUnderlayIsV6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycast_gw_mac - computed: true, optional: true, required: false
  private _anycastGwMac?: string; 
  public get anycastGwMac() {
    return this.getStringAttribute('anycast_gw_mac');
  }
  public set anycastGwMac(value: string) {
    this._anycastGwMac = value;
  }
  public resetAnycastGwMac() {
    this._anycastGwMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastGwMacInput() {
    return this._anycastGwMac;
  }

  // bgp_rp_asn - computed: true, optional: true, required: false
  private _bgpRpAsn?: string; 
  public get bgpRpAsn() {
    return this.getStringAttribute('bgp_rp_asn');
  }
  public set bgpRpAsn(value: string) {
    this._bgpRpAsn = value;
  }
  public resetBgpRpAsn() {
    this._bgpRpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRpAsnInput() {
    return this._bgpRpAsn;
  }

  // bgw_routing_tag - computed: true, optional: true, required: false
  private _bgwRoutingTag?: number; 
  public get bgwRoutingTag() {
    return this.getNumberAttribute('bgw_routing_tag');
  }
  public set bgwRoutingTag(value: number) {
    this._bgwRoutingTag = value;
  }
  public resetBgwRoutingTag() {
    this._bgwRoutingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwRoutingTagInput() {
    return this._bgwRoutingTag;
  }

  // bgw_routing_tag_prev - computed: true, optional: false, required: false
  public get bgwRoutingTagPrev() {
    return this.getStringAttribute('bgw_routing_tag_prev');
  }

  // border_gwy_connections - computed: true, optional: true, required: false
  private _borderGwyConnections?: string; 
  public get borderGwyConnections() {
    return this.getStringAttribute('border_gwy_connections');
  }
  public set borderGwyConnections(value: string) {
    this._borderGwyConnections = value;
  }
  public resetBorderGwyConnections() {
    this._borderGwyConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderGwyConnectionsInput() {
    return this._borderGwyConnections;
  }

  // cloudsec_algorithm - computed: true, optional: true, required: false
  private _cloudsecAlgorithm?: string; 
  public get cloudsecAlgorithm() {
    return this.getStringAttribute('cloudsec_algorithm');
  }
  public set cloudsecAlgorithm(value: string) {
    this._cloudsecAlgorithm = value;
  }
  public resetCloudsecAlgorithm() {
    this._cloudsecAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudsecAlgorithmInput() {
    return this._cloudsecAlgorithm;
  }

  // cloudsec_autoconfig - computed: true, optional: true, required: false
  private _cloudsecAutoconfig?: boolean | cdktf.IResolvable; 
  public get cloudsecAutoconfig() {
    return this.getBooleanAttribute('cloudsec_autoconfig');
  }
  public set cloudsecAutoconfig(value: boolean | cdktf.IResolvable) {
    this._cloudsecAutoconfig = value;
  }
  public resetCloudsecAutoconfig() {
    this._cloudsecAutoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudsecAutoconfigInput() {
    return this._cloudsecAutoconfig;
  }

  // cloudsec_enforcement - computed: true, optional: true, required: false
  private _cloudsecEnforcement?: string; 
  public get cloudsecEnforcement() {
    return this.getStringAttribute('cloudsec_enforcement');
  }
  public set cloudsecEnforcement(value: string) {
    this._cloudsecEnforcement = value;
  }
  public resetCloudsecEnforcement() {
    this._cloudsecEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudsecEnforcementInput() {
    return this._cloudsecEnforcement;
  }

  // cloudsec_key_string - computed: true, optional: true, required: false
  private _cloudsecKeyString?: string; 
  public get cloudsecKeyString() {
    return this.getStringAttribute('cloudsec_key_string');
  }
  public set cloudsecKeyString(value: string) {
    this._cloudsecKeyString = value;
  }
  public resetCloudsecKeyString() {
    this._cloudsecKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudsecKeyStringInput() {
    return this._cloudsecKeyString;
  }

  // cloudsec_report_timer - computed: true, optional: true, required: false
  private _cloudsecReportTimer?: number; 
  public get cloudsecReportTimer() {
    return this.getNumberAttribute('cloudsec_report_timer');
  }
  public set cloudsecReportTimer(value: number) {
    this._cloudsecReportTimer = value;
  }
  public resetCloudsecReportTimer() {
    this._cloudsecReportTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudsecReportTimerInput() {
    return this._cloudsecReportTimer;
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

  // dcnm_id - computed: true, optional: false, required: false
  public get dcnmId() {
    return this.getStringAttribute('dcnm_id');
  }

  // default_network - computed: true, optional: true, required: false
  private _defaultNetwork?: string; 
  public get defaultNetwork() {
    return this.getStringAttribute('default_network');
  }
  public set defaultNetwork(value: string) {
    this._defaultNetwork = value;
  }
  public resetDefaultNetwork() {
    this._defaultNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetworkInput() {
    return this._defaultNetwork;
  }

  // default_pvlan_sec_network - computed: true, optional: true, required: false
  private _defaultPvlanSecNetwork?: string; 
  public get defaultPvlanSecNetwork() {
    return this.getStringAttribute('default_pvlan_sec_network');
  }
  public set defaultPvlanSecNetwork(value: string) {
    this._defaultPvlanSecNetwork = value;
  }
  public resetDefaultPvlanSecNetwork() {
    this._defaultPvlanSecNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPvlanSecNetworkInput() {
    return this._defaultPvlanSecNetwork;
  }

  // default_vrf - computed: true, optional: true, required: false
  private _defaultVrf?: string; 
  public get defaultVrf() {
    return this.getStringAttribute('default_vrf');
  }
  public set defaultVrf(value: string) {
    this._defaultVrf = value;
  }
  public resetDefaultVrf() {
    this._defaultVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVrfInput() {
    return this._defaultVrf;
  }

  // delay_restore - computed: true, optional: true, required: false
  private _delayRestore?: number; 
  public get delayRestore() {
    return this.getNumberAttribute('delay_restore');
  }
  public set delayRestore(value: number) {
    this._delayRestore = value;
  }
  public resetDelayRestore() {
    this._delayRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayRestoreInput() {
    return this._delayRestore;
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

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // enable_bgp_bfd - computed: true, optional: true, required: false
  private _enableBgpBfd?: boolean | cdktf.IResolvable; 
  public get enableBgpBfd() {
    return this.getBooleanAttribute('enable_bgp_bfd');
  }
  public set enableBgpBfd(value: boolean | cdktf.IResolvable) {
    this._enableBgpBfd = value;
  }
  public resetEnableBgpBfd() {
    this._enableBgpBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpBfdInput() {
    return this._enableBgpBfd;
  }

  // enable_bgp_log_neighbor_change - computed: true, optional: true, required: false
  private _enableBgpLogNeighborChange?: boolean | cdktf.IResolvable; 
  public get enableBgpLogNeighborChange() {
    return this.getBooleanAttribute('enable_bgp_log_neighbor_change');
  }
  public set enableBgpLogNeighborChange(value: boolean | cdktf.IResolvable) {
    this._enableBgpLogNeighborChange = value;
  }
  public resetEnableBgpLogNeighborChange() {
    this._enableBgpLogNeighborChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpLogNeighborChangeInput() {
    return this._enableBgpLogNeighborChange;
  }

  // enable_bgp_send_comm - computed: true, optional: true, required: false
  private _enableBgpSendComm?: boolean | cdktf.IResolvable; 
  public get enableBgpSendComm() {
    return this.getBooleanAttribute('enable_bgp_send_comm');
  }
  public set enableBgpSendComm(value: boolean | cdktf.IResolvable) {
    this._enableBgpSendComm = value;
  }
  public resetEnableBgpSendComm() {
    this._enableBgpSendComm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpSendCommInput() {
    return this._enableBgpSendComm;
  }

  // enable_pvlan - computed: true, optional: true, required: false
  private _enablePvlan?: boolean | cdktf.IResolvable; 
  public get enablePvlan() {
    return this.getBooleanAttribute('enable_pvlan');
  }
  public set enablePvlan(value: boolean | cdktf.IResolvable) {
    this._enablePvlan = value;
  }
  public resetEnablePvlan() {
    this._enablePvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePvlanInput() {
    return this._enablePvlan;
  }

  // enable_pvlan_prev - computed: true, optional: false, required: false
  public get enablePvlanPrev() {
    return this.getBooleanAttribute('enable_pvlan_prev');
  }

  // enable_rs_redist_direct - computed: true, optional: true, required: false
  private _enableRsRedistDirect?: boolean | cdktf.IResolvable; 
  public get enableRsRedistDirect() {
    return this.getBooleanAttribute('enable_rs_redist_direct');
  }
  public set enableRsRedistDirect(value: boolean | cdktf.IResolvable) {
    this._enableRsRedistDirect = value;
  }
  public resetEnableRsRedistDirect() {
    this._enableRsRedistDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRsRedistDirectInput() {
    return this._enableRsRedistDirect;
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

  // enable_sgt - computed: true, optional: true, required: false
  private _enableSgt?: string; 
  public get enableSgt() {
    return this.getStringAttribute('enable_sgt');
  }
  public set enableSgt(value: string) {
    this._enableSgt = value;
  }
  public resetEnableSgt() {
    this._enableSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSgtInput() {
    return this._enableSgt;
  }

  // enable_sgt_prev - computed: true, optional: false, required: false
  public get enableSgtPrev() {
    return this.getStringAttribute('enable_sgt_prev');
  }

  // enable_trm_trmv6 - computed: true, optional: true, required: false
  private _enableTrmTrmv6?: boolean | cdktf.IResolvable; 
  public get enableTrmTrmv6() {
    return this.getBooleanAttribute('enable_trm_trmv6');
  }
  public set enableTrmTrmv6(value: boolean | cdktf.IResolvable) {
    this._enableTrmTrmv6 = value;
  }
  public resetEnableTrmTrmv6() {
    this._enableTrmTrmv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrmTrmv6Input() {
    return this._enableTrmTrmv6;
  }

  // enable_trm_trmv6_prev - computed: true, optional: false, required: false
  public get enableTrmTrmv6Prev() {
    return this.getBooleanAttribute('enable_trm_trmv6_prev');
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

  // fabric_type - computed: true, optional: false, required: false
  public get fabricType() {
    return this.getStringAttribute('fabric_type');
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

  // l2_segment_id_range - computed: true, optional: true, required: false
  private _l2SegmentIdRange?: string; 
  public get l2SegmentIdRange() {
    return this.getStringAttribute('l2_segment_id_range');
  }
  public set l2SegmentIdRange(value: string) {
    this._l2SegmentIdRange = value;
  }
  public resetL2SegmentIdRange() {
    this._l2SegmentIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2SegmentIdRangeInput() {
    return this._l2SegmentIdRange;
  }

  // l3_partition_id_range - computed: true, optional: true, required: false
  private _l3PartitionIdRange?: string; 
  public get l3PartitionIdRange() {
    return this.getStringAttribute('l3_partition_id_range');
  }
  public set l3PartitionIdRange(value: string) {
    this._l3PartitionIdRange = value;
  }
  public resetL3PartitionIdRange() {
    this._l3PartitionIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PartitionIdRangeInput() {
    return this._l3PartitionIdRange;
  }

  // loopback100_ip_range - computed: true, optional: true, required: false
  private _loopback100IpRange?: string; 
  public get loopback100IpRange() {
    return this.getStringAttribute('loopback100_ip_range');
  }
  public set loopback100IpRange(value: string) {
    this._loopback100IpRange = value;
  }
  public resetLoopback100IpRange() {
    this._loopback100IpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopback100IpRangeInput() {
    return this._loopback100IpRange;
  }

  // loopback100_ipv6_range - computed: true, optional: true, required: false
  private _loopback100Ipv6Range?: string; 
  public get loopback100Ipv6Range() {
    return this.getStringAttribute('loopback100_ipv6_range');
  }
  public set loopback100Ipv6Range(value: string) {
    this._loopback100Ipv6Range = value;
  }
  public resetLoopback100Ipv6Range() {
    this._loopback100Ipv6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopback100Ipv6RangeInput() {
    return this._loopback100Ipv6Range;
  }

  // ms_ifc_bgp_auth_key_type - computed: true, optional: true, required: false
  private _msIfcBgpAuthKeyType?: number; 
  public get msIfcBgpAuthKeyType() {
    return this.getNumberAttribute('ms_ifc_bgp_auth_key_type');
  }
  public set msIfcBgpAuthKeyType(value: number) {
    this._msIfcBgpAuthKeyType = value;
  }
  public resetMsIfcBgpAuthKeyType() {
    this._msIfcBgpAuthKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msIfcBgpAuthKeyTypeInput() {
    return this._msIfcBgpAuthKeyType;
  }

  // ms_ifc_bgp_auth_key_type_prev - computed: true, optional: false, required: false
  public get msIfcBgpAuthKeyTypePrev() {
    return this.getNumberAttribute('ms_ifc_bgp_auth_key_type_prev');
  }

  // ms_ifc_bgp_password - computed: true, optional: true, required: false
  private _msIfcBgpPassword?: string; 
  public get msIfcBgpPassword() {
    return this.getStringAttribute('ms_ifc_bgp_password');
  }
  public set msIfcBgpPassword(value: string) {
    this._msIfcBgpPassword = value;
  }
  public resetMsIfcBgpPassword() {
    this._msIfcBgpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msIfcBgpPasswordInput() {
    return this._msIfcBgpPassword;
  }

  // ms_ifc_bgp_password_enable - computed: true, optional: true, required: false
  private _msIfcBgpPasswordEnable?: boolean | cdktf.IResolvable; 
  public get msIfcBgpPasswordEnable() {
    return this.getBooleanAttribute('ms_ifc_bgp_password_enable');
  }
  public set msIfcBgpPasswordEnable(value: boolean | cdktf.IResolvable) {
    this._msIfcBgpPasswordEnable = value;
  }
  public resetMsIfcBgpPasswordEnable() {
    this._msIfcBgpPasswordEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msIfcBgpPasswordEnableInput() {
    return this._msIfcBgpPasswordEnable;
  }

  // ms_ifc_bgp_password_enable_prev - computed: true, optional: false, required: false
  public get msIfcBgpPasswordEnablePrev() {
    return this.getBooleanAttribute('ms_ifc_bgp_password_enable_prev');
  }

  // ms_ifc_bgp_password_prev - computed: true, optional: false, required: false
  public get msIfcBgpPasswordPrev() {
    return this.getStringAttribute('ms_ifc_bgp_password_prev');
  }

  // ms_loopback_id - computed: true, optional: true, required: false
  private _msLoopbackId?: number; 
  public get msLoopbackId() {
    return this.getNumberAttribute('ms_loopback_id');
  }
  public set msLoopbackId(value: number) {
    this._msLoopbackId = value;
  }
  public resetMsLoopbackId() {
    this._msLoopbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msLoopbackIdInput() {
    return this._msLoopbackId;
  }

  // ms_underlay_autoconfig - computed: true, optional: true, required: false
  private _msUnderlayAutoconfig?: boolean | cdktf.IResolvable; 
  public get msUnderlayAutoconfig() {
    return this.getBooleanAttribute('ms_underlay_autoconfig');
  }
  public set msUnderlayAutoconfig(value: boolean | cdktf.IResolvable) {
    this._msUnderlayAutoconfig = value;
  }
  public resetMsUnderlayAutoconfig() {
    this._msUnderlayAutoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msUnderlayAutoconfigInput() {
    return this._msUnderlayAutoconfig;
  }

  // mso_controler_id - computed: true, optional: false, required: false
  public get msoControlerId() {
    return this.getStringAttribute('mso_controler_id');
  }

  // mso_site_group_name - computed: true, optional: false, required: false
  public get msoSiteGroupName() {
    return this.getStringAttribute('mso_site_group_name');
  }

  // network_extension_template - computed: true, optional: true, required: false
  private _networkExtensionTemplate?: string; 
  public get networkExtensionTemplate() {
    return this.getStringAttribute('network_extension_template');
  }
  public set networkExtensionTemplate(value: string) {
    this._networkExtensionTemplate = value;
  }
  public resetNetworkExtensionTemplate() {
    this._networkExtensionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExtensionTemplateInput() {
    return this._networkExtensionTemplate;
  }

  // parent_onemanage_fabric - computed: true, optional: false, required: false
  public get parentOnemanageFabric() {
    return this.getStringAttribute('parent_onemanage_fabric');
  }

  // premso_parent_fabric - computed: true, optional: false, required: false
  public get premsoParentFabric() {
    return this.getStringAttribute('premso_parent_fabric');
  }

  // rp_server_ip - computed: true, optional: true, required: false
  private _rpServerIp?: string; 
  public get rpServerIp() {
    return this.getStringAttribute('rp_server_ip');
  }
  public set rpServerIp(value: string) {
    this._rpServerIp = value;
  }
  public resetRpServerIp() {
    this._rpServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpServerIpInput() {
    return this._rpServerIp;
  }

  // rs_routing_tag - computed: true, optional: true, required: false
  private _rsRoutingTag?: number; 
  public get rsRoutingTag() {
    return this.getNumberAttribute('rs_routing_tag');
  }
  public set rsRoutingTag(value: number) {
    this._rsRoutingTag = value;
  }
  public resetRsRoutingTag() {
    this._rsRoutingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsRoutingTagInput() {
    return this._rsRoutingTag;
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

  // sgt_id_range - computed: true, optional: true, required: false
  private _sgtIdRange?: string; 
  public get sgtIdRange() {
    return this.getStringAttribute('sgt_id_range');
  }
  public set sgtIdRange(value: string) {
    this._sgtIdRange = value;
  }
  public resetSgtIdRange() {
    this._sgtIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtIdRangeInput() {
    return this._sgtIdRange;
  }

  // sgt_id_range_prev - computed: true, optional: false, required: false
  public get sgtIdRangePrev() {
    return this.getStringAttribute('sgt_id_range_prev');
  }

  // sgt_name_prefix - computed: true, optional: true, required: false
  private _sgtNamePrefix?: string; 
  public get sgtNamePrefix() {
    return this.getStringAttribute('sgt_name_prefix');
  }
  public set sgtNamePrefix(value: string) {
    this._sgtNamePrefix = value;
  }
  public resetSgtNamePrefix() {
    this._sgtNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtNamePrefixInput() {
    return this._sgtNamePrefix;
  }

  // sgt_name_prefix_prev - computed: true, optional: false, required: false
  public get sgtNamePrefixPrev() {
    return this.getStringAttribute('sgt_name_prefix_prev');
  }

  // sgt_oper_status - computed: true, optional: false, required: false
  public get sgtOperStatus() {
    return this.getStringAttribute('sgt_oper_status');
  }

  // sgt_preprov_recalc_status - computed: true, optional: false, required: false
  public get sgtPreprovRecalcStatus() {
    return this.getStringAttribute('sgt_preprov_recalc_status');
  }

  // sgt_preprovision - computed: true, optional: true, required: false
  private _sgtPreprovision?: boolean | cdktf.IResolvable; 
  public get sgtPreprovision() {
    return this.getBooleanAttribute('sgt_preprovision');
  }
  public set sgtPreprovision(value: boolean | cdktf.IResolvable) {
    this._sgtPreprovision = value;
  }
  public resetSgtPreprovision() {
    this._sgtPreprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtPreprovisionInput() {
    return this._sgtPreprovision;
  }

  // sgt_preprovision_prev - computed: true, optional: false, required: false
  public get sgtPreprovisionPrev() {
    return this.getBooleanAttribute('sgt_preprovision_prev');
  }

  // sgt_recalc_status - computed: true, optional: false, required: false
  public get sgtRecalcStatus() {
    return this.getStringAttribute('sgt_recalc_status');
  }

  // tor_auto_deploy - computed: true, optional: true, required: false
  private _torAutoDeploy?: boolean | cdktf.IResolvable; 
  public get torAutoDeploy() {
    return this.getBooleanAttribute('tor_auto_deploy');
  }
  public set torAutoDeploy(value: boolean | cdktf.IResolvable) {
    this._torAutoDeploy = value;
  }
  public resetTorAutoDeploy() {
    this._torAutoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torAutoDeployInput() {
    return this._torAutoDeploy;
  }

  // v6_dci_subnet_range - computed: true, optional: true, required: false
  private _v6DciSubnetRange?: string; 
  public get v6DciSubnetRange() {
    return this.getStringAttribute('v6_dci_subnet_range');
  }
  public set v6DciSubnetRange(value: string) {
    this._v6DciSubnetRange = value;
  }
  public resetV6DciSubnetRange() {
    this._v6DciSubnetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6DciSubnetRangeInput() {
    return this._v6DciSubnetRange;
  }

  // v6_dci_subnet_target_mask - computed: true, optional: true, required: false
  private _v6DciSubnetTargetMask?: number; 
  public get v6DciSubnetTargetMask() {
    return this.getNumberAttribute('v6_dci_subnet_target_mask');
  }
  public set v6DciSubnetTargetMask(value: number) {
    this._v6DciSubnetTargetMask = value;
  }
  public resetV6DciSubnetTargetMask() {
    this._v6DciSubnetTargetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6DciSubnetTargetMaskInput() {
    return this._v6DciSubnetTargetMask;
  }

  // vrf_extension_template - computed: true, optional: true, required: false
  private _vrfExtensionTemplate?: string; 
  public get vrfExtensionTemplate() {
    return this.getStringAttribute('vrf_extension_template');
  }
  public set vrfExtensionTemplate(value: string) {
    this._vrfExtensionTemplate = value;
  }
  public resetVrfExtensionTemplate() {
    this._vrfExtensionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfExtensionTemplateInput() {
    return this._vrfExtensionTemplate;
  }

  // vxlan_underlay_is_v6 - computed: true, optional: true, required: false
  private _vxlanUnderlayIsV6?: boolean | cdktf.IResolvable; 
  public get vxlanUnderlayIsV6() {
    return this.getBooleanAttribute('vxlan_underlay_is_v6');
  }
  public set vxlanUnderlayIsV6(value: boolean | cdktf.IResolvable) {
    this._vxlanUnderlayIsV6 = value;
  }
  public resetVxlanUnderlayIsV6() {
    this._vxlanUnderlayIsV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanUnderlayIsV6Input() {
    return this._vxlanUnderlayIsV6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anycast_gw_mac: cdktf.stringToTerraform(this._anycastGwMac),
      bgp_rp_asn: cdktf.stringToTerraform(this._bgpRpAsn),
      bgw_routing_tag: cdktf.numberToTerraform(this._bgwRoutingTag),
      border_gwy_connections: cdktf.stringToTerraform(this._borderGwyConnections),
      cloudsec_algorithm: cdktf.stringToTerraform(this._cloudsecAlgorithm),
      cloudsec_autoconfig: cdktf.booleanToTerraform(this._cloudsecAutoconfig),
      cloudsec_enforcement: cdktf.stringToTerraform(this._cloudsecEnforcement),
      cloudsec_key_string: cdktf.stringToTerraform(this._cloudsecKeyString),
      cloudsec_report_timer: cdktf.numberToTerraform(this._cloudsecReportTimer),
      dci_subnet_range: cdktf.stringToTerraform(this._dciSubnetRange),
      dci_subnet_target_mask: cdktf.numberToTerraform(this._dciSubnetTargetMask),
      default_network: cdktf.stringToTerraform(this._defaultNetwork),
      default_pvlan_sec_network: cdktf.stringToTerraform(this._defaultPvlanSecNetwork),
      default_vrf: cdktf.stringToTerraform(this._defaultVrf),
      delay_restore: cdktf.numberToTerraform(this._delayRestore),
      deploy: cdktf.booleanToTerraform(this._deploy),
      enable_bgp_bfd: cdktf.booleanToTerraform(this._enableBgpBfd),
      enable_bgp_log_neighbor_change: cdktf.booleanToTerraform(this._enableBgpLogNeighborChange),
      enable_bgp_send_comm: cdktf.booleanToTerraform(this._enableBgpSendComm),
      enable_pvlan: cdktf.booleanToTerraform(this._enablePvlan),
      enable_rs_redist_direct: cdktf.booleanToTerraform(this._enableRsRedistDirect),
      enable_scheduled_backup: cdktf.booleanToTerraform(this._enableScheduledBackup),
      enable_sgt: cdktf.stringToTerraform(this._enableSgt),
      enable_trm_trmv6: cdktf.booleanToTerraform(this._enableTrmTrmv6),
      ext_fabric_type: cdktf.stringToTerraform(this._extFabricType),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      ff: cdktf.stringToTerraform(this._ff),
      l2_segment_id_range: cdktf.stringToTerraform(this._l2SegmentIdRange),
      l3_partition_id_range: cdktf.stringToTerraform(this._l3PartitionIdRange),
      loopback100_ip_range: cdktf.stringToTerraform(this._loopback100IpRange),
      loopback100_ipv6_range: cdktf.stringToTerraform(this._loopback100Ipv6Range),
      ms_ifc_bgp_auth_key_type: cdktf.numberToTerraform(this._msIfcBgpAuthKeyType),
      ms_ifc_bgp_password: cdktf.stringToTerraform(this._msIfcBgpPassword),
      ms_ifc_bgp_password_enable: cdktf.booleanToTerraform(this._msIfcBgpPasswordEnable),
      ms_loopback_id: cdktf.numberToTerraform(this._msLoopbackId),
      ms_underlay_autoconfig: cdktf.booleanToTerraform(this._msUnderlayAutoconfig),
      network_extension_template: cdktf.stringToTerraform(this._networkExtensionTemplate),
      rp_server_ip: cdktf.stringToTerraform(this._rpServerIp),
      rs_routing_tag: cdktf.numberToTerraform(this._rsRoutingTag),
      scheduled_time: cdktf.stringToTerraform(this._scheduledTime),
      sgt_id_range: cdktf.stringToTerraform(this._sgtIdRange),
      sgt_name_prefix: cdktf.stringToTerraform(this._sgtNamePrefix),
      sgt_preprovision: cdktf.booleanToTerraform(this._sgtPreprovision),
      tor_auto_deploy: cdktf.booleanToTerraform(this._torAutoDeploy),
      v6_dci_subnet_range: cdktf.stringToTerraform(this._v6DciSubnetRange),
      v6_dci_subnet_target_mask: cdktf.numberToTerraform(this._v6DciSubnetTargetMask),
      vrf_extension_template: cdktf.stringToTerraform(this._vrfExtensionTemplate),
      vxlan_underlay_is_v6: cdktf.booleanToTerraform(this._vxlanUnderlayIsV6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anycast_gw_mac: {
        value: cdktf.stringToHclTerraform(this._anycastGwMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_rp_asn: {
        value: cdktf.stringToHclTerraform(this._bgpRpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgw_routing_tag: {
        value: cdktf.numberToHclTerraform(this._bgwRoutingTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      border_gwy_connections: {
        value: cdktf.stringToHclTerraform(this._borderGwyConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudsec_algorithm: {
        value: cdktf.stringToHclTerraform(this._cloudsecAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudsec_autoconfig: {
        value: cdktf.booleanToHclTerraform(this._cloudsecAutoconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloudsec_enforcement: {
        value: cdktf.stringToHclTerraform(this._cloudsecEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudsec_key_string: {
        value: cdktf.stringToHclTerraform(this._cloudsecKeyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudsec_report_timer: {
        value: cdktf.numberToHclTerraform(this._cloudsecReportTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      default_network: {
        value: cdktf.stringToHclTerraform(this._defaultNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pvlan_sec_network: {
        value: cdktf.stringToHclTerraform(this._defaultPvlanSecNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vrf: {
        value: cdktf.stringToHclTerraform(this._defaultVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_restore: {
        value: cdktf.numberToHclTerraform(this._delayRestore),
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
      enable_bgp_bfd: {
        value: cdktf.booleanToHclTerraform(this._enableBgpBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_bgp_log_neighbor_change: {
        value: cdktf.booleanToHclTerraform(this._enableBgpLogNeighborChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_bgp_send_comm: {
        value: cdktf.booleanToHclTerraform(this._enableBgpSendComm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_pvlan: {
        value: cdktf.booleanToHclTerraform(this._enablePvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rs_redist_direct: {
        value: cdktf.booleanToHclTerraform(this._enableRsRedistDirect),
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
      enable_sgt: {
        value: cdktf.stringToHclTerraform(this._enableSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_trm_trmv6: {
        value: cdktf.booleanToHclTerraform(this._enableTrmTrmv6),
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
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ff: {
        value: cdktf.stringToHclTerraform(this._ff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2_segment_id_range: {
        value: cdktf.stringToHclTerraform(this._l2SegmentIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_partition_id_range: {
        value: cdktf.stringToHclTerraform(this._l3PartitionIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback100_ip_range: {
        value: cdktf.stringToHclTerraform(this._loopback100IpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback100_ipv6_range: {
        value: cdktf.stringToHclTerraform(this._loopback100Ipv6Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ms_ifc_bgp_auth_key_type: {
        value: cdktf.numberToHclTerraform(this._msIfcBgpAuthKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ms_ifc_bgp_password: {
        value: cdktf.stringToHclTerraform(this._msIfcBgpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ms_ifc_bgp_password_enable: {
        value: cdktf.booleanToHclTerraform(this._msIfcBgpPasswordEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ms_loopback_id: {
        value: cdktf.numberToHclTerraform(this._msLoopbackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ms_underlay_autoconfig: {
        value: cdktf.booleanToHclTerraform(this._msUnderlayAutoconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_extension_template: {
        value: cdktf.stringToHclTerraform(this._networkExtensionTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_server_ip: {
        value: cdktf.stringToHclTerraform(this._rpServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rs_routing_tag: {
        value: cdktf.numberToHclTerraform(this._rsRoutingTag),
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
      sgt_id_range: {
        value: cdktf.stringToHclTerraform(this._sgtIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgt_name_prefix: {
        value: cdktf.stringToHclTerraform(this._sgtNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgt_preprovision: {
        value: cdktf.booleanToHclTerraform(this._sgtPreprovision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tor_auto_deploy: {
        value: cdktf.booleanToHclTerraform(this._torAutoDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      v6_dci_subnet_range: {
        value: cdktf.stringToHclTerraform(this._v6DciSubnetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_dci_subnet_target_mask: {
        value: cdktf.numberToHclTerraform(this._v6DciSubnetTargetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_extension_template: {
        value: cdktf.stringToHclTerraform(this._vrfExtensionTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_underlay_is_v6: {
        value: cdktf.booleanToHclTerraform(this._vxlanUnderlayIsV6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
