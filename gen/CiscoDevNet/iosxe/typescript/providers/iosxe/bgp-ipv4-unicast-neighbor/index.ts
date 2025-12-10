// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpIpv4UnicastNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the address family for this neighbor
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#activate BgpIpv4UnicastNeighbor#activate}
  */
  readonly activate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#asn BgpIpv4UnicastNeighbor#asn}
  */
  readonly asn: string;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#default_originate BgpIpv4UnicastNeighbor#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Route-map to specify criteria to originate default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#default_originate_route_map BgpIpv4UnicastNeighbor#default_originate_route_map}
  */
  readonly defaultOriginateRouteMap?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#delete_mode BgpIpv4UnicastNeighbor#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#device BgpIpv4UnicastNeighbor#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#ip BgpIpv4UnicastNeighbor#ip}
  */
  readonly ip: string;
  /**
  * Apply route map to neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#route_maps BgpIpv4UnicastNeighbor#route_maps}
  */
  readonly routeMaps?: BgpIpv4UnicastNeighborRouteMaps[] | cdktf.IResolvable;
  /**
  * Configure a neighbor as Route Reflector client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#route_reflector_client BgpIpv4UnicastNeighbor#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `both`, `extended`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#send_community BgpIpv4UnicastNeighbor#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Per neighbor soft reconfiguration
  *   - Choices: `inbound`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#soft_reconfiguration BgpIpv4UnicastNeighbor#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
}
export interface BgpIpv4UnicastNeighborRouteMaps {
  /**
  * 
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#in_out BgpIpv4UnicastNeighbor#in_out}
  */
  readonly inOut: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#route_map_name BgpIpv4UnicastNeighbor#route_map_name}
  */
  readonly routeMapName: string;
}

export function bgpIpv4UnicastNeighborRouteMapsToTerraform(struct?: BgpIpv4UnicastNeighborRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_out: cdktf.stringToTerraform(struct!.inOut),
    route_map_name: cdktf.stringToTerraform(struct!.routeMapName),
  }
}


export function bgpIpv4UnicastNeighborRouteMapsToHclTerraform(struct?: BgpIpv4UnicastNeighborRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_out: {
      value: cdktf.stringToHclTerraform(struct!.inOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_name: {
      value: cdktf.stringToHclTerraform(struct!.routeMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpIpv4UnicastNeighborRouteMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpIpv4UnicastNeighborRouteMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.inOut = this._inOut;
    }
    if (this._routeMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapName = this._routeMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpIpv4UnicastNeighborRouteMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inOut = undefined;
      this._routeMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inOut = value.inOut;
      this._routeMapName = value.routeMapName;
    }
  }

  // in_out - computed: false, optional: false, required: true
  private _inOut?: string; 
  public get inOut() {
    return this.getStringAttribute('in_out');
  }
  public set inOut(value: string) {
    this._inOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inOutInput() {
    return this._inOut;
  }

  // route_map_name - computed: false, optional: false, required: true
  private _routeMapName?: string; 
  public get routeMapName() {
    return this.getStringAttribute('route_map_name');
  }
  public set routeMapName(value: string) {
    this._routeMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapNameInput() {
    return this._routeMapName;
  }
}

export class BgpIpv4UnicastNeighborRouteMapsList extends cdktf.ComplexList {
  public internalValue? : BgpIpv4UnicastNeighborRouteMaps[] | cdktf.IResolvable

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
  public get(index: number): BgpIpv4UnicastNeighborRouteMapsOutputReference {
    return new BgpIpv4UnicastNeighborRouteMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor iosxe_bgp_ipv4_unicast_neighbor}
*/
export class BgpIpv4UnicastNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_ipv4_unicast_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpIpv4UnicastNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpIpv4UnicastNeighbor to import
  * @param importFromId The id of the existing BgpIpv4UnicastNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpIpv4UnicastNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_ipv4_unicast_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/bgp_ipv4_unicast_neighbor iosxe_bgp_ipv4_unicast_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpIpv4UnicastNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: BgpIpv4UnicastNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_ipv4_unicast_neighbor',
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
    this._activate = config.activate;
    this._asn = config.asn;
    this._defaultOriginate = config.defaultOriginate;
    this._defaultOriginateRouteMap = config.defaultOriginateRouteMap;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._ip = config.ip;
    this._routeMaps.internalValue = config.routeMaps;
    this._routeReflectorClient = config.routeReflectorClient;
    this._sendCommunity = config.sendCommunity;
    this._softReconfiguration = config.softReconfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: true, required: false
  private _activate?: boolean | cdktf.IResolvable; 
  public get activate() {
    return this.getBooleanAttribute('activate');
  }
  public set activate(value: boolean | cdktf.IResolvable) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: boolean | cdktf.IResolvable; 
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }
  public set defaultOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // default_originate_route_map - computed: false, optional: true, required: false
  private _defaultOriginateRouteMap?: string; 
  public get defaultOriginateRouteMap() {
    return this.getStringAttribute('default_originate_route_map');
  }
  public set defaultOriginateRouteMap(value: string) {
    this._defaultOriginateRouteMap = value;
  }
  public resetDefaultOriginateRouteMap() {
    this._defaultOriginateRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRouteMapInput() {
    return this._defaultOriginateRouteMap;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // route_maps - computed: false, optional: true, required: false
  private _routeMaps = new BgpIpv4UnicastNeighborRouteMapsList(this, "route_maps", false);
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: BgpIpv4UnicastNeighborRouteMaps[] | cdktf.IResolvable) {
    this._routeMaps.internalValue = value;
  }
  public resetRouteMaps() {
    this._routeMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapsInput() {
    return this._routeMaps.internalValue;
  }

  // route_reflector_client - computed: false, optional: true, required: false
  private _routeReflectorClient?: boolean | cdktf.IResolvable; 
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: boolean | cdktf.IResolvable) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // send_community - computed: false, optional: true, required: false
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

  // soft_reconfiguration - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate: cdktf.booleanToTerraform(this._activate),
      asn: cdktf.stringToTerraform(this._asn),
      default_originate: cdktf.booleanToTerraform(this._defaultOriginate),
      default_originate_route_map: cdktf.stringToTerraform(this._defaultOriginateRouteMap),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      ip: cdktf.stringToTerraform(this._ip),
      route_maps: cdktf.listMapper(bgpIpv4UnicastNeighborRouteMapsToTerraform, false)(this._routeMaps.internalValue),
      route_reflector_client: cdktf.booleanToTerraform(this._routeReflectorClient),
      send_community: cdktf.stringToTerraform(this._sendCommunity),
      soft_reconfiguration: cdktf.stringToTerraform(this._softReconfiguration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate: {
        value: cdktf.booleanToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_originate: {
        value: cdktf.booleanToHclTerraform(this._defaultOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_originate_route_map: {
        value: cdktf.stringToHclTerraform(this._defaultOriginateRouteMap),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_maps: {
        value: cdktf.listMapperHcl(bgpIpv4UnicastNeighborRouteMapsToHclTerraform, false)(this._routeMaps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpIpv4UnicastNeighborRouteMapsList",
      },
      route_reflector_client: {
        value: cdktf.booleanToHclTerraform(this._routeReflectorClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_community: {
        value: cdktf.stringToHclTerraform(this._sendCommunity),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
