// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#await_active_state Route#await_active_state}
  */
  readonly awaitActiveState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#destination_ip_range Route#destination_ip_range}
  */
  readonly destinationIpRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#gateway_id Route#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#nat_service_id Route#nat_service_id}
  */
  readonly natServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#net_peering_id Route#net_peering_id}
  */
  readonly netPeeringId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#nic_id Route#nic_id}
  */
  readonly nicId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#route_table_id Route#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#vm_id Route#vm_id}
  */
  readonly vmId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#timeouts Route#timeouts}
  */
  readonly timeouts?: RouteTimeouts;
}
export interface RouteTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#create Route#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#delete Route#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#read Route#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#update Route#update}
  */
  readonly update?: string;
}

export function routeTimeoutsToTerraform(struct?: RouteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function routeTimeoutsToHclTerraform(struct?: RouteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RouteTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route outscale_route}
*/
export class Route extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route to import
  * @param importFromId The id of the existing Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/route outscale_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteConfig
  */
  public constructor(scope: Construct, id: string, config: RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_route',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awaitActiveState = config.awaitActiveState;
    this._destinationIpRange = config.destinationIpRange;
    this._gatewayId = config.gatewayId;
    this._natServiceId = config.natServiceId;
    this._netPeeringId = config.netPeeringId;
    this._nicId = config.nicId;
    this._routeTableId = config.routeTableId;
    this._vmId = config.vmId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // await_active_state - computed: true, optional: true, required: false
  private _awaitActiveState?: boolean | cdktf.IResolvable; 
  public get awaitActiveState() {
    return this.getBooleanAttribute('await_active_state');
  }
  public set awaitActiveState(value: boolean | cdktf.IResolvable) {
    this._awaitActiveState = value;
  }
  public resetAwaitActiveState() {
    this._awaitActiveState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awaitActiveStateInput() {
    return this._awaitActiveState;
  }

  // creation_method - computed: true, optional: false, required: false
  public get creationMethod() {
    return this.getStringAttribute('creation_method');
  }

  // destination_ip_range - computed: false, optional: false, required: true
  private _destinationIpRange?: string; 
  public get destinationIpRange() {
    return this.getStringAttribute('destination_ip_range');
  }
  public set destinationIpRange(value: string) {
    this._destinationIpRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpRangeInput() {
    return this._destinationIpRange;
  }

  // destination_service_id - computed: true, optional: false, required: false
  public get destinationServiceId() {
    return this.getStringAttribute('destination_service_id');
  }

  // gateway_id - computed: true, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nat_service_id - computed: true, optional: true, required: false
  private _natServiceId?: string; 
  public get natServiceId() {
    return this.getStringAttribute('nat_service_id');
  }
  public set natServiceId(value: string) {
    this._natServiceId = value;
  }
  public resetNatServiceId() {
    this._natServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natServiceIdInput() {
    return this._natServiceId;
  }

  // net_access_point_id - computed: true, optional: false, required: false
  public get netAccessPointId() {
    return this.getStringAttribute('net_access_point_id');
  }

  // net_peering_id - computed: true, optional: true, required: false
  private _netPeeringId?: string; 
  public get netPeeringId() {
    return this.getStringAttribute('net_peering_id');
  }
  public set netPeeringId(value: string) {
    this._netPeeringId = value;
  }
  public resetNetPeeringId() {
    this._netPeeringId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netPeeringIdInput() {
    return this._netPeeringId;
  }

  // nic_id - computed: true, optional: true, required: false
  private _nicId?: string; 
  public get nicId() {
    return this.getStringAttribute('nic_id');
  }
  public set nicId(value: string) {
    this._nicId = value;
  }
  public resetNicId() {
    this._nicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicIdInput() {
    return this._nicId;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vm_account_id - computed: true, optional: false, required: false
  public get vmAccountId() {
    return this.getStringAttribute('vm_account_id');
  }

  // vm_id - computed: true, optional: true, required: false
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RouteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RouteTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      await_active_state: cdktf.booleanToTerraform(this._awaitActiveState),
      destination_ip_range: cdktf.stringToTerraform(this._destinationIpRange),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      nat_service_id: cdktf.stringToTerraform(this._natServiceId),
      net_peering_id: cdktf.stringToTerraform(this._netPeeringId),
      nic_id: cdktf.stringToTerraform(this._nicId),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      vm_id: cdktf.stringToTerraform(this._vmId),
      timeouts: routeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      await_active_state: {
        value: cdktf.booleanToHclTerraform(this._awaitActiveState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination_ip_range: {
        value: cdktf.stringToHclTerraform(this._destinationIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_service_id: {
        value: cdktf.stringToHclTerraform(this._natServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_peering_id: {
        value: cdktf.stringToHclTerraform(this._netPeeringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic_id: {
        value: cdktf.stringToHclTerraform(this._nicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: routeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RouteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
