// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingBgpEvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#___path___ RoutingBgpEvpn#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#comment RoutingBgpEvpn#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#disabled RoutingBgpEvpn#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#id RoutingBgpEvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * BGP instance this EVPN is assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#instance RoutingBgpEvpn#instance}
  */
  readonly instance: string;
  /**
  * Name of the entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#name RoutingBgpEvpn#name}
  */
  readonly name: string;
  /**
  * Specifies the value that gets attached to route so that receiving routers can distinguish advertisements that may otherwise look the same. Used to distinguish between tenants using overlapping IP ranges. Also can be used to simplify convergence and redundancy within Virtual Network. RDs form MLAG pairs should be unique, too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#rd RoutingBgpEvpn#rd}
  */
  readonly rd?: string;
  /**
  * Range of Virtual Network Identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#vni RoutingBgpEvpn#vni}
  */
  readonly vni?: number;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#vrf RoutingBgpEvpn#vrf}
  */
  readonly vrf?: string;
  /**
  * export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#export RoutingBgpEvpn#export}
  */
  readonly export?: RoutingBgpEvpnExport;
  /**
  * import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#import RoutingBgpEvpn#import}
  */
  readonly import?: RoutingBgpEvpnImport;
}
export interface RoutingBgpEvpnExport {
  /**
  * List of route targets that will be added to EVPN routes when exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#route_targets RoutingBgpEvpn#route_targets}
  */
  readonly routeTargets?: string[];
}

export function routingBgpEvpnExportToTerraform(struct?: RoutingBgpEvpnExportOutputReference | RoutingBgpEvpnExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTargets),
  }
}


export function routingBgpEvpnExportToHclTerraform(struct?: RoutingBgpEvpnExportOutputReference | RoutingBgpEvpnExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class RoutingBgpEvpnExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpEvpnExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargets = this._routeTargets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpEvpnExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeTargets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeTargets = value.routeTargets;
    }
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
export interface RoutingBgpEvpnImport {
  /**
  * List of route targets that will be used to import EVPN routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#route_targets RoutingBgpEvpn#route_targets}
  */
  readonly routeTargets?: string[];
}

export function routingBgpEvpnImportToTerraform(struct?: RoutingBgpEvpnImportOutputReference | RoutingBgpEvpnImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTargets),
  }
}


export function routingBgpEvpnImportToHclTerraform(struct?: RoutingBgpEvpnImportOutputReference | RoutingBgpEvpnImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class RoutingBgpEvpnImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpEvpnImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargets = this._routeTargets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpEvpnImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeTargets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeTargets = value.routeTargets;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn routeros_routing_bgp_evpn}
*/
export class RoutingBgpEvpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_bgp_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingBgpEvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingBgpEvpn to import
  * @param importFromId The id of the existing RoutingBgpEvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingBgpEvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_bgp_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_bgp_evpn routeros_routing_bgp_evpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingBgpEvpnConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingBgpEvpnConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_bgp_evpn',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
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
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._instance = config.instance;
    this._name = config.name;
    this._rd = config.rd;
    this._vni = config.vni;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // rd - computed: false, optional: true, required: false
  private _rd?: string; 
  public get rd() {
    return this.getStringAttribute('rd');
  }
  public set rd(value: string) {
    this._rd = value;
  }
  public resetRd() {
    this._rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdInput() {
    return this._rd;
  }

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
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
  private _export = new RoutingBgpEvpnExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }
  public putExport(value: RoutingBgpEvpnExport) {
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
  private _import = new RoutingBgpEvpnImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
  public putImport(value: RoutingBgpEvpnImport) {
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
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      rd: cdktf.stringToTerraform(this._rd),
      vni: cdktf.numberToTerraform(this._vni),
      vrf: cdktf.stringToTerraform(this._vrf),
      export: routingBgpEvpnExportToTerraform(this._export.internalValue),
      import: routingBgpEvpnImportToTerraform(this._import.internalValue),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd: {
        value: cdktf.stringToHclTerraform(this._rd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export: {
        value: routingBgpEvpnExportToHclTerraform(this._export.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpEvpnExportList",
      },
      import: {
        value: routingBgpEvpnImportToHclTerraform(this._import.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpEvpnImportList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
