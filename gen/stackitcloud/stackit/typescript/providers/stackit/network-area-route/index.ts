// https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAreaRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#destination NetworkAreaRoute#destination}
  */
  readonly destination: NetworkAreaRouteDestination;
  /**
  * Labels are key-value string pairs which can be attached to a resource container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#labels NetworkAreaRoute#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The network area ID to which the network area route is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#network_area_id NetworkAreaRoute#network_area_id}
  */
  readonly networkAreaId: string;
  /**
  * Next hop destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#next_hop NetworkAreaRoute#next_hop}
  */
  readonly nextHop: NetworkAreaRouteNextHop;
  /**
  * STACKIT organization ID to which the network area is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#organization_id NetworkAreaRoute#organization_id}
  */
  readonly organizationId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#region NetworkAreaRoute#region}
  */
  readonly region?: string;
}
export interface NetworkAreaRouteDestination {
  /**
  * CIDRV type. Possible values are: `cidrv4`, `cidrv6`. Only `cidrv4` is supported currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#type NetworkAreaRoute#type}
  */
  readonly type: string;
  /**
  * An CIDR string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#value NetworkAreaRoute#value}
  */
  readonly value: string;
}

export function networkAreaRouteDestinationToTerraform(struct?: NetworkAreaRouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkAreaRouteDestinationToHclTerraform(struct?: NetworkAreaRouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAreaRouteDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAreaRouteDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAreaRouteDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface NetworkAreaRouteNextHop {
  /**
  * Type of the next hop. Possible values are: `blackhole`, `internet`, `ipv4`, `ipv6`. Only `ipv4` supported currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#type NetworkAreaRoute#type}
  */
  readonly type: string;
  /**
  * Either IPv4 or IPv6 (not set for blackhole and internet). Only IPv4 supported currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#value NetworkAreaRoute#value}
  */
  readonly value?: string;
}

export function networkAreaRouteNextHopToTerraform(struct?: NetworkAreaRouteNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkAreaRouteNextHopToHclTerraform(struct?: NetworkAreaRouteNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAreaRouteNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAreaRouteNextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAreaRouteNextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route stackit_network_area_route}
*/
export class NetworkAreaRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_network_area_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAreaRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAreaRoute to import
  * @param importFromId The id of the existing NetworkAreaRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAreaRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_network_area_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/network_area_route stackit_network_area_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAreaRouteConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAreaRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_network_area_route',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.75.0',
        providerVersionConstraint: '0.75.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destination.internalValue = config.destination;
    this._labels = config.labels;
    this._networkAreaId = config.networkAreaId;
    this._nextHop.internalValue = config.nextHop;
    this._organizationId = config.organizationId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination - computed: false, optional: false, required: true
  private _destination = new NetworkAreaRouteDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: NetworkAreaRouteDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_area_id - computed: false, optional: false, required: true
  private _networkAreaId?: string; 
  public get networkAreaId() {
    return this.getStringAttribute('network_area_id');
  }
  public set networkAreaId(value: string) {
    this._networkAreaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAreaIdInput() {
    return this._networkAreaId;
  }

  // network_area_route_id - computed: true, optional: false, required: false
  public get networkAreaRouteId() {
    return this.getStringAttribute('network_area_route_id');
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop = new NetworkAreaRouteNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: NetworkAreaRouteNextHop) {
    this._nextHop.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: networkAreaRouteDestinationToTerraform(this._destination.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      network_area_id: cdktf.stringToTerraform(this._networkAreaId),
      next_hop: networkAreaRouteNextHopToTerraform(this._nextHop.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination: {
        value: networkAreaRouteDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkAreaRouteDestination",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      network_area_id: {
        value: cdktf.stringToHclTerraform(this._networkAreaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop: {
        value: networkAreaRouteNextHopToHclTerraform(this._nextHop.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkAreaRouteNextHop",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
