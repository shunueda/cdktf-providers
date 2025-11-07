// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticIPv4RouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#device_id StaticIPv4Route#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#id StaticIPv4Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#interface_name StaticIPv4Route#interface_name}
  */
  readonly interfaceName: string;
  /**
  * If the route is tunneled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#is_tunneled StaticIPv4Route#is_tunneled}
  */
  readonly isTunneled?: boolean | cdktf.IResolvable;
  /**
  * The metric value to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#metric_value StaticIPv4Route#metric_value}
  */
  readonly metricValue: number;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#gateway StaticIPv4Route#gateway}
  */
  readonly gateway: StaticIPv4RouteGateway;
  /**
  * route_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#route_tracking StaticIPv4Route#route_tracking}
  */
  readonly routeTracking?: StaticIPv4RouteRouteTracking;
  /**
  * selected_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#selected_networks StaticIPv4Route#selected_networks}
  */
  readonly selectedNetworks: StaticIPv4RouteSelectedNetworks;
}
export interface StaticIPv4RouteGatewayObject {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#id StaticIPv4Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#name StaticIPv4Route#name}
  */
  readonly name?: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#type StaticIPv4Route#type}
  */
  readonly type?: string;
}

export function staticIPv4RouteGatewayObjectToTerraform(struct?: StaticIPv4RouteGatewayObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function staticIPv4RouteGatewayObjectToHclTerraform(struct?: StaticIPv4RouteGatewayObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class StaticIPv4RouteGatewayObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticIPv4RouteGatewayObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticIPv4RouteGatewayObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class StaticIPv4RouteGatewayObjectList extends cdktf.ComplexList {
  public internalValue? : StaticIPv4RouteGatewayObject[] | cdktf.IResolvable

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
  public get(index: number): StaticIPv4RouteGatewayObjectOutputReference {
    return new StaticIPv4RouteGatewayObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticIPv4RouteGateway {
  /**
  * object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#object StaticIPv4Route#object}
  */
  readonly object: StaticIPv4RouteGatewayObject[] | cdktf.IResolvable;
}

export function staticIPv4RouteGatewayToTerraform(struct?: StaticIPv4RouteGatewayOutputReference | StaticIPv4RouteGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.listMapper(staticIPv4RouteGatewayObjectToTerraform, true)(struct!.object),
  }
}


export function staticIPv4RouteGatewayToHclTerraform(struct?: StaticIPv4RouteGatewayOutputReference | StaticIPv4RouteGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.listMapperHcl(staticIPv4RouteGatewayObjectToHclTerraform, true)(struct!.object),
      isBlock: true,
      type: "list",
      storageClassType: "StaticIPv4RouteGatewayObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticIPv4RouteGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StaticIPv4RouteGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticIPv4RouteGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object.internalValue = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object = new StaticIPv4RouteGatewayObjectList(this, "object", false);
  public get object() {
    return this._object;
  }
  public putObject(value: StaticIPv4RouteGatewayObject[] | cdktf.IResolvable) {
    this._object.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }
}
export interface StaticIPv4RouteRouteTracking {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#id StaticIPv4Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#name StaticIPv4Route#name}
  */
  readonly name: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#type StaticIPv4Route#type}
  */
  readonly type: string;
}

export function staticIPv4RouteRouteTrackingToTerraform(struct?: StaticIPv4RouteRouteTrackingOutputReference | StaticIPv4RouteRouteTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function staticIPv4RouteRouteTrackingToHclTerraform(struct?: StaticIPv4RouteRouteTrackingOutputReference | StaticIPv4RouteRouteTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class StaticIPv4RouteRouteTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StaticIPv4RouteRouteTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticIPv4RouteRouteTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface StaticIPv4RouteSelectedNetworks {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#id StaticIPv4Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#name StaticIPv4Route#name}
  */
  readonly name?: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#type StaticIPv4Route#type}
  */
  readonly type?: string;
}

export function staticIPv4RouteSelectedNetworksToTerraform(struct?: StaticIPv4RouteSelectedNetworksOutputReference | StaticIPv4RouteSelectedNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function staticIPv4RouteSelectedNetworksToHclTerraform(struct?: StaticIPv4RouteSelectedNetworksOutputReference | StaticIPv4RouteSelectedNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class StaticIPv4RouteSelectedNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StaticIPv4RouteSelectedNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticIPv4RouteSelectedNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route fmc_staticIPv4_route}
*/
export class StaticIPv4Route extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_staticIPv4_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticIPv4Route resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticIPv4Route to import
  * @param importFromId The id of the existing StaticIPv4Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticIPv4Route to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_staticIPv4_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/static_i_pv4_route fmc_staticIPv4_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticIPv4RouteConfig
  */
  public constructor(scope: Construct, id: string, config: StaticIPv4RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_staticIPv4_route',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._id = config.id;
    this._interfaceName = config.interfaceName;
    this._isTunneled = config.isTunneled;
    this._metricValue = config.metricValue;
    this._gateway.internalValue = config.gateway;
    this._routeTracking.internalValue = config.routeTracking;
    this._selectedNetworks.internalValue = config.selectedNetworks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // is_tunneled - computed: false, optional: true, required: false
  private _isTunneled?: boolean | cdktf.IResolvable; 
  public get isTunneled() {
    return this.getBooleanAttribute('is_tunneled');
  }
  public set isTunneled(value: boolean | cdktf.IResolvable) {
    this._isTunneled = value;
  }
  public resetIsTunneled() {
    this._isTunneled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTunneledInput() {
    return this._isTunneled;
  }

  // metric_value - computed: false, optional: false, required: true
  private _metricValue?: number; 
  public get metricValue() {
    return this.getNumberAttribute('metric_value');
  }
  public set metricValue(value: number) {
    this._metricValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new StaticIPv4RouteGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: StaticIPv4RouteGateway) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // route_tracking - computed: false, optional: true, required: false
  private _routeTracking = new StaticIPv4RouteRouteTrackingOutputReference(this, "route_tracking");
  public get routeTracking() {
    return this._routeTracking;
  }
  public putRouteTracking(value: StaticIPv4RouteRouteTracking) {
    this._routeTracking.internalValue = value;
  }
  public resetRouteTracking() {
    this._routeTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTrackingInput() {
    return this._routeTracking.internalValue;
  }

  // selected_networks - computed: false, optional: false, required: true
  private _selectedNetworks = new StaticIPv4RouteSelectedNetworksOutputReference(this, "selected_networks");
  public get selectedNetworks() {
    return this._selectedNetworks;
  }
  public putSelectedNetworks(value: StaticIPv4RouteSelectedNetworks) {
    this._selectedNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedNetworksInput() {
    return this._selectedNetworks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      is_tunneled: cdktf.booleanToTerraform(this._isTunneled),
      metric_value: cdktf.numberToTerraform(this._metricValue),
      gateway: staticIPv4RouteGatewayToTerraform(this._gateway.internalValue),
      route_tracking: staticIPv4RouteRouteTrackingToTerraform(this._routeTracking.internalValue),
      selected_networks: staticIPv4RouteSelectedNetworksToTerraform(this._selectedNetworks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_tunneled: {
        value: cdktf.booleanToHclTerraform(this._isTunneled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_value: {
        value: cdktf.numberToHclTerraform(this._metricValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway: {
        value: staticIPv4RouteGatewayToHclTerraform(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StaticIPv4RouteGatewayList",
      },
      route_tracking: {
        value: staticIPv4RouteRouteTrackingToHclTerraform(this._routeTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StaticIPv4RouteRouteTrackingList",
      },
      selected_networks: {
        value: staticIPv4RouteSelectedNetworksToHclTerraform(this._selectedNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StaticIPv4RouteSelectedNetworksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
