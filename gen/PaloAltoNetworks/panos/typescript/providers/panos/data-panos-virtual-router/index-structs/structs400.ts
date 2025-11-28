import * as cdktf from 'cdktf';
import { DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcast,
dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastToTerraform,
dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform,
DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastOutputReference,
DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2Mp,
dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpToTerraform,
dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform,
DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpOutputReference,
DataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfd,
dataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfdToTerraform,
dataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfdToHclTerraform,
DataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfdOutputReference,
DataPanosVirtualRouterProtocolBgp,
dataPanosVirtualRouterProtocolBgpToTerraform,
dataPanosVirtualRouterProtocolBgpToHclTerraform,
DataPanosVirtualRouterProtocolBgpOutputReference,
DataPanosVirtualRouterProtocolOspf,
dataPanosVirtualRouterProtocolOspfToTerraform,
dataPanosVirtualRouterProtocolOspfToHclTerraform,
DataPanosVirtualRouterProtocolOspfOutputReference } from './structs0'
export interface DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P {
}

export function dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#broadcast DataPanosVirtualRouter#broadcast}
  */
  readonly broadcast?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#p2mp DataPanosVirtualRouter#p2mp}
  */
  readonly p2Mp?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2Mp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#p2p DataPanosVirtualRouter#p2p}
  */
  readonly p2P?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct!.broadcast),
    p2mp: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct!.p2Mp),
    p2p: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct!.p2P),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct!.broadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcast",
    },
    p2mp: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct!.p2Mp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2Mp",
    },
    p2p: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct!.p2P),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined) {
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

  // broadcast - computed: true, optional: true, required: false
  private _broadcast = new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }
  public putBroadcast(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeBroadcast) {
    this._broadcast.internalValue = value;
  }
  public resetBroadcast() {
    this._broadcast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast.internalValue;
  }

  // p2mp - computed: true, optional: true, required: false
  private _p2Mp = new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }
  public putP2Mp(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2Mp) {
    this._p2Mp.internalValue = value;
  }
  public resetP2Mp() {
    this._p2Mp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpInput() {
    return this._p2Mp.internalValue;
  }

  // p2p - computed: true, optional: true, required: false
  private _p2P = new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
  public putP2P(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeP2P) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighbor | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighbor | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborOutputReference {
    return new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolOspfv3AreaInterface {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#authentication DataPanosVirtualRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#bfd DataPanosVirtualRouter#bfd}
  */
  readonly bfd?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfd;
  /**
  * number of lost hello packets to declare router down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#dead_counts DataPanosVirtualRouter#dead_counts}
  */
  readonly deadCounts?: number;
  /**
  * Enable OSPF in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#enable DataPanosVirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Period (in seconds) used to send grace LSAs before first hello is sent when graceful restart starts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#gr_delay DataPanosVirtualRouter#gr_delay}
  */
  readonly grDelay?: number;
  /**
  * Interval (in seconds) to send Hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#hello_interval DataPanosVirtualRouter#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#instance_id DataPanosVirtualRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#link_type DataPanosVirtualRouter#link_type}
  */
  readonly linkType?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkType;
  /**
  * Cost of OSPF interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#metric DataPanosVirtualRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#neighbor DataPanosVirtualRouter#neighbor}
  */
  readonly neighbor?: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable;
  /**
  * Suppress the sending of hello packets in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#passive DataPanosVirtualRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Priority for OSPF designated router selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#priority DataPanosVirtualRouter#priority}
  */
  readonly priority?: number;
  /**
  * Interval (in seconds) to retransmit LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#retransmit_interval DataPanosVirtualRouter#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Estimated delay (in seconds) to transmit LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#transit_delay DataPanosVirtualRouter#transit_delay}
  */
  readonly transitDelay?: number;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaInterfaceToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfdToTerraform(struct!.bfd),
    dead_counts: cdktf.numberToTerraform(struct!.deadCounts),
    enable: cdktf.booleanToTerraform(struct!.enable),
    gr_delay: cdktf.numberToTerraform(struct!.grDelay),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    link_type: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeToTerraform(struct!.linkType),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor: cdktf.listMapper(dataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborToTerraform, false)(struct!.neighbor),
    passive: cdktf.booleanToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaInterfaceToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaInterface | cdktf.IResolvable): any {
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
      value: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfd",
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
      value: dataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeToHclTerraform(struct!.linkType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkType",
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
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborList",
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

export class DataPanosVirtualRouterProtocolOspfv3AreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaInterface | cdktf.IResolvable | undefined) {
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

  // authentication - computed: true, optional: true, required: false
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceBfd) {
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

  // enable - computed: true, optional: true, required: false
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

  // link_type - computed: true, optional: true, required: false
  private _linkType = new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }
  public putLinkType(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceLinkType) {
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

  // name - computed: true, optional: false, required: true
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

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosVirtualRouterProtocolOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // passive - computed: true, optional: true, required: false
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

export class DataPanosVirtualRouterProtocolOspfv3AreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolOspfv3AreaInterface[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolOspfv3AreaInterfaceOutputReference {
    return new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertise {
}

export function dataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertiseToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertiseToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertise | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppress {
}

export function dataPanosVirtualRouterProtocolOspfv3AreaRangeSuppressToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaRangeSuppressToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppress | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#advertise DataPanosVirtualRouter#advertise}
  */
  readonly advertise?: DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#suppress DataPanosVirtualRouter#suppress}
  */
  readonly suppress?: DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppress;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaRangeToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    suppress: dataPanosVirtualRouterProtocolOspfv3AreaRangeSuppressToTerraform(struct!.suppress),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaRangeToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaRange | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosVirtualRouterProtocolOspfv3AreaRangeAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // suppress - computed: true, optional: true, required: false
  private _suppress = new DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: DataPanosVirtualRouterProtocolOspfv3AreaRangeSuppress) {
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

export class DataPanosVirtualRouterProtocolOspfv3AreaRangeList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolOspfv3AreaRange[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolOspfv3AreaRangeOutputReference {
    return new DataPanosVirtualRouterProtocolOspfv3AreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeNormal {
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNormalToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNormalToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeNormal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNormal | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise {
  /**
  * metric to be used when advertise default route within this stub area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#metric DataPanosVirtualRouter#metric}
  */
  readonly metric?: number;
  /**
  * metric type to be used when advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#type DataPanosVirtualRouter#type}
  */
  readonly type?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable {
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#advertise DataPanosVirtualRouter#advertise}
  */
  readonly advertise?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#disable DataPanosVirtualRouter#disable}
  */
  readonly disable?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise",
    },
    disable: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // disable - computed: true, optional: true, required: false
  private _disable = new DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteDisable) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise {
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress {
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#advertise DataPanosVirtualRouter#advertise}
  */
  readonly advertise?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#suppress DataPanosVirtualRouter#suppress}
  */
  readonly suppress?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    suppress: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressToTerraform(struct!.suppress),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // suppress - computed: true, optional: true, required: false
  private _suppress = new DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeSuppress) {
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

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeOutputReference {
    return new DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeNssa {
  /**
  * Enable the origination and propagation of summary LSA to this area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#accept_summary DataPanosVirtualRouter#accept_summary}
  */
  readonly acceptSummary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#default_route DataPanosVirtualRouter#default_route}
  */
  readonly defaultRoute?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#nssa_ext_range DataPanosVirtualRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_summary: cdktf.booleanToTerraform(struct!.acceptSummary),
    default_route: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteToTerraform(struct!.defaultRoute),
    nssa_ext_range: cdktf.listMapper(dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssa | cdktf.IResolvable): any {
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
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute",
    },
    nssa_ext_range: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeNssa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssa | cdktf.IResolvable | undefined) {
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

  // accept_summary - computed: true, optional: true, required: false
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

  // default_route - computed: true, optional: true, required: false
  private _defaultRoute = new DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // nssa_ext_range - computed: true, optional: true, required: false
  private _nssaExtRange = new DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise {
  /**
  * metric to be used when advertise default route within this stub area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#metric DataPanosVirtualRouter#metric}
  */
  readonly metric?: number;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable {
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#advertise DataPanosVirtualRouter#advertise}
  */
  readonly advertise?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#disable DataPanosVirtualRouter#disable}
  */
  readonly disable?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise",
    },
    disable: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // disable - computed: true, optional: true, required: false
  private _disable = new DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteDisable) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaTypeStub {
  /**
  * Enable the origination and propagation of summary LSA to this area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#accept_summary DataPanosVirtualRouter#accept_summary}
  */
  readonly acceptSummary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#default_route DataPanosVirtualRouter#default_route}
  */
  readonly defaultRoute?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeStubToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_summary: cdktf.booleanToTerraform(struct!.acceptSummary),
    default_route: dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteToTerraform(struct!.defaultRoute),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeStubToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStub | cdktf.IResolvable): any {
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
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaTypeStub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeStub | cdktf.IResolvable | undefined) {
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

  // accept_summary - computed: true, optional: true, required: false
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

  // default_route - computed: true, optional: true, required: false
  private _defaultRoute = new DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeStubDefaultRoute) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#normal DataPanosVirtualRouter#normal}
  */
  readonly normal?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNormal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#nssa DataPanosVirtualRouter#nssa}
  */
  readonly nssa?: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#stub DataPanosVirtualRouter#stub}
  */
  readonly stub?: DataPanosVirtualRouterProtocolOspfv3AreaTypeStub;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaTypeToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normal: dataPanosVirtualRouterProtocolOspfv3AreaTypeNormalToTerraform(struct!.normal),
    nssa: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaToTerraform(struct!.nssa),
    stub: dataPanosVirtualRouterProtocolOspfv3AreaTypeStubToTerraform(struct!.stub),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaTypeToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normal: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeNormalToHclTerraform(struct!.normal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeNormal",
    },
    nssa: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeNssaToHclTerraform(struct!.nssa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeNssa",
    },
    stub: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeStubToHclTerraform(struct!.stub),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaTypeStub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaType | cdktf.IResolvable | undefined) {
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

  // normal - computed: true, optional: true, required: false
  private _normal = new DataPanosVirtualRouterProtocolOspfv3AreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }
  public putNormal(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNormal) {
    this._normal.internalValue = value;
  }
  public resetNormal() {
    this._normal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal.internalValue;
  }

  // nssa - computed: true, optional: true, required: false
  private _nssa = new DataPanosVirtualRouterProtocolOspfv3AreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeNssa) {
    this._nssa.internalValue = value;
  }
  public resetNssa() {
    this._nssa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa.internalValue;
  }

  // stub - computed: true, optional: true, required: false
  private _stub = new DataPanosVirtualRouterProtocolOspfv3AreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: DataPanosVirtualRouterProtocolOspfv3AreaTypeStub) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#profile DataPanosVirtualRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfdToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfdToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfd | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AreaVirtualLink {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#authentication DataPanosVirtualRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#bfd DataPanosVirtualRouter#bfd}
  */
  readonly bfd?: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfd;
  /**
  * number of lost hello packets to declare router down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#dead_counts DataPanosVirtualRouter#dead_counts}
  */
  readonly deadCounts?: number;
  /**
  * Enable this virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#enable DataPanosVirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Interval (in seconds) to send Hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#hello_interval DataPanosVirtualRouter#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#instance_id DataPanosVirtualRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * neighbor router id for virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#neighbor_id DataPanosVirtualRouter#neighbor_id}
  */
  readonly neighborId?: string;
  /**
  * Interval (in seconds) to retransmit LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#retransmit_interval DataPanosVirtualRouter#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * id of transit area, cannot be backbone, stub or NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#transit_area_id DataPanosVirtualRouter#transit_area_id}
  */
  readonly transitAreaId?: string;
  /**
  * Estimated delay (in seconds) to transmit LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#transit_delay DataPanosVirtualRouter#transit_delay}
  */
  readonly transitDelay?: number;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: dataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfdToTerraform(struct!.bfd),
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


export function dataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLink | cdktf.IResolvable): any {
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
      value: dataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfd",
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

export class DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AreaVirtualLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLink | cdktf.IResolvable | undefined) {
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

  // authentication - computed: true, optional: true, required: false
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkBfd) {
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

  // enable - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

  // neighbor_id - computed: true, optional: true, required: false
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

  // transit_area_id - computed: true, optional: true, required: false
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

export class DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolOspfv3AreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkOutputReference {
    return new DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolOspfv3Area {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#authentication DataPanosVirtualRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#interface DataPanosVirtualRouter#interface}
  */
  readonly interface?: DataPanosVirtualRouterProtocolOspfv3AreaInterface[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#range DataPanosVirtualRouter#range}
  */
  readonly range?: DataPanosVirtualRouterProtocolOspfv3AreaRange[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#type DataPanosVirtualRouter#type}
  */
  readonly type?: DataPanosVirtualRouterProtocolOspfv3AreaType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#virtual_link DataPanosVirtualRouter#virtual_link}
  */
  readonly virtualLink?: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLink[] | cdktf.IResolvable;
}

export function dataPanosVirtualRouterProtocolOspfv3AreaToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3Area | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    interface: cdktf.listMapper(dataPanosVirtualRouterProtocolOspfv3AreaInterfaceToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    range: cdktf.listMapper(dataPanosVirtualRouterProtocolOspfv3AreaRangeToTerraform, false)(struct!.range),
    type: dataPanosVirtualRouterProtocolOspfv3AreaTypeToTerraform(struct!.type),
    virtual_link: cdktf.listMapper(dataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkToTerraform, false)(struct!.virtualLink),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AreaToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3Area | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolOspfv3AreaInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaInterfaceList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolOspfv3AreaRangeToHclTerraform, false)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaRangeList",
    },
    type: {
      value: dataPanosVirtualRouterProtocolOspfv3AreaTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaType",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkToHclTerraform, false)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3Area | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3Area | cdktf.IResolvable | undefined) {
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

  // authentication - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
  private _interface = new DataPanosVirtualRouterProtocolOspfv3AreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataPanosVirtualRouterProtocolOspfv3AreaInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // range - computed: true, optional: true, required: false
  private _range = new DataPanosVirtualRouterProtocolOspfv3AreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: DataPanosVirtualRouterProtocolOspfv3AreaRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosVirtualRouterProtocolOspfv3AreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosVirtualRouterProtocolOspfv3AreaType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // virtual_link - computed: true, optional: true, required: false
  private _virtualLink = new DataPanosVirtualRouterProtocolOspfv3AreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: DataPanosVirtualRouterProtocolOspfv3AreaVirtualLink[] | cdktf.IResolvable) {
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

export class DataPanosVirtualRouterProtocolOspfv3AreaList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolOspfv3Area[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolOspfv3AreaOutputReference {
    return new DataPanosVirtualRouterProtocolOspfv3AreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 4 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 5 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 8 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 12 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 16 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileAh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#md5 DataPanosVirtualRouter#md5}
  */
  readonly md5?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#sha1 DataPanosVirtualRouter#sha1}
  */
  readonly sha1?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#sha256 DataPanosVirtualRouter#sha256}
  */
  readonly sha256?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#sha384 DataPanosVirtualRouter#sha384}
  */
  readonly sha384?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#sha512 DataPanosVirtualRouter#sha512}
  */
  readonly sha512?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5ToTerraform(struct!.md5),
    sha1: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1ToTerraform(struct!.sha1),
    sha256: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256ToTerraform(struct!.sha256),
    sha384: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384ToTerraform(struct!.sha384),
    sha512: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512ToTerraform(struct!.sha512),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileAhToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5",
    },
    sha1: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1",
    },
    sha256: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256",
    },
    sha384: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384",
    },
    sha512: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileAhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileAh | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAh | cdktf.IResolvable | undefined) {
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

  // md5 - computed: true, optional: true, required: false
  private _md5 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: true, optional: true, required: false
  private _sha1 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }

  // sha256 - computed: true, optional: true, required: false
  private _sha256 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha256) {
    this._sha256.internalValue = value;
  }
  public resetSha256() {
    this._sha256.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256.internalValue;
  }

  // sha384 - computed: true, optional: true, required: false
  private _sha384 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha384) {
    this._sha384.internalValue = value;
  }
  public resetSha384() {
    this._sha384.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384Input() {
    return this._sha384.internalValue;
  }

  // sha512 - computed: true, optional: true, required: false
  private _sha512 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAhSha512) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 4 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone {
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 5 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 8 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 12 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 16 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#md5 DataPanosVirtualRouter#md5}
  */
  readonly md5?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#none DataPanosVirtualRouter#none}
  */
  readonly none?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#sha1 DataPanosVirtualRouter#sha1}
  */
  readonly sha1?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#sha256 DataPanosVirtualRouter#sha256}
  */
  readonly sha256?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#sha384 DataPanosVirtualRouter#sha384}
  */
  readonly sha384?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#sha512 DataPanosVirtualRouter#sha512}
  */
  readonly sha512?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5ToTerraform(struct!.md5),
    none: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneToTerraform(struct!.none),
    sha1: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1ToTerraform(struct!.sha1),
    sha256: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256ToTerraform(struct!.sha256),
    sha384: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384ToTerraform(struct!.sha384),
    sha512: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512ToTerraform(struct!.sha512),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5",
    },
    none: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone",
    },
    sha1: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1",
    },
    sha256: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256",
    },
    sha384: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384",
    },
    sha512: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthentication | cdktf.IResolvable | undefined) {
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

  // md5 - computed: true, optional: true, required: false
  private _md5 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sha1 - computed: true, optional: true, required: false
  private _sha1 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }

  // sha256 - computed: true, optional: true, required: false
  private _sha256 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha256) {
    this._sha256.internalValue = value;
  }
  public resetSha256() {
    this._sha256.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256.internalValue;
  }

  // sha384 - computed: true, optional: true, required: false
  private _sha384 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha384) {
    this._sha384.internalValue = value;
  }
  public resetSha384() {
    this._sha384.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384Input() {
    return this._sha384.internalValue;
  }

  // sha512 - computed: true, optional: true, required: false
  private _sha512 = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationSha512) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#algorithm DataPanosVirtualRouter#algorithm}
  */
  readonly algorithm?: string;
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total number of sections: 3des: 6, aes128: 4, aes192: 6, aes256: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryptionToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryptionToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryption | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryption | cdktf.IResolvable | undefined) {
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

  // algorithm - computed: true, optional: true, required: false
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfileEsp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#authentication DataPanosVirtualRouter#authentication}
  */
  readonly authentication?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#encryption DataPanosVirtualRouter#encryption}
  */
  readonly encryption?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryption;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationToTerraform(struct!.authentication),
    encryption: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryptionToTerraform(struct!.encryption),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileEspToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthentication",
    },
    encryption: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfileEsp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEsp | cdktf.IResolvable | undefined) {
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

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEspEncryption) {
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
export interface DataPanosVirtualRouterProtocolOspfv3AuthProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#ah DataPanosVirtualRouter#ah}
  */
  readonly ah?: DataPanosVirtualRouterProtocolOspfv3AuthProfileAh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#esp DataPanosVirtualRouter#esp}
  */
  readonly esp?: DataPanosVirtualRouterProtocolOspfv3AuthProfileEsp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * SPI for both inbound and outbound SA, hex format xxxxxxxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#spi DataPanosVirtualRouter#spi}
  */
  readonly spi?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3AuthProfileToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ah: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhToTerraform(struct!.ah),
    esp: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspToTerraform(struct!.esp),
    name: cdktf.stringToTerraform(struct!.name),
    spi: cdktf.stringToTerraform(struct!.spi),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3AuthProfileToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3AuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ah: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileAhToHclTerraform(struct!.ah),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileAh",
    },
    esp: {
      value: dataPanosVirtualRouterProtocolOspfv3AuthProfileEspToHclTerraform(struct!.esp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileEsp",
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3AuthProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3AuthProfile | cdktf.IResolvable | undefined) {
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

  // ah - computed: true, optional: true, required: false
  private _ah = new DataPanosVirtualRouterProtocolOspfv3AuthProfileAhOutputReference(this, "ah");
  public get ah() {
    return this._ah;
  }
  public putAh(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileAh) {
    this._ah.internalValue = value;
  }
  public resetAh() {
    this._ah.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahInput() {
    return this._ah.internalValue;
  }

  // esp - computed: true, optional: true, required: false
  private _esp = new DataPanosVirtualRouterProtocolOspfv3AuthProfileEspOutputReference(this, "esp");
  public get esp() {
    return this._esp;
  }
  public putEsp(value: DataPanosVirtualRouterProtocolOspfv3AuthProfileEsp) {
    this._esp.internalValue = value;
  }
  public resetEsp() {
    this._esp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espInput() {
    return this._esp.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // spi - computed: true, optional: true, required: false
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

export class DataPanosVirtualRouterProtocolOspfv3AuthProfileList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolOspfv3AuthProfile[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolOspfv3AuthProfileOutputReference {
    return new DataPanosVirtualRouterProtocolOspfv3AuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolOspfv3ExportRules {
  /**
  * metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#metric DataPanosVirtualRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * path type to be used for imported external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#new_path_type DataPanosVirtualRouter#new_path_type}
  */
  readonly newPathType?: string;
  /**
  * new tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#new_tag DataPanosVirtualRouter#new_tag}
  */
  readonly newTag?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3ExportRulesToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3ExportRules | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterProtocolOspfv3ExportRulesToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3ExportRules | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3ExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3ExportRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3ExportRules | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // new_tag - computed: true, optional: true, required: false
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

export class DataPanosVirtualRouterProtocolOspfv3ExportRulesList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolOspfv3ExportRules[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolOspfv3ExportRulesOutputReference {
    return new DataPanosVirtualRouterProtocolOspfv3ExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolOspfv3GlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#profile DataPanosVirtualRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosVirtualRouterProtocolOspfv3GlobalBfdToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3GlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3GlobalBfdToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3GlobalBfd | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3GlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3GlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3GlobalBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolOspfv3GracefulRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#enable DataPanosVirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * maximum local restarting time (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#grace_period DataPanosVirtualRouter#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * enable/disable helping neighboring routers to graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#helper_enable DataPanosVirtualRouter#helper_enable}
  */
  readonly helperEnable?: boolean | cdktf.IResolvable;
  /**
  * maximum of neighbor restart time accepted (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#max_neighbor_restart_time DataPanosVirtualRouter#max_neighbor_restart_time}
  */
  readonly maxNeighborRestartTime?: number;
  /**
  * enable/disable strict LSA checking. Abort GR if lsa change is detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#strict_l_s_a_checking DataPanosVirtualRouter#strict_l_s_a_checking}
  */
  readonly strictLSAChecking?: boolean | cdktf.IResolvable;
}

export function dataPanosVirtualRouterProtocolOspfv3GracefulRestartToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3GracefulRestart | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterProtocolOspfv3GracefulRestartToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3GracefulRestart | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3GracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3GracefulRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3GracefulRestart | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // helper_enable - computed: true, optional: true, required: false
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

  // strict_l_s_a_checking - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3Timers {
  /**
  * The minimum time in seconds between distinct originations of any particular LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#lsa_interval DataPanosVirtualRouter#lsa_interval}
  */
  readonly lsaInterval?: number;
  /**
  * Delay in seconds before running the SPF algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#spf_calculation_delay DataPanosVirtualRouter#spf_calculation_delay}
  */
  readonly spfCalculationDelay?: number;
}

export function dataPanosVirtualRouterProtocolOspfv3TimersToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3Timers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lsa_interval: cdktf.numberToTerraform(struct!.lsaInterval),
    spf_calculation_delay: cdktf.numberToTerraform(struct!.spfCalculationDelay),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3TimersToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3Timers | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolOspfv3TimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3Timers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3Timers | cdktf.IResolvable | undefined) {
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

  // lsa_interval - computed: true, optional: true, required: false
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

  // spf_calculation_delay - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolOspfv3 {
  /**
  * allow redistribute default route to OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#allow_redist_default_route DataPanosVirtualRouter#allow_redist_default_route}
  */
  readonly allowRedistDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#area DataPanosVirtualRouter#area}
  */
  readonly area?: DataPanosVirtualRouterProtocolOspfv3Area[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#auth_profile DataPanosVirtualRouter#auth_profile}
  */
  readonly authProfile?: DataPanosVirtualRouterProtocolOspfv3AuthProfile[] | cdktf.IResolvable;
  /**
  * whether OSPFv3 should set the R- and V6-bits in its Router-LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#disable_transit_traffic DataPanosVirtualRouter#disable_transit_traffic}
  */
  readonly disableTransitTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#enable DataPanosVirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#export_rules DataPanosVirtualRouter#export_rules}
  */
  readonly exportRules?: DataPanosVirtualRouterProtocolOspfv3ExportRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#global_bfd DataPanosVirtualRouter#global_bfd}
  */
  readonly globalBfd?: DataPanosVirtualRouterProtocolOspfv3GlobalBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#graceful_restart DataPanosVirtualRouter#graceful_restart}
  */
  readonly gracefulRestart?: DataPanosVirtualRouterProtocolOspfv3GracefulRestart;
  /**
  * do not learn default route from OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#reject_default_route DataPanosVirtualRouter#reject_default_route}
  */
  readonly rejectDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * router id of this OSPFv3 instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#router_id DataPanosVirtualRouter#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#timers DataPanosVirtualRouter#timers}
  */
  readonly timers?: DataPanosVirtualRouterProtocolOspfv3Timers;
}

export function dataPanosVirtualRouterProtocolOspfv3ToTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_redist_default_route: cdktf.booleanToTerraform(struct!.allowRedistDefaultRoute),
    area: cdktf.listMapper(dataPanosVirtualRouterProtocolOspfv3AreaToTerraform, false)(struct!.area),
    auth_profile: cdktf.listMapper(dataPanosVirtualRouterProtocolOspfv3AuthProfileToTerraform, false)(struct!.authProfile),
    disable_transit_traffic: cdktf.booleanToTerraform(struct!.disableTransitTraffic),
    enable: cdktf.booleanToTerraform(struct!.enable),
    export_rules: cdktf.listMapper(dataPanosVirtualRouterProtocolOspfv3ExportRulesToTerraform, false)(struct!.exportRules),
    global_bfd: dataPanosVirtualRouterProtocolOspfv3GlobalBfdToTerraform(struct!.globalBfd),
    graceful_restart: dataPanosVirtualRouterProtocolOspfv3GracefulRestartToTerraform(struct!.gracefulRestart),
    reject_default_route: cdktf.booleanToTerraform(struct!.rejectDefaultRoute),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    timers: dataPanosVirtualRouterProtocolOspfv3TimersToTerraform(struct!.timers),
  }
}


export function dataPanosVirtualRouterProtocolOspfv3ToHclTerraform(struct?: DataPanosVirtualRouterProtocolOspfv3 | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolOspfv3AreaToHclTerraform, false)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AreaList",
    },
    auth_profile: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolOspfv3AuthProfileToHclTerraform, false)(struct!.authProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3AuthProfileList",
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
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolOspfv3ExportRulesToHclTerraform, false)(struct!.exportRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3ExportRulesList",
    },
    global_bfd: {
      value: dataPanosVirtualRouterProtocolOspfv3GlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3GlobalBfd",
    },
    graceful_restart: {
      value: dataPanosVirtualRouterProtocolOspfv3GracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3GracefulRestart",
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
      value: dataPanosVirtualRouterProtocolOspfv3TimersToHclTerraform(struct!.timers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3Timers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolOspfv3 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolOspfv3 | cdktf.IResolvable | undefined) {
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

  // allow_redist_default_route - computed: true, optional: true, required: false
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

  // area - computed: true, optional: true, required: false
  private _area = new DataPanosVirtualRouterProtocolOspfv3AreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: DataPanosVirtualRouterProtocolOspfv3Area[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // auth_profile - computed: true, optional: true, required: false
  private _authProfile = new DataPanosVirtualRouterProtocolOspfv3AuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }
  public putAuthProfile(value: DataPanosVirtualRouterProtocolOspfv3AuthProfile[] | cdktf.IResolvable) {
    this._authProfile.internalValue = value;
  }
  public resetAuthProfile() {
    this._authProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProfileInput() {
    return this._authProfile.internalValue;
  }

  // disable_transit_traffic - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // export_rules - computed: true, optional: true, required: false
  private _exportRules = new DataPanosVirtualRouterProtocolOspfv3ExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }
  public putExportRules(value: DataPanosVirtualRouterProtocolOspfv3ExportRules[] | cdktf.IResolvable) {
    this._exportRules.internalValue = value;
  }
  public resetExportRules() {
    this._exportRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRulesInput() {
    return this._exportRules.internalValue;
  }

  // global_bfd - computed: true, optional: true, required: false
  private _globalBfd = new DataPanosVirtualRouterProtocolOspfv3GlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: DataPanosVirtualRouterProtocolOspfv3GlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // graceful_restart - computed: true, optional: true, required: false
  private _gracefulRestart = new DataPanosVirtualRouterProtocolOspfv3GracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: DataPanosVirtualRouterProtocolOspfv3GracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // reject_default_route - computed: true, optional: true, required: false
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

  // router_id - computed: true, optional: true, required: false
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

  // timers - computed: true, optional: true, required: false
  private _timers = new DataPanosVirtualRouterProtocolOspfv3TimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: DataPanosVirtualRouterProtocolOspfv3Timers) {
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
export interface DataPanosVirtualRouterProtocolRedistProfileActionNoRedist {
}

export function dataPanosVirtualRouterProtocolRedistProfileActionNoRedistToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileActionNoRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileActionNoRedistToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileActionNoRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolRedistProfileActionNoRedistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileActionNoRedist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileActionNoRedist | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRedistProfileActionRedist {
}

export function dataPanosVirtualRouterProtocolRedistProfileActionRedistToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileActionRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileActionRedistToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileActionRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolRedistProfileActionRedistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileActionRedist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileActionRedist | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRedistProfileAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#no_redist DataPanosVirtualRouter#no_redist}
  */
  readonly noRedist?: DataPanosVirtualRouterProtocolRedistProfileActionNoRedist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#redist DataPanosVirtualRouter#redist}
  */
  readonly redist?: DataPanosVirtualRouterProtocolRedistProfileActionRedist;
}

export function dataPanosVirtualRouterProtocolRedistProfileActionToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_redist: dataPanosVirtualRouterProtocolRedistProfileActionNoRedistToTerraform(struct!.noRedist),
    redist: dataPanosVirtualRouterProtocolRedistProfileActionRedistToTerraform(struct!.redist),
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileActionToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_redist: {
      value: dataPanosVirtualRouterProtocolRedistProfileActionNoRedistToHclTerraform(struct!.noRedist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileActionNoRedist",
    },
    redist: {
      value: dataPanosVirtualRouterProtocolRedistProfileActionRedistToHclTerraform(struct!.redist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileActionRedist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolRedistProfileActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileAction | cdktf.IResolvable | undefined) {
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

  // no_redist - computed: true, optional: true, required: false
  private _noRedist = new DataPanosVirtualRouterProtocolRedistProfileActionNoRedistOutputReference(this, "no_redist");
  public get noRedist() {
    return this._noRedist;
  }
  public putNoRedist(value: DataPanosVirtualRouterProtocolRedistProfileActionNoRedist) {
    this._noRedist.internalValue = value;
  }
  public resetNoRedist() {
    this._noRedist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRedistInput() {
    return this._noRedist.internalValue;
  }

  // redist - computed: true, optional: true, required: false
  private _redist = new DataPanosVirtualRouterProtocolRedistProfileActionRedistOutputReference(this, "redist");
  public get redist() {
    return this._redist;
  }
  public putRedist(value: DataPanosVirtualRouterProtocolRedistProfileActionRedist) {
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
export interface DataPanosVirtualRouterProtocolRedistProfileFilterBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#community DataPanosVirtualRouter#community}
  */
  readonly community?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#extended_community DataPanosVirtualRouter#extended_community}
  */
  readonly extendedCommunity?: string[];
}

export function dataPanosVirtualRouterProtocolRedistProfileFilterBgpToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileFilterBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    extended_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedCommunity),
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileFilterBgpToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileFilterBgp | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRedistProfileFilterBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileFilterBgp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileFilterBgp | cdktf.IResolvable | undefined) {
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

  // community - computed: true, optional: true, required: false
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

  // extended_community - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolRedistProfileFilterOspf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#area DataPanosVirtualRouter#area}
  */
  readonly area?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#path_type DataPanosVirtualRouter#path_type}
  */
  readonly pathType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#tag DataPanosVirtualRouter#tag}
  */
  readonly tag?: string[];
}

export function dataPanosVirtualRouterProtocolRedistProfileFilterOspfToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileFilterOspf | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterProtocolRedistProfileFilterOspfToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileFilterOspf | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRedistProfileFilterOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileFilterOspf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileFilterOspf | cdktf.IResolvable | undefined) {
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

  // area - computed: true, optional: true, required: false
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

  // path_type - computed: true, optional: true, required: false
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

  // tag - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolRedistProfileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#bgp DataPanosVirtualRouter#bgp}
  */
  readonly bgp?: DataPanosVirtualRouterProtocolRedistProfileFilterBgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#destination DataPanosVirtualRouter#destination}
  */
  readonly destination?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#interface DataPanosVirtualRouter#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#nexthop DataPanosVirtualRouter#nexthop}
  */
  readonly nexthop?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#ospf DataPanosVirtualRouter#ospf}
  */
  readonly ospf?: DataPanosVirtualRouterProtocolRedistProfileFilterOspf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#type DataPanosVirtualRouter#type}
  */
  readonly type?: string[];
}

export function dataPanosVirtualRouterProtocolRedistProfileFilterToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: dataPanosVirtualRouterProtocolRedistProfileFilterBgpToTerraform(struct!.bgp),
    destination: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destination),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    nexthop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nexthop),
    ospf: dataPanosVirtualRouterProtocolRedistProfileFilterOspfToTerraform(struct!.ospf),
    type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.type),
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileFilterToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: dataPanosVirtualRouterProtocolRedistProfileFilterBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileFilterBgp",
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
      value: dataPanosVirtualRouterProtocolRedistProfileFilterOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileFilterOspf",
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

export class DataPanosVirtualRouterProtocolRedistProfileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileFilter | cdktf.IResolvable | undefined) {
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

  // bgp - computed: true, optional: true, required: false
  private _bgp = new DataPanosVirtualRouterProtocolRedistProfileFilterBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: DataPanosVirtualRouterProtocolRedistProfileFilterBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // destination - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // nexthop - computed: true, optional: true, required: false
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

  // ospf - computed: true, optional: true, required: false
  private _ospf = new DataPanosVirtualRouterProtocolRedistProfileFilterOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: DataPanosVirtualRouterProtocolRedistProfileFilterOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // type - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolRedistProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#action DataPanosVirtualRouter#action}
  */
  readonly action?: DataPanosVirtualRouterProtocolRedistProfileAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#filter DataPanosVirtualRouter#filter}
  */
  readonly filter?: DataPanosVirtualRouterProtocolRedistProfileFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#priority DataPanosVirtualRouter#priority}
  */
  readonly priority?: number;
}

export function dataPanosVirtualRouterProtocolRedistProfileToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPanosVirtualRouterProtocolRedistProfileActionToTerraform(struct!.action),
    filter: dataPanosVirtualRouterProtocolRedistProfileFilterToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPanosVirtualRouterProtocolRedistProfileActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileAction",
    },
    filter: {
      value: dataPanosVirtualRouterProtocolRedistProfileFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileFilter",
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

export class DataPanosVirtualRouterProtocolRedistProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfile | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: true, required: false
  private _action = new DataPanosVirtualRouterProtocolRedistProfileActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPanosVirtualRouterProtocolRedistProfileAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new DataPanosVirtualRouterProtocolRedistProfileFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPanosVirtualRouterProtocolRedistProfileFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosVirtualRouterProtocolRedistProfileList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolRedistProfile[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolRedistProfileOutputReference {
    return new DataPanosVirtualRouterProtocolRedistProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedist {
}

export function dataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedistToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedistToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedist | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedist {
}

export function dataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedistToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedistToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedist | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRedistProfileIpv6Action {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#no_redist DataPanosVirtualRouter#no_redist}
  */
  readonly noRedist?: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedist;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#redist DataPanosVirtualRouter#redist}
  */
  readonly redist?: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedist;
}

export function dataPanosVirtualRouterProtocolRedistProfileIpv6ActionToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6Action | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_redist: dataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedistToTerraform(struct!.noRedist),
    redist: dataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedistToTerraform(struct!.redist),
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileIpv6ActionToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6Action | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_redist: {
      value: dataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedistToHclTerraform(struct!.noRedist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedist",
    },
    redist: {
      value: dataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedistToHclTerraform(struct!.redist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedist",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolRedistProfileIpv6ActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileIpv6Action | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileIpv6Action | cdktf.IResolvable | undefined) {
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

  // no_redist - computed: true, optional: true, required: false
  private _noRedist = new DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedistOutputReference(this, "no_redist");
  public get noRedist() {
    return this._noRedist;
  }
  public putNoRedist(value: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionNoRedist) {
    this._noRedist.internalValue = value;
  }
  public resetNoRedist() {
    this._noRedist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRedistInput() {
    return this._noRedist.internalValue;
  }

  // redist - computed: true, optional: true, required: false
  private _redist = new DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedistOutputReference(this, "redist");
  public get redist() {
    return this._redist;
  }
  public putRedist(value: DataPanosVirtualRouterProtocolRedistProfileIpv6ActionRedist) {
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
export interface DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#community DataPanosVirtualRouter#community}
  */
  readonly community?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#extended_community DataPanosVirtualRouter#extended_community}
  */
  readonly extendedCommunity?: string[];
}

export function dataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgpToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    extended_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedCommunity),
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgpToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgp | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgp | cdktf.IResolvable | undefined) {
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

  // community - computed: true, optional: true, required: false
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

  // extended_community - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#area DataPanosVirtualRouter#area}
  */
  readonly area?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#path_type DataPanosVirtualRouter#path_type}
  */
  readonly pathType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#tag DataPanosVirtualRouter#tag}
  */
  readonly tag?: string[];
}

export function dataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3ToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3 | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3ToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3 | cdktf.IResolvable | undefined) {
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

  // area - computed: true, optional: true, required: false
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

  // path_type - computed: true, optional: true, required: false
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

  // tag - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolRedistProfileIpv6Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#bgp DataPanosVirtualRouter#bgp}
  */
  readonly bgp?: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#destination DataPanosVirtualRouter#destination}
  */
  readonly destination?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#interface DataPanosVirtualRouter#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#nexthop DataPanosVirtualRouter#nexthop}
  */
  readonly nexthop?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#ospfv3 DataPanosVirtualRouter#ospfv3}
  */
  readonly ospfv3?: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#type DataPanosVirtualRouter#type}
  */
  readonly type?: string[];
}

export function dataPanosVirtualRouterProtocolRedistProfileIpv6FilterToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: dataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgpToTerraform(struct!.bgp),
    destination: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destination),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    nexthop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nexthop),
    ospfv3: dataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3ToTerraform(struct!.ospfv3),
    type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.type),
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileIpv6FilterToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: dataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgp",
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
      value: dataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3",
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

export class DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileIpv6Filter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileIpv6Filter | cdktf.IResolvable | undefined) {
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

  // bgp - computed: true, optional: true, required: false
  private _bgp = new DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // destination - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // nexthop - computed: true, optional: true, required: false
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

  // ospfv3 - computed: true, optional: true, required: false
  private _ospfv3 = new DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOspfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // type - computed: true, optional: true, required: false
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
export interface DataPanosVirtualRouterProtocolRedistProfileIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#action DataPanosVirtualRouter#action}
  */
  readonly action?: DataPanosVirtualRouterProtocolRedistProfileIpv6Action;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#filter DataPanosVirtualRouter#filter}
  */
  readonly filter?: DataPanosVirtualRouterProtocolRedistProfileIpv6Filter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#priority DataPanosVirtualRouter#priority}
  */
  readonly priority?: number;
}

export function dataPanosVirtualRouterProtocolRedistProfileIpv6ToTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPanosVirtualRouterProtocolRedistProfileIpv6ActionToTerraform(struct!.action),
    filter: dataPanosVirtualRouterProtocolRedistProfileIpv6FilterToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataPanosVirtualRouterProtocolRedistProfileIpv6ToHclTerraform(struct?: DataPanosVirtualRouterProtocolRedistProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPanosVirtualRouterProtocolRedistProfileIpv6ActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileIpv6Action",
    },
    filter: {
      value: dataPanosVirtualRouterProtocolRedistProfileIpv6FilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileIpv6Filter",
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

export class DataPanosVirtualRouterProtocolRedistProfileIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolRedistProfileIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRedistProfileIpv6 | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: true, required: false
  private _action = new DataPanosVirtualRouterProtocolRedistProfileIpv6ActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPanosVirtualRouterProtocolRedistProfileIpv6Action) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new DataPanosVirtualRouterProtocolRedistProfileIpv6FilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPanosVirtualRouterProtocolRedistProfileIpv6Filter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosVirtualRouterProtocolRedistProfileIpv6List extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolRedistProfileIpv6[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolRedistProfileIpv6OutputReference {
    return new DataPanosVirtualRouterProtocolRedistProfileIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolRipAuthProfileMd5 {
  /**
  * key for the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#key DataPanosVirtualRouter#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * prefer to use this key when sending packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#preferred DataPanosVirtualRouter#preferred}
  */
  readonly preferred?: boolean | cdktf.IResolvable;
}

export function dataPanosVirtualRouterProtocolRipAuthProfileMd5ToTerraform(struct?: DataPanosVirtualRouterProtocolRipAuthProfileMd5 | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterProtocolRipAuthProfileMd5ToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipAuthProfileMd5 | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRipAuthProfileMd5OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolRipAuthProfileMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipAuthProfileMd5 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

  // preferred - computed: true, optional: true, required: false
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

export class DataPanosVirtualRouterProtocolRipAuthProfileMd5List extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolRipAuthProfileMd5[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolRipAuthProfileMd5OutputReference {
    return new DataPanosVirtualRouterProtocolRipAuthProfileMd5OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolRipAuthProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#md5 DataPanosVirtualRouter#md5}
  */
  readonly md5?: DataPanosVirtualRouterProtocolRipAuthProfileMd5[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * Simple password authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#password DataPanosVirtualRouter#password}
  */
  readonly password?: string;
}

export function dataPanosVirtualRouterProtocolRipAuthProfileToTerraform(struct?: DataPanosVirtualRouterProtocolRipAuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: cdktf.listMapper(dataPanosVirtualRouterProtocolRipAuthProfileMd5ToTerraform, false)(struct!.md5),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function dataPanosVirtualRouterProtocolRipAuthProfileToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipAuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolRipAuthProfileMd5ToHclTerraform, false)(struct!.md5),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolRipAuthProfileMd5List",
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

export class DataPanosVirtualRouterProtocolRipAuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolRipAuthProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipAuthProfile | cdktf.IResolvable | undefined) {
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

  // md5 - computed: true, optional: true, required: false
  private _md5 = new DataPanosVirtualRouterProtocolRipAuthProfileMd5List(this, "md5", false);
  public get md5() {
    return this._md5;
  }
  public putMd5(value: DataPanosVirtualRouterProtocolRipAuthProfileMd5[] | cdktf.IResolvable) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // password - computed: true, optional: true, required: false
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

export class DataPanosVirtualRouterProtocolRipAuthProfileList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolRipAuthProfile[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolRipAuthProfileOutputReference {
    return new DataPanosVirtualRouterProtocolRipAuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolRipExportRules {
  /**
  * metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#metric DataPanosVirtualRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
}

export function dataPanosVirtualRouterProtocolRipExportRulesToTerraform(struct?: DataPanosVirtualRouterProtocolRipExportRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVirtualRouterProtocolRipExportRulesToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipExportRules | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRipExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolRipExportRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipExportRules | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVirtualRouterProtocolRipExportRulesList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolRipExportRules[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolRipExportRulesOutputReference {
    return new DataPanosVirtualRouterProtocolRipExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolRipGlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#profile DataPanosVirtualRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosVirtualRouterProtocolRipGlobalBfdToTerraform(struct?: DataPanosVirtualRouterProtocolRipGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosVirtualRouterProtocolRipGlobalBfdToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipGlobalBfd | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRipGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRipGlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipGlobalBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRipInterfacesBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#profile DataPanosVirtualRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosVirtualRouterProtocolRipInterfacesBfdToTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosVirtualRouterProtocolRipInterfacesBfdToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfacesBfd | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRipInterfacesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRipInterfacesBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipInterfacesBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertise {
  /**
  * metric to be used when advertise default route via RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#metric DataPanosVirtualRouter#metric}
  */
  readonly metric?: number;
}

export function dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertiseToTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertiseToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertise | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisable {
}

export function dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisableToTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisableToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisable | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRipInterfacesDefaultRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#advertise DataPanosVirtualRouter#advertise}
  */
  readonly advertise?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#disable DataPanosVirtualRouter#disable}
  */
  readonly disable?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisable;
}

export function dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteToTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertise",
    },
    disable: {
      value: dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRipInterfacesDefaultRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipInterfacesDefaultRoute | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // disable - computed: true, optional: true, required: false
  private _disable = new DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteDisable) {
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
export interface DataPanosVirtualRouterProtocolRipInterfaces {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#authentication DataPanosVirtualRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#bfd DataPanosVirtualRouter#bfd}
  */
  readonly bfd?: DataPanosVirtualRouterProtocolRipInterfacesBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#default_route DataPanosVirtualRouter#default_route}
  */
  readonly defaultRoute?: DataPanosVirtualRouterProtocolRipInterfacesDefaultRoute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#enable DataPanosVirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#mode DataPanosVirtualRouter#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
}

export function dataPanosVirtualRouterProtocolRipInterfacesToTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: dataPanosVirtualRouterProtocolRipInterfacesBfdToTerraform(struct!.bfd),
    default_route: dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteToTerraform(struct!.defaultRoute),
    enable: cdktf.booleanToTerraform(struct!.enable),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVirtualRouterProtocolRipInterfacesToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipInterfaces | cdktf.IResolvable): any {
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
      value: dataPanosVirtualRouterProtocolRipInterfacesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRipInterfacesBfd",
    },
    default_route: {
      value: dataPanosVirtualRouterProtocolRipInterfacesDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRipInterfacesDefaultRoute",
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

export class DataPanosVirtualRouterProtocolRipInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterProtocolRipInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipInterfaces | cdktf.IResolvable | undefined) {
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

  // authentication - computed: true, optional: true, required: false
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosVirtualRouterProtocolRipInterfacesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosVirtualRouterProtocolRipInterfacesBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // default_route - computed: true, optional: true, required: false
  private _defaultRoute = new DataPanosVirtualRouterProtocolRipInterfacesDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: DataPanosVirtualRouterProtocolRipInterfacesDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVirtualRouterProtocolRipInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterProtocolRipInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterProtocolRipInterfacesOutputReference {
    return new DataPanosVirtualRouterProtocolRipInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterProtocolRipTimers {
  /**
  * number of intervals take between route expiration to its deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#delete_intervals DataPanosVirtualRouter#delete_intervals}
  */
  readonly deleteIntervals?: number;
  /**
  * number of intervals take between route last updated to its expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#expire_intervals DataPanosVirtualRouter#expire_intervals}
  */
  readonly expireIntervals?: number;
  /**
  * timer interval value in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#interval_seconds DataPanosVirtualRouter#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * number of intervals take between route advertisement (RIP response packet)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#update_intervals DataPanosVirtualRouter#update_intervals}
  */
  readonly updateIntervals?: number;
}

export function dataPanosVirtualRouterProtocolRipTimersToTerraform(struct?: DataPanosVirtualRouterProtocolRipTimers | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterProtocolRipTimersToHclTerraform(struct?: DataPanosVirtualRouterProtocolRipTimers | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterProtocolRipTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRipTimers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRipTimers | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterProtocolRip {
  /**
  * allow redistribute default route to RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#allow_redist_default_route DataPanosVirtualRouter#allow_redist_default_route}
  */
  readonly allowRedistDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#auth_profile DataPanosVirtualRouter#auth_profile}
  */
  readonly authProfile?: DataPanosVirtualRouterProtocolRipAuthProfile[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#enable DataPanosVirtualRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#export_rules DataPanosVirtualRouter#export_rules}
  */
  readonly exportRules?: DataPanosVirtualRouterProtocolRipExportRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#global_bfd DataPanosVirtualRouter#global_bfd}
  */
  readonly globalBfd?: DataPanosVirtualRouterProtocolRipGlobalBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#interfaces DataPanosVirtualRouter#interfaces}
  */
  readonly interfaces?: DataPanosVirtualRouterProtocolRipInterfaces[] | cdktf.IResolvable;
  /**
  * do not learn default route from RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#reject_default_route DataPanosVirtualRouter#reject_default_route}
  */
  readonly rejectDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#timers DataPanosVirtualRouter#timers}
  */
  readonly timers?: DataPanosVirtualRouterProtocolRipTimers;
}

export function dataPanosVirtualRouterProtocolRipToTerraform(struct?: DataPanosVirtualRouterProtocolRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_redist_default_route: cdktf.booleanToTerraform(struct!.allowRedistDefaultRoute),
    auth_profile: cdktf.listMapper(dataPanosVirtualRouterProtocolRipAuthProfileToTerraform, false)(struct!.authProfile),
    enable: cdktf.booleanToTerraform(struct!.enable),
    export_rules: cdktf.listMapper(dataPanosVirtualRouterProtocolRipExportRulesToTerraform, false)(struct!.exportRules),
    global_bfd: dataPanosVirtualRouterProtocolRipGlobalBfdToTerraform(struct!.globalBfd),
    interfaces: cdktf.listMapper(dataPanosVirtualRouterProtocolRipInterfacesToTerraform, false)(struct!.interfaces),
    reject_default_route: cdktf.booleanToTerraform(struct!.rejectDefaultRoute),
    timers: dataPanosVirtualRouterProtocolRipTimersToTerraform(struct!.timers),
  }
}


export function dataPanosVirtualRouterProtocolRipToHclTerraform(struct?: DataPanosVirtualRouterProtocolRip | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolRipAuthProfileToHclTerraform, false)(struct!.authProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolRipAuthProfileList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_rules: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolRipExportRulesToHclTerraform, false)(struct!.exportRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolRipExportRulesList",
    },
    global_bfd: {
      value: dataPanosVirtualRouterProtocolRipGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRipGlobalBfd",
    },
    interfaces: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolRipInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolRipInterfacesList",
    },
    reject_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.rejectDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timers: {
      value: dataPanosVirtualRouterProtocolRipTimersToHclTerraform(struct!.timers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRipTimers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocolRip | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocolRip | cdktf.IResolvable | undefined) {
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

  // allow_redist_default_route - computed: true, optional: true, required: false
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

  // auth_profile - computed: true, optional: true, required: false
  private _authProfile = new DataPanosVirtualRouterProtocolRipAuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }
  public putAuthProfile(value: DataPanosVirtualRouterProtocolRipAuthProfile[] | cdktf.IResolvable) {
    this._authProfile.internalValue = value;
  }
  public resetAuthProfile() {
    this._authProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProfileInput() {
    return this._authProfile.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // export_rules - computed: true, optional: true, required: false
  private _exportRules = new DataPanosVirtualRouterProtocolRipExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }
  public putExportRules(value: DataPanosVirtualRouterProtocolRipExportRules[] | cdktf.IResolvable) {
    this._exportRules.internalValue = value;
  }
  public resetExportRules() {
    this._exportRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRulesInput() {
    return this._exportRules.internalValue;
  }

  // global_bfd - computed: true, optional: true, required: false
  private _globalBfd = new DataPanosVirtualRouterProtocolRipGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: DataPanosVirtualRouterProtocolRipGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // interfaces - computed: true, optional: true, required: false
  private _interfaces = new DataPanosVirtualRouterProtocolRipInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataPanosVirtualRouterProtocolRipInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // reject_default_route - computed: true, optional: true, required: false
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

  // timers - computed: true, optional: true, required: false
  private _timers = new DataPanosVirtualRouterProtocolRipTimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: DataPanosVirtualRouterProtocolRipTimers) {
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
export interface DataPanosVirtualRouterProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#bgp DataPanosVirtualRouter#bgp}
  */
  readonly bgp?: DataPanosVirtualRouterProtocolBgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#ospf DataPanosVirtualRouter#ospf}
  */
  readonly ospf?: DataPanosVirtualRouterProtocolOspf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#ospfv3 DataPanosVirtualRouter#ospfv3}
  */
  readonly ospfv3?: DataPanosVirtualRouterProtocolOspfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#redist_profile DataPanosVirtualRouter#redist_profile}
  */
  readonly redistProfile?: DataPanosVirtualRouterProtocolRedistProfile[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#redist_profile_ipv6 DataPanosVirtualRouter#redist_profile_ipv6}
  */
  readonly redistProfileIpv6?: DataPanosVirtualRouterProtocolRedistProfileIpv6[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router#rip DataPanosVirtualRouter#rip}
  */
  readonly rip?: DataPanosVirtualRouterProtocolRip;
}

export function dataPanosVirtualRouterProtocolToTerraform(struct?: DataPanosVirtualRouterProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: dataPanosVirtualRouterProtocolBgpToTerraform(struct!.bgp),
    ospf: dataPanosVirtualRouterProtocolOspfToTerraform(struct!.ospf),
    ospfv3: dataPanosVirtualRouterProtocolOspfv3ToTerraform(struct!.ospfv3),
    redist_profile: cdktf.listMapper(dataPanosVirtualRouterProtocolRedistProfileToTerraform, false)(struct!.redistProfile),
    redist_profile_ipv6: cdktf.listMapper(dataPanosVirtualRouterProtocolRedistProfileIpv6ToTerraform, false)(struct!.redistProfileIpv6),
    rip: dataPanosVirtualRouterProtocolRipToTerraform(struct!.rip),
  }
}


export function dataPanosVirtualRouterProtocolToHclTerraform(struct?: DataPanosVirtualRouterProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: dataPanosVirtualRouterProtocolBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolBgp",
    },
    ospf: {
      value: dataPanosVirtualRouterProtocolOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspf",
    },
    ospfv3: {
      value: dataPanosVirtualRouterProtocolOspfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolOspfv3",
    },
    redist_profile: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolRedistProfileToHclTerraform, false)(struct!.redistProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileList",
    },
    redist_profile_ipv6: {
      value: cdktf.listMapperHcl(dataPanosVirtualRouterProtocolRedistProfileIpv6ToHclTerraform, false)(struct!.redistProfileIpv6),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterProtocolRedistProfileIpv6List",
    },
    rip: {
      value: dataPanosVirtualRouterProtocolRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterProtocolRip",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterProtocol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterProtocol | cdktf.IResolvable | undefined) {
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

  // bgp - computed: true, optional: true, required: false
  private _bgp = new DataPanosVirtualRouterProtocolBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: DataPanosVirtualRouterProtocolBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ospf - computed: true, optional: true, required: false
  private _ospf = new DataPanosVirtualRouterProtocolOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: DataPanosVirtualRouterProtocolOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ospfv3 - computed: true, optional: true, required: false
  private _ospfv3 = new DataPanosVirtualRouterProtocolOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: DataPanosVirtualRouterProtocolOspfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // redist_profile - computed: true, optional: true, required: false
  private _redistProfile = new DataPanosVirtualRouterProtocolRedistProfileList(this, "redist_profile", false);
  public get redistProfile() {
    return this._redistProfile;
  }
  public putRedistProfile(value: DataPanosVirtualRouterProtocolRedistProfile[] | cdktf.IResolvable) {
    this._redistProfile.internalValue = value;
  }
  public resetRedistProfile() {
    this._redistProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistProfileInput() {
    return this._redistProfile.internalValue;
  }

  // redist_profile_ipv6 - computed: true, optional: true, required: false
  private _redistProfileIpv6 = new DataPanosVirtualRouterProtocolRedistProfileIpv6List(this, "redist_profile_ipv6", false);
  public get redistProfileIpv6() {
    return this._redistProfileIpv6;
  }
  public putRedistProfileIpv6(value: DataPanosVirtualRouterProtocolRedistProfileIpv6[] | cdktf.IResolvable) {
    this._redistProfileIpv6.internalValue = value;
  }
  public resetRedistProfileIpv6() {
    this._redistProfileIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistProfileIpv6Input() {
    return this._redistProfileIpv6.internalValue;
  }

  // rip - computed: true, optional: true, required: false
  private _rip = new DataPanosVirtualRouterProtocolRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: DataPanosVirtualRouterProtocolRip) {
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
