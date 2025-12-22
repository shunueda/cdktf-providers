// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpPeerPolicyTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#allowas_in_as_number BgpPeerPolicyTemplate#allowas_in_as_number}
  */
  readonly allowasInAsNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#as_override_split_horizon BgpPeerPolicyTemplate#as_override_split_horizon}
  */
  readonly asOverrideSplitHorizon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#asn BgpPeerPolicyTemplate#asn}
  */
  readonly asn: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#delete_mode BgpPeerPolicyTemplate#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#device BgpPeerPolicyTemplate#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#name BgpPeerPolicyTemplate#name}
  */
  readonly name: string;
  /**
  * Apply route map to neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#route_maps BgpPeerPolicyTemplate#route_maps}
  */
  readonly routeMaps?: BgpPeerPolicyTemplateRouteMaps[] | cdktf.IResolvable;
  /**
  * Configure a neighbor as Route Reflector client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#route_reflector_client BgpPeerPolicyTemplate#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `both`, `extended`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#send_community BgpPeerPolicyTemplate#send_community}
  */
  readonly sendCommunity?: string;
}
export interface BgpPeerPolicyTemplateRouteMaps {
  /**
  * 
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#in_out BgpPeerPolicyTemplate#in_out}
  */
  readonly inOut: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#route_map_name BgpPeerPolicyTemplate#route_map_name}
  */
  readonly routeMapName: string;
}

export function bgpPeerPolicyTemplateRouteMapsToTerraform(struct?: BgpPeerPolicyTemplateRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_out: cdktf.stringToTerraform(struct!.inOut),
    route_map_name: cdktf.stringToTerraform(struct!.routeMapName),
  }
}


export function bgpPeerPolicyTemplateRouteMapsToHclTerraform(struct?: BgpPeerPolicyTemplateRouteMaps | cdktf.IResolvable): any {
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

export class BgpPeerPolicyTemplateRouteMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpPeerPolicyTemplateRouteMaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpPeerPolicyTemplateRouteMaps | cdktf.IResolvable | undefined) {
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

export class BgpPeerPolicyTemplateRouteMapsList extends cdktf.ComplexList {
  public internalValue? : BgpPeerPolicyTemplateRouteMaps[] | cdktf.IResolvable

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
  public get(index: number): BgpPeerPolicyTemplateRouteMapsOutputReference {
    return new BgpPeerPolicyTemplateRouteMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template iosxe_bgp_peer_policy_template}
*/
export class BgpPeerPolicyTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_peer_policy_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpPeerPolicyTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpPeerPolicyTemplate to import
  * @param importFromId The id of the existing BgpPeerPolicyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpPeerPolicyTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_peer_policy_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/bgp_peer_policy_template iosxe_bgp_peer_policy_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpPeerPolicyTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: BgpPeerPolicyTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_peer_policy_template',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowasInAsNumber = config.allowasInAsNumber;
    this._asOverrideSplitHorizon = config.asOverrideSplitHorizon;
    this._asn = config.asn;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._name = config.name;
    this._routeMaps.internalValue = config.routeMaps;
    this._routeReflectorClient = config.routeReflectorClient;
    this._sendCommunity = config.sendCommunity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowas_in_as_number - computed: false, optional: true, required: false
  private _allowasInAsNumber?: number; 
  public get allowasInAsNumber() {
    return this.getNumberAttribute('allowas_in_as_number');
  }
  public set allowasInAsNumber(value: number) {
    this._allowasInAsNumber = value;
  }
  public resetAllowasInAsNumber() {
    this._allowasInAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInAsNumberInput() {
    return this._allowasInAsNumber;
  }

  // as_override_split_horizon - computed: false, optional: true, required: false
  private _asOverrideSplitHorizon?: boolean | cdktf.IResolvable; 
  public get asOverrideSplitHorizon() {
    return this.getBooleanAttribute('as_override_split_horizon');
  }
  public set asOverrideSplitHorizon(value: boolean | cdktf.IResolvable) {
    this._asOverrideSplitHorizon = value;
  }
  public resetAsOverrideSplitHorizon() {
    this._asOverrideSplitHorizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideSplitHorizonInput() {
    return this._asOverrideSplitHorizon;
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

  // route_maps - computed: false, optional: true, required: false
  private _routeMaps = new BgpPeerPolicyTemplateRouteMapsList(this, "route_maps", false);
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: BgpPeerPolicyTemplateRouteMaps[] | cdktf.IResolvable) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowas_in_as_number: cdktf.numberToTerraform(this._allowasInAsNumber),
      as_override_split_horizon: cdktf.booleanToTerraform(this._asOverrideSplitHorizon),
      asn: cdktf.stringToTerraform(this._asn),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      route_maps: cdktf.listMapper(bgpPeerPolicyTemplateRouteMapsToTerraform, false)(this._routeMaps.internalValue),
      route_reflector_client: cdktf.booleanToTerraform(this._routeReflectorClient),
      send_community: cdktf.stringToTerraform(this._sendCommunity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowas_in_as_number: {
        value: cdktf.numberToHclTerraform(this._allowasInAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_override_split_horizon: {
        value: cdktf.booleanToHclTerraform(this._asOverrideSplitHorizon),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_maps: {
        value: cdktf.listMapperHcl(bgpPeerPolicyTemplateRouteMapsToHclTerraform, false)(this._routeMaps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpPeerPolicyTemplateRouteMapsList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
