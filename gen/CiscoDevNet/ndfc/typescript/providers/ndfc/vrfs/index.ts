// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to `true`, does a deployment of all attachments in this resource after any operation. This parameter cannot be set to `true` if  `deploy_attachments` in the vrf is set or `deploy_this_attachment` in the  `attach-list` is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#deploy_all_attachments Vrfs#deploy_all_attachments}
  */
  readonly deployAllAttachments?: boolean | cdktf.IResolvable;
  /**
  * The name of the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#fabric_name Vrfs#fabric_name}
  */
  readonly fabricName: string;
  /**
  * List of vrfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#vrfs Vrfs#vrfs}
  */
  readonly vrfs: { [key: string]: VrfsVrfs } | cdktf.IResolvable;
}
export interface VrfsVrfsAttachListStruct {
  /**
  * If set to `true`, does a deployment of the attachment. This parameter cannot be set to `true` if  `deploy_all_attachments` in the resource is set or `deploy_attachment` in the corresponding `vrf` is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#deploy_this_attachment Vrfs#deploy_this_attachment}
  */
  readonly deployThisAttachment?: boolean | cdktf.IResolvable;
  /**
  * This field covers any configuration not included in overlay templates which is needed as part of this VRF attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#freeform_config Vrfs#freeform_config}
  */
  readonly freeformConfig?: string;
  /**
  * Override loopback ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#loopback_id Vrfs#loopback_id}
  */
  readonly loopbackId?: number;
  /**
  * Override loopback IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#loopback_ipv4 Vrfs#loopback_ipv4}
  */
  readonly loopbackIpv4?: string;
  /**
  * Override loopback IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#loopback_ipv6 Vrfs#loopback_ipv6}
  */
  readonly loopbackIpv6?: string;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#vlan Vrfs#vlan}
  */
  readonly vlan?: number;
}

export function vrfsVrfsAttachListStructToTerraform(struct?: VrfsVrfsAttachListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy_this_attachment: cdktf.booleanToTerraform(struct!.deployThisAttachment),
    freeform_config: cdktf.stringToTerraform(struct!.freeformConfig),
    loopback_id: cdktf.numberToTerraform(struct!.loopbackId),
    loopback_ipv4: cdktf.stringToTerraform(struct!.loopbackIpv4),
    loopback_ipv6: cdktf.stringToTerraform(struct!.loopbackIpv6),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function vrfsVrfsAttachListStructToHclTerraform(struct?: VrfsVrfsAttachListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy_this_attachment: {
      value: cdktf.booleanToHclTerraform(struct!.deployThisAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    freeform_config: {
      value: cdktf.stringToHclTerraform(struct!.freeformConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_id: {
      value: cdktf.numberToHclTerraform(struct!.loopbackId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loopback_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.loopbackIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.loopbackIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfsVrfsAttachListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): VrfsVrfsAttachListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployThisAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployThisAttachment = this._deployThisAttachment;
    }
    if (this._freeformConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformConfig = this._freeformConfig;
    }
    if (this._loopbackId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackId = this._loopbackId;
    }
    if (this._loopbackIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackIpv4 = this._loopbackIpv4;
    }
    if (this._loopbackIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackIpv6 = this._loopbackIpv6;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfsVrfsAttachListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployThisAttachment = undefined;
      this._freeformConfig = undefined;
      this._loopbackId = undefined;
      this._loopbackIpv4 = undefined;
      this._loopbackIpv6 = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployThisAttachment = value.deployThisAttachment;
      this._freeformConfig = value.freeformConfig;
      this._loopbackId = value.loopbackId;
      this._loopbackIpv4 = value.loopbackIpv4;
      this._loopbackIpv6 = value.loopbackIpv6;
      this._vlan = value.vlan;
    }
  }

  // attach_state - computed: true, optional: false, required: false
  public get attachState() {
    return this.getStringAttribute('attach_state');
  }

  // attached - computed: true, optional: false, required: false
  public get attached() {
    return this.getBooleanAttribute('attached');
  }

  // deploy_this_attachment - computed: true, optional: true, required: false
  private _deployThisAttachment?: boolean | cdktf.IResolvable; 
  public get deployThisAttachment() {
    return this.getBooleanAttribute('deploy_this_attachment');
  }
  public set deployThisAttachment(value: boolean | cdktf.IResolvable) {
    this._deployThisAttachment = value;
  }
  public resetDeployThisAttachment() {
    this._deployThisAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployThisAttachmentInput() {
    return this._deployThisAttachment;
  }

  // freeform_config - computed: false, optional: true, required: false
  private _freeformConfig?: string; 
  public get freeformConfig() {
    return this.getStringAttribute('freeform_config');
  }
  public set freeformConfig(value: string) {
    this._freeformConfig = value;
  }
  public resetFreeformConfig() {
    this._freeformConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformConfigInput() {
    return this._freeformConfig;
  }

  // loopback_id - computed: false, optional: true, required: false
  private _loopbackId?: number; 
  public get loopbackId() {
    return this.getNumberAttribute('loopback_id');
  }
  public set loopbackId(value: number) {
    this._loopbackId = value;
  }
  public resetLoopbackId() {
    this._loopbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIdInput() {
    return this._loopbackId;
  }

  // loopback_ipv4 - computed: false, optional: true, required: false
  private _loopbackIpv4?: string; 
  public get loopbackIpv4() {
    return this.getStringAttribute('loopback_ipv4');
  }
  public set loopbackIpv4(value: string) {
    this._loopbackIpv4 = value;
  }
  public resetLoopbackIpv4() {
    this._loopbackIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpv4Input() {
    return this._loopbackIpv4;
  }

  // loopback_ipv6 - computed: false, optional: true, required: false
  private _loopbackIpv6?: string; 
  public get loopbackIpv6() {
    return this.getStringAttribute('loopback_ipv6');
  }
  public set loopbackIpv6(value: string) {
    this._loopbackIpv6 = value;
  }
  public resetLoopbackIpv6() {
    this._loopbackIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpv6Input() {
    return this._loopbackIpv6;
  }

  // switch_name - computed: true, optional: false, required: false
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VrfsVrfsAttachListStructMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: VrfsVrfsAttachListStruct } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): VrfsVrfsAttachListStructOutputReference {
    return new VrfsVrfsAttachListStructOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface VrfsVrfs {
  /**
  * Flag to Control Advertisement of Default Route Internally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#advertise_default_route Vrfs#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Flag to Control Advertisement of /32 and /128 Routes to Edge Routers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#advertise_host_routes Vrfs#advertise_host_routes}
  */
  readonly advertiseHostRoutes?: boolean | cdktf.IResolvable;
  /**
  * List of switches attached to the VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#attach_list Vrfs#attach_list}
  */
  readonly attachList?: { [key: string]: VrfsVrfsAttachListStruct } | cdktf.IResolvable;
  /**
  * VRF Lite BGP neighbor password (Hex String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#bgp_password Vrfs#bgp_password}
  */
  readonly bgpPassword?: string;
  /**
  * VRF Lite BGP Key Encryption Type: 3 - 3DES, 7 - Cisco
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#bgp_password_type Vrfs#bgp_password_type}
  */
  readonly bgpPasswordType?: string;
  /**
  * Flag to Control Static Default Route Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#configure_static_default_route Vrfs#configure_static_default_route}
  */
  readonly configureStaticDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * If set to `true`, does a deployment of all attachments in this `vrf`. This parameter cannot be set to `true` if  `deploy_all_attachments` in the resource is set or `deploy_this_attachment` in the  `attach-list` is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#deploy_attachments Vrfs#deploy_attachments}
  */
  readonly deployAttachments?: boolean | cdktf.IResolvable;
  /**
  * Applicable to IPv4, IPv6 VPN/EVPN/MVPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#disable_rt_auto Vrfs#disable_rt_auto}
  */
  readonly disableRtAuto?: boolean | cdktf.IResolvable;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#interface_description Vrfs#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Enables IPv6 link-local Option under VRF SVI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#ipv6_link_local Vrfs#ipv6_link_local}
  */
  readonly ipv6LinkLocal?: boolean | cdktf.IResolvable;
  /**
  * Loopback routing tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#loopback_routing_tag Vrfs#loopback_routing_tag}
  */
  readonly loopbackRoutingTag?: number;
  /**
  * Maximum BGP paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#max_bgp_paths Vrfs#max_bgp_paths}
  */
  readonly maxBgpPaths?: number;
  /**
  * Maximum iBGP paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#max_ibgp_paths Vrfs#max_ibgp_paths}
  */
  readonly maxIbgpPaths?: number;
  /**
  * Interface MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#mtu Vrfs#mtu}
  */
  readonly mtu?: number;
  /**
  * Use the inter-as keyword for the MVPN address family routes to cross the BGP autonomous system (AS) boundaries, applicable when TRM is enabled. IOS XE Specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#mvpn_inter_as Vrfs#mvpn_inter_as}
  */
  readonly mvpnInterAs?: boolean | cdktf.IResolvable;
  /**
  * For netflow on VRF-LITE Sub-interface. Supported only if netflow is enabled on fabric. For NX-OS only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#netflow Vrfs#netflow}
  */
  readonly netflow?: boolean | cdktf.IResolvable;
  /**
  * Netflow monitor. For NX-OS only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#netflow_monitor Vrfs#netflow_monitor}
  */
  readonly netflowMonitor?: string;
  /**
  * There is no RP as only SSM is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#no_rp Vrfs#no_rp}
  */
  readonly noRp?: boolean | cdktf.IResolvable;
  /**
  * Overlay multicast groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#overlay_multicast_groups Vrfs#overlay_multicast_groups}
  */
  readonly overlayMulticastGroups?: string;
  /**
  * Redistribute direct route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#redistribute_direct_route_map Vrfs#redistribute_direct_route_map}
  */
  readonly redistributeDirectRouteMap?: string;
  /**
  * For VPN Routes Export, One or a Comma Separated List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#route_target_export Vrfs#route_target_export}
  */
  readonly routeTargetExport?: string;
  /**
  * For Cloud EVPN Routes Export, One or a Comma Separated List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#route_target_export_cloud_evpn Vrfs#route_target_export_cloud_evpn}
  */
  readonly routeTargetExportCloudEvpn?: string;
  /**
  * For EVPN Routes Export, One or a Comma Separated List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#route_target_export_evpn Vrfs#route_target_export_evpn}
  */
  readonly routeTargetExportEvpn?: string;
  /**
  * For MVPN Routes Export, One or a Comma Separated List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#route_target_export_mvpn Vrfs#route_target_export_mvpn}
  */
  readonly routeTargetExportMvpn?: string;
  /**
  * For VPN Routes Import, One or a Comma Separated List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#route_target_import Vrfs#route_target_import}
  */
  readonly routeTargetImport?: string;
  /**
  * For Cloud EVPN Routes Import, One or a Comma Separated List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#route_target_import_cloud_evpn Vrfs#route_target_import_cloud_evpn}
  */
  readonly routeTargetImportCloudEvpn?: string;
  /**
  * For EVPN Routes Import, One or a Comma Separated List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#route_target_import_evpn Vrfs#route_target_import_evpn}
  */
  readonly routeTargetImportEvpn?: string;
  /**
  * For MVPN Routes Import, One or a Comma Separated List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#route_target_import_mvpn Vrfs#route_target_import_mvpn}
  */
  readonly routeTargetImportMvpn?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#rp_address Vrfs#rp_address}
  */
  readonly rpAddress?: string;
  /**
  * Is RP external to the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#rp_external Vrfs#rp_external}
  */
  readonly rpExternal?: boolean | cdktf.IResolvable;
  /**
  * RP loopback ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#rp_loopback_id Vrfs#rp_loopback_id}
  */
  readonly rpLoopbackId?: number;
  /**
  * Enable Tenant Routed Multicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#trm Vrfs#trm}
  */
  readonly trm?: boolean | cdktf.IResolvable;
  /**
  * Enable TRM on Border Gateway Multisite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#trm_bgw_msite Vrfs#trm_bgw_msite}
  */
  readonly trmBgwMsite?: boolean | cdktf.IResolvable;
  /**
  * IPv4 Multicast Address. Applicable only when TRM is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#underlay_multicast_address Vrfs#underlay_multicast_address}
  */
  readonly underlayMulticastAddress?: string;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#vlan_id Vrfs#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * VLAN name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#vlan_name Vrfs#vlan_name}
  */
  readonly vlanName?: string;
  /**
  * VRF description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#vrf_description Vrfs#vrf_description}
  */
  readonly vrfDescription?: string;
  /**
  * The name of the VRF extension template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#vrf_extension_template Vrfs#vrf_extension_template}
  */
  readonly vrfExtensionTemplate?: string;
  /**
  * VNI ID of VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#vrf_id Vrfs#vrf_id}
  */
  readonly vrfId?: number;
  /**
  * The name of the VRF template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#vrf_template Vrfs#vrf_template}
  */
  readonly vrfTemplate?: string;
}

export function vrfsVrfsToTerraform(struct?: VrfsVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.booleanToTerraform(struct!.advertiseDefaultRoute),
    advertise_host_routes: cdktf.booleanToTerraform(struct!.advertiseHostRoutes),
    attach_list: cdktf.hashMapper(vrfsVrfsAttachListStructToTerraform)(struct!.attachList),
    bgp_password: cdktf.stringToTerraform(struct!.bgpPassword),
    bgp_password_type: cdktf.stringToTerraform(struct!.bgpPasswordType),
    configure_static_default_route: cdktf.booleanToTerraform(struct!.configureStaticDefaultRoute),
    deploy_attachments: cdktf.booleanToTerraform(struct!.deployAttachments),
    disable_rt_auto: cdktf.booleanToTerraform(struct!.disableRtAuto),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    ipv6_link_local: cdktf.booleanToTerraform(struct!.ipv6LinkLocal),
    loopback_routing_tag: cdktf.numberToTerraform(struct!.loopbackRoutingTag),
    max_bgp_paths: cdktf.numberToTerraform(struct!.maxBgpPaths),
    max_ibgp_paths: cdktf.numberToTerraform(struct!.maxIbgpPaths),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mvpn_inter_as: cdktf.booleanToTerraform(struct!.mvpnInterAs),
    netflow: cdktf.booleanToTerraform(struct!.netflow),
    netflow_monitor: cdktf.stringToTerraform(struct!.netflowMonitor),
    no_rp: cdktf.booleanToTerraform(struct!.noRp),
    overlay_multicast_groups: cdktf.stringToTerraform(struct!.overlayMulticastGroups),
    redistribute_direct_route_map: cdktf.stringToTerraform(struct!.redistributeDirectRouteMap),
    route_target_export: cdktf.stringToTerraform(struct!.routeTargetExport),
    route_target_export_cloud_evpn: cdktf.stringToTerraform(struct!.routeTargetExportCloudEvpn),
    route_target_export_evpn: cdktf.stringToTerraform(struct!.routeTargetExportEvpn),
    route_target_export_mvpn: cdktf.stringToTerraform(struct!.routeTargetExportMvpn),
    route_target_import: cdktf.stringToTerraform(struct!.routeTargetImport),
    route_target_import_cloud_evpn: cdktf.stringToTerraform(struct!.routeTargetImportCloudEvpn),
    route_target_import_evpn: cdktf.stringToTerraform(struct!.routeTargetImportEvpn),
    route_target_import_mvpn: cdktf.stringToTerraform(struct!.routeTargetImportMvpn),
    rp_address: cdktf.stringToTerraform(struct!.rpAddress),
    rp_external: cdktf.booleanToTerraform(struct!.rpExternal),
    rp_loopback_id: cdktf.numberToTerraform(struct!.rpLoopbackId),
    trm: cdktf.booleanToTerraform(struct!.trm),
    trm_bgw_msite: cdktf.booleanToTerraform(struct!.trmBgwMsite),
    underlay_multicast_address: cdktf.stringToTerraform(struct!.underlayMulticastAddress),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
    vrf_description: cdktf.stringToTerraform(struct!.vrfDescription),
    vrf_extension_template: cdktf.stringToTerraform(struct!.vrfExtensionTemplate),
    vrf_id: cdktf.numberToTerraform(struct!.vrfId),
    vrf_template: cdktf.stringToTerraform(struct!.vrfTemplate),
  }
}


export function vrfsVrfsToHclTerraform(struct?: VrfsVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_host_routes: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseHostRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attach_list: {
      value: cdktf.hashMapperHcl(vrfsVrfsAttachListStructToHclTerraform)(struct!.attachList),
      isBlock: true,
      type: "map",
      storageClassType: "VrfsVrfsAttachListStructMap",
    },
    bgp_password: {
      value: cdktf.stringToHclTerraform(struct!.bgpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_password_type: {
      value: cdktf.stringToHclTerraform(struct!.bgpPasswordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_static_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.configureStaticDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deploy_attachments: {
      value: cdktf.booleanToHclTerraform(struct!.deployAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_rt_auto: {
      value: cdktf.booleanToHclTerraform(struct!.disableRtAuto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_link_local: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6LinkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loopback_routing_tag: {
      value: cdktf.numberToHclTerraform(struct!.loopbackRoutingTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bgp_paths: {
      value: cdktf.numberToHclTerraform(struct!.maxBgpPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ibgp_paths: {
      value: cdktf.numberToHclTerraform(struct!.maxIbgpPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mvpn_inter_as: {
      value: cdktf.booleanToHclTerraform(struct!.mvpnInterAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netflow: {
      value: cdktf.booleanToHclTerraform(struct!.netflow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netflow_monitor: {
      value: cdktf.stringToHclTerraform(struct!.netflowMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_rp: {
      value: cdktf.booleanToHclTerraform(struct!.noRp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overlay_multicast_groups: {
      value: cdktf.stringToHclTerraform(struct!.overlayMulticastGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redistribute_direct_route_map: {
      value: cdktf.stringToHclTerraform(struct!.redistributeDirectRouteMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_export: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetExport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_export_cloud_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetExportCloudEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_export_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetExportEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_export_mvpn: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetExportMvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_import: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetImport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_import_cloud_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetImportCloudEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_import_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetImportEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_import_mvpn: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetImportMvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rp_address: {
      value: cdktf.stringToHclTerraform(struct!.rpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rp_external: {
      value: cdktf.booleanToHclTerraform(struct!.rpExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rp_loopback_id: {
      value: cdktf.numberToHclTerraform(struct!.rpLoopbackId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trm: {
      value: cdktf.booleanToHclTerraform(struct!.trm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trm_bgw_msite: {
      value: cdktf.booleanToHclTerraform(struct!.trmBgwMsite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    underlay_multicast_address: {
      value: cdktf.stringToHclTerraform(struct!.underlayMulticastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_description: {
      value: cdktf.stringToHclTerraform(struct!.vrfDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_extension_template: {
      value: cdktf.stringToHclTerraform(struct!.vrfExtensionTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_id: {
      value: cdktf.numberToHclTerraform(struct!.vrfId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf_template: {
      value: cdktf.stringToHclTerraform(struct!.vrfTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfsVrfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): VrfsVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseDefaultRoute = this._advertiseDefaultRoute;
    }
    if (this._advertiseHostRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseHostRoutes = this._advertiseHostRoutes;
    }
    if (this._attachList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachList = this._attachList?.internalValue;
    }
    if (this._bgpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPassword = this._bgpPassword;
    }
    if (this._bgpPasswordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPasswordType = this._bgpPasswordType;
    }
    if (this._configureStaticDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureStaticDefaultRoute = this._configureStaticDefaultRoute;
    }
    if (this._deployAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployAttachments = this._deployAttachments;
    }
    if (this._disableRtAuto !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRtAuto = this._disableRtAuto;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._ipv6LinkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocal = this._ipv6LinkLocal;
    }
    if (this._loopbackRoutingTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackRoutingTag = this._loopbackRoutingTag;
    }
    if (this._maxBgpPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBgpPaths = this._maxBgpPaths;
    }
    if (this._maxIbgpPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIbgpPaths = this._maxIbgpPaths;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mvpnInterAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mvpnInterAs = this._mvpnInterAs;
    }
    if (this._netflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow;
    }
    if (this._netflowMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowMonitor = this._netflowMonitor;
    }
    if (this._noRp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRp = this._noRp;
    }
    if (this._overlayMulticastGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayMulticastGroups = this._overlayMulticastGroups;
    }
    if (this._redistributeDirectRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributeDirectRouteMap = this._redistributeDirectRouteMap;
    }
    if (this._routeTargetExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetExport = this._routeTargetExport;
    }
    if (this._routeTargetExportCloudEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetExportCloudEvpn = this._routeTargetExportCloudEvpn;
    }
    if (this._routeTargetExportEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetExportEvpn = this._routeTargetExportEvpn;
    }
    if (this._routeTargetExportMvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetExportMvpn = this._routeTargetExportMvpn;
    }
    if (this._routeTargetImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetImport = this._routeTargetImport;
    }
    if (this._routeTargetImportCloudEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetImportCloudEvpn = this._routeTargetImportCloudEvpn;
    }
    if (this._routeTargetImportEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetImportEvpn = this._routeTargetImportEvpn;
    }
    if (this._routeTargetImportMvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetImportMvpn = this._routeTargetImportMvpn;
    }
    if (this._rpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddress = this._rpAddress;
    }
    if (this._rpExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpExternal = this._rpExternal;
    }
    if (this._rpLoopbackId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpLoopbackId = this._rpLoopbackId;
    }
    if (this._trm !== undefined) {
      hasAnyValues = true;
      internalValueResult.trm = this._trm;
    }
    if (this._trmBgwMsite !== undefined) {
      hasAnyValues = true;
      internalValueResult.trmBgwMsite = this._trmBgwMsite;
    }
    if (this._underlayMulticastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.underlayMulticastAddress = this._underlayMulticastAddress;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    if (this._vrfDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfDescription = this._vrfDescription;
    }
    if (this._vrfExtensionTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfExtensionTemplate = this._vrfExtensionTemplate;
    }
    if (this._vrfId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfId = this._vrfId;
    }
    if (this._vrfTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTemplate = this._vrfTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfsVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseHostRoutes = undefined;
      this._attachList.internalValue = undefined;
      this._bgpPassword = undefined;
      this._bgpPasswordType = undefined;
      this._configureStaticDefaultRoute = undefined;
      this._deployAttachments = undefined;
      this._disableRtAuto = undefined;
      this._interfaceDescription = undefined;
      this._ipv6LinkLocal = undefined;
      this._loopbackRoutingTag = undefined;
      this._maxBgpPaths = undefined;
      this._maxIbgpPaths = undefined;
      this._mtu = undefined;
      this._mvpnInterAs = undefined;
      this._netflow = undefined;
      this._netflowMonitor = undefined;
      this._noRp = undefined;
      this._overlayMulticastGroups = undefined;
      this._redistributeDirectRouteMap = undefined;
      this._routeTargetExport = undefined;
      this._routeTargetExportCloudEvpn = undefined;
      this._routeTargetExportEvpn = undefined;
      this._routeTargetExportMvpn = undefined;
      this._routeTargetImport = undefined;
      this._routeTargetImportCloudEvpn = undefined;
      this._routeTargetImportEvpn = undefined;
      this._routeTargetImportMvpn = undefined;
      this._rpAddress = undefined;
      this._rpExternal = undefined;
      this._rpLoopbackId = undefined;
      this._trm = undefined;
      this._trmBgwMsite = undefined;
      this._underlayMulticastAddress = undefined;
      this._vlanId = undefined;
      this._vlanName = undefined;
      this._vrfDescription = undefined;
      this._vrfExtensionTemplate = undefined;
      this._vrfId = undefined;
      this._vrfTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = value.advertiseDefaultRoute;
      this._advertiseHostRoutes = value.advertiseHostRoutes;
      this._attachList.internalValue = value.attachList;
      this._bgpPassword = value.bgpPassword;
      this._bgpPasswordType = value.bgpPasswordType;
      this._configureStaticDefaultRoute = value.configureStaticDefaultRoute;
      this._deployAttachments = value.deployAttachments;
      this._disableRtAuto = value.disableRtAuto;
      this._interfaceDescription = value.interfaceDescription;
      this._ipv6LinkLocal = value.ipv6LinkLocal;
      this._loopbackRoutingTag = value.loopbackRoutingTag;
      this._maxBgpPaths = value.maxBgpPaths;
      this._maxIbgpPaths = value.maxIbgpPaths;
      this._mtu = value.mtu;
      this._mvpnInterAs = value.mvpnInterAs;
      this._netflow = value.netflow;
      this._netflowMonitor = value.netflowMonitor;
      this._noRp = value.noRp;
      this._overlayMulticastGroups = value.overlayMulticastGroups;
      this._redistributeDirectRouteMap = value.redistributeDirectRouteMap;
      this._routeTargetExport = value.routeTargetExport;
      this._routeTargetExportCloudEvpn = value.routeTargetExportCloudEvpn;
      this._routeTargetExportEvpn = value.routeTargetExportEvpn;
      this._routeTargetExportMvpn = value.routeTargetExportMvpn;
      this._routeTargetImport = value.routeTargetImport;
      this._routeTargetImportCloudEvpn = value.routeTargetImportCloudEvpn;
      this._routeTargetImportEvpn = value.routeTargetImportEvpn;
      this._routeTargetImportMvpn = value.routeTargetImportMvpn;
      this._rpAddress = value.rpAddress;
      this._rpExternal = value.rpExternal;
      this._rpLoopbackId = value.rpLoopbackId;
      this._trm = value.trm;
      this._trmBgwMsite = value.trmBgwMsite;
      this._underlayMulticastAddress = value.underlayMulticastAddress;
      this._vlanId = value.vlanId;
      this._vlanName = value.vlanName;
      this._vrfDescription = value.vrfDescription;
      this._vrfExtensionTemplate = value.vrfExtensionTemplate;
      this._vrfId = value.vrfId;
      this._vrfTemplate = value.vrfTemplate;
    }
  }

  // advertise_default_route - computed: true, optional: true, required: false
  private _advertiseDefaultRoute?: boolean | cdktf.IResolvable; 
  public get advertiseDefaultRoute() {
    return this.getBooleanAttribute('advertise_default_route');
  }
  public set advertiseDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._advertiseDefaultRoute = value;
  }
  public resetAdvertiseDefaultRoute() {
    this._advertiseDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseDefaultRouteInput() {
    return this._advertiseDefaultRoute;
  }

  // advertise_host_routes - computed: true, optional: true, required: false
  private _advertiseHostRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseHostRoutes() {
    return this.getBooleanAttribute('advertise_host_routes');
  }
  public set advertiseHostRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseHostRoutes = value;
  }
  public resetAdvertiseHostRoutes() {
    this._advertiseHostRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseHostRoutesInput() {
    return this._advertiseHostRoutes;
  }

  // attach_list - computed: false, optional: true, required: false
  private _attachList = new VrfsVrfsAttachListStructMap(this, "attach_list");
  public get attachList() {
    return this._attachList;
  }
  public putAttachList(value: { [key: string]: VrfsVrfsAttachListStruct } | cdktf.IResolvable) {
    this._attachList.internalValue = value;
  }
  public resetAttachList() {
    this._attachList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachListInput() {
    return this._attachList.internalValue;
  }

  // bgp_password - computed: false, optional: true, required: false
  private _bgpPassword?: string; 
  public get bgpPassword() {
    return this.getStringAttribute('bgp_password');
  }
  public set bgpPassword(value: string) {
    this._bgpPassword = value;
  }
  public resetBgpPassword() {
    this._bgpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPasswordInput() {
    return this._bgpPassword;
  }

  // bgp_password_type - computed: false, optional: true, required: false
  private _bgpPasswordType?: string; 
  public get bgpPasswordType() {
    return this.getStringAttribute('bgp_password_type');
  }
  public set bgpPasswordType(value: string) {
    this._bgpPasswordType = value;
  }
  public resetBgpPasswordType() {
    this._bgpPasswordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPasswordTypeInput() {
    return this._bgpPasswordType;
  }

  // configure_static_default_route - computed: true, optional: true, required: false
  private _configureStaticDefaultRoute?: boolean | cdktf.IResolvable; 
  public get configureStaticDefaultRoute() {
    return this.getBooleanAttribute('configure_static_default_route');
  }
  public set configureStaticDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._configureStaticDefaultRoute = value;
  }
  public resetConfigureStaticDefaultRoute() {
    this._configureStaticDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureStaticDefaultRouteInput() {
    return this._configureStaticDefaultRoute;
  }

  // deploy_attachments - computed: true, optional: true, required: false
  private _deployAttachments?: boolean | cdktf.IResolvable; 
  public get deployAttachments() {
    return this.getBooleanAttribute('deploy_attachments');
  }
  public set deployAttachments(value: boolean | cdktf.IResolvable) {
    this._deployAttachments = value;
  }
  public resetDeployAttachments() {
    this._deployAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAttachmentsInput() {
    return this._deployAttachments;
  }

  // disable_rt_auto - computed: true, optional: true, required: false
  private _disableRtAuto?: boolean | cdktf.IResolvable; 
  public get disableRtAuto() {
    return this.getBooleanAttribute('disable_rt_auto');
  }
  public set disableRtAuto(value: boolean | cdktf.IResolvable) {
    this._disableRtAuto = value;
  }
  public resetDisableRtAuto() {
    this._disableRtAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRtAutoInput() {
    return this._disableRtAuto;
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // ipv6_link_local - computed: true, optional: true, required: false
  private _ipv6LinkLocal?: boolean | cdktf.IResolvable; 
  public get ipv6LinkLocal() {
    return this.getBooleanAttribute('ipv6_link_local');
  }
  public set ipv6LinkLocal(value: boolean | cdktf.IResolvable) {
    this._ipv6LinkLocal = value;
  }
  public resetIpv6LinkLocal() {
    this._ipv6LinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalInput() {
    return this._ipv6LinkLocal;
  }

  // loopback_routing_tag - computed: true, optional: true, required: false
  private _loopbackRoutingTag?: number; 
  public get loopbackRoutingTag() {
    return this.getNumberAttribute('loopback_routing_tag');
  }
  public set loopbackRoutingTag(value: number) {
    this._loopbackRoutingTag = value;
  }
  public resetLoopbackRoutingTag() {
    this._loopbackRoutingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackRoutingTagInput() {
    return this._loopbackRoutingTag;
  }

  // max_bgp_paths - computed: true, optional: true, required: false
  private _maxBgpPaths?: number; 
  public get maxBgpPaths() {
    return this.getNumberAttribute('max_bgp_paths');
  }
  public set maxBgpPaths(value: number) {
    this._maxBgpPaths = value;
  }
  public resetMaxBgpPaths() {
    this._maxBgpPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBgpPathsInput() {
    return this._maxBgpPaths;
  }

  // max_ibgp_paths - computed: true, optional: true, required: false
  private _maxIbgpPaths?: number; 
  public get maxIbgpPaths() {
    return this.getNumberAttribute('max_ibgp_paths');
  }
  public set maxIbgpPaths(value: number) {
    this._maxIbgpPaths = value;
  }
  public resetMaxIbgpPaths() {
    this._maxIbgpPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIbgpPathsInput() {
    return this._maxIbgpPaths;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mvpn_inter_as - computed: true, optional: true, required: false
  private _mvpnInterAs?: boolean | cdktf.IResolvable; 
  public get mvpnInterAs() {
    return this.getBooleanAttribute('mvpn_inter_as');
  }
  public set mvpnInterAs(value: boolean | cdktf.IResolvable) {
    this._mvpnInterAs = value;
  }
  public resetMvpnInterAs() {
    this._mvpnInterAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mvpnInterAsInput() {
    return this._mvpnInterAs;
  }

  // netflow - computed: true, optional: true, required: false
  private _netflow?: boolean | cdktf.IResolvable; 
  public get netflow() {
    return this.getBooleanAttribute('netflow');
  }
  public set netflow(value: boolean | cdktf.IResolvable) {
    this._netflow = value;
  }
  public resetNetflow() {
    this._netflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow;
  }

  // netflow_monitor - computed: false, optional: true, required: false
  private _netflowMonitor?: string; 
  public get netflowMonitor() {
    return this.getStringAttribute('netflow_monitor');
  }
  public set netflowMonitor(value: string) {
    this._netflowMonitor = value;
  }
  public resetNetflowMonitor() {
    this._netflowMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowMonitorInput() {
    return this._netflowMonitor;
  }

  // no_rp - computed: true, optional: true, required: false
  private _noRp?: boolean | cdktf.IResolvable; 
  public get noRp() {
    return this.getBooleanAttribute('no_rp');
  }
  public set noRp(value: boolean | cdktf.IResolvable) {
    this._noRp = value;
  }
  public resetNoRp() {
    this._noRp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRpInput() {
    return this._noRp;
  }

  // overlay_multicast_groups - computed: false, optional: true, required: false
  private _overlayMulticastGroups?: string; 
  public get overlayMulticastGroups() {
    return this.getStringAttribute('overlay_multicast_groups');
  }
  public set overlayMulticastGroups(value: string) {
    this._overlayMulticastGroups = value;
  }
  public resetOverlayMulticastGroups() {
    this._overlayMulticastGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayMulticastGroupsInput() {
    return this._overlayMulticastGroups;
  }

  // redistribute_direct_route_map - computed: true, optional: true, required: false
  private _redistributeDirectRouteMap?: string; 
  public get redistributeDirectRouteMap() {
    return this.getStringAttribute('redistribute_direct_route_map');
  }
  public set redistributeDirectRouteMap(value: string) {
    this._redistributeDirectRouteMap = value;
  }
  public resetRedistributeDirectRouteMap() {
    this._redistributeDirectRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeDirectRouteMapInput() {
    return this._redistributeDirectRouteMap;
  }

  // route_target_export - computed: false, optional: true, required: false
  private _routeTargetExport?: string; 
  public get routeTargetExport() {
    return this.getStringAttribute('route_target_export');
  }
  public set routeTargetExport(value: string) {
    this._routeTargetExport = value;
  }
  public resetRouteTargetExport() {
    this._routeTargetExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetExportInput() {
    return this._routeTargetExport;
  }

  // route_target_export_cloud_evpn - computed: false, optional: true, required: false
  private _routeTargetExportCloudEvpn?: string; 
  public get routeTargetExportCloudEvpn() {
    return this.getStringAttribute('route_target_export_cloud_evpn');
  }
  public set routeTargetExportCloudEvpn(value: string) {
    this._routeTargetExportCloudEvpn = value;
  }
  public resetRouteTargetExportCloudEvpn() {
    this._routeTargetExportCloudEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetExportCloudEvpnInput() {
    return this._routeTargetExportCloudEvpn;
  }

  // route_target_export_evpn - computed: false, optional: true, required: false
  private _routeTargetExportEvpn?: string; 
  public get routeTargetExportEvpn() {
    return this.getStringAttribute('route_target_export_evpn');
  }
  public set routeTargetExportEvpn(value: string) {
    this._routeTargetExportEvpn = value;
  }
  public resetRouteTargetExportEvpn() {
    this._routeTargetExportEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetExportEvpnInput() {
    return this._routeTargetExportEvpn;
  }

  // route_target_export_mvpn - computed: false, optional: true, required: false
  private _routeTargetExportMvpn?: string; 
  public get routeTargetExportMvpn() {
    return this.getStringAttribute('route_target_export_mvpn');
  }
  public set routeTargetExportMvpn(value: string) {
    this._routeTargetExportMvpn = value;
  }
  public resetRouteTargetExportMvpn() {
    this._routeTargetExportMvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetExportMvpnInput() {
    return this._routeTargetExportMvpn;
  }

  // route_target_import - computed: false, optional: true, required: false
  private _routeTargetImport?: string; 
  public get routeTargetImport() {
    return this.getStringAttribute('route_target_import');
  }
  public set routeTargetImport(value: string) {
    this._routeTargetImport = value;
  }
  public resetRouteTargetImport() {
    this._routeTargetImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetImportInput() {
    return this._routeTargetImport;
  }

  // route_target_import_cloud_evpn - computed: false, optional: true, required: false
  private _routeTargetImportCloudEvpn?: string; 
  public get routeTargetImportCloudEvpn() {
    return this.getStringAttribute('route_target_import_cloud_evpn');
  }
  public set routeTargetImportCloudEvpn(value: string) {
    this._routeTargetImportCloudEvpn = value;
  }
  public resetRouteTargetImportCloudEvpn() {
    this._routeTargetImportCloudEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetImportCloudEvpnInput() {
    return this._routeTargetImportCloudEvpn;
  }

  // route_target_import_evpn - computed: false, optional: true, required: false
  private _routeTargetImportEvpn?: string; 
  public get routeTargetImportEvpn() {
    return this.getStringAttribute('route_target_import_evpn');
  }
  public set routeTargetImportEvpn(value: string) {
    this._routeTargetImportEvpn = value;
  }
  public resetRouteTargetImportEvpn() {
    this._routeTargetImportEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetImportEvpnInput() {
    return this._routeTargetImportEvpn;
  }

  // route_target_import_mvpn - computed: false, optional: true, required: false
  private _routeTargetImportMvpn?: string; 
  public get routeTargetImportMvpn() {
    return this.getStringAttribute('route_target_import_mvpn');
  }
  public set routeTargetImportMvpn(value: string) {
    this._routeTargetImportMvpn = value;
  }
  public resetRouteTargetImportMvpn() {
    this._routeTargetImportMvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetImportMvpnInput() {
    return this._routeTargetImportMvpn;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }

  // rp_external - computed: true, optional: true, required: false
  private _rpExternal?: boolean | cdktf.IResolvable; 
  public get rpExternal() {
    return this.getBooleanAttribute('rp_external');
  }
  public set rpExternal(value: boolean | cdktf.IResolvable) {
    this._rpExternal = value;
  }
  public resetRpExternal() {
    this._rpExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpExternalInput() {
    return this._rpExternal;
  }

  // rp_loopback_id - computed: false, optional: true, required: false
  private _rpLoopbackId?: number; 
  public get rpLoopbackId() {
    return this.getNumberAttribute('rp_loopback_id');
  }
  public set rpLoopbackId(value: number) {
    this._rpLoopbackId = value;
  }
  public resetRpLoopbackId() {
    this._rpLoopbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpLoopbackIdInput() {
    return this._rpLoopbackId;
  }

  // trm - computed: true, optional: true, required: false
  private _trm?: boolean | cdktf.IResolvable; 
  public get trm() {
    return this.getBooleanAttribute('trm');
  }
  public set trm(value: boolean | cdktf.IResolvable) {
    this._trm = value;
  }
  public resetTrm() {
    this._trm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trmInput() {
    return this._trm;
  }

  // trm_bgw_msite - computed: true, optional: true, required: false
  private _trmBgwMsite?: boolean | cdktf.IResolvable; 
  public get trmBgwMsite() {
    return this.getBooleanAttribute('trm_bgw_msite');
  }
  public set trmBgwMsite(value: boolean | cdktf.IResolvable) {
    this._trmBgwMsite = value;
  }
  public resetTrmBgwMsite() {
    this._trmBgwMsite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trmBgwMsiteInput() {
    return this._trmBgwMsite;
  }

  // underlay_multicast_address - computed: false, optional: true, required: false
  private _underlayMulticastAddress?: string; 
  public get underlayMulticastAddress() {
    return this.getStringAttribute('underlay_multicast_address');
  }
  public set underlayMulticastAddress(value: string) {
    this._underlayMulticastAddress = value;
  }
  public resetUnderlayMulticastAddress() {
    this._underlayMulticastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get underlayMulticastAddressInput() {
    return this._underlayMulticastAddress;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // vrf_description - computed: false, optional: true, required: false
  private _vrfDescription?: string; 
  public get vrfDescription() {
    return this.getStringAttribute('vrf_description');
  }
  public set vrfDescription(value: string) {
    this._vrfDescription = value;
  }
  public resetVrfDescription() {
    this._vrfDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDescriptionInput() {
    return this._vrfDescription;
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

  // vrf_id - computed: true, optional: true, required: false
  private _vrfId?: number; 
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }
  public set vrfId(value: number) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // vrf_status - computed: true, optional: false, required: false
  public get vrfStatus() {
    return this.getStringAttribute('vrf_status');
  }

  // vrf_template - computed: true, optional: true, required: false
  private _vrfTemplate?: string; 
  public get vrfTemplate() {
    return this.getStringAttribute('vrf_template');
  }
  public set vrfTemplate(value: string) {
    this._vrfTemplate = value;
  }
  public resetVrfTemplate() {
    this._vrfTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTemplateInput() {
    return this._vrfTemplate;
  }
}

export class VrfsVrfsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: VrfsVrfs } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): VrfsVrfsOutputReference {
    return new VrfsVrfsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs ndfc_vrfs}
*/
export class Vrfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_vrfs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vrfs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vrfs to import
  * @param importFromId The id of the existing Vrfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vrfs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_vrfs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/vrfs ndfc_vrfs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrfsConfig
  */
  public constructor(scope: Construct, id: string, config: VrfsConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_vrfs',
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
    this._deployAllAttachments = config.deployAllAttachments;
    this._fabricName = config.fabricName;
    this._vrfs.internalValue = config.vrfs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_all_attachments - computed: true, optional: true, required: false
  private _deployAllAttachments?: boolean | cdktf.IResolvable; 
  public get deployAllAttachments() {
    return this.getBooleanAttribute('deploy_all_attachments');
  }
  public set deployAllAttachments(value: boolean | cdktf.IResolvable) {
    this._deployAllAttachments = value;
  }
  public resetDeployAllAttachments() {
    this._deployAllAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAllAttachmentsInput() {
    return this._deployAllAttachments;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vrfs - computed: false, optional: false, required: true
  private _vrfs = new VrfsVrfsMap(this, "vrfs");
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: { [key: string]: VrfsVrfs } | cdktf.IResolvable) {
    this._vrfs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfsInput() {
    return this._vrfs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_all_attachments: cdktf.booleanToTerraform(this._deployAllAttachments),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      vrfs: cdktf.hashMapper(vrfsVrfsToTerraform)(this._vrfs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_all_attachments: {
        value: cdktf.booleanToHclTerraform(this._deployAllAttachments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrfs: {
        value: cdktf.hashMapperHcl(vrfsVrfsToHclTerraform)(this._vrfs.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "VrfsVrfsMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
