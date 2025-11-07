// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IxVirtualCircuitMarketplaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your ASN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#asn IxVirtualCircuitMarketplace#asn}
  */
  readonly asn: number;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#description IxVirtualCircuitMarketplace#description}
  */
  readonly description: string;
  /**
  * ID of the flex bandwidth container from which to subtract this VC's speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#flex_bandwidth_id IxVirtualCircuitMarketplace#flex_bandwidth_id}
  */
  readonly flexBandwidthId?: string;
  /**
  * The market code (e.g. "ATL" or "DAL") in which you would like the IX provider to provision their side of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#market IxVirtualCircuitMarketplace#market}
  */
  readonly market: string;
  /**
  * The upper bound, in Mbps, to limit incoming data by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#rate_limit_in IxVirtualCircuitMarketplace#rate_limit_in}
  */
  readonly rateLimitIn?: number;
  /**
  * The upper bound, in Mbps, to limit outgoing data by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#rate_limit_out IxVirtualCircuitMarketplace#rate_limit_out}
  */
  readonly rateLimitOut?: number;
  /**
  * The routing ID of the IX provider that will be receiving this request.
  * 
  * 	Example: TR-1RI-OQ85
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#routing_id IxVirtualCircuitMarketplace#routing_id}
  */
  readonly routingId: string;
  /**
  * bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#bandwidth IxVirtualCircuitMarketplace#bandwidth}
  */
  readonly bandwidth: IxVirtualCircuitMarketplaceBandwidth[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#interface IxVirtualCircuitMarketplace#interface}
  */
  readonly interface: IxVirtualCircuitMarketplaceInterface[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#timeouts IxVirtualCircuitMarketplace#timeouts}
  */
  readonly timeouts?: IxVirtualCircuitMarketplaceTimeouts;
}
export interface IxVirtualCircuitMarketplaceBandwidth {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#account_uuid IxVirtualCircuitMarketplace#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * Dedicated (no limits or additional charges), usage-based (per transferred GB) or hourly billing. Not applicable for Metro Dedicated.
  * 
  * 	Enum ["dedicated" "usage" "hourly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#longhaul_type IxVirtualCircuitMarketplace#longhaul_type}
  */
  readonly longhaulType?: string;
  /**
  * The desired speed of the new connection. Only applicable if `longhaul_type` is "dedicated" or "hourly".
  * 
  * 	Enum: ["50Mbps" "100Mbps" "200Mbps" "300Mbps" "400Mbps" "500Mbps" "1Gbps" "2Gbps" "5Gbps" "10Gbps" "20Gbps" "30Gbps" "40Gbps" "50Gbps" "60Gbps" "80Gbps" "100Gbps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#speed IxVirtualCircuitMarketplace#speed}
  */
  readonly speed?: string;
  /**
  * The billing term, in months, for this connection. Only applicable if `longhaul_type` is "dedicated."
  * 
  * 	Enum: ["1", "12", "24", "36"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#subscription_term IxVirtualCircuitMarketplace#subscription_term}
  */
  readonly subscriptionTerm?: number;
}

export function ixVirtualCircuitMarketplaceBandwidthToTerraform(struct?: IxVirtualCircuitMarketplaceBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_uuid: cdktf.stringToTerraform(struct!.accountUuid),
    longhaul_type: cdktf.stringToTerraform(struct!.longhaulType),
    speed: cdktf.stringToTerraform(struct!.speed),
    subscription_term: cdktf.numberToTerraform(struct!.subscriptionTerm),
  }
}


export function ixVirtualCircuitMarketplaceBandwidthToHclTerraform(struct?: IxVirtualCircuitMarketplaceBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_uuid: {
      value: cdktf.stringToHclTerraform(struct!.accountUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longhaul_type: {
      value: cdktf.stringToHclTerraform(struct!.longhaulType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_term: {
      value: cdktf.numberToHclTerraform(struct!.subscriptionTerm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IxVirtualCircuitMarketplaceBandwidthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IxVirtualCircuitMarketplaceBandwidth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUuid = this._accountUuid;
    }
    if (this._longhaulType !== undefined) {
      hasAnyValues = true;
      internalValueResult.longhaulType = this._longhaulType;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._subscriptionTerm !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionTerm = this._subscriptionTerm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IxVirtualCircuitMarketplaceBandwidth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountUuid = undefined;
      this._longhaulType = undefined;
      this._speed = undefined;
      this._subscriptionTerm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountUuid = value.accountUuid;
      this._longhaulType = value.longhaulType;
      this._speed = value.speed;
      this._subscriptionTerm = value.subscriptionTerm;
    }
  }

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

  // longhaul_type - computed: false, optional: true, required: false
  private _longhaulType?: string; 
  public get longhaulType() {
    return this.getStringAttribute('longhaul_type');
  }
  public set longhaulType(value: string) {
    this._longhaulType = value;
  }
  public resetLonghaulType() {
    this._longhaulType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longhaulTypeInput() {
    return this._longhaulType;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // subscription_term - computed: false, optional: true, required: false
  private _subscriptionTerm?: number; 
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
  public set subscriptionTerm(value: number) {
    this._subscriptionTerm = value;
  }
  public resetSubscriptionTerm() {
    this._subscriptionTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTermInput() {
    return this._subscriptionTerm;
  }
}

export class IxVirtualCircuitMarketplaceBandwidthList extends cdktf.ComplexList {
  public internalValue? : IxVirtualCircuitMarketplaceBandwidth[] | cdktf.IResolvable

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
  public get(index: number): IxVirtualCircuitMarketplaceBandwidthOutputReference {
    return new IxVirtualCircuitMarketplaceBandwidthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IxVirtualCircuitMarketplaceInterface {
  /**
  * The circuit ID for the port. This starts with "PF-AP-"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#port_circuit_id IxVirtualCircuitMarketplace#port_circuit_id}
  */
  readonly portCircuitId: string;
  /**
  * Whether the interface should be untagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#untagged IxVirtualCircuitMarketplace#untagged}
  */
  readonly untagged: boolean | cdktf.IResolvable;
  /**
  * Valid VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#vlan IxVirtualCircuitMarketplace#vlan}
  */
  readonly vlan: number;
}

export function ixVirtualCircuitMarketplaceInterfaceToTerraform(struct?: IxVirtualCircuitMarketplaceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_circuit_id: cdktf.stringToTerraform(struct!.portCircuitId),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function ixVirtualCircuitMarketplaceInterfaceToHclTerraform(struct?: IxVirtualCircuitMarketplaceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.portCircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untagged: {
      value: cdktf.booleanToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IxVirtualCircuitMarketplaceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IxVirtualCircuitMarketplaceInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCircuitId = this._portCircuitId;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IxVirtualCircuitMarketplaceInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portCircuitId = undefined;
      this._untagged = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portCircuitId = value.portCircuitId;
      this._untagged = value.untagged;
      this._vlan = value.vlan;
    }
  }

  // port_circuit_id - computed: false, optional: false, required: true
  private _portCircuitId?: string; 
  public get portCircuitId() {
    return this.getStringAttribute('port_circuit_id');
  }
  public set portCircuitId(value: string) {
    this._portCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portCircuitIdInput() {
    return this._portCircuitId;
  }

  // untagged - computed: false, optional: false, required: true
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class IxVirtualCircuitMarketplaceInterfaceList extends cdktf.ComplexList {
  public internalValue? : IxVirtualCircuitMarketplaceInterface[] | cdktf.IResolvable

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
  public get(index: number): IxVirtualCircuitMarketplaceInterfaceOutputReference {
    return new IxVirtualCircuitMarketplaceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IxVirtualCircuitMarketplaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#create IxVirtualCircuitMarketplace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#delete IxVirtualCircuitMarketplace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#read IxVirtualCircuitMarketplace#read}
  */
  readonly read?: string;
}

export function ixVirtualCircuitMarketplaceTimeoutsToTerraform(struct?: IxVirtualCircuitMarketplaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function ixVirtualCircuitMarketplaceTimeoutsToHclTerraform(struct?: IxVirtualCircuitMarketplaceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IxVirtualCircuitMarketplaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IxVirtualCircuitMarketplaceTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IxVirtualCircuitMarketplaceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace packetfabric_ix_virtual_circuit_marketplace}
*/
export class IxVirtualCircuitMarketplace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_ix_virtual_circuit_marketplace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IxVirtualCircuitMarketplace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IxVirtualCircuitMarketplace to import
  * @param importFromId The id of the existing IxVirtualCircuitMarketplace that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IxVirtualCircuitMarketplace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_ix_virtual_circuit_marketplace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/ix_virtual_circuit_marketplace packetfabric_ix_virtual_circuit_marketplace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IxVirtualCircuitMarketplaceConfig
  */
  public constructor(scope: Construct, id: string, config: IxVirtualCircuitMarketplaceConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_ix_virtual_circuit_marketplace',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._description = config.description;
    this._flexBandwidthId = config.flexBandwidthId;
    this._market = config.market;
    this._rateLimitIn = config.rateLimitIn;
    this._rateLimitOut = config.rateLimitOut;
    this._routingId = config.routingId;
    this._bandwidth.internalValue = config.bandwidth;
    this._interface.internalValue = config.interface;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // flex_bandwidth_id - computed: false, optional: true, required: false
  private _flexBandwidthId?: string; 
  public get flexBandwidthId() {
    return this.getStringAttribute('flex_bandwidth_id');
  }
  public set flexBandwidthId(value: string) {
    this._flexBandwidthId = value;
  }
  public resetFlexBandwidthId() {
    this._flexBandwidthId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexBandwidthIdInput() {
    return this._flexBandwidthId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // market - computed: false, optional: false, required: true
  private _market?: string; 
  public get market() {
    return this.getStringAttribute('market');
  }
  public set market(value: string) {
    this._market = value;
  }
  // Temporarily expose input value. Use with caution.
  public get marketInput() {
    return this._market;
  }

  // rate_limit_in - computed: false, optional: true, required: false
  private _rateLimitIn?: number; 
  public get rateLimitIn() {
    return this.getNumberAttribute('rate_limit_in');
  }
  public set rateLimitIn(value: number) {
    this._rateLimitIn = value;
  }
  public resetRateLimitIn() {
    this._rateLimitIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInInput() {
    return this._rateLimitIn;
  }

  // rate_limit_out - computed: false, optional: true, required: false
  private _rateLimitOut?: number; 
  public get rateLimitOut() {
    return this.getNumberAttribute('rate_limit_out');
  }
  public set rateLimitOut(value: number) {
    this._rateLimitOut = value;
  }
  public resetRateLimitOut() {
    this._rateLimitOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitOutInput() {
    return this._rateLimitOut;
  }

  // routing_id - computed: false, optional: false, required: true
  private _routingId?: string; 
  public get routingId() {
    return this.getStringAttribute('routing_id');
  }
  public set routingId(value: string) {
    this._routingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingIdInput() {
    return this._routingId;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth = new IxVirtualCircuitMarketplaceBandwidthList(this, "bandwidth", true);
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: IxVirtualCircuitMarketplaceBandwidth[] | cdktf.IResolvable) {
    this._bandwidth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new IxVirtualCircuitMarketplaceInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: IxVirtualCircuitMarketplaceInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IxVirtualCircuitMarketplaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IxVirtualCircuitMarketplaceTimeouts) {
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
      asn: cdktf.numberToTerraform(this._asn),
      description: cdktf.stringToTerraform(this._description),
      flex_bandwidth_id: cdktf.stringToTerraform(this._flexBandwidthId),
      market: cdktf.stringToTerraform(this._market),
      rate_limit_in: cdktf.numberToTerraform(this._rateLimitIn),
      rate_limit_out: cdktf.numberToTerraform(this._rateLimitOut),
      routing_id: cdktf.stringToTerraform(this._routingId),
      bandwidth: cdktf.listMapper(ixVirtualCircuitMarketplaceBandwidthToTerraform, true)(this._bandwidth.internalValue),
      interface: cdktf.listMapper(ixVirtualCircuitMarketplaceInterfaceToTerraform, true)(this._interface.internalValue),
      timeouts: ixVirtualCircuitMarketplaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flex_bandwidth_id: {
        value: cdktf.stringToHclTerraform(this._flexBandwidthId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      market: {
        value: cdktf.stringToHclTerraform(this._market),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_in: {
        value: cdktf.numberToHclTerraform(this._rateLimitIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_out: {
        value: cdktf.numberToHclTerraform(this._rateLimitOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_id: {
        value: cdktf.stringToHclTerraform(this._routingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.listMapperHcl(ixVirtualCircuitMarketplaceBandwidthToHclTerraform, true)(this._bandwidth.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IxVirtualCircuitMarketplaceBandwidthList",
      },
      interface: {
        value: cdktf.listMapperHcl(ixVirtualCircuitMarketplaceInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IxVirtualCircuitMarketplaceInterfaceList",
      },
      timeouts: {
        value: ixVirtualCircuitMarketplaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IxVirtualCircuitMarketplaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
