// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModifySiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#address ModifySite#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#annotations ModifySite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#bgp_peer_address ModifySite#bgp_peer_address}
  */
  readonly bgpPeerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#bgp_router_id ModifySite#bgp_router_id}
  */
  readonly bgpRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#description ModifySite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#desired_pool_count ModifySite#desired_pool_count}
  */
  readonly desiredPoolCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#disable ModifySite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#id ModifySite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#inside_nameserver ModifySite#inside_nameserver}
  */
  readonly insideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#inside_vip ModifySite#inside_vip}
  */
  readonly insideVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#labels ModifySite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#name ModifySite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#namespace ModifySite#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#operating_system_version ModifySite#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#outside_nameserver ModifySite#outside_nameserver}
  */
  readonly outsideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#outside_vip ModifySite#outside_vip}
  */
  readonly outsideVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#retry ModifySite#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#site_to_site_network_type ModifySite#site_to_site_network_type}
  */
  readonly siteToSiteNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#site_to_site_tunnel_ip ModifySite#site_to_site_tunnel_ip}
  */
  readonly siteToSiteTunnelIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#tunnel_dead_timeout ModifySite#tunnel_dead_timeout}
  */
  readonly tunnelDeadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#tunnel_type ModifySite#tunnel_type}
  */
  readonly tunnelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#vip_vrrp_mode ModifySite#vip_vrrp_mode}
  */
  readonly vipVrrpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#volterra_software_overide ModifySite#volterra_software_overide}
  */
  readonly volterraSoftwareOveride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#volterra_software_version ModifySite#volterra_software_version}
  */
  readonly volterraSoftwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#wait_time ModifySite#wait_time}
  */
  readonly waitTime?: number;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#coordinates ModifySite#coordinates}
  */
  readonly coordinates?: ModifySiteCoordinates[] | cdktf.IResolvable;
}
export interface ModifySiteCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#latitude ModifySite#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#longitude ModifySite#longitude}
  */
  readonly longitude?: number;
}

export function modifySiteCoordinatesToTerraform(struct?: ModifySiteCoordinates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function modifySiteCoordinatesToHclTerraform(struct?: ModifySiteCoordinates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModifySiteCoordinatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ModifySiteCoordinates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModifySiteCoordinates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}

export class ModifySiteCoordinatesList extends cdktf.ComplexList {
  public internalValue? : ModifySiteCoordinates[] | cdktf.IResolvable

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
  public get(index: number): ModifySiteCoordinatesOutputReference {
    return new ModifySiteCoordinatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site volterra_modify_site}
*/
export class ModifySite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_modify_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ModifySite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ModifySite to import
  * @param importFromId The id of the existing ModifySite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ModifySite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_modify_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/modify_site volterra_modify_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModifySiteConfig
  */
  public constructor(scope: Construct, id: string, config: ModifySiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_modify_site',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._annotations = config.annotations;
    this._bgpPeerAddress = config.bgpPeerAddress;
    this._bgpRouterId = config.bgpRouterId;
    this._description = config.description;
    this._desiredPoolCount = config.desiredPoolCount;
    this._disable = config.disable;
    this._id = config.id;
    this._insideNameserver = config.insideNameserver;
    this._insideVip = config.insideVip;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._operatingSystemVersion = config.operatingSystemVersion;
    this._outsideNameserver = config.outsideNameserver;
    this._outsideVip = config.outsideVip;
    this._retry = config.retry;
    this._siteToSiteNetworkType = config.siteToSiteNetworkType;
    this._siteToSiteTunnelIp = config.siteToSiteTunnelIp;
    this._tunnelDeadTimeout = config.tunnelDeadTimeout;
    this._tunnelType = config.tunnelType;
    this._vipVrrpMode = config.vipVrrpMode;
    this._volterraSoftwareOveride = config.volterraSoftwareOveride;
    this._volterraSoftwareVersion = config.volterraSoftwareVersion;
    this._waitTime = config.waitTime;
    this._coordinates.internalValue = config.coordinates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // bgp_peer_address - computed: false, optional: true, required: false
  private _bgpPeerAddress?: string; 
  public get bgpPeerAddress() {
    return this.getStringAttribute('bgp_peer_address');
  }
  public set bgpPeerAddress(value: string) {
    this._bgpPeerAddress = value;
  }
  public resetBgpPeerAddress() {
    this._bgpPeerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerAddressInput() {
    return this._bgpPeerAddress;
  }

  // bgp_router_id - computed: false, optional: true, required: false
  private _bgpRouterId?: string; 
  public get bgpRouterId() {
    return this.getStringAttribute('bgp_router_id');
  }
  public set bgpRouterId(value: string) {
    this._bgpRouterId = value;
  }
  public resetBgpRouterId() {
    this._bgpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdInput() {
    return this._bgpRouterId;
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

  // desired_pool_count - computed: false, optional: true, required: false
  private _desiredPoolCount?: number; 
  public get desiredPoolCount() {
    return this.getNumberAttribute('desired_pool_count');
  }
  public set desiredPoolCount(value: number) {
    this._desiredPoolCount = value;
  }
  public resetDesiredPoolCount() {
    this._desiredPoolCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPoolCountInput() {
    return this._desiredPoolCount;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // inside_nameserver - computed: false, optional: true, required: false
  private _insideNameserver?: string; 
  public get insideNameserver() {
    return this.getStringAttribute('inside_nameserver');
  }
  public set insideNameserver(value: string) {
    this._insideNameserver = value;
  }
  public resetInsideNameserver() {
    this._insideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverInput() {
    return this._insideNameserver;
  }

  // inside_vip - computed: false, optional: true, required: false
  private _insideVip?: string; 
  public get insideVip() {
    return this.getStringAttribute('inside_vip');
  }
  public set insideVip(value: string) {
    this._insideVip = value;
  }
  public resetInsideVip() {
    this._insideVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideVipInput() {
    return this._insideVip;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operating_system_version - computed: false, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }

  // outside_nameserver - computed: false, optional: true, required: false
  private _outsideNameserver?: string; 
  public get outsideNameserver() {
    return this.getStringAttribute('outside_nameserver');
  }
  public set outsideNameserver(value: string) {
    this._outsideNameserver = value;
  }
  public resetOutsideNameserver() {
    this._outsideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverInput() {
    return this._outsideNameserver;
  }

  // outside_vip - computed: false, optional: true, required: false
  private _outsideVip?: string; 
  public get outsideVip() {
    return this.getStringAttribute('outside_vip');
  }
  public set outsideVip(value: string) {
    this._outsideVip = value;
  }
  public resetOutsideVip() {
    this._outsideVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideVipInput() {
    return this._outsideVip;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // site_to_site_network_type - computed: false, optional: true, required: false
  private _siteToSiteNetworkType?: string; 
  public get siteToSiteNetworkType() {
    return this.getStringAttribute('site_to_site_network_type');
  }
  public set siteToSiteNetworkType(value: string) {
    this._siteToSiteNetworkType = value;
  }
  public resetSiteToSiteNetworkType() {
    this._siteToSiteNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteNetworkTypeInput() {
    return this._siteToSiteNetworkType;
  }

  // site_to_site_tunnel_ip - computed: false, optional: true, required: false
  private _siteToSiteTunnelIp?: string; 
  public get siteToSiteTunnelIp() {
    return this.getStringAttribute('site_to_site_tunnel_ip');
  }
  public set siteToSiteTunnelIp(value: string) {
    this._siteToSiteTunnelIp = value;
  }
  public resetSiteToSiteTunnelIp() {
    this._siteToSiteTunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteTunnelIpInput() {
    return this._siteToSiteTunnelIp;
  }

  // tunnel_dead_timeout - computed: false, optional: true, required: false
  private _tunnelDeadTimeout?: number; 
  public get tunnelDeadTimeout() {
    return this.getNumberAttribute('tunnel_dead_timeout');
  }
  public set tunnelDeadTimeout(value: number) {
    this._tunnelDeadTimeout = value;
  }
  public resetTunnelDeadTimeout() {
    this._tunnelDeadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDeadTimeoutInput() {
    return this._tunnelDeadTimeout;
  }

  // tunnel_type - computed: false, optional: true, required: false
  private _tunnelType?: string; 
  public get tunnelType() {
    return this.getStringAttribute('tunnel_type');
  }
  public set tunnelType(value: string) {
    this._tunnelType = value;
  }
  public resetTunnelType() {
    this._tunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypeInput() {
    return this._tunnelType;
  }

  // vip_vrrp_mode - computed: false, optional: true, required: false
  private _vipVrrpMode?: string; 
  public get vipVrrpMode() {
    return this.getStringAttribute('vip_vrrp_mode');
  }
  public set vipVrrpMode(value: string) {
    this._vipVrrpMode = value;
  }
  public resetVipVrrpMode() {
    this._vipVrrpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipVrrpModeInput() {
    return this._vipVrrpMode;
  }

  // volterra_software_overide - computed: false, optional: true, required: false
  private _volterraSoftwareOveride?: string; 
  public get volterraSoftwareOveride() {
    return this.getStringAttribute('volterra_software_overide');
  }
  public set volterraSoftwareOveride(value: string) {
    this._volterraSoftwareOveride = value;
  }
  public resetVolterraSoftwareOveride() {
    this._volterraSoftwareOveride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareOverideInput() {
    return this._volterraSoftwareOveride;
  }

  // volterra_software_version - computed: false, optional: true, required: false
  private _volterraSoftwareVersion?: string; 
  public get volterraSoftwareVersion() {
    return this.getStringAttribute('volterra_software_version');
  }
  public set volterraSoftwareVersion(value: string) {
    this._volterraSoftwareVersion = value;
  }
  public resetVolterraSoftwareVersion() {
    this._volterraSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareVersionInput() {
    return this._volterraSoftwareVersion;
  }

  // wait_time - computed: false, optional: true, required: false
  private _waitTime?: number; 
  public get waitTime() {
    return this.getNumberAttribute('wait_time');
  }
  public set waitTime(value: number) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new ModifySiteCoordinatesList(this, "coordinates", true);
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: ModifySiteCoordinates[] | cdktf.IResolvable) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      bgp_peer_address: cdktf.stringToTerraform(this._bgpPeerAddress),
      bgp_router_id: cdktf.stringToTerraform(this._bgpRouterId),
      description: cdktf.stringToTerraform(this._description),
      desired_pool_count: cdktf.numberToTerraform(this._desiredPoolCount),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      inside_nameserver: cdktf.stringToTerraform(this._insideNameserver),
      inside_vip: cdktf.stringToTerraform(this._insideVip),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      operating_system_version: cdktf.stringToTerraform(this._operatingSystemVersion),
      outside_nameserver: cdktf.stringToTerraform(this._outsideNameserver),
      outside_vip: cdktf.stringToTerraform(this._outsideVip),
      retry: cdktf.numberToTerraform(this._retry),
      site_to_site_network_type: cdktf.stringToTerraform(this._siteToSiteNetworkType),
      site_to_site_tunnel_ip: cdktf.stringToTerraform(this._siteToSiteTunnelIp),
      tunnel_dead_timeout: cdktf.numberToTerraform(this._tunnelDeadTimeout),
      tunnel_type: cdktf.stringToTerraform(this._tunnelType),
      vip_vrrp_mode: cdktf.stringToTerraform(this._vipVrrpMode),
      volterra_software_overide: cdktf.stringToTerraform(this._volterraSoftwareOveride),
      volterra_software_version: cdktf.stringToTerraform(this._volterraSoftwareVersion),
      wait_time: cdktf.numberToTerraform(this._waitTime),
      coordinates: cdktf.listMapper(modifySiteCoordinatesToTerraform, true)(this._coordinates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      bgp_peer_address: {
        value: cdktf.stringToHclTerraform(this._bgpPeerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_router_id: {
        value: cdktf.stringToHclTerraform(this._bgpRouterId),
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
      desired_pool_count: {
        value: cdktf.numberToHclTerraform(this._desiredPoolCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_nameserver: {
        value: cdktf.stringToHclTerraform(this._insideNameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_vip: {
        value: cdktf.stringToHclTerraform(this._insideVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system_version: {
        value: cdktf.stringToHclTerraform(this._operatingSystemVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outside_nameserver: {
        value: cdktf.stringToHclTerraform(this._outsideNameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outside_vip: {
        value: cdktf.stringToHclTerraform(this._outsideVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_to_site_network_type: {
        value: cdktf.stringToHclTerraform(this._siteToSiteNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_to_site_tunnel_ip: {
        value: cdktf.stringToHclTerraform(this._siteToSiteTunnelIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_dead_timeout: {
        value: cdktf.numberToHclTerraform(this._tunnelDeadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_type: {
        value: cdktf.stringToHclTerraform(this._tunnelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_vrrp_mode: {
        value: cdktf.stringToHclTerraform(this._vipVrrpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volterra_software_overide: {
        value: cdktf.stringToHclTerraform(this._volterraSoftwareOveride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volterra_software_version: {
        value: cdktf.stringToHclTerraform(this._volterraSoftwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_time: {
        value: cdktf.numberToHclTerraform(this._waitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      coordinates: {
        value: cdktf.listMapperHcl(modifySiteCoordinatesToHclTerraform, true)(this._coordinates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ModifySiteCoordinatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
