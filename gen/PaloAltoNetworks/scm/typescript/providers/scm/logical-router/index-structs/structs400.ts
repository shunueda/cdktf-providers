import * as cdktf from 'cdktf';
import { LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast,
logicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToTerraform,
logicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToHclTerraform,
LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference,
LogicalRouterVrfOspfAreaInterfaceBfd,
logicalRouterVrfOspfAreaInterfaceBfdToTerraform,
logicalRouterVrfOspfAreaInterfaceBfdToHclTerraform,
LogicalRouterVrfOspfAreaInterfaceBfdOutputReference,
LogicalRouterVrfAdminDists,
logicalRouterVrfAdminDistsToTerraform,
logicalRouterVrfAdminDistsToHclTerraform,
LogicalRouterVrfAdminDistsOutputReference,
LogicalRouterVrfBgp,
logicalRouterVrfBgpToTerraform,
logicalRouterVrfBgpToHclTerraform,
LogicalRouterVrfBgpOutputReference,
LogicalRouterVrfEcmp,
logicalRouterVrfEcmpToTerraform,
logicalRouterVrfEcmpToHclTerraform,
LogicalRouterVrfEcmpOutputReference,
LogicalRouterVrfMulticast,
logicalRouterVrfMulticastToTerraform,
logicalRouterVrfMulticastToHclTerraform,
LogicalRouterVrfMulticastOutputReference } from './structs0'
export interface LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._priority = value.priority;
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

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp {
  /**
  * Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#neighbor LogicalRouter#neighbor}
  */
  readonly neighbor?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neighbor: cdktf.listMapper(logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToTerraform, false)(struct!.neighbor),
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neighbor: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neighbor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neighbor.internalValue = value.neighbor;
    }
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }
}
export interface LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P {
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2PToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2PToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaInterfaceLinkType {
  /**
  * Broadcast
  * 
  * > ℹ️ **Note:** You must specify exactly one of `broadcast`, `p2mp`, and `p2p`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#broadcast LogicalRouter#broadcast}
  */
  readonly broadcast?: LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast;
  /**
  * P2mp
  * 
  * > ℹ️ **Note:** You must specify exactly one of `broadcast`, `p2mp`, and `p2p`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#p2mp LogicalRouter#p2mp}
  */
  readonly p2Mp?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp;
  /**
  * P2p
  * 
  * > ℹ️ **Note:** You must specify exactly one of `broadcast`, `p2mp`, and `p2p`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#p2p LogicalRouter#p2p}
  */
  readonly p2P?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P;
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: logicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToTerraform(struct!.broadcast),
    p2mp: logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToTerraform(struct!.p2Mp),
    p2p: logicalRouterVrfOspfAreaInterfaceLinkTypeP2PToTerraform(struct!.p2P),
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: logicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToHclTerraform(struct!.broadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast",
    },
    p2mp: {
      value: logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToHclTerraform(struct!.p2Mp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp",
    },
    p2p: {
      value: logicalRouterVrfOspfAreaInterfaceLinkTypeP2PToHclTerraform(struct!.p2P),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable | undefined) {
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
  private _broadcast = new LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }
  public putBroadcast(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast) {
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
  private _p2Mp = new LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }
  public putP2Mp(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp) {
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
  private _p2P = new LogicalRouterVrfOspfAreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
  public putP2P(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P) {
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
export interface LogicalRouterVrfOspfAreaInterfaceVrTiming {
  /**
  * Dead counts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#dead_counts LogicalRouter#dead_counts}
  */
  readonly deadCounts?: number;
  /**
  * Gr delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#gr_delay LogicalRouter#gr_delay}
  */
  readonly grDelay?: number;
  /**
  * Hello interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#hello_interval LogicalRouter#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Retransmit interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#retransmit_interval LogicalRouter#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Transit delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#transit_delay LogicalRouter#transit_delay}
  */
  readonly transitDelay?: number;
}

export function logicalRouterVrfOspfAreaInterfaceVrTimingToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceVrTiming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_counts: cdktf.numberToTerraform(struct!.deadCounts),
    gr_delay: cdktf.numberToTerraform(struct!.grDelay),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
  }
}


export function logicalRouterVrfOspfAreaInterfaceVrTimingToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceVrTiming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_counts: {
      value: cdktf.numberToHclTerraform(struct!.deadCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class LogicalRouterVrfOspfAreaInterfaceVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceVrTiming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadCounts = this._deadCounts;
    }
    if (this._grDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.grDelay = this._grDelay;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
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

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceVrTiming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadCounts = undefined;
      this._grDelay = undefined;
      this._helloInterval = undefined;
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
      this._deadCounts = value.deadCounts;
      this._grDelay = value.grDelay;
      this._helloInterval = value.helloInterval;
      this._retransmitInterval = value.retransmitInterval;
      this._transitDelay = value.transitDelay;
    }
  }

  // dead_counts - computed: false, optional: true, required: false
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

  // gr_delay - computed: false, optional: true, required: false
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

  // hello_interval - computed: false, optional: true, required: false
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

  // retransmit_interval - computed: false, optional: true, required: false
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

  // transit_delay - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfAreaInterface {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfOspfAreaInterfaceBfd;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Link type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#link_type LogicalRouter#link_type}
  */
  readonly linkType?: LogicalRouterVrfOspfAreaInterfaceLinkType;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Mtu ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#mtu_ignore LogicalRouter#mtu_ignore}
  */
  readonly mtuIgnore?: boolean | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#passive LogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
  /**
  * Timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#timing LogicalRouter#timing}
  */
  readonly timing?: string;
  /**
  * Vr timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_timing LogicalRouter#vr_timing}
  */
  readonly vrTiming?: LogicalRouterVrfOspfAreaInterfaceVrTiming;
}

export function logicalRouterVrfOspfAreaInterfaceToTerraform(struct?: LogicalRouterVrfOspfAreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfOspfAreaInterfaceBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    link_type: logicalRouterVrfOspfAreaInterfaceLinkTypeToTerraform(struct!.linkType),
    metric: cdktf.numberToTerraform(struct!.metric),
    mtu_ignore: cdktf.booleanToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.booleanToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    timing: cdktf.stringToTerraform(struct!.timing),
    vr_timing: logicalRouterVrfOspfAreaInterfaceVrTimingToTerraform(struct!.vrTiming),
  }
}


export function logicalRouterVrfOspfAreaInterfaceToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterface | cdktf.IResolvable): any {
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
      value: logicalRouterVrfOspfAreaInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_type: {
      value: logicalRouterVrfOspfAreaInterfaceLinkTypeToHclTerraform(struct!.linkType),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkType",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.booleanToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vr_timing: {
      value: logicalRouterVrfOspfAreaInterfaceVrTimingToHclTerraform(struct!.vrTiming),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceVrTiming",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaInterface | cdktf.IResolvable | undefined {
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
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._linkType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    if (this._vrTiming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrTiming = this._vrTiming?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._linkType.internalValue = undefined;
      this._metric = undefined;
      this._mtuIgnore = undefined;
      this._name = undefined;
      this._passive = undefined;
      this._priority = undefined;
      this._timing = undefined;
      this._vrTiming.internalValue = undefined;
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
      this._enable = value.enable;
      this._linkType.internalValue = value.linkType;
      this._metric = value.metric;
      this._mtuIgnore = value.mtuIgnore;
      this._name = value.name;
      this._passive = value.passive;
      this._priority = value.priority;
      this._timing = value.timing;
      this._vrTiming.internalValue = value.vrTiming;
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
  private _bfd = new LogicalRouterVrfOspfAreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfOspfAreaInterfaceBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
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

  // link_type - computed: false, optional: true, required: false
  private _linkType = new LogicalRouterVrfOspfAreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }
  public putLinkType(value: LogicalRouterVrfOspfAreaInterfaceLinkType) {
    this._linkType.internalValue = value;
  }
  public resetLinkType() {
    this._linkType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType.internalValue;
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

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: boolean | cdktf.IResolvable; 
  public get mtuIgnore() {
    return this.getBooleanAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: boolean | cdktf.IResolvable) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
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

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
  }

  // vr_timing - computed: false, optional: true, required: false
  private _vrTiming = new LogicalRouterVrfOspfAreaInterfaceVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
  public putVrTiming(value: LogicalRouterVrfOspfAreaInterfaceVrTiming) {
    this._vrTiming.internalValue = value;
  }
  public resetVrTiming() {
    this._vrTiming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrTimingInput() {
    return this._vrTiming.internalValue;
  }
}

export class LogicalRouterVrfOspfAreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaInterfaceOutputReference {
    return new LogicalRouterVrfOspfAreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaRange {
  /**
  * Advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Substitute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#substitute LogicalRouter#substitute}
  */
  readonly substitute?: string;
}

export function logicalRouterVrfOspfAreaRangeToTerraform(struct?: LogicalRouterVrfOspfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    substitute: cdktf.stringToTerraform(struct!.substitute),
  }
}


export function logicalRouterVrfOspfAreaRangeToHclTerraform(struct?: LogicalRouterVrfOspfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitute: {
      value: cdktf.stringToHclTerraform(struct!.substitute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._substitute !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitute = this._substitute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._name = undefined;
      this._substitute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._name = value.name;
      this._substitute = value.substitute;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

  // substitute - computed: false, optional: true, required: false
  private _substitute?: string; 
  public get substitute() {
    return this.getStringAttribute('substitute');
  }
  public set substitute(value: string) {
    this._substitute = value;
  }
  public resetSubstitute() {
    this._substitute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteInput() {
    return this._substitute;
  }
}

export class LogicalRouterVrfOspfAreaRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaRangeOutputReference {
    return new LogicalRouterVrfOspfAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaTypeNormalAbr {
  /**
  * Export list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Import list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfAreaTypeNormalAbrToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfAreaTypeNormalAbrToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfAreaTypeNormal {
  /**
  * Abr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfAreaTypeNormalAbr;
}

export function logicalRouterVrfOspfAreaTypeNormalToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfAreaTypeNormalAbrToTerraform(struct!.abr),
  }
}


export function logicalRouterVrfOspfAreaTypeNormalToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfAreaTypeNormalAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNormalAbr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfAreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfAreaTypeNormalAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange {
  /**
  * Advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Route tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_tag LogicalRouter#route_tag}
  */
  readonly routeTag?: number;
}

export function logicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    route_tag: cdktf.numberToTerraform(struct!.routeTag),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_tag: {
      value: cdktf.numberToHclTerraform(struct!.routeTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routeTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTag = this._routeTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._name = undefined;
      this._routeTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._name = value.name;
      this._routeTag = value.routeTag;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
  }
}

export class LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference {
    return new LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssaAbr {
  /**
  * Export list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Import list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Nssa ext range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#nssa_ext_range LogicalRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfAreaTypeNssaAbrToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    nssa_ext_range: cdktf.listMapper(logicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaAbrToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa_ext_range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._nssaExtRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaExtRange = this._nssaExtRange?.internalValue;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._nssaExtRange.internalValue = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._nssaExtRange.internalValue = value.nssaExtRange;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // nssa_ext_range - computed: false, optional: true, required: false
  private _nssaExtRange = new LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable) {
    this._nssaExtRange.internalValue = value;
  }
  public resetNssaExtRange() {
    this._nssaExtRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaExtRangeInput() {
    return this._nssaExtRange.internalValue;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Metric type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric_type LogicalRouter#metric_type}
  */
  readonly metricType?: string;
}

export function logicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
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
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricType = value.metricType;
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

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#type LogicalRouter#type}
  */
  readonly type?: string;
}

export function logicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable {
}

export function logicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaTypeNssaDefaultRoute {
  /**
  * Advertise
  * 
  * > ℹ️ **Note:** You must specify exactly one of `advertise` and `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise;
  /**
  * Disable
  * 
  * > ℹ️ **Note:** You must specify exactly one of `advertise` and `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#disable LogicalRouter#disable}
  */
  readonly disable?: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable;
}

export function logicalRouterVrfOspfAreaTypeNssaDefaultRouteToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: logicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaDefaultRouteToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise",
    },
    disable: {
      value: logicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaDefaultRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaDefaultRoute | cdktf.IResolvable | undefined) {
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
  private _advertise = new LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise) {
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
  private _disable = new LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: LogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable) {
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
export interface LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise {
}

export function logicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress {
}

export function logicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaTypeNssaNssaExtRange {
  /**
  * Advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Suppress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#suppress LogicalRouter#suppress}
  */
  readonly suppress?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress;
}

export function logicalRouterVrfOspfAreaTypeNssaNssaExtRangeToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    suppress: logicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressToTerraform(struct!.suppress),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaNssaExtRangeToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: logicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaNssaExtRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaNssaExtRange | cdktf.IResolvable | undefined) {
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
  private _advertise = new LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise) {
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
  private _suppress = new LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress) {
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

export class LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaTypeNssaNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeOutputReference {
    return new LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssa {
  /**
  * Abr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfAreaTypeNssaAbr;
  /**
  * Accept summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#accept_summary LogicalRouter#accept_summary}
  */
  readonly acceptSummary?: boolean | cdktf.IResolvable;
  /**
  * Default information originate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_information_originate LogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate;
  /**
  * Default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_route LogicalRouter#default_route}
  */
  readonly defaultRoute?: LogicalRouterVrfOspfAreaTypeNssaDefaultRoute;
  /**
  * No summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#no_summary LogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
  /**
  * Nssa ext range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#nssa_ext_range LogicalRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: LogicalRouterVrfOspfAreaTypeNssaNssaExtRange[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAreaTypeNssaToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfAreaTypeNssaAbrToTerraform(struct!.abr),
    accept_summary: cdktf.booleanToTerraform(struct!.acceptSummary),
    default_information_originate: logicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToTerraform(struct!.defaultInformationOriginate),
    default_route: logicalRouterVrfOspfAreaTypeNssaDefaultRouteToTerraform(struct!.defaultRoute),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
    nssa_ext_range: cdktf.listMapper(logicalRouterVrfOspfAreaTypeNssaNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfAreaTypeNssaAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaAbr",
    },
    accept_summary: {
      value: cdktf.booleanToHclTerraform(struct!.acceptSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_information_originate: {
      value: logicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate",
    },
    default_route: {
      value: logicalRouterVrfOspfAreaTypeNssaDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaDefaultRoute",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa_ext_range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaTypeNssaNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    if (this._acceptSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSummary = this._acceptSummary;
    }
    if (this._defaultInformationOriginate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate?.internalValue;
    }
    if (this._defaultRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute?.internalValue;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    if (this._nssaExtRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaExtRange = this._nssaExtRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
      this._acceptSummary = undefined;
      this._defaultInformationOriginate.internalValue = undefined;
      this._defaultRoute.internalValue = undefined;
      this._noSummary = undefined;
      this._nssaExtRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
      this._acceptSummary = value.acceptSummary;
      this._defaultInformationOriginate.internalValue = value.defaultInformationOriginate;
      this._defaultRoute.internalValue = value.defaultRoute;
      this._noSummary = value.noSummary;
      this._nssaExtRange.internalValue = value.nssaExtRange;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfAreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfAreaTypeNssaAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
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

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate = new LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }
  public putDefaultInformationOriginate(value: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate) {
    this._defaultInformationOriginate.internalValue = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate.internalValue;
  }

  // default_route - computed: false, optional: true, required: false
  private _defaultRoute = new LogicalRouterVrfOspfAreaTypeNssaDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: LogicalRouterVrfOspfAreaTypeNssaDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }

  // nssa_ext_range - computed: false, optional: true, required: false
  private _nssaExtRange = new LogicalRouterVrfOspfAreaTypeNssaNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: LogicalRouterVrfOspfAreaTypeNssaNssaExtRange[] | cdktf.IResolvable) {
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
export interface LogicalRouterVrfOspfAreaTypeStubAbr {
  /**
  * Export list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Import list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfAreaTypeStubAbrToTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfAreaTypeStubAbrToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
}

export function logicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseToTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function logicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
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
}
export interface LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable {
}

export function logicalRouterVrfOspfAreaTypeStubDefaultRouteDisableToTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaTypeStubDefaultRouteDisableToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaTypeStubDefaultRoute {
  /**
  * Advertise
  * 
  * > ℹ️ **Note:** You must specify exactly one of `advertise` and `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise;
  /**
  * Disable
  * 
  * > ℹ️ **Note:** You must specify exactly one of `advertise` and `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#disable LogicalRouter#disable}
  */
  readonly disable?: LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable;
}

export function logicalRouterVrfOspfAreaTypeStubDefaultRouteToTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: logicalRouterVrfOspfAreaTypeStubDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function logicalRouterVrfOspfAreaTypeStubDefaultRouteToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise",
    },
    disable: {
      value: logicalRouterVrfOspfAreaTypeStubDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeStubDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeStubDefaultRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeStubDefaultRoute | cdktf.IResolvable | undefined) {
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
  private _advertise = new LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise) {
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
  private _disable = new LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: LogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable) {
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
export interface LogicalRouterVrfOspfAreaTypeStub {
  /**
  * Abr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfAreaTypeStubAbr;
  /**
  * Accept summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#accept_summary LogicalRouter#accept_summary}
  */
  readonly acceptSummary?: boolean | cdktf.IResolvable;
  /**
  * Default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_route LogicalRouter#default_route}
  */
  readonly defaultRoute?: LogicalRouterVrfOspfAreaTypeStubDefaultRoute;
  /**
  * Default route metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_route_metric LogicalRouter#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * No summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#no_summary LogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAreaTypeStubToTerraform(struct?: LogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfAreaTypeStubAbrToTerraform(struct!.abr),
    accept_summary: cdktf.booleanToTerraform(struct!.acceptSummary),
    default_route: logicalRouterVrfOspfAreaTypeStubDefaultRouteToTerraform(struct!.defaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function logicalRouterVrfOspfAreaTypeStubToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfAreaTypeStubAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeStubAbr",
    },
    accept_summary: {
      value: cdktf.booleanToHclTerraform(struct!.acceptSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route: {
      value: logicalRouterVrfOspfAreaTypeStubDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeStubDefaultRoute",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    if (this._acceptSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSummary = this._acceptSummary;
    }
    if (this._defaultRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute?.internalValue;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
      this._acceptSummary = undefined;
      this._defaultRoute.internalValue = undefined;
      this._defaultRouteMetric = undefined;
      this._noSummary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
      this._acceptSummary = value.acceptSummary;
      this._defaultRoute.internalValue = value.defaultRoute;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._noSummary = value.noSummary;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfAreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfAreaTypeStubAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
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
  private _defaultRoute = new LogicalRouterVrfOspfAreaTypeStubDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: LogicalRouterVrfOspfAreaTypeStubDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // default_route_metric - computed: false, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }
}
export interface LogicalRouterVrfOspfAreaType {
  /**
  * Normal
  * 
  * > ℹ️ **Note:** You must specify exactly one of `normal`, `nssa`, and `stub`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#normal LogicalRouter#normal}
  */
  readonly normal?: LogicalRouterVrfOspfAreaTypeNormal;
  /**
  * Nssa
  * 
  * > ℹ️ **Note:** You must specify exactly one of `normal`, `nssa`, and `stub`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#nssa LogicalRouter#nssa}
  */
  readonly nssa?: LogicalRouterVrfOspfAreaTypeNssa;
  /**
  * Stub
  * 
  * > ℹ️ **Note:** You must specify exactly one of `normal`, `nssa`, and `stub`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#stub LogicalRouter#stub}
  */
  readonly stub?: LogicalRouterVrfOspfAreaTypeStub;
}

export function logicalRouterVrfOspfAreaTypeToTerraform(struct?: LogicalRouterVrfOspfAreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normal: logicalRouterVrfOspfAreaTypeNormalToTerraform(struct!.normal),
    nssa: logicalRouterVrfOspfAreaTypeNssaToTerraform(struct!.nssa),
    stub: logicalRouterVrfOspfAreaTypeStubToTerraform(struct!.stub),
  }
}


export function logicalRouterVrfOspfAreaTypeToHclTerraform(struct?: LogicalRouterVrfOspfAreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normal: {
      value: logicalRouterVrfOspfAreaTypeNormalToHclTerraform(struct!.normal),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNormal",
    },
    nssa: {
      value: logicalRouterVrfOspfAreaTypeNssaToHclTerraform(struct!.nssa),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssa",
    },
    stub: {
      value: logicalRouterVrfOspfAreaTypeStubToHclTerraform(struct!.stub),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeStub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaType | cdktf.IResolvable | undefined) {
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
  private _normal = new LogicalRouterVrfOspfAreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }
  public putNormal(value: LogicalRouterVrfOspfAreaTypeNormal) {
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
  private _nssa = new LogicalRouterVrfOspfAreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: LogicalRouterVrfOspfAreaTypeNssa) {
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
  private _stub = new LogicalRouterVrfOspfAreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: LogicalRouterVrfOspfAreaTypeStub) {
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
export interface LogicalRouterVrfOspfAreaVirtualLinkBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfAreaVirtualLinkBfdToTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfAreaVirtualLinkBfdToHclTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfAreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfAreaVirtualLinkVrTiming {
  /**
  * Dead counts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#dead_counts LogicalRouter#dead_counts}
  */
  readonly deadCounts?: number;
  /**
  * Hello interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#hello_interval LogicalRouter#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Retransmit interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#retransmit_interval LogicalRouter#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Transit delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#transit_delay LogicalRouter#transit_delay}
  */
  readonly transitDelay?: number;
}

export function logicalRouterVrfOspfAreaVirtualLinkVrTimingToTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLinkVrTiming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_counts: cdktf.numberToTerraform(struct!.deadCounts),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
  }
}


export function logicalRouterVrfOspfAreaVirtualLinkVrTimingToHclTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLinkVrTiming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_counts: {
      value: cdktf.numberToHclTerraform(struct!.deadCounts),
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

export class LogicalRouterVrfOspfAreaVirtualLinkVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaVirtualLinkVrTiming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadCounts = this._deadCounts;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
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

  public set internalValue(value: LogicalRouterVrfOspfAreaVirtualLinkVrTiming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadCounts = undefined;
      this._helloInterval = undefined;
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
      this._deadCounts = value.deadCounts;
      this._helloInterval = value.helloInterval;
      this._retransmitInterval = value.retransmitInterval;
      this._transitDelay = value.transitDelay;
    }
  }

  // dead_counts - computed: false, optional: true, required: false
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

  // hello_interval - computed: false, optional: true, required: false
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

  // retransmit_interval - computed: false, optional: true, required: false
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

  // transit_delay - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfAreaVirtualLink {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfOspfAreaVirtualLinkBfd;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Instance id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#instance_id LogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Interface id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface_id LogicalRouter#interface_id}
  */
  readonly interfaceId?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Neighbor id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#neighbor_id LogicalRouter#neighbor_id}
  */
  readonly neighborId?: string;
  /**
  * Passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#passive LogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#timing LogicalRouter#timing}
  */
  readonly timing?: string;
  /**
  * Transit area id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#transit_area_id LogicalRouter#transit_area_id}
  */
  readonly transitAreaId?: string;
  /**
  * Vr timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_timing LogicalRouter#vr_timing}
  */
  readonly vrTiming?: LogicalRouterVrfOspfAreaVirtualLinkVrTiming;
}

export function logicalRouterVrfOspfAreaVirtualLinkToTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfOspfAreaVirtualLinkBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    interface_id: cdktf.numberToTerraform(struct!.interfaceId),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor_id: cdktf.stringToTerraform(struct!.neighborId),
    passive: cdktf.booleanToTerraform(struct!.passive),
    timing: cdktf.stringToTerraform(struct!.timing),
    transit_area_id: cdktf.stringToTerraform(struct!.transitAreaId),
    vr_timing: logicalRouterVrfOspfAreaVirtualLinkVrTimingToTerraform(struct!.vrTiming),
  }
}


export function logicalRouterVrfOspfAreaVirtualLinkToHclTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable): any {
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
      value: logicalRouterVrfOspfAreaVirtualLinkBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaVirtualLinkBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_id: {
      value: cdktf.numberToHclTerraform(struct!.interfaceId),
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
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_area_id: {
      value: cdktf.stringToHclTerraform(struct!.transitAreaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vr_timing: {
      value: logicalRouterVrfOspfAreaVirtualLinkVrTimingToHclTerraform(struct!.vrTiming),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaVirtualLinkVrTiming",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable | undefined {
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
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighborId !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborId = this._neighborId;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    if (this._transitAreaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitAreaId = this._transitAreaId;
    }
    if (this._vrTiming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrTiming = this._vrTiming?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._instanceId = undefined;
      this._interfaceId = undefined;
      this._name = undefined;
      this._neighborId = undefined;
      this._passive = undefined;
      this._timing = undefined;
      this._transitAreaId = undefined;
      this._vrTiming.internalValue = undefined;
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
      this._enable = value.enable;
      this._instanceId = value.instanceId;
      this._interfaceId = value.interfaceId;
      this._name = value.name;
      this._neighborId = value.neighborId;
      this._passive = value.passive;
      this._timing = value.timing;
      this._transitAreaId = value.transitAreaId;
      this._vrTiming.internalValue = value.vrTiming;
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
  private _bfd = new LogicalRouterVrfOspfAreaVirtualLinkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfOspfAreaVirtualLinkBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
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

  // instance_id - computed: false, optional: true, required: false
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

  // interface_id - computed: false, optional: true, required: false
  private _interfaceId?: number; 
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }
  public set interfaceId(value: number) {
    this._interfaceId = value;
  }
  public resetInterfaceId() {
    this._interfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
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

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
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

  // vr_timing - computed: false, optional: true, required: false
  private _vrTiming = new LogicalRouterVrfOspfAreaVirtualLinkVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
  public putVrTiming(value: LogicalRouterVrfOspfAreaVirtualLinkVrTiming) {
    this._vrTiming.internalValue = value;
  }
  public resetVrTiming() {
    this._vrTiming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrTimingInput() {
    return this._vrTiming.internalValue;
  }
}

export class LogicalRouterVrfOspfAreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaVirtualLinkOutputReference {
    return new LogicalRouterVrfOspfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaVrRangeAdvertise {
}

export function logicalRouterVrfOspfAreaVrRangeAdvertiseToTerraform(struct?: LogicalRouterVrfOspfAreaVrRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaVrRangeAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfAreaVrRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaVrRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaVrRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaVrRangeAdvertise | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaVrRangeSuppress {
}

export function logicalRouterVrfOspfAreaVrRangeSuppressToTerraform(struct?: LogicalRouterVrfOspfAreaVrRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaVrRangeSuppressToHclTerraform(struct?: LogicalRouterVrfOspfAreaVrRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaVrRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaVrRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaVrRangeSuppress | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaVrRange {
  /**
  * Advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfAreaVrRangeAdvertise;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Suppress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#suppress LogicalRouter#suppress}
  */
  readonly suppress?: LogicalRouterVrfOspfAreaVrRangeSuppress;
}

export function logicalRouterVrfOspfAreaVrRangeToTerraform(struct?: LogicalRouterVrfOspfAreaVrRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfAreaVrRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    suppress: logicalRouterVrfOspfAreaVrRangeSuppressToTerraform(struct!.suppress),
  }
}


export function logicalRouterVrfOspfAreaVrRangeToHclTerraform(struct?: LogicalRouterVrfOspfAreaVrRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfAreaVrRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaVrRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: logicalRouterVrfOspfAreaVrRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaVrRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaVrRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaVrRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAreaVrRange | cdktf.IResolvable | undefined) {
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
  private _advertise = new LogicalRouterVrfOspfAreaVrRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfAreaVrRangeAdvertise) {
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
  private _suppress = new LogicalRouterVrfOspfAreaVrRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: LogicalRouterVrfOspfAreaVrRangeSuppress) {
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

export class LogicalRouterVrfOspfAreaVrRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaVrRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaVrRangeOutputReference {
    return new LogicalRouterVrfOspfAreaVrRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfArea {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: LogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#range LogicalRouter#range}
  */
  readonly range?: LogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#type LogicalRouter#type}
  */
  readonly type?: LogicalRouterVrfOspfAreaType;
  /**
  * Virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#virtual_link LogicalRouter#virtual_link}
  */
  readonly virtualLink?: LogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable;
  /**
  * Vr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_range LogicalRouter#vr_range}
  */
  readonly vrRange?: LogicalRouterVrfOspfAreaVrRange[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAreaToTerraform(struct?: LogicalRouterVrfOspfArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    interface: cdktf.listMapper(logicalRouterVrfOspfAreaInterfaceToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    range: cdktf.listMapper(logicalRouterVrfOspfAreaRangeToTerraform, false)(struct!.range),
    type: logicalRouterVrfOspfAreaTypeToTerraform(struct!.type),
    virtual_link: cdktf.listMapper(logicalRouterVrfOspfAreaVirtualLinkToTerraform, false)(struct!.virtualLink),
    vr_range: cdktf.listMapper(logicalRouterVrfOspfAreaVrRangeToTerraform, false)(struct!.vrRange),
  }
}


export function logicalRouterVrfOspfAreaToHclTerraform(struct?: LogicalRouterVrfOspfArea | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaRangeToHclTerraform, false)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaRangeList",
    },
    type: {
      value: logicalRouterVrfOspfAreaTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaType",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaVirtualLinkToHclTerraform, false)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaVirtualLinkList",
    },
    vr_range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaVrRangeToHclTerraform, false)(struct!.vrRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaVrRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfArea | cdktf.IResolvable | undefined {
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
    if (this._vrRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrRange = this._vrRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfArea | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._interface.internalValue = undefined;
      this._name = undefined;
      this._range.internalValue = undefined;
      this._type.internalValue = undefined;
      this._virtualLink.internalValue = undefined;
      this._vrRange.internalValue = undefined;
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
      this._vrRange.internalValue = value.vrRange;
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
  private _interface = new LogicalRouterVrfOspfAreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: LogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable) {
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
  private _range = new LogicalRouterVrfOspfAreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: LogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable) {
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
  private _type = new LogicalRouterVrfOspfAreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: LogicalRouterVrfOspfAreaType) {
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
  private _virtualLink = new LogicalRouterVrfOspfAreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: LogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }

  // vr_range - computed: false, optional: true, required: false
  private _vrRange = new LogicalRouterVrfOspfAreaVrRangeList(this, "vr_range", false);
  public get vrRange() {
    return this._vrRange;
  }
  public putVrRange(value: LogicalRouterVrfOspfAreaVrRange[] | cdktf.IResolvable) {
    this._vrRange.internalValue = value;
  }
  public resetVrRange() {
    this._vrRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrRangeInput() {
    return this._vrRange.internalValue;
  }
}

export class LogicalRouterVrfOspfAreaList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfArea[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaOutputReference {
    return new LogicalRouterVrfOspfAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAuthProfileMd5 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: number;
  /**
  * Preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#preferred LogicalRouter#preferred}
  */
  readonly preferred?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAuthProfileMd5ToTerraform(struct?: LogicalRouterVrfOspfAuthProfileMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.numberToTerraform(struct!.name),
    preferred: cdktf.booleanToTerraform(struct!.preferred),
  }
}


export function logicalRouterVrfOspfAuthProfileMd5ToHclTerraform(struct?: LogicalRouterVrfOspfAuthProfileMd5 | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class LogicalRouterVrfOspfAuthProfileMd5OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAuthProfileMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAuthProfileMd5 | cdktf.IResolvable | undefined) {
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
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
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

export class LogicalRouterVrfOspfAuthProfileMd5List extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAuthProfileMd5[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAuthProfileMd5OutputReference {
    return new LogicalRouterVrfOspfAuthProfileMd5OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAuthProfile {
  /**
  * Md5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#md5 LogicalRouter#md5}
  */
  readonly md5?: LogicalRouterVrfOspfAuthProfileMd5[] | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#password LogicalRouter#password}
  */
  readonly password?: string;
}

export function logicalRouterVrfOspfAuthProfileToTerraform(struct?: LogicalRouterVrfOspfAuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: cdktf.listMapper(logicalRouterVrfOspfAuthProfileMd5ToTerraform, false)(struct!.md5),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function logicalRouterVrfOspfAuthProfileToHclTerraform(struct?: LogicalRouterVrfOspfAuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAuthProfileMd5ToHclTerraform, false)(struct!.md5),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAuthProfileMd5List",
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

export class LogicalRouterVrfOspfAuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAuthProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfAuthProfile | cdktf.IResolvable | undefined) {
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
  private _md5 = new LogicalRouterVrfOspfAuthProfileMd5List(this, "md5", false);
  public get md5() {
    return this._md5;
  }
  public putMd5(value: LogicalRouterVrfOspfAuthProfileMd5[] | cdktf.IResolvable) {
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

export class LogicalRouterVrfOspfAuthProfileList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAuthProfile[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAuthProfileOutputReference {
    return new LogicalRouterVrfOspfAuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfExportRules {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * New path type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#new_path_type LogicalRouter#new_path_type}
  */
  readonly newPathType?: string;
  /**
  * New tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#new_tag LogicalRouter#new_tag}
  */
  readonly newTag?: string;
}

export function logicalRouterVrfOspfExportRulesToTerraform(struct?: LogicalRouterVrfOspfExportRules | cdktf.IResolvable): any {
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


export function logicalRouterVrfOspfExportRulesToHclTerraform(struct?: LogicalRouterVrfOspfExportRules | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfExportRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfExportRules | cdktf.IResolvable | undefined) {
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

  // new_path_type - computed: false, optional: true, required: false
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

export class LogicalRouterVrfOspfExportRulesList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfExportRules[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfExportRulesOutputReference {
    return new LogicalRouterVrfOspfExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfFloodPreventionHello {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Max packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#max_packet LogicalRouter#max_packet}
  */
  readonly maxPacket?: number;
}

export function logicalRouterVrfOspfFloodPreventionHelloToTerraform(struct?: LogicalRouterVrfOspfFloodPreventionHello | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_packet: cdktf.numberToTerraform(struct!.maxPacket),
  }
}


export function logicalRouterVrfOspfFloodPreventionHelloToHclTerraform(struct?: LogicalRouterVrfOspfFloodPreventionHello | cdktf.IResolvable): any {
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
    max_packet: {
      value: cdktf.numberToHclTerraform(struct!.maxPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfFloodPreventionHelloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfFloodPreventionHello | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacket = this._maxPacket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfFloodPreventionHello | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._maxPacket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._maxPacket = value.maxPacket;
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

  // max_packet - computed: false, optional: true, required: false
  private _maxPacket?: number; 
  public get maxPacket() {
    return this.getNumberAttribute('max_packet');
  }
  public set maxPacket(value: number) {
    this._maxPacket = value;
  }
  public resetMaxPacket() {
    this._maxPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketInput() {
    return this._maxPacket;
  }
}
export interface LogicalRouterVrfOspfFloodPreventionLsa {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Max packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#max_packet LogicalRouter#max_packet}
  */
  readonly maxPacket?: number;
}

export function logicalRouterVrfOspfFloodPreventionLsaToTerraform(struct?: LogicalRouterVrfOspfFloodPreventionLsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_packet: cdktf.numberToTerraform(struct!.maxPacket),
  }
}


export function logicalRouterVrfOspfFloodPreventionLsaToHclTerraform(struct?: LogicalRouterVrfOspfFloodPreventionLsa | cdktf.IResolvable): any {
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
    max_packet: {
      value: cdktf.numberToHclTerraform(struct!.maxPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfFloodPreventionLsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfFloodPreventionLsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacket = this._maxPacket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfFloodPreventionLsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._maxPacket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._maxPacket = value.maxPacket;
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

  // max_packet - computed: false, optional: true, required: false
  private _maxPacket?: number; 
  public get maxPacket() {
    return this.getNumberAttribute('max_packet');
  }
  public set maxPacket(value: number) {
    this._maxPacket = value;
  }
  public resetMaxPacket() {
    this._maxPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketInput() {
    return this._maxPacket;
  }
}
export interface LogicalRouterVrfOspfFloodPrevention {
  /**
  * Hello
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#hello LogicalRouter#hello}
  */
  readonly hello?: LogicalRouterVrfOspfFloodPreventionHello;
  /**
  * Lsa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#lsa LogicalRouter#lsa}
  */
  readonly lsa?: LogicalRouterVrfOspfFloodPreventionLsa;
}

export function logicalRouterVrfOspfFloodPreventionToTerraform(struct?: LogicalRouterVrfOspfFloodPrevention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello: logicalRouterVrfOspfFloodPreventionHelloToTerraform(struct!.hello),
    lsa: logicalRouterVrfOspfFloodPreventionLsaToTerraform(struct!.lsa),
  }
}


export function logicalRouterVrfOspfFloodPreventionToHclTerraform(struct?: LogicalRouterVrfOspfFloodPrevention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello: {
      value: logicalRouterVrfOspfFloodPreventionHelloToHclTerraform(struct!.hello),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfFloodPreventionHello",
    },
    lsa: {
      value: logicalRouterVrfOspfFloodPreventionLsaToHclTerraform(struct!.lsa),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfFloodPreventionLsa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfFloodPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfFloodPrevention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hello?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hello = this._hello?.internalValue;
    }
    if (this._lsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsa = this._lsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfFloodPrevention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hello.internalValue = undefined;
      this._lsa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hello.internalValue = value.hello;
      this._lsa.internalValue = value.lsa;
    }
  }

  // hello - computed: false, optional: true, required: false
  private _hello = new LogicalRouterVrfOspfFloodPreventionHelloOutputReference(this, "hello");
  public get hello() {
    return this._hello;
  }
  public putHello(value: LogicalRouterVrfOspfFloodPreventionHello) {
    this._hello.internalValue = value;
  }
  public resetHello() {
    this._hello.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloInput() {
    return this._hello.internalValue;
  }

  // lsa - computed: false, optional: true, required: false
  private _lsa = new LogicalRouterVrfOspfFloodPreventionLsaOutputReference(this, "lsa");
  public get lsa() {
    return this._lsa;
  }
  public putLsa(value: LogicalRouterVrfOspfFloodPreventionLsa) {
    this._lsa.internalValue = value;
  }
  public resetLsa() {
    this._lsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaInput() {
    return this._lsa.internalValue;
  }
}
export interface LogicalRouterVrfOspfGlobalBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfGlobalBfdToTerraform(struct?: LogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfGlobalBfdToHclTerraform(struct?: LogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfGracefulRestart {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Grace period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#grace_period LogicalRouter#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Helper enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#helper_enable LogicalRouter#helper_enable}
  */
  readonly helperEnable?: boolean | cdktf.IResolvable;
  /**
  * Max neighbor restart time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#max_neighbor_restart_time LogicalRouter#max_neighbor_restart_time}
  */
  readonly maxNeighborRestartTime?: number;
  /**
  * Strict l s a checking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#strict_lsa_checking LogicalRouter#strict_lsa_checking}
  */
  readonly strictLsaChecking?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfGracefulRestartToTerraform(struct?: LogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    helper_enable: cdktf.booleanToTerraform(struct!.helperEnable),
    max_neighbor_restart_time: cdktf.numberToTerraform(struct!.maxNeighborRestartTime),
    strict_lsa_checking: cdktf.booleanToTerraform(struct!.strictLsaChecking),
  }
}


export function logicalRouterVrfOspfGracefulRestartToHclTerraform(struct?: LogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable): any {
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
    strict_lsa_checking: {
      value: cdktf.booleanToHclTerraform(struct!.strictLsaChecking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable | undefined {
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
    if (this._strictLsaChecking !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLsaChecking = this._strictLsaChecking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._gracePeriod = undefined;
      this._helperEnable = undefined;
      this._maxNeighborRestartTime = undefined;
      this._strictLsaChecking = undefined;
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
      this._strictLsaChecking = value.strictLsaChecking;
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

  // grace_period - computed: false, optional: true, required: false
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

  // max_neighbor_restart_time - computed: false, optional: true, required: false
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

  // strict_lsa_checking - computed: false, optional: true, required: false
  private _strictLsaChecking?: boolean | cdktf.IResolvable; 
  public get strictLsaChecking() {
    return this.getBooleanAttribute('strict_lsa_checking');
  }
  public set strictLsaChecking(value: boolean | cdktf.IResolvable) {
    this._strictLsaChecking = value;
  }
  public resetStrictLsaChecking() {
    this._strictLsaChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLsaCheckingInput() {
    return this._strictLsaChecking;
  }
}
export interface LogicalRouterVrfOspfVrTimers {
  /**
  * Lsa interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#lsa_interval LogicalRouter#lsa_interval}
  */
  readonly lsaInterval?: number;
  /**
  * Spf calculation delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#spf_calculation_delay LogicalRouter#spf_calculation_delay}
  */
  readonly spfCalculationDelay?: number;
}

export function logicalRouterVrfOspfVrTimersToTerraform(struct?: LogicalRouterVrfOspfVrTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lsa_interval: cdktf.numberToTerraform(struct!.lsaInterval),
    spf_calculation_delay: cdktf.numberToTerraform(struct!.spfCalculationDelay),
  }
}


export function logicalRouterVrfOspfVrTimersToHclTerraform(struct?: LogicalRouterVrfOspfVrTimers | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfVrTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfVrTimers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfVrTimers | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspf {
  /**
  * Allow redist default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#allow_redist_default_route LogicalRouter#allow_redist_default_route}
  */
  readonly allowRedistDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#area LogicalRouter#area}
  */
  readonly area?: LogicalRouterVrfOspfArea[] | cdktf.IResolvable;
  /**
  * Auth profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#auth_profile LogicalRouter#auth_profile}
  */
  readonly authProfile?: LogicalRouterVrfOspfAuthProfile[] | cdktf.IResolvable;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Export rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#export_rules LogicalRouter#export_rules}
  */
  readonly exportRules?: LogicalRouterVrfOspfExportRules[] | cdktf.IResolvable;
  /**
  * Flood prevention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#flood_prevention LogicalRouter#flood_prevention}
  */
  readonly floodPrevention?: LogicalRouterVrfOspfFloodPrevention;
  /**
  * Global bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_bfd LogicalRouter#global_bfd}
  */
  readonly globalBfd?: LogicalRouterVrfOspfGlobalBfd;
  /**
  * Global if timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_if_timer LogicalRouter#global_if_timer}
  */
  readonly globalIfTimer?: string;
  /**
  * Graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#graceful_restart LogicalRouter#graceful_restart}
  */
  readonly gracefulRestart?: LogicalRouterVrfOspfGracefulRestart;
  /**
  * Redistribution profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#redistribution_profile LogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
  /**
  * Reject default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#reject_default_route LogicalRouter#reject_default_route}
  */
  readonly rejectDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Rfc1583
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#rfc1583 LogicalRouter#rfc1583}
  */
  readonly rfc1583?: boolean | cdktf.IResolvable;
  /**
  * Router id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#router_id LogicalRouter#router_id}
  */
  readonly routerId?: string;
  /**
  * Spf timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#spf_timer LogicalRouter#spf_timer}
  */
  readonly spfTimer?: string;
  /**
  * Vr timers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_timers LogicalRouter#vr_timers}
  */
  readonly vrTimers?: LogicalRouterVrfOspfVrTimers;
}

export function logicalRouterVrfOspfToTerraform(struct?: LogicalRouterVrfOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_redist_default_route: cdktf.booleanToTerraform(struct!.allowRedistDefaultRoute),
    area: cdktf.listMapper(logicalRouterVrfOspfAreaToTerraform, false)(struct!.area),
    auth_profile: cdktf.listMapper(logicalRouterVrfOspfAuthProfileToTerraform, false)(struct!.authProfile),
    enable: cdktf.booleanToTerraform(struct!.enable),
    export_rules: cdktf.listMapper(logicalRouterVrfOspfExportRulesToTerraform, false)(struct!.exportRules),
    flood_prevention: logicalRouterVrfOspfFloodPreventionToTerraform(struct!.floodPrevention),
    global_bfd: logicalRouterVrfOspfGlobalBfdToTerraform(struct!.globalBfd),
    global_if_timer: cdktf.stringToTerraform(struct!.globalIfTimer),
    graceful_restart: logicalRouterVrfOspfGracefulRestartToTerraform(struct!.gracefulRestart),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
    reject_default_route: cdktf.booleanToTerraform(struct!.rejectDefaultRoute),
    rfc1583: cdktf.booleanToTerraform(struct!.rfc1583),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    spf_timer: cdktf.stringToTerraform(struct!.spfTimer),
    vr_timers: logicalRouterVrfOspfVrTimersToTerraform(struct!.vrTimers),
  }
}


export function logicalRouterVrfOspfToHclTerraform(struct?: LogicalRouterVrfOspf | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaToHclTerraform, false)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaList",
    },
    auth_profile: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAuthProfileToHclTerraform, false)(struct!.authProfile),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAuthProfileList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_rules: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfExportRulesToHclTerraform, false)(struct!.exportRules),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfExportRulesList",
    },
    flood_prevention: {
      value: logicalRouterVrfOspfFloodPreventionToHclTerraform(struct!.floodPrevention),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfFloodPrevention",
    },
    global_bfd: {
      value: logicalRouterVrfOspfGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfGlobalBfd",
    },
    global_if_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalIfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_restart: {
      value: logicalRouterVrfOspfGracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfGracefulRestart",
    },
    redistribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.redistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.rejectDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rfc1583: {
      value: cdktf.booleanToHclTerraform(struct!.rfc1583),
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
    spf_timer: {
      value: cdktf.stringToHclTerraform(struct!.spfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vr_timers: {
      value: logicalRouterVrfOspfVrTimersToHclTerraform(struct!.vrTimers),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfVrTimers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspf | cdktf.IResolvable | undefined {
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
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._exportRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRules = this._exportRules?.internalValue;
    }
    if (this._floodPrevention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodPrevention = this._floodPrevention?.internalValue;
    }
    if (this._globalBfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalBfd = this._globalBfd?.internalValue;
    }
    if (this._globalIfTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalIfTimer = this._globalIfTimer;
    }
    if (this._gracefulRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart?.internalValue;
    }
    if (this._redistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionProfile = this._redistributionProfile;
    }
    if (this._rejectDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectDefaultRoute = this._rejectDefaultRoute;
    }
    if (this._rfc1583 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc1583 = this._rfc1583;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._spfTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.spfTimer = this._spfTimer;
    }
    if (this._vrTimers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrTimers = this._vrTimers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRedistDefaultRoute = undefined;
      this._area.internalValue = undefined;
      this._authProfile.internalValue = undefined;
      this._enable = undefined;
      this._exportRules.internalValue = undefined;
      this._floodPrevention.internalValue = undefined;
      this._globalBfd.internalValue = undefined;
      this._globalIfTimer = undefined;
      this._gracefulRestart.internalValue = undefined;
      this._redistributionProfile = undefined;
      this._rejectDefaultRoute = undefined;
      this._rfc1583 = undefined;
      this._routerId = undefined;
      this._spfTimer = undefined;
      this._vrTimers.internalValue = undefined;
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
      this._enable = value.enable;
      this._exportRules.internalValue = value.exportRules;
      this._floodPrevention.internalValue = value.floodPrevention;
      this._globalBfd.internalValue = value.globalBfd;
      this._globalIfTimer = value.globalIfTimer;
      this._gracefulRestart.internalValue = value.gracefulRestart;
      this._redistributionProfile = value.redistributionProfile;
      this._rejectDefaultRoute = value.rejectDefaultRoute;
      this._rfc1583 = value.rfc1583;
      this._routerId = value.routerId;
      this._spfTimer = value.spfTimer;
      this._vrTimers.internalValue = value.vrTimers;
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
  private _area = new LogicalRouterVrfOspfAreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: LogicalRouterVrfOspfArea[] | cdktf.IResolvable) {
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
  private _authProfile = new LogicalRouterVrfOspfAuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }
  public putAuthProfile(value: LogicalRouterVrfOspfAuthProfile[] | cdktf.IResolvable) {
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
  private _exportRules = new LogicalRouterVrfOspfExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }
  public putExportRules(value: LogicalRouterVrfOspfExportRules[] | cdktf.IResolvable) {
    this._exportRules.internalValue = value;
  }
  public resetExportRules() {
    this._exportRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRulesInput() {
    return this._exportRules.internalValue;
  }

  // flood_prevention - computed: false, optional: true, required: false
  private _floodPrevention = new LogicalRouterVrfOspfFloodPreventionOutputReference(this, "flood_prevention");
  public get floodPrevention() {
    return this._floodPrevention;
  }
  public putFloodPrevention(value: LogicalRouterVrfOspfFloodPrevention) {
    this._floodPrevention.internalValue = value;
  }
  public resetFloodPrevention() {
    this._floodPrevention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodPreventionInput() {
    return this._floodPrevention.internalValue;
  }

  // global_bfd - computed: false, optional: true, required: false
  private _globalBfd = new LogicalRouterVrfOspfGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: LogicalRouterVrfOspfGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_if_timer - computed: false, optional: true, required: false
  private _globalIfTimer?: string; 
  public get globalIfTimer() {
    return this.getStringAttribute('global_if_timer');
  }
  public set globalIfTimer(value: string) {
    this._globalIfTimer = value;
  }
  public resetGlobalIfTimer() {
    this._globalIfTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalIfTimerInput() {
    return this._globalIfTimer;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new LogicalRouterVrfOspfGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: LogicalRouterVrfOspfGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // redistribution_profile - computed: false, optional: true, required: false
  private _redistributionProfile?: string; 
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }
  public set redistributionProfile(value: string) {
    this._redistributionProfile = value;
  }
  public resetRedistributionProfile() {
    this._redistributionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionProfileInput() {
    return this._redistributionProfile;
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

  // rfc1583 - computed: false, optional: true, required: false
  private _rfc1583?: boolean | cdktf.IResolvable; 
  public get rfc1583() {
    return this.getBooleanAttribute('rfc1583');
  }
  public set rfc1583(value: boolean | cdktf.IResolvable) {
    this._rfc1583 = value;
  }
  public resetRfc1583() {
    this._rfc1583 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc1583Input() {
    return this._rfc1583;
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

  // spf_timer - computed: false, optional: true, required: false
  private _spfTimer?: string; 
  public get spfTimer() {
    return this.getStringAttribute('spf_timer');
  }
  public set spfTimer(value: string) {
    this._spfTimer = value;
  }
  public resetSpfTimer() {
    this._spfTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfTimerInput() {
    return this._spfTimer;
  }

  // vr_timers - computed: false, optional: true, required: false
  private _vrTimers = new LogicalRouterVrfOspfVrTimersOutputReference(this, "vr_timers");
  public get vrTimers() {
    return this._vrTimers;
  }
  public putVrTimers(value: LogicalRouterVrfOspfVrTimers) {
    this._vrTimers.internalValue = value;
  }
  public resetVrTimers() {
    this._vrTimers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrTimersInput() {
    return this._vrTimers.internalValue;
  }
}
export interface LogicalRouterVrfOspfv3AreaInterfaceBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfv3AreaInterfaceBfdToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceBfdToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast {
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._priority = value.priority;
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

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp {
  /**
  * Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#neighbor LogicalRouter#neighbor}
  */
  readonly neighbor?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neighbor: cdktf.listMapper(logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToTerraform, false)(struct!.neighbor),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neighbor: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neighbor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neighbor.internalValue = value.neighbor;
    }
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }
}
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P {
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkType {
  /**
  * Broadcast
  * 
  * > ℹ️ **Note:** You must specify exactly one of `broadcast`, `p2mp`, and `p2p`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#broadcast LogicalRouter#broadcast}
  */
  readonly broadcast?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast;
  /**
  * P2mp
  * 
  * > ℹ️ **Note:** You must specify exactly one of `broadcast`, `p2mp`, and `p2p`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#p2mp LogicalRouter#p2mp}
  */
  readonly p2Mp?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp;
  /**
  * P2p
  * 
  * > ℹ️ **Note:** You must specify exactly one of `broadcast`, `p2mp`, and `p2p`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#p2p LogicalRouter#p2p}
  */
  readonly p2P?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P;
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: logicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct!.broadcast),
    p2mp: logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct!.p2Mp),
    p2p: logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct!.p2P),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: logicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct!.broadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast",
    },
    p2mp: {
      value: logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct!.p2Mp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp",
    },
    p2p: {
      value: logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct!.p2P),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined) {
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
  private _broadcast = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }
  public putBroadcast(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast) {
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
  private _p2Mp = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }
  public putP2Mp(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp) {
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
  private _p2P = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
  public putP2P(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P) {
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
export interface LogicalRouterVrfOspfv3AreaInterfaceNeighbor {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
}

export function logicalRouterVrfOspfv3AreaInterfaceNeighborToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceNeighborToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceNeighbor | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AreaInterfaceNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceNeighbor | cdktf.IResolvable | undefined) {
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

export class LogicalRouterVrfOspfv3AreaInterfaceNeighborList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaInterfaceNeighborOutputReference {
    return new LogicalRouterVrfOspfv3AreaInterfaceNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaInterfaceVrTiming {
  /**
  * Dead counts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#dead_counts LogicalRouter#dead_counts}
  */
  readonly deadCounts?: number;
  /**
  * Gr delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#gr_delay LogicalRouter#gr_delay}
  */
  readonly grDelay?: number;
  /**
  * Hello interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#hello_interval LogicalRouter#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Retransmit interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#retransmit_interval LogicalRouter#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Transit delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#transit_delay LogicalRouter#transit_delay}
  */
  readonly transitDelay?: number;
}

export function logicalRouterVrfOspfv3AreaInterfaceVrTimingToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceVrTiming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_counts: cdktf.numberToTerraform(struct!.deadCounts),
    gr_delay: cdktf.numberToTerraform(struct!.grDelay),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceVrTimingToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceVrTiming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_counts: {
      value: cdktf.numberToHclTerraform(struct!.deadCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class LogicalRouterVrfOspfv3AreaInterfaceVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceVrTiming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadCounts = this._deadCounts;
    }
    if (this._grDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.grDelay = this._grDelay;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceVrTiming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadCounts = undefined;
      this._grDelay = undefined;
      this._helloInterval = undefined;
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
      this._deadCounts = value.deadCounts;
      this._grDelay = value.grDelay;
      this._helloInterval = value.helloInterval;
      this._retransmitInterval = value.retransmitInterval;
      this._transitDelay = value.transitDelay;
    }
  }

  // dead_counts - computed: false, optional: true, required: false
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

  // gr_delay - computed: false, optional: true, required: false
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

  // hello_interval - computed: false, optional: true, required: false
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

  // retransmit_interval - computed: false, optional: true, required: false
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

  // transit_delay - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfv3AreaInterface {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfOspfv3AreaInterfaceBfd;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Instance id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#instance_id LogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Link type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#link_type LogicalRouter#link_type}
  */
  readonly linkType?: LogicalRouterVrfOspfv3AreaInterfaceLinkType;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Mtu ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#mtu_ignore LogicalRouter#mtu_ignore}
  */
  readonly mtuIgnore?: boolean | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#neighbor LogicalRouter#neighbor}
  */
  readonly neighbor?: LogicalRouterVrfOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable;
  /**
  * Passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#passive LogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
  /**
  * Timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#timing LogicalRouter#timing}
  */
  readonly timing?: string;
  /**
  * Vr timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_timing LogicalRouter#vr_timing}
  */
  readonly vrTiming?: LogicalRouterVrfOspfv3AreaInterfaceVrTiming;
}

export function logicalRouterVrfOspfv3AreaInterfaceToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfOspfv3AreaInterfaceBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    link_type: logicalRouterVrfOspfv3AreaInterfaceLinkTypeToTerraform(struct!.linkType),
    metric: cdktf.numberToTerraform(struct!.metric),
    mtu_ignore: cdktf.booleanToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor: cdktf.listMapper(logicalRouterVrfOspfv3AreaInterfaceNeighborToTerraform, false)(struct!.neighbor),
    passive: cdktf.booleanToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    timing: cdktf.stringToTerraform(struct!.timing),
    vr_timing: logicalRouterVrfOspfv3AreaInterfaceVrTimingToTerraform(struct!.vrTiming),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable): any {
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
      value: logicalRouterVrfOspfv3AreaInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_type: {
      value: logicalRouterVrfOspfv3AreaInterfaceLinkTypeToHclTerraform(struct!.linkType),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkType",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.booleanToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaInterfaceNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceNeighborList",
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
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vr_timing: {
      value: logicalRouterVrfOspfv3AreaInterfaceVrTimingToHclTerraform(struct!.vrTiming),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceVrTiming",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable | undefined {
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
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
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
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
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
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    if (this._vrTiming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrTiming = this._vrTiming?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._instanceId = undefined;
      this._linkType.internalValue = undefined;
      this._metric = undefined;
      this._mtuIgnore = undefined;
      this._name = undefined;
      this._neighbor.internalValue = undefined;
      this._passive = undefined;
      this._priority = undefined;
      this._timing = undefined;
      this._vrTiming.internalValue = undefined;
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
      this._enable = value.enable;
      this._instanceId = value.instanceId;
      this._linkType.internalValue = value.linkType;
      this._metric = value.metric;
      this._mtuIgnore = value.mtuIgnore;
      this._name = value.name;
      this._neighbor.internalValue = value.neighbor;
      this._passive = value.passive;
      this._priority = value.priority;
      this._timing = value.timing;
      this._vrTiming.internalValue = value.vrTiming;
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
  private _bfd = new LogicalRouterVrfOspfv3AreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfOspfv3AreaInterfaceBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
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

  // instance_id - computed: false, optional: true, required: false
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
  private _linkType = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }
  public putLinkType(value: LogicalRouterVrfOspfv3AreaInterfaceLinkType) {
    this._linkType.internalValue = value;
  }
  public resetLinkType() {
    this._linkType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType.internalValue;
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

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: boolean | cdktf.IResolvable; 
  public get mtuIgnore() {
    return this.getBooleanAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: boolean | cdktf.IResolvable) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
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
  private _neighbor = new LogicalRouterVrfOspfv3AreaInterfaceNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: LogicalRouterVrfOspfv3AreaInterfaceNeighbor[] | cdktf.IResolvable) {
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

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
  }

  // vr_timing - computed: false, optional: true, required: false
  private _vrTiming = new LogicalRouterVrfOspfv3AreaInterfaceVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
  public putVrTiming(value: LogicalRouterVrfOspfv3AreaInterfaceVrTiming) {
    this._vrTiming.internalValue = value;
  }
  public resetVrTiming() {
    this._vrTiming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrTimingInput() {
    return this._vrTiming.internalValue;
  }
}

export class LogicalRouterVrfOspfv3AreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaInterfaceOutputReference {
    return new LogicalRouterVrfOspfv3AreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaRange {
  /**
  * Advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
}

export function logicalRouterVrfOspfv3AreaRangeToTerraform(struct?: LogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logicalRouterVrfOspfv3AreaRangeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class LogicalRouterVrfOspfv3AreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._name = value.name;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

export class LogicalRouterVrfOspfv3AreaRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaRangeOutputReference {
    return new LogicalRouterVrfOspfv3AreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNormalAbr {
  /**
  * Export list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Import list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfv3AreaTypeNormalAbrToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNormalAbrToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNormal {
  /**
  * Abr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfv3AreaTypeNormalAbr;
}

export function logicalRouterVrfOspfv3AreaTypeNormalToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfv3AreaTypeNormalAbrToTerraform(struct!.abr),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNormalToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfv3AreaTypeNormalAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNormalAbr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfv3AreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfv3AreaTypeNormalAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise {
}

export function logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress {
}

export function logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange {
  /**
  * Advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Route tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_tag LogicalRouter#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Suppress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#suppress LogicalRouter#suppress}
  */
  readonly suppress?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress;
}

export function logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    route_tag: cdktf.numberToTerraform(struct!.routeTag),
    suppress: logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressToTerraform(struct!.suppress),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_tag: {
      value: cdktf.numberToHclTerraform(struct!.routeTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suppress: {
      value: logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined {
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
    if (this._routeTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTag = this._routeTag;
    }
    if (this._suppress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._name = undefined;
      this._routeTag = undefined;
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
      this._routeTag = value.routeTag;
      this._suppress.internalValue = value.suppress;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise) {
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

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
  }

  // suppress - computed: false, optional: true, required: false
  private _suppress = new LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress) {
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

export class LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference {
    return new LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssaAbr {
  /**
  * Export list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Import list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Nssa ext range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#nssa_ext_range LogicalRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfv3AreaTypeNssaAbrToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    nssa_ext_range: cdktf.listMapper(logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaAbrToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa_ext_range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._nssaExtRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaExtRange = this._nssaExtRange?.internalValue;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._nssaExtRange.internalValue = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._nssaExtRange.internalValue = value.nssaExtRange;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // nssa_ext_range - computed: false, optional: true, required: false
  private _nssaExtRange = new LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable) {
    this._nssaExtRange.internalValue = value;
  }
  public resetNssaExtRange() {
    this._nssaExtRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaExtRangeInput() {
    return this._nssaExtRange.internalValue;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Metric type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric_type LogicalRouter#metric_type}
  */
  readonly metricType?: string;
}

export function logicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
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
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricType = value.metricType;
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

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#type LogicalRouter#type}
  */
  readonly type?: string;
}

export function logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable {
}

export function logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute {
  /**
  * Advertise
  * 
  * > ℹ️ **Note:** You must specify exactly one of `advertise` and `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise;
  /**
  * Disable
  * 
  * > ℹ️ **Note:** You must specify exactly one of `advertise` and `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#disable LogicalRouter#disable}
  */
  readonly disable?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable;
}

export function logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise",
    },
    disable: {
      value: logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute | cdktf.IResolvable | undefined) {
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
  private _advertise = new LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise) {
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
  private _disable = new LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable) {
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
export interface LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise {
}

export function logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress {
}

export function logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange {
  /**
  * Advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Route tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_tag LogicalRouter#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Suppress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#suppress LogicalRouter#suppress}
  */
  readonly suppress?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress;
}

export function logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    route_tag: cdktf.numberToTerraform(struct!.routeTag),
    suppress: logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressToTerraform(struct!.suppress),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_tag: {
      value: cdktf.numberToHclTerraform(struct!.routeTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suppress: {
      value: logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable | undefined {
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
    if (this._routeTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTag = this._routeTag;
    }
    if (this._suppress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._name = undefined;
      this._routeTag = undefined;
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
      this._routeTag = value.routeTag;
      this._suppress.internalValue = value.suppress;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise) {
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

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
  }

  // suppress - computed: false, optional: true, required: false
  private _suppress = new LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress) {
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

export class LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference {
    return new LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssa {
  /**
  * Abr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfv3AreaTypeNssaAbr;
  /**
  * Accept summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#accept_summary LogicalRouter#accept_summary}
  */
  readonly acceptSummary?: boolean | cdktf.IResolvable;
  /**
  * Default information originate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_information_originate LogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate;
  /**
  * Default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_route LogicalRouter#default_route}
  */
  readonly defaultRoute?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute;
  /**
  * No summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#no_summary LogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
  /**
  * Nssa ext range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#nssa_ext_range LogicalRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3AreaTypeNssaToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfv3AreaTypeNssaAbrToTerraform(struct!.abr),
    accept_summary: cdktf.booleanToTerraform(struct!.acceptSummary),
    default_information_originate: logicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToTerraform(struct!.defaultInformationOriginate),
    default_route: logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteToTerraform(struct!.defaultRoute),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
    nssa_ext_range: cdktf.listMapper(logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfv3AreaTypeNssaAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaAbr",
    },
    accept_summary: {
      value: cdktf.booleanToHclTerraform(struct!.acceptSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_information_originate: {
      value: logicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate",
    },
    default_route: {
      value: logicalRouterVrfOspfv3AreaTypeNssaDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nssa_ext_range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    if (this._acceptSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSummary = this._acceptSummary;
    }
    if (this._defaultInformationOriginate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate?.internalValue;
    }
    if (this._defaultRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute?.internalValue;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    if (this._nssaExtRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaExtRange = this._nssaExtRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
      this._acceptSummary = undefined;
      this._defaultInformationOriginate.internalValue = undefined;
      this._defaultRoute.internalValue = undefined;
      this._noSummary = undefined;
      this._nssaExtRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
      this._acceptSummary = value.acceptSummary;
      this._defaultInformationOriginate.internalValue = value.defaultInformationOriginate;
      this._defaultRoute.internalValue = value.defaultRoute;
      this._noSummary = value.noSummary;
      this._nssaExtRange.internalValue = value.nssaExtRange;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfv3AreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfv3AreaTypeNssaAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
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

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate = new LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }
  public putDefaultInformationOriginate(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate) {
    this._defaultInformationOriginate.internalValue = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate.internalValue;
  }

  // default_route - computed: false, optional: true, required: false
  private _defaultRoute = new LogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }

  // nssa_ext_range - computed: false, optional: true, required: false
  private _nssaExtRange = new LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: LogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange[] | cdktf.IResolvable) {
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
export interface LogicalRouterVrfOspfv3AreaTypeStubAbr {
  /**
  * Export list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Import list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfv3AreaTypeStubAbrToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfv3AreaTypeStubAbrToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
}

export function logicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function logicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise | cdktf.IResolvable | undefined) {
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
}
export interface LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable {
}

export function logicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaTypeStubDefaultRoute {
  /**
  * Advertise
  * 
  * > ℹ️ **Note:** You must specify exactly one of `advertise` and `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise;
  /**
  * Disable
  * 
  * > ℹ️ **Note:** You must specify exactly one of `advertise` and `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#disable LogicalRouter#disable}
  */
  readonly disable?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable;
}

export function logicalRouterVrfOspfv3AreaTypeStubDefaultRouteToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseToTerraform(struct!.advertise),
    disable: logicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableToTerraform(struct!.disable),
  }
}


export function logicalRouterVrfOspfv3AreaTypeStubDefaultRouteToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise",
    },
    disable: {
      value: logicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeStubDefaultRoute | cdktf.IResolvable | undefined) {
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
  private _advertise = new LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise) {
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
  private _disable = new LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable) {
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
export interface LogicalRouterVrfOspfv3AreaTypeStub {
  /**
  * Abr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfv3AreaTypeStubAbr;
  /**
  * Accept summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#accept_summary LogicalRouter#accept_summary}
  */
  readonly acceptSummary?: boolean | cdktf.IResolvable;
  /**
  * Default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_route LogicalRouter#default_route}
  */
  readonly defaultRoute?: LogicalRouterVrfOspfv3AreaTypeStubDefaultRoute;
  /**
  * Default route metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_route_metric LogicalRouter#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * No summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#no_summary LogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3AreaTypeStubToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfv3AreaTypeStubAbrToTerraform(struct!.abr),
    accept_summary: cdktf.booleanToTerraform(struct!.acceptSummary),
    default_route: logicalRouterVrfOspfv3AreaTypeStubDefaultRouteToTerraform(struct!.defaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function logicalRouterVrfOspfv3AreaTypeStubToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfv3AreaTypeStubAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeStubAbr",
    },
    accept_summary: {
      value: cdktf.booleanToHclTerraform(struct!.acceptSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route: {
      value: logicalRouterVrfOspfv3AreaTypeStubDefaultRouteToHclTerraform(struct!.defaultRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeStubDefaultRoute",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    if (this._acceptSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSummary = this._acceptSummary;
    }
    if (this._defaultRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute?.internalValue;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
      this._acceptSummary = undefined;
      this._defaultRoute.internalValue = undefined;
      this._defaultRouteMetric = undefined;
      this._noSummary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
      this._acceptSummary = value.acceptSummary;
      this._defaultRoute.internalValue = value.defaultRoute;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._noSummary = value.noSummary;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfv3AreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfv3AreaTypeStubAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
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
  private _defaultRoute = new LogicalRouterVrfOspfv3AreaTypeStubDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: LogicalRouterVrfOspfv3AreaTypeStubDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // default_route_metric - computed: false, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }
}
export interface LogicalRouterVrfOspfv3AreaType {
  /**
  * Normal
  * 
  * > ℹ️ **Note:** You must specify exactly one of `normal`, `nssa`, and `stub`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#normal LogicalRouter#normal}
  */
  readonly normal?: LogicalRouterVrfOspfv3AreaTypeNormal;
  /**
  * Nssa
  * 
  * > ℹ️ **Note:** You must specify exactly one of `normal`, `nssa`, and `stub`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#nssa LogicalRouter#nssa}
  */
  readonly nssa?: LogicalRouterVrfOspfv3AreaTypeNssa;
  /**
  * Stub
  * 
  * > ℹ️ **Note:** You must specify exactly one of `normal`, `nssa`, and `stub`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#stub LogicalRouter#stub}
  */
  readonly stub?: LogicalRouterVrfOspfv3AreaTypeStub;
}

export function logicalRouterVrfOspfv3AreaTypeToTerraform(struct?: LogicalRouterVrfOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normal: logicalRouterVrfOspfv3AreaTypeNormalToTerraform(struct!.normal),
    nssa: logicalRouterVrfOspfv3AreaTypeNssaToTerraform(struct!.nssa),
    stub: logicalRouterVrfOspfv3AreaTypeStubToTerraform(struct!.stub),
  }
}


export function logicalRouterVrfOspfv3AreaTypeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normal: {
      value: logicalRouterVrfOspfv3AreaTypeNormalToHclTerraform(struct!.normal),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNormal",
    },
    nssa: {
      value: logicalRouterVrfOspfv3AreaTypeNssaToHclTerraform(struct!.nssa),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssa",
    },
    stub: {
      value: logicalRouterVrfOspfv3AreaTypeStubToHclTerraform(struct!.stub),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeStub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaType | cdktf.IResolvable | undefined) {
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
  private _normal = new LogicalRouterVrfOspfv3AreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }
  public putNormal(value: LogicalRouterVrfOspfv3AreaTypeNormal) {
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
  private _nssa = new LogicalRouterVrfOspfv3AreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: LogicalRouterVrfOspfv3AreaTypeNssa) {
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
  private _stub = new LogicalRouterVrfOspfv3AreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: LogicalRouterVrfOspfv3AreaTypeStub) {
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
export interface LogicalRouterVrfOspfv3AreaVirtualLinkBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfv3AreaVirtualLinkBfdToTerraform(struct?: LogicalRouterVrfOspfv3AreaVirtualLinkBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfv3AreaVirtualLinkBfdToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaVirtualLinkBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaVirtualLinkBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaVirtualLinkBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfv3AreaVirtualLinkVrTiming {
  /**
  * Dead counts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#dead_counts LogicalRouter#dead_counts}
  */
  readonly deadCounts?: number;
  /**
  * Hello interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#hello_interval LogicalRouter#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Retransmit interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#retransmit_interval LogicalRouter#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Transit delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#transit_delay LogicalRouter#transit_delay}
  */
  readonly transitDelay?: number;
}

export function logicalRouterVrfOspfv3AreaVirtualLinkVrTimingToTerraform(struct?: LogicalRouterVrfOspfv3AreaVirtualLinkVrTiming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_counts: cdktf.numberToTerraform(struct!.deadCounts),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
  }
}


export function logicalRouterVrfOspfv3AreaVirtualLinkVrTimingToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaVirtualLinkVrTiming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_counts: {
      value: cdktf.numberToHclTerraform(struct!.deadCounts),
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

export class LogicalRouterVrfOspfv3AreaVirtualLinkVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaVirtualLinkVrTiming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadCounts = this._deadCounts;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaVirtualLinkVrTiming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadCounts = undefined;
      this._helloInterval = undefined;
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
      this._deadCounts = value.deadCounts;
      this._helloInterval = value.helloInterval;
      this._retransmitInterval = value.retransmitInterval;
      this._transitDelay = value.transitDelay;
    }
  }

  // dead_counts - computed: false, optional: true, required: false
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

  // hello_interval - computed: false, optional: true, required: false
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

  // retransmit_interval - computed: false, optional: true, required: false
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

  // transit_delay - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfv3AreaVirtualLink {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfOspfv3AreaVirtualLinkBfd;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Instance id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#instance_id LogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Interface id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface_id LogicalRouter#interface_id}
  */
  readonly interfaceId?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Neighbor id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#neighbor_id LogicalRouter#neighbor_id}
  */
  readonly neighborId?: string;
  /**
  * Passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#passive LogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#timing LogicalRouter#timing}
  */
  readonly timing?: string;
  /**
  * Transit area id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#transit_area_id LogicalRouter#transit_area_id}
  */
  readonly transitAreaId?: string;
  /**
  * Vr timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_timing LogicalRouter#vr_timing}
  */
  readonly vrTiming?: LogicalRouterVrfOspfv3AreaVirtualLinkVrTiming;
}

export function logicalRouterVrfOspfv3AreaVirtualLinkToTerraform(struct?: LogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfOspfv3AreaVirtualLinkBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    interface_id: cdktf.numberToTerraform(struct!.interfaceId),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor_id: cdktf.stringToTerraform(struct!.neighborId),
    passive: cdktf.booleanToTerraform(struct!.passive),
    timing: cdktf.stringToTerraform(struct!.timing),
    transit_area_id: cdktf.stringToTerraform(struct!.transitAreaId),
    vr_timing: logicalRouterVrfOspfv3AreaVirtualLinkVrTimingToTerraform(struct!.vrTiming),
  }
}


export function logicalRouterVrfOspfv3AreaVirtualLinkToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable): any {
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
      value: logicalRouterVrfOspfv3AreaVirtualLinkBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaVirtualLinkBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_id: {
      value: cdktf.numberToHclTerraform(struct!.interfaceId),
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
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_area_id: {
      value: cdktf.stringToHclTerraform(struct!.transitAreaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vr_timing: {
      value: logicalRouterVrfOspfv3AreaVirtualLinkVrTimingToHclTerraform(struct!.vrTiming),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaVirtualLinkVrTiming",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable | undefined {
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
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighborId !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborId = this._neighborId;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    if (this._transitAreaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitAreaId = this._transitAreaId;
    }
    if (this._vrTiming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrTiming = this._vrTiming?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._instanceId = undefined;
      this._interfaceId = undefined;
      this._name = undefined;
      this._neighborId = undefined;
      this._passive = undefined;
      this._timing = undefined;
      this._transitAreaId = undefined;
      this._vrTiming.internalValue = undefined;
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
      this._enable = value.enable;
      this._instanceId = value.instanceId;
      this._interfaceId = value.interfaceId;
      this._name = value.name;
      this._neighborId = value.neighborId;
      this._passive = value.passive;
      this._timing = value.timing;
      this._transitAreaId = value.transitAreaId;
      this._vrTiming.internalValue = value.vrTiming;
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
  private _bfd = new LogicalRouterVrfOspfv3AreaVirtualLinkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfOspfv3AreaVirtualLinkBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
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

  // instance_id - computed: false, optional: true, required: false
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

  // interface_id - computed: false, optional: true, required: false
  private _interfaceId?: number; 
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }
  public set interfaceId(value: number) {
    this._interfaceId = value;
  }
  public resetInterfaceId() {
    this._interfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
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

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
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

  // vr_timing - computed: false, optional: true, required: false
  private _vrTiming = new LogicalRouterVrfOspfv3AreaVirtualLinkVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
  public putVrTiming(value: LogicalRouterVrfOspfv3AreaVirtualLinkVrTiming) {
    this._vrTiming.internalValue = value;
  }
  public resetVrTiming() {
    this._vrTiming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrTimingInput() {
    return this._vrTiming.internalValue;
  }
}

export class LogicalRouterVrfOspfv3AreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaVirtualLinkOutputReference {
    return new LogicalRouterVrfOspfv3AreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaVrRangeAdvertise {
}

export function logicalRouterVrfOspfv3AreaVrRangeAdvertiseToTerraform(struct?: LogicalRouterVrfOspfv3AreaVrRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaVrRangeAdvertiseToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaVrRangeAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaVrRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaVrRangeAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaVrRangeAdvertise | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaVrRangeSuppress {
}

export function logicalRouterVrfOspfv3AreaVrRangeSuppressToTerraform(struct?: LogicalRouterVrfOspfv3AreaVrRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaVrRangeSuppressToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaVrRangeSuppress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaVrRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaVrRangeSuppress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaVrRangeSuppress | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaVrRange {
  /**
  * Advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: LogicalRouterVrfOspfv3AreaVrRangeAdvertise;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Suppress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#suppress LogicalRouter#suppress}
  */
  readonly suppress?: LogicalRouterVrfOspfv3AreaVrRangeSuppress;
}

export function logicalRouterVrfOspfv3AreaVrRangeToTerraform(struct?: LogicalRouterVrfOspfv3AreaVrRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: logicalRouterVrfOspfv3AreaVrRangeAdvertiseToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
    suppress: logicalRouterVrfOspfv3AreaVrRangeSuppressToTerraform(struct!.suppress),
  }
}


export function logicalRouterVrfOspfv3AreaVrRangeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaVrRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: logicalRouterVrfOspfv3AreaVrRangeAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaVrRangeAdvertise",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: logicalRouterVrfOspfv3AreaVrRangeSuppressToHclTerraform(struct!.suppress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaVrRangeSuppress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaVrRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaVrRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AreaVrRange | cdktf.IResolvable | undefined) {
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
  private _advertise = new LogicalRouterVrfOspfv3AreaVrRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: LogicalRouterVrfOspfv3AreaVrRangeAdvertise) {
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
  private _suppress = new LogicalRouterVrfOspfv3AreaVrRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: LogicalRouterVrfOspfv3AreaVrRangeSuppress) {
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

export class LogicalRouterVrfOspfv3AreaVrRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaVrRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaVrRangeOutputReference {
    return new LogicalRouterVrfOspfv3AreaVrRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3Area {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: LogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#range LogicalRouter#range}
  */
  readonly range?: LogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#type LogicalRouter#type}
  */
  readonly type?: LogicalRouterVrfOspfv3AreaType;
  /**
  * Virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#virtual_link LogicalRouter#virtual_link}
  */
  readonly virtualLink?: LogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable;
  /**
  * Vr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_range LogicalRouter#vr_range}
  */
  readonly vrRange?: LogicalRouterVrfOspfv3AreaVrRange[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3AreaToTerraform(struct?: LogicalRouterVrfOspfv3Area | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    interface: cdktf.listMapper(logicalRouterVrfOspfv3AreaInterfaceToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    range: cdktf.listMapper(logicalRouterVrfOspfv3AreaRangeToTerraform, false)(struct!.range),
    type: logicalRouterVrfOspfv3AreaTypeToTerraform(struct!.type),
    virtual_link: cdktf.listMapper(logicalRouterVrfOspfv3AreaVirtualLinkToTerraform, false)(struct!.virtualLink),
    vr_range: cdktf.listMapper(logicalRouterVrfOspfv3AreaVrRangeToTerraform, false)(struct!.vrRange),
  }
}


export function logicalRouterVrfOspfv3AreaToHclTerraform(struct?: LogicalRouterVrfOspfv3Area | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaRangeToHclTerraform, false)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaRangeList",
    },
    type: {
      value: logicalRouterVrfOspfv3AreaTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaType",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaVirtualLinkToHclTerraform, false)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaVirtualLinkList",
    },
    vr_range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaVrRangeToHclTerraform, false)(struct!.vrRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaVrRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3Area | cdktf.IResolvable | undefined {
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
    if (this._vrRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrRange = this._vrRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3Area | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._interface.internalValue = undefined;
      this._name = undefined;
      this._range.internalValue = undefined;
      this._type.internalValue = undefined;
      this._virtualLink.internalValue = undefined;
      this._vrRange.internalValue = undefined;
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
      this._vrRange.internalValue = value.vrRange;
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
  private _interface = new LogicalRouterVrfOspfv3AreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: LogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable) {
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
  private _range = new LogicalRouterVrfOspfv3AreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: LogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable) {
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
  private _type = new LogicalRouterVrfOspfv3AreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: LogicalRouterVrfOspfv3AreaType) {
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
  private _virtualLink = new LogicalRouterVrfOspfv3AreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: LogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }

  // vr_range - computed: false, optional: true, required: false
  private _vrRange = new LogicalRouterVrfOspfv3AreaVrRangeList(this, "vr_range", false);
  public get vrRange() {
    return this._vrRange;
  }
  public putVrRange(value: LogicalRouterVrfOspfv3AreaVrRange[] | cdktf.IResolvable) {
    this._vrRange.internalValue = value;
  }
  public resetVrRange() {
    this._vrRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrRangeInput() {
    return this._vrRange.internalValue;
  }
}

export class LogicalRouterVrfOspfv3AreaList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3Area[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaOutputReference {
    return new LogicalRouterVrfOspfv3AreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AuthProfileAhMd5 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileAhMd5ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileAhMd5ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhMd5 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileAhMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileAhMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileAhMd5 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileAhSha1 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileAhSha1ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileAhSha1ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhSha1 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileAhSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileAhSha1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileAhSha1 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileAhSha256 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileAhSha256ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileAhSha256ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhSha256 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileAhSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileAhSha256 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileAhSha256 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileAhSha384 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileAhSha384ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileAhSha384ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhSha384 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileAhSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileAhSha384 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileAhSha384 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileAhSha512 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileAhSha512ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileAhSha512ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAhSha512 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileAhSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileAhSha512 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileAhSha512 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileAh {
  /**
  * Md5
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#md5 LogicalRouter#md5}
  */
  readonly md5?: LogicalRouterVrfOspfv3AuthProfileAhMd5;
  /**
  * Sha1
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sha1 LogicalRouter#sha1}
  */
  readonly sha1?: LogicalRouterVrfOspfv3AuthProfileAhSha1;
  /**
  * Sha256
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sha256 LogicalRouter#sha256}
  */
  readonly sha256?: LogicalRouterVrfOspfv3AuthProfileAhSha256;
  /**
  * Sha384
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sha384 LogicalRouter#sha384}
  */
  readonly sha384?: LogicalRouterVrfOspfv3AuthProfileAhSha384;
  /**
  * Sha512
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sha512 LogicalRouter#sha512}
  */
  readonly sha512?: LogicalRouterVrfOspfv3AuthProfileAhSha512;
}

export function logicalRouterVrfOspfv3AuthProfileAhToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: logicalRouterVrfOspfv3AuthProfileAhMd5ToTerraform(struct!.md5),
    sha1: logicalRouterVrfOspfv3AuthProfileAhSha1ToTerraform(struct!.sha1),
    sha256: logicalRouterVrfOspfv3AuthProfileAhSha256ToTerraform(struct!.sha256),
    sha384: logicalRouterVrfOspfv3AuthProfileAhSha384ToTerraform(struct!.sha384),
    sha512: logicalRouterVrfOspfv3AuthProfileAhSha512ToTerraform(struct!.sha512),
  }
}


export function logicalRouterVrfOspfv3AuthProfileAhToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: logicalRouterVrfOspfv3AuthProfileAhMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileAhMd5",
    },
    sha1: {
      value: logicalRouterVrfOspfv3AuthProfileAhSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileAhSha1",
    },
    sha256: {
      value: logicalRouterVrfOspfv3AuthProfileAhSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileAhSha256",
    },
    sha384: {
      value: logicalRouterVrfOspfv3AuthProfileAhSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileAhSha384",
    },
    sha512: {
      value: logicalRouterVrfOspfv3AuthProfileAhSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileAhSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AuthProfileAhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileAh | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileAh | cdktf.IResolvable | undefined) {
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
  private _md5 = new LogicalRouterVrfOspfv3AuthProfileAhMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: LogicalRouterVrfOspfv3AuthProfileAhMd5) {
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
  private _sha1 = new LogicalRouterVrfOspfv3AuthProfileAhSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: LogicalRouterVrfOspfv3AuthProfileAhSha1) {
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
  private _sha256 = new LogicalRouterVrfOspfv3AuthProfileAhSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: LogicalRouterVrfOspfv3AuthProfileAhSha256) {
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
  private _sha384 = new LogicalRouterVrfOspfv3AuthProfileAhSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: LogicalRouterVrfOspfv3AuthProfileAhSha384) {
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
  private _sha512 = new LogicalRouterVrfOspfv3AuthProfileAhSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: LogicalRouterVrfOspfv3AuthProfileAhSha512) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone {
}

export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512 {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512ToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512ToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512 | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEspAuthentication {
  /**
  * Md5
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `none`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#md5 LogicalRouter#md5}
  */
  readonly md5?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5;
  /**
  * None
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `none`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#none LogicalRouter#none}
  */
  readonly none?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone;
  /**
  * Sha1
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `none`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sha1 LogicalRouter#sha1}
  */
  readonly sha1?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1;
  /**
  * Sha256
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `none`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sha256 LogicalRouter#sha256}
  */
  readonly sha256?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256;
  /**
  * Sha384
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `none`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sha384 LogicalRouter#sha384}
  */
  readonly sha384?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384;
  /**
  * Sha512
  * 
  * > ℹ️ **Note:** You must specify exactly one of `md5`, `none`, `sha1`, `sha256`, `sha384`, and `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sha512 LogicalRouter#sha512}
  */
  readonly sha512?: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512;
}

export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: logicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5ToTerraform(struct!.md5),
    none: logicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneToTerraform(struct!.none),
    sha1: logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1ToTerraform(struct!.sha1),
    sha256: logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256ToTerraform(struct!.sha256),
    sha384: logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384ToTerraform(struct!.sha384),
    sha512: logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512ToTerraform(struct!.sha512),
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspAuthenticationToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: logicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5",
    },
    none: {
      value: logicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone",
    },
    sha1: {
      value: logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1",
    },
    sha256: {
      value: logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256",
    },
    sha384: {
      value: logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384",
    },
    sha512: {
      value: logicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AuthProfileEspAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEspAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEspAuthentication | cdktf.IResolvable | undefined) {
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
  private _md5 = new LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5) {
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
  private _none = new LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone) {
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
  private _sha1 = new LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1) {
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
  private _sha256 = new LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256) {
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
  private _sha384 = new LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384) {
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
  private _sha512 = new LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: LogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEspEncryption {
  /**
  * Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#algorithm LogicalRouter#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#key LogicalRouter#key}
  */
  readonly key?: string;
}

export function logicalRouterVrfOspfv3AuthProfileEspEncryptionToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspEncryptionToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEspEncryption | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3AuthProfileEspEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEspEncryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEspEncryption | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AuthProfileEsp {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: LogicalRouterVrfOspfv3AuthProfileEspAuthentication;
  /**
  * Encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#encryption LogicalRouter#encryption}
  */
  readonly encryption?: LogicalRouterVrfOspfv3AuthProfileEspEncryption;
}

export function logicalRouterVrfOspfv3AuthProfileEspToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: logicalRouterVrfOspfv3AuthProfileEspAuthenticationToTerraform(struct!.authentication),
    encryption: logicalRouterVrfOspfv3AuthProfileEspEncryptionToTerraform(struct!.encryption),
  }
}


export function logicalRouterVrfOspfv3AuthProfileEspToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfileEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: logicalRouterVrfOspfv3AuthProfileEspAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEspAuthentication",
    },
    encryption: {
      value: logicalRouterVrfOspfv3AuthProfileEspEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEspEncryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AuthProfileEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfileEsp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfileEsp | cdktf.IResolvable | undefined) {
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
  private _authentication = new LogicalRouterVrfOspfv3AuthProfileEspAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: LogicalRouterVrfOspfv3AuthProfileEspAuthentication) {
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
  private _encryption = new LogicalRouterVrfOspfv3AuthProfileEspEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: LogicalRouterVrfOspfv3AuthProfileEspEncryption) {
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
export interface LogicalRouterVrfOspfv3AuthProfile {
  /**
  * Ah
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ah LogicalRouter#ah}
  */
  readonly ah?: LogicalRouterVrfOspfv3AuthProfileAh;
  /**
  * Esp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#esp LogicalRouter#esp}
  */
  readonly esp?: LogicalRouterVrfOspfv3AuthProfileEsp;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Spi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#spi LogicalRouter#spi}
  */
  readonly spi?: string;
}

export function logicalRouterVrfOspfv3AuthProfileToTerraform(struct?: LogicalRouterVrfOspfv3AuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ah: logicalRouterVrfOspfv3AuthProfileAhToTerraform(struct!.ah),
    esp: logicalRouterVrfOspfv3AuthProfileEspToTerraform(struct!.esp),
    name: cdktf.stringToTerraform(struct!.name),
    spi: cdktf.stringToTerraform(struct!.spi),
  }
}


export function logicalRouterVrfOspfv3AuthProfileToHclTerraform(struct?: LogicalRouterVrfOspfv3AuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ah: {
      value: logicalRouterVrfOspfv3AuthProfileAhToHclTerraform(struct!.ah),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileAh",
    },
    esp: {
      value: logicalRouterVrfOspfv3AuthProfileEspToHclTerraform(struct!.esp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileEsp",
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

export class LogicalRouterVrfOspfv3AuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AuthProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3AuthProfile | cdktf.IResolvable | undefined) {
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
  private _ah = new LogicalRouterVrfOspfv3AuthProfileAhOutputReference(this, "ah");
  public get ah() {
    return this._ah;
  }
  public putAh(value: LogicalRouterVrfOspfv3AuthProfileAh) {
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
  private _esp = new LogicalRouterVrfOspfv3AuthProfileEspOutputReference(this, "esp");
  public get esp() {
    return this._esp;
  }
  public putEsp(value: LogicalRouterVrfOspfv3AuthProfileEsp) {
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

export class LogicalRouterVrfOspfv3AuthProfileList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AuthProfile[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AuthProfileOutputReference {
    return new LogicalRouterVrfOspfv3AuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3ExportRules {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * New path type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#new_path_type LogicalRouter#new_path_type}
  */
  readonly newPathType?: string;
  /**
  * New tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#new_tag LogicalRouter#new_tag}
  */
  readonly newTag?: string;
}

export function logicalRouterVrfOspfv3ExportRulesToTerraform(struct?: LogicalRouterVrfOspfv3ExportRules | cdktf.IResolvable): any {
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


export function logicalRouterVrfOspfv3ExportRulesToHclTerraform(struct?: LogicalRouterVrfOspfv3ExportRules | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3ExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3ExportRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3ExportRules | cdktf.IResolvable | undefined) {
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

  // new_path_type - computed: false, optional: true, required: false
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

export class LogicalRouterVrfOspfv3ExportRulesList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3ExportRules[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3ExportRulesOutputReference {
    return new LogicalRouterVrfOspfv3ExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3GlobalBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfv3GlobalBfdToTerraform(struct?: LogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfv3GlobalBfdToHclTerraform(struct?: LogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3GlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfOspfv3GracefulRestart {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Grace period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#grace_period LogicalRouter#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Helper enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#helper_enable LogicalRouter#helper_enable}
  */
  readonly helperEnable?: boolean | cdktf.IResolvable;
  /**
  * Max neighbor restart time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#max_neighbor_restart_time LogicalRouter#max_neighbor_restart_time}
  */
  readonly maxNeighborRestartTime?: number;
  /**
  * Strict l s a checking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#strict_lsa_checking LogicalRouter#strict_lsa_checking}
  */
  readonly strictLsaChecking?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3GracefulRestartToTerraform(struct?: LogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    helper_enable: cdktf.booleanToTerraform(struct!.helperEnable),
    max_neighbor_restart_time: cdktf.numberToTerraform(struct!.maxNeighborRestartTime),
    strict_lsa_checking: cdktf.booleanToTerraform(struct!.strictLsaChecking),
  }
}


export function logicalRouterVrfOspfv3GracefulRestartToHclTerraform(struct?: LogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable): any {
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
    strict_lsa_checking: {
      value: cdktf.booleanToHclTerraform(struct!.strictLsaChecking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3GracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable | undefined {
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
    if (this._strictLsaChecking !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLsaChecking = this._strictLsaChecking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._gracePeriod = undefined;
      this._helperEnable = undefined;
      this._maxNeighborRestartTime = undefined;
      this._strictLsaChecking = undefined;
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
      this._strictLsaChecking = value.strictLsaChecking;
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

  // grace_period - computed: false, optional: true, required: false
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

  // max_neighbor_restart_time - computed: false, optional: true, required: false
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

  // strict_lsa_checking - computed: false, optional: true, required: false
  private _strictLsaChecking?: boolean | cdktf.IResolvable; 
  public get strictLsaChecking() {
    return this.getBooleanAttribute('strict_lsa_checking');
  }
  public set strictLsaChecking(value: boolean | cdktf.IResolvable) {
    this._strictLsaChecking = value;
  }
  public resetStrictLsaChecking() {
    this._strictLsaChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLsaCheckingInput() {
    return this._strictLsaChecking;
  }
}
export interface LogicalRouterVrfOspfv3VrTimers {
  /**
  * Lsa interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#lsa_interval LogicalRouter#lsa_interval}
  */
  readonly lsaInterval?: number;
  /**
  * Spf calculation delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#spf_calculation_delay LogicalRouter#spf_calculation_delay}
  */
  readonly spfCalculationDelay?: number;
}

export function logicalRouterVrfOspfv3VrTimersToTerraform(struct?: LogicalRouterVrfOspfv3VrTimers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lsa_interval: cdktf.numberToTerraform(struct!.lsaInterval),
    spf_calculation_delay: cdktf.numberToTerraform(struct!.spfCalculationDelay),
  }
}


export function logicalRouterVrfOspfv3VrTimersToHclTerraform(struct?: LogicalRouterVrfOspfv3VrTimers | cdktf.IResolvable): any {
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

export class LogicalRouterVrfOspfv3VrTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3VrTimers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfOspfv3VrTimers | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3 {
  /**
  * Allow redist default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#allow_redist_default_route LogicalRouter#allow_redist_default_route}
  */
  readonly allowRedistDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#area LogicalRouter#area}
  */
  readonly area?: LogicalRouterVrfOspfv3Area[] | cdktf.IResolvable;
  /**
  * Auth profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#auth_profile LogicalRouter#auth_profile}
  */
  readonly authProfile?: LogicalRouterVrfOspfv3AuthProfile[] | cdktf.IResolvable;
  /**
  * Disable transit traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#disable_transit_traffic LogicalRouter#disable_transit_traffic}
  */
  readonly disableTransitTraffic?: boolean | cdktf.IResolvable;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Export rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#export_rules LogicalRouter#export_rules}
  */
  readonly exportRules?: LogicalRouterVrfOspfv3ExportRules[] | cdktf.IResolvable;
  /**
  * Global bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_bfd LogicalRouter#global_bfd}
  */
  readonly globalBfd?: LogicalRouterVrfOspfv3GlobalBfd;
  /**
  * Global if timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_if_timer LogicalRouter#global_if_timer}
  */
  readonly globalIfTimer?: string;
  /**
  * Graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#graceful_restart LogicalRouter#graceful_restart}
  */
  readonly gracefulRestart?: LogicalRouterVrfOspfv3GracefulRestart;
  /**
  * Redistribution profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#redistribution_profile LogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
  /**
  * Reject default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#reject_default_route LogicalRouter#reject_default_route}
  */
  readonly rejectDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Router id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#router_id LogicalRouter#router_id}
  */
  readonly routerId?: string;
  /**
  * Spf timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#spf_timer LogicalRouter#spf_timer}
  */
  readonly spfTimer?: string;
  /**
  * Vr timers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_timers LogicalRouter#vr_timers}
  */
  readonly vrTimers?: LogicalRouterVrfOspfv3VrTimers;
}

export function logicalRouterVrfOspfv3ToTerraform(struct?: LogicalRouterVrfOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_redist_default_route: cdktf.booleanToTerraform(struct!.allowRedistDefaultRoute),
    area: cdktf.listMapper(logicalRouterVrfOspfv3AreaToTerraform, false)(struct!.area),
    auth_profile: cdktf.listMapper(logicalRouterVrfOspfv3AuthProfileToTerraform, false)(struct!.authProfile),
    disable_transit_traffic: cdktf.booleanToTerraform(struct!.disableTransitTraffic),
    enable: cdktf.booleanToTerraform(struct!.enable),
    export_rules: cdktf.listMapper(logicalRouterVrfOspfv3ExportRulesToTerraform, false)(struct!.exportRules),
    global_bfd: logicalRouterVrfOspfv3GlobalBfdToTerraform(struct!.globalBfd),
    global_if_timer: cdktf.stringToTerraform(struct!.globalIfTimer),
    graceful_restart: logicalRouterVrfOspfv3GracefulRestartToTerraform(struct!.gracefulRestart),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
    reject_default_route: cdktf.booleanToTerraform(struct!.rejectDefaultRoute),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    spf_timer: cdktf.stringToTerraform(struct!.spfTimer),
    vr_timers: logicalRouterVrfOspfv3VrTimersToTerraform(struct!.vrTimers),
  }
}


export function logicalRouterVrfOspfv3ToHclTerraform(struct?: LogicalRouterVrfOspfv3 | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaToHclTerraform, false)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaList",
    },
    auth_profile: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AuthProfileToHclTerraform, false)(struct!.authProfile),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AuthProfileList",
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
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3ExportRulesToHclTerraform, false)(struct!.exportRules),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3ExportRulesList",
    },
    global_bfd: {
      value: logicalRouterVrfOspfv3GlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3GlobalBfd",
    },
    global_if_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalIfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_restart: {
      value: logicalRouterVrfOspfv3GracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3GracefulRestart",
    },
    redistribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.redistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    spf_timer: {
      value: cdktf.stringToHclTerraform(struct!.spfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vr_timers: {
      value: logicalRouterVrfOspfv3VrTimersToHclTerraform(struct!.vrTimers),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3VrTimers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3 | cdktf.IResolvable | undefined {
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
    if (this._globalIfTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalIfTimer = this._globalIfTimer;
    }
    if (this._gracefulRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart?.internalValue;
    }
    if (this._redistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionProfile = this._redistributionProfile;
    }
    if (this._rejectDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectDefaultRoute = this._rejectDefaultRoute;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._spfTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.spfTimer = this._spfTimer;
    }
    if (this._vrTimers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrTimers = this._vrTimers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3 | cdktf.IResolvable | undefined) {
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
      this._globalIfTimer = undefined;
      this._gracefulRestart.internalValue = undefined;
      this._redistributionProfile = undefined;
      this._rejectDefaultRoute = undefined;
      this._routerId = undefined;
      this._spfTimer = undefined;
      this._vrTimers.internalValue = undefined;
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
      this._globalIfTimer = value.globalIfTimer;
      this._gracefulRestart.internalValue = value.gracefulRestart;
      this._redistributionProfile = value.redistributionProfile;
      this._rejectDefaultRoute = value.rejectDefaultRoute;
      this._routerId = value.routerId;
      this._spfTimer = value.spfTimer;
      this._vrTimers.internalValue = value.vrTimers;
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
  private _area = new LogicalRouterVrfOspfv3AreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: LogicalRouterVrfOspfv3Area[] | cdktf.IResolvable) {
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
  private _authProfile = new LogicalRouterVrfOspfv3AuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }
  public putAuthProfile(value: LogicalRouterVrfOspfv3AuthProfile[] | cdktf.IResolvable) {
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
  private _exportRules = new LogicalRouterVrfOspfv3ExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }
  public putExportRules(value: LogicalRouterVrfOspfv3ExportRules[] | cdktf.IResolvable) {
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
  private _globalBfd = new LogicalRouterVrfOspfv3GlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: LogicalRouterVrfOspfv3GlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_if_timer - computed: false, optional: true, required: false
  private _globalIfTimer?: string; 
  public get globalIfTimer() {
    return this.getStringAttribute('global_if_timer');
  }
  public set globalIfTimer(value: string) {
    this._globalIfTimer = value;
  }
  public resetGlobalIfTimer() {
    this._globalIfTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalIfTimerInput() {
    return this._globalIfTimer;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new LogicalRouterVrfOspfv3GracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: LogicalRouterVrfOspfv3GracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // redistribution_profile - computed: false, optional: true, required: false
  private _redistributionProfile?: string; 
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }
  public set redistributionProfile(value: string) {
    this._redistributionProfile = value;
  }
  public resetRedistributionProfile() {
    this._redistributionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionProfileInput() {
    return this._redistributionProfile;
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

  // spf_timer - computed: false, optional: true, required: false
  private _spfTimer?: string; 
  public get spfTimer() {
    return this.getStringAttribute('spf_timer');
  }
  public set spfTimer(value: string) {
    this._spfTimer = value;
  }
  public resetSpfTimer() {
    this._spfTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfTimerInput() {
    return this._spfTimer;
  }

  // vr_timers - computed: false, optional: true, required: false
  private _vrTimers = new LogicalRouterVrfOspfv3VrTimersOutputReference(this, "vr_timers");
  public get vrTimers() {
    return this._vrTimers;
  }
  public putVrTimers(value: LogicalRouterVrfOspfv3VrTimers) {
    this._vrTimers.internalValue = value;
  }
  public resetVrTimers() {
    this._vrTimers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrTimersInput() {
    return this._vrTimers.internalValue;
  }
}
export interface LogicalRouterVrfRibFilterIpv4Bgp {
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv4BgpToTerraform(struct?: LogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv4BgpToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv4Ospf {
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv4OspfToTerraform(struct?: LogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv4OspfToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv4Rip {
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv4RipToTerraform(struct?: LogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv4RipToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4RipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv4Static {
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv4StaticToTerraform(struct?: LogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv4StaticToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv4 {
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bgp LogicalRouter#bgp}
  */
  readonly bgp?: LogicalRouterVrfRibFilterIpv4Bgp;
  /**
  * Ospf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ospf LogicalRouter#ospf}
  */
  readonly ospf?: LogicalRouterVrfRibFilterIpv4Ospf;
  /**
  * Rip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#rip LogicalRouter#rip}
  */
  readonly rip?: LogicalRouterVrfRibFilterIpv4Rip;
  /**
  * Static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#static LogicalRouter#static}
  */
  readonly static?: LogicalRouterVrfRibFilterIpv4Static;
}

export function logicalRouterVrfRibFilterIpv4ToTerraform(struct?: LogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: logicalRouterVrfRibFilterIpv4BgpToTerraform(struct!.bgp),
    ospf: logicalRouterVrfRibFilterIpv4OspfToTerraform(struct!.ospf),
    rip: logicalRouterVrfRibFilterIpv4RipToTerraform(struct!.rip),
    static: logicalRouterVrfRibFilterIpv4StaticToTerraform(struct!.static),
  }
}


export function logicalRouterVrfRibFilterIpv4ToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: logicalRouterVrfRibFilterIpv4BgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4Bgp",
    },
    ospf: {
      value: logicalRouterVrfRibFilterIpv4OspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4Ospf",
    },
    rip: {
      value: logicalRouterVrfRibFilterIpv4RipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4Rip",
    },
    static: {
      value: logicalRouterVrfRibFilterIpv4StaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4Static",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable | undefined {
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
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._static.internalValue = undefined;
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
      this._rip.internalValue = value.rip;
      this._static.internalValue = value.static;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new LogicalRouterVrfRibFilterIpv4BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: LogicalRouterVrfRibFilterIpv4Bgp) {
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
  private _ospf = new LogicalRouterVrfRibFilterIpv4OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: LogicalRouterVrfRibFilterIpv4Ospf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new LogicalRouterVrfRibFilterIpv4RipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: LogicalRouterVrfRibFilterIpv4Rip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new LogicalRouterVrfRibFilterIpv4StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: LogicalRouterVrfRibFilterIpv4Static) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface LogicalRouterVrfRibFilterIpv6Bgp {
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv6BgpToTerraform(struct?: LogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv6BgpToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv6BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv6Ospfv3 {
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv6Ospfv3ToTerraform(struct?: LogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv6Ospfv3ToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv6Ospfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv6Static {
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv6StaticToTerraform(struct?: LogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv6StaticToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv6StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv6 {
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bgp LogicalRouter#bgp}
  */
  readonly bgp?: LogicalRouterVrfRibFilterIpv6Bgp;
  /**
  * Ospfv3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ospfv3 LogicalRouter#ospfv3}
  */
  readonly ospfv3?: LogicalRouterVrfRibFilterIpv6Ospfv3;
  /**
  * Static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#static LogicalRouter#static}
  */
  readonly static?: LogicalRouterVrfRibFilterIpv6Static;
}

export function logicalRouterVrfRibFilterIpv6ToTerraform(struct?: LogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: logicalRouterVrfRibFilterIpv6BgpToTerraform(struct!.bgp),
    ospfv3: logicalRouterVrfRibFilterIpv6Ospfv3ToTerraform(struct!.ospfv3),
    static: logicalRouterVrfRibFilterIpv6StaticToTerraform(struct!.static),
  }
}


export function logicalRouterVrfRibFilterIpv6ToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: logicalRouterVrfRibFilterIpv6BgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv6Bgp",
    },
    ospfv3: {
      value: logicalRouterVrfRibFilterIpv6Ospfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv6Ospfv3",
    },
    static: {
      value: logicalRouterVrfRibFilterIpv6StaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv6Static",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._ospfv3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3 = this._ospfv3?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._ospfv3.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._ospfv3.internalValue = value.ospfv3;
      this._static.internalValue = value.static;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new LogicalRouterVrfRibFilterIpv6BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: LogicalRouterVrfRibFilterIpv6Bgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ospfv3 - computed: false, optional: true, required: false
  private _ospfv3 = new LogicalRouterVrfRibFilterIpv6Ospfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: LogicalRouterVrfRibFilterIpv6Ospfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new LogicalRouterVrfRibFilterIpv6StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: LogicalRouterVrfRibFilterIpv6Static) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface LogicalRouterVrfRibFilter {
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: LogicalRouterVrfRibFilterIpv4;
  /**
  * Ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: LogicalRouterVrfRibFilterIpv6;
}

export function logicalRouterVrfRibFilterToTerraform(struct?: LogicalRouterVrfRibFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: logicalRouterVrfRibFilterIpv4ToTerraform(struct!.ipv4),
    ipv6: logicalRouterVrfRibFilterIpv6ToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfRibFilterToHclTerraform(struct?: LogicalRouterVrfRibFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: logicalRouterVrfRibFilterIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4",
    },
    ipv6: {
      value: logicalRouterVrfRibFilterIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new LogicalRouterVrfRibFilterIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: LogicalRouterVrfRibFilterIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new LogicalRouterVrfRibFilterIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: LogicalRouterVrfRibFilterIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface LogicalRouterVrfRipGlobalBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfRipGlobalBfdToTerraform(struct?: LogicalRouterVrfRipGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfRipGlobalBfdToHclTerraform(struct?: LogicalRouterVrfRipGlobalBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfRipGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipGlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfRipGlobalBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfRipGlobalInboundDistributeListStruct {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#access_list LogicalRouter#access_list}
  */
  readonly accessList?: string;
}

export function logicalRouterVrfRipGlobalInboundDistributeListStructToTerraform(struct?: LogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
  }
}


export function logicalRouterVrfRipGlobalInboundDistributeListStructToHclTerraform(struct?: LogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipGlobalInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }
}
export interface LogicalRouterVrfRipGlobalOutboundDistributeListStruct {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#access_list LogicalRouter#access_list}
  */
  readonly accessList?: string;
}

export function logicalRouterVrfRipGlobalOutboundDistributeListStructToTerraform(struct?: LogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
  }
}


export function logicalRouterVrfRipGlobalOutboundDistributeListStructToHclTerraform(struct?: LogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipGlobalOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }
}
export interface LogicalRouterVrfRipInterfaceBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfRipInterfaceBfdToTerraform(struct?: LogicalRouterVrfRipInterfaceBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfRipInterfaceBfdToHclTerraform(struct?: LogicalRouterVrfRipInterfaceBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfRipInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipInterfaceBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfRipInterfaceBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#access_list LogicalRouter#access_list}
  */
  readonly accessList?: string;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
}

export function logicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructToTerraform(struct?: LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function logicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructToHclTerraform(struct?: LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._metric = value.metric;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
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
}
export interface LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#access_list LogicalRouter#access_list}
  */
  readonly accessList?: string;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
}

export function logicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructToTerraform(struct?: LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function logicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructToHclTerraform(struct?: LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._metric = value.metric;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
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
}
export interface LogicalRouterVrfRipInterface {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfRipInterfaceBfd;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Interface inbound distribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface_inbound_distribute_list LogicalRouter#interface_inbound_distribute_list}
  */
  readonly interfaceInboundDistributeList?: LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct;
  /**
  * Interface outbound distribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface_outbound_distribute_list LogicalRouter#interface_outbound_distribute_list}
  */
  readonly interfaceOutboundDistributeList?: LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct;
  /**
  * Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#mode LogicalRouter#mode}
  */
  readonly mode?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Split horizon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#split_horizon LogicalRouter#split_horizon}
  */
  readonly splitHorizon?: string;
}

export function logicalRouterVrfRipInterfaceToTerraform(struct?: LogicalRouterVrfRipInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfRipInterfaceBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interface_inbound_distribute_list: logicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructToTerraform(struct!.interfaceInboundDistributeList),
    interface_outbound_distribute_list: logicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructToTerraform(struct!.interfaceOutboundDistributeList),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    split_horizon: cdktf.stringToTerraform(struct!.splitHorizon),
  }
}


export function logicalRouterVrfRipInterfaceToHclTerraform(struct?: LogicalRouterVrfRipInterface | cdktf.IResolvable): any {
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
      value: logicalRouterVrfRipInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipInterfaceBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_inbound_distribute_list: {
      value: logicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructToHclTerraform(struct!.interfaceInboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct",
    },
    interface_outbound_distribute_list: {
      value: logicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructToHclTerraform(struct!.interfaceOutboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct",
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
    split_horizon: {
      value: cdktf.stringToHclTerraform(struct!.splitHorizon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRipInterface | cdktf.IResolvable | undefined {
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
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interfaceInboundDistributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceInboundDistributeList = this._interfaceInboundDistributeList?.internalValue;
    }
    if (this._interfaceOutboundDistributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceOutboundDistributeList = this._interfaceOutboundDistributeList?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._splitHorizon !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizon = this._splitHorizon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._interfaceInboundDistributeList.internalValue = undefined;
      this._interfaceOutboundDistributeList.internalValue = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._splitHorizon = undefined;
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
      this._enable = value.enable;
      this._interfaceInboundDistributeList.internalValue = value.interfaceInboundDistributeList;
      this._interfaceOutboundDistributeList.internalValue = value.interfaceOutboundDistributeList;
      this._mode = value.mode;
      this._name = value.name;
      this._splitHorizon = value.splitHorizon;
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
  private _bfd = new LogicalRouterVrfRipInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfRipInterfaceBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
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

  // interface_inbound_distribute_list - computed: false, optional: true, required: false
  private _interfaceInboundDistributeList = new LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructOutputReference(this, "interface_inbound_distribute_list");
  public get interfaceInboundDistributeList() {
    return this._interfaceInboundDistributeList;
  }
  public putInterfaceInboundDistributeList(value: LogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct) {
    this._interfaceInboundDistributeList.internalValue = value;
  }
  public resetInterfaceInboundDistributeList() {
    this._interfaceInboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInboundDistributeListInput() {
    return this._interfaceInboundDistributeList.internalValue;
  }

  // interface_outbound_distribute_list - computed: false, optional: true, required: false
  private _interfaceOutboundDistributeList = new LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructOutputReference(this, "interface_outbound_distribute_list");
  public get interfaceOutboundDistributeList() {
    return this._interfaceOutboundDistributeList;
  }
  public putInterfaceOutboundDistributeList(value: LogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct) {
    this._interfaceOutboundDistributeList.internalValue = value;
  }
  public resetInterfaceOutboundDistributeList() {
    this._interfaceOutboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceOutboundDistributeListInput() {
    return this._interfaceOutboundDistributeList.internalValue;
  }

  // mode - computed: false, optional: true, required: false
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

  // split_horizon - computed: false, optional: true, required: false
  private _splitHorizon?: string; 
  public get splitHorizon() {
    return this.getStringAttribute('split_horizon');
  }
  public set splitHorizon(value: string) {
    this._splitHorizon = value;
  }
  public resetSplitHorizon() {
    this._splitHorizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonInput() {
    return this._splitHorizon;
  }
}

export class LogicalRouterVrfRipInterfaceList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRipInterface[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRipInterfaceOutputReference {
    return new LogicalRouterVrfRipInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRip {
  /**
  * Auth profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#auth_profile LogicalRouter#auth_profile}
  */
  readonly authProfile?: string;
  /**
  * Default information originate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#default_information_originate LogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Global bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_bfd LogicalRouter#global_bfd}
  */
  readonly globalBfd?: LogicalRouterVrfRipGlobalBfd;
  /**
  * Global inbound distribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_inbound_distribute_list LogicalRouter#global_inbound_distribute_list}
  */
  readonly globalInboundDistributeList?: LogicalRouterVrfRipGlobalInboundDistributeListStruct;
  /**
  * Global outbound distribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_outbound_distribute_list LogicalRouter#global_outbound_distribute_list}
  */
  readonly globalOutboundDistributeList?: LogicalRouterVrfRipGlobalOutboundDistributeListStruct;
  /**
  * Global timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_timer LogicalRouter#global_timer}
  */
  readonly globalTimer?: string;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: LogicalRouterVrfRipInterface[] | cdktf.IResolvable;
  /**
  * Redistribution profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#redistribution_profile LogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
}

export function logicalRouterVrfRipToTerraform(struct?: LogicalRouterVrfRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_profile: cdktf.stringToTerraform(struct!.authProfile),
    default_information_originate: cdktf.booleanToTerraform(struct!.defaultInformationOriginate),
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_bfd: logicalRouterVrfRipGlobalBfdToTerraform(struct!.globalBfd),
    global_inbound_distribute_list: logicalRouterVrfRipGlobalInboundDistributeListStructToTerraform(struct!.globalInboundDistributeList),
    global_outbound_distribute_list: logicalRouterVrfRipGlobalOutboundDistributeListStructToTerraform(struct!.globalOutboundDistributeList),
    global_timer: cdktf.stringToTerraform(struct!.globalTimer),
    interface: cdktf.listMapper(logicalRouterVrfRipInterfaceToTerraform, false)(struct!.interface),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
  }
}


export function logicalRouterVrfRipToHclTerraform(struct?: LogicalRouterVrfRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_profile: {
      value: cdktf.stringToHclTerraform(struct!.authProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_information_originate: {
      value: cdktf.booleanToHclTerraform(struct!.defaultInformationOriginate),
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
    global_bfd: {
      value: logicalRouterVrfRipGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipGlobalBfd",
    },
    global_inbound_distribute_list: {
      value: logicalRouterVrfRipGlobalInboundDistributeListStructToHclTerraform(struct!.globalInboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipGlobalInboundDistributeListStruct",
    },
    global_outbound_distribute_list: {
      value: logicalRouterVrfRipGlobalOutboundDistributeListStructToHclTerraform(struct!.globalOutboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipGlobalOutboundDistributeListStruct",
    },
    global_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(logicalRouterVrfRipInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRipInterfaceList",
    },
    redistribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.redistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProfile = this._authProfile;
    }
    if (this._defaultInformationOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._globalBfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalBfd = this._globalBfd?.internalValue;
    }
    if (this._globalInboundDistributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalInboundDistributeList = this._globalInboundDistributeList?.internalValue;
    }
    if (this._globalOutboundDistributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOutboundDistributeList = this._globalOutboundDistributeList?.internalValue;
    }
    if (this._globalTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalTimer = this._globalTimer;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._redistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionProfile = this._redistributionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authProfile = undefined;
      this._defaultInformationOriginate = undefined;
      this._enable = undefined;
      this._globalBfd.internalValue = undefined;
      this._globalInboundDistributeList.internalValue = undefined;
      this._globalOutboundDistributeList.internalValue = undefined;
      this._globalTimer = undefined;
      this._interface.internalValue = undefined;
      this._redistributionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authProfile = value.authProfile;
      this._defaultInformationOriginate = value.defaultInformationOriginate;
      this._enable = value.enable;
      this._globalBfd.internalValue = value.globalBfd;
      this._globalInboundDistributeList.internalValue = value.globalInboundDistributeList;
      this._globalOutboundDistributeList.internalValue = value.globalOutboundDistributeList;
      this._globalTimer = value.globalTimer;
      this._interface.internalValue = value.interface;
      this._redistributionProfile = value.redistributionProfile;
    }
  }

  // auth_profile - computed: false, optional: true, required: false
  private _authProfile?: string; 
  public get authProfile() {
    return this.getStringAttribute('auth_profile');
  }
  public set authProfile(value: string) {
    this._authProfile = value;
  }
  public resetAuthProfile() {
    this._authProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProfileInput() {
    return this._authProfile;
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
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

  // global_bfd - computed: false, optional: true, required: false
  private _globalBfd = new LogicalRouterVrfRipGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: LogicalRouterVrfRipGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_inbound_distribute_list - computed: false, optional: true, required: false
  private _globalInboundDistributeList = new LogicalRouterVrfRipGlobalInboundDistributeListStructOutputReference(this, "global_inbound_distribute_list");
  public get globalInboundDistributeList() {
    return this._globalInboundDistributeList;
  }
  public putGlobalInboundDistributeList(value: LogicalRouterVrfRipGlobalInboundDistributeListStruct) {
    this._globalInboundDistributeList.internalValue = value;
  }
  public resetGlobalInboundDistributeList() {
    this._globalInboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInboundDistributeListInput() {
    return this._globalInboundDistributeList.internalValue;
  }

  // global_outbound_distribute_list - computed: false, optional: true, required: false
  private _globalOutboundDistributeList = new LogicalRouterVrfRipGlobalOutboundDistributeListStructOutputReference(this, "global_outbound_distribute_list");
  public get globalOutboundDistributeList() {
    return this._globalOutboundDistributeList;
  }
  public putGlobalOutboundDistributeList(value: LogicalRouterVrfRipGlobalOutboundDistributeListStruct) {
    this._globalOutboundDistributeList.internalValue = value;
  }
  public resetGlobalOutboundDistributeList() {
    this._globalOutboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutboundDistributeListInput() {
    return this._globalOutboundDistributeList.internalValue;
  }

  // global_timer - computed: false, optional: true, required: false
  private _globalTimer?: string; 
  public get globalTimer() {
    return this.getStringAttribute('global_timer');
  }
  public set globalTimer(value: string) {
    this._globalTimer = value;
  }
  public resetGlobalTimer() {
    this._globalTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTimerInput() {
    return this._globalTimer;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new LogicalRouterVrfRipInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: LogicalRouterVrfRipInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // redistribution_profile - computed: false, optional: true, required: false
  private _redistributionProfile?: string; 
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }
  public set redistributionProfile(value: string) {
    this._redistributionProfile = value;
  }
  public resetRedistributionProfile() {
    this._redistributionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionProfileInput() {
    return this._redistributionProfile;
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRouteBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfRoutingTableIpStaticRouteBfdToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteBfdToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfRoutingTableIpStaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard {
}

export function logicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive {
}

export function logicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpStaticRouteNexthop {
  /**
  * Discard
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ip_address`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#discard LogicalRouter#discard}
  */
  readonly discard?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard;
  /**
  * Fqdn
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ip_address`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#fqdn LogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Ip address
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ip_address`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ip_address LogicalRouter#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Ipv6 address
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ip_address`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ipv6_address LogicalRouter#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Next lr
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ip_address`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#next_lr LogicalRouter#next_lr}
  */
  readonly nextLr?: string;
  /**
  * Next vr
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ip_address`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#next_vr LogicalRouter#next_vr}
  */
  readonly nextVr?: string;
  /**
  * Receive
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ip_address`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#receive LogicalRouter#receive}
  */
  readonly receive?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive;
  /**
  * Tunnel
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ip_address`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#tunnel LogicalRouter#tunnel}
  */
  readonly tunnel?: string;
}

export function logicalRouterVrfRoutingTableIpStaticRouteNexthopToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: logicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToTerraform(struct!.discard),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    next_lr: cdktf.stringToTerraform(struct!.nextLr),
    next_vr: cdktf.stringToTerraform(struct!.nextVr),
    receive: logicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveToTerraform(struct!.receive),
    tunnel: cdktf.stringToTerraform(struct!.tunnel),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteNexthopToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: logicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_lr: {
      value: cdktf.stringToHclTerraform(struct!.nextLr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_vr: {
      value: cdktf.stringToHclTerraform(struct!.nextVr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receive: {
      value: logicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveToHclTerraform(struct!.receive),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive",
    },
    tunnel: {
      value: cdktf.stringToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._nextLr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextLr = this._nextLr;
    }
    if (this._nextVr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextVr = this._nextVr;
    }
    if (this._receive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive?.internalValue;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard.internalValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
      this._ipv6Address = undefined;
      this._nextLr = undefined;
      this._nextVr = undefined;
      this._receive.internalValue = undefined;
      this._tunnel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard.internalValue = value.discard;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
      this._ipv6Address = value.ipv6Address;
      this._nextLr = value.nextLr;
      this._nextVr = value.nextVr;
      this._receive.internalValue = value.receive;
      this._tunnel = value.tunnel;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard = new LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard) {
    this._discard.internalValue = value;
  }
  public resetDiscard() {
    this._discard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard.internalValue;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // next_lr - computed: false, optional: true, required: false
  private _nextLr?: string; 
  public get nextLr() {
    return this.getStringAttribute('next_lr');
  }
  public set nextLr(value: string) {
    this._nextLr = value;
  }
  public resetNextLr() {
    this._nextLr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextLrInput() {
    return this._nextLr;
  }

  // next_vr - computed: false, optional: true, required: false
  private _nextVr?: string; 
  public get nextVr() {
    return this.getStringAttribute('next_vr');
  }
  public set nextVr(value: string) {
    this._nextVr = value;
  }
  public resetNextVr() {
    this._nextVr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextVrInput() {
    return this._nextVr;
  }

  // receive - computed: false, optional: true, required: false
  private _receive = new LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }
  public putReceive(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive) {
    this._receive.internalValue = value;
  }
  public resetReceive() {
    this._receive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive.internalValue;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: string; 
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
  public set tunnel(value: string) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations {
  /**
  * Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#count LogicalRouter#count}
  */
  readonly count?: number;
  /**
  * Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Destination fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#destination_fqdn LogicalRouter#destination_fqdn}
  */
  readonly destinationFqdn?: string;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interval LogicalRouter#interval}
  */
  readonly interval?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#source LogicalRouter#source}
  */
  readonly source?: string;
}

export function logicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_fqdn: cdktf.stringToTerraform(struct!.destinationFqdn),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.destinationFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFqdn = this._destinationFqdn;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._destination = undefined;
      this._destinationFqdn = undefined;
      this._enable = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._destination = value.destination;
      this._destinationFqdn = value.destinationFqdn;
      this._enable = value.enable;
      this._interval = value.interval;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_fqdn - computed: false, optional: true, required: false
  private _destinationFqdn?: string; 
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }
  public set destinationFqdn(value: string) {
    this._destinationFqdn = value;
  }
  public resetDestinationFqdn() {
    this._destinationFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFqdnInput() {
    return this._destinationFqdn;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#failure_condition LogicalRouter#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * Hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#hold_time LogicalRouter#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Monitor destinations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#monitor_destinations LogicalRouter#monitor_destinations}
  */
  readonly monitorDestinations?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function logicalRouterVrfRoutingTableIpStaticRoutePathMonitorToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(logicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRoutePathMonitorToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable): any {
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
    failure_condition: {
      value: cdktf.stringToHclTerraform(struct!.failureCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_destinations: {
      value: cdktf.listMapperHcl(logicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._failureCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCondition = this._failureCondition;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._monitorDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDestinations = this._monitorDestinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._failureCondition = undefined;
      this._holdTime = undefined;
      this._monitorDestinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._failureCondition = value.failureCondition;
      this._holdTime = value.holdTime;
      this._monitorDestinations.internalValue = value.monitorDestinations;
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

  // failure_condition - computed: false, optional: true, required: false
  private _failureCondition?: string; 
  public get failureCondition() {
    return this.getStringAttribute('failure_condition');
  }
  public set failureCondition(value: string) {
    this._failureCondition = value;
  }
  public resetFailureCondition() {
    this._failureCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionInput() {
    return this._failureCondition;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // monitor_destinations - computed: false, optional: true, required: false
  private _monitorDestinations = new LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable) {
    this._monitorDestinations.internalValue = value;
  }
  public resetMonitorDestinations() {
    this._monitorDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDestinationsInput() {
    return this._monitorDestinations.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth {
}

export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableBothToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableBothToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast {
}

export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall {
}

export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast {
}

export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpStaticRouteRouteTable {
  /**
  * Both
  * 
  * > ℹ️ **Note:** You must specify exactly one of `both`, `multicast`, `no_install`, and `unicast`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#both LogicalRouter#both}
  */
  readonly both?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth;
  /**
  * Multicast
  * 
  * > ℹ️ **Note:** You must specify exactly one of `both`, `multicast`, `no_install`, and `unicast`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#multicast LogicalRouter#multicast}
  */
  readonly multicast?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast;
  /**
  * No install
  * 
  * > ℹ️ **Note:** You must specify exactly one of `both`, `multicast`, `no_install`, and `unicast`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#no_install LogicalRouter#no_install}
  */
  readonly noInstall?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall;
  /**
  * Unicast
  * 
  * > ℹ️ **Note:** You must specify exactly one of `both`, `multicast`, `no_install`, and `unicast`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#unicast LogicalRouter#unicast}
  */
  readonly unicast?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast;
}

export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    both: logicalRouterVrfRoutingTableIpStaticRouteRouteTableBothToTerraform(struct!.both),
    multicast: logicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastToTerraform(struct!.multicast),
    no_install: logicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallToTerraform(struct!.noInstall),
    unicast: logicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastToTerraform(struct!.unicast),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteRouteTableToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    both: {
      value: logicalRouterVrfRoutingTableIpStaticRouteRouteTableBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth",
    },
    multicast: {
      value: logicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast",
    },
    no_install: {
      value: logicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallToHclTerraform(struct!.noInstall),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall",
    },
    unicast: {
      value: logicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRouteRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteRouteTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._both?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.both = this._both?.internalValue;
    }
    if (this._multicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast?.internalValue;
    }
    if (this._noInstall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInstall = this._noInstall?.internalValue;
    }
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._both.internalValue = undefined;
      this._multicast.internalValue = undefined;
      this._noInstall.internalValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._both.internalValue = value.both;
      this._multicast.internalValue = value.multicast;
      this._noInstall.internalValue = value.noInstall;
      this._unicast.internalValue = value.unicast;
    }
  }

  // both - computed: false, optional: true, required: false
  private _both = new LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast = new LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // no_install - computed: false, optional: true, required: false
  private _noInstall = new LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }
  public putNoInstall(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall) {
    this._noInstall.internalValue = value;
  }
  public resetNoInstall() {
    this._noInstall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInstallInput() {
    return this._noInstall.internalValue;
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast = new LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRoute {
  /**
  * Admin dist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#admin_dist LogicalRouter#admin_dist}
  */
  readonly adminDist?: number;
  /**
  * Bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfRoutingTableIpStaticRouteBfd;
  /**
  * Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#nexthop LogicalRouter#nexthop}
  */
  readonly nexthop?: LogicalRouterVrfRoutingTableIpStaticRouteNexthop;
  /**
  * Path monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#path_monitor LogicalRouter#path_monitor}
  */
  readonly pathMonitor?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor;
  /**
  * Route table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_table LogicalRouter#route_table}
  */
  readonly routeTable?: LogicalRouterVrfRoutingTableIpStaticRouteRouteTable;
}

export function logicalRouterVrfRoutingTableIpStaticRouteToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_dist: cdktf.numberToTerraform(struct!.adminDist),
    bfd: logicalRouterVrfRoutingTableIpStaticRouteBfdToTerraform(struct!.bfd),
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: logicalRouterVrfRoutingTableIpStaticRouteNexthopToTerraform(struct!.nexthop),
    path_monitor: logicalRouterVrfRoutingTableIpStaticRoutePathMonitorToTerraform(struct!.pathMonitor),
    route_table: logicalRouterVrfRoutingTableIpStaticRouteRouteTableToTerraform(struct!.routeTable),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_dist: {
      value: cdktf.numberToHclTerraform(struct!.adminDist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: logicalRouterVrfRoutingTableIpStaticRouteBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteBfd",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    nexthop: {
      value: logicalRouterVrfRoutingTableIpStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteNexthop",
    },
    path_monitor: {
      value: logicalRouterVrfRoutingTableIpStaticRoutePathMonitorToHclTerraform(struct!.pathMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor",
    },
    route_table: {
      value: logicalRouterVrfRoutingTableIpStaticRouteRouteTableToHclTerraform(struct!.routeTable),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteRouteTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminDist !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminDist = this._adminDist;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._pathMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMonitor = this._pathMonitor?.internalValue;
    }
    if (this._routeTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTable = this._routeTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminDist = undefined;
      this._bfd.internalValue = undefined;
      this._destination = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._nexthop.internalValue = undefined;
      this._pathMonitor.internalValue = undefined;
      this._routeTable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminDist = value.adminDist;
      this._bfd.internalValue = value.bfd;
      this._destination = value.destination;
      this._interface = value.interface;
      this._metric = value.metric;
      this._name = value.name;
      this._nexthop.internalValue = value.nexthop;
      this._pathMonitor.internalValue = value.pathMonitor;
      this._routeTable.internalValue = value.routeTable;
    }
  }

  // admin_dist - computed: false, optional: true, required: false
  private _adminDist?: number; 
  public get adminDist() {
    return this.getNumberAttribute('admin_dist');
  }
  public set adminDist(value: number) {
    this._adminDist = value;
  }
  public resetAdminDist() {
    this._adminDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistInput() {
    return this._adminDist;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfRoutingTableIpStaticRouteBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfRoutingTableIpStaticRouteBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
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
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new LogicalRouterVrfRoutingTableIpStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // path_monitor - computed: false, optional: true, required: false
  private _pathMonitor = new LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor) {
    this._pathMonitor.internalValue = value;
  }
  public resetPathMonitor() {
    this._pathMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMonitorInput() {
    return this._pathMonitor.internalValue;
  }

  // route_table - computed: false, optional: true, required: false
  private _routeTable = new LogicalRouterVrfRoutingTableIpStaticRouteRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
  public putRouteTable(value: LogicalRouterVrfRoutingTableIpStaticRouteRouteTable) {
    this._routeTable.internalValue = value;
  }
  public resetRouteTable() {
    this._routeTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableInput() {
    return this._routeTable.internalValue;
  }
}

export class LogicalRouterVrfRoutingTableIpStaticRouteList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRoutingTableIpStaticRouteOutputReference {
    return new LogicalRouterVrfRoutingTableIpStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRoutingTableIp {
  /**
  * Static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#static_route LogicalRouter#static_route}
  */
  readonly staticRoute?: LogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable;
}

export function logicalRouterVrfRoutingTableIpToTerraform(struct?: LogicalRouterVrfRoutingTableIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route: cdktf.listMapper(logicalRouterVrfRoutingTableIpStaticRouteToTerraform, false)(struct!.staticRoute),
  }
}


export function logicalRouterVrfRoutingTableIpToHclTerraform(struct?: LogicalRouterVrfRoutingTableIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route: {
      value: cdktf.listMapperHcl(logicalRouterVrfRoutingTableIpStaticRouteToHclTerraform, false)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = value.staticRoute;
    }
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new LogicalRouterVrfRoutingTableIpStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: LogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteBfd {
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteBfdToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteBfdToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable): any {
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

export class LogicalRouterVrfRoutingTableIpv6StaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable | undefined) {
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

  // profile - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard {
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive {
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop {
  /**
  * Discard
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#discard LogicalRouter#discard}
  */
  readonly discard?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard;
  /**
  * Fqdn
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#fqdn LogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Ipv6 address
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ipv6_address LogicalRouter#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Next lr
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#next_lr LogicalRouter#next_lr}
  */
  readonly nextLr?: string;
  /**
  * Next vr
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#next_vr LogicalRouter#next_vr}
  */
  readonly nextVr?: string;
  /**
  * Receive
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#receive LogicalRouter#receive}
  */
  readonly receive?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive;
  /**
  * Tunnel
  * 
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `fqdn`, `ipv6_address`, `next_lr`, `next_vr`, `receive`, and `tunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#tunnel LogicalRouter#tunnel}
  */
  readonly tunnel?: string;
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToTerraform(struct!.discard),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    next_lr: cdktf.stringToTerraform(struct!.nextLr),
    next_vr: cdktf.stringToTerraform(struct!.nextVr),
    receive: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveToTerraform(struct!.receive),
    tunnel: cdktf.stringToTerraform(struct!.tunnel),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_lr: {
      value: cdktf.stringToHclTerraform(struct!.nextLr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_vr: {
      value: cdktf.stringToHclTerraform(struct!.nextVr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receive: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveToHclTerraform(struct!.receive),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive",
    },
    tunnel: {
      value: cdktf.stringToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._nextLr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextLr = this._nextLr;
    }
    if (this._nextVr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextVr = this._nextVr;
    }
    if (this._receive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive?.internalValue;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard.internalValue = undefined;
      this._fqdn = undefined;
      this._ipv6Address = undefined;
      this._nextLr = undefined;
      this._nextVr = undefined;
      this._receive.internalValue = undefined;
      this._tunnel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard.internalValue = value.discard;
      this._fqdn = value.fqdn;
      this._ipv6Address = value.ipv6Address;
      this._nextLr = value.nextLr;
      this._nextVr = value.nextVr;
      this._receive.internalValue = value.receive;
      this._tunnel = value.tunnel;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard = new LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard) {
    this._discard.internalValue = value;
  }
  public resetDiscard() {
    this._discard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard.internalValue;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // next_lr - computed: false, optional: true, required: false
  private _nextLr?: string; 
  public get nextLr() {
    return this.getStringAttribute('next_lr');
  }
  public set nextLr(value: string) {
    this._nextLr = value;
  }
  public resetNextLr() {
    this._nextLr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextLrInput() {
    return this._nextLr;
  }

  // next_vr - computed: false, optional: true, required: false
  private _nextVr?: string; 
  public get nextVr() {
    return this.getStringAttribute('next_vr');
  }
  public set nextVr(value: string) {
    this._nextVr = value;
  }
  public resetNextVr() {
    this._nextVr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextVrInput() {
    return this._nextVr;
  }

  // receive - computed: false, optional: true, required: false
  private _receive = new LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }
  public putReceive(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive) {
    this._receive.internalValue = value;
  }
  public resetReceive() {
    this._receive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive.internalValue;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: string; 
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
  public set tunnel(value: string) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive {
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteOption {
  /**
  * Passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#passive LogicalRouter#passive}
  */
  readonly passive?: LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive;
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteOptionToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passive: logicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveToTerraform(struct!.passive),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteOptionToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passive: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveToHclTerraform(struct!.passive),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passive.internalValue = value.passive;
    }
  }

  // passive - computed: false, optional: true, required: false
  private _passive = new LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
  public putPassive(value: LogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive) {
    this._passive.internalValue = value;
  }
  public resetPassive() {
    this._passive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations {
  /**
  * Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#count LogicalRouter#count}
  */
  readonly count?: number;
  /**
  * Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Destination fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#destination_fqdn LogicalRouter#destination_fqdn}
  */
  readonly destinationFqdn?: string;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interval LogicalRouter#interval}
  */
  readonly interval?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#source LogicalRouter#source}
  */
  readonly source?: string;
}

export function logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_fqdn: cdktf.stringToTerraform(struct!.destinationFqdn),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.destinationFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFqdn = this._destinationFqdn;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._destination = undefined;
      this._destinationFqdn = undefined;
      this._enable = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._destination = value.destination;
      this._destinationFqdn = value.destinationFqdn;
      this._enable = value.enable;
      this._interval = value.interval;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_fqdn - computed: false, optional: true, required: false
  private _destinationFqdn?: string; 
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }
  public set destinationFqdn(value: string) {
    this._destinationFqdn = value;
  }
  public resetDestinationFqdn() {
    this._destinationFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFqdnInput() {
    return this._destinationFqdn;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#failure_condition LogicalRouter#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * Hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#hold_time LogicalRouter#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Monitor destinations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#monitor_destinations LogicalRouter#monitor_destinations}
  */
  readonly monitorDestinations?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable): any {
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
    failure_condition: {
      value: cdktf.stringToHclTerraform(struct!.failureCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_destinations: {
      value: cdktf.listMapperHcl(logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._failureCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCondition = this._failureCondition;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._monitorDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDestinations = this._monitorDestinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._failureCondition = undefined;
      this._holdTime = undefined;
      this._monitorDestinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._failureCondition = value.failureCondition;
      this._holdTime = value.holdTime;
      this._monitorDestinations.internalValue = value.monitorDestinations;
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

  // failure_condition - computed: false, optional: true, required: false
  private _failureCondition?: string; 
  public get failureCondition() {
    return this.getStringAttribute('failure_condition');
  }
  public set failureCondition(value: string) {
    this._failureCondition = value;
  }
  public resetFailureCondition() {
    this._failureCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionInput() {
    return this._failureCondition;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // monitor_destinations - computed: false, optional: true, required: false
  private _monitorDestinations = new LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable) {
    this._monitorDestinations.internalValue = value;
  }
  public resetMonitorDestinations() {
    this._monitorDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDestinationsInput() {
    return this._monitorDestinations.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth {
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast {
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall {
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast {
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable {
  /**
  * Both
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#both LogicalRouter#both}
  */
  readonly both?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth;
  /**
  * Multicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#multicast LogicalRouter#multicast}
  */
  readonly multicast?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast;
  /**
  * No install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#no_install LogicalRouter#no_install}
  */
  readonly noInstall?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall;
  /**
  * Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#unicast LogicalRouter#unicast}
  */
  readonly unicast?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast;
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    both: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothToTerraform(struct!.both),
    multicast: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastToTerraform(struct!.multicast),
    no_install: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallToTerraform(struct!.noInstall),
    unicast: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastToTerraform(struct!.unicast),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    both: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth",
    },
    multicast: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast",
    },
    no_install: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallToHclTerraform(struct!.noInstall),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall",
    },
    unicast: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._both?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.both = this._both?.internalValue;
    }
    if (this._multicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast?.internalValue;
    }
    if (this._noInstall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInstall = this._noInstall?.internalValue;
    }
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._both.internalValue = undefined;
      this._multicast.internalValue = undefined;
      this._noInstall.internalValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._both.internalValue = value.both;
      this._multicast.internalValue = value.multicast;
      this._noInstall.internalValue = value.noInstall;
      this._unicast.internalValue = value.unicast;
    }
  }

  // both - computed: false, optional: true, required: false
  private _both = new LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast = new LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // no_install - computed: false, optional: true, required: false
  private _noInstall = new LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }
  public putNoInstall(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall) {
    this._noInstall.internalValue = value;
  }
  public resetNoInstall() {
    this._noInstall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInstallInput() {
    return this._noInstall.internalValue;
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast = new LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRoute {
  /**
  * Admin dist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#admin_dist LogicalRouter#admin_dist}
  */
  readonly adminDist?: number;
  /**
  * Bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd;
  /**
  * Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#nexthop LogicalRouter#nexthop}
  */
  readonly nexthop?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop;
  /**
  * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#option LogicalRouter#option}
  */
  readonly option?: LogicalRouterVrfRoutingTableIpv6StaticRouteOption;
  /**
  * Path monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#path_monitor LogicalRouter#path_monitor}
  */
  readonly pathMonitor?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor;
  /**
  * Route table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#route_table LogicalRouter#route_table}
  */
  readonly routeTable?: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable;
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_dist: cdktf.numberToTerraform(struct!.adminDist),
    bfd: logicalRouterVrfRoutingTableIpv6StaticRouteBfdToTerraform(struct!.bfd),
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopToTerraform(struct!.nexthop),
    option: logicalRouterVrfRoutingTableIpv6StaticRouteOptionToTerraform(struct!.option),
    path_monitor: logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToTerraform(struct!.pathMonitor),
    route_table: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableToTerraform(struct!.routeTable),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_dist: {
      value: cdktf.numberToHclTerraform(struct!.adminDist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteBfd",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    nexthop: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop",
    },
    option: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteOptionToHclTerraform(struct!.option),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteOption",
    },
    path_monitor: {
      value: logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToHclTerraform(struct!.pathMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor",
    },
    route_table: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteRouteTableToHclTerraform(struct!.routeTable),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminDist !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminDist = this._adminDist;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._option?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option?.internalValue;
    }
    if (this._pathMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMonitor = this._pathMonitor?.internalValue;
    }
    if (this._routeTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTable = this._routeTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminDist = undefined;
      this._bfd.internalValue = undefined;
      this._destination = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._nexthop.internalValue = undefined;
      this._option.internalValue = undefined;
      this._pathMonitor.internalValue = undefined;
      this._routeTable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminDist = value.adminDist;
      this._bfd.internalValue = value.bfd;
      this._destination = value.destination;
      this._interface = value.interface;
      this._metric = value.metric;
      this._name = value.name;
      this._nexthop.internalValue = value.nexthop;
      this._option.internalValue = value.option;
      this._pathMonitor.internalValue = value.pathMonitor;
      this._routeTable.internalValue = value.routeTable;
    }
  }

  // admin_dist - computed: false, optional: true, required: false
  private _adminDist?: number; 
  public get adminDist() {
    return this.getNumberAttribute('admin_dist');
  }
  public set adminDist(value: number) {
    this._adminDist = value;
  }
  public resetAdminDist() {
    this._adminDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistInput() {
    return this._adminDist;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfRoutingTableIpv6StaticRouteBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
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
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // option - computed: false, optional: true, required: false
  private _option = new LogicalRouterVrfRoutingTableIpv6StaticRouteOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }
  public putOption(value: LogicalRouterVrfRoutingTableIpv6StaticRouteOption) {
    this._option.internalValue = value;
  }
  public resetOption() {
    this._option.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }

  // path_monitor - computed: false, optional: true, required: false
  private _pathMonitor = new LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor) {
    this._pathMonitor.internalValue = value;
  }
  public resetPathMonitor() {
    this._pathMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMonitorInput() {
    return this._pathMonitor.internalValue;
  }

  // route_table - computed: false, optional: true, required: false
  private _routeTable = new LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
  public putRouteTable(value: LogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable) {
    this._routeTable.internalValue = value;
  }
  public resetRouteTable() {
    this._routeTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableInput() {
    return this._routeTable.internalValue;
  }
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference {
    return new LogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRoutingTableIpv6 {
  /**
  * Static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#static_route LogicalRouter#static_route}
  */
  readonly staticRoute?: LogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable;
}

export function logicalRouterVrfRoutingTableIpv6ToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route: cdktf.listMapper(logicalRouterVrfRoutingTableIpv6StaticRouteToTerraform, false)(struct!.staticRoute),
  }
}


export function logicalRouterVrfRoutingTableIpv6ToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route: {
      value: cdktf.listMapperHcl(logicalRouterVrfRoutingTableIpv6StaticRouteToHclTerraform, false)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = value.staticRoute;
    }
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new LogicalRouterVrfRoutingTableIpv6StaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: LogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTable {
  /**
  * Ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ip LogicalRouter#ip}
  */
  readonly ip?: LogicalRouterVrfRoutingTableIp;
  /**
  * Ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: LogicalRouterVrfRoutingTableIpv6;
}

export function logicalRouterVrfRoutingTableToTerraform(struct?: LogicalRouterVrfRoutingTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: logicalRouterVrfRoutingTableIpToTerraform(struct!.ip),
    ipv6: logicalRouterVrfRoutingTableIpv6ToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfRoutingTableToHclTerraform(struct?: LogicalRouterVrfRoutingTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: logicalRouterVrfRoutingTableIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIp",
    },
    ipv6: {
      value: logicalRouterVrfRoutingTableIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip.internalValue = value.ip;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new LogicalRouterVrfRoutingTableIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: LogicalRouterVrfRoutingTableIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new LogicalRouterVrfRoutingTableIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: LogicalRouterVrfRoutingTableIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface LogicalRouterVrfVrAdminDists {
  /**
  * Ebgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ebgp LogicalRouter#ebgp}
  */
  readonly ebgp?: number;
  /**
  * Ibgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ibgp LogicalRouter#ibgp}
  */
  readonly ibgp?: number;
  /**
  * Ospf ext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ospf_ext LogicalRouter#ospf_ext}
  */
  readonly ospfExt?: number;
  /**
  * Ospf int
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ospf_int LogicalRouter#ospf_int}
  */
  readonly ospfInt?: number;
  /**
  * Ospfv3 ext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ospfv3_ext LogicalRouter#ospfv3_ext}
  */
  readonly ospfv3Ext?: number;
  /**
  * Ospfv3 int
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ospfv3_int LogicalRouter#ospfv3_int}
  */
  readonly ospfv3Int?: number;
  /**
  * Rip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#rip LogicalRouter#rip}
  */
  readonly rip?: number;
  /**
  * Static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#static LogicalRouter#static}
  */
  readonly static?: number;
  /**
  * Static ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#static_ipv6 LogicalRouter#static_ipv6}
  */
  readonly staticIpv6?: number;
}

export function logicalRouterVrfVrAdminDistsToTerraform(struct?: LogicalRouterVrfVrAdminDists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebgp: cdktf.numberToTerraform(struct!.ebgp),
    ibgp: cdktf.numberToTerraform(struct!.ibgp),
    ospf_ext: cdktf.numberToTerraform(struct!.ospfExt),
    ospf_int: cdktf.numberToTerraform(struct!.ospfInt),
    ospfv3_ext: cdktf.numberToTerraform(struct!.ospfv3Ext),
    ospfv3_int: cdktf.numberToTerraform(struct!.ospfv3Int),
    rip: cdktf.numberToTerraform(struct!.rip),
    static: cdktf.numberToTerraform(struct!.static),
    static_ipv6: cdktf.numberToTerraform(struct!.staticIpv6),
  }
}


export function logicalRouterVrfVrAdminDistsToHclTerraform(struct?: LogicalRouterVrfVrAdminDists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebgp: {
      value: cdktf.numberToHclTerraform(struct!.ebgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibgp: {
      value: cdktf.numberToHclTerraform(struct!.ibgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospf_ext: {
      value: cdktf.numberToHclTerraform(struct!.ospfExt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospf_int: {
      value: cdktf.numberToHclTerraform(struct!.ospfInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfv3_ext: {
      value: cdktf.numberToHclTerraform(struct!.ospfv3Ext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfv3_int: {
      value: cdktf.numberToHclTerraform(struct!.ospfv3Int),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfVrAdminDistsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfVrAdminDists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgp = this._ebgp;
    }
    if (this._ibgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibgp = this._ibgp;
    }
    if (this._ospfExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfExt = this._ospfExt;
    }
    if (this._ospfInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfInt = this._ospfInt;
    }
    if (this._ospfv3Ext !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3Ext = this._ospfv3Ext;
    }
    if (this._ospfv3Int !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3Int = this._ospfv3Int;
    }
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._staticIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6 = this._staticIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfVrAdminDists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebgp = undefined;
      this._ibgp = undefined;
      this._ospfExt = undefined;
      this._ospfInt = undefined;
      this._ospfv3Ext = undefined;
      this._ospfv3Int = undefined;
      this._rip = undefined;
      this._static = undefined;
      this._staticIpv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebgp = value.ebgp;
      this._ibgp = value.ibgp;
      this._ospfExt = value.ospfExt;
      this._ospfInt = value.ospfInt;
      this._ospfv3Ext = value.ospfv3Ext;
      this._ospfv3Int = value.ospfv3Int;
      this._rip = value.rip;
      this._static = value.static;
      this._staticIpv6 = value.staticIpv6;
    }
  }

  // ebgp - computed: false, optional: true, required: false
  private _ebgp?: number; 
  public get ebgp() {
    return this.getNumberAttribute('ebgp');
  }
  public set ebgp(value: number) {
    this._ebgp = value;
  }
  public resetEbgp() {
    this._ebgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpInput() {
    return this._ebgp;
  }

  // ibgp - computed: false, optional: true, required: false
  private _ibgp?: number; 
  public get ibgp() {
    return this.getNumberAttribute('ibgp');
  }
  public set ibgp(value: number) {
    this._ibgp = value;
  }
  public resetIbgp() {
    this._ibgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpInput() {
    return this._ibgp;
  }

  // ospf_ext - computed: false, optional: true, required: false
  private _ospfExt?: number; 
  public get ospfExt() {
    return this.getNumberAttribute('ospf_ext');
  }
  public set ospfExt(value: number) {
    this._ospfExt = value;
  }
  public resetOspfExt() {
    this._ospfExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfExtInput() {
    return this._ospfExt;
  }

  // ospf_int - computed: false, optional: true, required: false
  private _ospfInt?: number; 
  public get ospfInt() {
    return this.getNumberAttribute('ospf_int');
  }
  public set ospfInt(value: number) {
    this._ospfInt = value;
  }
  public resetOspfInt() {
    this._ospfInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfIntInput() {
    return this._ospfInt;
  }

  // ospfv3_ext - computed: false, optional: true, required: false
  private _ospfv3Ext?: number; 
  public get ospfv3Ext() {
    return this.getNumberAttribute('ospfv3_ext');
  }
  public set ospfv3Ext(value: number) {
    this._ospfv3Ext = value;
  }
  public resetOspfv3Ext() {
    this._ospfv3Ext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3ExtInput() {
    return this._ospfv3Ext;
  }

  // ospfv3_int - computed: false, optional: true, required: false
  private _ospfv3Int?: number; 
  public get ospfv3Int() {
    return this.getNumberAttribute('ospfv3_int');
  }
  public set ospfv3Int(value: number) {
    this._ospfv3Int = value;
  }
  public resetOspfv3Int() {
    this._ospfv3Int = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3IntInput() {
    return this._ospfv3Int;
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // static_ipv6 - computed: false, optional: true, required: false
  private _staticIpv6?: number; 
  public get staticIpv6() {
    return this.getNumberAttribute('static_ipv6');
  }
  public set staticIpv6(value: number) {
    this._staticIpv6 = value;
  }
  public resetStaticIpv6() {
    this._staticIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6Input() {
    return this._staticIpv6;
  }
}
export interface LogicalRouterVrf {
  /**
  * Admin dists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#admin_dists LogicalRouter#admin_dists}
  */
  readonly adminDists?: LogicalRouterVrfAdminDists;
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#bgp LogicalRouter#bgp}
  */
  readonly bgp?: LogicalRouterVrfBgp;
  /**
  * Ecmp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ecmp LogicalRouter#ecmp}
  */
  readonly ecmp?: LogicalRouterVrfEcmp;
  /**
  * Global vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#global_vrid LogicalRouter#global_vrid}
  */
  readonly globalVrid?: number;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string[];
  /**
  * Multicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#multicast LogicalRouter#multicast}
  */
  readonly multicast?: LogicalRouterVrfMulticast;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Ospf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ospf LogicalRouter#ospf}
  */
  readonly ospf?: LogicalRouterVrfOspf;
  /**
  * Ospfv3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#ospfv3 LogicalRouter#ospfv3}
  */
  readonly ospfv3?: LogicalRouterVrfOspfv3;
  /**
  * Rib filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#rib_filter LogicalRouter#rib_filter}
  */
  readonly ribFilter?: LogicalRouterVrfRibFilter;
  /**
  * Rip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#rip LogicalRouter#rip}
  */
  readonly rip?: LogicalRouterVrfRip;
  /**
  * Routing table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#routing_table LogicalRouter#routing_table}
  */
  readonly routingTable?: LogicalRouterVrfRoutingTable;
  /**
  * Sdwan type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#sdwan_type LogicalRouter#sdwan_type}
  */
  readonly sdwanType?: string;
  /**
  * Vr admin dists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#vr_admin_dists LogicalRouter#vr_admin_dists}
  */
  readonly vrAdminDists?: LogicalRouterVrfVrAdminDists;
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/logical_router#zone_name LogicalRouter#zone_name}
  */
  readonly zoneName?: string;
}

export function logicalRouterVrfToTerraform(struct?: LogicalRouterVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_dists: logicalRouterVrfAdminDistsToTerraform(struct!.adminDists),
    bgp: logicalRouterVrfBgpToTerraform(struct!.bgp),
    ecmp: logicalRouterVrfEcmpToTerraform(struct!.ecmp),
    global_vrid: cdktf.numberToTerraform(struct!.globalVrid),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    multicast: logicalRouterVrfMulticastToTerraform(struct!.multicast),
    name: cdktf.stringToTerraform(struct!.name),
    ospf: logicalRouterVrfOspfToTerraform(struct!.ospf),
    ospfv3: logicalRouterVrfOspfv3ToTerraform(struct!.ospfv3),
    rib_filter: logicalRouterVrfRibFilterToTerraform(struct!.ribFilter),
    rip: logicalRouterVrfRipToTerraform(struct!.rip),
    routing_table: logicalRouterVrfRoutingTableToTerraform(struct!.routingTable),
    sdwan_type: cdktf.stringToTerraform(struct!.sdwanType),
    vr_admin_dists: logicalRouterVrfVrAdminDistsToTerraform(struct!.vrAdminDists),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function logicalRouterVrfToHclTerraform(struct?: LogicalRouterVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_dists: {
      value: logicalRouterVrfAdminDistsToHclTerraform(struct!.adminDists),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfAdminDists",
    },
    bgp: {
      value: logicalRouterVrfBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgp",
    },
    ecmp: {
      value: logicalRouterVrfEcmpToHclTerraform(struct!.ecmp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfEcmp",
    },
    global_vrid: {
      value: cdktf.numberToHclTerraform(struct!.globalVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multicast: {
      value: logicalRouterVrfMulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticast",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf: {
      value: logicalRouterVrfOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspf",
    },
    ospfv3: {
      value: logicalRouterVrfOspfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3",
    },
    rib_filter: {
      value: logicalRouterVrfRibFilterToHclTerraform(struct!.ribFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilter",
    },
    rip: {
      value: logicalRouterVrfRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRip",
    },
    routing_table: {
      value: logicalRouterVrfRoutingTableToHclTerraform(struct!.routingTable),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTable",
    },
    sdwan_type: {
      value: cdktf.stringToHclTerraform(struct!.sdwanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vr_admin_dists: {
      value: logicalRouterVrfVrAdminDistsToHclTerraform(struct!.vrAdminDists),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfVrAdminDists",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminDists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminDists = this._adminDists?.internalValue;
    }
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._ecmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmp = this._ecmp?.internalValue;
    }
    if (this._globalVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVrid = this._globalVrid;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._multicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._ospfv3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3 = this._ospfv3?.internalValue;
    }
    if (this._ribFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ribFilter = this._ribFilter?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._routingTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingTable = this._routingTable?.internalValue;
    }
    if (this._sdwanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanType = this._sdwanType;
    }
    if (this._vrAdminDists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrAdminDists = this._vrAdminDists?.internalValue;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminDists.internalValue = undefined;
      this._bgp.internalValue = undefined;
      this._ecmp.internalValue = undefined;
      this._globalVrid = undefined;
      this._interface = undefined;
      this._multicast.internalValue = undefined;
      this._name = undefined;
      this._ospf.internalValue = undefined;
      this._ospfv3.internalValue = undefined;
      this._ribFilter.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._routingTable.internalValue = undefined;
      this._sdwanType = undefined;
      this._vrAdminDists.internalValue = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminDists.internalValue = value.adminDists;
      this._bgp.internalValue = value.bgp;
      this._ecmp.internalValue = value.ecmp;
      this._globalVrid = value.globalVrid;
      this._interface = value.interface;
      this._multicast.internalValue = value.multicast;
      this._name = value.name;
      this._ospf.internalValue = value.ospf;
      this._ospfv3.internalValue = value.ospfv3;
      this._ribFilter.internalValue = value.ribFilter;
      this._rip.internalValue = value.rip;
      this._routingTable.internalValue = value.routingTable;
      this._sdwanType = value.sdwanType;
      this._vrAdminDists.internalValue = value.vrAdminDists;
      this._zoneName = value.zoneName;
    }
  }

  // admin_dists - computed: false, optional: true, required: false
  private _adminDists = new LogicalRouterVrfAdminDistsOutputReference(this, "admin_dists");
  public get adminDists() {
    return this._adminDists;
  }
  public putAdminDists(value: LogicalRouterVrfAdminDists) {
    this._adminDists.internalValue = value;
  }
  public resetAdminDists() {
    this._adminDists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistsInput() {
    return this._adminDists.internalValue;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new LogicalRouterVrfBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: LogicalRouterVrfBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ecmp - computed: false, optional: true, required: false
  private _ecmp = new LogicalRouterVrfEcmpOutputReference(this, "ecmp");
  public get ecmp() {
    return this._ecmp;
  }
  public putEcmp(value: LogicalRouterVrfEcmp) {
    this._ecmp.internalValue = value;
  }
  public resetEcmp() {
    this._ecmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpInput() {
    return this._ecmp.internalValue;
  }

  // global_vrid - computed: false, optional: true, required: false
  private _globalVrid?: number; 
  public get globalVrid() {
    return this.getNumberAttribute('global_vrid');
  }
  public set globalVrid(value: number) {
    this._globalVrid = value;
  }
  public resetGlobalVrid() {
    this._globalVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVridInput() {
    return this._globalVrid;
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

  // multicast - computed: false, optional: true, required: false
  private _multicast = new LogicalRouterVrfMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: LogicalRouterVrfMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
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

  // ospf - computed: false, optional: true, required: false
  private _ospf = new LogicalRouterVrfOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: LogicalRouterVrfOspf) {
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
  private _ospfv3 = new LogicalRouterVrfOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: LogicalRouterVrfOspfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // rib_filter - computed: false, optional: true, required: false
  private _ribFilter = new LogicalRouterVrfRibFilterOutputReference(this, "rib_filter");
  public get ribFilter() {
    return this._ribFilter;
  }
  public putRibFilter(value: LogicalRouterVrfRibFilter) {
    this._ribFilter.internalValue = value;
  }
  public resetRibFilter() {
    this._ribFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribFilterInput() {
    return this._ribFilter.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new LogicalRouterVrfRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: LogicalRouterVrfRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // routing_table - computed: false, optional: true, required: false
  private _routingTable = new LogicalRouterVrfRoutingTableOutputReference(this, "routing_table");
  public get routingTable() {
    return this._routingTable;
  }
  public putRoutingTable(value: LogicalRouterVrfRoutingTable) {
    this._routingTable.internalValue = value;
  }
  public resetRoutingTable() {
    this._routingTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableInput() {
    return this._routingTable.internalValue;
  }

  // sdwan_type - computed: false, optional: true, required: false
  private _sdwanType?: string; 
  public get sdwanType() {
    return this.getStringAttribute('sdwan_type');
  }
  public set sdwanType(value: string) {
    this._sdwanType = value;
  }
  public resetSdwanType() {
    this._sdwanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanTypeInput() {
    return this._sdwanType;
  }

  // vr_admin_dists - computed: false, optional: true, required: false
  private _vrAdminDists = new LogicalRouterVrfVrAdminDistsOutputReference(this, "vr_admin_dists");
  public get vrAdminDists() {
    return this._vrAdminDists;
  }
  public putVrAdminDists(value: LogicalRouterVrfVrAdminDists) {
    this._vrAdminDists.internalValue = value;
  }
  public resetVrAdminDists() {
    this._vrAdminDists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrAdminDistsInput() {
    return this._vrAdminDists.internalValue;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class LogicalRouterVrfList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrf[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOutputReference {
    return new LogicalRouterVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
