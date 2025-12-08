// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingBgpVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#___path___ RoutingBgpVpn#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#disabled RoutingBgpVpn#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#id RoutingBgpVpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the instance this VPN is assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#instance RoutingBgpVpn#instance}
  */
  readonly instance?: string;
  /**
  * Label allocationpolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#label_allocation_policy RoutingBgpVpn#label_allocation_policy}
  */
  readonly labelAllocationPolicy?: string;
  /**
  * VPN instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#name RoutingBgpVpn#name}
  */
  readonly name: string;
  /**
  * Helps to distinguish between overlapping routes from multiple VRFs. Should be unique per VRF. Accepts 3 types of formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#route_distinguisher RoutingBgpVpn#route_distinguisher}
  */
  readonly routeDistinguisher: string;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#vrf RoutingBgpVpn#vrf}
  */
  readonly vrf?: string;
  /**
  * export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#export RoutingBgpVpn#export}
  */
  readonly export?: RoutingBgpVpnExport;
  /**
  * import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#import RoutingBgpVpn#import}
  */
  readonly import?: RoutingBgpVpnImport;
}
export interface RoutingBgpVpnExport {
  /**
  * The name of the routing filter chain that is used to filter prefixes before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#filter_chain RoutingBgpVpn#filter_chain}
  */
  readonly filterChain?: string;
  /**
  * The name of the select filter chain that is used to select prefixes to be exported exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#filter_select RoutingBgpVpn#filter_select}
  */
  readonly filterSelect?: string;
  /**
  * Enable redistribution of specified route types from VRF to VPNv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#redistribute RoutingBgpVpn#redistribute}
  */
  readonly redistribute?: string;
  /**
  * List of route targets added when exporting VPNv4 routes. The accepted RT format is similar to the one for Route Distinguishers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#route_targets RoutingBgpVpn#route_targets}
  */
  readonly routeTargets?: string[];
}

export function routingBgpVpnExportToTerraform(struct?: RoutingBgpVpnExportOutputReference | RoutingBgpVpnExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_chain: cdktf.stringToTerraform(struct!.filterChain),
    filter_select: cdktf.stringToTerraform(struct!.filterSelect),
    redistribute: cdktf.stringToTerraform(struct!.redistribute),
    route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTargets),
  }
}


export function routingBgpVpnExportToHclTerraform(struct?: RoutingBgpVpnExportOutputReference | RoutingBgpVpnExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_chain: {
      value: cdktf.stringToHclTerraform(struct!.filterChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_select: {
      value: cdktf.stringToHclTerraform(struct!.filterSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redistribute: {
      value: cdktf.stringToHclTerraform(struct!.redistribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeTargets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingBgpVpnExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpVpnExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterChain = this._filterChain;
    }
    if (this._filterSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSelect = this._filterSelect;
    }
    if (this._redistribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistribute = this._redistribute;
    }
    if (this._routeTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargets = this._routeTargets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpVpnExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterChain = undefined;
      this._filterSelect = undefined;
      this._redistribute = undefined;
      this._routeTargets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterChain = value.filterChain;
      this._filterSelect = value.filterSelect;
      this._redistribute = value.redistribute;
      this._routeTargets = value.routeTargets;
    }
  }

  // filter_chain - computed: false, optional: true, required: false
  private _filterChain?: string; 
  public get filterChain() {
    return this.getStringAttribute('filter_chain');
  }
  public set filterChain(value: string) {
    this._filterChain = value;
  }
  public resetFilterChain() {
    this._filterChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterChainInput() {
    return this._filterChain;
  }

  // filter_select - computed: false, optional: true, required: false
  private _filterSelect?: string; 
  public get filterSelect() {
    return this.getStringAttribute('filter_select');
  }
  public set filterSelect(value: string) {
    this._filterSelect = value;
  }
  public resetFilterSelect() {
    this._filterSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSelectInput() {
    return this._filterSelect;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute?: string; 
  public get redistribute() {
    return this.getStringAttribute('redistribute');
  }
  public set redistribute(value: string) {
    this._redistribute = value;
  }
  public resetRedistribute() {
    this._redistribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute;
  }

  // route_targets - computed: false, optional: true, required: false
  private _routeTargets?: string[]; 
  public get routeTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('route_targets'));
  }
  public set routeTargets(value: string[]) {
    this._routeTargets = value;
  }
  public resetRouteTargets() {
    this._routeTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetsInput() {
    return this._routeTargets;
  }
}
export interface RoutingBgpVpnImport {
  /**
  * The name of the routing filter chain that is used to filter prefixes during import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#filter_chain RoutingBgpVpn#filter_chain}
  */
  readonly filterChain?: string;
  /**
  * List of route targets that will be used to import VPNv4 routes. The accepted RT format is similar to the one for Route Distinguishers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#route_targets RoutingBgpVpn#route_targets}
  */
  readonly routeTargets?: string[];
  /**
  * The router ID of the BGP instance that will be used for the BGP best path selection algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#router_id RoutingBgpVpn#router_id}
  */
  readonly routerId?: string;
}

export function routingBgpVpnImportToTerraform(struct?: RoutingBgpVpnImportOutputReference | RoutingBgpVpnImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_chain: cdktf.stringToTerraform(struct!.filterChain),
    route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTargets),
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function routingBgpVpnImportToHclTerraform(struct?: RoutingBgpVpnImportOutputReference | RoutingBgpVpnImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_chain: {
      value: cdktf.stringToHclTerraform(struct!.filterChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeTargets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingBgpVpnImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpVpnImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterChain = this._filterChain;
    }
    if (this._routeTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargets = this._routeTargets;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpVpnImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterChain = undefined;
      this._routeTargets = undefined;
      this._routerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterChain = value.filterChain;
      this._routeTargets = value.routeTargets;
      this._routerId = value.routerId;
    }
  }

  // filter_chain - computed: false, optional: true, required: false
  private _filterChain?: string; 
  public get filterChain() {
    return this.getStringAttribute('filter_chain');
  }
  public set filterChain(value: string) {
    this._filterChain = value;
  }
  public resetFilterChain() {
    this._filterChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterChainInput() {
    return this._filterChain;
  }

  // route_targets - computed: false, optional: true, required: false
  private _routeTargets?: string[]; 
  public get routeTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('route_targets'));
  }
  public set routeTargets(value: string[]) {
    this._routeTargets = value;
  }
  public resetRouteTargets() {
    this._routeTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetsInput() {
    return this._routeTargets;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn routeros_routing_bgp_vpn}
*/
export class RoutingBgpVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_bgp_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingBgpVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingBgpVpn to import
  * @param importFromId The id of the existing RoutingBgpVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingBgpVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_bgp_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_vpn routeros_routing_bgp_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingBgpVpnConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingBgpVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_bgp_vpn',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._disabled = config.disabled;
    this._id = config.id;
    this._instance = config.instance;
    this._labelAllocationPolicy = config.labelAllocationPolicy;
    this._name = config.name;
    this._routeDistinguisher = config.routeDistinguisher;
    this._vrf = config.vrf;
    this._export.internalValue = config.export;
    this._import.internalValue = config.import;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // label_allocation_policy - computed: false, optional: true, required: false
  private _labelAllocationPolicy?: string; 
  public get labelAllocationPolicy() {
    return this.getStringAttribute('label_allocation_policy');
  }
  public set labelAllocationPolicy(value: string) {
    this._labelAllocationPolicy = value;
  }
  public resetLabelAllocationPolicy() {
    this._labelAllocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelAllocationPolicyInput() {
    return this._labelAllocationPolicy;
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

  // route_distinguisher - computed: false, optional: false, required: true
  private _routeDistinguisher?: string; 
  public get routeDistinguisher() {
    return this.getStringAttribute('route_distinguisher');
  }
  public set routeDistinguisher(value: string) {
    this._routeDistinguisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDistinguisherInput() {
    return this._routeDistinguisher;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // export - computed: false, optional: true, required: false
  private _export = new RoutingBgpVpnExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }
  public putExport(value: RoutingBgpVpnExport) {
    this._export.internalValue = value;
  }
  public resetExport() {
    this._export.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }

  // import - computed: false, optional: true, required: false
  private _import = new RoutingBgpVpnImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
  public putImport(value: RoutingBgpVpnImport) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      label_allocation_policy: cdktf.stringToTerraform(this._labelAllocationPolicy),
      name: cdktf.stringToTerraform(this._name),
      route_distinguisher: cdktf.stringToTerraform(this._routeDistinguisher),
      vrf: cdktf.stringToTerraform(this._vrf),
      export: routingBgpVpnExportToTerraform(this._export.internalValue),
      import: routingBgpVpnImportToTerraform(this._import.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_allocation_policy: {
        value: cdktf.stringToHclTerraform(this._labelAllocationPolicy),
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
      route_distinguisher: {
        value: cdktf.stringToHclTerraform(this._routeDistinguisher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export: {
        value: routingBgpVpnExportToHclTerraform(this._export.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpVpnExportList",
      },
      import: {
        value: routingBgpVpnImportToHclTerraform(this._import.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpVpnImportList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
