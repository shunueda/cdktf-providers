// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#api_version StaticRoutes#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#id StaticRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#vpc_name StaticRoutes#vpc_name}
  */
  readonly vpcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#vpc_uuid StaticRoutes#vpc_uuid}
  */
  readonly vpcUuid?: string;
  /**
  * default_route_nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#default_route_nexthop StaticRoutes#default_route_nexthop}
  */
  readonly defaultRouteNexthop?: StaticRoutesDefaultRouteNexthop[] | cdktf.IResolvable;
  /**
  * static_routes_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#static_routes_list StaticRoutes#static_routes_list}
  */
  readonly staticRoutesList?: StaticRoutesStaticRoutesListStruct[] | cdktf.IResolvable;
}
export interface StaticRoutesDefaultRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#external_subnet_reference_uuid StaticRoutes#external_subnet_reference_uuid}
  */
  readonly externalSubnetReferenceUuid?: string;
}

export function staticRoutesDefaultRouteNexthopToTerraform(struct?: StaticRoutesDefaultRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_subnet_reference_uuid: cdktf.stringToTerraform(struct!.externalSubnetReferenceUuid),
  }
}


export function staticRoutesDefaultRouteNexthopToHclTerraform(struct?: StaticRoutesDefaultRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_subnet_reference_uuid: {
      value: cdktf.stringToHclTerraform(struct!.externalSubnetReferenceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticRoutesDefaultRouteNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticRoutesDefaultRouteNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalSubnetReferenceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSubnetReferenceUuid = this._externalSubnetReferenceUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticRoutesDefaultRouteNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalSubnetReferenceUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalSubnetReferenceUuid = value.externalSubnetReferenceUuid;
    }
  }

  // external_subnet_reference_uuid - computed: false, optional: true, required: false
  private _externalSubnetReferenceUuid?: string; 
  public get externalSubnetReferenceUuid() {
    return this.getStringAttribute('external_subnet_reference_uuid');
  }
  public set externalSubnetReferenceUuid(value: string) {
    this._externalSubnetReferenceUuid = value;
  }
  public resetExternalSubnetReferenceUuid() {
    this._externalSubnetReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetReferenceUuidInput() {
    return this._externalSubnetReferenceUuid;
  }
}

export class StaticRoutesDefaultRouteNexthopList extends cdktf.ComplexList {
  public internalValue? : StaticRoutesDefaultRouteNexthop[] | cdktf.IResolvable

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
  public get(index: number): StaticRoutesDefaultRouteNexthopOutputReference {
    return new StaticRoutesDefaultRouteNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticRoutesStaticRoutesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#destination StaticRoutes#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#external_subnet_reference_uuid StaticRoutes#external_subnet_reference_uuid}
  */
  readonly externalSubnetReferenceUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#vpn_connection_reference_uuid StaticRoutes#vpn_connection_reference_uuid}
  */
  readonly vpnConnectionReferenceUuid?: string;
}

export function staticRoutesStaticRoutesListStructToTerraform(struct?: StaticRoutesStaticRoutesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    external_subnet_reference_uuid: cdktf.stringToTerraform(struct!.externalSubnetReferenceUuid),
    vpn_connection_reference_uuid: cdktf.stringToTerraform(struct!.vpnConnectionReferenceUuid),
  }
}


export function staticRoutesStaticRoutesListStructToHclTerraform(struct?: StaticRoutesStaticRoutesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_subnet_reference_uuid: {
      value: cdktf.stringToHclTerraform(struct!.externalSubnetReferenceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_connection_reference_uuid: {
      value: cdktf.stringToHclTerraform(struct!.vpnConnectionReferenceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticRoutesStaticRoutesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticRoutesStaticRoutesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._externalSubnetReferenceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSubnetReferenceUuid = this._externalSubnetReferenceUuid;
    }
    if (this._vpnConnectionReferenceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnConnectionReferenceUuid = this._vpnConnectionReferenceUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticRoutesStaticRoutesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._externalSubnetReferenceUuid = undefined;
      this._vpnConnectionReferenceUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._externalSubnetReferenceUuid = value.externalSubnetReferenceUuid;
      this._vpnConnectionReferenceUuid = value.vpnConnectionReferenceUuid;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // external_subnet_reference_uuid - computed: false, optional: true, required: false
  private _externalSubnetReferenceUuid?: string; 
  public get externalSubnetReferenceUuid() {
    return this.getStringAttribute('external_subnet_reference_uuid');
  }
  public set externalSubnetReferenceUuid(value: string) {
    this._externalSubnetReferenceUuid = value;
  }
  public resetExternalSubnetReferenceUuid() {
    this._externalSubnetReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetReferenceUuidInput() {
    return this._externalSubnetReferenceUuid;
  }

  // vpn_connection_reference_uuid - computed: false, optional: true, required: false
  private _vpnConnectionReferenceUuid?: string; 
  public get vpnConnectionReferenceUuid() {
    return this.getStringAttribute('vpn_connection_reference_uuid');
  }
  public set vpnConnectionReferenceUuid(value: string) {
    this._vpnConnectionReferenceUuid = value;
  }
  public resetVpnConnectionReferenceUuid() {
    this._vpnConnectionReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionReferenceUuidInput() {
    return this._vpnConnectionReferenceUuid;
  }
}

export class StaticRoutesStaticRoutesListStructList extends cdktf.ComplexList {
  public internalValue? : StaticRoutesStaticRoutesListStruct[] | cdktf.IResolvable

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
  public get(index: number): StaticRoutesStaticRoutesListStructOutputReference {
    return new StaticRoutesStaticRoutesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes nutanix_static_routes}
*/
export class StaticRoutes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_static_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticRoutes to import
  * @param importFromId The id of the existing StaticRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_static_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/static_routes nutanix_static_routes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticRoutesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StaticRoutesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_static_routes',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._id = config.id;
    this._vpcName = config.vpcName;
    this._vpcUuid = config.vpcUuid;
    this._defaultRouteNexthop.internalValue = config.defaultRouteNexthop;
    this._staticRoutesList.internalValue = config.staticRoutesList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // vpc_name - computed: false, optional: true, required: false
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  public resetVpcName() {
    this._vpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // vpc_uuid - computed: true, optional: true, required: false
  private _vpcUuid?: string; 
  public get vpcUuid() {
    return this.getStringAttribute('vpc_uuid');
  }
  public set vpcUuid(value: string) {
    this._vpcUuid = value;
  }
  public resetVpcUuid() {
    this._vpcUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUuidInput() {
    return this._vpcUuid;
  }

  // default_route_nexthop - computed: false, optional: true, required: false
  private _defaultRouteNexthop = new StaticRoutesDefaultRouteNexthopList(this, "default_route_nexthop", false);
  public get defaultRouteNexthop() {
    return this._defaultRouteNexthop;
  }
  public putDefaultRouteNexthop(value: StaticRoutesDefaultRouteNexthop[] | cdktf.IResolvable) {
    this._defaultRouteNexthop.internalValue = value;
  }
  public resetDefaultRouteNexthop() {
    this._defaultRouteNexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteNexthopInput() {
    return this._defaultRouteNexthop.internalValue;
  }

  // static_routes_list - computed: false, optional: true, required: false
  private _staticRoutesList = new StaticRoutesStaticRoutesListStructList(this, "static_routes_list", false);
  public get staticRoutesList() {
    return this._staticRoutesList;
  }
  public putStaticRoutesList(value: StaticRoutesStaticRoutesListStruct[] | cdktf.IResolvable) {
    this._staticRoutesList.internalValue = value;
  }
  public resetStaticRoutesList() {
    this._staticRoutesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesListInput() {
    return this._staticRoutesList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_version: cdktf.stringToTerraform(this._apiVersion),
      id: cdktf.stringToTerraform(this._id),
      vpc_name: cdktf.stringToTerraform(this._vpcName),
      vpc_uuid: cdktf.stringToTerraform(this._vpcUuid),
      default_route_nexthop: cdktf.listMapper(staticRoutesDefaultRouteNexthopToTerraform, true)(this._defaultRouteNexthop.internalValue),
      static_routes_list: cdktf.listMapper(staticRoutesStaticRoutesListStructToTerraform, true)(this._staticRoutesList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
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
      vpc_name: {
        value: cdktf.stringToHclTerraform(this._vpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_uuid: {
        value: cdktf.stringToHclTerraform(this._vpcUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route_nexthop: {
        value: cdktf.listMapperHcl(staticRoutesDefaultRouteNexthopToHclTerraform, true)(this._defaultRouteNexthop.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StaticRoutesDefaultRouteNexthopList",
      },
      static_routes_list: {
        value: cdktf.listMapperHcl(staticRoutesStaticRoutesListStructToHclTerraform, true)(this._staticRoutesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StaticRoutesStaticRoutesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
