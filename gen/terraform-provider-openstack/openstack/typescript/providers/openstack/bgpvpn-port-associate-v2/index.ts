// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpvpnPortAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#advertise_fixed_ips BgpvpnPortAssociateV2#advertise_fixed_ips}
  */
  readonly advertiseFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#bgpvpn_id BgpvpnPortAssociateV2#bgpvpn_id}
  */
  readonly bgpvpnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#id BgpvpnPortAssociateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#port_id BgpvpnPortAssociateV2#port_id}
  */
  readonly portId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#project_id BgpvpnPortAssociateV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#region BgpvpnPortAssociateV2#region}
  */
  readonly region?: string;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#routes BgpvpnPortAssociateV2#routes}
  */
  readonly routes?: BgpvpnPortAssociateV2Routes[] | cdktf.IResolvable;
}
export interface BgpvpnPortAssociateV2Routes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#bgpvpn_id BgpvpnPortAssociateV2#bgpvpn_id}
  */
  readonly bgpvpnId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#local_pref BgpvpnPortAssociateV2#local_pref}
  */
  readonly localPref?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#prefix BgpvpnPortAssociateV2#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#type BgpvpnPortAssociateV2#type}
  */
  readonly type: string;
}

export function bgpvpnPortAssociateV2RoutesToTerraform(struct?: BgpvpnPortAssociateV2Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgpvpn_id: cdktf.stringToTerraform(struct!.bgpvpnId),
    local_pref: cdktf.numberToTerraform(struct!.localPref),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function bgpvpnPortAssociateV2RoutesToHclTerraform(struct?: BgpvpnPortAssociateV2Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgpvpn_id: {
      value: cdktf.stringToHclTerraform(struct!.bgpvpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_pref: {
      value: cdktf.numberToHclTerraform(struct!.localPref),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpvpnPortAssociateV2RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpvpnPortAssociateV2Routes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpvpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpvpnId = this._bgpvpnId;
    }
    if (this._localPref !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPref = this._localPref;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpvpnPortAssociateV2Routes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpvpnId = undefined;
      this._localPref = undefined;
      this._prefix = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpvpnId = value.bgpvpnId;
      this._localPref = value.localPref;
      this._prefix = value.prefix;
      this._type = value.type;
    }
  }

  // bgpvpn_id - computed: false, optional: true, required: false
  private _bgpvpnId?: string; 
  public get bgpvpnId() {
    return this.getStringAttribute('bgpvpn_id');
  }
  public set bgpvpnId(value: string) {
    this._bgpvpnId = value;
  }
  public resetBgpvpnId() {
    this._bgpvpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpvpnIdInput() {
    return this._bgpvpnId;
  }

  // local_pref - computed: false, optional: true, required: false
  private _localPref?: number; 
  public get localPref() {
    return this.getNumberAttribute('local_pref');
  }
  public set localPref(value: number) {
    this._localPref = value;
  }
  public resetLocalPref() {
    this._localPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPrefInput() {
    return this._localPref;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BgpvpnPortAssociateV2RoutesList extends cdktf.ComplexList {
  public internalValue? : BgpvpnPortAssociateV2Routes[] | cdktf.IResolvable

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
  public get(index: number): BgpvpnPortAssociateV2RoutesOutputReference {
    return new BgpvpnPortAssociateV2RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2 openstack_bgpvpn_port_associate_v2}
*/
export class BgpvpnPortAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_bgpvpn_port_associate_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpvpnPortAssociateV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpvpnPortAssociateV2 to import
  * @param importFromId The id of the existing BgpvpnPortAssociateV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpvpnPortAssociateV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_bgpvpn_port_associate_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_port_associate_v2 openstack_bgpvpn_port_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpvpnPortAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: BgpvpnPortAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_bgpvpn_port_associate_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseFixedIps = config.advertiseFixedIps;
    this._bgpvpnId = config.bgpvpnId;
    this._id = config.id;
    this._portId = config.portId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._routes.internalValue = config.routes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_fixed_ips - computed: true, optional: true, required: false
  private _advertiseFixedIps?: boolean | cdktf.IResolvable; 
  public get advertiseFixedIps() {
    return this.getBooleanAttribute('advertise_fixed_ips');
  }
  public set advertiseFixedIps(value: boolean | cdktf.IResolvable) {
    this._advertiseFixedIps = value;
  }
  public resetAdvertiseFixedIps() {
    this._advertiseFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseFixedIpsInput() {
    return this._advertiseFixedIps;
  }

  // bgpvpn_id - computed: false, optional: false, required: true
  private _bgpvpnId?: string; 
  public get bgpvpnId() {
    return this.getStringAttribute('bgpvpn_id');
  }
  public set bgpvpnId(value: string) {
    this._bgpvpnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpvpnIdInput() {
    return this._bgpvpnId;
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

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new BgpvpnPortAssociateV2RoutesList(this, "routes", true);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: BgpvpnPortAssociateV2Routes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_fixed_ips: cdktf.booleanToTerraform(this._advertiseFixedIps),
      bgpvpn_id: cdktf.stringToTerraform(this._bgpvpnId),
      id: cdktf.stringToTerraform(this._id),
      port_id: cdktf.stringToTerraform(this._portId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      routes: cdktf.listMapper(bgpvpnPortAssociateV2RoutesToTerraform, true)(this._routes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._advertiseFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgpvpn_id: {
        value: cdktf.stringToHclTerraform(this._bgpvpnId),
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
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.listMapperHcl(bgpvpnPortAssociateV2RoutesToHclTerraform, true)(this._routes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BgpvpnPortAssociateV2RoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
