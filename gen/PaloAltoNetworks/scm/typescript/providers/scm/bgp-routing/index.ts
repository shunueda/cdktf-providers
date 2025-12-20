// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accept route over s c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#accept_route_over_sc BgpRouting#accept_route_over_sc}
  */
  readonly acceptRouteOverSc?: boolean | cdktf.IResolvable;
  /**
  * Add host route to ike peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#add_host_route_to_ike_peer BgpRouting#add_host_route_to_ike_peer}
  */
  readonly addHostRouteToIkePeer?: boolean | cdktf.IResolvable;
  /**
  * Backbone routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#backbone_routing BgpRouting#backbone_routing}
  */
  readonly backboneRouting?: string;
  /**
  * Outbound routes for services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#outbound_routes_for_services BgpRouting#outbound_routes_for_services}
  */
  readonly outboundRoutesForServices?: string[];
  /**
  * Routing preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#routing_preference BgpRouting#routing_preference}
  */
  readonly routingPreference?: BgpRoutingRoutingPreference;
  /**
  * Withdraw static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#withdraw_static_route BgpRouting#withdraw_static_route}
  */
  readonly withdrawStaticRoute?: boolean | cdktf.IResolvable;
}
export interface BgpRoutingRoutingPreferenceDefault {
}

export function bgpRoutingRoutingPreferenceDefaultToTerraform(struct?: BgpRoutingRoutingPreferenceDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpRoutingRoutingPreferenceDefaultToHclTerraform(struct?: BgpRoutingRoutingPreferenceDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpRoutingRoutingPreferenceDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRoutingRoutingPreferenceDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingRoutingPreferenceDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpRoutingRoutingPreferenceHotPotatoRouting {
}

export function bgpRoutingRoutingPreferenceHotPotatoRoutingToTerraform(struct?: BgpRoutingRoutingPreferenceHotPotatoRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpRoutingRoutingPreferenceHotPotatoRoutingToHclTerraform(struct?: BgpRoutingRoutingPreferenceHotPotatoRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpRoutingRoutingPreferenceHotPotatoRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRoutingRoutingPreferenceHotPotatoRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingRoutingPreferenceHotPotatoRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpRoutingRoutingPreference {
  /**
  * Default
  * > ℹ️ **Note:** You must specify exactly one of `default` and `hot_potato_routing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#default BgpRouting#default}
  */
  readonly default?: BgpRoutingRoutingPreferenceDefault;
  /**
  * Hot potato routing
  * > ℹ️ **Note:** You must specify exactly one of `default` and `hot_potato_routing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#hot_potato_routing BgpRouting#hot_potato_routing}
  */
  readonly hotPotatoRouting?: BgpRoutingRoutingPreferenceHotPotatoRouting;
}

export function bgpRoutingRoutingPreferenceToTerraform(struct?: BgpRoutingRoutingPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: bgpRoutingRoutingPreferenceDefaultToTerraform(struct!.default),
    hot_potato_routing: bgpRoutingRoutingPreferenceHotPotatoRoutingToTerraform(struct!.hotPotatoRouting),
  }
}


export function bgpRoutingRoutingPreferenceToHclTerraform(struct?: BgpRoutingRoutingPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: bgpRoutingRoutingPreferenceDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRoutingRoutingPreferenceDefault",
    },
    hot_potato_routing: {
      value: bgpRoutingRoutingPreferenceHotPotatoRoutingToHclTerraform(struct!.hotPotatoRouting),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRoutingRoutingPreferenceHotPotatoRouting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRoutingRoutingPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRoutingRoutingPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._hotPotatoRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotPotatoRouting = this._hotPotatoRouting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingRoutingPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._hotPotatoRouting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._hotPotatoRouting.internalValue = value.hotPotatoRouting;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new BgpRoutingRoutingPreferenceDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: BgpRoutingRoutingPreferenceDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // hot_potato_routing - computed: false, optional: true, required: false
  private _hotPotatoRouting = new BgpRoutingRoutingPreferenceHotPotatoRoutingOutputReference(this, "hot_potato_routing");
  public get hotPotatoRouting() {
    return this._hotPotatoRouting;
  }
  public putHotPotatoRouting(value: BgpRoutingRoutingPreferenceHotPotatoRouting) {
    this._hotPotatoRouting.internalValue = value;
  }
  public resetHotPotatoRouting() {
    this._hotPotatoRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotPotatoRoutingInput() {
    return this._hotPotatoRouting.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing scm_bgp_routing}
*/
export class BgpRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpRouting to import
  * @param importFromId The id of the existing BgpRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_routing scm_bgp_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpRoutingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BgpRoutingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_routing',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptRouteOverSc = config.acceptRouteOverSc;
    this._addHostRouteToIkePeer = config.addHostRouteToIkePeer;
    this._backboneRouting = config.backboneRouting;
    this._outboundRoutesForServices = config.outboundRoutesForServices;
    this._routingPreference.internalValue = config.routingPreference;
    this._withdrawStaticRoute = config.withdrawStaticRoute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_route_over_sc - computed: false, optional: true, required: false
  private _acceptRouteOverSc?: boolean | cdktf.IResolvable; 
  public get acceptRouteOverSc() {
    return this.getBooleanAttribute('accept_route_over_sc');
  }
  public set acceptRouteOverSc(value: boolean | cdktf.IResolvable) {
    this._acceptRouteOverSc = value;
  }
  public resetAcceptRouteOverSc() {
    this._acceptRouteOverSc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRouteOverScInput() {
    return this._acceptRouteOverSc;
  }

  // add_host_route_to_ike_peer - computed: false, optional: true, required: false
  private _addHostRouteToIkePeer?: boolean | cdktf.IResolvable; 
  public get addHostRouteToIkePeer() {
    return this.getBooleanAttribute('add_host_route_to_ike_peer');
  }
  public set addHostRouteToIkePeer(value: boolean | cdktf.IResolvable) {
    this._addHostRouteToIkePeer = value;
  }
  public resetAddHostRouteToIkePeer() {
    this._addHostRouteToIkePeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHostRouteToIkePeerInput() {
    return this._addHostRouteToIkePeer;
  }

  // backbone_routing - computed: false, optional: true, required: false
  private _backboneRouting?: string; 
  public get backboneRouting() {
    return this.getStringAttribute('backbone_routing');
  }
  public set backboneRouting(value: string) {
    this._backboneRouting = value;
  }
  public resetBackboneRouting() {
    this._backboneRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backboneRoutingInput() {
    return this._backboneRouting;
  }

  // outbound_routes_for_services - computed: false, optional: true, required: false
  private _outboundRoutesForServices?: string[]; 
  public get outboundRoutesForServices() {
    return this.getListAttribute('outbound_routes_for_services');
  }
  public set outboundRoutesForServices(value: string[]) {
    this._outboundRoutesForServices = value;
  }
  public resetOutboundRoutesForServices() {
    this._outboundRoutesForServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundRoutesForServicesInput() {
    return this._outboundRoutesForServices;
  }

  // routing_preference - computed: false, optional: true, required: false
  private _routingPreference = new BgpRoutingRoutingPreferenceOutputReference(this, "routing_preference");
  public get routingPreference() {
    return this._routingPreference;
  }
  public putRoutingPreference(value: BgpRoutingRoutingPreference) {
    this._routingPreference.internalValue = value;
  }
  public resetRoutingPreference() {
    this._routingPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPreferenceInput() {
    return this._routingPreference.internalValue;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // withdraw_static_route - computed: false, optional: true, required: false
  private _withdrawStaticRoute?: boolean | cdktf.IResolvable; 
  public get withdrawStaticRoute() {
    return this.getBooleanAttribute('withdraw_static_route');
  }
  public set withdrawStaticRoute(value: boolean | cdktf.IResolvable) {
    this._withdrawStaticRoute = value;
  }
  public resetWithdrawStaticRoute() {
    this._withdrawStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withdrawStaticRouteInput() {
    return this._withdrawStaticRoute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_route_over_sc: cdktf.booleanToTerraform(this._acceptRouteOverSc),
      add_host_route_to_ike_peer: cdktf.booleanToTerraform(this._addHostRouteToIkePeer),
      backbone_routing: cdktf.stringToTerraform(this._backboneRouting),
      outbound_routes_for_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outboundRoutesForServices),
      routing_preference: bgpRoutingRoutingPreferenceToTerraform(this._routingPreference.internalValue),
      withdraw_static_route: cdktf.booleanToTerraform(this._withdrawStaticRoute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_route_over_sc: {
        value: cdktf.booleanToHclTerraform(this._acceptRouteOverSc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      add_host_route_to_ike_peer: {
        value: cdktf.booleanToHclTerraform(this._addHostRouteToIkePeer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backbone_routing: {
        value: cdktf.stringToHclTerraform(this._backboneRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_routes_for_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outboundRoutesForServices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      routing_preference: {
        value: bgpRoutingRoutingPreferenceToHclTerraform(this._routingPreference.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpRoutingRoutingPreference",
      },
      withdraw_static_route: {
        value: cdktf.booleanToHclTerraform(this._withdrawStaticRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
