import * as cdktf from 'cdktf';
import { VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcast,
virtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastToTerraform,
virtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform,
VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastOutputReference,
VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2Mp,
virtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpToTerraform,
virtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform,
VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpOutputReference,
VirtualRouterProtocolOspfv3AreaInterfaceBfd,
virtualRouterProtocolOspfv3AreaInterfaceBfdToTerraform,
virtualRouterProtocolOspfv3AreaInterfaceBfdToHclTerraform,
VirtualRouterProtocolOspfv3AreaInterfaceBfdOutputReference,
VirtualRouterProtocolBgp,
virtualRouterProtocolBgpToTerraform,
virtualRouterProtocolBgpToHclTerraform,
VirtualRouterProtocolBgpOutputReference,
VirtualRouterProtocolOspf,
virtualRouterProtocolOspfToTerraform,
virtualRouterProtocolOspfToHclTerraform,
VirtualRouterProtocolOspfOutputReference } from './structs0'
export interface VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P {
}

export function virtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct?: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AreaInterfaceLinkType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#broadcast VirtualRouter#broadcast}
  */
  readonly broadcast?: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#p2mp VirtualRouter#p2mp}
  */
  readonly p2Mp?: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2Mp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#p2p VirtualRouter#p2p}
  */
  readonly p2P?: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P;
}

export function virtualRouterProtocolOspfv3AreaInterfaceLinkTypeToTerraform(struct?: VirtualRouterProtocolOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: virtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct!.broadcast),
    p2mp: virtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct!.p2Mp),
    p2p: virtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct!.p2P),
  }
}


export function virtualRouterProtocolOspfv3AreaInterfaceLinkTypeToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: virtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct!.broadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcast",
    },
    p2mp: {
      value: virtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct!.p2Mp),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2Mp",
    },
    p2p: {
      value: virtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct!.p2P),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast?.internalValue;
    }
    if (this._p2Mp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2Mp = this._p2Mp?.internalValue;
    }
    if (this._p2P?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2P = this._p2P?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcast.internalValue = undefined;
      this._p2Mp.internalValue = undefined;
      this._p2P.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcast.internalValue = value.broadcast;
      this._p2Mp.internalValue = value.p2Mp;
      this._p2P.internalValue = value.p2P;
    }
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast = new VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }
  public putBroadcast(value: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcast) {
    this._broadcast.internalValue = value;
  }
  public resetBroadcast() {
    this._broadcast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast.internalValue;
  }

  // p2mp - computed: false, optional: true, required: false
  private _p2Mp = new VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }
  public putP2Mp(value: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2Mp) {
    this._p2Mp.internalValue = value;
  }
  public resetP2Mp() {
    this._p2Mp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpInput() {
    return this._p2Mp.internalValue;
  }

  // p2p - computed: false, optional: true, required: false
  private _p2P = new VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
  public putP2P(value: VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P) {
    this._p2P.internalValue = value;
  }
  public resetP2P() {
    this._p2P.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PInput() {
    return this._p2P.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AreaInterfaceNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
}

export function virtualRouterProtocolOspfv3AreaInterfaceNeighborToTerraform(struct?: VirtualRouterProtocolOspfv3AreaInterfaceNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualRouterProtocolOspfv3AreaInterfaceNeighborToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaInterfaceNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaInterfaceNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolOspfv3AreaInterfaceNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaInterfaceNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class VirtualRouterProtocolOspfv3AreaInterfaceNeighborList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolOspfv3AreaInterfaceNeighborOutputReference {
    return new VirtualRouterProtocolOspfv3AreaInterfaceNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolOspfv3AreaInterface {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#authentication VirtualRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#bfd VirtualRouter#bfd}
  */
  readonly bfd?: VirtualRouterProtocolOspfv3AreaInterfaceBfd;
  /**
  * number of lost hello packets to declare router down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#dead_counts VirtualRouter#dead_counts}
  */
  readonly deadCounts?: number;
  /**
  * Enable OSPF in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#enable VirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Period (in seconds) used to send grace LSAs before first hello is sent when graceful restart starts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#gr_delay VirtualRouter#gr_delay}
  */
  readonly grDelay?: number;
  /**
  * Interval (in seconds) to send Hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#hello_interval VirtualRouter#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#instance_id VirtualRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#link_type VirtualRouter#link_type}
  */
  readonly linkType?: VirtualRouterProtocolOspfv3AreaInterfaceLinkType;
  /**
  * Cost of OSPF interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#metric VirtualRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#neighbor VirtualRouter#neighbor}
  */
  readonly neighbor?: VirtualRouterProtocolOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable;
  /**
  * Suppress the sending of hello packets in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#passive VirtualRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Priority for OSPF designated router selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#priority VirtualRouter#priority}
  */
  readonly priority?: number;
  /**
  * Interval (in seconds) to retransmit LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#retransmit_interval VirtualRouter#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Estimated delay (in seconds) to transmit LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#transit_delay VirtualRouter#transit_delay}
  */
  readonly transitDelay?: number;
}

export function virtualRouterProtocolOspfv3AreaInterfaceToTerraform(struct?: VirtualRouterProtocolOspfv3AreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: virtualRouterProtocolOspfv3AreaInterfaceBfdToTerraform(struct!.bfd),
    dead_counts: cdktf.numberToTerraform(struct!.deadCounts),
    enable: cdktf.booleanToTerraform(struct!.enable),
    gr_delay: cdktf.numberToTerraform(struct!.grDelay),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    link_type: virtualRouterProtocolOspfv3AreaInterfaceLinkTypeToTerraform(struct!.linkType),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor: cdktf.listMapper(virtualRouterProtocolOspfv3AreaInterfaceNeighborToTerraform, false)(struct!.neighbor),
    passive: cdktf.booleanToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
  }
}


export function virtualRouterProtocolOspfv3AreaInterfaceToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: virtualRouterProtocolOspfv3AreaInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaInterfaceBfd",
    },
    dead_counts: {
      value: cdktf.numberToHclTerraform(struct!.deadCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gr_delay: {
      value: cdktf.numberToHclTerraform(struct!.grDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_type: {
      value: virtualRouterProtocolOspfv3AreaInterfaceLinkTypeToHclTerraform(struct!.linkType),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaInterfaceLinkType",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor: {
      value: cdktf.listMapperHcl(virtualRouterProtocolOspfv3AreaInterfaceNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolOspfv3AreaInterfaceNeighborList",
    },
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolOspfv3AreaInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._deadCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadCounts = this._deadCounts;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._grDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.grDelay = this._grDelay;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._linkType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitDelay = this._transitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._deadCounts = undefined;
      this._enable = undefined;
      this._grDelay = undefined;
      this._helloInterval = undefined;
      this._instanceId = undefined;
      this._linkType.internalValue = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._neighbor.internalValue = undefined;
      this._passive = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._bfd.internalValue = value.bfd;
      this._deadCounts = value.deadCounts;
      this._enable = value.enable;
      this._grDelay = value.grDelay;
      this._helloInterval = value.helloInterval;
      this._instanceId = value.instanceId;
      this._linkType.internalValue = value.linkType;
      this._metric = value.metric;
      this._name = value.name;
      this._neighbor.internalValue = value.neighbor;
      this._passive = value.passive;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transitDelay = value.transitDelay;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new VirtualRouterProtocolOspfv3AreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VirtualRouterProtocolOspfv3AreaInterfaceBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // dead_counts - computed: true, optional: true, required: false
  private _deadCounts?: number; 
  public get deadCounts() {
    return this.getNumberAttribute('dead_counts');
  }
  public set deadCounts(value: number) {
    this._deadCounts = value;
  }
  public resetDeadCounts() {
    this._deadCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadCountsInput() {
    return this._deadCounts;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // gr_delay - computed: true, optional: true, required: false
  private _grDelay?: number; 
  public get grDelay() {
    return this.getNumberAttribute('gr_delay');
  }
  public set grDelay(value: number) {
    this._grDelay = value;
  }
  public resetGrDelay() {
    this._grDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grDelayInput() {
    return this._grDelay;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType = new VirtualRouterProtocolOspfv3AreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }
  public putLinkType(value: VirtualRouterProtocolOspfv3AreaInterfaceLinkType) {
    this._linkType.internalValue = value;
  }
  public resetLinkType() {
    this._linkType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType.internalValue;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new VirtualRouterProtocolOspfv3AreaInterfaceNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: VirtualRouterProtocolOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: true, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transit_delay - computed: true, optional: true, required: false
  private _transitDelay?: number; 
  public get transitDelay() {
    return this.getNumberAttribute('transit_delay');
  }
  public set transitDelay(value: number) {
    this._transitDelay = value;
  }
  public resetTransitDelay() {
    this._transitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitDelayInput() {
    return this._transitDelay;
  }
}

export class VirtualRouterProtocolOspfv3AreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolOspfv3AreaInterface[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolOspfv3AreaInterfaceOutputReference {
    return new VirtualRouterProtocolOspfv3AreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolOspfv3AreaRangeAdvertise {
}

export function virtualRouterProtocolOspfv3AreaRangeAdvertiseToTerraform(struct?: VirtualRouterProtocolOspfv3AreaRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AreaRangeAdvertiseToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AreaRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaRangeAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AreaRangeSuppress {
}

export function virtualRouterProtocolOspfv3AreaRangeSuppressToTerraform(struct?: VirtualRouterProtocolOspfv3AreaRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AreaRangeSuppressToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AreaRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaRangeSuppress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AreaRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#advertise VirtualRouter#advertise}
  */
  readonly advertise?: VirtualRouterProtocolOspfv3AreaRangeAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#suppress VirtualRouter#suppress}
  */
  readonly suppress?: VirtualRouterProtocolOspfv3AreaRangeSuppress;
}

export function virtualRouterProtocolOspfv3AreaRangeToTerraform(struct?: VirtualRouterProtocolOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: virtualRouterProtocolOspfv3AreaRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    suppress: virtualRouterProtocolOspfv3AreaRangeSuppressToTerraform(struct!.suppress),
  }
}


export function virtualRouterProtocolOspfv3AreaRangeToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: virtualRouterProtocolOspfv3AreaRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: virtualRouterProtocolOspfv3AreaRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolOspfv3AreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suppress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._name = undefined;
      this._suppress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._name = value.name;
      this._suppress.internalValue = value.suppress;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new VirtualRouterProtocolOspfv3AreaRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: VirtualRouterProtocolOspfv3AreaRangeAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
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

  // suppress - computed: false, optional: true, required: false
  private _suppress = new VirtualRouterProtocolOspfv3AreaRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: VirtualRouterProtocolOspfv3AreaRangeSuppress) {
    this._suppress.internalValue = value;
  }
  public resetSuppress() {
    this._suppress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInput() {
    return this._suppress.internalValue;
  }
}

export class VirtualRouterProtocolOspfv3AreaRangeList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolOspfv3AreaRange[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolOspfv3AreaRangeOutputReference {
    return new VirtualRouterProtocolOspfv3AreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeNormal {
}

export function virtualRouterProtocolOspfv3AreaTypeNormalToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AreaTypeNormalToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeNormal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeNormal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise {
  /**
  * metric to be used when advertise default route within this stub area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#metric VirtualRouter#metric}
  */
  readonly metric?: number;
  /**
  * metric type to be used when advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#type VirtualRouter#type}
  */
  readonly type?: string;
}

export function virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._type = value.type;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // type - computed: true, optional: true, required: false
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
export interface VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable {
}

export function virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#advertise VirtualRouter#advertise}
  */
  readonly advertise?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#disable VirtualRouter#disable}
  */
  readonly disable?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable;
}

export function virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise",
    },
    disable: {
      value: virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._disable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._disable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._disable.internalValue = value.disable;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // disable - computed: false, optional: true, required: false
  private _disable = new VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable) {
    this._disable.internalValue = value;
  }
  public resetDisable() {
    this._disable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise {
}

export function virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress {
}

export function virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#advertise VirtualRouter#advertise}
  */
  readonly advertise?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#suppress VirtualRouter#suppress}
  */
  readonly suppress?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress;
}

export function virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    suppress: virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressToTerraform(struct!.suppress),
  }
}


export function virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suppress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._name = undefined;
      this._suppress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._name = value.name;
      this._suppress.internalValue = value.suppress;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
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

  // suppress - computed: false, optional: true, required: false
  private _suppress = new VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress) {
    this._suppress.internalValue = value;
  }
  public resetSuppress() {
    this._suppress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInput() {
    return this._suppress.internalValue;
  }
}

export class VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeOutputReference {
    return new VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeNssa {
  /**
  * Enable the origination and propagation of summary LSA to this area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#accept_summary VirtualRouter#accept_summary}
  */
  readonly acceptSummary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#default_route VirtualRouter#default_route}
  */
  readonly defaultRoute?: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#nssa_ext_range VirtualRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable;
}

export function virtualRouterProtocolOspfv3AreaTypeNssaToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_summary: cdktf.booleanToTerraform(struct!.acceptSummary),
    default_route: virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteToTerraform(struct!.defaultRoute),
    nssa_ext_range: cdktf.listMapper(virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
  }
}


export function virtualRouterProtocolOspfv3AreaTypeNssaToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_summary: {
      value: cdktf.booleanToHclTerraform(struct!.acceptSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route: {
      value: virtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute",
    },
    nssa_ext_range: {
      value: cdktf.listMapperHcl(virtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeNssa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSummary = this._acceptSummary;
    }
    if (this._defaultRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute?.internalValue;
    }
    if (this._nssaExtRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaExtRange = this._nssaExtRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeNssa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptSummary = undefined;
      this._defaultRoute.internalValue = undefined;
      this._nssaExtRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptSummary = value.acceptSummary;
      this._defaultRoute.internalValue = value.defaultRoute;
      this._nssaExtRange.internalValue = value.nssaExtRange;
    }
  }

  // accept_summary - computed: false, optional: true, required: false
  private _acceptSummary?: boolean | cdktf.IResolvable; 
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }
  public set acceptSummary(value: boolean | cdktf.IResolvable) {
    this._acceptSummary = value;
  }
  public resetAcceptSummary() {
    this._acceptSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSummaryInput() {
    return this._acceptSummary;
  }

  // default_route - computed: false, optional: true, required: false
  private _defaultRoute = new VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: VirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // nssa_ext_range - computed: false, optional: true, required: false
  private _nssaExtRange = new VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: VirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable) {
    this._nssaExtRange.internalValue = value;
  }
  public resetNssaExtRange() {
    this._nssaExtRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaExtRangeInput() {
    return this._nssaExtRange.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise {
  /**
  * metric to be used when advertise default route within this stub area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#metric VirtualRouter#metric}
  */
  readonly metric?: number;
}

export function virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable {
}

export function virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#advertise VirtualRouter#advertise}
  */
  readonly advertise?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#disable VirtualRouter#disable}
  */
  readonly disable?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable;
}

export function virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise",
    },
    disable: {
      value: virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._disable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._disable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._disable.internalValue = value.disable;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // disable - computed: false, optional: true, required: false
  private _disable = new VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable) {
    this._disable.internalValue = value;
  }
  public resetDisable() {
    this._disable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AreaTypeStub {
  /**
  * Enable the origination and propagation of summary LSA to this area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#accept_summary VirtualRouter#accept_summary}
  */
  readonly acceptSummary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#default_route VirtualRouter#default_route}
  */
  readonly defaultRoute?: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute;
}

export function virtualRouterProtocolOspfv3AreaTypeStubToTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_summary: cdktf.booleanToTerraform(struct!.acceptSummary),
    default_route: virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteToTerraform(struct!.defaultRoute),
  }
}


export function virtualRouterProtocolOspfv3AreaTypeStubToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_summary: {
      value: cdktf.booleanToHclTerraform(struct!.acceptSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route: {
      value: virtualRouterProtocolOspfv3AreaTypeStubDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaTypeStub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSummary = this._acceptSummary;
    }
    if (this._defaultRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaTypeStub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptSummary = undefined;
      this._defaultRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptSummary = value.acceptSummary;
      this._defaultRoute.internalValue = value.defaultRoute;
    }
  }

  // accept_summary - computed: false, optional: true, required: false
  private _acceptSummary?: boolean | cdktf.IResolvable; 
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }
  public set acceptSummary(value: boolean | cdktf.IResolvable) {
    this._acceptSummary = value;
  }
  public resetAcceptSummary() {
    this._acceptSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSummaryInput() {
    return this._acceptSummary;
  }

  // default_route - computed: false, optional: true, required: false
  private _defaultRoute = new VirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: VirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AreaType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#normal VirtualRouter#normal}
  */
  readonly normal?: VirtualRouterProtocolOspfv3AreaTypeNormal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#nssa VirtualRouter#nssa}
  */
  readonly nssa?: VirtualRouterProtocolOspfv3AreaTypeNssa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#stub VirtualRouter#stub}
  */
  readonly stub?: VirtualRouterProtocolOspfv3AreaTypeStub;
}

export function virtualRouterProtocolOspfv3AreaTypeToTerraform(struct?: VirtualRouterProtocolOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normal: virtualRouterProtocolOspfv3AreaTypeNormalToTerraform(struct!.normal),
    nssa: virtualRouterProtocolOspfv3AreaTypeNssaToTerraform(struct!.nssa),
    stub: virtualRouterProtocolOspfv3AreaTypeStubToTerraform(struct!.stub),
  }
}


export function virtualRouterProtocolOspfv3AreaTypeToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normal: {
      value: virtualRouterProtocolOspfv3AreaTypeNormalToHclTerraform(struct!.normal),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeNormal",
    },
    nssa: {
      value: virtualRouterProtocolOspfv3AreaTypeNssaToHclTerraform(struct!.nssa),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeNssa",
    },
    stub: {
      value: virtualRouterProtocolOspfv3AreaTypeStubToHclTerraform(struct!.stub),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaTypeStub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._normal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal?.internalValue;
    }
    if (this._nssa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssa = this._nssa?.internalValue;
    }
    if (this._stub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stub = this._stub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._normal.internalValue = undefined;
      this._nssa.internalValue = undefined;
      this._stub.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._normal.internalValue = value.normal;
      this._nssa.internalValue = value.nssa;
      this._stub.internalValue = value.stub;
    }
  }

  // normal - computed: false, optional: true, required: false
  private _normal = new VirtualRouterProtocolOspfv3AreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }
  public putNormal(value: VirtualRouterProtocolOspfv3AreaTypeNormal) {
    this._normal.internalValue = value;
  }
  public resetNormal() {
    this._normal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal.internalValue;
  }

  // nssa - computed: false, optional: true, required: false
  private _nssa = new VirtualRouterProtocolOspfv3AreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: VirtualRouterProtocolOspfv3AreaTypeNssa) {
    this._nssa.internalValue = value;
  }
  public resetNssa() {
    this._nssa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa.internalValue;
  }

  // stub - computed: false, optional: true, required: false
  private _stub = new VirtualRouterProtocolOspfv3AreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: VirtualRouterProtocolOspfv3AreaTypeStub) {
    this._stub.internalValue = value;
  }
  public resetStub() {
    this._stub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AreaVirtualLinkBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#profile VirtualRouter#profile}
  */
  readonly profile?: string;
}

export function virtualRouterProtocolOspfv3AreaVirtualLinkBfdToTerraform(struct?: VirtualRouterProtocolOspfv3AreaVirtualLinkBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function virtualRouterProtocolOspfv3AreaVirtualLinkBfdToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaVirtualLinkBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AreaVirtualLinkBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaVirtualLinkBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface VirtualRouterProtocolOspfv3AreaVirtualLink {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#authentication VirtualRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#bfd VirtualRouter#bfd}
  */
  readonly bfd?: VirtualRouterProtocolOspfv3AreaVirtualLinkBfd;
  /**
  * number of lost hello packets to declare router down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#dead_counts VirtualRouter#dead_counts}
  */
  readonly deadCounts?: number;
  /**
  * Enable this virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#enable VirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Interval (in seconds) to send Hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#hello_interval VirtualRouter#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#instance_id VirtualRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * neighbor router id for virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#neighbor_id VirtualRouter#neighbor_id}
  */
  readonly neighborId?: string;
  /**
  * Interval (in seconds) to retransmit LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#retransmit_interval VirtualRouter#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * id of transit area, cannot be backbone, stub or NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#transit_area_id VirtualRouter#transit_area_id}
  */
  readonly transitAreaId?: string;
  /**
  * Estimated delay (in seconds) to transmit LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#transit_delay VirtualRouter#transit_delay}
  */
  readonly transitDelay?: number;
}

export function virtualRouterProtocolOspfv3AreaVirtualLinkToTerraform(struct?: VirtualRouterProtocolOspfv3AreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: virtualRouterProtocolOspfv3AreaVirtualLinkBfdToTerraform(struct!.bfd),
    dead_counts: cdktf.numberToTerraform(struct!.deadCounts),
    enable: cdktf.booleanToTerraform(struct!.enable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor_id: cdktf.stringToTerraform(struct!.neighborId),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transit_area_id: cdktf.stringToTerraform(struct!.transitAreaId),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
  }
}


export function virtualRouterProtocolOspfv3AreaVirtualLinkToHclTerraform(struct?: VirtualRouterProtocolOspfv3AreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: virtualRouterProtocolOspfv3AreaVirtualLinkBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaVirtualLinkBfd",
    },
    dead_counts: {
      value: cdktf.numberToHclTerraform(struct!.deadCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_id: {
      value: cdktf.stringToHclTerraform(struct!.neighborId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transit_area_id: {
      value: cdktf.stringToHclTerraform(struct!.transitAreaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolOspfv3AreaVirtualLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._deadCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadCounts = this._deadCounts;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighborId !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborId = this._neighborId;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transitAreaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitAreaId = this._transitAreaId;
    }
    if (this._transitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitDelay = this._transitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._deadCounts = undefined;
      this._enable = undefined;
      this._helloInterval = undefined;
      this._instanceId = undefined;
      this._name = undefined;
      this._neighborId = undefined;
      this._retransmitInterval = undefined;
      this._transitAreaId = undefined;
      this._transitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._bfd.internalValue = value.bfd;
      this._deadCounts = value.deadCounts;
      this._enable = value.enable;
      this._helloInterval = value.helloInterval;
      this._instanceId = value.instanceId;
      this._name = value.name;
      this._neighborId = value.neighborId;
      this._retransmitInterval = value.retransmitInterval;
      this._transitAreaId = value.transitAreaId;
      this._transitDelay = value.transitDelay;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new VirtualRouterProtocolOspfv3AreaVirtualLinkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VirtualRouterProtocolOspfv3AreaVirtualLinkBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // dead_counts - computed: true, optional: true, required: false
  private _deadCounts?: number; 
  public get deadCounts() {
    return this.getNumberAttribute('dead_counts');
  }
  public set deadCounts(value: number) {
    this._deadCounts = value;
  }
  public resetDeadCounts() {
    this._deadCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadCountsInput() {
    return this._deadCounts;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // neighbor_id - computed: false, optional: true, required: false
  private _neighborId?: string; 
  public get neighborId() {
    return this.getStringAttribute('neighbor_id');
  }
  public set neighborId(value: string) {
    this._neighborId = value;
  }
  public resetNeighborId() {
    this._neighborId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborIdInput() {
    return this._neighborId;
  }

  // retransmit_interval - computed: true, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transit_area_id - computed: false, optional: true, required: false
  private _transitAreaId?: string; 
  public get transitAreaId() {
    return this.getStringAttribute('transit_area_id');
  }
  public set transitAreaId(value: string) {
    this._transitAreaId = value;
  }
  public resetTransitAreaId() {
    this._transitAreaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitAreaIdInput() {
    return this._transitAreaId;
  }

  // transit_delay - computed: true, optional: true, required: false
  private _transitDelay?: number; 
  public get transitDelay() {
    return this.getNumberAttribute('transit_delay');
  }
  public set transitDelay(value: number) {
    this._transitDelay = value;
  }
  public resetTransitDelay() {
    this._transitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitDelayInput() {
    return this._transitDelay;
  }
}

export class VirtualRouterProtocolOspfv3AreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolOspfv3AreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolOspfv3AreaVirtualLinkOutputReference {
    return new VirtualRouterProtocolOspfv3AreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolOspfv3Area {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#authentication VirtualRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#interface VirtualRouter#interface}
  */
  readonly interface?: VirtualRouterProtocolOspfv3AreaInterface[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#range VirtualRouter#range}
  */
  readonly range?: VirtualRouterProtocolOspfv3AreaRange[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#type VirtualRouter#type}
  */
  readonly type?: VirtualRouterProtocolOspfv3AreaType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#virtual_link VirtualRouter#virtual_link}
  */
  readonly virtualLink?: VirtualRouterProtocolOspfv3AreaVirtualLink[] | cdktf.IResolvable;
}

export function virtualRouterProtocolOspfv3AreaToTerraform(struct?: VirtualRouterProtocolOspfv3Area | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    interface: cdktf.listMapper(virtualRouterProtocolOspfv3AreaInterfaceToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    range: cdktf.listMapper(virtualRouterProtocolOspfv3AreaRangeToTerraform, false)(struct!.range),
    type: virtualRouterProtocolOspfv3AreaTypeToTerraform(struct!.type),
    virtual_link: cdktf.listMapper(virtualRouterProtocolOspfv3AreaVirtualLinkToTerraform, false)(struct!.virtualLink),
  }
}


export function virtualRouterProtocolOspfv3AreaToHclTerraform(struct?: VirtualRouterProtocolOspfv3Area | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(virtualRouterProtocolOspfv3AreaInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolOspfv3AreaInterfaceList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(virtualRouterProtocolOspfv3AreaRangeToHclTerraform, false)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolOspfv3AreaRangeList",
    },
    type: {
      value: virtualRouterProtocolOspfv3AreaTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AreaType",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(virtualRouterProtocolOspfv3AreaVirtualLinkToHclTerraform, false)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolOspfv3AreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolOspfv3Area | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._virtualLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLink = this._virtualLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3Area | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._interface.internalValue = undefined;
      this._name = undefined;
      this._range.internalValue = undefined;
      this._type.internalValue = undefined;
      this._virtualLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._interface.internalValue = value.interface;
      this._name = value.name;
      this._range.internalValue = value.range;
      this._type.internalValue = value.type;
      this._virtualLink.internalValue = value.virtualLink;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VirtualRouterProtocolOspfv3AreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VirtualRouterProtocolOspfv3AreaInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
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

  // range - computed: false, optional: true, required: false
  private _range = new VirtualRouterProtocolOspfv3AreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: VirtualRouterProtocolOspfv3AreaRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new VirtualRouterProtocolOspfv3AreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: VirtualRouterProtocolOspfv3AreaType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // virtual_link - computed: false, optional: true, required: false
  private _virtualLink = new VirtualRouterProtocolOspfv3AreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: VirtualRouterProtocolOspfv3AreaVirtualLink[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }
}

export class VirtualRouterProtocolOspfv3AreaList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolOspfv3Area[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolOspfv3AreaOutputReference {
    return new VirtualRouterProtocolOspfv3AreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileAhMd5 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 4 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileAhMd5ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileAhMd5ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileAhMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileAhMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileAhMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileAhSha1 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 5 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileAhSha1ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileAhSha1ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileAhSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileAhSha1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileAhSha1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileAhSha256 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 8 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileAhSha256ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileAhSha256ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileAhSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileAhSha256 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileAhSha256 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileAhSha384 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 12 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileAhSha384ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileAhSha384ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileAhSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileAhSha384 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileAhSha384 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileAhSha512 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 16 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileAhSha512ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileAhSha512ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAhSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileAhSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileAhSha512 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileAhSha512 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileAh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#md5 VirtualRouter#md5}
  */
  readonly md5?: VirtualRouterProtocolOspfv3AuthProfileAhMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#sha1 VirtualRouter#sha1}
  */
  readonly sha1?: VirtualRouterProtocolOspfv3AuthProfileAhSha1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#sha256 VirtualRouter#sha256}
  */
  readonly sha256?: VirtualRouterProtocolOspfv3AuthProfileAhSha256;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#sha384 VirtualRouter#sha384}
  */
  readonly sha384?: VirtualRouterProtocolOspfv3AuthProfileAhSha384;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#sha512 VirtualRouter#sha512}
  */
  readonly sha512?: VirtualRouterProtocolOspfv3AuthProfileAhSha512;
}

export function virtualRouterProtocolOspfv3AuthProfileAhToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: virtualRouterProtocolOspfv3AuthProfileAhMd5ToTerraform(struct!.md5),
    sha1: virtualRouterProtocolOspfv3AuthProfileAhSha1ToTerraform(struct!.sha1),
    sha256: virtualRouterProtocolOspfv3AuthProfileAhSha256ToTerraform(struct!.sha256),
    sha384: virtualRouterProtocolOspfv3AuthProfileAhSha384ToTerraform(struct!.sha384),
    sha512: virtualRouterProtocolOspfv3AuthProfileAhSha512ToTerraform(struct!.sha512),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileAhToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: virtualRouterProtocolOspfv3AuthProfileAhMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileAhMd5",
    },
    sha1: {
      value: virtualRouterProtocolOspfv3AuthProfileAhSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileAhSha1",
    },
    sha256: {
      value: virtualRouterProtocolOspfv3AuthProfileAhSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileAhSha256",
    },
    sha384: {
      value: virtualRouterProtocolOspfv3AuthProfileAhSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileAhSha384",
    },
    sha512: {
      value: virtualRouterProtocolOspfv3AuthProfileAhSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileAhSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileAhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileAh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._sha1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1?.internalValue;
    }
    if (this._sha256?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256?.internalValue;
    }
    if (this._sha384?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384 = this._sha384?.internalValue;
    }
    if (this._sha512?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha512 = this._sha512?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileAh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._sha1.internalValue = undefined;
      this._sha256.internalValue = undefined;
      this._sha384.internalValue = undefined;
      this._sha512.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._sha1.internalValue = value.sha1;
      this._sha256.internalValue = value.sha256;
      this._sha384.internalValue = value.sha384;
      this._sha512.internalValue = value.sha512;
    }
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new VirtualRouterProtocolOspfv3AuthProfileAhMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: VirtualRouterProtocolOspfv3AuthProfileAhMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1 = new VirtualRouterProtocolOspfv3AuthProfileAhSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: VirtualRouterProtocolOspfv3AuthProfileAhSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256 = new VirtualRouterProtocolOspfv3AuthProfileAhSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: VirtualRouterProtocolOspfv3AuthProfileAhSha256) {
    this._sha256.internalValue = value;
  }
  public resetSha256() {
    this._sha256.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256.internalValue;
  }

  // sha384 - computed: false, optional: true, required: false
  private _sha384 = new VirtualRouterProtocolOspfv3AuthProfileAhSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: VirtualRouterProtocolOspfv3AuthProfileAhSha384) {
    this._sha384.internalValue = value;
  }
  public resetSha384() {
    this._sha384.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384Input() {
    return this._sha384.internalValue;
  }

  // sha512 - computed: false, optional: true, required: false
  private _sha512 = new VirtualRouterProtocolOspfv3AuthProfileAhSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: VirtualRouterProtocolOspfv3AuthProfileAhSha512) {
    this._sha512.internalValue = value;
  }
  public resetSha512() {
    this._sha512.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha512Input() {
    return this._sha512.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 4 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone {
}

export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 5 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 8 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 12 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 16 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512ToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512ToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEspAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#md5 VirtualRouter#md5}
  */
  readonly md5?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#none VirtualRouter#none}
  */
  readonly none?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#sha1 VirtualRouter#sha1}
  */
  readonly sha1?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#sha256 VirtualRouter#sha256}
  */
  readonly sha256?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#sha384 VirtualRouter#sha384}
  */
  readonly sha384?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#sha512 VirtualRouter#sha512}
  */
  readonly sha512?: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512;
}

export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5ToTerraform(struct!.md5),
    none: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneToTerraform(struct!.none),
    sha1: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1ToTerraform(struct!.sha1),
    sha256: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256ToTerraform(struct!.sha256),
    sha384: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384ToTerraform(struct!.sha384),
    sha512: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512ToTerraform(struct!.sha512),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspAuthenticationToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5",
    },
    none: {
      value: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone",
    },
    sha1: {
      value: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1",
    },
    sha256: {
      value: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256",
    },
    sha384: {
      value: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384",
    },
    sha512: {
      value: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEspAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._sha1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1?.internalValue;
    }
    if (this._sha256?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256?.internalValue;
    }
    if (this._sha384?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384 = this._sha384?.internalValue;
    }
    if (this._sha512?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha512 = this._sha512?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._none.internalValue = undefined;
      this._sha1.internalValue = undefined;
      this._sha256.internalValue = undefined;
      this._sha384.internalValue = undefined;
      this._sha512.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._none.internalValue = value.none;
      this._sha1.internalValue = value.sha1;
      this._sha256.internalValue = value.sha256;
      this._sha384.internalValue = value.sha384;
      this._sha512.internalValue = value.sha512;
    }
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1 = new VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256 = new VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256) {
    this._sha256.internalValue = value;
  }
  public resetSha256() {
    this._sha256.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256.internalValue;
  }

  // sha384 - computed: false, optional: true, required: false
  private _sha384 = new VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384) {
    this._sha384.internalValue = value;
  }
  public resetSha384() {
    this._sha384.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384Input() {
    return this._sha384.internalValue;
  }

  // sha512 - computed: false, optional: true, required: false
  private _sha512 = new VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512) {
    this._sha512.internalValue = value;
  }
  public resetSha512() {
    this._sha512.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha512Input() {
    return this._sha512.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEspEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#algorithm VirtualRouter#algorithm}
  */
  readonly algorithm?: string;
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total number of sections: 3des: 6, aes128: 4, aes192: 6, aes256: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileEspEncryptionToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspEncryptionToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEspEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileEspEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEspEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEspEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._key = value.key;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfileEsp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#authentication VirtualRouter#authentication}
  */
  readonly authentication?: VirtualRouterProtocolOspfv3AuthProfileEspAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#encryption VirtualRouter#encryption}
  */
  readonly encryption?: VirtualRouterProtocolOspfv3AuthProfileEspEncryption;
}

export function virtualRouterProtocolOspfv3AuthProfileEspToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationToTerraform(struct!.authentication),
    encryption: virtualRouterProtocolOspfv3AuthProfileEspEncryptionToTerraform(struct!.encryption),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileEspToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfileEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: virtualRouterProtocolOspfv3AuthProfileEspAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEspAuthentication",
    },
    encryption: {
      value: virtualRouterProtocolOspfv3AuthProfileEspEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEspEncryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfileEsp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfileEsp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._encryption.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._encryption.internalValue = value.encryption;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new VirtualRouterProtocolOspfv3AuthProfileEspAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: VirtualRouterProtocolOspfv3AuthProfileEspAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new VirtualRouterProtocolOspfv3AuthProfileEspEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: VirtualRouterProtocolOspfv3AuthProfileEspEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface VirtualRouterProtocolOspfv3AuthProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#ah VirtualRouter#ah}
  */
  readonly ah?: VirtualRouterProtocolOspfv3AuthProfileAh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#esp VirtualRouter#esp}
  */
  readonly esp?: VirtualRouterProtocolOspfv3AuthProfileEsp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * SPI for both inbound and outbound SA, hex format xxxxxxxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#spi VirtualRouter#spi}
  */
  readonly spi?: string;
}

export function virtualRouterProtocolOspfv3AuthProfileToTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ah: virtualRouterProtocolOspfv3AuthProfileAhToTerraform(struct!.ah),
    esp: virtualRouterProtocolOspfv3AuthProfileEspToTerraform(struct!.esp),
    name: cdktf.stringToTerraform(struct!.name),
    spi: cdktf.stringToTerraform(struct!.spi),
  }
}


export function virtualRouterProtocolOspfv3AuthProfileToHclTerraform(struct?: VirtualRouterProtocolOspfv3AuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ah: {
      value: virtualRouterProtocolOspfv3AuthProfileAhToHclTerraform(struct!.ah),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileAh",
    },
    esp: {
      value: virtualRouterProtocolOspfv3AuthProfileEspToHclTerraform(struct!.esp),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileEsp",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spi: {
      value: cdktf.stringToHclTerraform(struct!.spi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3AuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolOspfv3AuthProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ah?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ah = this._ah?.internalValue;
    }
    if (this._esp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.esp = this._esp?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spi !== undefined) {
      hasAnyValues = true;
      internalValueResult.spi = this._spi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3AuthProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ah.internalValue = undefined;
      this._esp.internalValue = undefined;
      this._name = undefined;
      this._spi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ah.internalValue = value.ah;
      this._esp.internalValue = value.esp;
      this._name = value.name;
      this._spi = value.spi;
    }
  }

  // ah - computed: false, optional: true, required: false
  private _ah = new VirtualRouterProtocolOspfv3AuthProfileAhOutputReference(this, "ah");
  public get ah() {
    return this._ah;
  }
  public putAh(value: VirtualRouterProtocolOspfv3AuthProfileAh) {
    this._ah.internalValue = value;
  }
  public resetAh() {
    this._ah.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahInput() {
    return this._ah.internalValue;
  }

  // esp - computed: false, optional: true, required: false
  private _esp = new VirtualRouterProtocolOspfv3AuthProfileEspOutputReference(this, "esp");
  public get esp() {
    return this._esp;
  }
  public putEsp(value: VirtualRouterProtocolOspfv3AuthProfileEsp) {
    this._esp.internalValue = value;
  }
  public resetEsp() {
    this._esp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espInput() {
    return this._esp.internalValue;
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

  // spi - computed: false, optional: true, required: false
  private _spi?: string; 
  public get spi() {
    return this.getStringAttribute('spi');
  }
  public set spi(value: string) {
    this._spi = value;
  }
  public resetSpi() {
    this._spi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiInput() {
    return this._spi;
  }
}

export class VirtualRouterProtocolOspfv3AuthProfileList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolOspfv3AuthProfile[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolOspfv3AuthProfileOutputReference {
    return new VirtualRouterProtocolOspfv3AuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolOspfv3ExportRules {
  /**
  * metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#metric VirtualRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * path type to be used for imported external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#new_path_type VirtualRouter#new_path_type}
  */
  readonly newPathType?: string;
  /**
  * new tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#new_tag VirtualRouter#new_tag}
  */
  readonly newTag?: string;
}

export function virtualRouterProtocolOspfv3ExportRulesToTerraform(struct?: VirtualRouterProtocolOspfv3ExportRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    new_path_type: cdktf.stringToTerraform(struct!.newPathType),
    new_tag: cdktf.stringToTerraform(struct!.newTag),
  }
}


export function virtualRouterProtocolOspfv3ExportRulesToHclTerraform(struct?: VirtualRouterProtocolOspfv3ExportRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_path_type: {
      value: cdktf.stringToHclTerraform(struct!.newPathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_tag: {
      value: cdktf.stringToHclTerraform(struct!.newTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3ExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolOspfv3ExportRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._newPathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPathType = this._newPathType;
    }
    if (this._newTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTag = this._newTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3ExportRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._newPathType = undefined;
      this._newTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._name = value.name;
      this._newPathType = value.newPathType;
      this._newTag = value.newTag;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // new_path_type - computed: true, optional: true, required: false
  private _newPathType?: string; 
  public get newPathType() {
    return this.getStringAttribute('new_path_type');
  }
  public set newPathType(value: string) {
    this._newPathType = value;
  }
  public resetNewPathType() {
    this._newPathType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPathTypeInput() {
    return this._newPathType;
  }

  // new_tag - computed: false, optional: true, required: false
  private _newTag?: string; 
  public get newTag() {
    return this.getStringAttribute('new_tag');
  }
  public set newTag(value: string) {
    this._newTag = value;
  }
  public resetNewTag() {
    this._newTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTagInput() {
    return this._newTag;
  }
}

export class VirtualRouterProtocolOspfv3ExportRulesList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolOspfv3ExportRules[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolOspfv3ExportRulesOutputReference {
    return new VirtualRouterProtocolOspfv3ExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolOspfv3GlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#profile VirtualRouter#profile}
  */
  readonly profile?: string;
}

export function virtualRouterProtocolOspfv3GlobalBfdToTerraform(struct?: VirtualRouterProtocolOspfv3GlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function virtualRouterProtocolOspfv3GlobalBfdToHclTerraform(struct?: VirtualRouterProtocolOspfv3GlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3GlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3GlobalBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3GlobalBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface VirtualRouterProtocolOspfv3GracefulRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#enable VirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * maximum local restarting time (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#grace_period VirtualRouter#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * enable/disable helping neighboring routers to graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#helper_enable VirtualRouter#helper_enable}
  */
  readonly helperEnable?: boolean | cdktf.IResolvable;
  /**
  * maximum of neighbor restart time accepted (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#max_neighbor_restart_time VirtualRouter#max_neighbor_restart_time}
  */
  readonly maxNeighborRestartTime?: number;
  /**
  * enable/disable strict LSA checking. Abort GR if lsa change is detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#strict_l_s_a_checking VirtualRouter#strict_l_s_a_checking}
  */
  readonly strictLSAChecking?: boolean | cdktf.IResolvable;
}

export function virtualRouterProtocolOspfv3GracefulRestartToTerraform(struct?: VirtualRouterProtocolOspfv3GracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    helper_enable: cdktf.booleanToTerraform(struct!.helperEnable),
    max_neighbor_restart_time: cdktf.numberToTerraform(struct!.maxNeighborRestartTime),
    strict_l_s_a_checking: cdktf.booleanToTerraform(struct!.strictLSAChecking),
  }
}


export function virtualRouterProtocolOspfv3GracefulRestartToHclTerraform(struct?: VirtualRouterProtocolOspfv3GracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    helper_enable: {
      value: cdktf.booleanToHclTerraform(struct!.helperEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_neighbor_restart_time: {
      value: cdktf.numberToHclTerraform(struct!.maxNeighborRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_l_s_a_checking: {
      value: cdktf.booleanToHclTerraform(struct!.strictLSAChecking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3GracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3GracefulRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._helperEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperEnable = this._helperEnable;
    }
    if (this._maxNeighborRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNeighborRestartTime = this._maxNeighborRestartTime;
    }
    if (this._strictLSAChecking !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLSAChecking = this._strictLSAChecking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3GracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._gracePeriod = undefined;
      this._helperEnable = undefined;
      this._maxNeighborRestartTime = undefined;
      this._strictLSAChecking = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._gracePeriod = value.gracePeriod;
      this._helperEnable = value.helperEnable;
      this._maxNeighborRestartTime = value.maxNeighborRestartTime;
      this._strictLSAChecking = value.strictLSAChecking;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // helper_enable - computed: false, optional: true, required: false
  private _helperEnable?: boolean | cdktf.IResolvable; 
  public get helperEnable() {
    return this.getBooleanAttribute('helper_enable');
  }
  public set helperEnable(value: boolean | cdktf.IResolvable) {
    this._helperEnable = value;
  }
  public resetHelperEnable() {
    this._helperEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperEnableInput() {
    return this._helperEnable;
  }

  // max_neighbor_restart_time - computed: true, optional: true, required: false
  private _maxNeighborRestartTime?: number; 
  public get maxNeighborRestartTime() {
    return this.getNumberAttribute('max_neighbor_restart_time');
  }
  public set maxNeighborRestartTime(value: number) {
    this._maxNeighborRestartTime = value;
  }
  public resetMaxNeighborRestartTime() {
    this._maxNeighborRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNeighborRestartTimeInput() {
    return this._maxNeighborRestartTime;
  }

  // strict_l_s_a_checking - computed: false, optional: true, required: false
  private _strictLSAChecking?: boolean | cdktf.IResolvable; 
  public get strictLSAChecking() {
    return this.getBooleanAttribute('strict_l_s_a_checking');
  }
  public set strictLSAChecking(value: boolean | cdktf.IResolvable) {
    this._strictLSAChecking = value;
  }
  public resetStrictLSAChecking() {
    this._strictLSAChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLSACheckingInput() {
    return this._strictLSAChecking;
  }
}
export interface VirtualRouterProtocolOspfv3Timers {
  /**
  * The minimum time in seconds between distinct originations of any particular LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#lsa_interval VirtualRouter#lsa_interval}
  */
  readonly lsaInterval?: number;
  /**
  * Delay in seconds before running the SPF algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#spf_calculation_delay VirtualRouter#spf_calculation_delay}
  */
  readonly spfCalculationDelay?: number;
}

export function virtualRouterProtocolOspfv3TimersToTerraform(struct?: VirtualRouterProtocolOspfv3Timers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lsa_interval: cdktf.numberToTerraform(struct!.lsaInterval),
    spf_calculation_delay: cdktf.numberToTerraform(struct!.spfCalculationDelay),
  }
}


export function virtualRouterProtocolOspfv3TimersToHclTerraform(struct?: VirtualRouterProtocolOspfv3Timers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lsa_interval: {
      value: cdktf.numberToHclTerraform(struct!.lsaInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spf_calculation_delay: {
      value: cdktf.numberToHclTerraform(struct!.spfCalculationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3TimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3Timers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lsaInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsaInterval = this._lsaInterval;
    }
    if (this._spfCalculationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.spfCalculationDelay = this._spfCalculationDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3Timers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lsaInterval = undefined;
      this._spfCalculationDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lsaInterval = value.lsaInterval;
      this._spfCalculationDelay = value.spfCalculationDelay;
    }
  }

  // lsa_interval - computed: false, optional: true, required: false
  private _lsaInterval?: number; 
  public get lsaInterval() {
    return this.getNumberAttribute('lsa_interval');
  }
  public set lsaInterval(value: number) {
    this._lsaInterval = value;
  }
  public resetLsaInterval() {
    this._lsaInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaIntervalInput() {
    return this._lsaInterval;
  }

  // spf_calculation_delay - computed: false, optional: true, required: false
  private _spfCalculationDelay?: number; 
  public get spfCalculationDelay() {
    return this.getNumberAttribute('spf_calculation_delay');
  }
  public set spfCalculationDelay(value: number) {
    this._spfCalculationDelay = value;
  }
  public resetSpfCalculationDelay() {
    this._spfCalculationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfCalculationDelayInput() {
    return this._spfCalculationDelay;
  }
}
export interface VirtualRouterProtocolOspfv3 {
  /**
  * allow redistribute default route to OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#allow_redist_default_route VirtualRouter#allow_redist_default_route}
  */
  readonly allowRedistDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#area VirtualRouter#area}
  */
  readonly area?: VirtualRouterProtocolOspfv3Area[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#auth_profile VirtualRouter#auth_profile}
  */
  readonly authProfile?: VirtualRouterProtocolOspfv3AuthProfile[] | cdktf.IResolvable;
  /**
  * whether OSPFv3 should set the R- and V6-bits in its Router-LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#disable_transit_traffic VirtualRouter#disable_transit_traffic}
  */
  readonly disableTransitTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#enable VirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#export_rules VirtualRouter#export_rules}
  */
  readonly exportRules?: VirtualRouterProtocolOspfv3ExportRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#global_bfd VirtualRouter#global_bfd}
  */
  readonly globalBfd?: VirtualRouterProtocolOspfv3GlobalBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#graceful_restart VirtualRouter#graceful_restart}
  */
  readonly gracefulRestart?: VirtualRouterProtocolOspfv3GracefulRestart;
  /**
  * do not learn default route from OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#reject_default_route VirtualRouter#reject_default_route}
  */
  readonly rejectDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * router id of this OSPFv3 instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#router_id VirtualRouter#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#timers VirtualRouter#timers}
  */
  readonly timers?: VirtualRouterProtocolOspfv3Timers;
}

export function virtualRouterProtocolOspfv3ToTerraform(struct?: VirtualRouterProtocolOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_redist_default_route: cdktf.booleanToTerraform(struct!.allowRedistDefaultRoute),
    area: cdktf.listMapper(virtualRouterProtocolOspfv3AreaToTerraform, false)(struct!.area),
    auth_profile: cdktf.listMapper(virtualRouterProtocolOspfv3AuthProfileToTerraform, false)(struct!.authProfile),
    disable_transit_traffic: cdktf.booleanToTerraform(struct!.disableTransitTraffic),
    enable: cdktf.booleanToTerraform(struct!.enable),
    export_rules: cdktf.listMapper(virtualRouterProtocolOspfv3ExportRulesToTerraform, false)(struct!.exportRules),
    global_bfd: virtualRouterProtocolOspfv3GlobalBfdToTerraform(struct!.globalBfd),
    graceful_restart: virtualRouterProtocolOspfv3GracefulRestartToTerraform(struct!.gracefulRestart),
    reject_default_route: cdktf.booleanToTerraform(struct!.rejectDefaultRoute),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    timers: virtualRouterProtocolOspfv3TimersToTerraform(struct!.timers),
  }
}


export function virtualRouterProtocolOspfv3ToHclTerraform(struct?: VirtualRouterProtocolOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_redist_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.allowRedistDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    area: {
      value: cdktf.listMapperHcl(virtualRouterProtocolOspfv3AreaToHclTerraform, false)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolOspfv3AreaList",
    },
    auth_profile: {
      value: cdktf.listMapperHcl(virtualRouterProtocolOspfv3AuthProfileToHclTerraform, false)(struct!.authProfile),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolOspfv3AuthProfileList",
    },
    disable_transit_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.disableTransitTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_rules: {
      value: cdktf.listMapperHcl(virtualRouterProtocolOspfv3ExportRulesToHclTerraform, false)(struct!.exportRules),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolOspfv3ExportRulesList",
    },
    global_bfd: {
      value: virtualRouterProtocolOspfv3GlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3GlobalBfd",
    },
    graceful_restart: {
      value: virtualRouterProtocolOspfv3GracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3GracefulRestart",
    },
    reject_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.rejectDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timers: {
      value: virtualRouterProtocolOspfv3TimersToHclTerraform(struct!.timers),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3Timers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolOspfv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRedistDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRedistDefaultRoute = this._allowRedistDefaultRoute;
    }
    if (this._area?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area?.internalValue;
    }
    if (this._authProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProfile = this._authProfile?.internalValue;
    }
    if (this._disableTransitTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTransitTraffic = this._disableTransitTraffic;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._exportRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRules = this._exportRules?.internalValue;
    }
    if (this._globalBfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalBfd = this._globalBfd?.internalValue;
    }
    if (this._gracefulRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart?.internalValue;
    }
    if (this._rejectDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectDefaultRoute = this._rejectDefaultRoute;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._timers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timers = this._timers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolOspfv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRedistDefaultRoute = undefined;
      this._area.internalValue = undefined;
      this._authProfile.internalValue = undefined;
      this._disableTransitTraffic = undefined;
      this._enable = undefined;
      this._exportRules.internalValue = undefined;
      this._globalBfd.internalValue = undefined;
      this._gracefulRestart.internalValue = undefined;
      this._rejectDefaultRoute = undefined;
      this._routerId = undefined;
      this._timers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRedistDefaultRoute = value.allowRedistDefaultRoute;
      this._area.internalValue = value.area;
      this._authProfile.internalValue = value.authProfile;
      this._disableTransitTraffic = value.disableTransitTraffic;
      this._enable = value.enable;
      this._exportRules.internalValue = value.exportRules;
      this._globalBfd.internalValue = value.globalBfd;
      this._gracefulRestart.internalValue = value.gracefulRestart;
      this._rejectDefaultRoute = value.rejectDefaultRoute;
      this._routerId = value.routerId;
      this._timers.internalValue = value.timers;
    }
  }

  // allow_redist_default_route - computed: false, optional: true, required: false
  private _allowRedistDefaultRoute?: boolean | cdktf.IResolvable; 
  public get allowRedistDefaultRoute() {
    return this.getBooleanAttribute('allow_redist_default_route');
  }
  public set allowRedistDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._allowRedistDefaultRoute = value;
  }
  public resetAllowRedistDefaultRoute() {
    this._allowRedistDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRedistDefaultRouteInput() {
    return this._allowRedistDefaultRoute;
  }

  // area - computed: false, optional: true, required: false
  private _area = new VirtualRouterProtocolOspfv3AreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: VirtualRouterProtocolOspfv3Area[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // auth_profile - computed: false, optional: true, required: false
  private _authProfile = new VirtualRouterProtocolOspfv3AuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }
  public putAuthProfile(value: VirtualRouterProtocolOspfv3AuthProfile[] | cdktf.IResolvable) {
    this._authProfile.internalValue = value;
  }
  public resetAuthProfile() {
    this._authProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProfileInput() {
    return this._authProfile.internalValue;
  }

  // disable_transit_traffic - computed: false, optional: true, required: false
  private _disableTransitTraffic?: boolean | cdktf.IResolvable; 
  public get disableTransitTraffic() {
    return this.getBooleanAttribute('disable_transit_traffic');
  }
  public set disableTransitTraffic(value: boolean | cdktf.IResolvable) {
    this._disableTransitTraffic = value;
  }
  public resetDisableTransitTraffic() {
    this._disableTransitTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTransitTrafficInput() {
    return this._disableTransitTraffic;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // export_rules - computed: false, optional: true, required: false
  private _exportRules = new VirtualRouterProtocolOspfv3ExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }
  public putExportRules(value: VirtualRouterProtocolOspfv3ExportRules[] | cdktf.IResolvable) {
    this._exportRules.internalValue = value;
  }
  public resetExportRules() {
    this._exportRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRulesInput() {
    return this._exportRules.internalValue;
  }

  // global_bfd - computed: false, optional: true, required: false
  private _globalBfd = new VirtualRouterProtocolOspfv3GlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: VirtualRouterProtocolOspfv3GlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new VirtualRouterProtocolOspfv3GracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: VirtualRouterProtocolOspfv3GracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // reject_default_route - computed: false, optional: true, required: false
  private _rejectDefaultRoute?: boolean | cdktf.IResolvable; 
  public get rejectDefaultRoute() {
    return this.getBooleanAttribute('reject_default_route');
  }
  public set rejectDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._rejectDefaultRoute = value;
  }
  public resetRejectDefaultRoute() {
    this._rejectDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectDefaultRouteInput() {
    return this._rejectDefaultRoute;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // timers - computed: false, optional: true, required: false
  private _timers = new VirtualRouterProtocolOspfv3TimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: VirtualRouterProtocolOspfv3Timers) {
    this._timers.internalValue = value;
  }
  public resetTimers() {
    this._timers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers.internalValue;
  }
}
export interface VirtualRouterProtocolRedistProfileActionNoRedist {
}

export function virtualRouterProtocolRedistProfileActionNoRedistToTerraform(struct?: VirtualRouterProtocolRedistProfileActionNoRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolRedistProfileActionNoRedistToHclTerraform(struct?: VirtualRouterProtocolRedistProfileActionNoRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolRedistProfileActionNoRedistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileActionNoRedist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileActionNoRedist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolRedistProfileActionRedist {
}

export function virtualRouterProtocolRedistProfileActionRedistToTerraform(struct?: VirtualRouterProtocolRedistProfileActionRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolRedistProfileActionRedistToHclTerraform(struct?: VirtualRouterProtocolRedistProfileActionRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolRedistProfileActionRedistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileActionRedist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileActionRedist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolRedistProfileAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#no_redist VirtualRouter#no_redist}
  */
  readonly noRedist?: VirtualRouterProtocolRedistProfileActionNoRedist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#redist VirtualRouter#redist}
  */
  readonly redist?: VirtualRouterProtocolRedistProfileActionRedist;
}

export function virtualRouterProtocolRedistProfileActionToTerraform(struct?: VirtualRouterProtocolRedistProfileAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_redist: virtualRouterProtocolRedistProfileActionNoRedistToTerraform(struct!.noRedist),
    redist: virtualRouterProtocolRedistProfileActionRedistToTerraform(struct!.redist),
  }
}


export function virtualRouterProtocolRedistProfileActionToHclTerraform(struct?: VirtualRouterProtocolRedistProfileAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_redist: {
      value: virtualRouterProtocolRedistProfileActionNoRedistToHclTerraform(struct!.noRedist),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileActionNoRedist",
    },
    redist: {
      value: virtualRouterProtocolRedistProfileActionRedistToHclTerraform(struct!.redist),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileActionRedist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noRedist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRedist = this._noRedist?.internalValue;
    }
    if (this._redist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redist = this._redist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noRedist.internalValue = undefined;
      this._redist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noRedist.internalValue = value.noRedist;
      this._redist.internalValue = value.redist;
    }
  }

  // no_redist - computed: false, optional: true, required: false
  private _noRedist = new VirtualRouterProtocolRedistProfileActionNoRedistOutputReference(this, "no_redist");
  public get noRedist() {
    return this._noRedist;
  }
  public putNoRedist(value: VirtualRouterProtocolRedistProfileActionNoRedist) {
    this._noRedist.internalValue = value;
  }
  public resetNoRedist() {
    this._noRedist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRedistInput() {
    return this._noRedist.internalValue;
  }

  // redist - computed: false, optional: true, required: false
  private _redist = new VirtualRouterProtocolRedistProfileActionRedistOutputReference(this, "redist");
  public get redist() {
    return this._redist;
  }
  public putRedist(value: VirtualRouterProtocolRedistProfileActionRedist) {
    this._redist.internalValue = value;
  }
  public resetRedist() {
    this._redist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistInput() {
    return this._redist.internalValue;
  }
}
export interface VirtualRouterProtocolRedistProfileFilterBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#community VirtualRouter#community}
  */
  readonly community?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#extended_community VirtualRouter#extended_community}
  */
  readonly extendedCommunity?: string[];
}

export function virtualRouterProtocolRedistProfileFilterBgpToTerraform(struct?: VirtualRouterProtocolRedistProfileFilterBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    extended_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedCommunity),
  }
}


export function virtualRouterProtocolRedistProfileFilterBgpToHclTerraform(struct?: VirtualRouterProtocolRedistProfileFilterBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extended_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileFilterBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileFilterBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._extendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunity = this._extendedCommunity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileFilterBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._extendedCommunity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._extendedCommunity = value.extendedCommunity;
    }
  }

  // community - computed: false, optional: true, required: false
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
  }
  public set community(value: string[]) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // extended_community - computed: false, optional: true, required: false
  private _extendedCommunity?: string[]; 
  public get extendedCommunity() {
    return this.getListAttribute('extended_community');
  }
  public set extendedCommunity(value: string[]) {
    this._extendedCommunity = value;
  }
  public resetExtendedCommunity() {
    this._extendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityInput() {
    return this._extendedCommunity;
  }
}
export interface VirtualRouterProtocolRedistProfileFilterOspf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#area VirtualRouter#area}
  */
  readonly area?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#path_type VirtualRouter#path_type}
  */
  readonly pathType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#tag VirtualRouter#tag}
  */
  readonly tag?: string[];
}

export function virtualRouterProtocolRedistProfileFilterOspfToTerraform(struct?: VirtualRouterProtocolRedistProfileFilterOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.area),
    path_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathType),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
  }
}


export function virtualRouterProtocolRedistProfileFilterOspfToHclTerraform(struct?: VirtualRouterProtocolRedistProfileFilterOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.area),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileFilterOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileFilterOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileFilterOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area = undefined;
      this._pathType = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area = value.area;
      this._pathType = value.pathType;
      this._tag = value.tag;
    }
  }

  // area - computed: false, optional: true, required: false
  private _area?: string[]; 
  public get area() {
    return this.getListAttribute('area');
  }
  public set area(value: string[]) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // path_type - computed: false, optional: true, required: false
  private _pathType?: string[]; 
  public get pathType() {
    return this.getListAttribute('path_type');
  }
  public set pathType(value: string[]) {
    this._pathType = value;
  }
  public resetPathType() {
    this._pathType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface VirtualRouterProtocolRedistProfileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#bgp VirtualRouter#bgp}
  */
  readonly bgp?: VirtualRouterProtocolRedistProfileFilterBgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#destination VirtualRouter#destination}
  */
  readonly destination?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#interface VirtualRouter#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#nexthop VirtualRouter#nexthop}
  */
  readonly nexthop?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#ospf VirtualRouter#ospf}
  */
  readonly ospf?: VirtualRouterProtocolRedistProfileFilterOspf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#type VirtualRouter#type}
  */
  readonly type?: string[];
}

export function virtualRouterProtocolRedistProfileFilterToTerraform(struct?: VirtualRouterProtocolRedistProfileFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: virtualRouterProtocolRedistProfileFilterBgpToTerraform(struct!.bgp),
    destination: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destination),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    nexthop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nexthop),
    ospf: virtualRouterProtocolRedistProfileFilterOspfToTerraform(struct!.ospf),
    type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.type),
  }
}


export function virtualRouterProtocolRedistProfileFilterToHclTerraform(struct?: VirtualRouterProtocolRedistProfileFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: virtualRouterProtocolRedistProfileFilterBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileFilterBgp",
    },
    destination: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destination),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nexthop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nexthop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ospf: {
      value: virtualRouterProtocolRedistProfileFilterOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileFilterOspf",
    },
    type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.type),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._destination = undefined;
      this._interface = undefined;
      this._nexthop = undefined;
      this._ospf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._destination = value.destination;
      this._interface = value.interface;
      this._nexthop = value.nexthop;
      this._ospf.internalValue = value.ospf;
      this._type = value.type;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new VirtualRouterProtocolRedistProfileFilterBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: VirtualRouterProtocolRedistProfileFilterBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return this.getListAttribute('interface');
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // nexthop - computed: false, optional: true, required: false
  private _nexthop?: string[]; 
  public get nexthop() {
    return this.getListAttribute('nexthop');
  }
  public set nexthop(value: string[]) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new VirtualRouterProtocolRedistProfileFilterOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: VirtualRouterProtocolRedistProfileFilterOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return this.getListAttribute('type');
  }
  public set type(value: string[]) {
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
export interface VirtualRouterProtocolRedistProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#action VirtualRouter#action}
  */
  readonly action?: VirtualRouterProtocolRedistProfileAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#filter VirtualRouter#filter}
  */
  readonly filter?: VirtualRouterProtocolRedistProfileFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#priority VirtualRouter#priority}
  */
  readonly priority?: number;
}

export function virtualRouterProtocolRedistProfileToTerraform(struct?: VirtualRouterProtocolRedistProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: virtualRouterProtocolRedistProfileActionToTerraform(struct!.action),
    filter: virtualRouterProtocolRedistProfileFilterToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function virtualRouterProtocolRedistProfileToHclTerraform(struct?: VirtualRouterProtocolRedistProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: virtualRouterProtocolRedistProfileActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileAction",
    },
    filter: {
      value: virtualRouterProtocolRedistProfileFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileFilter",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolRedistProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._filter.internalValue = value.filter;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new VirtualRouterProtocolRedistProfileActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: VirtualRouterProtocolRedistProfileAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new VirtualRouterProtocolRedistProfileFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: VirtualRouterProtocolRedistProfileFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class VirtualRouterProtocolRedistProfileList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolRedistProfile[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolRedistProfileOutputReference {
    return new VirtualRouterProtocolRedistProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolRedistProfileIpv6ActionNoRedist {
}

export function virtualRouterProtocolRedistProfileIpv6ActionNoRedistToTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6ActionNoRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolRedistProfileIpv6ActionNoRedistToHclTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6ActionNoRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolRedistProfileIpv6ActionNoRedistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileIpv6ActionNoRedist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileIpv6ActionNoRedist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolRedistProfileIpv6ActionRedist {
}

export function virtualRouterProtocolRedistProfileIpv6ActionRedistToTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6ActionRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolRedistProfileIpv6ActionRedistToHclTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6ActionRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolRedistProfileIpv6ActionRedistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileIpv6ActionRedist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileIpv6ActionRedist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolRedistProfileIpv6Action {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#no_redist VirtualRouter#no_redist}
  */
  readonly noRedist?: VirtualRouterProtocolRedistProfileIpv6ActionNoRedist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#redist VirtualRouter#redist}
  */
  readonly redist?: VirtualRouterProtocolRedistProfileIpv6ActionRedist;
}

export function virtualRouterProtocolRedistProfileIpv6ActionToTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6Action | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_redist: virtualRouterProtocolRedistProfileIpv6ActionNoRedistToTerraform(struct!.noRedist),
    redist: virtualRouterProtocolRedistProfileIpv6ActionRedistToTerraform(struct!.redist),
  }
}


export function virtualRouterProtocolRedistProfileIpv6ActionToHclTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6Action | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_redist: {
      value: virtualRouterProtocolRedistProfileIpv6ActionNoRedistToHclTerraform(struct!.noRedist),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileIpv6ActionNoRedist",
    },
    redist: {
      value: virtualRouterProtocolRedistProfileIpv6ActionRedistToHclTerraform(struct!.redist),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileIpv6ActionRedist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileIpv6ActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileIpv6Action | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noRedist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRedist = this._noRedist?.internalValue;
    }
    if (this._redist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redist = this._redist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileIpv6Action | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noRedist.internalValue = undefined;
      this._redist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noRedist.internalValue = value.noRedist;
      this._redist.internalValue = value.redist;
    }
  }

  // no_redist - computed: false, optional: true, required: false
  private _noRedist = new VirtualRouterProtocolRedistProfileIpv6ActionNoRedistOutputReference(this, "no_redist");
  public get noRedist() {
    return this._noRedist;
  }
  public putNoRedist(value: VirtualRouterProtocolRedistProfileIpv6ActionNoRedist) {
    this._noRedist.internalValue = value;
  }
  public resetNoRedist() {
    this._noRedist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRedistInput() {
    return this._noRedist.internalValue;
  }

  // redist - computed: false, optional: true, required: false
  private _redist = new VirtualRouterProtocolRedistProfileIpv6ActionRedistOutputReference(this, "redist");
  public get redist() {
    return this._redist;
  }
  public putRedist(value: VirtualRouterProtocolRedistProfileIpv6ActionRedist) {
    this._redist.internalValue = value;
  }
  public resetRedist() {
    this._redist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistInput() {
    return this._redist.internalValue;
  }
}
export interface VirtualRouterProtocolRedistProfileIpv6FilterBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#community VirtualRouter#community}
  */
  readonly community?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#extended_community VirtualRouter#extended_community}
  */
  readonly extendedCommunity?: string[];
}

export function virtualRouterProtocolRedistProfileIpv6FilterBgpToTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6FilterBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    extended_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedCommunity),
  }
}


export function virtualRouterProtocolRedistProfileIpv6FilterBgpToHclTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6FilterBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extended_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileIpv6FilterBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileIpv6FilterBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._extendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunity = this._extendedCommunity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileIpv6FilterBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._extendedCommunity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._extendedCommunity = value.extendedCommunity;
    }
  }

  // community - computed: false, optional: true, required: false
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
  }
  public set community(value: string[]) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // extended_community - computed: false, optional: true, required: false
  private _extendedCommunity?: string[]; 
  public get extendedCommunity() {
    return this.getListAttribute('extended_community');
  }
  public set extendedCommunity(value: string[]) {
    this._extendedCommunity = value;
  }
  public resetExtendedCommunity() {
    this._extendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityInput() {
    return this._extendedCommunity;
  }
}
export interface VirtualRouterProtocolRedistProfileIpv6FilterOspfv3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#area VirtualRouter#area}
  */
  readonly area?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#path_type VirtualRouter#path_type}
  */
  readonly pathType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#tag VirtualRouter#tag}
  */
  readonly tag?: string[];
}

export function virtualRouterProtocolRedistProfileIpv6FilterOspfv3ToTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6FilterOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.area),
    path_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathType),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
  }
}


export function virtualRouterProtocolRedistProfileIpv6FilterOspfv3ToHclTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6FilterOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.area),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileIpv6FilterOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileIpv6FilterOspfv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileIpv6FilterOspfv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area = undefined;
      this._pathType = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area = value.area;
      this._pathType = value.pathType;
      this._tag = value.tag;
    }
  }

  // area - computed: false, optional: true, required: false
  private _area?: string[]; 
  public get area() {
    return this.getListAttribute('area');
  }
  public set area(value: string[]) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // path_type - computed: false, optional: true, required: false
  private _pathType?: string[]; 
  public get pathType() {
    return this.getListAttribute('path_type');
  }
  public set pathType(value: string[]) {
    this._pathType = value;
  }
  public resetPathType() {
    this._pathType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface VirtualRouterProtocolRedistProfileIpv6Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#bgp VirtualRouter#bgp}
  */
  readonly bgp?: VirtualRouterProtocolRedistProfileIpv6FilterBgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#destination VirtualRouter#destination}
  */
  readonly destination?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#interface VirtualRouter#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#nexthop VirtualRouter#nexthop}
  */
  readonly nexthop?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#ospfv3 VirtualRouter#ospfv3}
  */
  readonly ospfv3?: VirtualRouterProtocolRedistProfileIpv6FilterOspfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#type VirtualRouter#type}
  */
  readonly type?: string[];
}

export function virtualRouterProtocolRedistProfileIpv6FilterToTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: virtualRouterProtocolRedistProfileIpv6FilterBgpToTerraform(struct!.bgp),
    destination: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destination),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    nexthop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nexthop),
    ospfv3: virtualRouterProtocolRedistProfileIpv6FilterOspfv3ToTerraform(struct!.ospfv3),
    type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.type),
  }
}


export function virtualRouterProtocolRedistProfileIpv6FilterToHclTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: virtualRouterProtocolRedistProfileIpv6FilterBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileIpv6FilterBgp",
    },
    destination: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destination),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nexthop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nexthop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ospfv3: {
      value: virtualRouterProtocolRedistProfileIpv6FilterOspfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileIpv6FilterOspfv3",
    },
    type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.type),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileIpv6FilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRedistProfileIpv6Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop;
    }
    if (this._ospfv3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3 = this._ospfv3?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileIpv6Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._destination = undefined;
      this._interface = undefined;
      this._nexthop = undefined;
      this._ospfv3.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._destination = value.destination;
      this._interface = value.interface;
      this._nexthop = value.nexthop;
      this._ospfv3.internalValue = value.ospfv3;
      this._type = value.type;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new VirtualRouterProtocolRedistProfileIpv6FilterBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: VirtualRouterProtocolRedistProfileIpv6FilterBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return this.getListAttribute('interface');
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // nexthop - computed: false, optional: true, required: false
  private _nexthop?: string[]; 
  public get nexthop() {
    return this.getListAttribute('nexthop');
  }
  public set nexthop(value: string[]) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // ospfv3 - computed: false, optional: true, required: false
  private _ospfv3 = new VirtualRouterProtocolRedistProfileIpv6FilterOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: VirtualRouterProtocolRedistProfileIpv6FilterOspfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return this.getListAttribute('type');
  }
  public set type(value: string[]) {
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
export interface VirtualRouterProtocolRedistProfileIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#action VirtualRouter#action}
  */
  readonly action?: VirtualRouterProtocolRedistProfileIpv6Action;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#filter VirtualRouter#filter}
  */
  readonly filter?: VirtualRouterProtocolRedistProfileIpv6Filter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#priority VirtualRouter#priority}
  */
  readonly priority?: number;
}

export function virtualRouterProtocolRedistProfileIpv6ToTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: virtualRouterProtocolRedistProfileIpv6ActionToTerraform(struct!.action),
    filter: virtualRouterProtocolRedistProfileIpv6FilterToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function virtualRouterProtocolRedistProfileIpv6ToHclTerraform(struct?: VirtualRouterProtocolRedistProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: virtualRouterProtocolRedistProfileIpv6ActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileIpv6Action",
    },
    filter: {
      value: virtualRouterProtocolRedistProfileIpv6FilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRedistProfileIpv6Filter",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRedistProfileIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolRedistProfileIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRedistProfileIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._filter.internalValue = value.filter;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new VirtualRouterProtocolRedistProfileIpv6ActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: VirtualRouterProtocolRedistProfileIpv6Action) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new VirtualRouterProtocolRedistProfileIpv6FilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: VirtualRouterProtocolRedistProfileIpv6Filter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class VirtualRouterProtocolRedistProfileIpv6List extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolRedistProfileIpv6[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolRedistProfileIpv6OutputReference {
    return new VirtualRouterProtocolRedistProfileIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolRipAuthProfileMd5 {
  /**
  * key for the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#key VirtualRouter#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * prefer to use this key when sending packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#preferred VirtualRouter#preferred}
  */
  readonly preferred?: boolean | cdktf.IResolvable;
}

export function virtualRouterProtocolRipAuthProfileMd5ToTerraform(struct?: VirtualRouterProtocolRipAuthProfileMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    preferred: cdktf.booleanToTerraform(struct!.preferred),
  }
}


export function virtualRouterProtocolRipAuthProfileMd5ToHclTerraform(struct?: VirtualRouterProtocolRipAuthProfileMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    preferred: {
      value: cdktf.booleanToHclTerraform(struct!.preferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipAuthProfileMd5OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolRipAuthProfileMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferred = this._preferred;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipAuthProfileMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._preferred = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._preferred = value.preferred;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // preferred - computed: false, optional: true, required: false
  private _preferred?: boolean | cdktf.IResolvable; 
  public get preferred() {
    return this.getBooleanAttribute('preferred');
  }
  public set preferred(value: boolean | cdktf.IResolvable) {
    this._preferred = value;
  }
  public resetPreferred() {
    this._preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred;
  }
}

export class VirtualRouterProtocolRipAuthProfileMd5List extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolRipAuthProfileMd5[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolRipAuthProfileMd5OutputReference {
    return new VirtualRouterProtocolRipAuthProfileMd5OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolRipAuthProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#md5 VirtualRouter#md5}
  */
  readonly md5?: VirtualRouterProtocolRipAuthProfileMd5[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * Simple password authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#password VirtualRouter#password}
  */
  readonly password?: string;
}

export function virtualRouterProtocolRipAuthProfileToTerraform(struct?: VirtualRouterProtocolRipAuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: cdktf.listMapper(virtualRouterProtocolRipAuthProfileMd5ToTerraform, false)(struct!.md5),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function virtualRouterProtocolRipAuthProfileToHclTerraform(struct?: VirtualRouterProtocolRipAuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: cdktf.listMapperHcl(virtualRouterProtocolRipAuthProfileMd5ToHclTerraform, false)(struct!.md5),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolRipAuthProfileMd5List",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipAuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolRipAuthProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipAuthProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._name = value.name;
      this._password = value.password;
    }
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new VirtualRouterProtocolRipAuthProfileMd5List(this, "md5", false);
  public get md5() {
    return this._md5;
  }
  public putMd5(value: VirtualRouterProtocolRipAuthProfileMd5[] | cdktf.IResolvable) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class VirtualRouterProtocolRipAuthProfileList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolRipAuthProfile[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolRipAuthProfileOutputReference {
    return new VirtualRouterProtocolRipAuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolRipExportRules {
  /**
  * metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#metric VirtualRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
}

export function virtualRouterProtocolRipExportRulesToTerraform(struct?: VirtualRouterProtocolRipExportRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualRouterProtocolRipExportRulesToHclTerraform(struct?: VirtualRouterProtocolRipExportRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolRipExportRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipExportRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._name = value.name;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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
}

export class VirtualRouterProtocolRipExportRulesList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolRipExportRules[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolRipExportRulesOutputReference {
    return new VirtualRouterProtocolRipExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolRipGlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#profile VirtualRouter#profile}
  */
  readonly profile?: string;
}

export function virtualRouterProtocolRipGlobalBfdToTerraform(struct?: VirtualRouterProtocolRipGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function virtualRouterProtocolRipGlobalBfdToHclTerraform(struct?: VirtualRouterProtocolRipGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRipGlobalBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipGlobalBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface VirtualRouterProtocolRipInterfacesBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#profile VirtualRouter#profile}
  */
  readonly profile?: string;
}

export function virtualRouterProtocolRipInterfacesBfdToTerraform(struct?: VirtualRouterProtocolRipInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function virtualRouterProtocolRipInterfacesBfdToHclTerraform(struct?: VirtualRouterProtocolRipInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipInterfacesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRipInterfacesBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipInterfacesBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface VirtualRouterProtocolRipInterfacesDefaultRouteAdvertise {
  /**
  * metric to be used when advertise default route via RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#metric VirtualRouter#metric}
  */
  readonly metric?: number;
}

export function virtualRouterProtocolRipInterfacesDefaultRouteAdvertiseToTerraform(struct?: VirtualRouterProtocolRipInterfacesDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function virtualRouterProtocolRipInterfacesDefaultRouteAdvertiseToHclTerraform(struct?: VirtualRouterProtocolRipInterfacesDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipInterfacesDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRipInterfacesDefaultRouteAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipInterfacesDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}
export interface VirtualRouterProtocolRipInterfacesDefaultRouteDisable {
}

export function virtualRouterProtocolRipInterfacesDefaultRouteDisableToTerraform(struct?: VirtualRouterProtocolRipInterfacesDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterProtocolRipInterfacesDefaultRouteDisableToHclTerraform(struct?: VirtualRouterProtocolRipInterfacesDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterProtocolRipInterfacesDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRipInterfacesDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipInterfacesDefaultRouteDisable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VirtualRouterProtocolRipInterfacesDefaultRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#advertise VirtualRouter#advertise}
  */
  readonly advertise?: VirtualRouterProtocolRipInterfacesDefaultRouteAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#disable VirtualRouter#disable}
  */
  readonly disable?: VirtualRouterProtocolRipInterfacesDefaultRouteDisable;
}

export function virtualRouterProtocolRipInterfacesDefaultRouteToTerraform(struct?: VirtualRouterProtocolRipInterfacesDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: virtualRouterProtocolRipInterfacesDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: virtualRouterProtocolRipInterfacesDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function virtualRouterProtocolRipInterfacesDefaultRouteToHclTerraform(struct?: VirtualRouterProtocolRipInterfacesDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: virtualRouterProtocolRipInterfacesDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRipInterfacesDefaultRouteAdvertise",
    },
    disable: {
      value: virtualRouterProtocolRipInterfacesDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRipInterfacesDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipInterfacesDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRipInterfacesDefaultRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._disable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipInterfacesDefaultRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._disable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._disable.internalValue = value.disable;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new VirtualRouterProtocolRipInterfacesDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: VirtualRouterProtocolRipInterfacesDefaultRouteAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // disable - computed: false, optional: true, required: false
  private _disable = new VirtualRouterProtocolRipInterfacesDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: VirtualRouterProtocolRipInterfacesDefaultRouteDisable) {
    this._disable.internalValue = value;
  }
  public resetDisable() {
    this._disable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable.internalValue;
  }
}
export interface VirtualRouterProtocolRipInterfaces {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#authentication VirtualRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#bfd VirtualRouter#bfd}
  */
  readonly bfd?: VirtualRouterProtocolRipInterfacesBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#default_route VirtualRouter#default_route}
  */
  readonly defaultRoute?: VirtualRouterProtocolRipInterfacesDefaultRoute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#enable VirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#mode VirtualRouter#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
}

export function virtualRouterProtocolRipInterfacesToTerraform(struct?: VirtualRouterProtocolRipInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: virtualRouterProtocolRipInterfacesBfdToTerraform(struct!.bfd),
    default_route: virtualRouterProtocolRipInterfacesDefaultRouteToTerraform(struct!.defaultRoute),
    enable: cdktf.booleanToTerraform(struct!.enable),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualRouterProtocolRipInterfacesToHclTerraform(struct?: VirtualRouterProtocolRipInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: virtualRouterProtocolRipInterfacesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRipInterfacesBfd",
    },
    default_route: {
      value: virtualRouterProtocolRipInterfacesDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRipInterfacesDefaultRoute",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterProtocolRipInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._defaultRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._defaultRoute.internalValue = undefined;
      this._enable = undefined;
      this._mode = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._bfd.internalValue = value.bfd;
      this._defaultRoute.internalValue = value.defaultRoute;
      this._enable = value.enable;
      this._mode = value.mode;
      this._name = value.name;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new VirtualRouterProtocolRipInterfacesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VirtualRouterProtocolRipInterfacesBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // default_route - computed: false, optional: true, required: false
  private _defaultRoute = new VirtualRouterProtocolRipInterfacesDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: VirtualRouterProtocolRipInterfacesDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class VirtualRouterProtocolRipInterfacesList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterProtocolRipInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterProtocolRipInterfacesOutputReference {
    return new VirtualRouterProtocolRipInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterProtocolRipTimers {
  /**
  * number of intervals take between route expiration to its deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#delete_intervals VirtualRouter#delete_intervals}
  */
  readonly deleteIntervals?: number;
  /**
  * number of intervals take between route last updated to its expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#expire_intervals VirtualRouter#expire_intervals}
  */
  readonly expireIntervals?: number;
  /**
  * timer interval value in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#interval_seconds VirtualRouter#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * number of intervals take between route advertisement (RIP response packet)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#update_intervals VirtualRouter#update_intervals}
  */
  readonly updateIntervals?: number;
}

export function virtualRouterProtocolRipTimersToTerraform(struct?: VirtualRouterProtocolRipTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_intervals: cdktf.numberToTerraform(struct!.deleteIntervals),
    expire_intervals: cdktf.numberToTerraform(struct!.expireIntervals),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    update_intervals: cdktf.numberToTerraform(struct!.updateIntervals),
  }
}


export function virtualRouterProtocolRipTimersToHclTerraform(struct?: VirtualRouterProtocolRipTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_intervals: {
      value: cdktf.numberToHclTerraform(struct!.deleteIntervals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expire_intervals: {
      value: cdktf.numberToHclTerraform(struct!.expireIntervals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_intervals: {
      value: cdktf.numberToHclTerraform(struct!.updateIntervals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRipTimers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteIntervals = this._deleteIntervals;
    }
    if (this._expireIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireIntervals = this._expireIntervals;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._updateIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateIntervals = this._updateIntervals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRipTimers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteIntervals = undefined;
      this._expireIntervals = undefined;
      this._intervalSeconds = undefined;
      this._updateIntervals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteIntervals = value.deleteIntervals;
      this._expireIntervals = value.expireIntervals;
      this._intervalSeconds = value.intervalSeconds;
      this._updateIntervals = value.updateIntervals;
    }
  }

  // delete_intervals - computed: true, optional: true, required: false
  private _deleteIntervals?: number; 
  public get deleteIntervals() {
    return this.getNumberAttribute('delete_intervals');
  }
  public set deleteIntervals(value: number) {
    this._deleteIntervals = value;
  }
  public resetDeleteIntervals() {
    this._deleteIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteIntervalsInput() {
    return this._deleteIntervals;
  }

  // expire_intervals - computed: true, optional: true, required: false
  private _expireIntervals?: number; 
  public get expireIntervals() {
    return this.getNumberAttribute('expire_intervals');
  }
  public set expireIntervals(value: number) {
    this._expireIntervals = value;
  }
  public resetExpireIntervals() {
    this._expireIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireIntervalsInput() {
    return this._expireIntervals;
  }

  // interval_seconds - computed: true, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // update_intervals - computed: true, optional: true, required: false
  private _updateIntervals?: number; 
  public get updateIntervals() {
    return this.getNumberAttribute('update_intervals');
  }
  public set updateIntervals(value: number) {
    this._updateIntervals = value;
  }
  public resetUpdateIntervals() {
    this._updateIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalsInput() {
    return this._updateIntervals;
  }
}
export interface VirtualRouterProtocolRip {
  /**
  * allow redistribute default route to RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#allow_redist_default_route VirtualRouter#allow_redist_default_route}
  */
  readonly allowRedistDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#auth_profile VirtualRouter#auth_profile}
  */
  readonly authProfile?: VirtualRouterProtocolRipAuthProfile[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#enable VirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#export_rules VirtualRouter#export_rules}
  */
  readonly exportRules?: VirtualRouterProtocolRipExportRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#global_bfd VirtualRouter#global_bfd}
  */
  readonly globalBfd?: VirtualRouterProtocolRipGlobalBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#interfaces VirtualRouter#interfaces}
  */
  readonly interfaces?: VirtualRouterProtocolRipInterfaces[] | cdktf.IResolvable;
  /**
  * do not learn default route from RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#reject_default_route VirtualRouter#reject_default_route}
  */
  readonly rejectDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#timers VirtualRouter#timers}
  */
  readonly timers?: VirtualRouterProtocolRipTimers;
}

export function virtualRouterProtocolRipToTerraform(struct?: VirtualRouterProtocolRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_redist_default_route: cdktf.booleanToTerraform(struct!.allowRedistDefaultRoute),
    auth_profile: cdktf.listMapper(virtualRouterProtocolRipAuthProfileToTerraform, false)(struct!.authProfile),
    enable: cdktf.booleanToTerraform(struct!.enable),
    export_rules: cdktf.listMapper(virtualRouterProtocolRipExportRulesToTerraform, false)(struct!.exportRules),
    global_bfd: virtualRouterProtocolRipGlobalBfdToTerraform(struct!.globalBfd),
    interfaces: cdktf.listMapper(virtualRouterProtocolRipInterfacesToTerraform, false)(struct!.interfaces),
    reject_default_route: cdktf.booleanToTerraform(struct!.rejectDefaultRoute),
    timers: virtualRouterProtocolRipTimersToTerraform(struct!.timers),
  }
}


export function virtualRouterProtocolRipToHclTerraform(struct?: VirtualRouterProtocolRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_redist_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.allowRedistDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_profile: {
      value: cdktf.listMapperHcl(virtualRouterProtocolRipAuthProfileToHclTerraform, false)(struct!.authProfile),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolRipAuthProfileList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_rules: {
      value: cdktf.listMapperHcl(virtualRouterProtocolRipExportRulesToHclTerraform, false)(struct!.exportRules),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolRipExportRulesList",
    },
    global_bfd: {
      value: virtualRouterProtocolRipGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRipGlobalBfd",
    },
    interfaces: {
      value: cdktf.listMapperHcl(virtualRouterProtocolRipInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolRipInterfacesList",
    },
    reject_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.rejectDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timers: {
      value: virtualRouterProtocolRipTimersToHclTerraform(struct!.timers),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRipTimers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocolRip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRedistDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRedistDefaultRoute = this._allowRedistDefaultRoute;
    }
    if (this._authProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProfile = this._authProfile?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._exportRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRules = this._exportRules?.internalValue;
    }
    if (this._globalBfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalBfd = this._globalBfd?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._rejectDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectDefaultRoute = this._rejectDefaultRoute;
    }
    if (this._timers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timers = this._timers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocolRip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRedistDefaultRoute = undefined;
      this._authProfile.internalValue = undefined;
      this._enable = undefined;
      this._exportRules.internalValue = undefined;
      this._globalBfd.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._rejectDefaultRoute = undefined;
      this._timers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRedistDefaultRoute = value.allowRedistDefaultRoute;
      this._authProfile.internalValue = value.authProfile;
      this._enable = value.enable;
      this._exportRules.internalValue = value.exportRules;
      this._globalBfd.internalValue = value.globalBfd;
      this._interfaces.internalValue = value.interfaces;
      this._rejectDefaultRoute = value.rejectDefaultRoute;
      this._timers.internalValue = value.timers;
    }
  }

  // allow_redist_default_route - computed: false, optional: true, required: false
  private _allowRedistDefaultRoute?: boolean | cdktf.IResolvable; 
  public get allowRedistDefaultRoute() {
    return this.getBooleanAttribute('allow_redist_default_route');
  }
  public set allowRedistDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._allowRedistDefaultRoute = value;
  }
  public resetAllowRedistDefaultRoute() {
    this._allowRedistDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRedistDefaultRouteInput() {
    return this._allowRedistDefaultRoute;
  }

  // auth_profile - computed: false, optional: true, required: false
  private _authProfile = new VirtualRouterProtocolRipAuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }
  public putAuthProfile(value: VirtualRouterProtocolRipAuthProfile[] | cdktf.IResolvable) {
    this._authProfile.internalValue = value;
  }
  public resetAuthProfile() {
    this._authProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProfileInput() {
    return this._authProfile.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // export_rules - computed: false, optional: true, required: false
  private _exportRules = new VirtualRouterProtocolRipExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }
  public putExportRules(value: VirtualRouterProtocolRipExportRules[] | cdktf.IResolvable) {
    this._exportRules.internalValue = value;
  }
  public resetExportRules() {
    this._exportRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRulesInput() {
    return this._exportRules.internalValue;
  }

  // global_bfd - computed: false, optional: true, required: false
  private _globalBfd = new VirtualRouterProtocolRipGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: VirtualRouterProtocolRipGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new VirtualRouterProtocolRipInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: VirtualRouterProtocolRipInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // reject_default_route - computed: false, optional: true, required: false
  private _rejectDefaultRoute?: boolean | cdktf.IResolvable; 
  public get rejectDefaultRoute() {
    return this.getBooleanAttribute('reject_default_route');
  }
  public set rejectDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._rejectDefaultRoute = value;
  }
  public resetRejectDefaultRoute() {
    this._rejectDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectDefaultRouteInput() {
    return this._rejectDefaultRoute;
  }

  // timers - computed: false, optional: true, required: false
  private _timers = new VirtualRouterProtocolRipTimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: VirtualRouterProtocolRipTimers) {
    this._timers.internalValue = value;
  }
  public resetTimers() {
    this._timers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers.internalValue;
  }
}
export interface VirtualRouterProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#bgp VirtualRouter#bgp}
  */
  readonly bgp?: VirtualRouterProtocolBgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#ospf VirtualRouter#ospf}
  */
  readonly ospf?: VirtualRouterProtocolOspf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#ospfv3 VirtualRouter#ospfv3}
  */
  readonly ospfv3?: VirtualRouterProtocolOspfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#redist_profile VirtualRouter#redist_profile}
  */
  readonly redistProfile?: VirtualRouterProtocolRedistProfile[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#redist_profile_ipv6 VirtualRouter#redist_profile_ipv6}
  */
  readonly redistProfileIpv6?: VirtualRouterProtocolRedistProfileIpv6[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/virtual_router#rip VirtualRouter#rip}
  */
  readonly rip?: VirtualRouterProtocolRip;
}

export function virtualRouterProtocolToTerraform(struct?: VirtualRouterProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: virtualRouterProtocolBgpToTerraform(struct!.bgp),
    ospf: virtualRouterProtocolOspfToTerraform(struct!.ospf),
    ospfv3: virtualRouterProtocolOspfv3ToTerraform(struct!.ospfv3),
    redist_profile: cdktf.listMapper(virtualRouterProtocolRedistProfileToTerraform, false)(struct!.redistProfile),
    redist_profile_ipv6: cdktf.listMapper(virtualRouterProtocolRedistProfileIpv6ToTerraform, false)(struct!.redistProfileIpv6),
    rip: virtualRouterProtocolRipToTerraform(struct!.rip),
  }
}


export function virtualRouterProtocolToHclTerraform(struct?: VirtualRouterProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: virtualRouterProtocolBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolBgp",
    },
    ospf: {
      value: virtualRouterProtocolOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspf",
    },
    ospfv3: {
      value: virtualRouterProtocolOspfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolOspfv3",
    },
    redist_profile: {
      value: cdktf.listMapperHcl(virtualRouterProtocolRedistProfileToHclTerraform, false)(struct!.redistProfile),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolRedistProfileList",
    },
    redist_profile_ipv6: {
      value: cdktf.listMapperHcl(virtualRouterProtocolRedistProfileIpv6ToHclTerraform, false)(struct!.redistProfileIpv6),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterProtocolRedistProfileIpv6List",
    },
    rip: {
      value: virtualRouterProtocolRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterProtocolRip",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._ospfv3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3 = this._ospfv3?.internalValue;
    }
    if (this._redistProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistProfile = this._redistProfile?.internalValue;
    }
    if (this._redistProfileIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistProfileIpv6 = this._redistProfileIpv6?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._ospfv3.internalValue = undefined;
      this._redistProfile.internalValue = undefined;
      this._redistProfileIpv6.internalValue = undefined;
      this._rip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._ospf.internalValue = value.ospf;
      this._ospfv3.internalValue = value.ospfv3;
      this._redistProfile.internalValue = value.redistProfile;
      this._redistProfileIpv6.internalValue = value.redistProfileIpv6;
      this._rip.internalValue = value.rip;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new VirtualRouterProtocolBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: VirtualRouterProtocolBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new VirtualRouterProtocolOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: VirtualRouterProtocolOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ospfv3 - computed: false, optional: true, required: false
  private _ospfv3 = new VirtualRouterProtocolOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: VirtualRouterProtocolOspfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // redist_profile - computed: false, optional: true, required: false
  private _redistProfile = new VirtualRouterProtocolRedistProfileList(this, "redist_profile", false);
  public get redistProfile() {
    return this._redistProfile;
  }
  public putRedistProfile(value: VirtualRouterProtocolRedistProfile[] | cdktf.IResolvable) {
    this._redistProfile.internalValue = value;
  }
  public resetRedistProfile() {
    this._redistProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistProfileInput() {
    return this._redistProfile.internalValue;
  }

  // redist_profile_ipv6 - computed: false, optional: true, required: false
  private _redistProfileIpv6 = new VirtualRouterProtocolRedistProfileIpv6List(this, "redist_profile_ipv6", false);
  public get redistProfileIpv6() {
    return this._redistProfileIpv6;
  }
  public putRedistProfileIpv6(value: VirtualRouterProtocolRedistProfileIpv6[] | cdktf.IResolvable) {
    this._redistProfileIpv6.internalValue = value;
  }
  public resetRedistProfileIpv6() {
    this._redistProfileIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistProfileIpv6Input() {
    return this._redistProfileIpv6.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new VirtualRouterProtocolRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: VirtualRouterProtocolRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }
}
