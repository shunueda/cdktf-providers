// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackboneVirtualCircuitConfig extends cdktf.TerraformMetaArguments {
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#description BackboneVirtualCircuit#description}
  */
  readonly description: string;
  /**
  * If true, the circuit will be an EPL connection rather than an EVPL. Default is false.
  * 
  * 	EPL is an Ethernet Private Line. Typical access ports can only support one EPL connection (meaning one virtual circuit for that port). ENNI ports can support multiple EPL connections.
  * 
  * 	EVPL is an Ethernet Virtual Private Line. A port can support multiple EVPL connections, as bandwidth allows.
  * 
  * 	For more information on the difference between the two, see [Virtual Circuit Ethernet Features](https://docs.packetfabric.com/reference/specs/ethernet_features/).
  * 
  * 	Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#epl BackboneVirtualCircuit#epl}
  */
  readonly epl?: boolean | cdktf.IResolvable;
  /**
  * ID of the flex bandwidth container from which to subtract this VC's speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#flex_bandwidth_id BackboneVirtualCircuit#flex_bandwidth_id}
  */
  readonly flexBandwidthId?: string;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#labels BackboneVirtualCircuit#labels}
  */
  readonly labels?: string[];
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#po_number BackboneVirtualCircuit#po_number}
  */
  readonly poNumber?: string;
  /**
  * The upper bound, in Mbps, by which to limit incoming data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#rate_limit_in BackboneVirtualCircuit#rate_limit_in}
  */
  readonly rateLimitIn?: number;
  /**
  * The upper bound, in Mbps, by which to limit outgoing data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#rate_limit_out BackboneVirtualCircuit#rate_limit_out}
  */
  readonly rateLimitOut?: number;
  /**
  * bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#bandwidth BackboneVirtualCircuit#bandwidth}
  */
  readonly bandwidth: BackboneVirtualCircuitBandwidth[] | cdktf.IResolvable;
  /**
  * interface_a block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#interface_a BackboneVirtualCircuit#interface_a}
  */
  readonly interfaceA: BackboneVirtualCircuitInterfaceA[] | cdktf.IResolvable;
  /**
  * interface_z block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#interface_z BackboneVirtualCircuit#interface_z}
  */
  readonly interfaceZ: BackboneVirtualCircuitInterfaceZ[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#timeouts BackboneVirtualCircuit#timeouts}
  */
  readonly timeouts?: BackboneVirtualCircuitTimeouts;
}
export interface BackboneVirtualCircuitBandwidth {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#account_uuid BackboneVirtualCircuit#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * Dedicated (no limits or additional charges), usage-based (per transferred GB) or hourly billing. Not applicable for Metro Dedicated.
  * 
  * 	Enum ["dedicated" "usage" "hourly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#longhaul_type BackboneVirtualCircuit#longhaul_type}
  */
  readonly longhaulType?: string;
  /**
  * The desired speed of the new connection. Only applicable if `longhaul_type` is "dedicated" or "hourly".
  * 
  * 	Enum: ["50Mbps" "100Mbps" "200Mbps" "300Mbps" "400Mbps" "500Mbps" "1Gbps" "2Gbps" "5Gbps" "10Gbps" "20Gbps" "30Gbps" "40Gbps" "50Gbps" "60Gbps" "80Gbps" "100Gbps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#speed BackboneVirtualCircuit#speed}
  */
  readonly speed?: string;
  /**
  * The billing term, in months, for this connection. Only applicable if `longhaul_type` is "dedicated."
  * 
  * 	Enum: ["1", "12", "24", "36"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#subscription_term BackboneVirtualCircuit#subscription_term}
  */
  readonly subscriptionTerm?: number;
}

export function backboneVirtualCircuitBandwidthToTerraform(struct?: BackboneVirtualCircuitBandwidth | cdktf.IResolvable): any {
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


export function backboneVirtualCircuitBandwidthToHclTerraform(struct?: BackboneVirtualCircuitBandwidth | cdktf.IResolvable): any {
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

export class BackboneVirtualCircuitBandwidthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackboneVirtualCircuitBandwidth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackboneVirtualCircuitBandwidth | cdktf.IResolvable | undefined) {
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

export class BackboneVirtualCircuitBandwidthList extends cdktf.ComplexList {
  public internalValue? : BackboneVirtualCircuitBandwidth[] | cdktf.IResolvable

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
  public get(index: number): BackboneVirtualCircuitBandwidthOutputReference {
    return new BackboneVirtualCircuitBandwidthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackboneVirtualCircuitInterfaceA {
  /**
  * The circuit ID for the port. This starts with "PF-AP-"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#port_circuit_id BackboneVirtualCircuit#port_circuit_id}
  */
  readonly portCircuitId: string;
  /**
  * Valid sVLAN range is from 4-4094, inclusive. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#svlan BackboneVirtualCircuit#svlan}
  */
  readonly svlan?: number;
  /**
  * Whether the interface should be untagged. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#untagged BackboneVirtualCircuit#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Valid VLAN range is from 4-4094, inclusive. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#vlan BackboneVirtualCircuit#vlan}
  */
  readonly vlan?: number;
}

export function backboneVirtualCircuitInterfaceAToTerraform(struct?: BackboneVirtualCircuitInterfaceA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_circuit_id: cdktf.stringToTerraform(struct!.portCircuitId),
    svlan: cdktf.numberToTerraform(struct!.svlan),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function backboneVirtualCircuitInterfaceAToHclTerraform(struct?: BackboneVirtualCircuitInterfaceA | cdktf.IResolvable): any {
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
    svlan: {
      value: cdktf.numberToHclTerraform(struct!.svlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class BackboneVirtualCircuitInterfaceAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackboneVirtualCircuitInterfaceA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCircuitId = this._portCircuitId;
    }
    if (this._svlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.svlan = this._svlan;
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

  public set internalValue(value: BackboneVirtualCircuitInterfaceA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portCircuitId = undefined;
      this._svlan = undefined;
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
      this._svlan = value.svlan;
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

  // svlan - computed: false, optional: true, required: false
  private _svlan?: number; 
  public get svlan() {
    return this.getNumberAttribute('svlan');
  }
  public set svlan(value: number) {
    this._svlan = value;
  }
  public resetSvlan() {
    this._svlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svlanInput() {
    return this._svlan;
  }

  // untagged - computed: false, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class BackboneVirtualCircuitInterfaceAList extends cdktf.ComplexList {
  public internalValue? : BackboneVirtualCircuitInterfaceA[] | cdktf.IResolvable

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
  public get(index: number): BackboneVirtualCircuitInterfaceAOutputReference {
    return new BackboneVirtualCircuitInterfaceAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackboneVirtualCircuitInterfaceZ {
  /**
  * The circuit ID for the port. This starts with "PF-AP-"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#port_circuit_id BackboneVirtualCircuit#port_circuit_id}
  */
  readonly portCircuitId: string;
  /**
  * Valid sVLAN range is from 4-4094, inclusive. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#svlan BackboneVirtualCircuit#svlan}
  */
  readonly svlan?: number;
  /**
  * Whether the interface should be untagged. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#untagged BackboneVirtualCircuit#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Valid VLAN range is from 4-4094, inclusive. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#vlan BackboneVirtualCircuit#vlan}
  */
  readonly vlan?: number;
}

export function backboneVirtualCircuitInterfaceZToTerraform(struct?: BackboneVirtualCircuitInterfaceZ | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_circuit_id: cdktf.stringToTerraform(struct!.portCircuitId),
    svlan: cdktf.numberToTerraform(struct!.svlan),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function backboneVirtualCircuitInterfaceZToHclTerraform(struct?: BackboneVirtualCircuitInterfaceZ | cdktf.IResolvable): any {
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
    svlan: {
      value: cdktf.numberToHclTerraform(struct!.svlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class BackboneVirtualCircuitInterfaceZOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackboneVirtualCircuitInterfaceZ | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCircuitId = this._portCircuitId;
    }
    if (this._svlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.svlan = this._svlan;
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

  public set internalValue(value: BackboneVirtualCircuitInterfaceZ | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portCircuitId = undefined;
      this._svlan = undefined;
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
      this._svlan = value.svlan;
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

  // svlan - computed: false, optional: true, required: false
  private _svlan?: number; 
  public get svlan() {
    return this.getNumberAttribute('svlan');
  }
  public set svlan(value: number) {
    this._svlan = value;
  }
  public resetSvlan() {
    this._svlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svlanInput() {
    return this._svlan;
  }

  // untagged - computed: false, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class BackboneVirtualCircuitInterfaceZList extends cdktf.ComplexList {
  public internalValue? : BackboneVirtualCircuitInterfaceZ[] | cdktf.IResolvable

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
  public get(index: number): BackboneVirtualCircuitInterfaceZOutputReference {
    return new BackboneVirtualCircuitInterfaceZOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackboneVirtualCircuitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#create BackboneVirtualCircuit#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#delete BackboneVirtualCircuit#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#read BackboneVirtualCircuit#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#update BackboneVirtualCircuit#update}
  */
  readonly update?: string;
}

export function backboneVirtualCircuitTimeoutsToTerraform(struct?: BackboneVirtualCircuitTimeouts | cdktf.IResolvable): any {
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


export function backboneVirtualCircuitTimeoutsToHclTerraform(struct?: BackboneVirtualCircuitTimeouts | cdktf.IResolvable): any {
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

export class BackboneVirtualCircuitTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackboneVirtualCircuitTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackboneVirtualCircuitTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit packetfabric_backbone_virtual_circuit}
*/
export class BackboneVirtualCircuit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_backbone_virtual_circuit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackboneVirtualCircuit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackboneVirtualCircuit to import
  * @param importFromId The id of the existing BackboneVirtualCircuit that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackboneVirtualCircuit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_backbone_virtual_circuit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit packetfabric_backbone_virtual_circuit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackboneVirtualCircuitConfig
  */
  public constructor(scope: Construct, id: string, config: BackboneVirtualCircuitConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_backbone_virtual_circuit',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._epl = config.epl;
    this._flexBandwidthId = config.flexBandwidthId;
    this._labels = config.labels;
    this._poNumber = config.poNumber;
    this._rateLimitIn = config.rateLimitIn;
    this._rateLimitOut = config.rateLimitOut;
    this._bandwidth.internalValue = config.bandwidth;
    this._interfaceA.internalValue = config.interfaceA;
    this._interfaceZ.internalValue = config.interfaceZ;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // epl - computed: false, optional: true, required: false
  private _epl?: boolean | cdktf.IResolvable; 
  public get epl() {
    return this.getBooleanAttribute('epl');
  }
  public set epl(value: boolean | cdktf.IResolvable) {
    this._epl = value;
  }
  public resetEpl() {
    this._epl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eplInput() {
    return this._epl;
  }

  // etl - computed: true, optional: false, required: false
  public get etl() {
    return this.getNumberAttribute('etl');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // po_number - computed: false, optional: true, required: false
  private _poNumber?: string; 
  public get poNumber() {
    return this.getStringAttribute('po_number');
  }
  public set poNumber(value: string) {
    this._poNumber = value;
  }
  public resetPoNumber() {
    this._poNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poNumberInput() {
    return this._poNumber;
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

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth = new BackboneVirtualCircuitBandwidthList(this, "bandwidth", true);
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: BackboneVirtualCircuitBandwidth[] | cdktf.IResolvable) {
    this._bandwidth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }

  // interface_a - computed: false, optional: false, required: true
  private _interfaceA = new BackboneVirtualCircuitInterfaceAList(this, "interface_a", true);
  public get interfaceA() {
    return this._interfaceA;
  }
  public putInterfaceA(value: BackboneVirtualCircuitInterfaceA[] | cdktf.IResolvable) {
    this._interfaceA.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAInput() {
    return this._interfaceA.internalValue;
  }

  // interface_z - computed: false, optional: false, required: true
  private _interfaceZ = new BackboneVirtualCircuitInterfaceZList(this, "interface_z", true);
  public get interfaceZ() {
    return this._interfaceZ;
  }
  public putInterfaceZ(value: BackboneVirtualCircuitInterfaceZ[] | cdktf.IResolvable) {
    this._interfaceZ.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceZInput() {
    return this._interfaceZ.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackboneVirtualCircuitTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackboneVirtualCircuitTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      epl: cdktf.booleanToTerraform(this._epl),
      flex_bandwidth_id: cdktf.stringToTerraform(this._flexBandwidthId),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      po_number: cdktf.stringToTerraform(this._poNumber),
      rate_limit_in: cdktf.numberToTerraform(this._rateLimitIn),
      rate_limit_out: cdktf.numberToTerraform(this._rateLimitOut),
      bandwidth: cdktf.listMapper(backboneVirtualCircuitBandwidthToTerraform, true)(this._bandwidth.internalValue),
      interface_a: cdktf.listMapper(backboneVirtualCircuitInterfaceAToTerraform, true)(this._interfaceA.internalValue),
      interface_z: cdktf.listMapper(backboneVirtualCircuitInterfaceZToTerraform, true)(this._interfaceZ.internalValue),
      timeouts: backboneVirtualCircuitTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epl: {
        value: cdktf.booleanToHclTerraform(this._epl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flex_bandwidth_id: {
        value: cdktf.stringToHclTerraform(this._flexBandwidthId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
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
      bandwidth: {
        value: cdktf.listMapperHcl(backboneVirtualCircuitBandwidthToHclTerraform, true)(this._bandwidth.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackboneVirtualCircuitBandwidthList",
      },
      interface_a: {
        value: cdktf.listMapperHcl(backboneVirtualCircuitInterfaceAToHclTerraform, true)(this._interfaceA.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackboneVirtualCircuitInterfaceAList",
      },
      interface_z: {
        value: cdktf.listMapperHcl(backboneVirtualCircuitInterfaceZToHclTerraform, true)(this._interfaceZ.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackboneVirtualCircuitInterfaceZList",
      },
      timeouts: {
        value: backboneVirtualCircuitTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackboneVirtualCircuitTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
