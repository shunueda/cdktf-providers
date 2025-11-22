// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the Public or VRF IP Reservation to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway#ip_reservation_id MetalGateway#ip_reservation_id}
  */
  readonly ipReservationId?: string;
  /**
  * Size of the private IPv4 subnet to create for this gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway#private_ipv4_subnet_size MetalGateway#private_ipv4_subnet_size}
  */
  readonly privateIpv4SubnetSize?: number;
  /**
  * UUID of the Project where the Gateway is scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway#project_id MetalGateway#project_id}
  */
  readonly projectId: string;
  /**
  * UUID of the VLAN to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway#vlan_id MetalGateway#vlan_id}
  */
  readonly vlanId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway#timeouts MetalGateway#timeouts}
  */
  readonly timeouts?: MetalGatewayTimeouts;
}
export interface MetalGatewayTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway#delete MetalGateway#delete}
  */
  readonly delete?: string;
}

export function metalGatewayTimeoutsToTerraform(struct?: MetalGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function metalGatewayTimeoutsToHclTerraform(struct?: MetalGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetalGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetalGatewayTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetalGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway equinix_metal_gateway}
*/
export class MetalGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalGateway to import
  * @param importFromId The id of the existing MetalGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_gateway equinix_metal_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: MetalGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_gateway',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipReservationId = config.ipReservationId;
    this._privateIpv4SubnetSize = config.privateIpv4SubnetSize;
    this._projectId = config.projectId;
    this._vlanId = config.vlanId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_reservation_id - computed: true, optional: true, required: false
  private _ipReservationId?: string; 
  public get ipReservationId() {
    return this.getStringAttribute('ip_reservation_id');
  }
  public set ipReservationId(value: string) {
    this._ipReservationId = value;
  }
  public resetIpReservationId() {
    this._ipReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReservationIdInput() {
    return this._ipReservationId;
  }

  // private_ipv4_subnet_size - computed: true, optional: true, required: false
  private _privateIpv4SubnetSize?: number; 
  public get privateIpv4SubnetSize() {
    return this.getNumberAttribute('private_ipv4_subnet_size');
  }
  public set privateIpv4SubnetSize(value: number) {
    this._privateIpv4SubnetSize = value;
  }
  public resetPrivateIpv4SubnetSize() {
    this._privateIpv4SubnetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4SubnetSizeInput() {
    return this._privateIpv4SubnetSize;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrf_id - computed: true, optional: false, required: false
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MetalGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MetalGatewayTimeouts) {
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
      ip_reservation_id: cdktf.stringToTerraform(this._ipReservationId),
      private_ipv4_subnet_size: cdktf.numberToTerraform(this._privateIpv4SubnetSize),
      project_id: cdktf.stringToTerraform(this._projectId),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
      timeouts: metalGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ip_reservation_id: {
        value: cdktf.stringToHclTerraform(this._ipReservationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv4_subnet_size: {
        value: cdktf.numberToHclTerraform(this._privateIpv4SubnetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: metalGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetalGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
