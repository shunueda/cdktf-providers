// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutePeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#attached_fabric RoutePeering#attached_fabric}
  */
  readonly attachedFabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#deploy RoutePeering#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#deploy_timeout RoutePeering#deploy_timeout}
  */
  readonly deployTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#deployment_mode RoutePeering#deployment_mode}
  */
  readonly deploymentMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#id RoutePeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#name RoutePeering#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#next_hop_ip RoutePeering#next_hop_ip}
  */
  readonly nextHopIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#option RoutePeering#option}
  */
  readonly option: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#reverse_next_hop_ip RoutePeering#reverse_next_hop_ip}
  */
  readonly reverseNextHopIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#service_fabric RoutePeering#service_fabric}
  */
  readonly serviceFabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#service_node_name RoutePeering#service_node_name}
  */
  readonly serviceNodeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#service_node_type RoutePeering#service_node_type}
  */
  readonly serviceNodeType: string;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#routes RoutePeering#routes}
  */
  readonly routes?: RoutePeeringRoutes[] | cdktf.IResolvable;
  /**
  * service_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#service_networks RoutePeering#service_networks}
  */
  readonly serviceNetworks: RoutePeeringServiceNetworks[] | cdktf.IResolvable;
}
export interface RoutePeeringRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#route_parmas RoutePeering#route_parmas}
  */
  readonly routeParmas?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#template_name RoutePeering#template_name}
  */
  readonly templateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#vrf_name RoutePeering#vrf_name}
  */
  readonly vrfName?: string;
}

export function routePeeringRoutesToTerraform(struct?: RoutePeeringRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_parmas: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.routeParmas),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function routePeeringRoutesToHclTerraform(struct?: RoutePeeringRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_parmas: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.routeParmas),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutePeeringRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutePeeringRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeParmas !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeParmas = this._routeParmas;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutePeeringRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeParmas = undefined;
      this._templateName = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeParmas = value.routeParmas;
      this._templateName = value.templateName;
      this._vrfName = value.vrfName;
    }
  }

  // route_parmas - computed: false, optional: true, required: false
  private _routeParmas?: { [key: string]: string }; 
  public get routeParmas() {
    return this.getStringMapAttribute('route_parmas');
  }
  public set routeParmas(value: { [key: string]: string }) {
    this._routeParmas = value;
  }
  public resetRouteParmas() {
    this._routeParmas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeParmasInput() {
    return this._routeParmas;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // vrf_name - computed: false, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class RoutePeeringRoutesList extends cdktf.ComplexList {
  public internalValue? : RoutePeeringRoutes[] | cdktf.IResolvable

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
  public get(index: number): RoutePeeringRoutesOutputReference {
    return new RoutePeeringRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutePeeringServiceNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#gateway_ip_address RoutePeering#gateway_ip_address}
  */
  readonly gatewayIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#network_name RoutePeering#network_name}
  */
  readonly networkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#network_type RoutePeering#network_type}
  */
  readonly networkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#template_name RoutePeering#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#vlan_id RoutePeering#vlan_id}
  */
  readonly vlanId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#vrf_name RoutePeering#vrf_name}
  */
  readonly vrfName: string;
}

export function routePeeringServiceNetworksToTerraform(struct?: RoutePeeringServiceNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_ip_address: cdktf.stringToTerraform(struct!.gatewayIpAddress),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function routePeeringServiceNetworksToHclTerraform(struct?: RoutePeeringServiceNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
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
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutePeeringServiceNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutePeeringServiceNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIpAddress = this._gatewayIpAddress;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutePeeringServiceNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayIpAddress = undefined;
      this._networkName = undefined;
      this._networkType = undefined;
      this._templateName = undefined;
      this._vlanId = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayIpAddress = value.gatewayIpAddress;
      this._networkName = value.networkName;
      this._networkType = value.networkType;
      this._templateName = value.templateName;
      this._vlanId = value.vlanId;
      this._vrfName = value.vrfName;
    }
  }

  // gateway_ip_address - computed: false, optional: false, required: true
  private _gatewayIpAddress?: string; 
  public get gatewayIpAddress() {
    return this.getStringAttribute('gateway_ip_address');
  }
  public set gatewayIpAddress(value: string) {
    this._gatewayIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpAddressInput() {
    return this._gatewayIpAddress;
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class RoutePeeringServiceNetworksList extends cdktf.ComplexList {
  public internalValue? : RoutePeeringServiceNetworks[] | cdktf.IResolvable

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
  public get(index: number): RoutePeeringServiceNetworksOutputReference {
    return new RoutePeeringServiceNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering dcnm_route_peering}
*/
export class RoutePeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_route_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutePeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutePeering to import
  * @param importFromId The id of the existing RoutePeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutePeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_route_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/route_peering dcnm_route_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutePeeringConfig
  */
  public constructor(scope: Construct, id: string, config: RoutePeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm_route_peering',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachedFabric = config.attachedFabric;
    this._deploy = config.deploy;
    this._deployTimeout = config.deployTimeout;
    this._deploymentMode = config.deploymentMode;
    this._id = config.id;
    this._name = config.name;
    this._nextHopIp = config.nextHopIp;
    this._option = config.option;
    this._reverseNextHopIp = config.reverseNextHopIp;
    this._serviceFabric = config.serviceFabric;
    this._serviceNodeName = config.serviceNodeName;
    this._serviceNodeType = config.serviceNodeType;
    this._routes.internalValue = config.routes;
    this._serviceNetworks.internalValue = config.serviceNetworks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_fabric - computed: false, optional: false, required: true
  private _attachedFabric?: string; 
  public get attachedFabric() {
    return this.getStringAttribute('attached_fabric');
  }
  public set attachedFabric(value: string) {
    this._attachedFabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedFabricInput() {
    return this._attachedFabric;
  }

  // deploy - computed: false, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // deploy_timeout - computed: false, optional: true, required: false
  private _deployTimeout?: number; 
  public get deployTimeout() {
    return this.getNumberAttribute('deploy_timeout');
  }
  public set deployTimeout(value: number) {
    this._deployTimeout = value;
  }
  public resetDeployTimeout() {
    this._deployTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTimeoutInput() {
    return this._deployTimeout;
  }

  // deployment_mode - computed: false, optional: false, required: true
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
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

  // next_hop_ip - computed: false, optional: true, required: false
  private _nextHopIp?: string; 
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }
  public set nextHopIp(value: string) {
    this._nextHopIp = value;
  }
  public resetNextHopIp() {
    this._nextHopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpInput() {
    return this._nextHopIp;
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // reverse_next_hop_ip - computed: false, optional: true, required: false
  private _reverseNextHopIp?: string; 
  public get reverseNextHopIp() {
    return this.getStringAttribute('reverse_next_hop_ip');
  }
  public set reverseNextHopIp(value: string) {
    this._reverseNextHopIp = value;
  }
  public resetReverseNextHopIp() {
    this._reverseNextHopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseNextHopIpInput() {
    return this._reverseNextHopIp;
  }

  // service_fabric - computed: false, optional: false, required: true
  private _serviceFabric?: string; 
  public get serviceFabric() {
    return this.getStringAttribute('service_fabric');
  }
  public set serviceFabric(value: string) {
    this._serviceFabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricInput() {
    return this._serviceFabric;
  }

  // service_node_name - computed: false, optional: false, required: true
  private _serviceNodeName?: string; 
  public get serviceNodeName() {
    return this.getStringAttribute('service_node_name');
  }
  public set serviceNodeName(value: string) {
    this._serviceNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeNameInput() {
    return this._serviceNodeName;
  }

  // service_node_type - computed: false, optional: false, required: true
  private _serviceNodeType?: string; 
  public get serviceNodeType() {
    return this.getStringAttribute('service_node_type');
  }
  public set serviceNodeType(value: string) {
    this._serviceNodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeTypeInput() {
    return this._serviceNodeType;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new RoutePeeringRoutesList(this, "routes", true);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: RoutePeeringRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // service_networks - computed: false, optional: false, required: true
  private _serviceNetworks = new RoutePeeringServiceNetworksList(this, "service_networks", true);
  public get serviceNetworks() {
    return this._serviceNetworks;
  }
  public putServiceNetworks(value: RoutePeeringServiceNetworks[] | cdktf.IResolvable) {
    this._serviceNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworksInput() {
    return this._serviceNetworks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attached_fabric: cdktf.stringToTerraform(this._attachedFabric),
      deploy: cdktf.booleanToTerraform(this._deploy),
      deploy_timeout: cdktf.numberToTerraform(this._deployTimeout),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      next_hop_ip: cdktf.stringToTerraform(this._nextHopIp),
      option: cdktf.stringToTerraform(this._option),
      reverse_next_hop_ip: cdktf.stringToTerraform(this._reverseNextHopIp),
      service_fabric: cdktf.stringToTerraform(this._serviceFabric),
      service_node_name: cdktf.stringToTerraform(this._serviceNodeName),
      service_node_type: cdktf.stringToTerraform(this._serviceNodeType),
      routes: cdktf.listMapper(routePeeringRoutesToTerraform, true)(this._routes.internalValue),
      service_networks: cdktf.listMapper(routePeeringServiceNetworksToTerraform, true)(this._serviceNetworks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attached_fabric: {
        value: cdktf.stringToHclTerraform(this._attachedFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_timeout: {
        value: cdktf.numberToHclTerraform(this._deployTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment_mode: {
        value: cdktf.stringToHclTerraform(this._deploymentMode),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_ip: {
        value: cdktf.stringToHclTerraform(this._nextHopIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option: {
        value: cdktf.stringToHclTerraform(this._option),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_next_hop_ip: {
        value: cdktf.stringToHclTerraform(this._reverseNextHopIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_fabric: {
        value: cdktf.stringToHclTerraform(this._serviceFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_node_name: {
        value: cdktf.stringToHclTerraform(this._serviceNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_node_type: {
        value: cdktf.stringToHclTerraform(this._serviceNodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.listMapperHcl(routePeeringRoutesToHclTerraform, true)(this._routes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoutePeeringRoutesList",
      },
      service_networks: {
        value: cdktf.listMapperHcl(routePeeringServiceNetworksToHclTerraform, true)(this._serviceNetworks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoutePeeringServiceNetworksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
